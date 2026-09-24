'use client';

import { useMemo, useRef, useState } from 'react';
import Link from 'next/link';
import { SHERIFF_SOURCES, SHERIFF_DATA_VERIFIED } from '../../../../lib/sheriff-sales';
import { countdown, parseDay, ADJOURNMENT_DAYS } from '../../../../lib/countdown';
import { trackEvent } from '../../../../lib/analytics';

/**
 * Spanish copy of app/tools/sheriff-sale-countdown/CountdownPlanner.tsx.
 * Same math (lib/countdown.ts), same county data (lib/sheriff-sales.ts), same
 * behavior, Spanish copy. Runs entirely in the browser: nothing is stored or
 * sent (one analytics event, no inputs). If the English planner's copy or
 * behavior changes, keep this one in sync.
 */

type Goal = 'keep' | 'sell' | 'unsure';

const fmt = (d: Date) => d.toLocaleDateString('es-US', { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' });
const todayLocal = () => {
  const n = new Date();
  return new Date(n.getFullYear(), n.getMonth(), n.getDate());
};

const MONTHS_EN = ['january', 'february', 'march', 'april', 'may', 'june', 'july', 'august', 'september', 'october', 'november', 'december'];

/** SHERIFF_DATA_VERIFIED is an English date ("August 27, 2026"); show it in
 *  Spanish without touching the shared lib. Falls back to the raw string. */
function verifiedEs(s: string): string {
  const m = /^([A-Za-z]+)\s+(\d{1,2}),\s*(\d{4})$/.exec(s.trim());
  const mi = m ? MONTHS_EN.indexOf(m[1].toLowerCase()) : -1;
  if (!m || mi < 0) return s;
  return new Date(Number(m[3]), mi, Number(m[2])).toLocaleDateString('es-US', { month: 'long', day: 'numeric', year: 'numeric' });
}

/** Some county entries publish the sale venue as "Sales held at: …". */
const addressEs = (a: string) => a.replace(/^Sales held at:\s*/, 'Las subastas se realizan en: ');

function Step({ n, title, children }: { n: number; title: string; children: React.ReactNode }) {
  return (
    <li className="flex gap-4">
      <span className="shrink-0 w-8 h-8 rounded-full bg-slate-900 text-white flex items-center justify-center font-bold text-sm print:border print:border-slate-900 print:bg-white print:text-slate-900">{n}</span>
      <div>
        <p className="font-bold text-slate-900">{title}</p>
        <div className="text-slate-600 leading-relaxed mt-1 text-[15px]">{children}</div>
      </div>
    </li>
  );
}

export default function PlanificadorCuentaRegresiva() {
  const [date, setDate] = useState('');
  const [county, setCounty] = useState('');
  const [used, setUsed] = useState('0');
  const [goal, setGoal] = useState<Goal>('unsure');
  const tracked = useRef(false);
  const touch = () => {
    if (!tracked.current) {
      tracked.current = true;
      trackEvent('calculator_use', { tool: 'cuenta-regresiva' });
    }
  };

  const src = SHERIFF_SOURCES.find((s) => s.slug === county);
  const sale = parseDay(date);
  const c = useMemo(() => (sale ? countdown(sale, todayLocal(), Number(used)) : null), [date, used]); // eslint-disable-line react-hooks/exhaustive-deps

  const tone =
    !c ? '' : c.phase === 'passed' ? 'bg-slate-100 border-slate-300' : c.phase === 'final' || c.phase === 'urgent' ? 'bg-red-50 border-red-300' : 'bg-amber-50 border-amber-300';

  const windowDaysLeft = c ? Math.max(0, 10 + c.daysLeft) : 0;

  let n = 0;
  const next = () => ++n;

  return (
    <div>
      <div className="rounded-2xl border border-slate-200 p-5 grid sm:grid-cols-2 gap-5 print:hidden">
        <div>
          <label htmlFor="saledate" className="block text-sm font-semibold text-slate-800 mb-1.5">Fecha de la subasta en su aviso o en la lista del condado</label>
          <input id="saledate" type="date" lang="es" value={date} onChange={(e) => { touch(); setDate(e.target.value); }}
            className="w-full px-4 py-3 border border-slate-300 rounded-lg text-lg font-semibold text-slate-900 focus:outline-none focus:ring-2 focus:ring-slate-900" />
        </div>
        <div>
          <label htmlFor="county" className="block text-sm font-semibold text-slate-800 mb-1.5">Condado</label>
          <select id="county" value={county} onChange={(e) => { touch(); setCounty(e.target.value); }}
            className="w-full px-4 py-3 border border-slate-300 rounded-lg text-lg text-slate-900 bg-white focus:outline-none focus:ring-2 focus:ring-slate-900">
            <option value="">Elija su condado…</option>
            {SHERIFF_SOURCES.map((s) => <option key={s.slug} value={s.slug}>Condado de {s.county}</option>)}
          </select>
        </div>
        <div>
          <label htmlFor="used" className="block text-sm font-semibold text-slate-800 mb-1.5">Aplazamientos que ya usó</label>
          <select id="used" value={used} onChange={(e) => { touch(); setUsed(e.target.value); }}
            className="w-full px-4 py-3 border border-slate-300 rounded-lg text-lg text-slate-900 bg-white focus:outline-none focus:ring-2 focus:ring-slate-900">
            <option value="0">Ninguno</option>
            <option value="1">Uno</option>
            <option value="2">Dos</option>
          </select>
          <p className="text-xs text-slate-500 mt-1">¿No está seguro? La lista de subastas del condado normalmente muestra el historial de aplazamientos.</p>
        </div>
        <div>
          <label htmlFor="goal" className="block text-sm font-semibold text-slate-800 mb-1.5">Lo que usted quiere</label>
          <select id="goal" value={goal} onChange={(e) => { touch(); setGoal(e.target.value as Goal); }}
            className="w-full px-4 py-3 border border-slate-300 rounded-lg text-lg text-slate-900 bg-white focus:outline-none focus:ring-2 focus:ring-slate-900">
            <option value="unsure">Todavía no estoy seguro</option>
            <option value="keep">Quedarme con la casa</option>
            <option value="sell">Vender y conservar mi plusvalía (equity)</option>
          </select>
        </div>
      </div>

      {!c ? (
        <p className="text-slate-500 text-sm mt-5">Escriba la fecha de su subasta para ver cuántos días le quedan y un plan paso a paso para hoy. Nada de lo que escriba sale de esta página.</p>
      ) : (
        <div className="mt-8" aria-live="polite">
          <div className={`rounded-2xl border-2 px-6 py-5 mb-8 ${tone}`}>
            {c.phase === 'passed' ? (
              <>
                <p className="font-serif text-2xl font-bold text-slate-900">Esa fecha ya pasó</p>
                <p className="text-slate-700 mt-1 leading-relaxed">
                  Las subastas se aplazan todo el tiempo, así que primero revise la lista del condado para ver si de verdad se
                  realizó. Si se realizó, los próximos días todavía pueden importar: generalmente hay un plazo de 10 días después
                  de la subasta antes de que se entregue la escritura del sheriff (se estima que termina el {fmt(c.postSaleWindowEnds)}
                  {windowDaysLeft > 0 ? `; quedan unos ${windowDaysLeft} día${windowDaysLeft === 1 ? '' : 's'}` : ''}).
                </p>
              </>
            ) : (
              <>
                <p className="font-serif text-4xl font-bold text-slate-900">
                  {c.daysLeft === 0 ? 'La subasta es hoy' : `Falta${c.daysLeft === 1 ? '' : 'n'} ${c.daysLeft} día${c.daysLeft === 1 ? '' : 's'} para la subasta`}
                </p>
                <p className="text-slate-700 mt-1">{sale && fmt(sale)}{src ? ` · Condado de ${src.county}` : ''}</p>
                {c.adjournmentsLeft > 0 ? (
                  <p className="text-slate-800 mt-3 leading-relaxed">
                    Generalmente todavía puede pedir <strong>{c.adjournmentsLeft === 1 ? 'un aplazamiento' : `${c.adjournmentsLeft} aplazamientos`}</strong> de
                    hasta {ADJOURNMENT_DAYS} días cada uno. Si los pide y se los conceden, la subasta podría pasar más o menos al{' '}
                    <strong>{fmt(c.latestWithAdjournments)}</strong>. El sheriff fija la nueva fecha real.
                  </p>
                ) : (
                  <p className="text-slate-800 mt-3 leading-relaxed">
                    Como ya usó los dos aplazamientos que da la ley, un aplazamiento adicional generalmente requiere una orden
                    del tribunal. Llame hoy mismo a Legal Services of New Jersey (Servicios Legales de Nueva Jersey,
                    1-888-576-5529) o a un abogado; no espere.
                  </p>
                )}
              </>
            )}
          </div>

          {src && (
            <div className="rounded-2xl border border-slate-200 px-6 py-5 mb-8">
              <p className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">Sheriff del Condado de {src.county}</p>
              {src.phone ? <p className="text-slate-900 font-bold text-lg">{src.phone}</p> : <p className="text-slate-600 text-sm">Teléfono no verificado; use el sitio web del sheriff que aparece abajo.</p>}
              {src.address && <p className="text-slate-600 text-sm mt-1">{addressEs(src.address)}</p>}
              <p className="mt-2 text-sm">
                <a href={src.salesUrl} target="_blank" rel="noopener noreferrer" className="text-slate-900 underline underline-offset-4 font-semibold">Lista oficial de subastas</a>
                {' · '}
                <a href={src.sheriffUrl} target="_blank" rel="noopener noreferrer" className="text-slate-900 underline underline-offset-4">Sitio web del sheriff</a>
                {' · '}
                <Link href={`/sheriff-sales/${src.slug}/`} className="text-slate-900 underline underline-offset-4">Guía del condado (en inglés)</Link>
              </p>
              <p className="text-slate-400 text-xs mt-2">Contactos verificados con fuentes oficiales del condado el {verifiedEs(SHERIFF_DATA_VERIFIED)}.</p>
            </div>
          )}

          <h2 className="font-serif text-2xl font-bold text-slate-900 mb-5">
            {c.phase === 'passed' ? 'Qué hacer ahora' : 'Su plan, empezando hoy'}
          </h2>
          <ol className="space-y-5 mb-8">
            {c.phase === 'passed' ? (
              <>
                <Step n={next()} title="Confirme qué pasó">Revise la lista oficial{src?.phone ? ` o llame al sheriff al ${src.phone}` : ''}. Pregunte si la subasta se realizó, se aplazó o se canceló.</Step>
                <Step n={next()} title="Si se vendió, pida ayuda legal gratuita ahora">Legal Services of New Jersey (Servicios Legales de Nueva Jersey): 1-888-576-5529. Pregunte por el plazo de 10 días antes de que se entregue la escritura.</Step>
                <Step n={next()} title="Averigüe si quedó dinero sobrante">Si la subasta dejó más de lo que usted debía, la diferencia generalmente es suya después de los gravámenes. <Link href="/es/herramientas/fondos-sobrantes/" className="underline underline-offset-4 font-semibold text-slate-900">Calculadora de fondos sobrantes</Link>.</Step>
                <Step n={next()} title="Conozca sus derechos mientras siga en la casa">Nadie puede cambiarle las cerraduras sin una orden del tribunal que ejecute el sheriff. <Link href="/es/guias/despues-de-la-subasta/" className="underline underline-offset-4 font-semibold text-slate-900">Guía de lo que pasa después de la subasta</Link>.</Step>
              </>
            ) : (
              <>
                {c.adjournmentsLeft > 0 && (
                  <Step n={next()} title={c.phase === 'final' ? 'Llame a la oficina del sheriff ahora mismo' : 'Pida el aplazamiento con tiempo, no la misma mañana'}>
                    Llame a la oficina del sheriff{src ? ` del Condado de ${src.county}` : ''}{src?.phone ? ` (${src.phone})` : ''}, pregunte cómo
                    reciben las solicitudes de aplazamiento y cuánto cuestan, y después confirme la nueva fecha en la lista oficial.
                    Generalmente no necesita un abogado para esto, y nunca debe pagarle a un tercero para que lo haga.
                  </Step>
                )}
                {goal !== 'sell' && (
                  <Step n={next()} title="Pida por escrito la posición de su banco">
                    Pídale a la compañía que administra su préstamo (servicer) una cotización de reinstalación por escrito y el
                    estado de cualquier revisión de modificación. Si hay una revisión en curso, pídale por escrito que aplace la
                    subasta mientras decide. Primero estime la cantidad con la{' '}
                    <Link href="/es/herramientas/ponerse-al-dia/" className="underline underline-offset-4 font-semibold text-slate-900">calculadora para ponerse al día</Link>.
                  </Step>
                )}
                {goal !== 'keep' && (
                  <Step n={next()} title="Calcule una venta antes de la subasta">
                    Vender antes de la subasta generalmente protege más de su plusvalía que la subasta. Una venta en efectivo
                    comúnmente cierra en 14 a 30 días; una venta con la casa listada en el mercado toma más tiempo. Compare las dos
                    con la{' '}
                    <Link href="/tools/net-proceeds/" className="underline underline-offset-4 font-semibold text-slate-900">calculadora de ganancias netas</Link>{' '}
                    (en inglés).
                  </Step>
                )}
                <Step n={next()} title="Llame hoy a la ayuda gratuita">
                  Un consejero de vivienda aprobado por HUD (800-569-4287) le puede ayudar con el banco, y Legal Services of New
                  Jersey (Servicios Legales de Nueva Jersey, 1-888-576-5529) ayuda a propietarios que califican por ingresos. Si
                  está pensando en una bancarrota del Capítulo 13, hable con un abogado de bancarrota antes de la fecha de la
                  subasta, no después.
                </Step>
                <Step n={next()} title="Anote estas fechas">
                  Subasta: {sale && fmt(sale)}.{c.adjournmentsLeft > 0 && <> Con los aplazamientos que le quedan, más o menos hasta el {fmt(c.latestWithAdjournments)}.</>}{' '}
                  Si la subasta se realiza, el plazo después de la venta generalmente es de unos 10 días (se estima hasta el {fmt(c.postSaleWindowEnds)} para esta fecha).
                </Step>
              </>
            )}
          </ol>

          <div className="flex flex-col sm:flex-row gap-3 print:hidden">
            <button type="button" onClick={() => window.print()} className="bg-slate-900 text-white px-6 py-3 rounded-lg font-bold hover:bg-slate-800 transition">
              Imprimir este plan
            </button>
            <Link href="/es/centro-de-mando/" className="border border-slate-300 text-slate-900 px-6 py-3 rounded-lg font-semibold text-center hover:bg-slate-50 transition">
              Armar mi plan completo gratis
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
