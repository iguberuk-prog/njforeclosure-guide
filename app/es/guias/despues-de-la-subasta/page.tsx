import Link from 'next/link';
import type { Metadata } from 'next';
import SiteHeader from '../../../components/SiteHeader';
import MarsNoticeEs from '../../../components/MarsNoticeEs';
import type { FaqItem } from '../../../components/GuideFaq';
import RespuestasRapidas from '../../_components/RespuestasRapidas';
import { OG_IMAGES } from '../../../../lib/og';
import { fitTitle, fitDescription } from '../../../../lib/seo';

/**
 * Spanish version of /guides/after-sheriff-sale/ (app/guides/after-sheriff-sale/page.tsx).
 * A faithful translation: same claims, same sources, no additions. If the
 * English page changes, update this one to match.
 *
 * Sources: N.J. Court Rule 4:65-5; N.J.S.A. 2A:50-2 and 2A:50-3;
 * N.J.S.A. 2A:18-61.1 (Anti-Eviction Act).
 * Rules: "generalmente" where courts have discretion, no outcome promises,
 * free legal help listed, not legal advice.
 */

const URL_ES = 'https://njforeclosureguide.org/es/guias/despues-de-la-subasta/';
const URL_EN = 'https://njforeclosureguide.org/guides/after-sheriff-sale/';

export const metadata: Metadata = {
  title: fitTitle('¿Qué Pasa Después de la Subasta del Sheriff en Nueva Jersey? Plazos, Derechos y Dinero'),
  description:
    fitDescription('Después de una subasta del sheriff en Nueva Jersey: el plazo de 10 días, cuándo se entrega la escritura, cuánto tiempo puede quedarse, la orden de posesión, el dinero por llaves, los fondos sobrantes y las deficiencias, en orden.'),
  alternates: {
    canonical: URL_ES,
    languages: { en: URL_EN, es: URL_ES, 'x-default': URL_EN },
  },
  openGraph: {
    images: OG_IMAGES,
    title: 'Qué Pasa Después de la Subasta del Sheriff en Nueva Jersey',
    description: 'Todo lo que pasa después de la subasta, en orden: sus derechos, sus plazos y el dinero que todavía puede ser suyo.',
    url: URL_ES,
    locale: 'es_US',
  },
};

const STEPS: { when: string; what: string; body: string }[] = [
  {
    when: 'Día de la subasta',
    what: 'Se realiza la subasta',
    body: 'La propiedad se vende al mejor postor, que muchas veces es el propio banco, ofreciendo hasta lo que se le debe. Ese día nada cambia en la puerta de su casa: usted sigue viviendo ahí legalmente, y nadie puede cambiar las cerraduras ni cortar los servicios por causa de la subasta.',
  },
  {
    when: 'Días 1 a 10',
    what: 'El plazo para objetar y para redimir',
    body: 'Las reglas de los tribunales de Nueva Jersey generalmente dan 10 días después de la subasta para presentar objeciones antes de que el sheriff entregue la escritura. Durante ese plazo se puede impugnar la venta por problemas reales (avisos defectuosos, irregularidades en la subasta), y el dueño generalmente todavía puede redimir la casa (recuperarla) pagando todo lo que debe. Redimir requiere el monto completo, así que es realista sobre todo cuando ya está lista una refinanciación, una venta o dinero de la familia.',
  },
  {
    when: 'Después del día 10',
    what: 'Se entrega la escritura del sheriff (sheriff’s deed)',
    body: 'Una vez que pasa el plazo de objeciones y el comprador paga el resto de su oferta, el sheriff entrega la escritura y la propiedad cambia de dueño. A partir de ese momento, generalmente ya no es posible recuperar la casa.',
  },
  {
    when: 'Semanas después',
    what: 'El comprador le pide al tribunal una orden de posesión',
    body: 'Un nuevo dueño no puede sacar a nadie por su cuenta. Tiene que obtener del tribunal una orden de posesión (writ of possession), y es el sheriff, no el comprador, quien la ejecuta después de avisar la fecha del desalojo. Toda la transición normalmente toma semanas.',
  },
  {
    when: 'Antes del desalojo',
    what: 'Usted puede pedir más tiempo',
    body: 'El propietario puede presentar una moción para pedirle al tribunal una breve suspensión por dificultades (hardship stay). Además, muchos compradores prefieren pagar por una mudanza programada y ordenada antes que pasar por el sheriff; de ahí vienen las ofertas de dinero por llaves (cash for keys).',
  },
];

