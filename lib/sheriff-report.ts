/**
 * Per-county view of the monthly NJ Sheriff Sale Report
 * (data/sheriff-report/latest.json, built by scripts/sheriff-report/collect.mjs).
 *
 * Used by the county pages at /sheriff-sales/[county]/ so each one carries
 * the same fresh, aggregate numbers as /reports/nj-sheriff-sales/.
 *
 * Rules (same as the report page):
 *  - Aggregates only. Never add names, street addresses or sheriff numbers.
 *  - Towns are shown only when their count is >= method.townMinCell.
 *  - Plaintiffs are named only if the data file provides institutional names.
 *  - Listings are SCHEDULED sales; never describe them as completed.
 */
import reportJson from '../data/sheriff-report/latest.json';

export interface ReportTown {
  town: string;
  count: number;
  nextSale?: string | null;
  salesNext30?: number;
}

export interface ReportCounty {
  slug: string;
  name: string;
  openListings: number;
  nextSale: string | null;
  salesNext30: number;
  salesNext60: number;
  salesNext90: number;
  soldOrCancelledLast30: number | null;
  sampleAdjournedPct: number | null;
  sampleSize: number | null;
  distinctTowns: number;
  topTowns: { town: string; count: number }[];
  plaintiffTypes: { institutional: number; tax: number; hoa: number; other: number };
  /** Every town at or above townMinCell (collector 2026-10 onward). */
  towns?: ReportTown[];
  /** Not emitted by the collector yet; rendered only if a future month adds it. */
  topPlaintiffs?: { name: string; count: number }[];
}

export interface Report {
  month: string;
  generatedAt: string;
  asOfDate: string;
  method: { townMinCell: number };
  counties: ReportCounty[];
  statewide: {
    countiesIncluded: number;
    openListings: number;
    salesNext30: number;
    salesNext60: number;
    salesNext90: number;
    soldOrCancelledLast30: number;
    soldOrCancelledCounties: number;
    sampleSize: number;
    sampleAdjourned: number;
    sampleAdjournedPct: number;
    distinctTowns: number;
    plaintiffTypes: { institutional: number; tax: number; hoa: number; other: number };
    nextSale: string | null;
  };
  sourceNote: string;
  topTowns: { town: string; county: string; countySlug: string | null; count: number }[];
  topPlaintiffs: { name: string; count: number }[];
  weeklySchedule: { weekStart: string; weekEnd: string; count: number }[];
  notIncluded: { slug: string; name: string; reason: string; salesUrl: string }[];
}

export const REPORT = reportJson as unknown as Report;
export const REPORT_URL = '/reports/nj-sheriff-sales/';

// Dates in the data file are plain YYYY-MM-DD; format them in UTC so the
// build machine's time zone can never shift a day.
const fmt = (iso: string, opts: Intl.DateTimeFormatOptions) =>
  new Date(`${iso}T12:00:00Z`).toLocaleDateString('en-US', { timeZone: 'UTC', ...opts });
export const longDate = (iso: string) => fmt(iso, { month: 'long', day: 'numeric', year: 'numeric' });
export const mediumDate = (iso: string) => fmt(iso, { month: 'short', day: 'numeric', year: 'numeric' });
export const AS_OF_LONG = longDate(REPORT.asOfDate);
export const AS_OF_MEDIUM = mediumDate(REPORT.asOfDate);
export const AS_OF_MONTH = fmt(REPORT.asOfDate, { month: 'long', year: 'numeric' });
export const num = (x: number) => x.toLocaleString('en-US');

export interface CountyStats {
  county: ReportCounty;
  /** 1-based rank by open listings; ties share a rank. */
  rank: number;
  tiedWith: string[];
  of: number;
  towns: { town: string; count: number }[];
  /** Whole number of sampled listings with an adjournment, when it can be recovered exactly. */
  adjournedCount: number | null;
  plaintiffs: { name: string; count: number }[];
}

export function countyStats(slug: string): CountyStats | null {
  const county = REPORT.counties.find((c) => c.slug === slug);
  if (!county) return null;
  const others = REPORT.counties.filter((c) => c.slug !== slug);
  const rank = 1 + others.filter((c) => c.openListings > county.openListings).length;
  const tiedWith = others.filter((c) => c.openListings === county.openListings).map((c) => c.name);
  const towns = county.topTowns.filter((t) => t.count >= REPORT.method.townMinCell);

  // The file stores a rounded percentage plus the sample size. Recover the
  // whole count only when it round-trips exactly, so "9 of 15" is never a guess.
  let adjournedCount: number | null = null;
  if (county.sampleAdjournedPct !== null && county.sampleSize) {
    const k = Math.round((county.sampleAdjournedPct * county.sampleSize) / 100);
    if (Math.round((100 * k) / county.sampleSize) === county.sampleAdjournedPct) adjournedCount = k;
  }

  return {
    county,
    rank,
    tiedWith,
    of: REPORT.counties.length,
    towns,
    adjournedCount,
    plaintiffs: (county.topPlaintiffs ?? []).slice(0, 5),
  };
}

export function notIncludedCounty(slug: string) {
  return REPORT.notIncluded.find((c) => c.slug === slug) ?? null;
}

const ordinal = (n: number) => {
  const s = ['th', 'st', 'nd', 'rd'];
  const v = n % 100;
  return `${n}${s[(v - 20) % 10] || s[v] || s[0]}`;
};

