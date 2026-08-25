import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'New Jersey Foreclosure Questions, Answered Directly',
  description:
    'Direct answers to the most common New Jersey foreclosure questions: how long the process takes, how many payments you can miss, the 35-day response window, stopping a sheriff sale, what happens to your equity, and whether you can sell during foreclosure.',
  alternates: { canonical: 'https://njforeclosureguide.org/answers/' },
  openGraph: {
    title: 'New Jersey Foreclosure Questions, Answered Directly',
    description:
      'Straight answers about the NJ foreclosure process: timelines, the 35-day response window, sheriff sales, equity, and your options at each stage.',
    url: 'https://njforeclosureguide.org/answers/',
  },
};

// Answer-first: each entry opens with a direct one or two sentence answer,
// then the detail. This is the structure both readers and answer engines want.
const QA: { q: string; short: string; detail: string }[] = [
  {
    q: 'Is New Jersey a judicial foreclosure state?',
    short:
      'Yes. New Jersey is a judicial foreclosure state, which means a lender must file a lawsuit in the Superior Court of New Jersey and win a judgment before it can sell your home.',
    detail:
      'A lender cannot simply take a New Jersey home the way it could in a non-judicial state. The case goes through the county courthouse, it creates a court record, and you have the right to respond. Because it is a court process subject to court schedules, it also takes considerably longer than foreclosure in non-judicial states.',
  },
  {
    q: 'How long does foreclosure take in New Jersey?',
    short:
      'Usually many months, and frequently more than a year. New Jersey is consistently among the slowest states because every foreclosure goes through the courts.',
    detail:
      'Before a case is even filed, your lender must send a Notice of Intention to Foreclose at least 30 days in advance, and most lenders wait until a loan is well past due to begin. After the complaint is filed and served, you have 35 days to answer. Contested cases take longer still, and court backlogs add more time. The practical takeaway is that most homeowners have more time than they fear, and that time is the most valuable asset they have.',
  },
  {
    q: 'How many mortgage payments can I miss before foreclosure in New Jersey?',
    short:
      'There is no single magic number, but most lenders do not begin foreclosure until a loan is around 120 days delinquent, and New Jersey law requires a 30-day Notice of Intention before a complaint can be filed.',
    detail:
      'Late fees and credit damage begin much earlier than foreclosure does. The gap between your first missed payment and an actual court filing is typically the widest window of opportunity you will have, because every option, including reinstatement, modification, forbearance, and selling on the open market, is still available during it.',
  },
  {
    q: 'What is a Notice of Intention to Foreclose in New Jersey?',
    short:
      'It is a formal written warning your lender must send at least 30 days before filing a foreclosure complaint. It is a warning, not a lawsuit.',
    detail:
      'Under the New Jersey Fair Foreclosure Act, this notice must tell you the amount required to cure the default. Curing the default during that window generally stops the process before a case is ever filed. Many homeowners receive this notice, assume foreclosure has already begun, and do nothing. That is a costly misreading, because this is the stage where you have the most control.',
  },
  {
    q: 'How long do I have to respond to a foreclosure complaint in New Jersey?',
    short:
      'Generally 35 days from the date you were served with the complaint.',
    detail:
      'If you do not answer, the lender can seek a default judgment, and the case moves toward sale without your side ever being heard. Filing an answer keeps you in the case and often opens access to mediation. This is the single most time-sensitive deadline in the entire process, and it is the point at which speaking with a New Jersey attorney matters most. Confirm your exact deadline on your own court papers rather than relying on any general figure.',
  },
  {
    q: 'Can I stop a sheriff sale in New Jersey?',
    short:
      'Often, yes. Sheriff sales can typically be adjourned on request, a Chapter 13 bankruptcy filing generally halts the sale through the automatic stay, and completing a sale of the home before the auction date stops it entirely.',
    detail:
      'Reinstating the loan by paying what is owed also stops the sale. Which route is realistic depends on your finances and how close the date is. Contact your county sheriff to confirm the current sale schedule, and speak with an attorney before relying on any single strategy.',
  },
  {
    q: 'Can I sell my house while it is in foreclosure in New Jersey?',
    short:
      'Yes. You own the home and can sell it right up until the sheriff sale, as long as the sale closes in time and the proceeds satisfy what you owe.',
    detail:
      'This surprises most homeowners. Foreclosure does not remove your right to sell. A sale that closes before the auction pays off the lender, ends the foreclosure, and puts any surplus in your pocket instead of losing it at auction. The constraint is timing: a traditional listing may take longer than you have, which is why cash buyers who close in one to four weeks exist. If you owe more than the home is worth, that becomes a short sale and requires lender approval.',
  },
  {
    q: 'What happens to my equity if my house is foreclosed in New Jersey?',
    short:
      'Your lender is entitled to what it is owed plus costs. Any surplus above that belongs to you, not the lender.',
    detail:
      'This is the most expensive thing homeowners misunderstand. People with substantial equity sometimes disengage as foreclosure advances, assuming there is nothing left to protect, and lose money that was legally theirs. Property sold at a sheriff sale frequently brings less than an ordinary sale would, so equity that was real can evaporate. If your home is worth meaningfully more than you owe, that fact alone justifies an hour with an attorney immediately.',
  },
  {
    q: 'What is the New Jersey foreclosure mediation program?',
    short:
      'It is a court-run program that brings you and your lender together with a neutral mediator, at no cost to eligible homeowners.',
    detail:
      'It is available once a foreclosure complaint has been filed, and eligible homeowners may also receive free housing counseling and legal assistance alongside it. Because it costs nothing and does not require you to give anything up, it is one of the strongest options available to a homeowner who wants to keep their home. Details are available through the New Jersey Courts.',
  },
  {
    q: 'Does foreclosure ruin my credit?',
    short:
      'A completed foreclosure is a serious negative event on your credit and can affect it for years, but missed payments have already been damaging it well before that point.',
    detail:
      'Because the damage begins with delinquency rather than with the foreclosure itself, acting earlier limits it. Alternatives that avoid a completed foreclosure, such as reinstatement, a modification, or selling the property, generally leave you in a better position than letting the case run to a sheriff sale. Nobody can promise you a specific credit outcome, and anyone who does should not be trusted.',
  },
  {
    q: 'Can I get my house back after a sheriff sale in New Jersey?',
    short:
      'New Jersey provides a short redemption window after a sheriff sale, commonly described as 10 days, during which the property may be redeemed by paying what is owed in full.',
    detail:
      'That window is narrow and requires the full amount, so it is rarely a practical rescue for someone who could not afford the loan. Treat the sheriff sale date as the real deadline rather than counting on redemption afterward. Confirm the specifics with an attorney, since the details depend on your case.',
  },
  {
    q: 'Do I need a lawyer for a New Jersey foreclosure?',
    short:
      'You are not required to have one, but because New Jersey foreclosure is a court case with strict deadlines, having one materially improves your position, especially if you have equity or want to keep the home.',
    detail:
      'Free options exist. HUD-approved housing counselors cost nothing, and the court mediation program can include free legal assistance for eligible homeowners. The New Jersey State Bar Association also runs a lawyer referral service. Be cautious of anyone who charges an upfront fee promising to stop your foreclosure.',
  },
  {
    q: 'What are my options if I am behind on my mortgage in New Jersey?',
    short:
      'There are seven realistic paths: reinstatement, loan modification, refinancing, forbearance, short sale, Chapter 13 bankruptcy protection, and selling the property.',
    detail:
      'Which of them are actually open to you depends on how far along the case is, whether you want to keep the home, how much equity you have, and the condition of the property. The earlier you act, the more of these remain available. By the time a sale date is scheduled, several have closed off.',
  },
  {
    q: 'Is it too late to do anything about my foreclosure?',
    short:
      'Almost certainly not. Options narrow as the case advances, but homeowners have real choices even after a judgment has been entered and a sale date has been scheduled.',
    detail:
      'After judgment, a Chapter 13 filing can pause a sale, adjournments can move the date, and a sale of the property can still close beforehand. The mistake that genuinely forecloses your options is disengaging, because deadlines pass whether or not you are paying attention.',
  },
];

