import Link from 'next/link';
import type { Metadata } from 'next';
import SiteHeader from '../../../components/SiteHeader';
import MarsNoticeEs from '../../../components/MarsNoticeEs';
import type { FaqItem } from '../../../components/GuideFaq';
import RespuestasRapidas from '../../_components/RespuestasRapidas';
import { OG_IMAGES } from '../../../../lib/og';
import { fitTitle, fitDescription } from '../../../../lib/seo';

/**
 * Spanish version of /guides/foreclosure-mediation/
 * (app/guides/foreclosure-mediation/page.tsx). A faithful translation: same
 * claims, same sources, no additions. If the English page changes, update
 * this one to match.
 *
 * Sources: N.J. Court Rule 4:64-1B; N.J.S.A. 2A:50-56 and 2A:50-74; NJ Courts
 * foreclosure self-help materials. Never say mediation "detiene" (stops) a
 * foreclosure — it does not.
 */

const URL_ES = 'https://njforeclosureguide.org/es/guias/mediacion/';
const URL_EN = 'https://njforeclosureguide.org/guides/foreclosure-mediation/';

export const metadata: Metadata = {
  title: fitTitle('Programa de Mediación de Ejecuciones Hipotecarias de NJ: Quién Califica y Cómo Pedirla'),
  description:
    fitDescription('Cómo funciona la mediación gratuita de ejecuciones hipotecarias de los tribunales de Nueva Jersey: quién califica, el plazo de 60 días para pedirla, el consejero de vivienda gratuito, qué llevar, y lo que puede y no puede hacer.'),
  alternates: {
    canonical: URL_ES,
    languages: { en: URL_EN, es: URL_ES, 'x-default': URL_EN },
  },
  openGraph: {
    images: OG_IMAGES,
    title: 'El Programa de Mediación de Ejecuciones Hipotecarias de NJ, Explicado',
    description: 'Gratuita, a cargo del tribunal y más útil cuando se pide temprano. Quién califica y exactamente cómo pedirla.',
    url: URL_ES,
    locale: 'es_US',
  },
};

const ELIGIBLE = [
  'La casa es una propiedad residencial de 1 a 4 familias y es su residencia principal.',
  'La ejecución hipotecaria la presentó un banco u otro tenedor de la hipoteca (no es un caso de gravamen por impuestos, de condominio o de HOA, ni un préstamo comercial).',
  'Todos los prestatarios de la hipoteca participan.',
  'Usted no está en bancarrota en este momento.',
  'Usted trabaja con un consejero de vivienda aprobado por HUD, gratuito, que le ayuda a preparar su solicitud y sus papeles.',
];

const STEPS = [
  ['Llame a un consejero gratuito aprobado por HUD', 'Use la línea de HUD (800-569-4287) o la Agencia de Financiamiento de Vivienda e Hipotecas de NJ (NJ Housing and Mortgage Finance Agency) para encontrar un consejero cerca de usted. No cuestan nada, y el proceso del tribunal espera que usted trabaje con uno.'],
  ['Presente la solicitud de mediación temprano', 'Obtenga en njcourts.gov la versión vigente del formulario de solicitud de mediación (Foreclosure Mediation), la lista de verificación y la hoja de trabajo financiera. Las instrucciones del tribunal permiten presentar la solicitud hasta 60 días después de que le entregaron la citación y la demanda (summons and complaint) sin permiso especial, y no hay tarifa de presentación. Después de eso, generalmente necesita una moción pidiéndole al tribunal que lo permita.'],
  ['Responda la demanda de todos modos', 'La mediación no pone en pausa la demanda. Generalmente usted tiene 35 días desde la entrega para presentar una respuesta (answer), y pedir la mediación no cambia ese plazo.'],
  ['Prepare su paquete con el consejero', 'Comprobantes de ingresos, estados de cuenta bancarios, una carta explicando sus dificultades (hardship letter), declaraciones de impuestos y un presupuesto mensual realista. Un paquete completo es lo que convierte una sesión en una oferta en vez de en otra cita de seguimiento.'],
  ['Llegue preparado a la sesión', 'Un mediador neutral trabaja con usted y con el representante del banco para llegar a una solución viable. El mediador no decide el caso, y ninguna de las partes está obligada a aceptar condiciones.'],
];

