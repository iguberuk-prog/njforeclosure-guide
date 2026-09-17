import type { Metadata } from 'next';
import Link from 'next/link';
import SiteHeader from '../components/SiteHeader';
import CaseMapClient from './CaseMapClient';

export const metadata: Metadata = {
  title: 'The NJ Foreclosure Case Map: Tap Where You Are | NJ Foreclosure Guide',
  description:
    'An interactive map of the entire New Jersey foreclosure journey. Tap your station and see what’s true right now, which doors are still open, and your free moves.',
  alternates: { canonical: 'https://njforeclosureguide.org/case-map' },
  openGraph: {
    title: 'The NJ Foreclosure Case Map',
    description:
      'Every station from first missed payment to after the sale — what’s true, what’s open, what closes next. Free and interactive.',
    url: 'https://njforeclosureguide.org/case-map',
  },
};

export default function CaseMapPage() {
  return (
    <div className="min-h-full bg-white">
      <SiteHeader />
      <section className="bg-gradient-to-b from-slate-950 to-slate-900 text-white py-14 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <p className="text-amber-400 text-xs font-semibold tracking-[0.25em] uppercase mb-4">
            Free Interactive Tool
          </p>
          <h1 className="font-serif text-4xl md:text-5xl font-bold mb-5 tracking-tight">The Case Map</h1>
          <p className="text-slate-300 text-lg leading-relaxed max-w-2xl mx-auto">
            Every New Jersey foreclosure rides the same line. Tap the station you&rsquo;re at and see
            exactly what&rsquo;s true right now, which doors are still open, which one closes next —
            and your free moves.
          </p>
        </div>
      </section>
      <section className="max-w-5xl mx-auto px-4 py-12">
        <CaseMapClient />
      </section>
      <footer className="bg-slate-950 text-slate-500 py-10 px-4 text-center text-xs">
        <p className="mb-2">© 2026 NJ Foreclosure Guide. All rights reserved.</p>
        <p className="max-w-2xl mx-auto leading-relaxed">
          Independent educational resource. Not a law firm, lender, or real estate company. We take
          no referral fees from anything listed. One destination is a related business, labeled
          wherever it appears. You are never charged.{' '}
          <Link href="/resources" className="underline">All free resources →</Link>
        </p>
      </footer>
    </div>
  );
}
