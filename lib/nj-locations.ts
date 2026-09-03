export interface CountyData {
  name: string;
  slug: string;
  seat: string;
  towns: string[];
}

export const NJ_COUNTIES: CountyData[] = [
  { name: 'Atlantic', slug: 'atlantic-county', seat: 'Mays Landing', towns: ['Atlantic City', 'Pleasantville', 'Egg Harbor Township', 'Galloway', 'Hammonton', 'Somers Point'] },
  { name: 'Bergen', slug: 'bergen-county', seat: 'Hackensack', towns: ['Hackensack', 'Teaneck', 'Fort Lee', 'Garfield', 'Englewood', 'Bergenfield', 'Lodi', 'Cliffside Park'] },
  { name: 'Burlington', slug: 'burlington-county', seat: 'Mount Holly', towns: ['Mount Holly', 'Willingboro', 'Evesham', 'Pemberton', 'Maple Shade'] },
  { name: 'Camden', slug: 'camden-county', seat: 'Camden', towns: ['Camden', 'Cherry Hill', 'Gloucester Township', 'Winslow', 'Pennsauken', 'Lindenwold'] },
  { name: 'Cape May', slug: 'cape-may-county', seat: 'Cape May Court House', towns: ['Ocean City', 'Wildwood', 'Lower Township'] },
  { name: 'Cumberland', slug: 'cumberland-county', seat: 'Bridgeton', towns: ['Vineland', 'Millville', 'Bridgeton'] },
  { name: 'Essex', slug: 'essex-county', seat: 'Newark', towns: ['Newark', 'East Orange', 'Irvington', 'Bloomfield', 'Montclair', 'West Orange', 'Belleville', 'Nutley', 'Orange', 'Maplewood', 'South Orange'] },
  { name: 'Gloucester', slug: 'gloucester-county', seat: 'Woodbury', towns: ['Woodbury', 'Glassboro', 'Deptford', 'Washington Township', 'Paulsboro'] },
  { name: 'Hudson', slug: 'hudson-county', seat: 'Jersey City', towns: ['Jersey City', 'Bayonne', 'Union City', 'Hoboken', 'North Bergen', 'Kearny', 'West New York', 'Harrison'] },
  { name: 'Hunterdon', slug: 'hunterdon-county', seat: 'Flemington', towns: ['Flemington', 'Raritan Township', 'Lambertville'] },
  { name: 'Mercer', slug: 'mercer-county', seat: 'Trenton', towns: ['Trenton', 'Hamilton', 'Ewing', 'Lawrence', 'East Windsor'] },
  { name: 'Middlesex', slug: 'middlesex-county', seat: 'New Brunswick', towns: ['New Brunswick', 'Perth Amboy', 'Woodbridge', 'Edison', 'Sayreville', 'Old Bridge', 'Piscataway', 'Carteret'] },
  { name: 'Monmouth', slug: 'monmouth-county', seat: 'Freehold', towns: ['Freehold', 'Long Branch', 'Neptune', 'Middletown', 'Asbury Park', 'Howell', 'Keansburg', 'Red Bank'] },
  { name: 'Morris', slug: 'morris-county', seat: 'Morristown', towns: ['Morristown', 'Dover', 'Parsippany', 'Mount Olive', 'Madison', 'Randolph'] },
  { name: 'Ocean', slug: 'ocean-county', seat: 'Toms River', towns: ['Toms River', 'Lakewood', 'Brick', 'Jackson', 'Manchester', 'Barnegat'] },
  { name: 'Passaic', slug: 'passaic-county', seat: 'Paterson', towns: ['Paterson', 'Clifton', 'Passaic', 'Wayne', 'West Milford', 'Haledon'] },
  { name: 'Salem', slug: 'salem-county', seat: 'Salem', towns: ['Salem', 'Pennsville', 'Carneys Point', 'Penns Grove'] },
  { name: 'Somerset', slug: 'somerset-county', seat: 'Somerville', towns: ['Somerville', 'Franklin', 'Bridgewater', 'North Plainfield', 'Manville'] },
  { name: 'Sussex', slug: 'sussex-county', seat: 'Newton', towns: ['Newton', 'Vernon', 'Hopatcong', 'Sparta'] },
  { name: 'Union', slug: 'union-county', seat: 'Elizabeth', towns: ['Elizabeth', 'Union', 'Plainfield', 'Linden', 'Rahway', 'Westfield', 'Hillside', 'Roselle'] },
  { name: 'Warren', slug: 'warren-county', seat: 'Belvidere', towns: ['Phillipsburg', 'Hackettstown', 'Washington'] },
];

export function townSlug(town: string): string {
  return town.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
}

export interface LocationEntry {
  type: 'county' | 'town';
  slug: string;
  name: string;
  countyName: string;
  countySeat: string;
  countySlug: string;
  towns: string[];
}

export function getAllLocations(): LocationEntry[] {
  const entries: LocationEntry[] = [];
  const seenTowns = new Set<string>();
  for (const county of NJ_COUNTIES) {
    entries.push({
      type: 'county',
      slug: county.slug,
      name: `${county.name} County`,
      countyName: county.name,
      countySeat: county.seat,
      countySlug: county.slug,
      towns: county.towns,
    });
    for (const town of county.towns) {
      const slug = townSlug(town);
      if (seenTowns.has(slug)) continue;
      seenTowns.add(slug);
      entries.push({
        type: 'town',
        slug,
        name: town,
        countyName: county.name,
        countySeat: county.seat,
        countySlug: county.slug,
        towns: county.towns,
      });
    }
  }
  return entries;
}

export function getLocation(slug: string): LocationEntry | undefined {
  return getAllLocations().find((e) => e.slug === slug);
}
