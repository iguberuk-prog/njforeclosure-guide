'use client';

import Link from 'next/link';
import { trackEvent } from '../../lib/analytics';

/**
 * "Is your home on this list?" box, shown right under the sale numbers on
 * each county sheriff page (2026-10-06). GA4 (Oct 2026) showed these pages
 * draw readers for 1-3 minutes but nothing on them asked a homeowner to act.
 * Clicks fire `cta_click` (cta: sheriff_home_on_list) so we can see whether
 * the box works; the quiz fires `quiz_start` with `from` when they begin.
 */
export default function SheriffHomeownerCta({ slug, county }: { slug: string; county: string }) {
  const click = (target: string) => trackEvent('cta_click', { cta: 'sheriff_home_on_list', county: slug, target });
  return (
    <div className="rounded-2xl border-2 border-amber-400 bg-amber-50 px-6 py-6 mb-10">
      <p className="font-serif text-2xl font-bold text-slate-900 mb-2">Is your home on this list?</p>
      <p className="text-slate-700 leading-relaxed mb-5">
        See your options before the sale date, free. It takes about two minutes, there is nothing to sign, and
        you choose what happens next. For {county}{' '}County homeowners, options often remain right up to the auction.
      </p>
      <div className="flex flex-col sm:flex-row gap-3">
        <Link
          href={`/quiz?from=sheriff-${slug}`}
          onClick={() => click('quiz')}
          className="bg-amber-400 text-slate-950 px-6 py-3 rounded-lg font-bold text-center hover:bg-amber-300 transition"
        >
          See my options, free
        </Link>
        <Link
          href={`/tools/sheriff-sale-countdown?county=${slug}`}
          onClick={() => click('countdown')}
          className="border border-slate-300 bg-white text-slate-900 px-6 py-3 rounded-lg font-semibold text-center hover:bg-slate-50 transition"
        >
          Count down to my sale date
        </Link>
      </div>
    </div>
  );
}
