import Link from 'next/link';
import type { Metadata } from 'next';
import SiteHeader from '../../../components/SiteHeader';
import MarsNoticeEs from '../../../components/MarsNoticeEs';
import type { FaqItem } from '../../../components/GuideFaq';
import RespuestasRapidas from '../../_components/RespuestasRapidas';
import CalculadoraPonerseAlDia from './CalculadoraPonerseAlDia';
import { OG_IMAGES } from '../../../../lib/og';
import { fitTitle, fitDescription } from '../../../../lib/seo';

/**
 * Spanish version of /tools/catch-up/ (app/tools/catch-up/page.tsx). A
 * faithful translation: same claims, same sources, same math (lib/catchup.ts
 * via CalculadoraPonerseAlDia). If the English page or calculator changes,
 * update this one to match.
 *
 * NJ facts are limited to what the English page states: the Notice of
 * Intention (at least 30 days before a complaint; must state the amount to
 * cure under the Fair Foreclosure Act) and the right to cure generally
 * preserved up to entry of final judgment.
 * Rules: "generalmente" where courts have discretion, no outcome promises,
 * free help listed, not legal advice.
 */

const URL_ES = 'https://njforeclosureguide.org/es/herramientas/ponerse-al-dia/';
const URL_EN = 'https://njforeclosureguide.org/tools/catch-up/';

export const metadata: Metadata = {
  title: fitTitle('Calculadora para Ponerse al Día con la Hipoteca en NJ | Reinstalación'),
  description: fitDescription(
    'Calculadora gratuita: estime cuánto necesita para ponerse al día con su hipoteca en NJ, con pagos atrasados, cargos y costos, y un plan de 6 o 12 meses.'
  ),
  keywords: [
    'cuánto debo para ponerme al día con la hipoteca',
    'reinstalación hipoteca',
    'reinstalación hipoteca Nueva Jersey',
    'calculadora pagos atrasados hipoteca',
    'ponerse al día con la hipoteca NJ',
    'cotización de reinstalación',
    'ejecución hipotecaria Nueva Jersey',
  ],
  alternates: {
    canonical: URL_ES,
    languages: { en: URL_EN, es: URL_ES, 'x-default': URL_EN },
  },
  openGraph: {
    images: OG_IMAGES,
    title: 'Calculadora para Ponerse al Día con la Hipoteca en NJ',
    description: '¿Está atrasado con su hipoteca en NJ? Estime en un minuto, gratis, cuánto necesitaría para ponerse al día. Nada de lo que escriba sale de la página.',
    url: URL_ES,
    locale: 'es_US',
  },
};

const STEPS: [string, string][] = [
  ['Pida una cotización de reinstalación por escrito', 'Pídasela por escrito a la compañía que administra su préstamo (servicer). Cuando ya hay un caso de ejecución hipotecaria presentado, muchas veces la prepara el abogado del banco. Pida una cotización detallada, para poder comparar cada línea con sus propios registros.'],
  ['Pida la reinstalación, no el saldo total', 'La reinstalación es el atraso: lo que pone el préstamo al día. El saldo total para liquidar (payoff) es todo lo que queda del préstamo. Hay personas que se han asustado al ver la cifra del saldo total cuando la cantidad para reinstalar era solo una parte. Pida la cifra correcta, o las dos.'],
  ['Pida la fecha de validez', 'El total crece cada día, así que toda cotización vale solo hasta cierta fecha (good-through date). Si el dinero llega después de esa fecha, se lo pueden devolver en vez de aplicarlo. Si necesita una semana para juntar el dinero, pida una cotización con fecha para esa semana.'],
  ['Revísela y luego pague de forma segura', 'Confirme el número de pagos, los cargos por pago tardío y cualquier cargo de inspección o de abogado. Dispute los errores por escrito. Pague con fondos certificados exactamente como indica la cotización, por un medio que se pueda rastrear, y pida una confirmación por escrito de que el préstamo quedó al día.'],
];

