/**
 * Verified local help for each county hub (/foreclosure-help/<county>-county/).
 *
 * Researched 2026-10-05. Sources:
 *  - Court vicinage: NJ Courts orders and "A Guide to the Judicial Process" (njcourts.gov).
 *  - Legal aid: each Legal Services of New Jersey regional program's own office page
 *    (sjlegalservices.org, nnjls.org, essexnewarklegalservices.org,
 *    centraljerseylegalservices.org, lsnwj.org).
 *  - County social services: NJ Division of Family Development county agency list
 *    (nj.gov/humanservices/dfd/counties/), checked against county sites where possible.
 *  - Housing counselors: HUD's list of HUD-approved housing counseling agencies in NJ
 *    (apps.hud.gov hcs_print, searchstate=NJ), keeping only agencies HUD lists for
 *    mortgage delinquency / default counseling with an office in the county.
 * Nothing is guessed: where no agency qualified, `counselors` is empty and
 * `counselorNote` says where the nearest one is (or that none is listed).
 */

export interface CountyHelpData {
  vicinage: string;
  legal: { name: string; city: string; phone: string; url: string };
  social: { name: string; phone: string; url: string };
  counselors: { name: string; town: string; url: string }[];
  counselorNote?: string;
}

export const COUNTY_HELP_CHECKED = 'October 5, 2026';
export const SJLS_INTAKE = '1-800-496-4570';

