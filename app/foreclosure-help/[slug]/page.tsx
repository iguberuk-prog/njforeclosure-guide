import Link from 'next/link';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getAllLocations, getLocation, townSlug } from '../../../lib/nj-locations';

export function generateStaticParams() {
  return getAllLocations().map((loc) => ({ slug: loc.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const loc = getLocation(slug);
  if (!loc) return {};
  const title = `Foreclosure Help in ${loc.name}, NJ | Stop Foreclosure ${loc.name}`;
  const description = `Facing foreclosure in ${loc.name}, New Jersey? Free guide to all 7 solutions: loan modification, forbearance, short sale, cash sale, Chapter 13 and more. Get a personalized plan in 2 minutes and connect with vetted local professionals.`;
  return {
    title,
    description,
    alternates: { canonical: `https://njforeclosureguide.org/foreclosure-help/${loc.slug}/` },
    openGraph: { title, description, url: `https://njforeclosureguide.org/foreclosure-help/${loc.slug}/` },
  };
}

export default async function LocationPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const loc = getLocation(slug);
  if (!loc) notFound();

  const isCounty = loc.type === 'county';
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
      a: `Yes. Our education, assessment, and introductions are 100% free for homeowners. Some home-buying partners pay us a referral fee if you sell to them. We are not paid by attorneys, and we are not paid by the free resources we point you to, such as HUD-approved counselors. You are never charged, and you are free to work with any attorney or company you choose.`,
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

      {/* Nav */}
      <nav className="sticky top-0 bg-white/95 backdrop-blur-md border-b border-slate-200 z-40 shadow-sm">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-3 flex justify-between items-center">
          <Link href="/" className="flex items-center gap-3 hover:opacity-90 transition">
            <img src="/images/icons/professional-legal-scales-lg.png" alt="NJ Foreclosure Guide" className="h-14 w-14" />
            <div className="flex flex-col leading-tight">
              <span className="text-lg font-bold text-slate-900 tracking-tight">NJ Foreclosure Guide</span>
              <span className="text-[10px] text-slate-500 font-medium tracking-widest uppercase">Free Homeowner Resource</span>
            </div>
          </Link>
          <div className="flex items-center gap-5 text-sm">
            <Link href="/guides" className="text-slate-600 hover:text-slate-900 font-semibold transition hidden sm:block">Guides</Link>
            <Link href="/quiz" className="bg-slate-900 text-white px-5 py-2.5 rounded-lg font-semibold hover:bg-slate-800 transition">
              Free Assessment
            </Link>
          </div>
        </div>
      </nav>

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
            New Jersey is a judicial foreclosure state. That means a lender cannot simply take a home{isCounty ? ` in ${displayName}` : ` in ${displayName}`}: it must sue in the Superior Court of New Jersey and win. Cases for {isCounty ? displayName : `${displayName} (${countyName} County)`} are processed through the county courthouse in {loc.countySeat}, and sheriff sales are conducted by the {countyName} County Sheriff's Office.
          </p>
          <p>
            The process has defined stages, and each stage still leaves you with options. Before filing anything, your lender must send a Notice of Intention to Foreclose at least 30 days in advance. After a complaint is filed and served, you have 35 days to respond. Contested cases and court backlogs mean the full process usually takes many months. That time is your most valuable asset, and the sooner you act, the more choices you keep.
          </p>
          <p>
            Homeowners{isCounty ? ` across ${displayName}` : ` in ${displayName}`} have used all 7 of the solutions we cover: loan modification, refinancing, forbearance, short sale, home equity solutions, Chapter 13 bankruptcy protection, and fast cash sales that close in 14 to 30 days.
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
          Educational resource only. Not a law firm, lender, or real estate company. We connect homeowners with licensed professionals and earn referral fees from partners. Always consult licensed professionals about your specific situation.
        </p>
      </footer>
    </div>
  );
}
