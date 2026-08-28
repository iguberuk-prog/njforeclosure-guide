import Link from 'next/link';
import type { Metadata } from 'next';
import SiteHeader from '../../components/SiteHeader';
import MarsNoticeEs from '../../components/MarsNoticeEs';
import { SITE_EMAIL } from '../../../lib/contact';

export const metadata: Metadata = {
  title: 'Las 7 Opciones ante una Ejecución Hipotecaria en NJ',
  description:
    'Las siete opciones ante una ejecución hipotecaria en Nueva Jersey, en español: reinstalación, modificación de préstamo, forbearance, refinanciamiento, Chapter 13, venta corta y venta rápida. Cinco le permiten quedarse en su casa.',
  alternates: {
    canonical: 'https://njforeclosureguide.org/es/opciones/',
    languages: { en: 'https://njforeclosureguide.org/compare/', es: 'https://njforeclosureguide.org/es/opciones/' },
  },
  openGraph: {
    title: 'Las 7 Opciones ante una Ejecución Hipotecaria en NJ',
    description: 'Cada opción explicada en español: qué es, qué tan rápido funciona, y su desventaja honesta.',
    url: 'https://njforeclosureguide.org/es/opciones/',
    locale: 'es_US',
  },
};

const OPTIONS: { name: string; keeps: boolean; what: string; catchLine: string }[] = [
  {
    name: 'Reinstalación (Reinstatement)',
    keeps: true,
    what: 'Pagar de una sola vez todos los pagos atrasados más cargos, para poner el préstamo al día. Detiene el proceso y usted conserva su préstamo original. En Nueva Jersey generalmente puede hacerlo hasta la sentencia final.',
    catchLine: 'Requiere tener el dinero ahora; esa es la parte difícil.',
  },
  {
    name: 'Modificación de préstamo (Loan modification)',
    keeps: true,
    what: 'Pedirle al banco que cambie las condiciones del préstamo de forma permanente: pago mensual más bajo, plazo más largo, o mover los atrasos al final del préstamo. Solicitar es gratis, directamente con su banco. Una solicitud completa generalmente pone la venta en pausa mientras la revisan.',
    catchLine: 'Aproximadamente un tercio de las solicitudes se aprueban; los papeles incompletos son la causa principal de rechazo.',
  },
  {
    name: 'Pausa de pagos (Forbearance) o plan de pago',
    keeps: true,
    what: 'Un acuerdo temporal con el banco para pausar o reducir los pagos mientras usted se recupera (por ejemplo, tras perder el trabajo o una enfermedad). La respuesta suele llegar en 1 o 2 semanas.',
    catchLine: 'Es una pausa, no un perdón: todo lo pausado se sigue debiendo al final.',
  },
  {
    name: 'Refinanciamiento',
    keeps: true,
    what: 'Reemplazar el préstamo atrasado con uno nuevo, lo que paga al banco anterior y termina ese caso. Funciona si su casa tiene suficiente valor acumulado (equity) y usted califica para el nuevo préstamo.',
    catchLine: 'El atraso mismo dificulta calificar, por eso funciona mejor temprano en el proceso.',
  },
  {
    name: 'Bancarrota Capítulo 13 (Chapter 13)',
    keeps: true,
    what: 'Una protección legal con ingresos regulares: el mismo día que se presenta, una orden automática (automatic stay) pausa la ejecución. Los atrasos se pagan en un plan de 3 a 5 años supervisado por el tribunal mientras usted conserva la casa.',
    catchLine: 'Es un compromiso serio de varios años que requiere abogado y afecta su crédito por mucho tiempo.',
  },
  {
    name: 'Venta en el mercado (incluye venta corta / short sale)',
    keeps: false,
    what: 'Vender la casa con un agente al mejor precio posible y pagar la deuda con lo obtenido; usted se queda con el resto (su equity). Si debe más de lo que vale la casa, una venta corta con aprobación del banco puede liberar la deuda.',
    catchLine: 'Toma de 60 a 90 días o más; el riesgo es el calendario de la subasta, que generalmente se puede posponer dos veces.',
  },
  {
    name: 'Venta rápida por efectivo (Cash sale)',
    keeps: false,
    what: 'Vender a un comprador de efectivo que cierra en 7 a 30 días, antes de la subasta. Usted paga la deuda y protege parte de su equity, con rapidez y certeza.',
    catchLine: 'Estos compradores pagan típicamente entre el 70% y el 85% del valor de mercado. Está cambiando dinero por velocidad; solo conviene cuando el tiempo de verdad se acabó.',
  },
];

