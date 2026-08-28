import Link from 'next/link';
import SiteHeader from '../../components/SiteHeader';
import RecommendationBasis from '../../components/RecommendationBasis';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Clik Offer Review | Sell a NJ House Fast, Close in as Little as 7 Days',
  description:
    'What to know about Clik Offer, a local New Jersey cash homebuyer serving Hillsborough, Somerset County and statewide. How a 7-day close works, when speed is worth the price, and what to ask before accepting an offer.',
  alternates: { canonical: 'https://njforeclosureguide.org/companies/clik-offer/' },
};

export default function ClikOfferPage() {
  return (
    <div className="min-h-full bg-white">
      <SiteHeader />

      {/* Hero */}
      <section className="bg-gradient-to-b from-slate-950 to-slate-900 text-white py-16 px-4">
        <div className="max-w-3xl mx-auto">
          <p className="text-amber-400 text-xs font-semibold tracking-[0.25em] uppercase mb-4">Fastest Close · As Little as 7 Days</p>
          <span className="inline-block bg-white rounded-xl px-4 py-2.5 mb-5">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/images/partners/clik-offer.png" alt="" className="h-9 max-w-[240px] object-contain" />
          </span>
          <h1 className="font-serif text-4xl md:text-5xl font-bold mb-5 tracking-tight">Clik Offer</h1>
          <p className="text-slate-300 text-lg leading-relaxed">
            A local New Jersey cash homebuyer serving Hillsborough, Bridgewater, Somerset County and homeowners statewide. They buy as-is, state they cover typical closing costs, and can close in as little as seven days. When a sheriff sale date is weeks away, that speed is the whole point.
          </p>
        </div>
      </section>

      {/* Disclosure */}
      <section className="max-w-3xl mx-auto px-4 pt-10">
        <div className="rounded-xl border border-amber-300 bg-amber-50 p-5">
          <p className="text-sm text-amber-900 leading-relaxed">
            <span className="font-bold">Our relationship with them: none.</span> We are not paid by Clik Offer, we are not affiliated with them, and we receive nothing whether you contact them or not. They are listed because they may fit some situations. Get more than one offer before you commit. Nothing on this page is an appraisal, a valuation, or advice to accept any particular offer.</p>
        </div>
      </section>

      <section className="max-w-3xl mx-auto px-4 pt-8">
        <RecommendationBasis />
      </section>

      {/* Call this partner directly */}
      <section className="max-w-3xl mx-auto px-4 pt-8">
        <a
          href="tel:+17323541121"
          className="flex items-center justify-between gap-4 rounded-xl border border-slate-300 bg-white px-6 py-5 hover:border-slate-900 hover:shadow-md transition"
        >
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-slate-500 mb-1">Call Clik Offer directly</p>
            <p className="font-bold text-xl text-slate-900">(732) 354-1121</p>
          </div>
          <span className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-amber-100 border border-amber-300 text-amber-700 text-xl">
            &#9742;
          </span>
        </a>
        <p className="text-xs text-slate-500 mt-2">
          This is Clik Offer&apos;s own number, published on their site. You will reach them, not us.
        </p>
      </section>

      {/* When 7 days matters */}
      <section className="max-w-3xl mx-auto px-4 py-14">
        <h2 className="font-serif text-3xl font-bold text-slate-900 mb-6">When Seven Days Is the Only Thing That Matters</h2>
        <div className="space-y-4 text-slate-600 leading-relaxed">
          <p>
            Most of the time, speed is a convenience. In foreclosure it can be the difference between walking away with your equity and losing it at auction. If a sheriff sale is scheduled and there is no realistic way to stop it, a sale that closes before that date protects whatever equity you have. A sale that closes after it protects nothing.
          </p>
          <p>
            That is the narrow situation this exists for. Clik Offer states they present an offer promptly, often during the first conversation, and can complete closing in as little as seven days, while accommodating a longer timeline if you want one.
          </p>
          <p className="text-slate-900 font-semibold">
            Be clear-eyed about the trade. The fastest buyer is rarely the highest buyer. You are paying for certainty and a date, and in the right circumstances that is worth far more than the difference.
          </p>
        </div>
      </section>

      {/* Compare the fast options */}
      <section className="bg-slate-50 py-14 px-4 border-y border-slate-200">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-serif text-3xl font-bold text-slate-900 mb-4">How the Fast Options Differ</h2>
          <p className="text-slate-600 leading-relaxed mb-8">
            We refer to more than one cash buyer because they are not interchangeable. Match the buyer to your actual deadline.
          </p>
          <div className="space-y-4">
            {[
              ['Clik Offer', 'As little as 7 days', 'The tightest deadlines. A sale date is close and closing speed outranks everything else.', true],
              ['NJ Offer', '10 to 60 days', 'You need certainty but have a few weeks, and want to line the closing up with your move.', false],
              ['Fire Home Buyers', 'Offer in 24 hours, your close date', 'The property has fire or smoke damage and needs a specialist buyer.', false],
            ].map(([name, time, when, hl], i) => (
              <div key={i} className={`rounded-xl border p-6 ${hl ? 'border-amber-300 bg-amber-50/60' : 'border-slate-200 bg-white'}`}>
                <div className="flex flex-wrap items-baseline justify-between gap-2 mb-2">
                  <p className="font-bold text-slate-900">{name as string}</p>
                  <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">{time as string}</span>
                </div>
                <p className="text-slate-600 text-sm leading-relaxed">{when as string}</p>
              </div>
            ))}
          </div>
          <p className="text-slate-600 text-sm leading-relaxed mt-6">
            If your sale date is further out than you think, listing on the open market may net you considerably more. Check{' '}
            <Link href="/tools/timeline" className="text-amber-700 font-semibold underline underline-offset-2">
              where you stand in the process
            </Link>{' '}
            before assuming you are out of time.
          </p>
        </div>
      </section>

      {/* Their process */}
      <section className="max-w-3xl mx-auto px-4 py-14">
        <h2 className="font-serif text-3xl font-bold text-slate-900 mb-8">How Their Process Works</h2>
        <div className="space-y-6">
          {[
            ['01', 'Contact them', 'You share the property and your situation.'],
            ['02', 'Get an offer', 'They state an offer often comes during that first conversation, rather than after a wait.'],
            ['03', 'Review and decide', 'They state there is no pressure and you can take time to discuss it with family.'],
            ['04', 'Close and get paid', 'They handle the paperwork and can close in as little as 7 days, or longer if you prefer.'],
          ].map(([n, t, d]) => (
            <div key={n as string} className="flex gap-5">
              <span className="font-serif text-3xl font-bold text-amber-500/70 flex-shrink-0">{n as string}</span>
              <div>
                <p className="font-bold text-slate-900 mb-1">{t as string}</p>
                <p className="text-slate-600 text-sm leading-relaxed">{d as string}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 rounded-xl border border-slate-300 bg-white p-6">
          <p className="font-bold text-slate-900 mb-3">Ask these before you accept</p>
          <ul className="space-y-2 text-sm text-slate-600 leading-relaxed">
            <li>What is my net amount in writing, after every cost and deduction?</li>
            <li>Which closing costs do you cover, and which remain mine?</li>
            <li>Will the proceeds satisfy my mortgage in full, and will the lender release the lien before the sale date?</li>
            <li>If there is a shortfall, am I still responsible for it?</li>
            <li>Can the offer be reduced after inspection, and under what circumstances?</li>
          </ul>
          <p className="text-xs text-slate-500 mt-4 leading-relaxed">
            A fast close only helps if it actually closes before your sale date and clears the lien. Confirm both in writing, and tell them your exact deadline up front so the timeline can be built around it.
          </p>
        </div>
      </section>

      {/* Equity note */}
      <section className="max-w-3xl mx-auto px-4 pb-14">
        <div className="rounded-xl border-l-4 border-amber-500 bg-amber-50/60 p-6">
          <p className="font-bold text-slate-900 mb-2">If you have equity, protect it</p>
          <p className="text-slate-700 text-sm leading-relaxed">
            Anything left after your lender is paid belongs to you. Before accepting any fast offer, know what you owe and what the offer nets you. If the equity is significant, have a New Jersey attorney review it, and do that today rather than the week of the sale. We are not paid by attorneys, so we gain nothing by telling you this.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-3xl mx-auto px-4 pb-16">
        <div className="rounded-2xl bg-slate-950 text-white px-8 py-12 text-center">
          <h2 className="font-serif text-2xl font-bold mb-3">Check Your Timeline First</h2>
          <p className="text-slate-300 mb-8 text-sm leading-relaxed max-w-xl mx-auto">
            The free assessment takes two minutes. If you have more time than you think, it will show you options that pay you more. If you genuinely need to close fast, it will say that too.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/quiz" className="bg-amber-400 text-slate-950 px-8 py-3.5 rounded-lg font-bold hover:bg-amber-300 transition">
              Take the Free Assessment
            </Link>
            <a
              href="https://clikoffer.com"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="border border-white/30 bg-white/5 text-white px-8 py-3.5 rounded-lg font-semibold hover:bg-white/15 transition"
            >
              Go to Clik Offer
            </a>
          </div>
        </div>

        <p className="text-xs text-slate-400 mt-8 leading-relaxed text-center max-w-2xl mx-auto">
          NJ Foreclosure Guide is an independent educational resource. We have no affiliation, referral relationship, or financial arrangement of any kind with Clik Offer. We are not a law firm, lender, or real estate brokerage, and nothing here is legal, tax, or financial advice. Details are drawn from Clik Offer&apos;s public website and may change. Confirm all terms directly with them and consider having an attorney review any offer before you sign.
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
