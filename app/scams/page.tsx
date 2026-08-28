import Link from 'next/link';
import type { Metadata } from 'next';
import SiteHeader from '../components/SiteHeader';

export const metadata: Metadata = {
  title: 'Foreclosure Rescue Scams in NJ | The Red Flags',
  description:
    'How to tell real foreclosure help from a scam in New Jersey: the red flags, what state and federal law actually prohibits, and where to report it. Upfront fees for foreclosure relief are illegal.',
  alternates: { canonical: 'https://njforeclosureguide.org/scams/' },
  openGraph: {
    title: 'Foreclosure Rescue Scams in NJ | The Red Flags',
    description: 'The red flags of foreclosure rescue scams, and where to report them.',
    url: 'https://njforeclosureguide.org/scams/',
  },
};

// A foreclosure filing is public record, which is why scammers find people at
// exactly their most frightened moment. This page names the patterns. Keep
// every legal claim here conservative and correct: the federal MARS rule
// (12 CFR 1015) prohibits collecting fees before a homeowner has a written
// offer from their lender that they accept, and New Jersey's Foreclosure
// Rescue Fraud Prevention Act adds state-level prohibitions on consultant
// upfront fees and regulates sale-leaseback rescues.
const RED_FLAGS: { flag: string; why: string }[] = [
  {
    flag: 'They want money before they have done anything',
    why: 'Under the federal MARS rule, companies offering mortgage relief generally may not collect a fee until you have a written offer from your lender in hand and accept it. New Jersey law likewise prohibits foreclosure consultants from taking upfront fees. An advance fee is not a yellow flag; it is the defining one.',
  },
  {
    flag: '"Stop talking to your lender / don\'t contact a lawyer"',
    why: 'Nobody helping you benefits from you having less information. Cutting you off from your servicer, a HUD counselor, or an attorney only benefits someone who needs you not to check what they are telling you.',
  },
  {
    flag: 'They ask you to sign the deed over "temporarily"',
    why: 'Sale-leaseback and "sign it over and rent it back" arrangements are the classic equity-stripping scam and are specifically regulated under New Jersey law. Once the deed moves, the leverage is gone; people lose the home and the equity.',
  },
  {
    flag: 'A guarantee: "we stop all foreclosures"',
    why: 'Nobody can guarantee a foreclosure outcome, not an attorney, not a company, and not this site. Outcomes depend on your lender, your numbers and your timing. A guarantee is a sales tactic, not a service.',
  },
  {
    flag: 'Pressure to sign today, at your door',
    why: 'Sale notices are advertised publicly, so investors and rescuers appear in waves at exactly the deadline. Legitimate options do not expire this afternoon; New Jersey law generally gives you the right to adjourn the sale twice, up to 30 days each.',
  },
  {
    flag: 'They "are" or "work with" the government, vaguely',
    why: 'Government help exists: HUD-approved counselors and the New Jersey court mediation program, and both are free. Anyone charging for access to a government program is selling you a phone call you could make yourself.',
  },
  {
    flag: 'Payments should go to them instead of your lender',
    why: 'Never route mortgage payments through a third party who "will handle it." That money typically never reaches the lender, and the missed payments compound the case against you.',
  },
];

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Is it legal to charge upfront fees for foreclosure help in New Jersey?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Generally no. The federal MARS rule (Regulation O) prohibits mortgage assistance relief companies from collecting fees before the homeowner has a written offer from their lender that they decide to accept, and New Jersey law prohibits foreclosure consultants from taking upfront fees. Attorneys operating within their normal practice are treated differently, which is one reason to prefer licensed New Jersey attorneys for legal work.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do foreclosure rescue scammers find homeowners?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Foreclosure filings and sheriff sale schedules are public records in New Jersey, so once a case is filed, mail, calls and door-knocks follow. The volume of contact says nothing about your situation; it only means your case appeared in a public list.',
      },
    },
    {
      '@type': 'Question',
      name: 'Where do I report a foreclosure rescue scam in New Jersey?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Report to the New Jersey Division of Consumer Affairs (njconsumeraffairs.gov), the Federal Trade Commission (reportfraud.ftc.gov), and the Consumer Financial Protection Bureau (consumerfinance.gov/complaint). If a licensed professional was involved, their licensing board as well.',
      },
    },
  ],
};

