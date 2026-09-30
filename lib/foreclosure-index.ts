/**
 * NJ Sheriff Sale Index: the quarterly, citable view of the monthly report.
 *
 * Adds three things the monthly page does not have:
 *  1. Rates: scheduled sheriff sales per 100,000 residents (Census Vintage
 *     2024 county estimates, data/census/nj-county-population-2024.json), so
 *     counties of different size compare fairly.
 *  2. Change: month-over-month movement from data/sheriff-report/history.json
 *     (shown only when an earlier month exists).
 *  3. Findings written as quotable sentences, generated from the numbers.
 *
 * Same rules as the report: aggregates only, scheduled (not completed) sales,
 * no names or addresses, never an outcome promise.
 */
import popJson from '../data/census/nj-county-population-2024.json';
import historyJson from '../data/sheriff-report/history.json';
import { REPORT, num, longDate } from './sheriff-report';

interface HistoryMonth {
  month: string;
  asOfDate: string;
  statewide: { countiesIncluded: number; openListings: number; salesNext30: number; soldOrCancelledLast30: number | null; sampleAdjournedPct: number | null };
  counties: Record<string, { openListings: number; salesNext30: number; soldOrCancelledLast30: number | null; sampleAdjournedPct: number | null }>;
}

const POP = (popJson as { counties: Record<string, number>; source: string; url: string });
export const POP_SOURCE = POP.source;
export const POP_URL = POP.url;
const HISTORY = (historyJson as { months: HistoryMonth[] }).months;

/** The edition name follows the data date: Sep-Nov = Fall, etc. */
function seasonOf(iso: string): string {
  const [y, m] = iso.split('-').map(Number);
  const season = m >= 3 && m <= 5 ? 'Spring' : m >= 6 && m <= 8 ? 'Summer' : m >= 9 && m <= 11 ? 'Fall' : 'Winter';
  return `${season} ${y}`;
}
export const EDITION = seasonOf(REPORT.asOfDate);
export const INDEX_URL = '/reports/nj-foreclosure-index/';
export const INDEX_CSV_URL = '/reports/nj-foreclosure-index/data.csv';

export const PREVIOUS: HistoryMonth | null =
  [...HISTORY].filter((h) => h.month < REPORT.month).sort((a, b) => b.month.localeCompare(a.month))[0] ?? null;

export interface IndexRow {
  slug: string;
  name: string;
  population: number;
  openListings: number;
  per100k: number;
  salesNext30: number;
  adjournedPct: number | null;
  sampleSize: number | null;
  soldOrCancelledLast30: number | null;
  /** Change in scheduled listings vs PREVIOUS, when available. */
  change: number | null;
  changePct: number | null;
}

const round1 = (x: number) => Math.round(x * 10) / 10;

export const ROWS: IndexRow[] = REPORT.counties
  .map((c) => {
    const population = POP.counties[c.slug] ?? 0;
    const prev = PREVIOUS?.counties[c.slug];
    const change = prev ? c.openListings - prev.openListings : null;
    return {
      slug: c.slug,
      name: c.name,
      population,
      openListings: c.openListings,
      per100k: population ? round1((c.openListings / population) * 100000) : 0,
      salesNext30: c.salesNext30,
      adjournedPct: c.sampleAdjournedPct,
      sampleSize: c.sampleSize,
      soldOrCancelledLast30: c.soldOrCancelledLast30,
      change,
      changePct: prev && prev.openListings ? Math.round((100 * (change as number)) / prev.openListings) : null,
    };
  })
  .sort((a, b) => b.per100k - a.per100k);

const countedPop = ROWS.reduce((n, r) => n + r.population, 0);
export const STATE = {
  openListings: REPORT.statewide.openListings,
  countiesIncluded: REPORT.statewide.countiesIncluded,
  countedPopulation: countedPop,
  per100k: countedPop ? round1((REPORT.statewide.openListings / countedPop) * 100000) : 0,
  salesNext30: REPORT.statewide.salesNext30,
  adjournedPct: REPORT.statewide.sampleAdjournedPct,
  sampleSize: REPORT.statewide.sampleSize,
  soldOrCancelledLast30: REPORT.statewide.soldOrCancelledLast30,
  institutionalPct: (() => {
    const p = REPORT.statewide.plaintiffTypes;
    const t = p.institutional + p.tax + p.hoa + p.other;
    return t ? Math.round((100 * p.institutional) / t) : null;
  })(),
  change: PREVIOUS ? REPORT.statewide.openListings - PREVIOUS.statewide.openListings : null,
  changePct:
    PREVIOUS && PREVIOUS.statewide.openListings
      ? Math.round((100 * (REPORT.statewide.openListings - PREVIOUS.statewide.openListings)) / PREVIOUS.statewide.openListings)
      : null,
  asOf: longDate(REPORT.asOfDate),
};

