// BLOG SERIES: "I GOT THIS LETTER" DECODERS (10 posts)
// ---------------------------------------------------------------------------
// Theme: one post per frightening document, written for the hour it arrives.
// People search the exact words on the envelope; these posts answer in plain
// English. Legal numbers match the rest of the site (120-day delinquency
// norm, NOI 30 days, 35-day answer, cure to final judgment, two 30-day
// adjournments, 10-day redemption). No rescue promises anywhere.
// ---------------------------------------------------------------------------

import type { TopicPost } from './topic-blog';

const PUB = '2026-09-17';

export const LETTER_POSTS: TopicPost[] = [
  {
    slug: 'i-got-a-notice-of-intention-to-foreclose-nj',
    title: 'I Got a Notice of Intention to Foreclose in NJ. What Now?',
    description:
      'The Notice of Intention (NOI) is a warning required by NJ law, not a lawsuit. What it means, the 30-day window it opens, and the moves that matter this week.',
    tldr:
      'A Notice of Intention to Foreclose is not a lawsuit — it is the formal warning New Jersey’s Fair Foreclosure Act requires at least 30 days before a lender can file one. It must state exactly what it costs to catch up, and paying that amount during the window generally ends the matter. Even if you cannot pay, this is the single best moment in the whole process to act: call your servicer’s loss-mitigation line and book a free HUD-approved counselor now.',
    published: PUB,
    updated: PUB,
    minutes: 6,
    theme: 'letters',
    sections: [
      {
        h: 'What this letter actually is',
        body: [
          'The Notice of Intention to Foreclose — the NOI — is a creature of New Jersey’s Fair Foreclosure Act. Before a lender can file a foreclosure complaint against a residential homeowner, it must send this notice at least 30 days ahead, by registered or certified mail, telling you it intends to sue. Nothing has been filed in court yet. No judge has seen your name. You are reading a required warning shot, not a verdict.',
          'The law also requires the NOI to contain specifics: the nature of the default, the exact amount needed to cure it, whom to contact, and a statement of your right to catch up. If yours is vague on the cure amount, that matters — an NOI that fails the statute’s requirements has real consequences for the lender’s case, which is one reason to keep the letter and the envelope it came in.',
        ],
      },
      {
        h: 'The window it opens',
        body: [
          'You have at least 30 days before anything can be filed, and in practice often more — most lenders do not start a foreclosure until a loan is around 120 days delinquent. Curing the default during the NOI window (paying the stated catch-up amount, without the lender’s attorney fees at this stage) generally stops the process before it becomes a case. Under the Fair Foreclosure Act, the right to cure actually extends much further, up to entry of final judgment, but it is never cheaper than it is right now.',
        ],
      },
      {
        h: 'The three moves this week',
        body: [
          'First, call the servicer number on the notice and say the words “loss mitigation” — ask for the application. Modification, forbearance and repayment plans all run through that one door, and applying costs nothing. Second, book a free HUD-approved housing counselor (hud.gov, or 800-569-4287); they assemble these applications every day. Third, write the date of the NOI on your calendar and count 30 days, so nothing that follows surprises you.',
          'What not to do: pay anyone an upfront fee to “handle it,” sign anything transferring your deed, or decide the house is already lost. Every option — keeping it, selling it with your equity intact, or a negotiated exit — is still fully on the table at this stage.',
        ],
      },
      {
        h: 'If you do nothing',
        body: [
          'After the window closes, the lender can file a complaint in Superior Court, and you become a defendant with a 35-day clock to answer. The case is public record, the arrears grow with fees, and the options narrow step by step from there. The NOI is the cheapest, quietest, most fixable moment you will get. Use it.',
        ],
      },
    ],
    links: [
      { href: '/documents/notice-of-intention', label: 'The NOI decoded line by line' },
      { href: '/free-checklist', label: 'The free Week-One Checklist + 45-Day Playbook (PDF)' },
      { href: '/quiz', label: 'Which of the 7 options fits you? Two free minutes' },
    ],
  },
  {
    slug: 'served-foreclosure-summons-and-complaint-nj',
    title: 'I Was Served a Foreclosure Summons and Complaint in NJ',
    description:
      'Being served starts a 35-day clock. What the summons and complaint mean, why answering matters more than anything else, and how to do it — free if needed.',
    tldr:
      'The summons and complaint mean the lender has filed a foreclosure lawsuit in NJ Superior Court and you are now a defendant. You generally have 35 days from service to file an answer. Answering — even imperfectly — keeps you in the case, preserves every option, and is how you request the state’s free foreclosure mediation. Legal Services of NJ (1-888-576-5529) helps income-qualifying homeowners at no cost, and njcourts.gov has self-help forms.',
    published: PUB,
    updated: PUB,
    minutes: 6,
    theme: 'letters',
    sections: [
      {
        h: 'What just happened, in plain English',
        body: [
          'New Jersey is a judicial foreclosure state: a lender cannot take a home without suing for it in Superior Court. The complaint is the lawsuit — it names the loan, the default, and what the lender wants. The summons is the cover instruction telling you that you have been sued and how long you have to respond. Being served is jarring, and it is also just a procedural step that tens of thousands of New Jerseyans have stood in before you.',
        ],
      },
      {
        h: 'The 35 days, and why the answer is everything',
        body: [
          'You generally have 35 days from the date you were served to file an answer with the court. File it, and you are a participant in your own case: you get notice of every motion, standing to raise defenses, and time — contested cases move substantially slower, and that time is the raw material every solution is made of. Skip it, and the case proceeds by default without you, on the lender’s schedule and the lender’s facts.',
          'An answer does not require a lawyer, though one helps. Legal Services of New Jersey (1-888-576-5529) provides free foreclosure defense to income-qualifying homeowners, and the Judiciary publishes self-help answer forms at njcourts.gov. Filing something on time beats filing something perfect late.',
        ],
      },
      {
        h: 'The free program hiding in the paperwork',
        body: [
          'Somewhere in the packet you were served is information about New Jersey’s Foreclosure Mediation Assistance Program — free for eligible homeowners. Mediation puts you, a neutral mediator, a housing counselor, and a lender representative with settlement authority at one table. Real outcomes there look like modifications, repayment plans, and agreed timelines. Requesting it costs nothing and runs alongside everything else you do.',
        ],
      },
      {
        h: 'While the case runs',
        body: [
          'You keep the legal right to live in your home throughout the entire court process — do not move out. Keep working loss mitigation with your servicer in parallel; a complete application can pause things and is free to submit. And get your three numbers on one page (home value, balance, arrears), because they decide which of the seven exits fit. A foreclosure complaint starts a process. It does not end one.',
        ],
      },
    ],
    links: [
      { href: '/documents/summons-and-complaint', label: 'The summons and complaint, decoded' },
      { href: '/answers/how-long-to-respond-to-complaint', label: 'The 35-day answer deadline, explained' },
      { href: '/answers/what-is-the-mediation-program', label: 'NJ’s free mediation program' },
    ],
  },
  {
    slug: 'lis-pendens-on-my-house-nj',
    title: 'There’s a Lis Pendens on My House in NJ. How Bad Is It?',
    description:
      'A lis pendens is a public flag on the title, not a taking of your home. What it does, what it does not do, and why the letters it triggers start arriving.',
    tldr:
      'A lis pendens is a notice recorded with the county saying litigation is pending that affects your property’s title. It does not transfer ownership, force you out, or freeze your right to sell — homes are listed and sold with a lis pendens on file all the time; the case simply gets paid off at closing. Its real effect is publicity: it is why investors and “we buy houses” mail found you. The case behind it, not the recording itself, is what needs your attention.',
    published: PUB,
    updated: PUB,
    minutes: 5,
    theme: 'letters',
    sections: [
      {
        h: 'What a lis pendens is',
        body: [
          'Latin for “suit pending,” a lis pendens is a document the foreclosing lender records with your county clerk when it files the complaint. It tells the world — specifically, anyone who might buy or lend against the property — that a lawsuit affecting title is underway, and that they take any interest subject to its outcome. It is a flag on the record, not a deed transfer and not a judgment.',
        ],
      },
      {
        h: 'What it does not do',
        body: [
          'It does not take your home, change whose name is on the deed, or evict anyone. It does not prevent you from selling: a buyer’s title company simply requires the mortgage and the case to be paid off and discharged at closing, which is exactly what happens in a normal sale during foreclosure. If you have equity, that path stays fully open. What the lis pendens does do is make your situation searchable — which brings us to your mailbox.',
        ],
      },
      {
        h: 'Why your mailbox just filled up',
        body: [
          'Lis pendens filings are public records, and entire industries mine them daily. The letters and texts offering to “buy your house for cash today” or “stop your foreclosure” arrived because of this recording, not because anyone knows your story. Some cash buyers are legitimate businesses making below-market offers you can compare coolly; some senders are predators. Anyone demanding an upfront fee, telling you to stop talking to your lender, or pushing you to sign over your deed is describing something that is generally illegal under federal and NJ law.',
        ],
      },
      {
        h: 'What actually needs doing',
        body: [
          'Treat the lis pendens as a smoke alarm: loud, unsettling, and pointing at the real event — the complaint that was filed with it. If you were served, your 35-day answer clock is running. If you have not been served yet, you have a head start; use it on the free calls (servicer loss mitigation, HUD counselor) and on getting your numbers straight. The recording comes off the title when the case ends — by cure, by resolution, or by sale.',
        ],
      },
    ],
    links: [
      { href: '/answers/what-is-a-lis-pendens', label: 'Lis pendens: the short answer' },
      { href: '/answers/can-i-sell-my-house-during-foreclosure', label: 'Selling during foreclosure, explained' },
      { href: '/scams', label: 'The mail you’re about to get: scams to refuse' },
    ],
  },
  {
    slug: 'entry-of-default-foreclosure-nj',
    title: 'Entry of Default in an NJ Foreclosure: What It Means',
    description:
      'Default was entered because no answer was filed. What that changes, what it doesn’t end, and the motion to vacate that can reopen the door.',
    tldr:
      'Entry of default means the answer deadline passed with nothing filed, so the court marked the case uncontested — it now moves on the lender’s schedule through the Office of Foreclosure. It is serious, and it is not the end: default can sometimes be vacated by motion (courts prefer deciding cases on the merits), your right to cure the arrears runs to final judgment, loss mitigation continues, and a sale with equity protected is still possible. The clock is simply faster now.',
    published: PUB,
    updated: PUB,
    minutes: 6,
    theme: 'letters',
    sections: [
      {
        h: 'How you got here',
        body: [
          'After service of the complaint, New Jersey gives a homeowner 35 days to answer. When that window closes with no filing, the lender asks the court to enter default — a docket entry recording that the case is uncontested. Most NJ foreclosures end up here; silence is the most common response to a complaint, usually out of fear rather than strategy. Uncontested cases are processed administratively through the Judiciary’s Office of Foreclosure, which is why things feel like they speed up.',
        ],
      },
      {
        h: 'What default is not',
        body: [
          'Default is not a final judgment — that comes later, by separate motion, with its own notice to you. It is not an eviction, not a sale date, and not a forfeiture of your equity. You still own the home, you still have the right to live in it, your Fair Foreclosure Act right to cure the default still runs up to entry of final judgment, and a market sale that pays off the loan remains possible right up until a sheriff sale actually happens.',
        ],
      },
      {
        h: 'The motion that can reopen the case',
        body: [
          'New Jersey courts can vacate a default for good cause — the standard is more forgiving before final judgment than after. Good cause tends to combine an excuse for the silence (you were never properly served, illness, a loss-mitigation review you reasonably believed paused things) with some defense worth hearing. This is the moment where a free consult earns its keep: Legal Services of NJ (1-888-576-5529) for income-qualifying homeowners, or a private foreclosure defense attorney. Moving quickly matters; the further the case advances, the heavier the lift.',
        ],
      },
      {
        h: 'Using the time that remains',
        body: [
          'Whether or not you move to vacate, the parallel tracks stay open: a complete loss-mitigation application to the servicer, a mediation request if eligible, and honest math on a sale. Default narrowed your procedural options, not your practical ones. What it really took away is slack — from here, every week you use is worth two you wait.',
        ],
      },
    ],
    links: [
      { href: '/documents/entry-of-default', label: 'Entry of default, decoded' },
      { href: '/answers/what-happens-if-i-ignore-the-foreclosure', label: 'What happens if you keep ignoring it' },
      { href: '/answers/is-it-too-late', label: 'Is it too late? Stage by stage' },
    ],
  },
  {
    slug: 'final-judgment-of-foreclosure-nj',
    title: 'Final Judgment of Foreclosure in NJ: What Happens Now',
    description:
      'Final judgment fixes what you owe and authorizes a sheriff sale. The order of what comes next, the rights that survive it, and the moves still available.',
    tldr:
      'Final judgment is the court’s decision ending the case’s question: the debt is real, the amount is fixed, and the lender may proceed to a sheriff sale by writ of execution. It is late in the process, and rights survive it — the sale must be scheduled and noticed, adjournments can be requested, a completed sale of the home before the auction pays the judgment and keeps remaining equity yours, and if an auction happens, surplus funds above the judgment belong to you.',
    published: PUB,
    updated: PUB,
    minutes: 6,
    theme: 'letters',
    sections: [
      {
        h: 'What final judgment actually decides',
        body: [
          'The judgment fixes the total owed — principal, arrears, interest, and allowed fees — and directs that the property be sold to satisfy it. In an uncontested case it arrives by motion through the Office of Foreclosure; you should have received the motion papers and a chance to object to the amount before entry. Read the amount carefully even now: it is the payoff figure every later move is measured against.',
        ],
      },
      {
        h: 'The sequence from here',
        body: [
          'Judgment is followed by a writ of execution — the court’s instruction to the county sheriff — and then by the sheriff scheduling a sale, with notice posted and served as county rules require. That sequence takes time to move through, and sale calendars vary widely by county. Nothing transfers on judgment day: you own the home, and you have the right to live in it, until a sale is held and confirmed.',
        ],
      },
      {
        h: 'What still works at this stage',
        body: [
          'Three things, mainly. Adjournments: New Jersey allows a homeowner to postpone the sale — the site’s convention and most counties’ practice give you two adjournments of up to 30 days each, requested through the sheriff’s office, and courts can grant more for cause. A sale of your own: a buyer who closes before the auction pays the judgment at closing, and every dollar above it is yours instead of going through an auction’s mechanics. Redemption: even after a sheriff sale, New Jersey allows a 10-day window to redeem by paying the judgment in full. Loss mitigation can continue too, though a servicer’s flexibility shrinks this late.',
        ],
      },
      {
        h: 'If the auction happens anyway',
        body: [
          'A sale above the judgment amount creates surplus funds, and they belong to the former owner — they sit with the court until claimed, and claiming them is a real, doable process. And whatever happens, removal from the home is its own court process afterward, not a same-day event. Final judgment is the two-minute warning, not the whistle. The remaining moves are fewer, and they are real.',
        ],
      },
    ],
    links: [
      { href: '/documents/final-judgment', label: 'Final judgment, decoded' },
      { href: '/guides/surplus-funds', label: 'Surplus funds: money left after a sale' },
      { href: '/sell-house-before-sheriff-sale', label: 'Selling before the sale date' },
    ],
  },
  {
    slug: 'writ-of-execution-nj-foreclosure',
    title: 'A Writ of Execution Issued in My NJ Foreclosure. What Is It?',
    description:
      'The writ of execution is the court’s instruction to the sheriff, not an eviction order. Where it fits in the sequence and what to do in the gap it opens.',
    tldr:
      'A writ of execution is the paperwork bridge between final judgment and a sheriff sale: the court instructing the county sheriff to sell the property to satisfy the judgment. It is not an eviction order and does not set a date by itself — the sheriff’s office schedules the sale afterward, on a calendar that varies by county. The writ tells you exactly where you are: late, with a defined gap ahead that adjournments, a fast market sale, or a completed workout can still use.',
    published: PUB,
    updated: PUB,
    minutes: 5,
    theme: 'letters',
    sections: [
      {
        h: 'One document, one job',
        body: [
          'After final judgment, the court issues the writ of execution to the county sheriff. Its entire function is authorization: it empowers the sheriff to advertise and conduct a sale of the property. It does not change ownership, does not order anyone out, and does not itself contain your sale date. Think of it as the baton passing from the courthouse to the sheriff’s office.',
        ],
      },
      {
        h: 'The gap it opens',
        body: [
          'Between the writ and an actual auction sit the sheriff’s scheduling queue, required advertising, and formal notice of the sale date to you. How long that takes depends heavily on the county — some sheriff calendars run weeks out, others months. That gap is not dead time. It is the window in which adjournment requests, a listed or cash sale that closes before auction, and any remaining loss-mitigation outcome all still operate.',
        ],
      },
      {
        h: 'What to do the week the writ shows up',
        body: [
          'Call the county sheriff’s foreclosure unit and ask two questions: has a sale date been scheduled, and what is their exact procedure and fee for a homeowner adjournment. Counties differ on forms, deadlines and costs, and knowing the local rules early is the difference between using your adjournments and losing them. Then get a real number on the house — a free valuation — because from here every decision is arithmetic: judgment amount versus market value versus time.',
        ],
      },
      {
        h: 'Keeping the exits straight',
        body: [
          'If the math shows equity, a sale you control almost always treats you better than an auction: it closes at market price, pays the judgment, and hands you the difference. If there is no equity, the remaining questions are about time, credit, and whether a negotiated exit beats letting the sale run. Either way, you still live in the home lawfully until well after any sale — removal has its own court process. The writ is a milestone, not a moving truck.',
        ],
      },
    ],
    links: [
      { href: '/sheriff-sales', label: 'Your county’s sheriff sale rules and calendar' },
      { href: '/tools/net-proceeds', label: 'The equity math, done free' },
      { href: '/answers/can-i-stop-a-sheriff-sale', label: 'What can move a sheriff sale date' },
    ],
  },
  {
    slug: 'sheriff-sale-notice-nj-what-to-do',
    title: 'I Got a Sheriff Sale Notice in NJ. What Are My Options?',
    description:
      'A sale date is on paper now. Adjournments, redemption, selling first, surplus funds — the honest map of what works in the weeks before an NJ sheriff auction.',
    tldr:
      'The notice of sheriff sale tells you when and where the county intends to auction the property. Real options remain: two adjournments of up to 30 days each are generally available on request, bankruptcy and completed workouts affect the case by law, a sale of your own that closes before auction pays the judgment and keeps the remaining equity yours, and NJ allows a 10-day redemption window after the sale. If the auction runs and bids exceed the judgment, the surplus belongs to you.',
    published: PUB,
    updated: PUB,
    minutes: 7,
    theme: 'letters',
    sections: [
      {
        h: 'Read the notice like a checklist',
        body: [
          'The notice carries the facts every later move depends on: the sale date and time, the location, the sheriff’s case number, and the judgment behind it. Verify the date against the county sheriff’s own listings, because dates move constantly — adjournments by lenders are routine. Write down the sheriff’s foreclosure-unit phone number; you will use it more than once in the coming weeks.',
        ],
      },
      {
        h: 'The postponement toolbox',
        body: [
          'New Jersey practice generally gives a homeowner two adjournments of up to 30 days each, requested through the sheriff’s office under that county’s procedure and fee; courts can order further postponements for cause, and lenders themselves frequently adjourn while reviewing complete loss-mitigation applications. Sixty days obtained this way is not stalling — it is the working room in which closings happen and workouts finish. Ask your county’s exact procedure now, before you need it.',
        ],
      },
      {
        h: 'The exits that beat an auction',
        body: [
          'If the home is worth more than the judgment, an auction is the worst room to find that out in. A market or cash sale that closes before the sale date pays the judgment at closing and delivers the rest to you as ordinary sale proceeds — no claims process, no auction discount. Run the numbers first: judgment payoff, realistic price, time to close. Cash buyers close fastest and pay below market; a listing brings more when the calendar allows. The right answer is arithmetic, not ideology.',
        ],
      },
      {
        h: 'If the sale happens',
        body: [
          'Three things to know. Redemption: New Jersey allows 10 days after the sale to redeem by paying the judgment in full — narrow, but real. Surplus funds: bids above the judgment create money that belongs to the former owner, held by the court until claimed. Possession: nobody removes you on sale day; transferring possession is a separate court process with its own notice. A sheriff sale notice compresses your timeline. It does not delete your options.',
        ],
      },
    ],
    links: [
      { href: '/documents/notice-of-sheriff-sale', label: 'The sale notice, decoded' },
      { href: '/sheriff-sales', label: 'County-by-county sale rules and adjournments' },
      { href: '/guides/surplus-funds', label: 'Claiming surplus funds after a sale' },
    ],
  },
  {
    slug: 'loss-mitigation-denial-letter-nj',
    title: 'My Loss Mitigation Was Denied in NJ. Now What?',
    description:
      'A denial letter is a document with rights attached: stated reasons, an appeal window, and next moves. How to read it and what to do in the first week.',
    tldr:
      'A loss-mitigation denial must generally tell you the specific reasons and, for complete applications, your right to appeal — commonly within 30 days. Denials get reversed on appeal when the servicer’s inputs were wrong (income miscalculated, documents misread), and a denial of one option is not a denial of all of them: repayment plans, forbearance, short sale and deed-in-lieu each have separate boxes. Free help reading the letter exists: HUD counselors and, for income-qualifying homeowners, Legal Services of NJ.',
    published: PUB,
    updated: PUB,
    minutes: 6,
    theme: 'letters',
    sections: [
      {
        h: 'Denial letters are arguments, not verdicts',
        body: [
          'Federal servicing rules require the letter to state the actual reasons for denial — not “you do not qualify,” but which investor rule, which number, which missing item. Read the reasons the way a mechanic reads a diagnostic code. “Income insufficient” invites the question: which income did they count, and did they miss the second job, the rental, the household contribution? “Incomplete application” invites: which document, and was it actually sent? Servicers process enormous volume, and input errors are common enough that appeals exist for exactly this reason.',
        ],
      },
      {
        h: 'The appeal window',
        body: [
          'If your application was complete and submitted early enough in the case, you generally have an appeal right — commonly 30 days from the denial — reviewed by different personnel than the original decision. An appeal that just repeats the request loses; an appeal that corrects the record wins: pay stubs proving the real income, the fax confirmation for the “missing” document, the correct property value. This is a week’s worth of paperwork that a free HUD counselor will help you assemble.',
        ],
      },
      {
        h: 'Denied for one thing is not denied for everything',
        body: [
          'Loss mitigation is a menu, and the letter usually rules on one item. A modification denial for insufficient income does not resolve a repayment plan, a forbearance, a short sale, or a deed-in-lieu — and the same letter often invites you to be evaluated for the alternatives. Meanwhile the court-side tools are unaffected: mediation (free, if eligible), your answer and defenses if the case is active, and a market sale if the equity math favors it.',
        ],
      },
      {
        h: 'The trap to avoid',
        body: [
          'The most expensive response to a denial is despair, and the second most expensive is a paid “audit” or “forensic review” firm charging upfront to fight it — upfront fees for mortgage relief are generally illegal for a reason. The free path (counselor plus appeal plus alternatives) is the same machinery, without the markup or the fraud risk. A denial is a bad day. It is rarely the last word.',
        ],
      },
    ],
    links: [
      { href: '/servicers', label: 'Your servicer’s loss-mitigation contacts' },
      { href: '/professionals', label: 'Free counselors and legal help, listed' },
      { href: '/compare', label: 'All 7 options, compared honestly' },
    ],
  },
  {
    slug: 'foreclosure-mediation-notice-nj',
    title: 'The Mediation Notice in Your NJ Foreclosure Packet, Explained',
    description:
      'Buried in the service packet is an invitation to the state’s free mediation program. Who is eligible, what a session is like, and why lenders show up.',
    tldr:
      'New Jersey’s Foreclosure Mediation Assistance Program is free for eligible homeowners — generally owner-occupants of one-to-three family homes fighting for their primary residence. Request it when you answer the complaint (njcourts.gov has the forms). At the table: you, a court-approved mediator, housing-counselor support, and a lender representative required to have settlement authority. Outcomes look like modifications, repayment plans and agreed exits. It costs nothing and runs alongside every other option.',
    published: PUB,
    updated: PUB,
    minutes: 6,
    theme: 'letters',
    sections: [
      {
        h: 'What the program is',
        body: [
          'The mediation notice is not junk mail from the court — it is the door to the one room where your lender is required to send a person who can actually say yes. The program pairs eligible homeowners with a neutral, court-approved mediator and free housing-counselor support, and obligates the lender’s side to appear with settlement authority. There is no premium version of this; the free program is the program.',
        ],
      },
      {
        h: 'Who is eligible and how to ask',
        body: [
          'Eligibility centers on owner-occupants: generally the property is a one-to-three family home, it is your primary residence, and you are the borrower on the loan in foreclosure. You request mediation through the Judiciary — the packet you were served explains how, the forms live at njcourts.gov, and the request is commonly made with or shortly after your answer. Asking early matters: mediation works with whatever time and options remain, and both shrink as the case advances.',
        ],
      },
      {
        h: 'What a session actually looks like',
        body: [
          'Expect a scheduled conference — often remote — with the mediator steering, your financial documents doing the talking, and the housing counselor helping present a workable proposal: what you can pay, documented. Realistic outcomes include a modification review with a live timeline, a repayment plan for the arrears, more time to complete a sale, or a structured exit with dates everyone signed. Mediators cannot force a lender to modify; what the program forces is a real conversation with a real decision-maker, which is more than most homeowners ever get by phone.',
        ],
      },
      {
        h: 'How to arrive strong',
        body: [
          'Mediation rewards preparation the way court rewards procedure. Bring a complete, current financial package — a free HUD counselor will build it with you — and a specific ask. Keep your parallel tracks running: the answer filed, loss mitigation submitted, your equity math done. The homeowners mediation serves best walk in knowing their numbers and what they want. The notice in your packet is a free seat at that table. Take it.',
        ],
      },
    ],
    links: [
      { href: '/answers/what-is-the-mediation-program', label: 'The mediation program in brief' },
      { href: '/answers/do-i-need-a-lawyer', label: 'Do you need a lawyer for this?' },
      { href: '/free-checklist', label: 'The 45-Day Playbook (free PDF)' },
    ],
  },
  {
    slug: 'letters-after-sheriff-sale-nj',
    title: 'The Letters That Come After an NJ Sheriff Sale, Decoded',
    description:
      'Deed notices, possession papers, cash-for-keys offers, surplus-funds mail — what each post-sale letter means and which ones put money in your hands.',
    tldr:
      'After a sheriff sale, the mail keeps coming: the deed transferring title after the 10-day redemption window, possession paperwork if the buyer seeks it (removal is a court process with notice, never a same-day event), cash-for-keys offers you can negotiate, and — the one people miss — surplus-funds notices. If the auction brought more than the judgment, that money belongs to you and sits with the court until claimed. Tenants in the home keep their own strong NJ protections.',
    published: PUB,
    updated: PUB,
    minutes: 6,
    theme: 'letters',
    sections: [
      {
        h: 'First, the timeline nobody explains',
        body: [
          'The auction is not the eviction. After the hammer falls, New Jersey allows a 10-day window in which the former owner can redeem by paying the judgment in full; the sheriff’s deed to the buyer follows. Even then, possession changes hands through a court process with formal notice — a writ of possession and a scheduled lockout executed by officers, never a surprise visit. Households routinely remain for a meaningful period after a sale. Use that period deliberately, not anxiously.',
        ],
      },
      {
        h: 'The money letters: surplus funds',
        body: [
          'If bidding exceeded the judgment amount, the difference — surplus funds — belongs to the former owner, not the lender and not the buyer. It is deposited with the court and waits to be claimed through a motion. Watch for official notices about excess proceeds, and be wary of “recovery specialists” offering to claim it for a large cut: the process is genuinely doable with modest help, and our guide walks through it. This is the single most commonly abandoned asset in the whole foreclosure process.',
        ],
      },
      {
        h: 'Cash for keys, and how to read it',
        body: [
          'Buyers — banks and investors alike — often offer payment for a clean, agreed move-out because it is cheaper and faster than the possession process. The offer is negotiable: amount, date, condition terms. Get any agreement in writing, never surrender keys on a verbal promise, and do not confuse the first number offered with the last one available. If you need more time rather than money, that is negotiable too.',
        ],
      },
      {
        h: 'If the home had tenants — or you were the tenant',
        body: [
          'New Jersey’s tenant protections generally survive a foreclosure sale: renters cannot be evicted simply because the landlord was foreclosed, and “new owner, everybody out” letters misstate the law. Tenants keep paying rent (to the right party once ownership is confirmed) and keep their rights. Our tenants guide covers the pressure tactics to refuse. Whoever you were in this story — owner or renter — the after-sale mail is a set of processes with rules, and the rules still work in your favor more often than the letters suggest.',
        ],
      },
    ],
    links: [
      { href: '/answers/what-happens-after-a-sheriff-sale', label: 'After the sale: the full sequence' },
      { href: '/guides/surplus-funds', label: 'How to claim surplus funds' },
      { href: '/tenants', label: 'Renting a foreclosed home: your rights' },
    ],
  },
];
