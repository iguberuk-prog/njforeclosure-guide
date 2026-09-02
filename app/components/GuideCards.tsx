import Link from 'next/link';

/**
 * The three featured guides.
 *
 * Replaces three PNGs that were visibly broken: the magnifier's handle was a
 * detached amber stick floating beside the circle, the "lightning bolt" was a
 * malformed teal blob, and the "book" was two rectangles. All three were teal,
 * a colour that appears nowhere else on this site.
 *
 * Same icon system as the options grid and the process section: 48px grid,
 * one stroke weight, navy with a single amber accent.
 */

const S = { stroke: 'currentColor', strokeWidth: 3, fill: 'none' } as const;
const CAP = { strokeLinecap: 'round', strokeLinejoin: 'round' } as const;
const A = '#f59e0b';

const GUIDES = [
  {
    href: '/guides/foreclosure-101',
    title: 'Foreclosure 101',
    desc:
      'What is actually happening to your mortgage, what the Fair Foreclosure Act entitles you to, and what to expect at each stage.',
    icon: (
      <>
        <path d="M24 13c-4-3.5-9-5-14-5v27c5 0 10 1.5 14 5 4-3.5 9-5 14-5V8c-5 0-10 1.5-14 5z" {...S} {...CAP} />
        <path d="M24 13v27" stroke={A} strokeWidth={3} {...CAP} />
      </>
    ),
  },
  {
    // No /guides/options page exists; /compare is the seven-options table.
    href: '/compare',
    title: 'All Seven Options Explained',
    desc:
      'Each solution in detail: what it costs, how long it takes, who it works for, and the stage at which it stops being available.',
    icon: (
      <>
        <circle cx="21" cy="21" r="13" {...S} />
        <path d="M30.5 30.5L41 41" stroke={A} strokeWidth={3.4} {...CAP} />
        <path d="M15.5 21h11M21 15.5v11" stroke={A} strokeWidth={3} {...CAP} />
      </>
    ),
  },
  {
    // The cash-sale guide lives at /guides/cash-buyer.
    href: '/guides/cash-buyer',
    title: 'Quick Cash Sale Guide',
    desc:
      'How a fast close actually works, what it costs you against a market sale, and the questions to ask before signing anything.',
    icon: (
      <>
        <circle cx="24" cy="26" r="15" {...S} />
        <path d="M24 18v8l5 4" stroke={A} strokeWidth={3.2} {...CAP} />
        <path d="M18 7h12" {...S} {...CAP} />
      </>
    ),
  },
];

export default function GuideCards() {
  return (
    <div className="mb-16 grid gap-5 md:grid-cols-3">
      {GUIDES.map((g) => (
        <Link
          key={g.href}
          href={g.href}
          className="group flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-6 transition-all duration-200 hover:border-slate-900 hover:shadow-lg hover:shadow-slate-200/70"
        >
          <span className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl border border-slate-200 bg-slate-50 text-slate-900">
            <svg viewBox="0 0 48 48" className="h-6 w-6" aria-hidden="true">
              {g.icon}
            </svg>
          </span>
          <h3 className="mb-2 text-[17px] font-bold leading-snug text-slate-900">{g.title}</h3>
          <p className="text-sm leading-relaxed text-slate-600">{g.desc}</p>
          <span className="mt-auto inline-flex items-center gap-2 pt-5 text-sm font-semibold text-slate-900 transition-all group-hover:gap-3">
            Read the guide <span className="text-amber-500">&rarr;</span>
          </span>
        </Link>
      ))}
    </div>
  );
}
