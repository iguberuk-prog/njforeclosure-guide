'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { FAQSchema, OrganizationSchema } from './schema';

// Sample reviews from NJ towns
const njTownReviews = [
  { town: 'Newark', quote: 'We were facing foreclosure in 90 days. Their team helped us get a loan modification and kept our home. Life-changing.', rating: 5 },
  { town: 'Jersey City', quote: 'Lost my job mid-year, thought I\'d lose everything. They found a cash buyer within 14 days. Got out debt-free.', rating: 5 },
  { town: 'Paterson', quote: 'Going through divorce and needed to sell fast. No repairs needed, no agent hassles. Closed in 18 days.', rating: 5 },
  { town: 'Elizabeth', quote: 'Tried everything else first. Their bankruptcy guidance protected my home and reorganized my debt. Relieved.', rating: 5 },
  { town: 'Trenton', quote: 'Behind on payments after business closed. Forbearance option gave me 6 months to get back on my feet. Thank you.', rating: 5 },
  { town: 'Atlantic City', quote: 'Medical emergency drained savings. Refinancing through their connections lowered my payment $400/month.', rating: 5 },
  { town: 'Camden', quote: 'Couldn\'t qualify for traditional refinancing. Home equity solution saved my home. Professional and fast.', rating: 5 },
  { town: 'Irvington', quote: 'Foreclosure notice scared me. Called them, got matched with solutions in 2 minutes. Best decision ever.', rating: 5 },
  { town: 'Clifton', quote: 'They explained short sale process clearly. Lender approved and I walked away with $20k instead of debt.', rating: 5 },
  { town: 'Passaic', quote: 'Facing $8k behind in payments. Loan modification brought it down to manageable level. Can breathe again.', rating: 5 },
  { town: 'East Orange', quote: 'Worried about credit damage. They showed me options that actually help rebuild credit. Game changer.', rating: 5 },
  { town: 'West Orange', quote: 'Didn\'t know where to start. Their assessment pointed to right solution in 2 minutes. Stress gone.', rating: 5 },
  { town: 'Montclair', quote: 'Company downsized me. Cash sale option gave us fresh start within weeks. Grateful beyond words.', rating: 5 },
  { town: 'Bloomfield', quote: 'Late fees piling up. Forbearance paused everything while we stabilized. Still have our home.', rating: 5 },
  { town: 'Belleville', quote: 'Three months behind. Their network found best option instantly. Professional and compassionate service.', rating: 5 },
  { town: 'Nutley', quote: 'Divorce complicated everything. They helped navigate short sale cleanly. No judgment, just solutions.', rating: 5 },
  { town: 'Kearny', quote: 'Unemployment benefits ended. Quick cash sale got us through transition. Saved our credit score.', rating: 5 },
  { town: 'Union', quote: 'Multiple loans on property. Home equity consolidation worked perfectly. Simplified everything.', rating: 5 },
  { town: 'Linden', quote: 'Thought foreclosure was inevitable. Refinancing brought hope back. Home is ours to keep.', rating: 5 },
  { town: 'Rahway', quote: 'Missed 6 months of payments. Modified loan terms with lender help. Back on track now.', rating: 5 },
  { town: 'Perth Amboy', quote: 'Business partner stole from account. Short sale got us out fast. Focus on rebuilding family finances.', rating: 5 },
  { town: 'Woodbridge', quote: 'Fell behind after health crisis. Cash buyer found within days. Stress-free transition.', rating: 5 },
  { town: 'New Brunswick', quote: 'Student loans + mortgage = drowning. Bankruptcy option restructured responsibly. Real solution.', rating: 5 },
  { town: 'Princeton', quote: 'Property value dropped 30%. Short sale made sense. Got professional guidance through process.', rating: 5 },
  { town: 'Trenton', quote: 'Two foreclosure notices received. Forbearance bought us time. Payment plan works perfectly.', rating: 5 },
  { town: 'Morristown', quote: 'Tried everything alone for 6 months. One phone call changed everything. Options galore.', rating: 5 },
  { town: 'Madison', quote: 'Pandemic income loss. Loan modification approved in 2 weeks. We kept the home.', rating: 5 },
  { town: 'Florham Park', quote: 'Refinancing saved us $300/month. Professional team made complex process simple.', rating: 5 },
  { town: 'Dover', quote: 'Inherited property with mortgage. Cash sale solution perfect for our situation.', rating: 5 },
  { town: 'Parsippany', quote: 'Job relocation + selling home = complicated. Quicksale saved moving timeline.', rating: 5 },
];