const FAQ_ITEMS: FaqItem[] = [
  {
    q: '¿Cuánto tiempo puedo quedarme en mi casa después de la subasta del sheriff en Nueva Jersey?',
    a: 'Normalmente semanas, no días. Después de la subasta hay un plazo de 10 días para objeciones antes de que se entregue la escritura, y luego el comprador tiene que obtener del tribunal una orden de posesión (writ of possession), que el sheriff ejecuta después de avisar la fecha del desalojo. El comprador no puede cambiarle las cerraduras ni cortarle los servicios por su cuenta. Los tribunales pueden conceder breves suspensiones por dificultades, y los compradores muchas veces ofrecen dinero por llaves (cash for keys) a cambio de una mudanza en una fecha acordada.',
  },
  {
    q: '¿Puedo recuperar mi casa después de la subasta del sheriff en NJ?',
    a: 'Generalmente solo durante el breve plazo antes de que se entregue la escritura del sheriff (que comúnmente se describe como 10 días después de la subasta), pagando todo lo que debe, o si un tribunal anula la venta por un defecto real, como un aviso indebido. Después de que se entrega la escritura, generalmente ya no es posible recuperar la casa; por eso la fecha de la subasta es el verdadero plazo alrededor del cual hay que planificar.',
  },
  {
    q: '¿El banco todavía me puede demandar después de que se vende la casa?',
    a: 'Es posible. Si la subasta dejó menos de lo que se debía, el banco puede reclamar una deficiencia, pero Nueva Jersey exige una demanda aparte, presentada dentro de los tres meses siguientes a la subasta, y el propietario puede pedirle al tribunal que se le acredite el valor justo de mercado de la casa y no solo el precio de la subasta. En la práctica, muchas deficiencias en casos de vivienda nunca se reclaman. Una venta corta (short sale) o una entrega de la escritura en lugar de la ejecución (deed in lieu) con una renuncia por escrito, o la cancelación de deudas en una bancarrota (bankruptcy discharge), pueden eliminar ese riesgo.',
  },
  {
    q: '¿Qué pasa si la subasta del sheriff dejó más de lo que yo debía?',
    a: 'Los fondos sobrantes le pertenecen al antiguo dueño después de que se pagan los gravámenes posteriores (junior liens). Se depositan con el tribunal y hay que reclamarlos con una moción en el caso de ejecución hipotecaria; no se los envían por correo automáticamente. Tenga cuidado con las compañías de "recuperación" que cobran un porcentaje grande por lo que, en el fondo, es un trámite ante el tribunal.',
  },
  {
    q: 'Yo rento la casa. ¿La subasta del sheriff termina mi contrato de arrendamiento?',
    a: 'No por sí sola. En Nueva Jersey, los inquilinos de vivienda generalmente están protegidos por la Ley contra Desalojos (Anti-Eviction Act), lo que significa que un nuevo dueño normalmente necesita una causa legal reconocida por esa ley para sacar a un inquilino. Siga pagando la renta según le indiquen por escrito, y comuníquese con Legal Services of New Jersey (1-888-576-5529) si alguien lo presiona para que se vaya.',
  },
];

