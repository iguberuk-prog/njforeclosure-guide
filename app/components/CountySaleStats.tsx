import Link from 'next/link';
import {
  REPORT,
  REPORT_URL,
  AS_OF_LONG,
  mediumDate,
  num,
  countyStats,
  notIncludedCounty,
  rankLabel,
  adjournedLine,
  contextSentence,
} from '../../lib/sheriff-report';

/**
 * "{County} County sheriff sales this month": the county's slice of the
 * monthly NJ Sheriff Sale Report, rendered at build time. Aggregates only:
 * no names, street addresses or sheriff numbers, towns only at >= townMinCell.
 */
export default function CountySaleStats({ slug, county, officialUrl }: { slug: string; county: string; officialUrl: string }) {
  const s = countyStats(slug);
  const heading = `${county} County sheriff sales this month`;

  if (!s) {
    // Mercer, Ocean, Somerset, Sussex, Warren: no CivilView list to count.
    if (!notIncludedCounty(slug)) return null;
    return (
      <div className="border border-slate-200 rounded-2xl p-6 mb-10">
        <h2 className="font-serif text-2xl font-bold text-slate-900 mb-2">{heading}</h2>
        <p className="text-slate-600 leading-relaxed">
          {county} County publishes its sheriff sale list outside CivilView, so it is not in our monthly count yet. For
          current sales and dates, use{' '}
          <a href={officialUrl} target="_blank" rel="noopener noreferrer" className="text-slate-900 underline underline-offset-4 font-semibold">
            the official {county} County list
          </a>
          .
        </p>
        <p className="text-sm mt-4">
          <Link href={REPORT_URL} className="text-slate-900 underline underline-offset-4 font-semibold">
            See the {REPORT.statewide.countiesIncluded} counties in our monthly NJ Sheriff Sale Report →
          </Link>
        </p>
      </div>
    );
  }

  const c = s.county;
  const tiles: { value: string; label: string }[] = [
    { value: num(c.openListings), label: 'scheduled sales listed now' },
    { value: num(c.salesNext30), label: 'with a sale date in the next 30 days' },
    { value: c.nextSale ? mediumDate(c.nextSale) : '—', label: 'next sale date on the list' },
  ];
  const adj = adjournedLine(s);
  if (adj) {
    tiles.push({
      value: s.adjournedCount !== null ? `${s.adjournedCount} of ${c.sampleSize}` : `${c.sampleAdjournedPct}%`,
      label: s.adjournedCount !== null ? 'sampled listings had been adjourned at least once' : `of ${c.sampleSize} sampled listings had been adjourned at least once`,
    });
  }
  if (c.soldOrCancelledLast30 !== null) {
    tiles.push({ value: num(c.soldOrCancelledLast30), label: 'sold or cancelled in the past 30 days' });
  } else {
    tiles.push({ value: num(c.salesNext60), label: 'with a sale date in the next 60 days' });
  }
  tiles.push({
    value: `${rankLabel(s)} of ${s.of}`,
    label: `counties in the report by scheduled sales${s.tiedWith.length ? ` (with ${s.tiedWith.join(', ')})` : ''}`,
  });

  const pt = c.plaintiffTypes;
  const ptTotal = pt.institutional + pt.tax + pt.hoa + pt.other;

  return (
    <div className="border border-slate-200 rounded-2xl p-6 mb-10">
      <p className="text-amber-700 text-xs font-semibold tracking-[0.2em] uppercase mb-2">From our NJ Sheriff Sale Report</p>
      <h2 className="font-serif text-2xl font-bold text-slate-900 mb-1">{heading}</h2>
      <p className="text-slate-500 text-sm mb-5">
        Updated <time dateTime={REPORT.asOfDate}>{AS_OF_LONG}</time>, from the county&apos;s public CivilView list.
      </p>

      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-6">
        {tiles.map((t) => (
          <div key={t.label} className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-4">
            <p className="font-serif text-2xl font-bold text-slate-900 tabular-nums">{t.value}</p>
            <p className="text-slate-600 text-xs leading-snug mt-1">{t.label}</p>
          </div>
        ))}
      </div>

      {s.towns.length > 0 && (
        <div className="overflow-x-auto border border-slate-200 rounded-xl mb-4">
          <table className="w-full text-sm">
            <caption className="text-left px-4 pt-3 pb-1 text-slate-600 text-xs">
              Scheduled sales spread across {num(c.distinctTowns)} {c.distinctTowns === 1 ? 'town' : 'towns'}. Towns with
              the most:
            </caption>
            <thead className="bg-slate-50 text-left text-slate-600">
              <tr>
                <th scope="col" className="px-4 py-2 font-semibold">Town</th>
                <th scope="col" className="px-4 py-2 font-semibold text-right">Scheduled</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-slate-700">
              {s.towns.map((t) => (
                <tr key={t.town}>
                  <td className="px-4 py-2 text-slate-900">{t.town}</td>
                  <td className="px-4 py-2 text-right tabular-nums font-semibold text-slate-900">{num(t.count)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {s.plaintiffs.length > 0 && (
        <p className="text-slate-600 text-sm leading-relaxed mb-3">
          <span className="font-semibold text-slate-900">Most frequent plaintiffs: </span>
          {s.plaintiffs.map((p) => `${p.name} (${num(p.count)})`).join(', ')}.
        </p>
      )}
      {ptTotal > 0 && (
        <p className="text-slate-600 text-sm leading-relaxed mb-3">
          {num(pt.institutional)} of {num(ptTotal)} listings were brought by banks, mortgage servicers or loan trustees
          {pt.hoa > 0 || pt.tax > 0
            ? `; ${[pt.hoa > 0 ? `${num(pt.hoa)} by condominium or homeowners associations` : '', pt.tax > 0 ? `${num(pt.tax)} by tax lien holders or municipalities` : ''].filter(Boolean).join(' and ')}`
            : ''}
          .
        </p>
      )}
      {c.soldOrCancelledLast30 === null && (
        <p className="text-slate-500 text-xs leading-relaxed mb-3">
          {county} County does not publish its sold or cancelled sales on CivilView, so that figure is not available.
        </p>
      )}

      <p className="text-slate-700 leading-relaxed mb-4">{contextSentence(s)}</p>

      <p className="text-slate-500 text-xs leading-relaxed mb-4">
        Counts are scheduled sheriff sales, not completed sales. &ldquo;Sold or cancelled&rdquo; combines both outcomes,
        as CivilView does. The adjournment figure comes from reading the status history of a small sample, so treat it as
        a rough indicator. The county&apos;s own list is always the authority for any individual sale.
      </p>

      <Link href={REPORT_URL} className="text-slate-900 underline underline-offset-4 font-semibold text-sm">
        See all {REPORT.statewide.countiesIncluded} counties in the NJ Sheriff Sale Report →
      </Link>
    </div>
  );
}