const FAQ_ITEMS: FaqItem[] = [
  {
    q: '¿Cuánto cuesta ponerse al día con la hipoteca en Nueva Jersey?',
    a: 'Generalmente, cada pago atrasado más los cargos por pago tardío y los honorarios y costos permitidos del banco, incluidos los honorarios y costos del abogado de la ejecución hipotecaria una vez que se presentó la demanda. Esta calculadora da un estimado con fines educativos. La cifra exacta solo aparece en la cotización de reinstalación detallada y por escrito de la compañía que administra su préstamo (servicer).',
  },
  {
    q: '¿Hasta cuándo puedo reinstalar mi hipoteca en Nueva Jersey?',
    a: 'La Ley de Ejecución Hipotecaria Justa de Nueva Jersey (Fair Foreclosure Act) generalmente mantiene el derecho a curar el atraso hasta que se dicta la sentencia final. Mientras antes, más barato, porque los honorarios del abogado, los costos y los cargos por pago tardío siguen sumándose al total. Un abogado con licencia en Nueva Jersey o Legal Services of New Jersey (Servicios Legales de Nueva Jersey) le puede confirmar cómo aplica la regla a su caso.',
  },
  {
    q: '¿Dónde encuentro la cantidad que necesito para curar el atraso?',
    a: 'Antes de que se presente un caso, el Aviso de Intención de Ejecución Hipotecaria (Notice of Intention to Foreclose) debe decir la cantidad necesaria para curar el atraso, según la Fair Foreclosure Act. Después de eso, pídale a la compañía que administra su préstamo una cotización de reinstalación por escrito con fecha de validez, porque el total cambia cada día.',
  },
  {
    q: '¿Qué pasa si no puedo pagar toda la cantidad de una vez?',
    a: 'Dígaselo a la compañía que administra su préstamo y pregunte por las opciones que maneja su departamento de ayuda hipotecaria (loss mitigation), como un plan de pagos, una pausa de pagos (forbearance) o una modificación del préstamo. Los bancos no están obligados a ofrecer ningún plan en particular. Un consejero de vivienda aprobado por HUD (800-569-4287), que es gratuito, le puede ayudar a solicitarlo.',
  },
  {
    q: '¿Qué tan exacta es esta calculadora?',
    a: 'Es un estimado con fines educativos basado en lo que usted escribe. Una cotización real puede incluir cosas que su estado de cuenta no muestra, como adelantos del depósito en garantía (escrow), intereses diarios y cargos registrados después de la fecha del estado de cuenta. Nada de lo que escriba se guarda ni se envía a ninguna parte.',
  },
];

