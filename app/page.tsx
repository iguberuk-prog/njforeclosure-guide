'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Home() {
  const [email, setEmail] = useState('');

  return (
    <div className="min-h-full bg-white">
      {/* Navigation */}
      <nav className="sticky top-0 bg-white border-b border-gray-200 z-40">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold text-blue-900">NJ Foreclosure Guide</div>
          <div className="flex gap-6">
            <Link href="/quiz" className="text-gray-600 hover:text-blue-900">Quiz</Link>
            <Link href="/guides" className="text-gray-600 hover:text-blue-900">Guides</Link>
            <Link href="/resources" className="text-gray-600 hover:text-blue-900">Resources</Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-blue-100 py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl font-bold text-blue-900 mb-4">
            Facing Foreclosure or Financial Hardship?
          </h1>
          <p className="text-xl text-gray-700 mb-8">
            You have more options than you think. Get honest guidance from New Jersey's trusted foreclosure resource.
          </p>
          <Link
            href="/quiz"
            className="inline-block bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition text-lg"
          >
            Take the Situation Quiz (2 min)
          </Link>
        </div>
      </section>

      {/* Main Content */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-blue-900 mb-6 text-center">
            You Have 7 Options. Let's Find the Right One.
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                num: '1',
                title: 'Loan Modification',
                desc: 'Reduce your monthly payment by modifying your existing loan terms.',
              },
              {
                num: '2',
                title: 'Refinancing',
                desc: 'Replace your current loan with a new one at better terms if you qualify.',
              },
              {
                num: '3',
                title: 'Forbearance or Deferment',
                desc: 'Temporarily pause or reduce payments while you get back on your feet.',
              },
              {
                num: '4',
                title: 'Short Sale',
                desc: 'Sell your home for less than owed with lender approval.',
              },
              {
                num: '5',
                title: 'Loan-to-Value Refinance',
                desc: 'Tap your home equity to pay off debt or cover expenses.',
              },
              {
                num: '6',
                title: 'Bankruptcy Protection',
                desc: 'Explore Chapter 13 bankruptcy to restructure debt and keep your home.',
              },
              {
                num: '7',
                title: 'Sell to a Cash Buyer',
                desc: 'Sell your home quickly for cash ~ no repairs, no agents, 14-30 days.',
              },
              {
                num: '?',
                title: 'Not Sure?',
                desc: 'Take our quiz to understand which options apply to your situation.',
              },
            ].map((option, idx) => (
              <div key={idx} className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                <div className="flex items-start gap-4">
                  <div className="text-3xl font-bold text-blue-600 flex-shrink-0">{option.num}</div>
                  <div>
                    <h3 className="font-semibold text-lg text-gray-900">{option.title}</h3>
                    <p className="text-gray-600">{option.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Featured Guides */}
        <div className="mb-16 bg-blue-50 p-8 rounded-lg">
          <h2 className="text-3xl font-bold text-blue-900 mb-6">Featured Guides</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Link href="/guides/foreclosure-101" className="bg-white p-6 rounded-lg hover:shadow-lg transition">
              <h3 className="font-semibold text-lg text-blue-900 mb-2">Foreclosure 101</h3>
              <p className="text-gray-600">Understand what's happening, your rights, and your timeline.</p>
            </Link>
            <Link href="/guides/options" className="bg-white p-6 rounded-lg hover:shadow-lg transition">
              <h3 className="font-semibold text-lg text-blue-900 mb-2">7 Options Explained</h3>
              <p className="text-gray-600">Detailed breakdown of each option to keep or sell your home.</p>
            </Link>
            <Link href="/guides/cash-sale" className="bg-white p-6 rounded-lg hover:shadow-lg transition">
              <h3 className="font-semibold text-lg text-blue-900 mb-2">Cash Sale Guide</h3>
              <p className="text-gray-600">How to sell your home quickly for cash ~ the process explained.</p>
            </Link>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gray-900 text-white p-12 rounded-lg text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Understand Your Options?</h2>
          <p className="text-lg mb-6 text-gray-300">Take our 2-minute quiz to get personalized guidance based on your situation.</p>
          <Link
            href="/quiz"
            className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
          >
            Start the Quiz Now
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-12">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="font-semibold text-white mb-3">About</h3>
              <p className="text-sm">NJ Foreclosure Guide provides honest, unbiased information to help distressed homeowners in New Jersey.</p>
            </div>
            <div>
              <h3 className="font-semibold text-white mb-3">Resources</h3>
              <ul className="text-sm space-y-2">
                <li><Link href="/guides" className="hover:text-white">Guides</Link></li>
                <li><Link href="/resources" className="hover:text-white">Directory</Link></li>
                <li><Link href="/companies" className="hover:text-white">Trusted Partners</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-white mb-3">Legal</h3>
              <ul className="text-sm space-y-2">
                <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white">Terms of Use</a></li>
                <li><a href="#" className="hover:text-white">Disclaimer</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-white mb-3">Contact</h3>
              <p className="text-sm">Need help? Email us anytime.<br /><a href="mailto:help@njforeclosureguide.org" className="text-blue-400 hover:text-blue-300">help@njforeclosureguide.org</a></p>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-sm">
            <p>&copy; 2024 NJ Foreclosure Guide. All rights reserved. This is an educational resource, not legal or financial advice.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
