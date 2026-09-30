import Link from 'next/link';
import type { Metadata } from 'next';
import SiteHeader from '../../components/SiteHeader';
import GuideFaq, { FaqItem } from '../../components/GuideFaq';
import IndexExplorer from './IndexExplorer';
import { REPORT, REPORT_URL, num } from '../../../lib/sheriff-report';
import { ROWS, STATE, EDITION, PREVIOUS, POP_SOURCE, POP_URL, INDEX_CSV_URL, findings } from '../../../lib/foreclosure-index';
import { SITE_EMAIL } from '../../../lib/contact';
import { OG_IMAGES } from '../../../lib/og';
import { fitTitle, fitDescription } from '../../../lib/seo';

const BASE = 'https://njforeclosureguide.org';
const PAGE_URL = `${BASE}/reports/nj-foreclosure-index/`;
const EMBED_URL = `${BASE}/widget/nj-sheriff-sale-map/`;

export const metadata: Metadata = {
  title: fitTitle(`NJ Sheriff Sale Index: Foreclosure Rates by County | ${EDITION}`),
  description: fitDescription(
    `Which New Jersey counties have the most sheriff sales for their size: scheduled sales per 100,000 residents, adjournment rates and monthly change, with an interactive map, CSV and embed code.`,
  ),
  alternates: { canonical: PAGE_URL },
  openGraph: {
    images: OG_IMAGES,
    title: `NJ Sheriff Sale Index (${EDITION})`,
    description: 'Scheduled sheriff sales per 100,000 residents in every New Jersey county we count. Free to cite and embed.',
    url: PAGE_URL,
  },
};

const FAQ: FaqItem[] = [
  {
    q: 'Which New Jersey county has the highest foreclosure sheriff sale rate?',
    a: `As of ${STATE.asOf}, ${ROWS[0].name} County had the highest rate among the counties we count: ${ROWS[0].per100k} scheduled sheriff sales per 100,000 residents, against ${STATE.per100k} across all ${STATE.countiesIncluded} counties.`,
  },
  {
    q: 'How many sheriff sales are scheduled in New Jersey right now?',
    a: `${num(STATE.openListings)} were scheduled across ${STATE.countiesIncluded} counties as of ${STATE.asOf}, with ${num(STATE.salesNext30)} dated within the next 30 days. Mercer, Ocean, Somerset, Sussex and Warren publish their lists outside CivilView and are not counted.`,
  },
  {
    q: 'Does a scheduled sheriff sale mean the house will be sold?',
    a: 'No. These are scheduled sales. Many are adjourned, and many end without an auction because the homeowner catches up, sells, reaches a workout, or files bankruptcy. The figures measure pressure in the system, not completed sales.',
  },
];