export default function AnswersPage() {
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: QA.map((x) => ({
      '@type': 'Question',
      name: x.q,
      acceptedAnswer: { '@type': 'Answer', text: `${x.short} ${x.detail}` },
    })),
  };

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'New Jersey Foreclosure Questions, Answered Directly',
    description:
      'Direct answers to common New Jersey foreclosure questions, including timelines, the 35-day response window, sheriff sales, equity, and available options.',
    about: { '@type': 'Thing', name: 'Foreclosure in New Jersey' },
    isAccessibleForFree: true,
    inLanguage: 'en-US',
    dateModified: '2026-08-25',
    publisher: {
      '@type': 'Organization',
      name: 'NJ Foreclosure Guide',
      url: 'https://njforeclosureguide.org',
    },
  };

  return (
    <div className="min-h-full bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />

      {/* Nav */}
      <nav className="sticky top-0 bg-white/95 backdrop-blur-md border-b border-slate-200 z-40 shadow-sm">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-3 flex justify-between items-center">
          <Link href="/" className="flex items-center gap-3 hover:opacity-90 transition">
            <img src="/images/icons/professional-legal-scales-lg.png" alt="NJ Foreclosure Guide" className="h-14 w-14" />
            <div className="flex flex-col leading-tight">
              <span className="text-lg font-bold text-slate-900 tracking-tight">NJ Foreclosure Guide</span>
              <span className="text-[10px] text-slate-500 font-medium tracking-widest uppercase">Free Homeowner Resource</span>
            </div>
          </Link>
          <Link href="/quiz" className="bg-slate-900 text-white px-5 py-2.5 rounded-lg font-semibold hover:bg-slate-800 transition text-sm">
            Free Assessment
          </Link>
        </div>
      </nav>

      {/* Hero */}
      <section className="bg-gradient-to-b from-slate-950 to-slate-900 text-white py-14 px-4">
        <div className="max-w-3xl mx-auto">
          <p className="text-amber-400 text-xs font-semibold tracking-[0.25em] uppercase mb-4">Straight Answers</p>
          <h1 className="font-serif text-4xl md:text-5xl font-bold mb-5 tracking-tight">
            New Jersey Foreclosure Questions, Answered
          </h1>
          <p className="text-slate-300 text-lg leading-relaxed">
            Direct answers first, detail second. These are the questions New Jersey homeowners actually ask, answered
            without sales language.
          </p>
          <p className="text-slate-500 text-sm mt-5">Last updated August 25, 2026</p>
        </div>
      </section>

      {/* Answers */}
      <article className="max-w-3xl mx-auto px-4 py-14">
        {QA.map((item, i) => (
          <section key={i} className="mb-12 scroll-mt-24" id={`q${i + 1}`}>
            <h2 className="font-serif text-2xl font-bold text-slate-900 mb-4 leading-snug">{item.q}</h2>
            <p className="text-slate-900 text-[17px] leading-relaxed font-medium border-l-4 border-amber-400 pl-5 mb-4">
              {item.short}
            </p>
            <p className="text-slate-600 leading-relaxed text-[15px]">{item.detail}</p>
          </section>
        ))}

        <div className="rounded-xl border border-slate-300 bg-slate-50 p-6">
          <p className="text-sm text-slate-600 leading-relaxed">
            <span className="font-bold text-slate-900">A note on accuracy:</span> these answers describe the general New
            Jersey foreclosure process. Your own deadlines appear on your court documents and control over anything
            written here. This page is educational and is not legal advice. Confirm your situation with a licensed New
            Jersey attorney.
          </p>
        </div>
      </article>

      {/* CTA */}
      <section className="max-w-3xl mx-auto px-4 pb-16">
        <div className="rounded-2xl bg-slate-950 text-white px-8 py-12 text-center">
          <h2 className="font-serif text-2xl font-bold mb-3">Find Out Where You Actually Stand</h2>
          <p className="text-slate-300 mb-8 text-sm leading-relaxed max-w-xl mx-auto">
            Two minutes, free and confidential. If keeping your home is realistic, we say so first, and every result
            includes at least one option that earns us nothing.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/quiz" className="bg-amber-400 text-slate-950 px-8 py-3.5 rounded-lg font-bold hover:bg-amber-300 transition">
              Take the Free Assessment
            </Link>
            <Link href="/tools/timeline" className="border border-white/30 bg-white/5 text-white px-8 py-3.5 rounded-lg font-semibold hover:bg-white/15 transition">
              See the NJ Timeline
            </Link>
          </div>
        </div>
      </section>

      <footer className="bg-slate-950 text-slate-500 py-10 px-4 text-center text-xs">
        <p className="mb-3">&copy; 2026 NJ Foreclosure Guide. All rights reserved.</p>
        <div className="flex gap-5 justify-center flex-wrap">
          <Link href="/" className="hover:text-amber-400 transition">Home</Link>
          <Link href="/companies" className="hover:text-amber-400 transition">Get an Offer</Link>
          <Link href="/privacy" className="hover:text-amber-400 transition">Privacy</Link>
          <Link href="/terms" className="hover:text-amber-400 transition">Terms</Link>
          <Link href="/disclaimer" className="hover:text-amber-400 transition">Disclaimer</Link>
        </div>
      </footer>
    </div>
  );
}
