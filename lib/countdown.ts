/**
 * Sheriff-sale countdown math. Pure, date-only (no time zones: every date is
 * a local calendar day), so the page and scripts/test-countdown.mjs agree.
 *
 * Rules used, all already stated elsewhere on the site:
 *  - NJ homeowners are generally entitled to two adjournments of a scheduled
 *    sale, each up to 30 days, requested through the sheriff's office;
 *    courts can grant more for good cause.
 *  - After a sale, there is generally a 10-day objection/redemption window
 *    before the sheriff's deed is delivered.
 * Dates computed here are estimates; the sheriff sets actual new dates.
 */

export const ADJOURNMENT_DAYS = 30;
export const MAX_STATUTORY_ADJOURNMENTS = 2;
export const POST_SALE_WINDOW_DAYS = 10;

/** Parse "YYYY-MM-DD" into a local-midnight Date, or null. */
export function parseDay(s: string): Date | null {
  const m = /^(\d{4})-(\d{2})-(\d{2})$/.exec(s || '');
  if (!m) return null;
  const d = new Date(Number(m[1]), Number(m[2]) - 1, Number(m[3]));
  return d.getFullYear() === Number(m[1]) && d.getMonth() === Number(m[2]) - 1 && d.getDate() === Number(m[3]) ? d : null;
}

export function addDays(d: Date, n: number): Date {
  return new Date(d.getFullYear(), d.getMonth(), d.getDate() + n);
}

/** Whole calendar days from `from` to `to` (negative if `to` is earlier). */
export function daysBetween(from: Date, to: Date): number {
  const a = Date.UTC(from.getFullYear(), from.getMonth(), from.getDate());
  const b = Date.UTC(to.getFullYear(), to.getMonth(), to.getDate());
  return Math.round((b - a) / 86_400_000);
}

export interface Countdown {
  daysLeft: number; // negative once the date has passed
  adjournmentsLeft: number; // statutory ones remaining (0-2)
  latestWithAdjournments: Date; // estimate: sale date + 30 days per remaining adjournment
  postSaleWindowEnds: Date; // estimate: sale date + 10 days
  phase: 'plenty' | 'weeks' | 'urgent' | 'final' | 'passed';
}

export function countdown(saleDate: Date, today: Date, adjournmentsUsed: number): Countdown {
  const used = Math.min(Math.max(Math.floor(adjournmentsUsed || 0), 0), MAX_STATUTORY_ADJOURNMENTS);
  const adjournmentsLeft = MAX_STATUTORY_ADJOURNMENTS - used;
  const daysLeft = daysBetween(today, saleDate);
  const phase: Countdown['phase'] =
    daysLeft < 0 ? 'passed' : daysLeft <= 3 ? 'final' : daysLeft <= 14 ? 'urgent' : daysLeft <= 45 ? 'weeks' : 'plenty';
  return {
    daysLeft,
    adjournmentsLeft,
    latestWithAdjournments: addDays(saleDate, adjournmentsLeft * ADJOURNMENT_DAYS),
    postSaleWindowEnds: addDays(saleDate, POST_SALE_WINDOW_DAYS),
    phase,
  };
}
