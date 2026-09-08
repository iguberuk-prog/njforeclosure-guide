// BLOG SERIES: SITUATION STORIES, PART 3 (10 of 30)
// ---------------------------------------------------------------------------
// Same contract as parts 1 and 2: illustrative composites, labeled; the
// free path is the hero; the Guide is the map.
// ---------------------------------------------------------------------------

import type { TopicPost } from './topic-blog';

const PUB = '2026-09-08';

export const STORY_POSTS_3: TopicPost[] = [
  {
    slug: 'spanish-speaking-family-free-help-nj',
    title: 'The Letters Came in English; the Help Comes in Spanish Too',
    description:
      'A Spanish-speaking family, an English-only foreclosure file, and the free bilingual help most never hear about. También disponible en español en /es.',
    tldr:
      'New Jersey\'s foreclosure process serves its papers in English, but the free help exists in Spanish: HUD-approved agencies with Spanish-speaking counselors (La Casa de Don Pedro in Newark and PRAB in New Brunswick among them), court interpreters at no cost for proceedings, and this site\'s full Spanish section at /es — the options, every letter decoded, the scams, and a Spanish assessment. Federal law also requires certain notices about the process, and the MARS disclosure, to reach people in the language of the conversation. La ayuda gratuita existe en su idioma.',
    published: PUB,
    updated: PUB,
    minutes: 5,
    theme: 'stories',
    sections: [
      {
        h: 'The envelope the family translated with a phone camera',
        body: [
          'An illustrative composite, not a client story: a Perth Amboy family — factory shift, cleaning shifts, four payments behind after a work injury — photographs the Notice of Intention and runs it through a translation app at the kitchen table. The app renders the legal English into legal Spanish, which clarifies little. What they conclude, wrongly, is that nothing can be done and no one who helps will speak to them in their language. Both halves are false.',
        ],
      },
      {
        h: 'The bilingual free layer',
        body: [
          'Spanish-speaking HUD counselors work at agencies across the state — La Casa de Don Pedro serves Newark, PRAB serves the New Brunswick area, and the HUD directory flags language capabilities for every agency. The courts provide interpreters for proceedings free of charge; mediation happens through them routinely. And the predators\' favorite trick — being the only "helper" who speaks Spanish, for a fee — collapses the moment a family learns the free Spanish-speaking help exists. That knowledge is the whole defense.',
        ],
      },
      {
        h: 'The free path, walked through',
        body: [
          'In the composite: a cousin finds the /es section of this site, and the family reads — in Spanish written directly, not machine-translated — what the letter is, what the 30 days mean, and that a free counselor nearby speaks their language. The PRAB counselor builds the hardship file around the documented injury and the return-to-work date; the modification review runs before any case is filed; the arrears fold into the loan. The scariest part, they say later, was the week they believed they were alone in the wrong language. Todo lo demás fue papeleo.',
        ],
      },
      {
        h: 'Dónde empezar / where to start',
        body: [
          'Empiece en /es: la guía completa, las 7 opciones, cada carta explicada, y la evaluación gratuita de dos minutos, todo en español. Pida un consejero que hable español — es gratis — y recuerde la regla que filtra las estafas: la ayuda verdadera nunca cobra por adelantado. If you are reading this for a parent or neighbor: the single most useful thing you can do is sit with them for the two-minute Spanish assessment and the first phone call. Language is the barrier; you are the bridge; the help itself is free.',
        ],
      },
    ],
    links: [
      { href: '/es', label: 'La guía completa en español' },
      { href: '/es/preguntas', label: 'Preguntas frecuentes, respondidas en español' },
      { href: '/es/evaluacion', label: 'La evaluación gratuita de 2 minutos' },
    ],
  },
  {
    slug: 'single-income-after-separation-nj',
    title: 'One Income Where Two Used to Be: The Separation That Isn\'t Final Yet',
    description:
      'Not divorced, just separated — and the mortgage doesn\'t wait for family court. The story of holding a house through the in-between, and the free tools that fit it.',
    tldr:
      'Separation without a final divorce leaves the mortgage in limbo\'s worst spot: both names obligated, one income paying, no settlement yet assigning anything. The free moves that work in the in-between: loss mitigation accepts a documented separation and support orders as hardship and income evidence; pendente lite support can be sought while the divorce runs; and either spouse alone can call servicers, counselors, and mediation. What to avoid: quiet unilateral moves (draining escrow, hiding arrears) that poison both the case and the eventual settlement.',
    published: PUB,
    updated: PUB,
    minutes: 5,
    theme: 'stories',
    sections: [
      {
        h: 'The months between the leaving and the lawyers',
        body: [
          'An illustrative composite, not a client story: a Wayne mother of two stays in the house with the kids when the marriage ends in fact but not yet in law. His contributions arrive, then thin, then stop — "talk to my lawyer." Her income covers daycare or the mortgage, not both. The divorce will eventually sort the house; the mortgage misses are sorting themselves out right now, against both their names.',
        ],
      },
      {
        h: 'Acting alone, legitimately',
        body: [
          'She does not need his signature to defend the position: any borrower can call loss mitigation, engage a free counselor, request court mediation if a case lands, and document everything. The family court can order interim (pendente lite) support precisely because bills do not pause for litigation — her divorce attorney or the court\'s self-help resources handle that lane. What the in-between punishes is secrecy and self-help of the destructive kind; every unilateral move should be one she would comfortably explain to the divorce judge later, because she may have to.',
        ],
      },
      {
        h: 'The free path, walked through',
        body: [
          'In the composite: a free counselor helps her document the reality — separation date, his stopped contributions in bank records, her income, the support motion filed. The servicer grants a short forbearance pending the support order; when interim support lands, a repayment plan sized to the combined documented income follows. The house holds through the divorce, which ultimately orders its sale with proceeds split — but sold from strength, listed properly, instead of auctioned from chaos. The mortgage never learned about the marriage; it only ever saw the paperwork, which she kept immaculate.',
        ],
      },
      {
        h: 'Where to start if this is you',
        body: [
          'Document the separation economics from day one — dates, deposits stopped, expenses carried. Call the servicer early with that file; "separated, support motion pending" is a hardship the review understands. Loop the divorce attorney on the mortgage status so the two proceedings inform each other. And run the assessment for the fork ahead: some in-between houses are holdable, some are settlement assets to sell well, and knowing which — free, in two minutes — shapes what you fight for in the divorce itself.',
        ],
      },
    ],
    links: [
      { href: '/blog/foreclosure-after-divorce-nj', label: 'When the divorce is final: that story' },
      { href: '/professionals', label: 'Free counselors, judgment-free' },
      { href: '/quiz', label: 'Holdable or sellable? Free answer' },
    ],
  },
  {
    slug: 'scammed-once-recovering-nj',
    title: 'After the Rescue That Wasn\'t: Recovering From a Foreclosure Scam',
    description:
      'They paid $2,800 to a company that did nothing, and the sale date got closer the whole time. The story of the second start — reporting, recovering, and using the real (free) help.',
    tldr:
      'Being scammed once does not end the real options — it just spent money and time the real options never needed. The recovery sequence: stop all payments to the operator immediately, document everything, report it (NJ Division of Consumer Affairs, the FTC, and the county prosecutor take foreclosure-rescue fraud seriously — up-front fees for mortgage relief are generally illegal), then re-enter the process at whatever stage the case actually reached, using the free machinery this time. Restitution sometimes comes; the house is saved or sold well by the same free tools that were always there.',
    published: PUB,
    updated: PUB,
    minutes: 6,
    theme: 'stories',
    sections: [
      {
        h: 'The company that answered every call until it didn\'t',
        body: [
          'An illustrative composite, not a client story: an Elizabeth couple, served with a complaint, signs with a "foreclosure resolution firm" from a mailer — $1,400 up front, $700 monthly, "we handle everything, don\'t talk to the bank or the court." Three months later: no answer filed, the mediation window burned, the firm\'s number ringing to voicemail. They are $2,800 poorer and three months deeper, and the worst part is the instruction they obeyed — don\'t talk to anyone — which was the scam\'s real product.',
        ],
      },
      {
        h: 'Stop, document, report',
        body: [
          'The moment the doubt is real: stop payments, keep every document, text, and receipt, and report — the NJ Division of Consumer Affairs and the FTC both take these complaints, and charging up-front fees for mortgage relief is generally illegal under the MARS rule, with New Jersey\'s own fraud statute stacked on top. Reporting is not just civic duty; enforcement actions produce restitution funds, and your file helps build the case. Then the pivot that matters most: the case, meanwhile, is at whatever stage it is at, and that stage still has its tools.',
        ],
      },
      {
        h: 'The free path, walked through',
        body: [
          'In the composite: a free counselor triages the damage — default was entered while the firm slept. Damage, not doom: a motion to vacate default is filed with a legal clinic\'s help (courts weigh scam circumstances), a late mediation request is accepted for cause, and this time the file is built by people paid by no one: pay stubs, the hardship, the scam paper trail. The mediated modification lands eight months later. Their consumer-affairs complaint joins an action against the operator; two years on, a restitution check returns most of the $2,800. The lesson they repeat to neighbors: the real help was free the whole time, and the fee WAS the red flag.',
        ],
      },
      {
        h: 'Where to start if this is you',
        body: [
          'Today: payments stopped, papers gathered, complaint filed with Consumer Affairs and the FTC — our scams page carries the reporting paths. This week: a free counselor and, if court deadlines got burned, a legal clinic about vacating what the sleep cost. And release the shame; these operations are industrial, professionally scripted, and prosecuted precisely because they fool careful people constantly. The only thing you owe the experience is the phone call that reports it.',
        ],
      },
    ],
    links: [
      { href: '/scams', label: 'Reporting paths and every red flag' },
      { href: '/answers/is-it-too-late', label: 'Whatever stage you\'re at — the tools' },
      { href: '/professionals', label: 'The free help, this time' },
    ],
  },
  {
    slug: 'grandparents-raising-grandkids-foreclosure-nj',
    title: 'Raising the Grandkids on a Budget Built for Two',
    description:
      'The retirement that became a second parenthood, and the mortgage that didn\'t adjust. A story about kinship households and the layered free help they qualify for.',
    tldr:
      'Grandparents raising grandchildren carry a budget shock the mortgage never priced in — and qualify for layered help most never claim: kinship supports and child-only benefits through New Jersey\'s family programs, senior property-tax relief, and the standard free foreclosure machinery, where "household size changed, expenses rose" is a documentable hardship. The path stacks the supports first (raising income and cutting bills), then runs the honest modification math on the stabilized numbers.',
    published: PUB,
    updated: PUB,
    minutes: 5,
    theme: 'stories',
    sections: [
      {
        h: 'Two more chairs at a table set for two',
        body: [
          'An illustrative composite, not a client story: a Pemberton couple in their sixties takes in two grandchildren overnight — a family crisis nobody schedules. The fixed budget that fit a quiet retirement now buys school shoes, groceries for four, and a bigger electric bill. The mortgage, sized decades ago, starts missing. They tell no one, because their generation\'s reflex is that you handle your own.',
        ],
      },
      {
        h: 'The supports built for exactly this household',
        body: [
          'Kinship caregivers in New Jersey can access supports many never hear about: child-only assistance grants that do not count the grandparents\' income, the state\'s kinship navigator programs that walk families to every benefit they qualify for, and school-meal and healthcare enrollments for the kids. On the house side: senior property-tax relief, utility assistance, and an escrow that shrinks when the tax bill does. None of this is charity confusion — it is the system\'s designed response to a household exactly like theirs, sitting unclaimed.',
        ],
      },
      {
        h: 'The free path, walked through',
        body: [
          'In the composite: the school social worker — the first person they finally tell — connects them to a kinship navigator. Within two months: child-only grants in payment, tax-freeze enrollment filed, utility assistance active. The monthly gap shrinks by two-thirds. A free HUD counselor then takes the stabilized budget to the servicer: documented hardship (household change), documented new income (the grants count), and a modification stretches the remainder. The house that raised one generation gets to raise another, and the whole rescue was finally telling someone.',
        ],
      },
      {
        h: 'Where to start if this is you',
        body: [
          'Call 2-1-1 or search NJ kinship navigator this week — one intake conversation surfaces the full stack. Take the stabilized numbers to a free housing counselor before deciding anything about the house. And hear the reframe, from one proud generation to another: claiming supports designed for your grandchildren is not taking help — it is doing the job right. The free assessment on this site handles the mortgage half in two minutes.',
        ],
      },
    ],
    links: [
      { href: '/blog/retiree-fixed-income-foreclosure-nj', label: 'The fixed-income playbook' },
      { href: '/professionals', label: 'Free counselors for the mortgage half' },
      { href: '/quiz', label: 'The mortgage math, stabilized — free' },
    ],
  },
  {
    slug: 'covid-forbearance-never-resolved-nj',
    title: 'The Forbearance That Never Really Ended',
    description:
      'Years after the pandemic pause, some NJ homeowners still carry its unresolved tail — deferred balances, misapplied exits, cases built on paperwork gone wrong. The cleanup story.',
    tldr:
      'Pandemic-era forbearances were supposed to end in clean exits — deferrals, partial claims, modifications — but servicer transfers and paperwork failures left a tail of homeowners whose "resolved" pause never properly resolved, some now facing cases built on disputed arrears. The cleanup path: demand the complete payment history and forbearance exit documents in writing (a Notice of Error / Request for Information under federal servicing rules obligates responses), match every paused payment to its documented disposition, and bring discrepancies to a free counselor or mediation — where paperwork failures are correctable and sometimes case-changing.',
    published: PUB,
    updated: PUB,
    minutes: 6,
    theme: 'stories',
    sections: [
      {
        h: 'Current for three years — then a default letter about 2021',
        body: [
          'An illustrative composite, not a client story: a Howell homeowner took the pandemic forbearance, exited with what the phone rep called a deferral, and paid on time for years afterward. Then the loan transfers, and the new servicer\'s system reads the deferred 2021 payments as ordinary arrears: default letters, late fees, eventually a Notice of Intention — over months he was told were handled. His crisis is not financial. It is archival.',
        ],
      },
      {
        h: 'Paper beats phone, every time',
        body: [
          'Federal servicing rules give this exact fight its weapons: a written Request for Information compels the payment history and the forbearance exit documents; a written Notice of Error obligates the servicer to investigate and respond about the misapplied balance. Phone calls evaporate; these letters create legal duties and deadlines. The homeowner\'s task is reconstruction — every statement, the exit letter if it exists, the transfer notices — because the deferral either was documented somewhere or was botched somewhere, and both discoveries are actionable.',
        ],
      },
      {
        h: 'The free path, walked through',
        body: [
          'In the composite: a free counselor helps draft the RFI and NOE; the response exhumes the original deferral agreement — properly executed, never migrated to the new servicer\'s system. Presented in mediation (the case had been filed by then), the paperwork does what paperwork does: the arrears recharacterize as the deferred balance they always were, the case is dismissed, fees reversed. Elsewhere in the composite\'s universe, a neighbor\'s file shows the uglier version — no exit documents at all — and even there, mediation converts the mess into a modification rather than a judgment. The pattern: these cases are won in the file cabinet.',
        ],
      },
      {
        h: 'Where to start if this is you',
        body: [
          'Send the written requests now — before any dispute sharpens — and keep the responses forever; our servicer directory reaches the right departments. Match every pandemic-era payment to its documented fate. If letters have already started, a free counselor turns your reconstruction into a review-ready file, and mediation exists precisely for disputes with documents on both sides. You did what the system asked in 2020. Making it prove that it kept its half of the record is not aggression; it is bookkeeping.',
        ],
      },
    ],
    links: [
      { href: '/servicers', label: 'Where to send the written requests' },
      { href: '/answers/what-is-the-mediation-program', label: 'Where paperwork disputes get fixed' },
      { href: '/documents', label: 'Decode whatever they\'ve sent you' },
    ],
  },
  {
    slug: 'ignored-it-for-a-year-nj',
    title: 'The Year of Not Opening the Mail — and the Month That Fixed What It Could',
    description:
      'Fourteen unopened letters, one default judgment, and a homeowner who finally looked. An honest story about starting late: what was lost, and what late still saves.',
    tldr:
      'A homeowner who has ignored a New Jersey foreclosure for a year has lost real options — the answer window, likely mediation, months of small-arrears fixes — but the late stage still holds tools: reinstatement generally survives to final judgment, the two sheriff-sale adjournments remain, the home stays sellable to the sheriff\'s deed, surplus rights survive even a completed sale, and vacating early is never required. The honest accounting: lateness is expensive, not fatal, and the month you finally engage still matters enormously.',
    published: PUB,
    updated: PUB,
    minutes: 6,
    theme: 'stories',
    sections: [
      {
        h: 'The drawer where the year went',
        body: [
          'An illustrative composite, not a client story: after his layoff, a Hamilton homeowner develops a system — foreclosure mail goes in the drawer, unopened, where it cannot hurt anyone. The system works flawlessly for thirteen months. When his sister finally sits him down, the drawer holds a complaint, a default, a judgment, and a sheriff\'s notice, layered like sediment. The paralysis was never stupidity; it was fear doing what untreated fear does.',
        ],
      },
      {
        h: 'The honest ledger of a lost year',
        body: [
          'What the drawer cost: the 35-day answer, the mediation window, the modification reviews that work best pre-judgment, and thousands in accumulated fees now welded into the judgment amount. What the drawer could not take: the reinstatement right up to final judgment (spent here), the two statutory adjournments (untouched), the right to sell until the deed transfers (fully alive), the surplus if auction bids exceed the judgment (his, forever), and the lawful occupancy that ends only with proper process. Late is a worse hand — played well, it is still a hand.',
        ],
      },
      {
        h: 'The free path, walked through — from behind',
        body: [
          'In the composite: the sale is five weeks out. Week one: first adjournment requested — ten weeks now — and a free counselor maps the drawer\'s contents into a timeline. The math: judgment ~$260,000, realistic value ~$350,000; the lost year burned options but not the equity. Week two: three cash offers requested; week four: contract at $335,000, second adjournment held in reserve. Closing in week eight pays the judgment; roughly $65,000 survives the worst-played year of his life. The sister\'s intervention was worth about $65,000. The drawer, in the end, was only ever winning by forfeit.',
        ],
      },
      {
        h: 'Where to start if the drawer is yours',
        body: [
          'Open everything today, with someone beside you — the letters are less frightening translated (our documents guide does that page by page). Find your true stage; the deadline calculator turns dates into a plan. Then work the tools that stage still holds, without a minute spent mourning the ones it doesn\'t. And if the paralysis has a deeper root — depression makes drawers like this — treating that is part of this rescue too, and asking for that help is the same kind of strength as finally opening the mail.',
        ],
      },
    ],
    links: [
      { href: '/answers/is-it-too-late', label: 'The direct answer to the 2am question' },
      { href: '/tools/deadlines', label: 'Your real stage, from any letter' },
      { href: '/sell-house-before-sheriff-sale', label: 'The late-stage sale, step by step' },
    ],
  },
  {
    slug: 'equity-rich-elder-targeted-nj',
    title: 'The Paid-Off House Everyone Suddenly Wanted to "Help"',
    description:
      'A small tax problem, a huge equity cushion, and a mailbox full of wolves. The story of how equity-rich seniors get hunted in NJ — and the free wall that stops it.',
    tldr:
      'An older homeowner with large equity and a small default is the predator economy\'s dream target: the debt is trivial next to the asset, so every scheme — deed "rescues," rent-back deals, gouging "help" fees, lowball urgency offers — is engineered to move the equity, not solve the problem. The free wall: solve the actual (small) problem through the tax collector, servicer, or counselor; involve one trusted person in every decision; and treat any proposal that touches the deed as the attack it is. New Jersey\'s Adult Protective Services and Consumer Affairs both act on elder financial exploitation.',
    published: PUB,
    updated: PUB,
    minutes: 5,
    theme: 'stories',
    sections: [
      {
        h: 'A $9,000 problem in a $500,000 house',
        body: [
          'An illustrative composite, not a client story: an 84-year-old Westfield widower, house long paid off, falls behind on taxes during a confused year — $9,000 with penalties. The tax-sale filing is public, and the mailbox learns his name: fourteen letters, six voicemails, two knocks in a week. Every single one is warm. Every single one, examined closely, wants the same thing, and it is not to lend him $9,000.',
        ],
      },
      {
        h: 'Why the schemes all point at the deed',
        body: [
          'The arithmetic of predation: solving his problem pays nobody; acquiring his asset pays enormously. Hence the shapes — "sign the house to us, we\'ll pay the taxes, you rent it back" (equity gone in one signature), the $4,500 "senior advocacy service" (gouging the solvable), the $310,000 cash offer with a today-only deadline (a 40% discount dressed as rescue). New Jersey prosecutes deed-theft and elder exploitation, and post-Tyler, even a completed tax foreclosure cannot simply confiscate the equity — but prosecution is the net below the wire. The wall is better.',
        ],
      },
      {
        h: 'The free wall, built in a week',
        body: [
          'In the composite: his daughter, alarmed by a voicemail she overhears, becomes the trusted second set of eyes — the single most protective structure that exists. The actual fix takes one visit: the tax collector prints the redemption figure, a family bridge loan covers it, and enrollment in the senior tax-relief programs shrinks every future quarter. Total cost of the real solution: an afternoon. The fourteen letters go in a folder labeled evidence, and one operator\'s "rescue" paperwork — which his daughter reads as a deed — goes to Consumer Affairs. The house stays where fifty years of payments put it.',
        ],
      },
      {
        h: 'Where to start — for elders and for their families',
        body: [
          'If it\'s you: no signature, no fee, no deed until one person you trust has read it — that single rule defeats nearly everything. Solve the real debt at its source (collector, servicer, counselor; all free to talk to). If it\'s your parent: get eyes on the mail, join the calls, and know the escalation paths — Consumer Affairs for the schemes, Adult Protective Services if capacity is slipping. The predators\' only real advantage is isolation. End the isolation and the $500,000 house goes back to being just a home.',
        ],
      },
    ],
    links: [
      { href: '/scams', label: 'Every scheme shape, documented' },
      { href: '/blog/property-tax-foreclosure-vs-mortgage-nj', label: 'The tax-sale process itself' },
      { href: '/professionals', label: 'The free help that wants nothing' },
    ],
  },
  {
    slug: 'when-the-co-signer-is-your-parent-nj',
    title: 'Mom Co-Signed. Now the Default Is Hers Too.',
    description:
      'The co-signed mortgage in trouble puts two households on one hook. A story about protecting the parent who helped you buy — while fixing the loan you both signed.',
    tldr:
      'When a parent co-signed the mortgage, every missed payment strikes their credit alongside yours, and a foreclosure case names them too — retirement, their own borrowing power, all exposed to a default they didn\'t cause and may not know about. The path: tell them immediately (they will find out anyway, via credit report or process server), then work the standard free machinery jointly — either signer can engage counselors and servicers, both benefit from every cure, and the honest keep-or-sell math must now weigh two households\' stakes, not one\'s.',
    published: PUB,
    updated: PUB,
    minutes: 5,
    theme: 'stories',
    sections: [
      {
        h: 'The phone call being avoided',
        body: [
          'An illustrative composite, not a client story: a Nutley nurse bought her condo with her mother co-signing — the only way the ratios worked. Three years later, hours cut, she is four payments behind and has told her mother nothing, because her mother is 70 and proud of her and the sentence will not form. Meanwhile the credit bureaus have already told her mother\'s FICO score everything, and a process server may eventually tell her doorstep.',
        ],
      },
      {
        h: 'What co-signing actually exposed',
        body: [
          'A co-signer is a full borrower: jointly liable for the whole debt, named in any foreclosure, credit dinged by every late report. The mother\'s own refinance, car loan, or senior-housing application now carries the daughter\'s arrears. The flip side: full borrowers have full rights — the mother can call the servicer, engage the free counselor, even fund a reinstatement — and every cure heals both credit files going forward. The secret protects nothing; it only forfeits the second adult\'s help.',
        ],
      },
      {
        h: 'The free path, walked through',
        body: [
          'In the composite: the call finally happens, awful for ten minutes, then immediately useful. The mother\'s steadiness changes the file: a free counselor documents the hours cut and the restored schedule the hospital has now posted; the mother covers two of the four arrears as a family loan, shrinking the problem to a size the repayment plan swallows. Both names come back to current within a year. What the daughter was protecting her mother from, the mother mostly fixed in an afternoon — which is, the counselor notes gently, usually how the co-signer stories go once the phone call happens.',
        ],
      },
      {
        h: 'Where to start if this is you',
        body: [
          'Make the call this week — the credit report already did. Then work it as the two-borrower case it legally is: either of you can start the servicer conversation, and the free assessment prices the options against both households\' realities. If keeping fails the math even jointly, sell deliberately and protect the co-signer\'s credit with the same energy you\'d protect your own — because on this loan, it is your own.',
        ],
      },
    ],
    links: [
      { href: '/quiz', label: 'The two-household math, free' },
      { href: '/answers/does-foreclosure-ruin-my-credit', label: 'What both credit files face' },
      { href: '/professionals', label: 'Free counselors for the joint file' },
    ],
  },
  {
    slug: 'bought-at-the-peak-underwater-nj',
    title: 'Bought at the Top, Worth Less Than the Loan: Underwater in NJ',
    description:
      'Negative equity plus a hardship is the hardest hand in foreclosure. The story of playing it right — and why underwater changes tactics, not rights.',
    tldr:
      'Owing more than the home is worth removes the equity-harvest exits and sharpens everything else: retention becomes purely a payment-affordability question (keep if the modified payment fits — negative equity alone is no reason to abandon a livable payment), and exit becomes the short-sale-with-waiver playbook, where the written deficiency release is the entire prize. New Jersey\'s deficiency rules already lean homeowner-friendly (separate suit, tight window, fair-market-value credit), and every tool in the underwater game — counselors, mediation, the short-sale process itself — remains free.',
    published: PUB,
    updated: PUB,
    minutes: 6,
    theme: 'stories',
    sections: [
      {
        h: 'The number under the number',
        body: [
          'An illustrative composite, not a client story: a couple buys a Jackson colonial at the market\'s giddiest month, minimal down. Two years later a relocation falls through, her contract ends, and the comps have sagged: the payoff reads $455,000 against a realistic $415,000. Every option they read about seems to assume equity they don\'t have. The feeling is a trap with no door — which is exactly the moment to notice the two doors underwater leaves wide open.',
        ],
      },
      {
        h: 'Door one: keep, if the payment fits',
        body: [
          'Negative equity is a balance-sheet condition, not a monthly one — if a modification lands a payment their income holds, staying put costs the same rent-like sum a landlord would charge, while amortization and time work the balance back toward daylight. People walk away from affordable payments over the underwater number alone and buy themselves a foreclosure they didn\'t need. The retention review, the counselor, the math: all free, and all indifferent to the equity line.',
        ],
      },
      {
        h: 'Door two: the short sale, with the waiver as the prize',
        body: [
          'In the composite, income says the payment no longer fits even modified — so the exit is a short sale: listed normally, offer submitted to the lender with the hardship package, approval negotiated over weeks. The counselor\'s drumbeat, repeated until they can recite it: the deficiency waiver, in writing, in the approval letter. New Jersey already blunts deficiency claims (a separate action within a strict window, with a fair-market-value credit that erases many), but the written waiver ends the question forever. Approval lands in week fifteen, waiver included; they close owing nothing further, credit dented but rebuilding, the trapdoor exited on foot.',
        ],
      },
      {
        h: 'Where to start if this is you',
        body: [
          'Get the real value (free valuations, plural) and the real payoff before believing you\'re underwater at all — guesses run wrong in both directions. Then one honest question with a free counselor: does any achievable payment fit the income? Yes → retention path. No → short-sale path, waiver-first mindset, mediation available to keep timelines honest. Underwater is the hardest hand, and it is still a hand with rules, doors, and free dealers on your side of the table.',
        ],
      },
    ],
    links: [
      { href: '/answers/do-i-qualify-for-a-short-sale', label: 'Short-sale qualification, plainly' },
      { href: '/answers/can-the-bank-sue-me-for-the-difference', label: 'NJ\'s deficiency rules' },
      { href: '/quiz', label: 'Which door — free, 2 minutes' },
    ],
  },
  {
    slug: 'mixed-use-storefront-foreclosure-nj',
    title: 'The Shop Downstairs, the Apartment Upstairs, the Default on Both',
    description:
      'Mixed-use owners live above their livelihood — and their foreclosure straddles two worlds of law. The story of a storefront building in trouble, and where each rulebook applies.',
    tldr:
      'A mixed-use building — shop below, owner\'s home above — can straddle the line between residential and commercial foreclosure, and which rulebook applies shapes everything: consumer protections like the Fair Foreclosure Act\'s homeowner notices and the court mediation program are built for residential owner-occupants, while commercial cases move faster with tools like rent receiverships and personal-guarantee exposure. The free first move is classification: read your loan documents (a commercial note behaves commercially even over your home), then work the applicable track — this site carries both maps.',
    published: PUB,
    updated: PUB,
    minutes: 6,
    theme: 'stories',
    sections: [
      {
        h: 'One roof, two economies',
        body: [
          'An illustrative composite, not a client story: a Passaic bakery owner lives above her shop — one building, one mortgage, her whole life in a vertical line. When the bakery\'s margins collapse, the building\'s payment fails with them. The default notices carry unfamiliar vocabulary — references to rents, to the "borrower entity," to a guarantee she signed at the closing she barely remembers. Her neighbor\'s foreclosure letters never said any of this, because her neighbor\'s loan was a home loan, and hers, it turns out, mostly isn\'t.',
        ],
      },
      {
        h: 'Which rulebook owns your building',
        body: [
          'The loan documents decide, not the living arrangement: a commercial-purpose note on a mixed-use property generally rides the commercial track — faster timelines, an assignment-of-rents clause reaching the shop\'s and any tenant\'s payments, possible receivership, and a personal guarantee putting other assets in play. Residential-side protections — the Fair Foreclosure Act\'s notice rights, the free statewide mediation program — are built around residential owner-occupied loans. Some mixed-use owners hold true home loans and get the gentler track; the classification is page one of any strategy, and it costs nothing but reading.',
        ],
      },
      {
        h: 'The free-and-cheap path, walked through',
        body: [
          'In the composite: the commercial assessment on this site sorts her documents\' vocabulary in an evening — commercial note, personal guarantee, rents assigned. The strategy follows the track: she keeps the upstairs tenant\'s rent documented and applied to the building (starving the receivership argument), and negotiates directly — commercial lenders deal, since workouts beat ownership of a bakery building. The workout lands: arrears restructured onto the note\'s tail, a forbearance through the winter, the guarantee untested. Her cost was a few hours of reading and one attorney consultation — the commercial world\'s version of nearly-free.',
        ],
      },
      {
        h: 'Where to start if this is you',
        body: [
          'Pull the note and mortgage tonight and look for the tells: business-purpose language, rent assignment, a guarantee. Residential tells → the standard free machinery, mediation included, applies. Commercial tells → our commercial section maps that faster track, and the assessment there is free and confidential. Either way, document every rent dollar\'s path and open negotiations early; buildings with honest books get workouts, and workouts are how the shop, the apartment, and the life above it stay in one piece.',
        ],
      },
    ],
    links: [
      { href: '/commercial', label: 'The commercial track, mapped' },
      { href: '/commercial/assessment', label: 'The free commercial assessment' },
      { href: '/documents', label: 'If your loan is residential: every letter decoded' },
    ],
  },
];
