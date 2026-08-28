import Link from 'next/link';
import type { Metadata } from 'next';
import SiteHeader from '../../components/SiteHeader';
import MarsNoticeEs from '../../components/MarsNoticeEs';
import { SITE_EMAIL } from '../../../lib/contact';

export const metadata: Metadata = {
  title: 'Su Carta de Foreclosure, Explicada en Español | NJ',
  description:
    'Cada documento de una ejecución hipotecaria en Nueva Jersey, explicado en español y en orden: Notice of Intention, demanda, default, sentencia final, aviso de subasta. Qué significa cada uno, cuánto tiempo tiene y qué hacer.',
  alternates: {
    canonical: 'https://njforeclosureguide.org/es/documentos/',
    languages: { en: 'https://njforeclosureguide.org/documents/', es: 'https://njforeclosureguide.org/es/documentos/' },
  },
  openGraph: {
    title: 'Su Carta de Foreclosure, Explicada en Español | NJ',
    description: 'Los documentos del proceso en orden: qué significa cada uno y qué hacer esta semana.',
    url: 'https://njforeclosureguide.org/es/documentos/',
    locale: 'es_US',
  },
};

// The court papers arrive in English, so every entry leads with the English
// document name the homeowner is actually holding.
const DOCS: { name: string; stage: string; what: string; clock: string; doNow: string }[] = [
  {
    name: 'Notice of Intention to Foreclose (NOI)',
    stage: 'Antes de cualquier demanda',
    what: 'Una carta del banco, exigida por la ley de Nueva Jersey, que debe llegar antes de que puedan demandarlo. Dice cuánto debe y cómo ponerse al día. Todavía no existe ningún caso en el tribunal.',
    clock: 'El banco debe esperar al menos 30 días después de este aviso antes de presentar una demanda.',
    doNow: 'Llame a su banco y pida la solicitud de "loss mitigation" (ayuda hipotecaria). Solicitar ahora, antes de que exista un caso, es cuando más probabilidades tiene. Un consejero de HUD (gratuito) puede ayudarle con los papeles.',
  },
  {
    name: 'Summons and Complaint (demanda)',
    stage: 'Empieza el caso en el tribunal',
    what: 'Los papeles que abren la demanda judicial. La demanda dice lo que el banco reclama; el summons dice cuánto tiempo tiene para responder.',
    clock: 'Usted tiene 35 días desde que le entregan los papeles para presentar una respuesta (answer) ante el tribunal.',
    doNow: 'Marque el día 35 en el calendario hoy. Responder mantiene su caso "disputado", lo que normalmente agrega meses de tiempo. Pida también el programa gratuito de mediación del tribunal. Ignorar los papeles no detiene nada; solo le quita opciones.',
  },
  {
    name: 'Entry of Default',
    stage: 'El caso avanza sin usted',
    what: 'Un aviso de que, como nadie respondió en 35 días, el tribunal registró que usted no disputa el caso. El banco ahora puede avanzar hacia la sentencia final solo con papeles.',
    clock: 'Antes de pedir la sentencia final, el banco debe enviarle otro aviso con al menos 14 días de anticipación, y usted generalmente conserva el derecho de ponerse al día hasta la sentencia final.',
    doNow: 'Hable con un abogado esta semana sobre anular el default (los tribunales pueden hacerlo con buena causa, y mientras más pronto, mejor). Su solicitud de ayuda con el banco sigue disponible aunque exista el default.',
  },
  {
    name: 'Final Judgment (sentencia final)',
    stage: 'El tribunal decidió',
    what: 'La orden del tribunal que fija el monto total y autoriza al sheriff del condado a vender la propiedad. La casa todavía NO se ha vendido.',
    clock: 'El sheriff tarda semanas en programar y anunciar la subasta. Desde este punto, ponerse al día generalmente significa pagar el monto completo de la sentencia.',
    doNow: 'Verifique si ya hay fecha de subasta en las listas oficiales de su condado (nuestro directorio en inglés las enlaza todas). Consiga consejo legal esta semana: Chapter 13, una venta antes de la subasta, o pagar la sentencia siguen siendo posibles, pero el tiempo manda.',
  },
  {
    name: 'Notice of Sheriff Sale (aviso de subasta)',
    stage: 'La subasta tiene fecha',
    what: 'El aviso formal de que el sheriff programó la subasta pública de la casa, con fecha, hora y lugar. Es también cuando llegan olas de cartas de inversionistas.',
    clock: 'La fecha impresa, menos hoy. En Nueva Jersey usted generalmente tiene derecho a posponer la subasta dos veces, hasta 30 días cada vez, pidiéndolo en la oficina del sheriff.',
    doNow: 'Confirme la fecha real en las listas del condado (las subastas se posponen constantemente). Decida el final con un abogado o consejero: vender antes de la subasta, presentar Chapter 13 antes de la subasta, o pagar. Desconfíe de cualquiera que llegue a su puerta con una oferta y un ultimátum.',
  },
  {
    name: 'Writ of Possession (orden de desalojo)',
    stage: 'Después de la venta',
    what: 'La orden posterior a la venta que permite al nuevo dueño tomar posesión, entregada por el sheriff con una fecha. Solo el sheriff puede sacarlo, nunca el comprador por su cuenta, y nadie puede cambiarle las cerraduras por sí mismo.',
    clock: 'La fecha del aviso, generalmente cuestión de semanas. Los tribunales pueden dar prórrogas cortas por dificultad.',
    doNow: 'Si la subasta produjo más de lo que usted debía, ese excedente (surplus funds) es SUYO: reclámelo al tribunal, no se envía solo. Pregunte por una prórroga si necesita tiempo, y organice la salida en sus términos.',
  },
];

