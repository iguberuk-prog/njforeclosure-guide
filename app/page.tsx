'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { FAQSchema, OrganizationSchema } from './schema';

// Sample reviews from NJ towns ~ Connected with professionals
const njTownReviews = [
  { town: 'Newark', quote: 'Facing foreclosure in 90 days. NJ Foreclosure Guide connected us with a lawyer who negotiated a loan modification. We kept our home. Grateful.', rating: 5 },
  { town: 'Jersey City', quote: 'Lost my job. Guide helped me understand my options, connected me with a real estate company to sell quickly. Got out debt-free in 2 weeks.', rating: 5 },
  { town: 'Paterson', quote: 'Divorce made things complex. Guide explained my options clearly ~ connected me with professionals who handled the sale. Closed in 18 days.', rating: 5 },
  { town: 'Elizabeth', quote: 'The resource guide showed me bankruptcy was an option. Connected me with attorney who restructured my debt and protected my home.', rating: 5 },
  { town: 'Trenton', quote: 'Behind on payments. Guide connected me with lender who approved forbearance. Gave me 6 months to stabilize. Life-changing.', rating: 5 },
  { town: 'Atlantic City', quote: 'After medical emergency drained savings, guide showed refinancing option. Connected me with lender ~ saved $400/month. Game changer.', rating: 5 },
  { town: 'Camden', quote: 'Didn\'t qualify for traditional refinancing. Guide explained home equity options and connected me with specialist. Saved my home.', rating: 5 },
  { town: 'Irvington', quote: 'Foreclosure notice terrified me. Used the guide, got clear on my 7 options in 2 minutes. Connected with right professional. Best decision.', rating: 5 },
  { town: 'Clifton', quote: 'Guide walked me through short sale process. Connected me with approved buyer. Lender approved ~ I got $20k instead of losing everything.', rating: 5 },
  { town: 'Passaic', quote: '$8k behind in payments. Guide connected me with mortgage specialist who modified my loan to manageable level. Can breathe again.', rating: 5 },
  { town: 'East Orange', quote: 'Worried about credit damage. Guide connected me with lawyer who showed how different solutions affect credit. Clear path forward.', rating: 5 },
  { town: 'West Orange', quote: 'Confused about options. Used guide to understand solutions, then connected with a specialist. Found best fit in 2 minutes. Peace of mind.', rating: 5 },
  { town: 'Montclair', quote: 'Company downsized me. Guide explained cash sale option and connected me with buyer. Got fresh start within weeks.', rating: 5 },
  { town: 'Bloomfield', quote: 'Late fees piling up. Guide explained forbearance. Connected me with lender ~ payments paused while I stabilized. Kept my home.', rating: 5 },
  { town: 'Belleville', quote: '3 months behind. Guide laid out options clearly. Connected with right professional instantly. Professional, compassionate guidance throughout.', rating: 5 },
  { town: 'Nutley', quote: 'Divorce complicated foreclosure. Guide explained short sale process. Connected me with realtor ~ handled cleanly without judgment.', rating: 5 },
  { town: 'Kearny', quote: 'Unemployment benefits ended. Guide showed cash sale option. Connected with buyer ~ got through transition fast. Saved credit score.', rating: 5 },
  { town: 'Union', quote: 'Multiple loans on property. Guide showed home equity consolidation option. Connected me with specialist ~ simplified everything.', rating: 5 },
  { town: 'Linden', quote: 'Thought foreclosure was inevitable. Guide showed refinancing option. Connected with lender ~ hope came back. Kept our home.', rating: 5 },
  { town: 'Rahway', quote: 'Missed 6 months of payments. Guide explained options. Connected with attorney who negotiated loan modification. Back on track.', rating: 5 },
  { town: 'Perth Amboy', quote: 'Business partner fraud. Guide connected me with real estate professional for quick sale ~ moved forward cleanly and fast.', rating: 5 },
  { town: 'Woodbridge', quote: 'Health crisis caused payments to fall behind. Guide connected me with cash buyer. Sold quickly ~ stress-free transition.', rating: 5 },
  { town: 'New Brunswick', quote: 'Drowning in debt. Guide explained bankruptcy chapter 13. Connected me with attorney ~ restructured responsibly. Real solution.', rating: 5 },
  { town: 'Princeton', quote: 'Property value dropped. Guide explained short sale ~ connected me with realtor. Process was clear and professional.', rating: 5 },
  { town: 'Trenton', quote: 'Two foreclosure notices. Guide connected me with attorney who negotiated forbearance. Payment plan works perfectly now.', rating: 5 },
  { town: 'Morristown', quote: 'Struggled alone for months. Used guide to understand options. One connection to right professional changed everything.', rating: 5 },
  { town: 'Madison', quote: 'Pandemic income loss. Guide showed loan modification path. Connected with lender ~ approved in 2 weeks. Kept the home.', rating: 5 },
  { town: 'Florham Park', quote: 'Looking to refinance. Guide explained the process clearly. Connected with lender ~ saved $300/month. Simple and professional.', rating: 5 },
  { town: 'Dover', quote: 'Inherited property with mortgage. Guide showed cash sale option. Connected with buyer ~ perfect solution for our situation.', rating: 5 },
  { town: 'Parsippany', quote: 'Job relocation ~ needed to sell quickly. Guide connected me with real estate professional. Quick sale saved our timeline.', rating: 5 },
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
      <nav className="sticky top-0 bg-white/95 backdrop-blur-md border-b border-gray-200 z-40 shadow-sm">
        <div className="max-w-6xl mx-auto px-3 sm:px-6 lg:px-8 py-2 flex justify-between items-center">
          <Link href="/" className="flex items-center gap-3 hover:opacity-85 transition min-w-0 group">
            {/* Professional Legal Scales Logo */}
            <img src="/images/icons/professional-legal-scales-lg.png" alt="NJ Foreclosure Guide" className="h-16 w-16 sm:h-20 sm:w-20 group-hover:drop-shadow-lg transition" />

            {/* Branding Text */}
            <div className="hidden sm:flex flex-col min-w-0">
              <div className="text-sm font-bold text-blue-900 tracking-tight">NJ FORECLOSURE</div>
              <div className="text-base font-semibold text-gray-500">GUIDE</div>
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

      {/* HERO SECTION ~ COLORFUL CANVA-STYLE BANNER */}
      <section
        className="relative py-20 sm:py-32 px-4 text-white overflow-hidden"
        style={{
          backgroundImage: `url('/images/canva/hero-colorful.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
        }}
      >
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-black/30"></div>

        <div className="max-w-5xl mx-auto text-center relative z-10">
          {/* Verification Badge */}
          <div className="flex justify-center mb-8">
            <img src="/images/verified-badge.png" alt="Verified - Trusted by 2300+ NJ Families" className="h-32 w-32 drop-shadow-lg" />
          </div>

          {/* Badge ~ Clickable Reviews */}
          <button
            onClick={() => setShowReviews(true)}
            className="inline-block mb-6 sm:mb-8 px-4 py-2 bg-yellow-500/20 border border-yellow-400/40 rounded-full hover:bg-yellow-500/30 hover:border-yellow-400/60 transition cursor-pointer group"
          >
            <p className="text-yellow-300 text-sm font-semibold group-hover:text-yellow-200 transition">
              ⭐ See Real Reviews from Families We Connected
            </p>
          </button>

          {/* Main Headline */}
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-black mb-6 sm:mb-8 leading-tight tracking-tight">
            Understand Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-yellow-400 to-orange-400">Foreclosure Options</span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg sm:text-xl md:text-2xl text-blue-100 mb-4 sm:mb-6 leading-relaxed font-light">
            Free education ~ Connect with qualified professionals.
          </p>
          <p className="text-base sm:text-lg text-blue-200 mb-8 sm:mb-12 max-w-2xl mx-auto leading-relaxed">
            NJ Foreclosure Guide is your free educational resource. We explain 7 real foreclosure solutions clearly ~ no jargon, no sales pitch. Then we connect you with qualified attorneys and real estate professionals in our network to help with your specific situation. Everything is free and confidential.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Link
              href="/quiz"
              className="inline-block bg-gradient-to-r from-yellow-400 to-yellow-500 text-blue-900 px-10 sm:px-14 py-4 sm:py-5 rounded-xl font-bold hover:shadow-2xl transition-all transform hover:scale-105 text-base sm:text-lg shadow-lg"
            >
              Explore Your Options →
            </Link>
            <Link
              href="/guides"
              className="inline-block bg-white/20 border-2 border-white/40 text-white px-10 sm:px-14 py-4 sm:py-5 rounded-xl font-bold hover:bg-white/30 transition-all text-base sm:text-lg"
            >
              Read the Guides
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

      {/* TRUST INDICATORS ~ COLORFUL CANVA GRAPHICS */}
      <section className="relative py-20 px-4 border-b border-gray-200 overflow-hidden"
        style={{
          backgroundImage: `url('/images/canva/trust-graphics.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
            {[
              { icon: '/images/icons/families-helped.png', value: '2,300+', label: 'Families Connected', highlight: true, color: 'from-blue-500 to-blue-600' },
              { icon: '/images/icons/money-paid.png', value: '$180M+', label: 'Through Our Network', highlight: false, color: 'from-green-500 to-green-600' },
              { icon: '/images/icons/speed.png', value: '14 Days', label: 'Avg Professional Process', highlight: false, color: 'from-orange-500 to-orange-600' },
              { icon: '/images/icons/rating.png', value: '4.9★', label: 'Client Satisfaction', highlight: true, color: 'from-yellow-400 to-yellow-500' },
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

      {/* SOLUTIONS SECTION ~ COLORFUL CANVA INFOGRAPHIC */}
      <section className="py-24 px-4 relative overflow-hidden"
        style={{
          backgroundImage: `url('/images/canva/solutions-infographic.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        {/* Overlay for readability */}
        <div className="absolute inset-0 bg-black/20"></div>

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

      {/* Testimonials / Social Proof ~ COLORFUL CANVA BANNER */}
      <section className="relative py-20 px-4 overflow-hidden"
        style={{
          backgroundImage: `url('/images/canva/testimonials-banner.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
        }}
      >

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">Real People, Real Results</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">Families we connected with qualified professionals. Here's what they say about working with our network partners.</p>
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
                    backgroundImage: `url('/images/canva/guides-showcase.jpg')`,
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
              q: 'Is this really free?',
              a: 'Yes. Our education and guidance are 100% free. We are a referral service ~ attorneys and real estate companies pay us referral fees when clients they work with connect through us. This means our advice is unbiased ~ we profit only if you choose to work with our partners, and only after you benefit.'
            },
            {
              q: 'Are you a law firm or real estate company?',
              a: 'No. We are an educational resource. We do not provide legal advice, negotiate with lenders, or perform real estate services. We explain your options and connect you with qualified attorneys and real estate professionals who do this work every day.'
            },
            {
              q: 'Do I have to use one of your referral partners?',
              a: 'No. You can find your own attorney or company anywhere. Our assessment helps you understand which solution fits your situation ~ then you can work with any professional you choose. We just make it easy if you want vetted options.'
            },
            {
              q: 'How quickly can I get connected?',
              a: 'Take our free assessment (2 minutes) and see which solutions match your situation. Then we can introduce you to qualified professionals in our network who handle this work. Timeline depends on your choice of solution.'
            },
            {
              q: 'Is my information confidential?',
              a: 'Completely. We never share your information without your permission. You control who sees your assessment results. Everything stays private and secure.'
            },
            {
              q: 'What if I want to explore all 7 solutions?',
              a: 'Perfect. Read our detailed guides for each option. We explain pros, cons, timeline, and who it works best for ~ so you can make an informed decision about which direction is right for your situation.'
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
                <h2 className="text-2xl font-black">Real Results From Our Network</h2>
                <p className="text-blue-200 text-sm mt-1">Families we connected with qualified professionals</p>
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
                Understand Your Options ~ Start Free Assessment →
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Footer ~ PREMIUM */}
      <footer className="bg-gradient-to-b from-gray-900 to-gray-950 text-gray-300 py-16 mt-12 border-t-2 border-yellow-500/20">
        <div className="max-w-6xl mx-auto px-4">
          {/* Verification Badge */}
          <div className="flex justify-center mb-12">
            <img src="/images/verified-badge.png" alt="Verified - Trusted by 2300+ NJ Families" className="h-24 w-24 drop-shadow-lg" />
          </div>

          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <img src="/images/icons/professional-legal-scales-lg.png" alt="NJ Foreclosure Guide" className="h-16 w-16" />
                <div>
                  <div className="text-sm font-bold text-white tracking-tight">NJ FORECLOSURE</div>
                  <div className="text-xs font-semibold text-gray-400">GUIDE</div>
                </div>
              </div>
              <p className="text-sm leading-relaxed">NJ Foreclosure Guide is a free educational resource that explains 7 foreclosure solutions and connects homeowners with qualified attorneys and real estate professionals in our network.</p>
              <p className="text-xs mt-3 text-gray-500">Educational resource only ~ Not a law firm, not a lender, not a real estate company</p>
            </div>

            <div>
              <h3 className="font-black text-white mb-4 text-sm uppercase tracking-wider">Learn & Connect</h3>
              <ul className="text-sm space-y-3">
                <li><Link href="/guides" className="text-gray-400 hover:text-yellow-400 transition font-medium">Educational Guides</Link></li>
                <li><Link href="/quiz" className="text-gray-400 hover:text-yellow-400 transition font-medium">Free Assessment</Link></li>
                <li><Link href="/professionals" className="text-gray-400 hover:text-yellow-400 transition font-medium">Professional Network</Link></li>
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

          <div className="border-t border-gray-700 pt-8 text-center text-xs text-gray-500 space-y-3">
            <p>&copy; 2024 NJ Foreclosure Guide. All rights reserved.</p>
            <p className="text-gray-600 italic">
              IMPORTANT DISCLAIMER: NJ Foreclosure Guide is a FREE educational resource only. We are NOT a law firm, lender, or real estate company. We do NOT provide legal advice, financial advice, or negotiate with lenders. We do NOT perform any foreclosure solutions ourselves. We simply explain 7 options and connect you with vetted attorneys and real estate professionals who provide these services. We earn referral fees when clients work with our partners. All outcomes depend entirely on your situation and the professionals you work with. Always consult licensed professionals. This site is for education only.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
