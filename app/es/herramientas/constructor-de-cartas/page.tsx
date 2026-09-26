import Link from 'next/link';
import type { Metadata } from 'next';
import SiteHeader from '../../../components/SiteHeader';
import MarsNoticeEs from '../../../components/MarsNoticeEs';
import type { FaqItem } from '../../../components/GuideFaq';
import RespuestasRapidas from '../../_components/RespuestasRapidas';
import ConstructorDeCartas from './ConstructorDeCartas';
import { OG_IMAGES } from '../../../../lib/og';
import { fitTitle, fitDescription } from '../../../../lib/seo';

/**
 * Spanish version of /tools/letter-builder/ (app/tools/letter-builder/page.tsx).
 * The page and form are in Spanish; the generated LETTER stays in English
 * because it goes to the servicer. Same templates and legal wording
 * (lib/letters.ts), Spanish labels and summaries in lib/letters-es.ts
 * (tested by scripts/test-letters-es.mjs). If the English page or builder
 * changes, update this one to match.
 *
 * Legal claims are limited to what the English page states (verified
 * 2026-09-24 against eCFR 12 CFR 1024.30, 1024.35, 1024.36, 1024.41 and
 * Supplement I; 12 CFR 1026.36(c)(3); N.J.S.A. 2A:17-36). Rules:
 * "generalmente" for what rules require, no outcome promises, free help
 * listed, not legal advice.
 */

const URL_ES = 'https://njforeclosureguide.org/es/herramientas/constructor-de-cartas/';
const URL_EN = 'https://njforeclosureguide.org/tools/letter-builder/';

export const metadata: Metadata = {
  title: fitTitle('Carta de Dificultad Económica y Cartas para su Hipoteca (NJ) | Gratis'),
  description: fitDescription(
    'Arme gratis su carta de dificultad económica (hardship letter) y otras cartas para su servicer en NJ: saldo total, aviso de error, aplazar la subasta y apelación.'
  ),
  keywords: [
    'carta de dificultad económica hipoteca',
    'hardship letter en español',
    'carta para el banco hipoteca',
    'cómo pedir una modificación de préstamo',
    'aplazar subasta del sheriff carta',
    'ejecución hipotecaria Nueva Jersey',
  ],
  alternates: {
    canonical: URL_ES,
    languages: { en: URL_EN, es: URL_ES, 'x-default': URL_EN },
  },
  openGraph: {
    images: OG_IMAGES,
    title: 'Constructor de Cartas para su Hipoteca (NJ)',
    description: 'Carta de dificultad económica, saldo total, aviso de error, aplazamiento de la subasta y apelación. Formulario en español, carta en inglés para su servicer. Nada de lo que escriba sale de la página.',
    url: URL_ES,
    locale: 'es_US',
  },
};

