// BLOG SERIES: FREE HELP THAT WORKS (10 posts)
// ---------------------------------------------------------------------------
// Theme: the free machinery of NJ foreclosure help, shown working. Every
// walkthrough is an ILLUSTRATIVE COMPOSITE and says so in the prose — we do
// not publish real client stories without written permission, period. Legal
// numbers match the rest of the site (NOI 30 days, 35-day answer, two 30-day
// adjournments, cure to final judgment, Ch13 3–5 year plan, LSNJ hotline).
// ---------------------------------------------------------------------------

import type { TopicPost } from './topic-blog';

const PUB = '2026-09-04';

export const FREE_HELP_POSTS: TopicPost[] = [
  {
    slug: 'does-free-foreclosure-help-actually-work',
    title: 'Does Free Foreclosure Help Actually Work? An Honest Accounting',
    description:
      'Free mediation, free counselors, free legal aid — skeptics assume free means useless. Here is what each free resource actually does, where it works, and where it does not.',
    tldr:
      'The free layer of New Jersey foreclosure help is not charity theater — it is the same machinery paid consultants resell. Court mediation puts your lender at a table with a neutral mediator at no cost. HUD-approved counselors assemble the same modification packages that paid firms charge four figures for. Legal Services of New Jersey (1-888-576-5529) provides real foreclosure defense to income-qualifying homeowners. Free help works best early and works least when hired the week of a sale date — which is true of paid help too.',
    published: PUB,
    updated: PUB,
    minutes: 7,
    theme: 'free-help',
    sections: [
      {
        h: 'Why "free" is not the discount version',
        body: [
          'Here is the industry secret that reframes everything: most of what paid foreclosure consultants sell is assembly work on the same forms, submitted to the same servicer portals, reviewed by the same underwriters, as the package a free HUD-approved counselor would build with you. The mediator in the court program is not the budget mediator — she is the only mediator; there is no premium tier. Free, in this system, is not a stripped-down product. It is the actual product, with the markup removed.',
          'The federal MARS rule makes the point sharper: charging up-front fees for mortgage relief services is generally illegal precisely because the paid market for this help was so reliably fraudulent that regulators shut down its business model.',
        ],
      },
      {
        h: 'What each free resource actually does',
        body: [
          'Court mediation (free, once a complaint is filed): a trained mediator and an assigned housing counselor, and the lender must send someone with settlement authority. Real outcomes here look like modifications, repayment plans, and dignified exits with agreed timelines. HUD counseling (free, any stage): document assembly, budget triage, servicer negotiation — the working parts of a loss-mitigation application. Legal Services of New Jersey (free for income-qualifying homeowners, 1-888-576-5529): actual attorneys who answer complaints, raise defenses, and appear in court.',
        ],
      },
      {
        h: 'Where it works, illustrated',
        body: [
          'A composite example — illustrative, not a client story: a homeowner four payments behind after a layoff, new job in hand, meets a HUD counselor in week one. The counselor builds a complete modification package before the 120-day mark; the servicer reviews it before any case exists; the arrears move to the end of the loan. Total cost: zero. The same facts a year later — case filed, mediation window missed, sale scheduled — leave far fewer working parts. The single biggest predictor of whether free help works is how early it is engaged.',
        ],
      },
      {
        h: 'Where it honestly does not',
        body: [
          'Free help cannot make an unaffordable house affordable: if the income supporting the payment is gone for good, counseling produces a well-managed exit, not a rescue. It cannot beat arithmetic in a modification review, and it cannot conjure equity that is not there. What it does in those hard cases is still worth everything: it replaces panic with a sequence, protects the equity that does exist, and keeps desperate homeowners out of the hands of people who charge $3,000 to make things worse.',
        ],
      },
    ],
    links: [
      { href: '/professionals', label: 'Every free help source, in one place' },
      { href: '/answers/what-is-the-mediation-program', label: 'The mediation program, explained' },
      { href: '/quiz', label: 'Which help fits your case? Two free minutes' },
    ],
  },
  {
    slug: 'inside-nj-foreclosure-mediation',
    title: 'Inside NJ Foreclosure Mediation: What a Session Actually Looks Like',
    description:
      'The free court program nobody pictures accurately: who sits at the table, what gets negotiated, and why lenders say yes in mediation after months of saying no on the phone.',
    tldr:
      'New Jersey foreclosure mediation is a court-run, no-cost session where the homeowner, a neutral mediator, a free housing counselor, and a lender representative with settlement authority work the case face to face. It is generally requested within 60 days of being served with the complaint. What changes in the room: documents stop disappearing, decisions get deadlines, and options the phone queue never mentioned — trial modifications, repayment plans, structured exits — get discussed on the record.',
    published: PUB,
    updated: PUB,
    minutes: 6,
    theme: 'free-help',
    sections: [
      {
        h: 'Who is in the room',
        body: [
          'Four chairs. You (with or without a lawyer — most homeowners come without). A mediator, trained and neutral, who runs the session. A housing counselor, assigned free through the program, who has usually helped you assemble a financial package beforehand. And the lender\'s representative — the person the phone queue never produces — who must attend with authority to actually agree to things.',
          'That last chair is the whole value of the program. Months of servicer phone calls fail because no one on the line can decide anything. Mediation compels a decider to show up.',
        ],
      },
      {
        h: 'What actually gets negotiated',
        body: [
          'The menu is the loss-mitigation menu, but with accountability: a trial modification with defined payments and a start date; a repayment plan layering arrears onto the regular payment; forbearance formalized in writing; or, when keeping the home is not viable, exit terms — time to sell, a short-sale process with milestones, or a deed in lieu with a written debt release. Sessions end with written summaries, which means "we never received your documents" loses its power as a strategy.',
        ],
      },
      {
        h: 'A session, illustrated',
        body: [
          'An illustrative composite, not a client story: a homeowner eight payments behind after a medical year requests mediation inside the 60-day window. The counselor builds the package first — pay stubs, the hardship letter, a real budget. In session one, the lender\'s representative concedes the file is complete (the counselor has the submission receipts) and commits to a review deadline. Session two converts the review into a trial modification. Nothing exotic happened; the process simply forced the machine to process.',
        ],
      },
      {
        h: 'How to request it — and the clock',
        body: [
          'The request is filed with the court, generally within 60 days of service of the complaint, and the court can accept late requests for cause — but do not test that. The program costs nothing, requires no lawyer, and pauses nothing by itself, so keep working every other lever while it is scheduled. If a sheriff sale gets calendared in the meantime, your two statutory adjournments through the sheriff\'s office keep the mediation ahead of the auction.',
        ],
      },
    ],
    links: [
      { href: '/answers/what-is-the-mediation-program', label: 'Mediation, the direct answer' },
      { href: '/documents', label: 'The complaint and its 35-day clock' },
      { href: '/professionals', label: 'How to request mediation, step by step' },
    ],
  },
  {
    slug: 'first-meeting-hud-counselor',
    title: 'Your First Meeting With a HUD Counselor: What Happens, What to Bring',
    description:
      'The free appointment that turns a foreclosure panic into a file: how HUD-approved counseling works in New Jersey, what the counselor actually does, and how to arrive ready.',
    tldr:
      'A HUD-approved housing counselor is a free, government-supervised professional who turns your situation into a complete loss-mitigation file: budget, hardship letter, income documents, and the application your servicer\'s underwriters actually review. Bring recent mortgage statements, every letter received, two months of income records, and an honest budget. One prepared meeting typically produces a concrete plan; arriving without documents produces a second appointment. Counselors serving every NJ county are listed in HUD\'s official directory.',
    published: PUB,
    updated: PUB,
    minutes: 6,
    theme: 'free-help',
    sections: [
      {
        h: 'What a counselor actually is',
        body: [
          'Not a volunteer with a pamphlet. HUD-approved agencies are audited nonprofits whose counselors do this full time: they know each servicer\'s portal, each program\'s income math, and what a complete file looks like — because incomplete files are the number one reason modifications die. Their work is free because it is publicly funded, not because it is worth nothing. In New Jersey, several also staff the court mediation program, so the person who builds your file can be the person beside you at the table.',
        ],
      },
      {
        h: 'The first meeting, minute by minute',
        body: [
          'Expect an hour. The first third is the honest budget — actual income, actual spending, the number that is available for housing. The middle third is triage: how far behind, what stage the case is at, which deadlines are live. The final third is the plan: which loss-mitigation option the numbers support, what documents are missing, who submits what by when. An illustrative composite: a homeowner three payments behind leaves meeting one with a document checklist, and meeting two submits a complete modification application. That two-meeting arc is the normal, boring, effective shape of this.',
        ],
      },
      {
        h: 'What to bring',
        body: [
          'Recent mortgage statements. Every letter from the lender, servicer, or court — especially the Notice of Intention or the complaint, because those carry the deadlines. Two months of pay stubs or, for self-employed homeowners, profit-and-loss and bank statements. Last year\'s tax return if you have it handy. And the un-glamorous one that matters most: a truthful list of monthly spending. Counselors cannot be shocked; they can only be slowed down by missing paper.',
        ],
      },
      {
        h: 'The one warning',
        body: [
          'Every legitimate counselor is in HUD\'s directory, and none of them charge for foreclosure counseling. The imitation — "counselors" who cold-call from the public filing records and want fees — is how homeowners lose money and months. Find yours through the official directory or through the court mediation program, and treat any fee request as the exit sign.',
        ],
      },
    ],
    links: [
      { href: '/professionals', label: 'Free counseling and how to find it' },
      { href: '/downloads/nj-foreclosure-week-one-checklist.pdf', label: 'The Week One Checklist (PDF)' },
      { href: '/scams', label: 'The paid imitation, and how to spot it' },
    ],
  },
  {
    slug: 'anatomy-of-a-loan-modification-approval',
    title: 'When a Loan Modification Works: The Anatomy of an Approval',
    description:
      'Modifications get approved every week in New Jersey — and denied for the same three preventable reasons. What separates the files that work from the files that die.',
    tldr:
      'Loan modifications succeed when three things line up: documented, stabilized income that supports a realistic modified payment; a complete application (missing documents are the leading killer of modification requests); and time — files reviewed before a sale date crowds the calendar. Applying is free, directly through your servicer, and a complete application submitted early in delinquency generally receives protections against the foreclosure advancing while under review.',
    published: PUB,
    updated: PUB,
    minutes: 7,
    theme: 'free-help',
    sections: [
      {
        h: 'What a modification actually changes',
        body: [
          'A modification permanently rewrites loan terms so the arrears stop being an emergency: the rate can drop, the term can stretch, and the missed payments typically move into the loan balance or to a deferred balloon at the end. It is the keep-the-home tool for a homeowner whose hardship has ended — the income is back, but the arrears are unclimbable. It is the wrong tool when the income is not back; underwriters modify payments, not paychecks.',
        ],
      },
      {
        h: 'The three reasons files die',
        body: [
          'One: incompleteness. A single missing bank statement can cycle a file back to the start, and each cycle burns weeks. Two: math. The modified payment must fit documented income; wishful budgets get denied by formula. Three: timing. Files that arrive with a sheriff sale weeks away are racing a calendar that does not care. None of these is exotic, which is the good news — all three are preventable with a counselor, a checklist, and an early start.',
        ],
      },
      {
        h: 'An approval, illustrated',
        body: [
          'An illustrative composite, not a client story: a two-income household loses one income for six months, misses five payments, and the second income returns at a lower level. A HUD counselor builds the file: new pay stubs, a hardship letter with dates, a budget showing the old payment fails by $600 and a modified payment fits. Submitted complete, reviewed once, trial modification offered — three on-time trial payments later it becomes permanent, and the arrears ride at the end of the loan. The pattern to copy is not luck; it is complete, plausible, early.',
        ],
      },
      {
        h: 'If the answer is no',
        body: [
          'A denial states its reason, and the reason is your map: income failed the math (ask about a longer term, or face the keep-versus-sell decision the numbers are forcing); documents were stale (refresh and resubmit); an investor restriction blocked the change (ask what the investor does allow). Denials can be appealed, and mediation is a strong venue for contesting a sloppy one. And a denial for affordability, painful as it is, arrives with a gift: clarity, while there is still time to protect equity with a sale you control.',
        ],
      },
    ],
    links: [
      { href: '/guides/loan-modification', label: 'The full modification guide' },
      { href: '/servicers', label: 'Your servicer\'s loss-mitigation contacts' },
      { href: '/answers/is-it-too-late', label: 'How late is too late? An honest answer' },
    ],
  },
  {
    slug: 'forbearance-bridge-after-job-loss',
    title: 'Job Loss and the Mortgage: How Forbearance Bridges the Gap',
    description:
      'The fastest relief in the loss-mitigation toolbox: how forbearance pauses or reduces payments during a short hardship, and how to keep the bridge from becoming a cliff.',
    tldr:
      'Forbearance is a written agreement with your servicer to pause or reduce mortgage payments during a temporary hardship — job loss being the classic case. It is free to request, typically decided within a week or two, and it prevents late-stage damage while you recover. The catch is built into the word: it is a pause, not forgiveness, and the exit plan (repayment plan, deferral, or modification) matters as much as the pause itself. Ask what happens at the end before you sign the beginning.',
    published: PUB,
    updated: PUB,
    minutes: 6,
    theme: 'free-help',
    sections: [
      {
        h: 'What forbearance is for',
        body: [
          'It is the short-hardship tool: a layoff with a search under way, a medical event with a return date, a gap between jobs already bridged by an offer letter. The servicer agrees in writing that for a set period — commonly a few months, extendable — payments pause or shrink, and the loan is not treated as advancing toward foreclosure. For a homeowner staring at the first missed payment, it is usually the fastest yes available in the whole system.',
        ],
      },
      {
        h: 'The exit is the actual negotiation',
        body: [
          'Every forbearance ends, and the ending has three standard shapes: a lump-sum catch-up (rarely realistic — push back if it is the only option offered), a repayment plan spreading the paused amount over months, or a deferral moving it to the end of the loan, sometimes via modification. The mistake that turns a bridge into a cliff is not asking. Before agreeing, get in writing: what is owed at the end, and which exit options this servicer offers.',
        ],
      },
      {
        h: 'A bridge, illustrated',
        body: [
          'An illustrative composite: a warehouse manager is laid off in March with severance through May. She calls loss mitigation in week two — before missing a payment — and secures a four-month forbearance. New job starts in June at similar pay; the servicer offers a deferral, moving the four paused payments to the loan\'s end. Credit dinged but intact, no case ever filed, total cost zero. The active ingredients: she called before the arrears existed, and she got the exit terms in writing.',
        ],
      },
      {
        h: 'How to ask',
        body: [
          'Call the loss-mitigation line (our servicer directory lists the big ones), say the words "I have a temporary hardship and want to request forbearance," and follow with whatever documentation they ask for — layoff notice, severance letter, doctor\'s note. If the hardship looks long rather than temporary, say that too: a counselor can help pick between forbearance now versus going straight to a modification review, and choosing honestly beats serial short fixes.',
        ],
      },
    ],
    links: [
      { href: '/guides/forbearance', label: 'The forbearance guide in full' },
      { href: '/servicers', label: 'Loss-mitigation numbers for 15 servicers' },
      { href: '/blog/first-90-days-nj-foreclosure', label: 'The first 90 days, week by week' },
    ],
  },
  {
    slug: 'how-chapter-13-keeps-a-house',
    title: 'How Chapter 13 Keeps a House: The Mechanics, Honestly',
    description:
      'The automatic stay stops the sale; the plan does the saving. How Chapter 13 actually works for a New Jersey homeowner, what it costs, and who it genuinely fits.',
    tldr:
      'Chapter 13 bankruptcy halts a New Jersey foreclosure the moment it is filed — the automatic stay stops even a sale scheduled for that morning — and then gives the homeowner three to five years to cure the arrears through a court-supervised repayment plan while keeping up the regular mortgage payment. It genuinely works for homeowners with steady income and a temporary-hardship story. It fails, expensively, when filed as a last-minute delay tactic with no plan the income can support.',
    published: PUB,
    updated: PUB,
    minutes: 7,
    theme: 'free-help',
    sections: [
      {
        h: 'The stay and the plan — two different machines',
        body: [
          'The automatic stay is the dramatic part: upon filing, collection and the foreclosure freeze, including a same-day sheriff sale. But the stay only holds while the case is alive. The saving mechanism is the plan: the arrears are spread over 36 to 60 months as a payment alongside — not instead of — the ongoing monthly mortgage. Complete the plan and the default is cured as a matter of law; the lender must treat the loan as current.',
        ],
      },
      {
        h: 'The honest qualifications',
        body: [
          'The math is unforgiving in a useful way: you need income that covers the regular payment plus the plan payment plus life. Filing costs real money in attorney and court fees. A dismissed case — usually from missed plan payments — puts the foreclosure right back on track, and repeat filings can shrink or void the stay. This is why the emergency filing on sale morning is the weakest version: no budget, no plan, high dismissal odds. Chapter 13 rewards preparation like everything else in this process.',
        ],
      },
      {
        h: 'A plan that worked, illustrated',
        body: [
          'An illustrative composite: a union electrician loses eight months to an injury, falls $38,000 behind, then returns to full hours. No modification fits (the servicer\'s investor bars term extensions), but his income comfortably supports the mortgage plus about $700 a month. His attorney files a Chapter 13 five weeks before the sale — no emergency, documents ready. The plan runs five years; he completes it; the loan is contractually current. The case worked because the income was real and the filing was prepared, not because bankruptcy is magic.',
        ],
      },
      {
        h: 'Free and low-cost ways in',
        body: [
          'Talk before you need the stay: many bankruptcy attorneys consult free, Legal Services of New Jersey (1-888-576-5529) helps income-qualifying homeowners evaluate the option, and a HUD counselor can tell you whether the simpler tools — modification, repayment plan, mediation — fit before you reach for the court-supervised one. Chapter 13 is the heavy machinery of keep-the-home. Heavy machinery is wonderful when operated deliberately.',
        ],
      },
    ],
    links: [
      { href: '/guides/bankruptcy-chapter-13', label: 'Chapter 13, the complete guide' },
      { href: '/answers/does-bankruptcy-stop-foreclosure-in-nj', label: 'The automatic stay, the direct answer' },
      { href: '/professionals', label: 'Where to find honest legal help' },
    ],
  },
  {
    slug: 'the-reinstatement-play',
    title: 'The Reinstatement Play: Catching Up All at Once, and Where the Money Comes From',
    description:
      'New Jersey preserves the right to cure a mortgage default in one lump sum up to final judgment. The mechanics, the money sources families actually use, and the receipts to demand.',
    tldr:
      'Reinstatement — paying all arrears, late charges, and allowable costs in one lump sum — returns a defaulted New Jersey mortgage to good standing as if the default never happened, and the Fair Foreclosure Act generally preserves that right up to entry of final judgment. The money, in real cases, comes from family, retirement-account loans, sale of another asset, or the home\'s own equity via refinance. Demand an itemized written quote, check every line, pay by certified trackable funds, and get written confirmation the case is dismissed.',
    published: PUB,
    updated: PUB,
    minutes: 6,
    theme: 'free-help',
    sections: [
      {
        h: 'Why reinstatement is the cleanest fix',
        body: [
          'Every other keep-the-home tool changes something — the loan terms, your legal status, the payment schedule. Reinstatement changes nothing except the arrears: pay the quote and the original loan simply resumes, the case is dismissed, and the whole episode compresses into a credit-report scar that heals with on-time payments. New Jersey\'s cure right running to final judgment means this stays on the table far later than most homeowners assume — though every month of waiting makes the number bigger.',
        ],
      },
      {
        h: 'Where the money actually comes from',
        body: [
          'An illustrative composite of the most common shape: three siblings learn their mother is $22,000 behind on a house worth $340,000 with $110,000 owed. No single sibling has $22,000; together, protecting $230,000 of family equity, they do. Other real sources: a 401(k) loan (borrowing from yourself, repaid to yourself), sale of a vehicle or other asset, and — for equity-rich owners — a refinance or even the decision to sell the home on their own schedule rather than the court\'s. The pattern: reinstatement money is usually equity-protection money, spent by people who ran the numbers.',
        ],
      },
      {
        h: 'The paperwork discipline',
        body: [
          'Request the itemized reinstatement quote in writing and read it line by line — payment counts, late-charge math, inspection-fee frequency, post-filing legal fees. Errors are common enough to make the hour worthwhile. Note the good-through date; the total grows daily. Pay by certified funds exactly as instructed, keep proof of delivery, and then close the loop: written confirmation the loan is current and the foreclosure is being dismissed. That letter is the whole point. File it with your deed.',
        ],
      },
      {
        h: 'When not to reinstate',
        body: [
          'If the hardship is not over, reinstatement buys a short intermission before the sequel: the payment that was unaffordable in March is still unaffordable in September. In that case the same lump of family money is often better spent differently — funding a Chapter 13, bridging to a sale, or simply not being spent on a house the budget cannot hold. A free counselor can run that comparison without any stake in the answer.',
        ],
      },
    ],
    links: [
      { href: '/blog/reinstatement-quote-guide', label: 'Reading the quote, line by line' },
      { href: '/answers/how-much-to-reinstate-my-mortgage', label: 'Reinstatement cost, the direct answer' },
      { href: '/tools/net-proceeds', label: 'Equity math before spending family money' },
    ],
  },
  {
    slug: 'the-phone-call-that-changes-a-foreclosure',
    title: 'The Phone Call That Changes a Foreclosure: Loss Mitigation, Early',
    description:
      'One free phone call, made before the fourth missed payment, routinely does more than everything hired later. What to say, what to ask, and what the call unlocks.',
    tldr:
      'The highest-leverage act in early delinquency is a free phone call to your servicer\'s loss-mitigation department — ideally before the fourth missed payment, while every option (reinstatement, repayment plan, forbearance, modification) is still open and the arrears are small. Say "I have a hardship and want to know my loss-mitigation options," ask for the list in writing, and note the date, the representative, and what was promised. Our servicer directory carries verified numbers for the 15 largest servicers.',
    published: PUB,
    updated: PUB,
    minutes: 5,
    theme: 'free-help',
    sections: [
      {
        h: 'Why the early call outperforms everything',
        body: [
          'Loss mitigation is a menu that shrinks with time. At one missed payment, everything is available and the servicer\'s incentives point toward keeping the loan performing. At six, with a case filed, the menu is shorter, the fees are larger, and every conversation happens through lawyers. Federal servicing rules also do their best work early: outreach requirements, the 45-day written notice of options, protections for complete applications. Calling early is not optimism — it is arriving while the machine is still built to help you.',
        ],
      },
      {
        h: 'The script',
        body: [
          '"I\'m calling about my mortgage. I\'ve had a hardship — [job loss / medical / divorce, one sentence] — and I want to know my loss-mitigation options." Then three asks: the full list of options in writing; the exact documents needed for a hardship application; and the direct contact for your file. Write down the date, time, and representative\'s name every call. An illustrative composite of how flat this can be: a homeowner one payment behind makes the call, learns a repayment plan can spread the missed payment over six months, agrees on the spot, and the entire episode never touches a courtroom.',
        ],
      },
      {
        h: 'What the call is not',
        body: [
          'It is not an admission that hurts you later, not a trigger for foreclosure (delinquency triggers foreclosure; silence accelerates it), and not a negotiation you must win in one round. It is intelligence gathering with a free price tag. If the queue defeats you or the answers wobble, that is what HUD counselors are for — they make these calls for a living, with the portal logins to match.',
        ],
      },
    ],
    links: [
      { href: '/servicers', label: 'Verified loss-mitigation numbers, 15 servicers' },
      { href: '/answers/how-many-payments-can-i-miss', label: 'The 120-day rule, explained' },
      { href: '/professionals', label: 'Free counselors who can call with you' },
    ],
  },
  {
    slug: 'two-adjournments-one-closing',
    title: 'Two Adjournments, One Closing: Using Your 60 Days Like a Professional',
    description:
      'The statutory sale postponements almost nobody uses, paired with the plan that makes them worth using. A walkthrough of the sequence that converts 60 days into a saved outcome.',
    tldr:
      'New Jersey homeowners are generally entitled to two adjournments of a scheduled sheriff sale, up to 30 days each, requested through the county sheriff\'s office for a small fee — up to 60 days, no lawyer required. The professionals\' version of this move pairs the adjournments with a concrete plan that fits inside them: a cash closing (14–30 days), completion of a loss-mitigation review, or a prepared Chapter 13 filing. Time without a plan attached only makes the judgment larger.',
    published: PUB,
    updated: PUB,
    minutes: 6,
    theme: 'free-help',
    sections: [
      {
        h: 'The right, restated plainly',
        body: [
          'The sale date on your notice is softer than it looks. By statute, the sheriff adjourns the sale at the homeowner\'s request — generally twice, up to 30 days each — and courts can order more for cause. County procedures differ (our directory lists each office and its process), but the shape is constant: contact the sheriff\'s foreclosure unit before the sale, request as the owner, pay the fee, then verify the new date on the official listing, which is the only date that counts.',
        ],
      },
      {
        h: 'The sequence, illustrated',
        body: [
          'An illustrative composite: a homeowner with roughly $90,000 of equity gets a sale date six weeks out. Week one: first adjournment requested — the clock now shows ten weeks. Week two: two cash offers requested and a valuation obtained; the better offer is accepted with a 25-day close. Week five: title work surfaces an old water lien; the second adjournment absorbs the delay. Week nine: closing — the judgment is paid from proceeds, the case is dismissed, and the equity leaves in the homeowner\'s wallet instead of at auction. Nothing in that story required luck. It required the sequence.',
        ],
      },
      {
        h: 'The three plans that fit in 60 days',
        body: [
          'A sale: cash purchases commonly close in 14–30 days; even a conventional buyer already in contract can land inside the window. A review: if a complete modification application is pending, the adjournments keep the auction from outrunning the underwriter. A filing: 60 days lets a bankruptcy attorney build a Chapter 13 plan that survives, instead of an emergency petition that gets dismissed. Pick one before requesting day one — the request is easy; the plan is the point.',
        ],
      },
      {
        h: 'The two warnings',
        body: [
          'Never pay a third party to "postpone your sale" — the right is yours and up-front rescue fees are generally illegal. And never coast on the new date: interest, fees, and the judgment grow through every adjourned week, so the 60 days are the most expensive free time you will ever get. Spend them like it.',
        ],
      },
    ],
    links: [
      { href: '/sheriff-sales', label: 'Your county\'s process and contacts' },
      { href: '/blog/sheriff-sale-adjournment-playbook', label: 'The full adjournment playbook' },
      { href: '/sell-house-before-sheriff-sale', label: 'The pre-auction sale, step by step' },
    ],
  },
  {
    slug: 'claiming-surplus-funds-after-sale',
    title: 'Claiming Surplus Funds: How Former Owners Get Their Money Back',
    description:
      'When a sheriff sale brings more than the judgment, the difference belongs to the former homeowner — deposited with the court, waiting to be claimed. The free way to claim it.',
    tldr:
      'If a New Jersey sheriff sale brings more than what was owed on the judgment, the surplus belongs to the former homeowner and is deposited with the Superior Court — it is never mailed automatically. It is claimed by motion, a filing a former owner can make with or without an attorney, and free or low-cost legal help exists for those who qualify. The "surplus recovery" companies that appear after every sale charge 30–40% for the same filing. That percentage is the price of not knowing this page exists.',
    published: PUB,
    updated: PUB,
    minutes: 6,
    theme: 'free-help',
    sections: [
      {
        h: 'Where the money sits and why',
        body: [
          'At auction, bidding can exceed the judgment — equity does not vanish just because a sale was forced. The overage, after the judgment and sale costs, is deposited into court. Junior lienholders (a second mortgage, a judgment creditor) may claim against it first; whatever remains belongs to the former owner. It sits there, sometimes for years, because the one person entitled to it is the one person nobody is paid to notify effectively.',
        ],
      },
      {
        h: 'The claim, illustrated',
        body: [
          'An illustrative composite: a house carrying a $180,000 judgment sells at auction for $265,000. After costs, roughly $80,000 in surplus is deposited with the court. The former owner — now renting two towns over — receives a letter from a "recovery specialist" offering to get her "found money" for 35%, which would be $28,000 for preparing one motion. Instead she calls Legal Services, qualifies by income, and an attorney files the motion. The court disburses the surplus, minus a junior lien of $9,000, to her. Same money, same process — minus the $28,000 haircut.',
        ],
      },
      {
        h: 'How to check and how to file',
        body: [
          'First, learn what the property actually sold for — your county sheriff\'s sale results show it, and our county directory links every office. If the sale price beat the judgment, surplus likely exists. The claim is a motion to the Superior Court in the foreclosure case, with notice to other parties; the paperwork is genuinely manageable, and an attorney\'s fee for it — if you hire one — should be a small flat sum, never a percentage. Free routes: Legal Services of New Jersey (1-888-576-5529) for income-qualifying claimants.',
        ],
      },
      {
        h: 'The predator pattern',
        body: [
          'Surplus finders work the sale results the way rescue scammers work the filings: mass mail, urgency, and a contingency percentage for clerical work. Some are legal; none are necessary. The tell is always the percentage. Money that is already yours, sitting in a court account with your name on the case, does not cost a third to retrieve.',
        ],
      },
    ],
    links: [
      { href: '/guides/surplus-funds', label: 'The complete surplus funds guide' },
      { href: '/answers/what-happens-to-my-equity', label: 'Equity at auction, explained' },
      { href: '/sheriff-sales', label: 'Find your county\'s sale results' },
    ],
  },
];
