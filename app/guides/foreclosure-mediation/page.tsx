import Link from 'next/link';
import type { Metadata } from 'next';
import SiteHeader from '../../components/SiteHeader';
import GuideFaq, { FaqItem } from '../../components/GuideFaq';

/**
 * PILLAR: the New Jersey Foreclosure Mediation Program, in plain English.
 *
 * Built 2026-09-24: the official material (njcourts.gov, court forms) is
 * accurate but scattered across PDFs; attorney pages rank for it as lead
 * magnets. Sources: N.J. Court Rule 4:64-1B; N.J.S.A. 2A:50-56 and 2A:50-74;
 * NJ Courts self-help foreclosure page; the court's "How to Apply for
 * Foreclosure Mediation" borrower instructions (Superior Court Clerk's
 * Office) — eligibility list, counselor step, no filing fee, 60 days from
 * service to request without a motion.
 *
 * The court updates forms and procedures; the page tells readers to use the
 * current forms from njcourts.gov rather than reprinting an address or fee
 * that may change. Never say mediation "stops" a foreclosure — it does not.
 */

export const metadata: Metadata = {
  title: 'NJ Foreclosure Mediation Program: Who Qualifies & How to Apply',
  description:
    'How New Jersey’s free court foreclosure mediation works: who qualifies, the 60-day window to request it, the free housing counselor step, what to bring, and what it can and cannot do.',
  alternates: { canonical: 'https://njforeclosureguide.org/guides/foreclosure-mediation/' },
  openGraph: {
    title: 'The NJ Foreclosure Mediation Program, Explained',
    description: 'Free, court-run, and most useful when requested early. Who qualifies and exactly how to apply.',
    url: 'https://njforeclosureguide.org/guides/foreclosure-mediation/',
  },
};

const ELIGIBLE = [
  'The home is a residential 1–4 family property and your primary residence.',
  'The foreclosure was filed by a lender or other mortgage holder (not a tax, condo, or HOA lien case, and not a commercial loan).',
  'Every borrower on the mortgage takes part.',
  'You are not currently in bankruptcy.',
  'You work with a free HUD-approved housing counselor, who helps prepare your request and paperwork.',
];

const STEPS = [
  ['Call a free HUD-approved counselor', 'Use HUD’s line (800-569-4287) or the NJ Housing and Mortgage Finance Agency to find a counselor near you. They cost nothing, and the court’s process expects you to work with one.'],
  ['File the mediation request early', 'Get the current Foreclosure Mediation request form, checklist, and financial worksheet from njcourts.gov. The court’s instructions allow a request up to 60 days after you were served with the summons and complaint without special permission, and there is no filing fee. After that, you generally need a motion asking the court to allow it.'],
  ['Still answer the complaint', 'Mediation does not pause the lawsuit. You generally have 35 days from service to file an answer, and requesting mediation does not change that deadline.'],
  ['Build your package with the counselor', 'Proof of income, bank statements, a hardship letter, tax returns, and a realistic monthly budget. A complete package is what turns a session into an offer instead of a follow-up.'],
  ['Attend the session prepared', 'A neutral mediator works with you and the lender’s representative toward a workable outcome. The mediator does not decide the case, and neither side is forced to agree to terms.'],
];

const FAQ_ITEMS: FaqItem[] = [
  {
    q: 'Is New Jersey foreclosure mediation free?',
    a: 'Yes, for eligible homeowners. There is no fee to file the court’s mediation request within the normal window, and the HUD-approved housing counselor who helps you prepare is free. A late request generally requires a motion, which can carry a court filing fee.',
  },
  {
    q: 'When do I have to request foreclosure mediation in NJ?',
    a: 'As early as possible. The court’s instructions allow a request up to 60 days after service of the summons and complaint without special permission. After that, you generally have to file a motion asking the court to allow mediation.',
  },
  {
    q: 'Does mediation stop the foreclosure or the sheriff sale?',
    a: 'No. The New Jersey courts are explicit that lenders can continue the foreclosure during mediation. You must still file your answer within 35 days of service and keep meeting every court deadline while mediation proceeds.',
  },
  {
    q: 'Who qualifies for foreclosure mediation in New Jersey?',
    a: 'Generally, owners of a residential 1–4 family home that is their primary residence, facing a foreclosure brought by a mortgage lender, with every borrower participating, not currently in bankruptcy, and working with a HUD-approved housing counselor. Commercial loans and tax, condo, or HOA lien foreclosures are not covered.',
  },
  {
    q: 'What can come out of mediation?',
    a: 'Common outcomes include a loan modification, a repayment plan or forbearance, or an agreed exit such as a short sale or deed in lieu with better terms than a sheriff sale. Nothing is guaranteed; the lender is not required to agree to any particular result.',
  },
];

