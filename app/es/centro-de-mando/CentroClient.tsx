'use client';

import { useEffect, useMemo, useState } from 'react';
import Link from 'next/link';
import { trackEvent } from '../../../lib/analytics';
import { SHERIFF_SOURCES } from '../../../lib/sheriff-sales';
import { helpFor } from '../../../lib/local-help';
import { NJ_COUNTIES } from '../../../lib/nj-locations';

/**
 * El Centro de Mando: la versión en español del Command Center. Tres
 * respuestas construyen un panel personal. Todo ocurre en el navegador —
 * nada se envía a ningún servidor. Los datos legales siguen las
 * convenciones del sitio (NOI 30 días, 35 días para responder, mediación
 * gratuita, cura hasta la sentencia final, dos aplazamientos de 30 días).
 */

type Goal = 'quedarme' | 'vender' | 'tiempo' | 'nose';

const STAGES: { v: string; label: string; brief: string; puerta: string; cierra: string }[] = [
  {
    v: 'atrasado', label: 'Pagos atrasados — nada presentado',
    brief: 'No existe demanda. La mayoría de los bancos no presentan hasta ~120 días de atraso. Este es el tramo más barato y más arreglable de todo el proceso.',
    puerta: 'Todas las opciones: plan de pagos, tolerancia, modificación, refinanciamiento, o una venta sin prisa. Reinstalar cuesta lo mínimo — sin honorarios legales todavía.',
    cierra: 'La ventana tranquila: alrededor de los 120 días de atraso, el banco puede enviar el aviso formal y demandar.',
  },
  {
    v: 'noi', label: 'Recibí el Aviso de Intención (NOI)',
    brief: 'Es una advertencia exigida por ley, no una demanda — al menos 30 días antes de que puedan presentar algo. Debe decir la cantidad exacta para ponerse al día.',
    puerta: 'Curar durante la ventana generalmente termina el asunto antes de que exista un caso. Todo el menú de ayuda sigue abierto, sin honorarios legales.',
    cierra: 'Pasados los 30 días, el banco puede presentar la demanda y los honorarios empiezan a acumularse sobre la deuda.',
  },
  {
    v: 'demandado', label: 'Me entregaron la demanda',
    brief: 'Usted es ahora el demandado en el tribunal — y tiene el derecho legal de vivir en su casa durante todo el proceso. Generalmente tiene 35 días para responder.',
    puerta: 'Responder — la jugada más importante del caso. Mantiene su voz, frena el calendario, y desbloquea la mediación GRATUITA del estado.',
    cierra: 'El día 35. El silencio manda el caso a procesamiento por defecto, al ritmo del banco.',
  },
  {
    v: 'encurso', label: 'El caso está en curso',
    brief: 'Respondido: recibe aviso de cada moción y el calendario es más lento. En default: el caso avanza administrativamente — serio, pero no final.',
    puerta: 'Un default a veces se puede anular por causa justificada. El derecho a curar el atraso corre hasta la sentencia final. Las solicitudes completas llevan protecciones.',
    cierra: 'La moción de sentencia final — con aviso a usted y una ventana para objetar las cantidades.',
  },
  {
    v: 'sentencia', label: 'Sentencia final entrada',
    brief: 'El tribunal fijó la deuda total y autorizó una venta del sheriff. Usted sigue siendo el dueño y sigue viviendo en su casa legalmente.',
    puerta: 'Vender antes de la subasta (paga la sentencia y el resto es suyo), aplazamientos de la venta, y loss mitigation todavía corre.',
    cierra: 'El writ de ejecución pasa el caso al sheriff del condado para programar la venta.',
  },
  {
    v: 'venta', label: 'Hay fecha de venta del sheriff',
    brief: 'Las fechas se mueven constantemente — los bancos aplazan sus propias ventas todo el tiempo. Verifique cada semana contra la lista oficial del condado.',
    puerta: 'Generalmente dos aplazamientos suyos de hasta 30 días cada uno, una venta suya que cierre primero, y 10 días de redención incluso después de la subasta.',
    cierra: 'La subasta misma. Todo lo que sigue es más estrecho.',
  },
  {
    v: 'vendida', label: 'La venta ya ocurrió',
    brief: 'Nadie lo saca el día de la venta. Hay 10 días de redención, luego la escritura, y la posesión cambia solo por un proceso judicial con aviso.',
    puerta: 'Redención (10 días), fondos excedentes si la subasta superó la deuda (son suyos, en el tribunal), y términos negociables de salida — dinero por llaves, por escrito.',
    cierra: 'El tiempo mismo: las direcciones se pierden y los reclamos se complican. Cobre lo suyo pronto.',
  },
];

