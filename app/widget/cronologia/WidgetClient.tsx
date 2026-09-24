'use client';

import { useState } from 'react';

/**
 * Spanish twin of /widget/timeline (keep the two in sync).
 *
 * Lives inside third-party iframes (counselors, nonprofits, attorneys), so:
 * no site header, no external requests, no storage, self-contained styling,
 * every outbound link target=_blank with the widget utm. Compact by design —
 * comfortable at 320px wide and ~460px tall. Tone and claims follow site
 * rules: deadlines framed as "generally," free help first, no promises.
 */

type StageKey = 'behind' | 'noi' | 'served' | 'judgment' | 'sale';

const STAGES: {
  v: StageKey;
  label: string;
  clock: string;
  truth: string;
  moves: string[];
}[] = [
  {
    v: 'behind',
    label: 'Estoy atrasado en los pagos — nada presentado',
    clock: 'Generalmente no puede empezar un caso en el tribunal hasta que tenga más de 120 días de atraso, más un aviso de 30 días.',
    truth: 'Esta es la etapa más barata para arreglarlo — todavía no hay honorarios legales.',
    moves: [
      'Llame a su banco y pida "loss mitigation" (mitigación de pérdidas)',
      'Consejero HUD gratis (muchos hablan español): 800-569-4287',
    ],
  },
  {
    v: 'noi',
    label: 'Recibí el Aviso de Intención (NOI)',
    clock: 'El banco generalmente debe esperar al menos 30 días después de este aviso para presentar la demanda.',
    truth: 'El aviso debe decir la cantidad exacta para ponerse al día — pagarla en esta ventana generalmente termina el asunto.',
    moves: [
      'Pida por escrito la cantidad exacta para ponerse al día',
      'Consejero gratis para armar un plan: 800-569-4287',
    ],
  },
  {
    v: 'served',
    label: 'Me entregaron la demanda del tribunal',
    clock: 'Generalmente tiene 35 días desde la entrega para presentar su respuesta.',
    truth: 'Presentar una respuesta — aunque sea sencilla — mantiene todas las opciones abiertas y abre la mediación gratuita del tribunal.',
    moves: [
      'Presente su respuesta (formularios gratis: njcourts.gov)',
      'Abogados gratis si califica: 1-888-576-5529',
    ],
  },
  {
    v: 'judgment',
    label: 'Entraron la sentencia final',
    clock: 'Normalmente sigue la venta del sheriff; NJ generalmente permite dos aplazamientos de hasta 30 días cada uno.',
    truth: 'Generalmente todavía puede pagar la deuda, vender o negociar — el caso no ha terminado.',
    moves: [
      'Llame a la unidad de ejecuciones del sheriff para las fechas exactas',
      'Consiga una valoración real — la plusvalía lo cambia todo',
    ],
  },
  {
    v: 'sale',
    label: 'Hay fecha de venta del sheriff',
    clock: 'Los aplazamientos generalmente suman hasta 60 días; después de la venta hay 10 días de redención.',
    truth: 'Aun ahora: aplazamientos, redención y fondos excedentes (el dinero de la subasta sobre la deuda es suyo).',
    moves: [
      'Use los aplazamientos con propósito — un cierre o un acuerdo',
      'Ayuda legal gratis si califica: 1-888-576-5529',
    ],
  },
];

export default function WidgetClient() {
  const [stage, setStage] = useState<StageKey | ''>('');
  const s = STAGES.find((x) => x.v === stage);

  return (
    <div lang="es" className="min-h-full bg-slate-950 text-white p-4 flex flex-col" style={{ fontFamily: 'Georgia, serif' }}>
      <p className="text-amber-400 text-[10px] font-bold tracking-[0.2em] uppercase" style={{ fontFamily: 'Arial, sans-serif' }}>
        Cronología de Ejecución en NJ · Gratis
      </p>
      <p className="font-bold text-lg mt-1 mb-3">¿Dónde está en el proceso?</p>

      <select
        value={stage}
        onChange={(e) => setStage(e.target.value as StageKey)}
        className="w-full rounded-lg bg-white text-slate-900 px-3 py-2.5 text-sm"
        style={{ fontFamily: 'Arial, sans-serif' }}
        aria-label="Seleccione su etapa"
      >
        <option value="">Elija su etapa…</option>
        {STAGES.map((x) => (
          <option key={x.v} value={x.v}>{x.label}</option>
        ))}
      </select>

      {s ? (
        <div className="mt-4 space-y-3 text-sm flex-1">
          <div className="rounded-lg bg-white/[0.07] border border-white/10 px-3 py-2.5">
            <p className="text-[10px] font-bold uppercase tracking-wider text-amber-400" style={{ fontFamily: 'Arial, sans-serif' }}>Su reloj</p>
            <p className="text-slate-200 leading-snug mt-0.5">{s.clock}</p>
          </div>
          <div className="rounded-lg bg-white/[0.07] border border-white/10 px-3 py-2.5">
            <p className="text-[10px] font-bold uppercase tracking-wider text-amber-400" style={{ fontFamily: 'Arial, sans-serif' }}>Lo que es cierto ahora</p>
            <p className="text-slate-200 leading-snug mt-0.5">{s.truth}</p>
          </div>
          <div className="rounded-lg bg-white/[0.07] border border-white/10 px-3 py-2.5">
            <p className="text-[10px] font-bold uppercase tracking-wider text-amber-400" style={{ fontFamily: 'Arial, sans-serif' }}>Dos pasos gratis</p>
            <ul className="text-slate-200 leading-snug mt-0.5 list-disc pl-4 space-y-1">
              {s.moves.map((m) => <li key={m}>{m}</li>)}
            </ul>
          </div>
          <a
            href={`https://njforeclosureguide.org/es/centro-de-mando?utm_source=widget-es&stage=${stage === 'behind' ? 'missed' : stage === 'judgment' ? 'judgment' : stage === 'sale' ? 'scheduled' : stage}`}
            target="_blank"
            rel="noopener noreferrer"
            className="block text-center bg-amber-400 text-slate-950 font-bold rounded-lg px-4 py-2.5 hover:bg-amber-300 transition"
            style={{ fontFamily: 'Arial, sans-serif' }}
          >
            Arme mi plan completo gratis →
          </a>
        </div>
      ) : (
        <p className="text-slate-400 text-xs mt-4 flex-1">
          Elija una etapa para ver sus plazos, lo que todavía es cierto y sus dos mejores pasos gratis.
          Nada de lo que seleccione sale de esta caja.
        </p>
      )}

      <p className="text-slate-500 text-[10px] mt-3 leading-snug" style={{ fontFamily: 'Arial, sans-serif' }}>
        Información educativa, no asesoría legal. Los plazos son reglas generales de NJ — sus documentos del tribunal mandan.{' '}
        <a href="https://njforeclosureguide.org/es?utm_source=widget-es" target="_blank" rel="noopener noreferrer" className="underline">
          njforeclosureguide.org/es
        </a>
      </p>
    </div>
  );
}
