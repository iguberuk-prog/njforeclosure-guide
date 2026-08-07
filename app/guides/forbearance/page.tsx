'use client';

import Link from 'next/link';

export default function ForbearancePage() {
  return (
    <div className="min-h-full bg-white">
      {/* Navigation */}
      <nav className="sticky top-0 bg-white border-b border-gray-200 z-40">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold text-blue-900">
            NJ Foreclosure Guide
          </Link>
          <Link href="/guides" className="text-gray-600 hover:text-blue-900">
            ← Back to Guides
          </Link>
        </div>
      </nav>

      {/* Main Content */}
      <article className="max-w-3xl mx-auto px-4 py-12">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Forbearance and Deferment. Pause or Reduce Payments While You Recover</h1>
          <p className="text-xl text-gray-700">
            A complete guide to temporarily reducing or pausing mortgage payments. Forbearance gives you breathing room when facing a temporary financial hardship.
          </p>
        </div>

        {/* Quick Summary */}
        <div className="bg-blue-50 border-l-4 border-blue-600 p-6 mb-8 rounded">
          <h3 className="font-semibold text-blue-900 mb-2">What You Need to Know</h3>
          <p className="text-gray-700 mb-3">
            Forbearance is a temporary pause or reduction in your mortgage payment. Instead of losing your home, you negotiate with your lender to reduce or skip payments for a set period (typically 3-12 months) while you get back on your feet financially.
          </p>
          <p className="text-gray-700">
            Key point: This is temporary. Forbearance gives you time to recover from a temporary hardship like job loss, medical emergency, or unexpected expense. When forbearance ends, you resume normal payments or work out a longer-term solution.
          </p>
        </div>

        {/* Forbearance vs Modification vs Refinancing */}
        <section className="mb-12 bg-gray-50 p-8 rounded-lg">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Understanding Forbearance vs Other Options</h2>
          <div className="space-y-4">
            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-white p-4 rounded border-l-4 border-blue-600">
                <h3 className="font-semibold text-gray-900 mb-3 text-sm">Forbearance</h3>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li className="flex gap-2">
                    <span className="text-blue-600 font-bold">•</span>
                    <span>Temporarily pause payments</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-blue-600 font-bold">•</span>
                    <span>3-12 months typically</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-blue-600 font-bold">•</span>
                    <span>Payments resume after</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-blue-600 font-bold">•</span>
                    <span>Quick approval (1-2 weeks)</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-blue-600 font-bold">•</span>
                    <span>Temporary solution</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white p-4 rounded border-l-4 border-green-600">
                <h3 className="font-semibold text-gray-900 mb-3 text-sm">Modification</h3>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li className="flex gap-2">
                    <span className="text-green-600 font-bold">•</span>
                    <span>Permanent change to loan</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-green-600 font-bold">•</span>
                    <span>Lower payments long-term</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-green-600 font-bold">•</span>
                    <span>Longer term (extend loan)</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-green-600 font-bold">•</span>
                    <span>Takes 4-6 months</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-green-600 font-bold">•</span>
                    <span>Permanent solution</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white p-4 rounded border-l-4 border-orange-600">
                <h3 className="font-semibold text-gray-900 mb-3 text-sm">Refinancing</h3>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li className="flex gap-2">
                    <span className="text-orange-600 font-bold">•</span>
                    <span>New loan entirely</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-orange-600 font-bold">•</span>
                    <span>Lower interest rate</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-orange-600 font-bold">•</span>
                    <span>Requires credit approval</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-orange-600 font-bold">•</span>
                    <span>Takes 5-6 weeks</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-orange-600 font-bold">•</span>
                    <span>Permanent solution</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Who This Works Best For */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Who This Works Best For</h2>
          <div className="space-y-4">
            <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-600">
              <h3 className="font-semibold text-green-900 mb-2">You Are a Good Fit If:</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex gap-3">
                  <span className="text-green-600 font-bold">✓</span>
                  <span>Your hardship is temporary (job loss you expect to recover from, medical emergency you will overcome)</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-green-600 font-bold">✓</span>
                  <span>You expect your financial situation to improve in 3-12 months</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-green-600 font-bold">✓</span>
                  <span>You have specific plans to resume payments (new job starting, settlement expected, etc.)</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-green-600 font-bold">✓</span>
                  <span>You want a quick solution (need relief in next few weeks)</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-green-600 font-bold">✓</span>
                  <span>You do not want a permanent modification to your loan</span>
                </li>
              </ul>
            </div>

            <div className="bg-red-50 p-6 rounded-lg border-l-4 border-red-600">
              <h3 className="font-semibold text-red-900 mb-2">May Not Work If:</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex gap-3">
                  <span className="text-red-600 font-bold">✗</span>
                  <span>Your financial problem is long-term or permanent</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-red-600 font-bold">✗</span>
                  <span>You cannot afford payments even after forbearance ends</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-red-600 font-bold">✗</span>
                  <span>You have no realistic plan to recover</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-red-600 font-bold">✗</span>
                  <span>Forbearance only delays the inevitable</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Real Scenario */}
        <section className="mb-12 bg-gray-50 p-8 rounded-lg">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Real Homeowner Scenario</h2>
          <div className="space-y-4 text-gray-700">
            <p>
              <strong>Patricia M., Newark</strong> was steadily employed as a nurse making $3,500 per month with a $1,100 mortgage payment. In November, she was involved in a car accident and required emergency surgery. She missed 3 months of work for recovery and fell behind $3,300 on her mortgage.
            </p>
            <p>
              She contacted her lender and requested forbearance, explaining that she expected to return to full-time work in January. Her lender approved a 3-month forbearance agreement:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-2">
              <li>December, January, February: Zero payment required</li>
              <li>March: Resume normal $1,100 payment</li>
              <li>Missed $3,300 added to end of loan (capitalized)</li>
            </ul>
            <p>
              Patricia returned to work in January as planned. She resumed her normal payment in March. No foreclosure occurred. The forbearance gave her exactly what she needed: time to recover.
            </p>
          </div>
        </section>

        {/* Types of Forbearance */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Types of Forbearance Arrangements</h2>
          <div className="space-y-4">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="font-semibold text-lg text-gray-900 mb-3">Option 1: Full Forbearance (Zero Payment)</h3>
              <p className="text-gray-700 mb-3">
                You pay nothing for 3-6 months. This is the most common option for temporary hardships. After forbearance ends, you resume your normal payment.
              </p>
              <div className="bg-white p-4 rounded text-sm">
                <p><strong>Example:</strong> Monthly payment $1,200</p>
                <p>Forbearance period: Nov, Dec, Jan (3 months) = $3,600 skipped payments</p>
                <p>February onward: Resume $1,200 monthly payment</p>
                <p>Capitalization: $3,600 added to loan balance</p>
              </div>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="font-semibold text-lg text-gray-900 mb-3">Option 2: Partial Forbearance (Reduced Payment)</h3>
              <p className="text-gray-700 mb-3">
                You pay a reduced amount (50% of normal payment) for 3-6 months. This bridges the gap if you have partial income.
              </p>
              <div className="bg-white p-4 rounded text-sm">
                <p><strong>Example:</strong> Normal monthly payment $1,200</p>
                <p>Forbearance payment: $600/month for 6 months</p>
                <p>After 6 months: Resume full $1,200 payment</p>
                <p>Capitalization: $3,600 in forgone payments added to loan</p>
              </div>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="font-semibold text-lg text-gray-900 mb-3">Option 3: Graduated Forbearance (Increasing Payments)</h3>
              <p className="text-gray-700 mb-3">
                Payments start low and increase gradually as your financial situation improves.
              </p>
              <div className="bg-white p-4 rounded text-sm">
                <p><strong>Example:</strong> Normal payment $1,200</p>
                <p>Month 1-2: $400/month</p>
                <p>Month 3-4: $700/month</p>
                <p>Month 5-6: $1,000/month</p>
                <p>Month 7+: Full $1,200/month resumes</p>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">The Forbearance Process: Step by Step</h2>
          <div className="space-y-6">
            {[
              {
                step: 1,
                title: 'Contact Your Lender',
                description: 'Call your lender as soon as you realize you will miss a payment. Ask for the loss mitigation or workout department. Be direct: "I need help with my mortgage payment due to a temporary hardship. Can we discuss forbearance?"',
              },
              {
                step: 2,
                title: 'Explain Your Hardship',
                description: 'Be specific and brief. Example: "I was laid off on March 15. I have a job starting June 1." Or: "I had medical emergency, out of work for 2 months, returning to work in April." The key is demonstrating this is temporary.',
              },
              {
                step: 3,
                title: 'Request Specific Forbearance Terms',
                description: 'Be clear about what you need: "I need 3 months with no payment. April, May, and June." Or: "I can pay $500/month for 2 months instead of the full $1,200." Specific requests are easier to approve.',
              },
              {
                step: 4,
                title: 'Receive Forbearance Agreement',
                description: 'Lender sends a Forbearance Agreement in writing. This spells out exactly: how many months, payment amount (if any), when forbearance ends, what happens to missed payments, and when normal payments resume.',
              },
              {
                step: 5,
                title: 'Review and Sign',
                description: 'Carefully read the agreement. Make sure it matches what you discussed. Do not sign if the terms are different. Call back to clarify anything you do not understand before signing.',
              },
              {
                step: 6,
                title: 'Make Reduced or Zero Payments',
                description: 'During forbearance period, either pay nothing or pay the reduced amount as agreed. Make payments on time. Missing even one payment during forbearance can result in denial or cancellation.',
              },
              {
                step: 7,
                title: 'Resume Normal Payments',
                description: 'When forbearance ends, resume your normal full payment. Missed payments have been capitalized (added to loan balance). You do not pay them as a lump sum.',
              },
            ].map((item) => (
              <div key={item.step} className="bg-white border-2 border-gray-200 p-6 rounded-lg">
                <div className="flex gap-4 mb-3">
                  <div className="bg-indigo-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold flex-shrink-0">
                    {item.step}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">{item.title}</h3>
                </div>
                <p className="text-gray-700 ml-12">{item.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Timeline */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Timeline: Fast Process</h2>
          <div className="space-y-4">
            <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-600">
              <div className="flex justify-between items-start mb-2">
                <h3 className="font-semibold text-lg text-gray-900">Day 1: Initial Contact</h3>
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded text-sm font-semibold">Same day</span>
              </div>
              <p className="text-gray-700">Call lender, speak to loss mitigation, request forbearance</p>
            </div>

            <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-600">
              <div className="flex justify-between items-start mb-2">
                <h3 className="font-semibold text-lg text-gray-900">Days 2-3: Application and Review</h3>
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded text-sm font-semibold">1-3 days</span>
              </div>
              <p className="text-gray-700">Lender may request brief explanation of hardship</p>
            </div>

            <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-600">
              <div className="flex justify-between items-start mb-2">
                <h3 className="font-semibold text-lg text-gray-900">Days 4-7: Approval and Documentation</h3>
                <span className="bg-green-100 text-green-800 px-3 py-1 rounded text-sm font-semibold">3-7 days</span>
              </div>
              <p className="text-gray-700">Lender approves and sends Forbearance Agreement</p>
            </div>

            <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-600">
              <div className="flex justify-between items-start mb-2">
                <h3 className="font-semibold text-lg text-gray-900">Total Time to Relief</h3>
                <span className="bg-green-100 text-green-800 px-3 py-1 rounded text-sm font-semibold">1-2 weeks</span>
              </div>
              <p className="text-gray-700">From first call to payment pause: typically 1-2 weeks</p>
            </div>
          </div>

          <div className="mt-6 bg-yellow-50 border-l-4 border-yellow-600 p-6 rounded">
            <p className="text-gray-700">
              <strong>Fastest Solution:</strong> Forbearance is the fastest way to stop foreclosure. Approval typically takes 1-2 weeks, compared to 4-6 months for modification or 5-6 weeks for refinancing.
            </p>
          </div>
        </section>

        {/* What Happens to Missed Payments */}
        <section className="mb-12 bg-blue-50 p-8 rounded-lg border-l-4 border-blue-600">
          <h2 className="text-2xl font-bold text-blue-900 mb-6">What Happens to Your Missed Payments?</h2>
          <div className="space-y-4 text-gray-700">
            <p>
              This is critical to understand. You do NOT pay off the missed payments immediately after forbearance. Instead, they are handled one of three ways:
            </p>

            <div className="space-y-4 mt-4">
              <div className="bg-white p-4 rounded">
                <h3 className="font-semibold text-gray-900 mb-2">Option 1: Capitalization (Most Common)</h3>
                <p>
                  Missed payments are added to the end of your loan. Your loan balance increases by the skipped amount. You pay this back as part of your normal mortgage over the remaining loan term.
                </p>
                <p className="text-sm mt-2"><strong>Example:</strong> Skipped 3 months of $1,200 payments = $3,600 added to loan balance. You repay this spread over 20-30 years along with your regular payment.</p>
              </div>

              <div className="bg-white p-4 rounded">
                <h3 className="font-semibold text-gray-900 mb-2">Option 2: Repayment Plan</h3>
                <p>
                  Missed payments are added to your regular payment over a period. Example: Normal payment is $1,200. After forbearance, you pay $1,200 + $400 for 9 months to catch up.
                </p>
                <p className="text-sm mt-2"><strong>Advantage:</strong> Missed payments are paid off faster than capitalization</p>
                <p className="text-sm"><strong>Disadvantage:</strong> Higher payment during repayment period</p>
              </div>

              <div className="bg-white p-4 rounded">
                <h3 className="font-semibold text-gray-900 mb-2">Option 3: Lump Sum After Forbearance</h3>
                <p>
                  Less common. You pay all missed payments at the end of forbearance period in one lump sum. This is difficult for homeowners in financial hardship.
                </p>
              </div>
            </div>

            <div className="bg-yellow-50 p-4 rounded mt-4 border-l-4 border-yellow-600">
              <p className="font-semibold text-yellow-900 mb-2">Critical Point</p>
              <p className="text-gray-700">
                Forbearance does not erase your missed payments. It simply postpones dealing with them. Before you accept forbearance, make sure you have a realistic plan for what comes after. If forbearance ends and you still cannot afford your normal payment (plus the repayment of skipped payments), you will be back in foreclosure.
              </p>
            </div>
          </div>
        </section>

        {/* Benefits and Risks */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Benefits vs. Risks</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-green-50 p-6 rounded-lg border-2 border-green-200">
              <h3 className="font-semibold text-lg text-green-900 mb-4">Benefits</h3>
              <ul className="space-y-3">
                <li className="flex gap-3">
                  <span className="text-green-600 font-bold">+</span>
                  <span className="text-gray-700">Fastest approval (1-2 weeks)</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-green-600 font-bold">+</span>
                  <span className="text-gray-700">Immediate relief from payments</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-green-600 font-bold">+</span>
                  <span className="text-gray-700">No credit score requirement</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-green-600 font-bold">+</span>
                  <span className="text-gray-700">Easy process (no complex documents)</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-green-600 font-bold">+</span>
                  <span className="text-gray-700">Stops foreclosure immediately</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-green-600 font-bold">+</span>
                  <span className="text-gray-700">You keep your home</span>
                </li>
              </ul>
            </div>

            <div className="bg-red-50 p-6 rounded-lg border-2 border-red-200">
              <h3 className="font-semibold text-lg text-red-900 mb-4">Risks & Challenges</h3>
              <ul className="space-y-3">
                <li className="flex gap-3">
                  <span className="text-red-600 font-bold">-</span>
                  <span className="text-gray-700">Only temporary (3-12 months)</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-red-600 font-bold">-</span>
                  <span className="text-gray-700">Problem returns when forbearance ends</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-red-600 font-bold">-</span>
                  <span className="text-gray-700">Missed payments still owed (capitalized or repaid)</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-red-600 font-bold">-</span>
                  <span className="text-gray-700">May need permanent solution after forbearance ends</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-red-600 font-bold">-</span>
                  <span className="text-gray-700">Not suitable for long-term financial problems</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Planning for After Forbearance */}
        <section className="mb-12 bg-yellow-50 border-l-4 border-yellow-600 p-8 rounded">
          <h2 className="text-2xl font-bold text-yellow-900 mb-4">Critical: Plan for When Forbearance Ends</h2>
          <p className="text-gray-700 mb-4">
            This is the most important section. Forbearance is only successful if your situation actually improves by the time it ends. Before you accept forbearance, honestly answer these questions:
          </p>
          <div className="space-y-3 text-gray-700">
            <div className="bg-white p-4 rounded">
              <p className="font-semibold mb-1">Question 1: When will my income return?</p>
              <p className="text-sm">Be specific. If you were laid off, do you have a new job lined up? If so, when does it start?</p>
            </div>
            <div className="bg-white p-4 rounded">
              <p className="font-semibold mb-1">Question 2: After forbearance, can I afford my normal payment?</p>
              <p className="text-sm">Do the math. When forbearance ends in month 4, will your income be back to a level where you can afford the full payment plus any repayment of skipped payments?</p>
            </div>
            <div className="bg-white p-4 rounded">
              <p className="font-semibold mb-1">Question 3: What if my situation does not improve?</p>
              <p className="text-sm">Have a backup plan. You might need loan modification or to explore other options. Do not wait until forbearance ends with no plan.</p>
            </div>
          </div>

          <div className="bg-white p-4 rounded mt-4 border-l-4 border-red-600">
            <p className="font-semibold text-red-900 mb-2">Warning</p>
            <p className="text-gray-700">
              If you accept forbearance but your financial situation will NOT improve, you are only delaying foreclosure. The problem will return when forbearance ends. In that case, consider a permanent solution like loan modification instead.
            </p>
          </div>
        </section>

        {/* Next Steps */}
        <section className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-lg mb-8">
          <h2 className="text-2xl font-bold text-blue-900 mb-4">Your Next Steps</h2>
          <div className="space-y-4 text-gray-700">
            <p className="font-semibold">If forbearance seems like your best option:</p>
            <div className="space-y-3">
              <div className="flex gap-4">
                <span className="text-blue-600 font-bold text-lg">1.</span>
                <span>Call your lender TODAY. Do not wait for a foreclosure notice. Forbearance is easier to get if you call before missing payments.</span>
              </div>
              <div className="flex gap-4">
                <span className="text-blue-600 font-bold text-lg">2.</span>
                <span>Be specific about your hardship and your timeline for recovery. "I was laid off, job starts June 1" is better than "I am having financial problems."</span>
              </div>
              <div className="flex gap-4">
                <span className="text-blue-600 font-bold text-lg">3.</span>
                <span>Request specific forbearance terms: how many months, what payment (if any), and how missed payments will be handled.</span>
              </div>
              <div className="flex gap-4">
                <span className="text-blue-600 font-bold text-lg">4.</span>
                <span>Read the Forbearance Agreement carefully before signing. Make sure it matches what was agreed.</span>
              </div>
              <div className="flex gap-4">
                <span className="text-blue-600 font-bold text-lg">5.</span>
                <span>Make all forbearance payments on time. If you miss even one payment, forbearance may be cancelled.</span>
              </div>
              <div className="flex gap-4">
                <span className="text-blue-600 font-bold text-lg">6.</span>
                <span>Start planning NOW for what comes after forbearance. What will you do when it ends?</span>
              </div>
            </div>

            <div className="bg-white p-4 rounded border-t-4 border-blue-600 mt-4">
              <p className="text-gray-700 mb-2">
                <strong>Not sure if forbearance is right for you?</strong>
              </p>
              <Link
                href="/quiz"
                className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
              >
                Take the Situation Quiz to Compare All Options →
              </Link>
            </div>
          </div>
        </section>

        {/* Trust Section */}
        <section className="bg-blue-50 p-8 rounded-lg mb-8 border-l-4 border-blue-600">
          <h3 className="font-semibold text-blue-900 mb-4">About This Guide</h3>
          <p className="text-gray-700 text-sm">
            This guide is based on standard forbearance practices used by US mortgage lenders as of 2026. Specific terms vary by lender. This information is educational and does not constitute legal or financial advice. For guidance specific to your situation, contact your lender directly or consult with a HUD-approved housing counselor (free service).
          </p>
        </section>
      </article>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-12 mt-16">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <p>&copy; 2026 NJ Foreclosure Guide. Educational resource. Not legal advice.</p>
        </div>
      </footer>
    </div>
  );
}
