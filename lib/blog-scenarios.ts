// BLOG SERIES: SCENARIO DEEP-DIVES (15 posts)
// ---------------------------------------------------------------------------
// Practical guides for specific life situations — NOT stories or composites:
// each is a how-to for a household type, built on the site's standard legal
// facts (NOI 30, 35-day answer, cure to final judgment, free mediation,
// adjournments, redemption) plus the situation-specific rules (successor in
// interest, VA line, FHA partial claims, HECM triggers) already used
// elsewhere on the site. Individual advice is always routed to licensed
// professionals.
// ---------------------------------------------------------------------------

import type { TopicPost } from './topic-blog';

const PUB = '2026-09-21';

const T = (
  slug: string, title: string, description: string, tldr: string,
  sections: { h: string; body: string[] }[], links: { href: string; label: string }[],
): TopicPost => ({
  slug, title, description, tldr, published: PUB, updated: PUB, minutes: 7,
  theme: 'scenarios', sections, links,
});

export const SCENARIO_POSTS: TopicPost[] = [
  T(
    'divorce-and-foreclosure-nj-guide',
    'Divorce and Foreclosure in NJ: The Two-Case Survival Guide',
    'When a divorce and a foreclosure run at once, each case complicates the other. Coordinating the timelines, the house decision, and both sets of rights.',
    'A divorce and a foreclosure are two cases with one house in the middle — and the foreclosure’s clocks do not pause for the family court’s. The essentials: both borrowers stay liable regardless of who the divorce assigns the house to; the 35-day answer belongs to each served spouse independently; loss mitigation can proceed on one income with documented support; and the house decision (keep, buy out, sell) should be priced with the real payoff, not the emotional one. Coordinate the lawyers — silence between them is what loses houses.',
    [
      { h: 'Two courts, one house, zero pauses', body: [
        'The Chancery judge handling the foreclosure does not wait for the family part to divide your assets, and the servicer’s arrears grow through every mediation session of the divorce. Practical consequence: someone must defend the foreclosure now — file the answer inside 35 days (either spouse’s answer keeps the case contested), request the free foreclosure mediation, and keep a complete loss-mitigation file moving — even while the divorce decides who ultimately keeps or sells the home.',
        'The mortgage itself ignores your divorce: a marital settlement agreement assigning the house to one spouse does not remove the other from the note. Only a refinance, an assumption where the loan allows one, or a sale actually ends the departing spouse’s liability — and their credit exposure — so the divorce’s paper decision needs a mortgage-world execution plan attached.',
      ]},
      { h: 'The house decision, priced honestly', body: [
        'Three exits, one arithmetic. Keep-and-refinance: needs one income that qualifies and enough equity — price it early with a lender before promising it in negotiation. Keep-with-modification: servicers evaluate the occupying borrower’s real budget, including documented support payments; a HUD counselor (800-569-4287, free) builds that file. Sell: often the honest answer, converting the fight over an asset into a division of proceeds — and a sale before any sheriff sale date protects every dollar of the equity being divided.',
      ]},
      { h: 'Traps specific to divorcing owners', body: [
        'The spite default: one spouse stops paying to pressure the other, burning marital equity both will want later — courts and mediators see through it, and the arrears land on both credit files. The abandoned defense: each spouse assumes the other is handling the foreclosure, and neither answers. The unilateral deal: one spouse signs a listing, a cash contract, or a deed “solution” without authority over jointly-held property. Every one of these is prevented by the same boring fix: the two lawyers (or the mediator) exchanging one status email a week about the mortgage case.',
      ]},
    ],
    [
      { href: '/tools/net-proceeds', label: 'Price the buyout or the sale, free' },
      { href: '/answers/how-long-to-respond-to-complaint', label: 'The 35-day answer, explained' },
      { href: '/command-center', label: 'Your dashboard: stage, county, goal' },
    ],
  ),
  T(
    'inherited-house-in-foreclosure-nj-guide',
    'You Inherited a House in Foreclosure: The NJ Heir’s Guide',
    'The loan didn’t die with the borrower, but heirs have real rights: successor-in-interest status, loss mitigation without assuming the debt, and honest exits.',
    'When a parent or relative dies leaving a mortgaged home in default, federal servicing rules are on the heir’s side: confirmed successors in interest can communicate with the servicer, receive account information, and apply for loss mitigation — without becoming personally liable on the debt. The estate matters (who has authority runs through the surrogate’s court), the foreclosure clocks keep running, and the equity question decides everything: an inherited house with equity is an inheritance worth defending; one without may be worth a negotiated walk-away that costs heirs nothing.',
    [
      { h: 'Your standing: successor in interest', body: [
        'The servicer’s phone reps may stonewall “unauthorized” callers, but the rules are specific: an heir who documents the death and their relationship or devise is entitled to confirmation as a successor in interest — after which the servicer must communicate, provide account information, and evaluate loss-mitigation applications. Send the death certificate and inheritance documentation in writing, ask for successor confirmation by name, and keep the paper trail. A HUD counselor (800-569-4287, free) walks this exact path constantly.',
        'Authority inside the family runs through the estate: an executor or administrator appointed by the county surrogate can act for the estate, sign listings, and pursue sales. Multiple heirs need one voice early — the foreclosure will not wait for a sibling standoff to resolve.',
      ]},
      { h: 'The equity fork, without sentiment', body: [
        'Run the numbers before the memories vote: realistic market value minus the payoff (get the written quote — arrears and fees included). Equity present: defend the process (answer the case if served — the estate or occupying heir has standing; request mediation where eligible) and either keep the loan performing under a successor’s modification or sell on the family’s timeline and divide proceeds. No equity: heirs are not obligated to rescue an underwater loan — a short sale or deed-in-lieu negotiated by the estate, or simply declining to intervene, can be the rational path, and personal liability does not attach to heirs who never assumed the note.',
      ]},
      { h: 'The traps that eat inheritances', body: [
        'Paying blindly: heirs draining savings into a loan nobody has analyzed. The probate predator: “inheritance advance” and “we buy inherited houses” operators pricing your grief — every offer gets compared to a real valuation. The empty-house spiral: vacancy invites preservation lockouts, municipal violations and theft; keep the house visibly occupied-in-fact (utilities, mail, checks) while decisions are made. And reverse-mortgage inheritances have their own clock and rules — see our HECM guide, and get the servicer’s heir-options letter in writing.',
      ]},
    ],
    [
      { href: '/answers/inherited-a-house-in-foreclosure', label: 'The short-answer version' },
      { href: '/blog/letters-after-sheriff-sale-nj', label: 'If a sale already happened: what’s left' },
      { href: '/tools/net-proceeds', label: 'The inheritance math, run free' },
    ],
  ),
  T(
    'self-employed-foreclosure-nj-guide',
    'Self-Employed and Behind on the Mortgage: The NJ Guide',
    'Contractors, drivers, stylists, freelancers: your income is real but your paperwork is different. Making loss mitigation work on 1099 income.',
    'Self-employed homeowners fail loss-mitigation reviews for documentation reasons far more than income reasons: the machine wants a W-2 story and you have a real one. The fixes are known — profit-and-loss statements, bank-deposit documentation, tax transcripts, a year’s average instead of a bad quarter — and a free HUD counselor assembles them daily. The legal clocks are identical to everyone’s (35-day answer, free mediation, cure to final judgment); only the income exhibit changes.',
    [
      { h: 'Why the machine misreads you', body: [
        'Underwriting software digests pay stubs natively; it chokes on seasonality, lumpy invoices, and legitimate expense write-offs that make taxable income look smaller than real cash flow. The result is denials that read “income insufficient” when the truth is “income undocumented.” Your application’s job is translation: a clean year-to-date profit-and-loss, bank statements whose deposits corroborate it, the last two tax returns, and a short letter explaining the business’s rhythm. Consistency across documents matters more than any single number.',
      ]},
      { h: 'The tools that fit 1099 life', body: [
        'Repayment plans sized to your real seasonality — front-loaded in your strong months — succeed where flat plans fail; say so in the proposal. Forbearance fits documented interruptions (an injury, a lost contract, an equipment failure) with recovery visible. Modification reviews accept self-employment income when it is papered as above — and the mediation table (free, eligible owner-occupants) is a strong venue for a self-employed case, because a counselor-built package plus a human explanation beats the portal’s parser. Escrow analysis deserves a look too: business-owning households often run property-tax appeals and insurance shopping that shrink the payment itself.',
      ]},
      { h: 'Two cautions for business owners', body: [
        'Keep the business and the house untangled: draining business working capital to chase mortgage arrears can kill the income that would have supported the modification — run both budgets with the counselor before choosing which fire to fight. And if the house secures business debt too (an SBA lien, a business HELOC), the payoff stack has more layers than the mortgage statement shows; pull the full lien picture before pricing any exit. Our seven-options comparison and the net-proceeds calculator handle the arithmetic free.',
      ]},
    ],
    [
      { href: '/answers/options-if-behind-on-mortgage', label: 'All the structures, compared' },
      { href: '/blog/the-npv-test-how-banks-decide-modifications', label: 'How the bank’s math reads your file' },
      { href: '/professionals', label: 'Free counselors who speak 1099' },
    ],
  ),
  T(
    'veterans-va-loan-foreclosure-nj-guide',
    'Veterans Facing Foreclosure in NJ: The VA Playbook',
    'VA loans carry their own rescue tools and their own advocate. The VA menu, the 877 number, and how NJ’s process rights stack on top.',
    'A veteran behind on a VA loan has an extra layer nobody else gets: the VA’s own loan technicians (877-827-3702) who advocate directly with servicers, plus VA-specific servicing options layered onto the standard menu. Identify the loan as VA in every conversation, call the VA line early, and stack the state rights on top — the 35-day answer, free NJ mediation, cure to final judgment. County Veterans Service Officers add free local help, and no legitimate VA program ever charges a fee.',
    [
      { h: 'The advocate other borrowers don’t have', body: [
        'The VA guarantees the loan, which gives it both skin in the game and leverage with your servicer — and it staffs loan technicians whose job is intervening for veterans in default. The number is 877-827-3702. Call it as early as the first missed payments: technicians can press a servicer for the VA menu’s options, untangle stalled reviews, and explain where your case stands in VA terms. It costs nothing, and servicers respond differently to files with VA attention on them.',
      ]},
      { h: 'The VA menu, and the standard one under it', body: [
        'VA servicing options have historically included repayment plans, forbearance, loan modifications tailored to VA loans, and in defined periods VA-specific programs for serious delinquency — the exact menu evolves, which is precisely why the technician call and a HUD counselor (800-569-4287) beat any blog’s snapshot, ours included. Underneath, everything standard still applies: complete applications move files, the NOI’s 30-day warning and the 35-day answer run on state law, free NJ mediation seats eligible owner-occupants, and adjournments plus the 10-day redemption guard the sale stage.',
      ]},
      { h: 'NJ adds local muscle', body: [
        'Every New Jersey county runs a Veterans Service Office — free caseworkers who help with VA paperwork and benefits that may shore up the household budget a modification needs (disability compensation reviews, pension questions). Stack the free layers: VA technician + county VSO + HUD counselor + LSNJ (1-888-576-5529, income-qualifying) covers federal, benefits, servicer, and courtroom fronts without a dollar spent. The paid “veteran rescue” pitch exists too, wearing a flag — the upfront-fee rule applies to it exactly as to every other rescue product: generally illegal, always outranked by the free seats.',
      ]},
    ],
    [
      { href: '/servicers', label: 'Your servicer’s VA loss-mit door' },
      { href: '/answers/what-is-the-mediation-program', label: 'NJ’s free mediation, on top of VA help' },
      { href: '/free-checklist', label: 'The Week-One Checklist (free PDF)' },
    ],
  ),
  T(
    'seniors-reverse-mortgage-foreclosure-nj-guide',
    'Seniors and Reverse Mortgage (HECM) Trouble in NJ: The Guide',
    'Reverse mortgages foreclose differently: taxes, insurance and occupancy are the triggers. The HECM rules, the fixes, and protections for spouses and heirs.',
    'A reverse mortgage (HECM) never misses a monthly payment — its defaults come from property charges (taxes, insurance) or occupancy questions, and its fixes are HECM-specific: repayment plans for charge arrears, at-risk extensions in defined hardship cases, and HUD-counselor navigation of servicer requirements. Non-borrowing spouses have protections that can allow them to remain; heirs get defined options (pay off at the lesser of balance or a percentage of value, sell, or walk away). NJ’s court process still applies — HECM foreclosures are judicial here too.',
    [
      { h: 'How a loan with no payments defaults', body: [
        'The HECM deal was: no monthly payments, but you keep the property charges current and live in the home as your principal residence. The defaults follow: a missed tax quarter or lapsed insurance policy the servicer then advances and demands; or an occupancy certification unreturned — sometimes just a lost letter — flagging the home as non-occupied. Every HECM default notice deserves the same first response: identify which trigger fired, in writing, because the fixes are trigger-specific and several exist only if invoked early.',
      ]},
      { h: 'The fixes, and the people they protect', body: [
        'Property-charge defaults: servicers offer repayment plans for advanced charges within program limits, and New Jersey’s own property-tax relief (the senior freeze, ANCHOR-style programs as they stand in a given year) attacks the underlying bill — a HUD counselor threads both. Occupancy flags: cured by documentation when the borrower genuinely resides there; act fast and keep proof. Non-borrowing spouses: federal protections can allow a surviving spouse who was not on the loan to remain, under conditions worth confirming with a counselor or attorney the week of the borrower’s death, not the month after. Heirs: a defined menu — keep the home by paying the lesser of the balance or the program’s percentage of value, sell and keep any excess, or decline without personal liability.',
      ]},
      { h: 'The senior-targeting industry', body: [
        'Equity-rich seniors draw the worst actors: “helpers” harvesting deeds, contractors inflating liens, family members with paperwork. The rules protect where they are known: no deed signatures outside a real closing with independent advice, no upfront fees for any foreclosure help, and every big decision run past one disinterested professional — the free HUD counselor line (800-569-4287) has HECM-specialist agencies, and LSNJ (1-888-576-5529) serves income-qualifying seniors. NJ’s judicial process guarantees court oversight and notice at every step; nobody loses a home to a phone call.',
      ]},
    ],
    [
      { href: '/answers/what-happens-to-my-equity', label: 'Equity: what survives, who gets it' },
      { href: '/guides/surplus-funds', label: 'If a sale happens: the surplus rules' },
      { href: '/professionals', label: 'HECM-fluent free counselors' },
    ],
  ),
  T(
    'medical-debt-illness-foreclosure-nj-guide',
    'Illness, Medical Bills, and the Mortgage: The NJ Guide',
    'A health crisis is the classic foreclosure trigger — and the classic comeback case. Sequencing the medical fight and the mortgage fight so both survive.',
    'Medical-crisis defaults have a shape lenders recognize: sudden, documented, and often temporary — which is exactly the hardship the loss-mitigation menu was designed around. The sequence that works: stabilize the medical billing (negotiate, apply for charity care — NJ hospitals have mandated programs; never pay medical bills with mortgage money reflexively), document the interruption, and file a complete application telling the arc. Disability income counts in reviews; the process clocks (35-day answer, free mediation) run regardless of any diagnosis.',
    [
      { h: 'Which fire first: the triage order', body: [
        'Households in a health crisis often pay the loudest bill instead of the most important one. The mortgage secures your home; medical debt is generally unsecured — collectors call louder but hold less. New Jersey hospitals are required to run charity-care programs, and billing offices negotiate reductions and payment plans routinely. Triage accordingly: engage the hospital’s financial assistance office, keep housing dollars pointed at housing where possible, and never let a card-swipe at a billing desk quietly consume a mortgage payment.',
      ]},
      { h: 'Telling the story the review can approve', body: [
        'A medical hardship file is strong when it has an arc: onset (dates, documentation — a doctor’s note suffices; full records are not required), the income effect (short-term disability stubs, FMLA papers, reduced hours), and the recovery plan (return-to-work date, long-term disability award, household adjustment). Forbearance bridges a documented temporary gap; a repayment plan spreads the missed months across recovered income; a modification reprices a permanent change, and disability income is qualifying income. The free counselor (800-569-4287) builds it; the free mediation seat presents it to someone with authority.',
      ]},
      { h: 'While treatment continues', body: [
        'The court process does not pause for chemotherapy schedules — so borrow hands: a family member with a simple authorization can talk to the servicer, LSNJ (1-888-576-5529) handles income-qualifying cases, and the answer (35 days) can be filed even from a hospital, keeping every later option alive. If the honest math says the house no longer fits the new reality, a controlled sale that converts equity into recovery-time runway is a victory, not a defeat — and it is a decision to make with real numbers, on your timeline, not a collector’s.',
      ]},
    ],
    [
      { href: '/answers/options-if-behind-on-mortgage', label: 'The structures that fit interruptions' },
      { href: '/free-checklist', label: 'The one-page plan for a hard season' },
      { href: '/command-center', label: 'Your dashboard, three answers in' },
    ],
  ),
  T(
    'job-loss-foreclosure-nj-guide',
    'Laid Off and Behind on the Mortgage: The NJ Guide',
    'The layoff default is the most common story in foreclosure — and the most solvable when worked early. The bridge tools, the search-window math, and the honest fork.',
    'A layoff default is a race between your job search and the process clocks — and the clocks are generous if you engage them: ~120 days before most lenders file, the NOI’s 30-day gate, the 35-day answer, months of case time. The bridge tools fit exactly this: unemployment income counts in reviews servicers run for temporary hardship, forbearance formalizes the gap, and a repayment plan catches up the missed months once the new job lands. The fork arrives if the search runs long: reprice the house honestly before the equity pays for denial.',
    [
      { h: 'The first month: build the bridge', body: [
        'File for unemployment immediately (it is qualifying income in hardship reviews, and the delay costs real dollars), call the servicer’s loss-mitigation line before the second missed payment, and put the household on a wartime budget with housing at the top. Say the word “forbearance” if the search looks short and “repayment plan” for the catch-up after — and get the free counselor (800-569-4287) building the file while you build the resume. Early files get the calm reviews.',
      ]},
      { h: 'The middle months: work both clocks', body: [
        'If a case files anyway, the process rights are your runway: the 35-day answer (with the free mediation request) slows the calendar and seats a decision-maker; a complete application carries review protections; and severance, unemployment, and a documented search all belong in the paperwork. Beware the gap trap: burning retirement accounts to stay current on a house the new salary cannot carry — run the sustainable-payment math with the counselor before the 401(k) votes.',
      ]},
      { h: 'The honest fork at month six', body: [
        'When the search runs long or the new offer pays less, the house question deserves daylight: what payment does the realistic income carry, and what does the equity convert to if protected? A modification that reprices to the new salary keeps the home when the numbers work. When they do not, a controlled sale — on the runway the process rights preserved — converts the equity into the next chapter’s capital, at market price. Both endings beat the third one: the auction that arrives while a household waits for the old salary to come back.',
      ]},
    ],
    [
      { href: '/tools/cost-of-waiting', label: 'What each month of waiting costs' },
      { href: '/answers/how-many-payments-can-i-miss', label: 'The pre-filing runway, exactly' },
      { href: '/compare', label: 'All 7 exits, honestly compared' },
    ],
  ),
  T(
    'disability-fixed-income-foreclosure-nj-guide',
    'On Disability or Fixed Income and Facing Foreclosure: The NJ Guide',
    'SSDI, SSI, pensions: fixed income changes the math but not the rights. The structures that fit, the benefits that count, and the protections worth knowing.',
    'Fixed-income households facing foreclosure hold more position than they feel: disability and retirement income are qualifying income in loss-mitigation reviews, escrow-driven payment jumps (the usual villain) have their own fixes including NJ’s property-tax relief programs, and the process rights are income-blind — the 35-day answer, free mediation, cure to final judgment. The honest constraint: a fixed income cannot stretch, so the winning structures reduce the payment (modification, escrow fixes) rather than promising catch-up money that does not exist.',
    [
      { h: 'Your income counts — document it their way', body: [
        'SSDI, SSI, pensions and annuities are all qualifying income; the file just needs award letters and bank statements instead of pay stubs. The review question is sustainability, and fixed income actually answers it well — it arrives every month, forever, which underwriting models respect. Where households stumble is undocumented informal support (a child covering utilities, a renter in the basement): paper it — a simple signed contribution letter plus matching deposits — and the budget the review sees becomes the budget that exists.',
      ]},
      { h: 'Attack the payment, not just the arrears', body: [
        'Fixed-income defaults are usually escrow stories: taxes and insurance climbed while the income did not. So fight on that front: New Jersey’s senior/disabled property-tax relief programs (the freeze, the state rebates as constituted each year) directly shrink the escrow engine; a tax appeal fits where assessments outrun reality; insurance re-shopping does the rest. Then the mortgage structures: a modification that stretches the term or reduces the rate lowers the monthly permanently — the ask that fits a fixed income — while repayment plans only work when the arrears are small and something in the budget genuinely freed up.',
      ]},
      { h: 'Protections and predators', body: [
        'Know two protections: federal benefits are generally protected from garnishment by most creditors (housing decisions should never be driven by an unsecured collector’s threats), and NJ’s judicial process guarantees notice and court oversight at every step. Know the predator too: fixed-income equity is the reverse-mortgage-pitch, deed-theft, and rescue-fee industry’s favorite target. The free bench answers all of it — HUD counselors (800-569-4287), LSNJ (1-888-576-5529), the free mediation seat — and no legitimate door in this entire process charges an upfront fee.',
      ]},
    ],
    [
      { href: '/blog/escrow-shock-why-your-payment-jumped', label: 'The escrow jump, dissected' },
      { href: '/answers/what-is-the-mediation-program', label: 'The free table with a decision-maker' },
      { href: '/scams', label: 'The fixed-income predators, catalogued' },
    ],
  ),
  T(
    'small-landlord-foreclosure-nj-guide',
    'Small Landlords Facing Foreclosure in NJ: The Two-to-Four-Unit Guide',
    'When the building behind on its mortgage has tenants in it: your workout math, their protections, and the moves that respect both.',
    'A small landlord’s foreclosure has three parties: you, the lender, and tenants whose NJ protections survive whatever happens to your loan. The workout math actually favors you — documented rents are qualifying income, and occupied buildings are collateral lenders prefer performing — but investor-property cases get less regulatory protection than owner-occupied ones (mediation eligibility centers on owner-occupants), so the margin for silence is thinner. Keep collecting rent, keep providing services, and never monetize desperation with your tenants’ deposits or ghost-month rents.',
    [
      { h: 'Your building is your application', body: [
        'Leases, a rent roll, and twelve months of deposits are the strongest exhibits a small landlord can file: they show the income that carries a repayment plan or modification. If units sit vacant, filling them honestly is loss mitigation. If you owner-occupy one unit of a two-to-four family, say so everywhere — owner-occupants get the free NJ mediation seat and the strongest servicing protections; pure investor loans travel a harder road with fewer program doors, which makes early, complete applications matter even more.',
      ]},
      { h: 'Your tenants’ rights are load-bearing', body: [
        'New Jersey’s protections mean a foreclosure — even a completed one — generally does not evict your tenants: their leases ride through to any new owner. Practical implications now: keep collecting rent (it is your workout income) and keep providing services (withheld services create the tenant claims and rent-withholding that crater buildings mid-case). Never spend security deposits — they are the tenants’ money under NJ law, with real penalties. And tell tenants the truth in one page if a case files: their tenancy continues, rent remains due to you until a court or closing says otherwise, and scam letters demanding rent elsewhere should come to you.',
      ]},
      { h: 'The exits, landlord edition', body: [
        'An occupied multi-family sells — investors buy buildings with paying tenants every week, and a controlled sale before any sheriff sale converts your equity at cap-rate prices instead of auction ones. A deed-in-lieu rarely fits (junior liens and occupied units complicate acceptance), while Chapter 13 can catch up arrears where the rents genuinely cover the plan — attorney territory. Whatever the ending, the deposits transfer with the building, the tenants transfer with their rights, and the landlord who ran the building straight through the storm exits with equity and without lawsuits.',
      ]},
    ],
    [
      { href: '/tenants', label: 'The tenant protections, in full' },
      { href: '/answers/can-i-rent-out-my-house-during-foreclosure', label: 'Renting during a case, answered' },
      { href: '/tools/net-proceeds', label: 'The building’s exit math, free' },
    ],
  ),
  T(
    'condo-hoa-foreclosure-nj-guide',
    'Condo Owners and HOA Trouble in NJ: The Double-Foreclosure Guide',
    'Condo cases have two creditors who can each foreclose: the bank and the association. The lien stack, the association’s powers, and settling both fronts.',
    'A condo owner in trouble faces two potential foreclosures: the mortgage lender’s, and the association’s — NJ condo associations hold lien and foreclosure powers over unpaid assessments that owners chronically underestimate. The two-front rules: never ignore association arrears because they are “small”; know that a limited slice of association liens can even take priority over the mortgage in NJ; and settle both fronts in any workout or sale, because a closing cannot happen over an unreleased association lien.',
    [
      { h: 'The second creditor in the building', body: [
        'Assessments are not optional dues; they are lien-backed obligations, and an association board (with its attorneys and management company) can record liens, sue, and ultimately foreclose over them. New Jersey law even grants a limited priority slice for certain association liens ahead of the first mortgage — which is why lenders themselves sometimes pay association arrears and add them to your account. Treat every association delinquency letter as real process: respond, get an itemized ledger (late fees and legal charges on association ledgers are reviewable and frequently negotiable), and open the payment-plan conversation before the file reaches their attorney.',
      ]},
      { h: 'Working both fronts at once', body: [
        'The mortgage front runs the standard playbook — 35-day answer, free mediation for eligible owner-occupants, complete loss-mitigation file. The association front runs on negotiation: boards routinely accept payment plans and fee reductions because foreclosing is expensive for them too, and a unit returned to paying status beats a unit in litigation. Coordinate the budgets honestly: a modification that ignores the assessment line fails in month two. And in any sale, the association ledger is a closing item — order the payoff letter early, dispute junk fees in writing, and remember the buyer’s title company will not fund over an open lien.',
      ]},
      { h: 'Condo-specific endgame notes', body: [
        'If the mortgage forecloses, the association’s excess claims generally chase the surplus-funds line like other juniors; if the association forecloses (rarer, but real), the buyer takes subject to the first mortgage — a strange auction with its own hazards for bidders and owners alike. Either way the owner’s protections hold: judicial process, notice, the sale-stage adjournments, the 10-day redemption. And the unit’s equity — often substantial in NJ’s transit-town condo markets — follows the same law as every house: it survives if defended, and evaporates in silence.',
      ]},
    ],
    [
      { href: '/blog/second-mortgages-helocs-hoa-liens-foreclosure-nj', label: 'The full junior-lien field guide' },
      { href: '/guides/surplus-funds', label: 'Where excess claims land after a sale' },
      { href: '/command-center', label: 'Your two-front dashboard' },
    ],
  ),
  T(
    'underwater-mortgage-nj-guide',
    'Underwater on Your Mortgage in NJ: The No-Equity Playbook',
    'When you owe more than the house is worth, the playbook inverts: negotiate, don’t defend equity that isn’t there. Short sales, DILs, and the terms that matter.',
    'An underwater foreclosure inverts the usual advice: with no equity to protect, your leverage is the lender’s cost of foreclosing, and your wins are negotiated terms — a short sale or deed-in-lieu with the deficiency waived in writing, relocation assistance where programs offer it, a certain timeline, and the gentlest available credit reading. The process rights still matter (they are your negotiating clock), the tax question is real (canceled debt and its exclusions — a preparer’s territory), and modification is still worth testing first: payment relief doesn’t require equity.',
    [
      { h: 'First, verify you’re actually underwater', body: [
        'Owners chronically misprice their own houses in both directions — and the fee-stacked payoff moves too. Run it properly, free: a realistic valuation (not the tax assessment, not a neighbor’s story) against the written payoff quote. Genuinely underwater changes the playbook; barely underwater or break-even often plays like thin equity, where a well-run sale still beats every alternative on credit and closure. The calculator takes ten minutes and reorders everything after it.',
      ]},
      { h: 'The negotiation, played from strength you didn’t know you had', body: [
        'The lender’s alternative to dealing with you is New Jersey’s long judicial foreclosure plus REO costs plus an auction on a house worth less than the debt — expensive from their chair, which is why short sales and DILs get approved. Your term sheet: the deficiency expressly waived in writing (NJ’s mechanics already disfavor pursuit; written ends the question), relocation assistance where the investor’s program offers it, approval windows long enough to close, agreed move-out dates that fit a lease you’ve lined up, and clarity on credit reporting. Modification first if staying is the goal — payment relief runs on income math, not equity — and Chapter 13 where restructuring everything at once serves the household.',
      ]},
      { h: 'The underwater-specific traps', body: [
        'Paying a “short sale negotiator” upfront: generally illegal, always unnecessary — agents and counselors do this inside the normal free-plus-commission machinery. Walking away informally: abandonment forfeits the negotiated terms (waivers, assistance, dates) that are the whole prize, and vacancy invites preservation chaos while your name is still on the deed. And ignoring the 1099 question until April: canceled debt can generate a tax form, insolvency and other exclusions often neutralize it, and the time to ask a tax professional is before signing, not after filing season starts.',
      ]},
    ],
    [
      { href: '/guides/short-sale', label: 'The short sale, start to finish' },
      { href: '/blog/taxes-after-foreclosure-short-sale-nj', label: 'The 1099 surprise, explained' },
      { href: '/answers/what-is-a-deed-in-lieu', label: 'Deed in lieu: when it fits' },
    ],
  ),
  T(
    'high-equity-foreclosure-nj-guide',
    'High Equity, Behind on Payments: The NJ Owner’s Guide',
    'Lots of equity and a default is a solvable problem wearing a scary costume — and a target on your back. Defending six figures through the process.',
    'A high-equity default is the most solvable case in foreclosure — the equity itself can fund every exit — and the most hunted: everything from lowball flyers to deed theft exists precisely for owners like you. The playbook: defend the clocks (the equity pays for the time), consider equity-tapping fixes early (a refinance or family-funded cure while both still price), sell on your own calendar if exit is right, and treat every unsolicited “helper” as someone pricing your fear against your asset.',
    [
      { h: 'Why your case is the industry’s favorite', body: [
        'Lis pendens lists get mined daily and sorted by exactly one thing: the spread between debt and value. High-equity addresses get the most mail, the most door-knocks, and the most creative predation — because a stolen or panic-priced six-figure spread pays for a lot of marketing. Reframe accordingly: the volume of “help” arriving is proof of how much your position is worth. Nobody sends twelve letters to take over a worthless problem.',
      ]},
      { h: 'The equity-funded fixes, in order of preference', body: [
        'Early, a cash-out refinance or home-equity loan can clear the arrears outright — it prices best before the case advances and the credit damage deepens, which is one more argument against waiting. A family loan against the real reinstatement quote does the same job without a bank (paper it like a deal). The cure right runs to final judgment, so even mid-case the equity can buy the loan back to normal. And where staying is not the goal, the controlled sale is the crown jewel of this playbook: NJ’s process rights — answer, mediation, adjournments — exist to give a market sale the runway that converts the full spread at retail.',
      ]},
      { h: 'The defense rules, non-negotiable at these stakes', body: [
        'Never sign a deed outside a real closing — the “temporary transfer” pitch is aimed at exactly your file. Never accept the first cash number, or the fifth, without your own valuation on the table. Answer the complaint even if you plan to sell — an undefended case can outrun a listing. Watch the payoff for fee-stacking (itemized quotes, disputes in writing) since every junk dollar comes from your spread. And if an auction ever does happen, remember the last backstop: bids above the judgment become surplus funds, held by the court, yours to claim.',
      ]},
    ],
    [
      { href: '/tools/net-proceeds', label: 'Your spread, calculated free' },
      { href: '/blog/protecting-home-equity-during-foreclosure-nj', label: 'The full equity-defense manual' },
      { href: '/sell-house-before-sheriff-sale', label: 'The controlled sale, step by step' },
    ],
  ),
  T(
    'co-signer-crisis-nj-guide',
    'The Co-Signer’s Crisis Guide: A NJ Foreclosure With Your Name on It',
    'You co-signed, they stopped paying, and your credit is burning. Your full rights as an obligor, and the moves that limit the damage from either seat.',
    'A co-signer discovering a default is a borrower discovering a default — full liability, full credit exposure, and full borrower’s rights: account information on request, standing to submit or join loss-mitigation applications, your own 35 days if served, and the power to cure directly (the right runs to final judgment and belongs to the obligors, plural). The relationship management is the hard part; run it like logistics — the reinstatement number, the options that fit it, a decision — because your name is on the judgment either way.',
    [
      { h: 'Establish your information pipeline today', body: [
        'Call the servicer, identify yourself as a borrower on the account, and set up your own access: online credentials, statements, and a written request for the delinquency history and an itemized reinstatement quote. Federal servicing rules serve borrowers — which you are — not “primary” borrowers only. From today, you learn about this loan from the source, never again from a credit alert or a process server. If a case has already filed and you were served, your own 35-day clock is running independently: file your own answer.',
      ]},
      { h: 'Your unilateral powers', body: [
        'You do not need the primary borrower’s permission to protect yourself: you can pay arrears directly (curing protects both credit files, and the cure right is yours too), submit a loss-mitigation application your income supports, appear at mediation if the case qualifies, and — where the relationship has failed entirely — get your own counsel on contribution and the property interest questions (who is on the deed matters as much as who is on the note; a co-signer on the loan but off the deed has payment power without ownership, a fixable imbalance a lawyer should look at before big money moves).',
      ]},
      { h: 'The family logistics, run like a deal', body: [
        'The conversation that works is a spreadsheet, not a verdict: here is the exact number, here are the three structures that fit it (their budget carries a modification; your contribution funds a cure with paper behind it; or the honest exit — a sale that ends both exposures and divides what the deed says). What never works: respecting silence until the sheriff’s notice, informal “I’ll pay you back” rescues with no paper, or torching the relationship before the numbers are even on the table. Free help is not means-tested by whose name is first: 800-569-4287 works the file with either or both of you.',
      ]},
    ],
    [
      { href: '/blog/co-signed-mortgage-foreclosure-nj', label: 'The co-signer overview' },
      { href: '/answers/how-much-to-reinstate-my-mortgage', label: 'Getting the exact number' },
      { href: '/compare', label: 'The exits, credit impact included' },
    ],
  ),
  T(
    'separated-not-divorced-foreclosure-nj-guide',
    'Separated but Not Divorced, House in Default: The NJ Guide',
    'No divorce filing, no agreement — just two addresses and one defaulting mortgage. Untangling authority, liability, and the house before the court does.',
    'Separation without a divorce case is the legal gray zone where houses get lost: both names on the note (both liable, both credit files burning), often both on the deed (major decisions need both signatures), and nobody clearly at the wheel. The rules: either borrower alone can talk to the servicer, apply for loss mitigation, answer a served complaint, and pay — but selling or signing away a jointly-owned house needs both owners, so the wheel needs a driver and the drivers need one working channel, even a lawyer-to-lawyer one.',
    [
      { h: 'What each of you can do alone', body: [
        'Any borrower on the note can individually: get full account information, submit a loss-mitigation application (the occupying spouse’s budget plus documented support can carry one), file an answer if served (either spouse’s answer keeps the whole case contested), request mediation where eligible, and pay arrears — the cure right belongs to each obligor. So the paralysis excuse fails: whichever of you is reading this can defend the case today without the other’s cooperation. What you cannot do alone is convey jointly-owned property: listings, contracts, deeds-in-lieu and closings need every deed-holder’s signature.',
      ]},
      { h: 'The channel problem, solved mechanically', body: [
        'Estranged couples lose houses to unopened mail at the other address and decisions nobody made. Fix it mechanically: one shared folder (or one email thread, or the two attorneys) where every servicer letter and court paper lands within a day; a standing rule that either may take any defensive step (answer, application, adjournment request) with notice to the other; and a scheduled decision date for the house question itself. If direct contact is impossible or unsafe, the channel is counsel-to-counsel — LSNJ (1-888-576-5529) serves income-qualifying spouses independently, and domestic violence changes every rule: safety first, and the court has protective mechanisms your attorney or an advocate can invoke.',
      ]},
      { h: 'The house question, before it’s asked for you', body: [
        'Three honest endings: one spouse keeps it (needs a refinance or assumption that removes the other from the note — a settlement clause alone does not); you sell it (the clean break, both signatures, proceeds split per the deed or agreement — and NJ’s process rights buy the runway a real sale needs); or the foreclosure decides (the only ending where nobody chooses and both credit files take the full hit, plus any equity leaks away at auction). The first two require exactly one conversation with numbers in it. The free machinery prices everything beforehand: valuation, payoff quote, the calculator.',
      ]},
    ],
    [
      { href: '/blog/divorce-and-foreclosure-nj-guide', label: 'If the divorce case does start' },
      { href: '/tools/net-proceeds', label: 'The house math, run privately' },
      { href: '/answers/do-i-need-a-lawyer', label: 'When counsel is the channel' },
    ],
  ),
  T(
    'business-owner-personal-home-foreclosure-nj-guide',
    'Business Owners: When Company Trouble Reaches Your NJ Home',
    'Business debt, personal guarantees, SBA liens, and a home in the crossfire. Mapping what actually threatens the house and defending it on every front.',
    'When a business struggles, the house’s exposure depends on paperwork most owners half-remember: the mortgage itself, any home-secured business credit (HELOCs, SBA loans with recorded home liens), and personal guarantees that let business creditors chase personal assets through judgments. The defense starts with a map — pull your title, list every lien and guarantee — then triages: the mortgage and any home-secured debt first, unsecured guarantees later and often negotiable. The standard process rights guard the mortgage front; a debtor-side attorney belongs on the field early for the rest.',
    [
      { h: 'Map the actual exposure first', body: [
        'Three different instruments threaten a business owner’s home in three different ways. The mortgage: defaults from diverted cash flow — the standard foreclosure everyone else faces. Home-secured business credit: the HELOC that funded inventory and the SBA loan that took a junior lien in the closing stack are real liens with real foreclosure rights of their own. Personal guarantees: no lien yet — a creditor must sue, win, and record a judgment before your house is in that fight, which takes time you can use. An hour with your title report and loan files sorts every threat into its lane; a debtor-side attorney turns the map into sequencing.',
      ]},
      { h: 'Triage: the secured front', body: [
        'The mortgage gets the standard full defense — 35-day answer, free mediation where eligible, a loss-mitigation file built on properly documented self-employment income (the P&L-plus-deposits package; a free counselor at 800-569-4287 assembles it). Home-secured business debt negotiates like the junior liens it is: lenders facing NJ’s long process routinely restructure, and SBA workouts have their own established channels. The cash-flow rule throughout: do not silently drain the business that generates the income a modification needs, and do not silently drain the home equity that is the family’s backstop — every transfer between those pockets is a decision to make on paper, with advice.',
      ]},
      { h: 'Guarantees, judgments, and the bigger toolbox', body: [
        'Unsecured guarantee creditors are negotiable precisely because their path to your house is long: settlements for fractions are routine when the alternative is chasing a defended debtor through the courts. If judgments do land, NJ exemptions and priority rules shape what they can actually reach — attorney territory. And when everything is tangled at once, the restructuring tools exist for exactly this: business workouts, and personal Chapter 13 (which can catch up home arrears while the business stabilizes) or Chapter 11/subchapter V on the business side — deliberate filings, never midnight ones. The free-plus-flat-fee professional stack here is cheap against a home’s equity.',
      ]},
    ],
    [
      { href: '/blog/self-employed-foreclosure-nj-guide', label: 'The 1099 income file, done right' },
      { href: '/blog/second-mortgages-helocs-hoa-liens-foreclosure-nj', label: 'The lien stack, explained' },
      { href: '/answers/does-bankruptcy-stop-foreclosure-in-nj', label: 'The stay, and when it fits' },
    ],
  ),
];
