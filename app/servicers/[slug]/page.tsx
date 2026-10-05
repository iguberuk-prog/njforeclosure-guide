import Link from 'next/link';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import SiteHeader from '../../components/SiteHeader';
import {
  SERVICERS,
  getServicer,
  telHref,
  phoneLabelFor,
  SERVICER_DATA_VERIFIED,
  SERVICER_DATA_VERIFIED_ISO,
} from '../../../lib/servicers';
import {
  OPTION_EXPLAINERS,
  CALL_PREP,
  DOCUMENTS,
  CALL_SCRIPT,
  CALL_QUESTIONS,
  shortName,
  domainOf,
} from '../../../lib/servicer-guide';
import { OG_IMAGES } from '../../../lib/og';
import { fitTitle, fitDescription } from '../../../lib/seo';

const BASE = 'https://njforeclosureguide.org';

export function generateStaticParams() {
  return SERVICERS.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const s = getServicer(slug);
  if (!s) return {};
  const short = shortName(s.name);
  // "Rocket Mortgage Assistance ...", not "Rocket Mortgage Mortgage Assistance ...".
  const brand = /mortgage/i.test(short) ? short : `${short} Mortgage`;
  const title = fitTitle(`${brand} Assistance Phone Number | Hardship Help`);
  const description = s.phone
    ? fitDescription(`${brand} assistance: ${s.phone}${s.hours ? ` (${s.hours})` : ''}. How to apply, what to say, documents to send, and your NJ foreclosure protections. Verified ${SERVICER_DATA_VERIFIED}.`)
    : fitDescription(`How to reach ${short} about mortgage assistance, how to apply, what to say, documents to send, and your NJ foreclosure protections while they review.`);
  const url = `${BASE}/servicers/${s.slug}/`;
  return {
    title,
    description,
    // Templated page kept for visitors but out of Google's index (2026-10-05 quality cleanup).
    robots: { index: false, follow: true },
    alternates: { canonical: url },
    openGraph: { images: OG_IMAGES, title, description, url },
  };
}

