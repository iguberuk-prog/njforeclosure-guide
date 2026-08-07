'use client';

import Link from 'next/link';

export default function LTVRefinancePage() {
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
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Home Equity Refinance. Tap Your Home Equity to Stop Foreclosure</h1>
          <p className="text-xl text-gray-700">
            A complete guide to using a home equity refinance to pay off debts or arrears. This option works if you have significant equity in your home and can qualify for a new loan.
          </p>
        </div>

        {/* Quick Summary */}
        <div className="bg-blue-50 border-l-4 border-blue-600 p-6 mb-8 rounded">
          <h3 className="font-semibold text-blue-900 mb-2">What You Need to Know</h3>
          <p className="text-gray-700 mb-3">
            A home equity refinance allows you to borrow against the equity in your home. For example, if your home is worth $300,000 and you owe $200,000, you have $100,000 in equity. You can refinance for $250,000, receive proceeds, and use that money to catch up on missed mortgage payments, pay off high-interest debt, or stabilize your financial situation.
          </p>
          <p className="text-gray-700">
            This is different from a standard refinance. Instead of just replacing your current mortgage, you are pulling money out of your home equity.
          </p>
        </div>

        {/* Who This Works Best For */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Who This Works Best For</h2>
          <div className="space-y-4">
            <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-600">
              <h3 className="font-semibold text-green-900 mb-2">You Are a Good Fit If:</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex gap-3">
                  <span className="text-green-600 font-bold">✓</span>
                  <span>You have significant equity in your home (at least 20%, ideally 30%+)</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-green-600 font-bold">✓</span>
                  <span>Your credit score is 640+</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-green-600 font-bold">✓</span>
                  <span>You have stable income</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-green-600 font-bold">✓</span>
                  <span>You owe high-interest credit card or personal debt you can pay off</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-green-600 font-bold">✓</span>
                  <span>You are only moderately behind on mortgage (1-3 months)</span>
                </li>
              </ul>
            </div>

            <div className="bg-red-50 p-6 rounded-lg border-l-4 border-red-600">
              <h3 className="font-semibold text-red-900 mb-2">May Not Work If:</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex gap-3">
                  <span className="text-red-600 font-bold">✗</span>
                  <span>You have little or no equity in your home</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-red-600 font-bold">✗</span>
                  <span>Your credit score is below 620</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-red-600 font-bold">✗</span>
                  <span>You are more than 3 months behind on payments</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-red-600 font-bold">✗</span>
                  <span>Your income is unstable or you are unemployed</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-red-600 font-bold">✗</span>
                  <span>You do not have additional debt to consolidate</span>
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
              <strong>David K., Jersey City</strong> owns a home worth approximately $380,000 with a mortgage balance of $220,000. He has $160,000 in equity. He also carries $28,000 in credit card debt at 18-22% interest rates.
            </p>
            <p>
              When he fell behind on his mortgage due to medical expenses, he also missed payments on credit cards. His financial situation was becoming dire with multiple high-interest debts.
            </p>
            <p>
              He refinanced his home for $280,000 (adding $60,000 to his current mortgage of $220,000). With the $60,000 proceeds, he:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-2">
              <li>Paid $25,000 toward caught-up mortgage payments</li>
              <li>Paid off $28,000 in credit card debt</li>
              <li>Kept $7,000 for medical expenses</li>
            </ul>
            <p>
              His new monthly payment increased slightly due to the higher loan amount, but he eliminated high-interest credit card payments and caught up on his mortgage. His financial stress decreased significantly.
            </p>
          </div>
        </section>

        {/* How It Works */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">How Equity Refinancing Works: Step by Step</h2>
          <div className="space-y-6">
            {[
              {
                step: 1,
                title: 'Calculate Your Equity',
                description: 'Determine your home value (online estimate, appraisal) and subtract what you owe. If home is worth $300k and you owe $200k, you have $100k equity. Most lenders let you borrow up to 80% of home value, so your new loan max would be $240k.',
              },
              {
                step: 2,
                title: 'Shop Lenders',
                description: 'Contact 3-5 lenders: banks, credit unions, mortgage brokers. Explain you want a cash-out refinance. Get Loan Estimates from each showing the new loan amount, rate, term, and how much cash you will receive.',
              },
              {
                step: 3,
                title: 'Apply for the Loan',
                description: 'Complete application with financial information: income, employment, assets, debts. You will need last 2 pay stubs, 2 months bank statements, 2 years tax returns.',
              },
              {
                step: 4,
                title: 'Property Appraisal',
                description: 'Lender orders appraisal to confirm home value. This takes 7-10 days. Appraisal cost is typically $300-500.',
              },
              {
                step: 5,
                title: 'Underwriting and Approval',
                description: 'Lender reviews your complete application, appraisal, and credit. They calculate how much you can borrow. Takes 7-14 days. You may be asked for additional documents.',
              },
              {
                step: 6,
                title: 'Clear to Close',
                description: 'Lender issues final approval and you receive Closing Disclosure showing final loan amount, rate, term, and cash proceeds.',
              },
              {
                step: 7,
                title: 'Sign and Close',
                description: 'Sign closing documents at title company or lender. Receive cash proceeds. The new loan pays off your old mortgage.',
              },
            ].map((item) => (
              <div key={item.step} className="bg-white border-2 border-gray-200 p-6 rounded-lg">
                <div className="flex gap-4 mb-3">
                  <div className="bg-teal-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold flex-shrink-0">
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
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Timeline: 5-6 Weeks</h2>
          <div className="space-y-4">
            <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-600">
              <div className="flex justify-between items-start mb-2">
                <h3 className="font-semibold text-lg text-gray-900">Days 1-3: Shopping and Application</h3>
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded text-sm font-semibold">Days 1-3</span>
              </div>
              <p className="text-gray-700">Contact lenders, get Loan Estimates, submit application</p>
            </div>

            <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-600">
              <div className="flex justify-between items-start mb-2">
                <h3 className="font-semibold text-lg text-gray-900">Days 4-7: Documentation Submission</h3>
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded text-sm font-semibold">Days 4-7</span>
              </div>
              <p className="text-gray-700">Submit financial documents and meet with appraiser</p>
            </div>

            <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-600">
              <div className="flex justify-between items-start mb-2">
                <h3 className="font-semibold text-lg text-gray-900">Days 8-17: Appraisal and Processing</h3>
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded text-sm font-semibold">10 days</span>
              </div>
              <p className="text-gray-700">Appraisal completed, documents processed</p>
            </div>

            <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-600">
              <div className="flex justify-between items-start mb-2">
                <h3 className="font-semibold text-lg text-gray-900">Days 18-35: Underwriting</h3>
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded text-sm font-semibold">7-14 days</span>
              </div>
              <p className="text-gray-700">Underwriter reviews all information and approves loan</p>
            </div>

            <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-600">
              <div className="flex justify-between items-start mb-2">
                <h3 className="font-semibold text-lg text-gray-900">Days 36-42: Clear to Close and Closing</h3>
                <span className="bg-green-100 text-green-800 px-3 py-1 rounded text-sm font-semibold">1-3 days review, 1 day close</span>
              </div>
              <p className="text-gray-700">Final approval issued, sign documents, receive cash</p>
            </div>
          </div>

          <div className="mt-6 bg-yellow-50 border-l-4 border-yellow-600 p-6 rounded">
            <p className="text-gray-700">
              <strong>Total Time:</strong> 5-6 weeks from application to receiving cash proceeds.
            </p>
          </div>
        </section>

        {/* Costs */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Closing Costs and What Cash You Receive</h2>
          <div className="bg-gray-50 p-8 rounded-lg">
            <h3 className="font-semibold text-lg text-gray-900 mb-4">Example: $60,000 Cash-Out Refinance</h3>
            <div className="space-y-4">
              <div className="bg-white p-4 rounded">
                <p className="text-gray-700 mb-3">
                  <strong>Original Situation:</strong>
                </p>
                <div className="space-y-2 text-gray-700 text-sm">
                  <div className="flex justify-between">
                    <span>Current mortgage balance</span>
                    <span className="font-semibold">$220,000</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Home value</span>
                    <span className="font-semibold">$380,000</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Desired cash out</span>
                    <span className="font-semibold">$60,000</span>
                  </div>
                </div>
              </div>

              <div className="bg-white p-4 rounded">
                <p className="text-gray-700 mb-3">
                  <strong>Closing Costs (Typical 2-5%):</strong>
                </p>
                <div className="space-y-2 text-gray-700 text-sm">
                  <div className="flex justify-between">
                    <span>Origination fee</span>
                    <span>$800</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Appraisal fee</span>
                    <span>$400</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Title search and insurance</span>
                    <span>$750</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Attorney review</span>
                    <span>$500</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Recording fees</span>
                    <span>$150</span>
                  </div>
                  <div className="border-t pt-2 flex justify-between font-bold">
                    <span>Total closing costs</span>
                    <span>$2,600</span>
                  </div>
                </div>
              </div>

              <div className="bg-green-50 p-4 rounded border-l-4 border-green-600">
                <p className="text-gray-700 mb-2">
                  <strong>Cash You Receive:</strong>
                </p>
                <div className="space-y-1 text-gray-700">
                  <p>Desired cash out: $60,000</p>
                  <p>Less closing costs: - $2,600</p>
                  <p><strong>Net cash to you: $57,400</strong></p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Important Considerations */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Important Considerations</h2>
          <div className="space-y-4">
            <div className="bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-600">
              <h3 className="font-semibold text-yellow-900 mb-3">Your Loan Gets Larger</h3>
              <p className="text-gray-700">
                You are adding to your mortgage debt. In the example above, you went from owing $220,000 to owing $280,000. Your monthly payment will increase even if interest rates are favorable.
              </p>
            </div>

            <div className="bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-600">
              <h3 className="font-semibold text-yellow-900 mb-3">You Will Pay This Back</h3>
              <p className="text-gray-700">
                That $60,000 cash comes with strings attached. You are borrowing money against your home. This must be paid back over 15-30 years along with interest.
              </p>
            </div>

            <div className="bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-600">
              <h3 className="font-semibold text-yellow-900 mb-3">Use the Cash Strategically</h3>
              <p className="text-gray-700">
                The best use of cash-out proceeds is to pay off high-interest debt (credit cards at 18%+) or catch up on mortgage arrears. Avoid using it for vacations or luxury purchases. That money needs to reduce your overall financial burden, not increase it.
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
                  <span className="text-gray-700">Access to cash for emergency needs</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-green-600 font-bold">+</span>
                  <span className="text-gray-700">Can pay off high-interest credit card debt</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-green-600 font-bold">+</span>
                  <span className="text-green-600 font-bold">+</span>
                  <span className="text-gray-700">Stops foreclosure by catching up on mortgage</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-green-600 font-bold">+</span>
                  <span className="text-gray-700">Faster than loan modification (5-6 weeks)</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-green-600 font-bold">+</span>
                  <span className="text-gray-700">Consolidates multiple debts into one payment</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-green-600 font-bold">+</span>
                  <span className="text-gray-700">Interest may be tax-deductible (consult tax pro)</span>
                </li>
              </ul>
            </div>

            <div className="bg-red-50 p-6 rounded-lg border-2 border-red-200">
              <h3 className="font-semibold text-lg text-red-900 mb-4">Risks & Challenges</h3>
              <ul className="space-y-3">
                <li className="flex gap-3">
                  <span className="text-red-600 font-bold">-</span>
                  <span className="text-gray-700">Your mortgage debt increases significantly</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-red-600 font-bold">-</span>
                  <span className="text-gray-700">Monthly payment will be higher</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-red-600 font-bold">-</span>
                  <span className="text-gray-700">You are extending payoff period (now pay for 30 years)</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-red-600 font-bold">-</span>
                  <span className="text-gray-700">Requires positive equity and good credit</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-red-600 font-bold">-</span>
                  <span className="text-gray-700">Home equity is reduced (less home ownership)</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-red-600 font-bold">-</span>
                  <span className="text-gray-700">Risk of foreclosure if new payment is unaffordable</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Next Steps */}
        <section className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-lg mb-8">
          <h2 className="text-2xl font-bold text-blue-900 mb-4">Your Next Steps</h2>
          <div className="space-y-4 text-gray-700">
            <p className="font-semibold">If home equity refinance seems like your best option:</p>
            <div className="space-y-3">
              <div className="flex gap-4">
                <span className="text-blue-600 font-bold text-lg">1.</span>
                <span>Get your home valued. Use online tools (Zillow, Trulia) or order professional appraisal ($300-500).</span>
              </div>
              <div className="flex gap-4">
                <span className="text-blue-600 font-bold text-lg">2.</span>
                <span>Calculate your equity: Home value minus current mortgage balance.</span>
              </div>
              <div className="flex gap-4">
                <span className="text-blue-600 font-bold text-lg">3.</span>
                <span>Get your credit report and check your score at AnnualCreditReport.com</span>
              </div>
              <div className="flex gap-4">
                <span className="text-blue-600 font-bold text-lg">4.</span>
                <span>List the debts you want to pay off and their current balances.</span>
              </div>
              <div className="flex gap-4">
                <span className="text-blue-600 font-bold text-lg">5.</span>
                <span>Shop 3-5 lenders and get Loan Estimates showing how much cash you will receive.</span>
              </div>
              <div className="flex gap-4">
                <span className="text-blue-600 font-bold text-lg">6.</span>
                <span>Apply with the lender offering the best combination of rate, term, and cash proceeds.</span>
              </div>
            </div>

            <div className="bg-white p-4 rounded border-t-4 border-blue-600 mt-4">
              <p className="text-gray-700 mb-2">
                <strong>Not sure if equity refinance is right for you?</strong>
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
            This guide is based on standard cash-out refinance practices used by major US lenders as of 2026. Specific terms, rates, closing costs, and equity lending limits vary by lender and market conditions. This information is educational and does not constitute financial advice. For guidance specific to your situation, consult with a loan officer or financial advisor.
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
