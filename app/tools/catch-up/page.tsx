import Link from 'next/link';
import type { Metadata } from 'next';
import SiteHeader from '../../components/SiteHeader';
import GuideFaq, { FaqItem } from '../../components/GuideFaq';
import CatchUpCalculator from './CatchUpCalculator';
import { OG_IMAGES } from '../../../lib/og';
import { fitTitle, fitDescription } from '../../../lib/seo';

/**
 * NJ Mortgage Catch-Up (reinstatement) Calculator (built 2026-09-24). A free,
 * self-serve estimate of what it takes to bring a mortgage current: missed
 * payments, late fees, fees and costs, minus money set aside, plus a
 * 6- and 12-month repayment-plan illustration.
 *
 * NJ facts are limited to what the site already states:
 * - Notice of Intention: sent at least 30 days before a complaint; under the
 *   Fair Foreclosure Act it must state the amount required to cure
 *   (lib/questions.ts, what-is-a-notice-of-intention).
 * - The Fair Foreclosure Act generally preserves the right to cure up to
 *   entry of final judgment (/blog/reinstatement-quote-guide,
 *   lib/questions.ts how-much-to-reinstate-my-mortgage).
 * - Reinstatement vs payoff, itemized quote, good-through date, certified
 *   funds and written confirmation (/blog/reinstatement-quote-guide).
 */

const TITLE = 'NJ Mortgage Catch-Up Calculator | What It Takes to Reinstate';
const DESC =
  'Free calculator: estimate what it takes to bring a NJ mortgage current, from missed payments, late fees and costs, and what a 6- or 12-month plan could add.';
const URL = 'https://njforeclosureguide.org/tools/catch-up/';

export const metadata: Metadata = {
  title: fitTitle(TITLE),
  description: fitDescription(DESC),
  alternates: { canonical: URL },
  openGraph: {
    images: OG_IMAGES,
    title: 'NJ Mortgage Catch-Up Calculator',
    description: 'Behind on your NJ mortgage? Estimate what it would take to get current, free, in a minute. Nothing you type leaves the page.',
    url: URL,
  },
};

const STEPS: [string, string][] = [
  ['Ask for a written reinstatement quote', 'Request it in writing from your servicer. Once a foreclosure case is filed, the lender’s attorney often produces it. Ask for an itemized quote, so you can check each line against your own records.'],
  ['Ask for reinstatement, not payoff', 'Reinstatement is the arrears: what brings the loan current. Payoff is the entire loan balance. People have panicked at a payoff figure when the reinstatement amount was a fraction of it. Ask for the right one, or both.'],
  ['Get the good-through date', 'The total grows daily, so every quote is time-limited. Funds that arrive after the good-through date can be returned rather than applied. If you need a week to gather the money, ask for a quote dated for that week.'],
  ['Check it, then pay it safely', 'Confirm the payment count, the late charges, and any inspection or attorney fees. Dispute errors in writing. Pay with certified funds exactly as the quote instructs, by a trackable method, and get written confirmation that the loan is current.'],
];

const FAQ_ITEMS: FaqItem[] = [
  {
    q: 'How much does it cost to catch up on a mortgage in New Jersey?',
    a: 'Generally, every missed payment plus late fees and the lender’s allowable fees and costs, including foreclosure attorney fees and costs once a complaint has been filed. This calculator gives an educational estimate. The exact number comes only from your servicer’s written, itemized reinstatement quote.',
  },
  {
    q: 'Until when can I reinstate my mortgage in New Jersey?',
    a: 'New Jersey’s Fair Foreclosure Act generally preserves the right to cure the default up to entry of final judgment. Earlier is cheaper, because attorney fees, costs and late charges keep adding to the total. A licensed New Jersey attorney or Legal Services of New Jersey can confirm how the rule applies to your case.',
  },
  {
    q: 'Where do I find the amount needed to cure the default?',
    a: 'Before a case is filed, the Notice of Intention to Foreclose must state the amount required to cure the default under the Fair Foreclosure Act. After that, request a written reinstatement quote from your servicer with a good-through date, because the total changes daily.',
  },
  {
    q: 'What if I can’t pay the full amount at once?',
    a: 'Tell your servicer and ask about the options its loss mitigation department handles, such as a repayment plan, forbearance, or a loan modification. Lenders are not required to offer any particular plan. A free HUD-approved housing counselor (800-569-4287) can help you apply.',
  },
  {
    q: 'How accurate is this calculator?',
    a: 'It is an educational estimate based on what you enter. A real quote can include items your statement does not show, such as escrow advances, per-diem interest, and fees posted after the statement date. Nothing you type is stored or sent anywhere.',
  },
];

