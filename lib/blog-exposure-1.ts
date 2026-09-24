// BLOG SERIES: EXPOSURE (part 1, 2 posts)
// ---------------------------------------------------------------------------
// Two explainers on rules homeowners rarely hear about in time: New Jersey's
// Community Wealth Preservation Program at sheriff sales, and the federal
// appeal right after a loan modification denial. Every specific number below
// was checked against the statute or regulation text cited above each post.
// Any example is an ILLUSTRATIVE COMPOSITE and says so in the prose. Legal
// numbers match the rest of the site (two adjournments of up to 30 days each,
// HUD counselors 800-569-4287, LSNJ 1-888-576-5529).
// ---------------------------------------------------------------------------

import type { TopicPost } from './topic-blog';

const PUB = '2026-09-24';

export const EXPOSURE_POSTS_1: TopicPost[] = [
  // SOURCES (post 1):
  // - P.L.2023, c.255 (A5664), approved Jan 12, 2024, amending N.J.S.A. 2A:50-64:
  //   https://pub.njleg.gov/bills/2022/PL23/255_.HTM
  //   (upset price notice at least four weeks before sale, posted on sheriff site,
  //   max 3% increase on sale day; 3.5% deposit, balance within 90 business days;
  //   no interest for 60 business days; right of first refusal for foreclosed
  //   individual owner, next of kin, tenant at the lesser of original or final
  //   starting upset price, exercised before bidding opens; pre-approval from a
  //   DOBI- or federally-regulated institution; hardship showing; tenant 1-year
  //   residency + no rent arrears + 8 hours HUD counseling; 84-month occupancy
  //   for bidders other than owner / next of kin / nonprofit; residential property
  //   = primary residence, not investment, max four units.)
  // - Mercer County Sheriff sale page (program described, notes Aug 28, 2025 ruling):
  //   https://www.mercercounty.org/government/sheriff-/informational/sheriff-s-foreclosure-sale
  // - Atlantic County official news release on the Appellate Division ruling
  //   striking the nonprofit right of second refusal (posted July 2026):
  //   https://www.atlanticcountynj.gov/Home/Components/News/News/2307/
  //   corroborated by https://friedmanvartolo.com/new-jersey-appellate-division-holds-portion-of-community-wealth-preservation-program-unconstitutional/
  {
    slug: 'nj-community-wealth-preservation-program-buy-back-home',
    title: 'Can Your Family Buy Your House Back at the NJ Sheriff Sale?',
    description:
      "NJ's Community Wealth Preservation Program lets some owners, relatives and tenants buy at the opening bid with a 3.5% deposit. How it works and its limits.",
    tldr:
      "Under New Jersey's Community Wealth Preservation Program (signed January 2024), a foreclosed individual owner, next of kin, or qualifying tenant of a primary residence generally has a first right to buy the home at the sheriff sale for the lender's upset price, with a 3.5% deposit and up to 90 business days to pay the rest. You need mortgage pre-approval or funds covering the upset price, which is usually close to the full judgment amount, not just the missed payments. It does not stop the sale; it changes who can buy at it. This is general information, not legal advice.",
    published: PUB,
    updated: PUB,
    minutes: 7,
    theme: 'timing',
    sections: [
      {
        h: 'What changed in January 2024',
        body: [
          "Before 2024, a New Jersey sheriff sale worked the same way for everyone: the lender's attorney set an opening bid, investors bid against each other and against the lender, and the winner paid a 20 percent deposit on the spot, in cash or certified funds. That rule alone shut most families out. Very few households can walk into a sheriff's office with tens of thousands of dollars in certified checks.",
          "The Community Wealth Preservation Program, created by P.L.2023, c.255 and signed on January 12, 2024, changed the rules for residential sheriff sales. It gives certain people a chance to buy the property at the lender's opening price, with a much smaller deposit and time to close a mortgage. The idea is to keep homes in the hands of the families and neighbors who live in them rather than investors.",
        ],
      },
      {
        h: 'Who gets first chance to buy',
        body: [
          "When the foreclosed owner is an individual (not a company), the law gives a right of first refusal to three groups: the foreclosed owner, the owner's next of kin, and a tenant of the property. If one of them has secured financing or assets sufficient to buy, they can purchase the home for the original upset price listed in the sale notice or the final starting upset price on sale day, whichever is less. The right is exercised by paying the deposit before bidding opens on the property. In plain terms, qualifying buyers can step in ahead of the auction rather than having to outbid investors.",
          "For the owner or next of kin, the right generally applies only if the owner went into foreclosure for reasons outside their control. If the lender asks before the sale, you must show one of these: financial hardship, a physical or mental illness that kept you from earning income, divorce or legal separation, the death of the owner or the owner's spouse or child, or predatory loan practices. A tenant can use the right only if the owner and next of kin decide not to, and must show they have lived there at least a year and were not behind on rent when the owner received the foreclosure notice. The statute does not spell out exactly who counts as next of kin, so ask the sheriff's office or a lawyer before relying on a particular relative.",
        ],
      },
      {
        h: 'The money: upset price, 3.5 percent, 90 business days',
        body: [
          "The upset price is the minimum the lender will accept at the sale, and it is generally built from the judgment amount plus interest, costs and fees. The law now requires the lender to give notice of the upset price at least four weeks before the sale, posted on the sheriff's website. The notice is a good-faith estimate, and on sale day the price generally cannot rise more than 3 percent above it, although it can be adjusted if the sale is postponed or the lender has to pay for emergency repairs to protect the property.",
          "A qualifying buyer pays a 3.5 percent deposit instead of 20 percent. No interest accrues on the balance for the first 60 business days after the sale, and the buyer then has 30 more business days, for 90 business days in total, to pay the rest. To buy with a mortgage, you must show pre-approval from a lender regulated by the New Jersey Department of Banking and Insurance or a federal banking agency, for at least the upset price, plus photo ID matching the pre-approval. Tenants who finance must also complete eight hours of homebuyer education with a HUD-approved counseling agency.",
        ],
      },
      {
        h: 'The 84-month rule and which homes qualify',
        body: [
          "The program covers only residential property: a New Jersey home used as a primary residence, with no more than four units, and not bought for investment or business. Tenants and other owner-occupant bidders who use the reduced deposit and finance the purchase must live in the home as their primary residence for at least 84 months, and the deed will say the property cannot be sold during that time. Fines for breaking that rule can reach $100,000 for a first violation, with exceptions for events such as death, disability, divorce, military deployment and certain job changes. The statute exempts the foreclosed owner and next of kin from that particular occupancy penalty, but read your own deed and ask a lawyer before planning any resale.",
        ],
      },
      {
        h: 'The honest limits',
        body: [
          "It does not stop the foreclosure. The sale still happens; the program changes who can buy at it. If you want the case to end differently, the time to work on a modification, reinstatement, or sale is before the auction, and those options generally cost less.",
          "The upset price is usually close to the whole debt. Buying back at the sheriff sale generally means paying off the full judgment plus costs, which is far more than the missed payments that started the case. If you could qualify for a loan that size, it is worth asking a HUD-approved counselor whether a refinance or reinstatement before the sale would work instead.",
          "Financing is the hard part. Getting pre-approved for a mortgage with a foreclosure judgment on your record is difficult, and a relative or tenant with good credit often has a better shot than the owner. If the buyer cannot close within 90 business days, they can lose the deposit and owe accrued interest. If the loan falls through for reasons outside the buyer's control, such as a low appraisal or a lender denial, the deposit is refunded, but accrued interest is still owed. Either way, any later sale of that property generally goes back to the regular 20 percent rules, with no first-refusal right.",
          "The right is tied to the original sale date. It generally applies to the first scheduled sale, carrying over only if that sale is postponed to a new date. Show up late or unprepared and the moment can pass.",
          "Parts of the law have been challenged in court. A Mercer County judge ruled in August 2025, and the Appellate Division agreed in July 2026, that the separate right of nonprofit community development corporations to buy at the upset price was unconstitutional because it cut off competitive bidding and the surplus equity owners and junior lienholders could recover. That ruling did not strike the owner, next of kin and tenant right, but litigation and bills to amend the program are ongoing, so confirm current practice with the sheriff's office before sale day.",
        ],
      },
      {
        h: 'If your family is considering it',
        body: [
          "Start early, ideally weeks before the upset price is posted. Find the sale date and the sheriff's plain-language program information (every sheriff must publish it), gather hardship documents, and have the buyer talk to a lender about pre-approval for roughly the judgment amount. Keep a close eye on the posted upset price and on any postponement. A free HUD-approved counselor (800-569-4287) can walk through whether a buy-back, a pre-sale sale of the house, or another option leaves your family in the best position, and Legal Services of New Jersey (1-888-576-5529) can advise income-qualifying homeowners on the legal side.",
        ],
      },
    ],
    links: [
      { href: '/sheriff-sales', label: 'Find your county sheriff sale listings and upset prices' },
      { href: '/tools/sheriff-sale-countdown', label: 'Count down to your sale date' },
      { href: '/tools/net-proceeds', label: 'Compare: what selling before the sale could net you' },
      { href: '/guides/after-sheriff-sale', label: 'What happens after the sheriff sale' },
    ],
  },

  // SOURCES (post 2):
  // - 12 CFR 1024.41 (Regulation X), eCFR current text (as of 2026-09-01):
  //   https://www.ecfr.gov/current/title-12/chapter-X/part-1024/subpart-C/section-1024.41
  //   (b)(1) complete application definition; (b)(2) 5-business-day acknowledgment
  //   if received 45+ days before sale; (c)(1) evaluate within 30 days if complete
  //   more than 37 days before sale; (d) specific reasons for modification denial;
  //   (e)(2)(iii) acceptance deadline extended during appeal; (g) no motion for
  //   judgment / order of sale / sale if complete more than 37 days before sale;
  //   (h) appeal if complete 90+ days before sale, 14 days to appeal, different
  //   personnel, decision within 30 days, no further appeal; (i) duplicative requests;
  //   (k) protections survive servicing transfers.
  // - 12 CFR 1024.30 scope (principal residence only; small servicers exempt from
  //   1024.41 except (j)):
  //   https://www.ecfr.gov/current/title-12/chapter-X/part-1024/subpart-C/section-1024.30
  // - CFPB complaint portal: https://www.consumerfinance.gov/complaint/
  // - Adjournment, HUD counselor and LSNJ numbers: site standard (lib/questions.ts).
  {
    slug: 'loan-modification-denied-nj-appeal',
    title: 'Loan Modification Denied in NJ: Your Appeal Right and Next Steps',
    description:
      'A denial is not always final. When federal rules give you 14 days to appeal, what the servicer must tell you, and what NJ homeowners can do next.',
    tldr:
      'If your servicer received your complete loan modification application at least 90 days before a scheduled foreclosure sale, federal Regulation X generally gives you the right to appeal a denial within 14 days, reviewed by different staff, with a decision due within 30 days. The denial letter must state the specific reasons. In New Jersey, pair the appeal with a free HUD-approved counselor, court mediation if a complaint has been filed, and the sale adjournments most homeowners can request. This is general information, not legal advice.',
    published: PUB,
    updated: PUB,
    minutes: 7,
    theme: 'free-help',
    sections: [
      {
        h: 'First, read the letter for three things',
        body: [
          "A modification denial feels final. Often it is not. Before you do anything else, find three things in the letter: the specific reason or reasons you were denied, whether it says you have a right to appeal, and the deadline and instructions for making that appeal. Federal servicing rules require the servicer to put the reasons for denying each trial or permanent modification option in the written decision, and to tell you about any appeal right, how long you have, and what the appeal must include.",
          "If the reasons are vague, such as a bare statement that you did not qualify, write down the date you received the letter and ask for the specific reasons in writing. The clock may already be running, so do not wait on the answer to start preparing.",
        ],
      },
      {
        h: 'When the federal appeal right applies',
        body: [
          "The appeal right comes from Regulation X, 12 CFR 1024.41. It generally applies when the servicer received your complete application 90 days or more before a scheduled foreclosure sale, or during the early pre-foreclosure review period before a case could be filed. If you were denied for a modification in that situation, the servicer must let you appeal. You have 14 days after the servicer sends its decision to file the appeal. It must be reviewed by different people than the ones who denied you, and the servicer must give you a written decision within 30 days. The appeal decision itself cannot be appealed again.",
          "If the servicer also offered you something else, such as a repayment plan, filing an appeal extends your deadline to accept that offer until 14 days after the appeal decision. You do not have to choose between appealing and keeping the other offer open.",
          "Some limits apply. These rules generally cover mortgages on your principal residence, and small servicers are exempt from most of them. The servicer generally does not have to repeat the full process if it already reviewed a complete application from you and you have been behind ever since. Your letter should say whether you have an appeal right; if it says you do not and you believe you do, get help quickly.",
        ],
      },
      {
        h: 'What complete means, and why it matters so much',
        body: [
          "Almost every protection in the rule turns on one word. An application is complete when the servicer has received all the information it requires from you to evaluate the options available. If your application arrives 45 days or more before a sale, the servicer must tell you in writing within five business days whether it is complete, and if not, list what is missing and give a reasonable date to send it.",
          "Completeness also controls whether a sale can go forward. If the servicer receives a complete application after the foreclosure was filed but more than 37 days before a sale, it generally may not move for judgment or an order of sale, or hold the sale, until you have been denied and your appeal period has run out or your appeal has been decided, or you reject the options offered, or you fail to perform under an agreement. The companion post on dual tracking walks through those protections in detail. Keep every completeness letter; they are your proof of the dates.",
        ],
      },
      {
        h: 'How to write a useful appeal',
        body: [
          "An appeal works best when it answers the stated reason directly. Common fixable problems include income calculated wrong (overtime, a second job, or a household member's contribution left out), an outdated property value, a wrong household size, or a document the servicer says it never received. Follow the appeal instructions in the letter exactly, keep the letter short, attach proof for each point, and send it in a way you can track. Keep copies of everything and note the date sent.",
          "An illustrative composite, not a real client: a homeowner is denied because the servicer counted only one of two jobs. Within the 14 days, she sends pay stubs and a letter from the second employer, and the appeal reviewer re-runs the numbers. That is the kind of appeal with a real chance. An appeal that only asks the servicer to reconsider, with nothing new, rarely changes the result.",
        ],
      },
      {
        h: 'New Jersey steps to take at the same time',
        body: [
          "Call a free HUD-approved housing counselor at 800-569-4287. Counselors read denial letters every day, can spot a miscalculated income figure, and can help you build the appeal or a new application if your circumstances have changed.",
          "If a foreclosure complaint has been filed, use the court's free foreclosure mediation program. The lender must participate, and a denial that looked final on paper is sometimes revisited at the table. Mediation runs alongside the case rather than pausing it, so keep meeting your court deadlines.",
          "If you are income-qualifying, contact Legal Services of New Jersey at 1-888-576-5529. A lawyer can tell you whether the servicer followed the rules and what to do if it did not.",
          "If the servicer ignored your appeal, missed its deadlines, or never gave reasons, file a complaint with the Consumer Financial Protection Bureau at consumerfinance.gov/complaint. Servicers generally respond, and it creates a record.",
          "If a sale date is already set, New Jersey homeowners are generally entitled to two adjournments of up to 30 days each, requested through the sheriff's office for a small fee. Adjournments can buy time for an appeal decision or a backup plan, but they are limited, so use them deliberately.",
        ],
      },
      {
        h: 'If the answer is still no',
        body: [
          "A final denial narrows your options; it does not end them. Depending on your situation, a forbearance or repayment plan may cover a short-term setback. If keeping the home is not realistic, a short sale or selling the house on the open market before the auction may soften the credit impact and, where there is equity, put money back in your pocket instead of leaving it at the sheriff sale. If your income later changes in a meaningful way, a new application may be worth making. None of these is guaranteed, and each works better with more time, which is why the days right after a denial matter so much. This post is general information, not legal advice; for your specific case, talk to a New Jersey attorney or a free HUD-approved counselor.",
        ],
      },
    ],
    links: [
      { href: '/blog/dual-tracking-what-banks-can-and-cant-do/', label: 'Dual tracking: what the bank can and cannot do while you apply' },
      { href: '/guides/loan-modification', label: 'The loan modification guide, step by step' },
      { href: '/guides/foreclosure-mediation', label: 'Foreclosure mediation: who qualifies and how to apply' },
      { href: '/tools/sheriff-sale-countdown', label: 'Count down to your sale date and adjournment windows' },
    ],
  },
];
