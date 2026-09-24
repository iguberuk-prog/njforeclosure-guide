import Link from 'next/link';
import type { Metadata } from 'next';
import SiteHeader from '../../components/SiteHeader';
import GuideFaq, { FaqItem } from '../../components/GuideFaq';
import SurplusCalculator from './SurplusCalculator';
import { OG_IMAGES } from '../../../lib/og';

/**
 * NJ Surplus Funds Calculator (built 2026-09-24). Competitive research found
 * no actual calculator anywhere for NJ sheriff-sale surplus — only attorney
 * and finder lead forms. This is the free, self-serve version: estimate the
 * surplus, see what a finder's cut would cost, and the exact official path
 * to claim it without one.
 *
 * Sources: Superior Court Clerk's Office, "Superior Court Trust Fund"
 * (surplus held in the Trust Fund; release by motion under R. 4:64-3 and
 * 4:64-9; parties file with the Office of Foreclosure, non-parties with the
 * Chancery judge in the county; Trust Fund Unit contact); Mercer County
 * Sheriff (fees and commissions come out of the purchase price; surplus
 * sent to the Trust Fund Unit; junior lienholders are paid first);
 * N.J.S.A. 22A:4-8 (sheriff's commission schedule). Consistent with
 * /guides/surplus-funds and /guides/after-sheriff-sale.
 */

const TITLE = 'NJ Surplus Funds Calculator | Sheriff Sale Money Owed to You';
const DESC =
  'Free calculator: estimate the surplus from a New Jersey sheriff sale, what is left after liens, what a finder would take, and how to claim it yourself.';

export const metadata: Metadata = {
  title: TITLE,
  description: DESC,
  alternates: {
    canonical: 'https://njforeclosureguide.org/tools/surplus-funds/',
    languages: { en: 'https://njforeclosureguide.org/tools/surplus-funds/', es: 'https://njforeclosureguide.org/es/herramientas/fondos-sobrantes/', 'x-default': 'https://njforeclosureguide.org/tools/surplus-funds/' },
  },
  openGraph: {
    images: OG_IMAGES,
    title: 'NJ Surplus Funds Calculator',
    description: 'If your NJ sheriff sale brought more than you owed, the difference is yours. Estimate it in a minute, free.',
    url: 'https://njforeclosureguide.org/tools/surplus-funds/',
  },
};

const STEPS: [string, string][] = [
  ['Confirm there is money', 'Call or email the Superior Court Trust Fund Unit with your foreclosure docket number and ask whether surplus funds were deposited in your case: (609) 815-2900, SCCOTrustfund.Mailbox@njcourts.gov. The sheriff’s office can also confirm the final sale price.'],
  ['Check for junior liens', 'A second mortgage, HELOC, judgment creditors, or other recorded liens are paid from the surplus before the owner. The foreclosure case file or a title search shows what is recorded.'],
  ['File a motion to withdraw surplus money', 'Release requires a court order under Court Rules 4:64-3 and 4:64-9. If you were a party to the foreclosure, the motion goes to the Office of Foreclosure; non-parties apply to the Chancery judge in the county where the property is. The motion must be served on all parties named in the foreclosure.'],
  ['Get help if it is contested', 'If a lienholder or co-owner disputes the claim, a judge decides. Legal Services of New Jersey (1-888-576-5529) helps income-eligible homeowners, and a private attorney usually charges a flat or hourly fee far below a finder’s percentage.'],
];

