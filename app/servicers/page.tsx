import Link from 'next/link';
import type { Metadata } from 'next';
import SiteHeader from '../components/SiteHeader';
import { SERVICERS, SERVICER_DATA_VERIFIED, telHref } from '../../lib/servicers';
import { shortName } from '../../lib/servicer-guide';
import { OG_IMAGES } from '../../lib/og';
import { fitTitle, fitDescription } from '../../lib/seo';

export const metadata: Metadata = {
  title: fitTitle('Mortgage Servicer Hardship Phone Numbers: 44 Verified'),
  description:
    fitDescription('How to actually reach loss mitigation at the biggest mortgage servicers: 44 servicers including Rocket/Mr. Cooper, Wells Fargo, Chase, PNC, Valley, TD and Lakeview. Phones verified on each servicer\'s own site.'),
  alternates: { canonical: 'https://njforeclosureguide.org/servicers/' },
  openGraph: {
    images: OG_IMAGES,
    title: 'Mortgage Servicer Hardship Phone Numbers: 44 Verified',
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
            <strong className="text-slate-900">Before you dial:</strong>{' '}your servicer is whoever you
            send payments to, named on your statement; it may differ from the company that gave you
            the loan. Ask for &quot;loss mitigation&quot; or &quot;mortgage assistance,&quot; request
            the full application, and write down the date, the person&apos;s name, and what was said,
            every call. A complete application carries legal protections an incomplete one does not.
          </p>
        </div>

        <p className="text-slate-600 text-sm mb-4">
          {SERVICERS.length} servicers, A to Z. Tap a name for the full guide: what to say, documents to
          send, and your protections while they review you.
        </p>
        <div className="space-y-3">
          {[...SERVICERS].sort((a, b) => a.name.localeCompare(b.name)).map((s) => (
            <div key={s.slug} className="border border-slate-200 rounded-2xl px-5 py-4 hover:border-slate-400 transition">
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <Link href={`/servicers/${s.slug}/`} className="font-bold text-slate-900 underline underline-offset-4 decoration-slate-300 hover:decoration-slate-900">
                  {s.name}
                </Link>
                {s.phone ? (
                  <a href={telHref(s.phone)} className="font-serif text-xl font-bold text-slate-900">{s.phone}</a>
                ) : (
                  <span className="text-sm text-slate-500">Use the number on your statement</span>
                )}
              </div>
              <p className="text-sm text-slate-500 mt-1">
                {s.phone && s.phoneType === 'loss-mitigation' && 'Published for mortgage assistance. '}
                {s.phone && s.phoneType === 'general' && !s.phoneLabel && 'Main line; ask for loss mitigation. '}
                {s.phoneLabel && `${s.phoneLabel}. `}
                {s.onlineApp === true && 'Online application available. '}
                {s.aliases.length > 0 && `Also: ${s.aliases.slice(0, 3).join(', ')}.`}
              </p>
              <Link href={`/servicers/${s.slug}/`} className="text-sm font-semibold text-slate-900 mt-1 inline-block">
                {shortName(s.name)} guide →
              </Link>
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
