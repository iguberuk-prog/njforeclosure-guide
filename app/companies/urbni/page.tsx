import Link from 'next/link';
import RecommendationBasis from '../../components/RecommendationBasis';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Donate a Home or Land to Urbni | Nonprofit Property Donation',
  description:
    'Urbni is a nonprofit that accepts donated homes and land and restores them as affordable housing for veterans, seniors, and people in recovery. When donating makes sense, when it does not, and what a mortgage means for a property donation.',
  alternates: { canonical: 'https://njforeclosureguide.org/companies/urbni/' },
};

export default function UrbniPage() {
  return (
    <div className="min-h-full bg-white">
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
          <Link href="/quiz" className="bg-slate-900 text-white px-5 py-2.5 rounded-lg font-semibold hover:bg-slate-800 transition text-sm">
            Free Assessment
          </Link>
        </div>
      </nav>

      {/* Hero */}
      <section className="bg-gradient-to-b from-emerald-950 to-slate-900 text-white py-16 px-4">
        <div className="max-w-3xl mx-auto">
          <p className="text-emerald-400 text-xs font-semibold tracking-[0.25em] uppercase mb-4">Nonprofit · We Earn Nothing</p>
          <h1 className="font-serif text-4xl md:text-5xl font-bold mb-5 tracking-tight">Urbni</h1>
          <p className="text-slate-300 text-lg leading-relaxed">
            A nonprofit that takes vacant, abandoned, and tax-delinquent properties and restores them into affordable housing for veterans, seniors, people in recovery, and families leaving homelessness. If a property has become a burden you cannot carry, donating it is a real alternative to watching it go to sheriff sale.
          </p>
        </div>
      </section>

      {/* Disclosure */}
      <section className="max-w-3xl mx-auto px-4 pt-10">
        <div className="rounded-xl border border-emerald-300 bg-emerald-50 p-5">
          <p className="text-sm text-emerald-900 leading-relaxed">
            <span className="font-bold">Our relationship with them: none.</span> Urbni is a nonprofit. We receive no referral fee, no commission, and no compensation of any kind if you donate to them, and we are not affiliated with them. They are listed here because for some property owners this is genuinely the best outcome available, not because it earns us anything. That is true of everything on this site.</p>
        </div>
      </section>

      <section className="max-w-3xl mx-auto px-4 pt-8">
        <RecommendationBasis />
      </section>

      {/* The critical caveat, first */}
      <section className="max-w-3xl mx-auto px-4 py-14">
        <div className="rounded-xl border-l-4 border-amber-500 bg-amber-50/70 p-6 mb-10">
          <p className="font-bold text-slate-900 mb-2">Read this before anything else</p>
          <p className="text-slate-700 text-sm leading-relaxed mb-3">
            Donating a property does not erase a mortgage. A lender&apos;s lien follows the property, so you cannot donate your way out of a loan you still owe. If your balance is close to or above what the home is worth, a donation generally is not available to you and a short sale, a modification, or Chapter 13 is the more realistic path.
          </p>
          <p className="text-slate-700 text-sm leading-relaxed">
            Donation fits best when the property is owned free and clear, or nearly so, and has become a liability rather than an asset. Anyone who tells you that donating cancels your mortgage debt is either mistaken or not being straight with you.
          </p>
        </div>

        <h2 className="font-serif text-3xl font-bold text-slate-900 mb-6">When Donating Actually Makes Sense</h2>
        <div className="space-y-4 text-slate-600 leading-relaxed">
          <p>
            Some properties cost more to keep than they will ever return. An inherited house three states away that needs a new roof. A vacant lot accruing taxes every year. A home damaged beyond what any insurance settlement will cover. Owners in that position often assume their only options are to pour money in or let it go for taxes.
          </p>
          <p>
            There is a third option. Urbni accepts donated homes and land, handles the paperwork at no cost to the owner, and restores the property into housing through programs including Healing Homes for people in recovery, Homes for Heroes for veterans, and Second Start for families who are homeless or at risk of it.
          </p>
          <p>
            They also state that land donations are tax-deductible. A charitable contribution of real property can produce a deduction, but the amount and your eligibility depend on your specific tax situation and typically require a qualified appraisal. Talk to a tax professional before counting on any particular number.
          </p>
        </div>
      </section>

      {/* Fit */}
      <section className="bg-slate-50 py-14 px-4 border-y border-slate-200">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-serif text-3xl font-bold text-slate-900 mb-8">Is This You?</h2>
          <div className="grid sm:grid-cols-2 gap-5">
            <div className="rounded-xl border border-emerald-200 bg-emerald-50/60 p-6">
              <p className="font-bold text-slate-900 mb-3">Donation may fit</p>
              <ul className="space-y-2 text-sm text-slate-600 leading-relaxed">
                <li>Property is owned outright or nearly so</li>
                <li>Inherited property you cannot maintain or travel to</li>
                <li>Vacant house or empty lot accruing taxes</li>
                <li>Repair costs exceed what the property is worth</li>
                <li>You would rather it house someone than sit empty</li>
              </ul>
            </div>
            <div className="rounded-xl border border-slate-200 bg-white p-6">
              <p className="font-bold text-slate-900 mb-3">Donation does not fit</p>
              <ul className="space-y-2 text-sm text-slate-600 leading-relaxed">
                <li>You still owe a substantial mortgage balance</li>
                <li>The property has real equity you could realize by selling</li>
                <li>You need cash from the property</li>
                <li>You want to keep living there</li>
              </ul>
            </div>
          </div>
          <p className="text-slate-600 text-sm leading-relaxed mt-6">
            If there is meaningful equity, selling almost always serves you better than donating, even at a discount to a cash buyer. Money in your pocket beats a deduction you may not be able to fully use.
          </p>
        </div>
      </section>

      {/* Their programs */}
      <section className="max-w-3xl mx-auto px-4 py-14">
        <h2 className="font-serif text-3xl font-bold text-slate-900 mb-8">Where the Property Goes</h2>
        <div className="grid sm:grid-cols-2 gap-4">
          {[
            ['Homes for Heroes', 'US military veterans facing housing instability or transitioning back to civilian life.'],
            ['Healing Homes', 'People in recovery from substance abuse who have completed treatment and are ready for the next step.'],
            ['Second Start', 'Individuals and families who are homeless or at risk of becoming homeless.'],
            ['Grace Homes', 'One of their supportive housing programs serving people in need.'],
          ].map(([t, d], i) => (
            <div key={i} className="rounded-xl border border-slate-200 p-5">
              <p className="font-bold text-slate-900 mb-1.5">{t}</p>
              <p className="text-slate-600 text-sm leading-relaxed">{d}</p>
            </div>
          ))}
        </div>
        <p className="text-slate-500 text-sm leading-relaxed mt-6">
          They accept donated homes, land, money, and food, and also take volunteers. Program details are drawn from their public site and may change.
        </p>
      </section>

      {/* Questions */}
      <section className="max-w-3xl mx-auto px-4 pb-14">
        <div className="rounded-xl border border-slate-300 bg-white p-6">
          <p className="font-bold text-slate-900 mb-3">Ask these before donating</p>
          <ul className="space-y-2 text-sm text-slate-600 leading-relaxed">
            <li>Is there any lien, mortgage, or unpaid tax balance on the property, and who is responsible for it?</li>
            <li>When exactly does ownership and liability transfer, including taxes, insurance, and upkeep?</li>
            <li>What documentation will I receive for tax purposes, and do I need a qualified appraisal?</li>
            <li>Are there any costs to me at any point in the process?</li>
            <li>What happens if the property does not qualify for their programs?</li>
          </ul>
          <p className="text-xs text-slate-500 mt-4 leading-relaxed">
            Confirm their nonprofit status and current standing independently before transferring any property. That is standard practice for any charitable gift of real estate, not a comment on this organization.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-3xl mx-auto px-4 pb-16">
        <div className="rounded-2xl bg-slate-950 text-white px-8 py-12 text-center">
          <h2 className="font-serif text-2xl font-bold mb-3">Not Sure Which Path Fits?</h2>
          <p className="text-slate-300 mb-8 text-sm leading-relaxed max-w-xl mx-auto">
            The free assessment takes two minutes. If keeping the property is realistic it says so first, and if there is equity worth realizing it will point you toward selling rather than donating.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/quiz" className="bg-amber-400 text-slate-950 px-8 py-3.5 rounded-lg font-bold hover:bg-amber-300 transition">
              Take the Free Assessment
            </Link>
            <a
              href="https://www.urbni.org"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="border border-white/30 bg-white/5 text-white px-8 py-3.5 rounded-lg font-semibold hover:bg-white/15 transition"
            >
              Go to Urbni
            </a>
          </div>
        </div>

        <p className="text-xs text-slate-400 mt-8 leading-relaxed text-center max-w-2xl mx-auto">
          NJ Foreclosure Guide is an educational resource and receives no compensation from Urbni. We are not a law firm, lender, real estate brokerage, or tax advisor, and nothing here is legal or tax advice. Property donation has legal and tax consequences that depend entirely on your circumstances. Consult a licensed attorney and a tax professional before donating real estate.
        </p>
      </section>

      <footer className="bg-slate-950 text-slate-500 py-10 px-4 text-center text-xs">
        <p className="mb-2">&copy; 2026 NJ Foreclosure Guide. All rights reserved.</p>
        <p className="max-w-2xl mx-auto leading-relaxed">
          Independent educational resource. Not a law firm, lender, or real estate company. We are paid by nobody: no referral fees, no commissions, no advertising money, and no affiliation with any company listed. You are never charged.
        </p>
      </footer>
    </div>
  );
}
