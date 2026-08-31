import Link from 'next/link';
import type { Metadata } from 'next';
import SiteHeader from '../components/SiteHeader';

export const metadata: Metadata = {
  title: 'Commercial Foreclosure in NJ | Owner\'s Guide',
  description:
    'Facing foreclosure on a commercial property in New Jersey? A free, independent guide for owners of multifamily, mixed-use, retail, industrial, office and land: how the process differs from residential, your exit paths, receivership and guarantee risk, and a confidential assessment.',
  alternates: { canonical: 'https://njforeclosureguide.org/commercial/' },
  openGraph: {
    title: 'Commercial Foreclosure in NJ | Owner\'s Guide',
    description: 'How commercial foreclosure differs, the exit paths that exist, and a confidential owner assessment.',
    url: 'https://njforeclosureguide.org/commercial/',
  },
};

// Commercial hub. Everything here is written for an owner or operator, not a
// homeowner: the Fair Foreclosure Act protections, the court mediation
// program and the consumer-loss-mitigation playbook do NOT apply to
// commercial loans, and this section never implies they do.

const DIFFERENCES: { title: string; body: string }[] = [
  {
    title: 'The consumer protections mostly do not apply',
    body: 'New Jersey\'s Fair Foreclosure Act (the 30-day Notice of Intention, the statutory right to cure) covers residential mortgages. On a commercial loan, your notice and cure rights are whatever the loan documents say, and lenders can accelerate faster. There is no court mediation program for commercial cases.',
  },
  {
    title: 'The lender can come for the rents',
    body: 'Most commercial loans include an assignment of rents. After default, the lender can demand tenants pay it directly and can ask the court to appoint a receiver who takes over operations. Losing control of the income stream is often the real turning point, and it can happen months before any sale.',
  },
  {
    title: 'The guarantee makes it personal',
    body: 'Residential deficiencies are rarely pursued. Commercial lenders pursue guarantors as a matter of course, sometimes in a separate action running alongside the foreclosure. If you signed a personal guarantee, the building is not the only thing at stake.',
  },
  {
    title: 'The exits are different, and there are more of them',
    body: 'Loan workouts and forbearance still exist, but the commercial toolbox also includes discounted payoffs, note sales, bridge financing, sale-leasebacks, deeds in lieu with guarantee releases, and Chapter 11 (including the streamlined Subchapter V for smaller businesses). Chapter 13 is not available to entities.',
  },
];

const PATHS: { name: string; keeps: boolean; line: string }[] = [
  { name: 'Workout or forbearance agreement', keeps: true, line: 'Negotiated payment relief while occupancy or cash flow recovers; usually requires a credible turnaround plan and current financials.' },
  { name: 'Reinstatement or discounted payoff (DPO)', keeps: true, line: 'Bring the loan current, or negotiate to retire it below face value when the lender would rather exit than own the asset.' },
  { name: 'Refinance or bridge loan', keeps: true, line: 'New debt pays off the defaulted lender. Requires equity and a lender comfortable with the story; bridge money is expensive and fast.' },
  { name: 'Chapter 11 reorganization', keeps: true, line: 'The automatic stay halts foreclosure and receivership actions; a confirmed plan can restructure the debt. Costly, disciplined, and sometimes the only tool that stops a receiver.' },
  { name: 'Sale on the market', keeps: false, line: 'Protects the most value when the calendar allows; commercial sales take longer than residential, so the sale clock matters early.' },
  { name: 'Sale-leaseback', keeps: false, line: 'Sell the real estate, keep operating the business as a tenant. Converts trapped equity into cash while preserving the location.' },
  { name: 'Deed in lieu with a release', keeps: false, line: 'Hand the property back in exchange for a written release of the guarantee. The release is the entire point; never sign without it.' },
];

