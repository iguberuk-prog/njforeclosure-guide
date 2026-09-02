import Link from 'next/link';
import SiteHeader from '../components/SiteHeader';
import RecommendationBasis from '../components/RecommendationBasis';
import OfferConcierge from '../components/OfferConcierge';
import type { Metadata } from 'next';
import { PARTNERS, COMPENSATION_LABEL, type Partner } from '../../lib/partners';

export const metadata: Metadata = {
  title: 'Where to Get Help With a NJ Foreclosure | Every Option Compared',
  description:
    'Where New Jersey homeowners facing foreclosure can get help, compared side by side: fast cash buyers, fire damage specialists, luxury off-market sales, nonprofit donation, and free government counseling and court mediation. What each is actually for. We are paid by none of them.',
  alternates: { canonical: 'https://njforeclosureguide.org/companies/' },
};

// Single source of truth: this page renders from the partner registry, so a
// destination can never appear here unless it is real and active.
const PAGE_PATHS: Record<string, string> = {
  'fire-home-buyers': '/companies/fire-home-buyers',
  'nj-offer': '/companies/njoffer',
  'private-sale-group': '/companies/private-sale-group',
  'clik-offer': '/companies/clik-offer',
  urbni: '/companies/urbni',
  'brc-corcoran-sawyer-smith': '/companies/brc-corcoran-sawyer-smith',
};

const WHEN_TO_USE: Record<string, string> = {
  'clik-offer': 'A sale date is days or a few weeks away',
  'nj-offer': 'You need certainty but have a few weeks',
  'fire-home-buyers': 'The property has fire or smoke damage',
  'private-sale-group': 'Home is $800k+ and privacy matters',
  urbni: 'The property is a burden with little or no equity',
  'brc-corcoran-sawyer-smith': 'You want to know what it is worth first',
  'hud-counseling': 'You want free, unbiased help before deciding',
  'nj-foreclosure-mediation': 'A foreclosure complaint has been filed',
};

function Badge({ p }: { p: Partner }) {
  if (p.compensation === 'affiliated') {
    return (
      <span className="text-[10px] font-bold uppercase tracking-wider text-blue-800 bg-blue-100 border border-blue-300 rounded-full px-2.5 py-1 whitespace-nowrap">
        Related business
      </span>
    );
  }
  return (
    <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-800 bg-emerald-100 border border-emerald-300 rounded-full px-2.5 py-1 whitespace-nowrap">
      We earn nothing
    </span>
  );
}

