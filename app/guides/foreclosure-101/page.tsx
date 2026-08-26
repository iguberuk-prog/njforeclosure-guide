'use client';

import Link from 'next/link';
import SiteHeader from '../../components/SiteHeader';

export default function Foreclosure101Page() {
  return (
    <div className="min-h-full bg-white">
      <SiteHeader />

      {/* Main Content */}
      <article className="max-w-3xl mx-auto px-4 py-12">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Foreclosure 101: What You Need to Know</h1>
          <p className="text-xl text-gray-700">
            Understanding foreclosure, what it is, how it happens, your rights, and what your timeline looks like.
          </p>
        </div>

        <div className="bg-blue-50 border-l-4 border-blue-600 p-6 mb-8 rounded">
          <h3 className="font-semibold text-blue-900 mb-2">Quick Summary</h3>
          <p className="text-gray-700">
            Foreclosure is the legal process lenders use to reclaim property when borrowers stop making mortgage payments. In New Jersey, this process typically takes 6-12 months, but you have several options to stop it.
          </p>
        </div>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">What is Foreclosure?</h2>
          <p className="text-gray-700 mb-4">
            Foreclosure is a legal process where a lender takes back a property because the homeowner has stopped making mortgage payments. The lender then sells the property to recover the money owed.
          </p>
          <p className="text-gray-700">
            It's important to understand: foreclosure is NOT immediate. You have time. In New Jersey, the process takes months. During that time, you have options.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">The Foreclosure Timeline in New Jersey</h2>
          <div className="space-y-6">
            {[
              {
                stage: 'Pre-Foreclosure (Default)',
                timeframe: 'Days 1-120',
                description: 'Lender sends notices after you miss 2-3 payments. This is your window to act.',
              },
              {
                stage: 'Notice of Sale',
                timeframe: 'Day 120+',
                description: 'Lender officially files foreclosure. You have 35+ days before auction.',
              },
              {
                stage: 'Redemption Period',
                timeframe: '35-45 days',
                description: 'You can still stop foreclosure by paying all missed payments + fees.',
              },
              {
                stage: 'Foreclosure Auction',
                timeframe: 'Day 150-180 (approx)',
                description: 'Property is auctioned to highest bidder. After this, it is much harder to stop.',
              },
              {
                stage: 'Post-Foreclosure',
                timeframe: 'After Auction',
                description: 'Home is owned by bank or auction winner. Your time to act is over.',
              },
            ].map((item, idx) => (
              <div key={idx} className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-semibold text-lg text-gray-900">{item.stage}</h3>
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded text-sm font-semibold">
                    {item.timeframe}
                  </span>
                </div>
                <p className="text-gray-700">{item.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Your Rights During Foreclosure</h2>
          <ul className="space-y-4">
            {[
              'Right to receive notice before foreclosure begins',
              'Right to request a loan modification or forbearance',
              'Right to challenge the foreclosure in court',
              'Right to redeem (pay all missed payments + fees to stop foreclosure)',
              'Right to sell the home yourself (as alternative to foreclosure)',
              'Right to file for bankruptcy protection (automatic stay)',
              'Right to consult with a HUD counselor for free',
            ].map((right, idx) => (
              <li key={idx} className="flex gap-4">
                <span className="text-green-600 font-bold flex-shrink-0">✓</span>
                <span className="text-gray-700">{right}</span>
              </li>
            ))}
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Your Options to Stop Foreclosure</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                option: 'Loan Modification',
                desc: 'Modify your loan to lower payments, extend the term, or reduce interest.',
              },
              {
                option: 'Refinancing',
                desc: 'Get a new loan at better terms to replace your current mortgage.',
              },
              {
                option: 'Forbearance',
                desc: 'Temporarily pause or reduce payments while you get back on your feet.',
              },
              {
                option: 'Short Sale',
                desc: 'Sell your home for less than owed with lender approval.',
              },
              {
                option: 'Sell to Cash Buyer',
                desc: 'Sell quickly for cash to avoid foreclosure auction.',
              },
              {
                option: 'Chapter 13 Bankruptcy',
                desc: 'File for bankruptcy protection to restructure debt and keep your home.',
              },
            ].map((item, idx) => (
              <div key={idx} className="bg-white border-2 border-gray-200 p-6 rounded-lg hover:border-blue-600 transition">
                <h3 className="font-semibold text-lg text-gray-900 mb-2">{item.option}</h3>
                <p className="text-gray-700">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-12 bg-yellow-50 border-l-4 border-yellow-600 p-6 rounded">
          <h2 className="text-2xl font-bold text-yellow-900 mb-4">⚠️ Important: Act Quickly</h2>
          <p className="text-yellow-900 mb-4">
            Once foreclosure is filed, your window to act becomes much smaller. What you can do TODAY is different from what you can do in 60 days.
          </p>
          <p className="text-yellow-900">
            If you're behind on payments or have received a default notice:
          </p>
          <ul className="mt-4 space-y-2 text-yellow-900">
            <li>✓ Contact your lender immediately</li>
            <li>✓ Call a HUD counselor (free service)</li>
            <li>✓ Explore your options</li>
            <li>✓ Get legal advice if needed</li>
          </ul>
        </section>

        {/* Next Steps */}
        <section className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-lg">
          <h2 className="text-2xl font-bold text-blue-900 mb-4">Next Steps</h2>
          <p className="text-gray-700 mb-6">
            Now that you understand foreclosure, it's time to figure out YOUR best option.
          </p>
          <Link
            href="/quiz"
            className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
          >
            Take the Situation Quiz →
          </Link>
        </section>
      </article>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-12 mt-16">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <p>&copy; 2024 NJ Foreclosure Guide. Educational resource. Not legal advice.</p>
        </div>
      </footer>
    </div>
  );
}