export default function CommercialPage() {
  return (
    <div className="min-h-full bg-white">
      <SiteHeader />

      <section className="bg-gradient-to-b from-slate-950 to-slate-900 text-white py-16 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-amber-400 text-xs font-semibold tracking-[0.25em] uppercase mb-4">
            Commercial property owners · New Jersey
          </p>
          <h1 className="font-serif text-4xl md:text-5xl font-bold mb-5 tracking-tight">
            Commercial Foreclosure Is a Different Game
          </h1>
          <p className="text-slate-300 text-lg leading-relaxed">
            Multifamily, mixed-use, retail, industrial, office, land. The consumer rulebook does not
            apply, the lender has more tools, and so do you. This is the owner&apos;s side of the
            guide: how the process actually runs, where your leverage is, and a confidential
            assessment built for commercial situations.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center mt-8">
            <Link href="/commercial/assessment" className="bg-amber-400 text-slate-950 px-8 py-3.5 rounded-lg font-bold hover:bg-amber-300 transition">
              Start the Commercial Assessment
            </Link>
            <Link href="/commercial/process" className="border border-white/30 bg-white/5 text-white px-8 py-3.5 rounded-lg font-semibold hover:bg-white/15 transition">
              How the Process Runs
            </Link>
          </div>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-4 py-14">
        <h2 className="font-serif text-2xl font-bold text-slate-900 mb-6">Four ways this is not residential foreclosure</h2>
        <div className="grid sm:grid-cols-2 gap-5">
          {DIFFERENCES.map((d) => (
            <div key={d.title} className="border border-slate-200 rounded-2xl px-6 py-5">
              <h3 className="font-bold text-slate-900 mb-2">{d.title}</h3>
              <p className="text-slate-600 text-sm leading-relaxed">{d.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-slate-50 py-14 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-serif text-2xl font-bold text-slate-900 mb-2">Seven exit paths</h2>
          <p className="text-slate-600 mb-6">Four keep the asset. Which ones are realistic depends on equity, cash flow, the guarantee, and how far the case has moved.</p>
          <div className="space-y-3">
            {PATHS.map((o, i) => (
              <div key={o.name} className="bg-white border border-slate-200 rounded-xl px-5 py-4 flex gap-4">
                <span className="shrink-0 w-8 h-8 rounded-full bg-slate-900 text-white flex items-center justify-center font-bold text-sm">{i + 1}</span>
                <div>
                  <p className="font-bold text-slate-900 flex flex-wrap items-center gap-2">
                    {o.name}
                    <span className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full ${o.keeps ? 'bg-emerald-100 text-emerald-800' : 'bg-slate-200 text-slate-700'}`}>
                      {o.keeps ? 'Keeps the asset' : 'Exit'}
                    </span>
                  </p>
                  <p className="text-slate-600 text-sm leading-relaxed mt-1">{o.line}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-6">
            <Link href="/commercial/options" className="text-slate-900 underline underline-offset-4 font-semibold">
              Each path in depth, with its honest downside
            </Link>
          </div>
        </div>
      </section>

      <section className="max-w-3xl mx-auto px-4 py-14">
        <h2 className="font-serif text-2xl font-bold text-slate-900 mb-4">How this works, and how we are paid</h2>
        <div className="space-y-4 text-slate-600 leading-relaxed">
          <p>
            The assessment is free and confidential. It asks about the property, the loan, the guarantee, and the stage of the case, then shows which paths fit and connects you, if you want, with the right kind of help. We take no referral fees from anyone we point you to.
          </p>
          <p>
            One disclosure, stated plainly because commercial owners ask: the people behind this guide hold an ownership interest in Corcoran Sawyer Smith x Builders Resource Center, a licensed New Jersey brokerage. If your path is a sale and you choose to list with them, we benefit. That is why it is labeled a related business everywhere it appears, and why every other option, including the ones that earn us nothing, is shown first.
          </p>
        </div>
        <div className="bg-slate-950 text-white rounded-2xl p-8 mt-8 text-center">
          <h3 className="font-serif text-2xl font-bold mb-3">Confidential Commercial Assessment</h3>
          <p className="text-slate-300 mb-6 max-w-xl mx-auto">Eight questions. Shows which exit paths fit your asset and your timeline, and what to do this week.</p>
          <Link href="/commercial/assessment" className="inline-block bg-amber-400 text-slate-950 px-10 py-4 rounded-lg font-bold hover:bg-amber-300 transition">
            Start the Assessment
          </Link>
        </div>
        <p className="text-slate-400 text-xs mt-6 leading-relaxed">
          Educational information for commercial property owners, not legal, tax or financial advice. Commercial loan documents vary widely and control; a New Jersey attorney experienced in commercial workouts should review yours.
        </p>
      </section>
    </div>
  );
}
