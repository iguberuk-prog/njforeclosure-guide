// BLOG SERIES: HOW BANKS WORK IN FORECLOSURE, PART 3 — NEGOTIATING (10 posts)
// ---------------------------------------------------------------------------
// Theme: working the machine — call craft, formal rights (SPOC, error
// resolution, CFPB/NJ DOBI), mediation behavior, short sale / DIL / payoff
// negotiations, bankruptcy's effect, REO aftermath. Same discipline: facts,
// no promises, lawyers where lawyers belong.
// ---------------------------------------------------------------------------

import type { TopicPost } from './topic-blog';

const PUB = '2026-09-17';

export const BANKS_POSTS_3: TopicPost[] = [
  {
    slug: 'how-to-talk-to-your-mortgage-servicer',
    title: 'How to Talk to a Mortgage Servicer So the File Actually Moves',
    description:
      'Call craft for the loss-mitigation line: what to say, what to write down, which questions force real answers, and the sentence that changes reviews.',
    tldr:
      'Servicer calls reward preparation and documentation, not emotion: have your loan number, ask questions with checkable answers ("Is my application complete as of today? What exactly is missing?"), log every call (date, name, reference number), and confirm anything that matters in writing afterward. Say the operative words plainly — "loss mitigation," "I am requesting a review for all available options," your loan type if you know it. The reps are reading screens; your job is getting the right things onto them.',
    published: PUB,
    updated: PUB,
    minutes: 6,
    theme: 'banks',
    sections: [
      {
        h: 'Before you dial',
        body: [
          'Assemble the two-minute kit: loan number, property address, last statement, your call log, and the specific outcome this call is for — one call, one objective. Know your loan type if you can (FHA, VA, conventional), because it routes the review. And set the emotional dial in advance: the person answering did not cause your situation and cannot be argued into authority they lack, but they can be guided into accurate data entry, correct routing, and useful disclosures — which is the actual game.',
        ],
      },
      {
        h: 'The questions that force real answers',
        body: [
          'Vague questions get script answers; checkable questions get facts. Use these: "Is my loss-mitigation application complete as of today — and if not, list exactly what is missing." "What is the status and expected decision date of my review?" "Has my loan been referred to foreclosure counsel, and if so, to whom?" "Please send a written, itemized reinstatement quote with its good-through date." "Who is my single point of contact and their direct line?" End every call the same way: "Please note the account with what we discussed," then write your own note — date, time, name or ID, reference number, substance.',
        ],
      },
      {
        h: 'After you hang up',
        body: [
          'Anything consequential gets a written echo: a short message through the portal (screenshotted) or letter summarizing what was said and asked. Not paranoia — memory. Reviews take weeks, reps rotate, and the account notes are terse; your paper trail is the continuity, and it is precisely what mediators, judges, and complaint reviewers credit later. If calls persistently contradict each other or promised items never arrive, escalate on paper: the formal error-resolution letter and the CFPB complaint exist for exactly that pattern. And bring in the free professional: HUD counselors (800-569-4287) speak fluent servicer daily.',
        ],
      },
    ],
    links: [
      { href: '/servicers', label: 'Every servicer’s loss-mit line, verified' },
      { href: '/free-checklist', label: 'The 45-Day Playbook (free PDF)' },
      { href: '/professionals', label: 'The free interpreters: HUD counselors' },
    ],
  },
  {
    slug: 'single-point-of-contact-your-servicing-rights',
    title: 'Your Single Point of Contact: The Servicing Right Nobody Uses',
    description:
      'Delinquent borrowers are supposed to get continuity of contact — a person or team accountable for the file. What the rule provides and how to invoke it.',
    tldr:
      'Federal servicing standards expect servicers to assign delinquent borrowers continuity of contact — personnel (a named individual or dedicated team) who know the file, can state application status accurately, and connect you to decisions. In practice you often must invoke it: ask for your single point of contact by name and direct line, route substantive questions there, and document when the answers contradict. A functioning SPOC collapses the call-center roulette; a dysfunctional one, documented, becomes complaint material that gets attention.',
    published: PUB,
    updated: PUB,
    minutes: 5,
    theme: 'banks',
    sections: [
      {
        h: 'What the rule is for',
        body: [
          'The call-center experience — ten reps, ten answers — is exactly what post-crisis servicing standards targeted: borrowers in loss mitigation are supposed to get assigned personnel with access to the full file, able to say what is missing, what is pending, and what happens next, reachable without re-explaining from zero. Some servicers implement it as a named relationship manager, others as a small dedicated team. Either satisfies the idea; neither helps unless you use it as the spine of your communications.',
        ],
      },
      {
        h: 'Invoking and using yours',
        body: [
          'Ask directly: "Who is my assigned single point of contact for loss mitigation, and what is their direct extension?" Log the answer. Then discipline your own traffic: substantive questions and submissions flow through the SPOC channel (with your usual written echoes), keeping the file’s story in one place. Use general lines only for mechanical tasks. When the SPOC gives you a material answer — application complete, sale on hold, documents received — that is precisely the statement to confirm in writing, because it is the one you will need to quote later.',
        ],
      },
      {
        h: 'When the contact point fails',
        body: [
          'A SPOC who cannot state your status, contradicts the letters, or proves unreachable is not just frustrating — it is a documented servicing failure. Escalate in sequence: a supervisor request on the line; a written notice of error describing the specific contact failures and their consequences; a CFPB complaint attaching your log. New Jersey homeowners can also flag servicing conduct to the state’s banking regulator (DOBI). None of this is ceremony — regulated institutions answer documented complaints with a different part of the building than the call center, and files with records get careful handling.',
        ],
      },
    ],
    links: [
      { href: '/servicers', label: 'The numbers where SPOCs live' },
      { href: '/answers/do-i-need-a-lawyer', label: 'When failures need counsel' },
      { href: '/professionals', label: 'Free help working the channel' },
    ],
  },
  {
    slug: 'what-under-review-actually-means',
    title: '"Your File Is Under Review": What That Actually Means',
    description:
      'Decoding the status phrases — received, incomplete, in review, with the investor, decisioned — and the real timelines and rights behind each one.',
    tldr:
      '"Under review" is a family of different states: received-not-checked, incomplete (parked — the dangerous one that feels safe), complete-and-in-underwriting (the phase with real protections and a decision clock), pending investor response, or decisioned-not-yet-mailed. Your leverage is precision: make the rep name the specific state, the missing items, and the expected decision date, then confirm in writing. Files move when their owners can prove which state they were in, and when.',
    published: PUB,
    updated: PUB,
    minutes: 5,
    theme: 'banks',
    sections: [
      {
        h: 'The states behind the phrase',
        body: [
          'Received: your package arrived and sits in an intake queue — nothing substantive has happened. Incomplete: intake found gaps, a letter may or may not have reached you, and the file is parked; weeks can pass here while you believe you are "in review." Complete / in underwriting: the real phase — verified numbers running the investor’s waterfall, with servicing-rule timelines for a decision and the strongest dual-tracking protections attached. Investor-pending: the servicer awaits an answer two layers up. Decisioned: an outcome exists and is in the mail-merge queue. One phrase covers all five; only one of the five has a clock running in your favor.',
        ],
      },
      {
        h: 'Forcing the precision',
        body: [
          'The script is three questions, asked every time: "Is my application complete as of today — yes or no?" If no: "List each missing or expired item, exactly." If yes: "What date did it become complete, and what is the expected decision date?" Dates matter more than reassurances: completeness dates anchor your protections against any sale, and decision dates create the follow-up calendar. Get the answers echoed in writing (portal message, letter), and refresh aging documents proactively so a long review cannot quietly demote your file back to incomplete.',
        ],
      },
      {
        h: 'When review-limbo becomes a violation',
        body: [
          'Rule-backed reviews have timelines; endless limbo does not get a pass. A complete application acknowledged and then ignored past its window, documents "lost" on a cycle, a sale advancing during confirmed review — each is notice-of-error and CFPB-complaint material, with your log as the exhibit. In an active NJ case, tell the mediator or your counsel precisely which state the file was in on which dates; that specificity is what converts process pain into process leverage. And keep the parallel tracks warm regardless — reviews are one lane, never the whole road.',
        ],
      },
    ],
    links: [
      { href: '/answers/can-i-stop-a-sheriff-sale', label: 'Review protections vs. sale dates' },
      { href: '/servicers', label: 'Where your file actually sits' },
      { href: '/free-checklist', label: 'The Week-One Checklist (free PDF)' },
    ],
  },
  {
    slug: 'escalating-when-the-servicer-stalls',
    title: 'Escalating a Stalled Servicer: Notices of Error, CFPB, NJ DOBI',
    description:
      'When calls stop working, formal channels start: the RESPA error letter with legal deadlines, the CFPB portal, and New Jersey’s banking regulator.',
    tldr:
      'Three escalation tools outrank any phone call. A written notice of error (or request for information) to the servicer’s designated address triggers legal duties to acknowledge, investigate, and respond on defined timelines. A CFPB complaint routes through a federal portal servicers must answer, creating a permanent record. New Jersey’s Department of Banking and Insurance takes consumer complaints about conduct in the state. Use them in that order, attach your log, and keep every response — escalation records are also litigation and mediation exhibits.',
    published: PUB,
    updated: PUB,
    minutes: 6,
    theme: 'banks',
    sections: [
      {
        h: 'The RESPA letters: your formal lever',
        body: [
          'Federal law gives mortgage borrowers two formal instruments. The notice of error: a letter identifying you, the loan, and the specific error — misapplied payments, mishandled application, wrongful fees, failure to honor a review — which the servicer must acknowledge and then investigate and answer within regulated windows. The request for information: same mechanics, demanding records (payment history, the loan’s owner, escrow accounting). Two details carry the power: send to the servicer’s designated address for such notices (published on statements and websites — a letter elsewhere may not trigger the duties), and describe the error concretely with dates. Vague grievance letters get vague answers; specified errors get investigations.',
        ],
      },
      {
        h: 'The regulators: CFPB and NJ DOBI',
        body: [
          'The CFPB’s complaint portal (consumerfinance.gov) forwards your complaint to the servicer, which is expected to respond — typically within weeks — with the exchange preserved on record. It works best attached to specifics: your timeline, the unanswered notice of error, the contradiction between letters. New Jersey’s Department of Banking and Insurance fields complaints about entities operating in the state and adds state-level attention to a documented pattern. Neither regulator is your lawyer or your advocate in the case — think of them as spotlights: files under a spotlight get handled by more careful hands.',
        ],
      },
      {
        h: 'Escalation as case-building',
        body: [
          'Every escalation artifact — the notice of error, the acknowledgment, the response or the silence, the CFPB thread — is evidence with a timestamp. In mediation it reads as diligence; in court, servicing-rule violations can support real remedies through counsel (LSNJ at 1-888-576-5529 for income-qualifying homeowners); in negotiation it changes your handling. Two cautions keep it honest: escalate real errors, not disappointment with lawful denials — the tools lose force when aimed at outcomes rather than conduct; and never let escalation replace the parallel tracks. The complaint is pressure. The application, the answer, and the sale math remain the plan.',
        ],
      },
    ],
    links: [
      { href: '/answers/do-i-need-a-lawyer', label: 'When violations become remedies' },
      { href: '/servicers', label: 'Designated addresses and portals' },
      { href: '/professionals', label: 'Free help drafting the letters' },
    ],
  },
  {
    slug: 'how-banks-behave-in-nj-foreclosure-mediation',
    title: 'How Banks Behave in NJ Foreclosure Mediation (and How to Use It)',
    description:
      'The lender’s side of the mediation table: who they send, what authority means, which proposals move them, and how prepared homeowners win sessions.',
    tldr:
      'In New Jersey’s free mediation program the lender must appear through counsel with a representative having settlement authority — someone who can actually commit to terms, not just record requests. Their behavior is procedural: they respond to complete financial packages and concrete proposals, defer to investor rules, and treat sessions as file checkpoints. Prepared homeowners flip that: a documented budget, a specific ask, and a counselor-built package turn the checkpoint into a decision. Unprepared sessions adjourn; prepared ones produce terms.',
    published: PUB,
    updated: PUB,
    minutes: 6,
    theme: 'banks',
    sections: [
      {
        h: 'Who actually shows up for the bank',
        body: [
          'Expect two functions on their side of the (often virtual) table: the foreclosure firm’s attorney handling procedure, and a servicer representative designated with settlement authority — the program’s requirement that someone present can commit, within investor rules, to a modification review outcome, a repayment structure, or timeline agreements. "Within investor rules" is the honest boundary: the representative cannot rewrite an FHA waterfall or a trust’s constraints. What the requirement really guarantees is the thing phone queues never provide — a person whose yes counts, obligated to engage your file specifically.',
        ],
      },
      {
        h: 'What moves their side',
        body: [
          'Bank representatives respond to what their systems can process: a complete, current financial package (the same documents a loss-mitigation review needs — mediation and review run on one file); a proposal with numbers ("we can pay $X monthly starting [date]; we request review for [specific structure]"); and evidence of parallel diligence — an answer filed, applications submitted, valuations in hand. What stalls sessions: missing documents (instant adjournment), venting (noted, ignored), and open-ended requests to "see what they can do." The housing counselor the program provides exists precisely to arrive with the package that processes.',
        ],
      },
      {
        h: 'Getting the most from the room',
        body: [
          'Treat outcomes as agreements with dates: a modification review completing by when, a sale postponement to which date, trial payments starting which month — captured in the session’s record. If their side arrives without authority or without having reviewed documents you can prove were submitted, say so to the mediator plainly; program expectations are themselves leverage. Sessions can recur, so end each with defined homework for both sides. And remember what the free seat is worth: homeowners rarely get the decision-layer’s attention outside this room. Walk in with the file that deserves it.',
        ],
      },
    ],
    links: [
      { href: '/answers/what-is-the-mediation-program', label: 'The program: eligibility and requesting it' },
      { href: '/professionals', label: 'The free counselor who preps the package' },
      { href: '/guides/loan-modification', label: 'The structures on the table' },
    ],
  },
  {
    slug: 'negotiating-a-short-sale-with-the-bank',
    title: 'Negotiating a Short Sale With the Bank, Move by Move',
    description:
      'The seller’s negotiation map: assembling the file, surviving the valuation, working junior liens, and the written terms that make the deal worth it.',
    tldr:
      'A short sale negotiation runs on four tracks: your hardship file (complete, current, consistent), the valuation contest (their BPO versus your documented reality), the junior liens (whose releases are separate deals), and the terms sheet — where the deficiency waiver in writing, relocation assistance, and a workable closing date are the seller’s real winnings. Expect approval letters with expiration dates and at least one buyer’s patience to be tested. An agent with genuine short-sale experience is the difference between a marathon and a maze.',
    published: PUB,
    updated: PUB,
    minutes: 6,
    theme: 'banks',
    sections: [
      {
        h: 'Opening the file strong',
        body: [
          'The bank’s side cannot say yes to what it cannot process, so the opening package decides the pace: hardship letter with dates and arc, full financials matching your documents, the listing history showing real market exposure, and the contract with a pre-qualified buyer. Consistency is quietly critical — numbers that disagree across forms trigger re-verification loops. List with an agent who has closed short sales specifically and ask them how many; this transaction type punishes on-the-job training, and interviewing for it is standard advice we give even about our own related brokerage.',
        ],
      },
      {
        h: 'The two negotiations inside the negotiation',
        body: [
          'Valuation: the servicer’s BPO sets the minimum net, and optimistic BPOs kill viable deals — counter with a documented dispute: true recent comparables, condition photography, contractor estimates for what the drive-by never saw. Persistence matters; valuation disputes are routine, not rude. Junior liens: every second mortgage, HELOC, or judgment holder must release for the closing to happen, typically for negotiated payments from proceeds, each with its own approval clock and paperwork. Start the junior conversations early and in parallel — the classic short-sale death is a first-lien approval expiring while a second lien dithers.',
        ],
      },
      {
        h: 'The terms that pay the seller',
        body: [
          'Price belongs to the bank; terms belong to you. Non-negotiables to pursue: the deficiency waived in explicit writing (satisfaction language in the approval letter — New Jersey’s deficiency mechanics already disfavor pursuit, and written closes the question); relocation assistance where the investor’s program offers it; approval validity long enough to actually close; and clarity on how the forgiven balance will be reported. Then the professional consults: a tax preparer on 1099 consequences before signing, and an attorney’s read of the approval letter — flat-fee reviews are cheap against six-figure documents. A short sale done this way trades equity you did not have for a clean, negotiated landing. That is the win condition; collect all of it.',
        ],
      },
    ],
    links: [
      { href: '/guides/short-sale', label: 'The full short-sale guide' },
      { href: '/answers/do-i-qualify-for-a-short-sale', label: 'Qualifying, in brief' },
      { href: '/answers/can-the-bank-sue-me-for-the-difference', label: 'Deficiency: why the waiver matters' },
    ],
  },
  {
    slug: 'deed-in-lieu-when-banks-say-yes',
    title: 'Deed in Lieu: When Banks Say Yes, and What to Demand',
    description:
      'Handing back the keys is a negotiated transaction with prerequisites and terms — not a surrender. When lenders accept, why they refuse, and your checklist.',
    tldr:
      'A deed in lieu — conveying the home to the lender by agreement instead of completing foreclosure — appeals to banks as a shortcut past NJ’s long judicial timeline, but only for clean files: they generally require marketing attempts first and refuse where junior liens cloud title (the foreclosure they were avoiding is the tool that clears those). For you it is a terms negotiation: deficiency waived in writing, a certain move-out date, relocation assistance where offered, and gentler credit reading than a completed foreclosure. Equity holders should almost never choose it — sell instead.',
    published: PUB,
    updated: PUB,
    minutes: 5,
    theme: 'banks',
    sections: [
      {
        h: 'The bank’s yes and the bank’s no',
        body: [
          'The appeal from their chair: a deed in lieu skips months of judicial process, legal spend, and auction uncertainty, delivering the collateral by agreement. The refusals are just as rational: junior liens survive a voluntary conveyance (unlike a first-mortgage foreclosure, which extinguishes their claims on the property), so a home with a second mortgage, HELOC, or judgment liens usually gets a no; and investors typically require evidence the home was listed for sale first — the deed in lieu sits late in their waterfall, after market solutions. Expect an application process resembling loss mitigation: financials, hardship, title search.',
        ],
      },
      {
        h: 'Your checklist before signing',
        body: [
          'This is a conveyance with consideration, and the consideration is terms. In writing: full satisfaction of the debt with any deficiency expressly waived; the agreed occupancy end date (and any relocation assistance the program provides — ask; several investors’ menus include it); condition obligations defined realistically; and how the account will be reported. Consult before executing: a tax professional on cancellation-of-debt consequences, and an attorney’s review of the agreement — LSNJ (1-888-576-5529) for income-qualifying homeowners. A deed is the most powerful document you own; it leaves your hands once, on terms collected in advance or never.',
        ],
      },
      {
        h: 'Who should — and shouldn’t — take this exit',
        body: [
          'Fits: no meaningful equity, no junior liens, a household ready for a certain, dignified end date without auction theater, after market attempts confirmed the math. Does not fit: anyone with real equity — a deed in lieu conveys the whole property to satisfy the debt, surrendering value a sale would have returned as a check; run the calculator before any conversation. And the perimeter warning stands: the legitimate deed in lieu is negotiated with your lender through its documented program. The stranger offering to "take the deed off your hands" is running a different transaction entirely, and it is the one our scams page opens with.',
        ],
      },
    ],
    links: [
      { href: '/answers/what-is-a-deed-in-lieu', label: 'Deed in lieu, in brief' },
      { href: '/tools/net-proceeds', label: 'The equity check that comes first' },
      { href: '/scams', label: 'Deed offers that aren’t this' },
    ],
  },
  {
    slug: 'bankruptcy-through-the-banks-eyes',
    title: 'Bankruptcy Through the Bank’s Eyes: The Stay and What Follows',
    description:
      'A bankruptcy filing stops the machine mid-motion. How lenders respond — stay relief, plan treatment, arrears math — and why timing is everything.',
    tldr:
      'A bankruptcy filing triggers the automatic stay: the foreclosure, including a scheduled sheriff sale, halts immediately. The bank’s machine shifts tracks — its bankruptcy counsel monitors the case, may move for relief from the stay, and in Chapter 13 evaluates your plan’s treatment of the mortgage arrears (which a confirmed plan can catch up over three to five years while ongoing payments resume). It is powerful, technical, credit-serious, and completely dependent on execution — a bankruptcy attorney’s territory from the first question, never a midnight DIY filing.',
    published: PUB,
    updated: PUB,
    minutes: 6,
    theme: 'banks',
    sections: [
      {
        h: 'The stay, from their side of the wall',
        body: [
          'The moment a petition files, federal law freezes collection: the sheriff sale comes off the calendar, the foreclosure case pauses, the calls stop. Inside the bank, the file moves from foreclosure counsel to bankruptcy counsel, whose options are procedural: file a proof of claim stating the debt, monitor your case’s progress, and — where grounds exist — move for relief from the stay to resume foreclosing. Grounds they argue: no equity cushion protecting their interest, missing post-filing mortgage payments, or filings that look like pure delay (repeat filings shrink or eliminate the stay’s protection by statute — a critical fact the desperate rarely hear).',
        ],
      },
      {
        h: 'Chapter 13: the structure banks actually respect',
        body: [
          'For homeowners protecting a house, Chapter 13’s core mechanic matters most: a confirmed plan can cure mortgage arrears over the plan’s three-to-five-year life while you resume ongoing payments — converting an impossible lump-sum reinstatement into a scheduled catch-up the lender must accept if the plan meets the code’s requirements. The bank’s posture becomes compliance-watching: are plan payments and post-petition mortgage payments both current? Falling behind inside the plan revives their remedies. Chapter 7 plays differently — powerful for clearing other debts and buying time, but without 13’s cure mechanism, it postpones more than it resolves for the house itself.',
        ],
      },
      {
        h: 'Timing, candor, and counsel',
        body: [
          'Bankruptcy rewards the prepared filing: enough runway to assemble schedules honestly, a plan the budget can actually sustain, and coordination with everything else in motion (a pending modification, a sale in contract — sometimes those finish better without a filing, sometimes only inside one). It punishes the midnight version: emergency petitions to stop a morning sale succeed at stopping it and then collapse for lack of follow-through, spending the stay’s power and the household’s one clean shot. This is attorney territory from the first serious thought — consultations are commonly free, LSNJ (1-888-576-5529) guides income-qualifying homeowners, and our guide covers what to ask. Used deliberately, it is the strongest brake in the system. Used desperately, it is a very expensive pause button.',
        ],
      },
    ],
    links: [
      { href: '/guides/bankruptcy-chapter-13', label: 'Chapter 13 for homeowners, in full' },
      { href: '/answers/does-bankruptcy-stop-foreclosure-in-nj', label: 'The stay, in brief' },
      { href: '/answers/do-i-need-a-lawyer', label: 'Finding bankruptcy counsel' },
    ],
  },
  {
    slug: 'payoff-and-reinstatement-quotes-numbers-banks-must-honor',
    title: 'Payoff and Reinstatement Quotes: Numbers the Bank Must Stand Behind',
    description:
      'The two documents every plan is built on: what each covers, your right to receive them, good-through dates, and disputing the lines that don’t belong.',
    tldr:
      'Two documents anchor every real plan: the reinstatement quote (arrears plus fees — what returns the loan to normal, a right the Fair Foreclosure Act keeps open to final judgment) and the payoff statement (the full balance that releases the lien — what any sale or refinance is built on). You are entitled to them in writing, itemized, with good-through dates; servicers must provide payoff statements promptly on request. Read every line, dispute errors through the formal channels, and never build a closing, a family loan, or a filing on a guess.',
    published: PUB,
    updated: PUB,
    minutes: 5,
    theme: 'banks',
    sections: [
      {
        h: 'Two documents, two different questions',
        body: [
          'Reinstatement answers "what makes this loan current again?": missed payments, late charges, escrow advances, and — post-referral — legal fees and costs. Curing that number, through the door New Jersey holds open until final judgment, generally ends the case. Payoff answers "what makes this loan disappear?": full principal, accrued interest, advances and fees, computed to a specific date with a per-diem for each day after. Title companies close sales on payoff letters; families fund cures on reinstatement quotes. Confusing the two — or planning on either from memory — is how closings crater and rescues fall short.',
        ],
      },
      {
        h: 'Getting them, and reading them like an auditor',
        body: [
          'Request in writing, through the servicer and (in an active case) plaintiff’s counsel, itemized, with the good-through date stated — both numbers grow daily and quotes expire. Then audit: months of arrears against your own records; escrow advances against actual tax and insurance bills; inspection fees against the reality of an occupied home; legal charges against case milestones that actually occurred; on payoffs, the per-diem math itself. Discrepancies are not confrontations — they are written disputes (the notice-of-error channel fits perfectly), and in a case headed to judgment, the amount is contestable before the court fixes it. Errors found late cost real money at closing tables; errors found early cost a letter.',
        ],
      },
      {
        h: 'Building on solid numbers',
        body: [
          'With honest figures in hand, every decision sharpens: the family-loan conversation has an exact target with an expiration date; the net-proceeds math (value minus payoff minus costs) tells you what a sale truly returns; a refinance application knows its size; even a Chapter 13 plan prices its cure correctly. Refresh quotes before executing anything — a sixty-day-old number is a historical document. And note the quiet leverage: a servicer that must put the number in writing puts discipline on the number. Paper beats phone quotes every single time.',
        ],
      },
    ],
    links: [
      { href: '/answers/how-much-to-reinstate-my-mortgage', label: 'The reinstatement right, in brief' },
      { href: '/tools/net-proceeds', label: 'Payoff into sale math, free' },
      { href: '/answers/is-it-too-late', label: 'How long the cure door stays open' },
    ],
  },
  {
    slug: 'after-the-auction-dealing-with-the-reo-department',
    title: 'After the Auction: Dealing With the Bank’s REO Department',
    description:
      'When the bank wins its own sale, a new counterpart appears. What REO departments want, the offers they make, and the rights that survive into this stage.',
    tldr:
      'When the credit bid wins, your file leaves foreclosure and enters REO — the bank’s owned-real-estate operation, whose only goals are a vacant, marketable property and a clean resale. Expect outreach through asset managers and listing agents, cash-for-keys offers priced against the possession process, and businesslike indifference rather than hostility. Your remaining cards are real: the 10-day redemption window, surplus-funds claims where bidding exceeded the judgment, possession timelines that run through court with notice, tenant protections, and move-out terms worth negotiating in writing.',
    published: PUB,
    updated: PUB,
    minutes: 6,
    theme: 'banks',
    sections: [
      {
        h: 'What REO is, and what it wants',
        body: [
          'REO — real estate owned — is the bank’s inventory shelf: properties acquired at its own auctions, now managed by asset managers juggling portfolios of houses they have never seen, working through local listing agents and preservation vendors. Their scoreboard is simple: days-to-sale and net recovery. Everything they do with you serves it — occupancy checks to learn who is there, cash-for-keys to get vacancy cheaply, property visits to plan the resale. Understanding the indifference helps: nobody there is prosecuting you; you are a line item they will pay to resolve smoothly.',
        ],
      },
      {
        h: 'The negotiation this stage offers',
        body: [
          'The cash-for-keys conversation arrives via door hanger, letter, or the listing agent, and it prices their alternative: a court possession process with notice and scheduling, months of carrying costs, condition risk. Negotiate on all axes — amount against your real relocation costs, date against your actual timeline (their time is often cheaper to give than money), terms defined in writing before any keys move. Tenants change everything: New Jersey protections generally survive the sale, "everybody out" letters overstate the law, and a tenant household should get independent advice before trading protected occupancy for any check.',
        ],
      },
      {
        h: 'The rights that ride into REO',
        body: [
          'Sequence your remaining cards. Redemption: 10 days after the sale to undo it by paying the judgment in full — narrow and real. Surplus: if third-party bidding exceeded the judgment, the excess sits with the court for junior lienholders and then you; check the sale result and claim (our guide walks it — and if the credit bid won at the judgment amount, surplus generally does not exist, which is worth knowing rather than wondering). Possession: a court process, never self-help — locks changed on an occupied home get documented and answered legally (LSNJ, 1-888-576-5529, income-qualifying). And housing next: negotiate the move-out date against a lease you have already lined up. The case ended at the auction. The exits from it are still negotiations, and you still have hands to play.',
        ],
      },
    ],
    links: [
      { href: '/answers/what-happens-after-a-sheriff-sale', label: 'The full after-sale sequence' },
      { href: '/guides/surplus-funds', label: 'Checking and claiming surplus' },
      { href: '/tenants', label: 'Tenant rights the sale didn’t erase' },
    ],
  },
];
