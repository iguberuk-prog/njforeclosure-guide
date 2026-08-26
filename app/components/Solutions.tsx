import Link from 'next/link';

/**
 * The seven options, as a grid.
 *
 * Replaces a version whose icons were seven unrelated PNGs in three different
 * colour families, none of them matching the site palette. Card heights varied
 * with copy length so the "Best if" pills sat at seven different vertical
 * positions, and the seventh card was orphaned beside a double-width CTA that
 * broke the row.
 *
 * Now: seven cards plus the CTA make eight, which fills two clean rows of four.
 * Icons are inline SVG on one grid, one stroke weight, navy with a single
 * amber accent each. Cards are flex columns with the "Best if" line pinned to
 * the bottom, so every card in a row terminates on the same line regardless of
 * how long its description runs.
 *
 * The keep/sell chip does real work beyond decoration. Five of these seven let
 * someone stay in the house, and the site's whole argument is that keeping it
 * comes first when it is realistic. Saying so on each card means a visitor
 * scanning the grid sees that balance without reading a word of body copy.
 */

const S = { stroke: 'currentColor', strokeWidth: 3, fill: 'none' } as const;
const CAP = { strokeLinecap: 'round', strokeLinejoin: 'round' } as const;
const A = '#f59e0b';

const OPTIONS = [
  {
    title: 'Loan Modification',
    desc: 'Your lender permanently changes the terms so the monthly payment becomes affordable again.',
    best: 'You can afford a lower payment',
    keep: true,
    icon: (
      <>
        <path d="M10 7h20l8 8v26H10z" {...S} {...CAP} />
        <path d="M30 7v9h8" {...S} {...CAP} />
        <path d="M24 22v10" stroke={A} strokeWidth={3.2} {...CAP} />
        <path d="M19.5 27.5L24 32l4.5-4.5" stroke={A} strokeWidth={3.2} {...CAP} />
      </>
    ),
  },
  {
    title: 'Refinancing',
    desc: 'Replace the existing loan with a new one at better terms, paying off what came before.',
    best: 'Credit and income still qualify',
    keep: true,
    icon: (
      <>
        <path d="M9 24a15 15 0 0125.6-10.6" {...S} {...CAP} />
        <path d="M39 24a15 15 0 01-25.6 10.6" stroke={A} strokeWidth={3} {...CAP} />
        <path d="M34.5 6v8h-8" {...S} {...CAP} />
        <path d="M13.5 42v-8h8" stroke={A} strokeWidth={3} {...CAP} />
      </>
    ),
  },
  {
    title: 'Forbearance',
    desc: 'Payments pause or shrink for an agreed stretch while you get back on your feet.',
    best: 'The hardship is temporary',
    keep: true,
    icon: (
      <>
        <circle cx="24" cy="24" r="17" {...S} />
        <path d="M20 17.5v13M28 17.5v13" stroke={A} strokeWidth={3.4} {...CAP} />
      </>
    ),
  },
  {
    title: 'Home Equity Solutions',
    desc: 'Borrow against equity you already hold to clear the arrears and stop the process.',
    best: 'You hold real equity',
    keep: true,
    icon: (
      <>
        <path d="M7 24L24 9l17 15" {...S} {...CAP} />
        <path d="M13 22v18h22V22" {...S} {...CAP} />
        <circle cx="24" cy="30" r="5.5" stroke={A} strokeWidth={3} />
        <path d="M24 26.5v7" stroke={A} strokeWidth={2.6} {...CAP} />
      </>
    ),
  },
  {
    title: 'Bankruptcy (Ch. 13)',
    desc: 'A court-supervised plan that halts the sale immediately and spreads arrears over years.',
    best: 'You have steady income',
    keep: true,
    icon: (
      <>
        <path d="M24 6l15 6v13c0 10-6.5 15.5-15 18-8.5-2.5-15-8-15-18V12z" {...S} {...CAP} />
        <path d="M17.5 24.5l4.5 4.5 9-9" stroke={A} strokeWidth={3.2} {...CAP} />
      </>
    ),
  },
  {
    title: 'Short Sale',
    desc: 'Sell for less than the balance with the lender agreeing in advance to release the lien.',
    best: 'You owe more than it is worth',
    keep: false,
    icon: (
      <>
        <path d="M7 23L24 8l17 15" {...S} {...CAP} />
        <path d="M13 21v19h22V21" {...S} {...CAP} />
        <path d="M24 25v9" stroke={A} strokeWidth={3.2} {...CAP} />
        <path d="M20 30l4 4 4-4" stroke={A} strokeWidth={3.2} {...CAP} />
      </>
    ),
  },
  {
    title: 'Cash Sale',
    desc: 'A buyer closes in weeks, as-is, with no repairs, showings or agent commission.',
    best: 'A sale date is close',
    keep: false,
    icon: (
      <>
        <rect x="5" y="13" width="38" height="22" rx="4" {...S} />
        <circle cx="24" cy="24" r="5.5" stroke={A} strokeWidth={3} />
        <path d="M12 20v8M36 20v8" stroke={A} strokeWidth={3} {...CAP} />
      </>
    ),
  },
];

