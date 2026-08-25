import Link from 'next/link';
import type { Metadata } from 'next';
import { NJ_COUNTIES, townSlug } from '../../lib/nj-locations';

export const metadata: Metadata = {
  title: 'Foreclosure Help by County and Town | New Jersey | NJ Foreclosure Guide',
  description:
    'Local foreclosure help across all 21 New Jersey counties. Find your county or town and see how the NJ foreclosure process works, what options you have, and how to connect with vetted local professionals. Free and confidential.',
  alternates: { canonical: 'https://njforeclosureguide.org/foreclosure-help/' },
};

export default function ForeclosureHelpIndex() {
  return (
    <div className="min-h-full bg-white">
      {/* Nav */}
      <nav className="sticky top-0 bg-white/95 backdrop-blur-md border-b border-slate-200 z-40 shadow-sm">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-3 flex justify-between items-center">
          <Link href="/" className="flex items-center gap-3 hover:opacity-90 transition">
            <img src="/images/icons/professional-legal-scales-lg.png" alt="NJ Foreclosure Guide" className="h-14 w-14" />
            <div className="flex flex-col leading-tight">
              <span className="text-lg font-bold text-slate-900 tracking-tight">NJ Foreclosure Guide</span>
              <span className="text-[10px] text-slate-500 font-medium tracking-widest uppercase">Free Homeowner Resource</span>
            </div>
          </Link>
          <Link href="/quiz" className="bg-slate-900 text-white px-5 py-2.5 rounded-lg font-semibold hover:bg-slate-800 transition text-sm">
            Free Assessment
          </Link>
        </div>
      </nav>

      {/* Hero */}
      <section className="bg-gradient-to-b from-slate-950 to-slate-900 text-white py-16 px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <p className="text-amber-400 text-xs font-semibold tracking-[0.25em] uppercase mb-4">All 21 Counties, Statewide</p>
          <h1 className="font-serif text-4xl md:text-5xl font-bold mb-4 tracking-tight">Local Foreclosure Help Across New Jersey</h1>
          <p className="text-slate-300 text-lg">
            Select your county or town for local process details, your options, and free introductions to vetted professionals near you.
          </p>
        </div>
      </section>

      {/* County grid */}
      <section className="max-w-5xl mx-auto px-4 py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {NJ_COUNTIES.map((county) => (
            <div key={county.slug} className="border border-slate-200 rounded-xl p-6 hover:shadow-lg transition">
              <Link href={`/foreclosure-help/${county.slug}/`} className="font-bold text-lg text-slate-900 hover:text-amber-700 transition">
                {county.name} County
              </Link>
              <p className="text-slate-400 text-xs mt-0.5 mb-3">County seat: {county.seat}</p>
              <div className="flex flex-wrap gap-1.5">
                {county.towns.slice(0, 5).map((t) => (
                  <Link
                    key={t}
                    href={`/foreclosure-help/${townSlug(t)}/`}
                    className="px-2.5 py-1 bg-slate-50 border border-slate-200 rounded-full text-xs font-medium text-slate-600 hover:border-slate-900 transition"
                  >
                    {t}
                  </Link>
                ))}
                {county.towns.length > 5 && (
                  <Link href={`/foreclosure-help/${county.slug}/`} className="px-2.5 py-1 text-xs text-slate-400 hover:text-slate-600">
                    +{county.towns.length - 5} more
                  </Link>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-3xl mx-auto px-4 pb-20 text-center">
        <div className="bg-slate-950 rounded-2xl text-white px-8 py-12">
          <h2 className="font-serif text-3xl font-bold mb-4">Not Sure Where to Start?</h2>
          <p className="text-slate-300 mb-8">Take the free 2-minute assessment and see which of the 7 solutions fit your situation.</p>
          <Link href="/quiz" className="inline-block bg-amber-400 text-slate-950 px-12 py-4 rounded-lg font-bold hover:bg-amber-300 transition">
            Start Free Assessment
          </Link>
        </div>
      </section>

      <footer className="bg-slate-950 text-slate-500 py-10 px-4 text-center text-xs">
        <p className="mb-2">© 2026 NJ Foreclosure Guide. All rights reserved.</p>
        <p className="max-w-2xl mx-auto leading-relaxed">
          Independent educational resource. Not a law firm, lender, or real estate company. We are paid by nobody: no referral fees, no commissions, no advertising money, and no affiliation with any company listed. You are never charged.
        </p>
      </footer>
    </div>
  );
}
