// BLOG SERIES: SELLING TO A VENDOR (10 posts)
// ---------------------------------------------------------------------------
// Theme: the fast-sale option, told honestly — cash offers run below market,
// comparison is the defense, and specific situations (fire damage, tenants,
// estates, high-value homes) have specific buyers. Vendor mentions link to
// their /companies review pages; we are paid by none of them. Walkthroughs
// are ILLUSTRATIVE COMPOSITES and say so.
// ---------------------------------------------------------------------------

import type { TopicPost } from './topic-blog';

const PUB = '2026-09-04';

export const VENDOR_POSTS: TopicPost[] = [
  {
    slug: 'how-a-cash-sale-actually-closes',
    title: 'From Offer to Keys in About Three Weeks: How a NJ Cash Sale Actually Closes',
    description:
      'The mechanics nobody explains: what happens between accepting a cash offer and closing, why it is fast, and where the two real risks hide.',
    tldr:
      'A New Jersey cash sale commonly runs 14–30 days from accepted offer to closing because it removes the slow parts of a normal sale: no mortgage underwriting, no appraisal contingency, no repair negotiations. The sequence is contract, title search, payoff letter, closing. The two real risks are a buyer without actual funds (demand proof) and a contract with re-trade traps (a price that drops after "inspection"). A homeowner in foreclosure keeps the right to sell until the sheriff\'s deed is delivered.',
    published: PUB,
    updated: PUB,
    minutes: 6,
    theme: 'vendor',
    sections: [
      {
        h: 'Why cash is fast',
        body: [
          'A financed purchase waits on an underwriter, an appraiser, and a loan committee; a cash purchase waits on a title search. That is nearly the whole story. Once a contract is signed, the buyer\'s title company searches the record, orders the mortgage payoff letter (in a foreclosure, the full judgment figure with per-diem interest), and schedules closing. Fourteen to thirty days is the normal range — fast enough to fit inside a single sheriff-sale adjournment.',
        ],
      },
      {
        h: 'The sequence, illustrated',
        body: [
          'An illustrative composite: day 1, offer accepted on a Linden two-family, $285,000 as-is. Day 3, attorney review ends (New Jersey\'s three-business-day window applies to these contracts like any other). Day 10, title search finds the foreclosure judgment and an old sewer lien; payoff letters ordered for both. Day 19, closing scheduled. Day 24, closing: the judgment and lien are paid from proceeds, the case is dismissed, and the seller leaves with the balance. The foreclosure ends not with a defense but with a wire transfer.',
        ],
      },
      {
        h: 'The two risks worth respecting',
        body: [
          'Risk one: the buyer without money. Real cash buyers show proof of funds — a bank or account statement, not a letter from a "lender." Ask for it before signing; a genuine buyer expects the question. Risk two: the re-trade. Some operators sign high, then chip the price down during "inspection" when your calendar is weakest. The defenses: a short or waived inspection window in the contract, a meaningful non-refundable deposit, and — above all — a second offer in hand so walking away stays possible.',
        ],
      },
      {
        h: 'Who the established buyers are',
        body: [
          'Our companies page reviews the cash buyers we list — including ClikOffer for tight timelines and NJ Offer for certainty-focused sales — with what each is actually for and the disclosure that we are paid by none of them. Whoever you use, the rule is constant: two or three offers, proof of funds, and a contract your attorney has read.',
        ],
      },
    ],
    links: [
      { href: '/companies', label: 'The cash buyers, reviewed and compared' },
      { href: '/sell-my-house-fast-nj', label: 'The fast-sale guide with the honest math' },
      { href: '/tools/net-proceeds', label: 'What you\'d walk away with — run it' },
    ],
  },
  {
    slug: 'selling-a-fire-damaged-house-nj',
    title: 'Selling a Fire-Damaged House in NJ: The Market That Actually Wants It',
    description:
      'Fire damage kills a conventional sale and barely slows a specialist cash buyer. How the fire-damage market works, insurance interplay included.',
    tldr:
      'A fire-damaged New Jersey house is nearly unsellable conventionally — lenders will not finance it and retail buyers cannot picture it — but it is a normal purchase for specialist cash buyers who price the rehab into their offer and close in weeks, as-is, debris included. Sellers should resolve the insurance claim question first (an open claim and a sale interact; talk to the adjuster and an attorney), get more than one specialist offer, and remember that "as-is" legitimately means no cleanout, no repairs, no apologies.',
    published: PUB,
    updated: PUB,
    minutes: 6,
    theme: 'vendor',
    sections: [
      {
        h: 'Why the normal market says no',
        body: [
          'A conventional buyer needs a mortgage; a mortgage needs an appraisal and habitability; a fire-damaged house fails both. That locks out essentially everyone shopping with financing, which is most of the market. What remains is the specialist segment: buyers whose whole business is purchasing damaged structures, pricing the reconstruction, and either rebuilding or clearing the lot. For them, your worst day is a Tuesday.',
        ],
      },
      {
        h: 'The insurance question comes first',
        body: [
          'Fire sales sit next to insurance claims, and the order of operations matters: the claim belongs to you for the loss you suffered while you owned it, and selling does not automatically transfer or extinguish it — but contracts can address claim proceeds, and mortgage lenders typically have rights in insurance payouts on a defaulted loan. Before signing anything, know your claim\'s status, what the mortgagee clause requires, and have an attorney read how the contract treats proceeds. Five hundred dollars of legal reading protects five figures here.',
        ],
      },
      {
        h: 'A fire sale, illustrated',
        body: [
          'An illustrative composite: a Paterson homeowner, already two payments behind, loses the kitchen and roof to an electrical fire. The insurer pays the structure claim, most of which the servicer applies against the loan per the mortgage. Rebuilding on a defaulted mortgage makes no sense for her; she requests offers from two fire-specialist buyers, takes the higher at $150,000 as-is with debris left in place, and closes in 21 days. The remaining mortgage is paid off, the foreclosure never reaches judgment, and she walks with the difference.',
        ],
      },
      {
        h: 'Getting real offers',
        body: [
          'Fire Home Buyers, reviewed on our companies page, specializes in exactly this stock — their site says an offer within 24 hours — and general cash buyers will also quote damaged property. Get at least two numbers; damage widens the spread between offers, which makes comparison worth more, not less. We are paid by none of the buyers we list.',
        ],
      },
    ],
    links: [
      { href: '/companies/fire-home-buyers', label: 'Fire Home Buyers, our review' },
      { href: '/companies', label: 'Every buyer we list, compared' },
      { href: '/sell-my-house-fast-nj', label: 'The as-is sale, start to finish' },
    ],
  },
  {
    slug: 'selling-a-house-with-tenants-nj',
    title: 'Selling a Tenant-Occupied House in NJ (Without Breaking Any Laws)',
    description:
      'New Jersey tenant protections survive a sale — and a foreclosure. How landlords in default sell occupied property legally, and why cash investors are usually the buyer.',
    tldr:
      'In New Jersey, a sale does not break a lease and neither does a foreclosure: tenants generally stay under the Anti-Eviction Act, and the buyer becomes their landlord. That narrows the realistic buyer pool for occupied property to investors, who buy tenanted buildings routinely and price them on rent and condition. Selling landlords should never pressure tenants out (illegal and liability-creating); provide the lease, rent roll, and security-deposit accounting instead — clean paper raises the price more than an empty unit would.',
    published: PUB,
    updated: PUB,
    minutes: 6,
    theme: 'vendor',
    sections: [
      {
        h: 'The law that shapes the sale',
        body: [
          'New Jersey\'s Anti-Eviction Act permits removal only for enumerated causes — nonpayment, lease violations, and a short list of others. "I sold the building" is not on the list, and neither is "the building was foreclosed." Your tenants\' leases ride through the closing to the new owner. Trying to force tenants out to sell vacant — cutting services, harassment, cash-for-keys presented as an ultimatum — creates liability that will cost more than the vacancy premium ever would.',
        ],
      },
      {
        h: 'Who buys occupied buildings',
        body: [
          'Investors do, all day. A tenanted two-family with paying tenants is an income stream; even a building with a nonpaying tenant has a price, just a lower one that reflects the workout ahead. Retail owner-occupant buyers mostly cannot use an occupied house, which is why occupied sales in default gravitate to cash: investors close fast, take title with tenants in place, and inherit the landlord role at closing.',
        ],
      },
      {
        h: 'An occupied sale, illustrated',
        body: [
          'An illustrative composite: an East Orange landlord five payments behind owns a three-unit with two paying tenants and one vacancy. He gathers the paper an investor prices on — leases, twelve months of rent history, deposit ledger, registration — and requests two investor offers. Both are below what a vacant renovated sale might fetch someday; both are above what the sheriff sale would leave him. He closes in 30 days with tenants undisturbed, the judgment paid, and the deposits properly transferred at closing, which New Jersey law requires.',
        ],
      },
      {
        h: 'Doing right by the tenants',
        body: [
          'Tell tenants the truth early: the building is being sold, their leases continue, their deposits transfer, and the new owner\'s contact will follow at closing. Tenants who understand their rights (our tenants guide is written for exactly this) are calmer showings, cleaner closings, and a smaller legal risk. Their protection and your sale are not in conflict; the buyer is pricing the whole legal reality anyway.',
        ],
      },
    ],
    links: [
      { href: '/tenants', label: 'NJ tenant rights in foreclosure, in full' },
      { href: '/companies', label: 'Investors who buy occupied property' },
      { href: '/tools/net-proceeds', label: 'Price both paths: occupied vs. someday-vacant' },
    ],
  },
  {
    slug: 'what-as-is-actually-means',
    title: '"As-Is" Actually Means As-Is: What You Do and Don\'t Have to Fix',
    description:
      'The two most misunderstood words in distressed real estate. What as-is covers, what it never covers, and why full houses and broken furnaces do not scare real buyers.',
    tldr:
      'In a legitimate as-is cash sale, the buyer purchases the property in its present condition: no repairs, no cleanout, no staging, furniture and debris included if that is what the contract says. What as-is never waives is honesty — New Jersey sellers must still answer disclosure questions truthfully and cannot conceal known defects — and it does not waive the buyer\'s right to walk if a contract contingency allows it. The practical translation: stop pre-cleaning, stop pre-fixing, and spend the energy on comparing offers instead.',
    published: PUB,
    updated: PUB,
    minutes: 5,
    theme: 'vendor',
    sections: [
      {
        h: 'What you are not required to do',
        body: [
          'No repairs — not the roof, not the furnace, not the code violations. No cleanout — as-is buyers routinely take houses with every closet full, and estates in particular sell with decades of contents in place. No staging, no photography prep, no showings parade. The buyer\'s price already contains their estimate of all of it. Sellers who spend $8,000 "getting it ready" for an as-is buyer have usually donated $8,000.',
        ],
      },
      {
        h: 'What as-is never covers',
        body: [
          'Deception. As-is shifts the repair burden, not the truth burden: known material defects still must be answered honestly on disclosure questions, and actively hiding a problem (painting over the leak the week of the walkthrough) creates liability that outlives the closing. It also does not erase contract terms — if the agreement has an inspection contingency, the buyer can still use it. As-is describes the condition being sold, not a suspension of the rules of dealing.',
        ],
      },
      {
        h: 'An as-is sale, illustrated',
        body: [
          'An illustrative composite: a Bloomfield homeowner in default owns a house with a failed furnace, an above-ground oil tank, and a hoarder-scale accumulation from a late parent. A contractor quotes $60,000 to make it retail-ready; she does not have $600. Two as-is offers come in $70,000 apart in their guesses about the rehab — which is exactly why she got two. She takes the higher, discloses the tank and the furnace in writing, hauls away nothing, and closes in four weeks.',
        ],
      },
      {
        h: 'The comparison habit',
        body: [
          'Because as-is pricing is each buyer\'s private rehab math, spreads between offers on rough houses run wide. That makes the second and third offer worth real money — frequently five figures — for an hour of additional effort. One form on this site requests offers from multiple vetted buyers at once; the offers are free and non-binding, and comparing them is the entire strategy.',
        ],
      },
    ],
    links: [
      { href: '/sell-my-house-fast-nj', label: 'The honest fast-sale guide' },
      { href: '/companies', label: 'As-is buyers, reviewed' },
      { href: '/scams', label: 'When "as-is" is a trap: contract red flags' },
    ],
  },
  {
    slug: 'always-get-multiple-cash-offers',
    title: 'The Five-Figure Habit: Why You Always Get Two or Three Cash Offers',
    description:
      'One offer is a number; two offers are a market. The mechanics of comparison — why spreads are wide, how to run a quiet auction, and what it does to buyer behavior.',
    tldr:
      'Cash offers on the same New Jersey house routinely land tens of thousands of dollars apart, because each buyer\'s offer embeds private guesses about rehab cost and resale value. A homeowner who requests two or three offers — and lets each buyer know comparison is happening — converts that spread into leverage: prices firm up, re-trade games stop working, and walking away stays possible. The offers are free and non-binding; the only cost of comparison is a little time, and the payoff is frequently five figures.',
    published: PUB,
    updated: PUB,
    minutes: 5,
    theme: 'vendor',
    sections: [
      {
        h: 'Why the spread exists',
        body: [
          'A cash offer is the output of three private variables: what the buyer thinks repairs cost, what they think the house resells or rents for, and how much margin their model demands. Different buyers, different rehab crews, different exit strategies — different numbers. On clean houses the spread narrows; on rough ones it yawns. None of this is visible from a single offer, which is why a single offer tells you almost nothing about your house\'s value to this market.',
        ],
      },
      {
        h: 'The quiet auction, illustrated',
        body: [
          'An illustrative composite: a Trenton homeowner with a sale date nine weeks out (first adjournment already requested) asks three buyers for offers on the same day, mentioning to each that others are quoting. Offers arrive at $145,000, $162,000, and $158,000. She tells the two runners-up the number to beat; one moves to $165,000 with a 21-day close and a $5,000 non-refundable deposit. Twenty thousand dollars of improvement, produced by nothing but the presence of competition.',
        ],
      },
      {
        h: 'What comparison does to behavior',
        body: [
          'Buyers who know they are alone quote soft and re-trade hard — the "inspection" price drop works best on a seller with no alternative. Buyers who know they are competing quote closer to their real number and honor it, because the re-trade now loses them the deal. You do not need to be a negotiator to get this effect; you need only the sentence "I\'m getting a couple of offers this week."',
        ],
      },
      {
        h: 'The easy way to run it',
        body: [
          'Our offer concierge sends your property to multiple vetted buyers with one form — free, offers free and non-binding — and our companies page explains what each buyer is actually for. Whether you use it or dial buyers yourself, the rule stands: no signature until at least two numbers are on the table.',
        ],
      },
    ],
    links: [
      { href: '/companies', label: 'Request offers from vetted buyers' },
      { href: '/tools/net-proceeds', label: 'Compare offers against a listed sale' },
      { href: '/blog/how-a-cash-sale-actually-closes', label: 'What happens after you accept' },
    ],
  },
  {
    slug: 'selling-weeks-before-the-auction',
    title: 'Selling Weeks Before the Auction: The Sequence That Actually Works',
    description:
      'Late is not too late — but it is unforgiving about order of operations. The exact sequence for a pre-auction sale when the sheriff\'s date is already on the calendar.',
    tldr:
      'A New Jersey home can be sold right up to the sheriff\'s deed, but a late sale succeeds on sequence: first request a sale adjournment through the sheriff\'s office (generally two are available, 30 days each), then generate competing cash offers, then contract with a closing date safely inside the adjourned window, and let the title company handle the judgment payoff. A signed contract by itself does not move the sale date — the adjournment procedure does. Equity-rich homeowners have the most to gain and the most to lose here.',
    published: PUB,
    updated: PUB,
    minutes: 6,
    theme: 'vendor',
    sections: [
      {
        h: 'Step one is not the buyer — it is the calendar',
        body: [
          'The instinct under a sale date is to grab any offer fast. Reverse it: secure the time first. The first adjournment through the sheriff\'s office typically adds up to 30 days, the second another 30, and knowing your real runway changes every negotiation after it — a buyer who smells a forced 10-day close prices the desperation; a buyer looking at a 45-day runway prices the house.',
        ],
      },
      {
        h: 'The sequence, illustrated',
        body: [
          'An illustrative composite: a Hackensack homeowner with about $120,000 of equity gets a sale date five weeks out. Week one: adjournment requested and confirmed on the county listing — nine weeks of runway now. Week two: three offers requested through one form; the best is $410,000 with proof of funds and a 25-day close. Week three: attorney review, contract signed, deposit in escrow. Week six: title finds nothing exotic; payoff letter for the judgment ordered. Week eight: closing — judgment paid, case dismissed, equity wired. The auction date passes as a non-event.',
        ],
      },
      {
        h: 'The late-sale traps',
        body: [
          'Trap one: the contract mirage — believing a signed contract postpones the sale. It does not; only the adjournment (or a court order, or bankruptcy\'s stay) moves the date. Trap two: the slow buyer — a financed purchaser whose lender needs 45 days you may not have; this window belongs to cash or nothing. Trap three: the deed grab — "sign the house over and we\'ll handle everything" is not a sale, it is the oldest scam in this space. Money and deed change hands at a real closing with a title company, never before.',
        ],
      },
      {
        h: 'If the math says underwater',
        body: [
          'When the payoff exceeds any realistic price, the pre-auction play becomes a short sale — lender approval, hardship package, written deficiency waiver — and it needs more runway than a clean sale. Start it at the first adjournment, not the second, and get counselor or attorney help with the package. Underwater does not mean out of moves; it means the moves need the full 60 days.',
        ],
      },
    ],
    links: [
      { href: '/sell-house-before-sheriff-sale', label: 'The full pre-auction guide' },
      { href: '/sheriff-sales', label: 'Your county\'s adjournment process' },
      { href: '/companies', label: 'Fast buyers with verified links' },
    ],
  },
  {
    slug: 'when-donating-the-house-is-right',
    title: 'When Donating the House Is Actually the Right Answer',
    description:
      'For a property that is a burden with little or no equity, donation can beat both selling and walking away. How home donation works and who it genuinely fits.',
    tldr:
      'Donation fits a narrow but real case: a property with little or no equity that costs money and worry to hold — an inherited house nobody wants, a battered rental, land with liens approaching its value. A donation to a legitimate program can end carrying costs, avoid an abandonment spiral, and may produce a tax deduction (worth a conversation with a tax professional, not a promise). It does not pay off a large mortgage: a heavily encumbered property needs a sale or short sale instead.',
    published: PUB,
    updated: PUB,
    minutes: 5,
    theme: 'vendor',
    sections: [
      {
        h: 'The problem donation solves',
        body: [
          'Some properties are burdens wearing the costume of assets: taxes and insurance bleeding out monthly, a structure aging badly, no equity worth defending, and a market price so low that selling barely beats the closing costs. Owners of such properties often just... stop — stop paying, stop visiting, stop opening the mail — and the abandonment path ends in liens, municipal citations, and sometimes a foreclosure anyway. Donation is the deliberate version of letting go.',
        ],
      },
      {
        h: 'How it mechanically works',
        body: [
          'A donation program evaluates the property — title, liens, condition — and if accepted, takes conveyance through a normal closing. Clear or nearly clear title is the usual requirement; a big mortgage balance is the usual disqualifier, because the donee cannot absorb it. The seller\'s side of the closing looks like any other, minus the check. What you receive instead: the end of carrying costs, and potentially a charitable deduction based on appraised value — real money for some donors, but confirm your specific tax picture with a professional first.',
        ],
      },
      {
        h: 'A donation, illustrated',
        body: [
          'An illustrative composite: siblings inherit a Salem County house worth perhaps $60,000 needing $50,000 of work, with no mortgage but three years of tax arrears. Cash offers arrive near $15,000; after the arrears and closing costs, the family would split almost nothing — for months of effort. They donate through a program instead: taxes resolved at conveyance, carrying costs end immediately, and the appraisal supports a deduction their accountant confirms is usable. Nobody got rich; everybody got finished.',
        ],
      },
      {
        h: 'Who runs legitimate programs',
        body: [
          'Urbni, reviewed on our companies page, runs a donation inquiry program for exactly these properties — and as with everyone we list, we are paid nothing for the mention. The scam-filter question for any donation program is the same as everywhere else in this world: legitimate ones never charge you up-front fees to take a property off your hands.',
        ],
      },
    ],
    links: [
      { href: '/companies/urbni', label: 'Urbni\'s donation program, our review' },
      { href: '/tools/net-proceeds', label: 'Check the math before assuming no equity' },
      { href: '/answers/inherited-a-house-in-foreclosure', label: 'Inherited property, the direct answer' },
    ],
  },
  {
    slug: 'estate-sale-nobody-wants-to-manage',
    title: 'The Estate Sale Nobody Wants to Manage: Cash Buyers and Inherited Homes',
    description:
      'Out-of-state heirs, a full house, a mortgage nobody is paying — why estates are the natural habitat of the as-is cash sale, and how executors run one properly.',
    tldr:
      'Inherited houses concentrate every reason cash sales exist: heirs who live far away, homes full of a lifetime\'s contents, deferred maintenance, sibling coordination costs, and sometimes a delinquent mortgage with foreclosure timelines running against the estate. An executor or administrator can typically contract and close a sale during administration, cash buyers time closings to surrogate paperwork routinely, and the stepped-up basis usually means little or no capital gains tax. The discipline that protects families: multiple offers and one honest number in front of every heir.',
    published: PUB,
    updated: PUB,
    minutes: 6,
    theme: 'vendor',
    sections: [
      {
        h: 'Why estates and cash buyers fit',
        body: [
          'A retail sale wants an empty, staged, repaired house and a decision-maker nearby. An estate typically has none of those: contents to the ceilings, a roof from another era, and four heirs in three time zones. As-is cash buyers erase the whole preparation problem — contents included, repairs ignored, closing scheduled around the surrogate\'s paperwork — which converts a six-month family project into a six-week transaction.',
        ],
      },
      {
        h: 'The legal mechanics, briefly',
        body: [
          'Once the county surrogate appoints the executor (or administrator, without a will), that representative can generally contract to sell estate property during administration, with the estate conveying title at closing. If the mortgage is delinquent, confirmed heirs and representatives have rights to loan information as successors in interest, and the foreclosure clock runs against the estate exactly as it would against any owner — which makes the sheriff-sale adjournment right and the pre-auction sale as relevant here as anywhere.',
        ],
      },
      {
        h: 'An estate sale, illustrated',
        body: [
          'An illustrative composite: a Toms River ranch, four heirs, mortgage four payments behind, house untouched since the 1990s and full to the garage rafters. The executor gets three as-is offers ($198,000–$226,000), circulates one spreadsheet to the heirs showing each offer net of payoff and costs against a hypothetical fix-and-list scenario with nine months of carrying costs and a renovation nobody will manage. The heirs choose the $226,000 offer unanimously — the first unanimous thing in months. Closing in 28 days, contents included, delinquency paid off at the table.',
        ],
      },
      {
        h: 'The family disciplines',
        body: [
          'Get every number in writing and in front of every heir at once — opacity, not price, is what breaks estate sales. Confirm the stepped-up basis with a tax preparer (usually it means minimal gains tax on a near-death-value sale). And if agreement is impossible, know that New Jersey partition actions exist but are the expensive last resort; a clear comparison of real offers is the cheap alternative that usually prevents them.',
        ],
      },
    ],
    links: [
      { href: '/sell-inherited-house-nj', label: 'The inherited-house guide in full' },
      { href: '/answers/inherited-a-house-in-foreclosure', label: 'When the estate is in foreclosure' },
      { href: '/companies', label: 'Buyers who work with estates' },
    ],
  },
  {
    slug: 'selling-a-high-value-home-quietly',
    title: 'Selling an $800k+ Home in Trouble, Quietly',
    description:
      'Financial distress at the high end has its own physics: bigger equity at stake, bigger carrying costs, and a real premium on discretion. How the quiet sale works.',
    tldr:
      'A high-value New Jersey home in pre-foreclosure carries more equity risk per month than any other property type: carrying costs, accruing interest, and legal fees are all scaled up, while the public spectacle of a distressed listing can itself depress the price. The quiet-sale approach — off-market outreach to qualified buyers, no public listing, disclosure handled properly — protects both price and privacy. Foreclosure filings are public record, but the marketing of your sale is not.',
    published: PUB,
    updated: PUB,
    minutes: 5,
    theme: 'vendor',
    sections: [
      {
        h: 'The high-end version of the problem',
        body: [
          'On a $900,000 house with a $500,000 judgment growing at per-diem interest, every month of drift costs what some homes cost in a year of drift. And distress leaks value at the high end in a way it does not below: a visibly urgent listing on the public portals invites lowball behavior from exactly the buyers sophisticated enough to read the signs. The paradox of the luxury distressed sale is that the standard playbook — maximum exposure — can work against the seller.',
        ],
      },
      {
        h: 'What a quiet sale looks like',
        body: [
          'No public listing. Direct outreach to a vetted pool — high-end investors, buyers\' agents with waiting clients, neighbors who have asked before — under confidentiality expectations. Showings by appointment, framed as private availability rather than distress. Disclosure obligations do not change (the buyer learns everything the law requires), but the marketing posture does: the house is "quietly available," not "must sell before sheriff date." The foreclosure remains a court record for anyone who digs; it stops being the headline.',
        ],
      },
      {
        h: 'A quiet sale, illustrated',
        body: [
          'An illustrative composite: a Morris County homeowner with a $1.1M house, a $600,000 defaulted loan, and a business failure behind the arrears. A public listing would announce trouble to a small-town social world. Through private outreach, two qualified buyers see the house in the same week; one offers $1.02M with 30 days to close. The judgment is paid, roughly $380,000 of equity survives after costs, and the neighbors learn about the move from a moving truck rather than a portal alert.',
        ],
      },
      {
        h: 'Where to start',
        body: [
          'Our premium properties page covers the $800k+ approach, and the Private Sale Group we review specializes in discreet marketing of exactly this tier. As always: we take nothing from anyone we list, comparison beats trust, and the deadline mechanics — adjournments, payoff at closing — work identically at every price point.',
        ],
      },
    ],
    links: [
      { href: '/premium-properties', label: 'The $800k+ program' },
      { href: '/companies/private-sale-group', label: 'Private Sale Group, our review' },
      { href: '/tools/net-proceeds', label: 'Your equity, calculated honestly' },
    ],
  },
  {
    slug: 'cash-buyer-red-flags',
    title: 'Cash Buyer Red Flags: Ten Ways to Spot a Bad Operator in Ten Minutes',
    description:
      'Most cash buyers are ordinary businesses. The bad ones share tells. A field guide to contracts, deposits, deeds, and pressure — before any signature.',
    tldr:
      'Legitimate cash buyers show proof of funds without offense, put deposits in escrow, close through title companies, and give you time for attorney review. The bad ones share tells: pressure to sign today, requests to deed the property before closing, "we\'ll catch up your payments while you rent it back," contracts with long free options and no deposit, offers wildly above market designed to hook then re-trade, and any up-front fee. One rule filters most of it: money and deed move at a real closing, never before.',
    published: PUB,
    updated: PUB,
    minutes: 6,
    theme: 'vendor',
    sections: [
      {
        h: 'The structural tells',
        body: [
          'Read the contract for these: no or trivial deposit (a buyer with no skin can tie up your house free while shopping the contract); an inspection period measured in months (that is an option, not a purchase); assignment language with no closing obligation; and a closing date that floats. None of these is illegal — wholesaling is a real business — but every one shifts risk onto the seller with the least time to spare. A real deposit in escrow and a hard closing date are what commitment looks like in writing.',
        ],
      },
      {
        h: 'The behavioral tells',
        body: [
          'Sign-today pressure is the classic — legitimate buyers survive your attorney-review period; New Jersey builds one in. The too-high hook is subtler: an offer conspicuously above everyone else\'s, followed by "inspection findings" that walk it down after your other buyers have moved on. And the rent-back rescue — "deed it to us, we\'ll fix the arrears, you stay as a tenant" — is the signature move of equity-stripping scams that New Jersey\'s fraud statute exists to punish. The deed goes to a buyer at closing, or it goes nowhere.',
        ],
      },
      {
        h: 'A near-miss, illustrated',
        body: [
          'An illustrative composite: a Union homeowner with a sale date gets a knock and an offer $40,000 above the two quotes she already has — sign tonight, $500 deposit, 90-day close, buyer may assign. Because she has other numbers, the anomaly is visible: the offer is bait, the timeline eats her adjournments, and the assignment clause means the knocker is shopping her house, not buying it. She declines, takes the middle offer with proof of funds and 21 days, and closes with three weeks to spare. The defense was not expertise. It was comparison.',
        ],
      },
      {
        h: 'The ten-minute screen',
        body: [
          'Before signing anything: proof of funds (current, named, verifiable); deposit amount and escrow holder; closing date and what happens if it slips; inspection window length; assignment rights; who pays which closing costs; and the name of the title company. Then the two absolutes: no up-front fees ever, and no deed transfer outside a closing. Any buyer bothered by the checklist has answered it.',
        ],
      },
    ],
    links: [
      { href: '/scams', label: 'The full scam guide, NJ-specific' },
      { href: '/companies', label: 'Buyers we\'ve reviewed, with disclosures' },
      { href: '/blog/always-get-multiple-cash-offers', label: 'Comparison: the everyday defense' },
    ],
  },
];
