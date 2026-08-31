import Link from 'next/link';
import type { Metadata } from 'next';
import SiteHeader from '../../components/SiteHeader';

export const metadata: Metadata = {
  title: 'Commercial Foreclosure Options in NJ | Seven Exit Paths',
  description:
    'Every realistic path out of a New Jersey commercial foreclosure, for owners: workout and forbearance, reinstatement and discounted payoff, refinance and bridge debt, Chapter 11, market sale, sale-leaseback, and deed in lieu with a guarantee release. Each with its honest downside.',
  alternates: { canonical: 'https://njforeclosureguide.org/commercial/options/' },
  openGraph: {
    title: 'Commercial Foreclosure Options in NJ | Seven Exit Paths',
    description: 'Workout, DPO, bridge, Chapter 11, sale, sale-leaseback, deed in lieu. Compared honestly.',
    url: 'https://njforeclosureguide.org/commercial/options/',
  },
};

interface Opt {
  name: string;
  keeps: boolean;
  what: string;
  worksWhen: string;
  catchLine: string;
  speed: string;
}

const OPTIONS: Opt[] = [
  {
    name: 'Workout or forbearance agreement',
    keeps: true,
    what: 'A negotiated modification of the loan: interest-only periods, extended maturity, capitalized arrears, or a temporary payment holiday, in exchange for a credible plan and usually tighter reporting. Lenders agree when foreclosing would cost them more than waiting.',
    worksWhen: 'Occupancy or cash flow has a believable path back, you can show current financials and a rent roll, and the relationship with the lender is not yet adversarial.',
    catchLine: 'Expect a pre-negotiation agreement, waived defenses, and a short leash. Many workouts are bridges to a sale on the lender\'s timeline, not yours.',
    speed: '4-12 weeks to paper',
  },
  {
    name: 'Reinstatement or discounted payoff (DPO)',
    keeps: true,
    what: 'Reinstatement cures the default per the loan documents. A DPO goes further: the lender accepts less than the full balance to be rid of the loan, common when the note has been sold to a distressed-debt buyer who paid cents on the dollar.',
    worksWhen: 'You can raise the money (equity partner, refinance, asset sale) and the holder of the note would rather have cash now than own the building.',
    catchLine: 'A DPO can trigger cancellation-of-debt income for tax purposes and typically requires the guarantor to bring fresh money. Get the tax advice before the term sheet, not after.',
    speed: 'Days to 60 days',
  },
  {
    name: 'Refinance or bridge loan',
    keeps: true,
    what: 'New debt retires the defaulted loan and ends that foreclosure. Bank refinancing is difficult mid-default; bridge and private lenders fill the gap at higher rates and shorter terms.',
    worksWhen: 'There is real equity, a story a lender can underwrite (lease-up, repositioning, sale within 12-24 months), and the guarantor can support the new loan.',
    catchLine: 'Bridge money is expensive, and a bridge with no exit is just a slower foreclosure. Know what pays it off before you sign.',
    speed: '3-8 weeks',
  },
  {
    name: 'Chapter 11 reorganization',
    keeps: true,
    what: 'A federal bankruptcy filing by the owning entity. The automatic stay halts the foreclosure and any receivership motion the moment it is filed, and a confirmed plan can restructure the debt over time. Smaller businesses may qualify for the streamlined, less costly Subchapter V.',
    worksWhen: 'The asset produces income, there is a feasible plan the court can confirm, and the goal is to keep operating rather than to delay the inevitable.',
    catchLine: 'Expensive, public, and demanding; single-asset real estate cases face tight deadlines to file a plan or start paying the lender. It is a tool for a plan, not a substitute for one.',
    speed: 'Stay is immediate; plans take months',
  },
  {
    name: 'Sale on the market',
    keeps: false,
    what: 'List and sell before the sheriff sale, pay off the lender from proceeds, keep the equity. Commercial marketing periods are longer than residential, and buyers will diligence the leases, the environmental file, and the roof.',
    worksWhen: 'The case is early enough that a 90-180 day sale can close, or adjournments can be secured, and the value clears the debt.',
    catchLine: 'Distressed-sale pricing appears the moment buyers sense a deadline. Start early and let the broker control the narrative.',
    speed: '90-180 days',
  },
  {
    name: 'Sale-leaseback',
    keeps: false,
    what: 'Sell the real estate to an investor and sign a long-term lease to stay. The operating business keeps its location and customers; the equity becomes cash that pays off the lender and funds the business.',
    worksWhen: 'The business is viable but the real estate debt is not, and rent at market is affordable.',
    catchLine: 'You are trading ownership for a landlord. Negotiate renewal options and a purchase option if you ever want the building back.',
    speed: '60-120 days',
  },
  {
    name: 'Deed in lieu with a guarantee release',
    keeps: false,
    what: 'Voluntarily transfer the property to the lender in exchange for ending the case. The commercial version has one purpose: obtaining a written release of the personal guarantee and any deficiency claim.',
    worksWhen: 'There is no equity to protect, the guarantee is the real exposure, and the lender prefers a clean title over a contested case.',
    catchLine: 'Without the release in writing, you have given away the asset and kept the liability. Environmental and tenant issues can make lenders refuse.',
    speed: '30-90 days',
  },
];

