'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function NJOfferPage() {
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Thanks! We'll contact you at ${email} or ${phone}`);
    setEmail('');
    setPhone('');
  };

  return (
    <div className="min-h-full bg-white">
      {/* Navigation */}
      <nav className="sticky top-0 bg-white border-b border-gray-200 z-40">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex justify-between items-center">
          <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition">
            <img src="/images/logo-nj-foreclosure-guide.jpg" alt="NJ Foreclosure Guide" className="h-10 w-auto" />
            <span className="text-lg font-bold text-blue-900 hidden sm:block">NJ Foreclosure Guide</span>
          </Link>
          <Link href="/companies" className="text-gray-600 hover:text-blue-900">
            ← Back to Companies
          </Link>
        </div>
      </nav>

      {/* Hero */}
      <section className="bg-gradient-to-br from-red-50 to-orange-50 py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-4 mb-6">
            <span className="text-5xl">⚡</span>
            <div>
              <h1 className="text-4xl font-bold text-red-900">NJOffer</h1>
              <p className="text-xl text-orange-700">The Fastest Rescue</p>
            </div>
          </div>
          <p className="text-lg text-gray-700">
            Facing foreclosure or in financial crisis? NJOffer specializes in getting you cash fast ~ in as little as 14 days ~ with no repairs, no appraisals, and no complications.
          </p>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Why Choose NJOffer?</h2>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="flex gap-4">
            <div className="text-4xl flex-shrink-0">⚡</div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Fastest Closing Timeline</h3>
              <p className="text-gray-700">
                Most home buyers take 30-60 days. NJOffer closes in 7-14 days. When you're in crisis, speed matters.
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="text-4xl flex-shrink-0">💰</div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Capital Ready to Close</h3>
              <p className="text-gray-700">
                We have cash on hand. No waiting for financing approval. No appraisals. No contingencies.
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="text-4xl flex-shrink-0">🏠</div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Buy As-Is, No Repairs</h3>
              <p className="text-gray-700">
                Sell your home in any condition. Roof leaking? Foundation issues? We buy as-is. You don't pay for repairs.
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="text-4xl flex-shrink-0">🤝</div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Understand Your Situation</h3>
              <p className="text-gray-700">
                We specialize in helping distressed homeowners. We know what foreclosure feels like. We treat you with dignity.
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="text-4xl flex-shrink-0">📋</div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Transparent Process</h3>
              <p className="text-gray-700">
                No hidden fees. No surprises. We tell you upfront what you'll get and when we'll close.
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="text-4xl flex-shrink-0">🎯</div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">All of NJ Covered</h3>
              <p className="text-gray-700">
                We buy homes in all 21 New Jersey counties. Bergen to Cape May ~ we're there.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="bg-gray-50 py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">The Process is Simple</h2>

          <div className="space-y-6">
            {[
              {
                num: '1',
                title: 'Tell Us About Your Home',
                desc: 'Share basic info: address, condition, timeline. Takes 5 minutes.',
              },
              {
                num: '2',
                title: 'Get Your Offer in 24 Hours',
                desc: 'We assess your property and make a competitive cash offer.',
              },
              {
                num: '3',
                title: 'Accept or Negotiate',
                desc: 'You review the offer. Negotiate if you want. Full transparency.',
              },
              {
                num: '4',
                title: 'Inspections & Paperwork',
                desc: 'Our team handles appraisals, title work, and all legal paperwork.',
              },
              {
                num: '5',
                title: 'Close & Get Paid',
                desc: 'Close in 7-30 days depending on your timeline. Cash in your account.',
              },
            ].map((step, idx) => (
              <div key={idx} className="flex gap-6">
                <div className="bg-red-600 text-white w-12 h-12 rounded-full flex items-center justify-center font-bold flex-shrink-0 text-lg">
                  {step.num}
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{step.title}</h3>
                  <p className="text-gray-700">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials ~ Professional Background */}
      <section className="relative py-16 px-4 rounded-lg overflow-hidden">
        <img src="/images/testimonials-bg.png" alt="Customer Testimonials Background" className="absolute inset-0 w-full h-full object-cover -z-10" />
        <div className="max-w-6xl mx-auto relative z-10">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">What Our Customers Say</h2>

          <div className="grid md:grid-cols-2 gap-8">
          {[
            {
              name: 'Maria S.',
              situation: 'In foreclosure, needed cash immediately',
              quote:
                'I was 90 days behind on my mortgage. NJOffer called, understood my situation immediately, and gave me an offer within 24 hours. We closed in 14 days. They saved my family.',
            },
            {
              name: 'Tom R.',
              situation: 'Inherited property, wanted quick sale',
              quote:
                "Inherited my uncle's house in Bergen County. It needed work. NJOffer handled everything. I got a fair offer and cash in 18 days without any stress.",
            },
            {
              name: 'Jennifer M.',
              situation: 'Going through divorce, needed quick solution',
              quote:
                'During my divorce, I needed to sell fast and keep things simple. NJOffer made it easy. No realtor, no repairs, no waiting.',
            },
            {
              name: 'David K.',
              situation: 'Lost job, facing foreclosure',
              quote:
                'I lost my job and couldn\'t make payments. NJOffer was empathetic and professional. They gave me options and closed in 10 days. Life-changing.',
            },
          ].map((testimonial, idx) => (
            <div key={idx} className="bg-gradient-to-br from-red-50 to-orange-50 p-8 rounded-lg border-l-4 border-red-600">
              <div className="flex items-center gap-2 mb-4">
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-yellow-400">★</span>
                  ))}
                </div>
              </div>
              <p className="text-gray-700 mb-4 italic">"{testimonial.quote}"</p>
              <p className="font-semibold text-gray-900">~ {testimonial.name}</p>
              <p className="text-sm text-gray-600">{testimonial.situation}</p>
            </div>
          ))}
          </div>
        </div>
      </section>

      {/* CTA Form */}
      <section className="bg-gradient-to-br from-red-600 to-orange-600 py-16 px-4">
        <div className="max-w-2xl mx-auto bg-white p-12 rounded-lg">
          <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">
            Ready to Get Your Offer?
          </h2>
          <p className="text-center text-gray-700 mb-8">
            Fill out the form below. We'll review your property and send you a competitive cash offer within 24 hours.
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="email"
              placeholder="Your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"
              required
            />
            <input
              type="tel"
              placeholder="Your Phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"
              required
            />
            <button
              type="submit"
              className="w-full bg-red-600 text-white py-3 rounded-lg font-semibold hover:bg-red-700 transition text-lg"
            >
              Get Your Free Offer
            </button>
          </form>

          <p className="text-center text-sm text-gray-600 mt-4">
            No obligation. No pressure. No fees. We'll call or email within 24 hours.
          </p>
        </div>
      </section>

      {/* Comparison with Other Options */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Why NJOffer Stands Out</h2>

        {/* Professional Comparison Infographic */}
        <div className="mb-12 rounded-lg overflow-hidden shadow-lg bg-white p-4">
          <img src="/images/comparison.png" alt="NJOffer vs Competitors Comparison" className="w-full h-auto object-cover rounded" />
        </div>

        <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center mt-12">Detailed Comparison</h3>
        <div className="overflow-x-auto">
          <table className="w-full bg-white rounded-lg shadow border border-gray-200">
            <thead className="bg-gray-100">
              <tr>
                <th className="px-6 py-4 text-left font-semibold">Feature</th>
                <th className="px-6 py-4 text-center font-semibold">NJOffer</th>
                <th className="px-6 py-4 text-center font-semibold">Traditional Agent</th>
                <th className="px-6 py-4 text-center font-semibold">National iBuyer</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-gray-200">
                <td className="px-6 py-4 font-semibold">Closing Time</td>
                <td className="px-6 py-4 text-center">7-14 days ✓</td>
                <td className="px-6 py-4 text-center">60-90 days</td>
                <td className="px-6 py-4 text-center">30-45 days</td>
              </tr>
              <tr className="border-b border-gray-200">
                <td className="px-6 py-4 font-semibold">As-Is Accepted</td>
                <td className="px-6 py-4 text-center">Yes ✓</td>
                <td className="px-6 py-4 text-center">Repairs Required</td>
                <td className="px-6 py-4 text-center">Conditional</td>
              </tr>
              <tr className="border-b border-gray-200">
                <td className="px-6 py-4 font-semibold">Cash Offer</td>
                <td className="px-6 py-4 text-center">Yes ✓</td>
                <td className="px-6 py-4 text-center">Depends on Buyer</td>
                <td className="px-6 py-4 text-center">Yes</td>
              </tr>
              <tr className="border-b border-gray-200">
                <td className="px-6 py-4 font-semibold">Local Expert</td>
                <td className="px-6 py-4 text-center">Yes ✓</td>
                <td className="px-6 py-4 text-center">Yes</td>
                <td className="px-6 py-4 text-center">No (Automated)</td>
              </tr>
              <tr className="border-b border-gray-200">
                <td className="px-6 py-4 font-semibold">Understands Distress</td>
                <td className="px-6 py-4 text-center">Yes ✓</td>
                <td className="px-6 py-4 text-center">Not Really</td>
                <td className="px-6 py-4 text-center">Algorithm Only</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-12">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center">
            <h3 className="font-semibold text-white mb-2">Ready to Talk?</h3>
            <p className="mb-2">Call us anytime: <a href="tel:7326840623" className="text-blue-400">732-684-0623</a></p>
            <p className="mb-4">Email: <a href="mailto:info@njoffer.com" className="text-blue-400">info@njoffer.com</a></p>
            <p className="text-sm border-t border-gray-800 pt-8 mt-8">
              &copy; 2024 NJOffer. Licensed Real Estate Professional. Not legal or financial advice.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