export function rankLabel(s: CountyStats): string {
  return s.tiedWith.length ? `Tied ${ordinal(s.rank)}` : ordinal(s.rank);
}

/** Plain-English adjournment line, e.g. "9 of 15 sampled listings had been adjourned at least once". */
export function adjournedLine(s: CountyStats): string | null {
  const c = s.county;
  if (c.sampleAdjournedPct === null || !c.sampleSize) return null;
  return s.adjournedCount !== null
    ? `${s.adjournedCount} of ${c.sampleSize} sampled listings had been adjourned at least once`
    : `${c.sampleAdjournedPct}% of ${c.sampleSize} sampled listings had been adjourned at least once`;
}

/**
 * One factual sentence (two short ones at most) of context generated from the
 * numbers. Never promises an outcome; only describes what the list showed.
 */
export function contextSentence(s: CountyStats): string {
  const c = s.county;
  const name = `${c.name} County`;
  const pct = c.sampleAdjournedPct;
  const tail = 'Homeowners can confirm the current date on the official list and review their options below.';
  if (pct === null || !c.sampleSize) {
    return `Sale dates on the ${name} list change often, so the date shown is not always the final date. ${tail}`;
  }
  const share = s.adjournedCount !== null ? `${s.adjournedCount} of ${c.sampleSize}` : `${pct}%`;
  if (pct > 50) {
    return `Most of the ${name} listings we sampled (${share}) had already been pushed back at least once, which is why the date on the list is often not the final date. ${tail}`;
  }
  if (pct === 50) {
    return `Half of the ${name} listings we sampled had already been pushed back at least once, so the date on the list is often not the final date. ${tail}`;
  }
  if (pct > 0) {
    return `Some of the ${name} listings we sampled (${share}) had already been pushed back at least once, so the date on the list is not always the final date. ${tail}`;
  }
  return `None of the ${name} listings we sampled had been pushed back yet, but sale dates can still change before the sale. ${tail}`;
}

// ---------------------------------------------------------------------------
// Spanish rendering (pages under /es/ventas-del-sheriff/). Same numbers, same
// rules; dates formatted in UTC for the same reason as above.
// ---------------------------------------------------------------------------
const fmtEs = (iso: string, opts: Intl.DateTimeFormatOptions) =>
  new Date(`${iso}T12:00:00Z`).toLocaleDateString('es-US', { timeZone: 'UTC', ...opts });
export const longDateEs = (iso: string) => fmtEs(iso, { month: 'long', day: 'numeric', year: 'numeric' });
export const mediumDateEs = (iso: string) => fmtEs(iso, { month: 'short', day: 'numeric', year: 'numeric' });
export const AS_OF_LONG_ES = longDateEs(REPORT.asOfDate);
export const AS_OF_MEDIUM_ES = mediumDateEs(REPORT.asOfDate);
const monthEs = fmtEs(REPORT.asOfDate, { month: 'long', year: 'numeric' }).replace(/ de /, ' ');
/** "Octubre 2026" */
export const AS_OF_MONTH_ES = monthEs.charAt(0).toUpperCase() + monthEs.slice(1);

export function adjournedLineEs(s: CountyStats): string | null {
  const c = s.county;
  if (c.sampleAdjournedPct === null || !c.sampleSize) return null;
  return s.adjournedCount !== null
    ? `${s.adjournedCount} de ${c.sampleSize} anuncios de la muestra ya habían sido aplazados al menos una vez`
    : `El ${c.sampleAdjournedPct}% de ${c.sampleSize} anuncios de la muestra ya habían sido aplazados al menos una vez`;
}

export function contextSentenceEs(s: CountyStats): string {
  const c = s.county;
  const name = `el condado de ${c.name}`;
  const pct = c.sampleAdjournedPct;
  const tail = 'Los propietarios pueden confirmar la fecha actual en la lista oficial y revisar sus opciones más abajo.';
  if (pct === null || !c.sampleSize) {
    return `Las fechas de subasta en la lista de ${name} cambian con frecuencia, así que la fecha que aparece no siempre es la definitiva. ${tail}`;
  }
  const share = s.adjournedCount !== null ? `${s.adjournedCount} de ${c.sampleSize}` : `${pct}%`;
  if (pct > 50) return `La mayoría de los anuncios de ${name} que revisamos (${share}) ya se habían aplazado al menos una vez, por eso la fecha de la lista muchas veces no es la definitiva. ${tail}`;
  if (pct === 50) return `La mitad de los anuncios de ${name} que revisamos ya se habían aplazado al menos una vez, así que la fecha de la lista muchas veces no es la definitiva. ${tail}`;
  if (pct > 0) return `Algunos de los anuncios de ${name} que revisamos (${share}) ya se habían aplazado al menos una vez, así que la fecha de la lista no siempre es la definitiva. ${tail}`;
  return `Ninguno de los anuncios de ${name} que revisamos se había aplazado todavía, pero las fechas pueden cambiar antes de la subasta. ${tail}`;
}

/** Spanish ordinal rank, e.g. "1.º" or "Empate en el 3.º". */
export function rankLabelEs(s: CountyStats): string {
  return s.tiedWith.length ? `Empate en el ${s.rank}.º` : `${s.rank}.º`;
}
