import Link from 'next/link';
import SiteHeader from '../../components/SiteHeader';
import RecommendationBasis from '../../components/RecommendationBasis';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Private Sale Group Review | Sell a Luxury NJ Home Off-Market',
  description:
    'What to know about Private Sale Group, which sells high-value New Jersey homes off-market without listing publicly. How a private sale compares to listing and to a cash buyer, what it saves in commissions, and what to ask before you commit.',
  alternates: { canonical: 'https://njforeclosureguide.org/companies/private-sale-group/' },
};

export default function PrivateSaleGroupPage() {
  return (
    <div className="min-h-full bg-white">
      <SiteHeader />

      {/* Hero */}
      <section className="bg-gradient-to-b from-slate-950 to-slate-900 text-white py-16 px-4">
        <div className="max-w-3xl mx-auto">
          <p className="text-amber-400 text-xs font-semibold tracking-[0.25em] uppercase mb-4">Premium Property Program</p>
          <span className="inline-block bg-white rounded-xl px-4 py-2.5 mb-5">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/images/partners/private-sale-group.png" alt="" className="h-9 max-w-[240px] object-contain" />
          </span>
          <h1 className="font-serif text-4xl md:text-5xl font-bold mb-5 tracking-tight">Private Sale Group</h1>
          <p className="text-slate-300 text-lg leading-relaxed">
            Sells high-value New Jersey homes off-market, without a public listing. No sign on the lawn, no open houses, no MLS exposure. For a homeowner under financial pressure at this price point, the privacy is often worth as much as the price.
          </p>
        </div>
      </section>

      {/* Disclosure up front */}
      <section className="max-w-3xl mx-auto px-4 pt-10">
        <div className="rounded-xl border border-amber-300 bg-amber-50 p-5">
          <p className="text-sm text-amber-900 leading-relaxed">
            <span className="font-bold">Our relationship with them: none.</span> We are not paid by Private Sale Group, we are not affiliated with them, and we receive nothing whether you contact them or not. They are listed because they may fit some situations. At this price point, get more than one number before you commit. Nothing on this page is an appraisal, a valuation, or advice to accept any particular offer.</p>
        </div>
      </section>

      <section className="max-w-3xl mx-auto px-4 pt-8">
        <RecommendationBasis />
      </section>

      {/* What off-market actually means */}
      <section className="max-w-3xl mx-auto px-4 py-14">
        <h2 className="font-serif text-3xl font-bold text-slate-900 mb-6">What &ldquo;Off-Market&rdquo; Actually Means</h2>
        <div className="space-y-4 text-slate-600 leading-relaxed">
          <p>
            Most people know two ways to sell a house: list it with an agent, or sell it to a cash buyer. An off-market sale is a third path, and it sits between the two.
          </p>
          <p>
            The property is never publicly listed. It does not appear on the MLS, on Zillow, or on a sign in the yard. Instead the home is evaluated privately and presented to a network of buyers who are already looking in that area and price range: private entities, individuals, and direct buyers willing to purchase as-is without contingencies.
          </p>
          <p>
            Compared to a cash buyer, an off-market sale usually takes somewhat longer but can reach a stronger price, because the property is presented to multiple qualified buyers rather than sold to a single one. Compared to a public listing, it gives up open-market exposure in exchange for privacy, no commission, and no repair negotiation.
          </p>
        </div>
      </section>

      {/* The math */}
      <section className="bg-slate-50 py-14 px-4 border-y border-slate-200">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-serif text-3xl font-bold text-slate-900 mb-6">Where the Money Actually Goes</h2>
          <p className="text-slate-600 leading-relaxed mb-8">
            Homeowners tend to focus on sale price, but what matters is what you keep after everything is deducted. On a higher-value home the traditional costs of selling are substantial, and they compound.
          </p>

          <div className="grid sm:grid-cols-2 gap-5">
            <div className="rounded-xl border border-slate-200 bg-white p-6">
              <p className="font-bold text-slate-900 mb-3">Selling traditionally</p>
              <ul className="space-y-2 text-sm text-slate-600 leading-relaxed">
                <li>Agent commission, commonly 5 to 6 percent</li>
                <li>Repairs or buyer credits after inspection</li>
                <li>Closing costs</li>
                <li>Holding costs while the home sits: mortgage, taxes, insurance, upkeep</li>
              </ul>
            </div>
            <div className="rounded-xl border border-emerald-200 bg-emerald-50/50 p-6">
              <p className="font-bold text-slate-900 mb-3">What they state for a private sale</p>
              <ul className="space-y-2 text-sm text-slate-600 leading-relaxed">
                <li>No commissions</li>
                <li>No repairs required</li>
                <li>No holding costs from a long marketing period</li>
                <li>Flexible closing timeline you choose</li>
              </ul>
            </div>
          </div>

          <p className="text-slate-600 text-sm leading-relaxed mt-6">
            Their site includes a calculator that estimates traditional selling costs on a given property value. Treat that as an illustration built on market averages rather than a quote on your home. The number that matters is your net proceeds in writing, and you should ask for it directly.
          </p>
        </div>
      </section>

      {/* Who it fits */}
      <section className="max-w-3xl mx-auto px-4 py-14">
        <h2 className="font-serif text-3xl font-bold text-slate-900 mb-8">Who This Fits, and Who It Does Not</h2>
        <div className="grid sm:grid-cols-2 gap-5">
          <div className="rounded-xl border border-emerald-200 bg-emerald-50/50 p-6">
            <p className="font-bold text-slate-900 mb-3">Good fit</p>
            <ul className="space-y-2 text-sm text-slate-600 leading-relaxed">
              <li>Higher-value home where commission is a large dollar figure</li>
              <li>You do not want the sale publicly known</li>
              <li>You want to avoid showings and inspection negotiations</li>
              <li>You have some time, though not unlimited time</li>
            </ul>
          </div>
          <div className="rounded-xl border border-slate-200 bg-slate-50 p-6">
            <p className="font-bold text-slate-900 mb-3">Poor fit</p>
            <ul className="space-y-2 text-sm text-slate-600 leading-relaxed">
              <li>A sheriff sale is days away and you need to close immediately</li>
              <li>Modest home value where open-market exposure likely nets more</li>
              <li>You want maximum price and have months of runway to pursue it</li>
              <li>The property does not fit their buyer network</li>
            </ul>
          </div>
        </div>

        <div className="mt-8 rounded-xl border border-slate-300 bg-white p-6">
          <p className="font-bold text-slate-900 mb-3">Ask these before you commit</p>
          <ul className="space-y-2 text-sm text-slate-600 leading-relaxed">
            <li>What are my net proceeds in writing, after every deduction?</li>
            <li>How does that compare to listing traditionally, after commission and repairs?</li>
            <li>How many buyers will actually see my property, and how are they qualified?</li>
            <li>After my mortgage and any liens are paid, how much surplus comes to me?</li>
            <li>Am I committing to anything by requesting an evaluation, and can I walk away?</li>
          </ul>
        </div>
      </section>

      {/* Foreclosure timing */}
      <section className="bg-slate-50 py-14 px-4 border-y border-slate-200">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-serif text-3xl font-bold text-slate-900 mb-6">If You Are in Foreclosure, Timing Decides This</h2>
          <div className="space-y-4 text-slate-600 leading-relaxed">
            <p>
              An off-market sale is not instant. It is faster and more private than listing, but it is a real sale process with evaluation, buyer matching, and closing. That makes timing the deciding factor.
            </p>
            <p>
              If you have months before any sale date, a private sale is often the strongest combination of price and discretion available to you. If a sheriff sale is weeks away, a direct cash buyer that closes in 10 to 60 days may be the safer path even at a lower number, because a sale that does not close in time protects nothing.
            </p>
            <p className="text-slate-900 font-semibold">
              Find out how much time you actually have before you choose. That single fact changes the right answer more than anything else.
            </p>
          </div>
          <Link
            href="/tools/timeline"
            className="inline-block mt-6 bg-slate-900 text-white px-7 py-3 rounded-lg font-semibold hover:bg-slate-800 transition text-sm"
          >
            Check Where I Am in the Process
          </Link>
        </div>
      </section>

      {/* Equity warning */}
      <section className="max-w-3xl mx-auto px-4 py-14">
        <div className="rounded-xl border-l-4 border-amber-500 bg-amber-50/60 p-6">
          <p className="font-bold text-slate-900 mb-2">Before you sign anything</p>
          <p className="text-slate-700 text-sm leading-relaxed">
            If you have substantial equity, have a New Jersey attorney review the numbers first. At this price point an hour of independent advice is trivial against what is at stake. An attorney can confirm what you owe, what surplus you are entitled to after the lender is paid, and whether selling, reinstating, or filing Chapter 13 leaves you better off. We are not paid by attorneys, so we gain nothing by telling you this.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-3xl mx-auto px-4 pb-16">
        <div className="rounded-2xl bg-slate-950 text-white px-8 py-12 text-center">
          <h2 className="font-serif text-2xl font-bold mb-3">See Your Options First</h2>
          <p className="text-slate-300 mb-8 text-sm leading-relaxed max-w-xl mx-auto">
            The free assessment takes two minutes. If keeping the home is realistic, it says so before anything else. If selling is right, it shows you which path fits your timeline, including options that pay us nothing.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/quiz" className="bg-amber-400 text-slate-950 px-8 py-3.5 rounded-lg font-bold hover:bg-amber-300 transition">
              Take the Free Assessment
            </Link>
            <a
              href="https://privatesalegroup.com"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="border border-white/30 bg-white/5 text-white px-8 py-3.5 rounded-lg font-semibold hover:bg-white/15 transition"
            >
              Go to Private Sale Group
            </a>
          </div>
        </div>

        <p className="text-xs text-slate-400 mt-8 leading-relaxed text-center max-w-2xl mx-auto">
          NJ Foreclosure Guide is an independent educational resource. We have no affiliation, referral relationship, or financial arrangement of any kind with Private Sale Group. We are not a law firm, lender, or real estate brokerage, and nothing here is legal, tax, or financial advice. Details are drawn from Private Sale Group&apos;s public website and may change. Confirm all terms directly with them and have an attorney review any agreement before you sign.
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
