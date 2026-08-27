import Link from 'next/link';
import type { Metadata } from 'next';
import SiteHeader from '../components/SiteHeader';

export const metadata: Metadata = {
  title: 'NJ Foreclosure Glossary | Every Term in Plain English',
  description:
    'Every term you will meet in a New Jersey foreclosure, defined in two plain sentences: NOI, lis pendens, reinstatement, redemption, surplus funds, automatic stay and more.',
  alternates: { canonical: 'https://njforeclosureguide.org/glossary/' },
  openGraph: {
    title: 'NJ Foreclosure Glossary | Every Term in Plain English',
    description: 'Plain-English definitions of every New Jersey foreclosure term.',
    url: 'https://njforeclosureguide.org/glossary/',
  },
};

// Definitions are written for a homeowner reading at a kitchen table, two
// sentences each: what it is, then why it matters to you. NJ-specific where
// NJ differs from the generic meaning. Keep them accurate over punchy.
const TERMS: { term: string; def: string; group: string }[] = [
  // Before the case
  { group: 'Before a case is filed', term: 'Default', def: 'Falling behind on the obligations of your mortgage, usually by missing payments. Default is what gives the lender the right to start a foreclosure, but in New Jersey it must send you a formal notice and wait before filing anything.' },
  { group: 'Before a case is filed', term: 'Notice of Intention to Foreclose (NOI)', def: 'The letter New Jersey law requires your lender to send at least 30 days before filing a foreclosure case, spelling out what you owe and how to catch up. Receiving one means the clock has started but nothing has been filed yet, which makes it the single best moment to act.' },
  { group: 'Before a case is filed', term: 'Fair Foreclosure Act', def: 'The New Jersey law that sets the rules lenders must follow to foreclose on a home, including the NOI, your right to cure, and required disclosures. It exists to give homeowners time and information, and violations of it can be raised as defenses.' },
  { group: 'Before a case is filed', term: 'Right to Cure', def: 'Your right to stop the process by paying the missed payments and allowed charges, bringing the loan current. Before judgment, New Jersey homeowners can generally cure without paying the loan’s full balance.' },
  { group: 'Before a case is filed', term: 'Loss Mitigation', def: 'The lender’s umbrella term for every alternative to foreclosure: modification, forbearance, repayment plans, short sales and more. Asking for the loss mitigation department is how you reach the people who can actually change your loan.' },
  { group: 'Before a case is filed', term: 'Arrears', def: 'The total amount you are behind: missed payments plus late fees and other charges. Every catch-up option, from reinstatement to Chapter 13, is built around how the arrears get paid.' },

  // The court case
  { group: 'The court case', term: 'Judicial Foreclosure', def: 'A foreclosure that must go through the courts, which is the only kind New Jersey allows for homes. The lender has to sue, serve you, and win before anything can be sold.' },
  { group: 'The court case', term: 'Complaint', def: 'The document that opens the lawsuit, stating what the lender claims you owe and asking the court for the right to sell the home. Being served with a complaint starts your 35-day window to file an answer.' },
  { group: 'The court case', term: 'Summons', def: 'The notice served with the complaint telling you a case has been filed and how long you have to respond. Ignoring it does not slow anything down; it leads to a default judgment.' },
  { group: 'The court case', term: 'Lis Pendens', def: 'A notice the lender records with the county saying the property is the subject of a lawsuit. It does not change who owns the home, but it makes the pending case visible to anyone checking the title.' },
  { group: 'The court case', term: 'Answer', def: 'Your formal written response to the complaint, due within 35 days of service in New Jersey. Filing one, especially with real defenses, keeps the case contested and typically adds months to the timeline.' },
  { group: 'The court case', term: 'Contested / Uncontested', def: 'A case is contested when the homeowner files an answer raising defenses, and uncontested when nobody responds. Uncontested cases move through the Office of Foreclosure on paper, without a judge hearing from you.' },
  { group: 'The court case', term: 'Office of Foreclosure', def: 'The statewide court office in Trenton that processes uncontested foreclosure cases for all of New Jersey. If you never answer, your case is decided there rather than by a local judge.' },
  { group: 'The court case', term: 'Foreclosure Mediation Program', def: 'A free New Jersey court program that puts you, your lender and a neutral mediator at one table to work out an alternative, usually with a housing counselor’s help. Eligible homeowners can request it once a case is filed, and it runs alongside the lawsuit rather than pausing it.' },
  { group: 'The court case', term: 'Default Judgment', def: 'The judgment a lender gets when the homeowner never responds to the complaint. It hands the lender everything it asked for and is the usual price of ignoring the paperwork.' },
  { group: 'The court case', term: 'Final Judgment of Foreclosure', def: 'The court order fixing the amount owed and authorizing the sale of the home. After final judgment your options narrow sharply, but the home is still not sold until the sheriff sale actually happens.' },
  { group: 'The court case', term: 'Writ of Execution', def: 'The court’s instruction to the county sheriff to sell the property to satisfy the judgment. It is what moves the case from the courthouse to the sheriff’s sale calendar.' },

  // The sheriff sale
  { group: 'The sheriff sale', term: 'Sheriff Sale', def: 'The public auction of the home, run by the county sheriff after final judgment. Our county-by-county directory shows exactly where each New Jersey county lists its sales.' },
  { group: 'The sheriff sale', term: 'Adjournment', def: 'A postponement of the sheriff sale. New Jersey homeowners are generally entitled to request two adjournments of up to 30 days each through the sheriff’s office, and courts can grant more.' },
  { group: 'The sheriff sale', term: 'Upset Price', def: 'The minimum the lender will accept at auction, set from the judgment amount plus costs. Bidding starts from it, and if nobody outbids, the lender takes the property back.' },
  { group: 'The sheriff sale', term: 'Right of Redemption', def: 'Your right to reclaim the home by paying the full amount owed, which in New Jersey survives for 10 days after the sheriff sale (and until any objections are resolved). It is the last legal exit, and an expensive one, since it requires paying everything.' },
  { group: 'The sheriff sale', term: 'Surplus Funds', def: 'Money left over when the auction brings more than what you owed, which belongs to you (after any junior liens) and is held by the court until claimed. Homeowners with equity should always check for a surplus; it does not get mailed automatically.' },
  { group: 'The sheriff sale', term: 'Deficiency', def: 'The gap when the sale brings less than what you owed. Chasing it requires a separate lawsuit under New Jersey law and is subject to fair-market-value credits, and in practice many lenders never pursue it.' },
  { group: 'The sheriff sale', term: 'Eviction / Writ of Possession', def: 'The court process the new owner must use to remove occupants after a completed sale; even then, nobody may simply change your locks. It takes its own court order and notice, which means a completed sale still is not a same-day move-out.' },

  // Ways out
  { group: 'Ways out', term: 'Reinstatement', def: 'Bringing the loan current by paying the arrears in one sum, which stops the foreclosure without replacing the loan. It is the cleanest exit if the money can be found, including from a family loan or home equity.' },
  { group: 'Ways out', term: 'Loan Modification', def: 'A permanent change to the loan’s terms, usually a lower rate, longer term, or moving arrears to the end, to make the payment affordable again. A complete application generally puts the sale on hold while it is reviewed.' },
  { group: 'Ways out', term: 'Forbearance', def: 'A temporary pause or reduction of payments while you recover from a hardship, agreed with the lender. The missed amounts are still owed at the end, so it buys time rather than forgiveness.' },
  { group: 'Ways out', term: 'Repayment Plan', def: 'An agreement to pay your normal payment plus a portion of the arrears each month until you are caught up. It suits hardships that have already ended, when income is back but the past-due balance is not.' },
  { group: 'Ways out', term: 'Refinance', def: 'Replacing the defaulted loan with a new one, which pays off the old lender and ends that foreclosure case. It requires enough equity and income to qualify, which is why it works best early.' },
  { group: 'Ways out', term: 'Short Sale', def: 'Selling the home for less than the mortgage balance with the lender’s written approval. Done right, the lender releases the lien and, ideally, waives the remaining debt in writing.' },
  { group: 'Ways out', term: 'Deed in Lieu of Foreclosure', def: 'Handing the deed to the lender voluntarily in exchange for ending the case. It surrenders the home but can shorten the damage, and any debt waiver should be in writing before you sign.' },
  { group: 'Ways out', term: 'Cash Sale', def: 'Selling the home quickly to a cash buyer and paying off the mortgage from the proceeds before the auction. It closes in weeks rather than months, at a price below market, which is the trade you are making for certainty and speed.' },
  { group: 'Ways out', term: 'Chapter 13 Bankruptcy', def: 'A court-supervised repayment plan for people with regular income that spreads the arrears over three to five years while you keep making the current payments. Filing triggers the automatic stay, which pauses the foreclosure immediately.' },
  { group: 'Ways out', term: 'Automatic Stay', def: 'The federal court order that takes effect the moment a bankruptcy is filed, halting foreclosures, sales and collection activity. It is the strongest pause button in the process, though lenders can ask the court to lift it.' },

  // People and paper
  { group: 'People and paper', term: 'HUD-Approved Housing Counselor', def: 'A counselor at a nonprofit approved by the federal government to help homeowners for free, including preparing loss-mitigation applications and mediation. Free means free; anyone charging for "counseling" is something else.' },
  { group: 'People and paper', term: 'Loss Mitigation Application', def: 'The lender’s standard package (income documents, bank statements, tax returns, hardship letter) used to evaluate you for every alternative at once. Complete applications get legal protections that incomplete ones do not, so completeness matters more than speed.' },
  { group: 'People and paper', term: 'Hardship Letter', def: 'Your short written explanation of what went wrong, when, and what has changed. Lenders respond to specifics and dates, not emotion.' },
  { group: 'People and paper', term: 'Servicer', def: 'The company you actually deal with, which collects payments and handles loss mitigation, and may not be the company that owns your loan. When people say "call your lender," the servicer is who answers.' },
  { group: 'People and paper', term: 'Equity', def: 'What the home is worth minus everything owed against it. Equity is your negotiating power in a foreclosure: it is what refinancing borrows against, what a sale protects, and what doing nothing hands away.' },
  { group: 'People and paper', term: 'Foreclosure Rescue Scam', def: 'Any operation that asks for money up front to "save your home," tells you to stop talking to your lender, or pressures you to sign the deed over. New Jersey and federal law prohibit charging homeowners before delivering relief; free help exists, so never pay to find out your options.' },
];

