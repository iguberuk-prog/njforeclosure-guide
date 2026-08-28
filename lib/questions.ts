// QUESTION PAGES
// ---------------------------------------------------------------------------
// One entry per question homeowners actually search. Structure is
// answer-first: `short` is the direct answer (this is what AI answer engines
// quote), `detail` the explanation, `more` the practical what-to-do layer
// that exists only on the question's own page. The /answers index shows
// q + short and links here; the full page is the canonical home of the
// answer. Keep every legal number consistent with lib/documents.ts.
// ---------------------------------------------------------------------------

export interface QuestionEntry {
  slug: string;
  q: string;
  short: string;
  detail: string;
  more: string;
  links: { href: string; label: string }[];
}

export const QUESTIONS: QuestionEntry[] = [
  {
    slug: 'is-nj-a-judicial-foreclosure-state',
    q: 'Is New Jersey a judicial foreclosure state?',
    short:
      'Yes. New Jersey is a judicial foreclosure state, which means a lender must file a lawsuit in the Superior Court of New Jersey and win a judgment before it can sell your home.',
    detail:
      'A lender cannot simply take a New Jersey home the way it could in a non-judicial state. The case goes through the county courthouse, it creates a court record, and you have the right to respond. Because it is a court process subject to court schedules, it also takes considerably longer than foreclosure in non-judicial states.',
    more:
      'What this means practically: every stage comes with notice and a chance to act. You will get a warning letter (the Notice of Intention) at least 30 days before any case is filed, 35 days to answer once served, and a public auction process that can generally be adjourned twice. Homeowners who treat each of those windows as working time consistently end up with better outcomes than those who wait to see what happens.',
    links: [
      { href: '/documents', label: 'Every foreclosure document, decoded in order' },
      { href: '/tools/timeline', label: 'See where you are in the NJ process' },
    ],
  },
  {
    slug: 'how-long-does-foreclosure-take-in-nj',
    q: 'How long does foreclosure take in New Jersey?',
    short:
      'Usually many months, and frequently more than a year. New Jersey is consistently among the slowest states because every foreclosure goes through the courts.',
    detail:
      'Before a case is even filed, your lender must send a Notice of Intention to Foreclose at least 30 days in advance, and most lenders wait until a loan is well past due to begin. After the complaint is filed and served, you have 35 days to answer. Contested cases take longer still, and court backlogs add more time. The practical takeaway is that most homeowners have more time than they fear, and that time is the most valuable asset they have.',
    more:
      'The most recent New Jersey-specific figure published by ATTOM put the average completed foreclosure at 1,697 days, about four and a half years, and while timelines have shortened since, the judicial process still runs on a scale of months and years, not weeks. Two warnings: first, an uncontested case (one where you never respond) moves much faster than the averages; second, the timeline is only an asset if you use it on an actual plan.',
    links: [
      { href: '/statistics', label: 'NJ foreclosure statistics, every number sourced' },
      { href: '/tools/deadlines', label: 'Calculate your deadlines from the letter you received' },
    ],
  },
  {
    slug: 'how-many-payments-can-i-miss',
    q: 'How many mortgage payments can I miss before foreclosure in New Jersey?',
    short:
      'There is no single magic number, but most lenders do not begin foreclosure until a loan is around 120 days delinquent, and New Jersey law requires a 30-day Notice of Intention before a complaint can be filed.',
    detail:
      'Late fees and credit damage begin much earlier than foreclosure does. The gap between your first missed payment and an actual court filing is typically the widest window of opportunity you will have, because every option, including reinstatement, modification, forbearance, and selling on the open market, is still available during it.',
    more:
      'Federal servicing rules generally prohibit starting a foreclosure until a loan is more than 120 days delinquent, which is where that number comes from. Use the window: call your servicer\'s loss mitigation department before the fourth missed payment, not after. A hardship application filed early, while the arrears are one or two payments, is dramatically easier to resolve than one filed after a case exists.',
    links: [
      { href: '/servicers', label: 'How to reach loss mitigation at the biggest servicers' },
      { href: '/guides/forbearance', label: 'Forbearance: the quickest relief to arrange' },
    ],
  },
  {
    slug: 'what-is-a-notice-of-intention',
    q: 'What is a Notice of Intention to Foreclose in New Jersey?',
    short:
      'It is a formal written warning your lender must send at least 30 days before filing a foreclosure complaint. It is a warning, not a lawsuit.',
    detail:
      'Under the New Jersey Fair Foreclosure Act, this notice must tell you the amount required to cure the default. Curing the default during that window generally stops the process before a case is ever filed. Many homeowners receive this notice, assume foreclosure has already begun, and do nothing. That is a costly misreading, because this is the stage where you have the most control.',
    more:
      'Three moves worth making the week an NOI arrives: check its arrears figure against your own records, because errors matter later; request a loss mitigation application from your servicer while approval odds are at their best; and book a free HUD-approved housing counselor. Nothing about this letter means you are losing the house. It means the clock has started and every single option is still open.',
    links: [
      { href: '/documents/notice-of-intention', label: 'The NOI decoded: your clock and this week\'s moves' },
      { href: '/downloads/nj-foreclosure-week-one-checklist.pdf', label: 'The printable Week One Checklist (PDF)' },
    ],
  },
  {
    slug: 'how-long-to-respond-to-complaint',
    q: 'How long do I have to respond to a foreclosure complaint in New Jersey?',
    short: 'Generally 35 days from the date you were served with the complaint.',
    detail:
      'If you do not answer, the lender can seek a default judgment, and the case moves toward sale without your side ever being heard. Filing an answer keeps you in the case and often opens access to mediation. This is the single most time-sensitive deadline in the entire process, and it is the point at which speaking with a New Jersey attorney matters most. Confirm your exact deadline on your own court papers rather than relying on any general figure.',
    more:
      'Even if the 35 days have already passed, the situation is recoverable: courts can vacate a default for good cause, and the sooner the motion is made, the more sympathetic it looks. Separately, being in default in the lawsuit does not close the loss mitigation track with your servicer, which runs independently of the court case.',
    links: [
      { href: '/documents/summons-and-complaint', label: 'The summons and complaint, decoded' },
      { href: '/tools/deadlines', label: 'Enter your service date, see your deadline' },
    ],
  },
  {
    slug: 'can-i-stop-a-sheriff-sale',
    q: 'Can I stop a sheriff sale in New Jersey?',
    short:
      'Often, yes. Sheriff sales can typically be adjourned on request, a Chapter 13 bankruptcy filing generally halts the sale through the automatic stay, and completing a sale of the home before the auction date stops it entirely.',
    detail:
      'Reinstating the loan by paying what is owed also stops the sale. Which route is realistic depends on your finances and how close the date is. Contact your county sheriff to confirm the current sale schedule, and speak with an attorney before relying on any single strategy.',
    more:
      'The adjournment right is the underused tool here: New Jersey homeowners are generally entitled to two adjournments of up to 30 days each, requested through the sheriff\'s office for a small fee, and courts can order more. Two adjournments, used deliberately, are enough time to close a sale or file a Chapter 13. Our county directory links every sheriff\'s official sale listings so you can confirm the real date, which is frequently later than the one on your notice.',
    links: [
      { href: '/sheriff-sales', label: 'Your county\'s sale listings and adjournment process' },
      { href: '/documents/notice-of-sheriff-sale', label: 'The sheriff sale notice, decoded' },
    ],
  },
  {
    slug: 'can-i-sell-my-house-during-foreclosure',
    q: 'Can I sell my house while it is in foreclosure in New Jersey?',
    short:
      'Yes. You own the home and can sell it right up until the sheriff sale, as long as the sale closes in time and the proceeds satisfy what you owe.',
    detail:
      'This surprises most homeowners. Foreclosure does not remove your right to sell. A sale that closes before the auction pays off the lender, ends the foreclosure, and puts any surplus in your pocket instead of losing it at auction. The constraint is timing: a traditional listing may take longer than you have, which is why cash buyers who close in one to four weeks exist. If you owe more than the home is worth, that becomes a short sale and requires lender approval.',
    more:
      'The decision usually comes down to the calendar. With months of runway, a market listing protects the most value; with weeks, a cash sale trades roughly 15 to 30 percent of market value for certainty; and the two sale adjournments most homeowners can claim add up to 60 days of runway when a closing is genuinely near. Tell every professional involved that a foreclosure clock exists, and get an exact payoff statement from your servicer before signing anything.',
    links: [
      { href: '/tools/net-proceeds', label: 'What you would walk away with, three ways' },
      { href: '/compare', label: 'All 7 options side by side' },
    ],
  },
  {
    slug: 'what-happens-to-my-equity',
    q: 'What happens to my equity if my house is foreclosed in New Jersey?',
    short:
      'Your lender is entitled to what it is owed plus costs. Any surplus above that belongs to you, not the lender.',
    detail:
      'This is the most expensive thing homeowners misunderstand. People with substantial equity sometimes disengage as foreclosure advances, assuming there is nothing left to protect, and lose money that was legally theirs. Property sold at a sheriff sale frequently brings less than an ordinary sale would, so equity that was real can evaporate. If your home is worth meaningfully more than you owe, that fact alone justifies an hour with an attorney immediately.',
    more:
      'If a sheriff sale has already happened and it brought more than the judgment amount, that surplus is deposited with the court, and it does not get mailed to you automatically; it must be claimed. Beware of "surplus recovery" companies charging large contingency fees for what is often a court filing an attorney can handle for far less. Our surplus funds guide walks through how the money flows and how to claim it.',
    links: [
      { href: '/guides/surplus-funds', label: 'Surplus funds: claiming money that is already yours' },
      { href: '/tools/net-proceeds', label: 'Estimate your equity three ways' },
    ],
  },
  {
    slug: 'what-is-the-mediation-program',
    q: 'What is the New Jersey foreclosure mediation program?',
    short:
      'It is a court-run program that brings you and your lender together with a neutral mediator, at no cost to eligible homeowners.',
    detail:
      'It is available once a foreclosure complaint has been filed, and eligible homeowners may also receive free housing counseling and legal assistance alongside it. Because it costs nothing and does not require you to give anything up, it is one of the strongest options available to a homeowner who wants to keep their home. Details are available through the New Jersey Courts.',
    more:
      'Mediation runs alongside the lawsuit rather than pausing it, so keep answering court deadlines while it proceeds. Arrive prepared: a completed financial worksheet, proof of income, and a realistic monthly number you can actually pay make the difference between a mediation that produces a modification and one that produces a follow-up meeting. A free HUD counselor can help you assemble exactly that package.',
    links: [
      { href: '/guides/loan-modification', label: 'The loan modification guide' },
      { href: '/documents/summons-and-complaint', label: 'Just served? Your 35-day window, decoded' },
    ],
  },
  {
    slug: 'does-foreclosure-ruin-my-credit',
    q: 'Does foreclosure ruin my credit?',
    short:
      'A completed foreclosure is a serious negative event on your credit and can affect it for years, but missed payments have already been damaging it well before that point.',
    detail:
      'Because the damage begins with delinquency rather than with the foreclosure itself, acting earlier limits it. Alternatives that avoid a completed foreclosure, such as reinstatement, a modification, or selling the property, generally leave you in a better position than letting the case run to a sheriff sale. Nobody can promise you a specific credit outcome, and anyone who does should not be trusted.',
    more:
      'The useful mental model: your credit is a sunk cost up to today, and the decision in front of you only controls what happens from here. A resolved delinquency, however it resolves, starts healing; an abandoned one compounds. People who sold before the auction or completed a modification routinely return to normal borrowing years sooner than those whose cases ran all the way through.',
    links: [
      { href: '/compare', label: 'Credit impact compared across all 7 options' },
      { href: '/quiz', label: 'See which options fit your situation, free' },
    ],
  },
  {
    slug: 'can-i-get-my-house-back-after-sheriff-sale',
    q: 'Can I get my house back after a sheriff sale in New Jersey?',
    short:
      'New Jersey provides a short redemption window after a sheriff sale, commonly described as 10 days, during which the property may be redeemed by paying what is owed in full.',
    detail:
      'That window is narrow and requires the full amount, so it is rarely a practical rescue for someone who could not afford the loan. Treat the sheriff sale date as the real deadline rather than counting on redemption afterward. Confirm the specifics with an attorney, since the details depend on your case.',
    more:
      'Two things remain genuinely worth doing after a sale: check whether the auction produced surplus funds (money above the judgment belongs to you and sits with the court until claimed), and know that possession does not change overnight, because removal happens only through a court-issued writ served by the sheriff, never by the buyer changing your locks.',
    links: [
      { href: '/guides/surplus-funds', label: 'Surplus funds: how to claim them' },
      { href: '/documents/writ-of-possession', label: 'After the sale: the writ of possession, decoded' },
    ],
  },
  {
    slug: 'do-i-need-a-lawyer',
    q: 'Do I need a lawyer for a New Jersey foreclosure?',
    short:
      'You are not required to have one, but because New Jersey foreclosure is a court case with strict deadlines, having one materially improves your position, especially if you have equity or want to keep the home.',
    detail:
      'Free options exist. HUD-approved housing counselors cost nothing, and the court mediation program can include free legal assistance for eligible homeowners. The New Jersey State Bar Association also runs a lawyer referral service. Be cautious of anyone who charges an upfront fee promising to stop your foreclosure.',
    more:
      'A single paid consultation, typically a few hundred dollars, is worth it at three specific moments: when your 35-day answer window is open, when a default has been entered against you, and when a sale date exists. Bring your documents and your numbers, and ask for a flat-fee scope. And remember the legal line: charging up-front fees to "stop a foreclosure" is what the scam operations do, not what attorneys practicing normally do.',
    links: [
      { href: '/scams', label: 'How to tell real help from a rescue scam' },
      { href: '/professionals', label: 'What we can and cannot connect you with' },
    ],
  },
  {
    slug: 'options-if-behind-on-mortgage',
    q: 'What are my options if I am behind on my mortgage in New Jersey?',
    short:
      'There are seven realistic paths: reinstatement, loan modification, refinancing, forbearance, short sale, Chapter 13 bankruptcy protection, and selling the property.',
    detail:
      'Which of them are actually open to you depends on how far along the case is, whether you want to keep the home, how much equity you have, and the condition of the property. The earlier you act, the more of these remain available. By the time a sale date is scheduled, several have closed off.',
    more:
      'Five of the seven keep you in the house, which surprises people who assume foreclosure help means selling. The honest sequencing: catch-up options (reinstatement, modification, forbearance) work best before judgment; Chapter 13 and sales work right up to the auction; and the free options, HUD counseling and court mediation, are available through most of the process and cost nothing to try first.',
    links: [
      { href: '/compare', label: 'All 7 compared in one honest table' },
      { href: '/quiz', label: 'Two minutes to see which fit you' },
    ],
  },
  {
    slug: 'is-it-too-late',
    q: 'Is it too late to do anything about my foreclosure?',
    short:
      'Almost certainly not. Options narrow as the case advances, but homeowners have real choices even after a judgment has been entered and a sale date has been scheduled.',
    detail:
      'After judgment, a Chapter 13 filing can pause a sale, adjournments can move the date, and a sale of the property can still close beforehand. The mistake that genuinely forecloses your options is disengaging, because deadlines pass whether or not you are paying attention.',
    more:
      'A useful reframe: the question is never "is it too late," it is "which options are still open at my stage." Find the newest document you received, look up what it means and what remains possible, and work that list. Even the week before an auction, people close sales, file Chapter 13, and win adjournments. The only stage with nothing left to decide is after a completed, confirmed sale, and even then surplus funds may be waiting.',
    links: [
      { href: '/documents', label: 'Find your newest letter; see what is still open' },
      { href: '/sheriff-sales', label: 'Confirm your real sale date by county' },
    ],
  },
  {
    slug: 'what-happens-after-a-sheriff-sale',
    q: 'What happens after a sheriff sale in New Jersey?',
    short:
      'The sale is subject to a roughly 10-day period for objections and redemption; after it is confirmed and the deed is delivered, the buyer must obtain a court writ of possession before anyone can be required to leave, and any surplus above the judgment belongs to the former homeowner.',
    detail:
      'Nothing changes the day of the auction itself. You are still lawfully in the home, and removal can happen only through the sheriff executing a court order, never through the buyer changing locks or shutting off utilities on their own. The transition typically takes weeks, and courts can grant short hardship extensions.',
    more:
      'Three post-sale moves matter. First, claim any surplus: if bidding exceeded the judgment amount, that money is deposited with the court and belongs to you. Second, if you need time, ask about a hardship stay, and know that buyers often pay for smooth, scheduled move-outs ("cash for keys"), which is negotiable and entirely optional. Third, document the home\'s condition when you leave.',
    links: [
      { href: '/documents/writ-of-possession', label: 'The writ of possession, decoded' },
      { href: '/guides/surplus-funds', label: 'Claiming surplus funds' },
    ],
  },
  {
    slug: 'inherited-a-house-in-foreclosure',
    q: 'I inherited a house that is in foreclosure. What can I do?',
    short:
      'You have the same core options the original owner had: bring the loan current, seek a modification (federal rules require servicers to work with successors), sell the property before the sale date, or walk away, and you generally cannot be forced to take on the debt personally.',
    detail:
      'An inherited foreclosure combines two clocks: the court case and the estate process. The mortgage stays with the house, not with you personally, so the real question is whether the home has equity worth protecting. If it does, acting quickly to either resolve the loan or sell before the auction preserves that value for the heirs; if it does not, letting it go may be rational, and a deficiency against heirs personally is generally not the lender\'s remedy.',
    more:
      'Practical sequence: confirm where the case stands (our documents guide decodes whatever letter is newest), notify the servicer of the death with a death certificate and establish yourself as a confirmed successor in interest, which unlocks their obligation to communicate with you, and get the estate paperwork moving, since a sale needs authority to sign. Inherited situations are also where predatory cash offers concentrate; get a second offer, always.',
    links: [
      { href: '/tools/net-proceeds', label: 'Is there equity worth protecting? Run the numbers' },
      { href: '/scams', label: 'The red flags, before you sign anything' },
    ],
  },
  {
    slug: 'can-the-bank-sue-me-for-the-difference',
    q: 'Can the bank come after me for the difference after a foreclosure in New Jersey?',
    short:
      'A deficiency claim is possible in New Jersey but requires a separate lawsuit filed within a strict time limit, is subject to a fair-market-value credit for the home, and in practice many residential deficiencies are never pursued.',
    detail:
      'The deficiency is the gap between what you owed and what the sale brought. New Jersey law makes pursuing it genuinely burdensome: it needs its own action on the note, brought within three months of the sale (or of its confirmation where confirmation is required), and you are entitled to have the home\'s fair market value, not just the auction price, credited against the debt. That fair-value defense alone erases many claimed deficiencies.',
    more:
      'Ways to take the issue off the table entirely: a short sale or deed in lieu with a written deficiency waiver, a Chapter 7 or 13 bankruptcy discharging the debt, or simply confirming in writing that the lender waives it. If you receive papers for a deficiency action, the fair-market-value credit is your first conversation with an attorney, and the deadline to respond is real.',
    links: [
      { href: '/guides/short-sale', label: 'Short sales and getting the waiver in writing' },
      { href: '/glossary', label: 'Deficiency, redemption, surplus: the glossary' },
    ],
  },
];

export function getQuestion(slug: string): QuestionEntry | undefined {
  return QUESTIONS.find((x) => x.slug === slug);
}
