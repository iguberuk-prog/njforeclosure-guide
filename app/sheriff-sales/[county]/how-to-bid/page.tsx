import Link from 'next/link';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import SiteHeader from '../../../components/SiteHeader';
import { SHERIFF_SOURCES, getSheriffSource } from '../../../../lib/sheriff-sales';
import { BIDDER_RULES, BIDDER_RULES_CHECKED } from '../../../../lib/bidder-rules';
import { countyStats, num, AS_OF_MEDIUM, mediumDate } from '../../../../lib/sheriff-report';
import { OG_IMAGES } from '../../../../lib/og';
import { fitTitle, fitDescription } from '../../../../lib/seo';

/**
 * County bidder guide. Facts come only from lib/bidder-rules.ts (official
 * county sources, paraphrased) plus the general NJ rules the site already
 * states elsewhere (10-day redemption window, sold subject to liens, CWPP).
 * Homeowners who land here are pointed to help first.
 */

const BASE = 'https://njforeclosureguide.org';

export function generateStaticParams() {
  return SHERIFF_SOURCES.map((s) => ({ county: s.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ county: string }> }): Promise<Metadata> {
  const { county } = await params;
  const src = getSheriffSource(county);
  if (!src) return {};
  const r = BIDDER_RULES[src.slug];
  const title = fitTitle(`How to Bid at a ${src.county} County Sheriff Sale (NJ) | Rules & Deposit`);
  const description = fitDescription(
    r?.status !== 'unverified' && r?.depositRule
      ? `${src.county} County sheriff sale rules for bidders: ${r.saleDay ? `${r.saleDay}, ` : ''}deposit ${r.depositRule.replace(/\s*\(.*?\)/g, '').toLowerCase()}, accepted payment, balance deadline, and what buyers take on.`
      : `How bidding works at ${src.county} County sheriff sales in New Jersey: where to find the official terms, the deposit and payment rules most counties use, and what buyers take on.`,
  );
  const url = `${BASE}/sheriff-sales/${src.slug}/how-to-bid/`;
  return { title, description, alternates: { canonical: url }, openGraph: { images: OG_IMAGES, title, description, url } };
}

export default async function HowToBidPage({ params }: { params: Promise<{ county: string }> }) {
  const { county } = await params;
  const src = getSheriffSource(county);
  if (!src) notFound();
  const r = BIDDER_RULES[src.slug];
  const cs = countyStats(src.slug);
  const link = 'text-slate-900 underline underline-offset-4 font-semibold';
  const facts: [string, string | null][] = r
    ? [
        ['When sales are held', r.saleDay],
        ['Where', r.location],
        ['Deposit', r.depositRule],
        ['Accepted payment', r.depositForm],
        ['Balance due', r.balanceDue],
      ]
    : [];
  const shown = facts.filter(([, v]) => v);
  const showCounty = r && r.status !== 'unverified' && shown.length > 0;

  const faq = [
    {
      q: `How much deposit do I need to bid at a ${src.county} County sheriff sale?`,
      a: showCounty && r.depositRule
        ? `Per the ${src.county} County Sheriff: ${r.depositRule}.${r.depositForm ? ` Accepted payment: ${r.depositForm}.` : ''} Confirm the current terms with the sheriff's office before the sale.`
        : `Most New Jersey counties require 20% of the winning bid at the close of the sale, in certified funds, with the balance due within about 30 days. ${src.county} County's own terms could not be confirmed from its website, so call the sheriff's office before you bid.`,
    },
    {
      q: 'Can I inspect the property before a New Jersey sheriff sale?',
      a: 'Generally no. Sheriffs do not grant entry, and properties are sold as is. Bidders typically rely on the outside of the property, public records and their own title search.',
    },
    {
      q: 'What does a sheriff sale buyer take on?',
      a: 'Properties are generally sold subject to unpaid taxes and municipal charges, liens that were not cut off by the foreclosure, and anything a title search or survey would show, and the sheriff\'s deed does not guarantee clear title. The former owner also generally has a 10-day window after the sale to redeem, and the buyer must go through the court to obtain possession.',
    },
  ];
  const url = `${BASE}/sheriff-sales/${src.slug}/how-to-bid/`;
  const schemas = [
    { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faq.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })) },
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Sheriff sales', item: `${BASE}/sheriff-sales/` },
        { '@type': 'ListItem', position: 2, name: `${src.county} County`, item: `${BASE}/sheriff-sales/${src.slug}/` },
        { '@type': 'ListItem', position: 3, name: 'How to bid', item: url },
      ],
    },
  ];

  return (
    <div className="min-h-full bg-white">
      {schemas.map((sc, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(sc) }} />
      ))}
      <SiteHeader />

      <section className="bg-gradient-to-b from-slate-950 to-slate-900 text-white py-14 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-amber-400 text-xs font-semibold tracking-[0.25em] uppercase mb-4">{src.county} County · For bidders</p>
          <h1 className="font-serif text-4xl font-bold mb-4 tracking-tight">How to Bid at a {src.county} County Sheriff Sale</h1>
          <p className="text-slate-300 text-lg leading-relaxed">
            The county&apos;s published rules for buyers: when and where sales are held, the deposit, accepted payment and deadlines,
            and what you take on when you win.
          </p>
          <div className="mt-7 flex flex-col sm:flex-row gap-3 justify-center">
            <a href={src.salesUrl} target="_blank" rel="noopener noreferrer" className="bg-amber-400 text-slate-950 px-7 py-3.5 rounded-lg font-bold hover:bg-amber-300 transition">
              Official {src.county} County sale list →
            </a>
          </div>
        </div>
      </section>

      <nav className="max-w-3xl mx-auto px-4 pt-6 text-sm text-slate-500" aria-label="Breadcrumb">
        <Link href="/sheriff-sales/" className="underline underline-offset-2">Sheriff sales</Link> ›{' '}
        <Link href={`/sheriff-sales/${src.slug}/`} className="underline underline-offset-2">{src.county} County</Link> › How to bid
      </nav>

      <section className="max-w-3xl mx-auto px-4 py-8">
        <div className="rounded-2xl bg-amber-50 border border-amber-200 px-6 py-5 mb-10">
          <p className="font-bold text-slate-900 mb-1">Is it your home on the list?</p>
          <p className="text-slate-700 leading-relaxed">
            You generally have more time and more options than the notice suggests, including two adjournments of up to 30 days each.{' '}
            <Link href="/tools/sheriff-sale-date" className={link}>Find your date and your options</Link>.
          </p>
        </div>

        {src.notice && (
          <div className="rounded-2xl border-2 border-amber-400 bg-amber-50 px-6 py-5 mb-10" role="note">
            <p className="font-bold text-slate-900 mb-1">Notice from the county</p>
            <p className="text-slate-700 leading-relaxed">{src.notice.en}</p>
          </div>
        )}

        <h2 className="font-serif text-2xl font-bold text-slate-900 mb-4">{src.county} County sheriff sale rules</h2>
        {showCounty ? (
          <>
            {r.caveat && <p className="text-slate-600 text-sm leading-relaxed mb-4 rounded-xl bg-slate-50 border border-slate-200 px-4 py-3">{r.caveat}</p>}
            <dl className="border border-slate-200 rounded-2xl divide-y divide-slate-100 mb-6">
              {shown.map(([k, v]) => (
                <div key={k} className="grid sm:grid-cols-[180px_1fr] gap-1 sm:gap-4 px-5 py-3">
                  <dt className="font-semibold text-slate-900 text-sm">{k}</dt>
                  <dd className="text-slate-700 text-sm leading-relaxed">{v}</dd>
                </div>
              ))}
            </dl>
            {r.otherRules.length > 0 && (
              <>
                <h3 className="font-bold text-slate-900 mb-2">Other conditions the county lists</h3>
                <ul className="list-disc pl-5 space-y-1.5 text-slate-600 text-sm leading-relaxed mb-6">
                  {r.otherRules.map((x) => <li key={x}>{x}</li>)}
                </ul>
              </>
            )}
            <p className="text-slate-400 text-xs leading-relaxed mb-10">
              Paraphrased from the {src.county}{' '}County Sheriff&apos;s official pages, checked {BIDDER_RULES_CHECKED}:{' '}
              {r.sources.map((s, i) => (
                <span key={s}>
                  {i > 0 && ', '}
                  <a href={s} target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 break-all">
                    {s.replace(/^https?:\/\/(www\.)?/, '').split('/')[0]}
                  </a>
                </span>
              ))}
              . Terms change; the sheriff&apos;s current conditions of sale always govern.
            </p>
          </>
        ) : (
          <div className="space-y-3 text-slate-600 leading-relaxed mb-10">
            <p>
              We could not read {src.county}{' '}County&apos;s bidder terms on its official website when we checked ({BIDDER_RULES_CHECKED}), so we
              are not printing county-specific rules. Get the current conditions of sale from the{' '}
              <a href={src.sheriffUrl} target="_blank" rel="noopener noreferrer" className={link}>sheriff&apos;s website</a>
              {src.phone ? ` or by calling ${src.phone}` : ''}.
            </p>
            <p>
              For reference, most New Jersey counties we could verify require <strong className="text-slate-900">20% of the winning bid</strong> at
              the close of the sale in certified funds, with a small cash limit if cash is accepted at all, and the{' '}
              <strong className="text-slate-900">balance within 30 days</strong>, with interest if paid late.
            </p>
          </div>
        )}

        {cs && (
          <div className="rounded-2xl border border-slate-200 bg-slate-50 px-6 py-5 mb-10">
            <p className="text-slate-700 leading-relaxed">
              <strong className="text-slate-900">This month:</strong> {num(cs.county.openListings)} sales scheduled in {src.county} County as of{' '}
              {AS_OF_MEDIUM}, {num(cs.county.salesNext30)} of them within 30 days
              {cs.county.nextSale ? `; next sale date on the list ${mediumDate(cs.county.nextSale)}` : ''}. Many listed sales are adjourned or
              resolved before auction.
            </p>
            <Link href={`/sheriff-sales/${src.slug}/`} className="inline-block mt-2 text-sm font-semibold text-slate-900 underline underline-offset-4">
              {src.county} County sheriff sale numbers and towns →
            </Link>
          </div>
        )}

        <h2 className="font-serif text-2xl font-bold text-slate-900 mb-4">What every New Jersey sheriff sale buyer should know</h2>
        <div className="space-y-4 text-slate-600 leading-relaxed mb-10">
          <p>
            <strong className="text-slate-900">You buy what the title search shows.</strong>{' '}Sales are generally subject to unpaid taxes, municipal
            charges and liens the foreclosure did not cut off, and a sheriff&apos;s deed does not guarantee clear title. Run your own title search
            before sale day.
          </p>
          <p>
            <strong className="text-slate-900">No inspections.</strong> Sheriffs do not give access. You are bidding on the outside of the house and
            the public record.
          </p>
          <p>
            <strong className="text-slate-900">The owner can still redeem.</strong> After the sale there is generally a 10-day window for objections
            and for the owner to redeem by paying what is owed, before the deed is delivered.
          </p>
          <p>
            <strong className="text-slate-900">Possession takes a court step.</strong> If the former owner is still living there, the buyer must
            obtain a writ of possession through the court, and tenants have separate protections under New Jersey law.
          </p>
          <p>
            <strong className="text-slate-900">The Community Wealth Preservation Program.</strong>{' '}For many residential sales, state law gives the
            owner, next of kin or a qualifying tenant a first right to buy at the posted upset price, with a smaller deposit and longer time to
            pay. Several counties now apply parts of the program differently after court rulings, so check the county&apos;s current notice.{' '}
            <Link href="/blog/nj-community-wealth-preservation-program-buy-back-home/" className={link}>How the program works</Link>.
          </p>
          <p>
            <strong className="text-slate-900">Dates move.</strong> Listed sales are often adjourned, settled or stayed by bankruptcy. Check the
            official list on sale day.
          </p>
        </div>

        <div className="bg-slate-50 rounded-2xl p-6 mb-10">
          {faq.map((f, i) => (
            <div key={i} className={i > 0 ? 'mt-5 pt-5 border-t border-slate-200' : ''}>
              <h3 className="font-semibold text-slate-900 mb-1.5">{f.q}</h3>
              <p className="text-slate-600 text-sm leading-relaxed">{f.a}</p>
            </div>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row gap-3 mb-6">
          <Link href={`/sheriff-sales/${src.slug}/`} className="bg-slate-900 text-white px-8 py-3.5 rounded-lg font-bold text-center hover:bg-slate-800 transition">
            {src.county} County Sheriff Sales
          </Link>
          <Link href="/reports/nj-foreclosure-index/" className="border border-slate-300 text-slate-900 px-8 py-3.5 rounded-lg font-semibold text-center hover:bg-slate-50 transition">
            NJ Sheriff Sale Index
          </Link>
        </div>
        <p className="text-slate-400 text-xs leading-relaxed">
          Educational information only, not legal, tax or investment advice. NJ Foreclosure Guide does not sell properties or represent bidders.
          The sheriff&apos;s current conditions of sale govern every auction.
        </p>
      </section>
    </div>
  );
}
