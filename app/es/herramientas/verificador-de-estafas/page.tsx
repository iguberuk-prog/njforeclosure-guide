import Link from 'next/link';
import type { Metadata } from 'next';
import SiteHeader from '../../../components/SiteHeader';
import MarsNoticeEs from '../../../components/MarsNoticeEs';
import type { FaqItem } from '../../../components/GuideFaq';
import RespuestasRapidas from '../../_components/RespuestasRapidas';
import VerificadorDeEstafas from './VerificadorDeEstafas';
import { OG_IMAGES } from '../../../../lib/og';
import { fitTitle, fitDescription } from '../../../../lib/seo';

/**
 * Spanish version of /tools/scam-checker/ (app/tools/scam-checker/page.tsx).
 * Same rules and scoring (lib/scam-rules.ts); Spanish strings and Spanish
 * patterns in lib/scam-rules-es.ts (tested by scripts/test-scam-rules-es.mjs).
 * If the English page or checker changes, update this one to match.
 *
 * Legal facts are limited to what the English page states (verified
 * 2026-09-24 against 12 CFR part 1015 (Regulation O), the NJ Foreclosure
 * Rescue Fraud Prevention Act, N.J.S.A. 46:10B-53 to -68, and CFPB / FTC
 * guidance). The tool flags patterns only; it never names or accuses a
 * company. Rules: "generalmente", no outcome promises, free help first.
 */

const URL_ES = 'https://njforeclosureguide.org/es/herramientas/verificador-de-estafas/';
const URL_EN = 'https://njforeclosureguide.org/tools/scam-checker/';

export const metadata: Metadata = {
  title: fitTitle('Verificador de Estafas de Ejecución Hipotecaria (NJ): ¿Es Real Esta Oferta?'),
  description: fitDescription(
    'Pegue una carta, un mensaje o un correo sobre su ejecución hipotecaria en NJ y revise si tiene señales de estafa: cobros por adelantado, firmar la escritura, promesas. Gratis y privado.'
  ),
  keywords: [
    'estafa ejecución hipotecaria',
    'estafas de rescate hipotecario Nueva Jersey',
    'cómo saber si una oferta de ayuda hipotecaria es real',
    'fraude de modificación de préstamo',
    'estafa de la escritura',
    'foreclosure estafa en español',
  ],
  alternates: {
    canonical: URL_ES,
    languages: { en: URL_EN, es: URL_ES, 'x-default': URL_EN },
  },
  openGraph: {
    images: OG_IMAGES,
    title: 'Verificador de Estafas de Ejecución Hipotecaria (NJ)',
    description: 'Pegue la carta o el mensaje. Vea las señales de alerta, por qué importan y a quién llamar. Nada de lo que escriba sale de su navegador.',
    url: URL_ES,
    locale: 'es_US',
  },
};

const FAQ_ITEMS: FaqItem[] = [
  {
    q: '¿Es legal que una empresa de ayuda con la ejecución hipotecaria cobre por adelantado en Nueva Jersey?',
    a: 'Generalmente no. El Reglamento O federal (Regulation O, 12 CFR 1015.5) prohíbe que las empresas de alivio hipotecario cobren antes de que usted haya firmado con su prestamista o servicer un acuerdo que incluya la ayuda, y la Ley de Prevención del Fraude de Rescate Hipotecario de Nueva Jersey (Foreclosure Rescue Fraud Prevention Act) prohíbe que los consultores de ejecución hipotecaria cobren algo antes de haber terminado el trabajo. Un abogado con licencia en Nueva Jersey que lleva su caso como parte de su práctica legal puede recibir un anticipo en una cuenta fiduciaria de clientes, lo cual es distinto de una empresa que exige dinero primero.',
  },
  {
    q: '¿Cómo sé si una carta sobre mi ejecución hipotecaria es de verdad de mi prestamista?',
    a: 'No use los datos de contacto de la carta. Llame a la compañía que administra su préstamo (servicer) al número impreso en su estado de cuenta mensual o en su sitio web oficial, y pregúntele si la envió. Su servicer no le va a pedir que le pague a un tercero, que deje de hacer pagos ni que comparta la contraseña de su banca en línea.',
  },
  {
    q: 'Alguien me ofreció quedarse con la escritura para que yo le rente la casa. ¿Es una estafa?',
    a: 'Es el patrón clásico de “rescate” hipotecario, y muchas veces les cuesta a las familias su casa y toda su plusvalía. Nueva Jersey regula de cerca estos arreglos de venta con arrendamiento de vuelta y les da a los dueños el derecho a cancelar dentro de 10 días hábiles después de firmar (o hasta la subasta del sheriff, si llega antes). Hable con un abogado de Nueva Jersey o con Legal Services of New Jersey (1-888-576-5529) antes de firmar cualquier cosa que traspase su escritura, y de inmediato si ya lo hizo.',
  },
  {
    q: 'El verificador no encontró señales de alerta. ¿Quiere decir que la oferta es segura?',
    a: 'No. Solo quiere decir que no apareció en el texto ninguno de los patrones comunes que busca. Los estafadores cambian sus palabras, y la herramienta no puede saber quién envió un mensaje de verdad. Verifique cualquier oferta por su cuenta con su servicer y con un consejero gratuito aprobado por HUD (800-569-4287) antes de firmar o pagar.',
  },
  {
    q: '¿Sirve si el mensaje está en español?',
    a: 'Sí. La herramienta busca las frases de estafa más comunes en español y en inglés. Aun así, no reconoce todas las formas de decir lo mismo, así que conteste también las preguntas sobre lo que le dijeron por teléfono o en persona, que funcionan en cualquier idioma.',
  },
  {
    q: '¿Dónde denuncio una estafa de rescate hipotecario en Nueva Jersey?',
    a: 'Denúnciela a la División de Asuntos del Consumidor de Nueva Jersey (portal de quejas en línea, o 800-242-5846), a la Oficina para la Protección Financiera del Consumidor (CFPB) en consumerfinance.gov, y a la Comisión Federal de Comercio (FTC) en reportfraud.ftc.gov. Si pagó dinero, firmó papeles o compartió información de su cuenta, llame también a su banco y a un abogado.',
  },
];

