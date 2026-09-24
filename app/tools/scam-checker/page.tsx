import Link from 'next/link';
import type { Metadata } from 'next';
import SiteHeader from '../../components/SiteHeader';
import GuideFaq, { FaqItem } from '../../components/GuideFaq';
import ScamChecker from './ScamChecker';
import { OG_IMAGES } from '../../../lib/og';
import { fitTitle, fitDescription } from '../../../lib/seo';

/**
 * Foreclosure Scam Checker (built 2026-09-24). A homeowner pastes a letter,
 * text, email, flyer or voicemail transcript (and ticks what was said in
 * person); the browser checks it against documented foreclosure-rescue scam
 * patterns and explains each flag. Nothing typed leaves the browser. Rules,
 * sources and tests: lib/scam-rules.ts, scripts/test-scam-rules.mjs.
 *
 * Legal facts on this page were verified 2026-09-24 against: 12 CFR part
 * 1015 (Regulation O; 16 CFR part 322 now only cross-references it), the NJ
 * Foreclosure Rescue Fraud Prevention Act, N.J.S.A. 46:10B-53 to -68
 * (P.L. 2011, c.146), and CFPB / FTC consumer guidance. The tool flags
 * patterns only; it never names or accuses a company.
 */

const CANONICAL = 'https://njforeclosureguide.org/tools/scam-checker/';

export const metadata: Metadata = {
  title: fitTitle('Foreclosure Scam Checker (NJ): Is This Offer Legit?'),
  description: fitDescription(
    'Paste a letter, text, or email about your New Jersey foreclosure and check it for rescue-scam red flags: up-front fees, deed transfers, guarantees. Free and private.'
  ),
  alternates: { canonical: CANONICAL },
  openGraph: {
    images: OG_IMAGES,
    title: 'Foreclosure Scam Checker (NJ)',
    description: 'Paste the letter or text. See the red flags, why they matter, and who to call. Nothing you type leaves your browser.',
    url: CANONICAL,
  },
};

const FAQ_ITEMS: FaqItem[] = [
  {
    q: 'Is it legal for a foreclosure help company to charge an up-front fee in New Jersey?',
    a: 'Generally no. Federal Regulation O (12 CFR 1015.5) bars mortgage-relief companies from collecting a fee until you have signed an agreement with your lender or servicer that incorporates the relief, and New Jersey’s Foreclosure Rescue Fraud Prevention Act bars foreclosure consultants from collecting anything until they have fully performed. A New Jersey-licensed attorney handling your case as part of practicing law may take a retainer into a client trust account, which is different from a company demanding money first.',
  },
  {
    q: 'How can I tell if a foreclosure letter is really from my lender?',
    a: 'Do not use the contact details in the letter. Call the servicer at the number printed on your monthly mortgage statement or on its official website and ask whether they sent it. Your servicer will not ask you to pay a third party, stop making payments, or share your online-banking password.',
  },
  {
    q: 'Someone offered to take my deed so I can rent my house back. Is that a scam?',
    a: 'It is the classic foreclosure-rescue pattern, and it often costs families their home and all of their equity. New Jersey regulates these sale-leaseback deals closely and gives owners a right to cancel within 10 business days of signing (or until the sheriff’s sale, if sooner). Talk to a New Jersey attorney or Legal Services of New Jersey (1-888-576-5529) before signing anything that transfers your deed, and right away if you already did.',
  },
  {
    q: 'The checker found no red flags. Does that mean the offer is safe?',
    a: 'No. It only means none of the common patterns it looks for appeared in the text. Scammers change their wording, and the tool cannot tell who really sent a message. Verify any offer independently with your servicer and a free HUD-approved counselor (800-569-4287) before you sign or pay.',
  },
  {
    q: 'Where do I report a foreclosure rescue scam in New Jersey?',
    a: 'Report it to the New Jersey Division of Consumer Affairs (online complaint portal, or 800-242-5846), the Consumer Financial Protection Bureau at consumerfinance.gov/complaint, and the Federal Trade Commission at reportfraud.ftc.gov. If you paid money, signed papers, or shared account information, also call your bank and a lawyer.',
  },
];