const FAQ_ITEMS: FaqItem[] = [
  {
    q: '¿La mediación de ejecuciones hipotecarias en Nueva Jersey es gratuita?',
    a: 'Sí, para los propietarios elegibles. No hay tarifa para presentar la solicitud de mediación del tribunal dentro del plazo normal, y el consejero de vivienda aprobado por HUD que le ayuda a prepararse es gratuito. Una solicitud tardía generalmente requiere una moción, que puede tener una tarifa de presentación en el tribunal.',
  },
  {
    q: '¿Cuándo tengo que pedir la mediación de ejecución hipotecaria en NJ?',
    a: 'Lo antes posible. Las instrucciones del tribunal permiten pedirla hasta 60 días después de la entrega de la citación y la demanda (summons and complaint) sin permiso especial. Después de eso, generalmente tiene que presentar una moción pidiéndole al tribunal que permita la mediación.',
  },
  {
    q: '¿La mediación detiene la ejecución hipotecaria o la subasta del sheriff?',
    a: 'No. Los tribunales de Nueva Jersey dicen claramente que los bancos pueden continuar con la ejecución hipotecaria durante la mediación. Usted todavía tiene que presentar su respuesta dentro de los 35 días desde la entrega y seguir cumpliendo cada plazo del tribunal mientras avanza la mediación.',
  },
  {
    q: '¿Quién califica para la mediación de ejecución hipotecaria en Nueva Jersey?',
    a: 'Generalmente, los dueños de una casa residencial de 1 a 4 familias que es su residencia principal, que enfrentan una ejecución hipotecaria presentada por un banco hipotecario, con la participación de todos los prestatarios, que no están en bancarrota en este momento y que trabajan con un consejero de vivienda aprobado por HUD. Los préstamos comerciales y las ejecuciones por gravámenes de impuestos, de condominio o de HOA no están cubiertos.',
  },
  {
    q: '¿Qué puede salir de la mediación?',
    a: 'Entre los resultados comunes están una modificación del préstamo, un plan de pagos o una tolerancia de pagos (forbearance), o una salida acordada, como una venta corta (short sale) o una entrega de la escritura en lugar de la ejecución (deed in lieu), con mejores condiciones que una subasta del sheriff. Nada está garantizado; el banco no está obligado a aceptar ningún resultado en particular.',
  },
];

