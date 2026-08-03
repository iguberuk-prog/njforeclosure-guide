'use client';

import Link from 'next/link';

export default function CashBuyerPage() {
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
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Sell to a Cash Buyer ~ The Fastest Way to Stop Foreclosure</h1>
          <p className="text-xl text-gray-700">
            A complete guide to selling your home to a cash buyer. This is the fastest option for stopping foreclosure, often in 7-30 days instead of 90+ days with traditional sales.
          </p>
        </div>

        {/* Quick Summary */}
        <div className="bg-blue-50 border-l-4 border-blue-600 p-6 mb-8 rounded">
          <h3 className="font-semibold text-blue-900 mb-2">What You Need to Know</h3>
          <p className="text-gray-700 mb-3">
            A cash buyer is a company or investor who buys homes with cash, no mortgage needed. They can close quickly (7-30 days), handle problem properties (damaged homes, code violations), and work with people in foreclosure.
          </p>
          <p className="text-gray-700">
            Key advantage: Speed. When you are facing foreclosure in weeks, a cash buyer can stop it fast. The trade-off: you may receive less money than a traditional sale because the buyer is taking on speed, risk, and cash limitations.
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
                  <span>You need to sell very quickly (within 30 days)</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-green-600 font-bold">✓</span>
                  <span>You are facing imminent foreclosure</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-green-600 font-bold">✓</span>
                  <span>Your home needs significant repairs or has issues</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-green-600 font-bold">✓</span>
                  <span>You want a clean break from the property</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-green-600 font-bold">✓</span>
                  <span>You need certainty (cash buyers do not back out of deals)</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-green-600 font-bold">✓</span>
                  <span>You want no inspection contingencies or appraisal complications</span>
                </li>
              </ul>
            </div>

            <div className="bg-red-50 p-6 rounded-lg border-l-4 border-red-600">
              <h3 className="font-semibold text-red-900 mb-2">May Not Work If:</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex gap-3">
                  <span className="text-red-600 font-bold">✗</span>
                  <span>You want maximum money for your home</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-red-600 font-bold">✗</span>
                  <span>You have months to sell (traditional sale gets more money)</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-red-600 font-bold">✗</span>
                  <span>You want to negotiate with multiple buyers (cash buyers make one offer)</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-red-600 font-bold">✗</span>
                  <span>You need to cover closing costs yourself</span>
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
              <strong>Maria S., Paterson</strong> is a single mother working two jobs. Her home is worth approximately $180,000, and she still owes $165,000 on the mortgage. She received a notice that her lender has scheduled a foreclosure auction in 60 days.
            </p>
            <p>
              She tried loan modification but was denied due to her income not meeting requirements. She does not qualify for refinancing. She does not have time to list the home, wait for offers, and do a traditional sale in 60 days.
            </p>
            <p>
              She contacted a cash buyer company. Within 3 days, they provided an offer: $162,000 cash. This is less than market value, but:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-2">
              <li>She avoids foreclosure completely</li>
              <li>She receives $162,000 (nearly what she owes)</li>
              <li>The cash buyer pays all closing costs</li>
              <li>Closing occurs in 14 days</li>
              <li>She walks away debt-free, not foreclosed</li>
            </ul>
            <p>
              The alternative was foreclosure, which would appear on her credit for 7 years, cost her the home, damage her creditworthiness, and potentially result in deficiency judgment.
            </p>
          </div>
        </section>

        {/* Understanding Cash Buyers */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Understanding Cash Buyers: What They Are and Why They Exist</h2>
          <div className="bg-gray-50 p-8 rounded-lg">
            <p className="text-gray-700 mb-4">
              Cash buyers are investors or companies who buy residential properties for cash. They are NOT traditional real estate agents. They have different business models:
            </p>
            <div className="space-y-4 mt-6">
              <div className="bg-white p-4 rounded border-l-4 border-blue-600">
                <h3 className="font-semibold text-gray-900 mb-2">Why Cash Buyers Exist</h3>
                <p className="text-gray-700 text-sm">
                  They buy homes at discounts, fix them up, and resell or rent them. They profit from the discount and appreciation. They can buy quickly because they have cash and do not need bank financing.
                </p>
              </div>

              <div className="bg-white p-4 rounded border-l-4 border-blue-600">
                <h3 className="font-semibold text-gray-900 mb-2">Why They Work with Foreclosure Situations</h3>
                <p className="text-gray-700 text-sm">
                  Homeowners in foreclosure need fast sales. Cash buyers fill this need. Both parties benefit: homeowner gets quick relief, cash buyer gets a deal.
                </p>
              </div>

              <div className="bg-white p-4 rounded border-l-4 border-blue-600">
                <h3 className="font-semibold text-gray-900 mb-2">The Trade-off: Speed for Price</h3>
                <p className="text-gray-700 text-sm">
                  Cash buyers typically offer 10-20% less than market value. This discount compensates them for speed, cash outlay, and repair costs. It is fair market for both parties in a distressed situation.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">How Selling to a Cash Buyer Works: Step by Step</h2>
          <div className="space-y-6">
            {[
              {
                step: 1,
                title: 'Find a Cash Buyer',
                description: 'Search online for "cash home buyer" plus your area. Vet multiple companies. Look for: legitimate business address, positive reviews, clear terms. NJOffer is one example of a legitimate NJ-based cash buyer.',
              },
              {
                step: 2,
                title: 'Initial Contact and Property Information',
                description: 'Contact the cash buyer. Provide basic info: address, condition, mortgage balance, timeframe. They will ask questions about urgency and why you are selling.',
              },
              {
                step: 3,
                title: 'Property Inspection',
                description: 'Cash buyer sends an inspector (or investor) to view the home. They assess condition, needed repairs, market value. This typically happens within 2-7 days.',
              },
              {
                step: 4,
                title: 'Receive Initial Offer',
                description: 'Based on inspection, cash buyer makes an initial offer. This is typically a firm offer (not subject to inspection or appraisal). You can negotiate, but cash buyers are limited in how much they can move on price.',
              },
              {
                step: 5,
                title: 'Accept or Decline Offer',
                description: 'You decide: accept the offer or decline. If you accept, you move to contract. This decision point is usually within 3-5 days of initial inspection.',
              },
              {
                step: 6,
                title: 'Sign Purchase Agreement',
                description: 'Sign a contract showing price, closing date, and terms. Review carefully. Make sure the company promises to cover closing costs and pay off your mortgage.',
              },
              {
                step: 7,
                title: 'Title Work and Final Walk-Through',
                description: 'Cash buyer orders title search. Final walk-through confirms home is in promised condition. Cash buyer arranges closing with title company.',
              },
              {
                step: 8,
                title: 'Closing and Payment',
                description: 'Meet at title company or attorney office. Sign final documents. Receive check for your proceeds. Lender is paid off directly from sale proceeds. You walk away debt-free.',
              },
            ].map((item) => (
              <div key={item.step} className="bg-white border-2 border-gray-200 p-6 rounded-lg">
                <div className="flex gap-4 mb-3">
                  <div className="bg-amber-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold flex-shrink-0">
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
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Timeline: 7-30 Days Typical</h2>
          <div className="space-y-4">
            <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-600">
              <div className="flex justify-between items-start mb-2">
                <h3 className="font-semibold text-lg text-gray-900">Days 1-2: Initial Contact</h3>
                <span className="bg-green-100 text-green-800 px-3 py-1 rounded text-sm font-semibold">2 days</span>
              </div>
              <p className="text-gray-700">Call or email cash buyer, provide initial information</p>
            </div>

            <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-600">
              <div className="flex justify-between items-start mb-2">
                <h3 className="font-semibold text-lg text-gray-900">Days 3-7: Inspection and Offer</h3>
                <span className="bg-green-100 text-green-800 px-3 py-1 rounded text-sm font-semibold">4-5 days</span>
              </div>
              <p className="text-gray-700">Property inspected, offer made</p>
            </div>

            <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-600">
              <div className="flex justify-between items-start mb-2">
                <h3 className="font-semibold text-lg text-gray-900">Days 8-10: Acceptance and Contract</h3>
                <span className="bg-green-100 text-green-800 px-3 py-1 rounded text-sm font-semibold">2-3 days</span>
              </div>
              <p className="text-gray-700">You accept offer, sign purchase agreement</p>
            </div>

            <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-600">
              <div className="flex justify-between items-start mb-2">
                <h3 className="font-semibold text-lg text-gray-900">Days 11-25: Title Work</h3>
                <span className="bg-green-100 text-green-800 px-3 py-1 rounded text-sm font-semibold">14 days</span>
              </div>
              <p className="text-gray-700">Title search, lender coordination, closing preparation</p>
            </div>

            <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-600">
              <div className="flex justify-between items-start mb-2">
                <h3 className="font-semibold text-lg text-gray-900">Days 26-30: Closing</h3>
                <span className="bg-green-100 text-green-800 px-3 py-1 rounded text-sm font-semibold">1-5 days</span>
              </div>
              <p className="text-gray-700">Final walk-through, sign documents, receive payment</p>
            </div>
          </div>

          <div className="mt-6 bg-yellow-50 border-l-4 border-yellow-600 p-6 rounded">
            <p className="text-gray-700">
              <strong>Total Time:</strong> 7-30 days depending on title issues and lender speed. Most cash sales close within 14-21 days.
            </p>
            <p className="text-gray-700 mt-2">
              <strong>Compare to traditional sale:</strong> 45-90+ days on average
            </p>
          </div>
        </section>

        {/* What You Receive */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">What You Actually Receive: Real Money Example</h2>
          <div className="bg-gray-50 p-8 rounded-lg">
            <h3 className="font-semibold text-lg text-gray-900 mb-4">Scenario: Maria's Home Sale</h3>
            <div className="space-y-4">
              <div className="bg-white p-4 rounded">
                <p className="text-gray-700 mb-3">
                  <strong>Home Situation:</strong>
                </p>
                <div className="space-y-2 text-gray-700 text-sm">
                  <div className="flex justify-between">
                    <span>Market value</span>
                    <span className="font-semibold">$180,000</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Mortgage balance owed</span>
                    <span className="font-semibold">$165,000</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Equity in home</span>
                    <span className="font-semibold">$15,000</span>
                  </div>
                </div>
              </div>

              <div className="bg-white p-4 rounded">
                <p className="text-gray-700 mb-3">
                  <strong>Cash Buyer Offer:</strong>
                </p>
                <div className="space-y-2 text-gray-700 text-sm">
                  <div className="flex justify-between">
                    <span>Offer price (about 90% of value)</span>
                    <span className="font-semibold">$162,000</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Closing costs covered by buyer</span>
                    <span className="font-semibold">Included</span>
                  </div>
                </div>
              </div>

              <div className="bg-green-50 p-4 rounded border-l-4 border-green-600">
                <p className="text-gray-700 mb-2">
                  <strong>What Maria Receives:</strong>
                </p>
                <div className="space-y-2 text-gray-700 text-sm">
                  <div className="flex justify-between">
                    <span>Sale proceeds</span>
                    <span className="font-semibold">$162,000</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Pay off mortgage</span>
                    <span className="font-semibold">-$165,000</span>
                  </div>
                  <div className="border-t pt-2 flex justify-between font-bold">
                    <span>Net to homeowner (if close)</span>
                    <span className="text-red-600">-$3,000 (negative)</span>
                  </div>
                </div>

                <p className="text-gray-700 text-sm mt-3">
                  <strong>However,</strong> Maria avoids foreclosure (no 7-year credit damage), keeps her financial future intact, and can start rebuilding credit immediately. The $3,000 difference is a small price for avoiding foreclosure.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* How Price is Determined */}
        <section className="mb-12 bg-blue-50 border-l-4 border-blue-600 p-8 rounded">
          <h2 className="text-2xl font-bold text-blue-900 mb-4">How Cash Buyers Price Homes</h2>
          <p className="text-gray-700 mb-4">
            Cash buyers use a formula to make offers. Understanding this helps you know if an offer is fair:
          </p>
          <div className="space-y-3 text-gray-700">
            <div className="bg-white p-4 rounded">
              <p className="font-semibold mb-1">Step 1: Determine After-Repair Value (ARV)</p>
              <p className="text-sm">
                This is what the home would be worth after they repair it. They research comparable sales and multiply by 0.70-0.80 to account for repairs needed and their profit.
              </p>
            </div>
            <div className="bg-white p-4 rounded">
              <p className="font-semibold mb-1">Step 2: Estimate Repair Costs</p>
              <p className="text-sm">
                They estimate what repairs will cost. Damaged homes, code violations, and outdated systems increase repair costs.
              </p>
            </div>
            <div className="bg-white p-4 rounded">
              <p className="font-semibold mb-1">Step 3: Calculate Holding Costs</p>
              <p className="text-sm">
                They factor in interest, taxes, insurance, and utilities while they hold and resell the property (typically 3-6 months).
              </p>
            </div>
            <div className="bg-white p-4 rounded">
              <p className="font-semibold mb-1">Step 4: Make Offer</p>
              <p className="text-sm">
                Offer = ARV - Repair Costs - Holding Costs - Closing Costs - Profit Margin (typically 20-30%)
              </p>
            </div>
          </div>

          <div className="bg-white p-4 rounded mt-4">
            <p className="font-semibold text-gray-900 mb-2">Example Calculation:</p>
            <div className="space-y-1 text-sm text-gray-700">
              <div className="flex justify-between">
                <span>After-Repair Value (what it could sell for)</span>
                <span className="font-semibold">$180,000</span>
              </div>
              <div className="flex justify-between">
                <span>Minus: Repairs needed</span>
                <span className="font-semibold">-$8,000</span>
              </div>
              <div className="flex justify-between">
                <span>Minus: Holding costs (4 months)</span>
                <span className="font-semibold">-$4,000</span>
              </div>
              <div className="flex justify-between">
                <span>Minus: Closing and marketing</span>
                <span className="font-semibold">-$2,000</span>
              </div>
              <div className="flex justify-between">
                <span>Minus: Profit margin (20%)</span>
                <span className="font-semibold">-$28,000</span>
              </div>
              <div className="border-t pt-2 flex justify-between font-bold">
                <span>Cash buyer offer</span>
                <span>$138,000</span>
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
                  <span className="text-gray-700">Fastest option (7-30 days)</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-green-600 font-bold">+</span>
                  <span className="text-gray-700">Stops foreclosure completely</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-green-600 font-bold">+</span>
                  <span className="text-gray-700">No contingencies (buyer does not back out)</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-green-600 font-bold">+</span>
                  <span className="text-gray-700">Buyer covers closing costs</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-green-600 font-bold">+</span>
                  <span className="text-gray-700">As-is purchase (no repairs needed)</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-green-600 font-bold">+</span>
                  <span className="text-gray-700">No agent commission</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-green-600 font-bold">+</span>
                  <span className="text-gray-700">Clean break from property</span>
                </li>
              </ul>
            </div>

            <div className="bg-red-50 p-6 rounded-lg border-2 border-red-200">
              <h3 className="font-semibold text-lg text-red-900 mb-4">Risks & Trade-offs</h3>
              <ul className="space-y-3">
                <li className="flex gap-3">
                  <span className="text-red-600 font-bold">-</span>
                  <span className="text-gray-700">Receive less money (10-25% discount)</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-red-600 font-bold">-</span>
                  <span className="text-gray-700">One offer (limited negotiation)</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-red-600 font-bold">-</span>
                  <span className="text-gray-700">Must vet buyer carefully (some are unethical)</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-red-600 font-bold">-</span>
                  <span className="text-gray-700">Underwater mortgages may not work</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-red-600 font-bold">-</span>
                  <span className="text-gray-700">No time to negotiate terms</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Vetting Cash Buyers */}
        <section className="mb-12 bg-yellow-50 border-l-4 border-yellow-600 p-8 rounded">
          <h2 className="text-2xl font-bold text-yellow-900 mb-4">Critical: How to Vet a Cash Buyer</h2>
          <p className="text-gray-700 mb-4">
            Not all cash buyers are legitimate. Some are predatory. Before signing anything, verify:
          </p>
          <div className="space-y-3 text-gray-700">
            <div className="bg-white p-4 rounded">
              <p className="font-semibold mb-1">1. Legitimate Business Registration</p>
              <p className="text-sm">
                Look up the company on the Secretary of State website. Verify they are a registered business in New Jersey.
              </p>
            </div>
            <div className="bg-white p-4 rounded">
              <p className="font-semibold mb-1">2. Physical Address (Not PO Box)</p>
              <p className="text-sm">
                Legitimate companies have a real office address. Look it up on Google Maps. Visit if possible.
              </p>
            </div>
            <div className="bg-white p-4 rounded">
              <p className="font-semibold mb-1">3. Online Reviews and References</p>
              <p className="text-sm">
                Google, Yelp, BBB: read reviews from previous clients. Be wary of all 5-star reviews or no reviews at all.
              </p>
            </div>
            <div className="bg-white p-4 rounded">
              <p className="font-semibold mb-1">4. Transparent Pricing</p>
              <p className="text-sm">
                Legitimate buyers explain clearly how they arrive at their offer. If they are vague or evasive, walk away.
              </p>
            </div>
            <div className="bg-white p-4 rounded">
              <p className="font-semibold mb-1">5. No Upfront Fees</p>
              <p className="text-sm">
                Red flag: any cash buyer asking for upfront fees (inspection, application, processing). Legitimate buyers pay for everything.
              </p>
            </div>
            <div className="bg-white p-4 rounded">
              <p className="font-semibold mb-1">6. Written Offer with Clear Terms</p>
              <p className="text-sm">
                Legitimate buyers provide written offers showing price, closing date, and who pays closing costs. Verbal offers are not binding.
              </p>
            </div>
            <div className="bg-white p-4 rounded">
              <p className="font-semibold mb-1">7. Attorney Closing</p>
              <p className="text-sm">
                Make sure closing is done with an independent attorney or title company, not just the buyer's representative.
              </p>
            </div>
          </div>
        </section>

        {/* Next Steps */}
        <section className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-lg mb-8">
          <h2 className="text-2xl font-bold text-blue-900 mb-4">Your Next Steps</h2>
          <div className="space-y-4 text-gray-700">
            <p className="font-semibold">If selling to a cash buyer seems like your best option:</p>
            <div className="space-y-3">
              <div className="flex gap-4">
                <span className="text-blue-600 font-bold text-lg">1.</span>
                <span>Determine how much time you have until foreclosure auction. This urgency guides your next decisions.</span>
              </div>
              <div className="flex gap-4">
                <span className="text-blue-600 font-bold text-lg">2.</span>
                <span>Calculate what you owe on your mortgage. A cash buyer must pay off this amount or you must be able to cover the shortfall.</span>
              </div>
              <div className="flex gap-4">
                <span className="text-blue-600 font-bold text-lg">3.</span>
                <span>Search for "cash home buyer New Jersey" or ask for referrals. Vet multiple companies before contacting.</span>
              </div>
              <div className="flex gap-4">
                <span className="text-blue-600 font-bold text-lg">4.</span>
                <span>Contact 2-3 cash buyers. Provide basic information. Get initial feedback on their process.</span>
              </div>
              <div className="flex gap-4">
                <span className="text-blue-600 font-bold text-lg">5.</span>
                <span>Request an inspection and written offer. Do not verbally agree to anything.</span>
              </div>
              <div className="flex gap-4">
                <span className="text-blue-600 font-bold text-lg">6.</span>
                <span>Review the written offer carefully. Verify closing costs are covered and mortgage will be paid off.</span>
              </div>
              <div className="flex gap-4">
                <span className="text-blue-600 font-bold text-lg">7.</span>
                <span>Accept if the offer is fair and timeline works. Reject if you can find a better option.</span>
              </div>
            </div>

            <div className="bg-white p-4 rounded border-t-4 border-blue-600 mt-4">
              <p className="text-gray-700 mb-2">
                <strong>Not sure if selling to a cash buyer is right for you?</strong>
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
            This guide is based on cash home buyer practices common in New Jersey as of 2026. Specific offers, timelines, and terms vary by company and property. This information is educational only. Do your own due diligence before accepting any cash buyer offer. This does not constitute real estate advice. For legal guidance, consult an attorney.
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
