import Link from 'next/link';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import SiteHeader from '../../components/SiteHeader';
import { SHERIFF_SOURCES, getSheriffSource, SHERIFF_DATA_VERIFIED } from '../../../lib/sheriff-sales';

export function generateStaticParams() {
  return SHERIFF_SOURCES.map((s) => ({ county: s.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ county: string }> }): Promise<Metadata> {
  const { county } = await params;
  const src = getSheriffSource(county);
  if (!src) return {};
  const title = `${src.county} County NJ Sheriff Sales | Check Your Sale Date`;
  const description = `Where ${src.county} County, NJ publishes foreclosure sheriff sale listings, how to check a sale date${src.phone ? `, the sheriff's office number (${src.phone})` : ''}, and how to request an adjournment under New Jersey law.`;
  return {
    title,
    description,
    alternates: { canonical: `https://njforeclosureguide.org/sheriff-sales/${src.slug}/` },
    openGraph: { title, description, url: `https://njforeclosureguide.org/sheriff-sales/${src.slug}/` },
  };
}

export default async function CountySheriffPage({ params }: { params: Promise<{ county: string }> }) {
  const { county } = await params;
  const src = getSheriffSource(county);
  if (!src) notFound();

  const faq = [
    {
      q: `Where does ${src.county} County list sheriff sales?`,
      a: src.usesCivilView
        ? `${src.county} County publishes foreclosure sheriff sale listings through the state's CivilView system, where you can search upcoming sales by address or defendant name and see scheduled dates and status.`
        : `${src.county} County publishes its own foreclosure sheriff sale listings on the sheriff's official website, where you can see upcoming sales and their scheduled dates.`,
    },
    {
      q: `Can a sheriff sale in ${src.county} County be postponed?`,
      a: `Generally yes. New Jersey law entitles a homeowner to request adjournments of a scheduled sheriff sale, typically two adjournments of up to 30 days each, and a court can order further postponements. Requests go through the sheriff's office, and there is usually a small fee. Speak with a licensed New Jersey attorney about your specific case.`,
    },
    {
      q: `Does a scheduled sale mean I have lost the house?`,
      a: `No. Until the sale actually happens (and through New Jersey's 10-day objection period after it), options can remain: reinstating the loan, completing a sale of the home, or the automatic stay from a Chapter 13 bankruptcy filing. Which ones are realistic depends on timing, so acting before the sale date matters more than anything else.`,
    },
  ];

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faq.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  };

  return (
    <div className="min-h-full bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <SiteHeader />

      <section className="bg-gradient-to-b from-slate-950 to-slate-900 text-white py-14 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-amber-400 text-xs font-semibold tracking-[0.25em] uppercase mb-4">
            Sheriff Sale Directory
          </p>
          <h1 className="font-serif text-4xl font-bold mb-4 tracking-tight">
            {src.county} County Sheriff Sales
          </h1>
          <p className="text-slate-300 text-lg leading-relaxed">
            How to check a foreclosure sale date in {src.county} County, reach the sheriff&apos;s
            office, and use the time New Jersey law gives you.
          </p>
        </div>
      </section>

      <section className="max-w-3xl mx-auto px-4 py-12">
        <div className="border border-slate-200 rounded-2xl p-6 mb-10">
          <h2 className="font-bold text-slate-900 text-lg mb-4">Official sources</h2>
          <div className="space-y-3 text-slate-700">
            <p>
              <span className="font-semibold text-slate-900">Sale listings: </span>
              <a href={src.salesUrl} target="_blank" rel="noopener noreferrer" className="text-slate-900 underline underline-offset-4 break-all">
                {src.usesCivilView ? `${src.county} County listings on CivilView` : `${src.county} County sheriff sale listings`}
              </a>
            </p>
            <p>
              <span className="font-semibold text-slate-900">Sheriff&apos;s office: </span>
              <a href={src.sheriffUrl} target="_blank" rel="noopener noreferrer" className="text-slate-900 underline underline-offset-4 break-all">
                {src.sheriffUrl.replace(/^https?:\/\/(www\.)?/, '').replace(/\/$/, '')}
              </a>
            </p>
            {src.phone && (
              <p>
                <span className="font-semibold text-slate-900">Phone: </span>
                {src.phone}
              </p>
            )}
            {src.address && (
              <p>
                <span className="font-semibold text-slate-900">
                  {src.address.startsWith('Sales held at:') ? 'Where sales are held: ' : 'Address: '}
                </span>
                {src.address.replace(/^Sales held at:\s*/, '')}
              </p>
            )}
            {!src.phone && (
              <p className="text-slate-500 text-sm">
                The county&apos;s site did not allow us to verify a phone number, so we are not
                printing one. Use the sheriff&apos;s website above for current contact details.
              </p>
            )}
          </div>
          <p className="text-slate-400 text-xs mt-4">
            Verified against official county sources on {SHERIFF_DATA_VERIFIED}. The county&apos;s
            own site is always the authority.
          </p>
        </div>

        <h2 className="font-serif text-2xl font-bold text-slate-900 mb-4">
          If your home has a sale date
        </h2>
        <div className="space-y-4 text-slate-600 leading-relaxed mb-10">
          <p>
            <strong className="text-slate-900">First, confirm the actual date</strong> using the
            listings link above; sales are frequently adjourned, and the notice you received may no
            longer be current.
          </p>
          <p>
            <strong className="text-slate-900">Second, know your adjournment rights.</strong> New
            Jersey homeowners are generally entitled to request two adjournments of the sale, each up
            to 30 days, through the sheriff&apos;s office, and courts can grant more in the right
            circumstances. Used well, that time is enough to close a sale of the home, finish a
            reinstatement, or get a Chapter 13 filed.
          </p>
          <p>
            <strong className="text-slate-900">Third, use the time on an actual plan.</strong> A
            postponed auction with no plan is just a later auction. Our free assessment sorts out
            which of the seven options still fit at your stage, and the{' '}
            <Link href="/tools/timeline" className="text-slate-900 underline underline-offset-4 font-semibold">
              timeline tool
            </Link>{' '}
            shows where you are in the process.
          </p>
        </div>

        <div className="bg-slate-50 rounded-2xl p-6 mb-10">
          {faq.map((f, i) => (
            <div key={i} className={i > 0 ? 'mt-5 pt-5 border-t border-slate-200' : ''}>
              <p className="font-semibold text-slate-900 mb-1.5">{f.q}</p>
              <p className="text-slate-600 text-sm leading-relaxed">{f.a}</p>
            </div>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row gap-3">
          <Link href="/quiz" className="bg-amber-400 text-slate-950 px-8 py-3.5 rounded-lg font-bold text-center hover:bg-amber-300 transition">
            See My Options, Free
          </Link>
          <Link href={`/foreclosure-help/${src.slug}/`} className="border border-slate-300 text-slate-900 px-8 py-3.5 rounded-lg font-semibold text-center hover:bg-slate-50 transition">
            Foreclosure Help in {src.county} County
          </Link>
        </div>
        <p className="text-slate-400 text-xs mt-6 leading-relaxed">
          This page is educational information, not legal advice. Deadlines and procedures are
          case-specific; a licensed New Jersey attorney can confirm what applies to yours.
        </p>
      </section>
    </div>
  );
}
