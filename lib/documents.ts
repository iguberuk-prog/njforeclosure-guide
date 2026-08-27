// "YOU GOT THIS LETTER" — the documents of a New Jersey foreclosure, decoded.
// ---------------------------------------------------------------------------
// One entry per document a homeowner actually receives, in the order they
// arrive. Content rules for this file:
//   - The clock numbers must be real NJ law (30-day NOI, 35 days to answer,
//     10-day redemption window) and stated as "generally" where practice
//     varies. No invented deadlines.
//   - whatToDo steps are things a person can do this week, not platitudes.
//   - stillOpen lists honestly narrow as the case advances. Never claim an
//     option that is realistically gone at that stage.
// ---------------------------------------------------------------------------

export interface ForeclosureDocument {
  slug: string;
  /** What the envelope says, roughly. */
  name: string;
  shortName: string;
  stage: number;
  stageLabel: string;
  whatItIs: string;
  clock: string;
  whatToDo: string[];
  stillOpen: string;
  panic: string;
}

export const DOCUMENTS: ForeclosureDocument[] = [
  {
    slug: 'notice-of-intention',
    name: 'Notice of Intention to Foreclose (NOI)',
    shortName: 'Notice of Intention',
    stage: 1,
    stageLabel: 'Before any lawsuit',
    whatItIs:
      'A letter from your lender required by the New Jersey Fair Foreclosure Act before it may file anything in court. It states how much you are behind, how to bring the loan current, and where to get help. It is a warning shot, not a lawsuit: no case exists yet.',
    clock:
      'The lender must wait at least 30 days after this notice before filing a foreclosure complaint. In practice many wait longer, but treat 30 days as your window.',
    whatToDo: [
      'Read the stated arrears figure and check it against your own records; errors in an NOI can matter later.',
      'Call your servicer’s loss mitigation department and ask for a loss mitigation application. Applying now, before a case exists, is when approval odds are best.',
      'Talk to a free HUD-approved housing counselor this week. They know the paperwork and cost nothing.',
    ],
    stillOpen:
      'Everything. Reinstatement, modification, forbearance, repayment plan, refinance, any kind of sale, and Chapter 13 are all fully available at this stage. This is the widest your options will ever be.',
    panic:
      'This letter means you have time, not that you are out of it. Nothing is filed, nothing is scheduled, and nobody is coming to the house.',
  },
  {
    slug: 'summons-and-complaint',
    name: 'Summons and Foreclosure Complaint',
    shortName: 'Summons & Complaint',
    stage: 2,
    stageLabel: 'The lawsuit begins',
    whatItIs:
      'The papers that open the actual court case, usually hand-delivered or left at the home. The complaint says what the lender claims you owe and asks the court for the right to sell the home; the summons tells you how long you have to respond.',
    clock:
      'You have 35 days from service to file an answer with the court. New Jersey foreclosures take many months after filing even when uncontested; a contested case takes longer.',
    whatToDo: [
      'Mark the 35th day on a calendar today. Filing an answer, especially one raising real defenses, keeps the case contested and preserves your leverage.',
      'Ask the court about the free New Jersey Foreclosure Mediation Program; a filed case is what makes you eligible to request it.',
      'If you have not applied for loss mitigation yet, do it now. The case and the application run on separate tracks, and a complete application carries legal protections against the sale moving forward.',
    ],
    stillOpen:
      'Nearly everything. Modification, mediation, reinstatement, refinance, short sale, market or cash sale, and Chapter 13 all remain available. What changes is that deadlines now exist and ignoring them costs you the contested timeline.',
    panic:
      'Being sued does not mean losing. Most of the process still lies ahead, and homeowners who respond consistently do better than those who go silent.',
  },
  {
    slug: 'entry-of-default',
    name: 'Request for Entry of Default / Entry of Default',
    shortName: 'Entry of Default',
    stage: 3,
    stageLabel: 'The case moves without you',
    whatItIs:
      'A notice that, because no answer was filed within 35 days, the court has recorded you as not contesting the case. The lender can now proceed toward final judgment on paper, through the state Office of Foreclosure, without a hearing.',
    clock:
      'There is no fixed countdown printed on this document, but the case is now on the uncontested track, and the lender’s next stop is applying for final judgment. Under the Fair Foreclosure Act you still receive a notice before final judgment is sought, with one more chance to cure.',
    whatToDo: [
      'Ask a New Jersey attorney, quickly, whether moving to vacate the default makes sense in your case; courts can set defaults aside for good cause, and the sooner the motion, the better it looks.',
      'Push your loss mitigation application forward regardless. Default in the lawsuit does not shut down modification review.',
      'If keeping the home is not realistic, start a sale now, while there is still runway to close before an auction can happen.',
    ],
    stillOpen:
      'Modification, reinstatement, sale of the home and Chapter 13 remain genuinely available. Contesting the case now requires the extra step of vacating the default first, which is why speed and legal advice matter at this stage.',
    panic:
      'A default is a detour, not a verdict. Months of process remain before any sale, and every catch-up option still exists.',
  },
  {
    slug: 'final-judgment',
    name: 'Final Judgment of Foreclosure',
    shortName: 'Final Judgment',
    stage: 4,
    stageLabel: 'The court has ruled',
    whatItIs:
      'The court’s order fixing the total amount owed and authorizing the county sheriff to sell the property. A writ of execution follows, sending the case to the sheriff’s sale calendar.',
    clock:
      'No sale can happen until the sheriff schedules and advertises it, which typically takes a number of weeks after judgment. From this point on, curing generally means paying the full judgment amount rather than just the arrears.',
    whatToDo: [
      'Look up whether a sale date has been scheduled in your county; our sheriff sale directory links every county’s official listings.',
      'Get legal advice on your remaining moves this week, not next month. Chapter 13, redemption, and closing a sale are all timing-critical now.',
      'If selling, tell every professional involved that a judgment exists; closings can absolutely still happen before a sheriff sale, but only when everyone works against the actual date.',
    ],
    stillOpen:
      'A sale of the home before the auction, Chapter 13 (the automatic stay still applies before the sale), redemption by paying the judgment in full, and sale adjournments to make time for any of these. Modification at this stage is rare but servicers can still choose to review.',
    panic:
      'Judgment is not eviction. The home has not been sold, you still live there lawfully, and the two adjournments most homeowners can claim add up to two more months if used deliberately.',
  },
  {
    slug: 'notice-of-sheriff-sale',
    name: 'Notice of Sheriff Sale',
    shortName: 'Sheriff Sale Notice',
    stage: 5,
    stageLabel: 'An auction has a date',
    whatItIs:
      'Formal notice that the county sheriff has scheduled the public auction of the property, with a date, time and place. The sale is also advertised publicly for several weeks beforehand, which is why letters from investors often flood in now.',
    clock:
      'The date printed on it, minus today. New Jersey homeowners are generally entitled to request two adjournments of up to 30 days each through the sheriff’s office, and a court can order more, so the printed date is frequently not the real one.',
    whatToDo: [
      'Confirm the current date on your county’s official listings (sales adjourn constantly) and request your adjournments if you need working time.',
      'Decide the endgame this week with an attorney or counselor: close a sale before auction, file Chapter 13 before auction, or redeem. Each works before the sale, none after it is confirmed.',
      'Be skeptical of anyone who appears at your door with an offer and a deadline. Compare any offer against a second one; desperation pricing is what they are counting on.',
    ],
    stillOpen:
      'Selling before the auction, Chapter 13 before the auction, full redemption (which survives 10 days past the sale), and adjournments to buy time for any of them.',
    panic:
      'A scheduled auction is still a future event that New Jersey law lets you postpone, twice. People close sales and file Chapter 13 in these exact weeks; the ones who lose everything are usually the ones who stopped opening the mail.',
  },
  {
    slug: 'writ-of-possession',
    name: 'Writ of Possession / Notice to Vacate',
    shortName: 'Writ of Possession',
    stage: 6,
    stageLabel: 'After the sale',
    whatItIs:
      'The post-sale court order that lets the new owner take possession of the property, delivered by the sheriff with a move-out date. It arrives only after the sale has been completed and confirmed; even now, only the sheriff, not the buyer, may remove you.',
    clock:
      'The vacate date on the notice, generally a matter of weeks. Courts can grant short extensions for hardship, and the buyer sometimes negotiates timing directly.',
    whatToDo: [
      'If the sale brought more than what you owed, claim your surplus funds from the court; they belong to you and are not mailed automatically.',
      'Ask an attorney about a hardship stay if you need more time, and ask the new owner about relocation timing; a smooth handover is often worth money to them.',
      'Line up the next address now and document the home’s condition when you leave.',
    ],
    stillOpen:
      'At this point the ownership fight is over for practical purposes. What remains is time, possible surplus funds, and leaving on organized terms rather than chaotic ones.',
    panic:
      'Even now nobody may change the locks on their own; removal happens only through the sheriff on a scheduled date. Use the remaining weeks to land somewhere stable and to collect any surplus that is yours.',
  },
];

export function getDocument(slug: string): ForeclosureDocument | undefined {
  return DOCUMENTS.find((d) => d.slug === slug);
}
