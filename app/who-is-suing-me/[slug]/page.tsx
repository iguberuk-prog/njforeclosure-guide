import Link from 'next/link';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import SiteHeader from '../../components/SiteHeader';
import { PLAINTIFFS, getPlaintiff, plaintiffCount, MERS_SERVICERID_URL, MERS_SERVICERID_PHONE } from '../../../lib/plaintiffs';
import { getServicer, telHref } from '../../../lib/servicers';
import { shortName } from '../../../lib/servicer-guide';
import { REPORT, AS_OF_LONG, num } from '../../../lib/sheriff-report';
import { OG_IMAGES } from '../../../lib/og';
import { fitTitle, fitDescription } from '../../../lib/seo';

const BASE = 'https://njforeclosureguide.org';

export function generateStaticParams() {
  return PLAINTIFFS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const p = getPlaintiff(slug);
  if (!p) return {};
  const n = plaintiffCount(p);
  const title = fitTitle(`${p.name} Foreclosure in NJ: Who They Are | What to Do`);
  const description = fitDescription(
    `Why ${p.name} is named in your New Jersey foreclosure${n ? ` (${num(n)} scheduled NJ sheriff sales)` : ''}, who actually services the loan, how to reach them, and your rights no matter who the plaintiff is.`,
  );
  const url = `${BASE}/who-is-suing-me/${p.slug}/`;
  // Templated page kept for visitors but out of Google's index (2026-10-05 quality cleanup).
  return { title, description, robots: { index: false, follow: true }, alternates: { canonical: url }, openGraph: { images: OG_IMAGES, title, description, url } };
}

