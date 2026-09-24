#!/usr/bin/env node
/**
 * Monthly New Jersey Sheriff Sale Report: data collector.
 *
 * Reads each county's PUBLIC sheriff sale listing on CivilView
 * (salesweb.civilview.com), aggregates it in memory, and writes
 *   data/sheriff-report/YYYY-MM.json   (the month's snapshot)
 *   data/sheriff-report/latest.json    (same content; the page imports this)
 *
 * PRIVACY RULE — AGGREGATES ONLY. Rows are parsed in memory and discarded.
 * The output never contains a defendant name, a street address, a sheriff
 * number, a court docket number or a property id. Allowed outputs: counts
 * per county, counts per town (town + county only, small cells suppressed),
 * sale-date distributions, and counts for INSTITUTIONAL plaintiffs only
 * (banks, servicers, trustees). Individuals and anything unclear are
 * counted under "Other / individual plaintiffs" and never named.
 *
 * Politeness: sequential requests only, a descriptive User-Agent, a pause
 * between every request and a longer one between counties, one retry.
 *
 * Usage:  node scripts/sheriff-report/collect.mjs [--no-details] [--month=YYYY-MM] [--only=hunterdon-county,...]
 * No dependencies beyond Node 18+ (global fetch).
 */

import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..', '..');
const BASE = 'https://salesweb.civilview.com';
const UA = 'njforeclosureguide.org monthly public-data report (+https://njforeclosureguide.org/reports/nj-sheriff-sales/)';

const args = process.argv.slice(2);
const flag = (name) => args.find((a) => a === `--${name}` || a.startsWith(`--${name}=`));
const flagVal = (name) => flag(name)?.split('=')[1];
const SAMPLE_DETAILS = !flag('no-details');
const DETAIL_SAMPLE_PER_COUNTY = 15;
const ONLY = flagVal('only')?.split(',');

const DELAY_REQUEST_MS = 700; // between any two requests to the same county
const DELAY_COUNTY_MS = 2500; // between counties
const RETRY_WAIT_MS = 4000;
const TOWN_MIN_CELL = 3; // suppress town counts below this

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
const log = (...a) => console.error(...a);

// ---------------------------------------------------------------------------
// County list, read from lib/sheriff-sales.ts (single source of truth).
// ---------------------------------------------------------------------------
function loadSources() {
  const src = readFileSync(join(ROOT, 'lib', 'sheriff-sales.ts'), 'utf8');
  const out = [];
  const re = /\{\s*slug:\s*'([^']+)',\s*county:\s*'([^']+)',[\s\S]*?salesUrl:\s*'([^']+)',\s*usesCivilView:\s*(true|false)/g;
  let m;
  while ((m = re.exec(src))) {
    out.push({ slug: m[1], name: m[2], salesUrl: m[3], usesCivilView: m[4] === 'true' });
  }
  if (out.length !== 21) throw new Error(`Expected 21 counties in lib/sheriff-sales.ts, parsed ${out.length}`);
  return out;
}

// ---------------------------------------------------------------------------
// HTTP with a tiny per-county cookie jar (CivilView keeps the county in the
// ASP.NET session, so the Sold/Cancelled POST must carry the session cookie).
// ---------------------------------------------------------------------------
class Session {
  constructor() {
    this.cookies = new Map();
  }
  header() {
    return [...this.cookies].map(([k, v]) => `${k}=${v}`).join('; ');
  }
  absorb(res) {
    const set = typeof res.headers.getSetCookie === 'function' ? res.headers.getSetCookie() : [];
    for (const c of set) {
      const [pair] = c.split(';');
      const i = pair.indexOf('=');
      if (i > 0) this.cookies.set(pair.slice(0, i).trim(), pair.slice(i + 1).trim());
    }
  }
  async request(url, { method = 'GET', body } = {}) {
    let lastErr;
    for (let attempt = 0; attempt < 2; attempt++) {
      if (attempt > 0) {
        log(`    retrying in ${RETRY_WAIT_MS}ms: ${lastErr?.message}`);
        await sleep(RETRY_WAIT_MS);
      }
      try {
        const headers = { 'User-Agent': UA, Accept: 'text/html' };
        const cookie = this.header();
        if (cookie) headers.Cookie = cookie;
        if (body) headers['Content-Type'] = 'application/x-www-form-urlencoded';
        const res = await fetch(url, { method, headers, body, redirect: 'follow', signal: AbortSignal.timeout(60000) });
        this.absorb(res);
        if (!res.ok) throw new Error(`HTTP ${res.status} for ${url}`);
        return await res.text();
      } catch (e) {
        lastErr = e;
      }
    }
    throw lastErr;
  }
}

