'use client';

import Link from 'next/link';

export default function Professionals() {
  return (
    <div className="min-h-full bg-white">
      {/* Navigation */}
      <nav className="sticky top-0 bg-white/95 backdrop-blur-md border-b border-gray-200 z-40 shadow-sm">
        <div className="max-w-6xl mx-auto px-3 sm:px-6 lg:px-8 py-2 flex justify-between items-center">
          <Link href="/" className="flex items-center gap-3 hover:opacity-85 transition">
            <img src="/images/icons/professional-legal-scales-lg.png" alt="NJ Foreclosure Guide" className="h-16 w-16 sm:h-20 sm:w-20" />
            <div className="hidden sm:flex flex-col">
              <div className="text-sm font-bold text-blue-900 tracking-tight">NJ FORECLOSURE</div>
              <div className="text-base font-semibold text-gray-500">GUIDE</div>
            </div>
          </Link>
          <div className="flex gap-2 sm:gap-8 text-sm sm:text-base">
            <Link href="/" className="text-gray-600 hover:text-blue-900 font-semibold transition">Home</Link>
            <Link href="/guides" className="text-gray-600 hover:text-blue-900 font-semibold transition">Guides</Link>
            <Link href="/quiz" className="text-gray-600 hover:text-blue-900 font-semibold transition">Quiz</Link>
          </div>
        </div>
      </nav>

      {/* Hero Section. Professional team photo */}
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
        <div className="max-w-4xl mx-auto text-center relative z-10 py-28 px-4 text-white">
          <p className="text-amber-400 text-xs sm:text-sm font-semibold tracking-[0.25em] uppercase mb-4">Vetted. Licensed. Experienced.</p>
          <h1 className="font-serif text-4xl md:text-5xl font-bold mb-5 tracking-tight">Our Professional Network</h1>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
            When you're ready to move forward, we connect you with vetted professionals who specialize in foreclosure solutions. Every attorney and real estate partner in our network is licensed, experienced, and committed to helping homeowners navigate their options.
          </p>
        </div>
      </section>

      {/* Trust banner */}
      <section className="bg-slate-950 py-12 px-4 border-t border-white/5">
        <div className="max-w-6xl mx-auto">
          <img src="/images/trusted-badge-premium.png" alt="Trusted by 2300+ NJ Families" className="w-full max-w-2xl mx-auto rounded-xl shadow-2xl ring-1 ring-amber-400/30" />
        </div>
      </section>

      {/* Attorneys Section */}
      <section className="max-w-6xl mx-auto px-4 py-20">
        <div className="mb-16">
          <h2 className="text-4xl font-black text-gray-900 mb-4">Foreclosure Attorneys</h2>
          <p className="text-gray-600 text-lg mb-12">
            Our network includes experienced attorneys who specialize in loan modifications, forbearance, bankruptcy (Chapter 13), and other legal foreclosure solutions.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                name: 'Coming Soon',
                specialty: 'Loan Modification & Forbearance',
                description: 'Attorneys who negotiate directly with lenders to modify terms and create manageable payment plans.',
                services: ['Loan Modification', 'Forbearance', 'Reinstatement']
              },
              {
                name: 'Coming Soon',
                specialty: 'Bankruptcy Protection (Chapter 13)',
                description: 'Attorneys experienced in Chapter 13 bankruptcy to restructure debt while keeping your home.',
                services: ['Chapter 13 Bankruptcy', 'Debt Restructuring', 'Home Protection']
              },
              {
                name: 'Coming Soon',
                specialty: 'Short Sale Representation',
                description: 'Attorneys who handle short sale negotiations and ensure fair terms with your lender.',
                services: ['Short Sale Negotiation', 'Lender Communication', 'Legal Protection']
              },
              {
                name: 'Coming Soon',
                specialty: 'General Foreclosure Defense',
                description: 'Attorneys who evaluate your entire situation and recommend the best legal approach.',
                services: ['Case Evaluation', 'Defense Strategy', 'Lender Negotiation']
              },
            ].map((attorney, idx) => (
              <div key={idx} className="p-8 border-2 border-gray-200 rounded-xl hover:border-blue-400 hover:shadow-lg transition">
                <div className="flex items-start gap-4 mb-4">
                  <img src="/images/icons/professional-legal-scales-lg.png" alt="Attorney" className="w-14 h-14 rounded-full bg-blue-50 p-2" />
                  <div className="flex-1">
                    <h3 className="text-xl font-black text-gray-900">{attorney.name}</h3>
                    <p className="text-blue-600 font-semibold text-sm">{attorney.specialty}</p>
                  </div>
                </div>
                <p className="text-gray-600 mb-4">{attorney.description}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {attorney.services.map((service, i) => (
                    <span key={i} className="px-3 py-1 bg-blue-50 text-blue-900 text-xs font-semibold rounded-full border border-blue-200">
                      {service}
                    </span>
                  ))}
                </div>
                <button className="w-full bg-blue-900 text-white py-2 rounded-lg font-bold hover:bg-blue-950 transition">
                  Contact Attorney
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Real Estate Companies Section */}
      <section className="max-w-6xl mx-auto px-4 py-20 border-t border-gray-200">
        <div className="mb-16">
          <h2 className="text-4xl font-black text-gray-900 mb-4">Real Estate & Cash Buy Companies</h2>
          <p className="text-gray-600 text-lg mb-12">
            Our network includes real estate professionals and cash buy companies that specialize in quick sales and alternative solutions.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                name: 'Coming Soon',
                specialty: 'Cash Home Buyers',
                description: 'Professional cash buyers who close quickly (14-30 days) with no repairs, inspections, or agent fees required.',
                services: ['Cash Offers', 'Quick Closing', 'No Repairs Needed']
              },
              {
                name: 'Coming Soon',
                specialty: 'Real Estate Specialists',
                description: 'Licensed real estate professionals experienced in short sales, traditional sales, and distressed property situations.',
                services: ['Short Sale', 'Quick Sale', 'Traditional Sale']
              },
              {
                name: 'Coming Soon',
                specialty: 'Equity Release Solutions',
                description: 'Companies that help homeowners access home equity to consolidate debt or stabilize finances.',
                services: ['Home Equity Loans', 'Debt Consolidation', 'Cash Release']
              },
              {
                name: 'Coming Soon',
                specialty: 'Alternative Solutions',
                description: 'Specialists in deed-in-lieu, loan payoffs, and other creative solutions tailored to your circumstances.',
                services: ['Deed-in-Lieu', 'Loan Payoff', 'Custom Solutions']
              },
            ].map((company, idx) => (
              <div key={idx} className="p-8 border-2 border-gray-200 rounded-xl hover:border-teal-400 hover:shadow-lg transition">
                <div className="flex items-start gap-4 mb-4">
                  <img src="/images/icons/cash-sale.png" alt="Real estate company" className="w-14 h-14 rounded-full bg-teal-50 p-2" />
                  <div className="flex-1">
                    <h3 className="text-xl font-black text-gray-900">{company.name}</h3>
                    <p className="text-teal-600 font-semibold text-sm">{company.specialty}</p>
                  </div>
                </div>
                <p className="text-gray-600 mb-4">{company.description}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {company.services.map((service, i) => (
                    <span key={i} className="px-3 py-1 bg-teal-50 text-teal-900 text-xs font-semibold rounded-full border border-teal-200">
                      {service}
                    </span>
                  ))}
                </div>
                <button className="w-full bg-teal-600 text-white py-2 rounded-lg font-bold hover:bg-teal-700 transition">
                  Contact Company
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="max-w-4xl mx-auto px-4 py-20 border-t border-gray-200">
        <h2 className="text-3xl font-black text-gray-900 mb-12 text-center">How Referrals Work</h2>
        <div className="space-y-8">
          {[
            {
              step: '1',
              title: 'Take the Free Assessment',
              description: 'Answer a few questions about your situation (2 minutes). This helps us understand which solutions are most relevant for you.'
            },
            {
              step: '2',
              title: 'See Your Match',
              description: 'We explain which solutions fit your circumstances and show you professionals in our network who specialize in those areas.'
            },
            {
              step: '3',
              title: 'Connect With A Professional',
              description: 'You decide if you want to speak with someone from our network. We make the introduction, everything else is up to you.'
            },
            {
              step: '4',
              title: 'Work With Your Professional',
              description: 'The attorney or company handles your case. We don\'t get involved, they provide the service, you make the decisions.'
            },
            {
              step: '5',
              title: 'You Control the Process',
              description: 'You can work with our referral partners, find your own professional elsewhere, or explore solutions on your own. It\'s always your choice.'
            },
          ].map((item, idx) => (
            <div key={idx} className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-blue-900 text-white font-black text-lg">
                  {item.step}
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-black text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-4xl mx-auto px-4 py-20 text-center border-t border-gray-200">
        <h2 className="text-3xl font-black text-gray-900 mb-4">Ready to Explore Your Options?</h2>
        <p className="text-gray-600 text-lg mb-8 max-w-2xl mx-auto">
          Take our free 2-minute assessment to see which solutions match your situation. Then we can connect you with qualified professionals who can help.
        </p>
        <Link
          href="/quiz"
          className="inline-block bg-blue-900 text-white px-12 py-4 rounded-xl font-bold hover:bg-blue-950 transition text-lg"
        >
          Start Free Assessment →
        </Link>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-16 mt-12 border-t border-gray-700">
        <div className="max-w-6xl mx-auto px-4">
          {/* Verification Badge */}
          <div className="flex justify-center mb-8">
            <img src="/images/verified-badge.png" alt="Verified - Trusted by 2300+ NJ Families" className="h-24 w-24 drop-shadow-lg" />
          </div>

          <div className="flex items-center justify-center gap-4 mb-8">
            <img src="/images/icons/professional-legal-scales-lg.png" alt="NJ Foreclosure Guide" className="h-20 w-20" />
            <div>
              <div className="text-lg font-bold text-white tracking-tight">NJ FORECLOSURE</div>
              <div className="text-base font-semibold text-gray-400">GUIDE</div>
            </div>
          </div>
          <div className="text-center text-sm border-t border-gray-700 pt-8">
            <p className="mb-3">© 2024 NJ Foreclosure Guide. All rights reserved.</p>
            <p className="text-gray-500 italic text-xs max-w-2xl mx-auto">
              Educational resource only. We are not attorneys or real estate companies. We refer you to qualified professionals in our network.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
