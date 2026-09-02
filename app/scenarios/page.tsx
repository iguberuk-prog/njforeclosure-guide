import Link from 'next/link';
import SiteHeader from '../components/SiteHeader';
import type { Metadata } from 'next';
import { INDEPENDENCE_STATEMENT } from '../../lib/partners';

export const metadata: Metadata = {
  title: 'What Usually Happens | 18 NJ Foreclosure Situations Walked Through',
  description:
    'Eighteen common New Jersey foreclosure situations walked through end to end: what the options actually are, the arithmetic that decides between them, and how each tends to turn out, including the ones that do not work. Illustrative examples, not client stories.',
  alternates: { canonical: 'https://njforeclosureguide.org/scenarios/' },
};

/**
 * ILLUSTRATIVE SCENARIOS. Read this before editing.
 *
 * These are NOT client stories and must never be presented as any. They are
 * composite walkthroughs of situation types, written to show a homeowner what
 * the decision actually looks like from the inside.
 *
 * Rules that keep this page legitimate, and legal:
 *
 * 1. No names. No towns. No "one client of ours." The moment a scenario is
 *    attributed to a person it becomes a testimonial and falls under 16 CFR
 *    Part 465, which requires that the person exist and have had the
 *    experience described.
 * 2. Outcomes must span the real range. Four of the eighteen below end with
 *    the house lost. A page where every situation resolves happily is a
 *    performance claim about typical results, and would need evidence of
 *    typical results to support it.
 * 3. Money figures are round and explicitly framed as arithmetic to illustrate
 *    a tradeoff, never as amounts anyone received.
 * 4. Cash offers must come in BELOW market. That is how cash buyers work and
 *    it is what the rest of this site tells people. Any scenario showing a
 *    cash buyer paying above market would contradict our own advice and would
 *    be a false claim about what these companies do.
 * 5. Nothing here says NJ Foreclosure Guide stopped a foreclosure, negotiated
 *    with a lender, or forced a bank to do anything. We publish information.
 *    Saying otherwise conflicts with the notice on every page of this site.
 * 6. Where the law is unsettled or recently changed, say so and send the
 *    reader to an attorney rather than stating a rule with false confidence.
 */

type Tone = 'good' | 'mixed' | 'hard';

interface Scenario {
  id: string;
  tag: string;
  title: string;
  situation: string;
  options: [string, string][];
  math: string;
  outcome: string;
  lesson: string;
  tone: Tone;
}

interface Group {
  heading: string;
  blurb: string;
  scenarios: Scenario[];
}

