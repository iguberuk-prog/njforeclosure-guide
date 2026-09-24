// BLOG SERIES: EXPOSURE, PART 2 (2 posts)
// ---------------------------------------------------------------------------
// 1. How to read a CivilView sheriff sale listing (field by field).
// 2. NJ foreclosure help programs in 2026: what is open, what ended.
// Every program status below was checked against an official source on
// 2026-09-24 (sources listed in the comment above each post). Where no
// official source confirmed a status, the prose says "check current status"
// and links the official page instead of guessing. Examples are ILLUSTRATIVE
// COMPOSITES and say so. No real names from public listings appear here.
// ---------------------------------------------------------------------------

import type { TopicPost } from './topic-blog';

const PUB = '2026-09-24';

export const EXPOSURE_POSTS_2: TopicPost[] = [
  // SOURCES (checked 2026-09-24):
  // - CivilView county list, search form (Open vs Sold\Cancelled; fields Sheriff #, Sales Date,
  //   Plaintiff, Defendant, Address, City), "last updated" stamp and accuracy disclaimer:
  //   https://salesweb.civilview.com/Sales/SalesSearch?countyId=6 (Cumberland)
  // - Detail-page fields (Sheriff #, Court Case #, Sales Date, Plaintiff, Defendant, Address,
  //   Attorney, Approx. Judgment*, Approx. Upset*, Upset Amount, Good Faith Upset*, Minimum Bid,
  //   Status History) and footnotes ("*Excludes Judgment Interest and Sheriff Fees"; "may be subject
  //   to further orders"): sampled SaleDetails pages for countyId 1, 2, 6, 7, 8, 10, 25, 73.
  // - Status labels seen in Status History (Scheduled, Rescheduled, Adjourned - Defendant/Plaintiff/
  //   Court, Sheriff Adjourned, Consensual/Mutual Adjournment, Bankruptcy Hold, Post Bankruptcy Sale
  //   Date, Cancelled, Settled, Reinstated, Redeemed, Writ Expired, Purchased - Plaintiff, Buy Back):
  //   same sample, open and sold/cancelled lists.
  // - Surplus language (Superior Court Trust Fund; motion under R. 4:64-3 and 4:57-2) and
  //   Community Wealth Preservation Program terms: printed in the CivilView sale notices themselves.
  // - 17 NJ counties on CivilView (Atlantic, Bergen, Burlington, Camden, Cape May, Cumberland, Essex,
  //   Gloucester, Hudson, Hunterdon, Middlesex, Monmouth, Morris, Ocean, Passaic, Salem, Union):
  //   CivilView county menu, matches lib/sheriff-sales.ts (Mercer, Somerset, Sussex, Warren self-publish).
  // - Adjournments: N.J.S.A. 2A:17-36 (as amended 2019): five total, two at lender's request, two at
  //   debtor's request, one by agreement, each up to 30 calendar days; court may order more for cause.
  //   https://law.justia.com/codes/new-jersey/title-2a/section-2a-17-36/
  // - HUD counseling line 800-569-4287: https://www.hud.gov/helping-americans/avoiding-foreclosure
  // - LSNJ hotline 1-888-576-5529: https://www.lsnjlaw.org/legal-topics/housing/home-ownership/foreclosure/pages/foreclosure-mediation-aspx
  {
    slug: 'how-to-read-nj-sheriff-sale-listing-civilview',
    title: 'How to Read Your NJ Sheriff Sale Listing on CivilView',
    description:
      'A field-by-field guide to your CivilView sheriff sale listing: the real sale date, the judgment figure, status history, and adjournments you may have left.',
    tldr:
      'Seventeen New Jersey counties post sheriff sales on CivilView, and your listing there is usually more current than any letter you received. The Sales Date field and the latest line of the Status History show where the sale actually stands, and the approximate judgment figure is a floor, not a payoff, because it generally excludes interest since judgment and sheriff fees. Read it, then confirm the date and your remaining adjournments with the sheriff\'s office.',
    published: PUB,
    updated: PUB,
    minutes: 7,
    theme: 'timing',
    sections: [
      {
        h: 'What CivilView is, and whether your county uses it',
        body: [
          'CivilView (salesweb.civilview.com) is the public listing system that most New Jersey sheriff\'s offices use to post upcoming foreclosure sales. Seventeen counties use it: Atlantic, Bergen, Burlington, Camden, Cape May, Cumberland, Essex, Gloucester, Hudson, Hunterdon, Middlesex, Monmouth, Morris, Ocean, Passaic, Salem and Union. Mercer, Somerset, Sussex and Warren publish their own lists on county websites instead, so if you live there and cannot find yourself on CivilView, that is why. Our sheriff sales page links every county\'s official list directly.',
          'Two things at the top of each county page matter. There is a "last updated" timestamp, and there is a disclaimer that the sheriff\'s office does not warrant the accuracy, completeness or timeliness of the information. Treat the listing as the best public clue you have, then confirm anything important by phone with the sheriff.',
        ],
      },
      {
        h: 'Finding your own listing',
        body: [
          'Pick your county, and you land on a search form. The "Open" button shows upcoming sales; "Sold\\Cancelled" shows finished ones. You can search by sheriff number, sale date, plaintiff, defendant, street address or town. Searching by your last name in the Defendant box is usually the fastest route. If that fails, try just your house number and the main word of your street name, since "Road" and "Rd" do not always match.',
          'Not there? Common reasons: the sale has not been scheduled yet (after final judgment, the writ of execution goes to the sheriff, and scheduling can take a while); your county publishes elsewhere; or the property is listed under a prior or deceased owner\'s name. Check the Sold\\Cancelled view too. If you still cannot find it, call the sheriff\'s office with your court docket number.',
        ],
      },
      {
        h: 'The top of the listing: who, what, where',
        body: [
          'Click "View Details" and you will see a stack of fields. The Sheriff # is the sheriff\'s own file number; write it down and use it on every call. The Court Case # is your Superior Court docket number, which in foreclosure cases generally begins with F. Sales Date is the currently scheduled auction date. Plaintiff is the party holding the judgment, often a trustee with a long name you have never heard of rather than the company you mail payments to. Defendant is you, usually followed by "ET AL," meaning other parties named in the case, such as a spouse, a second-mortgage lender or a tenant.',
          'Attorney shows the plaintiff\'s foreclosure law firm, sometimes with a phone number. Below that is the full text of the published sale notice: the legal description, occupancy status, and a list of things the sale is "subject to," such as unpaid property taxes, prior liens or homeowners association liens. Many notices also print the advertisement dates and the rules for claiming surplus money.',
        ],
      },
      {
        h: 'The dollar figures: judgment, upset, and what they tell you',
        body: [
          'Counties label the money differently. You may see "Approx. Judgment," "Approx. Upset," "Upset Amount," "Good Faith Upset" or "Minimum Bid," and some listings show two of these. Read the footnote. Many say the figure "Excludes Judgment Interest and Sheriff Fees"; others say it may be subject to further court orders for additional sums. Either way, the amount needed to clear the debt on sale day is generally higher than the printed number, and it grows with time. Treat it as a floor.',
          'That floor is still useful. Take a realistic sale price for your home, subtract the judgment figure, interest since judgment, sheriff fees, unpaid taxes, any other liens and normal selling costs, and you have a rough sense of your equity. Our net proceeds calculator walks through the math. If the answer is meaningfully positive, a sale you control before the auction generally keeps more of that equity in your pocket than an auction does.',
          'If the home does sell at auction for more than what is owed, the extra is surplus. The notices on CivilView themselves explain that surplus is deposited into the Superior Court Trust Fund, and a person claiming it files a motion under Court Rules 4:64-3 and 4:57-2. Surplus is not guaranteed: many properties are bought back by the lender for a credit bid, which shows up as "Purchased - Plaintiff."',
        ],
      },
      {
        h: 'Status and status history: the part that tells the real story',
        body: [
          'At the bottom of the detail page is a Status History table: each change in the sale\'s life, with a date. Wording varies by county, but in listings we reviewed across several counties you will generally see: Scheduled or Rescheduled (a sale date is set); Adjourned - Defendant, Adjourned - Plaintiff, Adjourned - Court or Sheriff Adjourned (the date moved, and the label says who asked); Consensual or Mutual Adjournment (both sides agreed); Bankruptcy Hold or Post Bankruptcy Sale Date (a bankruptcy filing paused the sale, then a new date was set); and endings such as Cancelled, Settled, Reinstated, Redeemed, Writ Expired, Purchased, Purchased - Plaintiff or Buy Back.',
          'This is why the date printed on your notice is often stale. Notices are mailed and published weeks ahead, and sales move constantly. An illustrative composite, not a real case: the notice text inside a listing still says the sale is on the first Wednesday of September, but the Sales Date field reads early October, and the history shows "Scheduled" followed by "Plaintiff Adjourned to" the October date. The body text of the notice is generally not rewritten when the date moves. The Sales Date field and the newest history line are what count, subject to confirmation with the sheriff.',
        ],
      },
      {
        h: 'Your adjournment rights, and how to count them',
        body: [
          'Under N.J.S.A. 2A:17-36, a sheriff may grant five adjournments of a sale: two at the lender\'s request, two at the debtor\'s request, and one when both agree, each for up to 30 calendar days. A court can order more for cause. Your two are requested through the sheriff\'s office, and each county sets its own process and fee, so call ahead.',
          'The history lets you count. Entries labeled Defendant generally mean one of your adjournments was used. Because labels differ from county to county, confirm your remaining number with the sheriff before you rely on it. An adjournment moves the date; it does not end the case. Use the weeks for something concrete: a closing, a complete loss-mitigation application, or a meeting with a lawyer.',
        ],
      },
      {
        h: 'What to do after you read it',
        body: [
          'Screenshot the listing with today\'s date. Call the sheriff\'s office with your Sheriff # to confirm the date and your adjournment count. Enter the date in our sheriff sale countdown so you can see how many working days you have. Run the equity math. Then call a free HUD-approved housing counselor (800-569-4287) or Legal Services of New Jersey (1-888-576-5529) if you may qualify.',
          'One more thing: your listing is public, and investors and scammers read it too. Mail and calls that start arriving after a sale is listed are not official notices. Nobody legitimate charges an upfront fee to save a house. This article is general education, not legal advice for your case.',
        ],
      },
    ],
    links: [
      { href: '/sheriff-sales', label: 'Every NJ county\'s official sale list and sheriff contacts' },
      { href: '/tools/sheriff-sale-countdown', label: 'Sheriff sale countdown: how much time is left' },
      { href: '/tools/net-proceeds', label: 'Judgment vs. market value: run the equity math' },
      { href: '/tools/surplus-funds', label: 'Surplus funds estimator' },
      { href: '/blog/how-many-times-can-sheriff-sale-be-adjourned-nj/', label: 'How many times can a sale be adjourned?' },
      { href: '/blog/sheriff-sale-adjournment-playbook/', label: 'The adjournment playbook' },
    ],
  },

  // SOURCES (checked 2026-09-24):
  // - ERMA / NJ Homeowner Assistance Fund "No Longer Accepting Applications"; questions line
  //   855-647-7700: https://www.nj.gov/dca/hmfa/homeowners/hub/
  // - NJHMFA Foreclosure Mediation Assistance Program (FMAP), permanently expanded Jan 24, 2022 to
  //   pre-foreclosure counseling, no cost, owner-occupied 1-4 units; mediation eligibility (60 days of
  //   service, owner-occupant, all borrowers agree, bankruptcy disqualifies):
  //   https://www.nj.gov/dca/hmfa/homeowners/foreclosure-prevention/
  //   https://www.nj.gov/dca/hmfa/consumers/foreclosure/
  // - NJ Judiciary mediation (free; filing form, checklist, financial worksheet; R. 4:64-1B):
  //   https://www.njcourts.gov/self-help/foreclosure
  // - LSNJ hotline 1-888-576-5529, lsnjlawhotline.org; mediation request within 60 days:
  //   https://www.lsnjlaw.org/legal-topics/housing/home-ownership/foreclosure/pages/foreclosure-mediation-aspx
  // - HUD counseling 800-569-4287 (TTY 800-877-8339), free or very low cost:
  //   https://www.hud.gov/helping-americans/avoiding-foreclosure
  // - FHA options, one permanent home retention option per 24 months (disaster exception),
  //   FHA Resource Center 1-800-225-5342: https://www.hud.gov/helping-americans/fha-loss-mitigation
  // - FHA COVID-19 Recovery Options and FHA-HAMP expired Sept 30, 2025; new rules effective Oct 1, 2025:
  //   HUD Mortgagee Letter 2025-12, https://www.hud.gov/sites/dfiles/OCHCO/documents/2025-12hsgml.pdf
  // - VASP wind-down (no new submissions from May 1, 2025): VA Circular 26-25-2,
  //   https://www.benefits.va.gov/HOMELOANS/documents/circulars/26-25-02.pdf
  // - VA Partial Claim Program launched June 15, 2026; 3-month trial; VA 877-827-3702 option 6:
  //   https://news.va.gov/press-room/va-launches-partial-claim-program-to-help-veterans-avoid-home-foreclosure/
  //   Servicers have until Nov 28, 2026 to implement: https://www.va.gov/housing-assistance/home-loans/trouble-making-payments/
  // - Fannie Mae options (forbearance, repayment plan, payment deferral up to six months, modification)
  //   and loan lookup: https://yourhome.fanniemae.com/get-relief/options-to-stay-in-your-home
  // - Freddie Mac Flex Modification: https://sf.freddiemac.com/working-with-us/servicing/products-programs/freddie-mac-flex-modification
  // - Community Wealth Preservation Program terms (3.5% deposit, 84-month occupancy, 90 business
  //   days): printed in CivilView sale notices (e.g. Cumberland County listings).
  // NOT VERIFIED / LEFT OUT: any currently open county or city mortgage-payment program; the old
  // Judiciary mediation hotline (1-888-989-5277) appears only on an outdated flyer, so it is omitted.
  {
    slug: 'nj-foreclosure-help-programs-2026',
    title: 'NJ Foreclosure Help Programs in 2026: What\'s Open and What Ended',
    description:
      'A 2026 status check on NJ foreclosure help: free counseling, court mediation, legal aid, FHA, VA and Fannie/Freddie options, and the programs that have closed.',
    tldr:
      'Several well-known foreclosure aid programs have closed: New Jersey\'s ERMA fund is no longer accepting applications, VA\'s VASP program stopped taking new cases in 2025, and FHA\'s COVID-era recovery options expired September 30, 2025. The core free help is still here: HUD-approved counseling (800-569-4287), NJHMFA\'s no-cost counseling program, court mediation, and Legal Services of New Jersey (1-888-576-5529). Your loan type decides your workout menu, and VA borrowers have a new partial claim program as of June 2026.',
    published: PUB,
    updated: PUB,
    minutes: 8,
    theme: 'free-help',
    sections: [
      {
        h: 'Why you need a current list',
        body: [
          'Search for foreclosure help in New Jersey and you will still find pages for programs that closed years ago. Some are stale news stories. Some are sales pitches from people who know a program name makes a mailer look official. This page sorts what is open, what ended, and where to check the current status yourself on an official site. We only call a program open or closed when an official source says so. Everything here was checked on September 24, 2026, and programs change, so confirm before you act.',
        ],
      },
      {
        h: 'What has ended',
        body: [
          'ERMA (New Jersey\'s Homeowner Assistance Fund). The Emergency Rescue Mortgage Assistance program, run by the New Jersey Housing and Mortgage Finance Agency (NJHMFA) with federal pandemic money, offered up to $75,000 per household. Its official page now says it is no longer accepting applications. Past applicants with questions can call 855-647-7700. If anyone offers to "get you into ERMA" today, that is a red flag.',
          'VA\'s VASP program. The VA Servicing Purchase program stopped accepting new submissions on May 1, 2025, according to VA Circular 26-25-2. (A new VA option replaced it; see below.)',
          'FHA\'s COVID-19 recovery options. HUD\'s Mortgagee Letter 2025-12 says the COVID-19 Recovery options and FHA-HAMP expired on September 30, 2025, with a revised permanent menu in effect from October 1, 2025.',
        ],
      },
      {
        h: 'Free housing counseling: HUD and NJHMFA',
        body: [
          'HUD-approved housing counselors are still the best first call for most people. HUD describes its counseling as free or very low cost, and counselors help build the application your servicer reviews: budget, hardship letter, income documents. Find one at 800-569-4287 (TTY 800-877-8339). Our guide to a first meeting with a HUD counselor explains what to bring.',
          'NJHMFA also runs the Foreclosure Mediation Assistance Program, which state law permanently expanded on January 24, 2022 to include counseling before a foreclosure is even filed. NJHMFA says the services are at no cost. Pre-foreclosure counseling is generally for owner-occupants of one- to four-unit homes whose mortgage is in default or at risk of default; investors and non-occupant owners are not eligible. Check current details at nj.gov/dca/hmfa/homeowners/foreclosure-prevention.',
        ],
      },
      {
        h: 'Court foreclosure mediation',
        body: [
          'Once a foreclosure complaint is filed, the New Jersey Judiciary\'s Foreclosure Mediation Program offers a free, court-supervised meeting with your lender. The request is generally made within 60 days of being served, using the court\'s mediation form, checklist and financial worksheet. According to NJHMFA, you generally must live in the home, all borrowers on the note must agree to take part, and an active bankruptcy disqualifies you. A court can allow late requests in some cases, but do not count on it. Mediation does not pause the case on its own, so keep working on other options while it is scheduled. Our mediation guide covers the steps, and the official forms are at njcourts.gov/self-help/foreclosure.',
        ],
      },
      {
        h: 'Free legal help: Legal Services of New Jersey',
        body: [
          'Legal Services of New Jersey offers free legal help to people who meet its income rules. Call the hotline at 1-888-576-5529 or apply online at lsnjlawhotline.org. If you do not qualify, the county bar association referral services listed by the courts can connect you with a private foreclosure lawyer, and many offer a low-cost first consultation.',
        ],
      },
      {
        h: 'Your loan type decides your workout menu',
        body: [
          'FHA loans. HUD lists these options: repayment plans, forbearance, a standalone partial claim (past-due amounts moved into an interest-free second lien paid when you sell or refinance), a loan modification, a modification combined with a partial claim, and a payment supplement that lowers payments for three years. Exits include a pre-foreclosure sale and a deed in lieu. Generally you can receive only one permanent home retention option in any 24 months, unless you were hit by a presidentially declared disaster. FHA Resource Center: 1-800-225-5342. More in our FHA partial claim post.',
          'VA loans. VA launched a new Partial Claim Program on June 15, 2026, authorized by a 2025 law. After a three-month trial payment plan, VA works with your servicer to pay the missed payments, and you repay VA when you sell or pay off the loan. VA says servicers have until November 28, 2026 to put it in place, so ask your servicer directly, and call VA loan technicians at 877-827-3702, option 6, if you get stuck. More in our VA loan post.',
          'Fannie Mae and Freddie Mac loans. Their menus include forbearance, repayment plans, payment deferral (Fannie Mae describes moving up to six missed payments to the end of the loan) and the Flex Modification. Both companies have free online loan lookup tools to see if they own your loan.',
          'Private or portfolio loans follow whatever the owner allows, which is why the first step is always asking your servicer who owns or insures your loan.',
        ],
      },
      {
        h: 'At the sheriff sale: the Community Wealth Preservation Program',
        body: [
          'If a case reaches auction, New Jersey\'s Community Wealth Preservation Program lets certain bidders, including the homeowner, next of kin, tenants, nonprofit community development groups, and buyers who will live there for at least 84 months, bid with a 3.5% deposit and up to 90 business days to pay the balance, as printed in county sale notices. It is a buying option, not a grant, and the rules have real requirements. Our separate guide covers it in depth.',
        ],
      },
      {
        h: 'Local programs, and how to check any program yourself',
        body: [
          'Some counties and cities have run their own homeowner assistance over the years, but we could not confirm any county or city mortgage-payment program that is open today. The quickest way to learn about local money is to ask a HUD-approved counselor who serves your county; they track these.',
          'For any program, check the official site (nj.gov, njcourts.gov, hud.gov, va.gov, or the Fannie Mae or Freddie Mac site) rather than a mailer or ad. Legitimate programs do not charge upfront fees and do not guarantee outcomes. An illustrative composite, not a real case: a homeowner gets a letter naming "the state mortgage rescue fund" and asking for a $1,500 processing fee. The official ERMA page says the program closed, and state counseling is free. That five-minute check saved the fee. This article is general education, not legal advice.',
        ],
      },
    ],
    links: [
      { href: '/professionals', label: 'Every free help source, in one place' },
      { href: '/guides/foreclosure-mediation', label: 'Foreclosure mediation, step by step' },
      { href: '/blog/first-meeting-hud-counselor/', label: 'Your first meeting with a HUD counselor' },
      { href: '/blog/fha-loan-behind-partial-claim-nj/', label: 'FHA borrowers and the partial claim' },
      { href: '/blog/va-loan-foreclosure-help-nj/', label: 'Help for VA loans in a NJ foreclosure' },
      { href: '/blog/investor-rules-fannie-freddie-fha-va-menus/', label: 'Why your loan owner sets the menu' },
      { href: '/blog/nj-community-wealth-preservation-program-buy-back-home/', label: 'Community Wealth Preservation Program, in depth' },
      { href: '/scams', label: 'How to spot a foreclosure rescue scam' },
    ],
  },
];