const GOALS: { v: Goal; label: string }[] = [
  { v: 'quedarme', label: 'Quedarme con mi casa' },
  { v: 'vender', label: 'Vender y proteger mi plusvalía' },
  { v: 'tiempo', label: 'Necesito más tiempo' },
  { v: 'nose', label: 'Todavía no sé' },
];

const PLAYS: Record<Goal, { t: string; d: string; h: string }[]> = {
  quedarme: [
    { t: 'Loss mitigation, completa y temprana', d: 'Una solicitud gratuita abre modificación, tolerancia y plan de pagos. Un consejero HUD (800-569-4287) la arma con usted, gratis y en español.', h: '/es/opciones' },
    { t: 'La mediación gratuita', d: 'Dueños que ocupan su casa y califican: un mediador neutral y un representante del banco con autoridad real, en una mesa. Se pide al responder.', h: '/es/blog/la-mediacion-gratuita-de-nj' },
    { t: 'Reinstalar / curar', d: 'Ponerse al día generalmente termina el caso — el derecho corre hasta la sentencia final. Pida la cotización exacta por escrito.', h: '/es/preguntas' },
  ],
  vender: [
    { t: 'Su número de plusvalía, primero', d: 'Valor de mercado menos la deuda real. Ese número decide todo lo que sigue.', h: '/es/opciones' },
    { t: 'Una venta que le gane a la subasta', d: 'Un cierre antes de la fecha paga la sentencia y le entrega la diferencia a precio de mercado, no de subasta.', h: '/es/blog/vender-antes-de-la-subasta' },
    { t: 'Velocidad vs. precio, honestamente', d: 'El efectivo cierra en semanas por debajo del mercado; una venta listada trae más con más pista. Compare contra SU número, nunca contra el miedo.', h: '/es/opciones' },
  ],
  tiempo: [
    { t: 'La respuesta (si está en los 35 días)', d: 'Presentarla a tiempo es la palanca de tiempo más grande del caso — los casos contestados avanzan mucho más lento.', h: '/es/blog/cuanto-tiempo-tengo-35-dias' },
    { t: 'Aplazamientos de la venta', d: 'Generalmente dos de hasta 30 días cada uno a través del sheriff del condado, más los que el propio banco hace durante revisiones activas.', h: '/es/blog/cuanto-tiempo-tengo-35-dias' },
    { t: 'Una solicitud completa en revisión', d: 'Las reglas federales restringen avanzar la ejecución sobre una solicitud completa presentada a tiempo. "Completa", por escrito, es el escudo.', h: '/es/blog/carta-de-negacion-de-loss-mitigation' },
  ],
  nose: [
    { t: 'La evaluación de 2 minutos', d: 'Unas preguntas y las 7 opciones quedan ordenadas para su caso, con matemáticas honestas. En español.', h: '/es/evaluacion' },
    { t: 'El blog en español', d: 'Cada carta explicada, cada plazo, la ayuda gratuita que funciona — artículo por artículo.', h: '/es/blog' },
    { t: 'Una persona gratuita', d: 'Un consejero HUD (800-569-4287) convierte el pánico en una secuencia en una cita de una hora. Gratis por diseño federal, muchos en español.', h: '/es/preguntas' },
  ],
};

function addDays(iso: string, days: number): Date {
  const d = new Date(iso + 'T12:00:00');
  d.setDate(d.getDate() + days);
  return d;
}
const fmt = (d: Date) => d.toLocaleDateString('es-US', { weekday: 'short', month: 'long', day: 'numeric', year: 'numeric' });

