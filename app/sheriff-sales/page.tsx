import Link from 'next/link';
import type { Metadata } from 'next';
import SiteHeader from '../components/SiteHeader';
import { SHERIFF_SOURCES, SHERIFF_DATA_VERIFIED } from '../../lib/sheriff-sales';

export const metadata: Metadata = {
  title: 'NJ Sheriff Sale Directory | Every County, One Page',
  description:
    'Where to check your foreclosure sale date in all 21 New Jersey counties: official sheriff sale listings, office phone numbers, and how to request an adjournment. Verified against official county sources.',
  alternates: { canonical: 'https://njforeclosureguide.org/sheriff-sales/' },
  openGraph: {
    title: 'NJ Sheriff Sale Directory | Every County, One Page',
    description:
      'Official sheriff sale listings and contacts for all 21 New Jersey counties, plus how sale adjournments work.',
    url: 'https://njforeclosureguide.org/sheriff-sales/',
  },
};

export default function SheriffSalesPage() {
  return (
    <div className="min-h-full bg-white">
      <SiteHeader />

      <section className="bg-gradient-to-b from-slate-950 to-slate-900 text-white py-16 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-amber-400 text-xs font-semibold tracking-[0.25em] uppercase mb-4">
            All 21 Counties · Verified {SHERIFF_DATA_VERIFIED}
          </p>
          <h1 className="font-serif text-4xl md:text-5xl font-bold mb-5 tracking-tight">
            New Jersey Sheriff Sale Directory
          </h1>
          <p className="text-slate-300 text-lg leading-relaxed">
            If a sheriff sale has been scheduled on your home, this page tells you exactly where to
            check the date in your county, who to call, and what New Jersey law lets you do about it.
            Every link and phone number below comes from the county&apos;s own official pages.
          </p>
        </div>
      </section>

      <section className="max-w-3xl mx-auto px-4 py-12">
        <h2 className="font-serif text-2xl font-bold text-slate-900 mb-4">
          Three things to know before you look up your sale
        </h2>
        <div className="space-y-4 text-slate-600 leading-relaxed">
          <p>
            <strong className="text-slate-900">A scheduled sale is not a finished sale.</strong>{' '}
            New Jersey law lets a homeowner ask the sheriff to adjourn (postpone) the sale, and
            homeowners are generally entitled to two adjournments of up to 30 days each, with
            further postponements possible by court order. That can add two months of working room.
          </p>
          <p>
            <strong className="text-slate-900">You can resolve the case right up to the sale.</strong>{' '}
            Reinstating the loan, closing a sale of the home, or a Chapter 13 filing&apos;s automatic
            stay each generally stop the auction from going forward. The earlier you act, the more of
            these stay open; our free{' '}
            <Link href="/quiz" className="text-slate-900 underline underline-offset-4 font-semibold">
              2-minute assessment
            </Link>{' '}
            shows which fit your situation.
          </p>
          <p>
            <strong className="text-slate-900">Most counties list sales online.</strong> Seventeen
            counties publish through the state&apos;s CivilView system; Mercer, Somerset, Sussex and
            Warren publish their own lists. Either way, the links below go straight to your
            county&apos;s listings, where you can search by address or defendant name.
          </p>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-4 pb-16">
        <h2 className="font-serif text-2xl font-bold text-slate-900 mb-6">Find your county</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {SHERIFF_SOURCES.map((s) => (
            <Link
              key={s.slug}
              href={`/sheriff-sales/${s.slug}/`}
              className="border border-slate-200 rounded-xl px-5 py-4 hover:border-slate-400 hover:shadow-sm transition group"
            >
              <p className="font-bold text-slate-900 group-hover:text-slate-950">
                {s.county} County
              </p>
              <p className="text-slate-500 text-sm mt-0.5">
                {s.usesCivilView ? 'Listings on CivilView' : 'Publishes its own listings'}
                {s.phone ? ` · ${s.phone}` : ''}
              </p>
            </Link>
          ))}
        </div>
        <p className="text-slate-400 text-xs mt-6 leading-relaxed">
          Contact details verified against official county sources on {SHERIFF_DATA_VERIFIED}.
          Counties change vendors and numbers; if something here is out of date, the county
          sheriff&apos;s own website is always the authority. Nothing on this page is legal advice.
        </p>
      </section>
    </div>
  );
}