const FAQ_ITEMS: FaqItem[] = [
  {
    q: '¿Por qué la carta sale en inglés?',
    a: 'Porque va dirigida a la compañía que administra su préstamo (servicer), y el personal que la revisa y los plazos que se cuentan dependen de que puedan leerla. El formulario, las instrucciones y un resumen de lo que dice cada carta están en español para que usted sepa exactamente lo que firma. Un consejero de vivienda aprobado por HUD (800-569-4287) puede revisarla con usted, gratis y en español.',
  },
  {
    q: '¿Qué debe incluir una carta de dificultad económica (hardship letter)?',
    a: 'Su nombre, número de préstamo y la dirección de la propiedad; qué pasó y cuándo empezó; qué cambió en sus ingresos o gastos; cuáles son sus ingresos ahora; qué está pidiendo (una modificación del préstamo, un plan de pagos, una pausa de pagos, una venta corta o la entrega de la escritura en lugar de la ejecución); y una frase sobre su compromiso. Hágala corta y basada en hechos, y envíela junto con su solicitud completa de ayuda hipotecaria (loss mitigation).',
  },
  {
    q: '¿Cuánto tiempo tiene mi servicer para enviarme el saldo total para liquidar (payoff)?',
    a: 'Según el Reglamento Z (Regulation Z), 12 CFR 1026.36(c)(3), el servicer debe enviar un estado de saldo total correcto dentro de un tiempo razonable después de una solicitud por escrito, y generalmente en no más de siete días hábiles. La regla permite un tiempo razonable, sin ese límite, cuando el préstamo está en ejecución hipotecaria o en bancarrota. No hay un plazo federal equivalente para la cotización de reinstalación, así que pídala con tiempo y por escrito.',
  },
  {
    q: '¿Qué diferencia hay entre una solicitud de información y un aviso de error?',
    a: 'Una solicitud de información (12 CFR 1024.36) le pide al servicer registros o datos sobre su préstamo, como quién es el dueño o el historial de pagos. Un aviso de error (12 CFR 1024.35) dice que el servicer cometió un error específico, como no acreditar un pago. Para las dos, la regla generalmente exige un acuse de recibo por escrito en cinco días hábiles y una respuesta en 30 días hábiles, con algunos plazos más cortos y una posible extensión de 15 días.',
  },
  {
    q: '¿Puede mi servicer seguir con la subasta del sheriff mientras revisa mi modificación?',
    a: 'Si el servicer recibió su solicitud completa más de 37 días antes de la subasta, el Reglamento X (Regulation X), 12 CFR 1024.41(g), generalmente le prohíbe pedir la sentencia o la orden de venta, o realizar la subasta, hasta que le hayan negado la solicitud y termine cualquier apelación, usted rechace las opciones, o usted no cumpla un acuerdo. La regla generalmente aplica a una residencia principal y no a los servicers pequeños, y los servicers no siempre cumplen, así que guarde prueba de cada fecha y use también sus derechos de aplazamiento en la oficina del sheriff.',
  },
  {
    q: '¿Cómo apelo la negación de una modificación del préstamo?',
    a: 'Si el servicer recibió su solicitud completa 90 días o más antes de una subasta programada (o antes de que hubiera subasta programada), 12 CFR 1024.41(h) generalmente le permite apelar dentro de 14 días después del aviso de negación. La apelación la debe revisar personal distinto, y el servicer debe responder por escrito dentro de 30 días. Si la negación se basó en una prueba de valor presente neto (NPV), el aviso debe incluir los datos que usaron, así que revíselos para buscar errores.',
  },
  {
    q: '¿Qué pasa después de enviar una de estas cartas?',
    a: 'Ninguna carta puede prometer un resultado. Estas cartas dejan su pedido por escrito y activan obligaciones que las reglas federales generalmente les imponen a los servicers, pero el resultado depende de su situación y de si el servicer cumple las reglas. Envíela por un medio que se pueda rastrear, guarde copias y pida ayuda gratuita a un consejero de vivienda aprobado por HUD (800-569-4287) o a Legal Services of New Jersey (Servicios Legales de Nueva Jersey, 1-888-576-5529). En los dos puede pedir ayuda en español.',
  },
];

