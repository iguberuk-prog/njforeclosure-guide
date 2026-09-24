import Link from 'next/link';
import type { Metadata } from 'next';
import SiteHeader from '../../components/SiteHeader';
import GuideFaq, { FaqItem } from '../../components/GuideFaq';
import LetterBuilder from './LetterBuilder';
import { OG_IMAGES } from '../../../lib/og';
import { fitTitle, fitDescription } from '../../../lib/seo';

/**
 * Letter Builder (built 2026-09-24). Five letters a New Jersey homeowner
 * sends a mortgage servicer: hardship letter, reinstatement quote and payoff
 * request, RESPA request for information / notice of error, request to
 * postpone the sheriff sale during a loss-mitigation review, and a loan
 * modification denial appeal. Everything runs in the browser; nothing is
 * sent. Templates, legal wording and the list of verified primary sources
 * are in lib/letters.ts (tested by scripts/test-letters.mjs).
 *
 * Verified 2026-09-24 against eCFR (12 CFR 1024.30, 1024.35, 1024.36,
 * 1024.41 and Supplement I comments 41(b)(3)-1, 41(d)-1, 41(d)-2, 41(g)-3;
 * 12 CFR 1026.36(c)(3)) and N.J.S.A. 2A:17-36. No outcome promises: every
 * rule is described as what it generally requires.
 */

const TITLE = 'Free Mortgage Hardship Letter & Servicer Letter Builder (NJ)';
const DESC =
  'Free mortgage hardship letter builder for NJ homeowners, plus payoff requests, notices of error, sheriff sale postponement requests and modification appeals.';
const URL = 'https://njforeclosureguide.org/tools/letter-builder/';

export const metadata: Metadata = {
  title: fitTitle(TITLE),
  description: fitDescription(DESC),
  alternates: { canonical: URL },
  openGraph: {
    images: OG_IMAGES,
    title: 'Free Mortgage Hardship Letter & Servicer Letter Builder',
    description: 'Hardship letter, payoff request, notice of error, sale postponement, modification appeal. Fill a short form, copy or print. Nothing you type leaves the page.',
    url: URL,
  },
};

const FAQ_ITEMS: FaqItem[] = [
  {
    q: 'What should a mortgage hardship letter include?',
    a: 'Your name, loan number and property address; what happened and when it started; what changed in your income or expenses; your income now; what you are asking for (a loan modification, repayment plan, forbearance, short sale, or deed in lieu); and a sentence on your commitment. Keep it short and factual, and send it with your full loss-mitigation application.',
  },
  {
    q: 'How long does my servicer have to send a payoff statement?',
    a: 'Under Regulation Z, 12 CFR 1026.36(c)(3), a servicer must send an accurate payoff statement within a reasonable time after a written request, and generally no more than seven business days. The rule allows a reasonable time instead when the loan is in foreclosure or bankruptcy. There is no matching federal deadline for a reinstatement quote, so ask early and in writing.',
  },
  {
    q: 'What is the difference between a request for information and a notice of error?',
    a: 'A request for information (12 CFR 1024.36) asks the servicer for records or facts about your loan, such as who owns it or a payment history. A notice of error (12 CFR 1024.35) says the servicer made a specific mistake, such as not crediting a payment. Both generally require a written acknowledgment within five business days and a response within 30 business days, with some shorter deadlines and a possible 15-day extension.',
  },
  {
    q: 'Can my servicer hold a sheriff sale while my loan modification is under review?',
    a: 'If the servicer received your complete application more than 37 days before the sale, Regulation X, 12 CFR 1024.41(g), generally bars it from moving for judgment or an order of sale, or conducting the sale, until you have been denied and any appeal is over, you reject the options, or you fail to perform under an agreement. The rule generally applies to a principal residence and not to small servicers, and servicers do not always comply, so keep proof of every date and use your adjournment rights through the sheriff too.',
  },
  {
    q: 'How do I appeal a loan modification denial?',
    a: 'If the servicer received your complete application 90 days or more before a scheduled sale (or before any sale was scheduled), 12 CFR 1024.41(h) generally lets you appeal within 14 days after the denial notice. Different staff must review it, and the servicer must answer in writing within 30 days. If the denial was based on a net present value (NPV) test, the denial notice is supposed to list the inputs used, so check them for mistakes.',
  },
  {
    q: 'What happens after I send one of these letters?',
    a: 'No letter can promise an outcome. These letters put your request on the record and trigger duties the federal rules generally impose on servicers, but the outcome depends on your facts and on whether the servicer follows the rules. Send by a trackable method, keep copies, and get free help from a HUD-approved counselor (800-569-4287) or Legal Services of New Jersey (1-888-576-5529).',
  },
];

