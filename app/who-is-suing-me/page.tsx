import Link from 'next/link';
import type { Metadata } from 'next';
import SiteHeader from '../components/SiteHeader';
import { PLAINTIFFS, plaintiffCount } from '../../lib/plaintiffs';
import { REPORT, AS_OF_LONG, num } from '../../lib/sheriff-report';
import { OG_IMAGES } from '../../lib/og';
import { fitTitle, fitDescription } from '../../lib/seo';

const URL = 'https://njforeclosureguide.org/who-is-suing-me/';

export const metadata: Metadata = {
  title: fitTitle('Who Is Suing Me? NJ Foreclosure Plaintiffs Explained'),
  description: fitDescription(
    'U.S. Bank as trustee, Wilmington Savings Fund Society, Deutsche Bank, Lakeview and more: who the companies foreclosing in New Jersey are, who actually services the loan, and how to reach them.',
  ),
  alternates: { canonical: URL },
  openGraph: { images: OG_IMAGES, title: 'Who Is Suing Me? NJ Foreclosure Plaintiffs Explained', description: 'The names on NJ foreclosure complaints, explained.', url: URL },
};

export default function WhoIsSuingMePage() {
  const rows = [...PLAINTIFFS].map((p) => ({ p, n: plaintiffCount(p) })).sort((a, b) => (b.n ?? 0) - (a.n ?? 0));
  const kindLabel = { trustee: 'Trustee for a loan trust', servicer: 'Mortgage servicer', agency: 'Loan owner / agency' } as const;
  return (
    <div className="min-h-full bg-white">
      <SiteHeader />
      <section className="bg-gradient-to-b from-slate-950 to-slate-900 text-white py-16 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-amber-400 text-xs font-semibold tracking-[0.25em] uppercase mb-4">Foreclosure plaintiffs, explained</p>
          <h1 className="font-serif text-4xl md:text-5xl font-bold mb-5 tracking-tight">Who Is Suing Me?</h1>
          <p className="text-slate-300 text-lg leading-relaxed">
            Most New Jersey foreclosures are brought by a company the homeowner never borrowed from: a trustee, a servicer that bought the
            rights, or a loan owner. Find the name on your complaint to see who they are and who you should actually call.
          </p>
        </div>
      </section>

      <section className="max-w-3xl mx-auto px-4 py-12">
        <p className="text-slate-600 mb-6">
          The most frequent plaintiffs on New Jersey sheriff sale lists, with how many scheduled sales named each one (as of {AS_OF_LONG},{' '}
          {REPORT.statewide.countiesIncluded} counties).
        </p>
        <div className="space-y-3 mb-12">
          {rows.map(({ p, n }) => (
            <Link key={p.slug} href={`/who-is-suing-me/${p.slug}/`} className="flex items-center justify-between gap-4 border border-slate-200 rounded-2xl px-5 py-4 hover:border-slate-400 transition">
              <div>
                <p className="font-bold text-slate-900">{p.name}</p>
                <p className="text-sm text-slate-500">{kindLabel[p.kind]}</p>
              </div>
              {n !== null && (
                <p className="text-right shrink-0">
                  <span className="font-serif text-2xl font-bold text-slate-900 tabular-nums">{num(n)}</span>
                  <span className="block text-xs text-slate-500">scheduled sales</span>
                </p>
              )}
            </Link>
          ))}
        </div>

        <h2 className="font-serif text-2xl font-bold text-slate-900 mb-3">Trustee, servicer, owner: the difference</h2>
        <div className="space-y-3 text-slate-600 leading-relaxed mb-10">
          <p><strong className="text-slate-900">The owner (investor)</strong> holds the loan: Fannie Mae, Freddie Mac, a Ginnie Mae pool, a bank, or a trust owned by investors. Its rules decide which workouts are possible.</p>
          <p><strong className="text-slate-900">The trustee</strong>{' '}holds the loans for a trust on the investors&apos; behalf and often brings the foreclosure in its own name, followed by &ldquo;as trustee for&rdquo; and the trust&apos;s name. It does not manage your account day to day.</p>
          <p><strong className="text-slate-900">The servicer</strong> is who you pay. It runs the account, reviews assistance applications and usually hires the foreclosure attorney. For anything practical, the servicer is who you call.</p>
          <p>
            Not sure who your servicer is? See{' '}
            <Link href="/answers/how-do-i-find-out-who-owns-my-mortgage" className="text-slate-900 underline underline-offset-4 font-semibold">how to find out who owns your mortgage</Link>{' '}
            and our{' '}
            <Link href="/servicers/" className="text-slate-900 underline underline-offset-4 font-semibold">verified servicer directory</Link>.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-3">
          <Link href="/quiz" className="bg-amber-400 text-slate-950 px-8 py-3.5 rounded-lg font-bold text-center hover:bg-amber-300 transition">See My Options, Free</Link>
          <Link href="/answers/why-is-a-bank-i-never-heard-of-suing-me" className="border border-slate-300 text-slate-900 px-8 py-3.5 rounded-lg font-semibold text-center hover:bg-slate-50 transition">Why an unfamiliar name is suing</Link>
        </div>
        <p className="text-slate-400 text-xs mt-6 leading-relaxed">
          Counts are scheduled sheriff sales from public county lists, not completed sales. We are not affiliated with or paid by any company
          listed. Educational information, not legal advice.
        </p>
      </section>
    </div>
  );
}