// ---------------------------------------------------------------------------
// Parsing
// ---------------------------------------------------------------------------
const decode = (s) =>
  s
    .replace(/<[^>]*>/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/&#39;|&#x27;/g, "'")
    .replace(/&quot;/g, '"')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&nbsp;/g, ' ')
    .replace(/&colon;/g, ':')
    .replace(/&#(\d+);/g, (_, n) => String.fromCharCode(Number(n)))
    .replace(/\s+/g, ' ')
    .trim();

function parseListing(html) {
  const h1 = html.match(/<h1>([\s\S]*?)<\/h1>/i)?.[1] ?? '';
  const lastUpdated = decode(h1).match(/last updated:\s*([^)]+)\)/i)?.[1]?.trim() ?? null;
  const h1Text = decode(h1);
  const resultCount = Number(html.match(/\((\d+) search results\)/i)?.[1] ?? NaN);

  const tableStart = html.search(/<table class="table table-striped\s*">/i);
  const rows = [];
  if (tableStart >= 0) {
    const table = html.slice(tableStart, html.indexOf('</table>', tableStart));
    const headers = [...table.matchAll(/<th[^>]*>([\s\S]*?)<\/th>/gi)].map((m) => decode(m[1]));
    const colNames = headers.filter((h) => h !== '');
    for (const tr of table.split(/<tr>/i).slice(2)) {
      const link = tr.match(/SaleDetails\?PropertyId=(\d+)/)?.[1] ?? null;
      const tds = [...tr.matchAll(/<td(?![^>]*hidden-print)[^>]*>([\s\S]*?)<\/td>/gi)].map((m) => decode(m[1]));
      if (tds.length === 0) continue;
      const row = { propertyId: link };
      colNames.forEach((h, i) => {
        row[h] = tds[i] ?? '';
      });
      rows.push(row);
    }
  }

  const citySelect = html.match(/<select[^>]*id="CityDesc"[^>]*>([\s\S]*?)<\/select>/i)?.[1] ?? '';
  const cities = [...citySelect.matchAll(/<option value="([^"]+)"/g)].map((m) => decode(m[1]).toUpperCase()).filter(Boolean);

  return { h1Text, lastUpdated, resultCount, rows, cities };
}

function parseStatusHistory(html) {
  const i = html.search(/Status History/i);
  if (i < 0) return null;
  const table = html.slice(i, html.indexOf('</table>', i));
  const statuses = [...table.matchAll(/<tr>\s*<td>([\s\S]*?)<\/td>/gi)].map((m) => decode(m[1]));
  return statuses; // [] = history shown but empty (never adjourned)
}

// M/D/YYYY -> Date at UTC midnight (dates only; no time zone games)
function parseDate(s) {
  const m = String(s ?? '').match(/(\d{1,2})\/(\d{1,2})\/(\d{4})/);
  if (!m) return null;
  return new Date(Date.UTC(Number(m[3]), Number(m[1]) - 1, Number(m[2])));
}
const iso = (d) => d.toISOString().slice(0, 10);
// Most counties label the column "Sales Date"; Morris labels it "Status Date".
const rowDate = (r) => parseDate(r['Sales Date'] ?? r['Status Date'] ?? Object.entries(r).find(([k]) => /date/i.test(k))?.[1]);

// A few counties (Gloucester, Middlesex, Monmouth in 2026) show a Status
// column in the Open view, and Middlesex keeps already-purchased, redeemed
// and cancelled properties there until the deed issues. Those are not
// scheduled sales, so they are set aside and reported separately.
const TERMINAL_STATUS_RE = /PURCHASED|\bSOLD\b|REDEEMED|CANCEL|REINSTATED|SETTLED|SATISFIED|VACATED|WITHDRAWN|PAID IN FULL|DISCHARGED|CLOSED/i;
const ADJOURN_RE = /ADJOURN|\bADJ\b/i;
const DAY = 86400000;

function todayNJ() {
  const parts = new Intl.DateTimeFormat('en-CA', { timeZone: 'America/New_York', year: 'numeric', month: '2-digit', day: '2-digit' }).format(new Date());
  return new Date(`${parts}T00:00:00Z`);
}

// ---------------------------------------------------------------------------
// Town from address: the text before a trailing "NJ [ZIP]", matched against
// the county's own City dropdown (longest suffix wins). Falls back to "".
// ---------------------------------------------------------------------------
function townFromAddress(address, cities) {
  const a = String(address).toUpperCase().replace(/[.,]/g, ' ').replace(/\s+/g, ' ').trim();
  const m = a.match(/^(.*?)\s+(?:NJ|N J|NEW JERSEY)(?:\s+\d{4,6}(?:-?\d{4})?)?\s*$/);
  const head = m ? m[1] : a;
  let best = '';
  for (const c of cities) {
    const cc = c.replace(/[.,]/g, ' ').replace(/\s+/g, ' ').trim();
    if (!cc) continue;
    if ((head === cc || head.endsWith(' ' + cc)) && cc.length > best.length) best = c;
  }
  return best;
}

function prettyTown(t) {
  return t
    .toLowerCase()
    .split(' ')
    .map((w) => {
      const W = w.toUpperCase();
      if (W === 'TWP' || W === 'TWSP') return 'Twp.';
      if (W === 'BORO') return 'Boro';
      if (/^(mc)(\w)/.test(w)) return 'Mc' + w[2].toUpperCase() + w.slice(3);
      return w.charAt(0).toUpperCase() + w.slice(1);
    })
    .join(' ')
    .replace(/\bOf\b/g, 'of');
}

