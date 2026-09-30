import Link from 'next/link';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import SiteHeader from '../../../components/SiteHeader';
import { getSheriffSource } from '../../../../lib/sheriff-sales';
import { sheriffAngleFor } from '../../../../lib/county-blog';
import { REPORT, REPORT_URL, AS_OF_LONG, AS_OF_MEDIUM, AS_OF_MONTH, mediumDate, num, countyStats, adjournedLine } from '../../../../lib/sheriff-report';
import { TOWN_PAGES, getTownPage, townStats, countyTownTable, townPagesForCounty, TOWN_HELP_POSTS } from '../../../../lib/town-sales';
import { OG_IMAGES } from '../../../../lib/og';
import { fitTitle, fitDescription } from '../../../../lib/seo';

const BASE = 'https://njforeclosureguide.org';

export function generateStaticParams() {
  return TOWN_PAGES.map((t) => ({ county: t.countySlug, town: t.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ county: string; town: string }> }): Promise<Metadata> {
  const { county, town } = await params;
  const t = getTownPage(county, town);
  if (!t) return {};
  const st = townStats(t);
  const url = `${BASE}/sheriff-sales/${t.countySlug}/${t.slug}/`;
  const title = fitTitle(`${t.town} NJ Sheriff Sales | ${AS_OF_MONTH}`);
  const description = st.row
    ? fitDescription(`${num(st.row.count)} sheriff sales are scheduled in ${t.town} (${t.county} County) as of ${AS_OF_MEDIUM}. How to find them on the official list, the next sale dates, and help for homeowners.`)
    : fitDescription(`${t.town} (${t.county} County) sheriff sales: how to find them on the official county list, the next county sale dates, and free help for ${t.town} homeowners facing a sale.`);
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: { images: OG_IMAGES, title, description, url },
  };
}

