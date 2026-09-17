import type { Metadata } from 'next';
import Link from 'next/link';
import SiteHeader from '../components/SiteHeader';
import MythsClient from './MythsClient';

export const metadata: Metadata = {
  title: 'NJ Foreclosure Myth Busters: 12 Things Everyone Gets Wrong | NJ Foreclosure Guide',
  description:
    'A quick myth-or-fact game about New Jersey foreclosure. 12 statements, honest answers — the myths cost homeowners real money, and most people believe at least a few.',
  alternates: { canonical: 'https://njforeclosureguide.org/myths' },
  openGraph: {
    title: 'NJ Foreclosure Myth Busters',
    description: '12 myth-or-fact calls. Most people miss at least three — and the myths cost real money.',
    url: 'https://njforeclosureguide.org/myths',
  },
};

export default function MythsPage() {
  return (
    <div className="min-h-full bg-white">
      <SiteHeader />
      <section className="bg-gradient-to-b from-slate-950 to-slate-900 text-white py-14 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-amber-400 text-xs font-semibold tracking-[0.25em] uppercase mb-4">
            The 60-Second Game
          </p>
          <h1 className="font-serif text-4xl md:text-5xl font-bold mb-5 tracking-tight">Myth Busters</h1>
          <p className="text-slate-300 text-lg leading-relaxed">
            Twelve things &ldquo;everyone knows&rdquo; about foreclosure in New Jersey. Call each one
            — myth or fact. The myths aren&rsquo;t harmless: they&rsquo;re how people lose houses
            they could have kept.
          </p>
        </div>
      </section>
      <section className="max-w-2xl mx-auto px-4 py-12">
        <MythsClient />
        <p className="text-slate-400 text-xs leading-relaxed mt-6 text-center">
          General education, not legal advice. Every answer links to the deeper page on this site,
          where each claim is sourced.
        </p>
      </section>
      <footer className="bg-slate-950 text-slate-500 py-10 px-4 text-center text-xs">
        <p className="mb-2">© 2026 NJ Foreclosure Guide. All rights reserved.</p>
        <p className="max-w-2xl mx-auto leading-relaxed">
          Independent educational resource. Not a law firm, lender, or real estate company. One
          destination is a related business, labeled wherever it appears. You are never charged.{' '}
          <Link href="/case-map" className="underline">Explore the Case Map →</Link>
        </p>
      </footer>
    </div>
  );
}
