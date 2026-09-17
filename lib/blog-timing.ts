// BLOG SERIES: DEADLINE & TIMING QUESTIONS (10 posts)
// ---------------------------------------------------------------------------
// Theme: "how long do I have" at every stage. These are the panic-hour
// searches; each post answers the clock question first, then what to do with
// the time. Numbers match site conventions exactly: ~120-day delinquency
// norm before filing, NOI 30 days, 35-day answer, cure to final judgment,
// two 30-day adjournments, 10-day redemption, surplus funds held by the
// court until claimed. No new statistics are introduced here.
// ---------------------------------------------------------------------------

import type { TopicPost } from './topic-blog';

const PUB = '2026-09-17';

export const TIMING_POSTS: TopicPost[] = [
  {
    slug: 'how-long-after-missed-payments-before-foreclosure-nj',
    title: 'How Many Payments Can I Miss Before Foreclosure Starts in NJ?',
    description:
      'The honest timeline from a first missed mortgage payment to a filed NJ foreclosure — and why the quiet months are the most valuable ones you get.',
    tldr:
      'Missing one payment does not start a foreclosure. Most lenders wait until a loan is around 120 days delinquent before filing, and New Jersey law adds its own gate: a Notice of Intention must arrive at least 30 days before any complaint. That usually means four-plus months between the first missed payment and a lawsuit — the cheapest, most fixable stretch of the entire process. Every tool (repayment plans, forbearance, modification, a controlled sale) works best inside this window.',
    published: PUB,
    updated: PUB,
    minutes: 5,
    theme: 'timing',
    sections: [
      {
        h: 'The real clock, month by month',
        body: [
          'Month one: late fees and calls, nothing legal. Months two and three: the servicer’s letters sharpen, and federal servicing rules push both sides toward loss-mitigation conversation — most lenders do not file until a loan is around 120 days delinquent. Somewhere in this stretch New Jersey’s own requirement lands: the Notice of Intention to Foreclose, which must precede any complaint by at least 30 days and must state exactly what it costs to catch up.',
          'Only after all that can a complaint be filed — and even then you get 35 more days to answer. Counted from the first missed payment, the road to a judgment is long by design. The system is full of exits; they are simply better lit at the start.',
        ],
      },
      {
        h: 'What the quiet months are for',
        body: [
          'Everything is cheaper before filing: no attorney fees stacked on the arrears, no public case in the record, a servicer still authorized to offer the full menu. A repayment plan spreads the missed months forward; forbearance formalizes a pause for a documented hardship; a modification review restructures for a permanent income change. The free machinery — a HUD-approved counselor at 800-569-4287 — assembles any of these at no cost.',
        ],
      },
      {
        h: 'The mistake that spends the window',
        body: [
          'The most common plan is hoping next month fixes it, and hope is the one strategy with no paperwork. If the setback is temporary, say so to the servicer in an application, not in your head. If it is permanent, the sooner you know your equity number, the more of it you keep. Either way, the four quiet months reward the households that move first and punish the ones that wait for the letter with a docket number on it.',
        ],
      },
    ],
    links: [
      { href: '/answers/how-many-payments-can-i-miss', label: 'The short answer version' },
      { href: '/documents/notice-of-intention', label: 'The NOI: your 30-day warning, decoded' },
      { href: '/free-checklist', label: 'The Week-One Checklist (free PDF)' },
    ],
  },
  {
    slug: 'how-long-to-answer-foreclosure-complaint-nj',
    title: 'How Long Do I Have to Answer a Foreclosure Complaint in NJ?',
    description:
      '35 days from service — the most important deadline in the whole case. What counts as answering, what it costs (nothing, if needed), and what filing preserves.',
    tldr:
      'You generally have 35 days from the day you were served to file an answer in New Jersey Superior Court. It is the single most consequential deadline in the case: filing keeps you a participant (notice of every motion, standing to raise defenses, eligibility to request free mediation) while silence sends the case to default processing on the lender’s schedule. You do not need a lawyer to file something — njcourts.gov has self-help forms, and LSNJ (1-888-576-5529) defends income-qualifying homeowners free.',
    published: PUB,
    updated: PUB,
    minutes: 5,
    theme: 'timing',
    sections: [
      {
        h: 'The deadline, precisely',
        body: [
          'The clock starts at service — the day you received the summons and complaint — and runs 35 days. Mark the exact date and treat it as immovable. Filing anything responsive on time is categorically better than filing the perfect thing late: an answer, even a simple one disputing the amounts and asserting your interest, changes the case’s entire track.',
        ],
      },
      {
        h: 'What answering actually buys',
        body: [
          'Four things. Standing: you remain a party whose objections must be heard, including to the final judgment amount. Information: notice of every motion, instead of learning about milestones from strangers’ mail. Time: contested cases move substantially slower, and time is the ingredient every workout, sale, and application needs. Access: the answer window is when homeowners request New Jersey’s free foreclosure mediation — a table with a neutral mediator and a lender representative who can actually approve terms.',
        ],
      },
      {
        h: 'If the deadline already passed',
        body: [
          'Missing it is serious, not fatal. Before final judgment, courts can vacate a default for good cause, and the Fair Foreclosure Act’s right to cure the arrears runs all the way to entry of final judgment. Loss mitigation with the servicer continues regardless of the court calendar, and a sale you control remains possible until a sheriff sale actually happens. But every one of those paths is steeper than the answer was. If you are inside the 35 days right now: file.',
        ],
      },
    ],
    links: [
      { href: '/answers/how-long-to-respond-to-complaint', label: 'The 35 days, in brief' },
      { href: '/documents/summons-and-complaint', label: 'What you were served, decoded' },
      { href: '/answers/what-is-the-mediation-program', label: 'The free mediation seat you can request' },
    ],
  },
  {
    slug: 'what-happens-if-i-dont-answer-foreclosure-nj',
    title: 'What Happens If I Don’t Answer an NJ Foreclosure Complaint?',
    description:
      'The default track, step by step: what silence sets in motion, how fast it moves, what rights survive it, and the points where you can still re-enter.',
    tldr:
      'Silence does not pause a New Jersey foreclosure; it streamlines it. After the 35-day window closes unanswered, the lender requests entry of default and the case moves to administrative processing through the Office of Foreclosure — then final judgment by motion, a writ of execution, and a county sheriff sale. Rights survive along the way: default can sometimes be vacated, the cure right runs to final judgment, adjournments and redemption exist at the sale stage, and surplus funds belong to you. But every re-entry point is harder than answering was.',
    published: PUB,
    updated: PUB,
    minutes: 6,
    theme: 'timing',
    sections: [
      {
        h: 'The default track, in order',
        body: [
          'Day 36 without an answer, the lender can ask the court to enter default — a docket entry marking the case uncontested. Uncontested files run through the Judiciary’s Office of Foreclosure, which processes them administratively: the motion for final judgment (served on you, with a window to object to the amounts), the judgment fixing the debt, the writ of execution to the county sheriff, and a scheduled sale with required notice. No stage is secret; each arrives by mail to a household that, too often, has stopped opening mail.',
        ],
      },
      {
        h: 'What silence costs, specifically',
        body: [
          'Not the house, immediately — the process still takes time. What silence spends is leverage: the mediation seat that is requested with an answer, the standing to contest amounts, the slower contested-case calendar, and months in which a modification or a controlled sale could have been arranged calmly. It also compounds financially, as attorney fees and costs stack onto the arrears. The quietest cases produce the worst arithmetic.',
        ],
      },
      {
        h: 'Re-entry points that survive',
        body: [
          'A homeowner who wakes up mid-default still has real doors: a motion to vacate the default (easier before final judgment than after), the Fair Foreclosure Act cure right up to entry of final judgment, loss mitigation at any stage, two 30-day sheriff-sale adjournments plus the 10-day post-sale redemption, and a market sale that pays the judgment any time before the auction. Surplus funds above the judgment remain yours even after a sale. The system leaves the lights on longer than people think — but each successive door is heavier. Open the earliest one you can reach.',
        ],
      },
    ],
    links: [
      { href: '/answers/what-happens-if-i-ignore-the-foreclosure', label: 'Ignoring it: the short answer' },
      { href: '/answers/is-it-too-late', label: 'Is it too late? Stage by stage' },
      { href: '/quiz', label: 'What still fits your case? Two free minutes' },
    ],
  },
  {
    slug: 'how-long-does-foreclosure-take-in-nj-full-timeline',
    title: 'How Long Does a Foreclosure Take in NJ? The Full Timeline',
    description:
      'From first missed payment to sheriff sale: every stage of a New Jersey foreclosure with its own clock, and where homeowners can add or lose months.',
    tldr:
      'New Jersey foreclosures are judicial and long: roughly 120 days of delinquency before most lenders file, a 30-day Notice of Intention, a 35-day answer window, then months of case processing before judgment, a writ, and a county sheriff sale — commonly a year or more end to end, and contested cases run substantially longer. The homeowner’s choices move the clock more than anything the lender does: answering, mediation, complete loss-mitigation applications, and adjournments each add working time.',
    published: PUB,
    updated: PUB,
    minutes: 7,
    theme: 'timing',
    sections: [
      {
        h: 'Stage by stage, with clocks',
        body: [
          'Pre-filing: most lenders wait until roughly 120 days of delinquency, and New Jersey requires the Notice of Intention at least 30 days before a complaint. Case start: service of the summons and complaint opens your 35-day answer window. Case middle: uncontested files move administratively to final judgment; contested ones take substantially longer, through discovery and motions. Case end: judgment, writ of execution, then the county sheriff’s calendar — scheduling, advertising, and notice — before an auction. County sale calendars vary widely, which is why neighbors’ stories never quite match.',
        ],
      },
      {
        h: 'What stretches the clock (in your favor)',
        body: [
          'Filing an answer is the single biggest lever — contested cases simply move slower. A complete loss-mitigation application carries protection while under review; mediation adds structured time with a decision-maker at the table; and at the sale stage, New Jersey practice generally allows a homeowner two adjournments of up to 30 days each, with courts able to grant more for cause. None of this is stalling for its own sake: it is the working room in which modifications complete and sales close.',
        ],
      },
      {
        h: 'What the length is actually for',
        body: [
          'A long process is not a slow guillotine; it is a wide door. Homeowners who use the timeline — free counselor early, answer on time, mediation seat taken, equity math done — routinely resolve cases without ever seeing an auction. Homeowners who endure the timeline arrive at the same months later with fees compounded and options spent. Same clock, opposite outcomes. The calendar is neutral; the mail-opening habit is not.',
        ],
      },
    ],
    links: [
      { href: '/answers/how-long-does-foreclosure-take-in-nj', label: 'The short-answer version' },
      { href: '/tools/timeline', label: 'Where are you in the process? Free tool' },
      { href: '/statistics', label: 'NJ foreclosure numbers, sourced' },
    ],
  },
  {
    slug: 'final-judgment-to-sheriff-sale-how-long-nj',
    title: 'How Long Between Final Judgment and Sheriff Sale in NJ?',
    description:
      'The judgment-to-auction gap: what has to happen procedurally, why counties differ so much, and how to use the weeks the sequence guarantees.',
    tldr:
      'There is no single statewide number: after final judgment the court issues a writ of execution, and the county sheriff then schedules, advertises, and notices a sale — a sequence that takes weeks at minimum and often months, varying widely by county backlog. The gap is usable time: two 30-day homeowner adjournments generally remain available, a sale you close before auction pays the judgment and keeps remaining equity yours, and the 10-day redemption window follows even a completed sale.',
    published: PUB,
    updated: PUB,
    minutes: 5,
    theme: 'timing',
    sections: [
      {
        h: 'Why the answer is "it depends on your county"',
        body: [
          'The procedure is fixed — judgment, writ of execution to the sheriff, scheduling, mandated advertising, formal notice of sale — but the calendar belongs to each county sheriff’s office and its backlog. Some counties list sales weeks out; others run months behind. That is why our sheriff pages track each county’s sources and rules separately, and why the only date that matters is the one on your notice, verified against the county’s own listings.',
        ],
      },
      {
        h: 'Using the gap deliberately',
        body: [
          'Call the sheriff’s foreclosure unit as soon as judgment enters and ask two questions: is a sale scheduled, and what is the exact homeowner-adjournment procedure and fee. New Jersey practice generally allows two adjournments of up to 30 days each, and lender adjournments during active loss-mitigation review are routine on top of that. Meanwhile, run the decisive arithmetic: judgment payoff versus realistic market price. If equity exists, the gap is exactly long enough for a determined sale — cash closings measure in weeks, and even listed sales fit when started immediately.',
        ],
      },
      {
        h: 'If the date arrives anyway',
        body: [
          'The sequence keeps its shape to the end: redemption for 10 days after the sale by paying the judgment in full, surplus funds above the judgment held by the court for the former owner, and possession transferring only through a separate court process with notice. The judgment-to-sale gap is the last broad stretch of usable time in the case. Its width varies; its usefulness is entirely about how early inside it you start moving.',
        ],
      },
    ],
    links: [
      { href: '/sheriff-sales', label: 'Your county’s calendar, rules, and sources' },
      { href: '/documents/final-judgment', label: 'Final judgment, decoded' },
      { href: '/tools/net-proceeds', label: 'Judgment vs. market value: run the math' },
    ],
  },
  {
    slug: 'how-many-times-can-sheriff-sale-be-adjourned-nj',
    title: 'How Many Times Can a Sheriff Sale Be Adjourned in NJ?',
    description:
      'The adjournment rules: what a homeowner can request, what lenders and courts add, county differences, and how to actually use postponed weeks.',
    tldr:
      'New Jersey practice generally gives a homeowner two adjournments of up to 30 days each, requested through the county sheriff’s office under its local procedure and fee. On top of that, lenders adjourn sales routinely — especially during active loss-mitigation review — and courts can order further postponements for cause. Sale dates move constantly; the skill is not just getting weeks but spending them on something that ends the case: a closing, a completed workout, a confirmed modification.',
    published: PUB,
    updated: PUB,
    minutes: 5,
    theme: 'timing',
    sections: [
      {
        h: 'The three sources of postponement',
        body: [
          'First, the homeowner’s own statutory adjournments: generally two, up to 30 days each, requested through the sheriff’s office — each county has its own form, deadline and modest fee, which is why calling the foreclosure unit early matters. Second, the lender’s: plaintiffs adjourn sales all the time, particularly while reviewing a complete loss-mitigation application. Third, the court’s: for genuine cause — a closing days away, a workout pending signature — a judge can order additional time beyond the standard allotment.',
        ],
      },
      {
        h: 'How to request yours without fumbling it',
        body: [
          'Do the homework before the pressure: call your county sheriff’s foreclosure unit, get the exact procedure, and note any deadline relative to the sale date — showing up the morning of the auction is how adjournments get lost. Keep proof of every request and payment. And if your postponement rationale is a pending application or sale, put the evidence in writing to the lender’s attorney at the same time; lender adjournments often do the work before your own allotment is touched.',
        ],
      },
      {
        h: 'Sixty days is a plan’s worth of time',
        body: [
          'Two homeowner adjournments plus routine lender postponements commonly add up to months. That span fits real endings: a cash sale can close, a listed sale under contract can fund, a modification can finalize, a Chapter 13 filing can restructure the arrears. What the weeks cannot do is help a household that treats them as a snooze button. Decide what the time is buying on the day you request it, and work backward from that date like it is a closing — because ideally, it is.',
        ],
      },
    ],
    links: [
      { href: '/answers/can-i-stop-a-sheriff-sale', label: 'What can actually move a sale date' },
      { href: '/sheriff-sales', label: 'County adjournment rules and contacts' },
      { href: '/sell-house-before-sheriff-sale', label: 'Closing before the auction: how it works' },
    ],
  },
  {
    slug: 'how-long-can-i-stay-after-sheriff-sale-nj',
    title: 'How Long Can I Stay in My Home After a Sheriff Sale in NJ?',
    description:
      'The honest after-sale timeline: redemption, the deed, possession process, cash-for-keys — and why sale day is never moving day in New Jersey.',
    tldr:
      'Nobody is removed on sale day. New Jersey allows a 10-day redemption window after the auction; the sheriff’s deed follows; and even then, possession changes hands only through a court process — a writ of possession and a scheduled, officer-executed lockout with notice. In practice households remain for a meaningful period after a sale, and buyers frequently prefer negotiating a paid, agreed move-out (cash for keys) over the possession process. Tenants in the property keep their own strong NJ protections.',
    published: PUB,
    updated: PUB,
    minutes: 5,
    theme: 'timing',
    sections: [
      {
        h: 'The sequence after the hammer',
        body: [
          'The auction transfers nothing on the spot. First comes the 10-day window in which the former owner can redeem by paying the judgment in full — narrow, but real, and it also frames when the sheriff’s deed to the buyer is delivered. Ownership then changes; occupancy has not. Removing an occupant requires the buyer to pursue possession through the courts, ending (if it comes to that) in a writ of possession and a lockout scheduled and executed by officers, with notice — never a same-day surprise, never a self-help lock change.',
        ],
      },
      {
        h: 'The negotiation most people don’t know they’re in',
        body: [
          'The possession process costs the buyer time and money, which is why cash-for-keys offers exist: payment for a clean, agreed move-out on a certain date. Everything about the offer is negotiable — the amount, the date, the condition terms — and the first number is rarely the last. If time serves you better than money, trade for the later date. Get any agreement in writing before surrendering keys, and never accept a verbal promise as consideration.',
        ],
      },
      {
        h: 'Two more things the timeline owes you',
        body: [
          'If the auction brought more than the judgment, the surplus belongs to you — deposited with the court and waiting on a claim, not the buyer’s windfall and not the lender’s. And if the home has tenants, their leases and NJ protections generally survive the sale; “new owner, everybody out” letters overstate the law badly. The after-sale period rewards the same habit as every earlier stage: know the process, use its clocks, and put nothing important on a handshake.',
        ],
      },
    ],
    links: [
      { href: '/answers/what-happens-after-a-sheriff-sale', label: 'After the sale: the full sequence' },
      { href: '/answers/can-i-get-my-house-back-after-sheriff-sale', label: 'The 10-day redemption, explained' },
      { href: '/tenants', label: 'Tenants’ rights in a foreclosed home' },
    ],
  },
  {
    slug: 'deadline-to-claim-surplus-funds-nj',
    title: 'Is There a Deadline to Claim Surplus Funds in NJ?',
    description:
      'Surplus money from a sheriff sale sits with the court until claimed — but waiting has real costs. How claims work, who else may claim, and why sooner wins.',
    tldr:
      'Surplus funds — auction proceeds above the judgment — are deposited with the court and belong to the former owner, where they generally sit until claimed rather than expiring on a short fuse. But “no short fuse” is not “no urgency”: junior lienholders can claim against the fund, addresses go stale, estates complicate, and percentage-fee “recovery specialists” circle immediately. The claim is a court motion with documentation — genuinely doable with modest help, and worth starting the month the sale confirms.',
    published: PUB,
    updated: PUB,
    minutes: 5,
    theme: 'timing',
    sections: [
      {
        h: 'Where the money actually is',
        body: [
          'When bidding at a sheriff sale exceeds the judgment and costs, the excess does not go to the lender (whose claim is capped by the judgment) or the buyer (who paid it). It is deposited with the court as surplus funds, held for the people with remaining interests in the property — first junior lienholders in priority, then the former owner. It waits there for a claim. Unclaimed surplus is the most routinely abandoned asset in the entire foreclosure process, usually because nobody told the former owner it exists.',
        ],
      },
      {
        h: 'Why sooner beats later, even without a cliff',
        body: [
          'Three practical clocks run even when no statute is about to slam shut. Junior creditors — second mortgages, HOA liens, judgment holders — can assert claims against the fund, and unanswered claims shape what remains. Notices go to addresses that stop being yours the month you move. And time turns simple claims into complicated ones: owners pass away and the claim becomes an estate matter, co-owners scatter, documents get lost. Meanwhile the “asset recovery” industry mines sale results and mails contracts taking a large percentage for filing what is, at bottom, a motion.',
        ],
      },
      {
        h: 'How a claim actually works',
        body: [
          'The mechanics are a court application: establishing who you are, your interest in the property, and the fund’s status, served on the parties entitled to notice. Many former owners handle it with limited help; a lawyer’s flat fee is money well spent on larger funds and estate situations, and it is a fraction of the recovery-firm percentage. Our surplus funds guide walks the sequence. If a sale in your past brought more than was owed, the money may still be sitting there with your name implied on it. Ask.',
        ],
      },
    ],
    links: [
      { href: '/guides/surplus-funds', label: 'The full surplus-funds guide' },
      { href: '/answers/what-happens-to-my-equity', label: 'What happens to equity in foreclosure' },
      { href: '/answers/what-happens-after-a-sheriff-sale', label: 'The after-sale sequence' },
    ],
  },
  {
    slug: 'can-i-still-sell-before-the-sheriff-sale-date-nj',
    title: 'Can I Still Sell My House Before the Sheriff Sale Date in NJ?',
    description:
      'Yes — a sale that closes before the auction pays the judgment and keeps remaining equity yours. The realistic timelines, and when cash beats a listing.',
    tldr:
      'Yes. Until a sheriff sale actually happens, you own the home and can sell it; a closing before the auction pays the judgment at settlement and every dollar above it is yours, delivered as ordinary sale proceeds instead of a court claims process. The question is arithmetic and calendar: cash buyers close in weeks at below-market prices, listed sales bring more when adjournments buy enough runway. Two 30-day homeowner adjournments generally exist precisely for finishing lines like this.',
    published: PUB,
    updated: PUB,
    minutes: 6,
    theme: 'timing',
    sections: [
      {
        h: 'Why the sale works, mechanically',
        body: [
          'A foreclosure judgment is a debt secured by the property, and a closing satisfies debts at the settlement table: the title company obtains the exact payoff, the judgment and case are paid and discharged from the proceeds, and the buyer takes clean title. Nothing about a pending sale date prevents this — it just sets the deadline. Compare the two endings side by side: an auction pays you nothing directly and routes any excess through a surplus-funds claim; your own closing hands you the equity as a check.',
        ],
      },
      {
        h: 'The calendar math, honestly',
        body: [
          'A cash sale can realistically close in two to three weeks — inside a single adjournment — at a price below market; that discount is the fee for speed and certainty. A listed sale typically brings meaningfully more but needs the longer runway: marketing, contract, buyer financing. New Jersey’s adjournment practice (generally two homeowner postponements of up to 30 days each, plus routine lender adjournments during active workouts) is often exactly the difference that lets a listing finish. Which path wins is not ideology — it is your equity, your date, and your county’s calendar, on one page of math.',
        ],
      },
      {
        h: 'Doing it without getting done',
        body: [
          'Deadline sellers attract predators, so the rules tighten: get a real valuation first (free), compare every offer against it, never sign a deed outside a proper closing with a title company, and treat “we’ll catch up your payments and you can rent it back” as the deed-theft pattern it usually is. Our concierge can bring vetted cash offers to compare, and our related brokerage — disclosed as ours wherever it appears — handles foreclosure-timeline listings when the calendar allows one. Either way: your number first, their number second.',
        ],
      },
    ],
    links: [
      { href: '/sell-house-before-sheriff-sale', label: 'Selling before the sale date: the full page' },
      { href: '/tools/net-proceeds', label: 'What would you walk away with? Free math' },
      { href: '/answers/can-i-sell-my-house-during-foreclosure', label: 'Selling during foreclosure: the short answer' },
    ],
  },
  {
    slug: 'what-is-still-possible-at-each-stage-nj-foreclosure',
    title: 'NJ Foreclosure: What’s Still Possible at Every Stage',
    description:
      'A stage-by-stage inventory of the options that remain — from first missed payment through after the sheriff sale. Later is harder; almost nothing is never.',
    tldr:
      'The honest pattern of a New Jersey foreclosure: options don’t vanish at once, they narrow stage by stage. Before filing, everything works. During the case, answering, mediation, cure (to final judgment), modification and sale all remain. After judgment, adjournments, a controlled sale, and redemption still operate. Even after an auction: the 10-day redemption, surplus funds, negotiated move-out terms. The cost of each passing stage is leverage and money — which is the argument for acting at whichever stage this finds you.',
    published: PUB,
    updated: PUB,
    minutes: 7,
    theme: 'timing',
    sections: [
      {
        h: 'Before a case exists (missed payments, NOI)',
        body: [
          'The full menu, at the lowest prices: repayment plans, forbearance, modification review, refinance where equity and credit allow, or an unhurried market sale. The Notice of Intention’s 30-day window even prices the catch-up amount for you. Most lenders file at around 120 days of delinquency, so the pre-case stretch is long — and it is where free counseling (800-569-4287) converts the most worry into the most fixes.',
        ],
      },
      {
        h: 'During the case (complaint to judgment)',
        body: [
          'The 35-day answer keeps you a participant; the free mediation seat gets a decision-maker to the table; a complete loss-mitigation package carries review protection; and the Fair Foreclosure Act’s cure right runs all the way to entry of final judgment — catching up the arrears generally ends the case even deep into it. Selling remains fully available, with the case simply paid off at closing. Even an entered default can sometimes be vacated for good cause. This is the longest stage, and everything in it works better early.',
        ],
      },
      {
        h: 'After judgment, and even after the sale',
        body: [
          'Judgment fixes the debt and authorizes a sale — and still leaves moves: two 30-day homeowner adjournments as a general matter, routine lender postponements during active review, court-ordered time for cause, and a closing of your own that beats the auction to the finish. After a sale: the 10-day redemption window, surplus funds above the judgment (held by the court, claimable, yours), and a possession process whose timeline accommodates negotiated, often compensated, move-outs. The one option no stage offers is the one silence chooses: letting strangers’ deadlines make the decisions. Whatever stage you are reading this from — this one still has doors. Start with the free ones.',
        ],
      },
    ],
    links: [
      { href: '/answers/is-it-too-late', label: 'Is it too late? The short answer' },
      { href: '/tools/timeline', label: 'Find your stage: free timeline tool' },
      { href: '/compare', label: 'All 7 options, compared honestly' },
    ],
  },
];
