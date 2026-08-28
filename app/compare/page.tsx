import Link from 'next/link';
import type { Metadata } from 'next';
import SiteHeader from '../components/SiteHeader';

export const metadata: Metadata = {
  title: 'Compare All 7 NJ Foreclosure Options | One Honest Table',
  description:
    'Every New Jersey foreclosure option side by side: whether you keep the home, how fast it works, what it costs, the credit impact, and the point in the process where each stops being available.',
  alternates: { canonical: 'https://njforeclosureguide.org/compare/' },
  openGraph: {
    title: 'Compare All 7 NJ Foreclosure Options | One Honest Table',
    description: 'Keep the home? How fast? What cost? Every option compared honestly.',
    url: 'https://njforeclosureguide.org/compare/',
  },
};

// One row per option. Values must stay consistent with the individual guides;
// when a guide changes, this table changes with it. "Honest" here means the
// downsides column is filled in for every row, including the ones that route
// to companies we list.
interface OptionRow {
  name: string;
  href: string;
  keepHome: 'Yes' | 'No' | 'Depends';
  speed: string;
  cost: string;
  credit: string;
  worksUntil: string;
  catch: string;
}

const ROWS: OptionRow[] = [
  {
    name: 'Reinstatement',
    href: '/glossary',
    keepHome: 'Yes',
    speed: 'Immediate once paid',
    cost: 'The full arrears, in one sum',
    credit: 'Stops further damage; missed payments remain on record',
    worksUntil: 'Generally up to final judgment (then the full judgment amount is due)',
    catch: 'Requires real money now; the hardest part is simply having it.',
  },
  {
    name: 'Loan modification',
    href: '/guides/loan-modification',
    keepHome: 'Yes',
    speed: '1-6 months of review',
    cost: 'Free to apply (never pay an upfront fee)',
    credit: 'Reported as modified; better than a foreclosure judgment',
    worksUntil: 'Servicers can review late in the case, but odds are best before judgment',
    catch: 'Roughly a third to 40% of applications succeed; incomplete paperwork is the usual killer.',
  },
  {
    name: 'Forbearance / repayment plan',
    href: '/guides/forbearance',
    keepHome: 'Yes',
    speed: '1-2 weeks for an answer',
    cost: 'Free to arrange',
    credit: 'Depends on how the servicer reports it',
    worksUntil: 'Most useful early, while arrears are small',
    catch: 'Pauses the problem rather than solving it; everything paused is still owed at the end.',
  },
  {
    name: 'Refinance (incl. home equity)',
    href: '/guides/refinancing',
    keepHome: 'Yes',
    speed: '5-8 weeks to close',
    cost: 'Closing costs; a new rate, often higher',
    credit: 'Paying off the defaulted loan ends that case',
    worksUntil: 'Needs enough equity and income to qualify, so realistically early-to-mid case',
    catch: 'The people who most need it are the hardest to approve; delinquency itself hurts qualification.',
  },
  {
    name: 'Chapter 13 bankruptcy',
    href: '/guides/bankruptcy-chapter-13',
    keepHome: 'Yes',
    speed: 'Automatic stay the day of filing',
    cost: 'Attorney + filing fees; a 3-5 year plan',
    credit: 'Serious, long-reported, but caps the foreclosure damage',
    worksUntil: 'Any time before the sheriff sale is completed',
    catch: 'A five-year commitment that fails if plan payments stop; needs steady income and an attorney.',
  },
  {
    name: 'Sell on the market (incl. short sale)',
    href: '/guides/short-sale',
    keepHome: 'No',
    speed: '60-90+ days',
    cost: '~8% selling costs; short sales need lender approval',
    credit: 'Far better than a completed foreclosure; short sales vary',
    worksUntil: 'Until the sale date, if adjournments keep the auction at bay',
    catch: 'The clock is the risk: a listing that outlives your adjournments helps nobody.',
  },
  {
    name: 'Sell to a cash buyer',
    href: '/guides/cash-buyer',
    keepHome: 'No',
    speed: '7-30 days',
    cost: 'Typically 70-85% of market value',
    credit: 'Avoids a completed foreclosure on your record',
    worksUntil: 'Right up to the auction, if the closing beats the date',
    catch: 'You are paying 15-30% of your home’s value for speed; only worth it when time is truly short.',
  },
];

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Which foreclosure options let you keep your home in New Jersey?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Five of the seven main options are aimed at keeping the home: reinstatement (paying the arrears), loan modification, forbearance or a repayment plan, refinancing, and Chapter 13 bankruptcy. Selling on the market or to a cash buyer resolves the foreclosure by giving up the home in exchange for the equity.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the fastest way to resolve a New Jersey foreclosure?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Speed depends on the tool: a Chapter 13 filing takes effect the day it is filed through the automatic stay, reinstatement works immediately once the arrears are paid, forbearance answers typically come in one to two weeks, and cash sales close in roughly 7 to 30 days. Faster is not automatically better; each fast option carries its own cost.',
      },
    },
    {
      '@type': 'Question',
      name: 'How late in the process can each option still be used?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Options narrow as a case advances. Modification and refinancing work best before final judgment; reinstatement generally works until final judgment; Chapter 13 and a completed sale of the home work until the sheriff sale itself; and full redemption survives 10 days beyond the sale. New Jersey homeowners can also generally adjourn the sale twice, up to 30 days each, to make time.',
      },
    },
  ],
};

