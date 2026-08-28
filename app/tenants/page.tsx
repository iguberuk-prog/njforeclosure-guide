import Link from 'next/link';
import type { Metadata } from 'next';
import SiteHeader from '../components/SiteHeader';

export const metadata: Metadata = {
  title: 'Renting a Home in Foreclosure in NJ | Tenant Rights',
  description:
    'Renters in New Jersey generally cannot be evicted just because their landlord was foreclosed. Your lease survives, the new owner becomes your landlord, and the Anti-Eviction Act still protects you. What to do, what to keep paying, and the scams to refuse.',
  alternates: { canonical: 'https://njforeclosureguide.org/tenants/' },
  openGraph: {
    title: 'Renting a Home in Foreclosure in NJ | Tenant Rights',
    description: 'Foreclosure of your landlord is not an eviction. New Jersey tenant protections, explained.',
    url: 'https://njforeclosureguide.org/tenants/',
  },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Can I be evicted because my landlord is in foreclosure in New Jersey?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Generally no. New Jersey law is among the strongest in the country for tenants in foreclosed properties: a foreclosure does not terminate a residential lease, the buyer at the sheriff sale generally takes the property subject to your tenancy and becomes your landlord, and you can only be evicted for the good-cause grounds in the Anti-Eviction Act (such as nonpayment of rent), not because ownership changed.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do I keep paying rent while my landlord is in foreclosure?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Your obligation to pay rent continues throughout the foreclosure and after the sale, to whoever lawfully holds the landlord\'s interest. Not paying is one of the few things that can actually get you evicted. If ownership changes, ask for written proof of who the new owner is before redirecting payments, and keep records of every payment.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is a cash-for-keys offer legitimate, and do I have to take it?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Cash-for-keys offers, where the new owner pays you to move out voluntarily, are legal and entirely optional. Because New Jersey law generally lets you stay under your lease and the Anti-Eviction Act, you negotiate from strength: you do not have to accept, and any agreement should be in writing with payment terms clear before you hand over keys.',
      },
    },
  ],
};