const SECTIONS: { h: string; body: string[] }[] = [
  {
    h: 'Mortgage hardship letter template',
    body: [
      'A hardship letter tells your servicer’s loss-mitigation team what happened, when, and what you can afford now. Servicers read hundreds of them, so short and specific beats long and emotional. The builder asks only for facts you can back up, then turns them into plain first-person paragraphs; its optional sentences are requests, never invented facts.',
      'Send the letter with your complete loss-mitigation application, not instead of it. Under Regulation X a servicer that receives a complete application more than 37 days before a sale must generally evaluate you for every option available within 30 days, which is why the letter asks to be reviewed for all options, not just the one you name.',
    ],
  },
  {
    h: 'Request for a reinstatement quote and payoff statement',
    body: [
      'A reinstatement quote is what it takes to catch up; a payoff statement is what it takes to pay the loan in full. Ask for both in writing, itemized, with a good-through date and wiring or certified-funds instructions. Regulation Z generally requires a payoff statement within seven business days of a written request, but allows “a reasonable time” when the loan is in foreclosure or bankruptcy. No federal rule sets a specific deadline for reinstatement quotes, so the letter asks for it as soon as possible.',
    ],
  },
  {
    h: 'Request for information and notice of error letters (RESPA)',
    body: [
      'Regulation X gives you two written tools. A request for information (12 CFR 1024.36) gets records: who owns your loan (answer generally due within 10 business days), a payment history, fees, escrow, or the status of your application (generally 30 business days). A notice of error (12 CFR 1024.35) disputes a specific mistake; the servicer must generally correct it or explain in writing why it found no error, and it may not charge you a fee to respond.',
      'The most common way these letters fail is the address. A servicer may designate one address for these letters; if it has, you must use it, and it must be posted on the servicer’s website if the site lists any contact address. Send it by a trackable method and keep a copy.',
    ],
  },
  {
    h: 'Request to postpone a sheriff sale during a loan modification review',
    body: [
      'If your complete loss-mitigation application reached the servicer more than 37 days before the sale, 12 CFR 1024.41(g) generally bars the servicer from moving for judgment or an order of sale, or conducting the sale, while the review and any appeal are pending. The official interpretation says the servicer must instruct its foreclosure counsel accordingly, which is why the letter is copied to the plaintiff’s attorney named on your court papers. The letter is worded conditionally, because the servicer’s receipt date is what counts.',
      'This letter does not replace your own rights. Under N.J.S.A. 2A:17-36 a homeowner can generally request two adjournments of up to 30 days each through the county sheriff’s office. Call the sheriff’s office to ask how they accept requests and the fee, and use the ',
    ],
  },
  {
    h: 'Loan modification appeal letter',
    body: [
      'Under 12 CFR 1024.41(h), if the servicer received your complete application 90 days or more before a scheduled sale, you can generally appeal a modification denial within 14 days after the decision notice. Different personnel must review the appeal, and the servicer must answer in writing within 30 days. The denial notice must give the specific reasons; if the denial was based on a net present value calculation, the official interpretation requires it to include the inputs used. If your income, expenses, or property value in those inputs is wrong, say so in the appeal and attach proof.',
    ],
  },
];

