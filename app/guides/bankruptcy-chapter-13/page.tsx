'use client';

import Link from 'next/link';

export default function BankruptcyChapter13Page() {
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
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Chapter 13 Bankruptcy ~ Legal Debt Protection and Restructuring</h1>
          <p className="text-xl text-gray-700">
            A complete guide to Chapter 13 bankruptcy as an option to stop foreclosure, restructure debt, and keep your home. This is a powerful but complex legal option.
          </p>
        </div>

        {/* Quick Summary */}
        <div className="bg-blue-50 border-l-4 border-blue-600 p-6 mb-8 rounded">
          <h3 className="font-semibold text-blue-900 mb-2">What You Need to Know</h3>
          <p className="text-gray-700 mb-3">
            Chapter 13 bankruptcy is a legal filing that reorganizes your debts through a court-supervised repayment plan. Unlike Chapter 7 (which wipes out debts but may result in losing your home), Chapter 13 lets you keep your home while paying back debts over 3-5 years. An automatic stay immediately stops foreclosure.
          </p>
          <p className="text-gray-700">
            This is only appropriate if: you have regular income, want to keep your home, and need legal protection from creditors while you restructure debts.
          </p>
        </div>

        {/* Critical Caveat */}
        <div className="bg-yellow-50 border-l-4 border-yellow-600 p-6 mb-8 rounded">
          <p className="text-gray-700 text-sm">
            <strong>Important Note:</strong> Bankruptcy has serious long-term consequences and complexity. This guide is educational only. Do not file bankruptcy without consulting a bankruptcy attorney. Many attorneys offer free consultations.
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
                  <span>You have regular monthly income (at least $1,500-2,000/month)</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-green-600 font-bold">✓</span>
                  <span>You are behind on mortgage and want to keep your home</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-green-600 font-bold">✓</span>
                  <span>You have significant unsecured debt (credit cards, medical bills, personal loans)</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-green-600 font-bold">✓</span>
                  <span>You are facing multiple creditors and collection actions</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-green-600 font-bold">✓</span>
                  <span>You need immediate legal protection from foreclosure</span>
                </li>
              </ul>
            </div>

            <div className="bg-red-50 p-6 rounded-lg border-l-4 border-red-600">
              <h3 className="font-semibold text-red-900 mb-2">May Not Work If:</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex gap-3">
                  <span className="text-red-600 font-bold">✗</span>
                  <span>You have no regular income or very low income</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-red-600 font-bold">✗</span>
                  <span>Your debt is primarily mortgage-related (not unsecured debt)</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-red-600 font-bold">✗</span>
                  <span>You cannot afford a repayment plan payment</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-red-600 font-bold">✗</span>
                  <span>You already filed bankruptcy within last 8 years</span>
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
              <strong>Jennifer L., Union County</strong> works as a nurse earning $4,000 per month. Her home is worth $320,000 with a $260,000 mortgage. She also carries $35,000 in credit card debt from medical emergencies and her spouse's illness. She is 4 months behind on her mortgage ($5,200 in arrears) and facing foreclosure.
            </p>
            <p>
              Her credit card debt is at 16-21% interest. Creditors are calling daily. She cannot get approved for loan modification or refinancing due to the delinquency. Standard forbearance would only delay the problem.
            </p>
            <p>
              She consulted a bankruptcy attorney and filed Chapter 13. This immediately stopped the foreclosure (automatic stay). Her repayment plan:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-2">
              <li>Month 1: File Chapter 13, automatic stay issued</li>
              <li>Months 1-3: Make modified mortgage payments while plan is set up</li>
              <li>Months 4-60: Pay $650/month to bankruptcy trustee covering mortgage arrears, credit cards, and plan administration</li>
              <li>After 60 months: Remaining eligible debt (credit cards) may be discharged</li>
            </ul>
            <p>
              Jennifer keeps her home. Foreclosure stopped. Creditors are controlled by the court. She has a structured 5-year path to financial stability.
            </p>
          </div>
        </section>

        {/* How Chapter 13 Works */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">How Chapter 13 Works: Step by Step</h2>
          <div className="space-y-6">
            {[
              {
                step: 1,
                title: 'Consult with Bankruptcy Attorney',
                description: 'Find an attorney experienced in Chapter 13. Most offer free consultations. Bring documents showing income, debts, assets, and mortgage status. Attorney explains your options and consequences.',
              },
              {
                step: 2,
                title: 'Complete Credit Counseling',
                description: 'Before filing, federal law requires you to complete credit counseling with an approved agency (usually online, takes 1-2 hours, costs $50-100).',
              },
              {
                step: 3,
                title: 'Prepare and File Bankruptcy Petition',
                description: 'Attorney prepares detailed documents: Schedule A/B (assets), Schedule C (exemptions), Schedule D (secured debts like mortgage), Schedule E (unsecured debts like credit cards), Schedule I (income), Schedule J (expenses). Attorney files with court.',
              },
              {
                step: 4,
                title: 'Automatic Stay Takes Effect',
                description: 'IMMEDIATELY upon filing, foreclosure stops. Creditors must stop collection calls. This is the most powerful immediate benefit. However, you must make mortgage payments during bankruptcy.',
              },
              {
                step: 5,
                title: 'Attend 341 Meeting',
                description: 'Within 21-35 days, you meet with bankruptcy trustee and creditors in a hearing. Trustee and creditors can ask questions about your finances. Many creditors do not attend.',
              },
              {
                step: 6,
                title: 'Propose Repayment Plan',
                description: 'Attorney submits a repayment plan showing how you will pay creditors over 3-5 years (usually 60 months). Plan shows monthly payment you can afford. Average Chapter 13 plan payment is $400-800/month.',
              },
              {
                step: 7,
                title: 'Plan Confirmation Hearing',
                description: 'Court reviews plan. Creditors can object. Judge decides if plan is fair and feasible. Most plans are confirmed.',
              },
              {
                step: 8,
                title: 'Make Plan Payments',
                description: 'For 3-5 years, you make monthly payments to bankruptcy trustee. Trustee distributes payments to creditors according to plan. You keep your home as long as you make payments.',
              },
              {
                step: 9,
                title: 'Plan Completion and Discharge',
                description: 'After completing all plan payments (usually 60 months), remaining eligible debts are discharged. You are released from personal liability for those debts.',
              },
            ].map((item) => (
              <div key={item.step} className="bg-white border-2 border-gray-200 p-6 rounded-lg">
                <div className="flex gap-4 mb-3">
                  <div className="bg-red-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold flex-shrink-0">
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
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Timeline: Filing to Completion</h2>
          <div className="space-y-4">
            <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-600">
              <div className="flex justify-between items-start mb-2">
                <h3 className="font-semibold text-lg text-gray-900">Day 1: Filing and Automatic Stay</h3>
                <span className="bg-green-100 text-green-800 px-3 py-1 rounded text-sm font-semibold">Immediate</span>
              </div>
              <p className="text-gray-700">Bankruptcy filed. Foreclosure stops immediately. Creditors cannot contact you.</p>
            </div>

            <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-600">
              <div className="flex justify-between items-start mb-2">
                <h3 className="font-semibold text-lg text-gray-900">Days 2-21: Preparation for 341 Meeting</h3>
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded text-sm font-semibold">3 weeks</span>
              </div>
              <p className="text-gray-700">Attorney prepares you for meeting. You gather documents. Trustee and creditors review your papers.</p>
            </div>

            <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-600">
              <div className="flex justify-between items-start mb-2">
                <h3 className="font-semibold text-lg text-gray-900">Days 21-35: 341 Meeting (Trustee Hearing)</h3>
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded text-sm font-semibold">1 day hearing</span>
              </div>
              <p className="text-gray-700">You meet with trustee and creditors. Usually short meeting (5-15 minutes).</p>
            </div>

            <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-600">
              <div className="flex justify-between items-start mb-2">
                <h3 className="font-semibold text-lg text-gray-900">Weeks 5-12: Plan Objection Period and Confirmation Hearing</h3>
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded text-sm font-semibold">6-8 weeks</span>
              </div>
              <p className="text-gray-700">Creditors can object to repayment plan. Court holds confirmation hearing. Judge approves plan.</p>
            </div>

            <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-600">
              <div className="flex justify-between items-start mb-2">
                <h3 className="font-semibold text-lg text-gray-900">Month 2-4: Plan Begins</h3>
                <span className="bg-green-100 text-green-800 px-3 py-1 rounded text-sm font-semibold">3-4 months</span>
              </div>
              <p className="text-gray-700">You begin making plan payments to trustee each month.</p>
            </div>

            <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-600">
              <div className="flex justify-between items-start mb-2">
                <h3 className="font-semibold text-lg text-gray-900">Months 5-60: Plan Payments Continue</h3>
                <span className="bg-green-100 text-green-800 px-3 py-1 rounded text-sm font-semibold">3-5 years</span>
              </div>
              <p className="text-gray-700">You make regular payments. Trustee distributes to creditors. You keep your home as long as you pay.</p>
            </div>

            <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-600">
              <div className="flex justify-between items-start mb-2">
                <h3 className="font-semibold text-lg text-gray-900">After Month 60: Discharge</h3>
                <span className="bg-green-100 text-green-800 px-3 py-1 rounded text-sm font-semibold">Plan complete</span>
              </div>
              <p className="text-gray-700">Eligible debts discharged. You are no longer liable for those debts.</p>
            </div>
          </div>

          <div className="mt-6 bg-yellow-50 border-l-4 border-yellow-600 p-6 rounded">
            <p className="text-gray-700">
              <strong>Total Duration:</strong> Filing to completion typically 3-5 years. However, foreclosure stops immediately upon filing.
            </p>
          </div>
        </section>

        {/* What Happens to Your Debts */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">What Happens to Your Debts in Chapter 13</h2>
          <div className="space-y-4">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="font-semibold text-lg text-gray-900 mb-3">Mortgage (Secured Debt)</h3>
              <p className="text-gray-700 mb-2">
                You keep your home and continue paying the mortgage. Chapter 13 helps you catch up on missed payments through the repayment plan. The lender cannot foreclose while you are making plan payments.
              </p>
              <div className="bg-white p-4 rounded text-sm">
                <p><strong>Example:</strong> You are $5,200 behind. Your repayment plan might require $1,200/month to trustee who pays $800 to catch up mortgage arrears and $400 toward other debts.</p>
              </div>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="font-semibold text-lg text-gray-900 mb-3">Credit Cards and Unsecured Debt</h3>
              <p className="text-gray-700 mb-2">
                You pay what you can afford through the plan. Remaining balance may be discharged (forgiven) after plan completion. This is the main benefit.
              </p>
              <div className="bg-white p-4 rounded text-sm">
                <p><strong>Example:</strong> You owe $35,000 in credit cards. Plan requires you to pay $400/month. After 60 months, you paid $24,000. The remaining $11,000 is discharged.</p>
              </div>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="font-semibold text-lg text-gray-900 mb-3">Child Support and Alimony</h3>
              <p className="text-gray-700">
                These are priority debts and must be paid in full through the plan. Cannot be discharged.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="font-semibold text-lg text-gray-900 mb-3">Recent Tax Debt</h3>
              <p className="text-gray-700">
                Income taxes owed may be paid through the plan but typically cannot be discharged.
              </p>
            </div>
          </div>
        </section>

        {/* Benefits and Risks */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Benefits vs. Serious Risks</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-green-50 p-6 rounded-lg border-2 border-green-200">
              <h3 className="font-semibold text-lg text-green-900 mb-4">Benefits</h3>
              <ul className="space-y-3">
                <li className="flex gap-3">
                  <span className="text-green-600 font-bold">+</span>
                  <span className="text-gray-700">Automatic stay stops foreclosure immediately</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-green-600 font-bold">+</span>
                  <span className="text-gray-700">You keep your home</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-green-600 font-bold">+</span>
                  <span className="text-gray-700">Creditors cannot sue you</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-green-600 font-bold">+</span>
                  <span className="text-gray-700">Consolidates multiple debts into one payment</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-green-600 font-bold">+</span>
                  <span className="text-gray-700">Unsecured debt may be discharged after plan</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-green-600 font-bold">+</span>
                  <span className="text-gray-700">Can catch up on mortgage arrears gradually</span>
                </li>
              </ul>
            </div>

            <div className="bg-red-50 p-6 rounded-lg border-2 border-red-200">
              <h3 className="font-semibold text-lg text-red-900 mb-4">Serious Risks & Consequences</h3>
              <ul className="space-y-3">
                <li className="flex gap-3">
                  <span className="text-red-600 font-bold">-</span>
                  <span className="text-gray-700">Bankruptcy stays on credit 7-10 years</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-red-600 font-bold">-</span>
                  <span className="text-gray-700">Severely damages credit score initially</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-red-600 font-bold">-</span>
                  <span className="text-gray-700">You must make payments for 3-5 years</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-red-600 font-bold">-</span>
                  <span className="text-gray-700">If you miss plan payments, foreclosure resumes</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-red-600 font-bold">-</span>
                  <span className="text-gray-700">Attorney fees ($1,000-3,000 typical)</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-red-600 font-bold">-</span>
                  <span className="text-gray-700">Complex legal process with strict rules</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Costs */}
        <section className="mb-12 bg-yellow-50 border-l-4 border-yellow-600 p-8 rounded">
          <h2 className="text-2xl font-bold text-yellow-900 mb-4">Costs Associated with Chapter 13</h2>
          <div className="space-y-4 text-gray-700">
            <div className="bg-white p-4 rounded">
              <p className="font-semibold mb-2">Attorney Fees: $1,000-3,000</p>
              <p className="text-sm">Many attorneys work with payment plans. Some fees are included in the repayment plan.</p>
            </div>
            <div className="bg-white p-4 rounded">
              <p className="font-semibold mb-2">Filing Fees: $310</p>
              <p className="text-sm">Federal court filing fee. Can be included in repayment plan.</p>
            </div>
            <div className="bg-white p-4 rounded">
              <p className="font-semibold mb-2">Credit Counseling: $50-100</p>
              <p className="text-sm">Required before filing. Approved agencies only.</p>
            </div>
            <div className="bg-white p-4 rounded">
              <p className="font-semibold mb-2">Your Monthly Repayment Plan Payment: $300-1,000+</p>
              <p className="text-sm">Varies based on income, debts, and expenses. This is the main cost you pay for 3-5 years.</p>
            </div>
          </div>
        </section>

        {/* Next Steps */}
        <section className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-lg mb-8">
          <h2 className="text-2xl font-bold text-blue-900 mb-4">Your Next Steps</h2>
          <div className="space-y-4 text-gray-700">
            <p className="font-semibold">If Chapter 13 bankruptcy seems like your best option:</p>
            <div className="space-y-3">
              <div className="flex gap-4">
                <span className="text-blue-600 font-bold text-lg">1.</span>
                <span>Consult with a bankruptcy attorney. Most offer free initial consultations. Bring documents showing all income, debts, and assets.</span>
              </div>
              <div className="flex gap-4">
                <span className="text-blue-600 font-bold text-lg">2.</span>
                <span>Discuss your goals: keep the home, reorganize debts, timeline.</span>
              </div>
              <div className="flex gap-4">
                <span className="text-blue-600 font-bold text-lg">3.</span>
                <span>Understand the full consequences and timeline (3-5 year commitment).</span>
              </div>
              <div className="flex gap-4">
                <span className="text-blue-600 font-bold text-lg">4.</span>
                <span>Make sure you can afford the plan payment for the full duration.</span>
              </div>
              <div className="flex gap-4">
                <span className="text-blue-600 font-bold text-lg">5.</span>
                <span>If you proceed, attorney will file petition and you will receive automatic stay stopping foreclosure.</span>
              </div>
            </div>

            <div className="bg-white p-4 rounded border-t-4 border-blue-600 mt-4">
              <p className="text-gray-700 mb-2">
                <strong>Not sure if bankruptcy is right for you?</strong>
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
            This guide is based on federal bankruptcy law and Chapter 13 provisions as of 2026. Bankruptcy law is complex and varies by situation, state, and judge. This information is educational only. This does NOT constitute legal advice. You must consult with a bankruptcy attorney for advice specific to your situation.
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
