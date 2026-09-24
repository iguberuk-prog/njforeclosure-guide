import type { Metadata } from 'next';
import Link from 'next/link';
import SiteHeader from '../components/SiteHeader';

/**
 * /about — who is behind the guide, how it is funded, and how content is
 * sourced, checked, and corrected. Google's quality guidelines weigh "who
 * created this and why" heavily for money and legal topics, and the answer
 * engines read the same signals. Every claim here must stay literally true:
 * no invented credentials, no reviewer names that have not agreed, no
 * outcome promises. The ownership disclosure is the FIRST sentence of the
 * funding section, before anything else (site-wide disclosure discipline).
 */

export const metadata: Metadata = {
  title: 'About NJ Foreclosure Guide | Who We Are & Editorial Standards',
  description:
    'Who runs NJ Foreclosure Guide, how it is funded, where every fact comes from, and how we check and correct our New Jersey foreclosure information.',
  alternates: { canonical: 'https://njforeclosureguide.org/about/' },
  openGraph: {
    title: 'About NJ Foreclosure Guide',
    description: 'Who runs the guide, how it is funded, and how every fact is sourced and checked.',
    url: 'https://njforeclosureguide.org/about/',
  },
};

const SOURCES = [
  ['New Jersey Fair Foreclosure Act', 'N.J.S.A. 2A:50-53 et seq. — the Notice of Intention, the cure right, and the core homeowner protections.'],
  ['New Jersey Court Rules', 'Part IV, including R. 4:64 (foreclosure) and R. 4:65 (sheriff sales, adjournments, and the post-sale objection period).'],
  ['New Jersey Courts', 'njcourts.gov foreclosure self-help pages, forms, and the Foreclosure Mediation Program.'],
  ['County sheriff offices', 'Each county’s own sale listings (most through CivilView), contact details, and conditions of sale — verified page by page, with the date shown.'],
  ['Free-help organizations', 'HUD’s counselor directory, Legal Services of New Jersey, and NJ Housing and Mortgage Finance Agency programs.'],
  ['Foreclosure data', 'ATTOM Data Solutions reports and New Jersey court statistics, cited on the page where a number appears.'],
];

