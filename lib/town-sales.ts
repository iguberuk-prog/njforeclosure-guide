/**
 * Town-level sheriff sale pages: /sheriff-sales/<county>/<town>/.
 *
 * The list is FIXED (curated from the towns with the most scheduled sales in
 * the monthly NJ Sheriff Sale Report) so URLs stay stable month to month; the
 * numbers on each page come from data/sheriff-report/latest.json.
 *
 * Rules, same as the report:
 *  - Aggregates only. No names, street addresses or sheriff numbers.
 *  - A town count below REPORT.method.townMinCell is never shown; the page
 *    says "fewer than N" instead.
 *  - Counts are listings whose address on the county list shows that town
 *    name. Mailing names do not always follow municipal borders; pages say so.
 *  - Postal names that clearly span several municipalities (Sicklerville,
 *    Sewell, Williamstown, Woodbury, Rockaway) are left out on purpose.
 *  - Only CivilView counties (the ones the report counts) get town pages.
 */
import { REPORT, type ReportCounty, type ReportTown } from './sheriff-report';

export interface TownPage {
  slug: string;
  town: string;
  countySlug: string;
  county: string;
}

const T = (town: string, county: string): TownPage => ({
  slug: town.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, ''),
  town,
  county,
  countySlug: `${county.toLowerCase().replace(/\s+/g, '-')}-county`,
});

export const TOWN_PAGES: TownPage[] = [
  T('Newark', 'Essex'),
  T('Irvington', 'Essex'),
  T('East Orange', 'Essex'),
  T('Orange', 'Essex'),
  T('West Orange', 'Essex'),
  T('Jersey City', 'Hudson'),
  T('Paterson', 'Passaic'),
  T('Clifton', 'Passaic'),
  T('Wayne', 'Passaic'),
  T('Passaic', 'Passaic'),
  T('West Milford', 'Passaic'),
  T('Camden', 'Camden'),
  T('Pennsauken', 'Camden'),
  T('Gloucester City', 'Camden'),
  T('Plainfield', 'Union'),
  T('Union', 'Union'),
  T('Linden', 'Union'),
  T('Rahway', 'Union'),
  T('Edison', 'Middlesex'),
  T('New Brunswick', 'Middlesex'),
  T('Piscataway', 'Middlesex'),
  T('Woodbridge', 'Middlesex'),
  T('Galloway Township', 'Atlantic'),
  T('Egg Harbor Township', 'Atlantic'),
  T('Atlantic City', 'Atlantic'),
  T('Pleasantville', 'Atlantic'),
  T('Deptford', 'Gloucester'),
  T('Glassboro', 'Gloucester'),
  T('Millville', 'Cumberland'),
  T('Bridgeton', 'Cumberland'),
  T('Vineland', 'Cumberland'),
  T('Neptune', 'Monmouth'),
  T('Middletown', 'Monmouth'),
  T('Pennsville', 'Salem'),
];

export function getTownPage(countySlug: string, townSlug: string): TownPage | undefined {
  return TOWN_PAGES.find((t) => t.countySlug === countySlug && t.slug === townSlug);
}

export function townPagesForCounty(countySlug: string): TownPage[] {
  return TOWN_PAGES.filter((t) => t.countySlug === countySlug);
}

const same = (a: string, b: string) => a.trim().toLowerCase() === b.trim().toLowerCase();

export interface TownStats {
  county: ReportCounty | null;
  /** null when the town is below the small-cell floor or not in this month's data. */
  row: ReportTown | null;
  /** Share of the county's scheduled listings, whole percent. */
  shareOfCounty: number | null;
  /** 1-based position among the county's towns, when the full list is available. */
  rankInCounty: number | null;
  /** 1-based position among the statewide top towns, when listed there. */
  rankStatewide: number | null;
  minCell: number;
}

export function townStats(t: TownPage): TownStats {
  const county = REPORT.counties.find((c) => c.slug === t.countySlug) ?? null;
  const minCell = REPORT.method.townMinCell;
  if (!county) return { county: null, row: null, shareOfCounty: null, rankInCounty: null, rankStatewide: null, minCell };
  const list: ReportTown[] = county.towns ?? county.topTowns;
  const idx = list.findIndex((x) => same(x.town, t.town));
  const row = idx >= 0 && list[idx].count >= minCell ? list[idx] : null;
  const stateIdx = REPORT.topTowns.findIndex((x) => same(x.town, t.town) && x.countySlug === t.countySlug);
  return {
    county,
    row,
    shareOfCounty: row && county.openListings ? Math.round((100 * row.count) / county.openListings) : null,
    rankInCounty: row && county.towns ? idx + 1 : row && idx >= 0 && idx < 5 ? idx + 1 : null,
    rankStatewide: stateIdx >= 0 ? stateIdx + 1 : null,
    minCell,
  };
}

/** Other towns in the same county with their counts (for the "nearby" table). */
export function countyTownTable(countySlug: string): ReportTown[] {
  const county = REPORT.counties.find((c) => c.slug === countySlug);
  if (!county) return [];
  return (county.towns ?? county.topTowns).filter((x) => x.count >= REPORT.method.townMinCell);
}

/** Blog posts that cover general foreclosure help in a town (lib/blog-towns*.ts). */
export const TOWN_HELP_POSTS: Record<string, string> = {
  newark: 'foreclosure-help-newark-nj',
  paterson: 'foreclosure-help-paterson-nj',
  'jersey-city': 'foreclosure-help-jersey-city-nj',
  camden: 'foreclosure-help-camden-nj',
  irvington: 'foreclosure-help-irvington-nj',
  plainfield: 'foreclosure-help-plainfield-nj',
  passaic: 'foreclosure-help-passaic-city-nj',
  vineland: 'foreclosure-help-vineland-nj',
  clifton: 'foreclosure-help-clifton-nj',
  woodbridge: 'foreclosure-help-woodbridge-nj',
  edison: 'foreclosure-help-edison-nj',
  middletown: 'foreclosure-help-middletown-nj',
  neptune: 'foreclosure-help-neptune-nj',
  'east-orange': 'foreclosure-help-east-orange-nj',
  'atlantic-city': 'foreclosure-help-atlantic-city-nj',
  'new-brunswick': 'foreclosure-help-new-brunswick-nj',
};
