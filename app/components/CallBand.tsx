import Link from 'next/link';
import { SITE_PHONE_DISPLAY, SITE_PHONE_TEL, SITE_EMAIL, RESPONSE_PROMISE } from '../../lib/contact';

/**
 * Sitewide contact band. Rendered from the root layout so every page, including
 * all 120 county and town pages, ends with a phone number and a response-time
 * promise rather than dead-ending.
 */
export default function CallBand() {
  return (
    <section className="bg-slate-900 border-t border-slate-800 px-4 py-10">
      <div className="max-w-4xl mx-auto flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-400 mb-2">
            Talk to a person
          </p>
          <a
            href={`tel:${SITE_PHONE_TEL}`}
            className="font-serif text-3xl font-bold text-white hover:text-amber-300 transition"
          >
            {SITE_PHONE_DISPLAY}
          </a>
          <p className="text-slate-400 text-sm mt-2 max-w-md leading-relaxed">{RESPONSE_PROMISE}</p>
          <p className="text-slate-500 text-xs mt-1">
            Or email{' '}
            <a href={`mailto:${SITE_EMAIL}`} className="underline underline-offset-2 hover:text-slate-300">
              {SITE_EMAIL}
            </a>
          </p>
        </div>
        <div className="flex flex-col gap-3 sm:items-end">
          <a
            href={`tel:${SITE_PHONE_TEL}`}
            className="sm:hidden bg-amber-400 text-slate-950 px-6 py-3 rounded-lg font-bold text-center"
          >
            Call Now
          </a>
          <Link
            href="/quiz"
            className="border border-white/25 bg-white/5 text-white px-6 py-3 rounded-lg font-semibold text-center hover:bg-white/15 transition"
          >
            Take the Free Assessment
          </Link>
          <p className="text-slate-500 text-xs sm:text-right max-w-xs leading-relaxed">
            Free, no obligation. We are not a law firm or a lender, and nothing here is legal advice.
          </p>
        </div>
      </div>
    </section>
  );
}
