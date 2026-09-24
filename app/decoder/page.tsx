import type { Metadata } from 'next';
import Link from 'next/link';
import SiteHeader from '../components/SiteHeader';
import DecoderClient from './DecoderClient';
import { OG_IMAGES } from '../../lib/og';

export const metadata: Metadata = {
  title: 'Which Letter Did You Get? The Visual Decoder | NJ Foreclosure Guide',
  description:
    'Tap the sample layout that looks like the letter in your hand and get the plain-English answer in ten seconds: what it is, your clock, and what to do now. Free.',
  alternates: { canonical: 'https://njforeclosureguide.org/decoder' },
  openGraph: {
    images: OG_IMAGES,
    title: 'The Visual Document Decoder',
    description: 'Which one looks like YOUR letter? Tap it — get what it means, your clock, and your next move.',
    url: 'https://njforeclosureguide.org/decoder',
  },
};

export default function DecoderPage() {
  return (
    <div className="min-h-full bg-white">
      <SiteHeader />
      <section className="bg-gradient-to-b from-slate-950 to-slate-900 text-white py-14 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-amber-400 text-xs font-semibold tracking-[0.25em] uppercase mb-4">
            Free · 10 Seconds to an Answer
          </p>
          <h1 className="font-serif text-4xl md:text-5xl font-bold mb-5 tracking-tight">
            Which Letter Did You Get?
          </h1>
          <p className="text-slate-300 text-lg leading-relaxed">
            The envelope is scary because it&rsquo;s unfamiliar. Tap the sample that looks like the
            paper in your hand — and get what it means, your clock, and your next move in plain
            English.
          </p>
        </div>
      </section>
      <section className="max-w-3xl mx-auto px-4 py-12">
        <DecoderClient />
      </section>
      <footer className="bg-slate-950 text-slate-500 py-10 px-4 text-center text-xs">
        <p className="mb-2">© 2026 NJ Foreclosure Guide. All rights reserved.</p>
        <p className="max-w-2xl mx-auto leading-relaxed">
          Independent educational resource. Not a law firm, lender, or real estate company. One
          destination is a related business, labeled wherever it appears. You are never charged.{' '}
          <Link href="/documents" className="underline">Every document, decoded in order →</Link>
        </p>
      </footer>
    </div>
  );
}
