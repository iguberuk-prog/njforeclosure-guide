import Link from 'next/link';
import type { Metadata } from 'next';
import SiteHeader from '../../components/SiteHeader';
import { OG_IMAGES } from '../../../lib/og';
import { fitTitle, fitDescription } from '../../../lib/seo';
import reportJson from '../../../data/sheriff-report/latest.json';

/**
 * Monthly New Jersey Sheriff Sale Report (built 2026-09-24).
 *
 * A data-driven, citable page for journalists, nonprofits and researchers.
 * Every number comes from data/sheriff-report/latest.json, which
 * scripts/sheriff-report/collect.mjs builds from each county sheriff's
 * public CivilView listing. To publish a new month: run the collector,
 * review the JSON, commit it, rebuild. Nothing on this page is typed by hand.
 *
 * Rules this page must keep:
 *  - Aggregates only. The data file holds no names, street addresses or
 *    sheriff numbers, and this page must never add any.
 *  - Listings are SCHEDULED sales. Never describe them as completed
 *    foreclosures, and never predict outcomes.
 */

interface CountyRow {
  slug: string;
  name: string;
  openListings: number;
  nextSale: string | null;
  salesNext30: number;
  salesNext60: number;
  salesNext90: number;
  soldOrCancelled: number | null;
  soldOrCancelledLast30: number | null;
  sampleAdjournedPct: number | null;
  sampleSize: number | null;
  lastUpdated: string | null;
  terminalInOpenView?: number;
}

interface Report {
  month: string;
  generatedAt: string;
  asOfDate: string;
  sourceNote: string;
  method: { detailSamplePerCounty: number; townMinCell: number };
  counties: CountyRow[];
  statewide: {
    countiesIncluded: number;
    openListings: number;
    salesNext30: number;
    salesNext60: number;
    salesNext90: number;
    nextSale: string | null;
    soldOrCancelledLast30: number | null;
    soldOrCancelledCounties: number;
    terminalInOpenView?: number;
    sampleSize: number;
    sampleAdjourned: number;
    sampleAdjournedPct: number | null;
    distinctTowns: number;
    plaintiffTypes: { institutional: number; tax: number; hoa: number; other: number };
    beyond12Weeks: number;
  };
  topTowns: { town: string; county: string; countySlug: string | null; count: number }[];
  topPlaintiffs: { name: string; count: number }[];
  weeklySchedule: { weekStart: string; weekEnd: string; count: number }[];
  notIncluded: { slug: string; name: string; reason: string; salesUrl: string }[];
  failed: { slug: string; name: string; reason: string }[];
}

const report = reportJson as unknown as Report;
const S = report.statewide;

const PAGE_URL = 'https://njforeclosureguide.org/reports/nj-sheriff-sales/';

// Dates in the data file are plain YYYY-MM-DD; format them in UTC so the
// build machine's time zone can never shift a day.
const d = (iso: string, opts: Intl.DateTimeFormatOptions) =>
  new Date(`${iso}T12:00:00Z`).toLocaleDateString('en-US', { timeZone: 'UTC', ...opts });
const longDate = (iso: string) => d(iso, { month: 'long', day: 'numeric', year: 'numeric' });
const shortDate = (iso: string) => d(iso, { month: 'short', day: 'numeric' });
const MONTH_LABEL = d(`${report.month}-01`, { month: 'long', year: 'numeric' });
const AS_OF = longDate(report.asOfDate);
const n = (x: number) => x.toLocaleString('en-US');
const pct = (part: number, whole: number) => (whole ? Math.round((100 * part) / whole) : 0);
const pctLabel = (part: number, whole: number) => (part > 0 && pct(part, whole) === 0 ? '<1%' : `${pct(part, whole)}%`);

const counties = [...report.counties].sort((a, b) => b.openListings - a.openListings);
const first = counties[0];
const excludedNames = report.notIncluded.map((c) => c.name);
const terminalCounties = counties.filter((c) => (c.terminalInOpenView ?? 0) > 0);
const noSoldHistory = counties.filter((c) => c.soldOrCancelledLast30 === null);
// CivilView prints "M/D/YYYY h:mm:ss AM"; flag any list older than a week.
const staleCounties = counties.filter((c) => {
  const m = c.lastUpdated?.match(/^(\d{1,2})\/(\d{1,2})\/(\d{4})/);
  if (!m) return true;
  const updated = Date.UTC(Number(m[3]), Number(m[1]) - 1, Number(m[2]));
  return Date.parse(`${report.asOfDate}T00:00:00Z`) - updated > 7 * 86400000;
});
const totalCounties = report.counties.length + report.notIncluded.length + report.failed.length;