function Card({ p }: { p: Partner }) {
  const internal = PAGE_PATHS[p.id];
  return (
    <div
      className={`rounded-2xl border p-7 flex flex-col ${
        p.compensation === 'affiliated' ? 'border-blue-200 bg-blue-50/40' : 'border-emerald-200 bg-emerald-50/40'
      }`}
    >
      {/* flex-wrap matters: the nowrap badge next to a 170px logo pushed the
          card's min-content width past a 320px screen, and grid items refuse
          to shrink below min-content — the whole page scrolled sideways. */}
      <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
        <div className="min-w-0">
          {p.programBadge && (
            <span className="inline-block text-[10px] font-bold uppercase tracking-[0.15em] text-amber-800 bg-amber-100 border border-amber-300 rounded-full px-3 py-1 mb-2">
              {p.programBadge}
            </span>
          )}
          {p.logo && (
            <span className="block bg-white border border-slate-200 rounded-lg px-3 py-2 mb-2.5 w-fit max-w-full">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={p.logo} alt={`${p.name} logo`} className="h-8 max-w-[170px] object-contain object-left" />
            </span>
          )}
          <h3 className="font-bold text-lg text-slate-900 leading-tight">{p.name}</h3>
        </div>
        <Badge p={p} />
      </div>

      {WHEN_TO_USE[p.id] && (
        <p className="text-sm font-semibold text-slate-900 mb-2">Use when: {WHEN_TO_USE[p.id]}</p>
      )}
      <p className="text-slate-600 text-sm leading-relaxed mb-4">{p.headline}</p>

      {p.timeline && (
        <p className="text-xs text-slate-500 mb-4">
          <span className="font-semibold text-slate-700">Timeline:</span> {p.timeline}
        </p>
      )}

      <div className="flex flex-wrap gap-2 mb-5">
        {p.bestFor.slice(0, 3).map((b, i) => (
          <span key={i} className="text-xs text-slate-600 bg-slate-100 rounded-full px-3 py-1">
            {b}
          </span>
        ))}
      </div>

      <div className="flex flex-col sm:flex-row gap-2 mt-auto">
        {internal && (
          <Link
            href={internal}
            className="flex-1 text-center border border-slate-300 text-slate-800 px-5 py-2.5 rounded-lg font-semibold hover:bg-slate-50 transition text-sm"
          >
            Read our review
          </Link>
        )}
        <a
          href={p.quoteUrl ?? p.url}
          target="_blank"
          rel="noopener noreferrer nofollow"
          className="flex-1 text-center bg-slate-900 text-white px-5 py-2.5 rounded-lg font-semibold hover:bg-slate-800 transition text-sm"
        >
          {p.quoteLabel ?? 'Go to site'} →
        </a>
      </div>
      {p.quotePromise && (
        <p className="text-[11px] text-slate-500 mt-2 leading-relaxed">{p.quotePromise}</p>
      )}

      <p className="text-[11px] text-slate-500 mt-3 leading-relaxed">{COMPENSATION_LABEL[p.compensation]}</p>
    </div>
  );
}

