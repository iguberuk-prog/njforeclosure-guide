'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { trackEvent } from '../../lib/analytics';

/**
 * Sticky bottom bar on phones: the two actions a scared homeowner needs
 * within thumb's reach on every page — call the FREE HUD counselor line, or
 * build their free plan. Most visitors in foreclosure are on a phone and
 * never scroll to a footer.
 *
 * Deliberately free-help-only: no brokerage line, no "sell now" button, so
 * no disclosure placement questions arise. Hidden on md+ screens, in print,
 * and inside the embeddable /widget pages. Spanish labels under /es.
 * ChatWidget sits above this bar on mobile (bottom-20) so they never collide.
 */

export default function MobileHelpBar() {
  const pathname = usePathname() || '';
  if (pathname.startsWith('/widget')) return null;
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
        <Link
          href={es ? '/es/centro-de-mando' : '/command-center'}
          onClick={() => trackEvent('mobile_bar_plan', { page: pathname })}
          className="flex-1 flex items-center justify-center rounded-lg bg-amber-400 text-slate-950 text-sm font-bold py-1.5"
        >
          {es ? 'Mi plan gratis →' : 'My free plan →'}
        </Link>
      </div>
    </>
  );
}
