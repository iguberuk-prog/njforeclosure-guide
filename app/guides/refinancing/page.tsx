'use client';

import Link from 'next/link';
import SiteHeader from '../../components/SiteHeader';

export default function RefinancingPage() {
  return (
    <div className="min-h-full bg-white">
      <SiteHeader />

      {/* Main Content */}
      <article className="max-w-3xl mx-auto px-4 py-12">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Refinancing. Replace Your Mortgage with Better Terms</h1>
          <p className="text-xl text-gray-700">
            A complete guide to getting a new loan at better interest rates or terms. Refinancing differs from loan modification by giving you an entirely new mortgage instead of modifying your existing one.
          </p>
        </div>

        {/* Quick Summary */}
        <div className="bg-blue-50 border-l-4 border-blue-600 p-6 mb-8 rounded">
          <h3 className="font-semibold text-blue-900 mb-2">What You Need to Know</h3>
          <p className="text-gray-700 mb-3">
            Refinancing means taking out a completely new loan that pays off your existing mortgage. In exchange, you receive better terms: lower interest rate, lower monthly payment, or shorter loan term. Banks prefer refinancing over modification because they can underwrite a completely new loan rather than modify an existing one.
          </p>
          <p className="text-gray-700">
            Key requirement: Refinancing is only available if you have equity in your home and your credit is reasonably good. If you owe more than the home is worth, traditional refinancing will not work.
          </p>
        </div>

        {/* Refinancing vs Modification */}
        <section className="mb-12 bg-gray-50 p-8 rounded-lg">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Refinancing vs Loan Modification: Key Differences</h2>
          <div className="space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-white p-6 rounded border-l-4 border-blue-600">
                <h3 className="font-semibold text-gray-900 mb-3">Loan Modification</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex gap-2">
                    <span className="text-blue-600 font-bold">•</span>
                    <span>Modifies existing loan terms</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-blue-600 font-bold">•</span>
                    <span>Missed payments capitalized</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-blue-600 font-bold">•</span>
                    <span>Works with lower credit scores</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-blue-600 font-bold">•</span>
                    <span>No new lender involved</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-blue-600 font-bold">•</span>
                    <span>Less paperwork</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-blue-600 font-bold">•</span>
                    <span>30-40% approval rate</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded border-l-4 border-green-600">
                <h3 className="font-semibold text-gray-900 mb-3">Refinancing</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex gap-2">
                    <span className="text-green-600 font-bold">•</span>
                    <span>Completely new loan</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-green-600 font-bold">•</span>
                    <span>Pays off old loan immediately</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-green-600 font-bold">•</span>
                    <span>Requires stronger credit score</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-green-600 font-bold">•</span>
                    <span>New lender handles process</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-green-600 font-bold">•</span>
                    <span>More complex underwriting</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-green-600 font-bold">•</span>
                    <span>Often easier to qualify for than a new purchase loan</span>
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
                  <span>Your home is worth more than you owe (positive equity)</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-green-600 font-bold">✓</span>
                  <span>Your credit score is 600+</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-green-600 font-bold">✓</span>
                  <span>You have stable income from employment</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-green-600 font-bold">✓</span>
                  <span>You are current on payments or only slightly behind</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-green-600 font-bold">✓</span>
                  <span>Current interest rates are lower than your existing rate</span>
                </li>
              </ul>
            </div>

            <div className="bg-red-50 p-6 rounded-lg border-l-4 border-red-600">
              <h3 className="font-semibold text-red-900 mb-2">May Not Work If:</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex gap-3">
                  <span className="text-red-600 font-bold">✗</span>
                  <span>You owe more than the home is worth (underwater/negative equity)</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-red-600 font-bold">✗</span>
                  <span>Your credit score is below 580</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-red-600 font-bold">✗</span>
                  <span>You are more than 3 months behind on payments</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-red-600 font-bold">✗</span>
                  <span>Foreclosure has already been filed</span>
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
              <strong>James R., Essex County</strong> bought his home in 2008 at the height of the market for $285,000 with a 6.5% interest rate. His current balance is $210,000, and his home is now worth approximately $320,000 (he has $110,000 in equity).
            </p>
            <p>
              His monthly payment is $1,580. Due to a job change, he had a 2-month income gap and fell behind on payments. He contacted his lender about options and discovered that with current interest rates at 4.2%, he could refinance into a 20-year mortgage at a significantly lower payment.
            </p>
            <p>
              Refinancing details:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-2">
              <li>New loan amount: $214,000 (includes closing costs)</li>
              <li>New interest rate: 4.2%</li>
              <li>New term: 20 years</li>
              <li>New payment: $1,290 per month</li>
              <li>Monthly savings: $290</li>
            </ul>
            <p>
              James used the refinancing proceeds to pay off his missed payments, bringing the account current. He stopped the foreclosure process and now has a sustainable payment. Total process took 6 weeks.
            </p>
          </div>
        </section>

        {/* How It Works */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">The Refinancing Process: Step by Step</h2>
          <div className="space-y-6">
            {[
              {
                step: 1,
                title: 'Check Your Home Value and Equity',
                description: 'Get a free online estimate (Zillow, Trulia, etc.) or order a professional appraisal ($300-500). Compare this to your current loan balance. You need positive equity to refinance conventionally.',
              },
              {
                step: 2,
                title: 'Check Your Credit Score',
                description: 'Get your free credit reports from AnnualCreditReport.com. Most lenders require a minimum score of 580-620. If your score is below 600, refinancing will be difficult. Focus on paying down credit card balances first.',
              },
              {
                step: 3,
                title: 'Shop Multiple Lenders',
                description: 'Contact at least 3-5 lenders: banks, credit unions, mortgage brokers. Get Loan Estimates from each (they are required by law to provide these within 3 business days). Compare rates, terms, and closing costs.',
              },
              {
                step: 4,
                title: 'Complete Loan Application',
                description: 'Provide financial information: income, employment, assets, debts. You will need: last 2 pay stubs, 2 months bank statements, 2 years tax returns, list of debts and monthly obligations.',
              },
              {
                step: 5,
                title: 'Property Appraisal',
                description: 'Lender orders an appraisal to determine home value. This typically costs $300-500 and takes 7-10 days. You may be required to pay this upfront or it can be included in closing costs.',
              },
              {
                step: 6,
                title: 'Underwriting and Approval',
                description: 'Lender reviews your complete application and appraisal. They verify employment, check credit, and assess risk. This takes 7-14 days. You may be asked for additional documentation.',
              },
              {
                step: 7,
                title: 'Clear to Close',
                description: 'Once approved, lender issues final approval (clear to close). You review the Closing Disclosure (shows final rates, costs, monthly payment). You have 3 days to review before signing.',
              },
              {
                step: 8,
                title: 'Closing',
                description: 'Sign final documents at a title company or lender office. Bring ID and proof of funds (if applicable). Funds are transferred, old loan is paid off, new loan funds arrive.',
              },
            ].map((item) => (
              <div key={item.step} className="bg-white border-2 border-gray-200 p-6 rounded-lg">
                <div className="flex gap-4 mb-3">
                  <div className="bg-green-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold flex-shrink-0">
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
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Timeline from Start to Funding</h2>
          <div className="space-y-4">
            <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-600">
              <div className="flex justify-between items-start mb-2">
                <h3 className="font-semibold text-lg text-gray-900">Days 1-3: Shopping and Application</h3>
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded text-sm font-semibold">Days 1-3</span>
              </div>
              <p className="text-gray-700">Contact multiple lenders, get Loan Estimates, submit application</p>
            </div>

            <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-600">
              <div className="flex justify-between items-start mb-2">
                <h3 className="font-semibold text-lg text-gray-900">Days 4-7: Document Submission</h3>
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded text-sm font-semibold">Days 4-7</span>
              </div>
              <p className="text-gray-700">Submit financial documents: pay stubs, bank statements, tax returns</p>
            </div>

            <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-600">
              <div className="flex justify-between items-start mb-2">
                <h3 className="font-semibold text-lg text-gray-900">Days 8-17: Appraisal and Processing</h3>
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded text-sm font-semibold">10 days</span>
              </div>
              <p className="text-gray-700">Appraisal is ordered and completed. Processing begins.</p>
            </div>

            <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-600">
              <div className="flex justify-between items-start mb-2">
                <h3 className="font-semibold text-lg text-gray-900">Days 18-35: Underwriting</h3>
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded text-sm font-semibold">7-14 days</span>
              </div>
              <p className="text-gray-700">Underwriter reviews application. Additional documentation may be requested.</p>
            </div>

            <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-600">
              <div className="flex justify-between items-start mb-2">
                <h3 className="font-semibold text-lg text-gray-900">Days 36-38: Clear to Close</h3>
                <span className="bg-green-100 text-green-800 px-3 py-1 rounded text-sm font-semibold">3 days</span>
              </div>
              <p className="text-gray-700">Approval issued. You review Closing Disclosure for 3 business days.</p>
            </div>

            <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-600">
              <div className="flex justify-between items-start mb-2">
                <h3 className="font-semibold text-lg text-gray-900">Days 39-42: Closing and Funding</h3>
                <span className="bg-green-100 text-green-800 px-3 py-1 rounded text-sm font-semibold">1-3 days</span>
              </div>
              <p className="text-gray-700">Sign closing documents. Funds disbursed. Old loan paid off. New loan active.</p>
            </div>
          </div>

          <div className="mt-6 bg-yellow-50 border-l-4 border-yellow-600 p-6 rounded">
            <p className="text-gray-700">
              <strong>Total Time:</strong> 5-6 weeks from application to funding. This timeline assumes no complications, quick appraisals, and responsive underwriting.
            </p>
          </div>
        </section>

        {/* Costs */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Costs and Closing Expenses</h2>
          <div className="bg-gray-50 p-6 rounded-lg mb-6">
            <h3 className="font-semibold text-lg text-gray-900 mb-4">Typical Closing Costs: 2-5% of Loan Amount</h3>
            <div className="space-y-4">
              <div className="bg-white p-4 rounded">
                <p className="text-gray-700">
                  <strong>Loan amount: $200,000</strong>
                </p>
                <p className="text-gray-700 text-sm">
                  Closing costs: $4,000-$10,000
                </p>
              </div>

              <div className="space-y-3 text-gray-700">
                <div className="flex justify-between">
                  <span>Origination fee</span>
                  <span>$800-1,200</span>
                </div>
                <div className="flex justify-between">
                  <span>Appraisal fee</span>
                  <span>$300-500</span>
                </div>
                <div className="flex justify-between">
                  <span>Credit report</span>
                  <span>$25-50</span>
                </div>
                <div className="flex justify-between">
                  <span>Title search and insurance</span>
                  <span>$300-1,000</span>
                </div>
                <div className="flex justify-between">
                  <span>Attorney review and closing</span>
                  <span>$500-1,500</span>
                </div>
                <div className="flex justify-between">
                  <span>Homeowners insurance (prepaid)</span>
                  <span>$500-2,000</span>
                </div>
                <div className="flex justify-between">
                  <span>Property taxes (prepaid)</span>
                  <span>$500-2,000</span>
                </div>
                <div className="flex justify-between">
                  <span>Recording fees</span>
                  <span>$50-200</span>
                </div>
                <div className="border-t pt-3 flex justify-between font-bold">
                  <span>Total estimated costs</span>
                  <span>$4,000-10,000</span>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-600">
            <h3 className="font-semibold text-blue-900 mb-3">Break-Even Analysis</h3>
            <div className="space-y-3 text-gray-700">
              <p>
                Example: Your new payment is $200/month lower, but closing costs are $6,000.
              </p>
              <p>
                Break-even point: $6,000 divided by $200 per month savings = 30 months (2.5 years)
              </p>
              <p>
                <strong>Recommendation:</strong> Refinance only if you plan to stay in the home for at least 2-3 more years. If you think you might move or refinance again within 2 years, the savings may not justify the costs.
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
                  <span className="text-gray-700">Stop foreclosure immediately</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-green-600 font-bold">+</span>
                  <span className="text-gray-700">Lower monthly payment (typically $100-300+)</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-green-600 font-bold">+</span>
                  <span className="text-gray-700">Lower interest rate</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-green-600 font-bold">+</span>
                  <span className="text-gray-700">Shorter loan term option available</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-green-600 font-bold">+</span>
                  <span className="text-gray-700">Clean start - no capitalized arrears</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-green-600 font-bold">+</span>
                  <span className="text-gray-700">Generally easier to qualify for</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-green-600 font-bold">+</span>
                  <span className="text-gray-700">Faster process (5-6 weeks)</span>
                </li>
              </ul>
            </div>

            <div className="bg-red-50 p-6 rounded-lg border-2 border-red-200">
              <h3 className="font-semibold text-lg text-red-900 mb-4">Risks & Challenges</h3>
              <ul className="space-y-3">
                <li className="flex gap-3">
                  <span className="text-red-600 font-bold">-</span>
                  <span className="text-gray-700">Requires positive equity in home</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-red-600 font-bold">-</span>
                  <span className="text-gray-700">Requires good credit (600+)</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-red-600 font-bold">-</span>
                  <span className="text-gray-700">Significant closing costs ($4-10k)</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-red-600 font-bold">-</span>
                  <span className="text-gray-700">Hard inquiry may temporarily lower credit score</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-red-600 font-bold">-</span>
                  <span className="text-gray-700">Appraisal might be lower than expected</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-red-600 font-bold">-</span>
                  <span className="text-gray-700">Resets your loan term (if converting 15-year to 30-year)</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* How to Get Better Terms */}
        <section className="mb-12 bg-gray-50 p-8 rounded-lg">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">How to Qualify for Better Refinancing Terms</h2>
          <div className="space-y-4 text-gray-700">
            <p>
              The better your financial profile, the better rates and terms you will receive. Here is what lenders look for:
            </p>
            <div className="space-y-4 mt-4">
              <div className="bg-white p-4 rounded border-l-4 border-blue-600">
                <h4 className="font-semibold text-gray-900 mb-2">Credit Score (Higher is Better)</h4>
                <div className="space-y-2">
                  <p><span className="font-semibold">760+:</span> Best rates, lowest costs</p>
                  <p><span className="font-semibold">700-759:</span> Good rates</p>
                  <p><span className="font-semibold">660-699:</span> Acceptable rates</p>
                  <p><span className="font-semibold">620-659:</span> Higher rates, may need larger down payment</p>
                  <p><span className="font-semibold">Below 620:</span> Very difficult to qualify</p>
                </div>
              </div>

              <div className="bg-white p-4 rounded border-l-4 border-blue-600">
                <h4 className="font-semibold text-gray-900 mb-2">Debt-to-Income Ratio</h4>
                <p className="mb-2">Lenders want your new mortgage payment to be less than 43% of gross income.</p>
                <p className="text-sm">Example: Income $5,000/month means max mortgage payment of $2,150</p>
              </div>

              <div className="bg-white p-4 rounded border-l-4 border-blue-600">
                <h4 className="font-semibold text-gray-900 mb-2">Loan-to-Value Ratio</h4>
                <p className="mb-2">Lenders prefer you to have at least 20% equity (80% LTV).</p>
                <p className="text-sm">Example: Home worth $300k, loan of $240k = 80% LTV (good)</p>
              </div>

              <div className="bg-white p-4 rounded border-l-4 border-blue-600">
                <h4 className="font-semibold text-gray-900 mb-2">Employment History</h4>
                <p>Lenders want 2+ years at current job. Frequent job changes raise red flags.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Important Section */}
        <section className="mb-12 bg-red-50 border-l-4 border-red-600 p-6 rounded">
          <h2 className="text-2xl font-bold text-red-900 mb-4">Critical: Your Current Loan Status Matters</h2>
          <p className="text-gray-700 mb-4">
            Traditional refinancing is much harder (sometimes impossible) if you are already behind on payments or in foreclosure.
          </p>
          <div className="space-y-3 text-gray-700">
            <div className="bg-white p-4 rounded">
              <p className="font-semibold mb-2">If you are current on payments:</p>
              <p>You can refinance immediately. No restrictions.</p>
            </div>
            <div className="bg-white p-4 rounded">
              <p className="font-semibold mb-2">If you are 30-60 days behind:</p>
              <p>You may still refinance, but expect higher rates. Bring the account current with refinance proceeds before lender approves.</p>
            </div>
            <div className="bg-white p-4 rounded">
              <p className="font-semibold mb-2">If you are 60-90 days behind:</p>
              <p>Refinancing becomes very difficult. Some lenders will not lend. You likely need to contact your lender about loan modification or forbearance first.</p>
            </div>
            <div className="bg-white p-4 rounded">
              <p className="font-semibold mb-2">If you are 90+ days behind or in foreclosure:</p>
              <p>Traditional refinancing is not an option. You must address the delinquency first through loan modification or other means.</p>
            </div>
          </div>
        </section>

        {/* Next Steps */}
        <section className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-lg mb-8">
          <h2 className="text-2xl font-bold text-blue-900 mb-4">Your Next Steps</h2>
          <div className="space-y-4 text-gray-700">
            <p className="font-semibold">If refinancing seems like your best option:</p>
            <div className="space-y-3">
              <div className="flex gap-4">
                <span className="text-blue-600 font-bold text-lg">1.</span>
                <span>Get your free credit report and check your score at AnnualCreditReport.com</span>
              </div>
              <div className="flex gap-4">
                <span className="text-blue-600 font-bold text-lg">2.</span>
                <span>Get a free online home value estimate (Zillow, Redfin, or Trulia)</span>
              </div>
              <div className="flex gap-4">
                <span className="text-blue-600 font-bold text-lg">3.</span>
                <span>Compare your home value to your loan balance. You need positive equity.</span>
              </div>
              <div className="flex gap-4">
                <span className="text-blue-600 font-bold text-lg">4.</span>
                <span>Shop rates with at least 3 lenders: banks, credit unions, and mortgage brokers</span>
              </div>
              <div className="flex gap-4">
                <span className="text-blue-600 font-bold text-lg">5.</span>
                <span>Compare Loan Estimates carefully. Do not just compare interest rates - compare total closing costs.</span>
              </div>
            </div>

            <div className="bg-white p-4 rounded border-t-4 border-blue-600 mt-4">
              <p className="text-gray-700 mb-2">
                <strong>Not sure if refinancing is right for you?</strong>
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
            This guide is based on standard refinancing practices used by major US lenders as of 2026. Specific terms, rates, and closing costs vary by lender and market conditions. This information is educational and does not constitute financial advice. For guidance specific to your situation, consult with a mortgage professional or lender directly.
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