export default function ScamCheckerPage() {
  return (
    <div className="min-h-full bg-white">
      <SiteHeader />

      <section className="bg-gradient-to-b from-slate-950 to-slate-900 text-white py-14 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-amber-400 text-xs font-semibold tracking-[0.25em] uppercase mb-4">Free Tool · Nothing You Type Leaves Your Browser</p>
          <h1 className="font-serif text-4xl md:text-5xl font-bold mb-5 tracking-tight">Foreclosure Scam Checker</h1>
          <p className="text-slate-300 text-lg leading-relaxed">
            Got a letter, text, or call offering to save your home? Paste what they sent and check it against the red flags
            that federal and New Jersey rules single out in foreclosure-rescue scams, with what to do instead.
          </p>
        </div>
      </section>

      <section className="max-w-3xl mx-auto px-4 py-12">
        <ScamChecker />
      </section>

      <article className="max-w-3xl mx-auto px-4 pb-10">
        <h2 className="font-serif text-2xl font-bold text-slate-900 mb-4">How a foreclosure rescue scam usually works</h2>
        <div className="space-y-4 text-slate-600 leading-relaxed mb-12">
          <p>
            Foreclosure filings and sheriff-sale listings are public, so offers arrive right when a homeowner is most
            frightened. The pitch sounds like help: a &quot;program&quot;, a &quot;negotiator&quot;, an investor who will
            &quot;save the house&quot;. The money is made one of two ways. Either you pay fees for work that never happens
            (or that a free counselor would have done), or you sign documents that move your home and its equity to someone
            else.
          </p>
          <p>
            The free path does the same real work: a HUD-approved counselor helps you apply to your servicer for a
            modification or other option, New Jersey&apos;s court mediation program puts you at a table with the lender,
            and Legal Services of New Jersey defends income-eligible homeowners.
          </p>
        </div>

        <h2 className="font-serif text-2xl font-bold text-slate-900 mb-4">Is this foreclosure help legit? Questions to ask first</h2>
        <ul className="space-y-3 text-slate-600 leading-relaxed mb-12 list-disc pl-5">
          <li><strong className="text-slate-900">Do they want money before doing anything?</strong> Relief companies generally cannot charge until you have an agreement with your lender, and New Jersey foreclosure consultants cannot collect until the work is fully done.</li>
          <li><strong className="text-slate-900">Who are they, really?</strong> Look up the company, agency, or lawyer yourself. New Jersey foreclosure consultants must be licensed by the Department of Banking and Insurance, and a lawyer&apos;s license can be checked with the New Jersey Courts&apos; Attorney Search.</li>
          <li><strong className="text-slate-900">Do they want you to stop talking to your lender, or to pay them instead?</strong> A legitimate helper never does.</li>
          <li><strong className="text-slate-900">Do they want your deed, a power of attorney, or your banking login?</strong> Stop there.</li>
          <li><strong className="text-slate-900">Can you take the papers home?</strong> If the answer is &quot;sign today&quot;, walk away.</li>
        </ul>

        <h2 className="font-serif text-2xl font-bold text-slate-900 mb-4">Loan modification scam red flags</h2>
        <div className="space-y-4 text-slate-600 leading-relaxed mb-12">
          <p>
            Only your servicer can modify your loan. Under federal Regulation O, a company selling modification help
            generally may not take any fee until you have signed an agreement with your lender, may not tell you to stop
            contacting your lender, and may not misrepresent its odds of success, your duty to keep paying, or any link to
            the government. Watch for guaranteed approvals, promises to cut your principal by a set percentage, paid
            &quot;forensic loan audits&quot;, invitations to join a &quot;mass joinder&quot; lawsuit against the banks, and
            look-alike government seals. Applying to your servicer yourself costs nothing.
          </p>
        </div>

        <h2 className="font-serif text-2xl font-bold text-slate-900 mb-4">Deed theft scam in NJ: what it looks like</h2>
        <div className="space-y-4 text-slate-600 leading-relaxed mb-12">
          <p>
            Deed-theft and equity-stripping schemes ask you to sign your house over &quot;temporarily&quot;, to put it in a
            trust or company &quot;for protection&quot;, or to sell it and rent it back with a promise that you can buy it
            back later. Once a deed is recorded, the new owner controls the property and its equity. New Jersey&apos;s
            Foreclosure Rescue Fraud Prevention Act bars foreclosure consultants from taking any interest in your home or a
            power of attorney, sets strict terms for sale-leaseback deals, and gives owners a short window to cancel one.
            If you signed something, call a New Jersey attorney or Legal Services of New Jersey right away.
          </p>
        </div>

        <div className="rounded-2xl bg-slate-50 border border-slate-200 px-6 py-6 mb-6">
          <p className="font-bold text-slate-900 mb-3">Related</p>
          <ul className="space-y-2 text-slate-700">
            <li><Link href="/scams" className="underline underline-offset-4">Foreclosure rescue scams in NJ: the full list of red flags</Link></li>
            <li><Link href="/tools/surplus-funds" className="underline underline-offset-4">Surplus funds calculator: what a finder&apos;s cut would really cost</Link></li>
            <li><Link href="/guides/loan-modification" className="underline underline-offset-4">How a real loan modification works, free</Link></li>
            <li><Link href="/guides/foreclosure-mediation" className="underline underline-offset-4">NJ foreclosure mediation: the free court program</Link></li>
          </ul>
        </div>
      </article>

      <GuideFaq items={FAQ_ITEMS} />

      <div className="max-w-3xl mx-auto px-4 pb-14">
        <p className="text-slate-400 text-xs leading-relaxed">
          Educational information, not legal advice. This tool matches common scam patterns in the text you enter; it
          cannot confirm who sent a message, whether an offer is real, or whether any company broke the law, and a result
          of no flags does not mean an offer is safe. Sources: 12 CFR part 1015 (Regulation O); N.J.S.A. 46:10B-53 to -68;
          CFPB and FTC consumer guidance. A licensed New Jersey attorney can advise on your situation.
        </p>
      </div>
    </div>
  );
}