export default function MediacionPage() {
  return (
    <div className="min-h-full bg-white" lang="es">
      <SiteHeader />

      <section className="bg-gradient-to-b from-slate-950 to-slate-900 text-white py-16 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-amber-400 text-xs font-semibold tracking-[0.25em] uppercase mb-4">
            <Link href="/es" className="hover:text-amber-300">Guía en español</Link> · Gratis · A cargo del tribunal
          </p>
          <h1 className="font-serif text-4xl md:text-5xl font-bold mb-5 tracking-tight">
            El Programa de Mediación de Ejecuciones Hipotecarias de NJ, Explicado
          </h1>
          <p className="text-slate-300 text-lg leading-relaxed">
            Un lugar gratuito en la mesa con su banco y un mediador neutral. Quién califica, el plazo
            para pedirla y cómo llegar preparado.
          </p>
        </div>
      </section>

      <article className="max-w-3xl mx-auto px-4 py-12">
        <div className="rounded-2xl border-2 border-amber-300 bg-amber-50 px-6 py-5 mb-10">
          <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-amber-800 mb-2">La respuesta corta</p>
          <p className="text-slate-800 leading-relaxed">
            Los tribunales de Nueva Jersey tienen un programa gratuito de mediación de ejecuciones
            hipotecarias para casas de 1 a 4 familias donde vive el dueño. Trabaje con un consejero
            gratuito aprobado por HUD y presente el formulario de solicitud del tribunal dentro de los 60
            días después de que le entregaron la demanda, para no necesitar una moción. La mediación no
            pone en pausa el caso, así que de todos modos tiene que presentar su respuesta dentro de 35
            días.
          </p>
        </div>

        <h2 className="font-serif text-2xl font-bold text-slate-900 mb-4">Quién califica</h2>
        <ul className="space-y-2.5 mb-10">
          {ELIGIBLE.map((e) => (
            <li key={e} className="flex gap-3 text-slate-600 leading-relaxed">
              <span className="text-amber-600 font-bold">✓</span>
              <span>{e}</span>
            </li>
          ))}
        </ul>

        <h2 className="font-serif text-2xl font-bold text-slate-900 mb-5">Cómo pedirla, paso a paso</h2>
        <ol className="space-y-5 mb-12">
          {STEPS.map(([t, d], i) => (
            <li key={t} className="flex gap-4">
              <span className="shrink-0 w-9 h-9 rounded-full bg-slate-900 text-white flex items-center justify-center font-bold text-sm">
                {i + 1}
              </span>
              <div>
                <p className="font-bold text-slate-900">{t}</p>
                <p className="text-slate-600 leading-relaxed mt-1">{d}</p>
              </div>
            </li>
          ))}
        </ol>

        <h2 className="font-serif text-2xl font-bold text-slate-900 mb-3">Lo que la mediación puede y no puede hacer</h2>
        <div className="space-y-4 text-slate-600 leading-relaxed mb-10">
          <p>
            <strong className="text-slate-900">Sí puede</strong> lograr que alguien con poder de decisión
            del lado del banco revise un paquete completo, con una persona neutral que mantiene el proceso
            en marcha. Muchas veces eso marca la diferencia para propietarios cuyas solicitudes de
            modificación desaparecieron en el fax de la compañía que administra su préstamo (servicer).
          </p>
          <p>
            <strong className="text-slate-900">No puede</strong> obligar al banco a aceptar nada, detener
            la demanda ni reemplazar su respuesta a la demanda. Si los números no alcanzan para quedarse
            con la casa, lo más valioso que puede lograr la mediación tal vez sea tiempo y una salida
            ordenada que proteja su plusvalía (equity) y su crédito mejor que una subasta.
          </p>
          <p>
            <strong className="text-slate-900">Cuidado con cualquiera que cobre por &quot;meterlo en la
            mediación&quot;.</strong> La solicitud, el consejero y la sesión son gratis. Cobrar por
            adelantado por servicios de rescate hipotecario es generalmente ilegal.
          </p>
        </div>

        <div className="rounded-2xl bg-slate-50 border border-slate-200 px-6 py-6 mb-10">
          <p className="font-bold text-slate-900 mb-2">¿Le acaban de entregar la demanda, o no está seguro de sus fechas?</p>
          <p className="text-slate-600 text-sm leading-relaxed mb-4">
            La calculadora de plazos (en inglés) calcula la fecha límite de sus 35 días para responder a
            partir del día en que le entregaron la demanda. Cuente 60 días desde ese mismo día para el
            plazo de la solicitud de mediación.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <Link href="/tools/deadlines" className="bg-amber-400 text-slate-950 px-6 py-3 rounded-lg font-bold text-center hover:bg-amber-300 transition">
              Calcular mis plazos
            </Link>
            <Link href="/es/documentos" className="border border-slate-300 text-slate-900 px-6 py-3 rounded-lg font-semibold text-center hover:bg-white transition">
              La citación y la demanda, explicadas
            </Link>
          </div>
        </div>
      </article>

      <RespuestasRapidas items={FAQ_ITEMS} />

      <div className="max-w-3xl mx-auto px-4 pb-14">
        <p className="text-slate-400 text-xs leading-relaxed">
          Información educativa, no asesoría legal. Los formularios y procedimientos del tribunal cambian;
          use las versiones vigentes en njcourts.gov. Fuentes: N.J. Court Rule 4:64-1B; N.J.S.A. 2A:50-56
          y 2A:50-74; materiales de autoayuda sobre ejecuciones hipotecarias de los Tribunales de Nueva
          Jersey (New Jersey Courts).
        </p>
      </div>

      <MarsNoticeEs />
    </div>
  );
}