// ---------------------------------------------------------------------------
// Plaintiff classification. Only institutional names are ever emitted, and
// only after normalization to a short parent name.
// ---------------------------------------------------------------------------
const TAX_MUNI_RE =
  /\bTAX\b|\bTAXES\b|TAX LIEN|\bCUST(ODIAN)?\b|\bTOWNSHIP OF\b|\bCITY OF\b|\bBOROUGH OF\b|\bTOWN OF\b|\bVILLAGE OF\b|\bCOUNTY OF\b|\bMUNICIPAL|REDEVELOPMENT AGENCY|HOUSING AUTHORITY|\bSEWERAGE AUTHORITY\b|\bUTILITIES AUTHORITY\b/;
const HOA_RE =
  /CONDOMI|\bCONDO\b|HOMEOWNERS|HOME OWNERS|OWNERS ASSOCIATION|OWNERS' ASSOCIATION|COMMUNITY ASSOCIATION|TOWNHOUSE|TOWNHOME|CO-?OWNERS|PROPERTY OWNERS|\bHOA\b|MAINTENANCE ASSOCIATION|CIVIC ASSOCIATION|VILLAGE ASSOCIATION|LAKE ASSOCIATION|COMMONS ASSOCIATION|ESTATES ASSOCIATION|COMMUNITY SERVICES/;
const INSTITUTION_RE =
  /\bBANK\b|\bBANCORP|\bTRUST\b|\bTRUSTEE\b|\bLLC\b|\bL\s?L\s?C\b|\bINC\b|\bCORP\b|\bCORPORATION\b|\bASSOCIATION\b|\bMORTGAGE\b|\bFUND\b|\bFUNDING\b|\bFINANCIAL\b|\bFINANCE\b|\bSERVICING\b|\bSERVICES\b|\bSAVINGS\b|\bCREDIT UNION\b|\bN\s?A\b|\bLP\b|\bL\s?P\b|\bCOMPANY\b|\bCO\b|\bFSB\b|\bF\s?S\s?B\b|\bSOCIETY\b|\bAGENCY\b|\bLENDING\b|\bLOANS?\b|\bCAPITAL\b|\bINVESTORS?\b|\bINVESTMENTS?\b|\bHOLDINGS?\b|\bPARTNERS\b|\bSECRETARY OF HOUSING\b|\bFEDERAL\b|\bFANNIE MAE\b|\bFREDDIE MAC\b|\bLTD\b|\bPLC\b|\bACQUISITION|\bREIT\b|\bASSETS?\b|\bVENTURES?\b|\bGROUP\b|\bSTATE OF NEW JERSEY\b|\bUNITED STATES\b/;

