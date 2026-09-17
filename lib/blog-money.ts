// BLOG SERIES: MONEY & AFTERMATH (10 posts)
// ---------------------------------------------------------------------------
// Theme: the financial questions around and after a foreclosure — credit,
// taxes, deficiency, buying again, equity protection, liens, co-signers,
// renting, family money, and the cost of waiting. Discipline: qualitative
// where specifics vary (tax outcomes, waiting periods), always pointed at
// licensed professionals for individual advice, zero outcome promises.
// ---------------------------------------------------------------------------

import type { TopicPost } from './topic-blog';

const PUB = '2026-09-17';

export const MONEY_POSTS: TopicPost[] = [
  {
    slug: 'what-foreclosure-does-to-your-credit-nj',
    title: 'What a Foreclosure Actually Does to Your Credit (and What Doesn’t)',
    description:
      'The honest credit picture: what each stage reports, how the alternatives compare, and why the damage is a slope you can climb, not a life sentence.',
    tldr:
      'The credit damage of foreclosure is real, front-loaded, and temporary: the missed payments leading up to it usually do most of the harm before any case is filed, the foreclosure notation ages off in seven years, and scores begin recovering much sooner with clean payment behavior. The alternatives sit on a spectrum — a modification or repayment plan generally reads far better than a completed foreclosure, and a sale that pays the loan in full ends the reporting damage at the closing table.',
    published: PUB,
    updated: PUB,
    minutes: 6,
    theme: 'money',
    sections: [
      {
        h: 'Where the damage actually comes from',
        body: [
          'By the time a complaint is filed, the ledger has usually taken its biggest hits already: the string of 30-, 60-, 90- and 120-day late marks that preceded it. The foreclosure notation added later is serious, but it lands on a score the delinquencies have already pressed down — which is why two households at the same case stage can see very different numbers depending on how the rest of their credit life looks. Cards kept current, low balances elsewhere, and old accounts in good standing all cushion the fall.',
        ],
      },
      {
        h: 'The spectrum of outcomes, ranked roughly',
        body: [
          'From gentlest to harshest, the usual reading: a modification or repayment plan (the loan reports as being worked out, then current again); a sale that pays the mortgage in full (reporting damage stops at closing — the lates remain, the story ends); a short sale (settled for less than owed — worse than paid in full, generally softer than foreclosure); deed-in-lieu (similar neighborhood); completed foreclosure; and bankruptcy alongside any of these carrying its own timeline. The pattern worth noticing: every option that involves acting early sits higher on the list than the default outcome of waiting.',
        ],
      },
      {
        h: 'The recovery slope',
        body: [
          'The notation ages off in seven years, and its weight fades well before that: scoring models discount old negatives as new clean history accumulates. Households that keep other accounts current, add a secured card or credit-builder product where needed, and avoid new delinquencies routinely rebuild workable credit in a few years — and lending programs exist that consider borrowers again after documented waiting periods and re-established credit. Foreclosure marks a period, not a person. The rebuilding advice worth paying for is free too: HUD-approved counselors do post-crisis credit planning at no charge.',
        ],
      },
    ],
    links: [
      { href: '/answers/does-foreclosure-ruin-my-credit', label: 'The short-answer version' },
      { href: '/answers/when-can-i-buy-a-house-again', label: 'When you can buy again' },
      { href: '/compare', label: 'All 7 options, credit impact included' },
    ],
  },
  {
    slug: 'taxes-after-foreclosure-short-sale-nj',
    title: 'Taxes After a Foreclosure or Short Sale in NJ: The 1099 Surprise',
    description:
      'Canceled mortgage debt can arrive as a tax form. What the 1099-C means, the exclusions that often erase the bill, and why a tax pro earns their fee here.',
    tldr:
      'When a lender cancels mortgage debt — after a short sale, deed-in-lieu, or foreclosure with a forgiven balance — the canceled amount can be reported to the IRS on a 1099-C, and taxable income is the default treatment. The default is not the end: exclusions exist that often erase or shrink the bill, including insolvency (debts exceeding assets at the time) and, in eligible periods and cases, qualified principal residence indebtedness. This is the single best moment in the process to pay a tax professional; we are not tax advisors, and this is education, not advice.',
    published: PUB,
    updated: PUB,
    minutes: 6,
    theme: 'money',
    sections: [
      {
        h: 'Why a bad year can generate a tax form',
        body: [
          'The tax code’s starting point is blunt: debt you borrowed and did not repay is income when it is canceled. So when a short sale settles a $300,000 loan with $250,000 of proceeds and the lender forgives the difference, a 1099-C for the forgiven amount may follow — paperwork that lands on families precisely when they can least absorb a surprise. Do not ignore the form (the IRS also receives it), and do not panic at it either: reporting is not the same as owing.',
        ],
      },
      {
        h: 'The exclusions that do the heavy lifting',
        body: [
          'Two matter most. Insolvency: to the extent your total debts exceeded your total assets immediately before the cancellation, canceled debt is generally excludable — and households emerging from foreclosure are very frequently insolvent on paper in exactly this sense; the calculation goes on IRS Form 982. Qualified principal residence indebtedness: Congress has, in various periods, excluded forgiven mortgage debt on a primary home, with eligibility depending on dates and details that change — which is precisely the kind of moving target a preparer checks against current law. Bankruptcy discharges carry their own exclusion.',
          'New Jersey’s own income-tax treatment has its own rules, and state and federal answers are not always identical — one more reason the professional consult pays for itself.',
        ],
      },
      {
        h: 'The practical sequence',
        body: [
          'Keep every closing document, payoff letter, and lender statement from the resolution — the numbers on the 1099-C sometimes disagree with the record, and errors are disputable. Take the package to a tax professional (a CPA or enrolled agent; free VITA programs help income-qualifying filers) before the filing deadline of the year the form covers. And factor this into the decision earlier if you can: the tax tail should not wag the dog, but a short-sale-versus-sale-in-full comparison is incomplete without it. We are educators, not tax advisors — this page is a map, and the professional is the driver.',
        ],
      },
    ],
    links: [
      { href: '/answers/will-i-owe-taxes-after-foreclosure', label: 'The short-answer version' },
      { href: '/guides/short-sale', label: 'Short sales, start to finish' },
      { href: '/professionals', label: 'Finding the right professionals' },
    ],
  },
  {
    slug: 'deficiency-judgments-nj-should-i-worry',
    title: 'Deficiency Judgments in NJ: Should You Actually Worry?',
    description:
      'Can the bank come after you for the shortfall? How NJ deficiency law works, why pursuit is the exception in practice, and how exits manage the risk.',
    tldr:
      'A deficiency is the gap between what you owed and what the foreclosure sale brought. In New Jersey, chasing it requires a separate lawsuit after the foreclosure, on a short clock, with the homeowner entitled to contest the property’s fair market value as an offset — and as a practical matter, lenders pursue deficiencies against ordinary homeowners far less often than fear assumes. Negotiated exits (short sales, deeds-in-lieu) are the place to manage the risk explicitly: the waiver of any deficiency belongs in writing in the agreement.',
    published: PUB,
    updated: PUB,
    minutes: 6,
    theme: 'money',
    sections: [
      {
        h: 'What a deficiency is, and the hurdles NJ puts up',
        body: [
          'If a sheriff sale brings less than the judgment, the shortfall does not automatically become a bill. New Jersey requires the lender to file a separate action for a deficiency, promptly after the sale, and the law gives the former owner a powerful defense: the right to have the deficiency measured against the property’s fair market value rather than a depressed auction price. A house auctioned cheap but honestly worth close to the debt supports little or no deficiency once value is contested.',
        ],
      },
      {
        h: 'Why pursuit is rare in ordinary cases',
        body: [
          'Economics, mostly. A deficiency suit means new litigation against a defendant who just demonstrated inability to pay, with the fair-market-value defense capping the upside — so against ordinary owner-occupants, lenders write shortfalls off far more often than they chase them. The calculus can differ for large loans, investment properties, and borrowers with visible other assets, and second-lien holders wiped out at sale sometimes pursue their notes separately. "Rare" is not "never": treat any post-sale collection letter as real mail requiring a real (often free, via LSNJ at 1-888-576-5529 for income-qualifying homeowners) legal read.',
        ],
      },
      {
        h: 'Managing the risk on purpose',
        body: [
          'The exits you negotiate are where deficiency risk gets handled explicitly. In a short sale or deed-in-lieu, the lender’s written agreement should say the debt is satisfied and any deficiency waived — words on paper, not assurances on calls. A sale that pays the loan in full moots the question entirely, which is one more argument for running the equity math early. And if a deficiency claim ever does arrive, the response is legal, not emotional: deadlines, value evidence, and counsel. Fear of a shortfall should never drive a worse decision than the shortfall itself would.',
        ],
      },
    ],
    links: [
      { href: '/answers/can-the-bank-sue-me-for-the-difference', label: 'The short-answer version' },
      { href: '/guides/short-sale', label: 'Short sales and written waivers' },
      { href: '/tools/net-proceeds', label: 'Will your sale cover the debt? Run it' },
    ],
  },
  {
    slug: 'buying-a-house-again-after-foreclosure-nj',
    title: 'Buying a House Again After Foreclosure: The Real Timeline',
    description:
      'Homeownership after foreclosure is a schedule, not a fantasy: documented waiting periods, re-established credit, and the moves that shorten the road.',
    tldr:
      'Lending programs readmit borrowers after a foreclosure on documented waiting periods that vary by program — government-backed loans generally sooner, conventional loans longer, with extenuating-circumstances provisions that can shorten either — and the periods run whether or not you spend them rebuilding. The borrowers who buy again soonest treat the interval as training: clean payment history on everything, rebuilt savings, and steady income documentation. How the foreclosure ended matters too, which is one more reason exits that read better on paper are worth negotiating.',
    published: PUB,
    updated: PUB,
    minutes: 6,
    theme: 'money',
    sections: [
      {
        h: 'The waiting periods, honestly framed',
        body: [
          'Every major lending channel — FHA, VA, USDA, conventional — publishes seasoning requirements after a foreclosure, measured in years from the event, and they differ by program and change over time; several carry shorter tracks for documented extenuating circumstances (a one-time event like medical crisis or job loss beyond your control, rather than general overextension). We deliberately do not print a table of years here, because the numbers move with agency policy — your loan officer’s current rate sheet is the authority. The stable truths: the clock starts when the foreclosure completes, government-backed programs generally readmit sooner than conventional ones, and the period is survivable on purpose.',
        ],
      },
      {
        h: 'What the interval is for',
        body: [
          'Underwriters reviewing a post-foreclosure application look for a story with a turn in it: the hardship happened, it ended, and everything since is clean. That means perfect payment history on rent, cars, and cards; balances kept low; savings rebuilt toward a down payment; and income documentation that shows stability. A secured card or credit-builder loan re-establishes positive reporting where the file went thin. None of this is exotic — it is the same boring discipline, done for a defined number of years, and free HUD counselors coach it at no charge.',
        ],
      },
      {
        h: 'Decisions now that help later',
        body: [
          'If you are still mid-crisis reading this, the future application is one more input for the present choice: exits differ on paper. A sale in full ends the story cleanly; short sales and deeds-in-lieu carry their own (often shorter) seasoning treatment than completed foreclosures; and a modification that keeps the loan current may involve no waiting period at all. Nobody should pick an exit on this factor alone — but knowing the road back exists, with a measurable length, changes the emotional math of the whole process. Homeownership is not a one-time credential. People return; the calendar is the price.',
        ],
      },
    ],
    links: [
      { href: '/answers/when-can-i-buy-a-house-again', label: 'The short-answer version' },
      { href: '/answers/does-foreclosure-ruin-my-credit', label: 'Credit recovery, honestly' },
      { href: '/compare', label: 'How each exit reads later' },
    ],
  },
  {
    slug: 'protecting-home-equity-during-foreclosure-nj',
    title: 'Protecting Your Home Equity During an NJ Foreclosure',
    description:
      'Equity survives a foreclosure only if you defend it. The math that measures it, the process moves that preserve it, and the predators built to take it.',
    tldr:
      'Equity — market value minus payoff — is the largest asset most families in foreclosure own, and every stage of the process either protects it or spends it. Protecting it means knowing the number early (free), answering the complaint (time is equity’s bodyguard), and choosing exits that convert value at market prices rather than auction mechanics. The threats are symmetrical: fees and interest compound against it monthly, lowball offers are priced against your fear, and equity-stripping scams exist precisely because the asset is real.',
    published: PUB,
    updated: PUB,
    minutes: 6,
    theme: 'money',
    sections: [
      {
        h: 'Measure it before anyone else does',
        body: [
          'The equity calculation takes an afternoon: a realistic market value (a free valuation, comparable sales, our calculator) minus the true payoff (principal, arrears, fees — the reinstatement or payoff quote your servicer must provide). That single number sorts every option: serious equity argues for defending time and selling on your terms if exit is right; thin or negative equity moves the conversation to modifications, short sales, and negotiated terms. Households that never run the number let strangers price the asset for them — and strangers price it low.',
        ],
      },
      {
        h: 'The process moves that guard it',
        body: [
          'Time is the guardian: the 35-day answer, the mediation seat, complete loss-mitigation applications, and the two 30-day sale adjournments all add months, and months are what market-price sales and finished workouts are made of. The Fair Foreclosure Act’s cure right (through final judgment) lets a family loan or windfall rescue the whole position. Meanwhile the erosion runs in the background — default interest, attorney fees and costs stacking onto the payoff — so time protected but unused still leaks value. Add weeks deliberately, and spend them on something that ends the case.',
        ],
      },
      {
        h: 'The predators the equity attracts',
        body: [
          'Every equity-rich distressed house draws the same three species: lowball cash offers priced against panic (compare them to your own number, coolly — some are legitimate speed plays, and the discount should be a choice, not an ambush); rescue-fee consultants selling free machinery at a markup, generally illegally; and outright equity-stripping — the "sign the deed over temporarily, rent it back" pitch, which is how families lose six figures to a signature. The defense is the same boring trio every time: your own number, your own timeline, and nothing signed outside a real closing.',
        ],
      },
    ],
    links: [
      { href: '/tools/net-proceeds', label: 'Your equity number, free, in minutes' },
      { href: '/answers/what-happens-to-my-equity', label: 'Equity in foreclosure: the short answer' },
      { href: '/scams', label: 'The equity predators, catalogued' },
    ],
  },
  {
    slug: 'co-signed-mortgage-foreclosure-nj',
    title: 'You Co-Signed a Mortgage That’s in Foreclosure. Now What?',
    description:
      'Co-signers are fully on the hook and usually last to know. Your exposure, your rights to information and action, and the moves that limit the damage.',
    tldr:
      'A co-signer is not a character reference — you are a borrower, fully liable, with the delinquencies and any foreclosure reporting on your credit as if you lived there. You also hold a borrower’s rights: to information from the servicer, to apply for loss mitigation, to participate in the case, and to force the conversation the primary borrower may be avoiding. The worst position is the default one — finding out at the judgment stage. Get on the file, get the numbers, and act like the party you legally are.',
    published: PUB,
    updated: PUB,
    minutes: 6,
    theme: 'money',
    sections: [
      {
        h: 'What you actually signed',
        body: [
          'The signature made you a full obligor: the lender can look to you for the whole debt without exhausting remedies against the primary borrower first, every late payment reports on your credit file too, and a foreclosure case names you because your obligation is not secondary — it is joint. Co-signers routinely discover all this from a credit-score drop or a process server rather than a family phone call, because shame runs the primary borrower’s communications long before the lender does.',
        ],
      },
      {
        h: 'The rights that come with the liability',
        body: [
          'Being a borrower cuts both ways. You are entitled to account information from the servicer — reinstatement quotes, payoff figures, delinquency history. You can submit or join a loss-mitigation application; your income may be exactly what makes a modification or repayment plan work. If a case is filed and you were served, you have your own 35 days and your own standing — your own answer, your own seat at mediation where eligible. And nothing stops you from paying the arrears directly to protect your credit while the family sorts the larger question; the cure right through final judgment belongs to the obligors, plural.',
        ],
      },
      {
        h: 'Managing the human side like the financial side',
        body: [
          'The productive co-signer conversation is logistical, not moral: here is the reinstatement number, here are the options that fit it, here is what each one does to both our credit files, which are we choosing. Sometimes the honest answer is a sale — equity split per your arrangement beats parallel credit ruin. Sometimes it is a workout the co-signer’s income anchors. What never works is respecting the primary borrower’s silence until the sheriff’s notice: your name is on the judgment either way. Free help is not means-tested by house: HUD counselors (800-569-4287) will work the file with either or both of you.',
        ],
      },
    ],
    links: [
      { href: '/answers/how-much-to-reinstate-my-mortgage', label: 'Getting the reinstatement number' },
      { href: '/quiz', label: 'Which option fits the case? Two minutes' },
      { href: '/compare', label: 'Every option’s credit impact, compared' },
    ],
  },
  {
    slug: 'second-mortgages-helocs-hoa-liens-foreclosure-nj',
    title: 'Second Mortgages, HELOCs and HOA Liens in an NJ Foreclosure',
    description:
      'The junior liens change the math at every stage: who can foreclose, who gets paid from a sale, what survives, and where the negotiating room hides.',
    tldr:
      'Every lien on the house has a place in line, and the line explains the whole game: a sale’s proceeds pay the first mortgage, then juniors, then you. Any lienholder — including a HELOC lender or, within New Jersey’s rules, an HOA — can initiate its own action, so "the mortgage is current" is not the same as "safe." In workouts and short sales the juniors are often the real negotiation, because a wiped-out second has every incentive to settle; get every release and waiver in writing.',
    published: PUB,
    updated: PUB,
    minutes: 6,
    theme: 'money',
    sections: [
      {
        h: 'The line, and why it runs everything',
        body: [
          'Priority — generally set by recording order, with some statutory exceptions — determines who gets paid from any sale and whose foreclosure wipes out whom. A first-mortgage foreclosure extinguishes junior liens’ claims on the property (the sale proceeds flow down the line until they run out), while the juniors’ underlying debts may survive as unsecured claims. A junior can also foreclose on its own, taking the property subject to the senior loan. Your payoff picture is therefore a list, not a number: first, second, HELOC, HOA arrears, judgments, municipal claims — get them all on one page before deciding anything.',
        ],
      },
      {
        h: 'The junior-lien negotiations nobody tells you about',
        body: [
          'A second-position lender staring at a sale that will pay it little or nothing is a motivated counterparty. In short sales, seconds routinely release their liens for negotiated fractions; in equity-positive sales they must be paid but payoff statements can contain contestable fees; in modifications, a junior’s consent or subordination is sometimes the hidden gating item. HOA arrears in New Jersey carry their own collection tools and their own settlement conversations. Every one of these deals ends the same required way: a written release, and where debt is forgiven, explicit written waiver language — plus a note to ask your tax professional about any 1099 consequences.',
        ],
      },
      {
        h: 'Traps specific to the juniors',
        body: [
          'Three recur. Zombie seconds: HELOCs that went quiet for years resurface with arrears and interest when equity returns — silence was never forgiveness. HOA aggression: association liens are small enough to underestimate and enforceable enough to hurt; treat association delinquency letters as real process, not clubhouse drama. And settlement-table surprises: unrecorded or forgotten liens discovered by the title search days before closing — one more argument for pulling your own title picture early. The free bench covers this terrain too: LSNJ (1-888-576-5529) for income-qualifying homeowners, and any closing attorney can run the lien math before a predator offers to.',
        ],
      },
    ],
    links: [
      { href: '/tools/net-proceeds', label: 'The full payoff stack, calculated free' },
      { href: '/guides/short-sale', label: 'Where junior negotiations live' },
      { href: '/answers/what-happens-to-my-equity', label: 'Who gets paid from a sale, in order' },
    ],
  },
  {
    slug: 'renting-after-foreclosure-nj',
    title: 'Renting After a Foreclosure in NJ: Harder, Not Hopeless',
    description:
      'Landing a rental with a foreclosure in your file: what screening actually flags, what landlords actually care about, and the moves that get you approved.',
    tldr:
      'A foreclosure complicates rental applications less than people fear: screening flags the credit event, but landlords ultimately rent to income, stability and honesty. The toolkit is practical — current income documentation, a straightforward one-paragraph explanation with dates, references that vouch for payment behavior, and where needed a larger deposit within NJ’s legal limit (a landlord may require up to one and a half months’ security). Plan the housing move before the case forces it; deadline apartment-hunting is expensive.',
    published: PUB,
    updated: PUB,
    minutes: 5,
    theme: 'money',
    sections: [
      {
        h: 'What the landlord actually sees, and weighs',
        body: [
          'Screening reports surface the delinquencies and the foreclosure, and here is the useful secret: professional landlords read them contextually. A file that says "paid everything for fifteen years, then a two-year medical crisis centered on one mortgage" reads completely differently from scattered lifelong delinquency — especially when every non-housing account stayed current through the storm. Income is the headline anyway: documented earnings comfortably covering the rent answers the question landlords are really asking.',
        ],
      },
      {
        h: 'The application toolkit',
        body: [
          'Lead with honesty; being flagged is worse than being upfront. A short written explanation — event, dates, resolution, current stability — attached to the application beats hoping nobody notices. Stack the file with proof: pay stubs or award letters, an employer letter, bank statements showing reserves, references from anyone you have paid reliably (a prior landlord outranks everyone). Where the file is thin, offer strength elsewhere: NJ law allows security deposits up to one and a half months’ rent, and offering the legal maximum, or prepaying first month plus deposit at signing, resolves many hesitations. Individual owners are often more flexible than corporate portals; apply where a human reads the story.',
        ],
      },
      {
        h: 'Timing the move like a transaction',
        body: [
          'The expensive version of this search happens in the two weeks after a lockout notice; the cheap version starts as soon as an exit becomes likely. If you are negotiating a sale, deed-in-lieu, or cash-for-keys terms, negotiate the calendar too — move-out dates that fit a lease start, funds timed to cover deposits. Post-sale occupants have process time before any removal (possession runs through court, with notice), and using it to house-hunt beats using it to hope. A family that exits a foreclosure into housing it chose, on a date it chose, has already started the rebuild.',
        ],
      },
    ],
    links: [
      { href: '/tenants', label: 'NJ tenants’ rights, including after sales' },
      { href: '/answers/what-happens-after-a-sheriff-sale', label: 'The post-sale timeline you can plan around' },
      { href: '/answers/does-foreclosure-ruin-my-credit', label: 'The credit rebuild, honestly' },
    ],
  },
  {
    slug: 'family-money-and-foreclosure-nj',
    title: 'Using Family Money in a Foreclosure: Do It Like a Deal',
    description:
      'A family loan can cure an NJ foreclosure outright — and family money deserves deal discipline: real numbers, written terms, and eyes-open risk.',
    tldr:
      'Family money is the most common rescue financing in foreclosure, and New Jersey’s rules make it genuinely powerful: the right to cure runs to final judgment, so a relative’s loan that clears the reinstatement number can end the case outright. The discipline is treating it as a transaction: the exact servicer-issued quote (never an estimate), an honest affordability answer about the months after, written terms between the parties, and a hard rule against solutions that put a relative’s name on the deed informally.',
    published: PUB,
    updated: PUB,
    minutes: 6,
    theme: 'money',
    sections: [
      {
        h: 'What family money can actually do here',
        body: [
          'Three clean uses. Reinstatement: paying the exact arrears-plus-fees quote returns the loan to normal — the Fair Foreclosure Act keeps that door open through entry of final judgment. Bridge funding: covering payments while a modification review or a sale completes, so the case stops deteriorating mid-solution. Transaction support: closing-cost or moving money that lets the equity-protecting exit actually execute. Each has a defined amount, a defined end, and a checkable result — which is what separates help from a subsidy that vanishes into an unaffordable house.',
        ],
      },
      {
        h: 'The two questions before any check',
        body: [
          'First: what is the real number? Servicer-issued reinstatement or payoff quotes, in writing, with expiration dates — family plans built on guesses die at the payment window. Second: what happens in month two? A cure only holds if the ongoing payment is affordable; if the underlying income problem persists, the honest move may be family money funding a controlled sale (protecting equity for everyone) rather than reinstating a payment that will fail again. A free HUD counselor will pressure-test the budget with no stake in the answer.',
        ],
      },
      {
        h: 'Paper it, and mind the traps',
        body: [
          'Even between parent and child, write it down: amount, whether gift or loan, terms, what happens on sale of the house. Mortgage underwriting in any later refinance will ask; estates and siblings will eventually ask louder. Two traps to refuse outright: putting the helping relative on the deed informally ("just to be safe" — it complicates title, taxes, and Medicaid pictures, and it is the same signature deed thieves ask for), and letting shame set the loan’s size — borrowing less than the real quote cures nothing and burns the relationship anyway. Families that treat the rescue like a deal tend to keep both the house and the Thanksgiving table.',
        ],
      },
    ],
    links: [
      { href: '/answers/how-much-to-reinstate-my-mortgage', label: 'Getting the exact reinstatement quote' },
      { href: '/tools/net-proceeds', label: 'The affordability and equity math, free' },
      { href: '/answers/options-if-behind-on-mortgage', label: 'Every option, if the cure isn’t right' },
    ],
  },
  {
    slug: 'the-real-cost-of-waiting-nj-foreclosure',
    title: 'The Real Cost of Waiting in an NJ Foreclosure, Itemized',
    description:
      'Doing nothing is the most expensive option on the menu. The line items: fees that compound, options that expire, equity that leaks, prices that fall.',
    tldr:
      'Waiting feels free and bills monthly. The line items: default interest and attorney fees compounding onto the payoff; options expiring in sequence (the NOI’s cheap cure, the 35-day answer and its mediation seat, review protections, the calendar a market sale needs); leverage draining as default becomes judgment becomes sale date; and the sale price falling as "sell on our schedule" becomes "sell before the 15th." Every stage still has moves — the argument is not despair, it is arithmetic: the same case costs less at every earlier stage.',
    published: PUB,
    updated: PUB,
    minutes: 6,
    theme: 'money',
    sections: [
      {
        h: 'The meter that runs monthly',
        body: [
          'From the first defaults, the payoff grows faster than the underlying loan ever did: late charges, default-rate interest where the note allows it, property inspections and preservation fees, and — once a case files — the lender’s attorney fees and court costs, all secured by your house and all senior to your equity. Families are routinely startled by the spread between the balance they remember and the reinstatement quote they receive; the difference is the price of the months in between. The quote only moves one direction. Getting it early is free; getting it late is expensive by exactly the delay.',
        ],
      },
      {
        h: 'The options that expire in order',
        body: [
          'The process is a corridor of closing doors. The NOI window offers the cheapest cure the case will ever price. The 35 days decide whether you are a participant with a mediation seat or a spectator to default processing. Complete loss-mitigation applications carry review protections that late, rushed ones may not. The cure right itself ends at final judgment. The two 30-day adjournments only help sellers who started marketing before needing them; a listing needs runway no one can grant retroactively. Nothing on this list requires money — every expiring item above is free. What they cost is initiative, on a schedule.',
        ],
      },
      {
        h: 'What waiting does to the price of everything',
        body: [
          'Deadlines reprice assets. The same house is worth more sold across a normal marketing period than raced against a sale date; the same cash buyer bids differently against a seller with adjournments in pocket than one with days left; even workout terms tilt toward borrowers who arrive early with documents instead of late with emergencies. And the auction — the destination of pure waiting — is the worst market your equity will ever meet. The counter-move never changes and never stops being free: open the mail, get the numbers, make the calls (800-569-4287; 1-888-576-5529), and act at whichever stage this finds you. Later is always more expensive. Never is the most expensive of all.',
        ],
      },
    ],
    links: [
      { href: '/free-checklist', label: 'Start now: the Week-One Checklist (free PDF)' },
      { href: '/answers/is-it-too-late', label: 'What’s still possible at your stage' },
      { href: '/quiz', label: 'Two minutes to your ranked options' },
    ],
  },
];
