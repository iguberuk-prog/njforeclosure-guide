/**
 * "Who is suing me?" pages: /who-is-suing-me/<slug>/.
 *
 * One entry per plaintiff that appears most often on New Jersey sheriff sale
 * lists in the monthly report (data/sheriff-report/latest.json topPlaintiffs;
 * `reportName` must match the collector's display name exactly).
 *
 * Rules:
 *  - Neutral and factual. No accusations, no performance claims, no guesses
 *    about which servicer handles a given trust's loans.
 *  - Trustee descriptions stay at the level of well-established structure
 *    (a trustee holds loans for investors; a servicer runs the account).
 *  - Phone numbers are never written here; servicer contacts come only from
 *    lib/servicers.ts via `servicerSlug`.
 *  - Counts are scheduled sales, never completed sales.
 */
import { REPORT } from './sheriff-report';

export type PlaintiffKind = 'trustee' | 'servicer' | 'agency';

export interface Plaintiff {
  slug: string;
  name: string;
  /** Exact display name the collector emits in topPlaintiffs. */
  reportName: string;
  kind: PlaintiffKind;
  /** How the name commonly appears on a complaint (patterns, not a specific case). */
  appearsAs: string[];
  who: string;
  /** Link to the verified servicer guide when the plaintiff is also a servicer. */
  servicerSlug?: string;
}

