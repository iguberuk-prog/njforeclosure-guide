// Shared Case Map data: the nine stations of an NJ foreclosure, used by
// the Case Map page, the Command Center, and the homepage hero line.
// Legal numbers match site conventions throughout.

export interface Station {
  id: string;
  name: string;
  sub: string;
  zone: 'early' | 'case' | 'late' | 'after';
  trueNow: string[];
  doorsOpen: string[];
  closingNext: string;
  freeMoves: string[];
}

export const STATIONS: Station[] = [
  {
    id: 'missed',
    name: 'Missed Payments',
    sub: 'Months 1–4 · no case exists',
    zone: 'early',
    trueNow: [
      'No lawsuit exists. Most lenders don’t file until a loan is around 120 days behind.',
      'Late fees are accruing, and the servicer’s letters are required outreach, not yet legal papers.',
    ],
    doorsOpen: [
      'Every option: repayment plan, forbearance, modification, refinance, or an unhurried sale.',
      'Reinstatement at its cheapest — no attorney fees on the arrears yet.',
    ],
    closingNext: 'The quiet window itself: around 120 days of delinquency, the lender can send the formal warning and then file.',
    freeMoves: [
      'Call the servicer and say "loss mitigation" — ask for the application.',
      'Book a free HUD counselor: 800-569-4287.',
      'Put your three numbers on one page: home value, balance, amount behind.',
    ],
  },
  {
    id: 'noi',
    name: 'Notice of Intention',
    sub: 'The 30-day warning',
    zone: 'early',
    trueNow: [
      'This is a required warning, not a lawsuit — NJ law demands it at least 30 days before any complaint.',
      'It must state the exact amount that catches you up.',
    ],
    doorsOpen: [
      'Curing during the window (paying the stated amount) generally ends the matter before a case exists.',
      'The full loss-mitigation menu, still without legal fees.',
    ],
    closingNext: 'After 30 days, the lender can file a complaint in Superior Court and legal fees start stacking onto the debt.',
    freeMoves: [
      'Keep the letter and envelope — its details have legal significance.',
      'Get the loss-mitigation application moving this week.',
      'Calendar day 30 so nothing that follows surprises you.',
    ],
  },
  {
    id: 'served',
    name: 'Complaint Served',
    sub: 'The 35-day clock starts',
    zone: 'case',
    trueNow: [
      'You are now a defendant in a Superior Court case — and you have the legal right to live in your home through the entire process.',
      'You generally have 35 days from service to file an answer.',
    ],
    doorsOpen: [
      'Answering — the single most consequential move in the case. It keeps you a participant and slows the calendar.',
      'Requesting NJ’s free foreclosure mediation (eligible owner-occupants).',
      'Loss mitigation continues in parallel; selling remains fully available.',
    ],
    closingNext: 'Day 35. Silence sends the case to default processing on the lender’s schedule.',
    freeMoves: [
      'File an answer — free self-help forms at njcourts.gov; LSNJ (1-888-576-5529) defends income-qualifying homeowners at no cost.',
      'Request the free mediation seat when you answer.',
      'Do not move out.',
    ],
  },
  {
    id: 'fork',
    name: 'The Fork',
    sub: 'Answered · or default entered',
    zone: 'case',
    trueNow: [
      'Answered: you get notice of every motion, standing to contest amounts, and a slower, contested calendar.',
      'Defaulted: the case moves administratively — faster, without your voice. Serious, not final.',
    ],
    doorsOpen: [
      'A default can sometimes be vacated for good cause — easier before final judgment than after.',
      'The Fair Foreclosure Act’s right to cure the arrears runs to final judgment either way.',
      'Complete loss-mitigation applications carry review protections.',
    ],
    closingNext: 'The motion for final judgment — served on you, with a window to object to the amounts.',
    freeMoves: [
      'If defaulted: call LSNJ now about a motion to vacate.',
      'Submit a COMPLETE application — completeness is what the protections attach to.',
      'Get your equity number: value minus payoff. It decides the playbook.',
    ],
  },
  {
    id: 'mediation',
    name: 'Mediation',
    sub: 'The free table · runs alongside',
    zone: 'case',
    trueNow: [
      'NJ’s Foreclosure Mediation Assistance Program is free for eligible owner-occupants.',
      'The lender must send a representative with settlement authority — a person whose yes counts.',
    ],
    doorsOpen: [
      'Modification reviews with live timelines, repayment plans, agreed sale time, structured exits with dates.',
      'Free housing-counselor support to build your package.',
    ],
    closingNext: 'Nothing closes here — but mediation works with whatever time and options remain, so later means less.',
    freeMoves: [
      'Arrive with a complete, current financial package and a specific ask.',
      'Capture every outcome as an agreement with dates.',
    ],
  },
  {
    id: 'judgment',
    name: 'Final Judgment',
    sub: 'The debt is fixed',
    zone: 'late',
    trueNow: [
      'The court has fixed the total owed and authorized a sheriff sale. You still own the home and have the right to live in it.',
      'The statutory right to cure the arrears ends at this entry — later fixes mean paying the judgment in full.',
    ],
    doorsOpen: [
      'Selling: a closing before the auction pays the judgment and hands you the remaining equity.',
      'Adjournments of the sale (generally two, up to 30 days each) once one is scheduled.',
      'Loss mitigation can continue, though flexibility shrinks this late.',
    ],
    closingNext: 'The writ of execution passes the case to the county sheriff for sale scheduling.',
    freeMoves: [
      'Read the judgment amount carefully — it’s the payoff figure every move is measured against.',
      'Get a real valuation. Judgment vs. market value is now the whole game.',
    ],
  },
  {
    id: 'scheduled',
    name: 'Sale Scheduled',
    sub: 'A date is on paper',
    zone: 'late',
    trueNow: [
      'The county sheriff has set an auction date — and dates move constantly; lender adjournments are routine.',
      'Your county’s procedure and fee for homeowner adjournments is a phone call away.',
    ],
    doorsOpen: [
      'Two homeowner adjournments of up to 30 days each, as a general matter — plus court-ordered time for cause.',
      'A cash sale can close inside a single adjournment; a listing under contract can finish on the runway.',
      'Bankruptcy’s automatic stay (attorney territory — deliberate, never midnight).',
    ],
    closingNext: 'The auction itself. Everything after it is narrower.',
    freeMoves: [
      'Call the sheriff’s foreclosure unit today: exact adjournment procedure, deadline, fee.',
      'Verify the date against the county’s own listings, weekly.',
      'Decide what each adjournment is buying before you spend it.',
    ],
  },
  {
    id: 'sale',
    name: 'Sheriff Sale',
    sub: 'The auction + 10-day redemption',
    zone: 'after',
    trueNow: [
      'The plaintiff bids its judgment without cash (a credit bid); third parties bid against that floor.',
      'New Jersey allows 10 days after the sale to redeem by paying the judgment in full.',
    ],
    doorsOpen: [
      'Redemption — narrow, but real.',
      'Surplus funds: every dollar a winning bid exceeds the judgment belongs to junior lienholders, then you.',
    ],
    closingNext: 'The deed is delivered after the redemption window; ownership changes, occupancy does not.',
    freeMoves: [
      'Check the sale result against the judgment amount — surplus is the most abandoned asset in the process.',
      'Do not surrender keys to anyone on a verbal promise.',
    ],
  },
  {
    id: 'after',
    name: 'After the Sale',
    sub: 'Possession, cash for keys, surplus',
    zone: 'after',
    trueNow: [
      'Removal runs through a court possession process with notice — never a same-day event.',
      'Tenants keep their own strong NJ protections; a sale does not void a tenancy.',
    ],
    doorsOpen: [
      'Cash-for-keys: negotiable on amount, date, and terms — in writing, keys last.',
      'Surplus-funds claims through the court.',
      'Housing on your own timeline — negotiate the move-out date against a lease you’ve lined up.',
    ],
    closingNext: 'Time itself: addresses go stale and claims get harder. Collect what’s yours promptly.',
    freeMoves: [
      'Read our surplus funds guide before signing with any percentage-fee "recovery" firm.',
      'If locks change on an occupied home, document everything and call LSNJ: 1-888-576-5529.',
    ],
  },
];

export const ZONE_LABEL: Record<Station['zone'], string> = {
  early: 'BEFORE A CASE EXISTS',
  case: 'THE COURT CASE',
  late: 'AFTER JUDGMENT',
  after: 'THE SALE & AFTER',
};
