import Link from 'next/link';

/**
 * The brokerage card, shown wherever a sale is a live option: quiz results
 * (sell-leaning outcomes), the compare page, and the net-proceeds calculator.
 *
 * Placement rule (do not weaken): the connection is stated in the first
 * sentence, above the pitch, readable without a click or a hover. Within
 * that rule, this card is deliberately prominent: it is the operators' own
 * brokerage and the site says so with its chest out rather than in a
 * footnote. Phone stays on the brokerage's own page only.
 */
export default function BrcCard({ compact = false }: { compact?: boolean }) {
  return (
    <div className="rounded-2xl border-2 border-blue-200 bg-blue-50/40 px-6 py-6">
      <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-blue-800 mb-3">
        Our brokerage · Related business
      </p>
      <div className="flex flex-wrap items-center gap-4 mb-3">
        <span className="bg-white border border-slate-200 rounded-lg px-3 py-2">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/partners/brc-corcoran-sawyer-smith.png"
            alt="Corcoran Sawyer Smith x Builders Resource Center"
            className="h-8 max-w-[260px] object-contain"
          />
        </span>
      </div>
      <p className="text-slate-700 text-sm leading-relaxed mb-3">
        <strong className="text-slate-900">This one is ours:</strong> the people behind NJ
        Foreclosure Guide hold an ownership interest in Corcoran Sawyer Smith x Builders Resource
        Center, a licensed New Jersey brokerage, so we benefit if you list with them. With that on
        the table: if selling is on your list, the smartest first step is knowing what the property
        is actually worth, and they will tell you for free, with no obligation to list.
      </p>
      {!compact && (
        <p className="text-slate-600 text-sm leading-relaxed mb-4">
          A real number changes every decision that follows: whether reinstating is worth it,
          whether a cash offer is fair, and how much equity a market sale protects. Interview other
          agents too; we say that on every page.
        </p>
      )}
      <div className="flex flex-col sm:flex-row gap-2">
        <Link
          href="/companies/brc-corcoran-sawyer-smith"
          className="flex-1 text-center bg-slate-900 text-white px-5 py-2.5 rounded-lg font-semibold hover:bg-slate-800 transition text-sm"
        >
          Get a Free Home Valuation
        </Link>
        <a
          href="https://brcnj.com"
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 text-center border border-slate-300 text-slate-800 px-5 py-2.5 rounded-lg font-semibold hover:bg-white transition text-sm"
        >
          Visit brcnj.com
        </a>
      </div>
    </div>
  );
}
