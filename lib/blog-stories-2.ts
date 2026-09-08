// BLOG SERIES: SITUATION STORIES, PART 2 (10 of 30)
// ---------------------------------------------------------------------------
// Same contract as part 1: one life situation per post, the free path as
// the hero, every walkthrough an ILLUSTRATIVE COMPOSITE labeled as such.
// ---------------------------------------------------------------------------

import type { TopicPost } from './topic-blog';

const PUB = '2026-09-08';

export const STORY_POSTS_2: TopicPost[] = [
  {
    slug: 'escrow-shock-taxes-insurance-nj',
    title: 'Same Mortgage, Bigger Bill: When Escrow — Not the Loan — Breaks the Budget',
    description:
      'The payment jumped $480 and the interest rate never moved. Escrow shock from NJ taxes and insurance, and the free ways to shrink it back.',
    tldr:
      'When property taxes or homeowner\'s insurance jump, the escrow portion of a mortgage payment jumps with them — plus a shortage catch-up — and homeowners fall behind on a loan whose rate never changed. The free countermoves: request the escrow analysis and spread the shortage over the longest period offered, appeal the tax assessment (county deadlines apply), shop the insurance hard, and check New Jersey\'s property-tax relief programs. If arrears already exist, escrow shock documents cleanly as a hardship for a repayment plan.',
    published: PUB,
    updated: PUB,
    minutes: 5,
    theme: 'stories',
    sections: [
      {
        h: 'The mystery of the growing payment',
        body: [
          'An illustrative composite, not a client story: a Gloucester Township couple\'s payment climbs from $2,150 to $2,630 in one annual notice. Rate: unchanged. Principal: unchanged. The movement is all escrow — a tax reassessment plus an insurance renewal that nearly doubled after two storm years, plus the servicer\'s catch-up for the shortage it already advanced. They fall two payments behind while literally arguing with the statement.',
        ],
      },
      {
        h: 'Attacking the inputs, not the mortgage',
        body: [
          'Escrow is a pass-through: shrink the bills underneath and the payment follows. The tax side: every NJ owner can appeal an assessment (county board deadlines, typically spring — and the appeal is about your home\'s assessed value versus true market, which our valuation logic helps you sanity-check free). The state\'s tax-relief programs add another lever for those who qualify. The insurance side: two hard-won quotes routinely beat a lazy renewal by hundreds. The escrow side: servicers can spread a shortage over longer periods on request — ask.',
        ],
      },
      {
        h: 'The free path, walked through',
        body: [
          'In the composite: they request the full escrow analysis (their right) and find the shortage being recovered over twelve months; the servicer agrees to stretch it, trimming $95 monthly. Two insurance quotes later the premium drops $60 a month. The tax appeal, filed with three comparable sales, knocks the assessment back — worth another $70. Payment lands at $2,405; the two arrears go into a six-month repayment plan the servicer offers once the go-forward number is credible. No lawyer, no fee, four phone calls and one county form.',
        ],
      },
      {
        h: 'Where to start if this is you',
        body: [
          'Order your escrow analysis today and read the three inputs separately — tax, insurance, shortage recovery. Attack each with its own free tool, then call loss mitigation about the arrears with your new smaller number in hand; repayment plans get approved on credible budgets. And mind the calendar: assessment appeals have county deadlines that do not care when your renewal arrived.',
        ],
      },
    ],
    links: [
      { href: '/servicers', label: 'Your servicer: analysis and repayment plans' },
      { href: '/quiz', label: 'The whole budget picture, free' },
      { href: '/answers/how-many-payments-can-i-miss', label: 'How much runway two arrears leave' },
    ],
  },
  {
    slug: 'landlord-behind-on-the-building-nj',
    title: 'The Landlord Nobody Pities: Behind on the Building, Owing the Tenants Better',
    description:
      'A small NJ landlord in default sits between a bank and the tenants the law protects. The story of working both duties honestly — and the free help that applies.',
    tldr:
      'A small landlord behind on an investment property faces mortgage foreclosure with fewer protections (owner-occupant programs may not apply) and more duties: New Jersey tenants keep their leases and protections straight through a foreclosure, and rents may be subject to the lender\'s assignment-of-rents clause after default. The honest path: keep tenant obligations impeccable (deposits, habitability, truth), apply rental income transparently, and choose early between curing, restructuring through Chapter 13 where it fits, or selling to an investor with tenants in place.',
    published: PUB,
    updated: PUB,
    minutes: 6,
    theme: 'stories',
    sections: [
      {
        h: 'Two apartments, one vacancy, zero margin',
        body: [
          'An illustrative composite, not a client story: an Irvington owner of a three-family lives in one unit and rents two. When one tenant leaves and the unit needs $14,000 of work he doesn\'t have, the vacancy eats the margin; four missed payments later the Notice of Intention arrives. His instinct — quietly pressure the remaining tenant to accept a rent hike "or else" — is the one move that makes everything worse.',
        ],
      },
      {
        h: 'The duties that don\'t pause for your default',
        body: [
          'New Jersey\'s tenant protections do not soften because the landlord is struggling: leases hold, the Anti-Eviction Act\'s causes are the only causes, deposits stay trust money, habitability stays owed. Meanwhile the mortgage likely contains an assignment-of-rents clause — after default, collected rents can be claimed by the lender, and pocketing them while paying nothing invites ugly arguments in court. The landlord in default is still a fiduciary twice over; behaving like one is also, conveniently, the best litigation posture.',
        ],
      },
      {
        h: 'The free path, walked through',
        body: [
          'In the composite: a free counselor helps him face the arithmetic — as a part owner-occupant, some retention options do apply to him. The workable plan turns on the vacant unit: a modest repair loan from family, a tenant at market rent, and suddenly the building carries itself. He documents every rent dollar toward the property, requests mediation when the complaint lands, and presents the restored rent roll: a repayment plan follows, arrears over twenty-four months. The alternative he priced honestly with two investor offers — selling occupied — stayed the backup, not the panic button.',
        ],
      },
      {
        h: 'Where to start if this is you',
        body: [
          'Separate the two ledgers today: what the building owes the bank, and what you owe the tenants — and keep the second impeccable while you fix the first. Document where rent goes. Price the investor exit early (occupied buildings sell; our companies page lists buyers) so the keep-versus-sell choice is made from numbers, not exhaustion. Free counselors and mediation apply to you as much as to any homeowner, and our tenants guide is worth handing to your own tenants — informed tenants are an asset in every version of this.',
        ],
      },
    ],
    links: [
      { href: '/tenants', label: 'What your tenants are owed — give them this' },
      { href: '/companies', label: 'Investors who buy occupied buildings' },
      { href: '/quiz', label: 'Keep or sell the building: the free math' },
    ],
  },
  {
    slug: 'siblings-disagree-inherited-house-nj',
    title: 'Three Heirs, Three Opinions, One Delinquent Mortgage',
    description:
      'The inherited house that\'s slipping into foreclosure while the family argues. A story about the spreadsheet that ends the argument, and the clock that won\'t wait for it.',
    tldr:
      'When siblings inherit a New Jersey house with a delinquent mortgage, the foreclosure clock runs against the estate while the family debates. The free stabilizers: confirm a representative through the surrogate quickly, send the successor-in-interest packet so the servicer must talk to the family, and put one honest spreadsheet — keep, rent, or sell, each with real numbers — in front of every heir at once. Most family deadlock is asymmetric information; the sheet cures it. Partition lawsuits exist as the expensive last resort nobody should need.',
    published: PUB,
    updated: PUB,
    minutes: 6,
    theme: 'stories',
    sections: [
      {
        h: 'The group chat where the house is dying',
        body: [
          'An illustrative composite, not a client story: three siblings inherit their father\'s Hamilton house. One wants to keep it ("it\'s Dad\'s house"), one wants to sell yesterday, one wants to rent it out and answers messages every third day. Meanwhile: the mortgage is four payments behind, nobody has told the servicer anything, and the Notice of Intention is in a mail pile nobody checks. The estate is losing money weekly to an argument nobody is actually having — just avoiding.',
        ],
      },
      {
        h: 'Stabilize first, decide second',
        body: [
          'Two moves stop the bleeding regardless of the eventual choice. The surrogate: getting an executor or administrator appointed creates one legal actor who can talk, sign, and act. The successor packet: death certificate plus estate papers to the servicer forces it to deal with the family, opens loss-mitigation options, and stops the "we can\'t discuss the account" wall. Both are cheap-to-free, and both work before — and without — family agreement on the big question.',
        ],
      },
      {
        h: 'The free path, walked through',
        body: [
          'In the composite: the organized sibling becomes administrator, sends the packet, and builds the sheet with a free counselor\'s help. Keep: who pays the $2,100 monthly, plus $19,000 arrears now? (Silence.) Rent: $2,300 market rent minus costs barely covers, and someone must be the landlord. (The every-third-day sibling volunteers, convincing no one.) Sell: three cash offers averaging $255,000, or list at ~$290,000 over four more months of carrying costs. Numbers on one page, meeting on one call. They list, with a cash offer as the backstop and the adjournment right as insurance. The argument dies of exposure to arithmetic.',
        ],
      },
      {
        h: 'Where to start if this is you',
        body: [
          'This week: surrogate appointment moving, successor packet sent, mail forwarded to whoever actually opens mail. Then the sheet — our net-proceeds calculator prices each path free, and the assessment sorts the estate\'s options in minutes. If one heir simply will not engage, know that partition actions exist and cost the family dearly; mention them once as weather, not threat, and let the spreadsheet do the persuading. The house does not care who wins. The clock only cares who acts.',
        ],
      },
    ],
    links: [
      { href: '/sell-inherited-house-nj', label: 'The inherited-house playbook' },
      { href: '/tools/net-proceeds', label: 'The sheet that ends the argument' },
      { href: '/answers/inherited-a-house-in-foreclosure', label: 'Heirs\' rights, the direct answer' },
    ],
  },
  {
    slug: 'first-home-first-crisis-nj',
    title: 'Two Years Into the First House, the First Real Crisis',
    description:
      'Thin equity, maximum payment, zero experience with any of this. The young family\'s version of NJ foreclosure, and the free machinery they don\'t know exists.',
    tldr:
      'First-time buyers hit foreclosure trouble with the least equity, the tightest payment-to-income ratio, and no map — but also, usually, an FHA or similar loan with strong loss-mitigation ladders, and decades of earning growth ahead that makes modification math friendlier. The free path: call early (the 120-day pre-filing window is the whole game at thin equity), learn what backs the loan, and let a HUD counselor package the first hardship of your adult life like the routine paperwork it actually is.',
    published: PUB,
    updated: PUB,
    minutes: 5,
    theme: 'stories',
    sections: [
      {
        h: 'The math that was always tight',
        body: [
          'An illustrative composite, not a client story: a Deptford couple bought at the top of their approval — everyone does — with 3.5% down on an FHA loan. Two years in: a baby, one income paused, a transmission, and the first missed payment of their lives. Equity is thin; panic is not. He starts googling at 2am, which is how people find either this site or a predator.',
        ],
      },
      {
        h: 'Why thin equity changes the urgency, not the options',
        body: [
          'With little equity, the sell-and-harvest exit barely exists — selling costs would eat it — so the game is retention, and retention is won early. The assets they do have: an FHA loan (partial claims and a defined review ladder), youth (underwriters modify toward future income more comfortably when the hardship is clearly temporary), and time — federal rules generally hold off any filing until 120+ days delinquent. At one missed payment, they are standing at the very start of the runway with every tool available.',
        ],
      },
      {
        h: 'The free path, walked through',
        body: [
          'In the composite: she makes the call at missed-payment two — terrified, scripted, done in eleven minutes. Documented hardship (parental leave, return date in writing from her employer), FHA loan confirmed. The servicer offers a short forbearance to the return date; when her income resumes, a partial claim lifts the three paused payments into HUD\'s silent lien. Payment unchanged, loan current, credit bruised but healing. Total cost: zero. Total time: four phone calls. The 2am search that found the map instead of the predator was the actual decisive event.',
        ],
      },
      {
        h: 'Where to start if this is you',
        body: [
          'Call at miss one or two, not five — everything in this story worked because of when it happened. Learn what backs your loan (FHA/VA/conventional changes the menu). Use the free counselor even if you feel silly "making a big deal of it"; packaging the first crisis is literally their job. And bookmark the deadline calculator so the letters, when they come, translate into dates instead of dread.',
        ],
      },
    ],
    links: [
      { href: '/blog/fha-loan-behind-partial-claim-nj', label: 'The FHA partial claim, storied' },
      { href: '/blog/first-90-days-nj-foreclosure', label: 'The first 90 days, week by week' },
      { href: '/quiz', label: 'Your runway, free, 2 minutes' },
    ],
  },
  {
    slug: 'retiree-fixed-income-foreclosure-nj',
    title: 'The Pension Covers Groceries or the Mortgage, Not Both',
    description:
      'A retiree\'s foreclosure math is permanent-income math — no raise is coming. The story of the honest fork, and the equity that changes everything about it.',
    tldr:
      'For a retiree on fixed income, foreclosure math is unforgiving in one way — no future raise will rescue an unaffordable payment — and generous in another: decades of payments usually mean major equity, the most protectable asset in the whole process. The free path runs the permanent numbers honestly: trim the inputs (tax relief programs, insurance shopping, escrow), test a modification against real income, and if the house still doesn\'t fit the pension, choose the equity-preserving exit early — sale on your schedule, with the proceeds funding the smaller life well.',
    published: PUB,
    updated: PUB,
    minutes: 6,
    theme: 'stories',
    sections: [
      {
        h: 'The budget with no next chapter',
        body: [
          'An illustrative composite, not a client story: a retired Linden postal worker, widowed, carries the house on a pension and Social Security that once supplemented a salary and now replace it. Taxes rise; the furnace dies; the credit cards absorb what the budget can\'t; eventually the mortgage misses. Working-age advice — "increase your income" — is an insult here. The question is what the permanent numbers can permanently hold.',
        ],
      },
      {
        h: 'Shrink the bills before judging the house',
        body: [
          'Fixed-income foreclosure triage starts on the expense side, because it is the only side that moves: New Jersey\'s senior property-tax relief programs, an assessment appeal if the valuation is stale, hard insurance shopping, utility assistance programs. Sometimes $400 of monthly trims turns an impossible house into a possible one, and every trim is free to pursue. Only after the inputs are minimized does the real question get asked fairly: does the trimmed house fit the pension?',
        ],
      },
      {
        h: 'The free path, walked through',
        body: [
          'In the composite: a free counselor runs it. Tax freeze enrollment plus an insurance switch saves $310 monthly; a modification review stretches the term. The trimmed payment: still $340 over what the pension honestly holds. The other column: $260,000 of equity in a paid-down house. The plan she chooses — clear-eyed, on her own timeline — is a listed sale in spring, a move near her daughter, and the equity invested to throw off the exact monthly gap that doomed the mortgage. The foreclosure case, filed mid-listing, is handled with one adjournment and dies at closing. Nothing was rescued; everything was preserved.',
        ],
      },
      {
        h: 'Where to start if this is you',
        body: [
          'Trims first — the state tax programs and an insurance re-shop cost an afternoon. Then the honest test with a free counselor: permanent payment versus permanent income, no wishful thinking either direction. If the house fits, the retention tools apply like anyone\'s. If it doesn\'t, remember what the equity is for: it is your rescue, pre-saved. Every predator who targets seniors — and they target seniors hardest — is after exactly that number. The free path\'s whole purpose is delivering it to you instead.',
        ],
      },
    ],
    links: [
      { href: '/blog/reverse-mortgage-foreclosure-nj', label: 'If the loan is a reverse mortgage' },
      { href: '/scams', label: 'Why seniors are targeted, and the flags' },
      { href: '/tools/net-proceeds', label: 'What the equity would fund, exactly' },
    ],
  },
  {
    slug: 'disability-and-the-mortgage-nj',
    title: 'When the Disability Is Permanent and the Mortgage Doesn\'t Care',
    description:
      'An income that changed for good meets a payment that didn\'t. The story of resizing a NJ mortgage — or the life — around disability, with the free help that respects both.',
    tldr:
      'Disability onset splits into two mortgage problems: the waiting gap (application to award, when income is near zero) and the new normal (benefits that may permanently sit below the old wage). Forbearance and repayment plans bridge the gap; the new normal demands honest modification math against benefit income — which servicers accept as qualifying income. If the modified payment still doesn\'t fit, the equity-preserving exit on your own timeline beats the auction on theirs, every time. Every tool in this story is free.',
    published: PUB,
    updated: PUB,
    minutes: 6,
    theme: 'stories',
    sections: [
      {
        h: 'The gap between the injury and the award',
        body: [
          'An illustrative composite, not a client story: a Vineland warehouse worker\'s back ends his lifting career at 48. The disability application enters its long federal pipeline; household income drops to his wife\'s part-time wage for the duration. The mortgage misses start in month two of a wait that runs many months more. This gap — real hardship, income temporarily near zero, future income unknown — is its own distinct problem, and it has its own tools.',
        ],
      },
      {
        h: 'Bridging versus resizing',
        body: [
          'The gap wants bridge tools: forbearance documented by the disability application itself, and the 120-day pre-filing runway used deliberately. The award, when it comes, changes the question: benefits are steady, countable income for loss mitigation — but often permanently smaller. Then the resizing question gets asked once, honestly: does a maximally modified payment fit the benefit income? Yes means the retention path; no means the equity conversation, had while the equity is still yours to direct.',
        ],
      },
      {
        h: 'The free path, walked through',
        body: [
          'In the composite: a free counselor gets the forbearance extended twice against the pending application — paper the servicer accepts. The award lands with back pay; the back pay cures part of the arrears, and a modification folds the rest into a term stretched to fit the benefit checks plus his wife\'s hours. It fits — tightly but truly. The counselor\'s parting gift is the drawer plan: the sale math, pre-run, in case the tight fit fails a hard winter. Dignity, in this story, was mostly a sequence of correctly-timed phone calls that cost nothing.',
        ],
      },
      {
        h: 'Where to start if this is you',
        body: [
          'Tell the servicer about the disability application immediately — pending status is documentation, not weakness. Bridge first, resize second, and let benefit income stand tall in the modification review; it counts. Free counselors handle exactly this sequencing, Legal Services helps qualified homeowners, and if a case gets filed during the wait, mediation puts your timeline on the record. The mortgage doesn\'t care what happened to you. The machinery, worked correctly, comes surprisingly close.',
        ],
      },
    ],
    links: [
      { href: '/guides/forbearance', label: 'Bridging the waiting gap' },
      { href: '/guides/loan-modification', label: 'Resizing to benefit income' },
      { href: '/quiz', label: 'Bridge or resize? The free answer' },
    ],
  },
  {
    slug: 'business-failure-home-foreclosure-nj',
    title: 'The Business Went Down and Tried to Take the House With It',
    description:
      'When the LLC dies, the personal guarantee and the home equity are what\'s left on the table. A story about firewalls, and the free help on the homeowner side of one.',
    tldr:
      'A failed business threatens the house through three channels: lost income missing the mortgage, personal guarantees on business debt, and any home-equity borrowing that funded the company. The free homeowner machinery — loss mitigation, counselors, mediation — handles the mortgage channel exactly as it would any income loss. The guarantee and creditor channels need a firewall assessment, often with a bankruptcy attorney (consultations are commonly free), before creditors convert business failure into home liens. Sequence matters: protect the house first, sort the corpse of the business second.',
    published: PUB,
    updated: PUB,
    minutes: 6,
    theme: 'stories',
    sections: [
      {
        h: 'Everything was fine until it very much wasn\'t',
        body: [
          'An illustrative composite, not a client story: a Rahway restaurant owner rides out three thin years, personally guaranteeing the lease and a supplier line to keep the doors open. The doors close anyway. What remains: no salary, a guaranteed lease with years left, $40,000 of guaranteed trade debt, a home equity line that bought the second pizza oven — and a house with $180,000 of equity that every one of those creditors can see as clearly as he can.',
        ],
      },
      {
        h: 'Three channels, three defenses',
        body: [
          'Channel one, the mortgage: income loss is income loss; the standard free machinery applies, and a documented business closure with new W-2 income coming is an ordinary modification story. Channel two, the HELOC: it is a mortgage on the house too — same loss-mitigation conversation, same seriousness. Channel three, the guarantees: unsecured creditors must sue and win before touching the house, and that lag is planning time — settlements for cents on the dollar are common against a defendant with counsel, and Chapter 7 or 13 can discharge or restructure guarantee debt before it becomes judgment liens. The order of operations is the strategy.',
        ],
      },
      {
        h: 'The free path, walked through',
        body: [
          'In the composite: week one is triage with a free counselor — first mortgage and HELOC into review with the closure documented and a management-job offer letter attached. Both modify onto the new, smaller income. The guarantees go to a bankruptcy attorney\'s free consultation: the math favors negotiating (the equity is protectable but the fight is winnable cheaper), and two settlements land at under 30 cents. Eighteen months later he owns the same house, works for someone else, and the business failure cost him the business — which is all it was ever entitled to take.',
        ],
      },
      {
        h: 'Where to start if this is you',
        body: [
          'Separate the piles today: home debts (mortgage, HELOC) versus business debts (guarantees, cards, trade). Home pile: the free machinery, immediately. Business pile: no payments, no promises, no signatures until a consultation maps the firewall — and never, ever secure an unsecured business debt against the house to buy quiet. If a foreclosure case lands mid-chaos, mediation and adjournments buy the sequencing time. The house survives these stories far more often than exhausted owners believe at the beginning of them.',
        ],
      },
    ],
    links: [
      { href: '/commercial', label: 'If business property is in trouble too' },
      { href: '/professionals', label: 'Free counsel, both kinds' },
      { href: '/quiz', label: 'The home-side triage, free' },
    ],
  },
  {
    slug: 'hidden-debt-foreclosure-shame-nj',
    title: 'The Debt Nobody in the House Knew About',
    description:
      'Sometimes the foreclosure letter is how a family finds out. A story about hidden arrears, the shame that hid them, and what the free path does with an ugly starting point.',
    tldr:
      'When arrears have been hidden from a spouse or family — out of shame, gambling or debt spirals, or sheer paralysis — the discovery usually arrives late, via a court paper, with trust damaged alongside the finances. The process does not punish the lateness extra: whatever stage the case is at, the same tools exist at that stage (answer, mediation if in the window, reinstatement to final judgment, adjournments, sale). The free path\'s first step is unglamorous: full disclosure inside the house, then a counselor who has seen every version of this and judges none of them.',
    published: PUB,
    updated: PUB,
    minutes: 6,
    theme: 'stories',
    sections: [
      {
        h: 'The envelope that ends the secret',
        body: [
          'An illustrative composite, not a client story: a Bergenfield wife opens what looks like junk mail and finds a foreclosure complaint eleven payments deep. Her husband has been intercepting the mail for a year — a debt spiral he kept feeding quietly, certain each month he would fix it before anyone knew. The marriage has two crises now, and the one with a 35-day deadline is somehow the easier one.',
        ],
      },
      {
        h: 'What lateness costs, and what it doesn\'t',
        body: [
          'Hiding cost real options — the early-window tools, the small-arrears repayment plans, months of mediation eligibility. But the process is stage-based, not shame-based: at complaint-plus-30-days, there is still an answer to file, possibly a mediation request, reinstatement rights running to final judgment, adjournments unstarted, and a sale market that does not read minds. The couple\'s actual position, measured coldly, is "mid-case with equity" — a position thousands navigate. The feeling that it is uniquely ruined is the shame talking, and the shame has already done its damage.',
        ],
      },
      {
        h: 'The free path, walked through',
        body: [
          'In the composite: the first productive hour is not financial — it is the two of them agreeing the secret is over and both names go on every call. Then the machinery, worked from the actual stage: answer filed (a free legal clinic helps), late mediation request accepted for cause, and a counselor building the real picture — which includes debts beyond the mortgage that make retention math fail. The equity, though, is real. The mediated outcome is time: a marketing period on the record. The house sells; the other debts get a plan of their own; what the family keeps is roughly $120,000 and, slower to rebuild, each other\'s trust. If gambling or a compulsion drove the spiral, the counselor\'s referral list covers that too — 1-800-GAMBLER exists for exactly these households, and using it is strength, not surrender.',
        ],
      },
      {
        h: 'Where to start if this is you',
        body: [
          'End the secret first; every tool works better with two informed adults. Read the papers to learn the true stage — our documents guide translates each one — and work that stage without mourning the earlier ones. Free counselors have seen hidden-debt cases weekly for their whole careers; you cannot shock them, only inform them. And if the hiding had an engine — gambling, compulsive debt — treat the engine, because houses can be replaced and patterns follow you into the next one. This is a sensitive topic; if it is personal for you and you want help finding the right support, ask and we will point you well.',
        ],
      },
    ],
    links: [
      { href: '/documents', label: 'What stage are you actually at?' },
      { href: '/answers/is-it-too-late', label: '"Is it too late?" — the honest answer' },
      { href: '/professionals', label: 'Free, judgment-free help' },
    ],
  },
  {
    slug: 'house-with-code-violations-foreclosure-nj',
    title: 'The House the Town Already Hated: Code Violations Meet Foreclosure',
    description:
      'Open violations, municipal fines, and a foreclosure case on the same address. The story of a property with three governments\' worth of problems, and the exits that remain.',
    tldr:
      'A house carrying open code violations and municipal fines is harder to keep (fines stack on a broken budget), harder to list conventionally (financed buyers\' lenders balk at unresolved violations), but still very sellable: as-is cash buyers price violations and buy through them routinely, with resolution structured at closing. The free moves: get the town\'s full violation and fine ledger in writing, ask code enforcement about compliance timelines and fine-reduction on transfer (towns negotiate, especially to see a problem property responsibly transferred), and run the honest as-is math early.',
    published: PUB,
    updated: PUB,
    minutes: 5,
    theme: 'stories',
    sections: [
      {
        h: 'Three envelopes from three governments',
        body: [
          'An illustrative composite, not a client story: a Passaic homeowner inherits his uncle\'s two-family along with its history — an un-permitted attic conversion, a porch the town red-tagged, and a drawer of unpaid municipal fines with penalties compounding. Then the mortgage arrears he didn\'t know about surface, and the county adds a foreclosure complaint to the pile. Every level of government now has a claim on a building he never chose.',
        ],
      },
      {
        h: 'Why violations narrow but don\'t close the exits',
        body: [
          'Keeping the house means fixing on a broken budget while fines accrue — sometimes viable with a compliance timeline negotiated at code enforcement, which prefers plans to penalties. Listing conventionally struggles: buyers\' lenders and inspectors choke on open violations. But the as-is investor market treats violations as line items — priced, escrowed, or assumed at closing — and municipalities routinely cooperate with transfers that put a problem property into fixing hands, including negotiating fine reductions. The building\'s troubles compress its price; they do not freeze its title.',
        ],
      },
      {
        h: 'The free path, walked through',
        body: [
          'In the composite: the free first stop is town hall — the complete written ledger of violations and fines, and a conversation with code enforcement that surfaces the real posture ("we want it fixed; bring us a buyer with a plan and we\'ll talk about the penalties"). Three as-is offers come in, each pricing the violations differently, $55,000 apart. The winning buyer\'s contract escrows the compliance work; the town agrees in writing to cut penalties by half at transfer; the foreclosure judgment is paid at closing under the first adjournment\'s protection. He walks with less than a clean house would have paid — and more than the auction, the fines, and the fixing would ever have left him.',
        ],
      },
      {
        h: 'Where to start if this is you',
        body: [
          'Town hall before anything: the ledger in writing, the compliance conversation on the record. Then both columns of math — negotiated-compliance keep versus as-is sale — with the free calculator and, ideally, multiple investor offers doing the honest pricing. Watch the specific scam that hunts violation properties ("sign it over, we\'ll handle the town"); the deed moves at a closing or not at all. And use the adjournments: buildings with paperwork problems need closing runway more than clean ones do.',
        ],
      },
    ],
    links: [
      { href: '/blog/what-as-is-actually-means', label: 'As-is, including the paperwork' },
      { href: '/blog/cash-buyer-red-flags', label: 'The buyers to avoid here' },
      { href: '/tools/net-proceeds', label: 'Both columns, honestly priced' },
    ],
  },
  {
    slug: 'zombie-foreclosure-long-delinquency-nj',
    title: 'The Case That Slept for Six Years: Living Inside a Zombie Foreclosure',
    description:
      'Some NJ foreclosures stall for years — servicer transfers, dropped files, dormant dockets. The story of a homeowner who stopped waiting for the knock, and what woke the case owed him.',
    tldr:
      'New Jersey\'s long judicial timelines produce dormant, "zombie" foreclosure cases — years of silence after a complaint, through servicer transfers and refiled paperwork. The homeowner\'s position during the sleep is stronger than it feels: occupancy continues lawfully, defenses (including standing challenges after messy transfers) may strengthen, and the home remains sellable the entire time. The free path treats the silence as planning time, not a pardon: know your docket status (public record), keep records of every transfer notice, and have your chosen exit ready for the day the case stretches awake.',
    published: PUB,
    updated: PUB,
    minutes: 6,
    theme: 'stories',
    sections: [
      {
        h: 'The knock that never came',
        body: [
          'An illustrative composite, not a client story: a Willingboro homeowner is served in 2019 amid a divorce and a layoff. He braces for eviction... and nothing happens. A servicer transfer letter. Silence. Another transfer. A new law firm\'s letterhead, then silence again. Six years on, he still lives there, half-packed in his mind the entire time — six years of a life lived in the doorway.',
        ],
      },
      {
        h: 'What the sleep actually is',
        body: [
          'Dormant cases are usually plumbing, not mercy: loans sold between trusts, files lost in transfers, firms substituted, dismissals for lack of prosecution and quiet refilings. The legal reality during the sleep: you own the home, occupancy is lawful, and interest keeps accruing on paper (though what is ultimately collectible can become genuinely litigable after enough transfers — messy chains of assignment are where standing defenses live, and statutes of limitation are a real conversation for a lawyer on old cases). The docket, meanwhile, is public: you can know your case\'s actual status instead of divining it from the mail.',
        ],
      },
      {
        h: 'The free path, walked through',
        body: [
          'In the composite: year six, he finally does what dread prevented — looks. A free legal clinic pulls the docket: dismissed without prejudice two years ago, never refiled; the loan has changed hands four times. His folder of transfer letters, kept out of habit, becomes the raw material of a strategy. The market has also moved: the underwater 2019 house now holds $110,000 of equity. His chosen plan — sell before any refiled case finds its feet — executes in ten weeks; the payoff negotiation, run through his attorney against a servicer with a shaky file, resolves the disputed fees down substantially. Six years in the doorway, ten weeks out of it, equity in hand.',
        ],
      },
      {
        h: 'Where to start if this is you',
        body: [
          'Look. The docket is public and our documents guide translates what you find; not knowing is the only strictly losing posture. Keep every transfer and servicer letter forever. Get a free or low-cost legal read on old cases — limitation and standing questions are real on long-dormant files and genuinely need counsel. And decide your exit now, calmly, while the case sleeps: zombies wake on the plaintiff\'s schedule, and the homeowner with a ready plan turns that schedule back into his own.',
        ],
      },
    ],
    links: [
      { href: '/documents', label: 'Decode whatever the file shows' },
      { href: '/professionals', label: 'Free legal clinics and who qualifies' },
      { href: '/tools/net-proceeds', label: 'What the sleeping years did to your equity' },
    ],
  },
];
