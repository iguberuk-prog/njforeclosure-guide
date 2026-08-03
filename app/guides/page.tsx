'use client';

import Link from 'next/link';

const guides = [
  {
    slug: 'foreclosure-101',
    title: 'Foreclosure 101',
    description: 'Understand what foreclosure is, what is happening to your home, and your rights as a homeowner.',
    category: 'Foreclosure',
  },
  {
    slug: 'behind-on-payments',
    title: 'Behind on Mortgage Payments',
    description: 'What happens when you miss payments and what you can do about it.',
    category: 'Financial Hardship',
  },
  {
    slug: 'inherited-property',
    title: 'Inherited an Unwanted Property',
    description: 'Complete guide to handling an inherited house you do not want to keep.',
    category: 'Inheritance',
  },
  {
    slug: 'loan-modification',
    title: 'Loan Modification Guide',
    description: 'How to modify your mortgage to lower payments and keep your home.',
    category: 'Keep Your Home',
  },
  {
    slug: 'cash-sale',
    title: 'Selling to a Cash Buyer',
    description: 'How to sell your home for cash ~ the process, timeline, and what to expect.',
    category: 'Sell Your Home',
  },
  {
    slug: 'options',
    title: '7 Options to Solve Your Problem',
    description: 'Complete breakdown of all your options when facing foreclosure or financial hardship.',
    category: 'Overview',
  },
];

export default function GuidesPage() {
  return (
    <div className="min-h-full bg-white">
      {/* Navigation */}
      <nav className="sticky top-0 bg-white border-b border-gray-200 z-40">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Link href="/" className="text-2xl font-bold text-blue-900">
            NJ Foreclosure Guide
          </Link>
        </div>
      </nav>

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