export default function CommercialOptionsPage() {
  return (
    <div className="min-h-full bg-white">
      <SiteHeader />

      <section className="bg-gradient-to-b from-slate-950 to-slate-900 text-white py-14 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-amber-400 text-xs font-semibold tracking-[0.25em] uppercase mb-4">
            <Link href="/commercial" className="hover:text-amber-300">Commercial</Link> · Exit paths
          </p>
          <h1 className="font-serif text-4xl font-bold mb-4 tracking-tight">Seven Ways Out of a Commercial Foreclosure</h1>
          <p className="text-slate-300 text-lg leading-relaxed">
            Four keep the asset, three exit it, and every one has a catch. Read the catch first; that is where deals die.
          </p>
        </div>
      </section>

      <section className="max-w-3xl mx-auto px-4 py-12">
        <div className="space-y-6">
          {OPTIONS.map((o, i) => (
            <article key={o.name} className="border border-slate-200 rounded-2xl px-6 py-6">
              <div className="flex flex-wrap items-center gap-3 mb-3">
                <span className="shrink-0 w-8 h-8 rounded-full bg-slate-900 text-white flex items-center justify-center font-bold text-sm">{i + 1}</span>
                <h2 className="font-bold text-slate-900 text-lg">{o.name}</h2>
                <span className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full ${o.keeps ? 'bg-emerald-100 text-emerald-800' : 'bg-slate-200 text-slate-700'}`}>
                  {o.keeps ? 'Keeps the asset' : 'Exit'}
                </span>
                <span className="text-xs text-slate-500 ml-auto">{o.speed}</span>
              </div>
              <p className="text-slate-600 text-sm leading-relaxed mb-3">{o.what}</p>
              <p className="text-slate-700 text-sm leading-relaxed mb-2"><strong className="text-slate-900">Works when:</strong> {o.worksWhen}</p>
              <p className="text-slate-600 text-sm leading-relaxed border-l-2 border-amber-400 pl-3"><strong className="text-slate-900">The catch:</strong> {o.catchLine}</p>
            </article>
          ))}
        </div>

        <div className="bg-slate-50 rounded-2xl p-6 mt-10">
          <p className="text-slate-700 leading-relaxed mb-4">
            Which of these fit depends on equity, cash flow, the guarantee, and the stage of the case. The confidential assessment sorts that in two minutes.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <Link href="/commercial/assessment" className="bg-amber-400 text-slate-950 px-8 py-3.5 rounded-lg font-bold text-center hover:bg-amber-300 transition">Start the Assessment</Link>
            <Link href="/commercial/process" className="border border-slate-300 text-slate-900 px-8 py-3.5 rounded-lg font-semibold text-center hover:bg-slate-100 transition">How the Process Runs</Link>
          </div>
        </div>
        <p className="text-slate-400 text-xs mt-6 leading-relaxed">
          Educational information, not legal, tax or financial advice. Loan documents, guarantees and tax consequences vary; a New Jersey commercial workout attorney and a CPA should review your specific situation.
        </p>
      </section>
    </div>
  );
}
