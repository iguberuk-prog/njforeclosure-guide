import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Home Valuation & Listing | Corcoran Sawyer Smith x Builders Resource Center',
  description:
    'Get a consultation and a real valuation of your New Jersey home from a licensed full-service brokerage, then decide whether listing on the open market beats a cash offer. Serving every county in New Jersey.',
  alternates: { canonical: 'https://njforeclosureguide.org/companies/brc-corcoran-sawyer-smith/' },
};

export default function BRCPage() {
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
          <p className="text-amber-400 text-xs font-semibold tracking-[0.25em] uppercase mb-4">Consultation &amp; Market Listing</p>
          <h1 className="font-serif text-4xl md:text-5xl font-bold mb-5 tracking-tight">
            Corcoran Sawyer Smith
            <span className="block text-2xl md:text-3xl text-slate-300 mt-2 font-normal">x Builders Resource Center</span>
          </h1>
          <p className="text-slate-300 text-lg leading-relaxed">
            A licensed full-service New Jersey brokerage. Start with a conversation and a real valuation of your home, then decide what to do with it. Every other option on this site makes more sense once you know what the property is actually worth.
          </p>
        </div>
      </section>

      {/*
        Affiliation disclosure.

        Styling may change. Placement and legibility may not. This has to sit
        above the pitch, be readable without a click or a hover, and state the
        material connection in the first sentence. Those three things are what
        put an affiliated referral inside the RESPA safe harbor; lose them and
        the referral itself becomes the exposure. Calm is fine. Quiet is not.
      */}
      <section className="max-w-3xl mx-auto px-4 pt-10">
        <div className="border-l-2 border-slate-900 pl-5 sm:pl-6">
          <p className="text-[11px] font-semibold uppercase tracking-[0.15em] text-slate-500 mb-2">
            How we are connected to them
          </p>
          <p className="text-slate-700 leading-relaxed">
            This one is ours. The people behind NJ Foreclosure Guide hold an ownership interest in
            Corcoran Sawyer Smith x Builders Resource Center, so we do benefit if you list with them.
            Everything else on this site is unconnected to us, including the free options, and you are
            never required to use this one. Better you know that before you read the rest of the page
            than after.
          </p>
        </div>
      </section>

      {/* Call this brokerage directly */}
      <section className="max-w-3xl mx-auto px-4 pt-8">
        <a
          href="tel:+19086031100"
          className="flex items-center justify-between gap-4 rounded-xl border border-slate-300 bg-white px-6 py-5 hover:border-slate-900 hover:shadow-md transition"
        >
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-slate-500 mb-1">
              Call the brokerage directly
            </p>
            <p className="font-bold text-xl text-slate-900">(908) 603-1100</p>
          </div>
          <span className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-amber-100 border border-amber-300 text-amber-700 text-xl">
            &#9742;
          </span>
        </a>
        <p className="text-xs text-slate-500 mt-2">
          This is the affiliated brokerage&apos;s own line, the same number listed on their site. Ask for a valuation and say you are calling about a foreclosure timeline.
        </p>
      </section>

      {/* Call this brokerage directly. Their own published line, labeled. */}
      <section className="max-w-3xl mx-auto px-4 pt-8">
        <a
          href="tel:+19086031100"
          className="flex items-center justify-between gap-4 rounded-xl border border-slate-300 bg-white px-6 py-5 hover:border-slate-900 hover:shadow-md transition"
        >
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-slate-500 mb-1">
              Call the brokerage directly
            </p>
            <p className="font-bold text-xl text-slate-900">(908) 603-1100</p>
          </div>
          <span className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-amber-100 border border-amber-300 text-amber-700 text-xl">
            &#9742;
          </span>
        </a>
        <p className="text-xs text-slate-500 mt-2">
          This is the brokerage&apos;s own line, published on their site. Ask for a valuation and tell
          them you are working against a foreclosure timeline. This number appears only on this page,
          not as a contact number for NJ Foreclosure Guide.
        </p>
      </section>

      {/* Why a valuation matters */}
      <section className="max-w-3xl mx-auto px-4 py-14">
        <h2 className="font-serif text-3xl font-bold text-slate-900 mb-6">Start With the Number You Do Not Have Yet</h2>
        <div className="space-y-4 text-slate-600 leading-relaxed">
          <p>
            Most homeowners facing foreclosure are making decisions without the single most important fact: what the home is actually worth today. Not the Zillow estimate, not what the neighbor sold for in 2021, and not what you paid.
          </p>
          <p>
            That number determines everything else. Whether you have equity worth protecting. Whether a short sale is even relevant, since it only applies if you owe more than the home is worth. Whether a cash offer is fair or well below market. Whether reinstating the loan makes financial sense. Whether there will be surplus after the lender is paid at a sheriff sale.
          </p>
          <p className="text-slate-900 font-semibold">
            A consultation and valuation costs you nothing and commits you to nothing. Get the number first, then choose.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-4 mt-8">
          {[
            ['If you have equity', 'Selling on the open market usually nets more than any cash offer. Even accounting for commission and time, the gap is often substantial.'],
            ['If you are underwater', 'A short sale becomes the relevant conversation, and that requires a licensed agent who has handled lender negotiations before.'],
          ].map(([t, d], i) => (
            <div key={i} className="rounded-xl border border-slate-200 p-6">
              <p className="font-bold text-slate-900 mb-2">{t}</p>
              <p className="text-slate-600 text-sm leading-relaxed">{d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* What they do */}
      <section className="bg-slate-50 py-14 px-4 border-y border-slate-200">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-serif text-3xl font-bold text-slate-900 mb-8">What They Handle</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              ['Residential Sales', 'Buying and selling homes across every county in New Jersey, with the marketing reach of the Corcoran network.'],
              ['Land & Development', 'Land, teardowns, and subdivisions, plus development guidance from zoning through closing.'],
              ['New Construction', 'Pre-construction sales, builder representation, and feasibility on a parcel before you commit.'],
              ['Rentals & Leasing', 'Rentals, lease-ups, and tenant placement for owners and renters statewide.'],
            ].map(([t, d], i) => (
              <div key={i} className="rounded-xl border border-slate-200 bg-white p-5">
                <p className="font-bold text-slate-900 mb-1.5">{t}</p>
                <p className="text-slate-600 text-sm leading-relaxed">{d}</p>
              </div>
            ))}
          </div>
          <p className="text-slate-500 text-sm leading-relaxed mt-6">
            Headquartered in Livingston, working in every county in New Jersey. Their site states $480M+ in total sales volume, 620 homes sold, a 97% list-to-sale ratio, and top 1% producing agents. Those are their published figures.
          </p>
        </div>
      </section>

      {/* Honest comparison */}
      <section className="max-w-3xl mx-auto px-4 py-14">
        <h2 className="font-serif text-3xl font-bold text-slate-900 mb-8">Listing Versus Selling Direct</h2>
        <div className="grid sm:grid-cols-2 gap-5">
          <div className="rounded-xl border border-slate-200 bg-white p-6">
            <p className="font-bold text-slate-900 mb-3">Listing usually wins when</p>
            <ul className="space-y-2 text-sm text-slate-600 leading-relaxed">
              <li>You have months before any sale date</li>
              <li>The home is in reasonable condition</li>
              <li>You have equity and want to maximize it</li>
              <li>You can carry the payments while it sells</li>
            </ul>
          </div>
          <div className="rounded-xl border border-slate-200 bg-slate-50 p-6">
            <p className="font-bold text-slate-900 mb-3">A direct sale wins when</p>
            <ul className="space-y-2 text-sm text-slate-600 leading-relaxed">
              <li>A sheriff sale date is close</li>
              <li>The property needs work you cannot fund</li>
              <li>You cannot carry payments through a listing period</li>
              <li>Privacy matters more than price</li>
            </ul>
          </div>
        </div>
        <p className="text-slate-600 text-sm leading-relaxed mt-6">
          Listing takes time that a foreclosure timeline may not give you. Before choosing, find out where you actually stand using the{' '}
          <Link href="/tools/timeline" className="text-amber-700 font-semibold underline underline-offset-2">
            foreclosure timeline tool
          </Link>
          . If time is short, a{' '}
          <Link href="/companies/njoffer" className="text-amber-700 font-semibold underline underline-offset-2">
            fast cash buyer
          </Link>{' '}
          may serve you better, even though that path earns this brokerage nothing.
        </p>
      </section>

      {/* Questions */}
      <section className="max-w-3xl mx-auto px-4 pb-14">
        <div className="rounded-xl border border-slate-300 bg-white p-6">
          <p className="font-bold text-slate-900 mb-3">Ask these at the consultation</p>
          <ul className="space-y-2 text-sm text-slate-600 leading-relaxed">
            <li>What is my home worth today, and what comparable sales support that?</li>
            <li>Realistically, how long will it take to sell at that price?</li>
            <li>What will I net after commission, concessions, and closing costs?</li>
            <li>Given my foreclosure timeline, is listing actually realistic?</li>
            <li>Have you handled short sales and lender negotiations before?</li>
          </ul>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-3xl mx-auto px-4 pb-16">
        <div className="rounded-2xl bg-slate-950 text-white px-8 py-12 text-center">
          <h2 className="font-serif text-2xl font-bold mb-3">Get the Number, Then Decide</h2>
          <p className="text-slate-300 mb-8 text-sm leading-relaxed max-w-xl mx-auto">
            A valuation costs nothing and obligates you to nothing. If listing is not right for your timeline, our assessment will show you the options that are, including ones that pay us nothing.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="https://brcnj.com"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="bg-amber-400 text-slate-950 px-8 py-3.5 rounded-lg font-bold hover:bg-amber-300 transition"
            >
              Request a Consultation
            </a>
            <Link href="/quiz" className="border border-white/30 bg-white/5 text-white px-8 py-3.5 rounded-lg font-semibold hover:bg-white/15 transition">
              See All My Options First
            </Link>
          </div>
        </div>

        <p className="text-xs text-slate-400 mt-8 leading-relaxed text-center max-w-2xl mx-auto">
          NJ Foreclosure Guide is an educational resource. The operators of this guide are affiliated with Corcoran Sawyer Smith x Builders Resource Center, disclosed above. We are not a law firm, lender, or tax advisor, and nothing here is legal, tax, or financial advice. A valuation is an opinion of value, not an appraisal. Details are drawn from their public website and may change.
        </p>
      </section>

      <footer className="bg-slate-950 text-slate-500 py-10 px-4 text-center text-xs">
        <p className="mb-2">&copy; 2026 NJ Foreclosure Guide. All rights reserved.</p>
        <p className="max-w-2xl mx-auto leading-relaxed">
          Independent educational resource. Not a law firm, lender, or real estate company. We take no referral fees, no commissions and no advertising money from anything listed. One destination is a related business, labeled wherever it appears. You are never charged.
        </p>
      </footer>
    </div>
  );
}