export default function ScamsPage() {
  return (
    <div className="min-h-full bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <SiteHeader />

      <section className="bg-gradient-to-b from-slate-950 to-slate-900 text-white py-16 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-amber-400 text-xs font-semibold tracking-[0.25em] uppercase mb-4">
            Read this before signing anything
          </p>
          <h1 className="font-serif text-4xl md:text-5xl font-bold mb-5 tracking-tight">
            Is This &quot;Foreclosure Help&quot; a Scam?
          </h1>
          <p className="text-slate-300 text-lg leading-relaxed">
            The moment a foreclosure is filed, it becomes public record, and the letters, calls and
            door-knocks begin. Some are legitimate. Here is how to tell, in seven red flags.
          </p>
        </div>
      </section>

      <section className="max-w-3xl mx-auto px-4 py-12">
        <ol className="space-y-5 mb-12">
          {RED_FLAGS.map((r, i) => (
            <li key={i} className="border border-slate-200 rounded-2xl px-6 py-5">
              <div className="flex gap-4">
                <span className="shrink-0 w-8 h-8 rounded-full bg-red-700 text-white flex items-center justify-center font-bold text-sm">
                  {i + 1}
                </span>
                <div>
                  <p className="font-bold text-slate-900">{r.flag}</p>
                  <p className="text-slate-600 text-sm leading-relaxed mt-1.5">{r.why}</p>
                </div>
              </div>
            </li>
          ))}
        </ol>

        <h2 className="font-serif text-2xl font-bold text-slate-900 mb-4">
          What the law actually says
        </h2>
        <div className="space-y-4 text-slate-600 leading-relaxed mb-12">
          <p>
            Under the federal <strong className="text-slate-900">MARS rule (Regulation O)</strong>,
            companies offering mortgage assistance relief generally may not collect any fee until you
            have a written offer from your lender or servicer in hand and choose to accept it. They
            must also tell you that you can stop doing business with them at any time and that your
            lender may not agree to change your loan.
          </p>
          <p>
            New Jersey&apos;s <strong className="text-slate-900">Foreclosure Rescue Fraud Prevention
            Act</strong> adds state prohibitions: foreclosure consultants may not take upfront fees,
            and &quot;rescue&quot; deals involving the transfer of your deed, including sale-leaseback
            arrangements, are tightly regulated precisely because they were the signature scam of the
            last foreclosure wave.
          </p>
          <p>
            Free, legitimate help exists and asks you for nothing:{' '}
            <a href="https://www.hud.gov/i_want_to/talk_to_a_housing_counselor" target="_blank" rel="noopener noreferrer" className="text-slate-900 underline underline-offset-4 font-semibold">
              HUD-approved housing counselors
            </a>{' '}
            and the{' '}
            <a href="https://www.njcourts.gov/self-help/foreclosure" target="_blank" rel="noopener noreferrer" className="text-slate-900 underline underline-offset-4 font-semibold">
              New Jersey courts&apos; foreclosure mediation program
            </a>
            .
          </p>
        </div>

        <h2 className="font-serif text-2xl font-bold text-slate-900 mb-4">Where to report one</h2>
        <div className="grid sm:grid-cols-3 gap-4 mb-12">
          <a href="https://www.njconsumeraffairs.gov/" target="_blank" rel="noopener noreferrer" className="border border-slate-200 rounded-xl px-5 py-4 hover:border-slate-400 transition">
            <p className="font-bold text-slate-900 text-sm">NJ Division of Consumer Affairs</p>
            <p className="text-slate-500 text-xs mt-1">njconsumeraffairs.gov</p>
          </a>
          <a href="https://reportfraud.ftc.gov/" target="_blank" rel="noopener noreferrer" className="border border-slate-200 rounded-xl px-5 py-4 hover:border-slate-400 transition">
            <p className="font-bold text-slate-900 text-sm">Federal Trade Commission</p>
            <p className="text-slate-500 text-xs mt-1">reportfraud.ftc.gov</p>
          </a>
          <a href="https://www.consumerfinance.gov/complaint/" target="_blank" rel="noopener noreferrer" className="border border-slate-200 rounded-xl px-5 py-4 hover:border-slate-400 transition">
            <p className="font-bold text-slate-900 text-sm">CFPB</p>
            <p className="text-slate-500 text-xs mt-1">consumerfinance.gov/complaint</p>
          </a>
        </div>

        <div className="bg-slate-50 rounded-2xl p-6">
          <p className="text-slate-700 leading-relaxed mb-4">
            Held against these flags: this site charges nothing, takes no fees from anyone it lists,
            never asks for your deed, tells you to stay in contact with your lender, and puts free
            government options first. Judge us by the same standard, and anyone else too.
          </p>
          <Link href="/quiz" className="inline-block bg-amber-400 text-slate-950 px-8 py-3.5 rounded-lg font-bold hover:bg-amber-300 transition">
            See My Options, Free
          </Link>
        </div>
        <p className="text-slate-400 text-xs mt-6 leading-relaxed">
          Educational information, not legal advice. If you believe you are the victim of a scam,
          the agencies above and a licensed New Jersey attorney are the right next calls.
        </p>
      </section>
    </div>
  );
}
