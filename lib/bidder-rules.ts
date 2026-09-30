/**
 * County bidder rules for /sheriff-sales/<county>/how-to-bid/.
 * Researched 2026-09-30 from each county's OFFICIAL sheriff or county pages
 * only (URLs in `sources`). Verified-or-null: a null field means the official
 * page we could read did not state it. Paraphrased, never guessed. Rules
 * change, so every page tells bidders to confirm with the sheriff's office.
 * status: 'verified' = current official page; 'partial' = some terms from an
 * older or secondary official document (see caveat); 'unverified' = official
 * pages could not be read, so only general NJ rules are shown.
 */

export interface BidderRules {
  saleDay: string | null;
  location: string | null;
  depositRule: string | null;
  depositForm: string | null;
  balanceDue: string | null;
  otherRules: string[];
  sources: string[];
  status: 'verified' | 'partial' | 'unverified';
  caveat?: string;
}

export const BIDDER_RULES_CHECKED = 'September 30, 2026';

export const BIDDER_RULES: Record<string, BidderRules> = {
  "atlantic-county": {
    "saleDay": "Thursday at 12:00 noon",
    "location": "Multi-Purpose Room of the new Criminal Courthouse, 4997 Unami Blvd., Mays Landing, NJ",
    "depositRule": "20% of the total bid price (non-CWPP sales). CWPP residential: 3.5% of the original upset price or final starting upset price, whichever is less",
    "depositForm": "Certified check, bank check or treasurer's check payable to the Atlantic County Sheriff's Office; no other forms accepted",
    "balanceDue": "Within 30 days following the sale (non-CWPP); CWPP residential within 90 business days, with interest after 60 business days",
    "otherRules": [
      "Winning bidders must present a valid ID at the time of sale",
      "Winning bidder signs the conditions of sale immediately",
      "Bids in increments of $1,000 or more",
      "Upset price for residential homes posted on the Sheriff's website at least 4 weeks before sale",
      "No inspection of premises; sold 'as is'",
      "Sold subject to restrictions of record, unpaid taxes or assessments, and what an accurate survey would disclose",
      "Purchaser pays deed recording and fees, including the realty transfer fee",
      "Interest accrues from the 13th day after sale",
      "Defendant has an unqualified 10-calendar-day right of redemption after the sale",
      "If buyer fails to comply, property is resold and former purchaser is responsible for losses and expenses",
      "Owner-occupied property: purchaser must obtain a writ of possession",
      "Nonprofits using CWPP must register with the Sheriff and provide their IRS approval letter",
      "Two 30-day adjournments per party allowed, for a fee"
    ],
    "sources": [
      "https://www.atlanticcountynj.gov/government/county-government/atlantic-county-sheriff-s-office/services/sheriff-sales"
    ],
    "status": "verified"
  },
  "bergen-county": {
    "saleDay": null,
    "location": "2 Bergen County Plaza, Hackensack, NJ 07601",
    "depositRule": "20% of the total bid price immediately at the time of sale (when the property is struck off)",
    "depositForm": "Cash, certified funds, or cashier's checks; certified/cashier's check not dated more than 90 days before sale, payable to 'Bergen County Sheriff' or to the purchaser and endorsed to the Sheriff",
    "balanceDue": "Within 30 calendar days from the date of sale; default interest (post-judgment rate) if later",
    "otherRules": [
      "Plaintiff opens with a minimum bid of $100; bids in $100 increments, $1,000 increments above $100,000",
      "Sold subject to all unpaid taxes, assessments, liens, encumbrances and restrictions of record",
      "Sheriff's deed does not guarantee clear title",
      "Owner may redeem within 10 calendar days of the sale",
      "Assignment of bid costs $75 and must be filed within 30 days of sale",
      "Deed delivered within 14 business days after balance and interest are paid",
      "Sales may be postponed, canceled or rescheduled due to adjournments, settlements or bankruptcy",
      "CWPP: properties cannot be bought at the CWPP upset price without public bidding (per Mercer County Superior Court, Docket C-94-24)"
    ],
    "sources": [
      "https://www.bcsd.us/sheriff-sales",
      "https://www.bcsd.us/sheriff-sales/about-foreclosures-sales",
      "https://www.bcsd.us/images/Forclosure/Images/Conditions_of_Sale_for_Website.pdf"
    ],
    "status": "verified"
  },
  "burlington-county": {
    "saleDay": null,
    "location": null,
    "depositRule": null,
    "depositForm": null,
    "balanceDue": null,
    "otherRules": [],
    "sources": [],
    "status": "unverified"
  },
  "camden-county": {
    "saleDay": "First and third Wednesday of each month, excluding holidays, at 12:00 p.m. (noon)",
    "location": "Camden City Council Chambers, 520 Market Street, 2nd Floor - City Hall, Camden, NJ 08102",
    "depositRule": "20% of the bid, paid immediately when the property is struck off; CWPP purchasers pay 3.5% plus required documentation",
    "depositForm": "Cash, certified check, or treasurer's check; $500 cash limit toward the deposit",
    "balanceDue": "Within 30 days; failure to pay forfeits the deposit ($500 cash limit on balance too)",
    "otherRules": [
      "Opening bid is $100; further verbal bids in increments of at least $1,000",
      "Sheriff cannot give permission to enter or inspect any structure",
      "Owner may redeem for 10 consecutive days after the sale",
      "Deed delivered within 30 days of sale where no confirmation is required",
      "Defendant may get two adjournments of up to four weeks each ($28 each)"
    ],
    "sources": [
      "https://www.camdencounty.com/service/sheriffs-office/foreclosure-sales-information/"
    ],
    "status": "verified"
  },
  "cape-may-county": {
    "saleDay": null,
    "location": null,
    "depositRule": null,
    "depositForm": null,
    "balanceDue": null,
    "otherRules": [],
    "sources": [],
    "status": "unverified"
  },
  "cumberland-county": {
    "saleDay": "Every other Wednesday at 2:00 p.m.",
    "location": "Cumberland County Sheriff's Office, 220 North Laurel Street, Bridgeton, NJ 08302",
    "depositRule": "20% of the purchase price immediately after the sale concludes; CWPP buyers 3.5% of the posted upset price",
    "depositForm": "Cash (not over $1,000 without prior written approval) or certified/cashier's check payable to the Sheriff of Cumberland County; no personal or third-party checks",
    "balanceDue": "Within 30 calendar days of sale; CWPP purchasers 90 business days, interest after day 60",
    "otherRules": [
      "Minimum opening bid $100; bids in $100 increments or higher",
      "Sold subject to unpaid taxes, assessments, and prior mortgages, judgments and liens; do your own title search",
      "Buyer pays deed recording and all taxes, e.g. the Realty Transfer Tax",
      "Sheriff's commission of 6% on the final purchase price",
      "No tours or inspections; sold 'as is', buyer beware",
      "Defaulting bidder liable for added costs, including any shortfall on resale",
      "Plaintiff limited to two four-week postponements; $28 fee each",
      "CWPP participants need valid photo ID matching preapproval letter"
    ],
    "sources": [
      "https://www.cumberlandcountynj.gov/sheriffsales"
    ],
    "status": "partial",
    "caveat": "The schedule and location are from the county’s sheriff sales page. The deposit and other terms come from a Cumberland County Sheriff’s Office public information sheet (updated July 2024). Residential sales are currently adjourned pending Community Wealth Preservation Program compliance, per the county."
  },
  "essex-county": {
    "saleDay": "Every Tuesday at 1:30 p.m. (except legal holidays)",
    "location": "Leroy F. Smith, Jr. Public Safety Building, 60 West Market Street, 14th Floor Conference Room, Newark, NJ 07102",
    "depositRule": "20% of the total bid price immediately after the close of the sale",
    "depositForm": "Money order, certified check or bank check; no cash, company, agency or personal checks",
    "balanceDue": "Within 30 days from the date of sale; 7.50% interest added from the 11th day",
    "otherRules": [
      "Registration 12:30-1:30 p.m.; 20% check must be presented at registration",
      "Plaintiff makes a minimum $100 bid to start; later bids in $1,000 increments",
      "Purchaser pays the Realty Transfer Tax",
      "Purchaser must satisfy outstanding liens and encumbrances for clear title",
      "Owner may redeem within the 10-day redemption period",
      "Defendants may get two 28-day statutory adjournments ($28 each)",
      "CWPP right of refusal extends only to defendants, next-of-kin, or tenants (Aug 28, 2025 order in MER-C-94-24)"
    ],
    "sources": [
      "https://www.essexsheriff.com/foreclosure-listings/",
      "https://www.essexsheriff.com/laweservices/the-foreclosure-unit/"
    ],
    "status": "verified",
    "caveat": "Essex’s two sheriff pages disagree on some details; we use the more recently updated Foreclosure Listings page. Confirm the location and interest rate with the sheriff’s office."
  },
  "gloucester-county": {
    "saleDay": null,
    "location": null,
    "depositRule": null,
    "depositForm": null,
    "balanceDue": null,
    "otherRules": [],
    "sources": [
      "https://www.gloucestercountynj.gov/564/Foreclosure-Procedures"
    ],
    "status": "unverified"
  },
  "hudson-county": {
    "saleDay": "Thursdays, twice a month, at 2:00 p.m. (2026 dates listed: Jan 8 & 22, Feb 5 & 19, Mar 5 & 19, Apr 9 & 23, May 7 & 21, Jun 11 & 25, Jul 16 & 30, Aug 13 & 27, Sep 10 & 24, Oct 8 & 22, Nov 5 & 19, Dec 10)",
    "location": "Room 201B, Hudson County Administration Building, 595 Newark Avenue, Jersey City, NJ 07306",
    "depositRule": "Minimum 20% of total bid price immediately after the close of the sale",
    "depositForm": "Certified or cashier's check only, not older than 90 days; no cash, credit cards or personal checks",
    "balanceDue": "Between the 11th and 30th day after the sale; 2026 lawful interest of 6.5% on any unpaid balance",
    "otherRules": [
      "Registration 1:00 p.m. until the 2:00 p.m. start",
      "Bidding in $5,000 increments until the plaintiff stops, then $2,000 minimum increments",
      "Sold subject to restrictions of record and unpaid taxes, water/sewer bills or assessments",
      "Purchaser pays the NJ Realty Transfer Tax",
      "Balance cannot be paid in the first 10 days (defendant's right of redemption)",
      "Sales not completed by 4:30 p.m. may be adjourned to the next sale date",
      "Defaulting purchaser: property resold and former purchaser liable for losses and expenses",
      "CWPP pre-registration opens the Monday before each sale date (since Dec 2024)"
    ],
    "sources": [
      "https://www.hudsoncountysheriff.com/foreclosures-sales"
    ],
    "status": "verified"
  },
  "hunterdon-county": {
    "saleDay": null,
    "location": null,
    "depositRule": null,
    "depositForm": null,
    "balanceDue": null,
    "otherRules": [],
    "sources": [],
    "status": "unverified"
  },
  "mercer-county": {
    "saleDay": "Every other Wednesday, promptly at 2:00 p.m.",
    "location": "Mercer County Civil Courthouse, 175 South Broad Street, Trenton",
    "depositRule": "20% of the total bid price",
    "depositForm": "Certified check, treasurer's check, or cash",
    "balanceDue": "Due on the 30th day from the date of sale",
    "otherRules": [
      "Plaintiff opens at $100; next bids start $100 over the upset, then $1,000 increments",
      "Sheriff's deed does not give clear title; buyer must satisfy outstanding liens and encumbrances",
      "Purchaser pays deed recording fees to the County Clerk",
      "Sheriff cannot permit bidders to enter or inspect structures",
      "Owner can usually redeem for 10 calendar days after the sale",
      "Buyer who does not complete the sale can be held liable for the deposit",
      "Sheriff may grant two adjournments of up to 28 days each ($28 fee)",
      "Check posted Sales Notices before or on sale day; sales may be adjourned, stayed by bankruptcy or cancelled",
      "Page says CWPP excludes those buying for investment purposes"
    ],
    "sources": [
      "https://www.mercercounty.org/government/sheriff-/informational/sheriff-s-foreclosure-sale"
    ],
    "status": "verified"
  },
  "middlesex-county": {
    "saleDay": null,
    "location": null,
    "depositRule": "20% of the purchase price at the close of sale",
    "depositForm": "Cash (up to $1,000), certified check or official bank check",
    "balanceDue": "Within 30 days",
    "otherRules": [
      "Plaintiff opens at $100; bidding continues in $1,000 increments",
      "Buyer pays sheriff's fees and commissions, based on the winning bid",
      "Sold subject to unpaid taxes, assessments, water rents; all liens survive the foreclosure judgment",
      "No access to the property until paid in full and the deed is delivered",
      "Mortgagor may redeem up to 10 days after sale",
      "Defendant may get two adjournments; plaintiff adjournments also allowed",
      "CWPP right of refusal extended only to defendants, next-of-kin, or tenants",
      "Sheriff's Office advertises sales only on middlesexcountynj.gov"
    ],
    "sources": [
      "https://www.middlesexcountynj.gov/government/departments/department-of-public-safety-and-health/office-of-the-county-sheriff/foreclosures"
    ],
    "status": "verified"
  },
  "monmouth-county": {
    "saleDay": "Every other Monday at 1:00 p.m. (Tuesday at the same time if Monday is a holiday)",
    "location": "2500 Kozloski Road, Freehold, NJ 07728",
    "depositRule": "20% of the bid at the auction (may differ for CWPP-qualified purchasers)",
    "depositForm": "Cash (limit $1,000) or certified check",
    "balanceDue": "Within 30 days",
    "otherRules": [
      "Plaintiff's attorney opens at $1,000; bidding in $1,000 increments",
      "All sales subject to a first mortgage and any municipal, state or federal liens",
      "No inspections of the property",
      "Purchaser records the deed with the County Clerk and pays any realty transfer fees",
      "If balance unpaid after 30 days, property re-advertised and resold at purchaser's expense",
      "A sale can be adjourned, settled, cancelled or stayed by bankruptcy at any time"
    ],
    "sources": [
      "https://mcsonj.org/foreclosure-sales/"
    ],
    "status": "verified"
  },
  "morris-county": {
    "saleDay": "Thursdays (excluding holidays) at 2:00 p.m.",
    "location": "County Commissioners' Public Meeting Room, 5th Floor, Administration and Records Building, Court Street, Morristown, NJ",
    "depositRule": "Third-party bidders: at least 20% of the total bid price at the time of sale; CWPP-eligible: 3.5% of the original upset price",
    "depositForm": "Cash, certified check, or treasurer's/bank/cashier's check (page advises making checks payable to yourself)",
    "balanceDue": "Within 30 calendar days of sale; interest charged from the 11th day",
    "otherRules": [
      "Minimum bid $100",
      "Bidders using CWPP must register by email with the Sheriff's Office (SalesUnit@co.morris.nj.us), starting with March 20, 2025 sale",
      "Bidders should run a title search for prior liens",
      "Owner need not allow inspection before the sale",
      "Purchaser records deed and pays fees at the County Clerk",
      "Owner may redeem within 10 days after the sale",
      "Defaulting purchaser: property relisted and former purchaser may be liable for losses and expenses"
    ],
    "sources": [
      "https://www.morriscountynj.gov/Departments/Sheriff/Civil-Process/About-Sheriff%E2%80%99s-Sales"
    ],
    "status": "verified"
  },
  "ocean-county": {
    "saleDay": "Tuesdays at 2:00 p.m., except legal holidays",
    "location": "Administration Building, 101 Hooper Avenue, Room 119",
    "depositRule": "20% deposit by the successful bidder immediately after the sale",
    "depositForm": "Cashier's check, certified check, or cash (up to $1,000); checks not older than 90 days",
    "balanceDue": "30 days from the sale date, with lawful interest from the 15th day after sale",
    "otherRules": [
      "Bidders must be of legal age and registered before the sale starts",
      "Plaintiff's attorney opens at $100; later bids at least $1,000 increments",
      "Winning bidder must sign a purchase acknowledgment and conditions of sale right away; sale pauses until funds are verified",
      "Sold subject to unpaid taxes, assessments, water rents and what a survey and title search would show",
      "Sold 'as is'; buyer gets the same title the debtor had",
      "Purchaser pays deed recording and realty transfer fees",
      "Defaulting bidder: property resold without readvertising; bidder liable for added costs",
      "Owner may redeem up to 10 days after sale or until deed delivery"
    ],
    "sources": [
      "https://sheriff.co.ocean.nj.us/frmForeclosures",
      "https://www.co.ocean.nj.us/WebContentFiles/0e7ef059-c5c6-4778-9f9a-c8d6818d742b.pdf",
      "https://co.ocean.nj.us/WebContentFiles/03ac956f-bdd9-44d2-a710-18b7396b60d4.pdf"
    ],
    "status": "verified"
  },
  "passaic-county": {
    "saleDay": null,
    "location": null,
    "depositRule": null,
    "depositForm": "Proof of funds before sales begin: physical certified/official bank checks or money orders; no cash, bank statements not accepted",
    "balanceDue": null,
    "otherRules": [
      "Bidder Pre-Registration Form required; accepted until 2:00 p.m. the day before the auction (fax or drop-off at 77 Hamilton Street, Paterson)",
      "Sale dates, times and property statuses may change at any moment without notice; call Foreclosure Unit 973-881-4200 to confirm"
    ],
    "sources": [
      "https://www.pcsheriff.org/county_resources/sheriff_s_sales/index.php",
      "https://www.pcsheriff.org/Foreclosure%20Files/Pre-Registration%20Bidder%20Form%20(PCSO%20Website).pdf?t=202602260952260"
    ],
    "status": "partial",
    "caveat": "Passaic’s bidder rules document could not be read, so only the registration and proof-of-funds rules below are confirmed. Call the Foreclosure Unit for the deposit and payment terms."
  },
  "salem-county": {
    "saleDay": "2:00 p.m. (arrive by 1:45 p.m. for fund verification)",
    "location": "New Salem County Courthouse, 92 Market Street, Salem, NJ 08079 (since May 19, 2025)",
    "depositRule": "20% of the total bid price immediately after the close of the sale",
    "depositForm": "Certified checks payable to 'Sheriff of Salem County'; $1,000.00 cash limit",
    "balanceDue": "Within 10 calendar days of sale",
    "otherRules": [
      "Funds verified 1:45-2:00 p.m. before the sale",
      "Plaintiff bids a $100 minimum on the first round",
      "Purchaser pays recording fees and Realty Transfer Tax; sheriff's fees deducted from price",
      "No permission to enter or inspect structures",
      "Defaulting purchaser: property resold; purchaser liable for deposit, losses and expenses",
      "Call the Sheriff's Office on sale day to check status"
    ],
    "sources": [
      "https://www.salemcountysheriff.com/enforcement/sheriff-sales/",
      "https://www.salemcountysheriff.com/wp-content/uploads/2014/03/Sheriff-Foreclosure-Information-2014.pdf"
    ],
    "status": "partial",
    "caveat": "Salem’s current sheriff page confirms the time, location, certified checks and a $1,000 cash limit. The deposit, balance deadline and other terms below come from an older sheriff’s office document and may have changed, so confirm them with the sheriff before bidding."
  },
  "somerset-county": {
    "saleDay": "Every Tuesday at 2:00 p.m.",
    "location": "Somerset County Administration Building, 3rd Floor, Commissioners Meeting Room, 20 Grove Street, Somerville, NJ",
    "depositRule": "At least 20% of the total bid price at the close of the sale",
    "depositForm": "Certified funds, cashier's check, certified check or money order; cash no longer accepted",
    "balanceDue": "Within 30 days of sale in the same certified forms; interest from the 11th day after sale; buyer may lose deposit if unpaid",
    "otherRules": [
      "Sign-in sheet at the Sheriff Sales Office (lower level) at 9:00 a.m. on sale day; no lining up before 8:30 a.m.",
      "Bidders need proper documents, a copy of ID and physical ID for each property",
      "Plaintiff opens at $1,000; bids in multiples of at least $1,000",
      "Deed may not give clear title; all liens, taxes, encumbrances must be satisfied",
      "No entry or inspection; buyer beware",
      "Former owner can redeem within 10 days of sale",
      "Adjournments, settlements or bankruptcies may cancel a sale at any time before it",
      "CWPP participants must have documentation when signing in"
    ],
    "sources": [
      "https://www.somersetcountynj.gov/government/elected-officials/sheriff-s-office/sheriff-sales/about-sheriff-sales"
    ],
    "status": "verified"
  },
  "sussex-county": {
    "saleDay": "First Wednesday of the month (excluding holidays) at 2:00 p.m.",
    "location": "Historic Sussex County Courthouse, 3 High Street, Newton, NJ",
    "depositRule": "20% of the total bid price, paid as soon as the property is sold to the bidder",
    "depositForm": "Certified check, treasurer check or money order made out to 'Sussex County Sheriff'",
    "balanceDue": "No later than 30 days after the sale; interest from the 13th day",
    "otherRules": [
      "Bidding begins at $100; later bids in $1,000 increments",
      "Sold subject to any first mortgage and any municipal, state, federal or outstanding liens",
      "No entry to the property before the sale without owner's permission",
      "Purchaser records the deed",
      "12-day redemption period after the sale",
      "If balance unpaid on the 30th day, property may be resold without readvertising; purchaser liable for losses",
      "Plaintiff's attorney may adjourn twice per docket, up to 30 days each",
      "CWPP users must contact the Sheriff and give documentation 5 business days before the sale; right of refusal only for defendants, next-of-kin, or tenants"
    ],
    "sources": [
      "https://www.sussexcountysheriff.com/about-sheriff-s-sales/1000",
      "https://www.sussexcountysheriff.com/about-sheriff-s-sales"
    ],
    "status": "verified"
  },
  "union-county": {
    "saleDay": "Every other Wednesday at 2:00 p.m. (beginning May 6, 2026; previously every Wednesday)",
    "location": "Warinanco Ice Skating Center, 1 Park Dr, Roselle, NJ 07203",
    "depositRule": "Bring certified check(s) for 20% of the highest amount you intend to bid",
    "depositForm": "Certified check(s) payable to Union County Sheriff or County Sheriff; no more than $500 cash, rest in certified funds",
    "balanceDue": "Within 30 days; default interest if not paid within 10 days; CWPP participants 90 business days",
    "otherRules": [
      "Arrive at 1:00 p.m. to check in; no entry after sales begin",
      "Bidders must identify themselves; photo ID required at close of sale",
      "Minimum bid $1,000; bids in multiples of $1,000",
      "Real property only, not structures; no entry or inspection",
      "Sold subject to restrictions and easements of record, unpaid taxes, assessments, water/sewer liens and what a survey, title search and inspection would show",
      "Deed may not give clear title",
      "Unpaid balance after 30 days: may lose deposit and may be barred from future sales",
      "Defendants get two 28-day adjournments ($28 each), plus one more if both parties agree"
    ],
    "sources": [
      "https://ucnj.org/sheriff/functions/sheriffs-sale-information/"
    ],
    "status": "verified"
  },
  "warren-county": {
    "saleDay": "2:00 p.m. (day of week not stated)",
    "location": "Warren County Courthouse Annex, 199 Hardwick Street, Belvidere, NJ 07823",
    "depositRule": "20% of the total bid price at the close of the sale",
    "depositForm": "Certified cashier's or treasurer's check (as worded); no cash, personal checks, credit cards, or bank line-of-credit letters",
    "balanceDue": "Within 10 days of sale; statutory interest from the 11th day until paid",
    "otherRules": [
      "Plaintiff opens with a minimum $100 bid; later increments set by the Sheriff",
      "Sold as is, where is, with no warranties",
      "Sold subject to unpaid taxes, assessments, liens and any prior mortgages",
      "Purchaser pays the deed recording fee and Realty Transfer Fee to the County Clerk",
      "Sales are sometimes not held on the advertised date; check the website or call on sale day",
      "Defaulting purchaser: property resold and former purchaser liable for losses and expenses"
    ],
    "sources": [
      "https://www.wcsheriffnj.gov/oldforeclosures"
    ],
    "status": "partial",
    "caveat": "These terms come from an archived page on the Warren County Sheriff’s website; the current foreclosure page was unavailable when we checked. Confirm them with the sheriff before bidding."
  }
};
