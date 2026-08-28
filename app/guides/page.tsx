'use client';

import Link from 'next/link';
import SiteHeader from '../components/SiteHeader';

// Force rebuild - 2026-08-04 - Fix guide routes

const guides = [
  {
    slug: 'foreclosure-101',
    title: 'Foreclosure 101: Understanding Your Rights',
    description: 'What foreclosure is, how the process works in NJ, your timeline, and your legal rights as a homeowner.',
    category: 'Foundation',
  },
  {
    slug: 'loan-modification',
    title: 'Loan Modification. Keep Your Home by Changing Your Terms',
    description: 'How to negotiate with your lender to lower payments, extend your term, or reduce interest. Step-by-step process.',
    category: 'Keep Your Home',
  },
  {
    slug: 'refinancing',
    title: 'Refinancing. Replace Your Mortgage with Better Terms',
    description: 'Get a new loan at better rates. How to shop lenders, qualify, and complete the process in 5-6 weeks.',
    category: 'Keep Your Home',
  },
  {
    slug: 'forbearance',
    title: 'Forbearance. Pause or Reduce Payments Temporarily',
    description: 'How to temporarily stop or reduce payments while you recover. Quickest relief option (1-2 weeks approval).',
    category: 'Keep Your Home',
  },
  {
    slug: 'ltv-refinance',
    title: 'Home Equity Refinance. Tap Your Equity to Catch Up on the Mortgage',
    description: 'Borrow against your home equity to pay off high-interest debt and catch up on payments.',
    category: 'Keep Your Home',
  },
  {
    slug: 'short-sale',
    title: 'Short Sale. Sell Your Home for Less Than You Owe',
    description: 'Sell your home with lender approval when you are underwater. Control the sale instead of facing foreclosure.',
    category: 'Sell Your Home',
  },
  {
    slug: 'cash-buyer',
    title: 'Sell to a Cash Buyer. Selling Before the Sheriff Sale',
    description: 'Close in 7-30 days with a cash buyer. Few contingencies and a fast close, at a price below market.',
    category: 'Sell Your Home',
  },
  {
    slug: 'surplus-funds',
    title: 'Surplus Funds. Claiming Auction Money That Is Yours',
    description: 'When a sheriff sale brings more than you owed, the difference belongs to you and sits with the court until claimed. How to claim it without paying a third to a finder.',
    category: 'Sell Your Home',
  },
  {
    slug: 'bankruptcy-chapter-13',
    title: 'Chapter 13 Bankruptcy. Legal Protection and Debt Restructuring',
    description: 'Filing triggers an automatic stay that pauses the foreclosure while you reorganize debt over 3-5 years and keep your home.',
    category: 'Legal Protection',
  },
];

export default function GuidesPage() {
  return (
    <div className="min-h-full bg-white">
      <SiteHeader />

      {/* Header */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-50 py-12 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl font-bold text-blue-900 mb-4">Educational Guides</h1>
          <p className="text-lg text-gray-700">
            Understand your situation and explore all available options.
          </p>
        </div>
      </section>

      {/* Guides List */}
      <section className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 gap-6">
          {guides.map((guide) => (
            <Link
              key={guide.slug}
              href={`/guides/${guide.slug}`}
              className="bg-white border-2 border-gray-200 p-6 rounded-lg hover:border-blue-600 hover:shadow-lg transition"
            >
              <span className="inline-block bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-semibold mb-3">
                {guide.category}
              </span>
              <h2 className="text-2xl font-bold text-blue-900 mb-2">{guide.title}</h2>
              <p className="text-gray-700">{guide.description}</p>
              <div className="mt-4 text-blue-600 font-semibold">Read Guide →</div>
            </Link>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-br from-blue-600 to-indigo-600 py-12 px-4">
        <div className="max-w-4xl mx-auto bg-white rounded-lg p-12 text-center">
          <h2 className="text-3xl font-bold text-blue-900 mb-4">Not Sure Where to Start?</h2>
          <p className="text-gray-700 mb-6">
            Take our 2-minute quiz to get personalized recommendations based on your situation.
          </p>
          <Link
            href="/quiz"
            className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
          >
            Take the Quiz
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-12 mt-12">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <p>&copy; 2024 NJ Foreclosure Guide. Educational resource, not legal or financial advice.</p>
        </div>
      </footer>
    </div>
  );
}
