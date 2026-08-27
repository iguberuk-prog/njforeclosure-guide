import Link from 'next/link';
import SiteHeader from '../components/SiteHeader';
import RecommendationBasis from '../components/RecommendationBasis';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Premium Property Program | Luxury Home Foreclosure Help in New Jersey',
  description:
    'Discreet guidance for New Jersey homeowners with property valued at $800,000 and above who are facing foreclosure. Protect your equity, understand jumbo loan timelines, and sell privately without listing or open houses.',
  alternates: { canonical: 'https://njforeclosureguide.org/premium-properties/' },
  openGraph: {
    title: 'Premium Property Program | Luxury Home Foreclosure Help in NJ',
    description:
      'Discreet foreclosure guidance for New Jersey homes valued at $800,000 and above. Protect your equity and sell privately.',
    url: 'https://njforeclosureguide.org/premium-properties/',
  },
};

export default function PremiumPropertiesPage() {
  return (
    <div className="min-h-full bg-[#0B1120]">
      <SiteHeader />

      {/* Hero */}
      <section className="relative overflow-hidden border-b border-white/10">
        <div
          className="absolute inset-0 opacity-40"
          style={{
            backgroundImage: `url('/images/canva/hero-premium.jpg')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0B1120]/70 via-[#0B1120]/85 to-[#0B1120]" />
        <div className="relative z-10 max-w-3xl mx-auto px-4 py-28 text-center">
          <p className="text-amber-400 text-[11px] font-semibold tracking-[0.35em] uppercase mb-6">
            $800,000 and Above
          </p>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-7 leading-[1.1] tracking-tight">
            When the House Is Worth More,
            <br className="hidden sm:block" /> So Is the <span className="text-amber-400">Mistake</span>
          </h1>
          <p className="text-slate-300 text-lg leading-relaxed max-w-2xl mx-auto mb-10">
            Foreclosure advice is written for the average home. Yours is not average. At this level the equity at stake is often six figures, the buyer pool is thin, and the wrong move costs more than most people lose on a house entirely. This program exists for that situation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/quiz"
              className="bg-amber-400 text-slate-950 px-10 py-4 rounded-lg font-bold hover:bg-amber-300 transition text-base shadow-xl shadow-amber-400/10"
            >
              Start Confidential Assessment
            </Link>
            <Link
              href="/tools/timeline"
              className="border border-white/25 bg-white/5 text-white px-10 py-4 rounded-lg font-semibold hover:bg-white/10 transition text-base"
            >
              How Much Time Do I Have?
            </Link>
          </div>
          <p className="text-slate-500 text-xs mt-8 tracking-wide">
            No listing · No open houses · No sign on the lawn
          </p>
        </div>
      </section>

      {/* The three forces */}
      <section className="max-w-5xl mx-auto px-4 py-24">
        <div className="text-center mb-16">
          <p className="text-amber-400 text-[11px] font-semibold tracking-[0.3em] uppercase mb-4">Why This Is Different</p>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-white tracking-tight">
            Three Forces Working Against You at Once
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {[
            [
              'Equity You Can Lose',
              'High-value homes in foreclosure frequently hold substantial equity. That surplus is legally yours, not the lender&rsquo;s. The worst outcome is a sheriff sale that wipes out money you were entitled to keep.',
            ],
            [
              'A Thin Buyer Pool',
              'The higher the price, the fewer the buyers. Many finance through jumbo loans with longer underwriting and greater fall-through risk. Listings at this level routinely sit for months.',
            ],
            [
              'A Clock That Does Not Wait',
              'The foreclosure calendar keeps moving while a luxury listing waits for the right buyer. That gap between market time and legal time is where high-value homeowners get caught.',
            ],
          ].map(([title, body], i) => (
            <div
              key={i}
              className="rounded-2xl border border-white/10 bg-white/[0.03] p-8 hover:bg-white/[0.06] transition"
            >
              <div className="w-10 h-10 rounded-full border border-amber-400/40 bg-amber-400/10 flex items-center justify-center mb-6">
                <span className="font-serif text-amber-400 font-bold">{i + 1}</span>
              </div>
              <h3 className="font-bold text-white text-lg mb-3">{title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed" dangerouslySetInnerHTML={{ __html: body }} />
            </div>
          ))}
        </div>
      </section>

      {/* Discretion */}
      <section className="border-y border-white/10 bg-white/[0.02]">
        <div className="max-w-3xl mx-auto px-4 py-20">
          <p className="text-amber-400 text-[11px] font-semibold tracking-[0.3em] uppercase mb-4">Discretion</p>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-white mb-6 tracking-tight">
            Privacy Is Not a Luxury Here. It Is the Point.
          </h2>
          <div className="space-y-4 text-slate-400 leading-relaxed">
            <p>
              A listing at this price point is a public event. Neighbors notice. Colleagues notice. In smaller New Jersey towns, so does everyone else. When the sale is driven by financial pressure rather than choice, that visibility carries a cost that has nothing to do with money.
            </p>
            <p>
              Foreclosure filings are already public record in New Jersey, which surprises most homeowners. What you can still control is the marketing: whether a sign goes up, whether strangers walk through your home on a Sunday afternoon, and whether the sale is announced to the market at all.
            </p>
            <p className="text-white font-semibold">
              A direct sale can be completed without any of that. No listing, no showings, no photographs online, no sign.
            </p>
          </div>
        </div>
      </section>

      {/* Options */}
      <section className="max-w-5xl mx-auto px-4 py-24">
        <div className="text-center mb-14">
          <p className="text-amber-400 text-[11px] font-semibold tracking-[0.3em] uppercase mb-4">Your Options</p>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-white tracking-tight mb-4">
            Selling Is One Path, Not the Only One
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto leading-relaxed">
            We will tell you when keeping the home is realistic, even though we earn nothing when you do.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {[
            ['Reinstatement', 'Bring the loan current in a lump sum. Often viable at this level where liquid assets or other property exist.', 'Keep'],
            ['Loan Modification', 'Renegotiate terms with the servicer. Jumbo and portfolio loans are handled differently than conforming loans, so specialist help matters.', 'Keep'],
            ['Chapter 13 Protection', 'Court protection that halts a sheriff sale and lets you cure arrears over time. Frequently the strongest tool when equity is large.', 'Keep'],
            ['Direct Sale', 'A private cash sale on a chosen closing date. Trades some price for certainty, speed, and complete discretion.', 'Sell'],
            ['Traditional Listing', 'Highest likely price if you have months of runway and can carry the property while it sits on the market.', 'Sell'],
            ['Short Sale', 'Relevant only if you owe more than the home is worth, which is less common at this level but does happen after refinancing.', 'Sell'],
          ].map(([title, body, tag], i) => (
            <div key={i} className="rounded-xl border border-white/10 bg-white/[0.03] p-6">
              <div className="flex items-center justify-between mb-3">
                <h3 className="font-bold text-white">{title}</h3>
                <span
                  className={`text-[10px] font-bold uppercase tracking-wider rounded-full px-2.5 py-1 border ${
                    tag === 'Keep'
                      ? 'text-emerald-300 bg-emerald-400/10 border-emerald-400/30'
                      : 'text-amber-300 bg-amber-400/10 border-amber-400/30'
                  }`}
                >
                  {tag} the home
                </span>
              </div>
              <p className="text-slate-400 text-sm leading-relaxed">{body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Equity protection */}
      <section className="border-y border-white/10 bg-white/[0.02]">
        <div className="max-w-3xl mx-auto px-4 py-20">
          <div className="rounded-2xl border-l-4 border-amber-400 bg-amber-400/[0.06] p-8">
            <p className="text-amber-400 text-[11px] font-semibold tracking-[0.3em] uppercase mb-4">Protect the Surplus</p>
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-white mb-5 tracking-tight">
              The Single Most Expensive Mistake
            </h2>
            <p className="text-slate-300 leading-relaxed mb-4">
              A lender is entitled to what it is owed, plus costs and fees. Anything beyond that belongs to you. Homeowners with significant equity sometimes disengage as foreclosure advances, and the property is sold at sheriff sale while they assume there was nothing left to protect.
            </p>
            <p className="text-white font-semibold leading-relaxed">
              If your home is worth substantially more than you owe, speak with a New Jersey attorney before you do anything else, including talking to us. We are not paid by attorneys, so we gain nothing by saying this.
            </p>
          </div>
        </div>
      </section>

      {/* Referral partner */}
      <section className="max-w-3xl mx-auto px-4 py-24">
        <p className="text-amber-400 text-[11px] font-semibold tracking-[0.3em] uppercase mb-4">If You Decide to Sell</p>
        <h2 className="font-serif text-3xl font-bold text-white mb-6 tracking-tight">Our Off-Market Partner</h2>
        <p className="text-slate-400 leading-relaxed mb-5">
          For homeowners at this level, we refer to Private Sale Group, which handles luxury property as an off-market transaction rather than a public listing. They evaluate the home privately, present it to a network of qualified buyers, and let you set the timeline and terms. No sign, no open houses, no MLS exposure.
        </p>
        <p className="text-slate-400 leading-relaxed mb-8">
          They state there are no commissions and no repairs required, which at this price point is the difference that tends to matter most. On an $850,000 sale, standard commission alone runs into the tens of thousands before repairs, credits, or holding costs. They are active in Short Hills, Summit, Westfield, Chatham, and Madison, among other high-value areas.
        </p>

        <div className="rounded-xl border border-white/10 bg-white/[0.03] p-6 mb-6">
          <p className="text-sm text-slate-400 leading-relaxed">
            <span className="font-bold text-white">Worth knowing: </span>
            Private Sale Group reviews each property individually and states that not every property qualifies. If yours does not fit an off-market sale, that is useful information rather than a dead end, and a conventional listing or a direct cash sale may serve you better. Our assessment covers those paths too.
          </p>
        </div>

        <div className="rounded-xl border border-amber-400/30 bg-amber-400/[0.06] p-5 mb-8">
          <p className="text-sm text-amber-200/90 leading-relaxed">
            <span className="font-bold">Our relationship with them: none.</span> We are not paid by Private Sale Group, we are not affiliated with them, and we receive nothing whether you contact them or not. At this price point especially, get more than one number before you commit. Nothing here is an appraisal, a valuation, or advice to accept any offer.
          </p>
        </div>

        <div className="mb-8">
          <RecommendationBasis tone="dark" />
        </div>

        <div className="flex flex-col sm:flex-row gap-3">
          <Link
            href="/companies/private-sale-group"
            className="flex-1 text-center border border-white/25 bg-white/5 text-white px-8 py-3.5 rounded-lg font-semibold hover:bg-white/10 transition"
          >
            Read Our Full Review First
          </Link>
          <a
            href="https://privatesalegroup.com"
            target="_blank"
            rel="noopener noreferrer nofollow"
            className="flex-1 text-center bg-amber-400 text-slate-950 px-8 py-3.5 rounded-lg font-bold hover:bg-amber-300 transition"
          >
            Go to Private Sale Group
          </a>
        </div>

        <p className="text-slate-500 text-sm leading-relaxed mt-8">
          If speed matters more than price, for example when a sheriff sale date is close, a direct cash buyer such as{' '}
          <Link href="/companies/njoffer" className="text-amber-400/90 underline underline-offset-2 hover:text-amber-300">
            NJ Offer
          </Link>{' '}
          can close faster, typically 10 to 60 days. That path trades price for certainty.
        </p>
      </section>

      {/* CTA */}
      <section className="max-w-3xl mx-auto px-4 pb-24">
        <div className="rounded-2xl border border-amber-400/20 bg-gradient-to-b from-white/[0.06] to-transparent px-8 py-14 text-center">
          <h2 className="font-serif text-3xl font-bold text-white mb-4 tracking-tight">Start With Where You Actually Stand</h2>
          <p className="text-slate-400 mb-9 leading-relaxed max-w-xl mx-auto">
            Two minutes, completely confidential. If keeping the home is realistic, the assessment says so first. If selling is right, it shows you where to go, including options that pay us nothing.
          </p>
          <Link
            href="/quiz"
            className="inline-block bg-amber-400 text-slate-950 px-12 py-4 rounded-lg font-bold hover:bg-amber-300 transition text-lg shadow-xl shadow-amber-400/10"
          >
            Begin Confidential Assessment
          </Link>
        </div>

        <p className="text-[11px] text-slate-600 mt-10 leading-relaxed text-center max-w-2xl mx-auto">
          NJ Foreclosure Guide is an educational resource. We are not a law firm, lender, real estate brokerage, or financial advisor, and nothing on this page is legal, tax, or financial advice. Equity, surplus, and timeline outcomes depend entirely on your specific loan, liens, and circumstances. Always consult a licensed New Jersey attorney before making decisions about your property.
        </p>
      </section>

      <footer className="border-t border-white/10 py-10 px-4 text-center">
        <p className="text-slate-600 text-xs mb-3">&copy; 2026 NJ Foreclosure Guide. All rights reserved.</p>
        <div className="flex gap-6 justify-center text-xs text-slate-500">
          <Link href="/" className="hover:text-amber-400 transition">Home</Link>
          <Link href="/quiz" className="hover:text-amber-400 transition">Assessment</Link>
          <Link href="/guides" className="hover:text-amber-400 transition">Guides</Link>
          <Link href="/tools/timeline" className="hover:text-amber-400 transition">Timeline Tool</Link>
        </div>
      </footer>
    </div>
  );
}