export default function CatchUpCalculatorPage() {
  return (
    <div className="min-h-full bg-white">
      <SiteHeader />

      <section className="bg-gradient-to-b from-slate-950 to-slate-900 text-white py-14 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-amber-400 text-xs font-semibold tracking-[0.25em] uppercase mb-4">Free Calculator · Behind on Payments</p>
          <h1 className="font-serif text-4xl md:text-5xl font-bold mb-5 tracking-tight">NJ Mortgage Catch-Up Calculator</h1>
          <p className="text-slate-300 text-lg leading-relaxed">
            Paying what you missed, plus fees and costs, brings the loan back to good standing. Estimate
            that number from your statement in a minute, see what a repayment plan could look like, and
            learn how to get the exact figure from your servicer.
          </p>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-4 py-12">
        <CatchUpCalculator />
      </section>

      <article className="max-w-3xl mx-auto px-4 pb-10">
        <h2 className="font-serif text-2xl font-bold text-slate-900 mb-5">How to get the real number</h2>
        <ol className="space-y-5 mb-12">
          {STEPS.map(([t, d], i) => (
            <li key={t} className="flex gap-4">
              <span className="shrink-0 w-9 h-9 rounded-full bg-slate-900 text-white flex items-center justify-center font-bold text-sm">{i + 1}</span>
              <div className="min-w-0">
                <p className="font-bold text-slate-900">{t}</p>
                <p className="text-slate-600 leading-relaxed mt-1">{d}</p>
              </div>
            </li>
          ))}
        </ol>
        <p className="text-slate-700 leading-relaxed mb-12">
          The <Link href="/blog/reinstatement-quote-guide/" className="font-semibold text-slate-900 underline underline-offset-4">reinstatement quote guide</Link>{' '}
          walks through reading a quote line by line.
        </p>

        <h2 className="font-serif text-2xl font-bold text-slate-900 mb-5">What New Jersey law gives you</h2>
        <ul className="space-y-4 mb-12 text-slate-700 leading-relaxed list-disc pl-5">
          <li>
            <strong className="text-slate-900">A warning with the number on it.</strong> Before a
            foreclosure complaint can be filed, your lender must send a Notice of Intention to Foreclose
            at least 30 days in advance. Under the Fair Foreclosure Act, it must state the amount
            required to cure the default. Check that figure against your own records.
          </li>
          <li>
            <strong className="text-slate-900">A right to cure that lasts.</strong> The Fair Foreclosure
            Act generally preserves the right to reinstate by paying the arrears and allowable costs up
            to entry of final judgment, later than most homeowners assume. Earlier is cheaper: fees and
            costs grow as the case moves.
          </li>
        </ul>

        <div className="rounded-2xl border border-amber-300 bg-amber-50 px-6 py-6 mb-12">
          <p className="font-bold text-slate-900 mb-3">Free help first</p>
          <ul className="space-y-2 text-slate-700 leading-relaxed">
            <li>
              <strong className="text-slate-900">HUD-approved housing counselor:</strong>{' '}
              <a href="tel:18005694287" className="underline underline-offset-4 whitespace-nowrap">800-569-4287</a>. Free;
              they can help you request a quote and apply for a repayment plan, forbearance or modification.
            </li>
            <li>
              <strong className="text-slate-900">Legal Services of New Jersey:</strong>{' '}
              <a href="tel:18885765529" className="underline underline-offset-4 whitespace-nowrap">1-888-576-5529</a>. Free
              legal help for income-eligible homeowners.
            </li>
          </ul>
        </div>

        <div className="border-l-2 border-amber-400 pl-5 mb-12">
          <p className="text-slate-700 leading-relaxed">
            <strong className="text-slate-900">If the number is out of reach,</strong> you still have
            options. <Link href="/guides/forbearance" className="font-semibold text-slate-900 underline underline-offset-4">Forbearance</Link>{' '}
            can pause or reduce payments while you recover, and a{' '}
            <Link href="/guides/loan-modification" className="font-semibold text-slate-900 underline underline-offset-4">loan modification</Link>{' '}
            can change the loan terms. If there is equity, compare what{' '}
            <Link href="/tools/net-proceeds" className="font-semibold text-slate-900 underline underline-offset-4">a sale before the auction</Link>{' '}
            would leave you.
          </p>
        </div>

        <div className="rounded-2xl bg-slate-50 border border-slate-200 px-6 py-6 mb-6">
          <p className="font-bold text-slate-900 mb-3">Related</p>
          <ul className="space-y-2 text-slate-700">
            <li><Link href="/blog/reinstatement-quote-guide/" className="underline underline-offset-4">How to read a reinstatement quote</Link></li>
            <li><Link href="/guides/loan-modification" className="underline underline-offset-4">Loan modification: keep your home by changing your mortgage terms</Link></li>
            <li><Link href="/guides/forbearance" className="underline underline-offset-4">Forbearance and deferment: pause or reduce payments while you recover</Link></li>
            <li><Link href="/tools/sheriff-sale-countdown" className="underline underline-offset-4">Sheriff sale countdown</Link></li>
            <li><Link href="/command-center" className="underline underline-offset-4">Your foreclosure command center</Link></li>
            <li><Link href="/tools/net-proceeds" className="underline underline-offset-4">Home sale net proceeds calculator</Link></li>
          </ul>
        </div>
      </article>

      <GuideFaq items={FAQ_ITEMS} />

      <div className="max-w-3xl mx-auto px-4 pb-14">
        <p className="text-slate-400 text-xs leading-relaxed">
          Educational estimate, not legal or financial advice. The amount needed to reinstate is set by
          your servicer&apos;s written quote, and what applies to your loan and case is specific to you;
          a HUD-approved housing counselor or a licensed New Jersey attorney can help you confirm it.
        </p>
      </div>
    </div>
  );
}