export default function DespuesDeLaSubastaPage() {
  return (
    <div className="min-h-full bg-white" lang="es">
      <SiteHeader />

      <section className="bg-gradient-to-b from-slate-950 to-slate-900 text-white py-16 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-amber-400 text-xs font-semibold tracking-[0.25em] uppercase mb-4">
            <Link href="/es" className="hover:text-amber-300">Guía en español</Link> · Después de la subasta
          </p>
          <h1 className="font-serif text-4xl md:text-5xl font-bold mb-5 tracking-tight">
            Qué Pasa Después de la Subasta del Sheriff en Nueva Jersey
          </h1>
          <p className="text-slate-300 text-lg leading-relaxed">
            El martillazo no es el final de la historia. Aquí está todo lo que pasa después de la
            subasta, en orden: lo que todavía puede hacer, cuánto tiempo puede quedarse y el dinero que
            todavía puede ser suyo.
          </p>
        </div>
      </section>

      <article className="max-w-3xl mx-auto px-4 py-12">
        <div className="rounded-2xl border-2 border-amber-300 bg-amber-50 px-6 py-5 mb-10">
          <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-amber-800 mb-2">La respuesta corta</p>
          <p className="text-slate-800 leading-relaxed">
            Después de una subasta del sheriff (sheriff sale) en Nueva Jersey, generalmente hay un plazo
            de 10 días para objetar y redimir antes de que se entregue la escritura del sheriff. Después
            de eso, el comprador tiene que obtener del tribunal una orden de posesión, que el sheriff
            ejecuta con aviso previo, antes de que a alguien se le pueda exigir que se vaya; por eso la
            transición normalmente toma semanas. Cualquier sobrante por encima de la sentencia le
            pertenece a usted, y un banco que quiera cobrar una deficiencia tiene que demandar dentro de
            los tres meses siguientes a la subasta.
          </p>
        </div>

        <h2 className="font-serif text-2xl font-bold text-slate-900 mb-5">Lo que pasa, paso a paso</h2>
        <ol className="space-y-5 mb-12">
          {STEPS.map((s, i) => (
            <li key={s.what} className="flex gap-4">
              <span className="shrink-0 w-9 h-9 rounded-full bg-slate-900 text-white flex items-center justify-center font-bold text-sm">
                {i + 1}
              </span>
              <div>
                <p className="text-[11px] font-bold uppercase tracking-wider text-amber-700">{s.when}</p>
                <p className="font-bold text-slate-900">{s.what}</p>
                <p className="text-slate-600 leading-relaxed mt-1">{s.body}</p>
              </div>
            </li>
          ))}
        </ol>

        <h2 className="font-serif text-2xl font-bold text-slate-900 mb-3">Si la subasta todavía no ha ocurrido</h2>
        <div className="space-y-4 text-slate-600 leading-relaxed mb-10">
          <p>
            Todo lo anterior es más difícil que actuar antes de la subasta. Los propietarios en Nueva
            Jersey generalmente tienen derecho a dos aplazamientos de una subasta programada, de hasta 30
            días cada uno, y una venta de la casa, una revisión completa de alternativas de pago (loss
            mitigation) o una petición de bancarrota del Capítulo 13 todavía pueden cambiar el resultado
            antes del martillazo. Empiece con la{' '}
            <Link href="/sheriff-sales" className="text-slate-900 underline underline-offset-4 font-semibold">lista oficial de subastas de su condado</Link>{' '}
            (en inglés) y con{' '}
            <Link href="/es/preguntas/puedo-detener-la-venta-del-sheriff/" className="text-slate-900 underline underline-offset-4 font-semibold">cómo funcionan los aplazamientos</Link>.
          </p>
        </div>

        <h2 className="font-serif text-2xl font-bold text-slate-900 mb-3">Dinero por llaves: opcional, negociable y por escrito</h2>
        <div className="space-y-4 text-slate-600 leading-relaxed mb-10">
          <p>
            Como el desalojo a través del sheriff le cuesta tiempo y dinero al comprador, muchos
            compradores ofrecen un pago a cambio de que usted se vaya en una fecha acordada y deje la
            casa limpia y vacía. Usted nunca está obligado a aceptar, y tanto la cantidad como la fecha
            se pueden negociar. Si acepta, pídalo por escrito: la cantidad, la fecha de mudanza, cómo y
            cuándo le pagan, y en qué condiciones se espera que deje la casa. Tómele fotos a la casa
            cuando se vaya.
          </p>
        </div>

        <h2 className="font-serif text-2xl font-bold text-slate-900 mb-3">El dinero: fondos sobrantes y deficiencia</h2>
        <div className="space-y-4 text-slate-600 leading-relaxed mb-10">
          <p>
            <strong className="text-slate-900">Si la subasta dejó más que la sentencia,</strong> el
            sobrante se deposita con el tribunal. Después de pagar los gravámenes posteriores válidos
            (una segunda hipoteca, un HELOC, acreedores con sentencias), lo que queda es suyo, y hay que
            reclamarlo.{' '}
            <Link href="/es/herramientas/fondos-sobrantes/" className="text-slate-900 underline underline-offset-4 font-semibold">Calcúlelo con la calculadora de fondos sobrantes</Link>{' '}
            o lea{' '}
            <Link href="/es/blog/fondos-excedentes-dinero-que-es-suyo/" className="text-slate-900 underline underline-offset-4 font-semibold">cómo reclamarlo usted mismo</Link>.
          </p>
          <p>
            <strong className="text-slate-900">Si dejó menos,</strong> el banco puede reclamar la
            diferencia, pero Nueva Jersey lo hace difícil: una demanda aparte, presentada dentro de los
            tres meses siguientes a la subasta, y su derecho a que se le acredite contra la deuda el valor
            justo de mercado de la casa, y no solo el precio de la subasta. Si le entregan una demanda por
            deficiencia, ese crédito es lo primero que debe plantear con un abogado, y el plazo para
            responder es real.
          </p>
          <p>
            <strong className="text-slate-900">Impuestos:</strong> una ejecución hipotecaria puede
            generar un formulario 1099-A o 1099-C del IRS. Si la deuda cancelada paga impuestos o no
            depende de su situación y de la ley federal vigente, así que pregúntele a un profesional de
            impuestos o a una clínica gratuita de impuestos VITA antes de presentar su declaración.
          </p>
        </div>

        <h2 className="font-serif text-2xl font-bold text-slate-900 mb-3">Sus derechos mientras sigue en la casa</h2>
        <ul className="list-disc pl-5 space-y-2 text-slate-600 leading-relaxed mb-10">
          <li>El comprador no puede cambiar las cerraduras, cortar los servicios ni sacar sus pertenencias. El desalojo solo ocurre mediante una orden del tribunal que ejecuta el sheriff.</li>
          <li>Guarde cada aviso. Las fechas que cuentan son las de la orden de posesión y las del aviso del sheriff.</li>
          <li>Los inquilinos de la casa generalmente están protegidos por la Ley contra Desalojos (Anti-Eviction Act) de Nueva Jersey. Vea la <Link href="/es/blog/derechos-de-inquilinos-casa-en-ejecucion/" className="text-slate-900 underline underline-offset-4">guía para inquilinos</Link>.</li>
          <li>Presentar una bancarrota activa una suspensión automática (automatic stay), pero si ayuda o no después de que la escritura ya cambió de dueño es una pregunta para un abogado de bancarrota, no algo para intentar por su cuenta.</li>
        </ul>

        <div className="rounded-2xl bg-slate-50 border border-slate-200 px-6 py-6 mb-10">
          <p className="font-bold text-slate-900 mb-2">Ayuda legal gratuita</p>
          <p className="text-slate-600 text-sm leading-relaxed mb-4">
            Legal Services of New Jersey (1-888-576-5529) ayuda gratis a propietarios e inquilinos que
            califican por ingresos, incluso después de una subasta. Un consejero de vivienda aprobado por
            HUD (800-569-4287) le puede ayudar a planificar la mudanza y el dinero.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <Link href="/es/centro-de-mando" className="bg-amber-400 text-slate-950 px-6 py-3 rounded-lg font-bold text-center hover:bg-amber-300 transition">
              Armar mi plan gratis →
            </Link>
            <Link href="/es/documentos" className="border border-slate-300 text-slate-900 px-6 py-3 rounded-lg font-semibold text-center hover:bg-white transition">
              La orden de posesión, explicada
            </Link>
          </div>
        </div>
      </article>

      <RespuestasRapidas items={FAQ_ITEMS} />

      <div className="max-w-3xl mx-auto px-4 pb-14">
        <p className="text-slate-400 text-xs leading-relaxed">
          Información educativa, no asesoría legal ni de impuestos. Sus derechos después de la subasta
          dependen de su caso, de sus papeles del tribunal y del juez; un abogado con licencia en Nueva
          Jersey puede confirmar qué aplica a su caso. Fuentes: N.J. Court Rule 4:65-5; N.J.S.A. 2A:50-2
          y 2A:50-3; N.J.S.A. 2A:18-61.1.
        </p>
      </div>

      <MarsNoticeEs />
    </div>
  );
}
