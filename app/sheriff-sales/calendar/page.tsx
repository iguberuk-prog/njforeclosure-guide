import Link from 'next/link';
import type { Metadata } from 'next';
import SiteHeader from '../../components/SiteHeader';
import { statewideCalendar, calDay, CAL, CAL_AS_OF } from '../../../lib/sale-calendar';
import { REPORT } from '../../../lib/sheriff-report';
import { SHERIFF_SOURCES } from '../../../lib/sheriff-sales';
import { OG_IMAGES } from '../../../lib/og';
import { fitTitle, fitDescription } from '../../../lib/seo';

const URL = 'https://njforeclosureguide.org/sheriff-sales/calendar/';

export const metadata: Metadata = {
  title: fitTitle('NJ Sheriff Sale Calendar: This Week and Next | Updated Weekly'),
  description: fitDescription(
    `How many foreclosure sheriff sales each New Jersey county has scheduled on each day of the next three weeks, updated weekly (last update ${CAL_AS_OF}). Links to every official list.`,
  ),
  alternates: { canonical: URL },
  openGraph: { images: OG_IMAGES, title: 'NJ Sheriff Sale Calendar', description: 'Scheduled sheriff sales by county and date, updated weekly.', url: URL },
};

export default function SaleCalendarPage() {
  const days = statewideCalendar();
  const total = days.reduce((n, d) => n + d.total, 0);
  const noticed = new Set(SHERIFF_SOURCES.filter((x) => x.notice).map((x) => x.slug));
  const webPage = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'NJ Sheriff Sale Calendar',
    url: URL,
    dateModified: CAL.asOfDate,
    isPartOf: { '@type': 'WebSite', name: 'NJ Foreclosure Guide', url: 'https://njforeclosureguide.org/' },
  };
  return (
    <div className="min-h-full bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPage) }} />
      <SiteHeader />
      <section className="bg-gradient-to-b from-slate-950 to-slate-900 text-white py-16 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-amber-400 text-xs font-semibold tracking-[0.25em] uppercase mb-4">Updated weekly · {CAL_AS_OF}</p>
          <h1 className="font-serif text-4xl md:text-5xl font-bold mb-5 tracking-tight">NJ Sheriff Sale Calendar</h1>
          <p className="text-slate-300 text-lg leading-relaxed">
            {total.toLocaleString('en-US')} foreclosure sheriff sales are scheduled across {Object.keys(CAL.counties).length} New Jersey counties in the next{' '}
            {CAL.windowDays} days. Here is how many each county has on each sale date.
          </p>
        </div>
      </section>

      <section className="max-w-3xl mx-auto px-4 py-12">
        <div className="rounded-2xl bg-amber-50 border border-amber-200 px-6 py-5 mb-10">
          <p className="text-slate-700 leading-relaxed">
            <strong className="text-slate-900">Is your home scheduled?</strong> A listed date is not a finished sale. Homeowners can generally request two
            adjournments of up to 30 days each.{' '}
            <Link href="/tools/sheriff-sale-date" className="text-slate-900 underline underline-offset-4 font-semibold">Find your date and your options</Link>.
          </p>
        </div>

        <div className="space-y-4 mb-10">
          {days.map((d) => (
            <div key={d.date} className="border border-slate-200 rounded-2xl px-5 py-4">
              <div className="flex items-baseline justify-between gap-3 mb-2">
                <h2 className="font-bold text-slate-900">{calDay(d.date)}</h2>
                <p className="text-sm text-slate-500 tabular-nums">{d.total} scheduled</p>
              </div>
              <div className="flex flex-wrap gap-2">
                {d.counties.map((c) => (
                  <Link key={c.slug} href={`/sheriff-sales/${c.slug}/`} className="text-sm border border-slate-200 rounded-full px-3 py-1 text-slate-700 hover:bg-slate-50">
                    {c.name}{noticed.has(c.slug) ? '*' : ''} <span className="font-semibold text-slate-900 tabular-nums">{c.count}</span>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>

        {noticed.size > 0 && (
          <p className="text-slate-600 text-sm leading-relaxed mb-4">
            * {SHERIFF_SOURCES.filter((x) => x.notice).map((x) => x.county).join(', ')}: the county has posted a notice about its sales (for
            Cumberland, residential sales are adjourned pending Community Wealth Preservation Program compliance). See the county page before
            relying on these dates.
          </p>
        )}
        <p className="text-slate-600 text-sm leading-relaxed mb-4">
          Not shown: {REPORT.notIncluded.map((n) => n.name).join(', ')}, which publish their lists outside CivilView. Use the{' '}
          <Link href="/sheriff-sales/" className="text-slate-900 underline underline-offset-4 font-semibold">sheriff sale directory</Link> for their official lists.
        </p>
        <p className="text-slate-400 text-xs leading-relaxed">
          Counted from each county&apos;s public CivilView list on {CAL_AS_OF}. Scheduled sales only; dates change often through adjournments,
          settlements and bankruptcy filings, and the county&apos;s official list is the authority for any individual sale. We publish counts
          only, never names or addresses. Educational information, not legal advice.
        </p>
      </section>
    </div>
  );
}