const FAQ_ITEMS: FaqItem[] = [
  {
    q: 'How do I know if there are surplus funds from my New Jersey sheriff sale?',
    a: 'Compare the final sale price to what the lender was owed plus the sheriff’s commission and costs. If the sale brought more, the difference was deposited with the Superior Court Trust Fund. The Trust Fund Unit, (609) 815-2900, can confirm whether money was deposited in your case if you give them the docket number.',
  },
  {
    q: 'Who gets surplus funds after a foreclosure sale in NJ?',
    a: 'Valid junior lienholders, such as a second mortgage, a HELOC, or judgment creditors, are paid first in order of priority. Whatever remains belongs to the former owner. The court decides priority when there is more than one claim.',
  },
  {
    q: 'How do I claim surplus funds in New Jersey?',
    a: 'By filing a motion to withdraw surplus money under Court Rules 4:64-3 and 4:64-9, served on all parties to the foreclosure. Parties to the case file with the Office of Foreclosure; non-parties apply to the Chancery judge in the county where the property is located.',
  },
  {
    q: 'Do I need a surplus funds recovery company?',
    a: 'No. Finders often charge a quarter to a third of the money for work that is fundamentally a court filing. You can file the motion yourself, get free help from Legal Services of New Jersey if you qualify, or pay an attorney a flat or hourly fee. Never sign an agreement assigning your claim before you know independently whether money exists.',
  },
  {
    q: 'How accurate is this calculator?',
    a: 'It is an educational estimate. Real figures depend on the exact interest and costs added to the judgment, the sheriff’s actual fees, and every lien recorded against the property. The court and the Trust Fund Unit have the authoritative numbers.',
  },
];

export default function SurplusFundsCalculatorPage() {
  return (
    <div className="min-h-full bg-white">
      <SiteHeader />

      <section className="bg-gradient-to-b from-slate-950 to-slate-900 text-white py-14 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-amber-400 text-xs font-semibold tracking-[0.25em] uppercase mb-4">Free Calculator · After the Sale</p>
          <h1 className="font-serif text-4xl md:text-5xl font-bold mb-5 tracking-tight">NJ Surplus Funds Calculator</h1>
          <p className="text-slate-300 text-lg leading-relaxed">
            If the sheriff sale brought more than you owed, the difference does not belong to the bank or
            the buyer. After valid liens, it belongs to you. Estimate it here, then claim it without
            giving a finder a third.
          </p>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-4 py-12">
        <SurplusCalculator />
      </section>

      <article className="max-w-3xl mx-auto px-4 pb-10">
        <h2 className="font-serif text-2xl font-bold text-slate-900 mb-5">How to claim it yourself</h2>
        <ol className="space-y-5 mb-12">
          {STEPS.map(([t, d], i) => (
            <li key={t} className="flex gap-4">
              <span className="shrink-0 w-9 h-9 rounded-full bg-slate-900 text-white flex items-center justify-center font-bold text-sm">{i + 1}</span>
              <div>
                <p className="font-bold text-slate-900">{t}</p>
                <p className="text-slate-600 leading-relaxed mt-1">{d}</p>
              </div>
            </li>
          ))}
        </ol>

        <div className="border-l-2 border-amber-400 pl-5 mb-12">
          <p className="text-slate-700 leading-relaxed">
            <strong className="text-slate-900">If the sale has not happened yet,</strong> a sheriff sale is
            the worst-priced way to turn equity into money. Selling before the auction, using the
            adjournments New Jersey law generally allows, almost always protects more of it than hoping
            for a surplus afterward.{' '}
            <Link href="/tools/net-proceeds" className="font-semibold text-slate-900 underline underline-offset-4">Compare a sale before the auction</Link>.
          </p>
        </div>

        <div className="rounded-2xl bg-slate-50 border border-slate-200 px-6 py-6 mb-6">
          <p className="font-bold text-slate-900 mb-3">Related</p>
          <ul className="space-y-2 text-slate-700">
            <li><Link href="/guides/surplus-funds" className="underline underline-offset-4">Surplus funds, explained: how the money flows and the finder-fee industry</Link></li>
            <li><Link href="/guides/after-sheriff-sale" className="underline underline-offset-4">What happens after a sheriff sale: the full timeline</Link></li>
            <li><Link href="/sheriff-sales" className="underline underline-offset-4">Your county&apos;s official sale listings</Link></li>
          </ul>
        </div>
      </article>

      <GuideFaq items={FAQ_ITEMS} />

      <div className="max-w-3xl mx-auto px-4 pb-14">
        <p className="text-slate-400 text-xs leading-relaxed">
          Educational information, not legal advice. Sources: New Jersey Superior Court Clerk&apos;s Office,
          Superior Court Trust Fund; N.J. Court Rules 4:64-3 and 4:64-9; N.J.S.A. 22A:4-8. Lien priority
          and entitlement are case-specific; a licensed New Jersey attorney can confirm what applies to you.
        </p>
      </div>
    </div>
  );
}
