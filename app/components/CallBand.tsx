import Link from 'next/link';
import { SITE_EMAIL, RESPONSE_PROMISE } from '../../lib/contact';
import { INDEPENDENCE_STATEMENT } from '../../lib/partners';

/**
 * Sitewide contact and independence band. Rendered from the root layout so
 * every page, including all 120 county and town pages, ends with a way to
 * reach us and a plain statement that we are paid by nobody.
 */
export default function CallBand() {
  return (
    <section className="bg-slate-900 border-t border-slate-800 px-4 py-10">
      <div className="max-w-4xl mx-auto flex flex-col sm:flex-row sm:justify-between gap-8">
        <div className="sm:max-w-md">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-400 mb-2">
            Independent, and paid by nobody
          </p>
          <p className="text-slate-300 text-sm leading-relaxed mb-4">{INDEPENDENCE_STATEMENT}</p>
          <a
            href={`mailto:${SITE_EMAIL}`}
            className="font-serif text-2xl font-bold text-white hover:text-amber-300 transition break-all"
          >
            {SITE_EMAIL}
          </a>
          <p className="text-slate-400 text-sm mt-2">{RESPONSE_PROMISE}</p>
        </div>
        <div className="flex flex-col gap-3 sm:items-end sm:justify-start">
          <Link
            href="/quiz"
            className="border border-white/25 bg-white/5 text-white px-6 py-3 rounded-lg font-semibold text-center hover:bg-white/15 transition"
          >
            Take the Free Assessment
          </Link>
          <p className="text-slate-500 text-xs sm:text-right max-w-xs leading-relaxed">
            Free, no obligation, nothing to sell you. We are not a law firm, a lender, or a real
            estate brokerage, and nothing here is legal advice.
          </p>
        </div>
      </div>
    </section>
  );
}