export default function PonerseAlDiaPage() {
  return (
    <div className="min-h-full bg-white" lang="es">
      <SiteHeader />

      <section className="bg-gradient-to-b from-slate-950 to-slate-900 text-white py-14 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-amber-400 text-xs font-semibold tracking-[0.25em] uppercase mb-4">
            <Link href="/es" className="hover:text-amber-300">Guía en español</Link> · Calculadora gratuita · Atrasado en los pagos
          </p>
          <h1 className="font-serif text-4xl md:text-5xl font-bold mb-5 tracking-tight">Calculadora para Ponerse al Día con la Hipoteca en NJ</h1>
          <p className="text-slate-300 text-lg leading-relaxed">
            Pagar lo que dejó de pagar, más los cargos y costos, pone el préstamo al día otra vez. Estime
            esa cantidad con su estado de cuenta en un minuto, vea cómo podría ser un plan de pagos y
            aprenda a conseguir la cifra exacta de la compañía que administra su préstamo.
          </p>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-4 py-12">
        <CalculadoraPonerseAlDia />
      </section>

      <article className="max-w-3xl mx-auto px-4 pb-10">
        <h2 className="font-serif text-2xl font-bold text-slate-900 mb-5">Cómo conseguir la cifra real</h2>
        <ol className="space-y-5 mb-12">
          {STEPS.map(([t, d], i) => (
            <li key={t} className="flex gap-4">
              <span className="shrink-0 w-9 h-9 rounded-full bg-slate-900 text-white flex items-center justify-center font-bold text-sm">{i + 1}</span>
              <div className="min-w-0">
                <p className="font-bold text-slate-900">{t}</p>
                <p className="text-slate-600 leading-relaxed mt-1">{d}</p>
              </div>
            </li>
          ))}
        </ol>
        <p className="text-slate-700 leading-relaxed mb-12">
          La <Link href="/blog/reinstatement-quote-guide/" className="font-semibold text-slate-900 underline underline-offset-4">guía de la cotización de reinstalación</Link>{' '}
          (en inglés) explica cómo leer una cotización línea por línea.
        </p>

        <h2 className="font-serif text-2xl font-bold text-slate-900 mb-5">Lo que le da la ley de Nueva Jersey</h2>
        <ul className="space-y-4 mb-12 text-slate-700 leading-relaxed list-disc pl-5">
          <li>
            <strong className="text-slate-900">Un aviso con la cifra.</strong> Antes de que se pueda
            presentar una demanda de ejecución hipotecaria, el banco tiene que enviarle un Aviso de
            Intención de Ejecución Hipotecaria (Notice of Intention to Foreclose) con al menos 30 días de
            anticipación. Según la Ley de Ejecución Hipotecaria Justa (Fair Foreclosure Act), ese aviso
            debe decir la cantidad necesaria para curar el atraso. Compare esa cifra con sus propios
            registros.
          </li>
          <li>
            <strong className="text-slate-900">Un derecho a curar el atraso que dura.</strong> La Fair
            Foreclosure Act generalmente mantiene el derecho a reinstalar el préstamo, pagando el atraso y
            los costos permitidos, hasta que se dicta la sentencia final, más tarde de lo que la mayoría
            de los propietarios cree. Mientras antes, más barato: los cargos y costos crecen a medida que
            avanza el caso.
          </li>
        </ul>

        <div className="rounded-2xl border border-amber-300 bg-amber-50 px-6 py-6 mb-12">
          <p className="font-bold text-slate-900 mb-3">Primero, ayuda gratuita</p>
          <ul className="space-y-2 text-slate-700 leading-relaxed">
            <li>
              <strong className="text-slate-900">Consejero de vivienda aprobado por HUD:</strong>{' '}
              <a href="tel:18005694287" className="underline underline-offset-4 whitespace-nowrap">800-569-4287</a>. Es gratis;
              le puede ayudar a pedir una cotización y a solicitar un plan de pagos, una pausa de pagos o una modificación.
            </li>
            <li>
              <strong className="text-slate-900">Legal Services of New Jersey (Servicios Legales de Nueva Jersey):</strong>{' '}
              <a href="tel:18885765529" className="underline underline-offset-4 whitespace-nowrap">1-888-576-5529</a>. Ayuda
              legal gratuita para propietarios que califican por ingresos.
            </li>
          </ul>
        </div>

        <div className="border-l-2 border-amber-400 pl-5 mb-12">
          <p className="text-slate-700 leading-relaxed">
            <strong className="text-slate-900">Si la cantidad está fuera de su alcance,</strong> todavía
            tiene opciones. Una{' '}
            <Link href="/guides/forbearance/" className="font-semibold text-slate-900 underline underline-offset-4">pausa de pagos (forbearance)</Link>{' '}
            puede pausar o reducir los pagos por un tiempo mientras se recupera, y una{' '}
            <Link href="/guides/loan-modification/" className="font-semibold text-slate-900 underline underline-offset-4">modificación del préstamo</Link>{' '}
            puede cambiar los términos del préstamo. Si tiene plusvalía (equity), compare cuánto le dejaría{' '}
            <Link href="/tools/net-proceeds/" className="font-semibold text-slate-900 underline underline-offset-4">una venta antes de la subasta</Link>.
            (Estas guías están en inglés.)
          </p>
        </div>

        <div className="rounded-2xl bg-slate-50 border border-slate-200 px-6 py-6 mb-6">
          <p className="font-bold text-slate-900 mb-3">Relacionado</p>
          <ul className="space-y-2 text-slate-700">
            <li><Link href="/blog/reinstatement-quote-guide/" className="underline underline-offset-4">Cómo leer una cotización de reinstalación (en inglés)</Link></li>
            <li><Link href="/guides/loan-modification/" className="underline underline-offset-4">Modificación del préstamo: quedarse con la casa cambiando los términos de la hipoteca (en inglés)</Link></li>
            <li><Link href="/guides/forbearance/" className="underline underline-offset-4">Pausa de pagos (forbearance) y diferimiento de pagos (deferment): pausar o reducir los pagos mientras se recupera (en inglés)</Link></li>
            <li><Link href="/es/herramientas/cuenta-regresiva/" className="underline underline-offset-4">Cuenta regresiva para la subasta del sheriff</Link></li>
            <li><Link href="/es/centro-de-mando/" className="underline underline-offset-4">Su centro de mando para la ejecución hipotecaria</Link></li>
            <li><Link href="/tools/net-proceeds/" className="underline underline-offset-4">Calculadora de ganancias netas de la venta de la casa (en inglés)</Link></li>
          </ul>
        </div>
      </article>

      <RespuestasRapidas items={FAQ_ITEMS} />

      <div className="max-w-3xl mx-auto px-4 pb-14">
        <p className="text-slate-400 text-xs leading-relaxed">
          Información educativa, no asesoría legal ni financiera. La cantidad necesaria para reinstalar el
          préstamo la fija la cotización por escrito de la compañía que administra su préstamo, y lo que
          aplica a su préstamo y a su caso depende de su situación; un consejero de vivienda aprobado por
          HUD o un abogado con licencia en Nueva Jersey le puede ayudar a confirmarlo.
        </p>
      </div>

      <MarsNoticeEs />
    </div>
  );
}
