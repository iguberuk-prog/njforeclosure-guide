'use client';

import { useMemo, useState } from 'react';
import Link from 'next/link';
import { trackEvent } from '../../../lib/analytics';

/**
 * Mi Plan de Batalla: la versión en español del generador de planes. Todo
 * ocurre en el navegador; las fechas nunca se envían a nadie. Los cálculos
 * siguen las convenciones del sitio (35 días para responder, dos
 * aplazamientos de 30 días, 10 días de redención).
 */

type Stage = 'atrasado' | 'noi' | 'demandado' | 'sentencia' | 'venta';

const STAGE_OPTS: { v: Stage; label: string }[] = [
  { v: 'atrasado', label: 'Tengo pagos atrasados — nada presentado' },
  { v: 'noi', label: 'Recibí el Aviso de Intención (NOI)' },
  { v: 'demandado', label: 'Me entregaron la demanda del tribunal' },
  { v: 'sentencia', label: 'Entraron la sentencia final' },
  { v: 'venta', label: 'Hay fecha de venta del sheriff' },
];

function addDays(iso: string, days: number): Date {
  const d = new Date(iso + 'T12:00:00');
  d.setDate(d.getDate() + days);
  return d;
}
const fmt = (d: Date) => d.toLocaleDateString('es-US', { weekday: 'short', month: 'long', day: 'numeric', year: 'numeric' });

interface Item { cuando: string; que: string; como: string; urgente?: boolean }