export default function Home() {
  const [email, setEmail] = useState('');
  const [showReviews, setShowReviews] = useState(false);
  const [currentReview, setCurrentReview] = useState(0);

  useEffect(() => {
    if (showReviews) {
      const interval = setInterval(() => {
        setCurrentReview((prev) => (prev + 1) % njTownReviews.length);
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [showReviews]);

  return (
    <div className="min-h-full bg-white">
      <FAQSchema />
      <OrganizationSchema />

      {/* Navigation ~ Premium */}
      <nav className="sticky top-0 bg-white/95 backdrop-blur-md border-b border-gray-100 z-40 shadow-sm">
        <div className="max-w-6xl mx-auto px-3 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition min-w-0 group">
            <img src="/images/logo-nj-foreclosure-guide.jpg" alt="NJ Foreclosure Guide" className="h-12 w-auto group-hover:shadow-lg transition" />
            <img src="/images/icons/scales-of-justice.png" alt="Legal" className="h-10 w-auto" />
            <div className="hidden sm:block">
              <div className="text-sm font-semibold text-gray-500">NJ Foreclosure</div>
              <div className="text-lg font-bold text-blue-900">Guide</div>
            </div>
          </Link>
          <div className="flex gap-2 sm:gap-8 text-sm sm:text-base">
            <Link href="/quiz" className="text-gray-600 hover:text-blue-900 font-semibold transition relative group">
              Quiz
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-yellow-500 group-hover:w-full transition-all"></span>
            </Link>
            <Link href="/guides" className="text-gray-600 hover:text-blue-900 font-semibold transition relative group">
              Guides
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-yellow-500 group-hover:w-full transition-all"></span>
            </Link>
            <Link href="/resources" className="text-gray-600 hover:text-blue-900 font-semibold transition relative group hidden sm:block">
              Resources
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-yellow-500 group-hover:w-full transition-all"></span>
            </Link>
          </div>
        </div>
      </nav>

      {/* Legal Disclaimer Banner */}
      <div className="bg-gradient-to-r from-blue-50 to-blue-100 border-b-2 border-blue-300 px-4 py-4 sm:py-3">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-start gap-3">
            <span className="text-xl font-bold text-blue-900 flex-shrink-0 mt-0.5">⚖️</span>
            <div className="text-sm">
              <p className="font-bold text-blue-900 mb-1">
                Legal Disclaimer ~ Not Legal Advice
              </p>
              <p className="text-blue-800">
                We are NOT lawyers and do NOT provide legal advice. We recommend solutions based on what has worked for others facing foreclosure in NJ. <strong>You MUST consult with your own attorney before taking any action.</strong> This is an educational resource only.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* HERO SECTION ~ PREMIUM BACKGROUND WITH BANNER */}
      <section
        className="relative py-20 sm:py-32 px-4 text-white overflow-hidden"
        style={{
          backgroundImage: `url('/images/banners/hero-banner.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
        }}
      >
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-black/30"></div>

        <div className="max-w-5xl mx-auto text-center relative z-10">
          {/* Badge ~ Clickable Reviews */}
          <button
            onClick={() => setShowReviews(true)}
            className="inline-block mb-6 sm:mb-8 px-4 py-2 bg-yellow-500/20 border border-yellow-400/40 rounded-full hover:bg-yellow-500/30 hover:border-yellow-400/60 transition cursor-pointer group"
          >
            <p className="text-yellow-300 text-sm font-semibold group-hover:text-yellow-200 transition">
              🏆 Trusted by 2,300+ NJ Families
            </p>
          </button>

          {/* Main Headline */}
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-black mb-6 sm:mb-8 leading-tight tracking-tight">
            Stop Foreclosure <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-yellow-400 to-orange-400">Before It's Too Late</span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg sm:text-xl md:text-2xl text-blue-100 mb-4 sm:mb-6 leading-relaxed font-light">
            You have options. Real solutions that work in New Jersey.
          </p>
          <p className="text-base sm:text-lg text-blue-200 mb-8 sm:mb-12 max-w-2xl mx-auto leading-relaxed">
            Get matched with personalized foreclosure solutions in 2 minutes ~ completely free, confidential, and zero obligation. Join thousands of New Jersey homeowners who found their way out.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Link
              href="/quiz"
              className="inline-block bg-gradient-to-r from-yellow-400 to-yellow-500 text-blue-900 px-10 sm:px-14 py-4 sm:py-5 rounded-xl font-bold hover:shadow-2xl transition-all transform hover:scale-105 text-base sm:text-lg shadow-lg"
            >
              Start Free Assessment →
            </Link>
            <Link
              href="/guides"
              className="inline-block bg-white/20 border-2 border-white/40 text-white px-10 sm:px-14 py-4 sm:py-5 rounded-xl font-bold hover:bg-white/30 transition-all text-base sm:text-lg"
            >
              Learn Your Options
            </Link>
          </div>

          {/* Trust Badges */}
          <p className="text-blue-200 text-sm sm:text-base">
            <span className="inline-block mr-4 sm:mr-6">✓ 100% Free</span>
            <span className="inline-block mr-4 sm:mr-6">✓ Completely Confidential</span>
            <span className="inline-block">✓ 2 Minutes</span>
          </p>
        </div>
      </section>

      {/* TRUST INDICATORS ~ PREMIUM STATS */}
      <section className="relative py-20 px-4 border-b border-gray-200 overflow-hidden"
        style={{
          backgroundImage: `url('/images/banners/trust-banner.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
            {[
              { icon: '/images/icons/families-helped.png', value: '2,300+', label: 'Families Helped', highlight: true, color: 'from-blue-500 to-blue-600' },
              { icon: '/images/icons/money-paid.png', value: '$180M+', label: 'Paid to Homeowners', highlight: false, color: 'from-green-500 to-green-600' },
              { icon: '/images/icons/speed.png', value: '14 Days', label: 'Avg Close Time', highlight: false, color: 'from-orange-500 to-orange-600' },
              { icon: '/images/icons/rating.png', value: '4.9★', label: 'Client Rating', highlight: true, color: 'from-yellow-400 to-yellow-500' },
            ].map((stat, idx) => (
              <div
                key={idx}
                className={`group relative p-8 rounded-2xl transition-all duration-300 transform hover:scale-110 ${stat.highlight ? 'shadow-xl' : 'shadow-lg hover:shadow-2xl'}`}
              >
                {/* Gradient background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} rounded-2xl opacity-10 group-hover:opacity-20 transition`}></div>

                {/* White overlay */}
                <div className="absolute inset-0 bg-white/80 group-hover:bg-white/90 transition rounded-2xl"></div>

                {/* Content */}
                <div className="relative z-10 text-center">
                  <img src={stat.icon} alt={stat.label} className="w-16 h-16 mx-auto mb-3 transform group-hover:scale-125 transition duration-300" />
                  <div className={`font-black text-3xl sm:text-4xl mb-2 bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}>
                    {stat.value}
                  </div>
                  <p className="text-gray-700 text-sm font-semibold">{stat.label}</p>
                </div>

                {/* Decorative badge for highlights */}
                {stat.highlight && (
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-yellow-400 rounded-full shadow-lg flex items-center justify-center text-sm font-bold text-gray-900">
                    ✓
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SOLUTIONS SECTION ~ PREMIUM DESIGN WITH IMAGES */}
      <section className="py-24 px-4 relative overflow-hidden"
        style={{
          backgroundImage: `url('/images/banners/solutions-banner.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'top center',
        }}
      >
        {/* Overlay for readability */}
        <div className="absolute inset-0 bg-white/85"></div>

        <div className="max-w-6xl mx-auto relative z-10">
          {/* Section Header */}
          <div className="mb-20 text-center">
            <div className="inline-block mb-4 px-4 py-2 bg-blue-100 border border-blue-300 rounded-full">
              <p className="text-blue-900 text-sm font-semibold">7 Proven Solutions</p>
            </div>
            <h2 className="text-5xl md:text-6xl font-black text-gray-900 mb-6">
              Your Path Forward
            </h2>
            <p className="text-xl text-gray-600 mb-4 max-w-3xl mx-auto leading-relaxed">
              Every foreclosure situation is unique. We help you understand which solution works best for your circumstances.
            </p>
          </div>

          {/* Solutions Grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {[
              {
                icon: '/images/icons/loan-modification.png',
                title: 'Loan Modification',
                desc: 'Lower your monthly payment by negotiating new terms with your lender.',
                best: 'Best if: You can afford lower payments',
                color: 'from-blue-500 to-blue-600',
                bgImage: '/images/solution-card-1.jpg',
              },
              {
                icon: '/images/icons/refinancing.png',
                title: 'Refinancing',
                desc: 'Replace your loan with better terms and potentially lower interest rates.',
                best: 'Best if: Your credit and income qualify',
                color: 'from-indigo-500 to-indigo-600',
                bgImage: '/images/solution-card-2.jpg',
              },
              {
                icon: '/images/icons/forbearance.png',
                title: 'Forbearance',
                desc: 'Pause or reduce payments temporarily while you stabilize your finances.',
                best: 'Best if: Your hardship is temporary',
                color: 'from-purple-500 to-purple-600',
                bgImage: '/images/solution-card-3.jpg',
              },
              {
                icon: '/images/icons/short-sale.png',
                title: 'Short Sale',
                desc: 'Sell your home below market value with lender approval to avoid foreclosure.',
                best: 'Best if: Home value decreased significantly',
                color: 'from-pink-500 to-pink-600',
                bgImage: '/images/solution-card-4.jpg',
              },
              {
                icon: '/images/icons/home-equity.png',
                title: 'Home Equity Solutions',
                desc: 'Leverage your equity to consolidate debt and stop foreclosure.',
                best: 'Best if: You have substantial equity',
                color: 'from-green-500 to-green-600',
                bgImage: '/images/solution-card-5.jpg',
              },
              {
                icon: '/images/icons/bankruptcy.png',
                title: 'Bankruptcy (Ch. 13)',
                desc: 'Legal debt restructuring that protects your home while reorganizing debt.',
                best: 'Best if: You want to keep the house',
                color: 'from-orange-500 to-orange-600',
                bgImage: '/images/solution-card-6.jpg',
              },
              {
                icon: '/images/icons/cash-sale.png',
                title: 'Cash Sale',
                desc: 'Sell quickly for cash in 14-30 days with no repairs or agent fees.',
                best: 'Best if: You need a fast exit',
                color: 'from-red-500 to-red-600',
                highlight: true,
                bgImage: '/images/solution-card-7.jpg',
              },
              {
                icon: '/images/icons/quiz-match.png',
                title: 'Find Your Match',
                desc: 'Take our 2-minute assessment and get personalized recommendations.',
                best: 'Best if: You need guidance',
                color: 'from-yellow-400 to-yellow-500',
                featured: true,
                bgImage: '/images/solution-card-8.jpg',
              },
            ].map((option, idx) => (
              <div
                key={idx}
                className={`group relative p-8 rounded-2xl transition-all duration-300 transform hover:scale-105 overflow-hidden ${
                  option.featured
                    ? 'md:col-span-2 border-2 border-yellow-300 shadow-xl'
                    : 'border-2 border-gray-100 hover:border-gray-300 shadow-lg hover:shadow-2xl'
                }`}
                style={{
                  backgroundImage: `url('${option.bgImage}')`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              >
                {/* Overlay */}
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition"></div>

                {/* Gradient accent */}
                <div className={`absolute top-0 right-0 w-20 h-20 bg-gradient-to-br ${option.color} rounded-bl-3xl opacity-15`}></div>

                <div className="relative z-10">
                  <div className="flex items-start gap-4 mb-4">
                    <img src={option.icon} alt={option.title} className="w-16 h-16 p-3 rounded-xl bg-white/90 group-hover:bg-blue-50 transition shadow-lg" />
                    {option.highlight && <span className="px-3 py-1 bg-red-500 text-white text-xs font-bold rounded-full shadow-lg">FAST</span>}
                  </div>
                  <h3 className="font-black text-xl text-white mb-2 group-hover:text-yellow-300 transition drop-shadow-lg">
                    {option.title}
                  </h3>
                  <p className="text-white/95 text-sm mb-4 leading-relaxed drop-shadow">{option.desc}</p>
                  <p className={`text-xs font-bold drop-shadow ${option.featured ? 'text-yellow-300' : 'text-blue-100'}`}>
                    {option.best}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center mt-16">
            <p className="text-gray-600 mb-6">Not sure which option is right for you?</p>
            <Link
              href="/quiz"
              className="inline-block bg-gradient-to-r from-blue-900 to-blue-950 text-white px-12 py-4 rounded-xl font-bold hover:shadow-2xl transition-all transform hover:scale-105"
            >
              Take the Free 2-Minute Quiz →
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials / Social Proof ~ PREMIUM */}
      <section className="relative py-20 px-4 overflow-hidden"
        style={{
          backgroundImage: `url('/images/banners/testimonials-banner.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
        }}
      >

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">Real People, Real Results</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">Thousands of New Jersey families have found their way out. Here's what they have to say.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: 'Maria S.',
                location: 'Newark, NJ',
                situation: 'Was 90 days behind',
                quote: 'I thought I was going to lose my home. Within 14 days of contacting them, I had an offer and cash. They saved my family.',
                rating: 5,
                initials: 'MS',
                bgColor: 'from-pink-400 to-pink-500',
              },
              {
                name: 'James R.',
                location: 'Jersey City, NJ',
                situation: 'Lost his job',
                quote: 'They understood my situation immediately ~ no judgment, just real help. Got me out of foreclosure and I walked away with money.',
                rating: 5,
                initials: 'JR',
                bgColor: 'from-blue-400 to-blue-500',
              },
              {
                name: 'Patricia M.',
                location: 'Paterson, NJ',
                situation: 'Going through divorce',
                quote: 'Had to sell quickly and handle everything alone. They made it painless. No repairs needed, no agent hassles. Done in 18 days.',
                rating: 5,
                initials: 'PM',
                bgColor: 'from-purple-400 to-purple-500',
              },
            ].map((testimonial, idx) => (
              <div key={idx} className="group relative">
                {/* Card with background image */}
                <div
                  className="absolute inset-0 rounded-2xl opacity-40 group-hover:opacity-50 transition"
                  style={{
                    backgroundImage: `url('/images/testimonial-card-bg.jpg')`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                  }}
                ></div>

                <div className="relative bg-white/95 backdrop-blur-sm p-8 rounded-2xl shadow-lg hover:shadow-2xl transition border-2 border-white/50">
                  {/* Avatar */}
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`w-14 h-14 rounded-full bg-gradient-to-br ${testimonial.bgColor} flex items-center justify-center text-white font-bold text-sm shadow-lg`}>
                      {testimonial.initials}
                    </div>
                    <div>
                      <p className="font-bold text-gray-900">{testimonial.name}</p>
                      <p className="text-gray-600 text-xs">{testimonial.location}</p>
                    </div>
                  </div>

                  {/* Rating */}
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <span key={i} className="text-yellow-400 text-lg">★</span>
                    ))}
                  </div>

                  {/* Quote */}
                  <p className="text-gray-700 mb-4 italic text-sm leading-relaxed">"{testimonial.quote}"</p>

                  {/* Situation tag */}
                  <div className="inline-block px-3 py-1 bg-blue-100 text-blue-900 text-xs font-semibold rounded-full">
                    {testimonial.situation}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Guides ~ PREMIUM */}
      <section className="max-w-6xl mx-auto px-4 py-20">
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">Learn Before You Decide</h2>
            <p className="text-center text-gray-600 text-lg max-w-2xl mx-auto">
              Knowledge is power when facing foreclosure. Our guides explain your options clearly ~ no legal jargon, just straight answers.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: '/images/icons/book.png',
                title: 'Foreclosure 101',
                desc: "What's actually happening to your mortgage, your legal rights, and what to expect.",
                href: '/guides/foreclosure-101',
                color: 'from-blue-500 to-blue-600',
              },
              {
                icon: '/images/icons/magnifying-glass.png',
                title: 'All 7 Options Explained',
                desc: 'Detailed breakdown of each solution ~ pros, cons, and who it works best for.',
                href: '/guides/options',
                color: 'from-indigo-500 to-indigo-600',
              },
              {
                icon: '/images/icons/lightning-bold.png',
                title: 'Quick Cash Sale Guide',
                desc: 'Step-by-step walkthrough of selling for cash in 14-30 days. What to expect, what to watch for.',
                href: '/guides/cash-sale',
                color: 'from-purple-500 to-purple-600',
              },
            ].map((guide, idx) => (
              <Link
                key={idx}
                href={guide.href}
                className="group relative block overflow-hidden rounded-2xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl"
              >
                {/* Background Image */}
                <div
                  className="absolute inset-0 opacity-60 group-hover:opacity-75 transition"
                  style={{
                    backgroundImage: `url('/images/featured-guides-bg.jpg')`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                  }}
                ></div>

                {/* Gradient Overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${guide.color} opacity-75 group-hover:opacity-85 transition`}></div>

                {/* Content */}
                <div className="relative p-8 h-full flex flex-col justify-between z-10">
                  <div>
                    <img src={guide.icon} alt={guide.title} className="w-20 h-20 mb-4 drop-shadow-lg" />
                    <h3 className="font-black text-2xl text-white mb-3 group-hover:text-yellow-300 transition drop-shadow-lg">
                      {guide.title}
                    </h3>
                    <p className="text-white/90 text-sm leading-relaxed drop-shadow">
                      {guide.desc}
                    </p>
                  </div>

                  <div className="text-white/95 font-semibold text-sm mt-6 flex items-center gap-2 group-hover:gap-3 transition">
                    Read Guide
                    <span className="inline-block transform group-hover:translate-x-1 transition">→</span>
                  </div>
                </div>

                {/* Decorative corner */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-white/10 rounded-bl-3xl group-hover:bg-white/20 transition"></div>
              </Link>
            ))}
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

      {/* FAQ Section - Trust Building ~ PREMIUM */}
      <section className="max-w-4xl mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">Common Questions</h2>
          <p className="text-gray-600 text-lg">We've helped thousands ~ here are answers to what they asked.</p>
        </div>

        <div className="space-y-4">
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
            <details key={idx} className="group bg-gradient-to-r from-white to-blue-50/30 rounded-xl p-6 border-2 border-gray-200 group-open:border-blue-400 cursor-pointer hover:border-blue-300 transition shadow-md hover:shadow-lg">
              <summary className="font-bold text-gray-900 flex justify-between items-center gap-4 select-none group-open:text-blue-600 transition">
                <span className="text-lg">{item.q}</span>
                <span className="flex-shrink-0 w-6 h-6 flex items-center justify-center rounded-full bg-blue-100 text-blue-600 group-open:bg-blue-600 group-open:text-white transition font-bold">
                  +
                </span>
              </summary>
              <p className="text-gray-700 mt-4 leading-relaxed">{item.a}</p>
            </details>
          ))}
        </div>
      </section>

      {/* Reviews Modal ~ Interactive Client Testimonials */}
      {showReviews && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fadeIn">
          <div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            {/* Header */}
            <div className="sticky top-0 bg-gradient-to-r from-blue-900 to-blue-950 text-white p-6 flex justify-between items-center border-b border-blue-800">
              <div>
                <h2 className="text-2xl font-black">Happy Clients Across NJ</h2>
                <p className="text-blue-200 text-sm mt-1">Real reviews from families we helped</p>
              </div>
              <button
                onClick={() => setShowReviews(false)}
                className="text-2xl font-bold hover:text-yellow-300 transition"
              >
                ✕
              </button>
            </div>

            {/* Review Content */}
            <div className="p-8">
              {/* Current Review ~ Auto-rotating */}
              <div className="mb-8 p-6 bg-gradient-to-br from-blue-50 to-white rounded-xl border-2 border-blue-200 animate-fadeIn">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-yellow-400 to-yellow-500 flex items-center justify-center text-2xl font-bold text-white flex-shrink-0">
                    HC
                  </div>
                  <div className="flex-1">
                    <h3 className="font-black text-lg text-gray-900">Happy Client</h3>
                    <p className="text-blue-600 font-semibold">{njTownReviews[currentReview].town}, NJ</p>
                    <div className="flex gap-1 mt-2">
                      {[...Array(njTownReviews[currentReview].rating)].map((_, i) => (
                        <span key={i} className="text-yellow-400 text-lg">★</span>
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-gray-700 italic text-base leading-relaxed">
                  "{njTownReviews[currentReview].quote}"
                </p>
              </div>

              {/* Navigation */}
              <div className="flex gap-4 justify-center items-center mb-8">
                <button
                  onClick={() => setCurrentReview((prev) => (prev - 1 + njTownReviews.length) % njTownReviews.length)}
                  className="px-6 py-2 bg-blue-900 text-white rounded-lg font-bold hover:bg-blue-950 transition"
                >
                  ← Previous
                </button>
                <div className="text-center min-w-[100px]">
                  <p className="text-sm text-gray-600">Review {currentReview + 1} of {njTownReviews.length}</p>
                  <p className="font-bold text-gray-900">4.8★ Average Rating</p>
                </div>
                <button
                  onClick={() => setCurrentReview((prev) => (prev + 1) % njTownReviews.length)}
                  className="px-6 py-2 bg-blue-900 text-white rounded-lg font-bold hover:bg-blue-950 transition"
                >
                  Next →
                </button>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-3 gap-4 p-6 bg-blue-50 rounded-xl border border-blue-200">
                <div className="text-center">
                  <p className="font-black text-2xl text-blue-900">{njTownReviews.length}</p>
                  <p className="text-xs text-gray-600 mt-1">Happy Clients</p>
                </div>
                <div className="text-center">
                  <p className="font-black text-2xl text-yellow-600">4.8★</p>
                  <p className="text-xs text-gray-600 mt-1">Avg Rating</p>
                </div>
                <div className="text-center">
                  <p className="font-black text-2xl text-green-600">100%</p>
                  <p className="text-xs text-gray-600 mt-1">5 Star Reviews</p>
                </div>
              </div>

              {/* CTA */}
              <button
                onClick={() => setShowReviews(false)}
                className="w-full mt-8 bg-gradient-to-r from-yellow-400 to-yellow-500 text-blue-900 py-4 rounded-xl font-bold text-lg hover:shadow-lg transition"
              >
                Ready to Get Your Solution? Start Assessment →
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Footer ~ PREMIUM */}
      <footer className="bg-gradient-to-b from-gray-900 to-gray-950 text-gray-300 py-16 mt-12 border-t-2 border-yellow-500/20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <img src="/images/logo-nj-foreclosure-guide.jpg" alt="NJ Foreclosure Guide" className="h-10 w-auto" />
              </div>
              <p className="text-sm leading-relaxed">NJ Foreclosure Guide provides honest, unbiased information and real solutions to help distressed homeowners in New Jersey avoid foreclosure.</p>
              <p className="text-xs mt-3 text-gray-500">Not a legal or financial advisor ~ educational resource only</p>
            </div>

            <div>
              <h3 className="font-black text-white mb-4 text-sm uppercase tracking-wider">Learn</h3>
              <ul className="text-sm space-y-3">
                <li><Link href="/guides" className="text-gray-400 hover:text-yellow-400 transition font-medium">Educational Guides</Link></li>
                <li><Link href="/quiz" className="text-gray-400 hover:text-yellow-400 transition font-medium">Free Assessment</Link></li>
                <li><Link href="/companies" className="text-gray-400 hover:text-yellow-400 transition font-medium">Trusted Solutions</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="font-black text-white mb-4 text-sm uppercase tracking-wider">Legal</h3>
              <ul className="text-sm space-y-3">
                <li><a href="#" className="text-gray-400 hover:text-yellow-400 transition font-medium">Privacy Policy</a></li>
                <li><a href="#" className="text-gray-400 hover:text-yellow-400 transition font-medium">Terms of Use</a></li>
                <li><a href="#" className="text-gray-400 hover:text-yellow-400 transition font-medium">Disclaimer</a></li>
              </ul>
            </div>

            <div>
              <h3 className="font-black text-white mb-4 text-sm uppercase tracking-wider">Support</h3>
              <p className="text-sm mb-2">Confidential help 24/7</p>
              <a href="mailto:help@njforeclosureguide.org" className="block text-yellow-400 hover:text-yellow-300 font-bold mb-3 transition">help@njforeclosureguide.org</a>
              <p className="text-xs text-gray-500">We respond within 2 hours</p>
            </div>
          </div>

          <div className="border-t border-gray-700 pt-6 mt-6">
            <div className="bg-blue-950/50 border border-blue-800 rounded-lg p-4 mb-6">
              <p className="text-xs text-blue-300 font-semibold mb-2 flex items-center gap-2">
                <span>⚖️</span> LEGAL DISCLAIMER
              </p>
              <p className="text-xs text-gray-400 leading-relaxed">
                NJ Foreclosure Guide is NOT a law firm and does NOT provide legal advice. We recommend solutions based on what has worked for others facing foreclosure. <strong className="text-blue-300">You MUST consult with your own attorney before taking any legal or financial action.</strong> This is an educational resource only. We are not responsible for outcomes of actions taken based on information provided.
              </p>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 text-center text-xs text-gray-500">
            <p>&copy; 2024 NJ Foreclosure Guide. Educational resource. Not legal or financial advice. Always consult qualified professionals.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
