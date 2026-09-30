// QUESTION PAGES, SET 2 (20 entries, added 2026-09-30)
// ---------------------------------------------------------------------------
// Drafted 2026-09-30 to extend lib/questions.ts. Same contract as that file:
// `short` = direct answer, `detail` = explanation, `more` = what to do.
// Legal numbers used here match the rest of the site: 30-day NOI, 35 days to
// answer, 60 days to request mediation, two homeowner adjournments of up to
// 30 days (N.J.S.A. 2A:17-36, five total), roughly 10-day post-sale window
// (R. 4:65-5), Reg X 12 CFR 1024.41 (120 days, 45/37/30/14-day rules),
// 1024.36 (owner identity within 10 business days), Community Wealth
// Preservation Program (P.L.2023, c.255: 3.5% deposit, 90 business days,
// upset price posted at least four weeks before sale), surplus via
// R. 4:64-3 and 4:57-2 into the Superior Court Trust Fund.
// HUD counselors 800-569-4287; Legal Services of NJ 1-888-576-5529.
// ---------------------------------------------------------------------------

import type { QuestionEntry } from './questions';

export const QUESTIONS_NEW: QuestionEntry[] = [
  {
    slug: 'how-long-can-i-stay-in-my-house-after-sheriff-sale',
    q: 'How long can I stay in my house after a sheriff sale in New Jersey?',
    short:
      'There is no fixed statewide number, but you generally do not have to leave on the day of the sale. The buyer must wait out the roughly 10-day post-sale period, receive the sheriff\'s deed, and then get a court writ of possession before the sheriff can require you to move.',
    detail:
      'Each step in that sequence takes time. After the auction there is generally a 10-day window for objections and redemption, the sheriff\'s deed is delivered after that, and only then can the new owner ask the court for a writ of possession. The writ is carried out by the sheriff\'s office on a scheduled date, with notice to the people living there. In practice this often adds up to weeks and sometimes longer, depending on the county and how quickly the buyer acts. Nobody, including the buyer, may change the locks, remove your belongings or shut off utilities on their own.',
    more:
      'Use the time rather than waiting for the knock. Line up your next home, check whether the sale produced surplus funds that belong to you, and consider whether a negotiated move-out date with the buyer, sometimes paid as cash for keys, serves you better than the court process. If you need more time because of a hardship such as illness or children in school, ask a New Jersey attorney or Legal Services of New Jersey (1-888-576-5529) about asking the court for a short stay, and ask promptly. Tenants living in the home have separate and stronger protections than a former owner does.',
    links: [
      { href: '/blog/how-long-can-i-stay-after-sheriff-sale-nj/', label: 'The after-sale timeline, step by step' },
      { href: '/documents/writ-of-possession', label: 'The writ of possession, decoded' },
      { href: '/guides/after-sheriff-sale', label: 'The complete after-the-sale guide' },
    ],
  },
  {
    slug: 'what-is-a-writ-of-possession-nj',
    q: 'What is a writ of possession in a New Jersey foreclosure?',
    short:
      'A writ of possession is the court order that lets the buyer at a sheriff sale take physical possession of the home. It is carried out by the sheriff\'s office on a scheduled date, and it is the lawful way a former owner who has not left can be removed.',
    detail:
      'The writ comes near the very end. After the sheriff sale, the roughly 10-day objection and redemption period runs, the sheriff\'s deed is delivered, and the new owner, often the lender itself, then applies to the court for the writ. The sheriff\'s office serves it on the household with a date by which the occupants must leave, and on that date officers can remove anyone still there and turn the property over. Until the writ is executed, the buyer has no right to change the locks, take your things or cut off utilities.',
    more:
      'When a writ or a notice to vacate arrives, read the date first and plan backward from it. If you need more time because of a serious hardship, ask an attorney or Legal Services of New Jersey (1-888-576-5529) about asking the court for a short stay, and do it right away. Talk to the new owner too, because an agreed move-out date, sometimes with a relocation payment, is often worth more to them than a lockout. Take your belongings and photograph the home\'s condition before you leave. A writ against a former owner is different from evicting a tenant; renters in a foreclosed home generally have separate protections under New Jersey\'s Anti-Eviction Act.',
    links: [
      { href: '/documents/writ-of-possession', label: 'The writ of possession, decoded' },
      { href: '/answers/what-happens-after-a-sheriff-sale', label: 'What happens after a sheriff sale' },
      { href: '/tenants', label: 'Renting a foreclosed home? Your separate rights' },
    ],
  },
  {
    slug: 'what-is-a-final-judgment-of-foreclosure',
    q: 'What is a final judgment of foreclosure in New Jersey?',
    short:
      'It is the court\'s order that fixes the total amount owed and authorizes the county sheriff to sell the home. It is a late stage, but it is not a sale or an eviction, and you still live in the home lawfully.',
    detail:
      'Before the judgment is entered, the lender files a motion for final judgment, which is served on you and generally gives you a chance to object to the amount claimed. In uncontested cases the Office of Foreclosure reviews the papers and the judgment is entered without a hearing. The total includes unpaid principal, interest, and allowed fees and costs, and a writ of execution then sends the case to the sheriff to schedule a sale. The judgment also changes the math: the Fair Foreclosure Act right to cure by paying the arrears generally runs only up to entry of final judgment, and after that, keeping the home usually means paying the full judgment amount.',
    more:
      'Check the amount against your own records as soon as the motion papers arrive, because disputing it is much harder once judgment is entered. Then check your county\'s sheriff sale listing to see whether a sale date has been set, and pick a plan while the sale is still weeks away: selling the home before the auction, filing Chapter 13 with an attorney\'s help, pursuing a workout your servicer is still willing to review, or using your adjournments to make time for one of these. If the home has equity, protecting it comes first, since an auction often brings less than an ordinary sale.',
    links: [
      { href: '/documents/final-judgment', label: 'Final judgment, decoded: what is still open' },
      { href: '/blog/final-judgment-to-sheriff-sale-how-long-nj/', label: 'How long from judgment to sheriff sale?' },
      { href: '/tools/sheriff-sale-date', label: 'Find out whether a sale date is set' },
    ],
  },
  {
    slug: 'how-do-i-find-my-sheriff-sale-date',
    q: 'How do I find out my sheriff sale date in New Jersey?',
    short:
      'Check your county sheriff\'s official online sale listing, searching by your name or address, and then confirm by phone with the sheriff\'s office. The date on the listing is usually more current than the date on any letter you received.',
    detail:
      'Sixteen New Jersey counties post foreclosure sales on the CivilView system, while Mercer, Somerset, Sussex and Warren publish their own lists on county websites. Each listing has a Sales Date field and a status history that records every adjournment, and those are where the current date appears, because the notice text inside a listing is generally not rewritten when a sale moves. If you cannot find your property, the sale may not be scheduled yet, it may be listed under a prior or deceased owner\'s name, or it may appear only in the finished-sales view.',
    more:
      'Our sale date finder and county pages link each sheriff\'s official list, so you do not have to hunt for it. When you call the sheriff\'s office, have your court docket number (in foreclosures it generally begins with F) and the sheriff\'s file number from the listing, and ask two questions: what is the current sale date, and how many homeowner adjournments remain. Write down who you spoke with and when. Then enter the date in the countdown tool to see how many working weeks you have. Mail and calls that start after your listing goes public are not official notices.',
    links: [
      { href: '/tools/sheriff-sale-date', label: 'The sheriff sale date finder' },
      { href: '/sheriff-sales', label: 'Every county\'s official sale listing' },
      { href: '/blog/how-to-read-nj-sheriff-sale-listing-civilview/', label: 'How to read your CivilView listing' },
    ],
  },
  {
    slug: 'how-many-times-can-a-sheriff-sale-be-adjourned',
    q: 'How many times can a sheriff sale be adjourned in New Jersey?',
    short:
      'Under N.J.S.A. 2A:17-36, the sheriff may grant five adjournments: two at the homeowner\'s request, two at the lender\'s request, and one when both agree, each for up to 30 calendar days. A court can order more for cause.',
    detail:
      'The two homeowner adjournments are the ones you control. They are requested through the county sheriff\'s office, and each county sets its own procedure and fee, so call ahead instead of assuming. Lender adjournments are separate and common, especially while a loss mitigation review is under way. A bankruptcy filing puts the sale on hold under a different rule, the automatic stay. Beyond the statutory adjournments, a judge can postpone a sale for cause, but that takes a motion and a good reason.',
    more:
      'Check the status history on your county\'s listing to count what has been used, since entries labeled with the defendant generally mean one of your adjournments was taken, then confirm the count with the sheriff. Treat your two adjournments as a budget of up to about 60 days and spend them on something that ends the case, such as closing a sale, completing a loss mitigation application, or meeting with an attorney. An adjournment postpones the sale; it does not resolve the foreclosure, and once yours are used, the next date is much harder to move.',
    links: [
      { href: '/blog/how-many-times-can-sheriff-sale-be-adjourned-nj/', label: 'Adjournments, explained in depth' },
      { href: '/tools/sheriff-sale-countdown', label: 'Count down to your sale and adjournment windows' },
      { href: '/blog/sheriff-sale-adjournment-playbook/', label: 'The adjournment playbook' },
    ],
  },
  {
    slug: 'what-is-the-10-day-objection-period-after-sheriff-sale',
    q: 'What is the 10-day objection period after a sheriff sale in New Jersey?',
    short:
      'After a New Jersey sheriff sale there is generally a 10-day window before the sheriff\'s deed is delivered. During it, a party can file an objection to the sale with the court, and the owner may redeem the property by paying the full amount due.',
    detail:
      'Under the court rules (R. 4:65-5), objections to a sheriff sale are generally made within 10 days after the sale, or at any time before the deed is delivered. Objections usually concern how the sale was noticed or conducted, not simple unhappiness with the result. The same window is when redemption is possible, which means paying what is owed in full, and that is rarely realistic for someone who could not keep up with the loan. When a timely objection is filed, the deed is generally held until the court rules on it.',
    more:
      'If you believe something went wrong with the sale, contact a New Jersey attorney or Legal Services of New Jersey (1-888-576-5529) the same day, because the window is short and an objection is a formal motion, not a phone call. If redemption money truly exists, for example from family or a refinance arranged before the auction, get the exact figure in writing from the sheriff and the plaintiff\'s attorney. Otherwise, use these days to compare the winning bid with the judgment, since anything above it may be surplus that belongs to you, and to plan your move on your own schedule.',
    links: [
      { href: '/answers/can-i-get-my-house-back-after-sheriff-sale', label: 'Redemption after the sale, explained' },
      { href: '/tools/sheriff-sale-countdown', label: 'See when the post-sale window ends' },
      { href: '/guides/surplus-funds', label: 'Surplus funds: how to claim them' },
    ],
  },
  {
    slug: 'who-gets-the-money-from-a-sheriff-sale',
    q: 'Who gets the money from a sheriff sale in New Jersey?',
    short:
      'The sale price first covers the sheriff\'s fees and costs and the foreclosing lender\'s judgment. Anything left over is surplus, which is deposited with the court and can be claimed by junior lienholders in order of priority and then by the former owner.',
    detail:
      'Often no cash changes hands at all. The foreclosing lender can bid its own judgment as a credit bid, and when no outside bidder beats it, the property goes back to the lender, shown on listings as purchased by the plaintiff, with no surplus. When third parties bid above the judgment, the extra is deposited into the Superior Court Trust Fund. It is not mailed out automatically. Anyone claiming it, such as a second mortgage or HELOC lender, a judgment creditor or the former owner, generally files a motion under Court Rules 4:64-3 and 4:57-2, and the court decides who is paid and in what order.',
    more:
      'Look up the result on your county\'s sale listing and compare the winning bid with the judgment amount; a gap in your favor is worth acting on. Surplus claims attract companies that charge large percentages for what is often a routine court motion, so compare that fee with what a New Jersey attorney would charge, or ask Legal Services of New Jersey (1-888-576-5529) whether you qualify for free help. Other liens on the property are paid from the surplus before you are, so estimate what you would actually receive before signing anything.',
    links: [
      { href: '/guides/surplus-funds', label: 'Surplus funds: claiming money that is yours' },
      { href: '/tools/surplus-funds', label: 'Estimate possible surplus' },
      { href: '/blog/what-happens-at-auction-the-banks-credit-bid/', label: 'How the bank\'s credit bid works' },
    ],
  },
  {
    slug: 'what-is-a-sheriffs-deed',
    q: 'What is a sheriff\'s deed in New Jersey?',
    short:
      'A sheriff\'s deed is the document that transfers ownership of a foreclosed home to the winning bidder at the sheriff sale. It is generally delivered only after the roughly 10-day objection and redemption period has passed and the buyer has paid in full.',
    detail:
      'Until the deed is delivered, the former owner still holds title, which is why redemption is possible during that window. Once the deed is delivered and recorded with the county clerk, ownership has changed and the redemption right generally ends. The deed transfers ownership, not occupancy: a new owner who wants a former owner to leave must still get a writ of possession from the court, and tenants keep their own protections. Liens held by parties who were properly named in the foreclosure are generally cut off from the property by the sale, although that does not by itself cancel the debts behind them.',
    more:
      'For a former owner, delivery of the deed is a useful planning marker. It is a natural point to negotiate a move-out date with the new owner and to check whether the sale produced surplus funds you can claim. If tax bills, utility notices or municipal letters keep coming to you after the deed is recorded, send the sender a copy of the recorded deed so the account moves to the new owner. If you think the sale itself was flawed, the time to act is before the deed is delivered, with help from a New Jersey attorney.',
    links: [
      { href: '/answers/what-happens-after-a-sheriff-sale', label: 'The full after-sale sequence' },
      { href: '/blog/letters-after-sheriff-sale-nj/', label: 'The letters that arrive after a sale' },
      { href: '/glossary', label: 'Deed, redemption, surplus: the glossary' },
    ],
  },
  {
    slug: 'can-i-file-an-answer-to-a-foreclosure-myself',
    q: 'Can I file an answer to a foreclosure complaint myself in New Jersey?',
    short:
      'Yes. You can represent yourself and file an answer within 35 days after you were served, and the New Jersey Courts publish self-help materials for foreclosure cases. An answer only changes the case if it raises real disputes, so getting free advice first is worth it.',
    detail:
      'An answer is your written response to each numbered paragraph of the complaint, along with any defenses, such as disputing the amount claimed, questioning whether the plaintiff has the right to enforce the loan, or pointing to Fair Foreclosure Act notice requirements that were not met. It is filed with the court, served on the lender\'s attorney, and accompanied by a filing fee unless the court waives it for someone who cannot afford it. An answer that does not actually contest the mortgage, the lender\'s right to foreclose or the amount due can be treated as uncontested, so a statement that you cannot afford the payments usually does not keep the case contested on its own.',
    more:
      'Start with the free options: Legal Services of New Jersey (1-888-576-5529) for income-qualifying homeowners, a HUD-approved housing counselor (800-569-4287), and the court\'s self-help foreclosure page on njcourts.gov for current forms and instructions. Mark the 35th day from service on your calendar, and if it is close, file on time rather than waiting for a perfect answer. Requesting mediation does not replace the answer or extend its deadline, so do both. If the 35 days have already passed, ask a New Jersey attorney about a motion to vacate the default.',
    links: [
      { href: '/answers/how-long-to-respond-to-complaint', label: 'Your 35-day answer window' },
      { href: '/documents/summons-and-complaint', label: 'The summons and complaint, decoded' },
      { href: '/tools/deadlines', label: 'Calculate your answer and mediation deadlines' },
    ],
  },
  {
    slug: 'contested-vs-uncontested-foreclosure',
    q: 'What is the difference between a contested and uncontested foreclosure in New Jersey?',
    short:
      'A foreclosure is uncontested when the homeowner files no answer, or an answer that does not dispute the key issues, and it then moves on paper through the Office of Foreclosure. It is contested when the answer raises real defenses, which puts it before a judge and generally takes longer.',
    detail:
      'Most New Jersey foreclosures are uncontested. In those cases default is entered after the 35-day answer period, and the lender moves for final judgment through the Office of Foreclosure without a hearing. A contested case is handled by a Chancery Division judge in the county, where the lender must prove its case and the homeowner can press defenses such as disputing the amount due or the plaintiff\'s standing to foreclose. If a judge decides an answer does not raise a real dispute, the case can be sent back to the uncontested track.',
    more:
      'Contesting a case is a tool, not a goal. It makes sense when there is something concrete to argue, or when you need time to finish a modification, a sale or a Chapter 13 plan, and it rarely helps when it only delays an outcome you have no plan for. Either way, the free steps still apply: the court\'s mediation program, loss mitigation with your servicer, and advice from Legal Services of New Jersey (1-888-576-5529) or a HUD-approved counselor (800-569-4287). A licensed New Jersey attorney can tell you whether your defenses are strong enough to press.',
    links: [
      { href: '/answers/what-happens-if-i-ignore-the-foreclosure', label: 'What happens if you do not respond' },
      { href: '/guides/foreclosure-mediation', label: 'Free court mediation, step by step' },
      { href: '/glossary', label: 'Contested, default, judgment: the glossary' },
    ],
  },
  {
    slug: 'what-is-the-office-of-foreclosure',
    q: 'What is the Office of Foreclosure in New Jersey?',
    short:
      'The Office of Foreclosure is a unit of the New Jersey Superior Court that handles uncontested foreclosure cases. It reviews the lender\'s paperwork, including motions for final judgment, so those cases can move forward without a hearing before a judge.',
    detail:
      'When no answer is filed, or an answer is found not to contest the case, the file is processed by the Office of Foreclosure rather than by a local judge. It reviews the lender\'s proof of the amount due before final judgment is entered, and parties to a case generally file their motions to withdraw surplus funds there as well. It is part of the court, not part of your lender, and it does not negotiate for either side. Contested cases go to a Chancery Division judge in the county where the property is located.',
    more:
      'If the Office of Foreclosure appears on papers you received, your case is most likely on the uncontested track, and a motion for final judgment is coming or has been filed. Read the amounts in any motion carefully and follow its instructions for objecting if you disagree. Be wary of callers or letters that claim to be from the Office of Foreclosure and ask for money, since the court does not charge fees to save your home. The court\'s self-help foreclosure page on njcourts.gov is the reliable source for forms and contact information.',
    links: [
      { href: '/documents/entry-of-default', label: 'Entry of default, decoded' },
      { href: '/blog/what-happens-if-i-dont-answer-foreclosure-nj/', label: 'The uncontested track, step by step' },
      { href: '/scams', label: 'How to spot a foreclosure rescue scam' },
    ],
  },
  {
    slug: 'when-is-a-sheriff-sale-notice-posted',
    q: 'What is a notice of sheriff sale, and when is it posted in New Jersey?',
    short:
      'A notice of sheriff sale announces the date, time and place of the public auction of a foreclosed home. After the writ of execution reaches the sheriff, the sale is scheduled and advertised publicly for several weeks beforehand, and notice is also sent to the owner.',
    detail:
      'The public notice is generally published in newspapers for several consecutive weeks before the sale and posted at the property and at the sheriff\'s office, and most counties also put it on their online sale listing. The owner and other parties to the case are sent notice by mail before the sale. Under the Community Wealth Preservation Program law, the lender must also give notice of the upset price, the minimum it will accept, at least four weeks before the sale, posted on the sheriff\'s website. Because investors and scammers read these listings too, mail from strangers often arrives right after a notice is published.',
    more:
      'Treat the notice as a planning document, not a verdict. Confirm the current date on the county listing, since sales are adjourned often and the printed date may already be out of date. Decide now whether you are selling before the auction, filing Chapter 13 with an attorney, pursuing a workout, or preparing a Community Wealth Preservation Program purchase, and request your adjournments if you need time. Upfront fees for foreclosure rescue help are generally illegal in New Jersey, so compare any offer at your door against a second one and call a HUD-approved counselor (800-569-4287) before signing.',
    links: [
      { href: '/documents/notice-of-sheriff-sale', label: 'The sheriff sale notice, decoded' },
      { href: '/blog/sheriff-sale-notice-nj-what-to-do/', label: 'Got a sale notice? What to do this week' },
      { href: '/tools/sheriff-sale-date', label: 'Confirm your current sale date' },
    ],
  },
  {
    slug: 'can-i-buy-my-house-back-at-the-sheriff-sale',
    q: 'Can I buy my own house back at the sheriff sale in New Jersey?',
    short:
      'Possibly. New Jersey\'s Community Wealth Preservation Program, signed in January 2024, generally gives a foreclosed individual owner, next of kin, or a qualifying tenant of a primary residence a first right to buy at the lender\'s upset price, with a 3.5 percent deposit and up to 90 business days to pay the rest.',
    detail:
      'The catch is the price. The upset price is generally built from the full judgment plus interest, costs and fees, so buying back usually means financing close to the entire debt, not just the missed payments. To use a mortgage, the buyer needs pre-approval for at least the upset price from a lender regulated by the New Jersey Department of Banking and Insurance or a federal banking agency. If the lender asks, an owner or next of kin generally must show the foreclosure resulted from circumstances such as financial hardship, illness, divorce, a death in the family or predatory lending, and the right is exercised before bidding opens. The program changes who can buy at the sale; it does not postpone or cancel the sale.',
    more:
      'Start weeks ahead. Watch for the upset price, which must be posted on the sheriff\'s website at least four weeks before the sale, gather hardship documents, and have whoever will buy, often a relative or tenant with stronger credit, talk to a lender about pre-approval now. Missing the 90-business-day deadline can cost the deposit and accrued interest. Parts of the law have been challenged in court, and some counties have changed how they apply it, so confirm current practice with the sheriff\'s office before sale day. A HUD-approved counselor (800-569-4287) can help compare a buy-back with a refinance, reinstatement or sale before the auction, which often cost less.',
    links: [
      { href: '/blog/nj-community-wealth-preservation-program-buy-back-home/', label: 'The Community Wealth Preservation Program, in depth' },
      { href: '/sheriff-sales', label: 'Find your county listing and upset price' },
      { href: '/tools/net-proceeds', label: 'Compare: what selling before the sale could net' },
    ],
  },
  {
    slug: 'can-my-lender-foreclose-while-i-apply-for-a-loan-modification',
    q: 'Can my lender keep foreclosing while I am applying for a loan modification?',
    short:
      'It depends on timing and on whether your application is complete. Under federal Regulation X, if the servicer receives a complete application more than 37 days before a sale, it generally may not move for judgment or hold the sale until the application, and any appeal, has been resolved.',
    detail:
      'Moving a foreclosure forward while reviewing a workout, called dual tracking, is restricted by 12 CFR 1024.41. Servicers generally cannot make the first foreclosure filing until a loan is more than 120 days delinquent, and a complete application received before that filing generally keeps it from happening until the review is finished. After a case is filed, a complete application received more than 37 days before a sale generally bars the servicer from moving for final judgment or an order of sale, or holding the sale, unless you were found ineligible and any appeal is over, you turned down the options offered, or you did not perform under an agreement. The rules cover your principal residence, small servicers are exempt from most of them, and an incomplete application does not trigger them.',
    more:
      'Get proof of completeness in writing. Servicers must acknowledge an application received 45 days or more before a sale within five business days and say what is missing, so send what they ask for quickly and keep every letter. If a sale is approaching while a complete application is pending, tell the servicer and its foreclosure attorney in writing, and ask a HUD-approved counselor (800-569-4287) or Legal Services of New Jersey (1-888-576-5529) for help pressing the point. Court deadlines keep running during a review, so keep meeting them, and remember your two homeowner adjournments if timing is tight.',
    links: [
      { href: '/blog/dual-tracking-what-banks-can-and-cant-do/', label: 'Dual tracking: what the bank can and cannot do' },
      { href: '/guides/loan-modification', label: 'The loan modification guide' },
      { href: '/tools/letter-builder', label: 'Draft a letter to your servicer' },
    ],
  },
  {
    slug: 'what-is-a-loss-mitigation-application',
    q: 'What is a loss mitigation application?',
    short:
      'It is the package you send your mortgage servicer asking to be considered for alternatives to foreclosure, such as a loan modification, forbearance, repayment plan, short sale or deed in lieu. A complete application is what triggers most federal protections.',
    detail:
      'The servicer supplies the forms, and a typical package includes a financial information form, a hardship letter, recent pay stubs or other proof of income, bank statements and tax returns. Under Regulation X, if your application arrives 45 days or more before a scheduled sale, the servicer must tell you within five business days whether it is complete and list anything missing. A complete application received more than 37 days before a sale must generally be evaluated for every available option within 30 days, and a denial must give the specific reasons for each modification denied. Which options exist depends on who owns or insures the loan, such as Fannie Mae, Freddie Mac, FHA, VA or a private investor.',
    more:
      'Treat completeness as the whole game. Send everything requested, keep copies, use a trackable delivery method, and write down the date and name for every call. Answer each request for more documents quickly, because files that sit incomplete are the most common reason reviews stall. A HUD-approved housing counselor (800-569-4287) can help you assemble the package for free, and nobody should charge you an upfront fee to submit it. If the answer is no, look in the denial letter for an appeal right; where it applies, you generally have 14 days to appeal.',
    links: [
      { href: '/blog/inside-a-loss-mitigation-department/', label: 'Inside a loss mitigation department' },
      { href: '/servicers', label: 'Loss mitigation contacts for major servicers' },
      { href: '/blog/loan-modification-denied-nj-appeal/', label: 'Denied? Your appeal right' },
    ],
  },
  {
    slug: 'how-do-i-find-out-who-owns-my-mortgage',
    q: 'How do I find out who owns my mortgage?',
    short:
      'Ask your servicer in writing. Under federal Regulation X, a servicer generally must give you the name and contact information of the owner or assignee of your loan within 10 business days of a written request.',
    detail:
      'The company you pay is usually the servicer, not the owner. The owner, often called the investor, may be Fannie Mae, Freddie Mac, a pool backed by Ginnie Mae, or a private securitization trust, and a trustee\'s name frequently appears as the plaintiff on a foreclosure complaint. Fannie Mae and Freddie Mac both offer free online loan lookup tools, and federal law requires notice when your loan is sold or its servicing moves to a new company. Knowing the owner matters because the owner sets the menu of workout options your servicer can offer.',
    more:
      'Send a written request for information to the servicer\'s designated address if it has one (check its website or your statement), keep a copy, and use a trackable method; servicers may not charge a fee to answer. Our letter builder can draft the request. While you wait, try the Fannie Mae and Freddie Mac lookups, and check the plaintiff named on any foreclosure complaint. An unfamiliar owner does not change your rights: the 35-day answer window, mediation, reinstatement and adjournments apply no matter who holds the loan.',
    links: [
      { href: '/tools/letter-builder', label: 'Build a request for information letter' },
      { href: '/blog/servicer-vs-investor-who-really-owns-your-loan-nj/', label: 'Servicer vs. investor: who really owns your loan' },
      { href: '/answers/why-is-a-bank-i-never-heard-of-suing-me', label: 'Why an unfamiliar trust may be the plaintiff' },
    ],
  },
  {
    slug: 'what-happens-to-tenants-when-a-house-is-foreclosed-nj',
    q: 'What happens to tenants when a rental home is foreclosed in New Jersey?',
    short:
      'Generally, tenants can stay. In New Jersey a foreclosure does not end a residential lease, the new owner generally takes the property subject to the tenancy, and a tenant can be evicted only for the good-cause reasons in the Anti-Eviction Act, such as nonpayment of rent.',
    detail:
      'New Jersey\'s protections for renters in foreclosed homes are among the strongest in the country. A change of ownership alone is not a lawful reason to evict, and nobody, including the bank or the sheriff sale buyer, may change the locks, remove belongings or shut off utilities to force a tenant out. Only a court judgment followed by a lawful eviction process can require a tenant to leave. There are exceptions, such as certain small owner-occupied buildings, so a tenant under pressure should confirm how the law applies to their home.',
    more:
      'Keep paying rent in full and on time, since nonpayment is one of the few grounds a foreclosure opens for eviction, and keep proof of every payment. If someone says they are the new owner, ask for written proof, such as the deed, before sending rent anywhere else. If you are named in court papers, respond by the deadline. Cash-for-keys offers are legal and optional, and because the law generally lets you stay, you can negotiate the amount and date in writing or simply decline. Legal Services of New Jersey (1-888-576-5529) helps tenants who qualify.',
    links: [
      { href: '/tenants', label: 'NJ tenant rights in a foreclosure' },
      { href: '/answers/can-i-rent-out-my-house-during-foreclosure', label: 'Owners: renting out a home in foreclosure' },
    ],
  },
  {
    slug: 'what-is-cash-for-keys',
    q: 'What is cash for keys in a New Jersey foreclosure, and should I take it?',
    short:
      'Cash for keys is a payment from the new owner, often the lender, in exchange for moving out by an agreed date and leaving the home in agreed condition. It is legal and entirely optional, and the amount and date are generally negotiable.',
    detail:
      'Offers usually come after a sheriff sale or a deed in lieu, because the owner\'s alternative is the court possession process, which costs time, legal fees and the risk of damage to the house. The offer puts a price on avoiding that, which is why the first number is rarely the last. Typical terms include a move-out date, leaving the home broom-clean, removing belongings and handing over keys at a walk-through. Tenants have separate protections under New Jersey law, and a key payment does not remove them unless the tenant agrees to leave.',
    more:
      'Get every term in writing before relying on it: the amount, how and when it is paid, the move-out date, and what condition counts as acceptable. Do not hand over keys until the agreement is signed and the payment terms are clear. If time matters more to you than money, negotiate for a later date instead of a bigger check. Never pay anything to receive an offer, and be very cautious if anyone offering money before a sale also asks you to sign over your deed. A HUD-approved counselor (800-569-4287) or a New Jersey attorney can review the paper before you sign.',
    links: [
      { href: '/blog/why-banks-pay-cash-for-keys/', label: 'Why banks pay cash for keys' },
      { href: '/guides/after-sheriff-sale', label: 'The complete after-the-sale guide' },
      { href: '/scams', label: 'Deed scams and other red flags' },
    ],
  },
  {
    slug: 'what-happens-to-a-second-mortgage-or-heloc-in-foreclosure',
    q: 'What happens to my second mortgage or HELOC if my house is foreclosed in New Jersey?',
    short:
      'If the first mortgage lender forecloses, the second mortgage or HELOC lender is generally named in the case, and the sheriff sale cuts its lien off the property. The debt itself does not disappear, and that lender may still try to collect from you personally.',
    detail:
      'Every lien on the house has a place in line. Sale proceeds pay the foreclosing first mortgage, and anything left over goes to junior lienholders, such as a second mortgage or HELOC lender, before the former owner receives any of it. When the sale brings too little to reach the second, its security is gone, but the note you signed remains a debt it can pursue. It works the other way too: a HELOC or second mortgage lender can bring its own foreclosure even if your first mortgage is current, although a buyer at that sale takes the house still subject to the first mortgage.',
    more:
      'If you are working toward a solution, bring the junior lender in early. A short sale needs its release, and it often settles for a fraction of the balance because it would otherwise get little or nothing at a sheriff sale. Get any release and any waiver of the remaining balance in writing. If a second mortgage lender contacts you after a foreclosure to collect, talk to Legal Services of New Jersey (1-888-576-5529) or a New Jersey attorney before agreeing to pay, since the right answer depends on the loan documents, the timing and whether the debt could be addressed in bankruptcy.',
    links: [
      { href: '/blog/second-mortgages-helocs-hoa-liens-foreclosure-nj/', label: 'Second mortgages, HELOCs and HOA liens' },
      { href: '/guides/short-sale', label: 'Short sales and junior lien releases' },
      { href: '/answers/can-the-bank-sue-me-for-the-difference', label: 'Can the bank sue for the difference?' },
    ],
  },
  {
    slug: 'does-nj-foreclosure-mediation-cover-hoa-or-condo-cases',
    q: 'Does New Jersey foreclosure mediation cover HOA or condo association foreclosures?',
    short:
      'Generally no. The court\'s free foreclosure mediation program is for residential mortgage foreclosures brought by a lender or mortgage holder on an owner-occupied 1-4 family home, and condo, HOA and tax lien foreclosures are not covered.',
    detail:
      'A New Jersey condo or homeowners association can record a lien for unpaid assessments and, eventually, foreclose on it, and that case goes through the courts much like a mortgage foreclosure, including a deadline to answer the complaint. What it lacks is the court mediation program. Negotiation is still possible: associations routinely accept payment plans, and many would rather be paid over time than take and sell a unit. An association debt of a few thousand dollars can still put a home with substantial equity at risk, so it deserves the same urgency as a bank foreclosure.',
    more:
      'Ask the association or its management company for an itemized ledger, dispute anything wrong in writing, and propose a realistic written payment plan. If you are served with a complaint, file an answer by the deadline on the summons and get advice from Legal Services of New Jersey (1-888-576-5529) or a New Jersey attorney. A HUD-approved housing counselor (800-569-4287) can help you build a budget that covers both the assessments and your mortgage. If a lender is also foreclosing on your mortgage, that case may qualify for mediation even though the association case does not.',
    links: [
      { href: '/blog/condo-hoa-foreclosure-nj/', label: 'Condo and HOA foreclosure in NJ' },
      { href: '/guides/foreclosure-mediation', label: 'Who qualifies for court mediation' },
      { href: '/professionals', label: 'Free legal help and counseling' },
    ],
  },
];
