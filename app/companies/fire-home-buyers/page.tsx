import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Fire Home Buyers Review | Sell a Fire Damaged Home in NJ | NJ Foreclosure Guide',
  description:
    'What to know about Fire Home Buyers, a New Jersey company that buys fire and smoke damaged homes as-is for cash. How the process works, who it fits, what to ask before you accept an offer, and how an insurance settlement can affect a mortgage balance.',
  alternates: { canonical: 'https://njforeclosureguide.org/companies/fire-home-buyers/' },
};

export default function FireHomeBuyersPage() {
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
      <section className="bg-gradient-to-b from-slate-950 to-slate-900 text-white py-16 px-4">
        <div className="max-w-3xl mx-auto">
          <p className="text-amber-400 text-xs font-semibold tracking-[0.25em] uppercase mb-4">Damaged Property Specialist</p>
          <h1 className="font-serif text-4xl md:text-5xl font-bold mb-5 tracking-tight">Fire Home Buyers</h1>
          <p className="text-slate-300 text-lg leading-relaxed">
            A New Jersey company that buys fire and smoke damaged homes as-is for cash. If your home was damaged and you are also behind on the mortgage, this combination is worth understanding, because it can sometimes resolve both problems at once.
          </p>
        </div>
      </section>

      {/* Disclosure up front, not buried */}
      <section className="max-w-3xl mx-auto px-4 pt-10">
        <div className="rounded-xl border border-amber-300 bg-amber-50 p-5">
          <p className="text-sm text-amber-900 leading-relaxed">
            <span className="font-bold">Our relationship with them: none.</span> We are not paid by Fire Home Buyers, we are not affiliated with them, and we receive nothing whether you contact them or not. They are listed because they may fit some situations. They specialize in a situation most buyers avoid, but get other offers too, and we would encourage you to. Nothing on this page is an appraisal, a valuation, or advice to accept any particular offer.</p>
        </div>
      </section>

      {/* Call this partner directly */}
      <section className="max-w-3xl mx-auto px-4 pt-8">
        <a
          href="tel:+18662978976"
          className="flex items-center justify-between gap-4 rounded-xl border border-slate-300 bg-white px-6 py-5 hover:border-slate-900 hover:shadow-md transition"
        >
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-slate-500 mb-1">Call Fire Home Buyers directly</p>
            <p className="font-bold text-xl text-slate-900">1-866-297-8976</p>
          </div>
          <span className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-amber-100 border border-amber-300 text-amber-700 text-xl">
            &#9742;
          </span>
        </a>
        <p className="text-xs text-slate-500 mt-2">
          This is Fire Home Buyers&apos;s own number, published on their site. You will reach them, not us.
        </p>
      </section>

      {/* Who it fits */}
      <section className="max-w-3xl mx-auto px-4 py-14">
        <h2 className="font-serif text-3xl font-bold text-slate-900 mb-6">Who This Is Actually For</h2>
        <div className="space-y-4 text-slate-600 leading-relaxed">
          <p>
            After a fire, most homeowners face the same fork: restore the property or sell it. Restoration takes months, requires the insurance settlement to actually cover the work, and means living somewhere else while it happens. Selling ends the problem faster but usually means accepting less than a restored home would bring.
          </p>
          <p>
            Fire Home Buyers exists for the second path. They buy in whatever condition the property is in, which means no repairs, no cleanup, no showings, and no waiting for a buyer who is willing to take on fire damage. According to their site they have been buying, restoring, and reselling fire damaged property for over twelve years and they purchase in all twenty-one New Jersey counties.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-4 mt-8">
          {[
            ['Good fit', 'Fire or smoke damage, repairs are not realistic, you want certainty and a date'],
            ['Poor fit', 'Damage is cosmetic, you have time and money to restore, or you want maximum price'],
          ].map(([title, body], i) => (
            <div key={i} className={`rounded-xl border p-6 ${i === 0 ? 'border-emerald-200 bg-emerald-50/50' : 'border-slate-200 bg-slate-50'}`}>
              <p className="font-bold text-slate-900 mb-2">{title}</p>
              <p className="text-slate-600 text-sm leading-relaxed">{body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* The foreclosure intersection - the genuinely useful part */}
      <section className="bg-slate-50 py-14 px-4 border-y border-slate-200">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-serif text-3xl font-bold text-slate-900 mb-6">If You Are Also Behind on the Mortgage</h2>
          <div className="space-y-4 text-slate-600 leading-relaxed">
            <p>
              This is the situation most people do not realize they are in. A fire damages the home, the insurance claim takes time, payments fall behind while the household is displaced, and foreclosure starts moving in the background. Two separate emergencies, running on two separate clocks.
            </p>
            <p>
              The part worth understanding is that an insurance settlement and a sale can work together. Your mortgage lender generally has a claim on insurance proceeds for the damaged property, and depending on the settlement amount and what you owe, proceeds plus sale proceeds can sometimes pay off the loan balance and end the foreclosure. Sometimes there is money left over for you, and sometimes there is not.
            </p>
            <p className="text-slate-900 font-semibold">
              Whether that math works depends entirely on your numbers, your policy, and your lender. Before you accept any offer, have someone independent look at it.
            </p>
          </div>

          <div className="mt-8 rounded-xl border border-slate-300 bg-white p-6">
            <p className="font-bold text-slate-900 mb-3">Questions to ask before you accept any offer</p>
            <ul className="space-y-2 text-sm text-slate-600 leading-relaxed">
              <li>What is the total amount I will receive after the service charge, repair deduction, and closing costs?</li>
              <li>How does this offer interact with my insurance claim, and who receives the settlement?</li>
              <li>Will the proceeds fully satisfy my mortgage balance, and will my lender release the lien?</li>
              <li>If there is a shortfall, am I still responsible for it?</li>
              <li>Is there a deadline or pressure to decide, and what happens if I take a week to think about it?</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="max-w-3xl mx-auto px-4 py-14">
        <h2 className="font-serif text-3xl font-bold text-slate-900 mb-8">How Their Process Works</h2>
        <div className="space-y-6">
          {[
            ['01', 'Request an offer', 'You submit details about the property and the damage through their site.'],
            ['02', 'Offer within 24 hours', 'They state they respond within 24 hours, and that their offer is based on comparable sales they share with you.'],
            ['03', 'You choose the closing date', 'They let you pick the close date so you are not forced into a double move or a gap in housing.'],
          ].map(([n, t, d]) => (
            <div key={n} className="flex gap-5">
              <span className="font-serif text-3xl font-bold text-amber-500/70 flex-shrink-0">{n}</span>
              <div>
                <p className="font-bold text-slate-900 mb-1">{t}</p>
                <p className="text-slate-600 text-sm leading-relaxed">{d}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 rounded-xl bg-slate-50 border border-slate-200 p-6">
          <p className="text-sm text-slate-600 leading-relaxed">
            <span className="font-bold text-slate-900">On their pricing:</span> Fire Home Buyers states that a service charge, repair costs, and closing costs are deducted at close, so you pay nothing out of pocket. Deducted still means it comes out of your proceeds, so ask for the net figure in writing rather than the headline number. That is true of any cash buyer, not a criticism of this one.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-3xl mx-auto px-4 pb-16">
        <div className="rounded-2xl bg-slate-950 text-white px-8 py-12 text-center">
          <h2 className="font-serif text-2xl font-bold mb-3">Not Sure If This Fits Your Situation?</h2>
          <p className="text-slate-300 mb-8 text-sm leading-relaxed max-w-xl mx-auto">
            Take the free assessment. If keeping the home is realistic, it will tell you that first. If selling makes more sense, it will show you where to go, including options that pay us nothing.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/quiz" className="bg-amber-400 text-slate-950 px-8 py-3.5 rounded-lg font-bold hover:bg-amber-300 transition">
              Take the Free Assessment
            </Link>
            <a
              href="https://www.firehomebuyers.com"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="border border-white/30 bg-white/5 text-white px-8 py-3.5 rounded-lg font-semibold hover:bg-white/15 transition"
            >
              Go to Fire Home Buyers
            </a>
          </div>
        </div>

        <p className="text-xs text-slate-400 mt-8 leading-relaxed text-center max-w-2xl mx-auto">
          NJ Foreclosure Guide is an independent educational resource. We have no affiliation, referral relationship, or financial arrangement of any kind with Fire Home Buyers. We are not a law firm, lender, real estate brokerage, or public adjuster. Details on this page are drawn from Fire Home Buyers&apos; public website and may change. Confirm all terms directly with them, and consider having an attorney review any offer before you sign.
        </p>
      </section>

      <footer className="bg-slate-950 text-slate-500 py-10 px-4 text-center text-xs">
        <p className="mb-2">&copy; 2026 NJ Foreclosure Guide. All rights reserved.</p>
        <p className="max-w-2xl mx-auto leading-relaxed">
          Independent educational resource. Not a law firm, lender, or real estate company. We are paid by nobody: no referral fees, no commissions, no advertising money, and no affiliation with any company listed. You are never charged.
        </p>
      </footer>
    </div>
  );
}
