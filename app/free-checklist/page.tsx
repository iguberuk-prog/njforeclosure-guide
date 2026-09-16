import type { Metadata } from 'next';
import Link from 'next/link';
import SiteHeader from '../components/SiteHeader';
import DownloadKit from '../components/DownloadKit';

export const metadata: Metadata = {
  title: 'Free NJ Foreclosure Checklist & 45-Day Playbook (PDF) | NJ Foreclosure Guide',
  description:
    'Download the free Week-One Checklist and the 45-Day Playbook for New Jersey homeowners in foreclosure. Printable PDFs — no email required, no fees, ever.',
  alternates: { canonical: 'https://njforeclosureguide.org/free-checklist' },
  openGraph: {
    title: 'The NJ Foreclosure Survival Kit — Free PDFs',
    description:
      'The Week-One Checklist and the 45-Day Playbook: exactly what to do, in order, from the day a notice arrives. Free, no email required.',
    url: 'https://njforeclosureguide.org/free-checklist',
  },
};

const INSIDE: [string, string][] = [
  ['The Week-One Checklist', 'The eight moves that keep every option open, on one printable page.'],
  ['A day-by-day 45-day plan', 'Counting from the day you are served — what to do by day 3, day 7, day 14, and before the day-35 answer deadline.'],
  ['All seven options on one page', 'Reinstatement to cash sale, with the honest one-line truth about each.'],
  ['The free statewide help directory', 'Court mediation, HUD counselors, Legal Services of NJ — the help that costs nothing.'],
  ['A fill-in worksheet', 'Your dates, your numbers, your contacts — the one page to bring to every call.'],
];

export default function FreeChecklistPage() {
  return (
    <div className="min-h-full bg-white">
      <SiteHeader />

      <section className="bg-gradient-to-b from-slate-950 to-slate-900 text-white py-16 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-amber-400 text-xs font-semibold tracking-[0.25em] uppercase mb-4">
            Free Download · No Email Required
          </p>
          <h1 className="font-serif text-4xl md:text-5xl font-bold mb-5 tracking-tight">
            The NJ Foreclosure Survival Kit
          </h1>
          <p className="text-slate-300 text-lg leading-relaxed">
            The Week-One Checklist and the 45-Day Playbook: exactly what to do, in order, from the
            day a notice arrives. Print them, stick them on the fridge, bring them to every call.
          </p>
        </div>
      </section>

      <section className="max-w-3xl mx-auto px-4 py-12">
        <DownloadKit />
      </section>

      <section className="max-w-3xl mx-auto px-4 pb-12">
        <h2 className="font-serif text-3xl font-bold text-slate-900 mb-6">What&apos;s Inside</h2>
        <div className="grid sm:grid-cols-2 gap-3">
          {INSIDE.map(([t, d]) => (
            <div key={t} className="border border-slate-200 rounded-xl px-5 py-4">
              <p className="font-bold text-slate-900 text-sm">{t}</p>
              <p className="text-slate-600 text-sm mt-1 leading-relaxed">{d}</p>
            </div>
          ))}
        </div>
        <div className="mt-8 rounded-2xl border border-slate-200 bg-slate-50 px-6 py-6">
          <p className="text-slate-700 text-[15px] leading-relaxed">
            Prefer answers tailored to your exact situation? The free 2-minute quiz ranks all seven
            options for your case and shows the math.{' '}
            <Link href="/quiz" className="text-slate-900 font-semibold underline underline-offset-4">
              Take the quiz →
            </Link>
          </p>
        </div>
      </section>

      <footer className="bg-slate-950 text-slate-500 py-10 px-4 text-center text-xs">
        <p className="mb-2">© 2026 NJ Foreclosure Guide. All rights reserved.</p>
        <p className="max-w-2xl mx-auto leading-relaxed">
          Independent educational resource. Not a law firm, lender, or real estate company. We take
          no referral fees, no commissions and no advertising money from anything listed. One
          destination is a related business, labeled wherever it appears. You are never charged.
          Always consult licensed professionals about your specific situation.
        </p>
      </footer>
    </div>
  );
}
