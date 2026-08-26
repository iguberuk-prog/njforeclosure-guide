import Link from 'next/link';

/**
 * The process, drawn.
 *
 * Replaces a whiteboard PNG that had three problems: it printed a dead URL
 * (njforclosureguide.org, missing the e) twice, its final panel showed a for
 * sale sign and an offer to purchase as the only outcome, and at 429x640 it
 * was soft on any modern phone.
 *
 * Built as inline SVG instead of an image so that the copy is real text
 * Google can read, it stays sharp at any size, it reads correctly to a screen
 * reader, and a word can be changed here rather than by whoever owns the
 * original artwork.
 *
 * The substance fix matters more than the resolution: step four says keep or
 * sell. The site's whole promise is that keeping the home comes first when it
 * is realistic, and a picture showing only a sale argues against the copy
 * sitting directly above it.
 */

const ICON = 'h-7 w-7';

const STEPS = [
  {
    n: '01',
    title: 'The letter arrives',
    body:
      'A notice of intention, a complaint, or a sale date. It is designed to feel final. It usually is not, and the options you still have depend almost entirely on which letter it is.',
    icon: (
      <svg viewBox="0 0 48 48" className={ICON} fill="none" aria-hidden="true">
        <path d="M11 6h18l8 8v28H11z" stroke="currentColor" strokeWidth="3" strokeLinejoin="round" />
        <path d="M29 6v9h8" stroke="currentColor" strokeWidth="3" strokeLinejoin="round" />
        <path d="M24 22v8" stroke="#f59e0b" strokeWidth="3.5" strokeLinecap="round" />
        <circle cx="24" cy="35.5" r="1.9" fill="#f59e0b" />
      </svg>
    ),
  },
  {
    n: '02',
    title: 'Six questions, about two minutes',
    body:
      'Where you are in the process, how much time is left, what the property is worth, and whether you want to stay. No account, no cost, and you can skip the contact step and still see everything.',
    icon: (
      <svg viewBox="0 0 48 48" className={ICON} fill="none" aria-hidden="true">
        <rect x="8" y="7" width="32" height="34" rx="4" stroke="currentColor" strokeWidth="3" />
        <path d="M15 17.5l3 3 5.5-5.5" stroke="#f59e0b" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M15 30.5l3 3 5.5-5.5" stroke="#f59e0b" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M28 17h6M28 30h6" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    n: '03',
    title: 'You see where you actually stand',
    body:
      'New Jersey foreclosure is a court process with defined stages, and each one closes some doors and leaves others open. Most people find they have more time than the letter made it feel.',
    icon: (
      <svg viewBox="0 0 48 48" className={ICON} fill="none" aria-hidden="true">
        <path d="M6 30h36" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
        <circle cx="14" cy="30" r="3.5" stroke="currentColor" strokeWidth="3" />
        <circle cx="34" cy="30" r="3.5" stroke="currentColor" strokeWidth="3" />
        <circle cx="24" cy="30" r="5" fill="#f59e0b" />
        <path d="M24 18v-6" stroke="#f59e0b" strokeWidth="3" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    n: '04',
    title: 'Keep it, or sell it. Both are on the table',
    body:
      'If keeping the home is realistic we say so first, and point you at a free HUD counselor or the state mediation program before anything else. If selling is the better answer, you see the fast, the market, and the free routes side by side.',
    icon: (
      <svg viewBox="0 0 48 48" className={ICON} fill="none" aria-hidden="true">
        <path d="M24 42V27" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
        <path d="M24 27C24 19 17 17 12 15" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
        <path d="M24 27c0-8 7-10 12-12" stroke="#f59e0b" strokeWidth="3" strokeLinecap="round" />
        <path d="M12 15l-1.5 5.5M12 15l5.5-1" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M36 15l1.5 5.5M36 15l-5.5-1" stroke="#f59e0b" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    n: '05',
    title: 'You choose, and nobody pushes',
    body:
      'Contact whoever fits, or nobody at all. We take no referral fees or commissions, so the ordering reflects your situation and not our margin. The one destination we have an interest in is labeled as such.',
    icon: (
      <svg viewBox="0 0 48 48" className={ICON} fill="none" aria-hidden="true">
        <path d="M7 12h22a3 3 0 013 3v11a3 3 0 01-3 3H17l-7 6v-6H7a3 3 0 01-3-3V15a3 3 0 013-3z" stroke="currentColor" strokeWidth="3" strokeLinejoin="round" />
        <path d="M14 20.5h8" stroke="#f59e0b" strokeWidth="3" strokeLinecap="round" />
        <path d="M38 20h3a3 3 0 013 3v9a3 3 0 01-3 3h-2v5l-6-5" stroke="currentColor" strokeWidth="3" strokeLinejoin="round" />
      </svg>
    ),
  },
];

export default function HowItWorks({ tone = 'dark' }: { tone?: 'dark' | 'light' }) {
  const dark = tone === 'dark';

  return (
    <section
      className={dark ? 'bg-slate-950 text-white py-20 px-4' : 'bg-slate-50 text-slate-900 py-20 px-4 border-y border-slate-200'}
      aria-labelledby="how-it-works-heading"
    >
      <div className="max-w-6xl mx-auto">
        <div className="max-w-2xl mb-14">
          <p className={`text-xs font-semibold tracking-[0.25em] uppercase mb-4 ${dark ? 'text-amber-400' : 'text-amber-600'}`}>
            How it works
          </p>
          <h2 id="how-it-works-heading" className="font-serif text-3xl md:text-4xl font-bold tracking-tight mb-4">
            From the letter on your kitchen table to a decision you understand
          </h2>
          <p className={`text-lg leading-relaxed ${dark ? 'text-slate-400' : 'text-slate-600'}`}>
            Five steps, about two minutes of your time, and no obligation at the end of it.
          </p>
        </div>

        {/* Horizontal on desktop, vertical on phones. The connecting rule is
            decorative and hidden from assistive tech. */}
        <ol className="grid gap-10 md:grid-cols-5 md:gap-6">
          {STEPS.map((s, i) => (
            <li key={s.n} className="relative flex gap-5 md:block">
              {/* Connector. Vertical between stacked steps on a phone,
                  horizontal between columns on desktop, and never trailing off
                  the end of the last one. */}
              {i < STEPS.length - 1 && (
                <span
                  aria-hidden="true"
                  className={`absolute left-[26px] top-[52px] bottom-[-2.5rem] w-px md:left-[52px] md:right-[-1.5rem] md:top-[26px] md:bottom-auto md:h-px md:w-auto ${
                    dark ? 'bg-white/12' : 'bg-slate-300'
                  }`}
                />
              )}
              <div className="flex-shrink-0 md:mb-5">
                <span
                  className={`relative z-10 flex h-[52px] w-[52px] items-center justify-center rounded-xl border ${
                    dark ? 'border-white/15 bg-slate-900 text-white' : 'border-slate-300 bg-white text-slate-900'
                  }`}
                >
                  {s.icon}
                </span>
              </div>
              <div className="min-w-0">
                <p className={`font-serif text-sm font-bold mb-1.5 ${dark ? 'text-amber-400/80' : 'text-amber-600/90'}`}>
                  {s.n}
                </p>
                <h3 className="font-bold text-[17px] leading-snug mb-2">{s.title}</h3>
                <p className={`text-sm leading-relaxed ${dark ? 'text-slate-400' : 'text-slate-600'}`}>{s.body}</p>
              </div>
            </li>
          ))}
        </ol>

        <div className="mt-14 flex flex-col sm:flex-row items-start sm:items-center gap-4">
          <Link
            href="/quiz"
            className="bg-amber-400 text-slate-950 px-8 py-3.5 rounded-lg font-bold hover:bg-amber-300 transition whitespace-nowrap"
          >
            Start the Free Assessment
          </Link>
          <p className={`text-sm leading-relaxed ${dark ? 'text-slate-500' : 'text-slate-500'}`}>
            Or read{' '}
            <Link href="/scenarios" className={`font-semibold underline underline-offset-2 ${dark ? 'text-slate-300' : 'text-slate-700'}`}>
              eighteen situations walked through end to end
            </Link>{' '}
            first. Four of them do not end with the house being saved.
          </p>
        </div>
      </div>
    </section>
  );
}
