import Link from 'next/link';
import type { Metadata } from 'next';
import SiteHeader from '../../components/SiteHeader';

export const metadata: Metadata = {
  title: 'NJ Commercial Foreclosure Process | Stage by Stage',
  description:
    'How a New Jersey commercial foreclosure actually runs: default and acceleration under the loan documents, the complaint and 35-day answer, assignment of rents and receivership, final judgment, sheriff sale and adjournments, and the deficiency and guarantee action. What to do at each stage.',
  alternates: { canonical: 'https://njforeclosureguide.org/commercial/process/' },
  openGraph: {
    title: 'NJ Commercial Foreclosure Process | Stage by Stage',
    description: 'Default, complaint, receivership, judgment, sale, deficiency. What each stage means for an owner.',
    url: 'https://njforeclosureguide.org/commercial/process/',
  },
};

const STAGES: { n: number; name: string; what: string; clock: string; move: string; open: string }[] = [
  {
    n: 1,
    name: 'Default and acceleration',
    what: 'A missed payment, a covenant breach (debt-service coverage, occupancy, unpaid taxes or insurance), or a maturity default when the balloon comes due. The loan documents govern what notice you get; the Fair Foreclosure Act\'s 30-day Notice of Intention does not apply to commercial loans. Acceleration makes the entire balance due.',
    clock: 'Whatever cure period the note and mortgage provide, often 10 to 30 days, sometimes none for a maturity default.',
    move: 'Open a dialogue with the lender before the file moves to special servicing or counsel: a current rent roll, operating statement, and a one-page plan buy credibility. Pull the loan documents and read the default, cure, and guarantee sections with counsel.',
    open: 'Everything: workout, reinstatement, refinance, sale, sale-leaseback.',
  },
  {
    n: 2,
    name: 'Complaint and the 35-day answer',
    what: 'New Jersey is judicial for all foreclosures, so the lender files in Superior Court and serves the entity and, usually, the guarantors. The complaint often pleads the guarantee alongside the mortgage. A lis pendens is recorded against the property.',
    clock: '35 days from service to file an answer. An uncontested case moves through the Office of Foreclosure on paper.',
    move: 'Answer, with counsel. Defenses in commercial cases are narrower than in residential, but a contested case buys negotiating time, and the answer date is also the deadline to raise lender misconduct, accounting disputes, or defects in the guarantee.',
    open: 'Workout, DPO, refinance or bridge, sale, sale-leaseback, Chapter 11, deed in lieu.',
  },
  {
    n: 3,
    name: 'Rents and the receiver',
    what: 'Under the assignment of rents, the lender may notify tenants to pay it directly and may move for a rent receiver. Courts appoint receivers when the property is deteriorating, taxes are unpaid, or rents are being diverted. A receiver takes over leasing, collections and management.',
    clock: 'A receivership motion can be filed with or shortly after the complaint; hearings come within weeks.',
    move: 'Keep the property insured, taxes current if at all possible, and rents documented and applied to the property; those facts decide the motion. If a receiver is likely, a Chapter 11 filing before the hearing preserves control through the automatic stay.',
    open: 'Chapter 11 is the decisive tool here; workout and sale remain possible but with less leverage once income is gone.',
  },
  {
    n: 4,
    name: 'Final judgment and the writ',
    what: 'The court fixes the amount due and issues a writ of execution to the county sheriff. Curing now generally means paying the full judgment, not just the arrears.',
    clock: 'Weeks to a few months from judgment to a scheduled sale, depending on the county.',
    move: 'If a sale is the exit, it must now be a race against the sheriff\'s calendar; adjournments make it winnable. If the exit is a deed in lieu, negotiate the guarantee release before the sale, while the lender still gains something from cooperation.',
    open: 'Sale before auction, Chapter 11 before auction, payoff of the judgment, deed in lieu with release.',
  },
  {
    n: 5,
    name: 'Sheriff sale and adjournments',
    what: 'The public auction, run by the county sheriff. New Jersey law generally permits the debtor two adjournments of up to 30 days each, and courts can grant more. After the sale there is a 10-day period for objections and redemption.',
    clock: 'The scheduled date, plus up to roughly 60 days of adjournments, plus 10 days post-sale.',
    move: 'Use the adjournments deliberately: each one should be buying a specific closing, filing, or payoff, not just time. Confirm the real date on your county\'s official listings; they move constantly.',
    open: 'Closing a sale, a Chapter 11 filing, or full redemption, each before the auction is confirmed.',
  },
  {
    n: 6,
    name: 'Deficiency and the guarantee',
    what: 'If the sale brings less than the judgment, the lender may pursue the shortfall. Against the borrowing entity this requires a deficiency action within strict time limits; against a guarantor, the lender often proceeds under the guarantee directly, sometimes in parallel with the foreclosure. Fair-market-value credits and the guarantee\'s own terms are the battleground.',
    clock: 'Deficiency actions must be brought within months of the sale; guarantee suits may already be pending.',
    move: 'This is where the release negotiated in earlier stages pays off. If none exists, the fair-market-value defense, guarantee defenses, and a negotiated settlement are the remaining levers, and personal bankruptcy is the backstop.',
    open: 'Settlement, defenses, and exposure management rather than the property itself.',
  },
];