export default function CentroClient() {
  const [stage, setStage] = useState('');
  const [county, setCounty] = useState('');
  const [goal, setGoal] = useState<Goal | ''>('');
  const [servedDate, setServedDate] = useState('');
  const [saleDate, setSaleDate] = useState('');

  const ready = stage && county && goal;
  const st = STAGES.find((s) => s.v === stage) ?? null;
  const sheriff = useMemo(() => SHERIFF_SOURCES.find((s) => s.county === county) ?? null, [county]);
  const orgs = useMemo(() => (county ? helpFor(county).slice(0, 4) : []), [county]);

  const deadlines = useMemo(() => {
    const out: { label: string; date: string; note: string }[] = [];
    if (servedDate) out.push({
      label: 'Fecha límite para responder (día 35)',
      date: fmt(addDays(servedDate, 35)),
      note: 'Presente algo antes de esta fecha — formularios gratis en njcourts.gov; abogados gratis si califica: LSNJ 1-888-576-5529.',
    });
    if (saleDate) {
      out.push({ label: 'Venta del sheriff programada', date: fmt(new Date(saleDate + 'T12:00:00')), note: 'Verifique cada semana contra la lista oficial del condado — las fechas se mueven.' });
      out.push({ label: 'Cierra la ventana de redención (si la venta ocurre)', date: fmt(addDays(saleDate, 10)), note: 'NJ permite 10 días después de la venta para redimir pagando la sentencia completa.' });
    }
    return out;
  }, [servedDate, saleDate]);

  useEffect(() => {
    if (ready) trackEvent('centro_ready', { stage, county, goal });
  }, [ready, stage, county, goal]);

  return (
    <div lang="es">
      <div className="rounded-2xl border-2 border-slate-200 px-6 py-6 mb-8">
        <div className="grid sm:grid-cols-3 gap-4">
          <label className="block">
            <span className="text-xs font-semibold text-slate-600">1 · ¿Dónde está usted?</span>
            <select value={stage} onChange={(e) => setStage(e.target.value)} className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2.5 text-sm bg-white">
              <option value="">Elija su etapa…</option>
              {STAGES.map((s) => <option key={s.v} value={s.v}>{s.label}</option>)}
            </select>
          </label>
          <label className="block">
            <span className="text-xs font-semibold text-slate-600">2 · ¿Qué condado?</span>
            <select value={county} onChange={(e) => setCounty(e.target.value)} className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2.5 text-sm bg-white">
              <option value="">Elija su condado…</option>
              {NJ_COUNTIES.map((c) => <option key={c.slug} value={c.name}>{c.name}</option>)}
            </select>
          </label>
          <label className="block">
            <span className="text-xs font-semibold text-slate-600">3 · ¿Qué quiere lograr?</span>
            <select value={goal} onChange={(e) => setGoal(e.target.value as Goal)} className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2.5 text-sm bg-white">
              <option value="">Elija una meta…</option>
              {GOALS.map((g) => <option key={g.v} value={g.v}>{g.label}</option>)}
            </select>
          </label>
        </div>
        <p className="text-slate-400 text-xs mt-3">
          Privado por diseño: sus respuestas y fechas se quedan en su navegador — no se envían a nadie.
        </p>
      </div>

      {!ready ? (
        <div className="rounded-2xl bg-slate-50 border border-slate-200 px-8 py-14 text-center">
          <p className="font-serif text-2xl font-bold text-slate-900 mb-2">Tres respuestas construyen su panel.</p>
          <p className="text-slate-500 text-sm">Etapa · condado · meta — y todo lo de abajo se arma para su caso.</p>
        </div>
      ) : (
        <div className="space-y-6">
          {st && (
            <div className="rounded-2xl border-2 border-slate-200 overflow-hidden">
              <div className="bg-gradient-to-b from-slate-950 to-slate-900 text-white px-6 py-4">
                <p className="text-amber-400 text-[10px] font-bold tracking-[0.2em] uppercase">Su etapa</p>
                <p className="font-serif text-xl font-bold">{st.label}</p>
              </div>
              <div className="grid md:grid-cols-3 bg-white">
                <div className="px-5 py-4 border-b md:border-b-0 md:border-r border-slate-100">
                  <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-2">Lo que es cierto ahora</p>
                  <p className="text-slate-700 text-sm leading-relaxed">{st.brief}</p>
                </div>
                <div className="px-5 py-4 border-b md:border-b-0 md:border-r border-slate-100 bg-emerald-50/50">
                  <p className="text-[10px] font-bold uppercase tracking-wider text-emerald-800 mb-2">Puertas abiertas</p>
                  <p className="text-slate-700 text-sm leading-relaxed">{st.puerta}</p>
                </div>
                <div className="px-5 py-4 bg-amber-50/50">
                  <p className="text-[10px] font-bold uppercase tracking-wider text-amber-800 mb-2">Lo que cierra pronto</p>
                  <p className="text-slate-700 text-sm leading-relaxed">{st.cierra}</p>
                </div>
              </div>
            </div>
          )}

          <div className="rounded-2xl border-2 border-slate-200 px-6 py-5">
            <p className="font-bold text-slate-900 mb-1">Su reloj</p>
            <p className="text-slate-500 text-xs mb-4">Agregue las fechas que tenga — los plazos se calculan aquí, en privado.</p>
            <div className="grid sm:grid-cols-2 gap-3 mb-4">
              <label className="block">
                <span className="text-xs font-semibold text-slate-600">Fecha en que le entregaron la demanda</span>
                <input type="date" value={servedDate} onChange={(e) => setServedDate(e.target.value)} className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 text-sm" />
              </label>
              <label className="block">
                <span className="text-xs font-semibold text-slate-600">Fecha de venta del sheriff (si hay)</span>
                <input type="date" value={saleDate} onChange={(e) => setSaleDate(e.target.value)} className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 text-sm" />
              </label>
            </div>
            {deadlines.length > 0 ? (
              <ul className="space-y-2">
                {deadlines.map((d) => (
                  <li key={d.label} className="rounded-xl bg-amber-50 border border-amber-200 px-4 py-3">
                    <p className="text-sm font-bold text-slate-900">{d.label}: <span className="text-amber-800">{d.date}</span></p>
                    <p className="text-xs text-slate-600 mt-0.5 leading-relaxed">{d.note}</p>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-slate-400 text-sm">Sin fechas todavía — los relojes generales aplican igual: 35 días para responder; derecho a curar hasta la sentencia final; generalmente dos aplazamientos de 30 días.</p>
            )}
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="rounded-2xl border-2 border-slate-200 px-6 py-5">
              <p className="font-bold text-slate-900 mb-3">Condado de {county}: la maquinaria</p>
              {sheriff && (
                <ul className="space-y-2 text-sm">
                  <li><a className="text-slate-900 font-semibold underline underline-offset-4" href={sheriff.salesUrl} target="_blank" rel="noopener noreferrer">Lista oficial de ventas del sheriff →</a></li>
                  {sheriff.phone && <li className="text-slate-700">Oficina del sheriff: <span className="font-semibold">{sheriff.phone}</span> — pregunte por la unidad de ejecuciones y el procedimiento exacto de aplazamiento.</li>}
                  <li><Link href={`/sheriff-sales/${sheriff.slug}`} className="text-slate-900 font-semibold underline underline-offset-4">Las reglas del condado, explicadas (en inglés) →</Link></li>
                </ul>
              )}
            </div>
            <div className="rounded-2xl border-2 border-slate-200 px-6 py-5">
              <p className="font-bold text-slate-900 mb-3">Ayuda gratuita cerca de usted</p>
              <ul className="space-y-2">
                {orgs.map((o) => (
                  <li key={o.name} className="text-sm">
                    <a href={o.url} target="_blank" rel="noopener noreferrer" className="font-semibold text-slate-900 underline underline-offset-4">{o.name}</a>
                  </li>
                ))}
                <li className="text-sm text-slate-700">Consejeros HUD (muchos en español): <span className="font-semibold">800-569-4287</span></li>
                <li className="text-sm text-slate-700">Abogados gratis si califica: <span className="font-semibold">1-888-576-5529</span></li>
              </ul>
            </div>
          </div>

          {goal && (
            <div className="rounded-2xl border-2 border-slate-200 px-6 py-5">
              <p className="font-bold text-slate-900 mb-4">Su meta: <span className="text-amber-700">{GOALS.find((g) => g.v === goal)!.label.toLowerCase()}</span> — las tres jugadas</p>
              <div className="grid md:grid-cols-3 gap-3">
                {PLAYS[goal].map((p, i) => (
                  <Link key={p.t} href={p.h} className="rounded-xl border border-slate-200 px-4 py-4 hover:border-slate-400 transition group">
                    <p className="text-[10px] font-bold text-amber-700 mb-1">JUGADA {i + 1}</p>
                    <p className="font-bold text-slate-900 text-sm group-hover:underline underline-offset-4">{p.t}</p>
                    <p className="text-xs text-slate-500 mt-1.5 leading-relaxed">{p.d}</p>
                  </Link>
                ))}
              </div>
            </div>
          )}

          <div className="rounded-2xl bg-slate-950 text-white px-6 py-6 text-center">
            <p className="font-serif text-xl font-bold mb-4">Haga una cosa antes de cerrar esta página.</p>
            <div className="grid sm:grid-cols-2 gap-2 max-w-xl mx-auto">
              <Link href="/es/evaluacion" className="text-center bg-amber-400 text-slate-950 px-4 py-3 rounded-lg font-bold hover:bg-amber-300 transition text-sm">
                Ver Mis 7 Opciones — Gratis
              </Link>
              <Link href="/es/blog" className="text-center border border-slate-600 text-white px-4 py-3 rounded-lg font-bold hover:bg-slate-800 transition text-sm">
                Leer el Blog en Español
              </Link>
            </div>
          </div>

          <p className="text-slate-400 text-xs leading-relaxed">
            Información educativa armada con sus tres respuestas — no es asesoría legal ni una
            predicción. Sus propios documentos del tribunal controlan sus fechas reales. Un
            consejero HUD (800-569-4287) o un abogado con licencia en NJ puede confirmar qué aplica
            a su caso.
          </p>
        </div>
      )}
    </div>
  );
}
