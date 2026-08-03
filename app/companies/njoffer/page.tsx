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
      <section className="bg-gradient-to-br from-blue-900 to-blue-950 py-20 px-4 text-white">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <div className="inline-block bg-red-600 text-white px-4 py-2 rounded-full text-sm font-bold mb-6">⚡ Fastest Solution in NJ</div>
            <h1 className="text-5xl md:text-6xl font-bold mb-4 leading-tight">
              Get Cash for Your Home in 14 Days
            </h1>
            <p className="text-xl text-blue-100 mb-4">
              Stop foreclosure. Get your offer. Get paid. No repairs needed, no waiting months.
            </p>
            <p className="text-lg text-blue-200">
              When time matters and you need cash now, NJOffer delivers solutions other companies cannot.
            </p>
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">Why Distressed Homeowners Choose NJOffer</h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          When foreclosure is imminent, you need a company that understands the urgency and treats you fairly. That's NJOffer.
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-gradient-to-br from-red-50 to-orange-50 p-8 rounded-lg border-l-4 border-red-600">
            <div className="text-4xl mb-4">⚡</div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Speed When Every Day Counts</h3>
            <p className="text-gray-700 mb-3">
              Average closing: 7-14 days. When foreclosure looms, speed is everything. We have capital ready and processes built for urgency.
            </p>
            <p className="text-sm text-gray-600 border-t pt-3">
              <strong>Why it matters:</strong> Every day closer to foreclosure sale means less negotiating power. We close before the sheriff comes.
            </p>
          </div>

          <div className="bg-gradient-to-br from-red-50 to-orange-50 p-8 rounded-lg border-l-4 border-red-600">
            <div className="text-4xl mb-4">💰</div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Cash in Hand, Not Promises</h3>
            <p className="text-gray-700 mb-3">
              We have capital on hand. No conditional offers. No waiting for financing approval. You know exactly when you'll be paid.
            </p>
            <p className="text-sm text-gray-600 border-t pt-3">
              <strong>Why it matters:</strong> When you need cash to move forward, waiting months for a traditional buyer doesn't help.
            </p>
          </div>

          <div className="bg-gradient-to-br from-red-50 to-orange-50 p-8 rounded-lg border-l-4 border-red-600">
            <div className="text-4xl mb-4">🏠</div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Sell As-Is ~ Your Home, Any Condition</h3>
            <p className="text-gray-700 mb-3">
              Roof leaking? Foundation cracks? We buy it. No inspections, appraisals, or repair requirements. No costs come out of your proceeds.
            </p>
            <p className="text-sm text-gray-600 border-t pt-3">
              <strong>Why it matters:</strong> Repairs eat 10-20% of home value. We absorb that cost, not you.
            </p>
          </div>

          <div className="bg-gradient-to-br from-red-50 to-orange-50 p-8 rounded-lg border-l-4 border-red-600">
            <div className="text-4xl mb-4">🤝</div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">We Understand ~ No Judgment</h3>
            <p className="text-gray-700 mb-3">
              We work with distressed homeowners every single day. Job loss, medical emergencies, life changes ~ we get it. We treat you like a person, not a transaction.
            </p>
            <p className="text-sm text-gray-600 border-t pt-3">
              <strong>Why it matters:</strong> When you are stressed and scared, you deserve respect and clarity, not pressure.
            </p>
          </div>

          <div className="bg-gradient-to-br from-red-50 to-orange-50 p-8 rounded-lg border-l-4 border-red-600">
            <div className="text-4xl mb-4">📋</div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Full Transparency ~ No Hidden Fees</h3>
            <p className="text-gray-700 mb-3">
              We tell you your offer, our offer, and the timeline upfront. No surprise deductions at closing. You know exactly what you walk away with.
            </p>
            <p className="text-sm text-gray-600 border-t pt-3">
              <strong>Why it matters:</strong> You deserve to know the full truth before deciding. That is how we earn trust.
            </p>
          </div>

          <div className="bg-gradient-to-br from-red-50 to-orange-50 p-8 rounded-lg border-l-4 border-red-600">
            <div className="text-4xl mb-4">🎯</div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">All 21 NJ Counties ~ We Are Local</h3>
            <p className="text-gray-700 mb-3">
              From Bergen to Cape May, we buy homes across New Jersey. We understand local markets, local courts, and local urgency.
            </p>
            <p className="text-sm text-gray-600 border-t pt-3">
              <strong>Why it matters:</strong> National companies are slow. We know NJ foreclosure law and move accordingly.
            </p>
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

      {/* Success Stories with Numbers */}
      <section className="bg-gray-50 py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-4">Real Stories from Real NJ Homeowners</h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            These are actual outcomes from people who chose to work with NJOffer when foreclosure felt inevitable.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                name: 'Maria S.',
                location: 'Newark, NJ',
                situation: '90 days behind on $185K mortgage',
                stats: 'Received: $82,000 | Closed: 14 days',
                quote:
                  'I thought I was losing everything. My lender said foreclosure was 60 days away. NJOffer gave me an offer in 24 hours. I got cash I could actually use and kept my family stable. They saved us.',
                rating: 5,
              },
              {
                name: 'Tom R.',
                location: 'Bergen County, NJ',
                situation: 'Inherited property needing $40K in repairs',
                stats: 'Received: $95,000 | Closed: 18 days',
                quote:
                  "I inherited my uncle's house but it needed major work. No bank would loan on it. NJOffer bought it as-is. I got fair money without doing repairs. Professional and honest from day one.",
                rating: 5,
              },
              {
                name: 'Jennifer M.',
                location: 'Jersey City, NJ',
                situation: 'Divorce settlement requiring quick sale',
                stats: 'Received: $156,000 | Closed: 11 days',
                quote:
                  'Going through divorce, I needed to move on without realtor fees or months of waiting. NJOffer understood my timeline and delivered. Exactly what I needed, when I needed it.',
                rating: 5,
              },
              {
                name: 'David K.',
                location: 'Paterson, NJ',
                situation: 'Lost job, 60 days from foreclosure sale',
                stats: 'Received: $127,000 | Closed: 10 days',
                quote:
                  'I lost my job mid-pandemic. Couldn\'t make payments. Every day I was stressed about losing my home. NJOffer moved fast, was empathetic, and gave me real cash to restart. Literally life-changing.',
                rating: 5,
              },
            ].map((testimonial, idx) => (
              <div key={idx} className="bg-white p-8 rounded-lg shadow-md border-l-4 border-red-600">
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-yellow-400 text-lg">★</span>
                  ))}
                </div>
                <p className="text-red-600 font-bold text-sm mb-2">{testimonial.stats}</p>
                <p className="text-gray-700 mb-4 italic leading-relaxed text-sm">"{testimonial.quote}"</p>
                <div className="pt-4 border-t border-gray-200">
                  <p className="font-bold text-gray-900">{testimonial.name}</p>
                  <p className="text-gray-600 text-sm">{testimonial.location}</p>
                  <p className="text-gray-500 text-xs mt-1">{testimonial.situation}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Form - High Priority */}
      <section className="bg-gradient-to-br from-blue-900 to-blue-950 py-16 px-4">
        <div className="max-w-2xl mx-auto bg-white p-12 rounded-lg shadow-2xl">
          <h2 className="text-3xl font-bold text-gray-900 mb-2 text-center">
            Get Your Offer Today
          </h2>
          <p className="text-center text-red-600 font-semibold mb-4">
            No obligation. Takes 2 minutes.
          </p>
          <p className="text-center text-gray-700 mb-8">
            Provide basic info about your property. We will review and send you a competitive cash offer by tomorrow morning.
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <input
                type="email"
                placeholder="Your Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent"
                required
              />
            </div>
            <div>
              <input
                type="tel"
                placeholder="Your Phone (we prefer this)"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-red-600 text-white py-4 rounded-lg font-bold hover:bg-red-700 transition text-lg shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              Get Your Cash Offer →
            </button>
          </form>

          <div className="mt-6 pt-6 border-t border-gray-200 space-y-3 text-sm text-gray-600">
            <p className="flex items-center gap-2">
              <span className="text-green-600 font-bold">✓</span> 100% Free ~ No fees, no obligations
            </p>
            <p className="flex items-center gap-2">
              <span className="text-green-600 font-bold">✓</span> Offer in 24 hours
            </p>
            <p className="flex items-center gap-2">
              <span className="text-green-600 font-bold">✓</span> Fully confidential ~ Your information is private
            </p>
            <p className="flex items-center gap-2">
              <span className="text-green-600 font-bold">✓</span> Close in 7-30 days ~ your timeline
            </p>
          </div>
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
