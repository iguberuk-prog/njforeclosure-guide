import Link from 'next/link';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import SiteHeader from '../../components/SiteHeader';
import { SHERIFF_SOURCES, getSheriffSource, SHERIFF_DATA_VERIFIED } from '../../../lib/sheriff-sales';
import { sheriffAngleFor } from '../../../lib/county-blog';
import { OG_IMAGES } from '../../../lib/og';
import { fitTitle, fitDescription } from '../../../lib/seo';
import CountySaleStats from '../../components/CountySaleStats';
import CountySaleCalendar from '../../components/CountySaleCalendar';
import { REPORT, AS_OF_MEDIUM, AS_OF_MONTH, num, countyStats, mediumDate } from '../../../lib/sheriff-report';
import { BIDDER_RULES, BIDDER_RULES_CHECKED } from '../../../lib/bidder-rules';
import { countySheriffNote } from '../../../lib/county-sheriff-notes';
import { helpFor } from '../../../lib/local-help';
import { townPagesForCounty } from '../../../lib/town-sales';

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
  // Counties in the monthly NJ Sheriff Sale Report (CivilView) lead with the
  // live count and the report month; the five counties that publish their
  // lists elsewhere keep the listings-first title and description.
  const stats = countyStats(src.slug);
  const title = stats
    ? fitTitle(`${src.county} County Sheriff Sale List (NJ) | ${AS_OF_MONTH}`)
    : fitTitle(`${src.county} County Sheriff Sale List (NJ) | Official Listings`);
  const description = stats
    ? fitDescription(`${num(stats.county.openListings)} ${src.county} County sheriff sales are scheduled as of ${AS_OF_MEDIUM}. Official listings, next sale date, top towns, and help for homeowners facing a sale.`)
    : fitDescription(`Go straight to the official ${src.county} County sheriff sale listings${src.usesCivilView ? ' (CivilView)' : ''}${src.phone ? `, the sheriff's office number (${src.phone})` : ''}, where sales are held, and how homeowners can check or postpone a sale date under NJ law.`);
  return {
    title,
    description,
    // No hreflang to the Spanish county page: it is noindex since the 2026-10-05 cleanup.
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
  const townPages = townPagesForCounty(src.slug);
  const NOTICE = src.notice;

  const note = countySheriffNote(src.slug);
  const rules = BIDDER_RULES[src.slug];
  const stats = countyStats(src.slug);
  // "Thursday at 12:00 noon" -> "on Thursday at 12:00 noon"; "2:00 p.m. (...)" -> "at 2:00 p.m. (...)".
  const whenHeld = rules?.saleDay
    ? /^\d/.test(rules.saleDay)
      ? `at ${rules.saleDay}`
      : /^(every|first|thursdays|tuesdays|mondays|wednesdays)/i.test(rules.saleDay)
        ? rules.saleDay.charAt(0).toLowerCase() + rules.saleDay.slice(1)
        : `on ${rules.saleDay}`
    : null;

  // County-specific FAQ built from the county's own list and its official
  // conditions of sale, so each page answers with its own facts.
  const faq: { q: string; a: string }[] = [];
  faq.push({
    q: `When is the next ${src.county} County sheriff sale?`,
    a: [
      stats?.county.nextSale
        ? `As of ${AS_OF_MEDIUM}, the next sale date on the official ${src.county} County list was ${mediumDate(stats.county.nextSale)}, and ${num(stats.county.salesNext30)} listed sales were dated within the following 30 days.`
        : `${src.county} County publishes its own list${src.usesCivilView ? ' on CivilView' : ' on the county website'}; check it for the next sale date.`,
      whenHeld ? `The sheriff's office says sales are held ${whenHeld}${rules?.location ? `, at ${rules.location}` : ''}.` : '',
      'Individual dates move often, so confirm any specific sale on the official list.',
    ].filter(Boolean).join(' '),
  });
  if (rules?.depositRule || rules?.depositForm) {
    faq.push({
      q: `What deposit does ${src.county} County require from bidders?`,
      a: [
        rules.depositRule ? `Deposit: ${rules.depositRule}.` : '',
        rules.depositForm ? `Accepted: ${rules.depositForm}.` : '',
        rules.balanceDue ? `Balance: ${rules.balanceDue}.` : '',
        `From the county's official sheriff pages as read on ${BIDDER_RULES_CHECKED}; confirm with the sheriff's office before bidding.`,
      ].filter(Boolean).join(' '),
    });
  }
  if (stats && stats.county.sampleAdjournedPct !== null && stats.county.sampleSize) {
    faq.push({
      q: `How often are ${src.county} County sheriff sales postponed?`,
      a: `In our ${AS_OF_MONTH} sample of ${stats.county.sampleSize} ${src.county} County listings, ${stats.county.sampleAdjournedPct}% had been adjourned at least once, against ${REPORT.statewide.sampleAdjournedPct}% across all ${REPORT.statewide.countiesIncluded} counties in the report. It is a small sample, so treat it as a rough guide.`,
    });
  }


  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faq.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  };

  const pageUrl = `https://njforeclosureguide.org/sheriff-sales/${src.slug}/`;
  const webPageSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: `${src.county} County Sheriff Sales`,
    url: pageUrl,
    // Only counties with this month's report numbers carry a data date.
    ...(countyStats(src.slug) ? { dateModified: REPORT.asOfDate } : {}),
    isPartOf: { '@type': 'WebSite', name: 'NJ Foreclosure Guide', url: 'https://njforeclosureguide.org/' },
    about: { '@type': 'Place', name: `${src.county} County, New Jersey` },
  };

  return (
    <div className="min-h-full bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }} />
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
            {stats
              ? `${num(stats.county.openListings)} sales on the official ${src.county} County list as of ${AS_OF_MEDIUM}, how sale day works here, and what to do if one is your home.`
              : `Where ${src.county} County posts its sale list, how sale day works here, and what to do if one is your home.`}
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
          <p className="text-slate-400 text-sm mt-5">
            <Link href={`/es/ventas-del-sheriff/${src.slug}/`} className="underline underline-offset-2" hrefLang="es">
              Leer en español
            </Link>
          </p>
        </div>
      </section>

      <section className="max-w-3xl mx-auto px-4 py-12">
        {NOTICE && (
          <div className="rounded-2xl border-2 border-amber-400 bg-amber-50 px-6 py-5 mb-10" role="note">
            <p className="font-bold text-slate-900 mb-1">Notice from the county</p>
            <p className="text-slate-700 leading-relaxed">{NOTICE.en}</p>
            <p className="text-slate-500 text-xs mt-2">
              Read on the county&apos;s website on {new Date(`${NOTICE.checked}T12:00:00Z`).toLocaleDateString('en-US', { timeZone: 'UTC', month: 'long', day: 'numeric', year: 'numeric' })}.
            </p>
          </div>
        )}
        <CountySaleStats slug={src.slug} county={src.county} officialUrl={src.salesUrl} />
        <CountySaleCalendar slug={src.slug} county={src.county} />

        {townPages.length > 0 && (
          <div className="border border-slate-200 rounded-2xl px-6 py-5 mb-10">
            <h2 className="font-bold text-slate-900 text-lg mb-3">{src.county} County sheriff sales by town</h2>
            <div className="flex flex-wrap gap-2">
              {townPages.map((t) => (
                <Link key={t.slug} href={`/sheriff-sales/${src.slug}/${t.slug}/`} className="text-sm border border-slate-200 rounded-full px-3 py-1.5 text-slate-700 hover:bg-slate-50">
                  {t.town}
                </Link>
              ))}
            </div>
          </div>
        )}

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
          <p className="text-slate-400 text-xs mt-4">Checked {SHERIFF_DATA_VERIFIED}; the county&apos;s site is the authority.</p>
        </div>

        {note && (
          <>
            <h2 className="font-serif text-2xl font-bold text-slate-900 mb-4">
              Sale day in {src.county}{' '}County
            </h2>
            <p className="text-slate-600 leading-relaxed mb-5">{note.saleDay}</p>
            {rules && (rules.saleDay || rules.location || rules.depositRule || rules.balanceDue) && (
              <dl className="border border-slate-200 rounded-2xl divide-y divide-slate-100 text-sm mb-3">
                {rules.saleDay && (
                  <div className="px-5 py-3 sm:flex sm:gap-4"><dt className="font-semibold text-slate-900 sm:w-32 shrink-0">When</dt><dd className="text-slate-600">{rules.saleDay}</dd></div>
                )}
                {rules.location && (
                  <div className="px-5 py-3 sm:flex sm:gap-4"><dt className="font-semibold text-slate-900 sm:w-32 shrink-0">Where</dt><dd className="text-slate-600">{rules.location}</dd></div>
                )}
                {rules.depositRule && (
                  <div className="px-5 py-3 sm:flex sm:gap-4"><dt className="font-semibold text-slate-900 sm:w-32 shrink-0">Deposit</dt><dd className="text-slate-600">{rules.depositRule}</dd></div>
                )}
                {rules.balanceDue && (
                  <div className="px-5 py-3 sm:flex sm:gap-4"><dt className="font-semibold text-slate-900 sm:w-32 shrink-0">Balance due</dt><dd className="text-slate-600">{rules.balanceDue}</dd></div>
                )}
              </dl>
            )}
            <p className="text-slate-400 text-xs mb-3">
              From the county&apos;s official sheriff pages, read {BIDDER_RULES_CHECKED}. Terms change; confirm with the sheriff&apos;s office.
            </p>
            <p className="text-sm mb-10">
              <Link href={`/sheriff-sales/${src.slug}/how-to-bid/`} className="text-slate-900 underline underline-offset-4 font-semibold">
                All {src.county} County bidder rules →
              </Link>
            </p>
          </>
        )}

        {c && (
          <>
            <h2 className="font-serif text-2xl font-bold text-slate-900 mb-4">
              Foreclosure in {src.county}{' '}County: what&apos;s different here
            </h2>
            <div className="space-y-4 text-slate-600 leading-relaxed mb-10">
              <p>{c.character}</p>
              <p>{c.market}</p>
            </div>
          </>
        )}

        <div className="rounded-2xl border-2 border-amber-300 bg-amber-50 px-6 py-6 mb-10">
          <h2 className="font-serif text-2xl font-bold text-slate-900 mb-3">
            If it&apos;s your home on the {src.county}{' '}County list
          </h2>
          {note && <p className="text-slate-700 leading-relaxed mb-3">{note.ifYours}</p>}
          <p className="text-slate-700 leading-relaxed mb-4">
            Until the auction, and for the short redemption window after it, reinstating, selling the home
            or a Chapter 13 filing can still change the outcome. Never pay anyone to postpone it for you.
          </p>
          <ul className="grid sm:grid-cols-2 gap-x-6 gap-y-2 text-sm">
            <li><Link href="/tools/sheriff-sale-countdown" className="text-slate-900 underline underline-offset-4 font-semibold">Sheriff sale countdown: your days left</Link></li>
            <li><Link href="/blog/sheriff-sale-adjournment-playbook/" className="text-slate-900 underline underline-offset-4 font-semibold">How to request an adjournment</Link></li>
            <li><Link href="/guides/after-sheriff-sale" className="text-slate-900 underline underline-offset-4 font-semibold">What happens after the sale</Link></li>
            <li><Link href="/guides/surplus-funds" className="text-slate-900 underline underline-offset-4 font-semibold">Claiming surplus funds</Link></li>
          </ul>
        </div>

        {(() => {
          const local = helpFor(src.county).filter((o) => o.counties !== 'statewide');
          const statewide = helpFor(src.county).filter((o) => o.counties === 'statewide');
          return (
            <div className="mb-10">
              <h2 className="font-serif text-2xl font-bold text-slate-900 mb-4">
                Free help for {src.county}{' '}County homeowners
              </h2>
              {local.length > 0 && (
                <div className="space-y-3 mb-4">
                  {local.map((org) => (
                    <div key={org.name} className="border border-slate-200 rounded-xl px-5 py-4">
                      <a href={org.url} target="_blank" rel="noopener noreferrer" className="font-bold text-slate-900 text-sm underline underline-offset-4">
                        {org.name}
                      </a>
                      <p className="text-slate-600 text-sm mt-0.5 leading-relaxed">{org.what}</p>
                    </div>
                  ))}
                </div>
              )}
              <p className="text-slate-600 text-sm leading-relaxed">
                {local.length > 0 ? 'Statewide, also free: ' : 'Free statewide options that serve the county: '}
                {statewide.map((org, i) => (
                  <span key={org.name}>
                    {i > 0 && (i === statewide.length - 1 ? ' and ' : ', ')}
                    <a href={org.url} target="_blank" rel="noopener noreferrer" className="text-slate-900 underline underline-offset-4">{org.name}</a>
                  </span>
                ))}
                . None of them pays us.
              </p>
            </div>
          );
        })()}

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
              <li><Link href={`/foreclosure-help/${src.slug}/`} className="underline underline-offset-4">Foreclosure help in {src.county} County: timeline, local help and options</Link></li>
              <li><Link href="/tools/timeline" className="underline underline-offset-4">Where am I in the NJ foreclosure timeline?</Link></li>
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