export default function LetterBuilderPage() {
  return (
    <div className="min-h-full bg-white">
      <SiteHeader />

      <section className="bg-gradient-to-b from-slate-950 to-slate-900 text-white py-14 px-4 print:hidden">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-amber-400 text-xs font-semibold tracking-[0.25em] uppercase mb-4">Free Tool · Nothing You Type Leaves This Page</p>
          <h1 className="font-serif text-4xl md:text-5xl font-bold mb-5 tracking-tight">Mortgage Hardship Letter &amp; Servicer Letter Builder</h1>
          <p className="text-slate-300 text-lg leading-relaxed">
            Pick the letter, answer a few questions, and get a clean, dated letter to copy or print: a hardship letter, a
            payoff and reinstatement request, a RESPA notice of error, a request to postpone the sheriff sale, or a
            modification appeal. Blanks stay in [brackets] until you fill them.
          </p>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 py-12">
        <LetterBuilder />
      </section>

      <article className="max-w-3xl mx-auto px-4 pb-10 print:hidden">
        {SECTIONS.map((s) => (
          <section key={s.h} className="mb-10">
            <h2 className="font-serif text-2xl font-bold text-slate-900 mb-4">{s.h}</h2>
            {s.body.map((p, n) => (
              <p key={n} className="text-slate-700 leading-relaxed mb-4">
                {p}
                {s.h.startsWith('Request to postpone') && n === s.body.length - 1 && (
                  <>
                    <Link href="/tools/sheriff-sale-countdown" className="font-semibold text-slate-900 underline underline-offset-4">sheriff sale countdown</Link>{' '}
                    to see how far adjournments can generally move your date.
                  </>
                )}
              </p>
            ))}
          </section>
        ))}

        <div className="border-l-2 border-amber-400 pl-5 mb-12">
          <p className="text-slate-700 leading-relaxed">
            <strong className="text-slate-900">A letter is a record, not a result.</strong> These rules say what servicers
            generally must do; servicers do not always comply, and no letter guarantees an outcome. Keep a copy of
            everything, send it by a trackable method, and note every date.
          </p>
        </div>

        <div className="rounded-2xl bg-slate-50 border border-slate-200 px-6 py-6 mb-6">
          <p className="font-bold text-slate-900 mb-3">Related</p>
          <ul className="space-y-2 text-slate-700">
            <li><Link href="/tools/catch-up" className="underline underline-offset-4">Catch-up calculator: estimate what it takes to reinstate</Link></li>
            <li><Link href="/tools/sheriff-sale-countdown" className="underline underline-offset-4">Sheriff sale countdown: days left and adjournments</Link></li>
            <li><Link href="/guides/loan-modification" className="underline underline-offset-4">Loan modification in New Jersey, explained</Link></li>
            <li><Link href="/guides/foreclosure-mediation" className="underline underline-offset-4">New Jersey’s free foreclosure mediation program</Link></li>
          </ul>
        </div>
      </article>

      <div className="print:hidden">
        <GuideFaq items={FAQ_ITEMS} />
      </div>

      <div className="max-w-3xl mx-auto px-4 pb-14 print:hidden">
        <p className="text-slate-400 text-xs leading-relaxed">
          Educational information, not legal advice. The letters are templates; you are responsible for what you send.
          Sources: Regulation X, 12 CFR 1024.30, 1024.35, 1024.36 and 1024.41, with the CFPB&apos;s official
          interpretations (Supplement I to Part 1024, comments 41(b)(3)-1, 41(d)-1, 41(d)-2 and 41(g)-3); Regulation Z,
          12 CFR 1026.36(c)(3); RESPA, 12 U.S.C. 2605(e); N.J.S.A. 2A:17-36. Federal loss-mitigation protections generally
          apply only to a principal residence and not to small servicers. A licensed New Jersey attorney can review your
          situation.
        </p>
      </div>
    </div>
  );
}