export default function MiPlanClient() {
  const [stage, setStage] = useState<Stage>('demandado');
  const [servedDate, setServedDate] = useState('');
  const [saleDate, setSaleDate] = useState('');
  const [nombre, setNombre] = useState('');
  const hoy = new Date();

  const plan = useMemo<Item[]>(() => {
    const items: Item[] = [];
    items.push({ cuando: 'Esta semana', que: 'Llame a su banco y diga "loss mitigation" — pida la solicitud', como: 'Una llamada gratis abre la modificación, la tolerancia y el plan de pagos. Anote fecha, nombre y número de referencia.' });
    items.push({ cuando: 'Esta semana', que: 'Reserve un consejero HUD gratuito (muchos hablan español)', como: '800-569-4287 o hud.gov. Gratis por diseño federal; arman todo el paquete con usted.' });
    items.push({ cuando: 'Esta semana', que: 'Tres números en una página: valor de la casa · deuda total · atraso', como: 'Esos números deciden cuál de las 7 opciones le queda. Calculadora gratis: njforeclosureguide.org/tools/net-proceeds' });

    if (stage === 'noi') {
      items.push({ cuando: 'Dentro de los 30 días del aviso', que: 'La ventana del NOI: la cura más barata de todo el proceso', como: 'El aviso debe decir la cantidad exacta para ponerse al día. Pagarla en esta ventana generalmente termina el asunto — sin honorarios legales todavía.', urgente: true });
    }
    if (stage === 'demandado' || stage === 'noi' || stage === 'atrasado') {
      if (servedDate) {
        items.push({ cuando: `Antes del ${fmt(addDays(servedDate, 35))} (día 35)`, que: 'PRESENTE SU RESPUESTA — el plazo más importante del caso', como: 'Formularios gratis: njcourts.gov. Abogados gratis si califica por ingresos: LSNJ 1-888-576-5529. Presentar a tiempo mantiene todas las opciones abiertas.', urgente: true });
        items.push({ cuando: 'Con su respuesta', que: 'Pida la mediación GRATUITA de NJ', como: 'Dueños elegibles que ocupan su casa: un mediador y un representante del banco con autoridad real, en una mesa. No cuesta nada.' });
      } else if (stage === 'demandado') {
        items.push({ cuando: '35 días desde la entrega', que: 'PRESENTE SU RESPUESTA — ponga arriba su fecha de entrega para el día exacto', como: 'Formularios: njcourts.gov · LSNJ 1-888-576-5529 (gratis si califica).', urgente: true });
      }
    }
    if (stage === 'sentencia' || stage === 'venta') {
      items.push({ cuando: 'Ahora', que: 'Llame a la unidad de ejecuciones del sheriff de su condado', como: 'Dos preguntas: ¿hay venta programada?, y ¿cuál es el procedimiento exacto de aplazamiento, su plazo y su costo? Reglas por condado: njforeclosureguide.org/sheriff-sales', urgente: true });
      items.push({ cuando: 'Ahora', que: 'Consiga una valoración real — sentencia vs. valor de mercado es todo el juego', como: 'Si hay plusvalía, una venta suya antes de la subasta paga la sentencia y le entrega la diferencia.' });
    }
    if (stage === 'venta' && saleDate) {
      items.push({ cuando: `Mucho antes del ${fmt(new Date(saleDate + 'T12:00:00'))}`, que: 'Use sus aplazamientos con propósito', como: 'NJ generalmente permite dos aplazamientos suyos de hasta 30 días cada uno — decida qué compra cada uno (un cierre, un acuerdo) el día que lo pida.', urgente: true });
      items.push({ cuando: `Hasta el ${fmt(addDays(saleDate, 10))} (si la venta ocurre)`, que: 'Ventana de redención de 10 días', como: 'Pagar la sentencia completa dentro de los 10 días deshace la venta. Y si las ofertas superaron la deuda, el excedente es suyo: njforeclosureguide.org/guides/surplus-funds' });
    }
    items.push({ cuando: 'Siempre', que: 'No pague a nadie por adelantado. No firme su escritura. Quédese en su casa.', como: 'Los cobros por adelantado para alivio hipotecario son generalmente ilegales. Usted tiene derecho a vivir en su casa durante todo el proceso judicial.' });
    return items;
  }, [stage, servedDate, saleDate]);

  return (
    <div lang="es">
      <div className="print:hidden rounded-2xl border-2 border-slate-200 px-6 py-6 mb-8">
        <p className="font-bold text-slate-900 mb-1">Arme su plan</p>
        <p className="text-slate-500 text-xs mb-4">Todo ocurre en su navegador — estas fechas no se envían a nadie, ni a nosotros.</p>
        <div className="grid sm:grid-cols-2 gap-4">
          <label className="block">
            <span className="text-xs font-semibold text-slate-600">¿Dónde está en el proceso?</span>
            <select value={stage} onChange={(e) => setStage(e.target.value as Stage)} className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2.5 text-sm bg-white">
              {STAGE_OPTS.map((o) => <option key={o.v} value={o.v}>{o.label}</option>)}
            </select>
          </label>
          <label className="block">
            <span className="text-xs font-semibold text-slate-600">Nombre para el póster (opcional)</span>
            <input value={nombre} onChange={(e) => setNombre(e.target.value)} placeholder="p. ej. María" className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2.5 text-sm" />
          </label>
          {(stage === 'demandado' || stage === 'noi' || stage === 'atrasado') && (
            <label className="block">
              <span className="text-xs font-semibold text-slate-600">Fecha en que le entregaron la demanda (si ocurrió)</span>
              <input type="date" value={servedDate} onChange={(e) => setServedDate(e.target.value)} className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2.5 text-sm" />
            </label>
          )}
          {stage === 'venta' && (
            <label className="block">
              <span className="text-xs font-semibold text-slate-600">Fecha de la venta del sheriff</span>
              <input type="date" value={saleDate} onChange={(e) => setSaleDate(e.target.value)} className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2.5 text-sm" />
            </label>
          )}
        </div>
        <button onClick={() => { trackEvent('mi_plan_print', { stage }); window.print(); }} className="mt-5 bg-slate-900 text-white px-8 py-3 rounded-lg font-bold hover:bg-slate-800 transition">
          Imprimir Mi Plan (o Guardar como PDF)
        </button>
      </div>

      <div className="rounded-2xl border-2 border-slate-900 overflow-hidden print:border print:rounded-none" id="poster">
        <div className="bg-slate-950 text-white px-6 py-5 flex items-baseline justify-between gap-4 flex-wrap">
          <div>
            <p className="text-amber-400 text-[10px] font-bold tracking-[0.2em] uppercase">
              {nombre ? `El plan de ${nombre}` : 'Mi Plan de Batalla'}
            </p>
            <p className="font-serif text-2xl font-bold">Una página. En orden. En el refrigerador.</p>
          </div>
          <p className="text-slate-400 text-xs">Hecho el {hoy.toLocaleDateString('es-US', { month: 'long', day: 'numeric', year: 'numeric' })} · njforeclosureguide.org/es</p>
        </div>
        <div className="bg-white px-6 py-5">
          <table className="w-full">
            <tbody>
              {plan.map((p, i) => (
                <tr key={i} className="border-b border-slate-100 last:border-0 align-top">
                  <td className="py-3 pr-4 whitespace-nowrap">
                    <span className={`inline-block text-[11px] font-bold px-2.5 py-1 rounded-md ${p.urgente ? 'bg-amber-100 text-amber-900' : 'bg-slate-100 text-slate-600'}`}>{p.cuando}</span>
                  </td>
                  <td className="py-3">
                    <p className="text-sm font-bold text-slate-900">{p.que}</p>
                    <p className="text-slate-500 text-xs mt-1 leading-relaxed">{p.como}</p>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="mt-4 grid sm:grid-cols-3 gap-2 text-center">
            {[
              ['Consejeros gratis', '800-569-4287'],
              ['Abogados gratis (si califica)', '1-888-576-5529'],
              ['Todo gratis', 'njforeclosureguide.org/es'],
            ].map(([a, b]) => (
              <div key={a} className="rounded-lg bg-slate-50 border border-slate-200 px-3 py-2">
                <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400">{a}</p>
                <p className="text-sm font-bold text-slate-900">{b}</p>
              </div>
            ))}
          </div>
          <p className="text-slate-400 text-[10px] leading-relaxed mt-4">
            Información educativa, no asesoría legal. Los plazos se calculan con las fechas que
            usted puso, usando las reglas estándar de NJ — sus propios documentos del tribunal
            controlan sus fechas reales. Confírmelas con un abogado con licencia en NJ o un
            consejero HUD. Sin promesas sobre el resultado de ningún caso.
          </p>
        </div>
      </div>

      <div className="print:hidden mt-8 text-center">
        <Link href="/es/centro-de-mando" className="text-slate-600 underline underline-offset-4 text-sm hover:text-slate-900">
          ¿No está seguro de su etapa? Abra su Centro de Mando →
        </Link>
      </div>

      <style>{`
        @media print {
          header, footer, nav { display: none !important; }
          body * { visibility: hidden; }
          #poster, #poster * { visibility: visible; }
          #poster { position: absolute; left: 0; top: 0; width: 100%; }
        }
      `}</style>
    </div>
  );
}
