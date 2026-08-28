import Link from 'next/link';
import SiteHeader from '../components/SiteHeader';
import type { Metadata } from 'next';
import { QUESTIONS } from '../../lib/questions';

export const metadata: Metadata = {
  title: 'New Jersey Foreclosure Questions, Answered Directly',
  description:
    'Direct answers to the most common New Jersey foreclosure questions: how long the process takes, how many payments you can miss, the 35-day response window, stopping a sheriff sale, what happens to your equity, and whether you can sell during foreclosure.',
  alternates: { canonical: 'https://njforeclosureguide.org/answers/' },
  openGraph: {
    title: 'New Jersey Foreclosure Questions, Answered Directly',
    description:
      'Straight answers about the NJ foreclosure process: timelines, the 35-day response window, sheriff sales, equity, and your options at each stage.',
    url: 'https://njforeclosureguide.org/answers/',
  },
};

// Answer-first entries now live in lib/questions.ts, shared with the
// individual /answers/[slug] pages. This index shows the direct answer and
// links to each question's full page, which is the canonical home of the
// complete answer.
export default function AnswersPage() {
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: QUESTIONS.map((x) => ({
      '@type': 'Question',
      name: x.q,
      acceptedAnswer: { '@type': 'Answer', text: x.short, url: `https://njforeclosureguide.org/answers/${x.slug}/` },
    })),
  };

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'New Jersey Foreclosure Questions, Answered Directly',
    description:
      'Direct answers to common New Jersey foreclosure questions, including timelines, the 35-day response window, sheriff sales, equity, and available options.',
    about: { '@type': 'Thing', name: 'Foreclosure in New Jersey' },
    isAccessibleForFree: true,
    inLanguage: 'en-US',
    dateModified: '2026-08-25',
    publisher: {
      '@type': 'Organization',
      name: 'NJ Foreclosure Guide',
      url: 'https://njforeclosureguide.org',
    },
  };

  return (
    <div className="min-h-full bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />

      <SiteHeader />

      {/* Hero */}
      <section className="bg-gradient-to-b from-slate-950 to-slate-900 text-white py-14 px-4">
        <div className="max-w-3xl mx-auto">
          <p className="text-amber-400 text-xs font-semibold tracking-[0.25em] uppercase mb-4">Straight Answers</p>
          <h1 className="font-serif text-4xl md:text-5xl font-bold mb-5 tracking-tight">
            New Jersey Foreclosure Questions, Answered
          </h1>
          <p className="text-slate-300 text-lg leading-relaxed">
            Direct answers first, detail second. These are the questions New Jersey homeowners actually ask, answered
            without sales language.
          </p>
          <p className="text-slate-500 text-sm mt-5">Last updated August 25, 2026</p>
        </div>
      </section>

      {/* Answers */}
      <article className="max-w-3xl mx-auto px-4 py-14">
        {QUESTIONS.map((item) => (
          <section key={item.slug} className="mb-10 scroll-mt-24" id={item.slug}>
            <h2 className="font-serif text-2xl font-bold text-slate-900 mb-4 leading-snug">
              <Link href={`/answers/${item.slug}/`} className="hover:underline underline-offset-4">
                {item.q}
              </Link>
            </h2>
            <p className="text-slate-900 text-[17px] leading-relaxed font-medium border-l-4 border-amber-400 pl-5 mb-3">
              {item.short}
            </p>
            <Link href={`/answers/${item.slug}/`} className="text-sm text-slate-600 underline underline-offset-4 hover:text-slate-900 font-semibold">
              Full answer, with what to do about it
            </Link>
          </section>
        ))}

        <div className="rounded-xl border border-slate-300 bg-slate-50 p-6">
          <p className="text-sm text-slate-600 leading-relaxed">
            <span className="font-bold text-slate-900">A note on accuracy:</span> these answers describe the general New
            Jersey foreclosure process. Your own deadlines appear on your court documents and control over anything
            written here. This page is educational and is not legal advice. Confirm your situation with a licensed New
            Jersey attorney.
          </p>
        </div>
      </article>

      {/* CTA */}
      <section className="max-w-3xl mx-auto px-4 pb-16">
        <div className="rounded-2xl bg-slate-950 text-white px-8 py-12 text-center">
          <h2 className="font-serif text-2xl font-bold mb-3">Find Out Where You Actually Stand</h2>
          <p className="text-slate-300 mb-8 text-sm leading-relaxed max-w-xl mx-auto">
            Two minutes, free and confidential. If keeping your home is realistic, we say so first, and every result
            includes at least one option that earns us nothing.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/quiz" className="bg-amber-400 text-slate-950 px-8 py-3.5 rounded-lg font-bold hover:bg-amber-300 transition">
              Take the Free Assessment
            </Link>
            <Link href="/tools/timeline" className="border border-white/30 bg-white/5 text-white px-8 py-3.5 rounded-lg font-semibold hover:bg-white/15 transition">
              See the NJ Timeline
            </Link>
          </div>
        </div>
      </section>

      <footer className="bg-slate-950 text-slate-500 py-10 px-4 text-center text-xs">
        <p className="mb-3">&copy; 2026 NJ Foreclosure Guide. All rights reserved.</p>
        <div className="flex gap-5 justify-center flex-wrap">
          <Link href="/" className="hover:text-amber-400 transition">Home</Link>
          <Link href="/companies" className="hover:text-amber-400 transition">Get an Offer</Link>
          <Link href="/privacy" className="hover:text-amber-400 transition">Privacy</Link>
          <Link href="/terms" className="hover:text-amber-400 transition">Terms</Link>
          <Link href="/disclaimer" className="hover:text-amber-400 transition">Disclaimer</Link>
        </div>
      </footer>
    </div>
  );
}