export default async function PlaintiffPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const p = getPlaintiff(slug);
  if (!p) notFound();
  const n = plaintiffCount(p);
  const base = p.name.replace(', as trustee', '');
  const label = p.kind === 'trustee' ? `${base} as trustee` : p.name;
  const sv = p.servicerSlug ? getServicer(p.servicerSlug) : undefined;
  const total = REPORT.statewide.openListings;
  const others = PLAINTIFFS.filter((x) => x.slug !== p.slug);
  const link = 'text-slate-900 underline underline-offset-4 font-semibold';

  const faq = [
    {
      q: `Why is ${label} foreclosing on my home?`,
      a:
        p.kind === 'trustee'
          ? `Your loan was most likely placed in a trust after closing, and ${p.name.replace(', as trustee', '')} is the trust's trustee. The trustee brings the case in its name on behalf of the trust's investors, while a separate servicer manages your account. The plaintiff must still prove in court that it has the right to enforce your loan.`
          : p.kind === 'agency'
            ? `${p.name} is named because it owns or holds your loan. A servicer handles the day-to-day account, and that servicer is who reviews workout applications.`
            : `${p.name} is named because it services your loan and is enforcing it, either for itself or for the loan's owner. Its loss mitigation team is where workout applications go.`,
    },
    {
      q: `Is a foreclosure from ${label} a scam?`,
      a: 'A foreclosure complaint from an unfamiliar name is usually real, because loans are routinely sold and placed in trusts. You can confirm by checking the docket number (it starts with “F-”) with the court. Be careful with anyone who contacts you claiming to represent the plaintiff and asks for money outside your normal servicer payment channels.',
    },
    {
      q: 'Does it change my rights that I never borrowed from this company?',
      a: 'No. The Notice of Intention requirement, your 35 days to answer the complaint, the court’s free mediation program for eligible homeowners, your right to cure the default up to final judgment, and your adjournment rights at the sheriff sale all apply no matter who the plaintiff is.',
    },
  ];

  const url = `${BASE}/who-is-suing-me/${p.slug}/`;
  const schemas = [
    { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faq.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })) },
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Who is suing me?', item: `${BASE}/who-is-suing-me/` },
        { '@type': 'ListItem', position: 2, name: p.name, item: url },
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
          <p className="text-amber-400 text-xs font-semibold tracking-[0.25em] uppercase mb-4">Who is suing me?</p>
          <h1 className="font-serif text-4xl md:text-5xl font-bold mb-4 tracking-tight">Why Is {p.name} Foreclosing on My NJ Home?</h1>
          <p className="text-slate-300 text-lg leading-relaxed">
            Who {p.name.replace(', as trustee', '')} is in your case, who actually handles your loan, how to reach them, and
            the rights you have no matter whose name is on the complaint.
          </p>
        </div>
      </section>

      <nav className="max-w-3xl mx-auto px-4 pt-6 text-sm text-slate-500" aria-label="Breadcrumb">
        <Link href="/who-is-suing-me/" className="underline underline-offset-2">Who is suing me?</Link> › {p.name}
      </nav>

      <section className="max-w-3xl mx-auto px-4 py-8">
        {n !== null && (
          <div className="rounded-2xl border border-slate-200 bg-slate-50 px-6 py-5 mb-10">
            <p className="font-serif text-3xl font-bold text-slate-900 tabular-nums">{num(n)}</p>
            <p className="text-slate-700 mt-1 leading-relaxed">
              scheduled New Jersey sheriff sales named {p.name} as plaintiff, out of {num(total)} across the{' '}
              {REPORT.statewide.countiesIncluded} counties we count (as of {AS_OF_LONG}). You are far from alone.
            </p>
            <Link href="/reports/nj-sheriff-sales/" className="inline-block mt-2 text-sm font-semibold text-slate-900 underline underline-offset-4">
              From our monthly NJ Sheriff Sale Report
            </Link>
          </div>
        )}

        <h2 className="font-serif text-2xl font-bold text-slate-900 mb-3">Who {p.name.replace(', as trustee', '')} is in your case</h2>
        <p className="text-slate-600 leading-relaxed mb-4">{p.who}</p>
        <p className="text-slate-600 leading-relaxed mb-2">On court papers the name often looks like:</p>
        <ul className="list-disc pl-5 space-y-1 text-slate-600 text-sm mb-10">
          {p.appearsAs.map((a) => <li key={a}><span className="font-mono text-[13px]">{a}</span></li>)}
        </ul>

        <h2 className="font-serif text-2xl font-bold text-slate-900 mb-3">Who you actually deal with</h2>
        {sv ? (
          <div className="border-2 border-slate-900 rounded-2xl p-6 mb-10">
            <p className="text-slate-700 leading-relaxed mb-3">
              For workouts, the door is <strong className="text-slate-900">{shortName(sv.name)}</strong>&apos;s loss mitigation team, unless your
              statement shows a different servicer.
            </p>
            {sv.phone && (
              <p className="mb-3">
                <a href={telHref(sv.phone)} className="font-serif text-3xl font-bold text-slate-900 hover:underline">{sv.phone}</a>
              </p>
            )}
            <Link href={`/servicers/${sv.slug}/`} className={link}>
              {shortName(sv.name)}: what to say, documents to send, and your protections →
            </Link>
          </div>
        ) : (
          <div className="space-y-4 text-slate-600 leading-relaxed mb-10">
            <p>
              {p.kind === 'trustee'
                ? `As trustee, ${base} does not manage your account day to day. The company that does is your servicer: whoever you send payments to. Three ways to confirm who that is:`
                : `${p.name} owns the loan but a servicer runs the account. Three ways to confirm who that is:`}
            </p>
            <ol className="list-decimal pl-5 space-y-2">
              <li><strong className="text-slate-900">Your latest mortgage statement</strong> names the servicer and its phone number.</li>
              <li>
                <strong className="text-slate-900">MERS ServicerID</strong> is a free lookup of the current servicer and investor for loans
                registered on the MERS System:{' '}
                <a href={MERS_SERVICERID_URL} target="_blank" rel="noopener noreferrer" className={link}>mers-servicerid.org</a> or {MERS_SERVICERID_PHONE}.
              </li>
              <li>
                <strong className="text-slate-900">A written request for information</strong> to the servicer: federal rules generally require
                it to tell you who owns the loan within 10 business days.{' '}
                <Link href="/tools/letter-builder" className={link}>Build the letter free</Link>.
              </li>
            </ol>
            <p>
              Then find that company in our{' '}
              <Link href="/servicers/" className={link}>directory of 44 servicers</Link>, with verified hardship numbers.
            </p>
          </div>
        )}

        <h2 className="font-serif text-2xl font-bold text-slate-900 mb-3">What the name on the complaint does not change</h2>
        <div className="space-y-3 text-slate-600 leading-relaxed mb-10">
          <p>
            Whoever the plaintiff is, New Jersey gives you the same protections: 35 days to answer once you are served, the court&apos;s free{' '}
            <Link href="/guides/foreclosure-mediation" className={link}>foreclosure mediation</Link> for eligible homeowners, a right to cure
            the default up to final judgment, and generally two adjournments of up to 30 days each if a sheriff sale is scheduled.
          </p>
          <p>
            The plaintiff must also prove it has the right to enforce your loan. If you contest the case, a New Jersey attorney can ask for
            proof of standing and the chain of assignments. Legal Services of New Jersey (1-888-576-5529) helps homeowners who qualify for free.
          </p>
        </div>

        <div className="rounded-2xl border border-red-200 bg-red-50 px-6 py-5 mb-10">
          <p className="font-bold text-slate-900 mb-2">Scam check</p>
          <p className="text-slate-700 text-sm leading-relaxed">
            Scammers read court filings and sheriff sale lists too. Never pay anyone who contacts you claiming to act for {p.name.replace(', as trustee', '')}{' '}
            outside your normal payment channel, and never pay an upfront fee to &ldquo;save&rdquo; your home.{' '}
            <Link href="/tools/scam-checker" className="font-semibold underline underline-offset-4">Check an offer</Link>.
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

        <div className="bg-slate-900 text-white rounded-2xl p-6 mb-10">
          <p className="leading-relaxed mb-4">Not sure what to do first? The free 2-minute assessment shows which options still fit at your stage.</p>
          <div className="flex flex-col sm:flex-row gap-3">
            <Link href="/quiz" className="bg-amber-400 text-slate-950 px-8 py-3.5 rounded-lg font-bold text-center hover:bg-amber-300 transition">See My Options, Free</Link>
            <Link href="/tools/sheriff-sale-date" className="border border-white/30 px-8 py-3.5 rounded-lg font-semibold text-center hover:bg-white/10 transition">Find my sale date</Link>
          </div>
        </div>

        <h2 className="font-bold text-slate-900 text-lg mb-3">Other plaintiffs on NJ sale lists</h2>
        <div className="flex flex-wrap gap-2 mb-8">
          {others.map((o) => (
            <Link key={o.slug} href={`/who-is-suing-me/${o.slug}/`} className="text-sm border border-slate-200 rounded-full px-3 py-1.5 text-slate-700 hover:bg-slate-50">
              {o.name}
            </Link>
          ))}
        </div>
        <p className="text-slate-400 text-xs leading-relaxed">
          NJ Foreclosure Guide is not affiliated with {p.name.replace(', as trustee', '')} and is not paid by any lender, servicer or trustee.
          Counts are scheduled sheriff sales from public county lists, not completed sales, and say nothing about any individual case. This
          page is educational information, not legal advice.
        </p>
      </section>
    </div>
  );
}
