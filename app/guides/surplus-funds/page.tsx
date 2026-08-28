import Link from 'next/link';
import type { Metadata } from 'next';
import SiteHeader from '../../components/SiteHeader';

export const metadata: Metadata = {
  title: 'Surplus Funds After a NJ Sheriff Sale | Claiming Your Money',
  description:
    'If a New Jersey sheriff sale brought more than you owed, the surplus belongs to you, sits with the court until claimed, and attracts an industry of finders charging steep fees for a court filing. How the money flows and how to claim it.',
  alternates: { canonical: 'https://njforeclosureguide.org/guides/surplus-funds/' },
  openGraph: {
    title: 'Surplus Funds After a NJ Sheriff Sale | Claiming Your Money',
    description: 'Auction proceeds above the judgment belong to the former homeowner. How to claim them.',
    url: 'https://njforeclosureguide.org/guides/surplus-funds/',
  },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What are surplus funds in a New Jersey foreclosure?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Surplus funds are the money left over when a sheriff sale brings more than the foreclosure judgment plus costs. In New Jersey the surplus is deposited with the court, and after any junior lienholders are addressed, it belongs to the former homeowner. It is not sent automatically; it must be claimed through the court.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do I claim surplus funds in New Jersey?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Surplus money from a New Jersey sheriff sale is deposited into the Superior Court Trust Fund. Claiming it involves a motion or petition in the foreclosure case showing your entitlement; junior mortgage holders and other lienholders are paid in priority order first, and what remains goes to the former owner. Many people use an attorney for the filing; the New Jersey courts also publish self-help information.',
      },
    },
    {
      '@type': 'Question',
      name: 'Are surplus fund recovery companies legitimate?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Some are real, but the business model is charging a large contingency fee, sometimes a third or more, for locating money that is already yours and filing paperwork an attorney would handle for far less. Check whether funds exist yourself before signing anything, be skeptical of anyone who contacts you first, and never sign over your claim.',
      },
    },
  ],
};

export default function SurplusFundsPage() {
  return (
    <div className="min-h-full bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <SiteHeader />

      <section className="bg-gradient-to-b from-slate-950 to-slate-900 text-white py-16 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-amber-400 text-xs font-semibold tracking-[0.25em] uppercase mb-4">
            After the sale
          </p>
          <h1 className="font-serif text-4xl md:text-5xl font-bold mb-5 tracking-tight">
            The Auction Money That Is Still Yours
          </h1>
          <p className="text-slate-300 text-lg leading-relaxed">
            When a sheriff sale brings more than what you owed, the difference does not belong to the
            bank, and it does not belong to the buyer. It belongs to you, and it sits with the court
            until someone claims it.
          </p>
        </div>
      </section>

      <article className="max-w-3xl mx-auto px-4 py-12">
        <h2 className="font-serif text-2xl font-bold text-slate-900 mb-3">How the money flows</h2>
        <div className="space-y-4 text-slate-600 leading-relaxed mb-10">
          <p>
            The foreclosure judgment fixes what the lender is owed: the debt plus interest and
            costs. At auction, bidding can go higher than that number, especially on homes with real
            equity. Everything above the judgment and sale costs is <strong className="text-slate-900">surplus</strong>,
            and in New Jersey it is deposited with the court rather than handed to anyone at the sale.
          </p>
          <p>
            From there, the law works down a priority list: junior lienholders, such as a second
            mortgage, a HELOC, or judgment creditors, can assert claims against the surplus first.
            Whatever remains after valid liens belongs to the former homeowner. If nobody claims it,
            it does not disappear into the bank&apos;s pocket; it simply sits, sometimes for years,
            waiting.
          </p>
          <p>
            That waiting money is why an entire industry exists to find you.
          </p>
        </div>

        <h2 className="font-serif text-2xl font-bold text-slate-900 mb-3">The finder-fee industry, honestly</h2>
        <div className="space-y-4 text-slate-600 leading-relaxed mb-10">
          <p>
            Weeks or months after a sale, letters and calls arrive: &quot;We have located unclaimed
            funds that may belong to you.&quot; Some of these operations are legitimate, and the
            service they perform, locating the money and filing the claim, is real. The problem is
            the price: contingency fees of a quarter to a third of your money, for work that is
            fundamentally a court filing.
          </p>
          <p>
            The two rules: never sign an agreement assigning your claim to someone else, and never
            agree to a contingency percentage before you know, independently, whether surplus
            exists and roughly how much. Both questions can be answered without them, which removes
            most of their leverage.
          </p>
        </div>

        <h2 className="font-serif text-2xl font-bold text-slate-900 mb-3">How to claim it yourself</h2>
        <ol className="space-y-4 mb-10">
          {[
            'Confirm the sale result. Your county sheriff\'s office can tell you what the property sold for, and the foreclosure case file shows the judgment amount. Sold-for minus judgment-and-costs is your first estimate of the surplus.',
            'Check for junior liens. Second mortgages, HELOCs, tax liens and judgments recorded against the property get paid from the surplus before you do. A title search or the case file shows what is there.',
            'File the claim. Surplus money is held in the Superior Court Trust Fund, and release requires a motion or petition in the foreclosure case demonstrating your entitlement. The New Jersey courts publish self-help information, and a real estate or foreclosure attorney can handle the filing for a flat or hourly fee that is almost always far below a finder\'s percentage.',
            'Beware of deadlines and heirs\' issues. Claims involving estates, divorces, or multiple owners take longer; start sooner rather than later, and keep every document from the foreclosure.',
          ].map((step, i) => (
            <li key={i} className="flex gap-4">
              <span className="shrink-0 w-8 h-8 rounded-full bg-slate-900 text-white flex items-center justify-center font-bold text-sm">
                {i + 1}
              </span>
              <p className="text-slate-600 leading-relaxed pt-1">{step}</p>
            </li>
          ))}
        </ol>

        <div className="border-l-2 border-amber-400 pl-5 mb-10">
          <p className="text-slate-700 leading-relaxed">
            <strong className="text-slate-900">The bigger lesson, if the sale has not happened yet:</strong>{' '}
            a sheriff sale is the worst-priced way to convert equity into money. Homes at auction
            routinely bring less than a market or even a quick cash sale would have. If you have
            equity and a sale date, selling before the auction almost always protects more of it
            than hoping for a surplus after.
          </p>
        </div>

        <div className="bg-slate-50 rounded-2xl p-6">
          <p className="text-slate-700 leading-relaxed mb-4">
            Sale already scheduled? See what selling beforehand would leave you with, and how the
            adjournment rules buy time to close.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <Link href="/tools/net-proceeds" className="bg-amber-400 text-slate-950 px-8 py-3.5 rounded-lg font-bold text-center hover:bg-amber-300 transition">
              Run My Numbers
            </Link>
            <Link href="/sheriff-sales" className="border border-slate-300 text-slate-900 px-8 py-3.5 rounded-lg font-semibold text-center hover:bg-slate-100 transition">
              Sheriff Sale Directory
            </Link>
          </div>
        </div>
        <p className="text-slate-400 text-xs mt-6 leading-relaxed">
          Educational information, not legal advice. Lien priority and entitlement are case-specific;
          a licensed New Jersey attorney can confirm what applies to yours.
        </p>
      </article>
    </div>
  );
}