export default function CommercialProcessPage() {
  return (
    <div className="min-h-full bg-white">
      <SiteHeader />

      <section className="bg-gradient-to-b from-slate-950 to-slate-900 text-white py-14 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-amber-400 text-xs font-semibold tracking-[0.25em] uppercase mb-4">
            <Link href="/commercial" className="hover:text-amber-300">Commercial</Link> · The process
          </p>
          <h1 className="font-serif text-4xl font-bold mb-4 tracking-tight">How a NJ Commercial Foreclosure Runs</h1>
          <p className="text-slate-300 text-lg leading-relaxed">
            Six stages, what the lender can do at each, and which exits are still open. Find your stage.
          </p>
        </div>
      </section>

      <section className="max-w-3xl mx-auto px-4 py-12">
        <ol className="space-y-6">
          {STAGES.map((s) => (
            <li key={s.n} className="border border-slate-200 rounded-2xl px-6 py-6">
              <div className="flex items-center gap-3 mb-3">
                <span className="shrink-0 w-9 h-9 rounded-full bg-slate-900 text-white flex items-center justify-center font-bold">{s.n}</span>
                <h2 className="font-bold text-slate-900 text-lg">{s.name}</h2>
              </div>
              <p className="text-slate-600 text-sm leading-relaxed mb-3">{s.what}</p>
              <p className="text-slate-700 text-sm leading-relaxed border-l-2 border-amber-400 pl-3 mb-3"><strong>Clock:</strong> {s.clock}</p>
              <p className="text-slate-600 text-sm leading-relaxed mb-2"><strong className="text-slate-900">Your move:</strong> {s.move}</p>
              <p className="text-slate-500 text-sm leading-relaxed"><strong className="text-slate-700">Still open:</strong> {s.open}</p>
            </li>
          ))}
        </ol>

        <div className="bg-slate-50 rounded-2xl p-6 mt-10">
          <p className="text-slate-700 leading-relaxed mb-4">
            Tell us the stage, the asset, and the guarantee, and the assessment shows which exits still fit and what to do this week.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <Link href="/commercial/assessment" className="bg-amber-400 text-slate-950 px-8 py-3.5 rounded-lg font-bold text-center hover:bg-amber-300 transition">Start the Assessment</Link>
            <Link href="/sheriff-sales" className="border border-slate-300 text-slate-900 px-8 py-3.5 rounded-lg font-semibold text-center hover:bg-slate-100 transition">County Sheriff Sale Directory</Link>
          </div>
        </div>
        <p className="text-slate-400 text-xs mt-6 leading-relaxed">
          Educational information, not legal advice. Commercial loan documents and guarantees control and vary widely; a New Jersey attorney experienced in commercial foreclosure and workouts should review yours before you act.
        </p>
      </section>
    </div>
  );
}
