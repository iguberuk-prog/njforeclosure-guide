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

      {/* Hero Section ~ LUXURY DESIGN */}
      <section className="relative w-full overflow-hidden">
        <img
          src="/images/hero-banner-luxury.png"
          alt="Premium Foreclosure Solutions - Professional Guidance"
          className="w-full h-auto object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center z-10">
            <Link
              href="/quiz"
              className="inline-block bg-yellow-500 text-navy px-10 py-4 rounded-lg font-bold hover:bg-yellow-400 transition text-lg shadow-2xl hover:shadow-3xl transform hover:scale-105"
            >
              Get Your Free Consultation →
            </Link>
          </div>
        </div>
      </section>

      {/* Main Content ~ LUXURY SECTION */}
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16 text-center">
            <h2 className="text-4xl font-bold text-white mb-6">
              7 Premium Solutions for Your Situation
            </h2>
            <p className="text-xl text-blue-100 mb-12">
              Personalized guidance from New Jersey's trusted foreclosure advisors
            </p>

            {/* Option Cards Grid */}
            <div className="grid md:grid-cols-2 gap-6 mt-12">
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
                <div key={idx} className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-lg border-2 border-blue-200 hover:border-yellow-500 transition shadow-lg">
                  <div className="flex items-start gap-4">
                    <div className="text-3xl font-bold text-blue-600 flex-shrink-0 bg-white rounded-lg w-12 h-12 flex items-center justify-center">
                      {option.num}
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg text-blue-900">{option.title}</h3>
                      <p className="text-gray-700">{option.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Guides ~ LUXURY DESIGN */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <div className="mb-16 rounded-lg overflow-hidden shadow-lg">
          <img src="/images/guide-cards.png" alt="Featured Educational Guides" className="w-full h-auto object-cover mb-8" />
          <div className="px-8 pb-8">
            <h2 className="text-3xl font-bold text-blue-900 mb-8 text-center">Our Most Popular Guides</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <Link href="/guides/foreclosure-101" className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-lg hover:shadow-lg transition border-2 border-blue-200 hover:border-blue-600">
                <h3 className="font-semibold text-lg text-blue-900 mb-2">Foreclosure 101</h3>
                <p className="text-gray-700">Understand what is happening, your rights, and your timeline.</p>
                <div className="mt-4 text-blue-600 font-semibold">Read Guide →</div>
              </Link>
              <Link href="/guides/options" className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-lg hover:shadow-lg transition border-2 border-blue-200 hover:border-blue-600">
                <h3 className="font-semibold text-lg text-blue-900 mb-2">7 Options Explained</h3>
                <p className="text-gray-700">Detailed breakdown of each option to keep or sell your home.</p>
                <div className="mt-4 text-blue-600 font-semibold">Read Guide →</div>
              </Link>
              <Link href="/guides/cash-sale" className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-lg hover:shadow-lg transition border-2 border-blue-200 hover:border-blue-600">
                <h3 className="font-semibold text-lg text-blue-900 mb-2">Cash Sale Guide</h3>
                <p className="text-gray-700">How to sell your home quickly for cash ~ the process explained.</p>
                <div className="mt-4 text-blue-600 font-semibold">Read Guide →</div>
              </Link>
            </div>
          </div>
        </div>

        {/* CTA Section ~ Luxury Style */}
        <div className="bg-gradient-to-r from-blue-900 to-blue-800 text-white p-12 rounded-xl text-center shadow-2xl">
          <h2 className="text-3xl font-bold mb-4">Ready to Take Control?</h2>
          <p className="text-lg mb-6 text-blue-100">Get a personalized recommendation based on your unique situation with our 2-minute assessment.</p>
          <Link
            href="/quiz"
            className="inline-block bg-yellow-500 text-navy px-8 py-3 rounded-lg font-bold hover:bg-yellow-400 transition transform hover:scale-105 shadow-lg"
          >
            Start Your Free Assessment
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
