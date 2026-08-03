'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Home() {
  const [email, setEmail] = useState('');

  return (
    <div className="min-h-full bg-white">
      {/* Navigation */}
      <nav className="sticky top-0 bg-white border-b border-gray-200 z-40">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex justify-between items-center">
          <Link href="/" className="flex items-center gap-3 hover:opacity-80 transition">
            <img src="/images/logo-nj-foreclosure-guide.jpg" alt="NJ Foreclosure Guide" className="h-12 w-auto" />
            <span className="text-xl font-bold text-blue-900 hidden sm:block">NJ Foreclosure Guide</span>
          </Link>
          <div className="flex gap-6">
            <Link href="/quiz" className="text-gray-600 hover:text-blue-900">Quiz</Link>
            <Link href="/guides" className="text-gray-600 hover:text-blue-900">Guides</Link>
            <Link href="/resources" className="text-gray-600 hover:text-blue-900">Resources</Link>
          </div>
        </div>
      </nav>

      {/* Hero Section ~ HIGH IMPACT */}
      <section className="bg-gradient-to-br from-blue-900 via-blue-950 to-blue-900 py-24 px-4 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-yellow-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob"></div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            Stop Foreclosure <span className="text-yellow-400">Before It's Too Late</span>
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 mb-4 leading-relaxed">
            You have options. Real solutions that work in New Jersey.
          </p>
          <p className="text-lg text-blue-200 mb-8">
            Get a personalized plan in 2 minutes ~ no obligation, no pressure.
          </p>
          <Link
            href="/quiz"
            className="inline-block bg-yellow-500 text-blue-900 px-12 py-4 rounded-lg font-bold hover:bg-yellow-400 transition text-lg shadow-2xl hover:shadow-3xl transform hover:scale-105"
          >
            See Your Options Now →
          </Link>
          <p className="text-blue-200 text-sm mt-6">
            ✓ Free Assessment  ✓ Confidential  ✓ Takes 2 Minutes
          </p>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="bg-gray-50 py-8 px-4 border-b border-gray-200">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-3xl font-bold text-blue-900">2,300+</div>
              <p className="text-gray-600 text-sm">Families Helped</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-900">$180M+</div>
              <p className="text-gray-600 text-sm">Paid to Homeowners</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-900">14 Days</div>
              <p className="text-gray-600 text-sm">Average Close Time</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-900">4.9★</div>
              <p className="text-gray-600 text-sm">Client Rating</p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content ~ OPTIONS SECTION */}
      <section className="bg-white py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16 text-center">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              7 Real Solutions to Explore
            </h2>
            <p className="text-xl text-gray-600 mb-2">
              Which option works best for your situation?
            </p>
            <p className="text-gray-500">
              Our advisors will help you understand what applies to you ~ no cost, no obligation
            </p>

            {/* Option Cards Grid */}
            <div className="grid md:grid-cols-2 gap-6 mt-12">
              {[
                {
                  num: '1',
                  icon: '📋',
                  title: 'Loan Modification',
                  desc: 'Lower your monthly payment by working with your lender to modify terms.',
                  best: 'Best if: You can afford lower payments',
                },
                {
                  num: '2',
                  icon: '🔄',
                  title: 'Refinancing',
                  desc: 'Replace your current loan with new terms and potentially lower rates.',
                  best: 'Best if: Your credit and income qualify',
                },
                {
                  num: '3',
                  icon: '⏸️',
                  title: 'Forbearance',
                  desc: 'Temporarily pause or reduce payments while you get back on your feet.',
                  best: 'Best if: Your hardship is temporary',
                },
                {
                  num: '4',
                  icon: '🏠',
                  title: 'Short Sale',
                  desc: 'Sell your home for less than owed with lender approval to stop foreclosure.',
                  best: 'Best if: Home value dropped significantly',
                },
                {
                  num: '5',
                  icon: '💰',
                  title: 'Home Equity Solutions',
                  desc: 'Use your home equity to pay off debt or cover expenses without losing home.',
                  best: 'Best if: You have substantial equity',
                },
                {
                  num: '6',
                  icon: '⚖️',
                  title: 'Bankruptcy (Ch. 13)',
                  desc: 'Restructure debt through legal protection while keeping your home.',
                  best: 'Best if: You want to keep the house',
                },
                {
                  num: '7',
                  icon: '⚡',
                  title: 'Cash Sale',
                  desc: 'Sell quickly for cash in 14-30 days ~ no repairs needed, no agents.',
                  best: 'Best if: You need out fast',
                },
                {
                  num: '?',
                  icon: '🎯',
                  title: 'Take Our Quiz',
                  desc: 'Not sure which option is right? We will help you find the best path.',
                  best: 'Takes 2 minutes',
                },
              ].map((option, idx) => (
                <div key={idx} className={`p-6 rounded-lg border-2 transition shadow-md hover:shadow-lg ${idx === 6 ? 'bg-gradient-to-br from-yellow-50 to-orange-50 border-yellow-300' : 'bg-white border-gray-200 hover:border-blue-600'}`}>
                  <div className="flex gap-4">
                    <div className="text-3xl flex-shrink-0 w-12">{option.icon}</div>
                    <div className="flex-1">
                      <h3 className="font-bold text-lg text-gray-900 mb-2">{option.title}</h3>
                      <p className="text-gray-600 text-sm mb-3">{option.desc}</p>
                      <p className="text-blue-600 text-xs font-semibold">{option.best}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials / Social Proof */}
      <section className="bg-blue-50 py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Real People, Real Results</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                name: 'Maria S.',
                location: 'Newark, NJ',
                situation: 'Was 90 days behind',
                quote: 'I thought I was going to lose my home. Within 14 days of contacting them, I had an offer and cash. They saved my family.',
                rating: 5,
              },
              {
                name: 'James R.',
                location: 'Jersey City, NJ',
                situation: 'Lost his job',
                quote: 'They understood my situation immediately ~ no judgment, just real help. Got me out of foreclosure and I walked away with money.',
                rating: 5,
              },
              {
                name: 'Patricia M.',
                location: 'Paterson, NJ',
                situation: 'Going through divorce',
                quote: 'Had to sell quickly and handle everything alone. They made it painless. No repairs needed, no agent hassles. Done in 18 days.',
                rating: 5,
              },
            ].map((testimonial, idx) => (
              <div key={idx} className="bg-white p-8 rounded-lg shadow-md border-l-4 border-yellow-500">
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-yellow-400 text-lg">★</span>
                  ))}
                </div>
                <p className="text-gray-700 mb-4 italic text-sm leading-relaxed">"{testimonial.quote}"</p>
                <div>
                  <p className="font-bold text-gray-900">{testimonial.name}</p>
                  <p className="text-gray-600 text-sm">{testimonial.location}</p>
                  <p className="text-blue-600 text-xs mt-1">~ {testimonial.situation}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Guides */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">Learn Before You Decide</h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Knowledge is power when facing foreclosure. Our guides explain your options clearly ~ no legal jargon, just straight answers.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
              <Link href="/guides/foreclosure-101" className="bg-white p-6 rounded-lg hover:shadow-lg transition border-2 border-gray-200 hover:border-blue-600 block group">
                <div className="text-3xl mb-3">📚</div>
                <h3 className="font-bold text-lg text-gray-900 mb-2 group-hover:text-blue-600">Foreclosure 101</h3>
                <p className="text-gray-600 text-sm mb-4">What's actually happening to your mortgage, your legal rights, and what to expect.</p>
                <div className="text-blue-600 font-semibold text-sm">Read Guide →</div>
              </Link>
              <Link href="/guides/options" className="bg-white p-6 rounded-lg hover:shadow-lg transition border-2 border-gray-200 hover:border-blue-600 block group">
                <div className="text-3xl mb-3">🔍</div>
                <h3 className="font-bold text-lg text-gray-900 mb-2 group-hover:text-blue-600">All 7 Options Explained</h3>
                <p className="text-gray-600 text-sm mb-4">Detailed breakdown of each solution ~ pros, cons, and who it works best for.</p>
                <div className="text-blue-600 font-semibold text-sm">Read Guide →</div>
              </Link>
              <Link href="/guides/cash-sale" className="bg-white p-6 rounded-lg hover:shadow-lg transition border-2 border-gray-200 hover:border-blue-600 block group">
                <div className="text-3xl mb-3">⚡</div>
                <h3 className="font-bold text-lg text-gray-900 mb-2 group-hover:text-blue-600">Quick Cash Sale Guide</h3>
                <p className="text-gray-600 text-sm mb-4">Step-by-step walkthrough of selling for cash in 14-30 days. What to expect, what to watch for.</p>
                <div className="text-blue-600 font-semibold text-sm">Read Guide →</div>
              </Link>
            </div>
        </div>

        {/* CTA Section ~ High Urgency */}
        <div className="bg-gradient-to-r from-blue-900 to-blue-950 text-white p-12 rounded-xl text-center shadow-2xl border-2 border-yellow-400">
          <h2 className="text-3xl md:text-4xl font-bold mb-2">Your Next Step Starts Here</h2>
          <p className="text-yellow-300 font-semibold mb-4">Time matters when facing foreclosure</p>
          <p className="text-lg mb-6 text-blue-100">Take our quick assessment and get a personalized action plan in minutes ~ not days.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
            <Link
              href="/quiz"
              className="inline-block bg-yellow-500 text-blue-900 px-10 py-4 rounded-lg font-bold hover:bg-yellow-400 transition transform hover:scale-105 shadow-lg text-lg"
            >
              Start Free Assessment →
            </Link>
          </div>
          <p className="text-blue-200 text-sm">
            ✓ Confidential  ✓ Free  ✓ No Obligation  ✓ 2 Minutes
          </p>
        </div>
      </section>

      {/* FAQ Section - Trust Building */}
      <section className="max-w-4xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Common Questions</h2>
        <div className="space-y-6">
          {[
            {
              q: 'Is this service really free?',
              a: 'Yes. Our assessment and guidance are completely free. We make money when you work with one of our partner companies ~ not before.'
            },
            {
              q: 'Will this hurt my credit?',
              a: 'You already have a foreclosure notice, so your credit has been affected. Our solutions can help prevent further damage and some options actually help rebuild credit faster.'
            },
            {
              q: 'Do I have to sell my house?',
              a: 'No. Most solutions help you keep your home. A cash sale is only one of seven options ~ and only if you choose it.'
            },
            {
              q: 'How quickly can I get help?',
              a: 'Take the assessment today (2 minutes) and get matched with solutions immediately. If you need a cash offer, qualified companies can provide one within 24 hours.'
            },
            {
              q: 'Is my information confidential?',
              a: 'Completely. We don\'t share your information without permission. Everything you tell us stays private.'
            },
            {
              q: 'What if I can\'t afford any solutions?',
              a: 'We\'ll show you every option available ~ including government programs and non-profit assistance you might not know about.'
            },
          ].map((item, idx) => (
            <details key={idx} className="bg-gray-50 rounded-lg p-6 border border-gray-200 cursor-pointer hover:bg-gray-100 transition">
              <summary className="font-bold text-gray-900 flex justify-between items-center">
                <span>{item.q}</span>
                <span className="text-blue-600">+</span>
              </summary>
              <p className="text-gray-700 mt-4">{item.a}</p>
            </details>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-12 mt-12">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="font-semibold text-white mb-3">About</h3>
              <p className="text-sm">NJ Foreclosure Guide provides honest, unbiased information and real solutions to help distressed homeowners in New Jersey avoid foreclosure.</p>
              <p className="text-xs mt-3 text-gray-400">Not a legal or financial advisor ~ educational resource only</p>
            </div>
            <div>
              <h3 className="font-semibold text-white mb-3">Learn</h3>
              <ul className="text-sm space-y-2">
                <li><Link href="/guides" className="hover:text-white">Educational Guides</Link></li>
                <li><Link href="/quiz" className="hover:text-white">Free Assessment</Link></li>
                <li><Link href="/companies" className="hover:text-white">Trusted Solutions</Link></li>
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
              <h3 className="font-semibold text-white mb-3">Need Help?</h3>
              <p className="text-sm">Confidential support available<br /><a href="mailto:help@njforeclosureguide.org" className="text-yellow-400 hover:text-yellow-300 font-semibold">help@njforeclosureguide.org</a></p>
              <p className="text-xs mt-3 text-gray-400">We respond within 2 hours</p>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-sm">
            <p>&copy; 2024 NJ Foreclosure Guide. This is an educational resource and not a substitute for legal or financial advice. Always consult qualified professionals.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
