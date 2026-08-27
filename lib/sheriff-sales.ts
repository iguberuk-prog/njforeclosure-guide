// SHERIFF SALE SOURCES, ALL 21 NEW JERSEY COUNTIES
// ---------------------------------------------------------------------------
// Every phone number and address here was verified against the official
// county or sheriff's-office page recorded in verifiedFrom on 2026-08-27.
// Counties whose official sites could not be reached for verification carry
// null in those fields and the page renders "see the sheriff's website"
// instead. NEVER fill a null from memory or from a third-party aggregator:
// a wrong phone number on a foreclosure help site sends a person in crisis
// to the wrong place. Verify against the official source or leave it null.
//
// 17 counties publish sales through the state's CivilView system
// (salesweb.civilview.com); Mercer, Somerset, Sussex and Warren publish
// their own lists at salesUrl.
// ---------------------------------------------------------------------------

export interface SheriffSaleSource {
  /** Matches the county slug in lib/nj-locations.ts, e.g. 'essex-county'. */
  slug: string;
  county: string;
  sheriffUrl: string;
  /** Direct link to that county's foreclosure sale listings. */
  salesUrl: string;
  usesCivilView: boolean;
  phone: string | null;
  /** Some counties publish the sale venue rather than the office; those are
   *  prefixed "Sales held at:" so nobody mails documents to an ice rink. */
  address: string | null;
  verifiedFrom: string | null;
}