const SECTIONS: { h: string; body: string[] }[] = [
  {
    h: 'Carta de dificultad económica (hardship letter)',
    body: [
      'Una carta de dificultad económica le explica al equipo de ayuda hipotecaria (loss mitigation) de su servicer qué pasó, cuándo, y cuánto puede pagar ahora. Ellos leen cientos de cartas, así que una carta corta y concreta funciona mejor que una larga y emotiva. El formulario le pide solo hechos que usted pueda comprobar y los convierte en párrafos sencillos en primera persona; las frases opcionales son pedidos, nunca hechos inventados.',
      'Envíe la carta junto con su solicitud completa de ayuda hipotecaria, no en lugar de ella. Según el Reglamento X, un servicer que recibe una solicitud completa más de 37 días antes de una subasta generalmente debe evaluarlo para todas las opciones disponibles dentro de 30 días. Por eso la carta pide que lo evalúen para todas las opciones, no solo para la que usted menciona.',
    ],
  },
  {
    h: 'Pedir la cotización de reinstalación y el saldo total para liquidar',
    body: [
      'La cotización de reinstalación es lo que cuesta ponerse al día; el saldo total para liquidar (payoff) es lo que cuesta pagar todo el préstamo. Pida las dos por escrito, detalladas, con fecha de validez e instrucciones para pagar por transferencia o con fondos certificados. El Reglamento Z generalmente exige enviar el saldo total dentro de siete días hábiles después de una solicitud por escrito, pero permite “un tiempo razonable” cuando el préstamo está en ejecución hipotecaria o en bancarrota. Ninguna regla federal fija un plazo específico para la cotización de reinstalación, así que la carta la pide lo antes posible.',
    ],
  },
  {
    h: 'Solicitud de información y aviso de error (RESPA)',
    body: [
      'El Reglamento X le da dos herramientas por escrito. Una solicitud de información (12 CFR 1024.36) consigue registros: quién es el dueño de su préstamo (respuesta generalmente en 10 días hábiles), el historial de pagos, los cargos, el escrow o el estado de su solicitud (generalmente 30 días hábiles). Un aviso de error (12 CFR 1024.35) disputa un error específico; el servicer generalmente debe corregirlo o explicar por escrito por qué concluyó que no hubo error, y no le puede cobrar por responder.',
      'La razón más común por la que estas cartas fallan es la dirección. El servicer puede designar una sola dirección para estas cartas; si lo hizo, usted tiene que usarla, y el servicer debe publicarla en su sitio web si el sitio muestra alguna dirección de contacto. Envíela por un medio que se pueda rastrear y guarde una copia.',
    ],
  },
  {
    h: 'Pedir que aplacen la subasta del sheriff durante la revisión de una modificación',
    body: [
      'Si su solicitud completa de ayuda hipotecaria le llegó al servicer más de 37 días antes de la subasta, 12 CFR 1024.41(g) generalmente le prohíbe pedir la sentencia o la orden de venta, o realizar la subasta, mientras la revisión y cualquier apelación están pendientes. La interpretación oficial dice que el servicer debe darle esa instrucción a su abogado de la ejecución hipotecaria; por eso la carta lleva copia al abogado del demandante que aparece en sus papeles del tribunal. La carta está escrita de forma condicional, porque lo que cuenta es la fecha en que el servicer la recibió.',
      'Esta carta no reemplaza sus propios derechos. Según N.J.S.A. 2A:17-36, el propietario generalmente puede pedir dos aplazamientos de hasta 30 días cada uno en la oficina del sheriff del condado. Llame a la oficina del sheriff para preguntar cómo aceptan la solicitud y cuánto cuesta, y use la ',
    ],
  },
  {
    h: 'Carta de apelación de una modificación del préstamo',
    body: [
      'Según 12 CFR 1024.41(h), si el servicer recibió su solicitud completa 90 días o más antes de una subasta programada, usted generalmente puede apelar la negación de una modificación dentro de 14 días después del aviso de la decisión. La apelación la debe revisar personal distinto, y el servicer debe responder por escrito dentro de 30 días. El aviso de negación debe dar las razones específicas; si la negación se basó en un cálculo de valor presente neto (NPV), la interpretación oficial exige que incluya los datos que usaron. Si sus ingresos, sus gastos o el valor de la propiedad están mal en esos datos, dígalo en la apelación y adjunte pruebas.',
    ],
  },
];

