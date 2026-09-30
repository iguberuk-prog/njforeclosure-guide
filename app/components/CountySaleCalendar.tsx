import Link from 'next/link';
import { countyCalendar, calDay, CAL, CAL_AS_OF, CAL_AS_OF_ES } from '../../lib/sale-calendar';

/**
 * "Sheriff sale calendar: next 3 weeks" for one county. Counts per sale date
 * from the weekly calendar refresh; aggregates only.
 */
export default function CountySaleCalendar({ slug, county, lang = 'en' }: { slug: string; county: string; lang?: 'en' | 'es' }) {
  const days = countyCalendar(slug);
  if (!days) return null;
  const es = lang === 'es';
  const total = days.reduce((n, d) => n + d.count, 0);
  return (
    <div className="border border-slate-200 rounded-2xl p-6 mb-10">
      <p className="text-amber-700 text-xs font-semibold tracking-[0.2em] uppercase mb-2">{es ? 'Calendario semanal' : 'Weekly calendar'}</p>
      <h2 className="font-serif text-2xl font-bold text-slate-900 mb-1">
        {es ? `Calendario de subastas del condado de ${county}: próximas 3 semanas` : `${county} County sheriff sale calendar: next 3 weeks`}
      </h2>
      <p className="text-slate-500 text-sm mb-5">
        {es ? `Actualizado el ${CAL_AS_OF_ES}. ` : `Updated ${CAL_AS_OF}. `}
        {es
          ? `${total} subastas programadas en los próximos ${CAL.windowDays} días.`
          : `${total} sale${total === 1 ? '' : 's'} scheduled in the next ${CAL.windowDays} days.`}
      </p>
      {days.length > 0 ? (
        <ul className="grid grid-cols-2 sm:grid-cols-3 gap-2 mb-4">
          {days.map((d) => (
            <li key={d.date} className="rounded-xl border border-slate-200 bg-slate-50 px-3 py-2.5">
              <p className="text-xs text-slate-500">{calDay(d.date, es ? 'es-US' : 'en-US')}</p>
              <p className="font-serif text-xl font-bold text-slate-900 tabular-nums">
                {d.count} <span className="text-xs font-sans font-normal text-slate-500">{es ? (d.count === 1 ? 'subasta' : 'subastas') : d.count === 1 ? 'sale' : 'sales'}</span>
              </p>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-slate-600 mb-4">{es ? 'No hay subastas programadas en este período según la lista oficial.' : 'No sales are scheduled in this window on the official list.'}</p>
      )}
      <p className="text-slate-500 text-xs leading-relaxed">
        {es
          ? 'Son subastas programadas; muchas se aplazan o se resuelven antes. La lista oficial del condado es la autoridad para cada caso.'
          : 'These are scheduled sales; many are adjourned or resolved before the auction. The county’s official list is the authority for any individual sale.'}{' '}
        {!es && (
          <Link href="/sheriff-sales/calendar/" className="underline underline-offset-2 font-semibold text-slate-700">
            Statewide calendar
          </Link>
        )}
      </p>
    </div>
  );
}
