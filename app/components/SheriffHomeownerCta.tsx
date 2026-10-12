'use client';

import Link from 'next/link';
import { trackEvent } from '../../lib/analytics';
import CallMeBox from './CallMeBox';

/**
 * "Is your home on this list?" box, shown right under the sale numbers on
 * each county sheriff page (2026-10-06). GA4 (Oct 2026) showed these pages
 * draw readers for 1-3 minutes but nothing on them asked a homeowner to act.
 *
 * 2026-10-12: leads with the one-tap "Have Samantha call me" request
 * (CallMeBox, cta_click cta: call_me); the quiz and the countdown stay as
 * do-it-yourself links underneath. Those clicks fire `cta_click`
 * (cta: sheriff_home_on_list) as before.
 */
export default function SheriffHomeownerCta({ slug, county }: { slug: string; county: string }) {
  const click = (target: string) => trackEvent('cta_click', { cta: 'sheriff_home_on_list', county: slug, target });
  return (
    <>
      <CallMeBox
        sourcePage={`/sheriff-sales/${slug}/`}
        headline="Is your home on this list? Samantha can call you today."
        sub={`Free, no obligation. For ${county} County homeowners, options often remain right up to the auction. She will go over your sale date and what is still open, and you decide what happens next.`}
      />
      <div className="-mt-6 mb-10 flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-5 text-sm text-slate-600">
        <span>Rather do it yourself?</span>
        <Link
          href={`/quiz?from=sheriff-${slug}`}
          onClick={() => click('quiz')}
          className="font-semibold text-slate-900 underline underline-offset-4"
        >
          See my options in 3 questions
        </Link>
        <Link
          href={`/tools/sheriff-sale-countdown?county=${slug}`}
          onClick={() => click('countdown')}
          className="font-semibold text-slate-900 underline underline-offset-4"
        >
          Count down to my sale date
        </Link>
      </div>
    </>
  );
}