export default function ComparePage() {
  return (
    <div className="min-h-full bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <SiteHeader />

      <section className="bg-gradient-to-b from-slate-950 to-slate-900 text-white py-16 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-amber-400 text-xs font-semibold tracking-[0.25em] uppercase mb-4">
            Seven options · One honest table
          </p>
          <h1 className="font-serif text-4xl md:text-5xl font-bold mb-5 tracking-tight">
            Every Option, Side by Side
          </h1>
          <p className="text-slate-300 text-lg leading-relaxed">
            Keep the home or not, how fast, what it costs, and when each option stops being
            available. The catch column is filled in for every row, because every option has one.
          </p>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 py-12">
        <div className="overflow-x-auto rounded-2xl border border-slate-200">
          <table className="w-full text-sm min-w-[900px]">
            <thead>
              <tr className="bg-slate-900 text-white text-left">
                <th className="px-4 py-3.5 font-semibold">Option</th>
                <th className="px-4 py-3.5 font-semibold">Keep home?</th>
                <th className="px-4 py-3.5 font-semibold">Speed</th>
                <th className="px-4 py-3.5 font-semibold">Cost to you</th>
                <th className="px-4 py-3.5 font-semibold">Credit impact</th>
                <th className="px-4 py-3.5 font-semibold">Works until</th>
                <th className="px-4 py-3.5 font-semibold">The catch</th>
              </tr>
            </thead>
            <tbody>
              {ROWS.map((r, i) => (
                <tr key={r.name} className={i % 2 ? 'bg-slate-50' : 'bg-white'}>
                  <td className="px-4 py-4 align-top">
                    <Link href={r.href} className="font-bold text-slate-900 underline underline-offset-4 decoration-slate-300 hover:decoration-slate-900">
                      {r.name}
                    </Link>
                  </td>
                  <td className="px-4 py-4 align-top">
                    <span
                      className={`inline-block px-2.5 py-0.5 rounded-full text-xs font-bold ${
                        r.keepHome === 'Yes'
                          ? 'bg-emerald-100 text-emerald-800'
                          : r.keepHome === 'No'
                            ? 'bg-slate-200 text-slate-700'
                            : 'bg-amber-100 text-amber-800'
                      }`}
                    >
                      {r.keepHome}
                    </span>
                  </td>
                  <td className="px-4 py-4 align-top text-slate-700">{r.speed}</td>
                  <td className="px-4 py-4 align-top text-slate-700">{r.cost}</td>
                  <td className="px-4 py-4 align-top text-slate-700">{r.credit}</td>
                  <td className="px-4 py-4 align-top text-slate-700">{r.worksUntil}</td>
                  <td className="px-4 py-4 align-top text-slate-600">{r.catch}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="text-slate-500 text-sm mt-4 leading-relaxed">
          Five of the seven keep you in the house. Timelines and outcomes are typical ranges, not
          promises; where you are in the case changes what is realistic, which is what the{' '}
          <Link href="/tools/deadlines" className="text-slate-900 underline underline-offset-4 font-semibold">
            deadline calculator
          </Link>{' '}
          and{' '}
          <Link href="/tools/timeline" className="text-slate-900 underline underline-offset-4 font-semibold">
            timeline tool
          </Link>{' '}
          are for.
        </p>

        <div className="bg-slate-50 rounded-2xl p-6 mt-8">
          <p className="text-slate-700 leading-relaxed mb-4">
            A table can compare options; it cannot pick one for your numbers and your dates. The
            free assessment does that in two minutes.
          </p>
          <Link href="/quiz" className="inline-block bg-amber-400 text-slate-950 px-8 py-3.5 rounded-lg font-bold hover:bg-amber-300 transition">
            See My Options, Free
          </Link>
        </div>
        <p className="text-slate-400 text-xs mt-6 leading-relaxed">
          Educational comparison, not legal or financial advice. Success rates, timelines and costs
          vary by lender, county and case.
        </p>
      </section>
    </div>
  );
}
