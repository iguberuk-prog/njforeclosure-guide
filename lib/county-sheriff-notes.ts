/**
 * Hand-written, county-specific notes for /sheriff-sales/<county>/.
 *
 * Written 2026-10-05 as part of the quality cleanup: the 21 county sheriff
 * pages shared ~80% of their text, so the long generic homeowner sections were
 * cut back to one short block and each page now leads with what is actually
 * different about that county's sale.
 *
 * Every fact here comes from lib/bidder-rules.ts (official sheriff pages read
 * 2026-09-30, see `sources` there) or lib/sheriff-sales.ts. Nothing is
 * guessed: where a county's official page did not state something, the note
 * says so instead of filling it in. Re-check against bidder-rules.ts whenever
 * those rules are refreshed.
 *
 *  - saleDay: how sale day works in this county (when, where, what to bring).
 *  - ifYours: the local detail that matters most to a homeowner on the list.
 */

export interface CountySheriffNote {
  saleDay: string;
  ifYours: string;
}

export const COUNTY_SHERIFF_NOTES: Record<string, CountySheriffNote> = {
  'atlantic-county': {
    saleDay:
      'Atlantic County auctions run on Thursdays at noon in the Multi-Purpose Room of the new Criminal Courthouse on Unami Boulevard in Mays Landing. The sheriff takes only certified, bank or treasurer\'s checks for the 20% deposit, and the winning bidder shows ID and signs the conditions of sale on the spot. Bids move in steps of $1,000 or more.',
    ifYours:
      'Atlantic is one of the few counties that posts the upset price for residential homes on the sheriff\'s website at least four weeks before the sale, so you can see the opening number before auction day. Its page also confirms the two 30-day adjournments per party (for a fee) and an unqualified 10-day right of redemption after the sale.',
  },
  'bergen-county': {
    saleDay:
      'Bergen County sales take place at the sheriff\'s office at 2 Bergen County Plaza in Hackensack. The plaintiff opens at $100, bidding rises in $100 steps and switches to $1,000 steps above $100,000, and the 20% deposit is due the moment the property is struck off, in cash or certified or cashier\'s checks no more than 90 days old.',
    ifYours:
      'Bergen\'s conditions of sale spell out that a sheriff\'s deed does not guarantee clear title and that the buyer takes the property subject to unpaid taxes and liens of record. The owner may redeem within 10 calendar days of the sale, and the deed is not delivered until the buyer has paid in full.',
  },
  'burlington-county': {
    saleDay:
      "Burlington is New Jersey's largest county by area, with 40 municipalities, and its whole sale list lives on CivilView. What we could not do is read the sheriff's own conditions of sale, so this page does not list a deposit, location or payment deadline for Burlington. Bidders should get the current terms from the Sheriff's Office in Mount Holly before sale day.",
    ifYours:
      'Burlington\'s list runs from Delaware River suburbs to Pinelands townships, very different markets for selling a home quickly. Look your property up on CivilView every week, and phone the Mount Holly office to confirm the date and ask how to request a statutory adjournment.',
  },
  'camden-county': {
    saleDay:
      'Camden County holds its auctions on the first and third Wednesday of each month at noon, in City Council Chambers on the second floor of Camden City Hall, 520 Market Street. The opening bid is $100 and later bids go up by at least $1,000. The 20% deposit is due when the property is struck off, and the sheriff accepts no more than $500 of it in cash.',
    ifYours:
      'Camden\'s own rules give the defendant two adjournments of up to four weeks each, at $28 apiece, and 10 consecutive days to redeem after the sale. With sales on the first and third Wednesday, a four-week adjournment usually moves your date two sale days later, so ask well before the Wednesday you are listed for.',
  },
  'cape-may-county': {
    saleDay:
      "Cape May County's sale schedule is on CivilView, which is the most reliable place to see when a property is set to be auctioned. The sheriff's conditions of sale (deposit, accepted payment and closing deadline) were not readable to us, and we do not fill gaps with guesses. Call the Sheriff's Office at Cape May Court House for them.",
    ifYours:
      "Cape May's market is heavily seasonal, with many second homes and rentals, which affects how quickly a home can be sold before a sale date. If your sale is close, ask the sheriff's office about a statutory adjournment first, then use the time on a listing, a cash sale or a lender review that can finish inside it.",
  },
  'cumberland-county': {
    saleDay:
      'When Cumberland County holds sales, they run every other Wednesday at 2:00 p.m. at the Sheriff\'s Office, 220 North Laurel Street in Bridgeton. Its July 2024 information sheet sets the deposit at 20% of the price (3.5% of the posted upset price for CWPP buyers), payable in certified or cashier\'s checks, with cash over $1,000 only by prior written approval. The sheriff also charges a 6% commission on the final price.',
    ifYours:
      'Cumberland has posted that residential sheriff sales are adjourned pending compliance with the Community Wealth Preservation Program, so a residential date on the list may not go ahead as scheduled. Use the pause: it is time to get a reinstatement figure, a sale or a lender review moving before sales resume.',
  },
  'essex-county': {
    saleDay:
      'Essex County runs sales every Tuesday at 1:30 p.m. (except legal holidays) in the 14th-floor conference room of the Leroy F. Smith, Jr. Public Safety Building, 60 West Market Street in Newark. Registration is from 12:30 to 1:30, and bidders must show the 20% deposit check at registration: money order, certified or bank check only, no cash. After the plaintiff\'s $100 opening bid, bids rise in $1,000 steps.',
    ifYours:
      'Essex\'s listings page gives defendants two 28-day statutory adjournments at $28 each and notes that, under an August 2025 court order, the CWPP right of first refusal belongs only to defendants, their next of kin or tenants. Essex\'s two sheriff pages disagree on some details, so confirm anything important with the office by phone.',
  },
  'gloucester-county': {
    saleDay:
      "Gloucester County's foreclosure unit works out of the Sheriff's Office at 1 N. Broad Street in Woodbury, reachable at 856-384-4603, and its list is on CivilView. The county posts procedure documents, but we could not confirm current deposit and payment terms from them, so ask the foreclosure unit directly before bidding.",
    ifYours:
      'Dates on the Gloucester list change often, as they do in every busy county. Check your listing on CivilView every week, and call the Woodbury office to confirm the date and ask about an adjournment rather than relying on the notice you were mailed.',
  },
  'hudson-county': {
    saleDay:
      'Hudson County holds sales on two Thursdays a month at 2:00 p.m. in Room 201B of the County Administration Building, 595 Newark Avenue in Jersey City, with registration from 1:00 p.m. Bidding moves in $5,000 steps until the plaintiff stops, then in $2,000 steps. The 20% deposit must be a certified or cashier\'s check no more than 90 days old; no cash or personal checks.',
    ifYours:
      'Hudson\'s rules say the buyer cannot pay the balance during the first 10 days after the sale, which is the owner\'s window to redeem. Sales still running at 4:30 p.m. can be pushed to the next sale date, and CWPP pre-registration opens the Monday before each sale.',
  },
  'hunterdon-county': {
    saleDay:
      "Hunterdon sales are listed on CivilView alongside the rest of the state's. Its sheriff's sale terms were not available to us in a form we could verify, so for anything about bidding, from deposit to closing, the Hunterdon County Sheriff's Office in Flemington is the place to ask.",
    ifYours:
      'Hunterdon is a small county with some of the highest home values in New Jersey, so many owners facing a sale here have substantial equity. Before the date arrives, compare what a sale on your own terms would net against what you would likely keep after an auction.',
  },
  'mercer-county': {
    saleDay:
      'Mercer County auctions are held every other Wednesday, promptly at 2:00 p.m., at the Civil Courthouse, 175 South Broad Street in Trenton. The plaintiff opens at $100, the next bid starts $100 over the upset price, and later bids rise by $1,000. The 20% deposit can be certified check, treasurer\'s check or cash, with the balance due on the 30th day.',
    ifYours:
      'Mercer publishes its list on the county website rather than CivilView, and it posts Sales Notices on and before sale day, so check there for adjournments, bankruptcy stays and cancellations. The sheriff can grant two adjournments of up to 28 days each for a $28 fee, and its page states that CWPP does not cover buyers purchasing for investment.',
  },
  'middlesex-county': {
    saleDay:
      'Middlesex County requires a 20% deposit at the close of each sale, in certified or official bank checks with no more than $1,000 in cash. The plaintiff opens at $100 and bidding continues in $1,000 steps. The buyer also pays the sheriff\'s fees and commissions on the winning bid, and gets no access to the property until it is paid for and the deed is delivered.',
    ifYours:
      'The Middlesex Sheriff\'s Office advertises sales only on middlesexcountynj.gov, so check dates there or on CivilView rather than relying on third-party mailers. The county\'s rules allow two defendant adjournments and limit the CWPP right of first refusal to defendants, next of kin and tenants.',
  },
  'monmouth-county': {
    saleDay:
      'Monmouth County runs sales every other Monday at 1:00 p.m. (Tuesday if Monday is a holiday) at 2500 Kozloski Road in Freehold. Unusually, the plaintiff\'s attorney opens at $1,000 and bids rise in $1,000 steps. The 20% deposit can be certified check or up to $1,000 in cash, and every sale is subject to any first mortgage and government liens.',
    ifYours:
      'Monmouth\'s page reminds bidders that a sale can be adjourned, settled, cancelled or stayed by bankruptcy at any time, which is just as true from the owner\'s side: until the gavel falls, a reinstatement, a closed sale of the home or a Chapter 13 filing can still stop it.',
  },
  'morris-county': {
    saleDay:
      'Morris County sells on Thursdays at 2:00 p.m. (excluding holidays) in the County Commissioners\' meeting room on the 5th floor of the Administration and Records Building on Court Street in Morristown. Third-party bidders put down at least 20% of the bid; CWPP-eligible buyers put down 3.5% of the original upset price and must register with the Sheriff\'s Sales Unit by email beforehand.',
    ifYours:
      'Morris\'s page notes that the owner does not have to allow inspections before the sale and keeps 10 days after it to redeem. With home values here, the equity at stake is often large, which makes a planned sale before the auction worth pricing out early.',
  },
  'ocean-county': {
    saleDay:
      'Ocean County holds sales on Tuesdays at 2:00 p.m., except legal holidays, in Room 119 of the Administration Building, 101 Hooper Avenue in Toms River. Bidders must be adults and registered before the sale starts. The plaintiff\'s attorney opens at $100, later bids rise by at least $1,000, and the sale pauses while the winner\'s funds are verified.',
    ifYours:
      'Ocean posts its list on the sheriff\'s own site rather than CivilView. Its rules let the owner redeem for up to 10 days after the sale, or until the deed is delivered, so even a completed sale leaves a short window to pay off the judgment.',
  },
  'passaic-county': {
    saleDay:
      'Passaic County requires a Bidder Pre-Registration Form, accepted until 2:00 p.m. the day before the auction by fax or drop-off at 77 Hamilton Street in Paterson. Bidders must show proof of funds before sales begin, in physical certified or official bank checks or money orders. Cash and bank statements are not accepted. We could not read Passaic\'s full bidder-rules document, so call the Foreclosure Unit for the deposit and payment terms.',
    ifYours:
      'Passaic warns that sale dates, times and statuses can change at any moment without notice, and tells people to confirm with the Foreclosure Unit at 973-881-4200. If your home is listed, that number is the fastest way to check whether your date has moved.',
  },
  'salem-county': {
    saleDay:
      'Since May 19, 2025, Salem County sales have been held at the new Salem County Courthouse, 92 Market Street in Salem. Sales start at 2:00 p.m., and bidders should arrive by 1:45 for fund verification. Deposits are certified checks payable to the Sheriff of Salem County, with no more than $1,000 in cash. An older sheriff\'s document puts the balance due within 10 days, much shorter than most counties, so confirm it before bidding.',
    ifYours:
      'Salem is New Jersey\'s least populous county, so its sale list is short and each sale date carries only a few homes. The sheriff\'s office asks people to call on sale day to check status. Do the same before your date, and request any adjournment well ahead of it.',
  },
  'somerset-county': {
    saleDay:
      'Somerset County runs sales every Tuesday at 2:00 p.m. in the Commissioners Meeting Room on the 3rd floor of the Administration Building, 20 Grove Street in Somerville. A sign-in sheet opens at the lower-level Sheriff Sales Office at 9:00 a.m. on sale day, with no lining up before 8:30. Cash is no longer accepted: deposits must be certified funds, cashier\'s or certified checks, or money orders. The plaintiff opens at $1,000.',
    ifYours:
      'Somerset publishes its list on the county website rather than CivilView, and its page notes that adjournments, settlements or bankruptcies can cancel a sale at any time before it. Former owners keep 10 days after the sale to redeem.',
  },
  'sussex-county': {
    saleDay:
      'Sussex County holds one sale day a month: the first Wednesday (excluding holidays) at 2:00 p.m. at the Historic Sussex County Courthouse, 3 High Street in Newton. Bidding starts at $100 and rises in $1,000 steps. The 20% deposit is due as soon as the property is sold, by certified check, treasurer\'s check or money order made out to the Sussex County Sheriff.',
    ifYours:
      'Because Sussex sells only once a month, an adjournment usually pushes a sale to the following month\'s sale day. Its page lists a 12-day redemption period after the sale, longer than the 10 days most counties state, and requires CWPP buyers to give the sheriff their documents 5 business days before the sale.',
  },
  'union-county': {
    saleDay:
      'Union County sales moved to every other Wednesday at 2:00 p.m. starting May 6, 2026; before that they were weekly. Bidders check in at 1:00 p.m., and no one is admitted once sales begin. The minimum bid is $1,000, bids go up in multiples of $1,000, and the sheriff accepts no more than $500 in cash, so bring certified checks for 20% of the most you plan to bid.',
    ifYours:
      'Union gives defendants two 28-day adjournments at $28 each, plus one more if both sides agree, which is more than most counties spell out. With sales now every other week, each adjournment buys roughly two sale cycles.',
  },
  'warren-county': {
    saleDay:
      'Warren County sales have been held at 2:00 p.m. at the Courthouse Annex, 199 Hardwick Street in Belvidere, according to an archived page on the Sheriff\'s website (the current foreclosure page was unavailable when we checked). Those terms set the deposit at 20% by certified cashier\'s or treasurer\'s check, with no cash or personal checks, and the balance due within 10 days, so confirm them with the sheriff before bidding.',
    ifYours:
      'Warren notes that sales are sometimes not held on the advertised date, so check its public notices page or call the sheriff on sale day. Warren publishes its list outside CivilView, which also means dates can change without showing up on the statewide system.',
  },
};

export function countySheriffNote(slug: string): CountySheriffNote | undefined {
  return COUNTY_SHERIFF_NOTES[slug];
}