function Card({ o }: { o: (typeof OPTIONS)[number] }) {
  return (
    <div className="group flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-6 transition-all duration-200 hover:border-slate-900 hover:shadow-lg hover:shadow-slate-200/70">
      <div className="mb-5 flex items-start justify-between gap-3">
        <span className="flex h-12 w-12 items-center justify-center rounded-xl border border-slate-200 bg-slate-50 text-slate-900 transition-colors group-hover:border-slate-300">
          <svg viewBox="0 0 48 48" className="h-6 w-6" aria-hidden="true">
            {o.icon}
          </svg>
        </span>
        <span
          className={`mt-1 rounded-full border px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider ${
            o.keep
              ? 'border-emerald-200 bg-emerald-50 text-emerald-700'
              : 'border-slate-200 bg-slate-100 text-slate-600'
          }`}
        >
          {o.keep ? 'Keep the home' : 'Sell'}
        </span>
      </div>

      <h3 className="mb-2 text-[17px] font-bold leading-snug text-slate-900">{o.title}</h3>
      <p className="text-sm leading-relaxed text-slate-600">{o.desc}</p>

      {/* mt-auto is what makes every card in a row end on the same line. */}
      <p className="mt-auto border-t border-slate-100 pt-4 text-xs leading-relaxed text-slate-500">
        <span className="font-semibold text-slate-700">Best if:</span> {o.best}
      </p>
    </div>
  );
}

export default function Solutions() {
  return (
    <section className="bg-white py-24 px-4">
      <div className="mx-auto max-w-6xl">
        <div className="mb-14 max-w-2xl">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.25em] text-amber-600">Know every option</p>
          <h2 className="mb-5 font-serif text-4xl font-bold tracking-tight text-slate-900 md:text-5xl">
            Seven ways out, and five of them keep you in the house
          </h2>
          <p className="text-lg leading-relaxed text-slate-600">
            Which ones are still open depends almost entirely on how far along the process is. Here is what
            each one actually does.
          </p>
        </div>

        {/* Seven options plus the CTA make eight: two clean rows of four. */}
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {OPTIONS.map((o) => (
            <Card key={o.title} o={o} />
          ))}

          <div className="flex h-full flex-col rounded-2xl bg-slate-950 p-6 text-white">
            <span className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl border border-white/15 bg-white/5">
              <svg viewBox="0 0 48 48" className="h-6 w-6" aria-hidden="true">
                <circle cx="24" cy="24" r="17" stroke="currentColor" strokeWidth={3} fill="none" />
                <path d="M18.5 20a5.5 5.5 0 1111 .6c-.4 3-5.5 3.4-5.5 7.4" stroke={A} strokeWidth={3} fill="none" {...CAP} />
                <circle cx="24" cy="33.5" r="1.9" fill={A} />
              </svg>
            </span>
            <h3 className="mb-2 font-serif text-xl font-bold leading-snug">Not sure which fits?</h3>
            <p className="text-sm leading-relaxed text-slate-400">
              Six questions, about two minutes. It shows which of these are still realistic for you.
            </p>
            <Link
              href="/quiz"
              className="mt-auto block rounded-lg bg-amber-400 px-5 py-3 pt-3 text-center text-sm font-bold text-slate-950 transition hover:bg-amber-300"
            >
              Take the free assessment
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