export default async function ServicerPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const s = getServicer(slug);
  if (!s) notFound();
  const short = shortName(s.name);
  const brand = /mortgage/i.test(short) ? short : `${short} Mortgage`;
  const source = domainOf(s.verifiedFrom);
  const others = SERVICERS.filter((x) => x.slug !== s.slug);

  const faq = [
    {
      q: `What is ${short}'s mortgage assistance phone number?`,
      a: s.phone
        ? `${s.phoneLabel ? `${s.phoneLabel}: ` : ''}${s.phone}${s.hours ? ` (${s.hours})` : ''}. ${
            s.phoneType === 'loss-mitigation'
              ? `${short} publishes this number for mortgage assistance.`
              : 'This is the main servicing line; ask for loss mitigation or mortgage assistance.'
          } We read it on ${source ?? `${short}'s own website`} on ${SERVICER_DATA_VERIFIED}. The number printed on your own statement always wins.`
        : `We could not confirm a number on ${short}'s own website, so we do not print one. Use the number on your monthly statement, or ask a free HUD-approved counselor (800-569-4287) to help you reach them.`,
    },
    {
      q: `Can ${short} apply for assistance online?`,
      a:
        s.onlineApp === true
          ? `Yes. ${short}'s own site describes an online way to request assistance.${s.note ? ` ${s.note}` : ''}`
          : s.onlineApp === false
            ? `${short}'s site describes a paper or phone process rather than a fill-in online application.${s.note ? ` ${s.note}` : ''}`
            : `${short}'s site did not make this clear. Ask when you call, and whatever route you use, keep proof of every document you send.`,
    },
    {
      q: `Can ${short} foreclose while my application is being reviewed?`,
      a: `Federal servicing rules generally protect you once a complete application is in. If ${short} receives a complete application more than 37 days before a scheduled sheriff sale, it must evaluate you for every option within 30 days and generally cannot move for a foreclosure judgment or order of sale, or hold the sale, while the review and any appeal are pending. "Complete" is the key word, so send everything at once and keep proof. A licensed New Jersey attorney can confirm how this applies to your case.`,
    },
    {
      q: `Should I pay someone to deal with ${short} for me?`,
      a: `No. Applying for assistance is free, and upfront fees for foreclosure rescue services are generally illegal under federal and New Jersey law. A HUD-approved housing counselor (800-569-4287) will help you prepare and send the application at no cost.`,
    },
  ];

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faq.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
  };
  const breadcrumb = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: `${BASE}/` },
      { '@type': 'ListItem', position: 2, name: 'Mortgage servicers', item: `${BASE}/servicers/` },
      { '@type': 'ListItem', position: 3, name: short, item: `${BASE}/servicers/${s.slug}/` },
    ],
  };
  const webPage = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: `${brand} Assistance`,
    url: `${BASE}/servicers/${s.slug}/`,
    dateModified: SERVICER_DATA_VERIFIED_ISO,
    isPartOf: { '@type': 'WebSite', name: 'NJ Foreclosure Guide', url: `${BASE}/` },
  };

  return (
    <div className="min-h-full bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPage) }} />
      <SiteHeader />

      <section className="bg-gradient-to-b from-slate-950 to-slate-900 text-white py-14 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-amber-400 text-xs font-semibold tracking-[0.25em] uppercase mb-4">
            Servicer guide · Verified {SERVICER_DATA_VERIFIED}
          </p>
          <h1 className="font-serif text-4xl md:text-5xl font-bold mb-4 tracking-tight">
            {brand} Assistance: How to Reach the Hardship Team
          </h1>
          <p className="text-slate-300 text-lg leading-relaxed">
            Behind on a mortgage serviced by {short}? Here is the number to call, what to say, what
            to send, and the New Jersey protections that apply no matter who services your loan.
          </p>
          {s.aliases.length > 0 && (
            <p className="text-slate-400 text-sm mt-4">You may also see: {s.aliases.join(' · ')}</p>
          )}
        </div>
      </section>

      <nav className="max-w-3xl mx-auto px-4 pt-6 text-sm text-slate-500" aria-label="Breadcrumb">
        <Link href="/" className="underline underline-offset-2">Home</Link> ›{' '}
        <Link href="/servicers/" className="underline underline-offset-2">Mortgage servicers</Link> › {short}
      </nav>

      <section className="max-w-3xl mx-auto px-4 py-8">
        {/* Contact card */}
        <div className="border-2 border-slate-900 rounded-2xl p-6 mb-10">
          <p className="text-xs font-semibold uppercase tracking-wider text-slate-500 mb-2">
            {s.phone ? phoneLabelFor(s) : 'Phone'}
          </p>
          {s.phone ? (
            <a href={telHref(s.phone)} className="font-serif text-4xl font-bold text-slate-900 hover:underline">
              {s.phone}
            </a>
          ) : (
            <p className="text-slate-700 leading-relaxed">
              We could not confirm a number on {short}&apos;s own website, so we are not printing one.
              Use the number on your monthly statement.
            </p>
          )}
          <div className="mt-4 space-y-1.5 text-slate-700 text-sm">
            {s.hours && <p><span className="font-semibold text-slate-900">Hours: </span>{s.hours}</p>}
            <p>
              <span className="font-semibold text-slate-900">Online application: </span>
              {s.onlineApp === true ? 'Yes' : s.onlineApp === false ? 'No (paper or phone process)' : 'Not stated on their site'}
            </p>
            {s.assistUrl && (
              <p>
                <span className="font-semibold text-slate-900">Assistance page: </span>
                <a href={s.assistUrl} target="_blank" rel="noopener noreferrer" className="underline underline-offset-4 break-all">
                  {domainOf(s.assistUrl)}
                </a>
              </p>
            )}
            {s.parent && <p><span className="font-semibold text-slate-900">Part of: </span>{s.parent}</p>}
          </div>
          {s.otherLines && s.otherLines.length > 0 && (
            <div className="mt-5 pt-4 border-t border-slate-200">
              <p className="text-xs font-semibold uppercase tracking-wider text-slate-500 mb-2">Other numbers {short} lists</p>
              <ul className="space-y-1 text-sm text-slate-700">
                {s.otherLines.map((l) => (
                  <li key={l.label + l.phone}>
                    {l.label}:{' '}
                    <a href={telHref(l.phone)} className="font-semibold text-slate-900 underline underline-offset-2">{l.phone}</a>
                  </li>
                ))}
              </ul>
            </div>
          )}
          <p className="text-slate-400 text-xs mt-5 leading-relaxed">
            {source
              ? `Read on ${source} on ${SERVICER_DATA_VERIFIED}. Servicers merge and renumber, so the number on your own statement always wins.`
              : 'Servicers merge and renumber, so the number on your own statement always wins.'}
          </p>
        </div>

        {s.note && (
          <>
            <h2 className="font-serif text-2xl font-bold text-slate-900 mb-3">How {short} handles assistance requests</h2>
            <p className="text-slate-600 leading-relaxed mb-10">{s.note}</p>
          </>
        )}

        <h2 className="font-serif text-2xl font-bold text-slate-900 mb-3">
          {s.options.length ? `Options ${short} lists` : 'Options to ask about'}
        </h2>
        <p className="text-slate-600 leading-relaxed mb-5">
          {s.options.length
            ? `${short}'s own assistance page names these options. Which ones you qualify for depends on who owns the loan (Fannie Mae, Freddie Mac, FHA, VA, USDA or a private investor), your income and how far behind you are.`
            : `${short}'s site does not list specific options, but one complete application is normally reviewed for all of these. Which ones fit depends on who owns the loan, your income and how far behind you are.`}
        </p>
        <div className="grid sm:grid-cols-2 gap-3 mb-10">
          {(s.options.length ? s.options : ['Repayment plan', 'Forbearance', 'Loan modification', 'Short sale']).map((o) => (
            <div key={o} className="border border-slate-200 rounded-xl px-4 py-3">
              <p className="font-semibold text-slate-900 text-sm">{o}</p>
              {OPTION_EXPLAINERS[o] && <p className="text-slate-600 text-sm mt-1 leading-relaxed">{OPTION_EXPLAINERS[o]}</p>}
            </div>
          ))}
        </div>

        <h2 className="font-serif text-2xl font-bold text-slate-900 mb-3">Before you call {short}</h2>
        <p className="text-slate-600 leading-relaxed mb-3">Have these in front of you. Ten minutes of prep makes the call shorter and the file stronger.</p>
        <ul className="list-disc pl-5 space-y-1.5 text-slate-600 mb-8">
          {CALL_PREP.map((x) => <li key={x}>{x}</li>)}
        </ul>

        <h3 className="font-bold text-slate-900 text-lg mb-2">What to say</h3>
        <blockquote className="border-l-4 border-amber-400 bg-amber-50 rounded-r-xl px-5 py-4 text-slate-800 leading-relaxed mb-4">
          “{CALL_SCRIPT}”
        </blockquote>
        <p className="text-slate-600 leading-relaxed mb-2">Then ask:</p>
        <ul className="list-disc pl-5 space-y-1.5 text-slate-600 mb-4">
          {CALL_QUESTIONS.map((x) => <li key={x}>{x}</li>)}
        </ul>
        <p className="text-slate-600 leading-relaxed mb-10">
          Write down the date, the name of the person you spoke with and the reference number,
          every time. That log is what you use if anything goes wrong later.
        </p>

        <h2 className="font-serif text-2xl font-bold text-slate-900 mb-3">Documents {short} will usually ask for</h2>
        <ul className="list-disc pl-5 space-y-1.5 text-slate-600 mb-4">
          {DOCUMENTS.map((x) => <li key={x}>{x}</li>)}
        </ul>
        <p className="text-slate-600 leading-relaxed mb-10">
          Send everything in one package, keep copies, and get proof it arrived (an upload
          confirmation, fax receipt or certified mail). Our{' '}
          <Link href="/tools/letter-builder" className="text-slate-900 underline underline-offset-4 font-semibold">free letter builder</Link>{' '}
          writes the hardship letter and the written requests servicers must answer.
        </p>

        <h2 className="font-serif text-2xl font-bold text-slate-900 mb-3">Your protections while {short} reviews you</h2>
        <div className="space-y-4 text-slate-600 leading-relaxed mb-10">
          <p>
            <strong className="text-slate-900">Federal rules (all servicers).</strong> A complete
            application received more than 37 days before a scheduled sale must be evaluated for every
            option within 30 days, and while it is under review the servicer generally cannot move for
            a foreclosure judgment or order of sale, or hold the sale. If it arrives 90 days or more
            before a sale, you can appeal a modification denial. You are also entitled to a single
            point of contact.
          </p>
          <p>
            <strong className="text-slate-900">New Jersey rules.</strong>{' '}A Notice of Intention to
            Foreclose must come at least 30 days before any complaint is filed. Once served, you have
            35 days to answer. Eligible owner-occupants can use the court&apos;s free{' '}
            <Link href="/guides/foreclosure-mediation" className="text-slate-900 underline underline-offset-4">foreclosure mediation program</Link>,
            and you can generally cure the default up to final judgment. {short} cannot shorten any of
            this.
          </p>
          {s.subservicer && (
            <p>
              <strong className="text-slate-900">About subservicers.</strong> {short} manages loans for
              other companies, so your statement may carry a different name. You still apply through
              whoever collects your payments, and the same protections apply.
            </p>
          )}
        </div>

        <div className="rounded-2xl border border-red-200 bg-red-50 px-6 py-5 mb-10">
          <p className="font-bold text-slate-900 mb-2">Scam check</p>
          <ul className="list-disc pl-5 space-y-1.5 text-slate-700 text-sm leading-relaxed">
            <li>Never send mortgage payments to a new company unless you received a formal notice that servicing was transferred. Confirm by calling the number on your last statement.</li>
            <li>If someone calls claiming to be {short}, hang up and call back on the number above or on your statement.</li>
            <li>Nobody legitimate charges an upfront fee to get you a modification or postpone a sale.</li>
          </ul>
          <Link href="/tools/scam-checker" className="inline-block mt-3 text-sm font-semibold text-slate-900 underline underline-offset-4">
            Check an offer with the free scam checker
          </Link>
        </div>

        <div className="bg-slate-50 rounded-2xl p-6 mb-10">
          {faq.map((f, i) => (
            <div key={i} className={i > 0 ? 'mt-5 pt-5 border-t border-slate-200' : ''}>
              <h3 className="font-semibold text-slate-900 mb-1.5">{f.q}</h3>
              <p className="text-slate-600 text-sm leading-relaxed">{f.a}</p>
            </div>
          ))}
        </div>

        <div className="border border-slate-200 rounded-2xl px-6 py-5 mb-10">
          <p className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-3">Next steps</p>
          <ul className="space-y-2 text-slate-700">
            <li><Link href="/tools/sheriff-sale-countdown" className="underline underline-offset-4">Have a sheriff sale date? Use the countdown</Link></li>
            <li><Link href="/tools/catch-up" className="underline underline-offset-4">What would it cost to catch up?</Link></li>
            <li>
              <a href="https://www.hud.gov/i_want_to/talk_to_a_housing_counselor" target="_blank" rel="noopener noreferrer" className="underline underline-offset-4">
                Find a free HUD-approved housing counselor (800-569-4287)
              </a>
            </li>
          </ul>
        </div>

        <div className="bg-slate-900 text-white rounded-2xl p-6 mb-10">
          <p className="leading-relaxed mb-4">
            Not sure which option fits before you call? The free 2-minute assessment tells you which of
            the seven options still work at your stage.
          </p>
          <Link href="/quiz" className="inline-block bg-amber-400 text-slate-950 px-8 py-3.5 rounded-lg font-bold hover:bg-amber-300 transition">
            See My Options, Free
          </Link>
        </div>

        <h2 className="font-bold text-slate-900 text-lg mb-3">Other mortgage servicers</h2>
        <div className="flex flex-wrap gap-2 mb-8">
          {others.map((o) => (
            <Link key={o.slug} href={`/servicers/${o.slug}/`} className="text-sm border border-slate-200 rounded-full px-3 py-1.5 text-slate-700 hover:bg-slate-50">
              {shortName(o.name)}
            </Link>
          ))}
        </div>

        <p className="text-slate-400 text-xs leading-relaxed">
          NJ Foreclosure Guide is not affiliated with {short} and is not paid by any servicer. This page
          is educational information, not legal advice; a licensed New Jersey attorney can confirm what
          applies to your case.
        </p>
      </section>
    </div>
  );
}
