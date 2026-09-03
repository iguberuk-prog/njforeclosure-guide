import Link from 'next/link';
import SiteHeader from './SiteHeader';
import OfferConcierge from './OfferConcierge';
import BrcCard from './BrcCard';

/**
 * The shared body for the three sell-intent landing pages. These are money
 * pages: they exist to catch "sell my house fast" searches and convert them
 * into concierge requests. The discipline that keeps them worth ranking:
 *
 *  - Honest math before the form. We say out loud that cash offers run below
 *    market and when a market sale is the better trade. The credibility is
 *    the conversion strategy; a visitor who feels leveled-with fills the form.
 *  - No rescue promises. Nothing here claims to stop or prevent a
 *    foreclosure; timing facts (a completed sale before the auction date
 *    moots the case) are stated as facts.
 *  - The BRC card carries its ownership disclosure wherever it appears.
 */

export interface SellPageSpec {
  slug: string;
  eyebrow: string;
  h1: string;
  intro: string;
  bullets: [string, string][];
  math: string[];
  faq: { q: string; a: string }[];
}

export default function SellLanding({ spec }: { spec: SellPageSpec }) {
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: spec.faq.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  };

  return (
    <div className="min-h-full bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <SiteHeader />

      {/* Hero */}
      <section className="bg-gradient-to-b from-slate-950 to-slate-900 text-white py-16 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-amber-400 text-xs font-semibold tracking-[0.25em] uppercase mb-4">{spec.eyebrow}</p>
          <h1 className="font-serif text-4xl md:text-5xl font-bold mb-5 tracking-tight">{spec.h1}</h1>
          <p className="text-slate-300 text-lg leading-relaxed">{spec.intro}</p>
        </div>
      </section>

      {/* What actually happens */}
      <section className="max-w-3xl mx-auto px-4 pt-14 pb-4">
        <h2 className="font-serif text-3xl font-bold text-slate-900 mb-6">How This Actually Works</h2>
        <div className="grid sm:grid-cols-2 gap-3">
          {spec.bullets.map(([t, d]) => (
            <div key={t} className="border border-slate-200 rounded-xl px-5 py-4">
              <p className="font-bold text-slate-900 text-sm">{t}</p>
              <p className="text-slate-600 text-sm mt-1 leading-relaxed">{d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Honest math */}
      <section className="max-w-3xl mx-auto px-4 py-10">
        <div className="rounded-2xl border border-slate-200 bg-slate-50 px-6 py-6">
          <h2 className="font-serif text-2xl font-bold text-slate-900 mb-3">The Honest Math First</h2>
          <div className="space-y-3">
            {spec.math.map((p, i) => (
              <p key={i} className="text-slate-700 text-[15px] leading-relaxed">{p}</p>
            ))}
          </div>
          <p className="mt-4">
            <Link href="/tools/net-proceeds" className="text-slate-900 font-semibold underline underline-offset-4 text-sm">
              Run your own numbers with the free net-proceeds calculator →
            </Link>
          </p>
        </div>
      </section>

      {/* The concierge form — the conversion */}
      <section className="max-w-3xl mx-auto px-4 pb-4">
        <OfferConcierge sourcePage={`/${spec.slug}`} />
      </section>

      {/* Know what it's worth first */}
      <section className="max-w-3xl mx-auto px-4 py-10">
        <BrcCard compact />
      </section>

      {/* FAQ */}
      <section className="bg-slate-50 py-14 px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-serif text-3xl font-bold text-slate-900 mb-8">Straight Answers</h2>
          <div className="space-y-3">
            {spec.faq.map((item, idx) => (
              <details key={idx} className="group bg-white rounded-xl px-6 py-5 border border-slate-200 cursor-pointer">
                <summary className="font-semibold text-slate-900 flex justify-between items-center gap-4 select-none list-none">
                  <span>{item.q}</span>
                  <span className="flex-shrink-0 w-6 h-6 flex items-center justify-center rounded-full border border-slate-300 text-slate-500 group-open:bg-slate-900 group-open:text-white transition text-xs">+</span>
                </summary>
                <p className="text-slate-600 mt-4 leading-relaxed text-[15px]">{item.a}</p>
              </details>
            ))}
          </div>
          <p className="text-center mt-10">
            <Link href="/compare" className="text-slate-600 hover:text-slate-900 text-sm underline underline-offset-2">
              Not sure selling is right? Compare all 7 options side by side.
            </Link>
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 text-slate-500 py-10 px-4 text-center text-xs">
        <p className="mb-2">© 2026 NJ Foreclosure Guide. All rights reserved.</p>
        <p className="max-w-2xl mx-auto leading-relaxed">
          Independent educational resource. Not a law firm, lender, or real estate company. We take
          no referral fees, no commissions and no advertising money from anything listed. One
          destination is a related business, labeled wherever it appears. You are never charged.
          Always consult licensed professionals about your specific situation.
        </p>
      </footer>
    </div>
  );
}
