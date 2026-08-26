'use client';

import Link from 'next/link';
import SiteHeader from '../../components/SiteHeader';

export default function LoanModificationPage() {
  return (
    <div className="min-h-full bg-white">
      <SiteHeader />

      {/* Main Content */}
      <article className="max-w-3xl mx-auto px-4 py-12">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Loan Modification. Keep Your Home by Changing Your Mortgage Terms</h1>
          <p className="text-xl text-gray-700">
            A complete guide to modifying your loan to make payments affordable again. Thousands of New Jersey homeowners have used this option to stop foreclosure while keeping their homes.
          </p>
        </div>

        {/* Quick Summary */}
        <div className="bg-blue-50 border-l-4 border-blue-600 p-6 mb-8 rounded">
          <h3 className="font-semibold text-blue-900 mb-2">What You Need to Know</h3>
          <p className="text-gray-700 mb-3">
            Loan modification means asking your lender to change the terms of your mortgage. Instead of losing your home, you negotiate a new deal: lower monthly payments, longer loan term, or reduced interest rate. Your lender approves the change and you keep your house.
          </p>
          <p className="text-gray-700">
            Success rate in NJ: Approximately 35-40% of homeowners who apply are approved. The key is timing and a strong application package.
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
                  <span>You have been employed at your current job for at least 2 years</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-green-600 font-bold">✓</span>
                  <span>Your monthly income is stable or increasing</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-green-600 font-bold">✓</span>
                  <span>You are behind on payments but want to keep the home</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-green-600 font-bold">✓</span>
                  <span>Your financial hardship is temporary or has improved recently</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-green-600 font-bold">✓</span>
                  <span>You own a home you want to stay in</span>
                </li>
              </ul>
            </div>

            <div className="bg-red-50 p-6 rounded-lg border-l-4 border-red-600">
              <h3 className="font-semibold text-red-900 mb-2">May Not Work If:</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex gap-3">
                  <span className="text-red-600 font-bold">✗</span>
                  <span>Your income has decreased significantly with no improvement</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-red-600 font-bold">✗</span>
                  <span>You are self-employed with inconsistent income</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-red-600 font-bold">✗</span>
                  <span>You are already in foreclosure auction</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-red-600 font-bold">✗</span>
                  <span>You owe significantly more than the home is worth and have no equity</span>
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
              <strong>Sarah M., Bergen County</strong> was a dental hygienist making $55,000 per year when her hours were cut to part-time due to office restructuring. Her monthly mortgage payment was $1,400, but her income dropped to $3,200 per month. She fell behind by 4 payments.
            </p>
            <p>
              She contacted her lender and applied for a loan modification. With help from documentation showing her new income and a budget, her lender approved a modification that:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-2">
              <li>Extended her loan term from 25 years remaining to 35 years</li>
              <li>Reduced her monthly payment from $1,400 to $950</li>
              <li>Capitalized the missed payments into the loan balance</li>
            </ul>
            <p>
              Sarah stopped the foreclosure, kept her home, and got a payment she could actually afford. Her credit score took a temporary hit from the missed payments, but 3 years later it had recovered to 680+.
            </p>
          </div>
        </section>

        {/* How It Works - Step by Step */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">The Loan Modification Process: Step by Step</h2>
          <div className="space-y-6">
            {[
              {
                step: 1,
                title: 'Contact Your Lender',
                description: 'Call your lender directly or the loss mitigation department. Say you want to explore loan modification options. Request a Loss Mitigation Application (some call it a Loan Modification Application).',
              },
              {
                step: 2,
                title: 'Gather Financial Documents',
                description: 'Collect 2 months of recent pay stubs, 2 months of bank statements, last 2 years of tax returns, proof of assets, and a detailed list of monthly expenses (utilities, insurance, groceries, childcare, medical costs, etc.).',
              },
              {
                step: 3,
                title: 'Write Your Financial Hardship Letter',
                description: 'Explain in writing what happened: job loss, illness, divorce, or reduced hours. Be specific and honest. Example: "My hours were reduced from 40 to 25 per week in March, reducing my household income by $800/month." Lenders respond to circumstances, not emotion.',
              },
              {
                step: 4,
                title: 'Submit Complete Application',
                description: 'Send all documents together in one package to the loss mitigation department. Include the completed application, financial documents, hardship letter, and a list of what you are including. Keep copies of everything.',
              },
              {
                step: 5,
                title: 'Follow Up and Provide Updates',
                description: 'After submitting, call every 7-10 days to check status. If your lender requests additional documents, provide them immediately. Delays often mean applications get denied by default. Stay on top of this.',
              },
              {
                step: 6,
                title: 'Receive Decision',
                description: 'Your lender will issue a Decision Letter within 30-120 days (varies by lender). This shows whether you were Approved, Denied, or offered a Trial Plan. If approved, read the terms carefully.',
              },
              {
                step: 7,
                title: 'Trial Payment Period (If Approved)',
                description: 'Most approvals come with a Trial Plan: you make the new lower payment for 3-4 months. If you make all trial payments on time, it becomes permanent.',
              },
              {
                step: 8,
                title: 'Permanent Modification Documents',
                description: 'After successful trial period, lender sends permanent modification documents. Sign and return immediately. Keep signed copies with your mortgage documents.',
              },
            ].map((item) => (
              <div key={item.step} className="bg-white border-2 border-gray-200 p-6 rounded-lg">
                <div className="flex gap-4 mb-3">
                  <div className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold flex-shrink-0">
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
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Timeline from Start to Completion</h2>
          <div className="space-y-4">
            <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-600">
              <div className="flex justify-between items-start mb-2">
                <h3 className="font-semibold text-lg text-gray-900">Week 1: Initial Contact</h3>
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded text-sm font-semibold">Days 1-7</span>
              </div>
              <p className="text-gray-700">Call lender, request application, begin gathering documents</p>
            </div>

            <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-600">
              <div className="flex justify-between items-start mb-2">
                <h3 className="font-semibold text-lg text-gray-900">Weeks 2-3: Document Preparation</h3>
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded text-sm font-semibold">Days 8-21</span>
              </div>
              <p className="text-gray-700">Collect all financial documents, write hardship letter, complete application</p>
            </div>

            <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-600">
              <div className="flex justify-between items-start mb-2">
                <h3 className="font-semibold text-lg text-gray-900">Week 4: Submission</h3>
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded text-sm font-semibold">Days 22-30</span>
              </div>
              <p className="text-gray-700">Submit complete package to lender</p>
            </div>

            <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-600">
              <div className="flex justify-between items-start mb-2">
                <h3 className="font-semibold text-lg text-gray-900">Weeks 5-16: Review and Decision</h3>
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded text-sm font-semibold">30-120 days</span>
              </div>
              <p className="text-gray-700">Lender reviews your application. You follow up every 7-10 days. Decision Letter issued.</p>
            </div>

            <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-600">
              <div className="flex justify-between items-start mb-2">
                <h3 className="font-semibold text-lg text-gray-900">Weeks 17-20: Trial Period (If Approved)</h3>
                <span className="bg-green-100 text-green-800 px-3 py-1 rounded text-sm font-semibold">3-4 months</span>
              </div>
              <p className="text-gray-700">Make 3-4 trial payments at new rate. Must be on time to succeed.</p>
            </div>

            <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-600">
              <div className="flex justify-between items-start mb-2">
                <h3 className="font-semibold text-lg text-gray-900">Completion: Permanent Modification</h3>
                <span className="bg-green-100 text-green-800 px-3 py-1 rounded text-sm font-semibold">Month 5+</span>
              </div>
              <p className="text-gray-700">Receive permanent documents. Sign and return. Modification is now permanent.</p>
            </div>
          </div>

          <div className="mt-6 bg-yellow-50 border-l-4 border-yellow-600 p-6 rounded">
            <p className="text-gray-700">
              <strong>Total Time:</strong> 4-6 months from start to permanent modification. During this entire period, the foreclosure process may continue. This is why early action is critical.
            </p>
          </div>
        </section>

        {/* Costs and What You Pay */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Costs and Financial Impact</h2>
          <div className="space-y-6">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="font-semibold text-lg text-gray-900 mb-3">What You Do NOT Pay</h3>
              <p className="text-gray-700 mb-3">
                Federal law prohibits lenders from charging upfront fees for loan modifications. You should not pay anything to apply.
              </p>
              <div className="bg-white p-4 rounded border-l-4 border-green-600">
                <p className="text-green-700 font-semibold">✓ No application fees</p>
                <p className="text-green-700 font-semibold">✓ No processing fees</p>
                <p className="text-green-700 font-semibold">✓ No document preparation fees</p>
              </div>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="font-semibold text-lg text-gray-900 mb-3">What You Might Pay</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex gap-3">
                  <span className="font-bold text-blue-600">1.</span>
                  <span><strong>Trial Payments:</strong> These are at the new modified rate (usually lower than your original payment)</span>
                </li>
                <li className="flex gap-3">
                  <span className="font-bold text-blue-600">2.</span>
                  <span><strong>Legal Review:</strong> Optional. If you hire an attorney, typically $500-2,000 for loan modification assistance</span>
                </li>
                <li className="flex gap-3">
                  <span className="font-bold text-blue-600">3.</span>
                  <span><strong>Capitalized Arrears:</strong> Missed payments are often added to your loan balance instead of paid immediately</span>
                </li>
              </ul>
            </div>

            <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-600">
              <h3 className="font-semibold text-blue-900 mb-3">Real Example of Financial Impact</h3>
              <div className="space-y-2 text-gray-700">
                <p>
                  <strong>Original Situation:</strong> $1,200/month mortgage, 8 missed payments = $9,600 in arrears
                </p>
                <p>
                  <strong>Modification Terms:</strong> 35-year loan, 3% interest
                </p>
                <p>
                  <strong>New Payment:</strong> $850/month (about 29% reduction)
                </p>
                <p>
                  <strong>Missed Payments:</strong> Added to loan balance ($9,600 capitalized)
                </p>
                <p className="border-t pt-2 mt-2">
                  <strong>Net Outcome:</strong> Monthly payment drops $350, foreclosure stops, you keep the house. The tradeoff: you pay the $9,600 over the life of the extended loan rather than all at once.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits and Risks */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Benefits vs. Risks: What to Expect</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-green-50 p-6 rounded-lg border-2 border-green-200">
              <h3 className="font-semibold text-lg text-green-900 mb-4">Benefits</h3>
              <ul className="space-y-3">
                <li className="flex gap-3">
                  <span className="text-green-600 font-bold">+</span>
                  <span className="text-gray-700">Stop foreclosure process immediately</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-green-600 font-bold">+</span>
                  <span className="text-gray-700">Keep your home and your neighborhood</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-green-600 font-bold">+</span>
                  <span className="text-gray-700">Lower monthly payment (often 20-40% reduction)</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-green-600 font-bold">+</span>
                  <span className="text-gray-700">No moving costs or disruption to family</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-green-600 font-bold">+</span>
                  <span className="text-gray-700">Credit begins recovery once modification is permanent</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-green-600 font-bold">+</span>
                  <span className="text-gray-700">No cost to apply (federal law prohibits fees)</span>
                </li>
              </ul>
            </div>

            <div className="bg-red-50 p-6 rounded-lg border-2 border-red-200">
              <h3 className="font-semibold text-lg text-red-900 mb-4">Risks & Challenges</h3>
              <ul className="space-y-3">
                <li className="flex gap-3">
                  <span className="text-red-600 font-bold">-</span>
                  <span className="text-gray-700">Approval is not guaranteed (35-40% approval rate)</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-red-600 font-bold">-</span>
                  <span className="text-gray-700">Can take 4-6 months, during which foreclosure may proceed</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-red-600 font-bold">-</span>
                  <span className="text-gray-700">Missed payments remain on credit report 7 years</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-red-600 font-bold">-</span>
                  <span className="text-gray-700">Loan balance increases (missed payments capitalized)</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-red-600 font-bold">-</span>
                  <span className="text-gray-700">Requires consistent income and timely trial payments</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-red-600 font-bold">-</span>
                  <span className="text-gray-700">Some lenders may deny application without good reason</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Critical Success Factors */}
        <section className="mb-12 bg-gray-50 p-8 rounded-lg">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Critical Success Factors: What Lenders Look For</h2>
          <div className="space-y-4 text-gray-700">
            <p>
              Lenders evaluate your application using specific criteria. Understanding these increases your approval chances:
            </p>
            <div className="grid md:grid-cols-2 gap-4 mt-4">
              <div className="bg-white p-4 rounded border-l-4 border-blue-600">
                <h4 className="font-semibold text-gray-900 mb-2">Income Stability</h4>
                <p>Lenders want evidence your income is stable. Provide: 2 years tax returns, recent pay stubs, employment letter. Self-employed applicants need 2-3 years business tax returns.</p>
              </div>
              <div className="bg-white p-4 rounded border-l-4 border-blue-600">
                <h4 className="font-semibold text-gray-900 mb-2">Debt-to-Income Ratio</h4>
                <p>Your new mortgage payment should typically be 43-50% of gross income. If your income is $4,000/month, your max mortgage payment should be $1,600-2,000.</p>
              </div>
              <div className="bg-white p-4 rounded border-l-4 border-blue-600">
                <h4 className="font-semibold text-gray-900 mb-2">Documented Hardship</h4>
                <p>Your hardship letter must be credible. Lenders understand job loss, medical issues, and divorce. Be specific with dates and amounts.</p>
              </div>
              <div className="bg-white p-4 rounded border-l-4 border-blue-600">
                <h4 className="font-semibold text-gray-900 mb-2">Complete Documentation</h4>
                <p>Submit everything requested the first time. Missing documents delay decisions by weeks. Many applications are denied because people submit incomplete packages.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Common Mistakes */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Common Mistakes That Get Applications Denied</h2>
          <div className="space-y-4">
            {[
              {
                mistake: 'Not Following Up',
                detail: 'Applications without follow-up often get lost or denied by default. Call every 7-10 days to check status and answer questions immediately.',
              },
              {
                mistake: 'Submitting Incomplete Package',
                detail: 'Missing even one document can delay approval by weeks or result in denial. Submit everything requested in the initial package.',
              },
              {
                mistake: 'Late Trial Payments',
                detail: 'If you are approved for a trial plan and miss even one payment, your application may be denied. Set up automatic payments.',
              },
              {
                mistake: 'Inconsistent Financial Information',
                detail: 'If your bank statements show income different from your tax returns, lenders will reject the application. Reconcile your numbers beforehand.',
              },
              {
                mistake: 'Paying Upfront Fees',
                detail: 'Any company charging you upfront to apply for loan modification is running a scam. Federal law prohibits these fees. Apply directly with your lender for free.',
              },
              {
                mistake: 'Not Explaining Your Hardship',
                detail: 'A vague hardship letter will not work. Lenders need to understand specifically what happened: when, how much it cost you, and why you need help.',
              },
            ].map((item, idx) => (
              <div key={idx} className="bg-yellow-50 border-l-4 border-yellow-600 p-6 rounded">
                <h3 className="font-semibold text-yellow-900 mb-2">Mistake {idx + 1}: {item.mistake}</h3>
                <p className="text-gray-700">{item.detail}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Important Note About Foreclosure Process */}
        <section className="mb-12 bg-red-50 border-l-4 border-red-600 p-6 rounded">
          <h2 className="text-2xl font-bold text-red-900 mb-4">Important: Foreclosure Continues During Modification</h2>
          <p className="text-gray-700 mb-4">
            Many homeowners make a critical mistake: they assume that applying for loan modification will automatically pause the foreclosure process. It does not.
          </p>
          <p className="text-gray-700 mb-4">
            While your modification is being reviewed, your lender may still proceed with foreclosure. This means:
          </p>
          <ul className="space-y-2 text-gray-700 ml-4 mb-4">
            <li>• Foreclosure notice may still be issued</li>
            <li>• Auction date may be scheduled</li>
            <li>• You may receive foreclosure notices even while your modification is pending</li>
          </ul>
          <p className="text-gray-700">
            <strong>What to do:</strong> If an auction date is scheduled while your modification is pending, contact your lender's loss mitigation department immediately. Request written confirmation that your modification is pending and ask for a temporary halt to the foreclosure process (called a "forbearance" or "foreclosure hold"). Without this written confirmation, assume the foreclosure will proceed.
          </p>
        </section>

        {/* Next Steps */}
        <section className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-lg mb-8">
          <h2 className="text-2xl font-bold text-blue-900 mb-4">Your Next Steps</h2>
          <div className="space-y-4 text-gray-700">
            <p className="font-semibold">If loan modification seems like your best option:</p>
            <div className="space-y-3">
              <div className="flex gap-4">
                <span className="text-blue-600 font-bold text-lg">1.</span>
                <span>Contact your lender this week. Ask for the loss mitigation department and request a Loan Modification Application.</span>
              </div>
              <div className="flex gap-4">
                <span className="text-blue-600 font-bold text-lg">2.</span>
                <span>Gather all financial documents: 2 months pay stubs, bank statements, tax returns, and a budget of monthly expenses.</span>
              </div>
              <div className="flex gap-4">
                <span className="text-blue-600 font-bold text-lg">3.</span>
                <span>Write a clear, specific hardship letter explaining exactly what happened and why you need the modification.</span>
              </div>
              <div className="flex gap-4">
                <span className="text-blue-600 font-bold text-lg">4.</span>
                <span>Submit all documents together. Keep copies. Do not submit incomplete packages.</span>
              </div>
              <div className="flex gap-4">
                <span className="text-blue-600 font-bold text-lg">5.</span>
                <span>Follow up every 7-10 days. If requested for additional documents, provide them immediately.</span>
              </div>
            </div>

            <div className="bg-white p-4 rounded border-t-4 border-blue-600 mt-4">
              <p className="text-gray-700 mb-2">
                <strong>Not sure if loan modification is your best option?</strong>
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
            This guide is based on current New Jersey foreclosure law and federal mortgage modification requirements. Information is current as of 2026. Laws and lender practices change frequently. This information is educational and does not constitute legal advice. For legal guidance specific to your situation, consult a licensed attorney or contact a HUD-approved housing counselor (free service).
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
