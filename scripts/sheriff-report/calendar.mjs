#!/usr/bin/env node
/**
 * Weekly NJ sheriff sale calendar: how many sales each CivilView county has
 * scheduled on each day of the next 21 days.
 *
 * Reads ONLY each county's public open-listings page (one request per county,
 * same polite User-Agent and pacing as collect.mjs) and writes
 *   data/sheriff-report/calendar.json
 * Aggregates only: dates and counts per county. No names, addresses, sheriff
 * numbers or docket numbers are kept or written.
 *
 * Usage: node scripts/sheriff-report/calendar.mjs
 */
import { writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { parseListing, Session, loadSources, rowDate, parseDate, todayNJ, iso, TERMINAL_STATUS_RE, CIVILVIEW_BASE } from './collect.mjs';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..', '..');
const DAYS = 21;
const DAY = 86400000;
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

async function main() {
  const today = todayNJ();
  const end = new Date(today.getTime() + DAYS * DAY);
  const civil = loadSources().filter((c) => c.usesCivilView);
  const counties = {};
  const failed = [];
  for (const [i, c] of civil.entries()) {
    if (i > 0) await sleep(2500);
    try {
      const s = new Session();
      const countyId = new URL(c.salesUrl).searchParams.get('countyId');
      const html = await s.request(`${CIVILVIEW_BASE}/Sales/SalesSearch?countyId=${countyId}`);
      const open = parseListing(html);
      if (!open.h1Text.toUpperCase().includes(c.name.toUpperCase())) throw new Error(`heading does not name ${c.name}`);
      const updated = parseDate(open.lastUpdated);
      if (open.rows.length === 0 && (!updated || today - updated > 30 * DAY)) throw new Error('stale or empty list');
      const byDay = new Map();
      for (const r of open.rows) {
        if (r.Status && TERMINAL_STATUS_RE.test(r.Status)) continue;
        const d = rowDate(r);
        if (!d || d < today || d >= end) continue;
        const k = iso(d);
        byDay.set(k, (byDay.get(k) ?? 0) + 1);
      }
      counties[c.slug] = {
        name: c.name,
        days: [...byDay].sort((a, b) => a[0].localeCompare(b[0])).map(([date, count]) => ({ date, count })),
      };
      console.error(`  ${c.name}: ${[...byDay.values()].reduce((a, b) => a + b, 0)} sales in the next ${DAYS} days`);
    } catch (e) {
      failed.push({ slug: c.slug, name: c.name, error: String(e.message || e) });
      console.error(`  ${c.name}: FAILED ${e.message}`);
    }
  }
  const out = { asOfDate: iso(today), windowDays: DAYS, counties, failed };
  writeFileSync(join(ROOT, 'data', 'sheriff-report', 'calendar.json'), JSON.stringify(out, null, 1) + '\n');
  console.error(`Wrote data/sheriff-report/calendar.json (${Object.keys(counties).length} counties, ${failed.length} failed)`);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
