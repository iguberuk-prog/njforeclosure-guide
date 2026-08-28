import Link from 'next/link';
import type { Metadata } from 'next';
import SiteHeader from '../components/SiteHeader';

export const metadata: Metadata = {
  title: 'NJ Foreclosure Statistics 2026 | Sourced Numbers',
  description:
    'New Jersey foreclosure statistics, every number sourced: 8,269 filings in the first half of 2026 (up 21%), 7th-highest state rate (1 in 459 homes), ~16,000 court filings a year, and why NJ cases historically take years.',
  alternates: { canonical: 'https://njforeclosureguide.org/statistics/' },
  openGraph: {
    title: 'NJ Foreclosure Statistics 2026 | Sourced Numbers',
    description: 'Current, sourced New Jersey foreclosure data: filings, rates, ranks and timelines.',
    url: 'https://njforeclosureguide.org/statistics/',
  },
};

// Every figure on this page was verified against the cited source on
// 2026-08-28. When updating, replace a number ONLY together with its source
// and period. No number without a citation, ever; that rule is the page.
const LAST_VERIFIED = 'August 28, 2026';

interface Stat {
  headline: string;
  detail: string;
  period: string;
  sourceName: string;
  sourceUrl: string;
}

const HEADLINE_STATS: Stat[] = [
  {
    headline: '8,269 NJ properties had a foreclosure filing in the first half of 2026',
    detail: 'Up 21% from the first half of 2025 (6,826). Filings are rising again after the post-pandemic lull, which is why the letters and door-knocks are back too.',
    period: 'January-June 2026',
    sourceName: 'ATTOM Mid-Year 2026 Foreclosure Market Report',
    sourceUrl: 'https://www.attomdata.com/news/market-trends/foreclosures/2026-mid-year-foreclosure-market-report/',
  },
  {
    headline: '1 in every 459 NJ homes: the 7th-highest foreclosure rate of any state',
    detail: 'New Jersey has ranked at or near the top for years; in 2024 it was tied with Florida for 2nd (1 in 267), and in 2025 it ranked 6th (1 in 273). High filing rates are structural here, not a blip.',
    period: 'First half 2026',
    sourceName: 'ATTOM Mid-Year 2026 Foreclosure Market Report',
    sourceUrl: 'https://www.attomdata.com/news/market-trends/foreclosures/2026-mid-year-foreclosure-market-report/',
  },
  {
    headline: 'Roughly 16,000 new foreclosure cases reach the NJ courts each year',
    detail: 'For scale: during the 2007-2012 crisis, more than 200,000 foreclosure complaints were filed. The courts also run a free mediation program for eligible homeowners.',
    period: 'As of October 2023 (NJ Courts)',
    sourceName: 'New Jersey Courts',
    sourceUrl: 'https://www.njcourts.gov/press-releases/2023/10/new-jersey-courts-help-residents-risk-of-foreclosure',
  },
  {
    headline: 'NJ foreclosures have historically taken years, not months',
    detail: 'The most recent NJ-specific figure ATTOM published put the average completed foreclosure at 1,697 days (about 4.6 years) as of early 2023. The national average has since fallen to 563 days, and NJ timelines have shortened too, but judicial process still means a long runway, and the runway is the homeowner\'s biggest asset.',
    period: 'NJ figure Q1 2023; national figure Q2 2026',
    sourceName: 'ATTOM Q1 2023 and Mid-Year 2026 reports',
    sourceUrl: 'https://www.attomdata.com/news/market-trends/foreclosures/2026-mid-year-foreclosure-market-report/',
  },
];

const MORE_STATS: Stat[] = [
  {
    headline: 'Trenton had the highest foreclosure rate of any large U.S. metro in January 2026',
    detail: 'One filing per 1,087 housing units. Within NJ, the counties with the highest rates that month were Salem, Mercer, Cumberland and Atlantic.',
    period: 'January 2026',
    sourceName: 'NJBIA, citing ATTOM',
    sourceUrl: 'https://njbia.org/trenton-records-highest-foreclosure-rate-among-us-cities/',
  },
  {
    headline: 'Atlantic City ranked 5th-worst among 225 large U.S. metros for 2025',
    detail: 'One in every 192 housing units received a filing during the year.',
    period: '2025 full year',
    sourceName: 'ROI-NJ, citing ATTOM Year-End 2025',
    sourceUrl: 'https://www.roi-nj.com/2026/01/16/real_estate_development/u-s-n-j-foreclosure-activity-increased-in-2025/',
  },
  {
    headline: 'Five NJ counties are among the 50 most at-risk housing markets nationally',
    detail: 'Cumberland County ranked among the five riskiest counties in the country in early 2026.',
    period: 'Q1 2026',
    sourceName: 'ATTOM Q1 2026 Housing Impact Report',
    sourceUrl: 'https://www.attomdata.com/news/market-trends/home-sales-prices/q1-2026-housing-impact-report/',
  },
  {
    headline: 'Nationally, 367,460 properties had foreclosure filings in 2025',
    detail: 'Up 14% from 2024, but still 87% below the 2010 crisis peak of nearly 2.9 million. Today\'s foreclosure wave is real and rising, and nothing like 2010.',
    period: '2025 full year',
    sourceName: 'ATTOM 2025 Year-End Report',
    sourceUrl: 'https://www.attomdata.com/news/market-trends/foreclosures/2025-year-end-foreclosure-market-report/',
  },
];

