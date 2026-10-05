import Link from 'next/link';
import SiteHeader from '../../components/SiteHeader';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getAllLocations, getLocation, townSlug } from '../../../lib/nj-locations';
import { helpFor } from '../../../lib/local-help';
import { OG_IMAGES } from '../../../lib/og';
import { fitTitle, fitDescription } from '../../../lib/seo';
import { countyHelp, COUNTY_HELP_CHECKED, SJLS_INTAKE, type CountyHelpData } from '../../../lib/county-help-data';
import { countyStats, AS_OF_MEDIUM, mediumDate, num } from '../../../lib/sheriff-report';
import { BIDDER_RULES } from '../../../lib/bidder-rules';
import { getSheriffSource } from '../../../lib/sheriff-sales';
import { sheriffAngleFor } from '../../../lib/county-blog';

export function generateStaticParams() {
  return getAllLocations().map((loc) => ({ slug: loc.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const loc = getLocation(slug);
  if (!loc) return {};
  const help = loc.type === 'county' ? countyHelp(loc.slug) : undefined;
  const title = help
    ? fitTitle(`${loc.name} NJ Foreclosure Help | Free Legal Aid & Counselors`)
    : fitTitle(`Foreclosure Help in ${loc.name}, NJ | Free Guide to Your Options`);
  const description = help
    ? fitDescription(`Free foreclosure help in ${loc.name}, NJ: ${help.legal.name.split(',')[0]} (${help.legal.phone}), ${help.counselors.length ? `${help.counselors.length} HUD-approved counselor${help.counselors.length > 1 ? 's' : ''} in the county` : 'HUD counseling by phone'}, which court hears your case, and the sheriff sale list.`)
    : fitDescription(`Facing foreclosure in ${loc.name}, New Jersey? A free, independent guide to all 7 options: loan modification, forbearance, short sale, cash sale, Chapter 13 and more. See where you stand in 2 minutes.`);
  // Town pages (2026-09-24): 121 pages sharing ~70% identical text, with the
  // town name swapped in. Google left most of them "Discovered - currently
  // not indexed", and that pattern (many near-identical city pages) is what
  // its doorway-page policy describes, a risk to the whole domain. They stay
  // live for visitors and keep passing links (follow), but are kept out of
  // the index and the sitemap. The 21 county pages remain the indexed hubs.
  // Reversible: give a town genuinely local content, then drop this line.
  const robots = loc.type === 'county' ? undefined : { index: false, follow: true };
  return {
    title,
    description,
    ...(robots ? { robots } : {}),
    alternates: { canonical: `https://njforeclosureguide.org/foreclosure-help/${loc.slug}/` },
    openGraph: { images: OG_IMAGES, title, description, url: `https://njforeclosureguide.org/foreclosure-help/${loc.slug}/` },
  };
}

export default async function LocationPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const loc = getLocation(slug);
  if (!loc) notFound();

  const isCounty = loc.type === 'county';
  const countyData = isCounty ? countyHelp(loc.slug) : undefined;
  if (isCounty && countyData) return <CountyHub loc={loc} help={countyData} />;
  const displayName = loc.name;
  const countyName = loc.countyName;

  const faq = [
    {
      q: `How does foreclosure work in ${displayName}?`,
      a: `New Jersey is a judicial foreclosure state, which means every foreclosure${isCounty ? ` in ${displayName}` : ` in ${displayName} (${countyName} County)`} must go through the courts. The lender first sends a Notice of Intention at least 30 days before filing, then files a complaint in Superior Court. You have 35 days to respond after being served. The full process typically takes many months, which means you have time to act if you start now.`,
    },
    {
      q: `Can I stop a sheriff sale in ${countyName} County?`,
      a: `Often, yes. New Jersey homeowners can typically request adjournments of a scheduled sheriff sale, a Chapter 13 bankruptcy filing generally pauses the sale through an automatic stay, and a completed sale of the home before the auction date stops the process entirely. Check with the ${countyName} County Sheriff's Office for current sale schedules and speak with a licensed attorney about your specific case.`,
    },
    {
      q: `What are my options if I'm behind on my mortgage in ${displayName}?`,
      a: `Depending on your situation and how far along the process is, options include loan modification, refinancing, forbearance, a short sale, home equity solutions, Chapter 13 bankruptcy protection, or a fast cash sale. Our free 2-minute assessment shows which options fit your circumstances.`,
    },
    {
      q: `Is this service really free for ${displayName} homeowners?`,
      a: `Yes. We take no referral fees, no commissions and no advertising money from anyone. One destination on the site is a brokerage the people behind this guide have an ownership interest in, and it is labeled as a related business wherever it appears. You are never charged, and you are free to work with any attorney or company you choose.`,
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

      {/* Hero */}
      <section className="bg-gradient-to-b from-slate-950 to-slate-900 text-white py-20 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-amber-400 text-xs font-semibold tracking-[0.25em] uppercase mb-4">
            {isCounty ? `Serving All of ${displayName}` : `${displayName} · ${countyName} County`}
          </p>
          <h1 className="font-serif text-4xl md:text-5xl font-bold mb-5 tracking-tight">
            Foreclosure Help in {displayName}, NJ
          </h1>
          <p className="text-slate-300 text-lg leading-relaxed mb-8">
            If you're behind on your mortgage or facing foreclosure {isCounty ? `in ${displayName}` : `in ${displayName}`}, you have more options than you think. We explain all 7 solutions in plain English, free and confidential, then connect you with vetted attorneys and real estate professionals who work with {isCounty ? countyName + ' County' : displayName} homeowners.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/quiz" className="bg-amber-400 text-slate-950 px-10 py-4 rounded-lg font-bold hover:bg-amber-300 transition">
              See My Options, Free
            </Link>
            <Link href="/tools/timeline" className="border border-white/30 bg-white/5 text-white px-10 py-4 rounded-lg font-semibold hover:bg-white/15 transition">
              Where Am I in the Process?
            </Link>
          </div>
        </div>
      </section>

      {/* Local process */}
      <section className="max-w-3xl mx-auto px-4 py-16">
        <h2 className="font-serif text-3xl font-bold text-slate-900 mb-6">
          How Foreclosure Works in {isCounty ? displayName : `${countyName} County`}
        </h2>
        <div className="prose-slate space-y-4 text-slate-600 leading-relaxed">
          <p>
            New Jersey is a judicial foreclosure state. That means a lender cannot simply take a home{isCounty ? ` in ${displayName}` : ` in ${displayName}`}: it must sue in the Superior Court of New Jersey and win. Uncontested cases are handled on paper by the Office of Foreclosure in Trenton; contested cases go to a judge in the {countyName} County vicinage, and sheriff sales are conducted by the {countyName} County Sheriff's Office.
          </p>
          <p>
            The process has defined stages, and each stage still leaves you with options. Before filing anything, your lender must send a Notice of Intention to Foreclose at least 30 days in advance. After a complaint is filed and served, you have 35 days to respond. Contested cases and court backlogs mean the full process usually takes many months. That time is your most valuable asset, and the sooner you act, the more choices you keep.
          </p>
          <p>
            Homeowners{isCounty ? ` across ${displayName}` : ` in ${displayName}`} have used all 7 of the solutions we cover: loan modification, refinancing, forbearance, short sale, home equity solutions, Chapter 13 bankruptcy protection, and fast cash sales that close in 14 to 30 days.
          </p>
        </div>

        <div className="mt-8 border border-slate-200 rounded-xl px-5 py-4 bg-slate-50">
          <p className="text-slate-700 text-sm leading-relaxed">
            <strong className="text-slate-900">Has a sheriff sale been scheduled?</strong>{' '}
            <Link
              href={`/sheriff-sales/${isCounty ? loc.slug : `${countyName.toLowerCase().replace(/\s+/g, '-')}-county`}/`}
              className="text-slate-900 underline underline-offset-4 font-semibold"
            >
              Check {countyName}{' '}County&apos;s official sale listings and adjournment process
            </Link>
            , verified contacts included.
          </p>
        </div>

        {/* Solutions strip */}
        <div className="grid sm:grid-cols-2 gap-3 mt-10">
          {[
            ['Loan Modification', 'Lower your payment, keep your home'],
            ['Forbearance', 'Pause payments during temporary hardship'],
            ['Refinancing', 'Replace your loan with better terms'],
            ['Short Sale', 'Sell with lender approval if underwater'],
            ['Chapter 13 Bankruptcy', 'Court protection while you restructure'],
            ['Cash Sale', 'Close in 14-30 days, keep your equity'],
          ].map(([title, desc], i) => (
            <div key={i} className="border border-slate-200 rounded-xl px-5 py-4">
              <p className="font-bold text-slate-900 text-sm">{title}</p>
              <p className="text-slate-500 text-sm mt-0.5">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Free local help — the county's actual agencies, then the statewide
          layer. This block is what makes each location page locally true
          rather than a template with the town name swapped in. */}
      <section className="max-w-3xl mx-auto px-4 pb-16">
        <h2 className="font-serif text-2xl font-bold text-slate-900 mb-2">
          Free Local Help for {countyName} County Homeowners
        </h2>
        <p className="text-slate-600 text-sm leading-relaxed mb-6">
          Before paying anyone, know that all of the following are free. We are not paid by any of
          them; they are listed because they help.
        </p>
        <div className="space-y-3">
          {helpFor(countyName).map((org) => (
            <div key={org.name} className="border border-slate-200 rounded-xl px-5 py-4 flex flex-col sm:flex-row sm:items-start gap-1 sm:gap-4">
              <div className="flex-1">
                <p className="font-bold text-slate-900 text-sm">{org.name}</p>
                <p className="text-slate-600 text-sm mt-0.5 leading-relaxed">{org.what}</p>
              </div>
              <a
                href={org.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-900 text-sm font-semibold underline underline-offset-4 whitespace-nowrap mt-1"
              >
                Visit site →
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-slate-50 py-16 px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-serif text-3xl font-bold text-slate-900 mb-8">
            {displayName} Foreclosure Questions
          </h2>
          <div className="space-y-3">
            {faq.map((item, idx) => (
              <details key={idx} className="group bg-white rounded-xl px-6 py-5 border border-slate-200 cursor-pointer">
                <summary className="font-semibold text-slate-900 flex justify-between items-center gap-4 select-none list-none">
                  <span>{item.q}</span>
                  <span className="flex-shrink-0 w-6 h-6 flex items-center justify-center rounded-full border border-slate-300 text-slate-500 group-open:bg-slate-900 group-open:text-white transition text-xs">+</span>
                </summary>
                <p className="text-slate-600 mt-4 leading-relaxed text-[15px]">{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Towns list for county pages */}
      {isCounty && (
        <section className="max-w-3xl mx-auto px-4 py-14">
          <h2 className="font-serif text-2xl font-bold text-slate-900 mb-5">Towns We Serve in {displayName}</h2>
          <div className="flex flex-wrap gap-2">
            {loc.towns.map((t) => (
              <Link
                key={t}
                href={`/foreclosure-help/${townSlug(t)}/`}
                className="px-4 py-2 bg-white border border-slate-200 rounded-full text-sm font-medium text-slate-700 hover:border-slate-900 transition"
              >
                {t}
              </Link>
            ))}
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="max-w-3xl mx-auto px-4 pb-20 pt-6">
        <div className="bg-slate-950 rounded-2xl text-white text-center px-8 py-14">
          <h2 className="font-serif text-3xl font-bold mb-4">Get Your Options in 2 Minutes</h2>
          <p className="text-slate-300 mb-8 max-w-xl mx-auto">
            Free, confidential, and specific to your situation. Then, if you want, we introduce you to a vetted professional who serves {isCounty ? displayName : `${displayName} and the rest of ${countyName} County`}.
          </p>
          <Link href="/quiz" className="inline-block bg-amber-400 text-slate-950 px-12 py-4 rounded-lg font-bold hover:bg-amber-300 transition text-lg">
            Start Free Assessment
          </Link>
        </div>

        <p className="text-center mt-8">
          <Link href="/foreclosure-help/" className="text-slate-500 hover:text-slate-700 text-sm underline underline-offset-2">
            See all New Jersey counties and towns we serve
          </Link>
        </p>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 text-slate-500 py-10 px-4 text-center text-xs">
        <p className="mb-2">© 2026 NJ Foreclosure Guide. All rights reserved.</p>
        <p className="max-w-2xl mx-auto leading-relaxed">
          Independent educational resource. Not a law firm, lender, or real estate company. We take no referral fees, no commissions and no advertising money from anything listed. One destination is a related business, labeled wherever it appears. You are never charged. Always consult licensed professionals about your specific situation.
        </p>
      </footer>
    </div>
  );
}

/**
 * County hub (2026-10-05 rewrite). The old county pages were 88% shared text
 * with the county name swapped in. This version leads with what is actually
 * local and verified: the court vicinage, the legal aid office, the county's
 * social services agency, HUD-approved counselors in the county, the county's
 * sheriff sale list, and its towns. Data: lib/county-help-data.ts.
 */
function CountyHub({ loc, help }: { loc: NonNullable<ReturnType<typeof getLocation>>; help: CountyHelpData }) {
  const county = loc.countyName;
  const stats = countyStats(loc.slug);
  const rules = BIDDER_RULES[loc.slug];
  const sheriff = getSheriffSource(loc.slug);
  const towns = stats?.towns.slice(0, 3) ?? [];
  const isSjls = /South Jersey Legal Services/.test(help.legal.name);
  const angle = sheriffAngleFor(loc.slug);

  // The legal aid, counseling, emergency and court facts are shown once, in
  // the cards above; the FAQ only carries the county's own sale numbers.
  const faq: { q: string; a: string }[] = [];
  if (stats) {
    faq.push({
      q: `How many sheriff sales are scheduled in ${county} County?`,
      a: `${num(stats.county.openListings)} were on the official list as of ${AS_OF_MEDIUM}${stats.county.nextSale ? `, with the next sale date on ${mediumDate(stats.county.nextSale)}` : ''}${towns.length ? `. The most listings were in ${towns.map((t) => `${t.town} (${num(t.count)})`).join(', ')}` : ''}. Our county sheriff sale page has the official list and how sale day works.`,
    });
  }

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faq.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
  };

  return (
    <div className="min-h-full bg-white">
      {faq.length > 0 && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />}
      <SiteHeader />

      <section className="bg-gradient-to-b from-slate-950 to-slate-900 text-white py-16 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-amber-400 text-xs font-semibold tracking-[0.25em] uppercase mb-4">{county} County, New Jersey</p>
          <h1 className="font-serif text-4xl md:text-5xl font-bold mb-5 tracking-tight">Foreclosure Help in {county}{' '}County, NJ</h1>
          <p className="text-slate-300 text-lg leading-relaxed mb-8">
            The free help that actually serves {county}{' '}County: legal aid in {help.legal.city}
            {help.counselors.length > 0 ? `, ${help.counselors.length} HUD-approved housing counselor${help.counselors.length > 1 ? 's' : ''} in the county` : ''}, the
            county&apos;s emergency assistance office, and where your case will be heard.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/quiz" className="bg-amber-400 text-slate-950 px-10 py-4 rounded-lg font-bold hover:bg-amber-300 transition">See My Options, Free</Link>
            <Link href={`/sheriff-sales/${loc.slug}/`} className="border border-white/30 bg-white/5 text-white px-10 py-4 rounded-lg font-semibold hover:bg-white/15 transition">{county} sheriff sale list</Link>
          </div>
        </div>
      </section>

      <section className="max-w-3xl mx-auto px-4 py-14">
        <h2 className="font-serif text-3xl font-bold text-slate-900 mb-6">Free help in {county}{' '}County</h2>
        <div className="space-y-4">
          <div className="border border-slate-200 rounded-2xl px-6 py-5">
            <p className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-1">Free legal aid</p>
            <a href={help.legal.url} target="_blank" rel="noopener noreferrer" className="font-bold text-slate-900 underline underline-offset-4">{help.legal.name}</a>
            <p className="text-slate-600 text-sm mt-1">{help.legal.city} · {help.legal.phone}{isSjls ? ` · central intake ${SJLS_INTAKE}` : ''}</p>
            <p className="text-slate-600 text-sm mt-2 leading-relaxed">Free foreclosure defense if you meet the income rules; call before your 35-day answer deadline.</p>
          </div>
          <div className="border border-slate-200 rounded-2xl px-6 py-5">
            <p className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-1">HUD-approved housing counseling</p>
            {help.counselors.length > 0 ? (
              <ul className="space-y-2 mt-1">
                {help.counselors.map((c) => (
                  <li key={c.name} className="text-sm">
                    <a href={c.url} target="_blank" rel="noopener noreferrer" className="font-bold text-slate-900 underline underline-offset-4">{c.name}</a>
                    <span className="text-slate-600"> · {c.town}</span>
                  </li>
                ))}
              </ul>
            ) : null}
            {help.counselorNote && <p className="text-slate-600 text-sm mt-2 leading-relaxed">{help.counselorNote}</p>}
          </div>
          <div className="border border-slate-200 rounded-2xl px-6 py-5">
            <p className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-1">Emergency assistance</p>
            <a href={help.social.url} target="_blank" rel="noopener noreferrer" className="font-bold text-slate-900 underline underline-offset-4">{help.social.name}</a>
            <p className="text-slate-600 text-sm mt-1">{help.social.phone}</p>
          </div>
        </div>
        <p className="text-slate-500 text-sm mt-4 leading-relaxed">
          Statewide, also free: the <a href="https://www.njcourts.gov/self-help/foreclosure" target="_blank" rel="noopener noreferrer" className="underline underline-offset-4">NJ Courts Foreclosure Mediation Program</a> and HUD&apos;s counselor line, 800-569-4287. None of these organizations pays us. Checked {COUNTY_HELP_CHECKED}; call ahead, as offices and hours change.
        </p>
      </section>

      <section className="max-w-3xl mx-auto px-4 pb-14">
        <h2 className="font-serif text-3xl font-bold text-slate-900 mb-6">Where a {county}{' '}County case goes</h2>
        <dl className="border border-slate-200 rounded-2xl divide-y divide-slate-100 text-sm">
          <div className="px-5 py-3 sm:flex sm:gap-4"><dt className="font-semibold text-slate-900 sm:w-44 shrink-0">Court vicinage</dt><dd className="text-slate-600">{help.vicinage}; county seat {loc.countySeat}</dd></div>
          <div className="px-5 py-3 sm:flex sm:gap-4"><dt className="font-semibold text-slate-900 sm:w-44 shrink-0">Uncontested cases</dt><dd className="text-slate-600">Office of Foreclosure, Trenton (handled on paper)</dd></div>
          <div className="px-5 py-3 sm:flex sm:gap-4"><dt className="font-semibold text-slate-900 sm:w-44 shrink-0">Contested cases</dt><dd className="text-slate-600">Chancery Division, General Equity, {help.vicinage}</dd></div>
          <div className="px-5 py-3 sm:flex sm:gap-4"><dt className="font-semibold text-slate-900 sm:w-44 shrink-0">Sheriff sales</dt><dd className="text-slate-600">{county} County Sheriff&apos;s Office{rules?.saleDay ? `; ${rules.saleDay}` : ''}{sheriff?.usesCivilView ? ' (list on CivilView)' : ''}</dd></div>
          {stats && (
            <div className="px-5 py-3 sm:flex sm:gap-4"><dt className="font-semibold text-slate-900 sm:w-44 shrink-0">Sales on the list</dt><dd className="text-slate-600">{num(stats.county.openListings)} as of {AS_OF_MEDIUM}{towns.length ? `; most in ${towns.map((t) => t.town).join(', ')}` : ''}</dd></div>
          )}
        </dl>
        {sheriff?.notice && (
          <p className="mt-4 rounded-xl border border-amber-300 bg-amber-50 px-4 py-3 text-sm text-slate-700">{sheriff.notice.en}</p>
        )}
        <p className="text-sm mt-4">
          <Link href={`/sheriff-sales/${loc.slug}/`} className="text-slate-900 underline underline-offset-4 font-semibold">{county} County sheriff sales: the official list and how sale day works →</Link>
        </p>
      </section>

      <section className="max-w-3xl mx-auto px-4 pb-14">
        <h2 className="font-serif text-2xl font-bold text-slate-900 mb-4">The local market and your options</h2>
        {angle && <p className="text-slate-600 leading-relaxed mb-4">{angle.market}</p>}
        <div className="flex flex-wrap gap-3 text-sm">
          <Link href="/quiz" className="underline underline-offset-4 font-semibold text-slate-900">Free 2-minute assessment</Link>
          <Link href="/tools/timeline" className="underline underline-offset-4 font-semibold text-slate-900">NJ foreclosure timeline</Link>
          <Link href="/guides/foreclosure-mediation" className="underline underline-offset-4 font-semibold text-slate-900">How mediation works</Link>
        </div>
      </section>

      {faq.length > 0 && <section className="bg-slate-50 py-14 px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-serif text-3xl font-bold text-slate-900 mb-8">{county}{' '}County foreclosure questions</h2>
          <div className="space-y-3">
            {faq.map((item) => (
              <details key={item.q} className="group bg-white rounded-xl px-6 py-5 border border-slate-200 cursor-pointer">
                <summary className="font-semibold text-slate-900 flex justify-between items-center gap-4 select-none list-none">
                  <span>{item.q}</span>
                  <span className="flex-shrink-0 w-6 h-6 flex items-center justify-center rounded-full border border-slate-300 text-slate-500 group-open:bg-slate-900 group-open:text-white transition text-xs">+</span>
                </summary>
                <p className="text-slate-600 mt-4 leading-relaxed text-[15px]">{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>}

      <section className="max-w-3xl mx-auto px-4 py-12">
        <h2 className="font-serif text-2xl font-bold text-slate-900 mb-5">Towns in {county}{' '}County</h2>
        <div className="flex flex-wrap gap-2">
          {loc.towns.map((t) => (
            <Link key={t} href={`/foreclosure-help/${townSlug(t)}/`} className="px-4 py-2 bg-white border border-slate-200 rounded-full text-sm font-medium text-slate-700 hover:border-slate-900 transition">{t}</Link>
          ))}
        </div>
        <p className="text-slate-400 text-xs mt-8 leading-relaxed">
          Educational information, not legal advice. A licensed New Jersey attorney can confirm what applies to your case.
        </p>
      </section>
    </div>
  );
}
