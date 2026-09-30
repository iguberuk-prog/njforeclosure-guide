import Link from 'next/link';
import {
  REPORT,
  REPORT_URL,
  AS_OF_LONG_ES,
  mediumDateEs,
  num,
  countyStats,
  notIncludedCounty,
  rankLabelEs,
  adjournedLineEs,
  contextSentenceEs,
} from '../../../lib/sheriff-report';

/**
 * Spanish counterpart of app/components/CountySaleStats.tsx. Same numbers
 * from the monthly NJ Sheriff Sale Report, same rules: aggregates only, no
 * names, street addresses or sheriff numbers; towns only at >= townMinCell;
 * listings are SCHEDULED sales, never described as completed.
 */
export default function CountySaleStatsEs({ slug, county, officialUrl }: { slug: string; county: string; officialUrl: string }) {
  const s = countyStats(slug);
  const heading = `Subastas del sheriff en el condado de ${county} este mes`;

  if (!s) {
    if (!notIncludedCounty(slug)) return null;
    return (
      <div className="border border-slate-200 rounded-2xl p-6 mb-10">
        <h2 className="font-serif text-2xl font-bold text-slate-900 mb-2">{heading}</h2>
        <p className="text-slate-600 leading-relaxed">
          El condado de {county} publica su lista de subastas fuera de CivilView, así que todavía no está en nuestro conteo
          mensual. Para ver las subastas y fechas actuales, use{' '}
          <a href={officialUrl} target="_blank" rel="noopener noreferrer" className="text-slate-900 underline underline-offset-4 font-semibold">
            la lista oficial del condado de {county}
          </a>{' '}
          (en inglés).
        </p>
      </div>
    );
  }

  const c = s.county;
  const tiles: { value: string; label: string }[] = [
    { value: num(c.openListings), label: 'subastas programadas en la lista ahora' },
    { value: num(c.salesNext30), label: 'con fecha de subasta en los próximos 30 días' },
    { value: c.nextSale ? mediumDateEs(c.nextSale) : '—', label: 'próxima fecha de subasta en la lista' },
  ];
  if (adjournedLineEs(s)) {
    tiles.push({
      value: s.adjournedCount !== null ? `${s.adjournedCount} de ${c.sampleSize}` : `${c.sampleAdjournedPct}%`,
      label: 'anuncios de la muestra ya aplazados al menos una vez',
    });
  }
  if (c.soldOrCancelledLast30 !== null) {
    tiles.push({ value: num(c.soldOrCancelledLast30), label: 'vendidas o canceladas en los últimos 30 días' });
  } else {
    tiles.push({ value: num(c.salesNext60), label: 'con fecha de subasta en los próximos 60 días' });
  }
  tiles.push({
    value: `${rankLabelEs(s)} de ${s.of}`,
    label: `condados del informe por subastas programadas${s.tiedWith.length ? ` (con ${s.tiedWith.join(', ')})` : ''}`,
  });

  const pt = c.plaintiffTypes;
  const ptTotal = pt.institutional + pt.tax + pt.hoa + pt.other;

  return (
    <div className="border border-slate-200 rounded-2xl p-6 mb-10">
      <p className="text-amber-700 text-xs font-semibold tracking-[0.2em] uppercase mb-2">De nuestro informe de subastas del sheriff de NJ</p>
      <h2 className="font-serif text-2xl font-bold text-slate-900 mb-1">{heading}</h2>
      <p className="text-slate-500 text-sm mb-5">
        Actualizado el <time dateTime={REPORT.asOfDate}>{AS_OF_LONG_ES}</time>, con datos de la lista pública del condado en CivilView.
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
              Las subastas programadas están repartidas en {num(c.distinctTowns)} {c.distinctTowns === 1 ? 'localidad' : 'localidades'}. Las que tienen más:
            </caption>
            <thead className="bg-slate-50 text-left text-slate-600">
              <tr>
                <th scope="col" className="px-4 py-2 font-semibold">Localidad</th>
                <th scope="col" className="px-4 py-2 font-semibold text-right">Programadas</th>
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

      {ptTotal > 0 && (
        <p className="text-slate-600 text-sm leading-relaxed mb-3">
          {num(pt.institutional)} de {num(ptTotal)} casos fueron presentados por bancos, compañías de servicio hipotecario o fideicomisarios
          {pt.hoa > 0 || pt.tax > 0
            ? `; ${[pt.hoa > 0 ? `${num(pt.hoa)} por asociaciones de condominio o de propietarios` : '', pt.tax > 0 ? `${num(pt.tax)} por tenedores de gravámenes fiscales o municipios` : ''].filter(Boolean).join(' y ')}`
            : ''}
          .
        </p>
      )}

      <p className="text-slate-700 leading-relaxed mb-4">{contextSentenceEs(s)}</p>

      <p className="text-slate-500 text-xs leading-relaxed mb-4">
        Los números son subastas programadas, no subastas realizadas. &ldquo;Vendidas o canceladas&rdquo; combina ambos
        resultados, igual que CivilView. El dato de aplazamientos viene de revisar el historial de una muestra pequeña, así
        que es solo una referencia. La lista oficial del condado es siempre la autoridad para cada caso.
      </p>

      <Link href={REPORT_URL} className="text-slate-900 underline underline-offset-4 font-semibold text-sm">
        Ver el informe completo de {REPORT.statewide.countiesIncluded} condados (en inglés) →
      </Link>
    </div>
  );
}