const listJoin = (items: string[]) =>
  items.length <= 1 ? items.join('') : `${items.slice(0, -1).join(', ')} and ${items[items.length - 1]}`;

const TITLE = fitTitle(`NJ Sheriff Sale Statistics by County | ${MONTH_LABEL} Report`);
const DESC = fitDescription(
  `${n(S.openListings)} NJ properties are scheduled for sheriff sale in ${S.countiesIncluded} counties as of ${d(report.asOfDate, { month: 'short', day: 'numeric', year: 'numeric' })}. Counts by county, town, week and lender, updated monthly.`,
);

export const metadata: Metadata = {
  title: TITLE,
  description: DESC,
  alternates: { canonical: PAGE_URL },
  openGraph: {
    images: OG_IMAGES,
    title: `New Jersey Sheriff Sale Report — ${MONTH_LABEL}`,
    description: `${n(S.openListings)} scheduled sheriff sales across ${S.countiesIncluded} NJ counties, by county, town and week. Free to cite.`,
    url: PAGE_URL,
  },
};

/** "Camden County had the most (180)…", tie-aware so equal counts never read as a ranking. */
function leaders(): string | null {
  if (!first) return null;
  const top = counties.filter((c) => c.openListings === first.openListings);
  const rest = counties.filter((c) => c.openListings < first.openListings).slice(0, 2);
  const runners = rest.map((c) => `${c.name} (${n(c.openListings)})`);
  const head =
    top.length === 1
      ? `${first.name} County had the most scheduled sales (${n(first.openListings)})`
      : `${listJoin(top.map((c) => c.name))} counties had the most scheduled sales (${n(first.openListings)} each)`;
  return `${head}${runners.length ? `, followed by ${listJoin(runners)}` : ''}.`;
}

function summary(): string {
  const parts: string[] = [];
  parts.push(
    `As of ${AS_OF}, ${n(S.openListings)} properties were scheduled for sheriff sale across the ${S.countiesIncluded} New Jersey counties whose sheriffs publish their lists on CivilView.`,
  );
  parts.push(`${n(S.salesNext30)} of them had a sale date within the next 30 days, and ${n(S.salesNext90)} within the next 90.`);
  const lead = leaders();
  if (lead) parts.push(lead);
  if (S.sampleAdjournedPct !== null && S.sampleSize > 0) {
    parts.push(
      `In a sample of ${n(S.sampleSize)} of these listings, ${S.sampleAdjournedPct}% had already been adjourned at least once, so a scheduled date is not the same as a sale.`,
    );
  }
  return parts.join(' ');
}

const maxCounty = Math.max(1, ...counties.map((c) => c.openListings));
const maxWeek = Math.max(1, ...report.weeklySchedule.map((w) => w.count));
const pt = S.plaintiffTypes;
const ptTotal = pt.institutional + pt.tax + pt.hoa + pt.other;

const CITATION = `NJ Foreclosure Guide, “New Jersey Sheriff Sale Report — ${MONTH_LABEL},” data as of ${AS_OF}, compiled from county sheriff listings on CivilView. ${PAGE_URL}`;

const datasetSchema = {
  '@context': 'https://schema.org',
  '@type': 'Dataset',
  name: `New Jersey Sheriff Sale Report — ${MONTH_LABEL}`,
  description: `Aggregate counts of properties scheduled for foreclosure sheriff sale in ${S.countiesIncluded} New Jersey counties, compiled from each county sheriff's public CivilView listing as of ${report.asOfDate}: listings by county, by town, by sale week, and by institutional plaintiff. Counts are of scheduled sales, not completed sales. Contains no names, addresses or case numbers.`,
  url: PAGE_URL,
  temporalCoverage: report.asOfDate,
  spatialCoverage: { '@type': 'Place', name: 'New Jersey, United States' },
  creator: { '@type': 'Organization', name: 'NJ Foreclosure Guide', url: 'https://njforeclosureguide.org/' },
  license: 'https://creativecommons.org/licenses/by/4.0/',
  isAccessibleForFree: true,
  dateModified: report.generatedAt,
  keywords: ['New Jersey sheriff sales', 'NJ foreclosure statistics', 'sheriff sales by county', 'foreclosure auctions New Jersey'],
  variableMeasured: [
    'Scheduled sheriff sale listings by county',
    'Scheduled sales in the next 30, 60 and 90 days',
    'Scheduled sales by town',
    'Scheduled sales by week',
    'Scheduled sales by institutional plaintiff',
  ],
};

