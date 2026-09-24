import Link from 'next/link';
import type { Metadata } from 'next';
import SiteHeader from '../../components/SiteHeader';
import GuideFaq, { FaqItem } from '../../components/GuideFaq';
import CountdownPlanner from './CountdownPlanner';
import { OG_IMAGES } from '../../../lib/og';
import { fitTitle, fitDescription } from '../../../lib/seo';

/**
 * Sheriff Sale Countdown (built 2026-09-24). Enter the sale date, county and
 * adjournments used; get days left, the estimated latest date with remaining
 * statutory adjournments, the county sheriff's verified contact, and the
 * steps to take today. Facts match /sheriff-sales/<county>/, the adjournment
 * playbook and /guides/after-sheriff-sale; the math is in lib/countdown.ts
 * (tested by scripts/test-countdown.mjs).
 */

export const metadata: Metadata = {
  title: fitTitle('NJ Sheriff Sale Countdown | Days Left & What to Do Today'),
  description: fitDescription(
    'Enter your New Jersey sheriff sale date and county: see the days left, how far adjournments can generally move it, your sheriff’s contact, and a plan for today.'
  ),
  alternates: {
    canonical: 'https://njforeclosureguide.org/tools/sheriff-sale-countdown/',
    languages: { en: 'https://njforeclosureguide.org/tools/sheriff-sale-countdown/', es: 'https://njforeclosureguide.org/es/herramientas/cuenta-regresiva/', 'x-default': 'https://njforeclosureguide.org/tools/sheriff-sale-countdown/' },
  },
  openGraph: {
    images: OG_IMAGES,
    title: 'NJ Sheriff Sale Countdown',
    description: 'Your sale date in, a same-day plan out: adjournments, contacts, and next steps. Free.',
    url: 'https://njforeclosureguide.org/tools/sheriff-sale-countdown/',
  },
};

const FAQ_ITEMS: FaqItem[] = [
  {
    q: 'How many times can a sheriff sale be adjourned in New Jersey?',
    a: 'Homeowners are generally entitled to request two adjournments of a scheduled sale, each up to 30 days, through the county sheriff’s office, usually for a small fee and without a lawyer. Further postponements generally require a court order, which judges grant for good cause.',
  },
  {
    q: 'Do I need a lawyer to postpone my sheriff sale?',
    a: 'Not for the two statutory adjournments; the request goes to the sheriff’s office. Never pay a third party to "get your sale postponed." Beyond those two, a court order is generally needed, and free legal help is available from Legal Services of New Jersey (1-888-576-5529) for income-qualifying homeowners.',
  },
  {
    q: 'My lender is reviewing a loan modification. Will they stop the sale?',
    a: 'Not automatically. Ask your servicer in writing to postpone the sale while the review is pending, get a written reinstatement quote, and use your own adjournment rights if the date is close. A HUD-approved counselor (800-569-4287) can help you press the lender.',
  },
  {
    q: 'What if the sale date already passed?',
    a: 'Check the county listing first, since sales are adjourned constantly. If it did happen, there is generally a 10-day window before the sheriff’s deed is delivered, removal requires a court writ carried out by the sheriff, and any surplus above what was owed is generally yours after liens.',
  },
];

export default function SheriffSaleCountdownPage() {
  return (
    <div className="min-h-full bg-white">
      <SiteHeader />

      <section className="bg-gradient-to-b from-slate-950 to-slate-900 text-white py-14 px-4 print:hidden">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-amber-400 text-xs font-semibold tracking-[0.25em] uppercase mb-4">Free Tool · Nothing You Enter Leaves This Page</p>
          <h1 className="font-serif text-4xl md:text-5xl font-bold mb-5 tracking-tight">Sheriff Sale Countdown</h1>
          <p className="text-slate-300 text-lg leading-relaxed">
            Enter your sale date and county. See how many days you really have, how far your adjournments can generally
            move it, who to call, and exactly what to do today.
          </p>
        </div>
      </section>

      <section className="max-w-3xl mx-auto px-4 py-12">
        <CountdownPlanner />
      </section>

      <div className="max-w-3xl mx-auto px-4 pb-8 print:hidden">
        <div className="rounded-2xl bg-slate-50 border border-slate-200 px-6 py-6">
          <p className="font-bold text-slate-900 mb-3">Go deeper</p>
          <ul className="space-y-2 text-slate-700">
            <li><Link href="/blog/sheriff-sale-adjournment-playbook/" className="underline underline-offset-4">The full adjournment playbook</Link></li>
            <li><Link href="/sheriff-sales" className="underline underline-offset-4">All 21 county sale listings and sheriff contacts</Link></li>
            <li><Link href="/guides/after-sheriff-sale" className="underline underline-offset-4">What happens after a sheriff sale</Link></li>
            <li><Link href="/tools/catch-up" className="underline underline-offset-4">Catch-up calculator: what it takes to reinstate</Link></li>
            <li><Link href="/tools/letter-builder/?letter=postpone" className="underline underline-offset-4">Letter builder: ask your servicer in writing to postpone the sale</Link></li>
            <li><Link href="/reports/nj-sheriff-sales/" className="underline underline-offset-4">This month&apos;s NJ sheriff sale report</Link></li>
          </ul>
        </div>
      </div>

      <div className="print:hidden">
        <GuideFaq items={FAQ_ITEMS} />
      </div>

      <div className="max-w-3xl mx-auto px-4 pb-14">
        <p className="text-slate-400 text-xs leading-relaxed">
          Educational information, not legal advice. Dates shown are estimates based on general New Jersey rules; the
          sheriff sets actual sale and adjourned dates, and your court papers control. Confirm everything on your
          county&apos;s official listing.
        </p>
      </div>
    </div>
  );
}