export default function TenantsPage() {
  return (
    <div className="min-h-full bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <SiteHeader />

      <section className="bg-gradient-to-b from-slate-950 to-slate-900 text-white py-16 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-amber-400 text-xs font-semibold tracking-[0.25em] uppercase mb-4">
            For renters
          </p>
          <h1 className="font-serif text-4xl md:text-5xl font-bold mb-5 tracking-tight">
            Your Landlord Is in Foreclosure. You Are Not.
          </h1>
          <p className="text-slate-300 text-lg leading-relaxed">
            New Jersey gives tenants in foreclosed homes some of the strongest protections in the
            country. The foreclosure is your landlord&apos;s legal problem; your lease, your home and
            your rights survive it.
          </p>
        </div>
      </section>

      <article className="max-w-3xl mx-auto px-4 py-12">
        <h2 className="font-serif text-2xl font-bold text-slate-900 mb-3">The three things that stay true</h2>
        <div className="space-y-4 text-slate-600 leading-relaxed mb-10">
          <p>
            <strong className="text-slate-900">1. Foreclosure does not end your lease.</strong> Under
            New Jersey law, a residential tenancy survives the foreclosure. Whoever ends up owning
            the property, the lender or an auction buyer, generally takes it subject to your tenancy
            and simply becomes your new landlord, on the same terms you already had.
          </p>
          <p>
            <strong className="text-slate-900">2. You can only be evicted for good cause.</strong>{' '}
            New Jersey&apos;s Anti-Eviction Act lists the specific grounds on which most residential
            tenants can be removed, such as not paying rent or violating the lease, and &quot;the
            building was foreclosed&quot; is not one of them. A new owner who wants the property
            empty must still have one of the statutory grounds, or your voluntary agreement.
          </p>
          <p>
            <strong className="text-slate-900">3. Removal only ever happens through a court.</strong>{' '}
            Nobody, not the bank, not the sheriff-sale buyer, may change your locks, remove your
            belongings, or shut off utilities to push you out. That is an illegal lockout in New
            Jersey, and only a court judgment followed by a lawful eviction process can require you
            to leave.
          </p>
        </div>

        <h2 className="font-serif text-2xl font-bold text-slate-900 mb-3">What to actually do</h2>
        <ol className="space-y-4 mb-10">
          {[
            'Keep paying rent, in full and on time, and keep proof of every payment. Nonpayment is the one door your landlord\'s foreclosure opens for an eviction against you.',
            'If someone claims to be the new owner, ask for written proof (the deed) before redirecting rent, and get the new payment instructions in writing. Confusion about who to pay is common in the transition; your records are your protection.',
            'Keep your lease, your payment records, and any letters about the foreclosure in one folder. If you receive court papers naming you, respond by the deadline; tenants are sometimes named in foreclosure actions precisely so they can be dealt with later.',
            'Treat any pressure to leave immediately as a red flag. Verbal threats, lock changes, utility shutoffs and "you have to be out by Friday" have no legal force. If it happens, document it and call your local legal services office.',
            'Consider cash-for-keys on your terms, not theirs. New owners often pay for a smooth voluntary move-out. Because the law lets you stay, you can negotiate the amount and the date, in writing, or simply decline.',
          ].map((step, i) => (
            <li key={i} className="flex gap-4">
              <span className="shrink-0 w-8 h-8 rounded-full bg-slate-900 text-white flex items-center justify-center font-bold text-sm">
                {i + 1}
              </span>
              <p className="text-slate-600 leading-relaxed pt-1">{step}</p>
            </li>
          ))}
        </ol>

        <h2 className="font-serif text-2xl font-bold text-slate-900 mb-3">Where renters get free help</h2>
        <div className="grid sm:grid-cols-3 gap-4 mb-10">
          <a href="https://www.lsnj.org/" target="_blank" rel="noopener noreferrer" className="border border-slate-200 rounded-xl px-5 py-4 hover:border-slate-400 transition">
            <p className="font-bold text-slate-900 text-sm">Legal Services of New Jersey</p>
            <p className="text-slate-500 text-xs mt-1">Free civil legal help for eligible residents · lsnj.org</p>
          </a>
          <a href="https://www.njcourts.gov/self-help/landlord-tenant" target="_blank" rel="noopener noreferrer" className="border border-slate-200 rounded-xl px-5 py-4 hover:border-slate-400 transition">
            <p className="font-bold text-slate-900 text-sm">NJ Courts Landlord-Tenant Self-Help</p>
            <p className="text-slate-500 text-xs mt-1">njcourts.gov</p>
          </a>
          <a href="https://www.nj.gov/dca/codes/offices/landlord_tenant_information.shtml" target="_blank" rel="noopener noreferrer" className="border border-slate-200 rounded-xl px-5 py-4 hover:border-slate-400 transition">
            <p className="font-bold text-slate-900 text-sm">NJ DCA Landlord-Tenant Information</p>
            <p className="text-slate-500 text-xs mt-1">nj.gov/dca</p>
          </a>
        </div>

        <div className="bg-slate-50 rounded-2xl p-6">
          <p className="text-slate-700 leading-relaxed mb-4">
            Own the home rather than rent it? The rest of this site is built for you: seven options,
            five of which keep you in the house.
          </p>
          <Link href="/quiz" className="inline-block bg-amber-400 text-slate-950 px-8 py-3.5 rounded-lg font-bold hover:bg-amber-300 transition">
            See My Options, Free
          </Link>
        </div>
        <p className="text-slate-400 text-xs mt-6 leading-relaxed">
          Educational information, not legal advice. Tenant protections have exceptions (for example,
          some owner-occupied situations differ), and your lease and papers control; Legal Services
          of New Jersey or a licensed attorney can confirm what applies to you.
        </p>
      </article>
    </div>
  );
}
