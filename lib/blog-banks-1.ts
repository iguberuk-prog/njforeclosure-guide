// BLOG SERIES: HOW BANKS WORK IN FORECLOSURE, PART 1 — THE MACHINE (10 posts)
// ---------------------------------------------------------------------------
// Theme: a neutral, factual tour of the lender side: who actually owns the
// loan, how servicing operations process files, why the bank behaves the way
// it does at each stage. Discipline: no accusations stated as fact, history
// (e.g. robo-signing) framed as history, defenses framed as "talk to a
// lawyer," and every NJ number matching site conventions.
// ---------------------------------------------------------------------------

import type { TopicPost } from './topic-blog';

const PUB = '2026-09-17';

export const BANKS_POSTS_1: TopicPost[] = [
  {
    slug: 'why-banks-dont-want-your-house-nj',
    title: 'Why the Bank Doesn’t Actually Want Your House',
    description:
      'Foreclosure is a loss-management process for the lender, not a land grab. Understanding the bank’s cost math explains why workouts are real.',
    tldr:
      'A foreclosure is usually a money-losing event for the lender: years of missed interest, legal fees, property preservation, taxes and insurance on a vacant asset, auction discounts, and REO carrying costs. That is why loss-mitigation departments exist and why modifications, repayment plans and short sales get approved — not out of kindness, but because a performing loan or a negotiated exit routinely beats the foreclosure ledger. Knowing this converts you from supplicant to counterparty: you are proposing a deal that can win on their own math.',
    published: PUB,
    updated: PUB,
    minutes: 6,
    theme: 'banks',
    sections: [
      {
        h: 'The foreclosure ledger, from the bank’s chair',
        body: [
          'Add up what a completed New Jersey foreclosure costs the lender: a year or more without payments while the judicial process runs, attorney fees and court costs, forced-place insurance and property taxes it must advance, inspection and preservation charges, and then an auction that often produces either a below-market third-party price or the bank buying its own collateral with a credit bid — inheriting an REO property that needs securing, maintaining, insuring and reselling at retail’s expense. Institutions do this because a defaulted loan forces their hand, not because the outcome is attractive.',
          'This is the single most useful reframe available to a homeowner: the bank’s best case is very often your loan performing again, or a controlled sale that repays it. Your interests and theirs overlap more than the adversarial mood suggests.',
        ],
      },
      {
        h: 'Why the machine still forecloses anyway',
        body: [
          'If foreclosure loses money, why do banks complete thousands of them? Because the alternative requires a counterparty. A file with no answered calls, no submitted documents and no proposal gives the loss-mitigation department nothing to approve, and the machine defaults to its one self-executing track: the legal process. Servicers also operate under investor rules that require them to advance toward foreclosure on non-responsive accounts. The homeowners who experience the bank as flexible are, almost uniformly, the ones who put a documented proposal in front of it.',
        ],
      },
      {
        h: 'Using the math on purpose',
        body: [
          'Every workout you propose can be framed in the bank’s own terms: a modification that reprices the loan beats the foreclosure ledger; a repayment plan recovers arrears without legal spend; a short sale nets more than auction-plus-REO; even cash-for-keys is the bank paying to skip its most expensive path. Free HUD counselors (800-569-4287) package proposals in exactly this language. You do not need the bank to like you. You need your proposal to beat their alternative — and their alternative is expensive.',
        ],
      },
    ],
    links: [
      { href: '/answers/options-if-behind-on-mortgage', label: 'The options banks actually approve' },
      { href: '/compare', label: 'All 7 exits, compared honestly' },
      { href: '/free-checklist', label: 'The Week-One Checklist (free PDF)' },
    ],
  },
  {
    slug: 'servicer-vs-investor-who-really-owns-your-loan-nj',
    title: 'Servicer vs. Investor: Who Really Owns Your Mortgage?',
    description:
      'The company you call rarely owns your loan. How servicing, ownership and trustees fit together — and why it decides what workouts are possible.',
    tldr:
      'Three roles hide behind "the bank": the investor who owns the loan (often Fannie Mae, Freddie Mac, a Ginnie Mae-backed pool, or a private securitization trust), a trustee whose name appears on the lawsuit for securitized loans, and the servicer — the company you actually call — which collects payments and applies the investor’s rules. Workout menus are set by the investor, which is why the same servicer approves one neighbor and denies another. You can ask, and for many loans look up online, who owns yours.',
    published: PUB,
    updated: PUB,
    minutes: 6,
    theme: 'banks',
    sections: [
      {
        h: 'The three-layer cake',
        body: [
          'The investor put up the money and owns the right to be repaid: a government-sponsored enterprise, a government-backed pool, a bank’s own portfolio, or a trust holding thousands of securitized loans. The trustee is the institutional name (often a large bank "as trustee for" a trust) that appears as plaintiff in securitized-loan foreclosures. The servicer is the operations company — statements, payments, escrow, collections, loss mitigation — working under a servicing agreement that spells out what it may offer you. When a homeowner says "the bank keeps saying no," the no usually lives two layers up.',
        ],
      },
      {
        h: 'Why it matters to your case',
        body: [
          'Investor identity sets the menu. Fannie and Freddie loans follow published workout programs; FHA loans carry the FHA menu, including partial claims that park arrears in a junior lien; VA loans add VA-specific options and the VA’s own assistance line (877-827-3702); private trusts follow whatever their governing documents allow. It also explains the lawsuit’s strange caption — a trust you never borrowed from suing you is normal securitization mechanics, though whether the plaintiff can properly enforce the note is a legal question a foreclosure defense attorney evaluates, not something to assume either way.',
        ],
      },
      {
        h: 'Finding out who holds yours',
        body: [
          'Ask the servicer in writing — federal servicing rules require identifying the owner or assignee of the loan on request. Fannie Mae and Freddie Mac run public online loan-lookup tools; your statements and the complaint itself carry clues (an FHA case number, a trust name in the caption). Put the answer to work: name your loan type in every application so the right menu applies, and hand the securitization details to your lawyer or counselor rather than internet theories. The ownership question is a tool, not a magic exit.',
        ],
      },
    ],
    links: [
      { href: '/servicers', label: 'Every major servicer’s contacts, verified' },
      { href: '/answers/why-is-a-bank-i-never-heard-of-suing-me', label: 'Why a strange bank is suing you' },
      { href: '/answers/do-i-need-a-lawyer', label: 'When the lawyer earns it' },
    ],
  },
  {
    slug: 'inside-a-loss-mitigation-department',
    title: 'Inside a Loss-Mitigation Department: How Your File Is Really Handled',
    description:
      'Queues, checklists, waterfalls and decision engines: what actually happens to your hardship application between "received" and "decision."',
    tldr:
      'Your application does not sit on a banker’s desk; it moves through a pipeline: intake checks the package for completeness (incomplete files park — the #1 stall), processors verify documents, an underwriting step runs the investor’s "waterfall" of options in fixed order, and a decision letter reports where you landed. Nobody in the pipeline is against you; nobody is for you either — the file speaks. Complete, consistent, legible paperwork is genuinely the whole strategy.',
    published: PUB,
    updated: PUB,
    minutes: 6,
    theme: 'banks',
    sections: [
      {
        h: 'The pipeline, stage by stage',
        body: [
          'Intake: software and staff check the package against a checklist — every income source documented, every form signed, every page present. Files that fail park in "missing documents" status, and the clock you think is running is not. Processing: documents get verified and normalized into the numbers underwriting will use. Underwriting: the investor’s rules run against your verified numbers, usually as a waterfall — can the loan be brought current with a repayment plan? If not, does a modification price? If not, do the exit options (short sale, deed-in-lieu) apply? Decision: the letter states the outcome and, under federal rules, the specific reasons for any denial — plus appeal rights on complete applications.',
        ],
      },
      {
        h: 'Why the process feels the way it does',
        body: [
          'The maddening parts have boring explanations. Repeated document requests: items expire (pay stubs age out during long reviews) and re-verification triggers re-requests. Different answers from different reps: call-center staff read status screens; only the assigned processor or underwriter knows the file, which is why your single point of contact matters. Long silences: your file is one of hundreds in a queue, advancing only when complete. None of this is personal, and none of it responds to emotion — it responds to completeness and timestamps.',
        ],
      },
      {
        h: 'Working the pipeline like an insider',
        body: [
          'Send everything at once, labeled plainly, in one package. Keep upload confirmations and fax receipts; note dates, names and reference numbers on every call. Refresh aging documents proactively during long reviews. Ask, specifically: "Is my application complete as of today, and if not, exactly what is missing?" — the answer to that one question is your file’s real status. And take the free staff the system offers you: a HUD counselor (800-569-4287) has walked a thousand files through this exact pipeline and knows where they snag.',
        ],
      },
    ],
    links: [
      { href: '/servicers', label: 'Your servicer’s loss-mit door, verified' },
      { href: '/answers/options-if-behind-on-mortgage', label: 'What the waterfall can output' },
      { href: '/professionals', label: 'The free counselors who work these files' },
    ],
  },
  {
    slug: 'why-the-bank-keeps-losing-your-paperwork',
    title: 'Why the Bank Keeps "Losing" Your Paperwork (and the Fix)',
    description:
      'The lost-documents phenomenon has structural causes — volume, expiring documents, transfers, portals. The fix is a paper trail they can’t argue with.',
    tldr:
      'Lost paperwork is mostly structure, not sabotage: enormous volume across disconnected systems, documents that legally "expire" mid-review, servicing transfers that strand files, and portals that reject uploads silently. The countermeasure is a timestamped trail: submit through channels that generate receipts, keep every confirmation, resend expired items before being asked, and confirm completeness in writing. Federal servicing rules put document-handling duties on the servicer — a documented notice of error is the formal lever when the pattern persists.',
    published: PUB,
    updated: PUB,
    minutes: 5,
    theme: 'banks',
    sections: [
      {
        h: 'The structural causes',
        body: [
          'A large servicer handles thousands of active loss-mitigation files across systems that grew by merger and rarely talk to each other cleanly; your faxed page enters one queue, your portal upload another. Documents age out — a pay stub or bank statement older than the review window no longer counts, so a long review "loses" documents that were merely superseded. Servicing transfers move files between companies mid-review, and what carried over is whatever the transfer tape included. None of this excuses the experience; all of it predicts the fix.',
        ],
      },
      {
        h: 'Building the trail',
        body: [
          'Choose channels that receipt: portal uploads with confirmation screenshots, fax with transmission reports, mail with tracking. One complete package beats a trickle of single pages. Keep a one-page log — date, channel, items, confirmation number, person spoken to — and refresh time-sensitive documents on your own schedule during long reviews. After each submission, ask the completeness question in writing where possible: "Please confirm my application is complete as of [date]." The trail is not paranoia; it is the exact evidence that shortens every later dispute.',
        ],
      },
      {
        h: 'When the pattern needs a formal lever',
        body: [
          'Federal rules give borrowers a formal error-resolution channel: a written notice of error (sent to the servicer’s designated address) obligates investigation and response on defined timelines, and repeated document mishandling is exactly what it is for. A CFPB complaint creates a second documented track. And in an active NJ case, tell the mediator or the court the paper story with your log in hand — a homeowner with receipts reads very differently from one with grievances. Free counselors and LSNJ (1-888-576-5529, income-qualifying) both know these levers well.',
        ],
      },
    ],
    links: [
      { href: '/answers/what-is-the-mediation-program', label: 'Where the paper trail gets an audience' },
      { href: '/servicers', label: 'Servicer contacts and portals, verified' },
      { href: '/free-checklist', label: 'The 45-Day Playbook (free PDF)' },
    ],
  },
  {
    slug: 'dual-tracking-what-banks-can-and-cant-do',
    title: 'Dual Tracking: What the Bank Can and Can’t Do While You Apply',
    description:
      'Federal rules restrict foreclosing while a complete application is under review. What the protections cover, their limits, and how to keep them active.',
    tldr:
      'Dual tracking — advancing the foreclosure while your workout application sits under review — is restricted by federal servicing rules: with a complete application received early enough, the servicer generally may not move for judgment or conduct a sale until the review (and any appeal window) resolves. The protections hinge on the word complete, arrive strongest early, and have exceptions — so they are a shield to invoke knowingly, with your completeness confirmations in writing, not a assumption to rest on.',
    published: PUB,
    updated: PUB,
    minutes: 6,
    theme: 'banks',
    sections: [
      {
        h: 'What the rules actually restrict',
        body: [
          'Under federal mortgage-servicing regulations, a servicer that receives a complete loss-mitigation application sufficiently before a scheduled sale generally must review it before seeking judgment or selling, must give you the decision with reasons, and must let appeal windows run on eligible denials. Related rules bar starting the foreclosure at all until a loan is more than 120 days delinquent. This is why "is my application complete?" is the most consequential question in the process: the protections attach to complete files, on timelines measured against the sale date.',
        ],
      },
      {
        h: 'The limits, honestly',
        body: [
          'The shield is real and it is not absolute. Applications submitted very close to a sale date get weaker or no protection; incomplete files get little; the rules constrain the servicer’s motion practice, not the court’s own calendar mechanics; and disputes about whether a file was complete are common. Treat dual-tracking protections as one layer — running alongside your answer, the mediation seat, adjournments and the rest — never as the whole defense. A lawyer (free via LSNJ for income-qualifying homeowners) turns violations into remedies; a homeowner’s job is generating the record that makes that possible.',
        ],
      },
      {
        h: 'Keeping the shield active',
        body: [
          'Apply early — the protections are strongest well before any sale is scheduled. Get completeness confirmed in writing and re-confirmed after every document request. If a sale date advances while a confirmed-complete application is pending, put the objection in writing immediately (to the servicer and its counsel), flag it in mediation or to the court, and file the CFPB complaint that creates a federal record. The pattern to avoid is silent reliance: the homeowners the rules save are the ones who can prove what was pending, and when.',
        ],
      },
    ],
    links: [
      { href: '/answers/can-i-stop-a-sheriff-sale', label: 'Everything that can move a sale date' },
      { href: '/answers/do-i-need-a-lawyer', label: 'When violations need counsel' },
      { href: '/servicers', label: 'Where to send the application, verified' },
    ],
  },
  {
    slug: 'why-banks-adjourn-their-own-sheriff-sales-nj',
    title: 'Why Banks Adjourn Their Own Sheriff Sales in NJ',
    description:
      'Most postponements are the lender’s. The reasons — reviews, rules, title issues, market strategy — and how to read (and use) a bank adjournment.',
    tldr:
      'Watch any NJ county’s sale list and lender adjournments outnumber homeowner ones: banks postpone for pending loss-mitigation reviews (the rules and their own exposure require it), unresolved title or paperwork defects, bankruptcy stays, internal bid-strategy decisions, and plain calendar management. A bank adjournment is information — usually that something in your file is still live — and it is time you did not have to spend your own two 30-day requests to get. Verify dates constantly; they move.',
    published: PUB,
    updated: PUB,
    minutes: 5,
    theme: 'banks',
    sections: [
      {
        h: 'The reasons behind lender postponements',
        body: [
          'Compliance: selling a house while a complete workout application or an appeal is pending invites regulatory and legal trouble, so pending reviews routinely trigger adjournments. Mechanics: assignments, affidavits, notice defects and title wrinkles get fixed before a sale rather than litigated after. Law: a bankruptcy filing’s automatic stay halts the sale immediately. Strategy: the plaintiff controls its own auction — it may adjourn to reconsider its bid, wait out a market, or coordinate portfolio-level decisions that have nothing to do with you. And sometimes the file simply is not ready, so the machine reschedules itself.',
        ],
      },
      {
        h: 'Reading an adjournment from your side',
        body: [
          'A lender adjournment while your application is under review is the system working — note it in your log and keep the review moving. A string of adjournments with nothing pending sometimes signals fixable defects or negotiation appetite worth exploring through counsel or mediation. Either way the practical rules hold: never assume a date until the county’s own listing says so, never skip preparing because "it will probably adjourn," and remember your own two 30-day adjournments remain in reserve — bank postponements do not consume them.',
        ],
      },
      {
        h: 'Turning granted time into an ending',
        body: [
          'Whoever adjourned, the weeks are identical currency: enough for a cash closing, meaningful progress on a listing, a modification’s final documents, or a Chapter 13 filing done deliberately instead of at midnight. Decide on the adjournment day what the new date is buying, and work backward from it. Time granted by the bank’s machinery and time you requested spend exactly the same — and both are wasted by relief without a plan.',
        ],
      },
    ],
    links: [
      { href: '/sheriff-sales', label: 'Your county’s live sale rules and sources' },
      { href: '/answers/can-i-stop-a-sheriff-sale', label: 'Every lever that moves a date' },
      { href: '/sell-house-before-sheriff-sale', label: 'Using the weeks: closing first' },
    ],
  },
  {
    slug: 'your-loan-was-sold-mid-foreclosure-nj',
    title: 'Your Loan Was Sold Mid-Foreclosure: What Changes, What Can’t',
    description:
      'Loans and servicing rights trade constantly, even during cases. Your notice rights, payment protections, and how to keep a workout from resetting.',
    tldr:
      'Mortgages and servicing rights are traded assets, and delinquent loans trade too — sometimes mid-case. Federal rules require notice from both old and new servicer, protect payments sent to the old address during the transition, and carry escrow and (as a rule) in-flight loss-mitigation obligations across. The case caption may change; your NJ rights do not: the 35-day answer, mediation, cure to final judgment and adjournments all survive a transfer. Your job is continuity: re-send the record so the new servicer cannot start from zero.',
    published: PUB,
    updated: PUB,
    minutes: 6,
    theme: 'banks',
    sections: [
      {
        h: 'What actually got sold',
        body: [
          'Two different things trade under one headline. Servicing rights: the operations contract moves to a new company, the investor stays the same, and your loan’s terms are untouched. The loan itself: ownership moves — commonly, seriously delinquent loans sell at a discount to investors who specialize in resolving them. Either way you should receive transfer notices identifying the new parties and effective dates, and federal rules create a grace window in which payments sent to the old servicer around the transfer must be treated as received.',
        ],
      },
      {
        h: 'The risks live in the seams',
        body: [
          'Transfers strand things: an application "under review" that the new system shows as closed, trial-modification payments the new servicer’s records missed, escrow histories that arrive garbled. The countermeasure is your own file: the day the notice arrives, assemble your log, confirmations, agreements and payment proof, and send the new servicer a concise written summary — here is what was pending, here is the evidence, please confirm status. Discrepancies get the formal treatment: a written notice of error, and a CFPB complaint if it does not resolve. A discounted-note buyer also has discounted expectations — sometimes that means more settlement appetite, which counsel or a mediator can probe.',
        ],
      },
      {
        h: 'What a transfer never changes',
        body: [
          'The New Jersey process is indifferent to who holds the paper: your answer stands, the mediation program remains available to eligible owner-occupants, the Fair Foreclosure Act cure right still runs to final judgment, and sheriff-sale adjournment rights are untouched. A substitution of plaintiff is paperwork, not a new case. Treat the transfer as an administrative event with homework attached — not a reset of your rights, and not a rescue either.',
        ],
      },
    ],
    links: [
      { href: '/answers/why-is-a-bank-i-never-heard-of-suing-me', label: 'Strange plaintiff names, explained' },
      { href: '/servicers', label: 'Finding the new servicer’s real contacts' },
      { href: '/answers/what-is-the-mediation-program', label: 'The mediation seat that survives transfers' },
    ],
  },
  {
    slug: 'the-banks-foreclosure-law-firms-nj',
    title: 'The Bank’s Foreclosure Law Firms: Who They Are, What They Can Do',
    description:
      'High-volume firms run the lender’s side of NJ foreclosures. What they handle, what they can’t decide, and how to communicate without hurting yourself.',
    tldr:
      'The plaintiff’s side of most NJ foreclosures is run by a small set of high-volume law firms processing thousands of files on checklists and fee schedules. Useful facts: the firm executes, the servicer and investor decide — workout requests go to loss mitigation, not the law firm; the firm’s fees are stacking onto your payoff as the case advances; and everything you tell them is on the record for the other side. Communicate in writing, keep it procedural, and route negotiations through the proper doors: mediation, counsel, or the servicer.',
    published: PUB,
    updated: PUB,
    minutes: 5,
    theme: 'banks',
    sections: [
      {
        h: 'How the plaintiff’s side is staffed',
        body: [
          'Foreclosure is volume law: firms represent servicers across huge caseloads, working standardized steps — complaint, default, judgment motion, writ, sale coordination — on investor-approved fee schedules. Your case is a file among thousands, which cuts both ways: little personal attention, but predictable behavior. The firm’s name is on every court paper you receive, and its role ends at executing the client’s instructions; it cannot approve a modification, accept a short-sale price, or waive a deficiency on its own.',
        ],
      },
      {
        h: 'Talking to opposing counsel without owning goals',
        body: [
          'You may need to contact the firm — adjournment logistics, payoff and reinstatement requests, notice that a complete application is pending, closing coordination on a sale. Keep it written, dated and procedural, and remember whose lawyer they are: statements you make can be used in the case, and the firm has no duty to advise you (a good one will say so). What not to do: negotiate hardship terms with them (wrong door — that is loss mitigation’s), vent (useless and on the record), or treat a paralegal’s phone remark as a binding agreement. Anything agreed — an adjournment consent, a closing date — exists when it is in writing.',
        ],
      },
      {
        h: 'The fee meter, and the doors that actually decide',
        body: [
          'Every motion the firm files becomes a line on your payoff — allowed fees and costs are part of the judgment, which is one more concrete reason early resolution is cheaper than late. And keep the decision map straight: the servicer’s loss-mitigation department runs workouts; the investor’s rules bound them; the mediator (free, if eligible) can pull a decision-maker to the table; your own counsel — LSNJ (1-888-576-5529) for income-qualifying homeowners — speaks to the firm in its own language. The firm is the process. Aim your effort at the people with the yes.',
        ],
      },
    ],
    links: [
      { href: '/answers/do-i-need-a-lawyer', label: 'Your own counsel: when and why' },
      { href: '/answers/what-is-the-mediation-program', label: 'The table with a decision-maker at it' },
      { href: '/documents', label: 'Every paper the firm sends, decoded' },
    ],
  },
  {
    slug: 'property-inspections-preservation-fees-foreclosure',
    title: 'Drive-By Inspections and Preservation Fees, Explained',
    description:
      'The stranger photographing your house works for the servicer. Why inspections happen, what "property preservation" means, and how to protect an occupied home.',
    tldr:
      'Once a loan defaults, servicers order recurring occupancy inspections — the drive-by photographer — and, on homes they deem vacant, "property preservation": lock changes, winterization, lawn work, each billed to your account. The critical line is occupied versus vacant: an occupied home cannot lawfully be treated as abandoned, so make occupancy obvious and respond to occupancy notices. Wrongful lockouts of occupied homes are a known industry failure — document everything and treat any entry attempt on your occupied home as the serious event it is.',
    published: PUB,
    updated: PUB,
    minutes: 5,
    theme: 'banks',
    sections: [
      {
        h: 'Why the photographer keeps coming',
        body: [
          'Investor rules require servicers to monitor collateral on delinquent loans, so inspection vendors do periodic drive-bys — a photo, an occupancy judgment, a modest fee to your account, repeated monthly across the delinquency. It is impersonal surveillance of the asset, not of you, and it is also the input for a consequential decision: whether the property is occupied. Homes flagged vacant get escalated to preservation — securing, winterizing, maintaining — under the same investor mandates.',
        ],
      },
      {
        h: 'The occupied/vacant line, and defending it',
        body: [
          'Your rights differ sharply across that line. Occupied homes: you have the legal right to live there through the entire process, and self-help entry by vendors is not part of any legitimate playbook. Keep the home visibly lived-in, answer or return occupancy letters and door hangers, and if a vendor asserts the home is vacant while you live there, correct the record in writing immediately. Industry history includes wrongful lockouts and trash-outs of occupied homes; if locks are changed on you, document everything, notify the servicer and its counsel in writing, and get legal help fast — LSNJ (1-888-576-5529) for income-qualifying homeowners.',
        ],
      },
      {
        h: 'The fees, and if you actually leave',
        body: [
          'Inspection and preservation charges stack onto the payoff, and they are reviewable: request an itemized accounting, and dispute duplicative or implausible line items in writing (monthly inspections of a clearly occupied home merit the question). If you do vacate before the case ends, do it deliberately: tell no one it is "abandoned," keep utilities minimally on, keep insurance in force, and understand the home will likely be secured by vendors once genuinely vacant. Best of all, remember the baseline: leaving early is the one move that helps only the other side’s ledger.',
        ],
      },
    ],
    links: [
      { href: '/answers/how-much-to-reinstate-my-mortgage', label: 'Reading the fee-stacked quote' },
      { href: '/answers/what-happens-if-i-ignore-the-foreclosure', label: 'Why staying put matters' },
      { href: '/scams', label: 'Door-knockers, legitimate and not' },
    ],
  },
  {
    slug: 'what-happens-at-auction-the-banks-credit-bid',
    title: 'What Actually Happens at the Auction: The Bank’s Credit Bid',
    description:
      'Sheriff sales are dominated by one bidder: the plaintiff, bidding its own judgment. How credit bids work, why homes go "back to the bank," and what it means for you.',
    tldr:
      'At an NJ sheriff sale the plaintiff bids without cash — a credit bid up to its judgment amount — so it sets the floor, and when no third party outbids it, the property goes "back to the bank" and becomes REO. For the former owner the mechanics matter three ways: third-party bidding above the judgment creates surplus funds that belong to you; the bank’s bid strategy influences whether surplus is possible; and either outcome starts the same after-sale sequence — 10-day redemption, deed, and a court possession process, never a same-day removal.',
    published: PUB,
    updated: PUB,
    minutes: 6,
    theme: 'banks',
    sections: [
      {
        h: 'How the sale actually runs',
        body: [
          'The county sheriff conducts the auction under its local rules — venue, deposit requirements for bidders, published lists. The plaintiff participates through counsel with a unique power: it can bid the debt itself, dollar for dollar up to the judgment, writing no check. Third-party investors bid cash against that floor. If the room beats the bank’s number, the property sells to the highest bidder; if not, the bank takes title by its credit bid, and the loan converts into a bank-owned property — REO — headed for the retail market after possession and cleanup.',
        ],
      },
      {
        h: 'Where you appear in this arithmetic',
        body: [
          'Surplus is the headline: every dollar a winning bid exceeds the judgment (and costs) is deposited with the court for junior lienholders and then the former owner — real money, claimable, and routinely abandoned. Bank bid strategy shapes that outcome: a full-judgment credit bid means surplus only exists above the whole debt; banks sometimes bid less than the judgment for their own reasons, which changes the math. You cannot control the room, which is the deepest argument for the alternative you do control: a market sale before auction converts the same equity at retail prices, with no bidding lottery.',
        ],
      },
      {
        h: 'After the hammer, whoever won',
        body: [
          'The sequence is identical whether an investor or the bank prevailed: New Jersey’s 10-day redemption window (pay the judgment in full, undo the sale), then the deed, then possession — a court process with notice, commonly softened by negotiable cash-for-keys offers from either kind of buyer. Check the sale result against the judgment and pursue any surplus (our guide walks it); expect REO departments and investors alike to prefer paid, scheduled move-outs over litigation. The auction ends the case’s question. It does not end your rights inside the aftermath.',
        ],
      },
    ],
    links: [
      { href: '/guides/surplus-funds', label: 'Surplus funds: check and claim' },
      { href: '/answers/what-happens-after-a-sheriff-sale', label: 'The after-sale sequence in full' },
      { href: '/sell-house-before-sheriff-sale', label: 'The exit that skips the lottery' },
    ],
  },
];
