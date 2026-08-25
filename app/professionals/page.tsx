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
          <p className="text-amber-400 text-xs sm:text-sm font-semibold tracking-[0.25em] uppercase mb-4">Independent. Unpaid. No Stake in Your Choice.</p>
          <h1 className="font-serif text-4xl md:text-5xl font-bold mb-5 tracking-tight">Where to Get Help</h1>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
            When you're ready to move forward, here are the places that handle this work. We only list destinations that are real and currently available, and we are not paid by any of them.
          </p>
        </div>
      </section>

      {/* Trust banner */}

      {/* Honest state of the network */}
      <section className="max-w-4xl mx-auto px-4 py-16">
        <h2 className="text-4xl font-black text-gray-900 mb-4">Who We Can Connect You With Today</h2>
        <p className="text-gray-600 text-lg mb-10">
          We only list destinations that are real and available right now. Here is exactly what that is.
        </p>

        <div className="rounded-2xl border-2 border-emerald-200 bg-emerald-50/50 p-8 mb-6">
          <h3 className="text-xl font-black text-gray-900 mb-3">Free help, if you want to keep your home</h3>
          <p className="text-gray-700 mb-5 leading-relaxed">
            HUD-approved housing counselors are free to speak with and are not selling anything. If a foreclosure
            complaint has been filed against you, New Jersey also runs a court mediation program at no cost, which can
            include free housing counseling and legal assistance. These are the strongest first calls for most
            homeowners, and we earn nothing when you use them.
          </p>
          <Link
            href="/companies"
            className="inline-block bg-emerald-700 text-white px-6 py-3 rounded-lg font-bold hover:bg-emerald-800 transition"
          >
            See the free options
          </Link>
        </div>

        <div className="rounded-2xl border-2 border-gray-200 bg-white p-8 mb-6">
          <h3 className="text-xl font-black text-gray-900 mb-3">If selling is the right move</h3>
          <p className="text-gray-700 mb-5 leading-relaxed">
            We work with five destinations covering genuinely different situations: a 7-day fast close, a flexible cash
            sale, a fire and smoke damage specialist, a discreet off-market sale for higher-value homes, and a licensed
            brokerage that will value your home and list it on the open market. Which one fits depends mostly on how
            much time you have.
          </p>
          <Link
            href="/companies"
            className="inline-block bg-blue-900 text-white px-6 py-3 rounded-lg font-bold hover:bg-blue-950 transition"
          >
            Compare all options
          </Link>
        </div>

        <div className="rounded-2xl border-2 border-amber-300 bg-amber-50 p-8">
          <h3 className="text-xl font-black text-gray-900 mb-3">Attorneys, and why we do not refer them</h3>
          <p className="text-gray-700 leading-relaxed">
            We do not have a paid attorney partner, and we would tell you if we did. In New Jersey, as in nearly every
            state, lawyers are barred from paying non-lawyers for client referrals, so any site charging a fee to send
            you to an attorney raises a real question. If you need legal representation, the New Jersey State Bar
            Association runs a lawyer referral service, and the court mediation program above can include free legal
            assistance for eligible homeowners. We earn nothing from either, which is precisely why we can recommend
            them without hesitation.
          </p>
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
              description: 'You can contact anyone listed here, find your own professional elsewhere, or explore solutions on your own. We earn nothing either way, so it is genuinely your choice.'
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
