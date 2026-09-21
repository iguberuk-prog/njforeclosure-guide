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
  { href: '/command-center', label: 'Start Here' },
  { href: '/case-map', label: 'Case Map' },
  { href: '/guides', label: 'Guides' },
  { href: '/scenarios', label: 'Case Studies' },
  { href: '/answers', label: 'Answers' },
  { href: '/companies', label: 'Get an Offer' },
  { href: '/commercial', label: 'Commercial' },
  { href: '/resources', label: 'Resources' },
];

const SOCIALS = [
  {
    href: 'https://www.instagram.com/njforeclosureguide/',
    label: 'NJ Foreclosure Guide on Instagram',
    d: 'M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5zm0 2a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3H7zm5 3.5A5.5 5.5 0 1 1 6.5 13 5.5 5.5 0 0 1 12 7.5zm0 2A3.5 3.5 0 1 0 15.5 13 3.5 3.5 0 0 0 12 9.5zM17.75 5a1.25 1.25 0 1 1-1.25 1.25A1.25 1.25 0 0 1 17.75 5z',
  },
  {
    href: 'https://www.facebook.com/profile.php?id=61594272767455',
    label: 'NJ Foreclosure Guide on Facebook',
    d: 'M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3V2z',
  },
];

function SocialIcon({ s, className }: { s: (typeof SOCIALS)[number]; className?: string }) {
  return (
    <a
      href={s.href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={s.label}
      className={className}
    >
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5" aria-hidden>
        <path d={s.d} />
      </svg>
    </a>
  );
}

export default function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-white/90 backdrop-blur-md border-b border-slate-200/80">
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-2 sm:gap-4 h-[72px] sm:h-20">
          {/* Brand */}
          <Link href="/" className="group flex items-center gap-2 sm:gap-3 min-w-0" onClick={() => setOpen(false)}>
            <Logo className="h-8 w-8 sm:h-12 sm:w-12 text-slate-900 flex-shrink-0 transition-transform duration-200 group-hover:-translate-y-0.5" />
            <span className="flex flex-col leading-none min-w-0">
              {/* Fluid size instead of truncation: the full name always fits.
                  The budget at 320px wide is tight — 288px inside the padding,
                  minus logo (32) + gaps + CTA + hamburger (~170) leaves ~115px
                  for the name, which is why the mobile logo, gaps, and CTA are
                  all one notch smaller than they used to be. Never truncate the
                  brand name; a clipped logo reads as broken. */}
              <span className="font-serif text-[clamp(11px,3.4vw,22px)] sm:text-2xl font-bold text-slate-900 tracking-tight whitespace-nowrap">
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
            <span className="ml-3 flex items-center gap-1 border-l border-slate-200 pl-3">
              {SOCIALS.map((s) => (
                <SocialIcon key={s.href} s={s} className="p-1.5 text-slate-400 hover:text-slate-900 transition-colors" />
              ))}
            </span>
          </div>

          {/* Mobile: one CTA plus a menu button */}
          <div className="flex lg:hidden items-center gap-2 flex-shrink-0">
            <Link
              href="/quiz"
              className="bg-slate-900 text-white px-3 py-2 rounded-full text-[12px] font-semibold hover:bg-slate-800 transition-colors whitespace-nowrap flex-shrink-0"
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
            <div className="flex items-center gap-2 px-2 pt-3 mt-1 border-t border-slate-100">
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">Follow</span>
              {SOCIALS.map((s) => (
                <SocialIcon key={s.href} s={s} className="p-2 text-slate-500 hover:text-slate-900 transition-colors" />
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