const GROUPS = [...new Set(TERMS.map((t) => t.group))];

const schema = {
  '@context': 'https://schema.org',
  '@type': 'DefinedTermSet',
  '@id': 'https://njforeclosureguide.org/glossary/',
  name: 'New Jersey Foreclosure Glossary',
  description: 'Plain-English definitions of the terms used in New Jersey foreclosure cases.',
  hasDefinedTerm: TERMS.map((t) => ({
    '@type': 'DefinedTerm',
    name: t.term,
    description: t.def,
    inDefinedTermSet: 'https://njforeclosureguide.org/glossary/',
  })),
};

export default function GlossaryPage() {
  return (
    <div className="min-h-full bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <SiteHeader />

      <section className="bg-gradient-to-b from-slate-950 to-slate-900 text-white py-14 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-amber-400 text-xs font-semibold tracking-[0.25em] uppercase mb-4">
            {TERMS.length} terms, plain English
          </p>
          <h1 className="font-serif text-4xl md:text-5xl font-bold mb-5 tracking-tight">
            The NJ Foreclosure Glossary
          </h1>
          <p className="text-slate-300 text-lg leading-relaxed">
            Every term you will meet in letters, court papers and phone calls, defined in two
            sentences: what it is, and why it matters to you.
          </p>
        </div>
      </section>

      <nav className="max-w-3xl mx-auto px-4 pt-10">
        <div className="flex flex-wrap gap-2">
          {GROUPS.map((g) => (
            <a
              key={g}
              href={`#${g.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`}
              className="text-sm border border-slate-300 rounded-full px-4 py-1.5 text-slate-700 hover:bg-slate-100 transition"
            >
              {g}
            </a>
          ))}
        </div>
      </nav>

      <section className="max-w-3xl mx-auto px-4 py-10">
        {GROUPS.map((g) => (
          <div key={g} id={g.toLowerCase().replace(/[^a-z0-9]+/g, '-')} className="mb-12 scroll-mt-24">
            <h2 className="font-serif text-2xl font-bold text-slate-900 mb-6 pb-2 border-b border-slate-200">
              {g}
            </h2>
            <dl className="space-y-6">
              {TERMS.filter((t) => t.group === g).map((t) => (
                <div key={t.term}>
                  <dt className="font-bold text-slate-900">{t.term}</dt>
                  <dd className="text-slate-600 leading-relaxed mt-1">{t.def}</dd>
                </div>
              ))}
            </dl>
          </div>
        ))}

        <div className="bg-slate-50 rounded-2xl p-6 mt-4">
          <p className="text-slate-700 leading-relaxed mb-4">
            Terms are easier with a map. The free assessment tells you which of these apply to your
            situation and what to do about them this week.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <Link href="/quiz" className="bg-amber-400 text-slate-950 px-8 py-3.5 rounded-lg font-bold text-center hover:bg-amber-300 transition">
              Take the Free Assessment
            </Link>
            <Link href="/sheriff-sales" className="border border-slate-300 text-slate-900 px-8 py-3.5 rounded-lg font-semibold text-center hover:bg-slate-100 transition">
              Sheriff Sale Directory
            </Link>
          </div>
        </div>
        <p className="text-slate-400 text-xs mt-6 leading-relaxed">
          Educational definitions, not legal advice. How a term applies to your case is a question
          for a licensed New Jersey attorney.
        </p>
      </section>
    </div>
  );
}
