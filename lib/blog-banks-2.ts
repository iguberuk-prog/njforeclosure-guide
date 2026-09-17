// BLOG SERIES: HOW BANKS WORK IN FORECLOSURE, PART 2 — MATH & INCENTIVES (10)
// ---------------------------------------------------------------------------
// Theme: the numbers behind the bank's decisions — NPV tests, investor
// rules, fee accounting, short-sale pricing, distressed-debt markets.
// Discipline: qualitative where programs change, historical events framed
// as history, "talk to a lawyer/tax pro" where individual advice starts.
// ---------------------------------------------------------------------------

import type { TopicPost } from './topic-blog';

const PUB = '2026-09-17';

export const BANKS_POSTS_2: TopicPost[] = [
  {
    slug: 'the-npv-test-how-banks-decide-modifications',
    title: 'The NPV Test: How Banks Really Decide Your Modification',
    description:
      'Modification decisions come from a present-value calculation, not a judgment of character. What goes into the model and how to feed it winning inputs.',
    tldr:
      'When a servicer reviews a modification, software compares two futures in today’s dollars: the expected value of modifying your loan versus the expected value of foreclosing. If the modified loan is worth more, investor rules generally favor approval. The inputs are knowable — your documented income, the property value, arrears, foreclosure costs and timelines — which means applications are winnable on inputs: complete income documentation, realistic property values, and hardship framing with an end date all move the model.',
    published: PUB,
    updated: PUB,
    minutes: 6,
    theme: 'banks',
    sections: [
      {
        h: 'Two futures, discounted',
        body: [
          'The net-present-value test prices both paths. The foreclosure path: a New Jersey judicial timeline of advances (taxes, insurance, legal fees), an auction or REO sale at a discount, all pushed into the future and discounted back. The modification path: your proposed payment stream at modified terms, weighted by the model’s estimate of redefault risk. The comparison is unsentimental in both directions — it does not care about fault, and it also does not care that a human at the bank might feel skeptical of you. The larger of the two numbers tends to win.',
        ],
      },
      {
        h: 'What moves the model',
        body: [
          'In your favor: documented, stable income sufficient for a modified payment (every undocumented side income is value the model cannot see — paper it); a hardship with an arc (event, dates, resolution) that lowers redefault estimates; and New Jersey’s long, expensive judicial timeline, which makes the foreclosure branch costlier here than in fast-track states. Against you: income too thin for any payment the investor may offer, or so much equity that foreclosure recovers the debt easily. Understanding that last point matters: high equity can weaken the modification case even as it strengthens every sale option — the model is telling you which chapter of the playbook you are in.',
        ],
      },
      {
        h: 'Feeding it like a professional',
        body: [
          'Free HUD counselors (800-569-4287) build NPV-aware packages daily: all income sources documented and consistent across forms, expenses honest, the proposed budget arithmetic-checked. If a denial cites the calculation, you are generally entitled to the key inputs on request — and input errors (wrong property value, missed income) are exactly what appeals correct. The deepest reframe: a modification request is not a plea, it is a bid. Make the bid the model can accept.',
        ],
      },
    ],
    links: [
      { href: '/guides/loan-modification', label: 'The modification process, start to finish' },
      { href: '/answers/options-if-behind-on-mortgage', label: 'If the model says no: the other doors' },
      { href: '/tools/net-proceeds', label: 'Your equity input, calculated free' },
    ],
  },
  {
    slug: 'investor-rules-fannie-freddie-fha-va-menus',
    title: 'Investor Rules: Why Your Neighbor Got a Deal You Were Denied',
    description:
      'Fannie, Freddie, FHA, VA and private trusts each publish different workout menus. Finding your menu explains the decisions — and improves your ask.',
    tldr:
      'Servicers do not freelance: the workout menu comes from whoever owns or insures the loan. Fannie Mae and Freddie Mac publish standardized modification and repayment programs; FHA’s menu includes partial claims that move arrears into a junior lien; VA loans add VA-specific options and the VA’s own line (877-827-3702); private securitization trusts allow whatever their documents allow. Same servicer, different investors, different answers — which is why step one of any application is identifying your loan type and asking for its menu by name.',
    published: PUB,
    updated: PUB,
    minutes: 6,
    theme: 'banks',
    sections: [
      {
        h: 'The menus, sketched honestly',
        body: [
          'Agency loans (Fannie/Freddie): published waterfalls with standardized modifications and payment-deferral options, applied by rule rather than negotiation. FHA: a government-insured menu whose signature tool, the partial claim, parks arrears in an interest-advantaged junior lien against the home instead of demanding them up front. VA: servicing options shaped by the veterans’ program, plus direct VA assistance and oversight. Portfolio loans (the bank owns it outright): the most genuine negotiating room, since the decider and the owner are the same. Private-label trusts: bounded by pooling and servicing agreements — sometimes flexible, sometimes rigid, always document-driven. Programs evolve, so treat any specific program name you read anywhere as a starting question, not gospel.',
        ],
      },
      {
        h: 'Finding your menu',
        body: [
          'Clues first: FHA case numbers on your closing documents, a VA guaranty, statements naming the investor. Tools second: Fannie and Freddie both operate public loan-lookup sites. The direct route third: federal rules require the servicer to identify the loan’s owner or assignee on written request. Once known, use the name in every conversation — "I am applying for FHA loss mitigation, including partial-claim review" gets a different processing path than a generic hardship inquiry, and it prevents the commonest silent failure: being reviewed under the wrong menu.',
        ],
      },
      {
        h: 'What this explains — and what it doesn’t excuse',
        body: [
          'Investor rules explain the neighbor paradox, the rigid nos, and the surprising yeses. They do not excuse a servicer reviewing you under the wrong program, failing to name denial reasons, or ignoring the menu’s own options — those are appealable, complainable errors. A free HUD counselor knows the menus cold, and for income-qualifying homeowners LSNJ (1-888-576-5529) knows what the rules entitle you to. In a rule-driven system, the winning move is always the same: learn the rules that govern your file, then ask for exactly what they allow.',
        ],
      },
    ],
    links: [
      { href: '/servicers', label: 'Your servicer, and how to reach loss mitigation' },
      { href: '/guides/loan-modification', label: 'Modifications across the menus' },
      { href: '/professionals', label: 'The free experts in these rules' },
    ],
  },
  {
    slug: 'why-banks-wait-120-days-to-file',
    title: 'Why Banks Wait ~120 Days to File (and What They’re Doing Meanwhile)',
    description:
      'The pre-filing months aren’t mercy — they’re rules and math. What the servicer is required to do early, and how to use the window they create.',
    tldr:
      'Federal servicing rules generally bar starting a foreclosure until a loan is more than 120 days delinquent, and they load the same window with outreach duties: early contact, loss-mitigation information, application solicitation. The bank’s incentives point the same way — collections are cheaper than litigation. For you the period is the cheapest fix the process will ever offer: no legal fees on the arrears yet, full workout menu open, and New Jersey’s own 30-day Notice of Intention still ahead as a second gate.',
    published: PUB,
    updated: PUB,
    minutes: 5,
    theme: 'banks',
    sections: [
      {
        h: 'What the rules require of them early',
        body: [
          'The first months of delinquency are regulated territory: servicers must attempt live contact early in the delinquency, must provide written notice of loss-mitigation options, and generally cannot make the first foreclosure filing until the loan passes 120 days past due. New Jersey adds its own pre-suit gate — the Notice of Intention, at least 30 days before any complaint, stating the exact cure amount. Stack those up and the "sudden" lawsuit is anything but: the system builds a long, mandated on-ramp of warnings and invitations.',
        ],
      },
      {
        h: 'What the bank is actually doing in the window',
        body: [
          'Collections works the account (calls, letters, portal prompts); loss mitigation stands ready to intake applications; default-management systems score the loan and, near the deadline, refer it to foreclosure counsel. The referral is a cost event for them too — legal fees begin, timelines attach, regulatory exposure rises — which is why a credible application landing before referral so often redirects the file. The machine genuinely prefers the cheap resolution in this window; its letters say so because its ledger says so.',
        ],
      },
      {
        h: 'Using the on-ramp instead of watching it',
        body: [
          'Everything is discounted here: reinstatement is smallest (no attorney fees yet), the full menu is open, no public case exists, and your credit damage is still just the lates. The moves are the standing three — call loss mitigation, book the free counselor (800-569-4287), get the numbers on one page — plus one mental shift: those repetitive letters are not harassment to survive but doors the rules forced open. The households that engage inside the 120 days rarely become the case studies for the later stages.',
        ],
      },
    ],
    links: [
      { href: '/answers/how-many-payments-can-i-miss', label: 'The pre-filing clock, in brief' },
      { href: '/documents/notice-of-intention', label: 'The NOI gate that follows' },
      { href: '/free-checklist', label: 'The Week-One Checklist (free PDF)' },
    ],
  },
  {
    slug: 'how-arrears-grow-anatomy-of-a-reinstatement-quote',
    title: 'Anatomy of a Reinstatement Quote: How Arrears Actually Grow',
    description:
      'Line by line through the number that catches you up: missed payments, late charges, advances, legal fees — what’s standard, what’s reviewable, and why it only rises.',
    tldr:
      'A reinstatement quote is missed principal-and-interest plus a stack: late charges, escrow advances the servicer fronted (taxes, insurance), inspection and preservation fees, and — once a case files — attorney fees and court costs allowed by the loan and the court. The stack is why the quote outruns your mental arithmetic, why early cures are cheap and late ones aren’t, and why the document deserves review: itemization is yours to request, and fee errors are disputable in writing (and in the judgment amount itself).',
    published: PUB,
    updated: PUB,
    minutes: 6,
    theme: 'banks',
    sections: [
      {
        h: 'The stack, line by line',
        body: [
          'Base: every missed payment, principal and interest. Late charges: the note’s per-payment percentage, accumulating monthly. Escrow advances: when you stopped paying, the servicer kept paying your taxes and insurance — every dollar advanced joins the arrears, and a lapsed policy triggers force-placed insurance at unfavorable rates. Property charges: those recurring inspections, and preservation work if the home was flagged vacant. Legal: after referral to counsel, the fee schedule and court costs accrue with each milestone. Interest on it all continues throughout. None of this is hidden — it is simply never assembled in one place until you demand the itemized quote.',
        ],
      },
      {
        h: 'Getting and reading the real number',
        body: [
          'Request reinstatement and payoff quotes in writing from the servicer — itemized, with a good-through date (the number expires and re-grows). Read like an auditor: months of missed payments consistent with your records? Escrow advances matched to actual tax and insurance bills? Inspection fees plausible for an obviously occupied home? Legal fees tied to milestones that occurred? Discrepancies go back in writing as disputes — and in an active case, the final judgment stage is precisely where the amounts can be contested, one of several reasons answered cases fare better than silent ones.',
        ],
      },
      {
        h: 'What the anatomy teaches',
        body: [
          'Three lessons fall out of the stack. Time is the largest fee: every month adds layers, so the identical cure costs meaningfully more each quarter — the Fair Foreclosure Act holds the cure door open to final judgment, but the toll rises the whole way. Keep insurance alive if you possibly can: force-placed coverage is the stack’s worst line. And bring the quote, not a guess, to every family conversation, counselor session, and sale calculation — plans built on the real number succeed; plans built on the remembered balance die at the payment window.',
        ],
      },
    ],
    links: [
      { href: '/answers/how-much-to-reinstate-my-mortgage', label: 'Getting the quote, step by step' },
      { href: '/answers/is-it-too-late', label: 'The cure right’s real deadline' },
      { href: '/tools/net-proceeds', label: 'The full payoff in your sale math' },
    ],
  },
  {
    slug: 'escrow-shock-why-your-payment-jumped',
    title: 'Escrow Shock: How Banks Recalculate Your Payment Upward',
    description:
      'Many NJ foreclosures start with a payment jump, not a life event. How escrow analysis works, why NJ taxes drive it, and the fixes at each stage.',
    tldr:
      'Your servicer re-runs escrow annually: when New Jersey property taxes or homeowner’s insurance rose, the new payment covers both next year’s higher bills and last year’s shortage — a double hit that can jump a payment hundreds of dollars and tip a tight budget into default. The mechanics are auditable (read the analysis statement; errors are disputable), the shortage is negotiable (spreading options exist), and if the jump already started a delinquency, the standard playbook applies with one addition: fix the escrow story inside the application.',
    published: PUB,
    updated: PUB,
    minutes: 5,
    theme: 'banks',
    sections: [
      {
        h: 'The mechanics of the jump',
        body: [
          'An escrowed payment has two engines: the loan (fixed, if your rate is) and the escrow account funding taxes and insurance. Annual analysis projects the coming year’s bills; in a state with the nation’s heaviest property taxes, projections rise often. When last year’s bills also exceeded what was collected, a shortage exists — and the new payment includes both the higher go-forward amount and shortage repayment, typically spread across the coming year. Result: the double-hit month where a payment leaps and a budget that survived the old number fails the new one.',
        ],
      },
      {
        h: 'Auditing and softening it',
        body: [
          'The analysis statement shows the projected bills — check them against your actual tax quarterly and insurance premium; errors (a mis-set tax figure, a stale insurance number after you switched carriers) are correctable on request. The shortage component is often flexible: servicers commonly offer longer spreads than the default, and paying the shortage as a lump sum drops the monthly back toward baseline. Attack the underlying bills too: New Jersey’s senior-freeze and property-tax relief programs, tax appeals where assessments outrun reality, and insurance shopping all shrink the engine driving the jump.',
        ],
      },
      {
        h: 'When the jump already caused the default',
        body: [
          'Escrow-shock defaults are common enough that loss-mitigation reviews recognize them: the application should say plainly that the P&I was affordable, the escrow change caused the shortfall, and the requested structure (repayment plan, modification recapitalizing the escrow advance) restores a sustainable payment. Free counselors present exactly this pattern well. And the process rights never depend on why you fell behind — the 35-day answer, mediation, and the cure right apply to an escrow-shock case identically. The jump explains the default; the playbook still decides the outcome.',
        ],
      },
    ],
    links: [
      { href: '/answers/options-if-behind-on-mortgage', label: 'The structures that fix a shortfall' },
      { href: '/servicers', label: 'Where to send the escrow dispute' },
      { href: '/free-checklist', label: 'The 45-Day Playbook (free PDF)' },
    ],
  },
  {
    slug: 'how-banks-price-short-sale-approvals',
    title: 'How Banks Decide to Approve a Short Sale (and at What Price)',
    description:
      'Short-sale approvals run on valuations and net-sheet math, not sympathy. BPOs, minimum nets, junior-lien haggling — the process from the approval desk.',
    tldr:
      'A short sale asks the investor to accept less than it is owed, so the file runs on valuation and net math: the servicer orders its own opinion of value (typically a broker price opinion), the investor sets a minimum acceptable net from it, and your buyer’s offer is tested against that floor after closing costs. Approvals happen when the net beats the foreclosure alternative; disputes are usually valuation disputes, which are contestable with better comparables. Get the deficiency waiver in writing — it is the seller’s real prize.',
    published: PUB,
    updated: PUB,
    minutes: 6,
    theme: 'banks',
    sections: [
      {
        h: 'The approval machinery',
        body: [
          'Your hardship package opens the file; the valuation decides it. The servicer commissions a BPO or appraisal, the investor’s rules convert that value into a minimum net proceeds figure, and the contract on the table is measured against it: offer price, minus commissions, taxes, and negotiated costs, equals net — above the floor and the math works, below it and you get a counter or a denial. The whole review repeats the NPV logic of modifications with a different question: does this sale, today, beat what foreclosure-plus-REO would eventually recover?',
        ],
      },
      {
        h: 'Where deals die, and the fixes',
        body: [
          'Valuation gaps kill the most deals: an optimistic BPO sets an unmeetable floor. The remedy is a documented value dispute — recent true comparables, condition photos and contractor bids the drive-by BPO never saw. Junior liens kill the rest: the second mortgage or HELOC must release its lien, typically for a negotiated payment from the proceeds, and that side deal has its own approval clock. The rest is stamina — approvals expire, buyers walk, files re-open. An agent experienced specifically in short sales earns their commission here; interview for that experience directly.',
        ],
      },
      {
        h: 'The seller’s scoreboard',
        body: [
          'You are not paid in price — you are paid in terms. The items that matter: an explicit written waiver of any deficiency (New Jersey’s deficiency mechanics make pursuit uncommon, but written is written); relocation assistance where programs offer it; the credit reading (settled-for-less generally sits softer than a completed foreclosure); and a closing date your household can actually execute. Ask your tax professional about the forgiven balance before you sign — canceled debt can generate a 1099, and the insolvency rules that often neutralize it are exactly a preparer’s territory.',
        ],
      },
    ],
    links: [
      { href: '/guides/short-sale', label: 'The short sale guide, start to finish' },
      { href: '/answers/do-i-qualify-for-a-short-sale', label: 'Do you qualify? The short answer' },
      { href: '/tools/net-proceeds', label: 'Short or not? Run your equity first' },
    ],
  },
  {
    slug: 'why-banks-pay-cash-for-keys',
    title: 'Why Banks Pay You to Leave: Cash for Keys From Their Side',
    description:
      'Cash-for-keys is the bank buying its cheapest path to a clean, empty house. The cost math behind the offer — and the negotiating room it implies.',
    tldr:
      'After a sale or deed-in-lieu, the new owner’s alternative to your cooperation is the court possession process: months of carrying costs, legal fees, and the condition risk of an involuntary departure. Cash-for-keys prices that avoidance — payment for leaving on an agreed date, broom-clean, keys handed over. Because the offer is math, it is negotiable on every axis: amount, date, and terms. Get it in writing, never surrender keys before funds and agreement align, and remember tenants have separate rights no key money erases.',
    published: PUB,
    updated: PUB,
    minutes: 5,
    theme: 'banks',
    sections: [
      {
        h: 'The buyer’s alternative, priced',
        body: [
          'Whoever now owns the property — REO department or auction investor — wants one thing: a vacant, undamaged, marketable house, soon. The legal path there runs through possession proceedings with notice and scheduling, while taxes, insurance, maintenance and financing costs tick monthly, and involuntary departures correlate with worse property condition. Sum it and the institution’s spreadsheet happily pays four figures to skip the sequence. The offer that feels like charity or insult is neither; it is the cheaper column in a two-column comparison.',
        ],
      },
      {
        h: 'Negotiating inside their math',
        body: [
          'Your leverage is exactly their avoided cost, so use its axes. Amount: opening offers are openings; counter with your actual relocation arithmetic (deposit, first month, movers). Time: if a later date serves you better than more money, trade for the date — time is often cheaper for them to give than cash. Terms: define broom-clean concretely, list what stays, get utilities-and-inspection logistics in writing. The one non-negotiable is sequencing: signed agreement first, funds arranged as agreed, keys last. Verbal promises are not consideration.',
        ],
      },
      {
        h: 'The boundaries around the deal',
        body: [
          'Cash-for-keys settles possession, nothing else: any surplus funds from the auction remain yours to claim separately, and signing a move-out agreement does not waive them. Tenants hold independent New Jersey protections that a landlord’s foreclosure does not void — a tenant offered key money is choosing between real alternatives and deserves independent advice, not pressure. And if an occupant needs more time than any offer contemplates, the possession process itself runs on court schedules with notice — knowledge that keeps the negotiation honest on both sides of the table.',
        ],
      },
    ],
    links: [
      { href: '/answers/what-happens-after-a-sheriff-sale', label: 'The possession timeline behind the offer' },
      { href: '/tenants', label: 'Tenants: separate rights, separate advice' },
      { href: '/guides/surplus-funds', label: 'The money a move-out never waives' },
    ],
  },
  {
    slug: 'mers-assignments-and-the-right-to-foreclose',
    title: 'MERS, Assignments, and Who Has the Right to Foreclose',
    description:
      'Notes, mortgages, MERS and assignment chains — how loan transfers work on paper, what standing means in NJ, and where real defenses live.',
    tldr:
      'Modern mortgages travel: notes endorse from lender to lender, mortgage records often ride through MERS (an industry registry that stands in the county records as nominee), and the plaintiff at your courthouse must have the right to enforce the note — standing — under New Jersey law. Documentation defects are real and litigated; they are also technical, fact-specific, and evaluated by lawyers, not blog posts. The honest frame: chain-of-title questions belong on your attorney’s checklist, and they buy scrutiny and leverage far more often than they erase debts.',
    published: PUB,
    updated: PUB,
    minutes: 6,
    theme: 'banks',
    sections: [
      {
        h: 'How a loan travels on paper',
        body: [
          'Two documents left your closing: the note (the promise to pay) and the mortgage (the lien securing it). Notes move by endorsement and delivery as loans are sold into pools; mortgages historically required a recorded assignment for each transfer, which the industry streamlined by creating MERS — a registry named in county records as the lenders’ nominee while beneficial ownership trades electronically behind it. When foreclosure comes, the trust or bank filing suit typically holds the endorsed note and records an assignment from MERS into its own name. That is the standard machinery behind the unfamiliar plaintiff on your complaint.',
        ],
      },
      {
        h: 'What standing means in an NJ courtroom',
        body: [
          'New Jersey requires the foreclosing party to have the right to enforce the note — through possession of the properly endorsed instrument or a valid assignment — measured at the relevant time. Defects happen: gaps in endorsement chains, assignments with problematic dates or signatures, lost-note claims requiring proof. The robo-signing era made document integrity a live judicial concern, and courts scrutinize accordingly. What defects yield varies with the facts: dismissal and refiling, delayed timelines, negotiating leverage — and sometimes nothing, where the paperwork holds. The debt itself rarely evaporates; the question is whether this plaintiff, on these papers, can proceed now.',
        ],
      },
      {
        h: 'The honest playbook',
        body: [
          'Chain-of-title review belongs inside a filed answer and a lawyer’s analysis — LSNJ (1-888-576-5529) for income-qualifying homeowners, or private foreclosure defense counsel — where a real defect becomes a real motion. What it should never become: a reason to skip the 35-day answer while researching internet theories, or money paid to "audit" firms selling securitization reports that courts do not credit (upfront-fee versions are generally illegal besides). Ask for the loan’s owner in writing, hand every document to whoever represents you, and let standing questions do what they honestly do: add scrutiny, time, and bargaining position to a case you are already defending properly.',
        ],
      },
    ],
    links: [
      { href: '/answers/why-is-a-bank-i-never-heard-of-suing-me', label: 'The unfamiliar plaintiff, explained' },
      { href: '/answers/do-i-need-a-lawyer', label: 'Where defenses actually get evaluated' },
      { href: '/scams', label: '"Audit" firms and other paid mirages' },
    ],
  },
  {
    slug: 'the-robo-signing-era-and-what-it-changed',
    title: 'The Robo-Signing Era: What It Was and What It Changed for You',
    description:
      'The 2010-era document scandal reshaped foreclosure practice — national settlements, servicing rules, NJ court scrutiny. The protections you inherited.',
    tldr:
      'Robo-signing — mass-produced foreclosure affidavits signed without the personal knowledge they swore to — surfaced around 2010, froze dockets, and produced national settlements, federal servicing standards, and heightened judicial scrutiny; New Jersey’s courts pressed lenders on document integrity directly. The inheritance for today’s homeowner: certification requirements, the loss-mitigation and dual-tracking rules, error-resolution rights, and courts that take paperwork challenges seriously. History is context and leverage, not a magic wand — current cases turn on current documents.',
    published: PUB,
    updated: PUB,
    minutes: 6,
    theme: 'banks',
    sections: [
      {
        h: 'What actually happened',
        body: [
          'Foreclosure volume after 2008 collided with document shortcuts: employees signing thousands of sworn affidavits monthly attesting to file knowledge they did not have, questionable notarizations, and assignment paperwork produced to fit. When depositions exposed the practice around 2010, major servicers paused foreclosures nationwide, attorneys general opened investigations, and the largest servicers entered a landmark national settlement carrying billions in relief and binding servicing standards. New Jersey’s judiciary conducted its own reckoning, demanding demonstrations of process integrity from major foreclosers before their cases proceeded.',
        ],
      },
      {
        h: 'The rules you inherited from it',
        body: [
          'The era’s legacy is structural. Federal mortgage-servicing regulations now codify much of what settlements demanded: the 120-day pre-filing delinquency threshold, loss-mitigation review duties, dual-tracking restrictions, single-point-of-contact expectations, and formal error-resolution channels with deadlines. Courts — New Jersey’s notably — treat affidavit and certification integrity as a live requirement rather than a formality. And the CFPB exists as a documented complaint channel with servicer response obligations. Every one of these is a tool in an ordinary homeowner’s case today.',
        ],
      },
      {
        h: 'Using history without being used by it',
        body: [
          'The productive use: know that document scrutiny is legitimate, that your lawyer’s review of affidavits and assignments has judicial precedent behind it, and that servicing-rule violations have real remedies. The trap: a cottage industry still sells robo-signing nostalgia — "audit" reports, guaranteed-dismissal theories, upfront fees for magic. Modern cases are decided on their own paperwork, which post-reform is usually (not always) cleaner. Let the era inform your diligence and your counsel’s checklist, and let the free machinery — answers, mediation, LSNJ at 1-888-576-5529 — do what it demonstrably does.',
        ],
      },
    ],
    links: [
      { href: '/answers/do-i-need-a-lawyer', label: 'Document review that counts' },
      { href: '/scams', label: 'The nostalgia industry to avoid' },
      { href: '/statistics', label: 'NJ foreclosure, by the numbers' },
    ],
  },
  {
    slug: 'what-a-defaulted-loan-is-worth-npl-market',
    title: 'What Your Defaulted Loan Is Worth: Inside the NPL Market',
    description:
      'Non-performing loans trade at discounts to investors who profit by resolving them. What your debt sold for shapes what its new owner will accept.',
    tldr:
      'Defaulted mortgages are a traded asset class: investors buy non-performing loans (NPLs) at discounts to face value, betting they can resolve them — reperformance, workout, or foreclosure — for more than they paid. If your loan sold mid-delinquency, its new owner’s cost basis is below your balance, which sometimes means more workout flexibility than the original lender showed. Your rights ride along unchanged; the practical move is treating the transfer as a fresh negotiation window, probed through counsel, mediation, or a complete new application.',
    published: PUB,
    updated: PUB,
    minutes: 6,
    theme: 'banks',
    sections: [
      {
        h: 'Why anyone buys broken loans',
        body: [
          'A loan nobody has paid in a year still owns two things: a claim on a New Jersey house and a menu of possible endings. Funds specializing in distressed debt buy pools of such loans at discounts reflecting the delinquency, the timeline, and the collateral, then work each file toward whichever ending beats their basis — a modification that gets payments flowing (a reperforming loan resells at a markup), a negotiated exit, or foreclosure where nothing else lands. The original lender books its loss and moves on; the specialist inherits both your file and, importantly, room to deal the originator lacked.',
        ],
      },
      {
        h: 'What the discount means at your kitchen table',
        body: [
          'An owner into your $300,000 balance at a steep discount can accept outcomes the par-value owner’s spreadsheet rejected — a deeper modification, a short payoff, a settlement — and still profit. None of that is guaranteed generosity: some NPL buyers run efficient foreclosure mills, and their economics also reward speed. The signal to take: ownership change reopens the question. A fresh, complete loss-mitigation application, a mediation session with the new decision-maker’s representative, or counsel’s direct inquiry into settlement appetite are all properly timed the month the transfer notices arrive.',
        ],
      },
      {
        h: 'Your rights against the new holder',
        body: [
          'Nothing about a trade diminishes the process: transfer notices are owed to you, payments in the transition window are protected, the loan’s terms are unchanged, and every New Jersey stage right — answer, mediation eligibility, cure to final judgment, adjournments, surplus funds — binds the new holder exactly as the old. Verify the new servicer’s contacts independently (our directory helps), re-send your record so nothing pending disappears in the seam, and treat any collector-style pressure tactics as the compliance question they are. The market traded your loan. It did not trade your standing.',
        ],
      },
    ],
    links: [
      { href: '/answers/why-is-a-bank-i-never-heard-of-suing-me', label: 'New names on old debts, explained' },
      { href: '/servicers', label: 'Verifying the new servicer’s contacts' },
      { href: '/answers/what-is-the-mediation-program', label: 'The table where new owners show appetite' },
    ],
  },
];