export const SHERIFF_SOURCES: SheriffSaleSource[] = [
  {
    slug: 'atlantic-county',
    county: 'Atlantic',
    sheriffUrl: 'https://www.atlanticcountynj.gov/residents/public-safety/sheriff-s-office',
    salesUrl: 'https://salesweb.civilview.com/Sales/SalesSearch?countyId=25',
    usesCivilView: true,
    phone: '609-909-7200',
    address: '4997 Unami Boulevard, Mays Landing, NJ 08330',
    verifiedFrom: 'https://www.atlanticcountynj.gov/government/county-government/atlantic-county-sheriff-s-office/services/sheriff-sales',
  },
  {
    slug: 'bergen-county',
    county: 'Bergen',
    sheriffUrl: 'https://www.bcsd.us/',
    salesUrl: 'https://salesweb.civilview.com/Sales/SalesSearch?countyId=7',
    usesCivilView: true,
    phone: '(201) 336-3500',
    address: '2 Bergen County Plaza, Hackensack, NJ 07601',
    verifiedFrom: 'https://www.bcsd.us/sheriff-sales',
  },
  {
    slug: 'burlington-county',
    county: 'Burlington',
    sheriffUrl: 'https://www.burlingtoncountynj.gov/2141/Sheriffs-Office',
    salesUrl: 'https://salesweb.civilview.com/Sales/SalesSearch?countyId=3',
    usesCivilView: true,
    phone: null,
    address: null,
    verifiedFrom: null,
  },
  {
    slug: 'camden-county',
    county: 'Camden',
    sheriffUrl: 'https://www.camdencounty.com/service/sheriffs-office/',
    salesUrl: 'https://salesweb.civilview.com/Sales/SalesSearch?countyId=1',
    usesCivilView: true,
    phone: '(856) 225-5531',
    address: 'Sales held at: Camden City Council Chambers, 520 Market Street, 2nd Floor, City Hall, Camden, NJ 08102',
    verifiedFrom: 'https://www.camdencounty.com/service/sheriffs-office/foreclosure-sales-information/',
  },
  {
    slug: 'cape-may-county',
    county: 'Cape May',
    sheriffUrl: 'https://capemaycountynj.gov/1680/Sheriffs-Office',
    salesUrl: 'https://salesweb.civilview.com/Sales/SalesSearch?countyId=52',
    usesCivilView: true,
    phone: null,
    address: null,
    verifiedFrom: null,
  },
  {
    slug: 'cumberland-county',
    county: 'Cumberland',
    sheriffUrl: 'https://www.cumberlandcountynj.gov/sheriffsales',
    salesUrl: 'https://salesweb.civilview.com/Sales/SalesSearch?countyId=6',
    usesCivilView: true,
    phone: '856-451-4449 ext 25116',
    address: '220 North Laurel Street, Bridgeton, NJ',
    verifiedFrom: 'https://www.cumberlandcountynj.gov/sheriffsales',
  },
  {
    slug: 'essex-county',
    county: 'Essex',
    sheriffUrl: 'https://www.essexsheriff.com/',
    salesUrl: 'https://salesweb.civilview.com/Sales/SalesSearch?countyId=2',
    usesCivilView: true,
    phone: '(973) 621-4111',
    address: '50 W Market St, Newark, NJ 07102',
    verifiedFrom: 'https://www.essexsheriff.com/laweservices/the-foreclosure-unit/',
  },
  {
    slug: 'gloucester-county',
    county: 'Gloucester',
    sheriffUrl: 'https://www.gloucestercountynj.gov/555/Sheriffs-Office',
    salesUrl: 'https://salesweb.civilview.com/Sales/SalesSearch?countyId=19',
    usesCivilView: true,
    phone: '856-384-4603',
    address: '1 N. Broad Street, Woodbury, NJ 08096',
    verifiedFrom: 'https://gloucestercountynj.gov/564/Foreclosure-Procedures',
  },
  {
    slug: 'hudson-county',
    county: 'Hudson',
    sheriffUrl: 'https://www.hudsoncountysheriff.com/',
    salesUrl: 'https://salesweb.civilview.com/Sales/SalesSearch?countyId=10',
    usesCivilView: true,
    phone: '(201) 915-1300',
    address: 'Hudson Plaza, 257 Cornelison Avenue, Room 2001, Jersey City, NJ 07302',
    verifiedFrom: 'https://www.hudsoncountysheriff.com/foreclosures-sales',
  },
  {
    slug: 'hunterdon-county',
    county: 'Hunterdon',
    sheriffUrl: 'https://www.co.hunterdon.nj.us/362/Sheriffs-Office',
    salesUrl: 'https://salesweb.civilview.com/Sales/SalesSearch?countyId=32',
    usesCivilView: true,
    phone: null,
    address: null,
    verifiedFrom: null,
  },
  {
    slug: 'mercer-county',
    county: 'Mercer',
    sheriffUrl: 'https://www.mercercounty.org/government/sheriff',
    salesUrl: 'https://www.mercercounty.org/government/sheriff-/informational/sheriff-s-foreclosure-sale',
    usesCivilView: false,
    phone: '(609) 989-6102',
    address: "Mercer County Sheriff's Office, 175 South Broad Street, Trenton, NJ",
    verifiedFrom: 'https://www.mercercounty.org/government/sheriff-/informational/sheriff-s-foreclosure-sale',
  },
  {
    slug: 'middlesex-county',
    county: 'Middlesex',
    sheriffUrl: 'https://www.middlesexcountynj.gov/government/departments/department-of-public-safety-and-health/office-of-the-county-sheriff',
    salesUrl: 'https://salesweb.civilview.com/Sales/SalesSearch?countyId=73',
    usesCivilView: true,
    phone: '732-745-3000',
    address: '75 Bayard Street, New Brunswick, NJ 08901',
    verifiedFrom: 'https://www.middlesexcountynj.gov/government/departments/department-of-public-safety-and-health/office-of-the-county-sheriff/foreclosures',
  },
  {
    slug: 'monmouth-county',
    county: 'Monmouth',
    sheriffUrl: 'https://www.mcsonj.org/',
    salesUrl: 'https://salesweb.civilview.com/Sales/SalesSearch?countyId=8',
    usesCivilView: true,
    phone: '(732) 431-6400',
    address: '2500 Kozloski Road, Freehold, NJ 07728',
    verifiedFrom: 'https://mcsonj.org/foreclosure-sales/',
  },
  {
    slug: 'morris-county',
    county: 'Morris',
    sheriffUrl: 'https://sheriff.morriscountynj.gov/',
    salesUrl: 'https://salesweb.civilview.com/Sales/SalesSearch?countyId=9',
    usesCivilView: true,
    phone: '973-285-6067',
    address: 'County of Morris, PO Box 900, Morristown, NJ 07963-0900',
    verifiedFrom: 'https://www.morriscountynj.gov/Departments/Sheriff/Civil-Process/Foreclosure-Listings',
  },
  {
    slug: 'ocean-county',
    county: 'Ocean',
    sheriffUrl: 'https://sheriff.co.ocean.nj.us/',
    salesUrl: 'https://salesweb.civilview.com/Sales/SalesSearch?countyId=85',
    usesCivilView: true,
    phone: '732-929-2044',
    address: '120 Hooper Avenue, Third Floor, Toms River, NJ 08753',
    verifiedFrom: 'https://sheriff.co.ocean.nj.us/frmForeclosures',
  },
  {
    slug: 'passaic-county',
    county: 'Passaic',
    sheriffUrl: 'https://www.pcsheriff.org/',
    salesUrl: 'https://salesweb.civilview.com/Sales/SalesSearch?countyId=17',
    usesCivilView: true,
    phone: '973-389-5900',
    address: '435 Hamburg Turnpike, Wayne, NJ 07470',
    verifiedFrom: 'https://www.pcsheriff.org/county_resources/sheriff_s_sales/index.php',
  },
  {
    slug: 'salem-county',
    county: 'Salem',
    sheriffUrl: 'https://www.salemcountysheriff.com/',
    salesUrl: 'https://salesweb.civilview.com/Sales/SalesSearch?countyId=20',
    usesCivilView: true,
    phone: '856-935-7510 x8375',
    address: '94 Market Street, Salem, NJ 08079',
    verifiedFrom: 'https://www.salemcountysheriff.com/enforcement/sheriff-sales/',
  },
  {
    slug: 'somerset-county',
    county: 'Somerset',
    sheriffUrl: 'https://www.somersetcountynj.gov/government/elected-officials/sheriff',
    salesUrl: 'https://www.somersetcountynj.gov/government/elected-officials/sheriff-s-office/divisions/sheriff-sales',
    usesCivilView: false,
    phone: '(908) 231-7144',
    address: 'Sales held at: Somerset County Administration Building, 3rd Floor, 20 Grove Street, Somerville, NJ',
    verifiedFrom: 'https://www.somersetcountynj.gov/government/elected-officials/sheriff-s-office/sheriff-sales/about-sheriff-sales',
  },
  {
    slug: 'sussex-county',
    county: 'Sussex',
    sheriffUrl: 'https://www.sussexcountysheriff.com/',
    salesUrl: 'https://www.sussexcountysheriff.com/foreclosure-listings',
    usesCivilView: false,
    phone: '973-579-0850',
    address: '39 High Street, Newton, NJ 07860',
    verifiedFrom: 'https://www.sussexcountysheriff.com/about-sheriff-s-sales',
  },
  {
    slug: 'union-county',
    county: 'Union',
    sheriffUrl: 'https://ucnj.org/sheriff/',
    salesUrl: 'https://salesweb.civilview.com/Sales/SalesSearch?countyId=15',
    usesCivilView: true,
    phone: '908-527-4450',
    address: 'Sales held at: Warinanco Ice Skating Center, 1 Park Dr, Roselle, NJ 07203',
    verifiedFrom: 'https://ucnj.org/sheriff/functions/sheriffs-sale-information/',
  },
  {
    slug: 'warren-county',
    county: 'Warren',
    sheriffUrl: 'https://www.wcsheriffnj.gov/',
    salesUrl: 'https://www.wcsheriffnj.gov/publicnotices',
    usesCivilView: false,
    phone: '908-475-6309',
    address: 'Warren County Courthouse, 413 Second St., Belvidere, NJ 07823',
    verifiedFrom: 'https://www.wcsheriffnj.gov/',
  },
];

export function getSheriffSource(slug: string): SheriffSaleSource | undefined {
  return SHERIFF_SOURCES.find((s) => s.slug === slug);
}

/** The date the dataset above was last verified, shown on the pages so both
 *  readers and AI crawlers can judge freshness. Update when re-verifying. */
export const SHERIFF_DATA_VERIFIED = 'August 27, 2026';
