import Link from 'next/link';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import SiteHeader from '../../components/SiteHeader';
import { SHERIFF_SOURCES, getSheriffSource, SHERIFF_DATA_VERIFIED } from '../../../lib/sheriff-sales';
import { sheriffAngleFor } from '../../../lib/county-blog';
import { OG_IMAGES } from '../../../lib/og';
import { fitTitle, fitDescription } from '../../../lib/seo';

export function generateStaticParams() {
  return SHERIFF_SOURCES.map((s) => ({ county: s.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ county: string }> }): Promise<Metadata> {
  const { county } = await params;
  const src = getSheriffSource(county);
  if (!src) return {};
  // Search Console (Aug 25-Sep 21, 2026): these pages rank ~6-10 for
  // "<county> county sheriff sale(s)" but earned a 0-1% CTR under the old
  // homeowner-only title. Most searchers want THE LIST, so the title now
  // promises the official listings first; the homeowner help stays on-page.
  const title = fitTitle(`${src.county} County Sheriff Sale List (NJ) | Official Listings`);
  const description = fitDescription(`Go straight to the official ${src.county} County sheriff sale listings${src.usesCivilView ? ' (CivilView)' : ''}${src.phone ? `, the sheriff's office number (${src.phone})` : ''}, where sales are held, and how homeowners can check or postpone a sale date under NJ law.`);
  return {
    title,
    description,
    alternates: { canonical: `https://njforeclosureguide.org/sheriff-sales/${src.slug}/` },
    openGraph: { images: OG_IMAGES, title, description, url: `https://njforeclosureguide.org/sheriff-sales/${src.slug}/` },
  };
}

export default async function CountySheriffPage({ params }: { params: Promise<{ county: string }> }) {
  const { county } = await params;
  const src = getSheriffSource(county);
  if (!src) notFound();
  // Consolidated county content (formerly /blog/sheriff-sales-<county>/):
  // the hand-written county character + market paragraphs and local orgs.
  const c = sheriffAngleFor(src.slug);
  const cs = src.slug.replace(/-county$/, '');

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
            The official {src.county} County sale list, the sheriff&apos;s office contact, and — if
            it&apos;s your home on the list — how to use the time New Jersey law gives you.
          </p>
          <div className="mt-7 flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href={src.salesUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-amber-400 text-slate-950 px-7 py-3.5 rounded-lg font-bold hover:bg-amber-300 transition"
            >
              View the official {src.county} County list →
            </a>
            <Link
              href="/command-center?stage=scheduled"
              className="border border-white/30 px-7 py-3.5 rounded-lg font-bold hover:bg-white/10 transition"
            >
              It&apos;s my home — what can I do?
            </Link>
          </div>
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

        {c && (
          <>
            <h2 className="font-serif text-2xl font-bold text-slate-900 mb-4">
              Foreclosure in {src.county} County: what&apos;s different here
            </h2>
            <div className="space-y-4 text-slate-600 leading-relaxed mb-10">
              <p>{c.character}</p>
              {src.address?.startsWith('Sales held at:') && (
                <p>
                  One local detail that surprises people: {src.county} County sales are not held at a
                  courthouse. They are conducted at {src.address.replace(/^Sales held at:\s*/, '')}.
                </p>
              )}
            </div>
          </>
        )}

        <h2 className="font-serif text-2xl font-bold text-slate-900 mb-4">
          How the {src.county} County auction works
        </h2>
        <div className="space-y-4 text-slate-600 leading-relaxed mb-10">
          <p>
            A sheriff sale is a public auction of the property to satisfy the foreclosure judgment.
            Bidders must meet the county&apos;s deposit and payment conditions, the lender typically
            bids up to what it is owed, and if no one outbids that, the property goes back to the
            lender.
          </p>
          <p>
            Two facts matter most to a homeowner. The listed sale date moves often, so check the
            official list weekly rather than trusting the notice you were mailed. And if the sale
            brings more than the judgment, the surplus belongs to you and must be claimed from the
            court; it is not mailed automatically.{' '}
            <Link href="/guides/surplus-funds" className="text-slate-900 underline underline-offset-4 font-semibold">
              How to claim surplus funds
            </Link>
            .
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
          <p>
            <strong className="text-slate-900">Request early and do it yourself.</strong> Ask days
            ahead, not the morning of, and confirm the new date on the official list afterward. Never
            pay a third party to &quot;get your sale postponed&quot;: the request is yours to make, and
            up-front fees for foreclosure rescue services are generally illegal in New Jersey.
          </p>
        </div>

        <h2 className="font-serif text-2xl font-bold text-slate-900 mb-4">
          What the extra days are actually for
        </h2>
        <div className="space-y-4 text-slate-600 leading-relaxed mb-10">
          <p>
            Up to sixty days fits three real plans: a sale of the home (a cash sale commonly closes in
            14&ndash;30 days, which pays the judgment and ends the case), finishing a loss-mitigation
            review already under way, or a properly prepared Chapter 13 filing whose automatic stay
            halts the sale. Time without one of those attached is just interest accruing.
          </p>
          {c && <p>{c.market}</p>}
        </div>

        <h2 className="font-serif text-2xl font-bold text-slate-900 mb-4">
          After the sale
        </h2>
        <div className="space-y-4 text-slate-600 leading-relaxed mb-10">
          <p>
            A completed sale is not always the last word. New Jersey court rules generally allow a
            10-day period after the sale for objections and for the owner to redeem by paying what is
            owed, before the sheriff&apos;s deed is delivered. Even then, the buyer must obtain a
            court writ of possession, executed by the sheriff, before anyone can be required to leave. If the sale brought more than the judgment, the surplus is
            yours to claim.
          </p>
          <ul className="list-disc pl-5 space-y-1.5">
            <li>
              <Link href="/guides/after-sheriff-sale" className="text-slate-900 underline underline-offset-4 font-semibold">The complete after-the-sale guide</Link>
            </li>
            <li>
              <Link href="/answers/what-happens-after-a-sheriff-sale/" className="text-slate-900 underline underline-offset-4">What happens after a sheriff sale</Link>
            </li>
            <li>
              <Link href="/answers/can-i-get-my-house-back-after-sheriff-sale/" className="text-slate-900 underline underline-offset-4">Can I get my house back after the sale?</Link>
            </li>
            <li>
              <Link href="/tools/surplus-funds" className="text-slate-900 underline underline-offset-4">Surplus funds calculator: was there money left over?</Link>
            </li>
          </ul>
        </div>

        {c && c.orgs.length > 0 && (
          <>
            <h2 className="font-serif text-2xl font-bold text-slate-900 mb-2">
              Free help for {src.county} County homeowners
            </h2>
            <p className="text-slate-600 text-sm leading-relaxed mb-5">
              All free. We are not paid by any of them; they are listed because they help.
            </p>
            <div className="space-y-3 mb-10">
              {c.orgs.slice(0, 4).map((org) => (
                <div key={org.name} className="border border-slate-200 rounded-xl px-5 py-4">
                  <a href={org.url} target="_blank" rel="noopener noreferrer" className="font-bold text-slate-900 text-sm underline underline-offset-4">
                    {org.name}
                  </a>
                  <p className="text-slate-600 text-sm mt-0.5 leading-relaxed">{org.what}</p>
                </div>
              ))}
            </div>
          </>
        )}

        <div className="bg-slate-50 rounded-2xl p-6 mb-10">
          {faq.map((f, i) => (
            <div key={i} className={i > 0 ? 'mt-5 pt-5 border-t border-slate-200' : ''}>
              <p className="font-semibold text-slate-900 mb-1.5">{f.q}</p>
              <p className="text-slate-600 text-sm leading-relaxed">{f.a}</p>
            </div>
          ))}
        </div>

        {c && (
          <div className="border border-slate-200 rounded-2xl px-6 py-5 mb-10">
            <p className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-3">
              More for {src.county} County homeowners
            </p>
            <ul className="space-y-2 text-slate-700">
              <li><Link href={`/blog/foreclosure-timeline-${cs}-county/`} className="underline underline-offset-4">The {src.county} County foreclosure timeline, stage by stage</Link></li>
              <li><Link href={`/blog/foreclosure-${cs}-county-playbook/`} className="underline underline-offset-4">The {src.county} County local playbook</Link></li>
              <li><Link href={`/blog/free-foreclosure-help-${cs}-county/`} className="underline underline-offset-4">Every free help source in {src.county} County</Link></li>
              <li><Link href="/blog/sheriff-sale-adjournment-playbook/" className="underline underline-offset-4">The full adjournment playbook</Link></li>
            </ul>
          </div>
        )}

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