export default async function TownSheriffPage({ params }: { params: Promise<{ county: string; town: string }> }) {
  const { county, town } = await params;
  const t = getTownPage(county, town);
  const src = t ? getSheriffSource(t.countySlug) : undefined;
  if (!t || !src) notFound();
  const st = townStats(t);
  const cs = countyStats(t.countySlug);
  const c = sheriffAngleFor(t.countySlug);
  const table = countyTownTable(t.countySlug);
  const siblings = townPagesForCounty(t.countySlug).filter((x) => x.slug !== t.slug);
  const helpPost = TOWN_HELP_POSTS[t.slug];
  const adj = cs ? adjournedLine(cs) : null;
  const heldAt = src.address?.startsWith('Sales held at:') ? src.address.replace(/^Sales held at:\s*/, '') : null;

  const countLine = st.row
    ? `${num(st.row.count)} ${st.row.count === 1 ? 'sale is' : 'sales are'} scheduled for properties in ${t.town} on the ${t.county} County list as of ${AS_OF_LONG}${
        st.shareOfCounty !== null ? `, about ${st.shareOfCounty}% of the county's ${num(st.county!.openListings)} scheduled sales` : ''
      }.`
    : st.county
      ? `${t.town} had fewer than ${st.minCell} scheduled sales on the ${t.county} County list as of ${AS_OF_LONG} (we do not publish smaller counts), or was not broken out this month.`
      : `${t.county} County's list was not counted this month.`;

  const faq = [
    {
      q: `How many sheriff sales are scheduled in ${t.town}, NJ?`,
      a: `${countLine} Dates move often because sales are frequently adjourned, so check the official ${t.county} County list for the current status of any property.`,
    },
    {
      q: `Where are ${t.town} sheriff sales held?`,
      a: heldAt
        ? `Properties in ${t.town} are sold by the ${t.county} County Sheriff. The county lists its sales as held at ${heldAt}. Confirm the time and any bidder requirements with the sheriff's office before you go.`
        : `Properties in ${t.town} are sold by the ${t.county} County Sheriff, not by the town. Check the sheriff's website or call the office for the current location, time and bidder requirements.`,
    },
    {
      q: `Can a homeowner in ${t.town} postpone a sheriff sale?`,
      a: 'Generally yes. Under N.J.S.A. 2A:17-36 a homeowner can request two adjournments of up to 30 days each through the county sheriff’s office, usually for a small fee, and a court can order more for cause. Speak with a licensed New Jersey attorney about your specific case.',
    },
  ];

  const url = `${BASE}/sheriff-sales/${t.countySlug}/${t.slug}/`;
  const schemas = [
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: faq.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
    },
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Sheriff sales', item: `${BASE}/sheriff-sales/` },
        { '@type': 'ListItem', position: 2, name: `${t.county} County`, item: `${BASE}/sheriff-sales/${t.countySlug}/` },
        { '@type': 'ListItem', position: 3, name: t.town, item: url },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      name: `${t.town} Sheriff Sales`,
      url,
      ...(st.county ? { dateModified: REPORT.asOfDate } : {}),
      isPartOf: { '@type': 'WebSite', name: 'NJ Foreclosure Guide', url: `${BASE}/` },
      about: { '@type': 'Place', name: `${t.town}, ${t.county} County, New Jersey` },
    },
  ];

  const tiles: { value: string; label: string }[] = [];
  if (st.row) {
    tiles.push({ value: num(st.row.count), label: `scheduled sales in ${t.town}` });
    if (st.row.salesNext30 !== undefined) tiles.push({ value: num(st.row.salesNext30), label: 'with a sale date in the next 30 days' });
    if (st.row.nextSale) tiles.push({ value: mediumDate(st.row.nextSale), label: `next ${t.town} sale date on the list` });
    if (st.shareOfCounty !== null) tiles.push({ value: `${st.shareOfCounty}%`, label: `of all ${t.county} County scheduled sales` });
    if (st.rankInCounty) tiles.push({ value: `#${st.rankInCounty}`, label: `town in ${t.county} County by scheduled sales` });
    if (st.rankStatewide) tiles.push({ value: `#${st.rankStatewide}`, label: 'in New Jersey among the towns we count' });
  }
  if (st.county) {
    if (!st.row?.nextSale && st.county.nextSale) tiles.push({ value: mediumDate(st.county.nextSale), label: `next ${t.county} County sale date` });
    tiles.push({ value: num(st.county.openListings), label: `scheduled sales county-wide` });
  }

  const link = 'text-slate-900 underline underline-offset-4 font-semibold';

  return (
    <div className="min-h-full bg-white">
      {schemas.map((sc, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(sc) }} />
      ))}
      <SiteHeader />

      <section className="bg-gradient-to-b from-slate-950 to-slate-900 text-white py-14 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-amber-400 text-xs font-semibold tracking-[0.25em] uppercase mb-4">
            {t.county} County · Sheriff Sale Directory
          </p>
          <h1 className="font-serif text-4xl font-bold mb-4 tracking-tight">{t.town} Sheriff Sales</h1>
          <p className="text-slate-300 text-lg leading-relaxed">
            How many {t.town} properties are on the {t.county} County sheriff sale list, how to find them on the
            official list, and what a homeowner can do if theirs is one of them.
          </p>
          <div className="mt-7 flex flex-col sm:flex-row gap-3 justify-center">
            <a href={src.salesUrl} target="_blank" rel="noopener noreferrer" className="bg-amber-400 text-slate-950 px-7 py-3.5 rounded-lg font-bold hover:bg-amber-300 transition">
              Open the official {t.county} County list →
            </a>
            <Link href="/command-center?stage=scheduled" className="border border-white/30 px-7 py-3.5 rounded-lg font-bold hover:bg-white/10 transition">
              It&apos;s my home: what can I do?
            </Link>
          </div>
        </div>
      </section>

      <nav className="max-w-3xl mx-auto px-4 pt-6 text-sm text-slate-500" aria-label="Breadcrumb">
        <Link href="/sheriff-sales/" className="underline underline-offset-2">Sheriff sales</Link> ›{' '}
        <Link href={`/sheriff-sales/${t.countySlug}/`} className="underline underline-offset-2">{t.county} County</Link> › {t.town}
      </nav>

      <section className="max-w-3xl mx-auto px-4 py-8">
        <div className="border border-slate-200 rounded-2xl p-6 mb-10">
          <p className="text-amber-700 text-xs font-semibold tracking-[0.2em] uppercase mb-2">From our NJ Sheriff Sale Report</p>
          <h2 className="font-serif text-2xl font-bold text-slate-900 mb-1">{t.town} sheriff sales this month</h2>
          <p className="text-slate-500 text-sm mb-5">
            Updated <time dateTime={REPORT.asOfDate}>{AS_OF_LONG}</time>, from the county&apos;s public CivilView list.
          </p>
          {tiles.length > 0 && (
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-5">
              {tiles.map((x) => (
                <div key={x.label} className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-4">
                  <p className="font-serif text-2xl font-bold text-slate-900 tabular-nums">{x.value}</p>
                  <p className="text-slate-600 text-xs leading-snug mt-1">{x.label}</p>
                </div>
              ))}
            </div>
          )}
          <p className="text-slate-700 leading-relaxed mb-3">{countLine}</p>
          {adj && (
            <p className="text-slate-700 leading-relaxed mb-3">
              Across {t.county} County, {adj}, so the date on the list is often not the final date.
            </p>
          )}
          <p className="text-slate-500 text-xs leading-relaxed">
            Counts are scheduled sheriff sales, not completed sales, for listings whose address on the county list
            shows &ldquo;{t.town}.&rdquo; Mailing names do not always follow municipal borders. We publish counts only,
            never names or addresses; the county&apos;s own list is the authority for any individual sale.
          </p>
        </div>

        <h2 className="font-serif text-2xl font-bold text-slate-900 mb-4">How to find {t.town} listings on the official list</h2>
        <ol className="list-decimal pl-5 space-y-2 text-slate-600 leading-relaxed mb-4">
          <li>
            Open the{' '}
            <a href={src.salesUrl} target="_blank" rel="noopener noreferrer" className={link}>
              {t.county} County sheriff sale list
            </a>
            {src.usesCivilView ? ' on CivilView' : ''}.
          </li>
          {src.usesCivilView ? (
            <>
              <li>Keep the view on upcoming (open) sales, not sold or cancelled ones.</li>
              <li>Pick <strong className="text-slate-900">{t.town}</strong>{' '}in the city filter, or search by street address or the defendant&apos;s name.</li>
              <li>Open a listing&apos;s details to see the current sale date and its status history, including any adjournments.</li>
            </>
          ) : (
            <li>Look for {t.town}{' '}addresses on the county&apos;s list and note the scheduled date.</li>
          )}
          <li>Check again each week. Dates change often, and the notice in the mail may already be out of date.</li>
        </ol>
        <p className="text-slate-600 leading-relaxed mb-10">
          {t.town} properties are sold by the <strong className="text-slate-900">{t.county} County Sheriff</strong>, not by the town.
          {heldAt ? ` The county lists its sales as held at ${heldAt}.` : ''}
          {src.phone ? ` The sheriff's office number is ${src.phone}.` : ''}{' '}
          <Link href={`/sheriff-sales/${t.countySlug}/`} className={link}>All {t.county} County sheriff sale details</Link>
        </p>

        <h2 className="font-serif text-2xl font-bold text-slate-900 mb-4">If it&apos;s your {t.town} home on the list</h2>
        <div className="space-y-4 text-slate-600 leading-relaxed mb-10">
          <p className="rounded-xl bg-amber-50 border border-amber-200 px-4 py-3">
            <strong className="text-slate-900">Have a date?</strong>{' '}
            <Link href="/tools/sheriff-sale-countdown" className={link}>Use the sheriff sale countdown</Link>{' '}
            to see your days left and how far adjournments can generally move it.
          </p>
          <p>
            <strong className="text-slate-900">You generally have time to use.</strong> New Jersey homeowners can
            usually request two adjournments of up to 30 days each through the {`${t.county} County Sheriff's office`}.
            That is often enough to close a sale of the home, finish a reinstatement or loss-mitigation review, or file
            a properly prepared Chapter 13.
          </p>
          <p>
            <strong className="text-slate-900">A sale is not always the end.</strong> Court rules generally allow 10 days
            after the sale for objections and redemption, the buyer still needs a court writ of possession, and any money
            above the judgment is yours to claim.{' '}
            <Link href="/guides/after-sheriff-sale" className={link}>What happens after the sale</Link>.
          </p>
          <p>
            <strong className="text-slate-900">Never pay someone to &ldquo;postpone&rdquo; your sale.</strong> The request is
            yours to make, and upfront fees for foreclosure rescue are generally illegal in New Jersey.
          </p>
        </div>

        {table.length > 1 && (
          <>
            <h2 className="font-serif text-2xl font-bold text-slate-900 mb-4">Other {t.county} County towns</h2>
            <div className="overflow-x-auto border border-slate-200 rounded-xl mb-10">
              <table className="w-full text-sm">
                <thead className="bg-slate-50 text-left text-slate-600">
                  <tr>
                    <th scope="col" className="px-4 py-2 font-semibold">Town</th>
                    <th scope="col" className="px-4 py-2 font-semibold text-right">Scheduled</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 text-slate-700">
                  {table.slice(0, 12).map((row) => {
                    const page = siblings.find((x) => x.town.toLowerCase() === row.town.toLowerCase());
                    const isSelf = row.town.toLowerCase() === t.town.toLowerCase();
                    return (
                      <tr key={row.town} className={isSelf ? 'bg-amber-50' : ''}>
                        <td className="px-4 py-2 text-slate-900">
                          {page ? (
                            <Link href={`/sheriff-sales/${t.countySlug}/${page.slug}/`} className="underline underline-offset-2">{row.town}</Link>
                          ) : (
                            row.town
                          )}
                        </td>
                        <td className="px-4 py-2 text-right tabular-nums font-semibold text-slate-900">{num(row.count)}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </>
        )}

        {c && c.orgs.length > 0 && (
          <>
            <h2 className="font-serif text-2xl font-bold text-slate-900 mb-2">Free help near {t.town}</h2>
            <p className="text-slate-600 text-sm leading-relaxed mb-5">All free. We are not paid by any of them.</p>
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
              <h3 className="font-semibold text-slate-900 mb-1.5">{f.q}</h3>
              <p className="text-slate-600 text-sm leading-relaxed">{f.a}</p>
            </div>
          ))}
        </div>

        <div className="border border-slate-200 rounded-2xl px-6 py-5 mb-10">
          <p className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-3">More for {t.town} homeowners</p>
          <ul className="space-y-2 text-slate-700">
            {helpPost && (
              <li><Link href={`/blog/${helpPost}/`} className="underline underline-offset-4">Foreclosure help in {t.town}: the local guide</Link></li>
            )}
            <li><Link href={`/foreclosure-help/${t.countySlug}/`} className="underline underline-offset-4">Foreclosure help in {t.county} County</Link></li>
            <li><Link href="/tools/sheriff-sale-date" className="underline underline-offset-4">When is my sheriff sale? Find your date</Link></li>
            <li><Link href={REPORT_URL} className="underline underline-offset-4">The statewide NJ Sheriff Sale Report</Link></li>
          </ul>
        </div>

        <div className="flex flex-col sm:flex-row gap-3">
          <Link href="/quiz" className="bg-amber-400 text-slate-950 px-8 py-3.5 rounded-lg font-bold text-center hover:bg-amber-300 transition">
            See My Options, Free
          </Link>
          <Link href={`/sheriff-sales/${t.countySlug}/`} className="border border-slate-300 text-slate-900 px-8 py-3.5 rounded-lg font-semibold text-center hover:bg-slate-50 transition">
            {t.county} County Sheriff Sales
          </Link>
        </div>
        <p className="text-slate-400 text-xs mt-6 leading-relaxed">
          This page is educational information, not legal advice. Deadlines and procedures are case-specific; a licensed
          New Jersey attorney can confirm what applies to yours.
        </p>
      </section>
    </div>
  );
}
