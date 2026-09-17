import type { Metadata } from 'next';
import SiteHeader from '../components/SiteHeader';
import MyPlanClient from './MyPlanClient';

export const metadata: Metadata = {
  title: 'My Plan: Your Printable NJ Foreclosure Battle Plan | NJ Foreclosure Guide',
  description:
    'Enter your dates, get a personalized one-page plan: your exact deadlines, in order, with the free move for each. Prints on one page. Nothing leaves your browser.',
  alternates: { canonical: 'https://njforeclosureguide.org/my-plan' },
  openGraph: {
    title: 'My Plan: The Printable NJ Foreclosure Battle Plan',
    description:
      'Your deadlines, your dates, one printable page built to live on a refrigerator. Free, private, nothing leaves your browser.',
    url: 'https://njforeclosureguide.org/my-plan',
  },
};

export default function MyPlanPage() {
  return (
    <div className="min-h-full bg-white">
      <div className="print:hidden">
        <SiteHeader />
        <section className="bg-gradient-to-b from-slate-950 to-slate-900 text-white py-14 px-4">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-amber-400 text-xs font-semibold tracking-[0.25em] uppercase mb-4">
              Free · Private · Printable
            </p>
            <h1 className="font-serif text-4xl md:text-5xl font-bold mb-5 tracking-tight">
              My Battle Plan
            </h1>
            <p className="text-slate-300 text-lg leading-relaxed">
              Enter your dates and get a one-page plan with YOUR deadlines in order — built to live
              on the refrigerator. Everything happens in your browser; your dates are never sent to
              us or anyone else.
            </p>
          </div>
        </section>
      </div>
      <section className="max-w-3xl mx-auto px-4 py-12 print:py-0 print:px-0 print:max-w-none">
        <MyPlanClient />
      </section>
      <footer className="print:hidden bg-slate-950 text-slate-500 py-10 px-4 text-center text-xs">
        <p className="mb-2">© 2026 NJ Foreclosure Guide. All rights reserved.</p>
        <p className="max-w-2xl mx-auto leading-relaxed">
          Independent educational resource. Not a law firm, lender, or real estate company. One
          destination is a related business, labeled wherever it appears. You are never charged.
        </p>
      </footer>
    </div>
  );
}
