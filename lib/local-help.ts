// FREE LOCAL HELP, BY COUNTY
// ---------------------------------------------------------------------------
// The organizations that actually serve each county, so every town page can
// show genuinely local content instead of the same boilerplate. This is what
// separates a useful local page from a doorway page — and it is also simply
// the right thing to put in front of someone in trouble.
//
// Every entry was verified against the organization's own site (2026-09).
// Statewide entries render on every page; county entries only on theirs.
// ---------------------------------------------------------------------------

export interface HelpOrg {
  name: string;
  what: string;
  url: string;
  counties: string[] | 'statewide';
}

export const HELP_ORGS: HelpOrg[] = [
  {
    name: 'NJ Courts Foreclosure Mediation Program',
    what: 'Free court-run mediation with your lender, with a housing counselor assigned at no cost. Available once a foreclosure complaint has been filed.',
    url: 'https://www.njcourts.gov/self-help/foreclosure',
    counties: 'statewide',
  },
  {
    name: 'Legal Services of New Jersey',
    what: 'Free legal help for income-qualifying homeowners, including foreclosure defense. Statewide hotline 1-888-576-5529.',
    url: 'https://www.lsnj.org',
    counties: 'statewide',
  },
  {
    name: 'HUD-Approved Housing Counselors',
    what: 'Free, government-approved foreclosure counseling. Use the official directory to find an agency near you.',
    url: 'https://www.hud.gov/findacounselor',
    counties: 'statewide',
  },
  {
    name: 'Navicore Solutions',
    what: 'HUD-approved nonprofit counseling agency headquartered in New Jersey, offering foreclosure and mortgage-default counseling.',
    url: 'https://navicoresolutions.org',
    counties: 'statewide',
  },
  {
    name: 'Urban League of Essex County',
    what: 'Housing counseling for Essex County families, including foreclosure prevention.',
    url: 'https://ulec.org',
    counties: ['Essex'],
  },
  {
    name: 'La Casa de Don Pedro',
    what: 'Newark-based housing counseling, with services in Spanish.',
    url: 'https://lacasanwk.org',
    counties: ['Essex'],
  },
  {
    name: 'Fair Housing Council of Northern New Jersey',
    what: 'Mortgage default and foreclosure prevention counseling serving Bergen County.',
    url: 'https://www.fairhousingnj.org',
    counties: ['Bergen', 'Passaic', 'Hudson'],
  },
  {
    name: 'PRAB (Puerto Rican Action Board)',
    what: 'New Brunswick housing counseling, including foreclosure help, in English and Spanish.',
    url: 'https://prab.org',
    counties: ['Middlesex'],
  },
  {
    name: 'Central Jersey Housing Resource Center',
    what: 'Housing counseling and homeowner education for the Raritan Valley area.',
    url: 'https://cjhrc.org',
    counties: ['Somerset', 'Hunterdon'],
  },
  {
    name: "St. Joseph's Carpenter Society",
    what: 'Camden-based housing counseling and homeowner education, with services in Spanish.',
    url: 'https://sjcscamden.org',
    counties: ['Camden'],
  },
];

/** Orgs for one county: its local agencies first, then the statewide layer. */
export function helpFor(countyName: string): HelpOrg[] {
  const local = HELP_ORGS.filter(
    (o) => Array.isArray(o.counties) && o.counties.includes(countyName)
  );
  const statewide = HELP_ORGS.filter((o) => o.counties === 'statewide');
  return [...local, ...statewide];
}