export default function SheriffSaleReportPage() {
  const tiles: { value: string; label: string }[] = [
    { value: n(S.openListings), label: 'properties scheduled for sheriff sale' },
    { value: n(S.salesNext30), label: 'with a sale date in the next 30 days' },
    { value: n(S.salesNext60), label: 'with a sale date in the next 60 days' },
    { value: `${S.countiesIncluded} of ${totalCounties}`, label: 'counties covered (CivilView)' },
  ];
  if (S.sampleAdjournedPct !== null && S.sampleSize > 0) {
    tiles.push({ value: `${S.sampleAdjournedPct}%`, label: `of ${n(S.sampleSize)} sampled listings already adjourned at least once` });
  }
  if (S.soldOrCancelledLast30 !== null) {
    tiles.push({
      value: n(S.soldOrCancelledLast30),
      label: `listings with a sale date in the past 30 days now marked sold or cancelled (${S.soldOrCancelledCounties} counties)`,
    });
  }

  return (
    <div className="min-h-full bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(datasetSchema) }} />
      <SiteHeader />

      <section className="bg-gradient-to-b from-slate-950 to-slate-900 text-white py-14 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-amber-400 text-xs font-semibold tracking-[0.25em] uppercase mb-4">Monthly Public-Data Report</p>
          <h1 className="font-serif text-4xl md:text-5xl font-bold mb-5 tracking-tight">
            New Jersey Sheriff Sale Report — {MONTH_LABEL}
          </h1>
          <p className="text-slate-300 text-lg leading-relaxed">
            How many New Jersey homes are scheduled for sheriff sale, where, and when. County by county, from
            the sheriffs&apos; own public listings. Free to use and cite.
          </p>
          <p className="text-slate-400 text-sm mt-5">
            Data as of <time dateTime={report.asOfDate}>{AS_OF}</time>
          </p>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-4 pt-12">
        <p className="max-w-3xl text-slate-700 text-lg leading-relaxed mb-10">{summary()}</p>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-14">
          {tiles.map((t) => (
            <div key={t.label} className="rounded-2xl border border-slate-200 bg-slate-50 px-5 py-5">
              <p className="font-serif text-3xl md:text-4xl font-bold text-slate-900 tabular-nums">{t.value}</p>
              <p className="text-slate-600 text-sm leading-snug mt-1.5">{t.label}</p>
            </div>
          ))}
        </div>

        <h2 className="font-serif text-2xl font-bold text-slate-900 mb-2">Scheduled sheriff sales by county</h2>
        <p className="text-slate-600 text-sm leading-relaxed mb-6">
          Scheduled listings on each county&apos;s CivilView page on {AS_OF}.
        </p>
        <ul className="space-y-2 mb-10" aria-label="Scheduled sheriff sales by county">
          {counties.map((c) => (
            <li key={c.slug} className="grid grid-cols-[6.5rem_1fr_3rem] sm:grid-cols-[8rem_1fr_3.5rem] items-center gap-3 text-sm">
              <span className="text-slate-700 truncate">{c.name}</span>
              <span className="h-5 bg-slate-100 rounded" aria-hidden="true">
                <span className="block h-5 rounded bg-slate-800" style={{ width: `${Math.max(1, (100 * c.openListings) / maxCounty)}%` }} />
              </span>
              <span className="text-slate-900 font-semibold tabular-nums text-right">{n(c.openListings)}</span>
            </li>
          ))}
        </ul>

        <div className="overflow-x-auto border border-slate-200 rounded-2xl mb-3">
          <table className="w-full text-sm">
            <thead className="bg-slate-50 text-left text-slate-600">
              <tr>
                <th scope="col" className="px-4 py-3 font-semibold">County</th>
                <th scope="col" className="px-4 py-3 font-semibold text-right">Scheduled</th>
                <th scope="col" className="px-4 py-3 font-semibold text-right">Next 30 days</th>
                <th scope="col" className="px-4 py-3 font-semibold text-right">Next 60 days</th>
                <th scope="col" className="px-4 py-3 font-semibold whitespace-nowrap">Next sale date</th>
                <th scope="col" className="px-4 py-3 font-semibold text-right">Sold or cancelled, past 30 days</th>
                <th scope="col" className="px-4 py-3 font-semibold text-right">Sample adjourned</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-slate-700">
              {counties.map((c) => (
                <tr key={c.slug}>
                  <th scope="row" className="px-4 py-2.5 font-medium text-left whitespace-nowrap">
                    <Link href={`/sheriff-sales/${c.slug}/`} className="text-slate-900 underline underline-offset-4">
                      {c.name}
                    </Link>
                  </th>
                  <td className="px-4 py-2.5 text-right tabular-nums font-semibold text-slate-900">{n(c.openListings)}</td>
                  <td className="px-4 py-2.5 text-right tabular-nums">{n(c.salesNext30)}</td>
                  <td className="px-4 py-2.5 text-right tabular-nums">{n(c.salesNext60)}</td>
                  <td className="px-4 py-2.5 whitespace-nowrap">{c.nextSale ? shortDate(c.nextSale) : '—'}</td>
                  <td className="px-4 py-2.5 text-right tabular-nums">{c.soldOrCancelledLast30 === null ? '—' : n(c.soldOrCancelledLast30)}</td>
                  <td className="px-4 py-2.5 text-right tabular-nums whitespace-nowrap">
                    {c.sampleAdjournedPct === null ? '—' : `${c.sampleAdjournedPct}% of ${c.sampleSize}`}
                  </td>
                </tr>
              ))}
            </tbody>
            <tfoot className="bg-slate-50 text-slate-900 font-semibold">
              <tr>
                <th scope="row" className="px-4 py-3 text-left">Total</th>
                <td className="px-4 py-3 text-right tabular-nums">{n(S.openListings)}</td>
                <td className="px-4 py-3 text-right tabular-nums">{n(S.salesNext30)}</td>
                <td className="px-4 py-3 text-right tabular-nums">{n(S.salesNext60)}</td>
                <td className="px-4 py-3 whitespace-nowrap">{S.nextSale ? shortDate(S.nextSale) : '—'}</td>
                <td className="px-4 py-3 text-right tabular-nums">{S.soldOrCancelledLast30 === null ? '—' : n(S.soldOrCancelledLast30)}</td>
                <td className="px-4 py-3 text-right tabular-nums whitespace-nowrap">
                  {S.sampleAdjournedPct === null ? '—' : `${S.sampleAdjournedPct}% of ${S.sampleSize}`}
                </td>
              </tr>
            </tfoot>
          </table>
        </div>
        <p className="text-slate-500 text-xs leading-relaxed mb-14">
          County names link to our page for that county, with its official list and sheriff contact. &ldquo;Sample adjourned&rdquo; is the
          share of up to {report.method.detailSamplePerCounty} listings per county whose status history shows at least one
          adjournment; small samples, so read it as a rough indicator. {excludedNames.length > 0 && <>Not included: {listJoin(excludedNames)} (see methodology).</>}
        </p>

        <div className="grid md:grid-cols-2 gap-10 mb-14">
          <div>
            <h2 className="font-serif text-2xl font-bold text-slate-900 mb-2">Scheduled sales, next 12 weeks</h2>
            <p className="text-slate-600 text-sm leading-relaxed mb-6">
              Statewide listings by the week of their current sale date. Dates move often; many of these will be adjourned.
            </p>
            <ul className="space-y-2" aria-label="Scheduled sheriff sales by week">
              {report.weeklySchedule.map((w) => (
                <li key={w.weekStart} className="grid grid-cols-[7.5rem_1fr_2.75rem] items-center gap-3 text-sm">
                  <span className="text-slate-600 whitespace-nowrap">
                    {shortDate(w.weekStart)} – {shortDate(w.weekEnd)}
                  </span>
                  <span className="h-4 bg-slate-100 rounded" aria-hidden="true">
                    <span className="block h-4 rounded bg-amber-400" style={{ width: `${w.count ? Math.max(1, (100 * w.count) / maxWeek) : 0}%` }} />
                  </span>
                  <span className="text-slate-900 font-semibold tabular-nums text-right">{n(w.count)}</span>
                </li>
              ))}
            </ul>
            {S.beyond12Weeks > 0 && (
              <p className="text-slate-500 text-xs mt-4">{n(S.beyond12Weeks)} more listings carry a sale date beyond 12 weeks.</p>
            )}
          </div>

          <div>
            <h2 className="font-serif text-2xl font-bold text-slate-900 mb-2">Who the plaintiffs are</h2>
            <p className="text-slate-600 text-sm leading-relaxed mb-6">
              The party that brought the foreclosure, grouped by type across all {n(S.openListings)} listings.
            </p>
            <ul className="space-y-3 text-sm">
              {[
                ['Banks, mortgage servicers and trustees', pt.institutional],
                ['Condominium and homeowners associations', pt.hoa],
                ['Tax lien holders and municipalities', pt.tax],
                ['Other / individual plaintiffs', pt.other],
              ].map(([label, count]) => (
                <li key={label as string}>
                  <div className="flex justify-between gap-3 mb-1">
                    <span className="text-slate-700">{label}</span>
                    <span className="text-slate-900 font-semibold tabular-nums whitespace-nowrap">
                      {n(count as number)} <span className="text-slate-500 font-normal">({pctLabel(count as number, ptTotal)})</span>
                    </span>
                  </div>
                  <span className="block h-2 bg-slate-100 rounded" aria-hidden="true">
                    <span className="block h-2 rounded bg-slate-800" style={{ width: `${pct(count as number, ptTotal)}%` }} />
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-10 mb-14">
          <div>
            <h2 className="font-serif text-2xl font-bold text-slate-900 mb-2">Towns with the most scheduled sales</h2>
            <p className="text-slate-600 text-sm leading-relaxed mb-5">
              Town as written in the listing (often the postal town), with its county.
            </p>
            <div className="overflow-x-auto border border-slate-200 rounded-2xl">
              <table className="w-full text-sm">
                <thead className="bg-slate-50 text-left text-slate-600">
                  <tr>
                    <th scope="col" className="px-4 py-3 font-semibold w-10">#</th>
                    <th scope="col" className="px-4 py-3 font-semibold">Town</th>
                    <th scope="col" className="px-4 py-3 font-semibold">County</th>
                    <th scope="col" className="px-4 py-3 font-semibold text-right">Scheduled</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 text-slate-700">
                  {report.topTowns.map((t, i) => (
                    <tr key={`${t.town}-${t.county}`}>
                      <td className="px-4 py-2 text-slate-400 tabular-nums">{i + 1}</td>
                      <td className="px-4 py-2 text-slate-900">{t.town}</td>
                      <td className="px-4 py-2 whitespace-nowrap">
                        {t.countySlug ? (
                          <Link href={`/sheriff-sales/${t.countySlug}/`} className="underline underline-offset-4">
                            {t.county}
                          </Link>
                        ) : (
                          t.county
                        )}
                      </td>
                      <td className="px-4 py-2 text-right tabular-nums font-semibold text-slate-900">{n(t.count)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div>
            <h2 className="font-serif text-2xl font-bold text-slate-900 mb-2">Most frequent institutional plaintiffs</h2>
            <p className="text-slate-600 text-sm leading-relaxed mb-5">
              Names shortened to the parent institution. &ldquo;As trustee&rdquo; means the bank is suing on behalf of a
              loan trust, not as the original lender.
            </p>
            <div className="overflow-x-auto border border-slate-200 rounded-2xl">
              <table className="w-full text-sm">
                <thead className="bg-slate-50 text-left text-slate-600">
                  <tr>
                    <th scope="col" className="px-4 py-3 font-semibold w-10">#</th>
                    <th scope="col" className="px-4 py-3 font-semibold">Plaintiff</th>
                    <th scope="col" className="px-4 py-3 font-semibold text-right">Listings</th>
                    <th scope="col" className="px-4 py-3 font-semibold text-right">Share</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 text-slate-700">
                  {report.topPlaintiffs.map((p, i) => (
                    <tr key={p.name}>
                      <td className="px-4 py-2 text-slate-400 tabular-nums">{i + 1}</td>
                      <td className="px-4 py-2 text-slate-900">{p.name}</td>
                      <td className="px-4 py-2 text-right tabular-nums font-semibold text-slate-900">{n(p.count)}</td>
                      <td className="px-4 py-2 text-right tabular-nums">{pct(p.count, S.openListings)}%</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      <article className="max-w-3xl mx-auto px-4 pb-10">
        <div className="rounded-2xl bg-amber-50 border border-amber-200 px-6 py-6 mb-12">
          <h2 className="font-bold text-slate-900 text-lg mb-2">If your home is on a sale list</h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            A scheduled date is not the end of the road. Sales are adjourned all the time, and options such as reinstating
            the loan, selling the home, or a Chapter 13 filing can remain open until the sale actually happens. Free, confidential
            help is a phone call away:
          </p>
          <ul className="space-y-1.5 text-slate-800 mb-4">
            <li>
              <strong>HUD-approved housing counselors</strong> (free):{' '}
              <a href="tel:18005694287" className="underline underline-offset-4 font-semibold">800-569-4287</a>
            </li>
            <li>
              <strong>Legal Services of New Jersey</strong> hotline (free for eligible homeowners):{' '}
              <a href="tel:18885765529" className="underline underline-offset-4 font-semibold">1-888-576-5529</a>
            </li>
          </ul>
          <ul className="space-y-2 text-slate-700">
            <li><Link href="/tools/sheriff-sale-countdown" className="underline underline-offset-4">Sheriff sale countdown: your days left and what to do today</Link></li>
            <li><Link href="/sheriff-sales" className="underline underline-offset-4">Every county&apos;s official sale list and sheriff contact</Link></li>
            <li><Link href="/guides/after-sheriff-sale" className="underline underline-offset-4">What happens after a sheriff sale</Link></li>
            <li><Link href="/tools/surplus-funds" className="underline underline-offset-4">Surplus funds calculator: money left over after a sale</Link></li>
          </ul>
        </div>

        <h2 className="font-serif text-2xl font-bold text-slate-900 mb-4">Quick answers</h2>
        <div className="space-y-5 text-slate-600 leading-relaxed mb-12">
          <div>
            <h3 className="font-semibold text-slate-900 mb-1">How many foreclosures are scheduled for sheriff sale in New Jersey right now?</h3>
            <p>
              On {AS_OF}, {n(S.openListings)} properties were listed for upcoming sheriff sale in the {S.countiesIncluded} counties
              covered here{excludedNames.length > 0 ? `, which excludes ${listJoin(excludedNames)}` : ''}. {n(S.salesNext30)} had a sale date within 30 days. These are
              scheduled auctions at the end of the foreclosure process, not new foreclosure filings.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-slate-900 mb-1">Which New Jersey county has the most sheriff sales?</h3>
            <p>
              {leaders() ?? 'See the county table above.'} Larger counties naturally have more listings; the numbers are
              counts, not rates per household.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-slate-900 mb-1">Does a scheduled sheriff sale mean the home will be sold?</h3>
            <p>
              No. Sale dates are frequently adjourned, and cases settle, reinstate, or pause for bankruptcy. That is why this
              report counts scheduled listings and never treats them as completed sales. For foreclosure filings and state
              rankings, see{' '}
              <Link href="/statistics" className="text-slate-900 underline underline-offset-4">New Jersey foreclosure statistics</Link>.
            </p>
          </div>
        </div>

        <h2 className="font-serif text-2xl font-bold text-slate-900 mb-4">Methodology</h2>
        <div className="space-y-4 text-slate-600 leading-relaxed mb-12">
          <p>
            <strong className="text-slate-900">Source.</strong> Each county sheriff&apos;s public foreclosure sale listing on
            CivilView (salesweb.civilview.com), read once per county on {AS_OF}. Each county&apos;s own page states when it was
            last updated;{' '}
            {staleCounties.length === 0
              ? 'every county included here had updated its list within the week before that date.'
              : `${listJoin(staleCounties.map((c) => c.name))} had not updated ${staleCounties.length === 1 ? 'its list' : 'their lists'} in the week before that date, so ${staleCounties.length === 1 ? 'its' : 'their'} figures may be less current.`}
          </p>
          <p>
            <strong className="text-slate-900">What is counted.</strong> &ldquo;Scheduled&rdquo; is every listing in the
            county&apos;s Open view, less any already-decided properties noted below. The 30-, 60- and 90-day and weekly figures use each listing&apos;s current sale date.
            &ldquo;Sold or cancelled, past 30 days&rdquo; counts listings in CivilView&apos;s Sold/Cancelled view with a sale date
            in the 30 days before the report date; CivilView combines the two outcomes, so this figure cannot say how many
            were actually sold. The adjournment figure comes from reading the status history of an evenly spaced sample of up
            to {report.method.detailSamplePerCounty} listings per county ({n(S.sampleSize)} in total) and counting those with any
            adjournment entry (bankruptcy holds alone are not counted). Towns are taken from the end of each listed address and matched to the county&apos;s
            own town list; towns with fewer than {report.method.townMinCell} listings are not shown. Plaintiffs are grouped by
            type from the name on the listing, and only institutions are named.
          </p>
          {terminalCounties.length > 0 && (
            <p>
              <strong className="text-slate-900">Already-decided properties set aside.</strong>{' '}
              {listJoin(terminalCounties.map((c) => `${c.name} (${n(c.terminalInOpenView ?? 0)})`))}{' '}
              {terminalCounties.length === 1 ? 'keeps' : 'keep'} some properties in the Open view after they have been
              purchased, redeemed or cancelled. Those are not scheduled sales, so they are excluded from every count above.
            </p>
          )}
          {noSoldHistory.length > 0 && (
            <p>
              <strong className="text-slate-900">Sold or cancelled history not available</strong> for{' '}
              {listJoin(noSoldHistory.map((c) => c.name))}, whose CivilView Sold/Cancelled view was empty or too short on the
              report date; the statewide sold-or-cancelled figure covers the other {S.soldOrCancelledCounties} counties.
            </p>
          )}
          <p>
            <strong className="text-slate-900">Scheduled is not sold.</strong> Listings change daily. Sales are frequently
            adjourned (New Jersey law allows several adjournments, and courts can order more), and many cases end without a
            sale at all. Nothing here is a count of completed foreclosures or a prediction of how many will occur.
          </p>
          {report.notIncluded.length > 0 && (
            <div>
              <p className="mb-2">
                <strong className="text-slate-900">Counties not included ({report.notIncluded.length}).</strong> These counties
                are left out rather than estimated:
              </p>
              <ul className="list-disc pl-5 space-y-1.5">
                {report.notIncluded.map((c) => (
                  <li key={c.slug}>
                    <Link href={`/sheriff-sales/${c.slug}/`} className="text-slate-900 underline underline-offset-4">{c.name}</Link>
                    : {(c.reason.charAt(0).toLowerCase() + c.reason.slice(1)).replace(/\d{4}-\d{2}-\d{2}/g, (m) => longDate(m))}.
                  </li>
                ))}
              </ul>
            </div>
          )}
          {report.failed.length > 0 && (
            <p>
              <strong className="text-slate-900">Not collected this month:</strong> {listJoin(report.failed.map((c) => c.name))}{' '}
              (the county&apos;s page could not be read reliably on the report date).
            </p>
          )}
          <p>
            <strong className="text-slate-900">Privacy.</strong> This report publishes totals only. No homeowner names, street
            addresses, sheriff numbers or case numbers are stored or published, even though the county lists are public.
          </p>
        </div>

        <div className="rounded-2xl border border-slate-200 px-6 py-6 mb-12">
          <h2 className="font-bold text-slate-900 text-lg mb-2">How to cite this report</h2>
          <p className="text-slate-600 text-sm leading-relaxed mb-4">
            Journalists, nonprofits and researchers are welcome to use these figures with attribution under{' '}
            <a href="https://creativecommons.org/licenses/by/4.0/" target="_blank" rel="noopener noreferrer" className="underline underline-offset-4">
              CC BY 4.0
            </a>
            . Please describe the numbers as scheduled sheriff sales, and include the data date.
          </p>
          <p className="rounded-xl bg-slate-50 border border-slate-200 px-4 py-3 text-slate-800 text-sm leading-relaxed break-words">
            {CITATION}
          </p>
          <p className="text-slate-500 text-xs mt-3">
            The report is refreshed monthly at the same address:{' '}
            <a href={PAGE_URL} className="underline underline-offset-4 break-all">{PAGE_URL}</a>
          </p>
        </div>

        <p className="text-slate-400 text-xs leading-relaxed">
          Educational information, not legal advice. Compiled from public county sheriff listings, which each sheriff&apos;s office
          notes may not be complete or current; the county&apos;s own list is always the authority for any individual sale.
        </p>
      </article>
    </div>
  );
}
