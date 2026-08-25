import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'NJ Offer Review | Fast Cash Home Sale in New Jersey',
  description:
    'What to know about NJ Offer, a New Jersey cash buyer that makes an offer within 24 hours and closes in 10 to 60 days. When a fast cash sale beats listing, what it costs you, and what to ask before accepting an offer.',
  alternates: { canonical: 'https://njforeclosureguide.org/companies/njoffer/' },
};

export default function NJOfferPage() {
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
          <p className="text-amber-400 text-xs font-semibold tracking-[0.25em] uppercase mb-4">Fast Cash Sale</p>
          <h1 className="font-serif text-4xl md:text-5xl font-bold mb-5 tracking-tight">NJ Offer</h1>
          <p className="text-slate-300 text-lg leading-relaxed">
            A New Jersey cash buyer working across all twenty-one counties. They make an offer within 24 hours and let you choose a closing date between 10 and 60 days out. When a sale date is coming and certainty matters more than the last few percent of price, that is the trade this exists to make.
          </p>
        </div>
      </section>

      {/* Disclosure up front */}
      <section className="max-w-3xl mx-auto px-4 pt-10">
        <div className="rounded-xl border border-amber-300 bg-amber-50 p-5">
          <p className="text-sm text-amber-900 leading-relaxed">
            <span className="font-bold">How we are paid:</span> NJ Offer is a referral partner, which means we receive a fee if you sell to them. You are never charged anything. Get more than one number before you commit. Nothing on this page is an appraisal, a valuation, or advice to accept any particular offer.
          </p>
        </div>
      </section>

      {/* Call this partner directly */}
      <section className="max-w-3xl mx-auto px-4 pt-8">
        <a
          href="tel:+17326840623"
          className="flex items-center justify-between gap-4 rounded-xl border border-slate-300 bg-white px-6 py-5 hover:border-slate-900 hover:shadow-md transition"
        >
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-slate-500 mb-1">Call NJ Offer directly</p>
            <p className="font-bold text-xl text-slate-900">(732) 684-0623</p>
          </div>
          <span className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-amber-100 border border-amber-300 text-amber-700 text-xl">
            &#9742;
          </span>
        </a>
        <p className="text-xs text-slate-500 mt-2">
          This is NJ Offer&apos;s own number, published on their site. You will reach them, not us.
        </p>
      </section>

      {/* What you are actually buying */}
      <section className="max-w-3xl mx-auto px-4 py-14">
        <h2 className="font-serif text-3xl font-bold text-slate-900 mb-6">
          Speed Is the Product You Are Buying
        </h2>
        <div className="space-y-4 text-slate-600 leading-relaxed">
          <p>
            A cash buyer does not pay what an open-market buyer pays, and no honest page should tell you otherwise. What you get instead is certainty: a firm number within 24 hours, no financing contingency that can collapse three weeks in, no inspection renegotiation, no repairs, and a closing date you choose.
          </p>
          <p>
            In foreclosure that certainty has real value, because the risk is not just getting a lower price. It is running out of time entirely. A listing that falls through at day forty is worse than a cash sale that closed at day twenty, because a sheriff sale does not wait for your buyer&apos;s underwriting.
          </p>
          <p className="text-slate-900 font-semibold">
            So the honest question is not whether a cash offer is lower. It usually is. The question is whether the time you gain is worth more than the difference, and that depends entirely on how much time you actually have.
          </p>
        </div>
      </section>

      {/* Honest comparison */}
      <section className="bg-slate-50 py-14 px-4 border-y border-slate-200">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-serif text-3xl font-bold text-slate-900 mb-8">Cash Sale Versus Listing, Honestly</h2>
          <div className="grid sm:grid-cols-2 gap-5">
            <div className="rounded-xl border border-slate-200 bg-white p-6">
              <p className="font-bold text-slate-900 mb-3">A cash sale makes sense when</p>
              <ul className="space-y-2 text-sm text-slate-600 leading-relaxed">
                <li>A sheriff sale date is close and certainty matters more than the last dollar</li>
                <li>You cannot carry the mortgage, taxes, and upkeep for several more months</li>
                <li>The property needs work you cannot fund right now</li>
                <li>You want the process private, with no sign on the lawn and no open houses</li>
              </ul>
            </div>
            <div className="rounded-xl border border-slate-200 bg-white p-6">
              <p className="font-bold text-slate-900 mb-3">Listing usually wins when</p>
              <ul className="space-y-2 text-sm text-slate-600 leading-relaxed">
                <li>You have several months of runway before any sale date</li>
                <li>The home shows well and needs little work</li>
                <li>Your equity is large enough that the price difference outweighs the risk</li>
                <li>You can afford to carry the property while it sits on the market</li>
              </ul>
            </div>
          </div>
          <p className="text-slate-600 text-sm leading-relaxed mt-6">
            A cash buyer trades price for speed and certainty. That trade is genuinely worth it for some homeowners and clearly wrong for others, and the deciding factor is usually how much time you actually have. If you are not sure how much time that is, the{' '}
            <Link href="/tools/timeline" className="text-amber-700 font-semibold underline underline-offset-2">
              foreclosure timeline tool
            </Link>{' '}
            will show you where you stand before you decide anything.
          </p>
        </div>
      </section>

      {/* Process */}
      <section className="max-w-3xl mx-auto px-4 py-14">
        <h2 className="font-serif text-3xl font-bold text-slate-900 mb-8">How Their Process Works</h2>
        <div className="space-y-6">
          {[
            ['01', 'Request an offer', 'You submit details about the home, its features, and any upgrades.'],
            ['02', 'Offer within 24 hours', 'They state their offer is built from comparable sales, which they share with you, then adjusted for the property&rsquo;s specific features and market trends.'],
            ['03', 'Choose a closing date', 'They offer closing windows from 10 to 60 days, so the sale can line up with wherever you are moving next.'],
          ].map(([n, t, d]) => (
            <div key={n} className="flex gap-5">
              <span className="font-serif text-3xl font-bold text-amber-500/70 flex-shrink-0">{n}</span>
              <div>
                <p className="font-bold text-slate-900 mb-1">{t}</p>
                <p className="text-slate-600 text-sm leading-relaxed" dangerouslySetInnerHTML={{ __html: d }} />
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 rounded-xl border border-slate-300 bg-white p-6">
          <p className="font-bold text-slate-900 mb-3">Ask these before you sign anything</p>
          <ul className="space-y-2 text-sm text-slate-600 leading-relaxed">
            <li>What is my net proceeds figure in writing, after the service charge, repair deduction, and closing costs?</li>
            <li>What comparable sales did you use, and are they genuinely comparable to my home?</li>
            <li>After my mortgage and any liens are paid, how much surplus comes to me?</li>
            <li>Is the offer contingent on anything, and what happens if it is reduced after inspection?</li>
            <li>How long do I have to decide, and is that deadline real?</li>
          </ul>
          <p className="text-xs text-slate-500 mt-4 leading-relaxed">
            NJ Offer states that the service charge, repairs, and closing costs are deducted at close so nothing comes out of pocket. Deducted still means it comes out of your proceeds. At this price point a few percentage points is a large sum, so ask for the net number rather than the headline number. That is true of every cash buyer, not a criticism of this one.
          </p>
        </div>
      </section>

      {/* Equity warning */}
      <section className="max-w-3xl mx-auto px-4 pb-14">
        <div className="rounded-xl border-l-4 border-amber-500 bg-amber-50/60 p-6">
          <p className="font-bold text-slate-900 mb-2">If your home is worth more than you owe</p>
          <p className="text-slate-700 text-sm leading-relaxed">
            Any surplus after your lender is paid belongs to you, not to them. Before accepting a cash offer, make sure you know what you owe, what the offer nets you, and what is left over. If the equity is significant, an hour with a New Jersey attorney is worth it. We are not paid by attorneys, so we gain nothing by telling you this. If your home is above roughly $800,000, an off-market private sale may net you more than a cash offer while still avoiding a public listing.{' '}
            <Link href="/premium-properties" className="text-amber-700 font-semibold underline underline-offset-2">
              See the Premium Property Program
            </Link>.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-3xl mx-auto px-4 pb-16">
        <div className="rounded-2xl bg-slate-950 text-white px-8 py-12 text-center">
          <h2 className="font-serif text-2xl font-bold mb-3">See Where You Actually Stand First</h2>
          <p className="text-slate-300 mb-8 text-sm leading-relaxed max-w-xl mx-auto">
            The free assessment takes two minutes. If keeping the home is realistic, it tells you that before anything else. If selling is the right move, it shows you where to go, including options that pay us nothing.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/quiz" className="bg-amber-400 text-slate-950 px-8 py-3.5 rounded-lg font-bold hover:bg-amber-300 transition">
              Take the Free Assessment
            </Link>
            <a
              href="https://www.njoffer.com"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="border border-white/30 bg-white/5 text-white px-8 py-3.5 rounded-lg font-semibold hover:bg-white/15 transition"
            >
              Go to NJ Offer
            </a>
          </div>
        </div>

        <p className="text-xs text-slate-400 mt-8 leading-relaxed text-center max-w-2xl mx-auto">
          NJ Foreclosure Guide is an educational resource and is not affiliated with NJ Offer beyond a referral relationship. We are not a law firm, lender, or real estate brokerage, and nothing here is legal, tax, or financial advice. Details are drawn from NJ Offer&apos;s public website and may change. Confirm all terms directly with them and have an attorney review any offer before you sign.
        </p>
      </section>

      <footer className="bg-slate-950 text-slate-500 py-10 px-4 text-center text-xs">
        <p className="mb-2">&copy; 2026 NJ Foreclosure Guide. All rights reserved.</p>
        <p className="max-w-2xl mx-auto leading-relaxed">
          Educational resource only. Not a law firm, lender, or real estate company. Some home-buying partners pay us a referral fee; we are not paid by attorneys, and you are never charged.
        </p>
      </footer>
    </div>
  );
}