export default function ForeclosureMediationPage() {
  return (
    <div className="min-h-full bg-white">
      <SiteHeader />

      <section className="bg-gradient-to-b from-slate-950 to-slate-900 text-white py-16 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-amber-400 text-xs font-semibold tracking-[0.25em] uppercase mb-4">Free · Court-Run</p>
          <h1 className="font-serif text-4xl md:text-5xl font-bold mb-5 tracking-tight">
            The NJ Foreclosure Mediation Program, Explained
          </h1>
          <p className="text-slate-300 text-lg leading-relaxed">
            A free seat at the table with your lender and a neutral mediator. Who qualifies, the window to
            ask for it, and how to walk in prepared.
          </p>
        </div>
      </section>

      <article className="max-w-3xl mx-auto px-4 py-12">
        <div className="rounded-2xl border-2 border-amber-300 bg-amber-50 px-6 py-5 mb-10">
          <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-amber-800 mb-2">The short answer</p>
          <p className="text-slate-800 leading-relaxed">
            New Jersey&apos;s courts run a free foreclosure mediation program for owner-occupied 1–4 family
            homes. Work with a free HUD-approved counselor and file the court&apos;s request form within 60
            days of being served to avoid needing a motion. Mediation does not pause the case, so you still
            file your answer within 35 days.
          </p>
        </div>

        <h2 className="font-serif text-2xl font-bold text-slate-900 mb-4">Who qualifies</h2>
        <ul className="space-y-2.5 mb-10">
          {ELIGIBLE.map((e) => (
            <li key={e} className="flex gap-3 text-slate-600 leading-relaxed">
              <span className="text-amber-600 font-bold">✓</span>
              <span>{e}</span>
            </li>
          ))}
        </ul>

        <h2 className="font-serif text-2xl font-bold text-slate-900 mb-5">How to apply, step by step</h2>
        <ol className="space-y-5 mb-12">
          {STEPS.map(([t, d], i) => (
            <li key={t} className="flex gap-4">
              <span className="shrink-0 w-9 h-9 rounded-full bg-slate-900 text-white flex items-center justify-center font-bold text-sm">
                {i + 1}
              </span>
              <div>
                <p className="font-bold text-slate-900">{t}</p>
                <p className="text-slate-600 leading-relaxed mt-1">{d}</p>
              </div>
            </li>
          ))}
        </ol>

        <h2 className="font-serif text-2xl font-bold text-slate-900 mb-3">What mediation can and cannot do</h2>
        <div className="space-y-4 text-slate-600 leading-relaxed mb-10">
          <p>
            <strong className="text-slate-900">It can</strong> get a decision-maker on the lender&apos;s side
            to look at a complete package with a neutral person keeping the process moving. That is often
            the difference for homeowners whose modification requests disappeared into a servicer&apos;s
            fax machine.
          </p>
          <p>
            <strong className="text-slate-900">It cannot</strong> force the lender to agree to anything,
            stop the lawsuit, or replace your answer to the complaint. If the numbers do not support keeping
            the home, the most valuable thing mediation produces may be time and an orderly exit that
            protects your equity and credit better than an auction would.
          </p>
          <p>
            <strong className="text-slate-900">Beware of anyone charging to &quot;get you into
            mediation.&quot;</strong> The request, the counselor, and the session are free. Up-front fees for
            foreclosure rescue services are generally illegal.
          </p>
        </div>

        <div className="rounded-2xl bg-slate-50 border border-slate-200 px-6 py-6 mb-10">
          <p className="font-bold text-slate-900 mb-2">Just served, or not sure of your dates?</p>
          <p className="text-slate-600 text-sm leading-relaxed mb-4">
            The deadline calculator works out your 35-day answer date from the day you were served. Count 60
            days from that same day for the mediation request window.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <Link href="/tools/deadlines" className="bg-amber-400 text-slate-950 px-6 py-3 rounded-lg font-bold text-center hover:bg-amber-300 transition">
              Calculate my deadlines
            </Link>
            <Link href="/documents/summons-and-complaint" className="border border-slate-300 text-slate-900 px-6 py-3 rounded-lg font-semibold text-center hover:bg-white transition">
              The summons &amp; complaint, decoded
            </Link>
          </div>
        </div>
      </article>

      <GuideFaq items={FAQ_ITEMS} />

      <div className="max-w-3xl mx-auto px-4 pb-14">
        <p className="text-slate-400 text-xs leading-relaxed">
          Educational information, not legal advice. Court forms and procedures change; use the current
          versions on njcourts.gov. Sources: N.J. Court Rule 4:64-1B; N.J.S.A. 2A:50-56 and 2A:50-74; New
          Jersey Courts foreclosure self-help materials.
        </p>
      </div>
    </div>
  );
}