export default function EsOpcionesPage() {
  return (
    <div className="min-h-full bg-white" lang="es">
      <SiteHeader />

      <section className="bg-gradient-to-b from-slate-950 to-slate-900 text-white py-14 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-amber-400 text-xs font-semibold tracking-[0.25em] uppercase mb-4">
            <Link href="/es" className="hover:text-amber-300">Guía en español</Link>
          </p>
          <h1 className="font-serif text-4xl font-bold mb-4 tracking-tight">
            Las Siete Opciones, Explicadas
          </h1>
          <p className="text-slate-300 text-lg leading-relaxed">
            Cinco de las siete le permiten quedarse en su casa. Cada opción incluye su desventaja
            honesta, porque todas tienen una.
          </p>
        </div>
      </section>

      <section className="max-w-3xl mx-auto px-4 py-12">
        <div className="space-y-5 mb-10">
          {OPTIONS.map((o, i) => (
            <div key={o.name} className="border border-slate-200 rounded-2xl px-6 py-5">
              <div className="flex flex-wrap items-center gap-3 mb-2">
                <span className="shrink-0 w-8 h-8 rounded-full bg-slate-900 text-white flex items-center justify-center font-bold text-sm">
                  {i + 1}
                </span>
                <h2 className="font-bold text-slate-900">{o.name}</h2>
                <span className={`inline-block px-2.5 py-0.5 rounded-full text-xs font-bold ${o.keeps ? 'bg-emerald-100 text-emerald-800' : 'bg-slate-200 text-slate-700'}`}>
                  {o.keeps ? 'Conserva la casa' : 'Vende la casa'}
                </span>
              </div>
              <p className="text-slate-600 text-sm leading-relaxed mb-2">{o.what}</p>
              <p className="text-slate-500 text-sm leading-relaxed">
                <strong className="text-slate-700">La desventaja:</strong> {o.catchLine}
              </p>
            </div>
          ))}
        </div>

        <div className="bg-slate-50 rounded-2xl p-6">
          <p className="text-slate-700 leading-relaxed mb-4">
            ¿Cuál le conviene a usted? Depende de sus números, su etapa en el proceso y lo que usted
            quiere. Escríbanos en español a{' '}
            <a href={`mailto:${SITE_EMAIL}`} className="text-slate-900 underline underline-offset-4 font-semibold break-all">{SITE_EMAIL}</a>{' '}
            con su situación, o use la evaluación gratuita de 2 minutos en español.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <Link href="/es/evaluacion" className="bg-amber-400 text-slate-950 px-8 py-3.5 rounded-lg font-bold text-center hover:bg-amber-300 transition">
              Evaluación gratuita en español
            </Link>
            <Link href="/es/documentos" className="border border-slate-300 text-slate-900 px-8 py-3.5 rounded-lg font-semibold text-center hover:bg-slate-100 transition">
              Su carta, explicada
            </Link>
          </div>
        </div>
        <p className="text-slate-400 text-xs mt-6 leading-relaxed">
          Información educativa, no asesoría legal. Un abogado licenciado en Nueva Jersey o un
          consejero de HUD (gratuito, muchos hablan español) puede confirmar qué aplica a su caso.
        </p>
      </section>

      <MarsNoticeEs />
    </div>
  );
}