// Known parents, checked in order. [pattern, display, trusteeDisplay?]
const PARENTS = [
  [/\bU ?S BANK\b|\bUSBANK\b/, 'U.S. Bank', 'U.S. Bank (as trustee)'],
  [/WELLS FARGO/, 'Wells Fargo', 'Wells Fargo (as trustee)'],
  [/DEUTS?CHE? BANK|DEUTSHE BANK|DEUTSCH BANK/, 'Deutsche Bank', 'Deutsche Bank (as trustee)'],
  [/BANK OF NEW YORK|BNY MELLON|NEW YORK MELLON/, 'Bank of New York Mellon', 'Bank of New York Mellon (as trustee)'],
  [/WIL+I?MINGTON SAVINGS F/, 'Wilmington Savings Fund Society', 'Wilmington Savings Fund Society (as trustee)'],
  [/WILMINGTON TRUST/, 'Wilmington Trust', 'Wilmington Trust (as trustee)'],
  [/CHRISTIANA TRUST/, 'Christiana Trust', 'Christiana Trust (as trustee)'],
  [/COMPUTERSHARE/, 'Computershare Trust', 'Computershare Trust (as trustee)'],
  [/HSBC/, 'HSBC', 'HSBC (as trustee)'],
  [/CITIGROUP MORT/, 'Citigroup Mortgage Loan Trusts'],
  [/CITIBANK|CITIGROUP|CITI\s?MORTGAGE|CITIMORTGAGE/, 'Citibank', 'Citibank (as trustee)'],
  [/THE BANK OF NEW YORK/, 'Bank of New York Mellon', 'Bank of New York Mellon (as trustee)'],
  [/NATIONSTAR|MR\.? COOPER/, 'Nationstar Mortgage (Mr. Cooper)'],
  [/FREEDOM MORTGAGE/, 'Freedom Mortgage'],
  [/LAKEVIEW L/, 'Lakeview Loan Servicing'],
  [/PENNY\s?MAC/, 'PennyMac'],
  [/JP\s?MORGAN|J\.P\. MORGAN|CHASE (HOME|BANK|MANHATTAN)/, 'JPMorgan Chase'],
  [/BANK OF AMERICA/, 'Bank of America'],
  [/MIDFIRST|MIDFRIST/, 'MidFirst Bank'],
  [/LOAN\s?DEPOT/, 'loanDepot'],
  [/ROCKET MORTGAGE|QUICKEN LOANS/, 'Rocket Mortgage'],
  [/NEWREZ|NEW REZ|SHELLPOINT/, 'NewRez / Shellpoint'],
  [/CARRINGTON/, 'Carrington Mortgage Services'],
  [/SPECIALIZED LOAN SERVICING/, 'Specialized Loan Servicing'],
  [/SELENE FINANCE/, 'Selene Finance'],
  [/PHH MORTGAGE|OCWEN/, 'PHH Mortgage (Ocwen)'],
  [/MTGLQ/, 'MTGLQ Investors'],
  [/CITIZENS BANK/, 'Citizens Bank'],
  [/\bTD BANK/, 'TD Bank'],
  [/\bPNC\b/, 'PNC Bank'],
  [/\bM\s?&\s?T\b|MANUFACTURERS AND TRADERS/, 'M&T Bank'],
  [/VALLEY NATIONAL/, 'Valley National Bank'],
  [/PROVIDENT BANK/, 'Provident Bank'],
  [/HOUSING AND MORTGAGE FINANCE|NEW JERSEY HOUSING A|NJ HOUSING A|NJHMFA/, 'NJ Housing and Mortgage Finance Agency'],
  [/SECRETARY OF HOUSING|HOUSING AND URBAN DEVELOPMENT/, 'U.S. Dept. of Housing and Urban Development'],
  [/FEDERAL NATIONAL MORTGAGE|FANNIE MAE/, 'Fannie Mae'],
  [/FEDERAL HOME LOAN MO|FREDDIE MAC/, 'Freddie Mac'],
  [/UNITED WHOLESALE/, 'United Wholesale Mortgage'],
  [/GUILD MORTGAGE/, 'Guild Mortgage'],
  [/CROSSCOUNTRY MORTGAGE/, 'CrossCountry Mortgage'],
  [/ROUNDPOINT/, 'RoundPoint Mortgage Servicing'],
  [/CENLAR/, 'Cenlar'],
  [/LOANCARE/, 'LoanCare'],
  [/SANTANDER/, 'Santander Bank'],
  [/\bREGIONS\b/, 'Regions Bank'],
  [/TRUIST|SUNTRUST|BB&T/, 'Truist'],
  [/FIFTH THIRD/, 'Fifth Third Bank'],
  [/COLUMBIA BANK/, 'Columbia Bank'],
  [/LAKELAND BANK/, 'Lakeland Bank'],
  [/KEARNY BANK/, 'Kearny Bank'],
  [/INVESTORS BANK/, 'Investors Bank'],
  [/NEW JERSEY COMMUNITY CAPITAL/, 'New Jersey Community Capital'],
  [/REVERSE MORTGAGE FUNDING/, 'Reverse Mortgage Funding'],
  [/FINANCE OF AMERICA REVERSE/, 'Finance of America Reverse'],
  [/MORTGAGE ASSETS MANAGEMENT/, 'Mortgage Assets Management'],
  [/SELECT PORTFOLIO/, 'Select Portfolio Servicing'],
  [/SERVBANK/, 'Servbank'],
  [/CELINK/, 'Celink'],
  [/AMERIHOME/, 'AmeriHome Mortgage'],
  [/SILVER HILL/, 'Silver Hill Capital'],
  [/ATHENE/, 'Athene Annuity and Life'],
  [/METROPOLITAN LIFE/, 'MetLife'],
  [/PENTAGON FEDERAL|PENFED/, 'PenFed Credit Union'],
  [/UMB BANK/, 'UMB Bank', 'UMB Bank (as trustee)'],
  [/LOAN FUNDER LLC/, 'Loan Funder LLC (series)'],
  [/OCEANFIRST/, 'OceanFirst Bank'],
  [/HUNTINGTON NATIONAL/, 'Huntington National Bank'],
  [/FULTON BANK/, 'Fulton Bank'],
  [/SECRETARY OF VETERANS|VETERANS AFFAIRS/, 'U.S. Dept. of Veterans Affairs'],
  [/CSMC|CREDIT SUISSE/, 'Credit Suisse (CSMC) trusts'],
  [/GS MORTGAGE-BACKED|GOLDMAN SACHS/, 'Goldman Sachs (GS) trusts'],
  [/DITECH/, 'Ditech Financial'],
  [/VILLAGE CAPITAL/, 'Village Capital & Investment'],
  [/PLANET HOME LENDING/, 'Planet Home Lending'],
  [/SERVIS ONE|BSI FINANCIAL/, 'BSI Financial Services'],
  [/FAY SERVICING/, 'Fay Servicing'],
  [/1900 CAPITAL/, '1900 Capital Trust'],
  [/US ROF|RCF 2 ACQUISITION|RCAF ACQUISITION/, 'Rushmore-affiliated trusts'],
];