export default function VerificadorDeEstafasPage() {
  return (
    <div className="min-h-full bg-white" lang="es">
      <SiteHeader />

      <section className="bg-gradient-to-b from-slate-950 to-slate-900 text-white py-14 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-amber-400 text-xs font-semibold tracking-[0.25em] uppercase mb-4">
            <Link href="/es" className="hover:text-amber-300">Guía en español</Link> · Herramienta gratuita · Nada de lo que escriba sale de su navegador
          </p>
          <h1 className="font-serif text-4xl md:text-5xl font-bold mb-5 tracking-tight">Verificador de Estafas de Ejecución Hipotecaria</h1>
          <p className="text-slate-300 text-lg leading-relaxed">
            ¿Le llegó una carta, un mensaje o una llamada que ofrece salvar su casa? Pegue lo que le enviaron y compárelo
            con las señales de alerta que las reglas federales y de Nueva Jersey señalan en las estafas de “rescate”
            hipotecario, con lo que puede hacer en su lugar.
          </p>
        </div>
      </section>

      <section className="max-w-3xl mx-auto px-4 py-12">
        <VerificadorDeEstafas />
      </section>

      <article className="max-w-3xl mx-auto px-4 pb-10">
        <div className="rounded-2xl border border-amber-300 bg-amber-50 px-6 py-6 mb-12">
          <p className="font-bold text-slate-900 mb-3">Primero, ayuda gratuita</p>
          <ul className="space-y-2 text-slate-700 leading-relaxed">
            <li>
              <strong className="text-slate-900">Consejero de vivienda aprobado por HUD:</strong>{' '}
              <a href="tel:18005694287" className="underline underline-offset-4 whitespace-nowrap">800-569-4287</a>. La
              consejería sobre ejecución hipotecaria siempre es gratuita, y puede pedir un consejero que hable español.
            </li>
            <li>
              <strong className="text-slate-900">Legal Services of New Jersey (Servicios Legales de Nueva Jersey):</strong>{' '}
              <a href="tel:18885765529" className="underline underline-offset-4 whitespace-nowrap">1-888-576-5529</a>. Ayuda
              legal gratuita para propietarios que califican por ingresos, también en español.
            </li>
          </ul>
        </div>

        <h2 className="font-serif text-2xl font-bold text-slate-900 mb-4">Cómo funciona normalmente una estafa de rescate hipotecario</h2>
        <div className="space-y-4 text-slate-600 leading-relaxed mb-12">
          <p>
            Las demandas de ejecución hipotecaria y las listas de subastas del sheriff son públicas, así que las ofertas
            llegan justo cuando el propietario tiene más miedo. La propuesta suena a ayuda: un “programa”, un
            “negociador”, un inversionista que va a “salvar la casa”. El dinero lo ganan de una de dos maneras: o usted
            paga por un trabajo que nunca se hace (o que un consejero gratuito habría hecho), o firma documentos que le
            pasan su casa y su plusvalía a otra persona.
          </p>
          <p>
            El camino gratuito hace el mismo trabajo de verdad: un consejero aprobado por HUD le ayuda a solicitarle a su
            servicer una modificación u otra opción, el programa de mediación de los tribunales de Nueva Jersey lo sienta
            a la mesa con el prestamista, y Legal Services of New Jersey defiende a los propietarios que califican por
            ingresos.
          </p>
        </div>

        <h2 className="font-serif text-2xl font-bold text-slate-900 mb-4">¿Esta ayuda es legítima? Preguntas que debe hacer primero</h2>
        <ul className="space-y-3 text-slate-600 leading-relaxed mb-12 list-disc pl-5">
          <li><strong className="text-slate-900">¿Quieren dinero antes de hacer nada?</strong> Las empresas de alivio hipotecario generalmente no pueden cobrar hasta que usted tenga un acuerdo con su prestamista, y los consultores de ejecución hipotecaria de Nueva Jersey no pueden cobrar hasta terminar el trabajo.</li>
          <li><strong className="text-slate-900">¿Quiénes son de verdad?</strong> Busque usted mismo a la empresa, la agencia o el abogado. En Nueva Jersey, los consultores de ejecución hipotecaria deben tener licencia del Departamento de Banca y Seguros, y la licencia de un abogado se puede verificar en la búsqueda de abogados de los tribunales de Nueva Jersey (Attorney Search).</li>
          <li><strong className="text-slate-900">¿Quieren que deje de hablar con su prestamista, o que les pague a ellos?</strong> Quien de verdad ayuda nunca lo pide.</li>
          <li><strong className="text-slate-900">¿Quieren su escritura, un poder notarial o el usuario de su banco?</strong> No siga adelante.</li>
          <li><strong className="text-slate-900">¿Puede llevarse los papeles a su casa?</strong> Si la respuesta es “firme hoy”, váyase.</li>
        </ul>

        <h2 className="font-serif text-2xl font-bold text-slate-900 mb-4">Señales de una estafa de modificación del préstamo</h2>
        <div className="space-y-4 text-slate-600 leading-relaxed mb-12">
          <p>
            Solo su servicer puede modificar su préstamo. Según el Reglamento O federal, una empresa que vende ayuda con
            modificaciones generalmente no puede cobrar nada hasta que usted haya firmado un acuerdo con su prestamista,
            no puede decirle que deje de comunicarse con su prestamista, y no puede mentir sobre sus probabilidades de
            éxito, sobre su obligación de seguir pagando ni sobre ninguna relación con el gobierno. Tenga cuidado con las
            aprobaciones “seguras”, las promesas de rebajar su capital en un porcentaje fijo, las “auditorías forenses del
            préstamo” pagadas, las invitaciones a unirse a una demanda “colectiva” (mass joinder) contra los bancos y los
            sellos que imitan a los del gobierno. Solicitarle ayuda usted mismo a su servicer no cuesta nada.
          </p>
        </div>

        <h2 className="font-serif text-2xl font-bold text-slate-900 mb-4">La estafa de la escritura en NJ: cómo se ve</h2>
        <div className="space-y-4 text-slate-600 leading-relaxed mb-12">
          <p>
            Las estafas para robar la escritura o la plusvalía le piden que firme su casa a nombre de otro
            “temporalmente”, que la ponga en un fideicomiso o en una compañía “para protegerla”, o que la venda y la rente
            de vuelta con la promesa de que podrá volver a comprarla después. Una vez que la escritura se registra, el
            nuevo dueño controla la propiedad y su plusvalía. La Ley de Prevención del Fraude de Rescate Hipotecario de
            Nueva Jersey prohíbe que los consultores de ejecución hipotecaria adquieran cualquier interés en su casa o un
            poder notarial, pone condiciones estrictas a los arreglos de venta con arrendamiento de vuelta, y les da a los
            dueños un plazo corto para cancelarlos. Si usted firmó algo, llame de inmediato a un abogado de Nueva Jersey o
            a Legal Services of New Jersey.
          </p>
        </div>

        <div className="rounded-2xl bg-slate-50 border border-slate-200 px-6 py-6 mb-6">
          <p className="font-bold text-slate-900 mb-3">Relacionado</p>
          <ul className="space-y-2 text-slate-700">
            <li><Link href="/es/estafas/" className="underline underline-offset-4">Estafas de “rescate” hipotecario en NJ: las 7 señales de alerta</Link></li>
            <li><Link href="/es/herramientas/fondos-sobrantes/" className="underline underline-offset-4">Calculadora de fondos sobrantes: lo que le costaría de verdad la comisión de un “buscador”</Link></li>
            <li><Link href="/es/herramientas/constructor-de-cartas/" className="underline underline-offset-4">Constructor de cartas: escríbale usted mismo a su servicer, gratis</Link></li>
            <li><Link href="/es/guias/mediacion/" className="underline underline-offset-4">Mediación de ejecuciones hipotecarias en NJ: el programa gratuito del tribunal</Link></li>
            <li><Link href="/guides/loan-modification/" className="underline underline-offset-4">Cómo funciona una modificación del préstamo real, gratis (en inglés)</Link></li>
          </ul>
        </div>
      </article>

      <RespuestasRapidas items={FAQ_ITEMS} />

      <div className="max-w-3xl mx-auto px-4 pb-14">
        <p className="text-slate-400 text-xs leading-relaxed">
          Información educativa, no asesoría legal. Esta herramienta compara el texto que usted escribe con patrones
          comunes de estafa; no puede confirmar quién envió un mensaje, si una oferta es real ni si una empresa violó la
          ley, y un resultado sin señales de alerta no quiere decir que una oferta sea segura. Fuentes: 12 CFR part 1015
          (Regulation O); N.J.S.A. 46:10B-53 a -68; guías para consumidores de la CFPB y la FTC. Un abogado con licencia en
          Nueva Jersey puede aconsejarle sobre su situación.
        </p>
      </div>

      <MarsNoticeEs />
    </div>
  );
}