export const COUNTY_HELP: Record<string, CountyHelpData> = {
  'atlantic-county': {
    vicinage: 'Vicinage 1 (Atlantic/Cape May)',
    legal: { name: 'South Jersey Legal Services, Atlantic County office', city: 'Atlantic City', phone: '(609) 348-4200', url: 'https://sjlegalservices.org/sjls-offices/' },
    social: { name: 'Atlantic County Department of Family and Community Development', phone: '(609) 348-3001', url: 'https://www.atlantic-county.org/family-community-development/' },
    counselors: [],
    counselorNote: "HUD's list shows no approved counseling agency with an office in Atlantic County. The nearest one offering mortgage delinquency counseling is in Marmora, in Cape May County.",
  },
  'bergen-county': {
    vicinage: 'Vicinage 2 (Bergen)',
    legal: { name: 'Northeast New Jersey Legal Services, Bergen County office', city: 'Hackensack', phone: '(201) 487-2166', url: 'https://www.northeastnjlegalservices.org/contact' },
    social: { name: 'Bergen County Board of Social Services', phone: '(201) 368-4200', url: 'https://bcbss.com/' },
    counselors: [
      { name: 'Fair Housing Council of Northern New Jersey', town: 'Hackensack', url: 'https://www.fairhousingnj.org' },
      { name: 'Bergen County Division of Senior Services (seniors only)', town: 'Hackensack', url: 'https://www.co.bergen.nj.us' },
    ],
  },
  'burlington-county': {
    vicinage: 'Vicinage 3 (Burlington)',
    legal: { name: 'South Jersey Legal Services, Burlington County office', city: 'Mount Holly', phone: '(609) 261-1088', url: 'https://sjlegalservices.org/sjls-offices/' },
    social: { name: 'Burlington County Board of Social Services', phone: '(609) 261-1000', url: 'http://www.bcbss.org/' },
    counselors: [{ name: 'Money Management International', town: 'Mount Laurel', url: 'https://www.moneymanagement.org' }],
  },
  'camden-county': {
    vicinage: 'Vicinage 4 (Camden)',
    legal: { name: 'South Jersey Legal Services (headquarters)', city: 'Camden', phone: '(856) 964-2010', url: 'https://sjlegalservices.org/sjls-offices/' },
    social: { name: 'Camden County Board of Social Services', phone: '(856) 225-8800', url: 'https://www.camdencounty.com/service/social-services/' },
    counselors: [
      { name: 'Parkside Business and Community in Partnership', town: 'Camden', url: 'https://www.pbcip.org' },
      { name: 'Clarifi (CCCS of Delaware Valley)', town: 'Cherry Hill', url: 'https://www.clarifi.org' },
      { name: 'GreenPath Financial Wellness', town: 'Cherry Hill', url: 'https://www.greenpath.com/housing/' },
    ],
  },
  'cape-may-county': {
    vicinage: 'Vicinage 1 (Atlantic/Cape May)',
    legal: { name: 'South Jersey Legal Services, Cape May County office', city: 'Cape May Court House', phone: '(609) 465-3001', url: 'https://sjlegalservices.org/sjls-offices/' },
    social: { name: 'Cape May County Department of Social Services', phone: '(609) 886-6200', url: 'https://capemaycountynj.gov/984/Cape-May-County-Social-Services' },
    counselors: [{ name: 'Consumer Credit and Budget Counseling (National Foundation for Debt Management)', town: 'Marmora', url: 'http://www.cc-bc.com' }],
  },
  'cumberland-county': {
    vicinage: 'Vicinage 15 (Cumberland/Gloucester/Salem)',
    legal: { name: 'South Jersey Legal Services, Cumberland/Salem office', city: 'Vineland', phone: '(856) 691-0494', url: 'https://sjlegalservices.org/sjls-offices/' },
    social: { name: 'Cumberland County Board of Social Services', phone: '(856) 691-4600', url: 'http://www.co.cumberland.nj.us/socialservices' },
    counselors: [],
    counselorNote: "HUD's list shows no approved counseling agency with an office in Cumberland County. Use HUD's national line, 800-569-4287, to be matched with one that counsels by phone.",
  },
  'essex-county': {
    vicinage: 'Vicinage 5 (Essex)',
    legal: { name: 'Essex-Newark Legal Services', city: 'Newark', phone: '(973) 624-4500', url: 'https://www.essexnewarklegalservices.org' },
    social: { name: 'Essex County Division of Family Assistance and Benefits', phone: '(973) 395-8000', url: 'https://essexcountynj.org/dfab/' },
    counselors: [
      { name: 'La Casa de Don Pedro', town: 'Newark', url: 'https://lacasanwk.org' },
      { name: 'Urban League of Essex County', town: 'Newark', url: 'https://ulec.org' },
      { name: 'New Jersey Citizen Action', town: 'Newark', url: 'https://njcitizenaction.org/' },
    ],
  },
  'gloucester-county': {
    vicinage: 'Vicinage 15 (Cumberland/Gloucester/Salem)',
    legal: { name: 'South Jersey Legal Services, Gloucester County office', city: 'Woodbury', phone: '(856) 848-5360', url: 'https://sjlegalservices.org/sjls-offices/' },
    social: { name: 'Gloucester County Division of Social Services', phone: '(856) 582-9200', url: 'https://www.gloucestercountynj.gov/510/Social-Services' },
    counselors: [],
    counselorNote: "HUD's list shows no approved counseling agency with an office in Gloucester County. The nearest ones offering mortgage delinquency counseling are in Cherry Hill, in Camden County (Clarifi and GreenPath).",
  },
  'hudson-county': {
    vicinage: 'Vicinage 6 (Hudson)',
    legal: { name: 'Northeast New Jersey Legal Services, Hudson County office', city: 'Jersey City', phone: '(201) 792-6363', url: 'https://www.nnjls.org/contact' },
    social: { name: 'Hudson County Division of Welfare', phone: '(201) 420-3000', url: 'https://www.hcnj.us/family-services/welfare/' },
    counselors: [],
    counselorNote: "Hudson has HUD-approved agencies, but HUD lists none of them for mortgage delinquency counseling (they focus on renting and buying). Call HUD's line, 800-569-4287, to be matched with one that handles foreclosure.",
  },
  'hunterdon-county': {
    vicinage: 'Vicinage 13 (Somerset/Hunterdon/Warren)',
    legal: { name: 'Legal Services of Northwest Jersey, Hunterdon County office', city: 'Flemington', phone: '(908) 782-7979', url: 'https://www.lsnwj.org/hunterdon-county' },
    social: { name: 'Hunterdon County Division of Social Services', phone: '(908) 788-1300', url: 'https://co.hunterdon.nj.us/615/Social-Services' },
    counselors: [],
    counselorNote: "HUD's list shows no approved counseling agency with an office in Hunterdon County. The nearest is the Central Jersey Housing Resource Center in Somerville, in Somerset County.",
  },
  'mercer-county': {
    vicinage: 'Vicinage 7 (Mercer)',
    legal: { name: 'Central Jersey Legal Services, Mercer County office', city: 'Trenton', phone: '(609) 695-6249', url: 'https://centraljerseylegalservices.org/get-legal-help/' },
    social: { name: 'Mercer County Board of Social Services', phone: '(609) 989-4320', url: 'https://www.mcboss.org/' },
    counselors: [{ name: 'Isles, Inc.', town: 'Trenton', url: 'https://isles.org' }],
  },
  'middlesex-county': {
    vicinage: 'Vicinage 8 (Middlesex)',
    legal: { name: 'Central Jersey Legal Services, Middlesex County office', city: 'New Brunswick', phone: '(732) 249-7600', url: 'https://centraljerseylegalservices.org/get-legal-help/' },
    social: { name: 'Middlesex County Board of Social Services', phone: '(732) 745-3500', url: 'https://middlesexsocialservices.com/' },
    counselors: [
      { name: 'Puerto Rican Action Board (PRAB)', town: 'East Brunswick', url: 'https://prab.org' },
      { name: 'Puerto Rican Association for Human Development', town: 'Perth Amboy', url: 'http://www.prahd.org' },
      { name: 'Housing Authority of the City of Perth Amboy', town: 'Perth Amboy', url: 'http://www.perthamboyha.org/' },
    ],
  },
  'monmouth-county': {
    vicinage: 'Vicinage 9 (Monmouth)',
    legal: { name: 'South Jersey Legal Services, Monmouth County office', city: 'Freehold', phone: '(732) 414-6750', url: 'https://sjlegalservices.org/sjls-offices/' },
    social: { name: 'Monmouth County Division of Social Services', phone: '(732) 431-6000', url: 'https://www.visitmonmouth.com/Page.aspx?Id=2076' },
    counselors: [
      { name: 'Affordable Housing Alliance', town: 'Neptune', url: 'http://www.housingall.org' },
      { name: 'Navicore Solutions', town: 'Manalapan', url: 'https://navicoresolutions.org' },
    ],
  },
  'morris-county': {
    vicinage: 'Vicinage 10 (Morris/Sussex)',
    legal: { name: 'Legal Services of Northwest Jersey, Morris County office', city: 'Morristown', phone: '(973) 285-6911', url: 'https://www.lsnwj.org/morris-county' },
    social: { name: 'Morris County Office of Temporary Assistance', phone: '(973) 326-7800', url: 'https://www.morriscountynj.gov/Departments/Temporary-Assistance' },
    counselors: [{ name: 'Housing Partnership for Morris County', town: 'Dover', url: 'http://www.housingpartnershipnj.org' }],
  },
  'ocean-county': {
    vicinage: 'Vicinage 14 (Ocean)',
    legal: { name: 'South Jersey Legal Services, Ocean County office', city: 'Toms River', phone: '(732) 608-7794', url: 'https://sjlegalservices.org/sjls-offices/' },
    social: { name: 'Ocean County Board of Social Services', phone: '(732) 349-1500', url: 'https://co.ocean.nj.us/socialservices/' },
    counselors: [
      { name: 'O.C.E.A.N., Inc.', town: 'Toms River', url: 'http://www.oceaninc.org/' },
      { name: 'Affordable Housing Alliance, Toms River office', town: 'Toms River', url: 'http://www.housingall.org' },
    ],
  },
  'passaic-county': {
    vicinage: 'Vicinage 11 (Passaic)',
    legal: { name: 'Northeast New Jersey Legal Services, Passaic County office', city: 'Paterson', phone: '(973) 523-2900', url: 'https://www.nnjls.org/contact' },
    social: { name: 'Passaic County Board of Social Services', phone: '(973) 881-0100', url: 'http://pcbss.org/' },
    counselors: [{ name: 'Paterson Task Force for Community Action', town: 'Paterson', url: 'http://www.patersontaskforce.org' }],
  },
  'salem-county': {
    vicinage: 'Vicinage 15 (Cumberland/Gloucester/Salem)',
    legal: { name: 'South Jersey Legal Services, Cumberland/Salem office', city: 'Vineland', phone: '(856) 691-0494', url: 'https://sjlegalservices.org/sjls-offices/' },
    social: { name: 'Salem County Department of Social Services', phone: '(856) 299-7200', url: 'https://www.scbssnj.org/' },
    counselors: [],
    counselorNote: "HUD's list shows no approved counseling agency with an office in Salem County, and the nearest legal aid office is in Vineland. HUD's line, 800-569-4287, can match you with a counselor who works by phone.",
  },
  'somerset-county': {
    vicinage: 'Vicinage 13 (Somerset/Hunterdon/Warren)',
    legal: { name: 'Legal Services of Northwest Jersey, Somerset County office', city: 'Somerville', phone: '(908) 231-0840', url: 'https://www.lsnwj.org/locations' },
    social: { name: 'Somerset County Board of Social Services', phone: '(908) 526-8800', url: 'https://www.co.somerset.nj.us/government/affiliated-agencies/social-services' },
    counselors: [{ name: 'Central Jersey Housing Resource Center', town: 'Somerville', url: 'https://cjhrc.org' }],
  },
  'sussex-county': {
    vicinage: 'Vicinage 10 (Morris/Sussex)',
    legal: { name: 'Legal Services of Northwest Jersey, Sussex County office', city: 'Newton', phone: '(973) 383-7400', url: 'https://www.lsnwj.org/locations' },
    social: { name: 'Sussex County Division of Social Services', phone: '(973) 383-3600', url: 'https://sussex.nj.us/cn/webpage.cfm?tpid=994' },
    counselors: [],
    counselorNote: "HUD's list shows no approved counseling agency with an office in Sussex County. The nearest is the Housing Partnership for Morris County in Dover.",
  },
  'union-county': {
    vicinage: 'Vicinage 12 (Union)',
    legal: { name: 'Central Jersey Legal Services, Union County office', city: 'Elizabeth', phone: '(908) 354-4340', url: 'https://centraljerseylegalservices.org/get-legal-help/' },
    social: { name: 'Union County Division of Social Services', phone: '(908) 965-2700', url: 'https://ucnj.org/dhs/social-services/' },
    counselors: [
      { name: 'Urban League of Union County', town: 'Elizabeth', url: 'http://www.uloucnj.org' },
      { name: 'NID Housing Counseling Agency', town: 'Plainfield', url: 'https://www.nidhousing.com' },
    ],
  },
  'warren-county': {
    vicinage: 'Vicinage 13 (Somerset/Hunterdon/Warren)',
    legal: { name: 'Legal Services of Northwest Jersey, Warren County office', city: 'Belvidere', phone: '(908) 475-2010', url: 'https://www.lsnwj.org/locations' },
    social: { name: 'Warren County Division of Temporary Assistance and Social Services', phone: '(908) 475-6301', url: 'https://www.warrencountynj.gov/government/human-services/division-of-temporary-assistance-and-social-services/social-services' },
    counselors: [],
    counselorNote: "HUD's list shows no approved counseling agency with an office in Warren County. HUD's line, 800-569-4287, can match you with a counselor who works by phone.",
  },
};

export function countyHelp(slug: string): CountyHelpData | undefined {
  return COUNTY_HELP[slug];
}