const GROUPS: Group[] = [
  {
    heading: 'Earlier than you think, and better placed than you feel',
    blurb:
      'Most people arrive here convinced it is nearly over. Often it is not, and in a couple of these the default may not even be valid.',
    scenarios: [
      {
        id: 'notice-of-intention',
        tag: 'Notice of Intention received',
        title: 'The certified letter arrived and nothing has been filed',
        situation:
          'A Notice of Intention to Foreclose lands in the mail. It is alarming, official, and specific about the amount required to cure. No lawsuit exists yet. The homeowner is roughly four months behind after a stretch of reduced hours.',
        options: [
          ['Cure the default', 'The notice must state what is needed to catch up. Paying it generally stops the process here.'],
          ['Loan modification', 'Every modification option remains open at this stage. None have been foreclosed by a filing.'],
          ['Forbearance', 'A pause, if the hardship is temporary and documented.'],
          ['Free HUD counselor', 'Costs nothing, and this is the stage where a counselor has the most to work with.'],
          ['Sell on your own terms', 'A full market listing is realistic because there is no sale date pressing.'],
        ],
        math:
          'Under the New Jersey Fair Foreclosure Act this notice must arrive at least 30 days before a complaint can be filed. That is a floor, not a ceiling, and in practice many lenders wait longer. The window is usually wider than the letter makes it feel.',
        outcome:
          'This is the best position on this page and the one most often wasted. People put the envelope in a drawer for six weeks because opening it is unbearable, and by the time they act, half their options have closed.',
        lesson: 'The scariest letter you will get is also the one that arrives while you still have every option.',
        tone: 'good',
      },
      {
        id: 'servicer-error',
        tag: 'You may not actually be in default',
        title: 'The payments were made and the servicer says otherwise',
        situation:
          'The loan transfers to a new servicer. Payments made during the handover are applied to the wrong account or returned. An escrow recalculation raises the payment without clear notice. Months later a delinquency notice arrives for money the homeowner believes was paid.',
        options: [
          ['Gather proof first', 'Bank statements, cancelled checks, confirmation numbers, the transfer notice. Before any phone call.'],
          ['Send a written error notice', 'Federal servicing rules give borrowers a route to dispute errors and request information in writing, with response deadlines the servicer must meet. A phone call creates no record and no obligation.'],
          ['Escalate above the call center', 'Front-line staff usually cannot reverse a misapplication.'],
          ['Consumer attorney', 'If the servicer will not correct it, this is squarely a lawyer\'s problem and a strong one.'],
          ['Keep paying under protest', 'Where affordable, it prevents a disputed default from becoming a real one.'],
        ],
        math:
          'Nothing to weigh here. If the payments were made, the arrears are an accounting error and the correct outcome is not a modification or a sale but a corrected ledger and removal of the fees stacked on top.',
        outcome:
          'These resolve in the homeowner\'s favor far more often than people expect, because the paper trail either exists or it does not. What they cost is persistence, and they are lost by people who argue over the phone for six months and never put anything in writing.',
        lesson: 'Put the dispute in writing. A phone call starts no clock and leaves no record.',
        tone: 'good',
      },
      {
        id: 'income-recovered',
        tag: 'Behind, income recovered',
        title: 'Four months behind after the income came back',
        situation:
          'A job loss puts the household four payments behind. New work started two months ago at close to the old salary. The servicer will not take partial payments and wants the full arrears, around $11,000, in one lump.',
        options: [
          ['HUD-approved counselor', 'Free. Prepares the package and often gets further with a servicer than a homeowner can alone.'],
          ['Loan modification', 'The core option. Restored income is the exact fact pattern modifications exist for.'],
          ['Repayment plan', 'Arrears spread over future payments rather than capitalized. Simpler when the gap is small.'],
          ['NJ court mediation', 'If a complaint has been filed, the state program brings both sides together at no cost.'],
          ['Sell', 'Almost certainly wrong here, and worth saying plainly.'],
        ],
        math:
          'A servicer refusing partial payments is not a servicer refusing to work with you. Documented restored income changes the conversation, because a performing modified loan is worth more to them than a foreclosure.',
        outcome:
          'This resolves in the homeowner\'s favor more than any other situation on this page. It is also where people panic and sell a house they could have kept, usually because a cash buyer reached them before a counselor did.',
        lesson: 'If the income came back, the answer is usually a modification, and the person who helps you get one is free.',
        tone: 'good',
      },
      {
        id: 'self-employed',
        tag: 'Self-employed',
        title: 'The income is real but the paperwork will not show it',
        situation:
          'A contractor or small business owner falls behind during a slow stretch, then recovers. The modification application is denied for insufficient income, because the servicer is reading a tax return written to minimize taxable income rather than to prove capacity to pay.',
        options: [
          ['Rebuild the income picture', 'Profit and loss statements, twelve to twenty-four months of business bank statements, signed contracts and receivables.'],
          ['Add back non-cash deductions', 'Depreciation and one-time write-offs reduce taxable income without reducing cash. Say so explicitly in the package.'],
          ['Reapply rather than appeal', 'A denial on incomplete income evidence is usually better answered with a stronger second application.'],
          ['HUD counselor', 'Free, and they present self-employed income for a living.'],
          ['Accountant letter', 'A CPA confirming actual cash flow carries weight a spreadsheet does not.'],
        ],
        math:
          'The gap is almost always presentation, not capacity. A borrower showing $34,000 of taxable income may have $80,000 of real cash flow once depreciation and owner deductions are added back. The servicer will not do that arithmetic for you.',
        outcome:
          'Self-employed borrowers get denied at higher rates and then conclude they do not qualify. Many did qualify and documented it badly. The second application, prepared properly, is a different conversation.',
        lesson: 'A denial for low income often means the file was built for the IRS, not for the servicer.',
        tone: 'mixed',
      },
    ],
  },
  {
    heading: 'A sale date is coming',
    blurb:
      'Here the question stops being which option is best and becomes which option can actually close in the time remaining.',
    scenarios: [
      {
        id: 'sale-with-equity',
        tag: 'Sheriff sale scheduled, equity in the home',
        title: 'Three weeks out with real equity',
        situation:
          'A sale date is on the calendar. The homeowner owes roughly $210,000 and the house would list around $340,000 in decent shape. Two years of medical bills and cut hours put them nine payments behind. Reinstating means finding about $28,000 in three weeks, which is not happening.',
        options: [
          ['Reinstate', 'Requires the full arrears at once. Off the table without a family loan.'],
          ['Chapter 13', 'The automatic stay stops the sale and arrears spread over three to five years. Needs income to sustain the plan, and must be filed before the sale.'],
          ['Adjourn the sale', 'New Jersey generally permits adjournments. Buys weeks, not a solution, but weeks are what the other options need.'],
          ['Sell fast for cash', 'A two-week close pays off the lender and the remainder is the homeowner\'s. Expect meaningfully below market for that speed.'],
          ['List on the open market', 'Nets the most, needs the most time. Only works if the sale can be pushed far enough out.'],
        ],
        math:
          'At auction the lender is paid first and anything left belongs to the homeowner, but auctions routinely bring less than a sale would. A cash sale at $270,000 clears the $210,000 balance and costs and leaves roughly $50,000. A listed sale at $340,000 leaves closer to $105,000, and takes months.',
        outcome:
          'The usual resolution is an adjournment to create room, then whichever sale fits the time that buys. The uncomfortable truth is that the difference between acting eight weeks out and three weeks out is often tens of thousands of dollars, and nothing recovers that gap once it closes.',
        lesson: 'Equity is what you are protecting. Time decides how much of it survives.',
        tone: 'mixed',
      },
      {
        id: 'high-value',
        tag: 'Higher-value home',
        title: 'A $900,000 house and a sale date',
        situation:
          'A business downturn pushes a high-value property into foreclosure. The balance is around $520,000 against a home worth roughly $900,000. Substantial equity, and a public sale approaching.',
        options: [
          ['List conventionally', 'Highest likely price. Higher-value homes sit longer, which is exactly the problem.'],
          ['Private or off-market sale', 'Discretion, faster than a public listing, typically a modest discount.'],
          ['Cash sale', 'Fastest and lowest. At this equity level the discount is a very large absolute number.'],
          ['Bridge loan or refinance', 'Substantial equity sometimes supports borrowing out of the problem. Damaged credit makes it harder.'],
          ['Chapter 13', 'Stops the sale and buys time to sell properly.'],
        ],
        math:
          'With $380,000 of equity, a fifteen percent speed discount costs around $135,000. That is why buying time matters more here than almost anywhere else, and why paying a bankruptcy attorney to stop a sale can be the highest-return decision on the table.',
        outcome:
          'The recurring failure at this level is a homeowner who cannot believe foreclosure applies to them, waits, and is left with only the fastest and worst option. Equity does not protect anyone from a sale date. It raises what the date costs.',
        lesson: 'The more equity you have, the more expensive waiting is.',
        tone: 'mixed',
      },
      {
        id: 'forbearance-ended',
        tag: 'Forbearance ended',
        title: 'The pause is over and they want it all at once',
        situation:
          'A hardship forbearance suspended payments for several months. It ends, and the servicer\'s letter asks for the accumulated total in a single payment. The homeowner understood the paused payments would go to the end of the loan.',
        options: [
          ['Deferral or partial claim', 'Moves the paused amount to the end of the loan. Usually what the borrower expected and often available, but rarely offered unprompted.'],
          ['Modification', 'Folds the arrears into a re-amortized loan.'],
          ['Repayment plan', 'Spreads the arrears across future payments. Raises the payment.'],
          ['Ask what the investor allows', 'Options differ by who owns the loan. Ask that question directly, in writing.'],
          ['Lump sum', 'Only if the money genuinely exists.'],
        ],
        math:
          'Six paused payments of $2,400 is $14,400. As a lump sum it is impossible. Deferred to loan maturity it changes the monthly payment by nothing. Same debt, entirely different outcome, decided by which option gets requested.',
        outcome:
          'Many borrowers read the letter as final and start planning a sale. It is usually the opening position rather than the only one, and the alternatives exist but have to be asked for by name.',
        lesson: 'A lump-sum demand at the end of forbearance is a starting offer. Ask for a deferral in writing.',
        tone: 'mixed',
      },
    ],
  },
  {
    heading: 'Not a standard mortgage foreclosure',
    blurb:
      'Different creditor, different rules, different clock. These get mishandled because people apply mortgage logic to something that is not a mortgage.',
    scenarios: [
      {
        id: 'tax-lien',
        tag: 'Tax lien certificate',
        title: 'An investor bought the tax lien, not the bank',
        situation:
          'Unpaid property taxes go to a municipal tax sale and an investor buys the certificate. Interest and fees accrue. Eventually the certificate holder moves to foreclose the right of redemption. The mortgage may be perfectly current, which makes the whole thing feel unreal.',
        options: [
          ['Redeem', 'Paying the certificate amount plus statutory interest and costs generally ends it. This is the central right and the main thing to protect.'],
          ['Confirm the exact redemption figure', 'Get it in writing from the tax collector. It changes as interest runs.'],
          ['Tell your mortgage servicer', 'A lender will often advance the taxes to protect its own lien and add the amount to your loan. Frequently the fastest fix.'],
          ['Attorney, promptly', 'Tax foreclosure runs on its own timeline and New Jersey law in this area changed recently. This is not a do-it-yourself matter.'],
          ['Sell before redemption closes', 'Preserves equity that a completed tax foreclosure could otherwise consume.'],
        ],
        math:
          'The disproportion is the danger. A few thousand dollars of unpaid taxes can put a property worth several hundred thousand at risk. Courts and legislatures have been actively reworking how surplus equity is treated in these cases, so confirm the current rule with a New Jersey attorney rather than relying on anything you read, including this page.',
        outcome:
          'Redemption works when people act inside the window. What sinks these is treating a tax notice as less serious than a bank letter, when the ratio of debt to what is at stake is far worse.',
        lesson: 'A small tax debt can cost a whole house. Redeem early and confirm the number in writing.',
        tone: 'mixed',
      },
      {
        id: 'hoa-lien',
        tag: 'HOA or condo association',
        title: 'The association is foreclosing over unpaid dues',
        situation:
          'Association fees go unpaid during a hard year. Late fees, attorney fees and a special assessment stack on top. The association records a lien and moves toward foreclosure over an amount that is small relative to the property.',
        options: [
          ['Pay it', 'If the money exists, this ends it. The amounts are usually modest against the home\'s value.'],
          ['Negotiate a payment plan', 'Associations generally prefer being paid to owning a unit.'],
          ['Challenge the fees', 'Attorney fees and late charges are sometimes negotiable or improperly calculated. Ask for an itemized ledger.'],
          ['Check what the association can actually reach', 'Association lien priority against a mortgage is limited and technical. An attorney can tell you where you truly stand.'],
          ['Borrow against equity', 'For a few thousand dollars against substantial equity, almost any borrowing beats losing the unit.'],
        ],
        math:
          'A $9,000 association balance against $180,000 of equity is the most lopsided ratio on this page. Almost any solution beats letting it run, including borrowing at a rate that would normally be unacceptable.',
        outcome:
          'These usually get resolved once the owner understands the association would rather have the money. They go badly when the owner ignores it because the amount seems too small to be dangerous.',
        lesson: 'Small debt, large asset. Fix it early, when it is still small.',
        tone: 'good',
      },
      {
        id: 'second-mortgage',
        tag: 'Second mortgage or HELOC',
        title: 'The first mortgage is current and the second is foreclosing',
        situation:
          'A home equity line from years ago has gone unpaid, while the first mortgage has been paid on time throughout. The junior lender begins foreclosure. The homeowner cannot understand how this is possible when the main loan is current.',
        options: [
          ['Reinstate the second', 'Balances are often far smaller than a first mortgage. Frequently affordable.'],
          ['Settle it', 'A junior lienholder facing a property with thin equity may take a discounted payoff. Get any settlement in writing before paying.'],
          ['Modify the second', 'Less common than on a first, but it exists.'],
          ['Refinance and consolidate', 'Depends on equity and credit.'],
          ['Sell', 'A sale pays both liens in order and returns whatever is left.'],
        ],
        math:
          'A junior lienholder foreclosing takes the property subject to the first mortgage, so it only makes economic sense for them when there is equity above the first. That cuts both ways: if there is equity, they are motivated to proceed, and so should you be. If there is not, they may settle cheaply.',
        outcome:
          'Often resolved by settlement, because the numbers are smaller and both sides prefer cash to litigation. What makes these dangerous is the disbelief. Months pass while the owner insists this cannot be happening because the real mortgage is current.',
        lesson: 'A current first mortgage does not protect you from a second lienholder.',
        tone: 'mixed',
      },
      {
        id: 'reverse-mortgage',
        tag: 'Reverse mortgage',
        title: 'A senior in default on a reverse mortgage',
        situation:
          'An older homeowner with a reverse mortgage falls behind on property taxes and insurance, or a change in living arrangements affects the occupancy requirement. The servicer calls the loan due. Adult children discover the situation late, often after a hospitalization or a move.',
        options: [
          ['Cure the tax and insurance default', 'Where the arrears are payable, this is the direct fix.'],
          ['Repayment plan', 'Some servicers allow tax and insurance arrears to be repaid over time.'],
          ['Heirs pay off or refinance', 'Federally insured reverse mortgages typically let heirs satisfy the debt at a defined amount to keep the home. Confirm the exact figure and deadline in writing.'],
          ['Sell', 'Any equity above the loan belongs to the borrower or the estate.'],
          ['Deed in lieu', 'Ends it without an auction where there is no equity to protect.'],
        ],
        math:
          'These loans grow rather than amortize, so equity shrinks over time. Whether anything is left depends on how long the loan has run against how much the property appreciated. That figure decides everything, and almost nobody has it until they ask.',
        outcome:
          'A hard category. Deadlines are short, the borrower is often unwell, and families discover the problem with weeks left. Homes are lost here that could have been sold with equity intact if anyone had opened the mail in month one.',
        lesson: 'If a parent has a reverse mortgage, find out today whether taxes and insurance are current.',
        tone: 'hard',
      },
    ],
  },
  {
    heading: 'Complicated ownership or condition',
    blurb:
      'The foreclosure is the simple part. Who owns it, who lives there, and what shape it is in are the actual problems.',
    scenarios: [
      {
        id: 'inherited-underwater',
        tag: 'Inherited property, underwater',
        title: 'An inherited house that owes more than it is worth',
        situation:
          'A parent dies leaving a house carrying $240,000 against a property worth about $205,000. The heir is not on the note, so the servicer will not discuss the loan. Taxes accrue and a foreclosure is started against the estate.',
        options: [
          ['Establish authority first', 'Nothing else can happen until executor paperwork is in place. This is the step people skip and then lose months to.'],
          ['Short sale', 'The lender accepts less than the balance. Needs their approval and takes time.'],
          ['Deed in lieu', 'Hand the property back. Cleaner than foreclosure, no proceeds.'],
          ['Walk away', 'Sometimes correct. An heir is generally not personally liable for a mortgage they never signed.'],
          ['Keep it', 'Only if someone wants to live there and can assume or refinance the debt.'],
        ],
        math:
          'There is no equity to protect, which changes the goal entirely. It shifts from maximizing proceeds to limiting exposure and closing the matter cleanly. A negative-equity property is a liability that happens to have a roof.',
        outcome:
          'These usually end in a short sale or with the heir letting it go. Neither is a failure. The real mistake is spending savings servicing a debt on a house nobody wants, which happens constantly out of guilt rather than arithmetic.',
        lesson: 'When there is no equity, the win is exiting cleanly, not holding on.',
        tone: 'mixed',
      },
      {
        id: 'divorce',
        tag: 'Divorce, both on the note',
        title: 'One spouse moved out and the mortgage did not care',
        situation:
          'A divorce decree assigns the house and the mortgage to one spouse. That spouse stops paying. Both names remain on the note, because a decree between two people does not bind the lender. The credit of the spouse who left is being destroyed by a house they no longer live in.',
        options: [
          ['Refinance into one name', 'The only clean separation. Requires the keeping spouse to qualify alone.'],
          ['Sell', 'Ends the shared liability and splits whatever equity exists.'],
          ['Enforce the decree', 'Family court can compel compliance between the parties. It does not change the lender\'s rights.'],
          ['Assumption', 'Some loans allow one borrower to assume. Ask, because it is rarely volunteered.'],
          ['Pay to protect your credit', 'Ugly, sometimes rational for the spouse who left while a sale is arranged.'],
        ],
        math:
          'Two separate obligations that people constantly conflate. The decree governs the ex-spouses. The note governs both of them and the lender. Winning in family court does not remove a name from a mortgage, and only refinancing or selling does.',
        outcome:
          'Usually a sale, often later and more expensively than it should have been, because each party spends months believing the other is legally required to fix it.',
        lesson: 'A divorce decree does not remove you from a mortgage. Only a refinance or a sale does.',
        tone: 'mixed',
      },
      {
        id: 'investor-tenants',
        tag: 'Landlord with tenants in place',
        title: 'A rental property in foreclosure with a family living in it',
        situation:
          'A small landlord owns a two-family that stopped covering itself after a bad tenancy and a major repair. The mortgage falls behind. Paying tenants live in one unit and have no idea any of this is happening.',
        options: [
          ['Sell to an investor buyer', 'Buyers who want occupied rentals exist and value the income. Tenants stay.'],
          ['Sell vacant on the open market', 'Usually more money, requires the units emptied lawfully, which takes time and money.'],
          ['Modify', 'Harder on investment property than on a primary residence, but not impossible.'],
          ['Raise rent to market', 'If rents have drifted below market, this sometimes fixes the arithmetic outright.'],
          ['Chapter 13', 'Can protect investment property, with real complexity.'],
        ],
        math:
          'Understand what tenants do to your options before you choose. New Jersey gives residential tenants strong protections and they do not simply disappear when a property changes hands. Selling occupied is generally faster and lower; selling vacant is slower and higher. Which is better depends entirely on your remaining time.',
        outcome:
          'These resolve reasonably often, because the property produces income and buyers exist for it. The landlords who do worst are the ones who try to empty the building quickly and improperly, and add a tenancy dispute to a foreclosure.',
        lesson: 'Tenants are not an obstacle to clear. They are a fact that determines which buyer fits.',
        tone: 'mixed',
      },
      {
        id: 'fire-damage',
        tag: 'Fire damage plus arrears',
        title: 'Fire damage and a mortgage running behind',
        situation:
          'A kitchen fire makes the house uninhabitable. The family pays rent elsewhere while the claim is processed and the mortgage slips three months behind. The insurer has issued part of the settlement, and the mortgage company is a named payee on the check.',
        options: [
          ['Restore and stay', 'Works when the settlement genuinely covers the work. Months of displacement.'],
          ['Sell as-is to a damage buyer', 'Specialists buy fire-damaged property. The price reflects the condition.'],
          ['Settlement plus sale together', 'Insurance proceeds and sale proceeds can sometimes clear the loan between them.'],
          ['Forbearance', 'Many servicers pause payments during an active claim. Ask, in writing.'],
          ['Public adjuster', 'An independent adjuster works for you rather than the insurer, for a percentage.'],
        ],
        math:
          'The detail that catches people: the lender usually controls the insurance proceeds and can apply them to the loan rather than releasing them for repairs. Two clocks run at once, the claim and the foreclosure, and nobody is coordinating them.',
        outcome:
          'This turns on whether the settlement is adequate, which is not known early. It is the situation where an independent adjuster earns their fee, and where accepting the insurer\'s first number is most expensive.',
        lesson: 'Find out who controls the insurance money before you plan around it.',
        tone: 'mixed',
      },
    ],
  },
  {
    heading: 'When it goes wrong',
    blurb:
      'Not everything is savable, and pretending otherwise is how people get taken. These are the situations where the honest advice is about limiting damage.',
    scenarios: [
      {
        id: 'cannot-be-saved',
        tag: 'No income, no equity',
        title: 'The house that could not be saved',
        situation:
          'Income never recovers. The homeowner is fourteen months behind, owes close to what the property is worth, has no savings, and the modification is denied because there is not enough income to support any payment the servicer would accept.',
        options: [
          ['Modification', 'Denied. Modifications require income to sustain the modified payment.'],
          ['Chapter 13', 'Requires income for the plan. Without it the case is dismissed and the sale resumes.'],
          ['Chapter 7', 'Discharges personal liability. Does not keep the house.'],
          ['Deed in lieu or short sale', 'Ends it on better terms than an auction, usually with less credit damage.'],
          ['Let it go to sale', 'The default outcome if nothing is done.'],
        ],
        math:
          'With no equity and no income, none of the options produce money. They differ only in how much damage they leave and how long the process takes.',
        outcome:
          'Some situations end with the homeowner losing the house. Anyone who tells you otherwise is selling something. What can still be improved is the exit: a deed in lieu or short sale is generally better for credit, and for the security deposit on the next place, than a completed foreclosure and eviction.',
        lesson: 'When the house cannot be kept, the goal becomes landing softly. That is still worth doing well.',
        tone: 'hard',
      },
      {
        id: 'after-the-sale',
        tag: 'The sale already happened',
        title: 'It sold, and there may still be money owed to you',
        situation:
          'The sheriff sale went through. The homeowner assumes it is finished and stops opening mail. The property sold for more than the total debt, and the excess is not the lender\'s money.',
        options: [
          ['Ask about redemption immediately', 'New Jersey provides a short post-sale window in which a sale can still be undone by paying in full. It is measured in days, so confirm your deadline the same week.'],
          ['Find out if there is a surplus', 'If the sale exceeded what was owed, the excess generally belongs to the former owner and is held for them. It is not paid out automatically.'],
          ['Claim it through the court', 'There is a process. An attorney can handle it for a normal fee.'],
          ['Be extremely careful who contacts you', 'Surplus recovery outfits comb these records and offer to claim your own money for a large percentage.'],
          ['Handle occupancy properly', 'Eviction after a sale follows its own procedure and its own timeline.'],
        ],
        math:
          'If a property sells for $290,000 against a total debt of $240,000, roughly $50,000 belongs to the former owner. People lose that money by not knowing it exists, or by signing away a third of it to the first company that phones them.',
        outcome:
          'The house is gone in this scenario and that does not change. What can change is whether the family walks away with tens of thousands of dollars or with nothing, and that turns entirely on whether anyone checked.',
        lesson: 'After a sheriff sale, ask two questions: is there still a redemption window, and was there a surplus.',
        tone: 'hard',
      },
      {
        id: 'rescue-scam',
        tag: 'Money already paid to a rescue company',
        title: 'Someone took an upfront fee and nothing happened',
        situation:
          'A company promised to stop the foreclosure and negotiate with the lender. They took $3,500 up front, told the homeowner to stop talking to the servicer, and to send the mortgage payments to them instead. Months later nothing has been filed, the calls stop being returned, and the case has advanced.',
        options: [
          ['Contact the servicer directly, today', 'Being told to cut off contact is the single clearest warning sign, and re-establishing it is the first repair.'],
          ['Stop paying the third party', 'Immediately.'],
          ['Gather every document', 'The contract, receipts, texts, emails, names. All of it.'],
          ['Report it', 'The New Jersey Division of Consumer Affairs, the state Attorney General, and the CFPB all take these complaints.'],
          ['Consumer attorney', 'Fee recovery is sometimes possible, and the underlying foreclosure still needs handling.'],
        ],
        math:
          'Federal rules on mortgage assistance relief services generally bar collecting a fee before a written offer from the lender has been delivered and accepted. A large upfront fee is not merely a bad deal, it is a signal that the rules are not being followed.',
        outcome:
          'The money is often not recoverable and the lost months usually are not either. What can be salvaged is the case itself, and the answer is to go straight back to the servicer and to a HUD counselor or a real attorney.',
        lesson: 'Anyone who tells you to stop speaking to your lender is not helping you. Nobody legitimate needs a large fee up front.',
        tone: 'hard',
      },
    ],
  },
];

