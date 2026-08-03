'use client';

import Link from 'next/link';

const companies = [
  {
    name: 'NJOffer',
    slug: 'njoffer',
    tagline: 'The Fastest Rescue',
    description: 'When you need cash in 14 days or less',
    timeline: '7-14 days',
    offer: '60-70% of market value',
    best_for: 'Pre-foreclosure, urgent situations',
    icon: '⚡',
  },
  {
    name: 'Home Equity Partners',
    slug: 'home-equity-partners',
    tagline: 'The Fair Deal Specialist',
    description: 'Fair prices with flexibility',
    timeline: '15-30 days',
    offer: '70-80% of market value',
    best_for: 'Flexible timeline, inherited properties',
    icon: '🏠',
  },
  {
    name: 'Property Investors NJ',
    slug: 'property-investors',
    tagline: 'The Investor Solution',
    description: 'Designed for landlords and portfolios',
    timeline: '30-60 days',
    offer: '50-85% (varies by investment)',
    best_for: 'Investment properties, rental homes',
    icon: '📊',
  },
];

export default function CompaniesPage() {
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
          <h1 className="text-4xl font-bold text-blue-900 mb-4">
            Trusted Cash Home Buyers
          </h1>
          <p className="text-lg text-gray-700">
            Compare three vetted companies specializing in distressed situations. Each has different strengths ~ choose the best fit for your needs.
          </p>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="max-w-6xl mx-auto px-4 py-12">
        <div className="overflow-x-auto">
          <table className="w-full bg-white rounded-lg shadow">
            <thead className="bg-gray-100 border-b-2 border-gray-300">
              <tr>
                <th className="px-6 py-4 text-left font-semibold text-gray-900">Company</th>
                <th className="px-6 py-4 text-left font-semibold text-gray-900">Timeline</th>
                <th className="px-6 py-4 text-left font-semibold text-gray-900">Offer Range</th>
                <th className="px-6 py-4 text-left font-semibold text-gray-900">Best For</th>
                <th className="px-6 py-4 text-center font-semibold text-gray-900">Action</th>
              </tr>
            </thead>
            <tbody>
              {companies.map((company) => (
                <tr key={company.slug} className="border-b border-gray-200 hover:bg-gray-50 transition">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <span className="text-3xl">{company.icon}</span>
                      <div>
                        <p className="font-semibold text-blue-900">{company.name}</p>
                        <p className="text-sm text-gray-600">{company.tagline}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-gray-900">{company.timeline}</td>
                  <td className="px-6 py-4 text-gray-900">{company.offer}</td>
                  <td className="px-6 py-4 text-gray-700">{company.best_for}</td>
                  <td className="px-6 py-4 text-center">
                    <Link
                      href={`/companies/${company.slug}`}
                      className="text-blue-600 hover:text-blue-700 font-semibold"
                    >
                      Learn More →
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Individual Company Cards */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-3 gap-8">
          {companies.map((company) => (
            <div key={company.slug} className="bg-white border-2 border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition">
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 text-center">
                <div className="text-5xl mb-4">{company.icon}</div>
                <h2 className="text-2xl font-bold text-blue-900 mb-1">{company.name}</h2>
                <p className="text-indigo-600 font-semibold">{company.tagline}</p>
              </div>
              <div className="p-6">
                <p className="text-gray-700 mb-6">{company.description}</p>

                <div className="space-y-4 mb-6 text-sm">
                  <div className="bg-gray-50 p-3 rounded">
                    <p className="text-gray-600">Timeline</p>
                    <p className="font-semibold text-gray-900">{company.timeline}</p>
                  </div>
                  <div className="bg-gray-50 p-3 rounded">
                    <p className="text-gray-600">Typical Offer</p>
                    <p className="font-semibold text-gray-900">{company.offer}</p>
                  </div>
                  <div className="bg-gray-50 p-3 rounded">
                    <p className="text-gray-600">Best For</p>
                    <p className="font-semibold text-gray-900">{company.best_for}</p>
                  </div>
                </div>

                <Link
                  href={`/companies/${company.slug}`}
                  className="block w-full bg-blue-600 text-white text-center py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
                >
                  Learn More
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-12 mt-16">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <p>&copy; 2024 NJ Foreclosure Guide. Educational resource, not legal or financial advice.</p>
        </div>
      </footer>
    </div>
  );
}
