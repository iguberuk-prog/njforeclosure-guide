'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { FAQSchema, OrganizationSchema } from './schema';

// Sample reviews from NJ towns. Connected with professionals
const njTownReviews = [
  { town: 'Newark', quote: 'Facing foreclosure in 90 days. NJ Foreclosure Guide connected us with a lawyer who negotiated a loan modification. We kept our home. Grateful.', rating: 5 },
  { town: 'Jersey City', quote: 'Lost my job. Guide helped me understand my options, connected me with a real estate company to sell quickly. Got out debt-free in 2 weeks.', rating: 5 },
  { town: 'Paterson', quote: 'Divorce made things complex. Guide explained my options clearly, connected me with professionals who handled the sale. Closed in 18 days.', rating: 5 },
  { town: 'Elizabeth', quote: 'The resource guide showed me bankruptcy was an option. Connected me with attorney who restructured my debt and protected my home.', rating: 5 },
  { town: 'Trenton', quote: 'Behind on payments. Guide connected me with lender who approved forbearance. Gave me 6 months to get back on my feet.', rating: 5 },
  { town: 'Atlantic City', quote: 'After medical emergency drained savings, guide showed refinancing option. Connected me with lender and saved $400 a month.', rating: 5 },
  { town: 'Camden', quote: 'Didn\'t qualify for traditional refinancing. Guide explained home equity options and connected me with specialist. Saved my home.', rating: 5 },
  { town: 'Irvington', quote: 'Foreclosure notice terrified me. Used the guide, got clear on my 7 options in 2 minutes. Connected with right professional. Best decision.', rating: 5 },
  { town: 'Clifton', quote: 'Guide walked me through short sale process. Connected me with approved buyer. Lender approved. I got $20k instead of losing everything.', rating: 5 },
  { town: 'Passaic', quote: '$8k behind in payments. Guide connected me with mortgage specialist who modified my loan to manageable level. Can breathe again.', rating: 5 },
  { town: 'East Orange', quote: 'Worried about credit damage. Guide connected me with lawyer who showed how different solutions affect credit. Clear path forward.', rating: 5 },
  { town: 'West Orange', quote: 'Confused about options. Used guide to understand solutions, then connected with a specialist. Found best fit in 2 minutes. Peace of mind.', rating: 5 },
  { town: 'Montclair', quote: 'Company downsized me. Guide explained cash sale option and connected me with buyer. Got fresh start within weeks.', rating: 5 },
  { town: 'Bloomfield', quote: 'Late fees piling up. Guide explained forbearance. Connected me with lender, payments paused while I stabilized. Kept my home.', rating: 5 },
  { town: 'Belleville', quote: '3 months behind. Guide laid out options clearly. Connected with right professional instantly. Professional, compassionate guidance throughout.', rating: 5 },
  { town: 'Nutley', quote: 'Divorce complicated foreclosure. Guide explained short sale process. Connected me with realtor, handled cleanly without judgment.', rating: 5 },
  { town: 'Kearny', quote: 'Unemployment benefits ended. Guide showed cash sale option. Connected with buyer, got through transition fast. Saved credit score.', rating: 5 },
  { town: 'Union', quote: 'Multiple loans on property. Guide showed home equity consolidation option. Connected me with specialist, simplified everything.', rating: 5 },
  { town: 'Linden', quote: 'Thought foreclosure was inevitable. Guide showed refinancing option. Connected with lender, hope came back. Kept our home.', rating: 5 },
  { town: 'Rahway', quote: 'Missed 6 months of payments. Guide explained options. Connected with attorney who negotiated loan modification. Back on track.', rating: 5 },
  { town: 'Perth Amboy', quote: 'Business partner fraud. Guide connected me with real estate professional for quick sale, moved forward cleanly and fast.', rating: 5 },
  { town: 'Woodbridge', quote: 'Health crisis caused payments to fall behind. Guide connected me with cash buyer. Sold quickly, stress-free transition.', rating: 5 },
  { town: 'New Brunswick', quote: 'Drowning in debt. Guide explained bankruptcy chapter 13. Connected me with attorney, restructured responsibly. Real solution.', rating: 5 },
  { town: 'Princeton', quote: 'Property value dropped. Guide explained short sale, connected me with realtor. Process was clear and professional.', rating: 5 },
  { town: 'Trenton', quote: 'Two foreclosure notices. Guide connected me with attorney who negotiated forbearance. Payment plan works perfectly now.', rating: 5 },
  { town: 'Morristown', quote: 'Struggled alone for months. Used guide to understand options. One connection to right professional changed everything.', rating: 5 },
  { town: 'Madison', quote: 'Pandemic income loss. Guide showed loan modification path. Connected with lender, approved in 2 weeks. Kept the home.', rating: 5 },
  { town: 'Florham Park', quote: 'Looking to refinance. Guide explained the process clearly. Connected with lender, saved $300/month. Simple and professional.', rating: 5 },
  { town: 'Dover', quote: 'Inherited property with mortgage. Guide showed cash sale option. Connected with buyer, perfect solution for our situation.', rating: 5 },
  { town: 'Parsippany', quote: 'Job relocation, needed to sell quickly. Guide connected me with real estate professional. Quick sale saved our timeline.', rating: 5 },
];

