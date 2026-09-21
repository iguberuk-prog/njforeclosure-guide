import type { Metadata } from 'next';
import Link from 'next/link';
import SiteHeader from '../components/SiteHeader';
import NjMapClient from './NjMapClient';

export const metadata: Metadata = {
  title: 'The NJ Foreclosure Map: All 21 Counties, One Tap | NJ Foreclosure Guide',
  description:
    'Tap your county and get its verified foreclosure machinery: sheriff sale listings and contacts, adjournment starting points, and the free local help serving it.',
  alternates: { canonical: 'https://njforeclosureguide.org/nj-map' },
  openGraph: {
    title: 'The NJ Foreclosure Map',
    description: 'All 21 counties: sheriff sale contacts, official listings, and free local help — one tap each.',
    url: 'https://njforeclosureguide.org/nj-map',
  },
};

export default function NjMapPage() {
  return (
    <div className="min-h-full bg-white">
      <SiteHeader />
      <section className="bg-gradient-to-b from-slate-950 to-slate-900 text-white py-14 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <p className="text-amber-400 text-xs font-semibold tracking-[0.25em] uppercase mb-4">
            Free · All 21 Counties · Verified Sources
          </p>
          <h1 className="font-serif text-4xl md:text-5xl font-bold mb-5 tracking-tight">
            The New Jersey Foreclosure Map
          </h1>
          <p className="text-slate-300 text-lg leading-relaxed max-w-2xl mx-auto">
            Foreclosure is statewide law with county machinery — different sheriffs, different sale
            calendars, different free help. Tap your county for its verified contacts, official
            listings, and the organizations that help for free.
          </p>
        </div>
      </section>
      <section className="max-w-5xl mx-auto px-4 py-12">
        <NjMapClient />
      </section>
      <footer className="bg-slate-950 text-slate-500 py-10 px-4 text-center text-xs">
        <p className="mb-2">© 2026 NJ Foreclosure Guide. All rights reserved.</p>
        <p className="max-w-2xl mx-auto leading-relaxed">
          Independent educational resource. Not a law firm, lender, or real estate company. One
          destination is a related business, labeled wherever it appears. You are never charged.{' '}
          <Link href="/sheriff-sales" className="underline">All county sale rules →</Link>
        </p>
      </footer>
    </div>
  );
}