export default function CompaniesPage() {
  const active = PARTNERS.filter((p) => p.active);
  const sell = active.filter((p) => p.kind === 'sell-fast' || p.kind === 'sell-market');
  const donate = active.filter((p) => p.kind === 'donate');
  const free = active.filter((p) => p.kind === 'free-counsel');

  return (
    <div className="min-h-full bg-white">
      <SiteHeader />

      {/* Hero */}
      <section
        className="relative text-white py-16 px-4 text-center overflow-hidden"
        style={{ backgroundImage: `url('/images/canva/gold-dust-rays.jpg')`, backgroundSize: 'cover', backgroundPosition: 'center' }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/70 to-slate-900/60"></div>
        <div className="max-w-3xl mx-auto relative z-10">
          <p className="text-amber-400 text-xs font-semibold tracking-[0.25em] uppercase mb-4">Every Option, Side by Side</p>
          <h1 className="font-serif text-4xl md:text-5xl font-bold mb-5 tracking-tight">Where to Get Help</h1>
          <p className="text-slate-300 text-lg leading-relaxed mb-8">
            These are places New Jersey homeowners can go for help. They are not interchangeable, and choosing the right one is most of the decision. Here is what each is actually for. We are paid by none of them.
          </p>
          <Link
            href="/quiz"
            className="inline-block bg-amber-400 text-slate-950 px-10 py-4 rounded-lg font-bold hover:bg-amber-300 transition"
          >
            Not sure? Take the 2-minute assessment
          </Link>
        </div>
      </section>

      {/* Free first */}
      <section className="max-w-5xl mx-auto px-4 py-14">
        <div className="mb-8">
          <p className="text-emerald-700 text-xs font-semibold tracking-[0.25em] uppercase mb-3">Start Here · Costs Nothing</p>
          <h2 className="font-serif text-3xl font-bold text-slate-900 mb-3">Free Help, and We Earn Nothing From It</h2>
          <p className="text-slate-600 leading-relaxed max-w-2xl">
            If you want to keep your home, or you simply want unbiased advice before deciding anything, start here. We are not paid a cent if you use these.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          {free.map((p) => <Card key={p.id} p={p} />)}
        </div>
      </section>

      {/* Selling */}
      <section className="bg-slate-50 py-14 px-4 border-y border-slate-200">
        <div className="max-w-5xl mx-auto">
          <div className="mb-8">
            <p className="text-amber-700 text-xs font-semibold tracking-[0.25em] uppercase mb-3">If Selling Is the Right Move</p>
            <div className="mb-10">
              <OfferConcierge sourcePage="/companies" />
            </div>

            <h2 className="font-serif text-3xl font-bold text-slate-900 mb-3">Five Ways to Sell, and They Are Not the Same</h2>
            <p className="text-slate-600 leading-relaxed max-w-2xl">
              Which one fits depends almost entirely on how much time you have and what condition the property is in. Speed costs you price. Time earns it back.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {sell.map((p) => <Card key={p.id} p={p} />)}
          </div>
        </div>
      </section>

      {/* Donation */}
      {donate.length > 0 && (
        <section className="max-w-5xl mx-auto px-4 py-14">
          <div className="mb-8">
            <p className="text-emerald-700 text-xs font-semibold tracking-[0.25em] uppercase mb-3">When the Property Is a Burden</p>
            <h2 className="font-serif text-3xl font-bold text-slate-900 mb-3">Donation</h2>
            <p className="text-slate-600 leading-relaxed max-w-2xl">
              For a property with little or no equity that costs more to keep than it will ever return. Note that donating does not erase a mortgage.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {donate.map((p) => <Card key={p.id} p={p} />)}
          </div>
        </section>
      )}

      {/* What a recommendation means */}
      <section className="max-w-3xl mx-auto px-4 pt-4">
        <RecommendationBasis />
      </section>

      {/* Honesty block */}
      <section className="max-w-3xl mx-auto px-4 py-14">
        <div className="rounded-2xl border border-slate-300 bg-white p-8">
          <h2 className="font-serif text-2xl font-bold text-slate-900 mb-4">How We Make Money, Plainly</h2>
          <div className="space-y-3 text-slate-600 text-sm leading-relaxed">
            <p>
              Not from any of the cash buyers, the nonprofit, or the free government programs. No referral fees, no commissions, no advertising money, and no connection to us. If you sell to one of them we receive nothing. One exception, stated plainly: Corcoran Sawyer Smith x Builders Resource Center is a brokerage the people behind this guide have an ownership interest in, so we do benefit if you list with them. It carries a related business label on its card and on its page for exactly that reason.
            </p>
            <p>You are never charged anything by us, at any point, for anything.</p>
            <p className="text-slate-900 font-semibold">
              That is the entire design. Because no outcome pays us more than any other, the ordering reflects what we think fits your situation and nothing else. Compare these against options you find on your own, and get more than one offer before you commit to anything.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-3xl mx-auto px-4 pb-16">
        <div className="rounded-2xl bg-slate-950 text-white px-8 py-12 text-center">
          <h2 className="font-serif text-2xl font-bold mb-3">Not Sure Which One Fits?</h2>
          <p className="text-slate-300 mb-8 text-sm leading-relaxed max-w-xl mx-auto">
            Answer a few questions and we will rank these for your situation, starting with how much time you actually have. We earn nothing regardless of which you pick.
          </p>
          <Link href="/quiz" className="inline-block bg-amber-400 text-slate-950 px-12 py-4 rounded-lg font-bold hover:bg-amber-300 transition text-lg">
            Get My Recommendations
          </Link>
        </div>
      </section>

      <footer className="bg-slate-950 text-slate-500 py-10 px-4 text-center text-xs">
        <p className="mb-2">&copy; 2026 NJ Foreclosure Guide. All rights reserved.</p>
        <p className="max-w-2xl mx-auto leading-relaxed">
          Independent educational resource. Not a law firm, lender, or real estate company. We take no referral fees, no commissions and no advertising money from anything listed. One destination is a related business, labeled wherever it appears. You are never charged.
        </p>
      </footer>
    </div>
  );
}