const ALL = GROUPS.flatMap((g) => g.scenarios);

const TONE: Record<Tone, { chip: string; border: string }> = {
  good: { chip: 'bg-emerald-100 text-emerald-800 border-emerald-300', border: 'border-l-emerald-400' },
  mixed: { chip: 'bg-amber-100 text-amber-800 border-amber-300', border: 'border-l-amber-400' },
  hard: { chip: 'bg-slate-200 text-slate-700 border-slate-400', border: 'border-l-slate-500' },
};

export default function ScenariosPage() {
  return (
    <div className="min-h-full bg-white">
      <SiteHeader />

      <section
        className="relative text-white py-16 px-4 overflow-hidden"
        style={{ backgroundImage: `url('/images/canva/gold-dust-rays.jpg')`, backgroundSize: 'cover', backgroundPosition: 'center' }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/70 to-slate-900/60"></div>
        <div className="max-w-3xl mx-auto relative z-10">
          <p className="text-amber-400 text-xs font-semibold tracking-[0.25em] uppercase mb-4">Eighteen Situations, Walked Through</p>
          <h1 className="font-serif text-4xl md:text-5xl font-bold mb-5 tracking-tight">What Usually Happens</h1>
          <p className="text-slate-300 text-lg leading-relaxed">
            Eighteen situations that come up over and over in New Jersey foreclosure, walked through end to end.
            The options that actually exist, the arithmetic that decides between them, and how each one tends to
            turn out. Four of the eighteen end with the house lost, because that is also what happens.
          </p>
        </div>
      </section>

      {/* The label that makes this page honest. Do not remove or shrink. */}
      <section className="max-w-3xl mx-auto px-4 pt-10">
        <div className="rounded-xl border-2 border-slate-400 bg-slate-50 p-5">
          <p className="text-sm text-slate-800 leading-relaxed">
            <span className="font-bold">These are illustrative examples, not client stories.</span> No real person
            is described on this page, and nobody is named. Each one is a composite of a situation type, written
            to show you what the decision looks like from the inside. The dollar figures are round numbers chosen
            to make the arithmetic clear, not amounts anyone received. We would rather show you honest arithmetic
            than dress up a stranger&apos;s story as proof.
          </p>
        </div>
      </section>

      {/* Jump index */}
      <section className="max-w-3xl mx-auto px-4 pt-10">
        <p className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-4">Find the one closest to you</p>
        <div className="space-y-5">
          {GROUPS.map((g) => (
            <div key={g.heading}>
              <p className="font-semibold text-slate-900 text-sm mb-2">{g.heading}</p>
              <div className="flex flex-wrap gap-2">
                {g.scenarios.map((s) => (
                  <a
                    key={s.id}
                    href={`#${s.id}`}
                    className={`text-xs font-medium border rounded-full px-3 py-1.5 hover:border-slate-900 transition ${TONE[s.tone].chip}`}
                  >
                    {s.tag}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="flex flex-wrap gap-4 mt-6 pt-5 border-t border-slate-200 text-xs text-slate-500">
          <span className="flex items-center gap-2"><span className="h-2.5 w-2.5 rounded-full bg-emerald-400" /> Usually works out</span>
          <span className="flex items-center gap-2"><span className="h-2.5 w-2.5 rounded-full bg-amber-400" /> Depends on time and numbers</span>
          <span className="flex items-center gap-2"><span className="h-2.5 w-2.5 rounded-full bg-slate-500" /> Often ends in loss</span>
        </div>
      </section>

      {GROUPS.map((g) => (
        <section key={g.heading} className="max-w-3xl mx-auto px-4 pt-16">
          <div className="border-t border-slate-200 pt-10 mb-10">
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-slate-900 mb-3">{g.heading}</h2>
            <p className="text-slate-600 leading-relaxed">{g.blurb}</p>
          </div>

          <div className="space-y-14">
            {g.scenarios.map((s) => (
              <article key={s.id} id={s.id} className={`border-l-4 pl-6 sm:pl-8 scroll-mt-24 ${TONE[s.tone].border}`}>
                <span className={`inline-block text-[11px] font-bold uppercase tracking-wider border rounded-full px-3 py-1 mb-3 ${TONE[s.tone].chip}`}>
                  {s.tag}
                </span>
                <h3 className="font-serif text-xl sm:text-2xl font-bold text-slate-900 mb-4">{s.title}</h3>

                <p className="text-slate-600 leading-relaxed mb-6">{s.situation}</p>

                <p className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3">What the options actually are</p>
                <div className="space-y-2 mb-6">
                  {s.options.map(([name, note], j) => (
                    <div key={j} className="rounded-lg border border-slate-200 bg-slate-50 px-4 py-3">
                      <p className="font-semibold text-slate-900 text-sm">{name}</p>
                      <p className="text-slate-600 text-sm leading-relaxed mt-0.5">{note}</p>
                    </div>
                  ))}
                </div>

                <div className="rounded-xl bg-white border border-slate-300 p-5 mb-4">
                  <p className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">The arithmetic</p>
                  <p className="text-slate-700 text-sm leading-relaxed">{s.math}</p>
                </div>

                <p className="text-slate-600 leading-relaxed mb-4">{s.outcome}</p>

                <p className="text-slate-900 font-semibold leading-relaxed">{s.lesson}</p>
              </article>
            ))}
          </div>
        </section>
      ))}

      <section className="bg-slate-50 border-y border-slate-200 py-14 px-4 mt-20">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-serif text-2xl font-bold text-slate-900 mb-4">Why there are no names on this page</h2>
          <div className="space-y-4 text-slate-600 text-sm leading-relaxed">
            <p>
              We have worked with New Jersey homeowners for years and could fill this page with stories. We have
              not, because we never asked those families for permission to publish what happened to them, and
              their foreclosure is their business rather than our marketing.
            </p>
            <p>
              We are collecting that permission properly now, from the people we help going forward. When there
              is enough of it, real accounts will appear here with real names and those people&apos;s blessing.
              Until then you get the mechanics, which are more useful to you anyway.
            </p>
            <p className="text-slate-500">{INDEPENDENCE_STATEMENT}</p>
          </div>
        </div>
      </section>

      <section className="max-w-3xl mx-auto px-4 py-16">
        <div className="rounded-2xl bg-slate-950 text-white px-8 py-12 text-center">
          <h2 className="font-serif text-2xl font-bold mb-3">Which One Is Closest to You?</h2>
          <p className="text-slate-300 mb-8 text-sm leading-relaxed max-w-xl mx-auto">
            The assessment takes two minutes and will tell you where you actually sit, including when the answer
            is that you have more time and better options than you thought.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/quiz" className="bg-amber-400 text-slate-950 px-8 py-3.5 rounded-lg font-bold hover:bg-amber-300 transition">
              Take the Free Assessment
            </Link>
            <Link href="/tools/timeline" className="border border-white/30 bg-white/5 text-white px-8 py-3.5 rounded-lg font-semibold hover:bg-white/15 transition">
              Check Your Timeline
            </Link>
          </div>
        </div>

        <p className="text-xs text-slate-400 mt-8 leading-relaxed text-center max-w-2xl mx-auto">
          Educational only. These {ALL.length} scenarios describe general patterns in the New Jersey judicial
          foreclosure process and are not legal, tax, or financial advice. Individual timelines, numbers, and
          outcomes vary considerably, and some areas of New Jersey law referenced here have changed recently.
          Confirm every deadline in your own court documents and consult a licensed New Jersey attorney about
          your specific case.
        </p>
      </section>

      <footer className="bg-slate-950 text-slate-500 py-10 px-4 text-center text-xs">
        <p className="mb-2">&copy; 2026 NJ Foreclosure Guide. All rights reserved.</p>
        <p className="max-w-2xl mx-auto leading-relaxed">
          Independent educational resource. Not a law firm, lender, or real estate company. We take no referral
          fees, no commissions and no advertising money from anything listed. One destination is a related
          business, labeled wherever it appears. You are never charged.
        </p>
      </footer>
    </div>
  );
}
