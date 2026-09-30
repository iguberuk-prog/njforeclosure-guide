/**
 * Weekly sheriff sale calendar (data/sheriff-report/calendar.json, refreshed
 * by scripts/sheriff-report/calendar.mjs). Counts of scheduled sales per
 * county per day for the next 21 days. Aggregates only. Scheduled sales are
 * often adjourned, so every view says the official list is the authority.
 */
import calJson from '../data/sheriff-report/calendar.json';

export interface CalDay {
  date: string;
  count: number;
}
interface Cal {
  asOfDate: string;
  windowDays: number;
  counties: Record<string, { name: string; days: CalDay[] }>;
}

export const CAL = calJson as unknown as Cal;

const fmt = (iso: string, locale: string, opts: Intl.DateTimeFormatOptions) =>
  new Date(`${iso}T12:00:00Z`).toLocaleDateString(locale, { timeZone: 'UTC', ...opts });
export const calDay = (iso: string, locale = 'en-US') => fmt(iso, locale, { weekday: 'short', month: 'short', day: 'numeric' });
export const CAL_AS_OF = fmt(CAL.asOfDate, 'en-US', { month: 'long', day: 'numeric', year: 'numeric' });
export const CAL_AS_OF_ES = fmt(CAL.asOfDate, 'es-US', { month: 'long', day: 'numeric', year: 'numeric' });

export function countyCalendar(slug: string): CalDay[] | null {
  return CAL.counties[slug]?.days ?? null;
}

/** Statewide: every date in the window with each county's count. */
export function statewideCalendar(): { date: string; total: number; counties: { slug: string; name: string; count: number }[] }[] {
  const m = new Map<string, { slug: string; name: string; count: number }[]>();
  for (const [slug, c] of Object.entries(CAL.counties)) {
    for (const d of c.days) m.set(d.date, [...(m.get(d.date) ?? []), { slug, name: c.name, count: d.count }]);
  }
  return [...m]
    .sort((a, b) => a[0].localeCompare(b[0]))
    .map(([date, counties]) => ({ date, total: counties.reduce((n, x) => n + x.count, 0), counties: counties.sort((a, b) => b.count - a.count) }));
}
