import type { Metadata } from 'next';
import Link from 'next/link';
import SiteHeader from '../components/SiteHeader';
import CommandClient from './CommandClient';
import { OG_IMAGES } from '../../lib/og';
import { fitTitle, fitDescription } from '../../lib/seo';

export const metadata: Metadata = {
  title: fitTitle('Your NJ Foreclosure Command Center | NJ Foreclosure Guide'),
  description:
    fitDescription('Three quick answers — your stage, your county, your goal — and this page assembles a personal dashboard: your deadlines, your county’s rules and free help, and your three best plays. Free and private.'),
  alternates: { canonical: 'https://njforeclosureguide.org/command-center' },
  openGraph: {
    images: OG_IMAGES,
    title: 'Your NJ Foreclosure Command Center',
    description:
      'Stage + county + goal = your personal dashboard: deadlines, county machinery, free local help, and your three plays. Nothing leaves your browser.',
    url: 'https://njforeclosureguide.org/command-center',
  },
};

export default function CommandCenterPage() {
  return (
    <div className="min-h-full bg-white">
      <SiteHeader />
      <section className="bg-gradient-to-b from-slate-950 to-slate-900 text-white py-14 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-amber-400 text-xs font-semibold tracking-[0.25em] uppercase mb-4">
            Free · Private · Built From Your Answers
          </p>
          <h1 className="font-serif text-4xl md:text-5xl font-bold mb-5 tracking-tight">
            Your Command Center
          </h1>
          <p className="text-slate-300 text-lg leading-relaxed max-w-2xl mx-auto">
            Three answers — your stage, your county, your goal — and this page assembles itself
            around your case: your clock, your county&rsquo;s machinery, the free help near you,
            and your three best plays.
          </p>
        </div>
      </section>
      <section className="max-w-4xl mx-auto px-4 py-12">
        <CommandClient />
      </section>
      <footer className="bg-slate-950 text-slate-500 py-10 px-4 text-center text-xs">
        <p className="mb-2">© 2026 NJ Foreclosure Guide. All rights reserved.</p>
        <p className="max-w-2xl mx-auto leading-relaxed">
          Independent educational resource. Not a law firm, lender, or real estate company. One
          destination is a related business, labeled wherever it appears. You are never charged.{' '}
          <Link href="/case-map" className="underline">Explore the full Case Map →</Link>
        </p>
      </footer>
    </div>
  );
}
