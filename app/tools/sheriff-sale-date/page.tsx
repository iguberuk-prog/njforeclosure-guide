import Link from 'next/link';
import type { Metadata } from 'next';
import SiteHeader from '../../components/SiteHeader';
import GuideFaq, { FaqItem } from '../../components/GuideFaq';
import SaleDateFinder, { type CountyMonth } from './SaleDateFinder';
import { REPORT, AS_OF_MEDIUM, countyStats } from '../../../lib/sheriff-report';
import { OG_IMAGES } from '../../../lib/og';
import { fitTitle, fitDescription } from '../../../lib/seo';

/**
 * "When is my sheriff sale?" (built 2026-09-30). County picker -> the
 * official list with plain-English search steps, the sheriff's verified
 * contact, this month's county numbers, then a date entry that hands off to
 * the countdown planner. Facts match /sheriff-sales/<county>/ and
 * lib/countdown.ts (N.J.S.A. 2A:17-36 adjournments; 10-day post-sale window).
 */

const URL = 'https://njforeclosureguide.org/tools/sheriff-sale-date/';

export const metadata: Metadata = {
  title: fitTitle('When Is My Sheriff Sale? Find Your NJ Sale Date'),
  description: fitDescription(
    'Find your New Jersey sheriff sale date in any county: the official list, how to search it, who to call, how far adjournments can move the date, and what to do if you can’t find it.',
  ),
  alternates: { canonical: URL },
  openGraph: {
    images: OG_IMAGES,
    title: 'When Is My Sheriff Sale? Find Your NJ Sale Date',
    description: 'Pick your county, find the date on the official list, and see how much time you have. Free.',
    url: URL,
  },
};

const FAQ_ITEMS: FaqItem[] = [
  {
    q: 'How do I find out when my sheriff sale is in New Jersey?',
    a: 'Each county sheriff publishes its foreclosure sale list. Sixteen counties use the state’s CivilView system, where you can search by street address or the defendant’s name; Mercer, Somerset, Sussex and Warren publish their own lists. You can also call the sheriff’s office with your docket number. The date on the official list is more reliable than an old notice, because sales are adjourned often.',
  },
  {
    q: 'Why isn’t my house on the sheriff sale list?',
    a: 'Usually because the sale has not been scheduled yet: a sale can only be set after final judgment, and then the court issues a writ of execution to the sheriff, which can take time. The property may also be listed under a prior owner’s or deceased owner’s name, or the sale may have been adjourned to a new date. Search by address, or call the sheriff’s office.',
  },
  {
    q: 'Can the sale date change after it is listed?',
    a: 'Yes, often. Homeowners can generally request two adjournments of up to 30 days each through the sheriff’s office, lenders can request adjournments too, and courts can order more. Check the official list weekly and confirm any new date after an adjournment.',
  },
];

export default function SheriffSaleDatePage() {
  const months: CountyMonth[] = REPORT.counties.map((c) => {
    const s = countyStats(c.slug);
    const share =
      c.sampleAdjournedPct !== null && c.sampleSize
        ? s?.adjournedCount !== null && s?.adjournedCount !== undefined
          ? `${s.adjournedCount} of ${c.sampleSize}`
          : `${c.sampleAdjournedPct}% of ${c.sampleSize}`
        : null;
    return { slug: c.slug, openListings: c.openListings, nextSale: c.nextSale, adjournedShare: share };
  });

  const toolSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: 'NJ Sheriff Sale Date Finder',
    url: URL,
    applicationCategory: 'UtilitiesApplication',
    operatingSystem: 'Any',
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
    isAccessibleForFree: true,
  };

  return (
    <div className="min-h-full bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(toolSchema) }} />
      <SiteHeader />

      <section className="bg-gradient-to-b from-slate-950 to-slate-900 text-white py-14 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-amber-400 text-xs font-semibold tracking-[0.25em] uppercase mb-4">Free tool · All 21 counties</p>
          <h1 className="font-serif text-4xl md:text-5xl font-bold mb-4 tracking-tight">When Is My Sheriff Sale?</h1>
          <p className="text-slate-300 text-lg leading-relaxed">
            Pick your county. We&apos;ll show you exactly where the official list is, how to search it, who to call, and how
            much time you have once you find the date.
          </p>
        </div>
      </section>

      <section className="max-w-3xl mx-auto px-4 py-10">
        <SaleDateFinder months={months} asOf={AS_OF_MEDIUM} />
      </section>

      <GuideFaq items={FAQ_ITEMS} />

      <section className="max-w-3xl mx-auto px-4 pb-16">
        <div className="bg-slate-50 rounded-2xl p-6 mt-6">
          <p className="text-slate-700 leading-relaxed mb-4">
            Have a date and want to know which options still fit? The free 2-minute assessment sorts it out.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <Link href="/quiz" className="bg-amber-400 text-slate-950 px-8 py-3.5 rounded-lg font-bold text-center hover:bg-amber-300 transition">
              See My Options, Free
            </Link>
            <Link href="/sheriff-sales/" className="border border-slate-300 text-slate-900 px-8 py-3.5 rounded-lg font-semibold text-center hover:bg-white transition">
              NJ Sheriff Sale Directory
            </Link>
          </div>
        </div>
        <p className="text-slate-400 text-xs mt-6 leading-relaxed">
          Educational information, not legal advice. County numbers are from our monthly NJ Sheriff Sale Report ({REPORT.statewide.countiesIncluded}{' '}
          CivilView counties, as of {AS_OF_MEDIUM}); the official county list is the authority for any individual sale.
        </p>
      </section>
    </div>
  );
}