const TRUSTEE_RE = /\bTRUSTE|\bBANK TRUST\b|\bNATIONAL TRUST\b|\bTRUST COMPANY\b|\bTRUST NA|\bTRUST NAT/;

const titleCase = (s) =>
  s
    .toLowerCase()
    .replace(/\b([a-z])/g, (c) => c.toUpperCase())
    .replace(/\b(Llc|Lp|Na|N\.a\.|Fsb|Inc|Corp|Us|Nj|Ii|Iii|Iv|Hud|Reo)\b/g, (w) => w.toUpperCase())
    .replace(/\bOf\b/g, 'of')
    .replace(/\bAnd\b/g, 'and')
    .replace(/\bThe\b(?!^)/g, 'the')
    .replace(/^the\b/, 'The');

function genericParent(p) {
  // First plaintiff only, cut at the first role/qualifier clause.
  let s = p.split(/;|\bET AL\b|\bET\.? AL\.?/)[0];
  s = s.split(/\s(?:AS|IN ITS|NOT IN ITS|NOT INDIVIDUALLY|SOLELY|D\/B\/A|DBA|F\/K\/A|FKA|A\/K\/A|AKA|SUCCESSOR|BY AND THROUGH|BY ITS|ASSIGNEE|ON BEHALF)\b/)[0];
  s = s.replace(/[,.\s]+$/g, '').replace(/,\s*(LLC|INC|N\.?A|LP|FSB|CORP)\b/g, ' $1');
  s = s.replace(/\s+/g, ' ').trim();
  if (s.length > 60) s = s.slice(0, 57).replace(/\s\S*$/, '') + '…';
  return titleCase(s);
}

/** @returns {{type: 'institutional'|'tax'|'hoa'|'other', parent: string|null}} */
function classifyPlaintiff(raw) {
  const raw0 = String(raw ?? '').toUpperCase().replace(/\s+/g, ' ').trim();
  if (!raw0) return { type: 'other', parent: null };
  // Match on a punctuation-light form: "U.S. BANK, N.A." -> "US BANK NA".
  // Some counties truncate long names with "..."; strip that marker too.
  const p = raw0.replace(/\.{2,}|…/g, ' ').replace(/\./g, '').replace(/[,]/g, ' ').replace(/\s+/g, ' ').trim();
  if (TAX_MUNI_RE.test(p)) return { type: 'tax', parent: null };
  if (HOA_RE.test(p)) return { type: 'hoa', parent: null };
  // Known parents are institutions by definition.
  for (const [re, name, trusteeName] of PARENTS) {
    if (re.test(p)) {
      const trustee = trusteeName && TRUSTEE_RE.test(p);
      return { type: 'institutional', parent: trustee ? trusteeName : name };
    }
  }
  if (INSTITUTION_RE.test(p.replace(/\bET AL\b.*$/, ''))) return { type: 'institutional', parent: genericParent(raw0.replace(/\.{2,}|…/g, '')) };
  return { type: 'other', parent: null };
}

// ---------------------------------------------------------------------------
// Aggregation for one county
// ---------------------------------------------------------------------------
function systematicSample(arr, n) {
  if (arr.length <= n) return arr.slice();
  const step = arr.length / n;
  return Array.from({ length: n }, (_, i) => arr[Math.floor(i * step + step / 2)]);
}