export const PLAINTIFFS: Plaintiff[] = [
  {
    slug: 'us-bank-as-trustee',
    name: 'U.S. Bank, as trustee',
    reportName: 'U.S. Bank (as trustee)',
    kind: 'trustee',
    appearsAs: ['U.S. Bank National Association, as Trustee for …', 'U.S. Bank Trust National Association, not in its individual capacity but solely as trustee for …'],
    who: 'When U.S. Bank appears “as trustee,” it is acting for a trust that holds mortgage loans on behalf of investors, not as the bank that lends or collects your payments. The trust owns the loan; a separate mortgage servicer runs your account, takes your payments and decides on workouts under the trust’s rules. U.S. Bank is the most common plaintiff name on New Jersey sheriff sale lists for exactly this reason: it serves as trustee for a very large number of loan trusts.',
  },
  {
    slug: 'wilmington-savings-fund-society-as-trustee',
    name: 'Wilmington Savings Fund Society, as trustee',
    reportName: 'Wilmington Savings Fund Society (as trustee)',
    kind: 'trustee',
    appearsAs: ['Wilmington Savings Fund Society, FSB, not in its individual capacity but solely as trustee for …', 'WSFS, as owner trustee of …'],
    who: 'Wilmington Savings Fund Society (WSFS) is a Delaware bank that serves as trustee for trusts that own mortgage loans. When it is named “not in its individual capacity but solely as trustee,” that wording is telling you WSFS itself is not your lender: it holds the loan on behalf of the trust’s investors, and a mortgage servicer handles your account.',
  },
  {
    slug: 'deutsche-bank-as-trustee',
    name: 'Deutsche Bank, as trustee',
    reportName: 'Deutsche Bank (as trustee)',
    kind: 'trustee',
    appearsAs: ['Deutsche Bank National Trust Company, as Trustee for …', 'Deutsche Bank Trust Company Americas, as Trustee for …'],
    who: 'Deutsche Bank’s U.S. trust companies serve as trustee for mortgage-backed securities trusts, many of them created before 2008. As trustee it holds the loans for the trust’s certificate holders; it does not service your loan. The trust name that follows “as Trustee for” on the complaint identifies which pool your loan sits in, and a separate servicer manages the account.',
  },
  {
    slug: 'bank-of-new-york-mellon-as-trustee',
    name: 'Bank of New York Mellon, as trustee',
    reportName: 'Bank of New York Mellon (as trustee)',
    kind: 'trustee',
    appearsAs: ['The Bank of New York Mellon, as Trustee for the Certificateholders of …', 'The Bank of New York Mellon, f/k/a The Bank of New York, as Trustee …'],
    who: 'The Bank of New York Mellon (formerly The Bank of New York) serves as trustee for many mortgage-backed securities trusts. In a foreclosure it appears on behalf of the trust’s certificate holders, the investors who own the loans. It does not collect payments or review workout applications; the trust’s servicer does.',
  },
  {
    slug: 'lakeview-loan-servicing',
    name: 'Lakeview Loan Servicing',
    reportName: 'Lakeview Loan Servicing',
    kind: 'servicer',
    appearsAs: ['Lakeview Loan Servicing, LLC'],
    who: 'Lakeview Loan Servicing owns the servicing rights on a large number of mortgages. Lakeview itself says it partners with subservicers such as LoanCare, M&T Bank, ServiceMac, Carrington and Champion, so the company named on your monthly statement may not be Lakeview even though Lakeview is the plaintiff.',
    servicerSlug: 'lakeview',
  },
  {
    slug: 'freedom-mortgage',
    name: 'Freedom Mortgage',
    reportName: 'Freedom Mortgage',
    kind: 'servicer',
    appearsAs: ['Freedom Mortgage Corporation'],
    who: 'Freedom Mortgage is a lender and servicer whose portfolio includes many FHA and VA loans. When it is the plaintiff, it is usually both the company you pay and the party bringing the case, so its loss mitigation team is the door for workout applications.',
    servicerSlug: 'freedom-mortgage',
  },
  {
    slug: 'newrez-shellpoint',
    name: 'Newrez / Shellpoint',
    reportName: 'NewRez / Shellpoint',
    kind: 'servicer',
    appearsAs: ['Newrez LLC d/b/a Shellpoint Mortgage Servicing', 'NewRez LLC, f/k/a New Penn Financial, LLC d/b/a Shellpoint Mortgage Servicing'],
    who: 'Newrez is a mortgage lender and servicer, and Shellpoint Mortgage Servicing is one of its brands. Either name can appear on a complaint for the same operation. It also takes over the servicing of loans from other companies, so some homeowners first see the name after a servicing transfer notice.',
    servicerSlug: 'newrez',
  },
  {
    slug: 'nj-housing-and-mortgage-finance-agency',
    name: 'NJ Housing and Mortgage Finance Agency',
    reportName: 'NJ Housing and Mortgage Finance Agency',
    kind: 'agency',
    appearsAs: ['New Jersey Housing and Mortgage Finance Agency'],
    who: 'The New Jersey Housing and Mortgage Finance Agency (NJHMFA) is the state agency behind many first-time homebuyer mortgages and down payment assistance loans. NJHMFA says its first mortgages are serviced by LoanCare and its second mortgages and down payment assistance loans by NJHMFA Servicing.',
    servicerSlug: 'njhmfa',
  },
  {
    slug: 'pennymac',
    name: 'PennyMac',
    reportName: 'PennyMac',
    kind: 'servicer',
    appearsAs: ['PennyMac Loan Services, LLC'],
    who: 'PennyMac Loan Services is one of the largest mortgage servicers in the country, with many government-backed and agency loans. As plaintiff it is usually also the company you pay, so its relief and assistance team handles workout applications.',
    servicerSlug: 'pennymac',
  },
  {
    slug: 'wells-fargo',
    name: 'Wells Fargo',
    reportName: 'Wells Fargo',
    kind: 'servicer',
    appearsAs: ['Wells Fargo Bank, N.A.'],
    who: 'Wells Fargo is both a lender and a mortgage servicer. When it forecloses in its own name, it is usually servicing the loan itself. Wells Fargo has also served as trustee for some mortgage trusts; if the complaint says “as Trustee,” read the trust name that follows and find the servicer separately.',
    servicerSlug: 'wells-fargo',
  },
  {
    slug: 'nationstar-mr-cooper',
    name: 'Nationstar Mortgage (Mr. Cooper)',
    reportName: 'Nationstar Mortgage (Mr. Cooper)',
    kind: 'servicer',
    appearsAs: ['Nationstar Mortgage LLC d/b/a Mr. Cooper', 'Nationstar Mortgage LLC'],
    who: 'Nationstar Mortgage is the company behind the Mr. Cooper brand, which has now joined Rocket Mortgage. Complaints often still use the Nationstar name. Mr. Cooper’s website has been retired and existing loans are managed through Rocket Mortgage with the same loan number.',
    servicerSlug: 'mr-cooper',
  },
  {
    slug: 'carrington-mortgage-services',
    name: 'Carrington Mortgage Services',
    reportName: 'Carrington Mortgage Services',
    kind: 'servicer',
    appearsAs: ['Carrington Mortgage Services, LLC'],
    who: 'Carrington Mortgage Services services loans for its own portfolio and for other owners. When it is the plaintiff, it is usually the company collecting your payments, and its mortgage assistance portal is where applications go.',
    servicerSlug: 'carrington',
  },
  {
    slug: 'rocket-mortgage',
    name: 'Rocket Mortgage',
    reportName: 'Rocket Mortgage',
    kind: 'servicer',
    appearsAs: ['Rocket Mortgage, LLC f/k/a Quicken Loans, LLC'],
    who: 'Rocket Mortgage (formerly Quicken Loans) is a lender and servicer, and it now also manages former Mr. Cooper loans. As plaintiff it is usually also the company you pay.',
    servicerSlug: 'rocket-mortgage',
  },
  {
    slug: 'mt-bank',
    name: 'M&T Bank',
    reportName: 'M&T Bank',
    kind: 'servicer',
    appearsAs: ['M&T Bank', 'Manufacturers and Traders Trust Company'],
    who: 'M&T Bank is a regional bank that services its own mortgages and, in some cases, loans for other owners such as Lakeview. As plaintiff it is usually also the company you pay.',
    servicerSlug: 'mt-bank',
  },
  {
    slug: 'freddie-mac',
    name: 'Freddie Mac',
    reportName: 'Freddie Mac',
    kind: 'agency',
    appearsAs: ['Federal Home Loan Mortgage Corporation'],
    who: 'Freddie Mac (the Federal Home Loan Mortgage Corporation) buys mortgages from lenders and owns a very large share of U.S. home loans. When it is the plaintiff, it owns your loan, but it does not run your account: a servicer approved by Freddie Mac collects payments and reviews workout applications under Freddie Mac’s rules. Freddie Mac offers a free online loan lookup to confirm whether it owns your loan.',
  },
];

export function getPlaintiff(slug: string): Plaintiff | undefined {
  return PLAINTIFFS.find((p) => p.slug === slug);
}

/** Scheduled NJ sheriff sales naming this plaintiff in the current report, or null. */
export function plaintiffCount(p: Plaintiff): number | null {
  return REPORT.topPlaintiffs.find((x) => x.name === p.reportName)?.count ?? null;
}

export const MERS_SERVICERID_URL = 'https://www.mers-servicerid.org/';
export const MERS_SERVICERID_PHONE = '888-679-6377';