export default function StatisticsPage() {
  return (
    <div className="min-h-full bg-white">
      <SiteHeader />

      <section className="bg-gradient-to-b from-slate-950 to-slate-900 text-white py-16 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-amber-400 text-xs font-semibold tracking-[0.25em] uppercase mb-4">
            Every number sourced · Verified {LAST_VERIFIED}
          </p>
          <h1 className="font-serif text-4xl md:text-5xl font-bold mb-5 tracking-tight">
            New Jersey Foreclosure, by the Numbers
          </h1>
          <p className="text-slate-300 text-lg leading-relaxed">
            What is actually happening with foreclosure in New Jersey in 2026, with a citation on
            every figure. If a number has no source, it is not on this page.
          </p>
        </div>
      </section>

      <section className="max-w-3xl mx-auto px-4 py-12">
        <div className="space-y-6 mb-14">
          {HEADLINE_STATS.map((s) => (
            <div key={s.headline} className="border border-slate-200 rounded-2xl px-6 py-6">
              <h2 className="font-serif text-xl font-bold text-slate-900 leading-snug mb-2">{s.headline}</h2>
              <p className="text-slate-600 text-sm leading-relaxed mb-3">{s.detail}</p>
              <p className="text-xs text-slate-400">
                {s.period} ·{' '}
                <a href={s.sourceUrl} target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 hover:text-slate-600">
                  {s.sourceName}
                </a>
              </p>
            </div>
          ))}
        </div>

        <h2 className="font-serif text-2xl font-bold text-slate-900 mb-6">Closer to the ground</h2>
        <div className="space-y-6 mb-14">
          {MORE_STATS.map((s) => (
            <div key={s.headline} className="border-l-2 border-slate-200 pl-5">
              <h3 className="font-bold text-slate-900 leading-snug mb-1">{s.headline}</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-1.5">{s.detail}</p>
              <p className="text-xs text-slate-400">
                {s.period} ·{' '}
                <a href={s.sourceUrl} target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 hover:text-slate-600">
                  {s.sourceName}
                </a>
              </p>
            </div>
          ))}
        </div>

        <h2 className="font-serif text-2xl font-bold text-slate-900 mb-4">What the numbers mean if one of them is you</h2>
        <div className="space-y-4 text-slate-600 leading-relaxed mb-10">
          <p>
            Two things are true at once. Filings are rising, and New Jersey&apos;s judicial process
            still gives homeowners more time than almost any other state: every case goes through the
            courts, notice periods are mandatory, sales can generally be adjourned twice, and free
            mediation exists. The statistics above describe volume; they say nothing about how your
            case ends. That part is decided by what you do with the runway.
          </p>
        </div>

        <div className="bg-slate-50 rounded-2xl p-6">
          <p className="text-slate-700 leading-relaxed mb-4">
            Being a statistic is not a plan. Two free minutes gets you the seven options ranked for
            your actual situation.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <Link href="/quiz" className="bg-amber-400 text-slate-950 px-8 py-3.5 rounded-lg font-bold text-center hover:bg-amber-300 transition">
              See My Options, Free
            </Link>
            <Link href="/tools/timeline" className="border border-slate-300 text-slate-900 px-8 py-3.5 rounded-lg font-semibold text-center hover:bg-slate-100 transition">
              Where Am I in the Process?
            </Link>
          </div>
        </div>
        <p className="text-slate-400 text-xs mt-6 leading-relaxed">
          Figures are from the cited third-party sources as of the periods shown and are not our own
          counts; media may quote this page with attribution to the original sources. Educational
          information, not legal advice.
        </p>
      </section>
    </div>
  );
}