export default function EsDocumentosPage() {
  return (
    <div className="min-h-full bg-white" lang="es">
      <SiteHeader />

      <section className="bg-gradient-to-b from-slate-950 to-slate-900 text-white py-14 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-amber-400 text-xs font-semibold tracking-[0.25em] uppercase mb-4">
            <Link href="/es" className="hover:text-amber-300">Guía en español</Link>
          </p>
          <h1 className="font-serif text-4xl font-bold mb-4 tracking-tight">
            Recibió una Carta. Esto Es Lo Que Significa.
          </h1>
          <p className="text-slate-300 text-lg leading-relaxed">
            Los documentos llegan en inglés y en un orden predecible. Busque el que tiene en la mano
            para saber exactamente dónde está, cuánto tiempo tiene y qué hacer esta semana.
          </p>
        </div>
      </section>

      <section className="max-w-3xl mx-auto px-4 py-12">
        <ol className="space-y-5 mb-10">
          {DOCS.map((d, i) => (
            <li key={d.name} className="border border-slate-200 rounded-2xl px-6 py-5">
              <div className="flex gap-4">
                <span className="shrink-0 w-9 h-9 rounded-full bg-slate-900 text-white flex items-center justify-center font-bold">
                  {i + 1}
                </span>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-0.5">{d.stage}</p>
                  <h2 className="font-bold text-slate-900">{d.name}</h2>
                  <p className="text-slate-600 text-sm leading-relaxed mt-2">{d.what}</p>
                  <p className="text-slate-700 text-sm leading-relaxed mt-2 border-l-2 border-amber-400 pl-3">
                    <strong>Su reloj:</strong> {d.clock}
                  </p>
                  <p className="text-slate-600 text-sm leading-relaxed mt-2">
                    <strong className="text-slate-900">Qué hacer ahora:</strong> {d.doNow}
                  </p>
                </div>
              </div>
            </li>
          ))}
        </ol>

        <div className="bg-slate-50 rounded-2xl p-6">
          <p className="text-slate-700 leading-relaxed mb-4">
            ¿No está seguro de en qué etapa está, o le faltan papeles? Escríbanos en español a{' '}
            <a href={`mailto:${SITE_EMAIL}`} className="text-slate-900 underline underline-offset-4 font-semibold break-all">{SITE_EMAIL}</a>{' '}
            y le orientamos sin costo.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <Link href="/es/opciones" className="bg-amber-400 text-slate-950 px-8 py-3.5 rounded-lg font-bold text-center hover:bg-amber-300 transition">
              Ver las 7 opciones
            </Link>
            <Link href="/es/estafas" className="border border-slate-300 text-slate-900 px-8 py-3.5 rounded-lg font-semibold text-center hover:bg-slate-100 transition">
              Cómo detectar estafas
            </Link>
          </div>
        </div>
        <p className="text-slate-400 text-xs mt-6 leading-relaxed">
          Información educativa, no asesoría legal. Los plazos aquí reflejan la ley de Nueva Jersey
          en general; los documentos de su propio caso son los que controlan.
        </p>
      </section>

      <MarsNoticeEs />
    </div>
  );
}
