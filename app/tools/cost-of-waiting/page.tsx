import type { Metadata } from 'next';
import Link from 'next/link';
import SiteHeader from '../../components/SiteHeader';
import CostClient from './CostClient';
import { OG_IMAGES } from '../../../lib/og';

export const metadata: Metadata = {
  title: 'The Cost of Waiting: NJ Foreclosure Meter | NJ Foreclosure Guide',
  description:
    'Drag the slider and watch what waiting actually costs in an NJ foreclosure: fees stacking, doors closing, equity leaking. An honest, adjustable estimate — free.',
  alternates: { canonical: 'https://njforeclosureguide.org/tools/cost-of-waiting' },
  openGraph: {
    images: OG_IMAGES,
    title: 'The Cost of Waiting Meter',
    description: 'What doing nothing costs, month by month — fees, closed doors, leaked equity. Free and adjustable.',
    url: 'https://njforeclosureguide.org/tools/cost-of-waiting',
  },
};

export default function CostOfWaitingPage() {
  return (
    <div className="min-h-full bg-white">
      <SiteHeader />
      <section className="bg-gradient-to-b from-slate-950 to-slate-900 text-white py-14 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-amber-400 text-xs font-semibold tracking-[0.25em] uppercase mb-4">
            Free Tool · Illustrative Estimate
          </p>
          <h1 className="font-serif text-4xl md:text-5xl font-bold mb-5 tracking-tight">
            The Cost of Waiting
          </h1>
          <p className="text-slate-300 text-lg leading-relaxed">
            Doing nothing feels free. It bills monthly. Drag the slider and watch the estimate grow
            — fees stacking, doors closing, equity leaking — then make the free calls that stop the
            meter.
          </p>
        </div>
      </section>
      <section className="max-w-3xl mx-auto px-4 py-12">
        <CostClient />
      </section>
      <footer className="bg-slate-950 text-slate-500 py-10 px-4 text-center text-xs">
        <p className="mb-2">© 2026 NJ Foreclosure Guide. All rights reserved.</p>
        <p className="max-w-2xl mx-auto leading-relaxed">
          Independent educational resource. Not a law firm, lender, or real estate company. One
          destination is a related business, labeled wherever it appears. You are never charged.{' '}
          <Link href="/tools/net-proceeds" className="underline">Run your real numbers →</Link>
        </p>
      </footer>
    </div>
  );
}