/** Quotable findings, each a complete sentence built only from the data. */
export function findings(): string[] {
  const out: string[] = [];
  const top = ROWS[0];
  const bottom = ROWS[ROWS.length - 1];
  const byCount = [...ROWS].sort((a, b) => b.openListings - a.openListings)[0];
  out.push(
    `${top.name} County has the highest sheriff sale rate in New Jersey: ${top.per100k} scheduled sales per 100,000 residents, compared with ${STATE.per100k} across the ${STATE.countiesIncluded} counties we count.`,
  );
  if (byCount.slug !== top.slug) {
    out.push(`${byCount.name} County has the most scheduled sales by count (${num(byCount.openListings)}), but at ${byCount.per100k} per 100,000 residents its rate is lower than ${top.name}'s.`);
  }
  out.push(`${bottom.name} County has the lowest rate, at ${bottom.per100k} scheduled sales per 100,000 residents.`);
  out.push(
    `${num(STATE.openListings)} sheriff sales were scheduled across ${STATE.countiesIncluded} New Jersey counties as of ${STATE.asOf}, and ${num(STATE.salesNext30)} of them had a sale date within the next 30 days.`,
  );
  if (STATE.adjournedPct !== null) {
    out.push(`${STATE.adjournedPct}% of the ${num(STATE.sampleSize)} listings we sampled had already been adjourned at least once, which is why the date on a sale list is often not the final date.`);
  }
  if (STATE.change !== null && PREVIOUS) {
    const dir = STATE.change > 0 ? 'up' : STATE.change < 0 ? 'down' : 'unchanged';
    out.push(
      dir === 'unchanged'
        ? `Scheduled sales were unchanged from ${longDate(PREVIOUS.asOfDate)}.`
        : `Scheduled sales were ${dir} ${num(Math.abs(STATE.change))} (${Math.abs(STATE.changePct ?? 0)}%) from ${longDate(PREVIOUS.asOfDate)}.`,
    );
  }
  if (STATE.institutionalPct !== null) {
    out.push(`${STATE.institutionalPct}% of scheduled sales were brought by banks, mortgage servicers or loan trustees; the rest by condominium and homeowners associations, tax lien holders and others.`);
  }
  return out;
}

/** Five equal-count bins over per100k for the map legend (sequential). */
export function rateBins(): number[] {
  const v = ROWS.map((r) => r.per100k).sort((a, b) => a - b);
  const q = (p: number) => v[Math.min(v.length - 1, Math.floor(p * v.length))];
  return [q(0.2), q(0.4), q(0.6), q(0.8)];
}

export function csv(): string {
  const head = ['county', 'population_2024', 'scheduled_sales', 'per_100k_residents', 'sales_next_30_days', 'sample_adjourned_pct', 'sample_size', 'sold_or_cancelled_last_30_days', 'change_vs_previous_month', 'as_of_date'];
  const lines = ROWS.map((r) =>
    [r.name, r.population, r.openListings, r.per100k, r.salesNext30, r.adjournedPct ?? '', r.sampleSize ?? '', r.soldOrCancelledLast30 ?? '', r.change ?? '', REPORT.asOfDate].join(','),
  );
  const notCounted = REPORT.notIncluded.map((n) => [n.name, POP.counties[n.slug] ?? '', '', '', '', '', '', '', '', REPORT.asOfDate].join(','));
  // Plain CSV (no comment line) so it opens cleanly in Excel and Sheets; the
  // source and definitions are on the page and in the Dataset JSON-LD.
  return [
    head.join(','),
    ...lines,
    ...notCounted,
  ].join('\n') + '\n';
}
