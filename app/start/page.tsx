import type { Metadata } from 'next';
import Link from 'next/link';
import Logo from '../components/Logo';
import MarsNotice from '../components/MarsNotice';
import { OG_IMAGES } from '../../lib/og';
import { fitTitle, fitDescription } from '../../lib/seo';

/**
 * /start — the link-in-bio hub.
 *
 * This is where the Instagram and Facebook profile links point. One phone
 * screen, six big buttons, zero navigation chrome: a profile visitor decides
 * in about four seconds, so every tap target is the full width of their
 * thumb and the order runs from "I'm scared and new" to "just browsing."
 */

export const metadata: Metadata = {
  title: fitTitle('Start Here: Free NJ Foreclosure Help | NJ Foreclosure Guide'),
  description:
    fitDescription('Every free tool in one place: your personal Command Center, the Case Map, your printable battle plan, the free checklist, and help in Spanish. No fees, no signup.'),
  alternates: { canonical: 'https://njforeclosureguide.org/start/' },
  openGraph: {
    images: OG_IMAGES,
    title: 'Start Here — NJ Foreclosure Guide',
    description: 'All the free tools in one place. Built for New Jersey homeowners.',
    url: 'https://njforeclosureguide.org/start/',
  },
};

const LINKS: { href: string; title: string; sub: string; hot?: boolean }[] = [
  {
    href: '/command-center',
    title: 'Open Your Command Center',
    sub: '3 questions → your deadlines, your county, your best moves',
    hot: true,
  },
  {
    href: '/decoder',
    title: 'I Got a Letter — What Is It?',
    sub: 'Match your letter in 10 seconds, see how much time you have',
  },
  {
    href: '/case-map',
    title: 'See the Whole Process',
    sub: 'The Case Map: every stage, what’s true, what closes next',
  },
  {
    href: '/my-plan',
    title: 'Print My Battle Plan',
    sub: 'Your dates in, a one-page fridge plan out',
  },
  {
    href: '/free-checklist',
    title: 'Free Survival Kit (PDF)',
    sub: 'Week-one checklist + the 45-day playbook — no email required',
  },
  {
    href: '/myths',
    title: 'Play the 60-Second Myth Quiz',
    sub: '12 myths that cost NJ homeowners their houses',
  },
  {
    href: '/es',
    title: 'Ayuda Gratis en Español',
    sub: 'Toda la guía, sus herramientas y su plan — en español',
  },
];

export default function StartPage() {
  return (
    <div className="min-h-full bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white">
      <main className="max-w-md mx-auto px-4 py-10">
        <div className="text-center mb-8">
          <Logo className="h-16 w-16 mx-auto text-white mb-4" />
          <h1 className="font-serif text-3xl font-bold tracking-tight">NJ Foreclosure Guide</h1>
          <p className="text-amber-400 text-[11px] font-semibold tracking-[0.25em] uppercase mt-2">
            100% Free · All 21 Counties · En Espa&ntilde;ol
          </p>
          <p className="text-slate-300 text-sm leading-relaxed mt-4">
            Behind on the mortgage? You have more options than you think, and the best help is
            free. Pick where to start:
          </p>
        </div>

        <div className="space-y-3">
          {LINKS.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={`block rounded-2xl px-5 py-4 text-left transition ${
                l.hot
                  ? 'bg-amber-400 text-slate-950 hover:bg-amber-300'
                  : 'bg-white/[0.06] border border-white/10 hover:bg-white/[0.12]'
              }`}
            >
              <span className="block font-bold text-[15px]">{l.title}</span>
              <span className={`block text-xs mt-0.5 ${l.hot ? 'text-slate-800' : 'text-slate-400'}`}>
                {l.sub}
              </span>
            </Link>
          ))}
        </div>

        <div className="mt-8 rounded-2xl border border-white/10 bg-white/[0.04] px-5 py-4">
          <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-2">
            Free help, right now
          </p>
          <p className="text-sm text-slate-200 leading-relaxed">
            HUD counselors (free, many bilingual):{' '}
            <a href="tel:8005694287" className="font-bold text-white underline underline-offset-2">
              800-569-4287
            </a>
            <br />
            Free lawyers if you qualify (LSNJ):{' '}
            <a href="tel:18885765529" className="font-bold text-white underline underline-offset-2">
              1-888-576-5529
            </a>
          </p>
        </div>

        <p className="text-center text-slate-500 text-xs mt-8">
          <Link href="/" className="underline underline-offset-2 hover:text-slate-300">
            njforeclosureguide.org
          </Link>{' '}
          · educational, not legal advice
        </p>
      </main>
      <MarsNotice />
    </div>
  );
}
