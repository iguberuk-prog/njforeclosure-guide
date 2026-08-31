'use client';

import Link from 'next/link';
import GuideCards from './components/GuideCards';
import Solutions from './components/Solutions';
import HowItWorks from './components/HowItWorks';
import Logo from './components/Logo';
import SiteHeader from './components/SiteHeader';
import { useState } from 'react';
import { FAQSchema, OrganizationSchema } from './schema';
import { RESPONSE_PROMISE } from '../lib/contact';
import TrackRecord from './components/TrackRecord';
import { HOMEOWNERS_HELPED, yearsOfService } from '../lib/partners';


export default function Home() {
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
            <span className="text-amber-400 font-semibold">All 21 NJ Counties</span>
          </p>
        </div>
      </div>

      <SiteHeader />

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
              href="/tools/timeline"
              className="inline-flex items-center justify-center gap-3 border border-white/30 bg-white/5 backdrop-blur-sm text-white px-10 sm:px-12 py-4 rounded-lg font-semibold hover:bg-white/15 transition-all text-base sm:text-lg"
            >
              Where Am I in the Process?
            </Link>
          </div>

          {/* Transparency badge */}
          <Link
            href="/companies"
            className="group inline-flex items-center gap-3 px-6 py-3 rounded-full border border-white/15 bg-white/5 backdrop-blur-sm hover:bg-white/10 transition"
          >
            <span className="text-emerald-400 text-lg leading-none">&#10003;</span>
            <span className="text-sm text-slate-200 group-hover:text-white transition">
              We are paid by <span className="font-semibold text-white">none of the companies we recommend</span>
            </span>
            <span className="text-amber-400 group-hover:translate-x-0.5 transition-transform">&rarr;</span>
          </Link>
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
              // Only figures that can be evidenced. The first two come from the
              // operator's own records; the last two are facts about the site.
              ...(HOMEOWNERS_HELPED !== null
                ? [{ value: `${HOMEOWNERS_HELPED.toLocaleString('en-US')}+`, label: 'NJ Homeowners Helped' }]
                : []),
              ...(yearsOfService() !== null
                ? [{ value: String(yearsOfService()), label: 'Years Doing This Work' }]
                : []),
              { value: '21', label: 'NJ Counties Covered' },
              { value: '$0', label: 'Cost to You, Always' },
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

      {/* SOLUTIONS */}
      <Solutions />

      {/* OUR PROMISE. Trust Factors */}
      <section
        className="py-24 px-4 bg-slate-950 text-white relative overflow-hidden"
        style={{ backgroundImage: `url('/images/canva/gold-dust-rising.jpg')`, backgroundSize: 'cover', backgroundPosition: 'center' }}
      >
        <div className="absolute inset-0 bg-slate-950/55"></div>
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
              { title: 'Free. Always.', desc: 'Our guidance costs you nothing, ever. Nobody else pays us either, so there is no hidden side to the transaction.' },
              { title: 'Completely Confidential', desc: 'Your information stays private. Nothing is shared without your explicit permission.' },
              { title: 'Zero Obligation', desc: 'Use our education, take our assessment, then decide anything you want, including working with no one.' },
              { title: 'No Stake in Your Choice', desc: 'We earn the same whatever you decide, which is nothing. Keeping the home, selling, or walking away all pay us equally.' },
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

        </div>
      </section>

      {/* HOW IT WORKS, drawn */}
      <HowItWorks />

      {/* TRACK RECORD: established practice, new website */}
      <TrackRecord />

      {/* WHY TRUST THIS GUIDE */}
      <section className="py-24 px-4 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-14 items-center mb-16">
            <div>
              <p className="text-amber-600 text-xs sm:text-sm font-semibold tracking-[0.25em] uppercase mb-4">Why Trust This Guide</p>
              <h2 className="font-serif text-4xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight leading-tight">
                Judge Us by What We Disclose
              </h2>
              <p className="text-slate-600 text-lg leading-relaxed mb-6">
                Anyone can post glowing reviews. What is harder, and more useful to you, is having no financial reason to
                push you in any direction at all.
              </p>
              <p className="text-slate-600 leading-relaxed mb-8">
                We take no referral fees, no commissions, and no advertising money from anything on this site, and we have
                no ownership of or affiliation with any company we mention. Whether you keep your home, sell to a cash
                buyer, donate the property, or do nothing at all, we receive exactly the same amount, which is nothing.
              </p>
              <Link
                href="/companies"
                className="inline-flex items-center gap-3 bg-slate-900 text-white px-8 py-4 rounded-lg font-semibold hover:bg-slate-800 transition shadow-lg"
              >
                See every option and who pays us
                <span>&rarr;</span>
              </Link>
            </div>
            <div className="relative">
              <img
                src="/images/canva/family-home.jpg"
                alt="A family outside their New Jersey home"
                className="rounded-2xl shadow-2xl w-full object-cover"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                t: 'A free option, every time',
                d: 'Every set of recommendations includes at least one route that earns us nothing, such as HUD-approved counseling or the New Jersey court mediation program. If keeping your home is realistic, we say so before anything else.',
              },
              {
                t: 'Paid by nobody',
                d: 'We take no referral fees, no commissions, and no advertising money from anything on this site. One destination, a brokerage we have an ownership interest in, is labeled as a related business everywhere it appears so you can weigh it accordingly. Everything else is unconnected to us entirely.',
              },
              {
                t: 'Specific, checkable information',
                d: 'New Jersey is a judicial foreclosure state. Your lender must give 30 days notice before filing, and you generally have 35 days to answer a complaint. Verify any of it against your own court documents.',
              },
            ].map((x, i) => (
              <div key={i} className="bg-white p-8 rounded-xl border border-slate-200 shadow-sm">
                <p className="font-bold text-slate-900 mb-3">{x.t}</p>
                <p className="text-slate-600 text-sm leading-relaxed">{x.d}</p>
              </div>
            ))}
          </div>

          <p className="text-xs text-slate-400 mt-8 text-center max-w-2xl mx-auto leading-relaxed">
            We do not publish homeowner testimonials or aggregate outcome statistics, because we will not print numbers we
            cannot substantiate.
          </p>
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

      {/* WHERE TO GET HELP: the real destinations */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-amber-600 text-xs sm:text-sm font-semibold tracking-[0.25em] uppercase mb-4">Real Places, Real Offers</p>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-slate-900 mb-5 tracking-tight">
              Where People Actually Get Out
            </h2>
            <p className="text-slate-600 text-lg max-w-2xl mx-auto leading-relaxed">
              Understanding your options is the first half. This is the second half: the specific places New Jersey homeowners go to end a foreclosure. Which one fits depends mostly on how much time you have left.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-10">
            {[
              { n: 'Clik Offer', w: 'A sale date is days away', d: 'Local NJ cash buyer that can close in as little as 7 days.', h: '/companies/clik-offer', t: 'Fastest' },
              { n: 'NJ Offer', w: 'You have a few weeks', d: 'Cash offer in 24 hours, closing 10 to 60 days, on your date.', h: '/companies/njoffer', t: 'Flexible' },
              { n: 'Fire Home Buyers', w: 'Fire or smoke damage', d: 'Buys damaged property as-is, no repairs or cleanup.', h: '/companies/fire-home-buyers', t: 'Damage' },
              { n: 'Private Sale Group', w: 'Home is $800k+', d: 'Discreet off-market sale. No listing, no showings, no commissions.', h: '/companies/private-sale-group', t: 'Luxury' },
              { n: 'Urbni', w: 'Property is a burden', d: 'Nonprofit that takes donated homes and land. We earn nothing.', h: '/companies/urbni', t: 'Donate' },
            ].map((c, i) => (
              <Link
                key={i}
                href={c.h}
                className="group rounded-xl border border-slate-200 bg-white p-6 hover:border-slate-900 hover:shadow-xl transition-all flex flex-col"
              >
                <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-amber-700 bg-amber-50 border border-amber-200 rounded-full px-2.5 py-1 self-start mb-3">
                  {c.t}
                </span>
                <h3 className="font-bold text-slate-900 mb-1.5 group-hover:text-slate-950">{c.n}</h3>
                <p className="text-sm font-semibold text-slate-800 mb-2">Use when: {c.w}</p>
                <p className="text-slate-600 text-sm leading-relaxed mb-4 flex-1">{c.d}</p>
                <span className="text-sm font-semibold text-slate-900 inline-flex items-center gap-2 group-hover:gap-3 transition-all">
                  Learn more <span className="text-amber-500">→</span>
                </span>
              </Link>
            ))}
          </div>

          <div className="rounded-2xl bg-slate-950 text-white px-8 py-12 text-center">
            <h3 className="font-serif text-2xl md:text-3xl font-bold mb-4">Which One Is Right for You?</h3>
            <p className="text-slate-300 mb-8 max-w-xl mx-auto leading-relaxed">
              Answer a few questions and we will rank these for your exact situation. If keeping your home is realistic, we will tell you that first, and every result includes at least one option that earns us nothing.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link href="/quiz" className="bg-amber-400 text-slate-950 px-10 py-4 rounded-lg font-bold hover:bg-amber-300 transition">
                Get My Recommendations
              </Link>
              <Link href="/companies" className="border border-white/30 bg-white/5 text-white px-10 py-4 rounded-lg font-semibold hover:bg-white/15 transition">
                Compare All Options
              </Link>
            </div>
          </div>
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

          <GuideCards />

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

      {/* TOOLS & REFERENCES */}
      <section className="py-24 px-4 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-amber-600 text-xs sm:text-sm font-semibold tracking-[0.25em] uppercase mb-4">Free Tools &amp; References</p>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-slate-900 mb-5 tracking-tight">Answers You Can Look Up Right Now</h2>
            <p className="text-slate-600 text-lg max-w-2xl mx-auto leading-relaxed">
              No sign-up, no waiting. These work at 2am, which is when most people need them.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { href: '/compare', title: 'All 7 options, compared', desc: 'One honest table: keep the home or not, speed, cost, credit impact, and when each stops working.' },
              { href: '/sheriff-sales', title: 'Sheriff sale directory', desc: 'Where all 21 NJ counties publish sale listings, with verified contacts and your adjournment rights.' },
              { href: '/documents', title: 'Your letter, decoded', desc: 'Every foreclosure document in the order it arrives: what it means and what to do that week.' },
              { href: '/tools/deadlines', title: 'Deadline calculator', desc: 'Enter the date on your newest letter; see the deadlines New Jersey law builds from it.' },
              { href: '/tools/net-proceeds', title: 'Net proceeds calculator', desc: 'What you would walk away with: market sale vs. cash sale vs. catching up and keeping it.' },
              { href: '/glossary', title: 'The glossary', desc: 'Every term from court papers and phone calls, defined in two plain sentences.' },
            ].map((t) => (
              <Link key={t.href} href={t.href} className="bg-white border border-slate-200 rounded-2xl px-6 py-5 hover:border-slate-400 hover:shadow-md transition group flex flex-col">
                <p className="font-bold text-slate-900 group-hover:text-slate-950">{t.title}</p>
                <p className="text-slate-500 text-sm mt-1.5 leading-relaxed">{t.desc}</p>
              </Link>
            ))}
          </div>
          <p className="text-center text-slate-500 text-sm mt-8">
            Also:{' '}
            <Link href="/scams" className="text-slate-900 underline underline-offset-4 font-semibold">how to spot a foreclosure rescue scam</Link>
            {' '}·{' '}
            <a href="/downloads/nj-foreclosure-week-one-checklist.pdf" className="text-slate-900 underline underline-offset-4 font-semibold">the printable Week One Checklist</a>
            {' '}·{' '}
            <Link href="/resources" className="text-slate-900 underline underline-offset-4 font-semibold">everything in one place</Link>
            {' '}·{' '}
            <Link href="/es" className="text-slate-900 underline underline-offset-4 font-semibold" lang="es">Guía en español</Link>
            {' '}·{' '}
            <Link href="/commercial" className="text-slate-900 underline underline-offset-4 font-semibold">Commercial property? Start here</Link>
          </p>
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
              a: 'Yes, and here is the full picture so you can judge it yourself. We take no referral fees, no commissions and no advertising money from anyone. You are never charged anything. One destination on this site, Corcoran Sawyer Smith x Builders Resource Center, is a brokerage the people behind this guide have an ownership interest in, so we do benefit if you list with them. It is labeled as a related business on its card, on its page and in your assessment results, and every other option remains open to you, including the free ones that earn us nothing.'
            },
            {
              q: 'Are you a law firm or real estate company?',
              a: 'The guide itself is an educational resource. We do not provide legal advice, negotiate with lenders, or perform real estate services. The people behind it are affiliated with a licensed New Jersey brokerage, which is disclosed wherever that brokerage appears. Everything else we point you toward is unconnected to us.'
            },
            {
              q: 'Do I have to use any of the companies you list?',
              a: 'No, and we have no financial reason to prefer that you do. You can find your own attorney or company anywhere, and we would encourage you to compare. The assessment is there to help you understand which type of solution fits your situation. What you do with that is entirely yours.'
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

      {/* Footer */}
      <footer className="bg-slate-950 text-slate-400 py-16 border-t border-white/5">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div>
              <div className="flex items-center gap-3 mb-5">
                <Logo className="h-12 w-12 text-white" />
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
                <li><Link href="/companies" className="hover:text-amber-400 transition">Where to Get Help</Link></li>
                <li><Link href="/professionals" className="hover:text-amber-400 transition">Professional Network</Link></li>
                <li><Link href="/answers" className="hover:text-amber-400 transition">NJ Foreclosure Questions Answered</Link></li>
                <li><Link href="/tools/timeline" className="hover:text-amber-400 transition">NJ Foreclosure Timeline Tool</Link></li>
                <li><Link href="/premium-properties" className="hover:text-amber-400 transition">Premium Property Program ($800k+)</Link></li>
                <li><Link href="/foreclosure-help" className="hover:text-amber-400 transition">Local Help by County and Town</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold text-white mb-4 text-xs uppercase tracking-[0.2em]">Legal</h3>
              <ul className="text-sm space-y-3">
                <li><Link href="/privacy" className="hover:text-amber-400 transition">Privacy Policy</Link></li>
                <li><Link href="/terms" className="hover:text-amber-400 transition">Terms of Use</Link></li>
                <li><Link href="/disclaimer" className="hover:text-amber-400 transition">Disclaimer</Link></li>
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
              IMPORTANT DISCLAIMER: NJ Foreclosure Guide is a FREE educational resource only. We are NOT a law firm, lender, or real estate company. We do NOT provide legal advice, financial advice, or negotiate with lenders. We do NOT perform any foreclosure solutions ourselves. We simply explain 7 options and connect you with attorneys and real estate professionals who provide these services. We take no referral fees, no commissions or advertising money from anything listed. One destination is a related business, labeled wherever it appears. You are never charged. All outcomes depend entirely on your situation and the professionals you work with. Always consult licensed professionals. This site is for education only.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
