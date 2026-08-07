'use client';

import Link from 'next/link';

export default function ShortSalePage() {
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
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Short Sale. Sell Your Home for Less Than You Owe</h1>
          <p className="text-xl text-gray-700">
            A complete guide to selling your home for less than the mortgage amount owed, with lender approval. A short sale stops foreclosure and allows you to sell on your terms.
          </p>
        </div>

        {/* Quick Summary */}
        <div className="bg-blue-50 border-l-4 border-blue-600 p-6 mb-8 rounded">
          <h3 className="font-semibold text-blue-900 mb-2">What You Need to Know</h3>
          <p className="text-gray-700 mb-3">
            A short sale means selling your home for less than what you owe on the mortgage. For example, if you owe $280,000 but the home is worth $240,000, you could short sale for $240,000. Your lender forgives the $40,000 difference.
          </p>
          <p className="text-gray-700">
            Key advantage: Unlike foreclosure, YOU control the timeline and the buyer. The process takes 2-4 months and typically results in better credit protection than foreclosure.
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
                  <span>You owe more than your home is worth (underwater/negative equity)</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-green-600 font-bold">✓</span>
                  <span>You have been unable to keep up with payments</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-green-600 font-bold">✓</span>
                  <span>You want to leave the property but need lender approval</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-green-600 font-bold">✓</span>
                  <span>You have time (process takes 2-4 months)</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-green-600 font-bold">✓</span>
                  <span>You want to control the sale rather than face foreclosure auction</span>
                </li>
              </ul>
            </div>

            <div className="bg-red-50 p-6 rounded-lg border-l-4 border-red-600">
              <h3 className="font-semibold text-red-900 mb-2">May Not Work If:</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex gap-3">
                  <span className="text-red-600 font-bold">✗</span>
                  <span>Your home has positive equity (worth more than owed)</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-red-600 font-bold">✗</span>
                  <span>Lender has already scheduled foreclosure auction</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-red-600 font-bold">✗</span>
                  <span>You need to move immediately (short sales take 2-4 months)</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-red-600 font-bold">✗</span>
                  <span>You want to keep the home</span>
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
              <strong>Michael R., Bergen County</strong> bought his home in 2006 for $380,000 with a mortgage of $330,000. In 2024, the housing market declined and his home appraised at only $270,000. He owed $315,000 on the mortgage. He was underwater by $45,000.
            </p>
            <p>
              He lost his job and fell behind on payments. He realized he could not afford the home anymore and did not want to wait for foreclosure. His loan servicer was uncooperative about modification.
            </p>
            <p>
              He and his real estate agent listed the home for $275,000. They received an offer for $268,000. He submitted a short sale request to his lender along with:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-2">
              <li>The purchase agreement</li>
              <li>His income documentation showing he could not afford the home</li>
              <li>A market analysis showing similar homes selling at $265-275k</li>
            </ul>
            <p>
              After 6 weeks, the lender approved the short sale. The home sold for $268,000. The lender forgave $47,000 of the remaining debt. Michael walked away from the home without foreclosure on his credit.
            </p>
          </div>
        </section>

        {/* How Short Sale Works */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">How Short Sale Works: Step by Step</h2>
          <div className="space-y-6">
            {[
              {
                step: 1,
                title: 'Get Market Analysis and Home Valuation',
                description: 'Work with a real estate agent to determine current market value. Get comparable sales data. Your home value must be less than what you owe for a short sale to make sense.',
              },
              {
                step: 2,
                title: 'Contact Your Lender',
                description: 'Call your lender and explain you want to explore a short sale. Ask for the loss mitigation department and request short sale authorization.',
              },
              {
                step: 3,
                title: 'Submit Financial Documentation',
                description: 'Provide income documentation, tax returns, list of debts, and explanation of hardship. Lenders want to verify you cannot afford the home.',
              },
              {
                step: 4,
                title: 'List the Home for Sale',
                description: 'Work with a real estate agent experienced in short sales. Price aggressively to attract buyers. Price too high and the home will not sell.',
              },
              {
                step: 5,
                title: 'Receive and Present Offers',
                description: 'When you receive an offer, submit it to your lender immediately along with a short sale request. The lender must approve the sale price.',
              },
              {
                step: 6,
                title: 'Lender Short Sale Review (4-8 weeks)',
                description: 'Lender reviews the offer, does their own valuation, and decides whether to approve the short sale price. This is the longest part of the process.',
              },
              {
                step: 7,
                title: 'Clear to Close',
                description: 'Once lender approves, you receive written authorization. Proceed to closing with the buyer.',
              },
              {
                step: 8,
                title: 'Closing and Sale',
                description: 'Close on the home. Proceeds go to: first, buyer closing costs; second, real estate agent commission; third, lender. You typically receive nothing but escape the debt.',
              },
            ].map((item) => (
              <div key={item.step} className="bg-white border-2 border-gray-200 p-6 rounded-lg">
                <div className="flex gap-4 mb-3">
                  <div className="bg-purple-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold flex-shrink-0">
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
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Timeline: 2-4 Months Typical</h2>
          <div className="space-y-4">
            <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-600">
              <div className="flex justify-between items-start mb-2">
                <h3 className="font-semibold text-lg text-gray-900">Weeks 1-2: Setup</h3>
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded text-sm font-semibold">Weeks 1-2</span>
              </div>
              <p className="text-gray-700">Contact lender, get market analysis, list home for sale</p>
            </div>

            <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-600">
              <div className="flex justify-between items-start mb-2">
                <h3 className="font-semibold text-lg text-gray-900">Weeks 3-8: Marketing</h3>
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded text-sm font-semibold">4-6 weeks</span>
              </div>
              <p className="text-gray-700">Show home to buyers, negotiate offers</p>
            </div>

            <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-600">
              <div className="flex justify-between items-start mb-2">
                <h3 className="font-semibold text-lg text-gray-900">Weeks 8-16: Lender Approval</h3>
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded text-sm font-semibold">4-8 weeks</span>
              </div>
              <p className="text-gray-700">Lender reviews offer and approves sale price</p>
            </div>

            <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-600">
              <div className="flex justify-between items-start mb-2">
                <h3 className="font-semibold text-lg text-gray-900">Weeks 17-18: Final Closing</h3>
                <span className="bg-green-100 text-green-800 px-3 py-1 rounded text-sm font-semibold">1-2 weeks</span>
              </div>
              <p className="text-gray-700">Complete loan signing and transfer of property</p>
            </div>
          </div>

          <div className="mt-6 bg-yellow-50 border-l-4 border-yellow-600 p-6 rounded">
            <p className="text-gray-700">
              <strong>Total Time:</strong> 3-5 months from start to completion. Lender approval is the longest step.
            </p>
          </div>
        </section>

        {/* Costs and Outcomes */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">What Happens to Your Debt?</h2>
          <div className="bg-gray-50 p-8 rounded-lg">
            <h3 className="font-semibold text-lg text-gray-900 mb-4">Critical Question: Will You Owe Anything After the Short Sale?</h3>
            <div className="space-y-4 text-gray-700">
              <p>
                In New Jersey, when a lender approves a short sale, they typically release you from the debt. This is called a "full release" or "forgiveness." The $40,000 difference between sale price and mortgage is forgiven.
              </p>

              <div className="bg-white p-4 rounded border-l-4 border-blue-600 mt-4">
                <p className="font-semibold mb-2">Scenario 1: Full Forgiveness (Most Common in NJ)</p>
                <div className="space-y-2 text-sm">
                  <p>Mortgage owed: $315,000</p>
                  <p>Short sale price approved: $268,000</p>
                  <p>Shortfall: $47,000</p>
                  <p className="border-t pt-2"><strong>Result:</strong> Lender forgives $47,000. You owe nothing.</p>
                </div>
              </div>

              <div className="bg-white p-4 rounded border-l-4 border-orange-600 mt-4">
                <p className="font-semibold mb-2">Scenario 2: Deficiency Judgment (Rare in NJ Short Sales)</p>
                <p className="text-sm mb-2">
                  Lender could pursue a deficiency judgment for the $47,000 shortfall. However, New Jersey has anti-deficiency rules in certain circumstances, and lenders often agree to forgiveness in short sales.
                </p>
                <p className="text-sm font-semibold">Action: Always get written confirmation that lender will forgive the debt. Do not close without this in writing.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Lender Challenges */}
        <section className="mb-12 bg-yellow-50 border-l-4 border-yellow-600 p-8 rounded">
          <h2 className="text-2xl font-bold text-yellow-900 mb-4">Why Lenders Often Reject Short Sale Requests</h2>
          <div className="space-y-4 text-gray-700">
            <p>
              Short sales are not automatic. Many lenders reject short sale requests. Here is why:
            </p>
            <div className="space-y-3 mt-4">
              <div className="bg-white p-4 rounded">
                <p className="font-semibold mb-2">Reason 1: You Have Too Much Income</p>
                <p className="text-sm">
                  Lenders believe you should be able to afford payments or pay off the difference. If your income is solid, they may deny short sale and force you to pay or foreclose.
                </p>
              </div>
              <div className="bg-white p-4 rounded">
                <p className="font-semibold mb-2">Reason 2: Second Mortgage Exists</p>
                <p className="text-sm">
                  If you have a second mortgage or home equity line of credit, both must approve the short sale. This complicates negotiations and many short sales fail because second lienholders will not agree.
                </p>
              </div>
              <div className="bg-white p-4 rounded">
                <p className="font-semibold mb-2">Reason 3: Sale Price is Too Low</p>
                <p className="text-sm">
                  Lenders often believe homes are worth more than market offers. If they appraise the home at $280,000 but your buyer offers $268,000, they may reject the deal.
                </p>
              </div>
              <div className="bg-white p-4 rounded">
                <p className="font-semibold mb-2">Reason 4: Lack of Hardship Documentation</p>
                <p className="text-sm">
                  Without clear proof of hardship (job loss, income reduction, medical emergency), lenders may deny short sale and demand full payment.
                </p>
              </div>
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
                  <span className="text-gray-700">Avoids foreclosure</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-green-600 font-bold">+</span>
                  <span className="text-gray-700">Escape the underwater mortgage</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-green-600 font-bold">+</span>
                  <span className="text-gray-700">Controlled timeline (2-4 months)</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-green-600 font-bold">+</span>
                  <span className="text-gray-700">You choose the buyer</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-green-600 font-bold">+</span>
                  <span className="text-gray-700">Better for credit than foreclosure</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-green-600 font-bold">+</span>
                  <span className="text-gray-700">Debt likely forgiven (in NJ)</span>
                </li>
              </ul>
            </div>

            <div className="bg-red-50 p-6 rounded-lg border-2 border-red-200">
              <h3 className="font-semibold text-lg text-red-900 mb-4">Risks & Challenges</h3>
              <ul className="space-y-3">
                <li className="flex gap-3">
                  <span className="text-red-600 font-bold">-</span>
                  <span className="text-gray-700">Lender approval not guaranteed</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-red-600 font-bold">-</span>
                  <span className="text-gray-700">Takes 3-5 months</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-red-600 font-bold">-</span>
                  <span className="text-gray-700">Must maintain home during sale</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-red-600 font-bold">-</span>
                  <span className="text-gray-700">Negative impact on credit (less than foreclosure)</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-red-600 font-bold">-</span>
                  <span className="text-gray-700">Real estate agent commission reduces net proceeds</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-red-600 font-bold">-</span>
                  <span className="text-gray-700">Possible tax implications on forgiven debt</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Tax Implications */}
        <section className="mb-12 bg-blue-50 border-l-4 border-blue-600 p-8 rounded">
          <h2 className="text-2xl font-bold text-blue-900 mb-4">Important Tax Consideration</h2>
          <p className="text-gray-700 mb-4">
            When a lender forgives debt in a short sale, the IRS may consider this forgiven amount as income for tax purposes.
          </p>
          <div className="bg-white p-4 rounded mt-4 mb-4">
            <p className="text-gray-700 mb-2">
              <strong>Example:</strong> Your lender forgives $47,000 in a short sale. The IRS may require you to report this as $47,000 in income for that tax year.
            </p>
            <p className="text-gray-700">
              This could mean owing taxes on $47,000 of income even though you received no cash.
            </p>
          </div>
          <p className="text-gray-700 mb-4">
            However, there is a potential exception: the Mortgage Forgiveness Debt Relief Act provides temporary relief in certain circumstances. Consult with a tax professional before proceeding with a short sale.
          </p>
        </section>

        {/* Next Steps */}
        <section className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-lg mb-8">
          <h2 className="text-2xl font-bold text-blue-900 mb-4">Your Next Steps</h2>
          <div className="space-y-4 text-gray-700">
            <p className="font-semibold">If short sale seems like your best option:</p>
            <div className="space-y-3">
              <div className="flex gap-4">
                <span className="text-blue-600 font-bold text-lg">1.</span>
                <span>Get your home appraised or get a market analysis. Determine if you are underwater (owe more than it is worth).</span>
              </div>
              <div className="flex gap-4">
                <span className="text-blue-600 font-bold text-lg">2.</span>
                <span>Hire a real estate agent experienced in short sales. Not all agents know how to handle these.</span>
              </div>
              <div className="flex gap-4">
                <span className="text-blue-600 font-bold text-lg">3.</span>
                <span>Contact your lender and formally request a short sale approval. Gather financial documentation.</span>
              </div>
              <div className="flex gap-4">
                <span className="text-blue-600 font-bold text-lg">4.</span>
                <span>Price the home competitively. Market research is critical - price too high and you will not attract buyers.</span>
              </div>
              <div className="flex gap-4">
                <span className="text-blue-600 font-bold text-lg">5.</span>
                <span>Once you have an offer, submit it to your lender immediately. Follow up on their review process.</span>
              </div>
              <div className="flex gap-4">
                <span className="text-blue-600 font-bold text-lg">6.</span>
                <span>Consult with a tax professional about potential tax consequences of forgiven debt.</span>
              </div>
            </div>

            <div className="bg-white p-4 rounded border-t-4 border-blue-600 mt-4">
              <p className="text-gray-700 mb-2">
                <strong>Not sure if short sale is right for you?</strong>
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
            This guide is based on New Jersey short sale practices and federal tax considerations as of 2026. Lender policies, tax laws, and market conditions vary. This information is educational and does not constitute legal or tax advice. For guidance specific to your situation, consult with a real estate attorney and tax professional.
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