export default function AboutPage() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'AboutPage',
    url: 'https://njforeclosureguide.org/about/',
    name: 'About NJ Foreclosure Guide',
    mainEntity: { '@id': 'https://njforeclosureguide.org/#organization' },
    about: {
      '@type': 'Organization',
      '@id': 'https://njforeclosureguide.org/#organization',
      name: 'NJ Foreclosure Guide',
      url: 'https://njforeclosureguide.org/',
      founder: {
        '@type': 'Person',
        name: 'Igor Guberuk',
        description:
          'Has helped New Jersey homeowners in foreclosure understand their options for about seven years; founder of NJ Foreclosure Guide.',
      },
    },
  };

  return (
    <div className="min-h-full bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <SiteHeader />

      <section className="bg-gradient-to-b from-slate-950 to-slate-900 text-white py-16 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-amber-400 text-xs font-semibold tracking-[0.25em] uppercase mb-4">About the Guide</p>
          <h1 className="font-serif text-4xl md:text-5xl font-bold mb-5 tracking-tight">
            Plain answers for New Jersey homeowners, sourced and dated
          </h1>
          <p className="text-slate-300 text-lg leading-relaxed">
            Who is behind this site, how it is paid for, and exactly how we decide what goes on a page.
          </p>
        </div>
      </section>

      <article className="max-w-3xl mx-auto px-4 py-12 text-slate-600 leading-relaxed">
        <h2 className="font-serif text-2xl font-bold text-slate-900 mb-3">Why this exists</h2>
        <p className="mb-4">
          A foreclosure notice usually arrives with a flood of mail from people selling rescue. What
          most homeowners cannot find is a calm, complete explanation of how the New Jersey process
          actually works, what the real deadlines are, and which help is free. That is the whole job of
          this site: every stage, every option, and every free resource, in plain English and Spanish.
        </p>

        <h2 className="font-serif text-2xl font-bold text-slate-900 mt-10 mb-3">Who is behind it</h2>
        <p className="mb-4">
          NJ Foreclosure Guide was founded by <strong className="text-slate-900">Igor Guberuk</strong>, who has
          spent about seven years helping New Jersey homeowners in foreclosure understand their options.
          He is not an attorney, and nothing on this site is legal advice. When a question turns on the
          specifics of your case, we point you to a licensed New Jersey attorney or to free legal help.
        </p>

        <h2 className="font-serif text-2xl font-bold text-slate-900 mt-10 mb-3">How the site is funded</h2>
        <p className="mb-4">
          The people behind this guide hold an ownership interest in one listed destination, the
          brokerage BRC × Corcoran Sawyer Smith, and benefit if you choose to list a home there; it is
          labeled that way wherever it appears. Apart from that, we take no referral fees, no
          commissions, and no advertising money from anyone we mention. The guides, tools, checklists,
          and the embeddable widget are free, with no signup.
        </p>

        <h2 className="font-serif text-2xl font-bold text-slate-900 mt-10 mb-3">Where our facts come from</h2>
        <p className="mb-4">
          Legal rules and deadlines are checked against primary sources, not other websites:
        </p>
        <div className="space-y-3 mb-4 not-prose">
          {SOURCES.map(([t, d]) => (
            <div key={t} className="border border-slate-200 rounded-xl px-5 py-3.5">
              <p className="font-bold text-slate-900 text-sm">{t}</p>
              <p className="text-sm mt-0.5">{d}</p>
            </div>
          ))}
        </div>

        <h2 className="font-serif text-2xl font-bold text-slate-900 mt-10 mb-3">Our editorial rules</h2>
        <div className="space-y-4">
          <p>
            <strong className="text-slate-900">Deadlines are stated as general rules.</strong> Court papers
            and judges control individual cases, so we say &ldquo;generally&rdquo; where the law allows
            exceptions, and we never promise that any step will stop a foreclosure.
          </p>
          <p>
            <strong className="text-slate-900">Free help comes first.</strong> HUD-approved counselors, Legal
            Services of New Jersey, and the courts&rsquo; mediation program are listed before any paid
            option, on every page where they apply.
          </p>
          <p>
            <strong className="text-slate-900">No invented stories.</strong> Illustrative walkthroughs are
            labeled as composites. We do not publish testimonials or reviews unless a real person wrote
            them and gave written permission.
          </p>
          <p>
            <strong className="text-slate-900">Dated and re-checked.</strong> County sheriff details and
            data pages show the date they were last verified. Articles show when they were published and
            when they were last materially updated.
          </p>
          <p>
            <strong className="text-slate-900">Our AI chat assistant is labeled as one.</strong> It is
            never presented as a person, and it points to the same free help as the rest of the site.
          </p>
        </div>

        <h2 className="font-serif text-2xl font-bold text-slate-900 mt-10 mb-3">Corrections</h2>
        <p className="mb-4">
          If something here is wrong or out of date — a phone number, a rule, a program that changed —
          email{' '}
          <a href="mailto:help@njforeclosureguide.org" className="text-slate-900 font-semibold underline underline-offset-2">
            help@njforeclosureguide.org
          </a>
          . We check every report against the primary source and update the page and its date when a fix
          is needed. Counselors, attorneys, and court staff who spot an error are especially welcome to
          write.
        </p>

        <div className="rounded-2xl bg-slate-50 border border-slate-200 px-6 py-6 mt-10 not-prose">
          <p className="font-bold text-slate-900 mb-2">Start where you are</p>
          <div className="flex flex-col sm:flex-row gap-3">
            <Link href="/command-center" className="bg-amber-400 text-slate-950 px-6 py-3 rounded-lg font-bold text-center hover:bg-amber-300 transition">
              Build my free plan →
            </Link>
            <Link href="/professionals" className="border border-slate-300 text-slate-900 px-6 py-3 rounded-lg font-semibold text-center hover:bg-white transition">
              Every free help source
            </Link>
          </div>
        </div>
      </article>
    </div>
  );
}
