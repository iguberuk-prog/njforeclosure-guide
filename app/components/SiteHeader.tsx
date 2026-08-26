'use client';

import Link from 'next/link';
import { useState } from 'react';
import Logo from './Logo';

/**
 * The one header for the whole site.
 *
 * This used to be pasted into 24 separate page files, which is why the spacing
 * drifted and the wordmark wrapped on some pages and not others. Everything
 * renders from here now, so a change happens once.
 *
 * Two things worth preserving:
 *  - `whitespace-nowrap` on the wordmark and every nav item. Without it,
 *    "Case Studies" and "Get an Offer" break across two lines at common
 *    widths and the whole bar looks broken.
 *  - The mobile menu. Previously the nav links were simply `hidden` below the
 *    md breakpoint, so phone visitors got a logo and one button and no way to
 *    reach the guides at all. Most people in foreclosure are on a phone.
 */

const NAV = [
  { href: '/guides', label: 'Guides' },
  { href: '/scenarios', label: 'Case Studies' },
  { href: '/answers', label: 'Answers' },
  { href: '/companies', label: 'Get an Offer' },
  { href: '/resources', label: 'Resources' },
];

export default function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-white/90 backdrop-blur-md border-b border-slate-200/80">
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4 h-[72px] sm:h-20">
          {/* Brand */}
          <Link href="/" className="group flex items-center gap-2.5 sm:gap-3 min-w-0" onClick={() => setOpen(false)}>
            <Logo className="h-9 w-9 sm:h-12 sm:w-12 text-slate-900 flex-shrink-0 transition-transform duration-200 group-hover:-translate-y-0.5" />
            <span className="flex flex-col leading-none min-w-0">
              {/* truncate rather than nowrap alone: at 360px the wordmark used to
                  slide under the CTA. Now it clips cleanly instead. */}
              <span className="font-serif text-[14px] sm:text-2xl font-bold text-slate-900 tracking-tight truncate">
                NJ Foreclosure Guide
              </span>
              <span className="hidden sm:block mt-1 text-[10px] text-slate-500 font-semibold tracking-[0.18em] uppercase whitespace-nowrap">
                Free Homeowner Resource
              </span>
            </span>
          </Link>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-1">
            {NAV.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="relative px-3 py-2 text-[15px] font-medium text-slate-600 hover:text-slate-900 transition-colors whitespace-nowrap after:absolute after:left-3 after:right-3 after:-bottom-0.5 after:h-0.5 after:rounded-full after:bg-amber-400 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:origin-left"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/quiz"
              className="ml-4 bg-slate-900 text-white px-5 py-2.5 rounded-full text-[15px] font-semibold hover:bg-slate-800 transition-colors whitespace-nowrap shadow-sm"
            >
              Free Assessment
            </Link>
          </div>

          {/* Mobile: one CTA plus a menu button */}
          <div className="flex lg:hidden items-center gap-2 flex-shrink-0">
            <Link
              href="/quiz"
              className="bg-slate-900 text-white px-4 py-2 rounded-full text-[13px] font-semibold hover:bg-slate-800 transition-colors whitespace-nowrap flex-shrink-0"
            >
              {/* Short on purpose. "Free Assessment" pushed the wordmark into
                  an ellipsis at 390px, the most common phone width. */}
              Free Help
            </Link>
            <button
              type="button"
              onClick={() => setOpen(!open)}
              aria-expanded={open}
              aria-label={open ? 'Close menu' : 'Open menu'}
              className="flex h-9 w-9 flex-shrink-0 flex-col items-center justify-center gap-[5px] rounded-lg border border-slate-200 text-slate-700 hover:border-slate-400 transition"
            >
              <span className={`block h-0.5 w-5 bg-current transition-transform ${open ? 'translate-y-[7px] rotate-45' : ''}`} />
              <span className={`block h-0.5 w-5 bg-current transition-opacity ${open ? 'opacity-0' : ''}`} />
              <span className={`block h-0.5 w-5 bg-current transition-transform ${open ? '-translate-y-[7px] -rotate-45' : ''}`} />
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {open && (
          <div className="lg:hidden border-t border-slate-200 py-3">
            {NAV.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="block px-2 py-3 text-base font-medium text-slate-700 hover:text-slate-900 border-b border-slate-100 last:border-0"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/tools/timeline"
              onClick={() => setOpen(false)}
              className="block px-2 py-3 text-base font-medium text-slate-700 hover:text-slate-900"
            >
              Where Am I in the Process?
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
}