async function collectCounty(c, today) {
  const s = new Session();
  const countyId = new URL(c.salesUrl).searchParams.get('countyId');
  const t0 = Date.now();

  // 1) Open listings (default view)
  const openHtml = await s.request(`${BASE}/Sales/SalesSearch?countyId=${countyId}`);
  const open = parseListing(openHtml);
  if (!open.h1Text.toUpperCase().includes(c.name.toUpperCase())) {
    throw new Error(`Page heading does not name ${c.name} County: "${open.h1Text.slice(0, 80)}"`);
  }
  if (Number.isFinite(open.resultCount) && open.resultCount !== open.rows.length) {
    throw new Error(`page says ${open.resultCount} results but ${open.rows.length} rows parsed`);
  }
  // A county that has moved its list elsewhere leaves an empty, stale
  // CivilView page behind (Ocean County, 2026). Do not report that as zero.
  const updated = parseDate(open.lastUpdated);
  if (open.rows.length === 0 && (!updated || today - updated > 30 * DAY)) {
    const e = new Error(`CivilView page lists no sales and was last updated ${open.lastUpdated ?? 'at an unknown date'}`);
    e.stale = { lastUpdated: updated ? iso(updated) : null };
    throw e;
  }

  const warnings = [];
  const hasStatusColumn = open.rows.some((r) => 'Status' in r);
  const rows = open.rows.filter((r) => !(r.Status && TERMINAL_STATUS_RE.test(r.Status)));
  const terminalInOpenView = open.rows.length - rows.length;
  const dates = [];
  let unparsedDates = 0;
  const towns = new Map();
  let unknownTown = 0;
  const plaintiffTypes = { institutional: 0, tax: 0, hoa: 0, other: 0 };
  const parents = new Map();

  for (const r of rows) {
    const d = rowDate(r);
    if (d) dates.push(d);
    else unparsedDates++;
    const town = townFromAddress(r['Address'], open.cities);
    if (town) towns.set(town, (towns.get(town) ?? 0) + 1);
    else unknownTown++;
    const cls = classifyPlaintiff(r['Plaintiff']);
    plaintiffTypes[cls.type]++;
    if (cls.type === 'institutional') parents.set(cls.parent, (parents.get(cls.parent) ?? 0) + 1);
  }

  const upcoming = dates.filter((d) => d >= today).sort((a, b) => a - b);
  const within = (days) => upcoming.filter((d) => d - today <= days * DAY).length;

  // 2) Sold/Cancelled view: same session, POST IsOpen=false.
  let soldOrCancelled = null;
  let soldOrCancelledLast30 = null;
  let soldWindow = null;
  try {
    await sleep(DELAY_REQUEST_MS);
    const body = new URLSearchParams({ IsOpen: 'false', SheriffNumber: '', PropertyStatusDate: '', MonthNumber: '0', PlaintiffTitle: '', DefendantTitle: '', Address: '', CityDesc: '' }).toString();
    const soldHtml = await s.request(`${BASE}/Sales/SalesSearch`, { method: 'POST', body });
    const sold = parseListing(soldHtml);
    const soldChecked = /<input checked="checked" id="sold-radio"/i.test(soldHtml) || /id="sold-radio"[^>]*checked="checked"/i.test(soldHtml);
    if (!sold.h1Text.toUpperCase().includes(c.name.toUpperCase()) || !soldChecked) {
      throw new Error('Sold/Cancelled response did not confirm county + status');
    }
    soldOrCancelled = sold.rows.length;
    const sd = sold.rows.map(rowDate).filter(Boolean).sort((a, b) => a - b);
    soldWindow = sd.length ? { from: iso(sd[0]), to: iso(sd[sd.length - 1]) } : null;
    if (sold.rows.length === 0) {
      // Burlington (2026) shows an empty Sold\Cancelled view: the county does
      // not keep that history online. Unknown, not zero.
      soldOrCancelled = null;
      warnings.push('Sold\\Cancelled view is empty on CivilView (history not published)');
    } else if (!sd.length || today - sd[0] < 30 * DAY) {
      warnings.push('Sold\\Cancelled view does not cover the past 30 days; last-30 figure omitted');
    } else {
      soldOrCancelledLast30 = sd.filter((d) => d <= today && today - d <= 30 * DAY).length;
    }
  } catch (e) {
    warnings.push(`sold/cancelled not collected: ${e.message}`);
    log(`    sold/cancelled failed: ${e.message}`);
  }

  // 3) Status-history sample (adjournments), systematic sample across the list.
  let sample = null;
  if (SAMPLE_DETAILS && rows.length) {
    const ids = systematicSample(rows.map((r) => r.propertyId).filter(Boolean), DETAIL_SAMPLE_PER_COUNTY);
    let sampled = 0;
    let adjourned = 0;
    let noHistory = 0;
    const labels = new Map();
    for (const id of ids) {
      await sleep(DELAY_REQUEST_MS);
      try {
        let html = await s.request(`${BASE}/Sales/SaleDetails?PropertyId=${id}`);
        if (!/Sales Listing Detail/i.test(html)) {
          // Session dropped (CivilView answers with a redirect to its home
          // page). Re-open the county list to refresh it, then retry once.
          log(`    detail page not served (session?); refreshing and retrying`);
          await sleep(RETRY_WAIT_MS);
          await s.request(`${BASE}/Sales/SalesSearch?countyId=${countyId}`);
          await sleep(DELAY_REQUEST_MS);
          html = await s.request(`${BASE}/Sales/SaleDetails?PropertyId=${id}`);
          if (!/Sales Listing Detail/i.test(html)) throw new Error('detail page not served after retry');
        }
        const statuses = parseStatusHistory(html);
        if (!statuses) {
          noHistory++;
          continue;
        }
        sampled++;
        if (statuses.some((st) => ADJOURN_RE.test(st))) adjourned++;
        for (const st of new Set(statuses)) labels.set(st, (labels.get(st) ?? 0) + 1);
      } catch (e) {
        log(`    detail failed: ${e.message}`);
      }
    }
    sample = { sampled, adjourned, noHistory, labels };
    if (noHistory > 0) warnings.push(`${noHistory} sampled detail pages had no status history`);
  }

  const topTowns = [...towns]
    .filter(([, n]) => n >= TOWN_MIN_CELL)
    .sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]))
    .slice(0, 5)
    .map(([t, n]) => ({ town: prettyTown(t), count: n }));

  log(`    ${rows.length} scheduled (${terminalInOpenView} terminal set aside), ${soldOrCancelled ?? '?'} sold/cancelled, sample ${sample ? `${sample.adjourned}/${sample.sampled}` : 'skipped'}, towns unmatched ${unknownTown}, ${((Date.now() - t0) / 1000).toFixed(1)}s`);

  return {
    public: {
      slug: c.slug,
      name: c.name,
      openListings: rows.length,
      openViewRows: open.rows.length,
      terminalInOpenView,
      hasStatusColumn,
      nextSale: upcoming.length ? iso(upcoming[0]) : null,
      salesNext30: within(30),
      salesNext60: within(60),
      salesNext90: within(90),
      pastDatedOpen: dates.filter((d) => d < today).length,
      undatedOpen: unparsedDates,
      soldOrCancelled,
      soldOrCancelledLast30,
      soldOrCancelledWindow: soldWindow,
      sampleAdjournedPct: sample && sample.sampled >= 5 ? Math.round((100 * sample.adjourned) / sample.sampled) : null,
      sampleSize: sample ? sample.sampled : null,
      lastUpdated: open.lastUpdated,
      distinctTowns: towns.size,
      topTowns,
      plaintiffTypes,
      unparsedDates,
      unmatchedTowns: unknownTown,
      warnings,
    },
    // In-memory only, merged into statewide aggregates, never written per-row.
    towns,
    parents,
    upcoming,
    sample,
  };
}

