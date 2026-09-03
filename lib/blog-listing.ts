// BLOG SERIES: LISTING AS THE EQUITY PLAY (10 posts)
// ---------------------------------------------------------------------------
// Theme: the listed sale during foreclosure — usually the highest-net exit
// for owners with equity and time. BRC (Corcoran Sawyer Smith x Builders
// Resource Center) is a related business: WHEREVER it is named, the
// ownership disclosure appears in the same breath, before any pitch. Most
// posts speak about listing generically; one names BRC and carries the full
// disclosure. Walkthroughs are ILLUSTRATIVE COMPOSITES and say so.
// ---------------------------------------------------------------------------

import type { TopicPost } from './topic-blog';

const PUB = '2026-09-04';

export const LISTING_POSTS: TopicPost[] = [
  {
    slug: 'yes-you-can-list-during-foreclosure',
    title: 'Yes, You Can List Your Home During Foreclosure — Here Is How It Works',
    description:
      'The complaint does not take the keys. How a normal listed sale proceeds alongside a NJ foreclosure case, lis pendens and all, and why buyers barely blink.',
    tldr:
      'A New Jersey homeowner keeps full ownership — and the full right to list and sell — until the sheriff\'s deed is delivered after auction. A pending case adds paperwork, not prohibition: the lis pendens appears in title searches, the payoff includes arrears and fees, and the closing attorney orders a judgment payoff figure instead of an ordinary one. Buyers purchase homes in foreclosure routinely; their lender cares that the debt clears at closing, which it does. The real constraint is time, which the sale-adjournment right helps manage.',
    published: PUB,
    updated: PUB,
    minutes: 6,
    theme: 'listing',
    sections: [
      {
        h: 'What the case changes about a listing (and what it doesn\'t)',
        body: [
          'Unchanged: your right to list with any brokerage, set the price, negotiate, and close. Changed: the title search will show the lis pendens and, later, the judgment — which means your closing attorney or title company orders a payoff that includes arrears, interest, and legal fees, and pays it at the table. The buyer\'s experience is a normal purchase with one extra payoff letter in the file. Homes in this posture close every week in New Jersey.',
        ],
      },
      {
        h: 'The clock is the real negotiation',
        body: [
          'A listed sale needs runway: weeks on market, attorney review, buyer financing (30–45 days for a mortgage buyer), title, closing. Early in the case — before judgment — there is usually ample time. Once a sheriff sale is scheduled, the two statutory adjournments (up to 30 days each, through the sheriff\'s office) become the listing\'s life support, and a financed buyer must fit inside them. That is the honest boundary: list early and the whole market is your buyer pool; list late and cash may be the only pool left.',
        ],
      },
      {
        h: 'A listed sale mid-case, illustrated',
        body: [
          'An illustrative composite: a Somerville homeowner is served with a complaint, answers it, and lists the house the same month at a realistic price. Offer in week five — a financed buyer at 97% of ask. Attorney review, inspection negotiation (she credits instead of repairs), mortgage commitment in week ten. The payoff letter includes fourteen months of arrears and $9,400 in fees; all of it clears from proceeds at closing in week thirteen, the case is dismissed, and she nets six figures. The foreclosure appears in the story exactly twice: a payoff letter and a dismissal.',
        ],
      },
      {
        h: 'When listing is the wrong tool',
        body: [
          'Days before an auction with no adjournments left; a house whose condition bars financing (cash territory); or a payoff above any realistic price (short-sale territory, its own process). Everywhere else, for owners with equity, the listed sale is usually the highest-net exit available — which is exactly why running the listing math belongs at the top of the decision, not the bottom.',
        ],
      },
    ],
    links: [
      { href: '/answers/can-i-sell-my-house-during-foreclosure', label: 'The direct answer, with the law' },
      { href: '/tools/net-proceeds', label: 'List vs. cash vs. auction: the math' },
      { href: '/sheriff-sales', label: 'Adjournments: your county\'s process' },
    ],
  },
  {
    slug: 'listing-vs-cash-offer-real-math',
    title: 'Listing vs. Cash Offer: The Real Math, With All the Costs In',
    description:
      'The honest spreadsheet: commissions, carrying costs, repairs, and months on one side; the speed discount on the other. How to compare like an adult and choose once.',
    tldr:
      'A listed sale usually grosses more; a cash sale usually nets faster. The honest comparison stacks everything: listing carries commission (typically 5–6%), repairs or credits, and months of mortgage interest, taxes, and insurance while you wait — plus foreclosure fees still accruing. Cash carries the speed discount but zero prep, zero commission in most direct deals, and a three-week finish line. Which nets more depends on your equity, your home\'s condition, and your real deadline. Run both columns before believing either side\'s pitch.',
    published: PUB,
    updated: PUB,
    minutes: 6,
    theme: 'listing',
    sections: [
      {
        h: 'The listing column, honestly',
        body: [
          'Start with realistic sale price — not the neighbor\'s brag, the recent comparable. Subtract: commission (commonly 5–6% when buyer\'s and seller\'s sides are paid), seller closing costs, the repair or credit budget a financed buyer\'s inspection will extract, and carrying costs for the whole runway — every month of mortgage interest (still accruing on a defaulted loan, plus fees), taxes, insurance, utilities. On a long listing in a foreclosure, carrying costs are the silent killer of the gross-price advantage.',
        ],
      },
      {
        h: 'The cash column, honestly',
        body: [
          'Start with the best of two or three competing offers — never one. Subtract almost nothing: no commission in a direct sale, no repairs, minimal closing costs, two or three weeks of carrying. The discount from market is real; the deductions are few. The cash column is short, which is its entire argument.',
        ],
      },
      {
        h: 'The comparison, illustrated',
        body: [
          'An illustrative composite: house realistically worth $400,000 listed; best cash offer $340,000. Listing column: $400,000 − $22,000 commission − $10,000 credits/repairs − $14,000 carrying and accruing fees over five months ≈ $354,000. Cash column: $340,000 − $3,000 costs ≈ $337,000. Gap: about $17,000 for five months of showings, uncertainty, and a financed buyer who might fall through — worth it to some sellers, not to a seller whose sale date leaves no room for a busted deal. The math does not answer for you; it makes the price of each answer visible.',
        ],
      },
      {
        h: 'Deciding once',
        body: [
          'Put both columns on one page, add your real deadline from the case timeline, and decide once — serial re-deciding is how listings get pulled at week six and cash offers get accepted in panic at week ten. Our net-proceeds calculator runs the columns free, and the two-minute assessment weighs the timeline side. Whichever column wins, competition inside it (two agents interviewed, three cash offers) is worth more than the column choice itself.',
        ],
      },
    ],
    links: [
      { href: '/tools/net-proceeds', label: 'Run your columns, free' },
      { href: '/blog/always-get-multiple-cash-offers', label: 'Making the cash column honest' },
      { href: '/compare', label: 'All 7 options, one table' },
    ],
  },
  {
    slug: 'pricing-a-home-in-foreclosure',
    title: 'Pricing a Home for Sale During Foreclosure: The Discipline That Saves Equity',
    description:
      'Overprice and the clock eats you; underprice and the auction was hardly worse. How to set a number that sells inside your timeline without donating your equity.',
    tldr:
      'Pricing during foreclosure is pricing against a clock: every month unsold costs carrying costs plus accruing case fees, and an expired listing burns runway you cannot buy back. The discipline: price at the market from day one (recent solds, not aspirations), instrument the first two weeks (showings and offers tell you fast), and pre-commit to a reduction schedule so drift cannot set in. A realistic price early routinely nets more than a fantasy price reduced late — because the fantasy price pays rent to the foreclosure the whole way down.',
    published: PUB,
    updated: PUB,
    minutes: 5,
    theme: 'listing',
    sections: [
      {
        h: 'Why foreclosure pricing is different',
        body: [
          'A normal seller who overprices loses time; a foreclosure seller who overprices loses time that is accruing interest, legal fees, and proximity to a sale date. The market also reads stale listings harshly — sixty days unsold invites lowballs anywhere, and invites them faster when the county record shows a case. The result is asymmetric: the cost of starting too high is far larger than the cost of starting exactly right.',
        ],
      },
      {
        h: 'Setting the number',
        body: [
          'Use sold comparables from the last few months, adjusted for condition honestly — the inspection will price your deferred maintenance even if you do not. Get more than one professional opinion of value (agents will produce comparative analyses when competing for a listing; a valuation costs nothing but candor). Then place the price at the market, not 8% above it "to leave room" — negotiating room is a myth that costs six weeks.',
        ],
      },
      {
        h: 'The first-two-weeks instrument panel, illustrated',
        body: [
          'An illustrative composite: a Cranford homeowner lists at $465,000 against comparables at $450–475k. Week one: eleven showings, two offers near ask — priced right, sold in week three after review. The counterfactual composite, same house at $510,000: four showings, zero offers, a reduction in week six, a lowball in week nine referencing "time on market," closing in month five with $12,000 more carrying and case costs than the priced-right version — for a lower final price. Showings and offers in the first fortnight are the truth; believe them immediately.',
        ],
      },
      {
        h: 'The pre-committed reduction',
        body: [
          'Before listing, write the rule down: "If under X showings or zero offers by day 14, price moves to Y." Deciding in advance beats renegotiating with your own hope every weekend, and it converts the listing from an emotional narrative into a process with checkpoints — which is precisely what a sale on a legal clock needs to be.',
        ],
      },
    ],
    links: [
      { href: '/tools/net-proceeds', label: 'What each price nets you, after everything' },
      { href: '/blog/listing-vs-cash-offer-real-math', label: 'If pricing says the gap is small: the cash column' },
      { href: '/tools/deadlines', label: 'Your real runway, calculated' },
    ],
  },
  {
    slug: 'get-a-free-valuation-first',
    title: 'Before Any Big Decision: Get a Free Valuation First',
    description:
      'Every foreclosure decision — fight, modify, sell, or let go — rests on one number most homeowners only guess at. How to get the real one, free, this week.',
    tldr:
      'Disclosure first: one place to get a free valuation below is Corcoran Sawyer Smith x Builders Resource Center, a brokerage the people behind this guide hold an ownership interest in — we benefit if you eventually list with them, and using them is never required. The point stands on its own: what your home is actually worth is the keystone number of every foreclosure decision, homeowners routinely mis-guess it by tens of thousands in both directions, and professional opinions of value are free — from BRC, from any competing agent, or several at once. Get the number before choosing anything.',
    published: PUB,
    updated: PUB,
    minutes: 5,
    theme: 'listing',
    sections: [
      {
        h: 'Why the valuation comes first',
        body: [
          'Every path prices off the home\'s value. Equity decides whether reinstating with family money is protecting $200,000 or throwing good money after bad. It decides whether a cash offer is a fair speed-discount or a raid. It decides listing versus short sale (above or below the payoff?), and whether Chapter 13\'s costs are buying anything worth the price. Homeowners guessing from an old refinance appraisal or a portal estimate are making five-figure decisions with a number that can be 15% wrong either way.',
        ],
      },
      {
        h: 'What a real opinion of value looks like',
        body: [
          'An agent\'s comparative market analysis: recent sold homes like yours, adjusted for condition and location, producing a realistic range — done free, usually within days, because brokerages compete for future listings this way. Getting two or three from different agents costs nothing and brackets the truth. (A formal appraisal — several hundred dollars — is rarely necessary at the decision stage; save it for when a specific transaction needs it.)',
        ],
      },
      {
        h: 'The number changing the decision, illustrated',
        body: [
          'An illustrative composite: a homeowner assumes her house is worth $310,000 (an old estimate) against a $295,000 payoff — near-zero equity, so she is drifting toward walking away. Two free valuations land at $365,000–$380,000: suddenly $75,000 of equity exists, the sheriff sale becomes the worst possible outcome, and a listed sale becomes the obvious play. Nothing about the house changed. The number did — and with it, the entire plan.',
        ],
      },
      {
        h: 'Where to get one this week',
        body: [
          'BRC (disclosure above — our related business) offers free valuations for homeowners in this exact situation, and so does effectively every active brokerage in your county; asking two or three at once is both allowed and wise. However you source it, do it before the next decision, because every option on the table is priced off this one number.',
        ],
      },
    ],
    links: [
      { href: '/companies/brc-corcoran-sawyer-smith', label: 'BRC — our review, with full disclosure' },
      { href: '/tools/net-proceeds', label: 'Plug the number in: your net, each path' },
      { href: '/quiz', label: 'The 2-minute assessment, valuation included' },
    ],
  },
  {
    slug: 'the-equity-case-for-listing-early',
    title: 'The Equity Case for Listing Early (While the Case Is Still Young)',
    description:
      'Foreclosure fees, interest, and time all eat the same thing: your equity. Why the highest-net exits are the earliest ones, with the arithmetic shown.',
    tldr:
      'Equity in a foreclosure is a melting asset: per-diem interest, late charges, legal fees, and eventually judgment costs all accrue against it, and an auction can consume what remains in one morning. Listing while the case is young — or before any case exists — preserves the most: full market exposure, financed buyers welcome, no auction discount, payoff smallest. The homeowner who lists at the Notice of Intention keeps more than the one who lists at judgment, who keeps more than the one who never lists at all.',
    published: PUB,
    updated: PUB,
    minutes: 5,
    theme: 'listing',
    sections: [
      {
        h: 'The melt, itemized',
        body: [
          'From the first missed payment, the payoff grows: contract interest continues, late charges post monthly, and once attorneys enter, their fees join the balance. After judgment, costs and interest keep running to the sale date. None of these amounts comes from the lender\'s pocket at closing — every dollar comes off the seller\'s side of the table. The melt is slow enough to ignore weekly and fast enough to matter enormously over a year.',
        ],
      },
      {
        h: 'Early versus late, illustrated',
        body: [
          'An illustrative composite, one house, two timelines. House worth $420,000; payoff $300,000 at the Notice of Intention. Timeline A lists immediately: sold in three months, payoff at closing ~$306,000, net equity after costs ≈ $90,000. Timeline B waits, contests without strategy, lists after judgment eighteen months later: same $420,000 house (if the market held), payoff now ~$340,000 with fees, plus a compressed sale window pushing the price to $400,000. Net ≈ $40,000. Same house, same owner, $50,000 apart — the difference entirely purchased by delay.',
        ],
      },
      {
        h: 'What "early" buys besides money',
        body: [
          'Optionality. An early listing can be withdrawn if a modification comes through — listing and loss mitigation are not exclusive, and running both is common sense, not betrayal of either. Early also means financed buyers fit the timeline (the biggest buyer pool, the best prices), inspections can be negotiated calmly, and no adjournment arithmetic hangs over the closing table.',
        ],
      },
      {
        h: 'The emotional honesty part',
        body: [
          'Listing early feels like surrender, which is why so few do it — waiting feels like fighting. But the equity does not experience feelings; it experiences per-diem interest. Deciding to sell is separable from deciding to give up: many early listers are simultaneously pursuing a modification, and the listing is simply the insurance policy that pays if the modification fails. Insurance is cheapest before the fire.',
        ],
      },
    ],
    links: [
      { href: '/answers/what-happens-to-my-equity', label: 'Equity at auction: what actually happens' },
      { href: '/blog/get-a-free-valuation-first', label: 'Step one: the free valuation' },
      { href: '/tools/net-proceeds', label: 'Your melt rate, estimated' },
    ],
  },
  {
    slug: 'preparing-a-distressed-home-for-market',
    title: 'Preparing a Distressed Home for Market Without Spending Money You Don\'t Have',
    description:
      'The zero-and-low-budget listing prep that moves price, the expensive prep that doesn\'t, and how to decide what your listing actually needs.',
    tldr:
      'A homeowner in default should spend almost nothing preparing to list — and mostly does not need to. What moves price per dollar: deep cleaning, decluttering, lawn and entry tidiness, working light bulbs, and honest staging of space (free to cheap, mostly labor). What rarely returns its cost mid-foreclosure: renovations, new kitchens, replacement roofs — buyers discount them anyway and the timeline cannot absorb them. The alternative for a genuinely rough house is not a renovation you cannot fund; it is the as-is cash column.',
    published: PUB,
    updated: PUB,
    minutes: 5,
    theme: 'listing',
    sections: [
      {
        h: 'The free 80 percent',
        body: [
          'Buyers price light, space, and smell before they price granite. The prep that costs labor, not money: every surface cleaned, half the furniture and all the clutter into the garage, every bulb working, curtains open, the entryway swept and planted with a $15 mum. This is not decorating advice; it is photography advice — the listing photos are the showing now, and clean-bright-empty photographs like value.',
        ],
      },
      {
        h: 'The trap of the big fix',
        body: [
          'The $30,000 kitchen returns maybe $20,000 on a good day, takes six weeks the case timeline may not have, and requires $30,000 the default says you do not have. Same logic for roofs, baths, additions: mid-foreclosure renovation is almost always negative-return once carrying costs and risk join the math. Sell the buyer the discount instead: price the roof into the ask, disclose honestly, offer a credit at inspection. Credits close deals without requiring you to fund construction.',
        ],
      },
      {
        h: 'Prep triage, illustrated',
        body: [
          'An illustrative composite: a Dover homeowner has $1,800 and four weekends before listing. Spent: dumpster ($450), paint for the two worst rooms ($200, self-applied), deep clean ($350), landscaping day ($150), remaining budget held for a pre-listing handyman punch list ($400) and staging odds ($250). Skipped: the $9,000 bathroom the contractor pitched. The house photographs clean and bright, lists honestly with a bathroom credit in mind, and draws offers in week two. Total prep: under $2,000 and four Saturdays.',
        ],
      },
      {
        h: 'When prep is the wrong conversation',
        body: [
          'If the house needs systems — roof, heat, structure — no weekend budget fixes the financing problem: mortgage buyers\' lenders balk, and the listing chases a pool that cannot buy. That is not failure; that is the sign the property belongs in the as-is cash column, where condition is priced instead of repaired. The net-proceeds math, run both ways, makes the call unemotional.',
        ],
      },
    ],
    links: [
      { href: '/blog/listing-vs-cash-offer-real-math', label: 'The two columns, compared honestly' },
      { href: '/blog/what-as-is-actually-means', label: 'The as-is alternative, explained' },
      { href: '/tools/net-proceeds', label: 'Which column wins for your house?' },
    ],
  },
  {
    slug: 'choosing-an-agent-when-behind',
    title: 'Choosing an Agent When You Are Behind on the Mortgage',
    description:
      'Not every good agent is good at this. The questions that reveal foreclosure-timeline competence, the disclosure conversation, and the interview most sellers skip.',
    tldr:
      'A listing during foreclosure needs an agent who understands the case clock: payoff letters with per-diem figures, sheriff-sale adjournments, closing dates that cannot slip, and pricing against accruing fees. Interview at least two agents; ask each how many sales they have closed with an active lis pendens, how they would sequence your specific deadline, and what price sells inside your window. Commission is negotiable; timeline competence is not. Disclose the foreclosure to your agent fully — they cannot defend a clock they cannot see.',
    published: PUB,
    updated: PUB,
    minutes: 5,
    theme: 'listing',
    sections: [
      {
        h: 'Why this listing is a specialty',
        body: [
          'An ordinary listing tolerates slippage — an extra month on market, a delayed closing. Yours may not: a financed buyer\'s 45-day mortgage process has to land inside adjournment windows, the payoff grows daily, and a busted contract at week ten can cost more than a lower offer at week two would have. Agents who have run this play know to demand mortgage pre-approvals with dates, build payoff updates into the file, and treat the sheriff\'s calendar as a party to the transaction.',
        ],
      },
      {
        h: 'The interview questions',
        body: [
          'Ask directly: How many closings have you done with an active foreclosure case? Walk me through how you\'d sequence my dates — list date, expected contract, commitment, closing — against a sale date of X. What listing price sells in 21 days here, and what nets most inside 60? How do you screen buyer financing when the timeline cannot absorb a fall-through? Vague answers to date questions are the disqualifier; this is a logistics interview wearing a marketing costume.',
        ],
      },
      {
        h: 'The interview, illustrated',
        body: [
          'An illustrative composite: a Rahway homeowner interviews two agents. Agent A pitches a beautiful brochure and a price 6% above comparables. Agent B asks for the complaint and the latest payoff letter before quoting anything, proposes a price at market with a day-14 reduction rule, and explains she requires financed buyers to show underwriter-ready pre-approvals because "your timeline can\'t fund a maybe." The brochure was nicer. The clock hired Agent B, and the closing beat the adjourned sale date by nineteen days.',
        ],
      },
      {
        h: 'The disclosure both ways',
        body: [
          'Tell the agent everything: case status, dates, payoff, arrears. And expect disclosure back — how commission is structured, what marketing actually happens, and any interest the brokerage has in the outcome. (Our own standard on this site: one brokerage we list, BRC, is a related business we hold an ownership interest in, said plainly wherever it appears. Any brokerage you interview owes you the same plainness about its interests.)',
        ],
      },
    ],
    links: [
      { href: '/blog/yes-you-can-list-during-foreclosure', label: 'How the listed sale works mid-case' },
      { href: '/companies', label: 'Where to get help, disclosures included' },
      { href: '/tools/deadlines', label: 'The dates your agent needs to know' },
    ],
  },
  {
    slug: 'listing-an-underwater-home-short-sale',
    title: 'Listing an Underwater Home: The Short Sale, Demystified',
    description:
      'When the payoff exceeds the price, the listing becomes a three-party negotiation. How short sales actually get approved in NJ, and the waiver worth more than the price.',
    tldr:
      'A short sale is a listed sale where the lender agrees to accept proceeds below the payoff — required when a home is worth less than what is owed. It runs like a normal listing plus a lender approval file: hardship documentation, financials, and the buyer\'s offer, reviewed over weeks to months. The single most important negotiated term is a written deficiency waiver releasing you from the shortfall. Slower than any other sale, still faster and gentler than a completed foreclosure — and the mediation program can help push a stalled one.',
    published: PUB,
    updated: PUB,
    minutes: 6,
    theme: 'listing',
    sections: [
      {
        h: 'The three-party structure',
        body: [
          'Seller, buyer — and the lender, who becomes the real counterparty because it is being asked to absorb a loss. The listing proceeds normally until an offer arrives; then the package goes to the lender: hardship letter, financial statements, the offer, and the agent\'s market data justifying the price. Approval authority may sit with an investor behind the servicer, which is where the weeks go. Patience is a design feature here, not a malfunction.',
        ],
      },
      {
        h: 'What the lender is actually deciding',
        body: [
          'One comparison: does this offer net us more than foreclosing would? A realistic offer with clean paperwork usually does — auctions are expensive and slow for lenders too — which is why properly priced short sales get approved constantly. Lowball offers, incomplete files, and sellers with undisclosed assets are what draw denials. Your agent\'s comp package and your complete, honest financials are the levers you control.',
        ],
      },
      {
        h: 'A short sale, illustrated',
        body: [
          'An illustrative composite: a Willingboro homeowner owes $310,000 on a house realistically worth $265,000 after a divorce halves the household income. Listed at $265,000; offer at $258,000 in week six. The package — hardship letter with dates, bank statements, tax returns, comps — goes up complete. The servicer counters asking $264,000; the buyer meets $261,000; approval letter issues in week seventeen including the deficiency waiver her attorney insisted on in writing. She closes owing nothing further, credit dinged but recovering, no auction on her record.',
        ],
      },
      {
        h: 'The waiver and the helpers',
        body: [
          'Never assume the shortfall is forgiven — get the deficiency waiver in the approval letter, reviewed by an attorney or a HUD counselor (free) before signing. If the review stalls while a sale date approaches, use the machinery: adjournments through the sheriff\'s office, and the mediation program, where short-sale timelines can be put on the record with deadlines attached. Underwater is a math condition, not a moral one, and the system processes it every day.',
        ],
      },
    ],
    links: [
      { href: '/guides/short-sale', label: 'The complete short sale guide' },
      { href: '/answers/do-i-qualify-for-a-short-sale', label: 'Do you qualify? The direct answer' },
      { href: '/professionals', label: 'Free counselors for the package' },
    ],
  },
  {
    slug: 'timeline-of-a-listed-sale-during-foreclosure',
    title: 'The Timeline of a Listed Sale During NJ Foreclosure, Week by Week',
    description:
      'List date to closing table with a case running in the background: what happens each week, where the foreclosure touches the sale, and the checkpoints that keep it on rails.',
    tldr:
      'A well-run listed sale during a New Jersey foreclosure typically runs 10–16 weeks: two weeks of prep and pricing, two to six on market, three days of attorney review, then 30–45 days of buyer financing, title, and closing — during which the payoff letter (arrears and fees included) is ordered and the case is paid off at the table. The foreclosure touches the sale at exactly three points: the lis pendens in title, the payoff figure, and the calendar, which sheriff-sale adjournments protect if a date gets scheduled mid-listing.',
    published: PUB,
    updated: PUB,
    minutes: 6,
    theme: 'listing',
    sections: [
      {
        h: 'Weeks 1–2: Pricing and prep',
        body: [
          'Valuation(s) obtained, price set at market, the free-labor prep done (clean, declutter, photos), and the paperwork gathered: the complaint, the latest servicer statement, and — if far along — the judgment figure. Tell your attorney now, not at contract: closings with payoffs mid-case go smoother when the payoff request goes out early.',
        ],
      },
      {
        h: 'Weeks 3–8: Market and contract',
        body: [
          'Showings, offers, and the discipline of the day-14 checkpoint (showings low? price moves — the case clock does not pause for hope). Offer accepted; New Jersey\'s attorney review runs its three business days; inspection negotiates as credits rather than repairs where possible. A financed buyer\'s pre-approval gets verified hard here — a fall-through in week twelve is the disaster scenario, so screen in week six.',
        ],
      },
      {
        h: 'Weeks 8–14: The financed stretch, illustrated',
        body: [
          'An illustrative composite: buyer\'s lender orders appraisal (week nine), commitment issues (week eleven), title search surfaces the lis pendens exactly as expected, and the closing attorney requests the judgment payoff with per-diem interest. Meanwhile a sheriff sale gets calendared for week thirteen — the homeowner requests the first adjournment, moving it past week seventeen, and the closing lands in week fourteen with three weeks to spare. The payoff clears at the table; dismissal follows. The case and the sale never actually collided; the adjournment kept them in separate lanes.',
        ],
      },
      {
        h: 'The three checkpoints that prevent disasters',
        body: [
          'Checkpoint one, day 14: pricing truth — reduce on schedule if the market says so. Checkpoint two, contract week: financing verification — underwriter-ready pre-approval or a cash backup identified. Checkpoint three, standing: the county sale listing checked weekly, with adjournment paperwork ready the day a date appears. A listed sale mid-foreclosure is not fragile; it is merely intolerant of unwatched calendars.',
        ],
      },
    ],
    links: [
      { href: '/blog/yes-you-can-list-during-foreclosure', label: 'The listed sale, mechanics first' },
      { href: '/tools/deadlines', label: 'Your case dates, calculated' },
      { href: '/sheriff-sales', label: 'Watch the county list; adjourn on time' },
    ],
  },
  {
    slug: 'keep-or-sell-deciding-once',
    title: 'Keep or Sell: How to Make the Decision Once and Stop Re-Deciding',
    description:
      'The most expensive pattern in foreclosure is deciding weekly. A framework for making the keep-or-sell call one time, with numbers, and building the plan that follows.',
    tldr:
      'The keep-or-sell decision reduces to three questions answered honestly: Can documented income support the payment going forward (not hopefully — documentably)? Does the equity math favor defending the house or harvesting it? And does a keep-path tool (reinstatement, modification, Chapter 13) actually fit your facts? Homeowners who answer once — on paper, with a counselor\'s help if wanted — and commit, consistently beat homeowners who re-decide every week while fees accrue. Both answers are respectable; only indecision is expensive.',
    published: PUB,
    updated: PUB,
    minutes: 6,
    theme: 'listing',
    sections: [
      {
        h: 'The three questions',
        body: [
          'One: income. The modified-or-cured payment must fit documented income with room to live — underwriters will run this math, so run it first. Two: equity. Big equity argues for either defending successfully or selling deliberately, never for drifting to auction; thin equity changes which exits make sense. Three: tool fit. Reinstatement needs a lump sum; modification needs stabilized income; Chapter 13 needs enough income for two payments. If no keep-tool fits your facts, keeping is not actually on the menu — naming that early is a kindness to yourself.',
        ],
      },
      {
        h: 'Deciding once, illustrated',
        body: [
          'An illustrative composite: a couple, $28,000 behind after a business closure, new W-2 income 20% below the old. On paper with a counselor: the modified payment fails the income math by $400/month even at best-case terms — question one says no. Equity is $140,000 — question two says protect it deliberately. Decision made once: list now, pursue nothing that burns fees, target closing inside four months. They grieve for a weekend and then execute for a season; the equity that survives becomes the down payment on a house their income actually fits.',
        ],
      },
      {
        h: 'Why re-deciding costs so much',
        body: [
          'Every re-decision cycle has a price: the listing pulled in week five when hope spiked, re-listed in week eleven when it faded (staler, cheaper); the modification application abandoned half-complete; the family loan accepted then returned. Meanwhile the payoff compounds daily and windows close on schedule. The foreclosure process punishes oscillation more than it punishes either committed path — it is a system that charges rent on ambivalence.',
        ],
      },
      {
        h: 'Committing with an escape hatch',
        body: [
          'Deciding once does not mean deciding blind: build one explicit trigger into the plan ("if the servicer approves the modification before we\'re under contract, we take it and withdraw the listing") and otherwise execute without weekly referendums. Write the decision down, tell the people who need to know, and let the free assessment or a counselor pressure-test it before you commit. Then commit.',
        ],
      },
    ],
    links: [
      { href: '/quiz', label: 'Pressure-test your decision in 2 minutes' },
      { href: '/blog/get-a-free-valuation-first', label: 'Question two needs the real number' },
      { href: '/compare', label: 'Every path\'s honest trade-offs, one table' },
    ],
  },
];