export default function ConstructorDeCartasPage() {
  return (
    <div className="min-h-full bg-white" lang="es">
      <SiteHeader />

      <section className="bg-gradient-to-b from-slate-950 to-slate-900 text-white py-14 px-4 print:hidden">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-amber-400 text-xs font-semibold tracking-[0.25em] uppercase mb-4">
            <Link href="/es" className="hover:text-amber-300">Guía en español</Link> · Herramienta gratuita · Nada de lo que escriba sale de esta página
          </p>
          <h1 className="font-serif text-4xl md:text-5xl font-bold mb-5 tracking-tight">Constructor de Cartas para su Hipoteca</h1>
          <p className="text-slate-300 text-lg leading-relaxed">
            Elija la carta, conteste unas preguntas en español y obtenga una carta limpia y con fecha, en inglés, para
            copiar o imprimir: una carta de dificultad económica, un pedido de la cotización de reinstalación y del saldo
            total, un aviso de error (RESPA), un pedido para aplazar la subasta del sheriff o una apelación de una
            modificación. Lo que falte queda entre [corchetes] hasta que usted lo llene.
          </p>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 py-12">
        <ConstructorDeCartas />
      </section>

      <article className="max-w-3xl mx-auto px-4 pb-10 print:hidden">
        <div className="rounded-2xl border border-amber-300 bg-amber-50 px-6 py-6 mb-12">
          <p className="font-bold text-slate-900 mb-3">Primero, ayuda gratuita</p>
          <ul className="space-y-2 text-slate-700 leading-relaxed">
            <li>
              <strong className="text-slate-900">Consejero de vivienda aprobado por HUD:</strong>{' '}
              <a href="tel:18005694287" className="underline underline-offset-4 whitespace-nowrap">800-569-4287</a>. Es gratis;
              le puede ayudar a preparar su solicitud y a revisar estas cartas. Puede pedir un consejero que hable español.
            </li>
            <li>
              <strong className="text-slate-900">Legal Services of New Jersey (Servicios Legales de Nueva Jersey):</strong>{' '}
              <a href="tel:18885765529" className="underline underline-offset-4 whitespace-nowrap">1-888-576-5529</a>. Ayuda
              legal gratuita para propietarios que califican por ingresos, también en español.
            </li>
          </ul>
          <p className="text-slate-600 text-sm mt-3 leading-relaxed">
            No le pague por adelantado a ninguna empresa que ofrezca preparar estas cartas o conseguirle una
            modificación. La ayuda de arriba es gratuita, y no necesita pagarle a nadie para enviar estas cartas.
          </p>
        </div>

        {SECTIONS.map((s) => (
          <section key={s.h} className="mb-10">
            <h2 className="font-serif text-2xl font-bold text-slate-900 mb-4">{s.h}</h2>
            {s.body.map((p, n) => (
              <p key={n} className="text-slate-700 leading-relaxed mb-4">
                {p}
                {s.h.startsWith('Pedir que aplacen') && n === s.body.length - 1 && (
                  <>
                    <Link href="/es/herramientas/cuenta-regresiva/" className="font-semibold text-slate-900 underline underline-offset-4">cuenta regresiva para la subasta</Link>{' '}
                    para ver cuánto pueden mover su fecha, generalmente, los aplazamientos.
                  </>
                )}
              </p>
            ))}
          </section>
        ))}

        <div className="border-l-2 border-amber-400 pl-5 mb-12">
          <p className="text-slate-700 leading-relaxed">
            <strong className="text-slate-900">Una carta es un registro, no un resultado.</strong> Estas reglas dicen lo
            que los servicers generalmente deben hacer; los servicers no siempre cumplen, y ninguna carta asegura un
            resultado. Guarde una copia de todo, envíela por un medio que se pueda rastrear y anote cada fecha.
          </p>
        </div>

        <div className="rounded-2xl bg-slate-50 border border-slate-200 px-6 py-6 mb-6">
          <p className="font-bold text-slate-900 mb-3">Relacionado</p>
          <ul className="space-y-2 text-slate-700">
            <li><Link href="/es/herramientas/ponerse-al-dia/" className="underline underline-offset-4">Calculadora para ponerse al día: estime lo que cuesta reinstalar su hipoteca</Link></li>
            <li><Link href="/es/herramientas/cuenta-regresiva/" className="underline underline-offset-4">Cuenta regresiva para la subasta del sheriff: días que quedan y aplazamientos</Link></li>
            <li><Link href="/es/guias/mediacion/" className="underline underline-offset-4">El programa gratuito de mediación de los tribunales de Nueva Jersey</Link></li>
            <li><Link href="/es/herramientas/verificador-de-estafas/" className="underline underline-offset-4">Verificador de estafas: revise una oferta de “ayuda” antes de firmar o pagar</Link></li>
            <li><Link href="/guides/loan-modification/" className="underline underline-offset-4">La modificación del préstamo en Nueva Jersey, explicada (en inglés)</Link></li>
          </ul>
        </div>
      </article>

      <div className="print:hidden">
        <RespuestasRapidas items={FAQ_ITEMS} />
      </div>

      <div className="max-w-3xl mx-auto px-4 pb-14 print:hidden">
        <p className="text-slate-400 text-xs leading-relaxed">
          Información educativa, no asesoría legal. Las cartas son modelos; usted es responsable de lo que envía. Los
          resúmenes en español son para ayudarle a entender la carta; lo que cuenta es el texto en inglés. Fuentes:
          Regulation X, 12 CFR 1024.30, 1024.35, 1024.36 y 1024.41, con las interpretaciones oficiales de la CFPB
          (Supplement I to Part 1024, comentarios 41(b)(3)-1, 41(d)-1, 41(d)-2 y 41(g)-3); Regulation Z, 12 CFR
          1026.36(c)(3); RESPA, 12 U.S.C. 2605(e); N.J.S.A. 2A:17-36. Las protecciones federales de ayuda hipotecaria
          generalmente aplican solo a una residencia principal y no a los servicers pequeños. Un abogado con licencia en
          Nueva Jersey puede revisar su situación.
        </p>
      </div>

      <MarsNoticeEs />
    </div>
  );
}