// ---------------------------------------------------------------------------
// Main
// ---------------------------------------------------------------------------
async function main() {
  const started = Date.now();
  const today = todayNJ();
  const month = flagVal('month') ?? iso(today).slice(0, 7);
  const sources = loadSources();
  const civil = sources.filter((c) => c.usesCivilView && (!ONLY || ONLY.includes(c.slug)));
  const notIncluded = sources
    .filter((c) => !c.usesCivilView)
    .map((c) => ({ slug: c.slug, name: c.name, reason: 'Publishes its sheriff sale list outside CivilView', salesUrl: c.salesUrl }));

  log(`Collecting ${civil.length} CivilView counties (today ${iso(today)}, details ${SAMPLE_DETAILS ? 'on' : 'off'})`);

  const results = [];
  const failed = [];
  for (const [i, c] of civil.entries()) {
    if (i > 0) await sleep(DELAY_COUNTY_MS);
    log(`  [${i + 1}/${civil.length}] ${c.name}`);
    try {
      results.push(await collectCounty(c, today));
    } catch (e) {
      log(`    ${e.stale ? 'EXCLUDED' : 'FAILED'}: ${e.message}`);
      if (e.stale) {
        notIncluded.push({
          slug: c.slug,
          name: c.name,
          reason: `Its CivilView page lists no sales and has not been updated since ${e.stale.lastUpdated ?? 'an unknown date'}; check the sheriff's own website for the current list`,
          salesUrl: c.salesUrl,
        });
      } else {
        failed.push({ slug: c.slug, name: c.name, reason: e.message });
      }
    }
  }

  // Statewide aggregates
  const counties = results.map((r) => r.public).sort((a, b) => b.openListings - a.openListings);
  const sum = (k) => counties.reduce((n, c) => n + (c[k] ?? 0), 0);
  const allUpcoming = results.flatMap((r) => r.upcoming);
  const nextSale = allUpcoming.length ? iso(new Date(Math.min(...allUpcoming))) : null;

  const townTotals = new Map();
  for (const r of results) {
    for (const [t, n] of r.towns) townTotals.set(`${t}|${r.public.name}`, n);
  }
  const topTowns = [...townTotals]
    .filter(([, n]) => n >= TOWN_MIN_CELL)
    .sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]))
    .slice(0, 25)
    .map(([k, n]) => {
      const [town, county] = k.split('|');
      return { town: prettyTown(town), county, countySlug: counties.find((c) => c.name === county)?.slug ?? null, count: n };
    });

  const parentTotals = new Map();
  for (const r of results) for (const [p, n] of r.parents) parentTotals.set(p, (parentTotals.get(p) ?? 0) + n);
  const topPlaintiffs = [...parentTotals]
    .sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]))
    .slice(0, 15)
    .map(([name, count]) => ({ name, count }));

  const plaintiffTypes = { institutional: 0, tax: 0, hoa: 0, other: 0 };
  for (const c of counties) for (const k of Object.keys(plaintiffTypes)) plaintiffTypes[k] += c.plaintiffTypes[k];

  const weeklySchedule = Array.from({ length: 12 }, (_, w) => {
    const start = new Date(today.getTime() + w * 7 * DAY);
    const end = new Date(start.getTime() + 7 * DAY);
    return { weekStart: iso(start), weekEnd: iso(new Date(end.getTime() - DAY)), count: allUpcoming.filter((d) => d >= start && d < end).length };
  });
  const beyond12Weeks = allUpcoming.filter((d) => d >= new Date(today.getTime() + 84 * DAY)).length;

  // Only counties whose own sample was usable (>= 5 pages) feed the total.
  const usable = results.filter((r) => r.public.sampleAdjournedPct !== null);
  const sampled = usable.reduce((n, r) => n + (r.sample?.sampled ?? 0), 0);
  const sampledAdj = usable.reduce((n, r) => n + (r.sample?.adjourned ?? 0), 0);
  const soldKnown = counties.filter((c) => c.soldOrCancelledLast30 !== null);
  // Status labels seen in the sample (generic words like "Adjourned"), kept
  // so a reader can audit the adjournment definition.
  const statusLabels = new Map();
  for (const r of results) for (const [l, n] of r.sample?.labels ?? []) statusLabels.set(l, (statusLabels.get(l) ?? 0) + n);

  const report = {
    month,
    generatedAt: new Date().toISOString(),
    asOfDate: iso(today),
    sourceNote:
      "Aggregated from each county sheriff's public foreclosure sale listing on CivilView (salesweb.civilview.com), read once per county on the date shown. Counts are of scheduled sheriff sales, not completed sales; listings change daily and sales are frequently adjourned. No names, street addresses or sheriff numbers are stored or published.",
    method: {
      countiesAttempted: civil.length,
      detailSamplePerCounty: SAMPLE_DETAILS ? DETAIL_SAMPLE_PER_COUNTY : 0,
      townMinCell: TOWN_MIN_CELL,
      adjournmentDefinition: 'A sampled scheduled listing counts as adjourned if any entry in its CivilView status history is an adjournment (labels containing "Adjourn" or "ADJ", e.g. "Adjourned - Defendant", "Plaintiff Adjournment", "Bankruptcy/Adjourned"). Bankruptcy holds and reschedules without an adjournment label are not counted.',
      terminalStatusNote: 'Where a county shows a Status column in its Open view, rows whose status is final (purchased, redeemed, cancelled, reinstated, settled, etc.) are excluded from scheduled counts and reported as terminalInOpenView.',
      sampleStatusLabels: Object.fromEntries([...statusLabels].sort((a, b) => b[1] - a[1])),
      soldOrCancelledNote:
        "CivilView's Sold\\Cancelled view combines sold and cancelled sales and shows a recent window whose length varies by county; the two outcomes cannot be separated from the list view.",
    },
    counties,
    statewide: {
      countiesIncluded: counties.length,
      openListings: sum('openListings'),
      salesNext30: sum('salesNext30'),
      salesNext60: sum('salesNext60'),
      salesNext90: sum('salesNext90'),
      pastDatedOpen: sum('pastDatedOpen'),
      terminalInOpenView: sum('terminalInOpenView'),
      nextSale,
      soldOrCancelledLast30: soldKnown.length ? soldKnown.reduce((n, c) => n + c.soldOrCancelledLast30, 0) : null,
      soldOrCancelledCounties: soldKnown.length,
      sampleSize: sampled,
      sampleCounties: usable.length,
      sampleAdjourned: sampledAdj,
      sampleAdjournedPct: sampled ? Math.round((100 * sampledAdj) / sampled) : null,
      distinctTowns: townTotals.size,
      plaintiffTypes,
      beyond12Weeks,
    },
    topTowns,
    topPlaintiffs,
    weeklySchedule,
    notIncluded,
    failed,
    runtimeSeconds: Math.round((Date.now() - started) / 1000),
  };

  // Last-line privacy guard: nothing in the output may look like a sheriff
  // number (e.g. F-4041, CH-123, 23000123), a ZIP-bearing address, or a
  // PropertyId.
  const out = JSON.stringify(report, null, 2);
  const leaks = [
    /\b[A-Z]{1,3}-\d{3,}/,
    /\b\d{1,6}\s+[A-Z][A-Za-z]+\s+(STREET|ST|AVENUE|AVE|ROAD|RD|DRIVE|DR|LANE|LN|COURT|CT|PLACE|PL|BOULEVARD|BLVD)\b/i,
    /\bNJ\s+\d{5}\b/,
    /PropertyId/i,
  ].filter((re) => re.test(out));
  if (leaks.length) throw new Error(`Privacy guard tripped (${leaks.map(String).join(', ')}); refusing to write output.`);

  const dir = join(ROOT, 'data', 'sheriff-report');
  mkdirSync(dir, { recursive: true });
  writeFileSync(join(dir, `${month}.json`), out + '\n');
  writeFileSync(join(dir, 'latest.json'), out + '\n');
  log(`\nWrote data/sheriff-report/${month}.json and latest.json in ${report.runtimeSeconds}s`);
  log(`Statewide: ${report.statewide.openListings} open listings in ${counties.length} counties; ${report.statewide.salesNext30} in next 30 days.`);
  if (failed.length) log(`Failed counties: ${failed.map((f) => f.name).join(', ')}`);
}

// Exported for ad-hoc testing (node -e "import('./collect.mjs')" is not used by the page).
export { classifyPlaintiff, townFromAddress, parseListing, parseStatusHistory, Session };

if (process.argv[1] && fileURLToPath(import.meta.url) === process.argv[1]) {
  main().catch((e) => {
    console.error(e);
    process.exit(1);
  });
}