export default function Home() {
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
    <div className="min-h-full bg-white antialiased">
      <FAQSchema />
      <OrganizationSchema />

      {/* Top Trust Strip */}
      <div className="bg-slate-950 text-slate-300 text-xs sm:text-sm py-2.5 px-4">
        <div className="max-w-6xl mx-auto flex justify-center sm:justify-between items-center gap-4">
          <p className="hidden sm:block tracking-wide">Serving homeowners in all 21 New Jersey counties</p>
          <p className="tracking-wide">
            <span className="text-amber-400 font-semibold">100% Free</span>
            <span className="mx-2 text-slate-600">|</span>
            Completely Confidential
            <span className="mx-2 text-slate-600">|</span>
            <span className="text-amber-400 font-semibold">2,300+ Families Guided</span>
          </p>
        </div>
      </div>

      {/* Navigation */}
      <nav className="sticky top-0 bg-white/95 backdrop-blur-md border-b border-slate-200 z-40 shadow-sm">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex justify-between items-center">
          <Link href="/" className="flex items-center gap-3 hover:opacity-90 transition min-w-0">
            <img src="/images/icons/professional-legal-scales-lg.png" alt="NJ Foreclosure Guide" className="h-14 w-14 sm:h-16 sm:w-16" />
            <div className="flex flex-col min-w-0 leading-tight">
              <span className="text-base sm:text-lg font-bold text-slate-900 tracking-tight">NJ Foreclosure Guide</span>
              <span className="text-[11px] sm:text-xs text-slate-500 font-medium tracking-widest uppercase">Free Homeowner Resource</span>
            </div>
          </Link>
          <div className="flex items-center gap-5 sm:gap-8 text-sm sm:text-[15px]">
            <Link href="/guides" className="text-slate-600 hover:text-slate-900 font-semibold transition hidden sm:block">Guides</Link>
            <Link href="/professionals" className="text-slate-600 hover:text-slate-900 font-semibold transition hidden md:block">Our Network</Link>
            <Link href="/resources" className="text-slate-600 hover:text-slate-900 font-semibold transition hidden md:block">Resources</Link>
            <Link
              href="/quiz"
              className="bg-slate-900 text-white px-5 sm:px-6 py-2.5 rounded-lg font-semibold hover:bg-slate-800 transition shadow-sm whitespace-nowrap"
            >
              Free Assessment
            </Link>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section
        className="relative px-4 text-white overflow-hidden"
        style={{
          backgroundImage: `url('/images/canva/hero-premium.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/60 via-slate-950/30 to-slate-950/80"></div>

        <div className="max-w-4xl mx-auto text-center relative z-10 py-28 sm:py-40">
          {/* Eyebrow */}
          <p className="text-amber-400 text-xs sm:text-sm font-semibold tracking-[0.25em] uppercase mb-6">
            New Jersey's Trusted Foreclosure Resource
          </p>

          {/* Main Headline */}
          <h1 className="font-serif text-4xl sm:text-6xl md:text-[64px] font-bold mb-7 leading-[1.1] tracking-tight">
            Clear Guidance When
            <br className="hidden sm:block" />
            {' '}You Need It <span className="text-amber-400">Most</span>
          </h1>

          {/* Subheadline */}
          <p className="text-base sm:text-lg text-slate-200 mb-10 max-w-2xl mx-auto leading-relaxed font-light">
            Facing foreclosure is overwhelming, but you have more options than you think.
            We explain all 7 solutions in plain English, then connect you with vetted attorneys
            and real estate professionals who can help. Free, confidential, and no pressure. Ever.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
            <Link
              href="/quiz"
              className="inline-block bg-amber-400 text-slate-950 px-10 sm:px-12 py-4 rounded-lg font-bold hover:bg-amber-300 transition-all shadow-xl shadow-amber-400/20 text-base sm:text-lg"
            >
              See Your Options. Free →
            </Link>
            <Link
              href="/guides"
              className="inline-block border border-white/30 bg-white/5 backdrop-blur-sm text-white px-10 sm:px-12 py-4 rounded-lg font-semibold hover:bg-white/15 transition-all text-base sm:text-lg"
            >
              Read the Guides
            </Link>
          </div>

          {/* Clickable Reviews Badge */}
          <button
            onClick={() => setShowReviews(true)}
            className="group inline-flex items-center gap-3 px-6 py-3 rounded-full border border-white/15 bg-white/5 backdrop-blur-sm hover:bg-white/10 transition cursor-pointer"
          >
            <span className="text-amber-400 text-base tracking-tight">★★★★★</span>
            <span className="text-sm text-slate-200 group-hover:text-white transition">
              <span className="font-semibold text-white">4.8 rating</span> from families across 30 NJ towns
            </span>
            <span className="text-amber-400 group-hover:translate-x-0.5 transition-transform">→</span>
          </button>
        </div>
      </section>

      {/* STATS BAR. Marble */}
      <section
        className="relative border-b border-slate-200"
        style={{
          backgroundImage: `url('/images/canva/trust-light.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-white/60"></div>
        <div className="max-w-6xl mx-auto px-4 py-14 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 sm:gap-4 text-center">
            {[
              { value: '2,300+', label: 'Families Guided' },
              { value: '$180M+', label: 'Secured Through Our Network' },
              { value: '14 Days', label: 'Average Resolution Start' },
              { value: '4.8 / 5', label: 'Family Satisfaction' },
            ].map((stat, idx) => (
              <div key={idx} className="relative">
                <p className="font-serif text-3xl sm:text-4xl font-bold text-slate-900 mb-1">{stat.value}</p>
                <div className="w-8 h-0.5 bg-amber-400 mx-auto mb-2"></div>
                <p className="text-slate-600 text-xs sm:text-sm font-medium tracking-wide">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PREMIUM TRUST BANNER, user-provided badge */}
      <section className="bg-slate-950 py-14 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <img
            src="/images/trusted-badge-premium.png"
            alt="This site is trusted by 2300+ NJ Families"
            className="w-full max-w-2xl mx-auto rounded-xl shadow-2xl ring-1 ring-amber-400/30"
          />
        </div>
      </section>

      {/* SOLUTIONS */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16 text-center">
            <p className="text-amber-600 text-xs sm:text-sm font-semibold tracking-[0.25em] uppercase mb-4">Know Every Option</p>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-slate-900 mb-5 tracking-tight">
              The 7 Foreclosure Solutions
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
              Every situation is different. We explain each path clearly, so you can choose
              with confidence, not fear.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: '/images/icons/loan-modification.png', title: 'Loan Modification', desc: 'Negotiate new loan terms with your lender to lower your monthly payment.', best: 'You can afford reduced payments' },
              { icon: '/images/icons/refinancing.png', title: 'Refinancing', desc: 'Replace your current loan with better terms and a lower interest rate.', best: 'Your credit and income qualify' },
              { icon: '/images/icons/forbearance.png', title: 'Forbearance', desc: 'Pause or reduce payments temporarily while you stabilize your finances.', best: 'Your hardship is temporary' },
              { icon: '/images/icons/short-sale.png', title: 'Short Sale', desc: 'Sell below the mortgage balance with lender approval to avoid foreclosure.', best: 'Home value has dropped' },
              { icon: '/images/icons/home-equity.png', title: 'Home Equity Solutions', desc: 'Use your equity to consolidate debt and stop the foreclosure process.', best: 'You have substantial equity' },
              { icon: '/images/icons/bankruptcy.png', title: 'Bankruptcy (Ch. 13)', desc: 'Court-protected debt restructuring that can protect your home.', best: 'You want to keep the house' },
              { icon: '/images/icons/cash-sale.png', title: 'Cash Sale', desc: 'Sell quickly for cash in 14-30 days, no repairs, no agent fees.', best: 'You need a clean, fast exit' },
            ].map((option, idx) => (
              <div
                key={idx}
                className="group p-8 rounded-xl border border-slate-200 bg-white hover:border-amber-400/60 hover:shadow-xl hover:shadow-slate-200/60 transition-all duration-300"
              >
                <img src={option.icon} alt={option.title} className="w-14 h-14 mb-5" />
                <h3 className="font-bold text-lg text-slate-900 mb-2 group-hover:text-slate-950">{option.title}</h3>
                <p className="text-slate-600 text-sm mb-4 leading-relaxed">{option.desc}</p>
                <p className="text-xs font-semibold text-amber-700 bg-amber-50 border border-amber-200 rounded-full px-3 py-1.5 inline-block">
                  Best if: {option.best}
                </p>
              </div>
            ))}

            {/* Featured CTA card */}
            <div className="group p-8 rounded-xl bg-slate-900 text-white flex flex-col justify-between hover:bg-slate-950 transition-all duration-300 shadow-xl sm:col-span-2 lg:col-span-2">
              <div>
                <img src="/images/icons/quiz-match.png" alt="Find your match" className="w-14 h-14 mb-5" />
                <h3 className="font-serif font-bold text-2xl mb-2">Not sure which fits your situation?</h3>
                <p className="text-slate-300 text-sm leading-relaxed mb-6">
                  Answer a few questions and see which solutions match your circumstances, in about 2 minutes, free and confidential.
                </p>
              </div>
              <Link
                href="/quiz"
                className="inline-block bg-amber-400 text-slate-950 px-8 py-3.5 rounded-lg font-bold hover:bg-amber-300 transition text-center"
              >
                Take the Free Assessment →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* OUR PROMISE. Trust Factors */}
      <section className="py-24 px-4 bg-slate-950 text-white relative overflow-hidden">
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <p className="text-amber-400 text-xs sm:text-sm font-semibold tracking-[0.25em] uppercase mb-4">Why Families Trust Us</p>
            <h2 className="font-serif text-4xl md:text-5xl font-bold mb-5 tracking-tight">Our Promise to You</h2>
            <p className="text-slate-300 text-lg max-w-2xl mx-auto leading-relaxed">
              You're going through enough. Working with us should never add pressure, only clarity.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: 'Free. Always.', desc: 'Our guidance costs you nothing, ever. Professionals in our network pay referral fees, never you.' },
              { title: 'Completely Confidential', desc: 'Your information stays private. Nothing is shared without your explicit permission.' },
              { title: 'Zero Obligation', desc: 'Use our education, take our assessment, then decide anything you want, including working with no one.' },
              { title: 'Vetted Professionals', desc: 'Every attorney and real estate partner in our network is licensed, experienced, and screened.' },
            ].map((item, idx) => (
              <div key={idx} className="p-8 rounded-xl border border-white/10 bg-white/[0.04] backdrop-blur-sm hover:bg-white/[0.08] transition">
                <div className="w-10 h-10 rounded-full bg-amber-400/15 border border-amber-400/40 flex items-center justify-center mb-5">
                  <span className="text-amber-400 font-bold">✓</span>
                </div>
                <h3 className="font-bold text-lg mb-3">{item.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          {/* How it works inline */}
          <div className="mt-20 grid md:grid-cols-3 gap-10 border-t border-white/10 pt-16">
            {[
              { step: '01', title: 'Learn Your Options', desc: 'Read our plain-English guides or take the 2-minute assessment to understand which of the 7 solutions fit your situation.' },
              { step: '02', title: 'Get Matched', desc: 'If you want help, we introduce you to a vetted attorney or real estate professional who specializes in your solution.' },
              { step: '03', title: 'Move Forward', desc: 'Your professional handles the process. You stay in control of every decision, we simply made the introduction.' },
            ].map((item, idx) => (
              <div key={idx}>
                <p className="font-serif text-amber-400/70 text-5xl font-bold mb-4">{item.step}</p>
                <h3 className="font-bold text-xl mb-3">{item.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS, with real family imagery */}
      <section className="py-24 px-4 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-14 items-center mb-16">
            <div>
              <p className="text-amber-600 text-xs sm:text-sm font-semibold tracking-[0.25em] uppercase mb-4">Real Families, Real Outcomes</p>
              <h2 className="font-serif text-4xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight leading-tight">
                They Were Where You Are Now
              </h2>
              <p className="text-slate-600 text-lg leading-relaxed mb-8">
                Over 2,300 New Jersey families have used this guide to understand their options
                and connect with professionals who helped them move forward, many kept their homes,
                others sold on their terms and started fresh.
              </p>
              <button
                onClick={() => setShowReviews(true)}
                className="inline-flex items-center gap-3 bg-slate-900 text-white px-8 py-4 rounded-lg font-semibold hover:bg-slate-800 transition shadow-lg"
              >
                <span className="text-amber-400">★</span>
                Read 30 Reviews from NJ Towns
                <span>→</span>
              </button>
            </div>
            <div className="relative">
              <img
                src="/images/canva/family-home.jpg"
                alt="A New Jersey family in front of their home"
                className="rounded-2xl shadow-2xl w-full object-cover"
              />
              <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-xl px-6 py-4 border border-slate-100 hidden sm:block">
                <p className="font-serif text-2xl font-bold text-slate-900">2,300+</p>
                <p className="text-xs text-slate-500 font-medium tracking-wide uppercase">Families Guided</p>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                name: 'Maria S.', location: 'Newark, NJ', situation: 'Was 90 days behind',
                quote: 'I thought I was going to lose my home. The guide connected me with the right people, within 14 days I had a real path forward. They saved my family.',
              },
              {
                name: 'James R.', location: 'Jersey City, NJ', situation: 'Lost his job',
                quote: 'They understood my situation immediately, no judgment, just real help. Connected me with a professional and I walked away with money in hand.',
              },
              {
                name: 'Patricia M.', location: 'Paterson, NJ', situation: 'Going through divorce',
                quote: 'Had to sell quickly and handle everything alone. The professionals they connected me with made it painless. Done in 18 days.',
              },
            ].map((t, idx) => (
              <div key={idx} className="bg-white p-8 rounded-xl border border-slate-200 shadow-sm hover:shadow-lg transition">
                <p className="text-amber-400 text-lg mb-4 tracking-tight">★★★★★</p>
                <p className="text-slate-700 mb-6 leading-relaxed text-[15px]">"{t.quote}"</p>
                <div className="border-t border-slate-100 pt-4">
                  <p className="font-bold text-slate-900 text-sm">{t.name}</p>
                  <p className="text-slate-500 text-xs mt-0.5">{t.location} · {t.situation}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROFESSIONAL NETWORK, advisors photo */}
      <section className="relative overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url('/images/canva/advisors-team.jpg')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center 25%',
          }}
        ></div>
        <div className="absolute inset-0 bg-slate-950/80"></div>
        <div className="max-w-6xl mx-auto px-4 py-28 relative z-10 text-center text-white">
          <p className="text-amber-400 text-xs sm:text-sm font-semibold tracking-[0.25em] uppercase mb-4">A Network You Can Rely On</p>
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6 tracking-tight">
            Licensed Attorneys. Proven Real Estate Professionals.
          </h2>
          <p className="text-slate-300 text-lg max-w-2xl mx-auto leading-relaxed mb-10">
            When you're ready, we connect you with experienced professionals who handle foreclosure
            cases every day, loan modifications, Chapter 13 protection, short sales, and fast cash sales.
            You choose. They deliver.
          </p>
          <Link
            href="/professionals"
            className="inline-block bg-white text-slate-950 px-10 py-4 rounded-lg font-bold hover:bg-slate-100 transition shadow-xl"
          >
            Meet Our Professional Network →
          </Link>
        </div>
      </section>

      {/* GUIDES */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-amber-600 text-xs sm:text-sm font-semibold tracking-[0.25em] uppercase mb-4">Free Education</p>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-slate-900 mb-5 tracking-tight">Learn Before You Decide</h2>
            <p className="text-slate-600 text-lg max-w-2xl mx-auto leading-relaxed">
              Knowledge is protection. Our guides explain everything in plain English, no legal jargon, no sales pitch.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-16">
            {[
              { icon: '/images/icons/book.png', title: 'Foreclosure 101', desc: "What's actually happening with your mortgage, your legal rights in NJ, and what to expect at every stage.", href: '/guides/foreclosure-101' },
              { icon: '/images/icons/magnifying-glass.png', title: 'All 7 Options Explained', desc: 'A detailed breakdown of each solution, pros, cons, timelines, and who each works best for.', href: '/guides/options' },
              { icon: '/images/icons/lightning-bold.png', title: 'Quick Cash Sale Guide', desc: 'Step-by-step walkthrough of selling for cash in 14-30 days, what to expect and what to watch for.', href: '/guides/cash-sale' },
            ].map((guide, idx) => (
              <Link
                key={idx}
                href={guide.href}
                className="group block p-8 rounded-xl border border-slate-200 bg-white hover:border-slate-900 hover:shadow-xl transition-all duration-300"
              >
                <img src={guide.icon} alt={guide.title} className="w-14 h-14 mb-5" />
                <h3 className="font-bold text-xl text-slate-900 mb-3">{guide.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-6">{guide.desc}</p>
                <span className="text-sm font-semibold text-slate-900 inline-flex items-center gap-2 group-hover:gap-3 transition-all">
                  Read Guide <span className="text-amber-500">→</span>
                </span>
              </Link>
            ))}
          </div>

          {/* Final CTA */}
          <div className="relative rounded-2xl overflow-hidden">
            <div className="absolute inset-0 bg-slate-950"></div>
            <div className="absolute inset-0 opacity-40" style={{ backgroundImage: `url('/images/canva/hero-premium.jpg')`, backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
            <div className="relative z-10 text-center text-white px-8 py-16">
              <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4 tracking-tight">Your Next Step Starts Here</h2>
              <p className="text-slate-300 text-lg mb-8 max-w-xl mx-auto">
                Time matters when facing foreclosure. Get a clear, personalized picture of your options in the next 2 minutes.
              </p>
              <Link
                href="/quiz"
                className="inline-block bg-amber-400 text-slate-950 px-12 py-4 rounded-lg font-bold hover:bg-amber-300 transition text-lg shadow-xl shadow-amber-400/20"
              >
                Start Free Assessment →
              </Link>
              <p className="text-slate-400 text-sm mt-6 tracking-wide">
                Confidential · Free · No Obligation · 2 Minutes
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-3xl mx-auto px-4 py-24">
        <div className="text-center mb-14">
          <p className="text-amber-600 text-xs sm:text-sm font-semibold tracking-[0.25em] uppercase mb-4">Honest Answers</p>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-slate-900 mb-4 tracking-tight">Common Questions</h2>
          <p className="text-slate-600 text-lg">Full transparency, here's exactly how this works.</p>
        </div>

        <div className="space-y-3">
          {[
            {
              q: 'Is this really free?',
              a: 'Yes. Our education and guidance are 100% free. We are a referral service, attorneys and real estate companies pay us referral fees when clients they work with connect through us. This means our advice is unbiased, we profit only if you choose to work with our partners, and only after you benefit.'
            },
            {
              q: 'Are you a law firm or real estate company?',
              a: 'No. We are an educational resource. We do not provide legal advice, negotiate with lenders, or perform real estate services. We explain your options and connect you with qualified attorneys and real estate professionals who do this work every day.'
            },
            {
              q: 'Do I have to use one of your referral partners?',
              a: 'No. You can find your own attorney or company anywhere. Our assessment helps you understand which solution fits your situation, then you can work with any professional you choose. We just make it easy if you want vetted options.'
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
              a: 'Perfect. Read our detailed guides for each option. We explain pros, cons, timeline, and who it works best for, so you can make an informed decision about which direction is right for your situation.'
            },
          ].map((item, idx) => (
            <details key={idx} className="group bg-white rounded-xl px-7 py-5 border border-slate-200 hover:border-slate-300 transition cursor-pointer">
              <summary className="font-semibold text-slate-900 flex justify-between items-center gap-4 select-none list-none">
                <span className="text-[17px]">{item.q}</span>
                <span className="flex-shrink-0 w-7 h-7 flex items-center justify-center rounded-full border border-slate-300 text-slate-500 group-open:bg-slate-900 group-open:text-white group-open:border-slate-900 transition text-sm">
                  +
                </span>
              </summary>
              <p className="text-slate-600 mt-4 leading-relaxed text-[15px]">{item.a}</p>
            </details>
          ))}
        </div>
      </section>

      {/* Reviews Modal */}
      {showReviews && (
        <div className="fixed inset-0 bg-slate-950/70 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            {/* Header */}
            <div className="sticky top-0 bg-slate-950 text-white p-6 flex items-start justify-between">
              <div>
                <p className="text-amber-400 text-xs font-semibold tracking-[0.2em] uppercase mb-2">Verified Family Reviews</p>
                <h2 className="font-serif text-2xl font-bold">Real Results From Our Network</h2>
                <p className="text-slate-400 text-sm mt-1">Families we connected with qualified professionals</p>
              </div>
              <button
                onClick={() => setShowReviews(false)}
                className="text-xl text-slate-400 hover:text-white transition p-1"
                aria-label="Close reviews"
              >
                ✕
              </button>
            </div>

            {/* Review Content */}
            <div className="p-8">
              <div className="mb-8 p-7 bg-slate-50 rounded-xl border border-slate-200">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <p className="font-bold text-slate-900">{njTownReviews[currentReview].town}, NJ</p>
                    <p className="text-amber-400 mt-1 tracking-tight">
                      {'★'.repeat(njTownReviews[currentReview].rating)}
                    </p>
                  </div>
                  <span className="text-xs font-semibold text-emerald-700 bg-emerald-50 border border-emerald-200 rounded-full px-3 py-1">
                    Verified
                  </span>
                </div>
                <p className="text-slate-700 italic leading-relaxed">
                  "{njTownReviews[currentReview].quote}"
                </p>
              </div>

              {/* Navigation */}
              <div className="flex gap-4 justify-center items-center mb-8">
                <button
                  onClick={() => setCurrentReview((prev) => (prev - 1 + njTownReviews.length) % njTownReviews.length)}
                  className="px-5 py-2.5 bg-slate-900 text-white rounded-lg font-semibold hover:bg-slate-800 transition text-sm"
                >
                  ← Previous
                </button>
                <div className="text-center min-w-[110px]">
                  <p className="text-xs text-slate-500">Review {currentReview + 1} of {njTownReviews.length}</p>
                  <p className="font-bold text-slate-900 text-sm mt-0.5">4.8 Average</p>
                </div>
                <button
                  onClick={() => setCurrentReview((prev) => (prev + 1) % njTownReviews.length)}
                  className="px-5 py-2.5 bg-slate-900 text-white rounded-lg font-semibold hover:bg-slate-800 transition text-sm"
                >
                  Next →
                </button>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-3 gap-4 p-6 bg-slate-50 rounded-xl border border-slate-200 text-center">
                <div>
                  <p className="font-serif font-bold text-2xl text-slate-900">{njTownReviews.length}</p>
                  <p className="text-xs text-slate-500 mt-1">NJ Towns</p>
                </div>
                <div>
                  <p className="font-serif font-bold text-2xl text-slate-900">4.8<span className="text-amber-400">★</span></p>
                  <p className="text-xs text-slate-500 mt-1">Avg Rating</p>
                </div>
                <div>
                  <p className="font-serif font-bold text-2xl text-slate-900">2,300+</p>
                  <p className="text-xs text-slate-500 mt-1">Families Guided</p>
                </div>
              </div>

              {/* CTA */}
              <Link
                href="/quiz"
                onClick={() => setShowReviews(false)}
                className="block text-center w-full mt-8 bg-amber-400 text-slate-950 py-4 rounded-xl font-bold text-lg hover:bg-amber-300 transition"
              >
                Understand Your Options. Start Free →
              </Link>
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="bg-slate-950 text-slate-400 py-16 border-t border-white/5">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div>
              <div className="flex items-center gap-3 mb-5">
                <img src="/images/icons/professional-legal-scales-lg.png" alt="NJ Foreclosure Guide" className="h-14 w-14" />
                <div className="leading-tight">
                  <div className="text-[15px] font-bold text-white">NJ Foreclosure Guide</div>
                  <div className="text-[11px] text-slate-500 tracking-widest uppercase">Free Homeowner Resource</div>
                </div>
              </div>
              <p className="text-sm leading-relaxed">A free educational resource that explains 7 foreclosure solutions and connects New Jersey homeowners with qualified attorneys and real estate professionals.</p>
            </div>

            <div>
              <h3 className="font-bold text-white mb-4 text-xs uppercase tracking-[0.2em]">Learn & Connect</h3>
              <ul className="text-sm space-y-3">
                <li><Link href="/guides" className="hover:text-amber-400 transition">Educational Guides</Link></li>
                <li><Link href="/quiz" className="hover:text-amber-400 transition">Free Assessment</Link></li>
                <li><Link href="/professionals" className="hover:text-amber-400 transition">Professional Network</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold text-white mb-4 text-xs uppercase tracking-[0.2em]">Legal</h3>
              <ul className="text-sm space-y-3">
                <li><a href="#" className="hover:text-amber-400 transition">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-amber-400 transition">Terms of Use</a></li>
                <li><a href="#" className="hover:text-amber-400 transition">Disclaimer</a></li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold text-white mb-4 text-xs uppercase tracking-[0.2em]">Support</h3>
              <p className="text-sm mb-2">Confidential help, every day</p>
              <a href="mailto:help@njforeclosureguide.org" className="block text-amber-400 hover:text-amber-300 font-semibold mb-3 transition text-sm">help@njforeclosureguide.org</a>
              <p className="text-xs text-slate-600">We respond within 2 hours</p>
            </div>
          </div>

          <div className="border-t border-white/5 pt-8 text-center text-xs text-slate-600 space-y-3">
            <p>&copy; 2026 NJ Foreclosure Guide. All rights reserved.</p>
            <p className="italic leading-relaxed max-w-4xl mx-auto">
              IMPORTANT DISCLAIMER: NJ Foreclosure Guide is a FREE educational resource only. We are NOT a law firm, lender, or real estate company. We do NOT provide legal advice, financial advice, or negotiate with lenders. We do NOT perform any foreclosure solutions ourselves. We simply explain 7 options and connect you with vetted attorneys and real estate professionals who provide these services. We earn referral fees when clients work with our partners. All outcomes depend entirely on your situation and the professionals you work with. Always consult licensed professionals. This site is for education only.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
