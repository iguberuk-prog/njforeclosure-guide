'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { trackEvent } from '../../lib/analytics';
import CallMeBox from './CallMeBox';

/**
 * Sticky bottom bar on phones: the two actions a scared homeowner needs
 * within thumb's reach on every page. Most visitors in foreclosure are on a
 * phone and never scroll to a footer.
 *
 * Left: the FREE HUD counselor line. Right (2026-10-12): "Samantha, call me",
 * which opens the one-tap call request (CallMeBox) in a sheet. GA4 showed
 * almost nobody used the plan button, and texted visitors leave without
 * typing, so the bar now offers a call back instead. Neither button sells
 * anything, so no brokerage disclosure is needed here; the BRC card still
 * carries its own wherever it appears. Spanish pages keep the plan button
 * (CallMeBox is English only). Hidden on md+ screens, in print, on /admin
 * and inside the embeddable /widget pages. ChatWidget sits above this bar on
 * mobile (bottom-20) so they never collide.
 */

export default function MobileHelpBar() {
  const pathname = usePathname() || '';
  const [open, setOpen] = useState(false);
  if (pathname.startsWith('/widget') || pathname.startsWith('/admin')) return null;
  const es = pathname.startsWith('/es');

  return (
    <>
      {/* spacer so the bar never covers the last lines of a page */}
      <div className="h-16 md:hidden print:hidden" aria-hidden />
      <div className="fixed bottom-0 inset-x-0 z-40 md:hidden print:hidden bg-slate-950/95 backdrop-blur border-t border-white/10 px-3 py-2 flex gap-2">
        <a
          href="tel:8005694287"
          onClick={() => trackEvent('mobile_bar_call_hud', { page: pathname })}
          className="flex-1 flex flex-col items-center justify-center rounded-lg border border-white/20 text-white py-1.5"
        >
          <span className="text-[10px] uppercase tracking-wider text-amber-400 font-bold">
            {es ? 'Consejero gratis' : 'Free counselor'}
          </span>
          <span className="text-sm font-bold">800-569-4287</span>
        </a>
        {es ? (
          <Link
            href="/es/centro-de-mando"
            onClick={() => trackEvent('mobile_bar_plan', { page: pathname })}
            className="flex-1 flex items-center justify-center rounded-lg bg-amber-400 text-slate-950 text-sm font-bold py-1.5"
          >
            Mi plan gratis →
          </Link>
        ) : (
          <button
            type="button"
            onClick={() => {
              trackEvent('mobile_bar_call_me', { page: pathname });
              setOpen(true);
            }}
            className="flex-1 flex flex-col items-center justify-center rounded-lg bg-amber-400 text-slate-950 py-1.5"
          >
            <span className="text-[10px] uppercase tracking-wider font-bold">Free, no obligation</span>
            <span className="text-sm font-bold">Samantha, call me</span>
          </button>
        )}
      </div>

      {open && !es && (
        <div className="fixed inset-0 z-50 md:hidden print:hidden flex flex-col justify-end" role="dialog" aria-modal="true" aria-label="Ask Samantha to call you">
          <button type="button" aria-label="Close" onClick={() => setOpen(false)} className="absolute inset-0 bg-slate-950/60" />
          <div className="relative bg-white rounded-t-2xl px-4 pt-4 pb-2 max-h-[90vh] overflow-y-auto">
            <div className="flex justify-end mb-1">
              <button type="button" onClick={() => setOpen(false)} className="text-slate-500 text-sm font-semibold px-2 py-1">
                Close ✕
              </button>
            </div>
            <CallMeBox sourcePage={pathname || '/'} headline="Samantha can call you today." />
          </div>
        </div>
      )}
    </>
  );
}
