import Link from 'next/link';
import type { Metadata } from 'next';
import SiteHeader from '../components/SiteHeader';
import { DOCUMENTS } from '../../lib/documents';

export const metadata: Metadata = {
  title: 'Foreclosure Letters Decoded | What Each NJ Notice Means',
  description:
    'Got a foreclosure letter in New Jersey? Every document decoded in order: Notice of Intention, summons and complaint, default, final judgment, sheriff sale notice, and what to do the week each one arrives.',
  alternates: { canonical: 'https://njforeclosureguide.org/documents/' },
  openGraph: {
    title: 'Foreclosure Letters Decoded | What Each NJ Notice Means',
    description: 'Every New Jersey foreclosure document explained, in the order they arrive.',
    url: 'https://njforeclosureguide.org/documents/',
  },
};

export default function DocumentsPage() {
  return (
    <div className="min-h-full bg-white">
      <SiteHeader />

      <section className="bg-gradient-to-b from-slate-950 to-slate-900 text-white py-16 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-amber-400 text-xs font-semibold tracking-[0.25em] uppercase mb-4">
            The paperwork, decoded
          </p>
          <h1 className="font-serif text-4xl md:text-5xl font-bold mb-5 tracking-tight">
            You Got a Letter. Here&apos;s What It Means.
          </h1>
          <p className="text-slate-300 text-lg leading-relaxed">
            A New Jersey foreclosure arrives as a series of documents, in a predictable order. Find
            the one in your hand to see exactly where you are, how much time you have, and what to do
            this week.
          </p>
        </div>
      </section>

      <section className="max-w-3xl mx-auto px-4 py-12">
        <ol className="space-y-4">
          {DOCUMENTS.map((d) => (
            <li key={d.slug}>
              <Link
                href={`/documents/${d.slug}/`}
                className="flex gap-5 border border-slate-200 rounded-2xl px-6 py-5 hover:border-slate-400 hover:shadow-sm transition group"
              >
                <div className="shrink-0 w-10 h-10 rounded-full bg-slate-900 text-white flex items-center justify-center font-bold">
                  {d.stage}
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-0.5">
                    {d.stageLabel}
                  </p>
                  <p className="font-bold text-slate-900 group-hover:text-slate-950">{d.name}</p>
                  <p className="text-slate-500 text-sm mt-1 leading-relaxed">{d.clock}</p>
                </div>
              </Link>
            </li>
          ))}
        </ol>

        <div className="bg-slate-50 rounded-2xl p-6 mt-10">
          <p className="text-slate-700 leading-relaxed mb-4">
            Not sure which stage you are at, or missing some of the paperwork? The timeline tool
            places you in the process from a few questions.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <Link href="/tools/timeline" className="bg-amber-400 text-slate-950 px-8 py-3.5 rounded-lg font-bold text-center hover:bg-amber-300 transition">
              Where Am I in the Process?
            </Link>
            <Link href="/quiz" className="border border-slate-300 text-slate-900 px-8 py-3.5 rounded-lg font-semibold text-center hover:bg-slate-100 transition">
              See My Options, Free
            </Link>
          </div>
        </div>
        <p className="text-slate-400 text-xs mt-6 leading-relaxed">
          Educational information, not legal advice. Deadlines here reflect New Jersey law generally;
          what applies to your case is a question for a licensed New Jersey attorney.
        </p>
      </section>
    </div>
  );
}
