import Link from 'next/link';
import type { Metadata } from 'next';
import SiteHeader from '../components/SiteHeader';
import { SERVICERS, SERVICER_DATA_VERIFIED } from '../../lib/servicers';

export const metadata: Metadata = {
  title: 'Reach Your Mortgage Servicer | Loss Mitigation Contacts',
  description:
    'How to actually reach loss mitigation at the biggest mortgage servicers: Mr. Cooper, Wells Fargo, Chase, Bank of America, Freedom, Pennymac, Newrez, SPS and more. Phones verified against each servicer\'s own site.',
  alternates: { canonical: 'https://njforeclosureguide.org/servicers/' },
  openGraph: {
    title: 'Reach Your Mortgage Servicer | Loss Mitigation Contacts',
    description: 'Verified mortgage-assistance phone numbers and application links for the largest servicers.',
    url: 'https://njforeclosureguide.org/servicers/',
  },
};

export default function ServicersPage() {
  return (
    <div className="min-h-full bg-white">
      <SiteHeader />

      <section className="bg-gradient-to-b from-slate-950 to-slate-900 text-white py-16 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-amber-400 text-xs font-semibold tracking-[0.25em] uppercase mb-4">
            Verified {SERVICER_DATA_VERIFIED}
          </p>
          <h1 className="font-serif text-4xl md:text-5xl font-bold mb-5 tracking-tight">
            Reach the People Who Can Actually Change Your Loan
          </h1>
          <p className="text-slate-300 text-lg leading-relaxed">
            Every modification, forbearance and repayment plan starts with the same move: contacting
            your servicer&apos;s loss mitigation department. Here is how to reach it at the largest
            servicers, with every number verified against the servicer&apos;s own site.
          </p>
        </div>
      </section>

      <section className="max-w-3xl mx-auto px-4 py-12">
        <div className="border-l-2 border-amber-400 pl-5 mb-10">
          <p className="text-slate-700 leading-relaxed">
            <strong className="text-slate-900">Before you dial:</strong> your servicer is whoever you
            send payments to, named on your statement; it may differ from the company that gave you
            the loan. Ask for &quot;loss mitigation&quot; or &quot;mortgage assistance,&quot; request
            the full application, and write down the date, the person&apos;s name, and what was said,
            every call. A complete application carries legal protections an incomplete one does not.
          </p>
        </div>

        <div className="space-y-4">
          {SERVICERS.map((s) => (
            <div key={s.name} className="border border-slate-200 rounded-2xl px-6 py-5">
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <p className="font-bold text-slate-900">{s.name}</p>
                {s.phone && (
                  <p className="font-serif text-xl font-bold text-slate-900">{s.phone}</p>
                )}
              </div>
              <div className="text-sm text-slate-600 mt-1.5 space-y-1">
                {s.phone && s.phoneType === 'general' && (
                  <p>Main line; ask for loss mitigation.</p>
                )}
                {s.phone && s.phoneType === 'loss-mitigation' && (
                  <p>Published for mortgage assistance directly.</p>
                )}
                {s.onlineApp === true && <p>Offers an online hardship application.</p>}
                {s.note && <p className="text-slate-500">{s.note}</p>}
                {s.assistUrl && (
                  <p>
                    <a href={s.assistUrl} target="_blank" rel="noopener noreferrer" className="text-slate-900 underline underline-offset-4 font-semibold break-all">
                      Assistance page
                    </a>
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>

        <p className="text-slate-400 text-xs mt-6 leading-relaxed">
          Numbers verified against each servicer&apos;s own published pages on {SERVICER_DATA_VERIFIED};
          servicers merge and renumber, so the number on your own statement always wins. Servicer not
          listed? The assistance number is on every monthly statement, or a free{' '}
          <a href="https://www.hud.gov/i_want_to/talk_to_a_housing_counselor" target="_blank" rel="noopener noreferrer" className="underline underline-offset-2">
            HUD-approved counselor
          </a>{' '}
          can find it with you.
        </p>

        <div className="bg-slate-50 rounded-2xl p-6 mt-10">
          <p className="text-slate-700 leading-relaxed mb-4">
            Not sure whether calling is even the right move at your stage? Two minutes tells you
            which of the seven options fit, and this call is step one for five of them.
          </p>
          <Link href="/quiz" className="inline-block bg-amber-400 text-slate-950 px-8 py-3.5 rounded-lg font-bold hover:bg-amber-300 transition">
            See My Options, Free
          </Link>
        </div>
      </section>
    </div>
  );
}
