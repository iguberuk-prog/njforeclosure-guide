import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'NJ Offer Review | Selling a High-Value NJ Home Facing Foreclosure',
  description:
    'What to know about NJ Offer, a New Jersey cash buyer working with higher-value and luxury property. Why foreclosure works differently above $800,000, how a cash sale compares to listing, and what to ask before accepting an offer.',
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
          <p className="text-amber-400 text-xs font-semibold tracking-[0.25em] uppercase mb-4">Higher-Value Property</p>
          <h1 className="font-serif text-4xl md:text-5xl font-bold mb-5 tracking-tight">NJ Offer</h1>
          <p className="text-slate-300 text-lg leading-relaxed">
            A New Jersey cash buyer working across all twenty-one counties, including higher-value and luxury property. If your home is worth more than most and you are facing foreclosure, your situation is genuinely different from the typical case, and the differences cut both ways.
          </p>
        </div>
      </section>

      {/* Disclosure up front */}
      <section className="max-w-3xl mx-auto px-4 pt-10">
        <div className="rounded-xl border border-amber-300 bg-amber-50 p-5">
          <p className="text-sm text-amber-900 leading-relaxed">
            <span className="font-bold">How we are paid:</span> NJ Offer is a referral partner, which means we receive a fee if you sell to them. You are never charged anything. At this price point especially, get more than one number before you commit. Nothing on this page is an appraisal, a valuation, or advice to accept any particular offer.
          </p>
        </div>
      </section>

      {/* Why high-value foreclosure is different */}
      <section className="max-w-3xl mx-auto px-4 py-14">
        <h2 className="font-serif text-3xl font-bold text-slate-900 mb-6">
          Why Foreclosure Is Different Above $800,000
        </h2>
        <div className="space-y-4 text-slate-600 leading-relaxed">
          <p>
            Most foreclosure advice is written for a homeowner with modest equity and a conventional loan. If your home is worth well above the state average, much of that advice does not fit cleanly, and some of it can actively mislead you.
          </p>
          <p>
            The advantage is equity. Expensive homes in foreclosure frequently carry real equity, sometimes hundreds of thousands of dollars. That equity is yours, not the lender&apos;s. A lender is entitled to what it is owed plus costs, and surplus from a sale belongs to the homeowner. This is the single most important thing for a high-value homeowner to understand, because the worst outcome is letting a property go to sheriff sale and losing equity that was legally yours the entire time.
          </p>
          <p>
            The disadvantage is liquidity. The buyer pool shrinks sharply as price rises. A $350,000 house in New Jersey has a deep pool of buyers. A $1.4 million house has a fraction of that, many of them financing through jumbo loans with longer underwriting and more fall-through risk. Higher-end property routinely sits on the market for months, and a foreclosure timeline does not pause while you wait for the right buyer to appear.
          </p>
          <p className="text-slate-900 font-semibold">
            That combination, real equity paired with slow liquidity, is exactly the squeeze a cash buyer is built for. It is also exactly the situation where accepting the first offer without checking it can be an expensive mistake.
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
          <p className="font-bold text-slate-900 mb-2">One thing worth repeating</p>
          <p className="text-slate-700 text-sm leading-relaxed">
            If you have substantial equity, speak with a New Jersey attorney before accepting any offer, and do it early rather than late. Not because anyone here is untrustworthy, but because the amount of money at stake easily justifies an hour of independent advice. An attorney can confirm what you owe, what surplus you are entitled to, and whether a sale, a reinstatement, or a Chapter 13 filing leaves you better off. We are not paid by attorneys, so we have nothing to gain by telling you this.
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
