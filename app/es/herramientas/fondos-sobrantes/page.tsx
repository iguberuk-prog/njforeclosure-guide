import Link from 'next/link';
import type { Metadata } from 'next';
import SiteHeader from '../../../components/SiteHeader';
import MarsNoticeEs from '../../../components/MarsNoticeEs';
import type { FaqItem } from '../../../components/GuideFaq';
import RespuestasRapidas from '../../_components/RespuestasRapidas';
import CalculadoraSobrantes from './CalculadoraSobrantes';
import { OG_IMAGES } from '../../../../lib/og';
import { fitTitle, fitDescription } from '../../../../lib/seo';

/**
 * Spanish version of /tools/surplus-funds/ (app/tools/surplus-funds/page.tsx).
 * A faithful translation: same claims, same sources, same math
 * (lib/surplus.ts via CalculadoraSobrantes). If the English page or
 * calculator changes, update this one to match.
 *
 * Sources: Superior Court Clerk's Office, "Superior Court Trust Fund";
 * R. 4:64-3 and 4:64-9; N.J.S.A. 22A:4-8.
 */

const URL_ES = 'https://njforeclosureguide.org/es/herramientas/fondos-sobrantes/';
const URL_EN = 'https://njforeclosureguide.org/tools/surplus-funds/';

export const metadata: Metadata = {
  title: fitTitle('Calculadora de Fondos Sobrantes en NJ | Subasta del Sheriff'),
  description:
    fitDescription('Calculadora gratuita: estime los fondos sobrantes de una subasta del sheriff en Nueva Jersey, lo que queda después de los gravámenes, lo que se llevaría una compañía de recuperación y cómo reclamarlos usted mismo.'),
  alternates: {
    canonical: URL_ES,
    languages: { en: URL_EN, es: URL_ES, 'x-default': URL_EN },
  },
  openGraph: {
    images: OG_IMAGES,
    title: 'Calculadora de Fondos Sobrantes de NJ',
    description: 'Si la subasta del sheriff en NJ dejó más de lo que usted debía, la diferencia es suya. Calcúlela en un minuto, gratis.',
    url: URL_ES,
    locale: 'es_US',
  },
};

const STEPS: [string, string][] = [
  ['Confirme que hay dinero', 'Llame o escriba a la Unidad del Fondo Fiduciario del Tribunal Superior (Superior Court Trust Fund Unit) con el número de expediente (docket number) de su ejecución hipotecaria, y pregunte si se depositaron fondos sobrantes en su caso: (609) 815-2900, SCCOTrustfund.Mailbox@njcourts.gov. La oficina del sheriff también le puede confirmar el precio final de la venta.'],
  ['Revise si hay gravámenes posteriores', 'Una segunda hipoteca, un HELOC, acreedores con sentencias u otros gravámenes registrados se pagan con el sobrante antes que el dueño. El expediente del caso de ejecución hipotecaria o una búsqueda de título muestra lo que está registrado.'],
  ['Presente una moción para retirar el dinero sobrante', 'Para liberar el dinero se necesita una orden del tribunal según las Reglas del Tribunal (Court Rules) 4:64-3 y 4:64-9. Si usted fue parte en la ejecución hipotecaria, la moción se presenta ante la Oficina de Ejecuciones Hipotecarias (Office of Foreclosure); quienes no fueron parte la presentan ante el juez de la División de Equidad (Chancery) del condado donde está la propiedad. La moción debe notificarse a todas las partes nombradas en la ejecución hipotecaria.'],
  ['Busque ayuda si hay una disputa', 'Si un acreedor con gravamen o un copropietario disputa el reclamo, un juez decide. Legal Services of New Jersey (1-888-576-5529) ayuda a propietarios que califican por ingresos, y un abogado privado normalmente cobra una tarifa fija o por hora muy por debajo del porcentaje de una compañía de recuperación.'],
];

const FAQ_ITEMS: FaqItem[] = [
  {
    q: '¿Cómo sé si quedaron fondos sobrantes de mi subasta del sheriff en Nueva Jersey?',
    a: 'Compare el precio final de la venta con lo que se le debía al banco más la comisión y los costos del sheriff. Si la subasta dejó más, la diferencia se depositó en el Fondo Fiduciario del Tribunal Superior (Superior Court Trust Fund). La Unidad del Fondo Fiduciario, (609) 815-2900, le puede confirmar si se depositó dinero en su caso si les da el número de expediente.',
  },
  {
    q: '¿Quién recibe los fondos sobrantes después de una subasta por ejecución hipotecaria en NJ?',
    a: 'Primero se les paga, en orden de prioridad, a los acreedores con gravámenes posteriores válidos, como una segunda hipoteca, un HELOC o acreedores con sentencias. Lo que quede le pertenece al antiguo dueño. Cuando hay más de un reclamo, el tribunal decide la prioridad.',
  },
  {
    q: '¿Cómo reclamo los fondos sobrantes en Nueva Jersey?',
    a: 'Presentando una moción para retirar el dinero sobrante según las Reglas del Tribunal 4:64-3 y 4:64-9, notificada a todas las partes de la ejecución hipotecaria. Las partes del caso la presentan ante la Oficina de Ejecuciones Hipotecarias (Office of Foreclosure); quienes no son parte la presentan ante el juez de la División de Equidad (Chancery) del condado donde está la propiedad.',
  },
  {
    q: '¿Necesito una compañía de recuperación de fondos sobrantes?',
    a: 'No. Estas compañías (finders) muchas veces cobran entre una cuarta parte y un tercio del dinero por un trabajo que, en el fondo, es un trámite ante el tribunal. Usted puede presentar la moción por su cuenta, recibir ayuda gratuita de Legal Services of New Jersey si califica, o pagarle a un abogado una tarifa fija o por hora. Nunca firme un acuerdo que ceda su reclamo antes de saber, por su propia cuenta, si el dinero existe.',
  },
  {
    q: '¿Qué tan exacta es esta calculadora?',
    a: 'Es un estimado con fines educativos. Las cifras reales dependen de los intereses y costos exactos agregados a la sentencia, de los cargos reales del sheriff y de cada gravamen registrado contra la propiedad. El tribunal y la Unidad del Fondo Fiduciario tienen las cifras oficiales.',
  },
];

