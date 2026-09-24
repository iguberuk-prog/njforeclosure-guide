import Link from 'next/link';
import type { Metadata } from 'next';
import SiteHeader from '../../../components/SiteHeader';
import MarsNoticeEs from '../../../components/MarsNoticeEs';
import type { FaqItem } from '../../../components/GuideFaq';
import RespuestasRapidas from '../../_components/RespuestasRapidas';
import PlanificadorCuentaRegresiva from './PlanificadorCuentaRegresiva';
import { OG_IMAGES } from '../../../../lib/og';
import { fitTitle, fitDescription } from '../../../../lib/seo';

/**
 * Spanish version of /tools/sheriff-sale-countdown/
 * (app/tools/sheriff-sale-countdown/page.tsx). A faithful translation: same
 * claims, same county data (lib/sheriff-sales.ts), same math (lib/countdown.ts
 * via PlanificadorCuentaRegresiva). If the English page or planner changes,
 * update this one to match.
 *
 * Rules: "generalmente" where courts have discretion, no outcome promises,
 * free help listed, not legal advice.
 */

const URL_ES = 'https://njforeclosureguide.org/es/herramientas/cuenta-regresiva/';
const URL_EN = 'https://njforeclosureguide.org/tools/sheriff-sale-countdown/';

export const metadata: Metadata = {
  title: fitTitle('Cuenta Regresiva para la Subasta del Sheriff en NJ | Qué Hacer Hoy'),
  description: fitDescription(
    'Escriba la fecha de su subasta del sheriff en Nueva Jersey y su condado: vea los días que le quedan, cuánto la pueden mover los aplazamientos y qué hacer hoy.'
  ),
  keywords: [
    'subasta del sheriff Nueva Jersey fecha',
    'cuántos días faltan para la subasta del sheriff',
    'aplazamiento subasta del sheriff NJ',
    'cómo aplazar la subasta del sheriff',
    'ejecución hipotecaria Nueva Jersey',
    'venta del sheriff NJ',
  ],
  alternates: {
    canonical: URL_ES,
    languages: { en: URL_EN, es: URL_ES, 'x-default': URL_EN },
  },
  openGraph: {
    images: OG_IMAGES,
    title: 'Cuenta Regresiva para la Subasta del Sheriff en NJ',
    description: 'Escriba la fecha de su subasta y reciba un plan para hoy mismo: aplazamientos, contactos y próximos pasos. Gratis.',
    url: URL_ES,
    locale: 'es_US',
  },
};

const FAQ_ITEMS: FaqItem[] = [
  {
    q: '¿Cuántas veces se puede aplazar una subasta del sheriff en Nueva Jersey?',
    a: 'Los propietarios generalmente tienen derecho a pedir dos aplazamientos de una subasta programada, de hasta 30 días cada uno, a través de la oficina del sheriff del condado, normalmente por un cargo pequeño y sin abogado. Aplazamientos adicionales generalmente requieren una orden del tribunal, que los jueces conceden cuando hay una causa justificada.',
  },
  {
    q: '¿Necesito un abogado para aplazar mi subasta del sheriff?',
    a: 'No para los dos aplazamientos que da la ley; la solicitud se hace en la oficina del sheriff. Nunca le pague a un tercero para que "le aplacen la subasta". Después de esos dos, generalmente se necesita una orden del tribunal, y Legal Services of New Jersey (Servicios Legales de Nueva Jersey, 1-888-576-5529) ofrece ayuda legal gratuita a propietarios que califican por ingresos.',
  },
  {
    q: 'Mi banco está revisando una modificación del préstamo. ¿Eso aplaza la subasta?',
    a: 'No automáticamente. Pídale por escrito a la compañía que administra su préstamo (servicer) que aplace la subasta mientras la revisión está pendiente, pida una cotización de reinstalación por escrito y use sus propios derechos de aplazamiento si la fecha está cerca. Un consejero de vivienda aprobado por HUD (800-569-4287) le puede ayudar a presionar al banco.',
  },
  {
    q: '¿Qué pasa si la fecha de la subasta ya pasó?',
    a: 'Primero revise la lista del condado, porque las subastas se aplazan todo el tiempo. Si se realizó, generalmente hay un plazo de 10 días antes de que se entregue la escritura del sheriff, para sacarlo de la casa se necesita una orden del tribunal que ejecuta el sheriff, y cualquier sobrante por encima de lo que se debía generalmente es suyo después de los gravámenes.',
  },
];

export default function CuentaRegresivaPage() {
  return (
    <div className="min-h-full bg-white" lang="es">
      <SiteHeader />

      <section className="bg-gradient-to-b from-slate-950 to-slate-900 text-white py-14 px-4 print:hidden">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-amber-400 text-xs font-semibold tracking-[0.25em] uppercase mb-4">
            <Link href="/es" className="hover:text-amber-300">Guía en español</Link> · Herramienta gratuita · Nada de lo que escriba sale de esta página
          </p>
          <h1 className="font-serif text-4xl md:text-5xl font-bold mb-5 tracking-tight">Cuenta Regresiva para la Subasta del Sheriff</h1>
          <p className="text-slate-300 text-lg leading-relaxed">
            Escriba la fecha de su subasta y su condado. Vea cuántos días tiene de verdad, cuánto pueden
            mover la fecha sus aplazamientos, a quién llamar y exactamente qué hacer hoy.
          </p>
        </div>
      </section>

      <section className="max-w-3xl mx-auto px-4 py-12">
        <PlanificadorCuentaRegresiva />
      </section>

      <div className="max-w-3xl mx-auto px-4 pb-8 print:hidden">
        <div className="rounded-2xl bg-slate-50 border border-slate-200 px-6 py-6">
          <p className="font-bold text-slate-900 mb-3">Para saber más</p>
          <ul className="space-y-2 text-slate-700">
            <li><Link href="/blog/sheriff-sale-adjournment-playbook/" className="underline underline-offset-4">La guía completa de aplazamientos (en inglés)</Link></li>
            <li><Link href="/sheriff-sales/" className="underline underline-offset-4">Las listas de subastas y los contactos del sheriff de los 21 condados (en inglés)</Link></li>
            <li><Link href="/es/guias/despues-de-la-subasta/" className="underline underline-offset-4">Qué pasa después de la subasta del sheriff</Link></li>
            <li><Link href="/es/herramientas/ponerse-al-dia/" className="underline underline-offset-4">Calculadora para ponerse al día: lo que cuesta reinstalar su hipoteca</Link></li>
          </ul>
        </div>
      </div>

      <div className="print:hidden">
        <RespuestasRapidas items={FAQ_ITEMS} />
      </div>

      <div className="max-w-3xl mx-auto px-4 pb-14">
        <p className="text-slate-400 text-xs leading-relaxed">
          Información educativa, no asesoría legal. Las fechas que se muestran son estimados basados en las
          reglas generales de Nueva Jersey; el sheriff fija las fechas reales de la subasta y de los
          aplazamientos, y lo que digan sus papeles del tribunal es lo que cuenta. Confirme todo en la
          lista oficial de su condado.
        </p>
      </div>

      <MarsNoticeEs />
    </div>
  );
}