export default function ForeclosureIndexPage() {
  const f = findings();
  const citation = `NJ Foreclosure Guide, "NJ Sheriff Sale Index, ${EDITION}," data as of ${STATE.asOf}, ${PAGE_URL}`;
  const embedCode = `<iframe src="${EMBED_URL}" width="100%" height="640" style="border:0" title="NJ Sheriff Sale Index map" loading="lazy"></iframe>\n<p style="font-size:13px">Source: <a href="${PAGE_URL}">NJ Sheriff Sale Index, NJ Foreclosure Guide</a></p>`;

  const dataset = {
    '@context': 'https://schema.org',
    '@type': 'Dataset',
    name: `NJ Sheriff Sale Index (${EDITION})`,
    description: 'Scheduled foreclosure sheriff sales by New Jersey county, with rates per 100,000 residents, 30-day volume, sampled adjournment share and month-over-month change. Aggregated from each county sheriff’s public CivilView list; no names or addresses.',
    url: PAGE_URL,
    creator: { '@type': 'Organization', name: 'NJ Foreclosure Guide', url: `${BASE}/` },
    license: 'https://creativecommons.org/licenses/by/4.0/',
    isAccessibleForFree: true,
    dateModified: REPORT.asOfDate,
    temporalCoverage: REPORT.asOfDate,
    spatialCoverage: { '@type': 'Place', name: 'New Jersey, United States' },
    variableMeasured: ['Scheduled sheriff sales', 'Scheduled sheriff sales per 100,000 residents', 'Sales dated within 30 days', 'Share of sampled listings adjourned'],
    distribution: [{ '@type': 'DataDownload', encodingFormat: 'text/csv', contentUrl: `${BASE}${INDEX_CSV_URL}` }],
  };

  const tiles = [
    { v: STATE.per100k.toFixed(1), l: 'scheduled sales per 100,000 residents' },
    { v: num(STATE.openListings), l: `scheduled sales in ${STATE.countiesIncluded} counties` },
    { v: num(STATE.salesNext30), l: 'dated within the next 30 days' },
    ...(STATE.adjournedPct !== null ? [{ v: `${STATE.adjournedPct}%`, l: 'of sampled listings already adjourned' }] : []),
    ...(STATE.change !== null ? [{ v: `${STATE.change > 0 ? '+' : ''}${num(STATE.change)}`, l: `change since ${PREVIOUS ? new Date(`${PREVIOUS.asOfDate}T12:00:00Z`).toLocaleDateString('en-US', { timeZone: 'UTC', month: 'short', day: 'numeric' }) : 'last month'}` }] : []),
  ];

  return (
    <div className="min-h-full bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(dataset) }} />
      <SiteHeader />

      <section className="bg-gradient-to-b from-slate-950 to-slate-900 text-white py-16 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-amber-400 text-xs font-semibold tracking-[0.25em] uppercase mb-4">NJ Sheriff Sale Index · {EDITION}</p>
          <h1 className="font-serif text-4xl md:text-5xl font-bold mb-5 tracking-tight">Where New Jersey Sheriff Sales Are Concentrated</h1>
          <p className="text-slate-300 text-lg leading-relaxed">
            Scheduled foreclosure sheriff sales in every county we count, adjusted for population so large and small counties
            compare fairly. Data as of {STATE.asOf}. Free to cite, download and embed.
          </p>
        </div>
      </section>

      <article className="max-w-4xl mx-auto px-4 py-12">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-3 mb-12">
          {tiles.map((t) => (
            <div key={t.l} className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-4">
              <p className="font-serif text-2xl font-bold text-slate-900 tabular-nums">{t.v}</p>
              <p className="text-slate-600 text-xs leading-snug mt-1">{t.l}</p>
            </div>
          ))}
        </div>

        <h2 className="font-serif text-2xl font-bold text-slate-900 mb-4">Key findings</h2>
        <ol className="list-decimal pl-5 space-y-2.5 text-slate-700 leading-relaxed mb-12">
          {f.map((x) => <li key={x}>{x}</li>)}
        </ol>

        <h2 className="font-serif text-2xl font-bold text-slate-900 mb-2">Explore the counties</h2>
        <p className="text-slate-600 mb-6">Pick a measure, then tap or hover over a county.</p>
        <div className="mb-12">
          <IndexExplorer rows={ROWS} notCounted={REPORT.notIncluded.map((n) => n.name)} />
        </div>

        <div className="rounded-2xl border border-slate-200 px-6 py-6 mb-12">
          <h2 className="font-bold text-slate-900 text-lg mb-3">For reporters and researchers</h2>
          <p className="text-slate-600 text-sm leading-relaxed mb-4">
            Use these figures with attribution under{' '}
            <a href="https://creativecommons.org/licenses/by/4.0/" target="_blank" rel="noopener noreferrer" className="underline underline-offset-4">CC BY 4.0</a>.
            Please describe them as <em>scheduled</em> sheriff sales and include the data date. Questions:{' '}
            <a href={`mailto:${SITE_EMAIL}`} className="underline underline-offset-4">{SITE_EMAIL}</a>.
          </p>
          <div className="flex flex-wrap gap-3 mb-5">
            <a href={INDEX_CSV_URL} download className="bg-slate-900 text-white px-5 py-2.5 rounded-lg font-semibold text-sm hover:bg-slate-800 transition">
              Download the data (CSV)
            </a>
            <Link href={REPORT_URL} className="border border-slate-300 text-slate-900 px-5 py-2.5 rounded-lg font-semibold text-sm hover:bg-slate-50 transition">
              Monthly report: towns, lenders, 12-week schedule
            </Link>
          </div>
          <p className="text-sm font-semibold text-slate-900 mb-1">Cite as</p>
          <p className="rounded-xl bg-slate-50 border border-slate-200 px-4 py-3 text-slate-800 text-sm leading-relaxed break-words mb-4">{citation}</p>
          <p className="text-sm font-semibold text-slate-900 mb-1">Embed the interactive map</p>
          <pre className="rounded-xl bg-slate-950 text-slate-100 px-4 py-3 text-xs leading-relaxed overflow-x-auto whitespace-pre-wrap break-all">{embedCode}</pre>
          <p className="text-slate-500 text-xs mt-2">The embed updates automatically each month.</p>
        </div>

        <h2 className="font-serif text-2xl font-bold text-slate-900 mb-4">Methodology</h2>
        <div className="space-y-3 text-slate-600 text-sm leading-relaxed mb-12">
          <p>
            <strong className="text-slate-900">Sales data.</strong> {REPORT.sourceNote}
          </p>
          <p>
            <strong className="text-slate-900">Population.</strong> {POP_SOURCE} (
            <a href={POP_URL} target="_blank" rel="noopener noreferrer" className="underline underline-offset-4 break-all">source file</a>).
            Rates divide each county&apos;s scheduled sales by its population and multiply by 100,000. The statewide rate uses the
            combined population of the {STATE.countiesIncluded} counties counted ({num(STATE.countedPopulation)} residents).
          </p>
          <p>
            <strong className="text-slate-900">Adjournments.</strong> Read from the status history of a systematic sample of
            listings in each county ({num(STATE.sampleSize)} in total), so treat county figures as rough indicators.
          </p>
          <p>
            <strong className="text-slate-900">Not counted.</strong>{' '}
            {REPORT.notIncluded.map((n) => `${n.name} (${n.reason.charAt(0).toLowerCase()}${n.reason.slice(1)})`).join('; ')}.
          </p>
          <p>
            <strong className="text-slate-900">What this is not.</strong> Scheduled sales are not completed sales, and a count
            says nothing about any individual household. We never publish names, street addresses, sheriff numbers or docket
            numbers.
          </p>
        </div>

        <div className="rounded-2xl bg-amber-50 border border-amber-200 px-6 py-5 mb-12">
          <p className="font-bold text-slate-900 mb-2">If your home is on a sale list</p>
          <p className="text-slate-700 leading-relaxed mb-3">
            You generally have more options and more time than the notice suggests. Find your date, see how far adjournments can
            move it, and learn which options still fit.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <Link href="/tools/sheriff-sale-date" className="bg-amber-400 text-slate-950 px-6 py-3 rounded-lg font-bold text-center hover:bg-amber-300 transition">
              Find my sale date
            </Link>
            <Link href="/quiz" className="border border-slate-300 bg-white text-slate-900 px-6 py-3 rounded-lg font-semibold text-center hover:bg-slate-50 transition">
              See my options, free
            </Link>
          </div>
        </div>
      </article>

      <GuideFaq items={FAQ} />

      <section className="max-w-4xl mx-auto px-4 pb-16">
        <p className="text-slate-400 text-xs leading-relaxed">
          Educational information, not legal advice. Compiled from public county sheriff listings, which may not be complete or
          current; the county&apos;s own list is always the authority for any individual sale.
        </p>
      </section>
    </div>
  );
}