export default function FondosSobrantesPage() {
  return (
    <div className="min-h-full bg-white" lang="es">
      <SiteHeader />

      <section className="bg-gradient-to-b from-slate-950 to-slate-900 text-white py-14 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-amber-400 text-xs font-semibold tracking-[0.25em] uppercase mb-4">
            <Link href="/es" className="hover:text-amber-300">Guía en español</Link> · Calculadora gratuita · Después de la subasta
          </p>
          <h1 className="font-serif text-4xl md:text-5xl font-bold mb-5 tracking-tight">Calculadora de Fondos Sobrantes de NJ</h1>
          <p className="text-slate-300 text-lg leading-relaxed">
            Si la subasta del sheriff dejó más de lo que usted debía, la diferencia no le pertenece al
            banco ni al comprador. Después de los gravámenes válidos, le pertenece a usted. Calcúlela
            aquí y luego reclámela sin darle un tercio a una compañía de &quot;recuperación&quot;.
          </p>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-4 py-12">
        <CalculadoraSobrantes />
      </section>

      <article className="max-w-3xl mx-auto px-4 pb-10">
        <h2 className="font-serif text-2xl font-bold text-slate-900 mb-5">Cómo reclamarlos usted mismo</h2>
        <ol className="space-y-5 mb-12">
          {STEPS.map(([t, d], i) => (
            <li key={t} className="flex gap-4">
              <span className="shrink-0 w-9 h-9 rounded-full bg-slate-900 text-white flex items-center justify-center font-bold text-sm">{i + 1}</span>
              <div>
                <p className="font-bold text-slate-900">{t}</p>
                <p className="text-slate-600 leading-relaxed mt-1">{d}</p>
              </div>
            </li>
          ))}
        </ol>

        <div className="border-l-2 border-amber-400 pl-5 mb-12">
          <p className="text-slate-700 leading-relaxed">
            <strong className="text-slate-900">Si la subasta todavía no ha ocurrido,</strong> la subasta
            del sheriff es la manera en que peor se paga convertir su plusvalía (equity) en dinero. Vender
            antes de la subasta, usando los aplazamientos que la ley de Nueva Jersey generalmente permite,
            casi siempre protege más de ese valor que esperar un sobrante después.{' '}
            <Link href="/tools/net-proceeds" className="font-semibold text-slate-900 underline underline-offset-4">Compare una venta antes de la subasta</Link>{' '}
            (en inglés).
          </p>
        </div>

        <div className="rounded-2xl bg-slate-50 border border-slate-200 px-6 py-6 mb-6">
          <p className="font-bold text-slate-900 mb-3">Relacionado</p>
          <ul className="space-y-2 text-slate-700">
            <li><Link href="/es/blog/fondos-excedentes-dinero-que-es-suyo/" className="underline underline-offset-4">Los fondos sobrantes, explicados: cómo funciona el dinero y cómo cobrarlo</Link></li>
            <li><Link href="/es/guias/despues-de-la-subasta/" className="underline underline-offset-4">Qué pasa después de la subasta del sheriff: todo el proceso, en orden</Link></li>
            <li><Link href="/sheriff-sales" className="underline underline-offset-4">Las listas oficiales de subastas de su condado (en inglés)</Link></li>
          </ul>
        </div>
      </article>

      <RespuestasRapidas items={FAQ_ITEMS} />

      <div className="max-w-3xl mx-auto px-4 pb-14">
        <p className="text-slate-400 text-xs leading-relaxed">
          Información educativa, no asesoría legal. Fuentes: Oficina del Secretario del Tribunal Superior
          de Nueva Jersey (Superior Court Clerk&apos;s Office), Fondo Fiduciario del Tribunal Superior
          (Superior Court Trust Fund); N.J. Court Rules 4:64-3 y 4:64-9; N.J.S.A. 22A:4-8. La prioridad
          de los gravámenes y a quién le corresponde el dinero dependen de cada caso; un abogado con
          licencia en Nueva Jersey puede confirmar qué aplica a su caso.
        </p>
      </div>

      <MarsNoticeEs />
    </div>
  );
}
