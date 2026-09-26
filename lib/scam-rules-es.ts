/**
 * Spanish strings and Spanish-language patterns for the Foreclosure Scam
 * Checker (/es/herramientas/verificador-de-estafas/).
 *
 * Scoring, severities, rule ids and the English patterns all live in
 * lib/scam-rules.ts; this file is a parallel structure keyed by the same ids:
 *  - RULES_ES / CHECKLIST_ES / LEGIT_ES / RATING_LABEL_ES: what the Spanish
 *    page shows. Faithful translations of the English "why" and "instead"
 *    text: same sources, same citations, no new legal claims.
 *  - SPANISH_OPTIONS: extra Spanish patterns passed to analyzeMessage() so
 *    common Spanish scam wording is caught too. They go through the same
 *    negation, `unless` and scoring logic as the English patterns. Rules
 *    with no Spanish patterns (e.g. surplus-recovery, whose `requiresAll`
 *    gate is English-only, and sovereign-scheme) still match English text
 *    and the checklist.
 *
 * Tested by scripts/test-scam-rules-es.mjs. Accents are optional in every
 * pattern ([aá], [oó]...), because people often type without them. JS \b
 * does not treat accented letters as word characters, so no \b is placed
 * next to an accented letter.
 */

import type { AnalyzeOptions, Rating, Severity } from './scam-rules';

export interface RuleEs {
  title: string;
  why: string;
  instead: string;
  link?: { href: string; label: string };
}

export const RULES_ES: Record<string, RuleEs> = {
  'upfront-fee': {
    title: 'Un cobro antes de recibir cualquier ayuda',
    why:
      'El Reglamento O federal (Regulation O, 12 CFR 1015.5) generalmente prohíbe que las empresas de “alivio hipotecario” cobren cualquier cargo antes de que usted haya firmado un acuerdo por escrito con su prestamista o servicer que incluya esa ayuda. La Ley de Prevención del Fraude de Rescate Hipotecario de Nueva Jersey (N.J.S.A. 46:10B-58) también prohíbe que los consultores de ejecución hipotecaria cobren algo antes de haber terminado todo el trabajo y conseguido la ayuda. Un abogado con licencia en Nueva Jersey puede recibir un anticipo en una cuenta fiduciaria de clientes, pero una empresa que pide dinero primero es la señal de estafa más común.',
    instead:
      'No pague. Existe ayuda gratuita justamente para esto: un consejero de vivienda aprobado por HUD (800-569-4287; la consejería sobre ejecución hipotecaria siempre es gratuita) puede preparar y enviar a su servicer una solicitud de ayuda hipotecaria (loss mitigation), que no cuesta nada presentar.',
  },
  'gov-fee': {
    title: 'Un “programa del gobierno” que pide un cobro',
    why:
      'La CFPB lo dice claramente: los funcionarios reales del gobierno nunca le piden dinero para ayudarle. El Reglamento O (12 CFR 1015.3) también prohíbe hacerse pasar por afiliado del gobierno, de un programa del gobierno o de su prestamista.',
    instead:
      'Cuelgue o no haga caso. Busque usted mismo la agencia real en un sitio .gov y llame al número que aparece allí, no al número del mensaje.',
  },
  'deed-transfer': {
    title: 'Firmarles la escritura o el título de su casa',
    why:
      'Entregar su escritura (deed) “temporalmente” o “para proteger la casa” es la manera en que muchas familias pierden su casa y su plusvalía (equity). Una vez que la escritura se registra a nombre de otra persona, esa persona es la dueña de la propiedad, puede pedir préstamos con ella o venderla, y usted puede terminar siendo su inquilino. La Ley de Prevención del Fraude de Rescate Hipotecario de Nueva Jersey prohíbe que los consultores de ejecución hipotecaria adquieran cualquier interés en su casa (N.J.S.A. 46:10B-58) y regula estrictamente cualquier arreglo de venta con arrendamiento de vuelta.',
    instead:
      'No firme nada que traspase su escritura o su título, salvo en un cierre real que usted eligió y después de que su propio abogado de Nueva Jersey lo revise. Legal Services of New Jersey (Servicios Legales de Nueva Jersey, 1-888-576-5529) ayuda gratis a propietarios que califican por ingresos. Si ya firmó, llame a un abogado de inmediato: algunos traspasos se pueden cancelar dentro de plazos cortos.',
  },
  leaseback: {
    title: 'Venderles la casa y rentársela de vuelta',
    why:
      'Los “rescates” de venta con arrendamiento de vuelta fueron la estafa típica de la última ola de ejecuciones hipotecarias: usted les firma la casa, les paga renta y le prometen que después podrá volver a comprarla. Las condiciones para recomprarla muchas veces son imposibles de cumplir, y la plusvalía se la queda el comprador. Nueva Jersey regula estos arreglos de cerca (N.J.S.A. 46:10B-61 y -63), incluido el derecho a cancelar hasta la medianoche del décimo día hábil después de firmar, o hasta la subasta del sheriff si llega antes.',
    instead:
      'No firme. Si vender es lo que le conviene, venda en el mercado abierto y quédese con su plusvalía. Pida que un abogado de Nueva Jersey o un consejero aprobado por HUD (800-569-4287) revise cualquier oferta antes de firmar.',
  },
  'stop-paying': {
    title: 'Que deje de pagarle a su prestamista, o que les pague a ellos',
    why:
      'Que le digan que deje de pagarle a su prestamista, o que le pague al “ayudante” en su lugar, es una de las primeras señales de alerta que menciona la CFPB. Los pagos que no hace suman cargos y hacen avanzar la ejecución hipotecaria, y el dinero enviado a un tercero normalmente nunca llega a su préstamo. El Reglamento O (12 CFR 1015.3(b)(4)) prohíbe que las empresas de alivio hipotecario mientan sobre su obligación de seguir pagando.',
    instead:
      'Siga tratando directamente con su servicer y pague solo al servicer que aparece en su estado de cuenta de la hipoteca. Si no puede hacer el pago, dígaselo al servicer y pida una solicitud de ayuda hipotecaria (loss mitigation).',
  },
  'no-contact': {
    title: 'Que lo aíslen de su prestamista o de su abogado',
    why:
      'El Reglamento O (12 CFR 1015.3(a)) prohíbe que una empresa de alivio hipotecario le diga que usted no puede o no debe comunicarse con su prestamista o servicer. Quien quiere aislarlo de su servicer, de un consejero o de un abogado normalmente necesita que usted no verifique lo que le está diciendo.',
    instead:
      'Siga hablando usted mismo con su servicer y guarde copia de todo. Antes de firmar, pida la opinión de un consejero aprobado por HUD (800-569-4287) o de Legal Services of New Jersey (1-888-576-5529).',
  },
  guarantee: {
    title: 'Un resultado “garantizado”',
    why:
      'Nadie puede prometerle que el prestamista va a modificar su préstamo o que la ejecución hipotecaria no seguirá adelante. El Reglamento O (12 CFR 1015.3(b)(1)) prohíbe mentir sobre las probabilidades de éxito, y Nueva Jersey exige que los contratos de los consultores de ejecución hipotecaria adviertan que el consultor no puede prometer un refinanciamiento (N.J.S.A. 46:10B-56). La FTC señala que un abogado serio tampoco promete resultados.',
    instead:
      'Tome cualquier promesa de resultado como una razón para irse. Pregúntele directamente a su servicer para qué opciones lo están evaluando, y use el programa gratuito de mediación del tribunal si ya presentaron su caso.',
  },
  'account-login': {
    title: 'Le piden su usuario del banco o un código de seguridad',
    why:
      'Ningún servicer, consejero, tribunal ni programa del gobierno necesita la contraseña de su banca en línea ni el código de un solo uso que le manda su banco. Con eso, alguien puede vaciar sus cuentas. Es un robo de cuentas disfrazado de ayuda hipotecaria.',
    instead:
      'Nunca comparta una contraseña ni un código. Si ya lo hizo, llame a su banco al número de su tarjeta o de su estado de cuenta, cambie su contraseña y pida que vigilen la cuenta.',
  },
  'untraceable-payment': {
    title: 'Pago con tarjetas de regalo, criptomonedas o aplicaciones de pago',
    why:
      'La FTC advierte que los estafadores prefieren formas de pago difíciles de rastrear o de revertir. Su servicer, el tribunal, el sheriff y los programas reales del gobierno no aceptan tarjetas de regalo, criptomonedas ni pagos por aplicaciones entre personas para ayuda hipotecaria.',
    instead:
      'No envíe dinero de esta forma. Pague su hipoteca solo por los medios del propio servicer que aparecen en su estado de cuenta.',
  },
  'sovereign-scheme': {
    title: 'Papeles que dicen que “su hipoteca ya está pagada”',
    why:
      'Los papeles que dicen que el Tesoro “ya pagó” una hipoteca, que se puede cancelar con un bono o con un sello de “accepted for value”, o anular con registros UCC, no tienen ningún efecto legal. Los tribunales rechazan esas teorías, presentarlas no detiene los cargos ni los plazos que siguen corriendo, y presentar documentos falsos puede exponer al propietario a sanciones.',
    instead:
      'No presente esos documentos ni pague por ellos. Si usted tiene una defensa contra la ejecución hipotecaria, un abogado de Nueva Jersey o Legal Services of New Jersey (1-888-576-5529) le puede decir si es real.',
  },
  'gov-affiliation': {
    title: 'Dicen ser un programa del gobierno',
    why:
      'La CFPB advierte que los estafadores usan nombres, sellos y logotipos que parecen o suenan como agencias del gobierno. El Reglamento O (12 CFR 1015.3(b)(3)) prohíbe hacerse pasar por afiliado del gobierno o de un programa del gobierno. Los programas reales (y los consejeros aprobados por HUD) no le cobran por solicitar. Programas que ya terminaron, como HAMP y HARP, los delatan.',
    instead:
      'Busque el programa usted mismo en un sitio web oficial .gov y llame al número que aparece allí. Nunca use el teléfono, el enlace ni el código QR del mensaje.',
  },
  'forensic-audit': {
    title: 'Una “auditoría forense del préstamo” pagada',
    why:
      'La CFPB menciona las “auditorías forenses” como señal de estafa, y la FTC advierte que nadie puede prometer que una auditoría le conseguirá una modificación. La FTC considera que venderla es un servicio de alivio hipotecario, así que aplica la prohibición de cobrar por adelantado. Su servicer no necesita una auditoría para evaluarlo.',
    instead:
      'Si cree que manejaron mal su préstamo, envíele gratis a su servicer una solicitud de información o un aviso de error por escrito, o pídale a un consejero aprobado por HUD o a Legal Services of New Jersey que lo revise.',
    link: { href: '/es/herramientas/constructor-de-cartas/?letter=rfi', label: 'Constructor de cartas: solicitud de información o aviso de error' },
  },
  'mass-joinder': {
    title: 'Únase a una demanda contra los bancos',
    why:
      'La FTC ha cerrado operaciones que vendían lugares en demandas “colectivas” (mass joinder) contra los prestamistas, prometiendo que frenarían las ejecuciones hipotecarias o que las personas se quedarían con la casa libre de deudas. No son demandas colectivas de verdad: cada propietario igual tiene que probar su propio caso, y normalmente cobran por adelantado.',
    instead:
      'Para su propio caso, conteste a tiempo la demanda de ejecución hipotecaria y pregunte por el programa gratuito de mediación del tribunal. Legal Services of New Jersey (1-888-576-5529) le puede decir si tiene una defensa real.',
  },
  'surplus-recovery': {
    title: 'Un porcentaje de su dinero sobrante',
    why:
      'Si la subasta del sheriff dejó más de lo que se debía, el sobrante generalmente es suyo después de los gravámenes válidos, y se reclama al Fondo Fiduciario del Tribunal Superior (Superior Court Trust Fund) con una moción ante el tribunal. Quienes “buscan” esos fondos muchas veces piden entre una cuarta parte y un tercio, a veces antes de que usted sepa si hay dinero o cuánto.',
    instead:
      'Antes de firmar nada, confirme con la Unidad del Fondo Fiduciario del Tribunal Superior (Superior Court Trust Fund Unit) si se depositó dinero en su caso, y primero estímelo usted mismo.',
    link: { href: '/es/herramientas/fondos-sobrantes/', label: 'Calculadora de fondos sobrantes' },
  },
  'too-good': {
    title: 'Promesas demasiado buenas para ser verdad',
    why:
      'Las promesas de grandes rebajas del capital, de una deuda “borrada”, o de que usted ya fue “preaprobado” o “seleccionado” para recibir ayuda antes de que alguien haya visto sus finanzas son ganchos de venta. El Reglamento O prohíbe mentir sobre cuánto ahorrará un propietario o sobre las probabilidades de éxito (12 CFR 1015.3(b)).',
    instead:
      'Solo su servicer puede ofrecerle una modificación. Pregúntele directamente, por escrito, para qué opciones lo están evaluando.',
  },
  'attorney-front': {
    title: '“Respaldados por abogados” o un anticipo por ayuda hipotecaria',
    why:
      'El Reglamento O exime a un abogado solo cuando la ayuda es parte del ejercicio de la abogacía, el abogado tiene licencia donde usted vive o donde está la casa, y cumple las reglas del estado; un cobro por adelantado solo se permite si se deposita en una cuenta fiduciaria de clientes (12 CFR 1015.7). Las empresas que dicen estar “respaldadas por abogados” o tener “una red de abogados” muchas veces no son bufetes, y la ley de fraude de rescate de Nueva Jersey exime solo a los abogados con licencia en Nueva Jersey que actúan bajo su licencia.',
    instead:
      'Pida el nombre completo del abogado, confirme su licencia en la búsqueda de abogados de los tribunales de Nueva Jersey (Attorney Search, en njcourts.gov), hable o reúnase directamente con él, y pida un acuerdo de honorarios por escrito. Legal Services of New Jersey (1-888-576-5529) es gratis si usted califica.',
  },
  'power-of-attorney': {
    title: 'Le piden un poder notarial (power of attorney)',
    why:
      'Un poder notarial puede permitir que alguien firme documentos a su nombre, incluida una escritura. La ley de fraude de rescate de Nueva Jersey prohíbe que los consultores de ejecución hipotecaria acepten un poder notarial, salvo para revisar documentos (N.J.S.A. 46:10B-58).',
    instead:
      'No le dé un poder notarial a nadie que le ofrezca ayuda con la ejecución hipotecaria. Su servicer hablará con un consejero o abogado que usted autorice mediante un simple formulario de autorización de terceros.',
  },
  pressure: {
    title: 'Presión para actuar ya',
    why:
      'La CFPB y la FTC mencionan la presión para actuar o firmar de inmediato como señal de estafa. Las opciones legítimas aguantan un día o dos para pensarlo, y Nueva Jersey les da tiempo real a los propietarios: un plazo para contestar después de recibir la demanda, mediación gratuita en el tribunal y, generalmente, dos aplazamientos de una subasta del sheriff programada.',
    instead:
      'Llévese los papeles a su casa y pida que un consejero aprobado por HUD o un abogado los lea antes de firmar. Los plazos reales están en sus papeles del tribunal y en la lista del sheriff de su condado; revíselos directamente.',
  },
  'sign-without-reading': {
    title: 'Firmar sin leer, o firmar formularios en blanco',
    why:
      'La CFPB menciona como señal de alerta que lo presionen para firmar papeles que usted no entiende. Los documentos en blanco o sin leer son la forma en que se meten traspasos de escritura y gravámenes dentro de un paquete de “rescate”.',
    instead:
      'Nunca firme nada en blanco ni sin leer. Usted tiene derecho a recibir copia de todo y a que su propio consejero o abogado lo revise.',
  },
  'wire-transfer': {
    title: 'Envíe el dinero por transferencia bancaria',
    why:
      'Las transferencias bancarias (wires) son casi imposibles de revertir. Los servicers y los abogados de cierre sí aceptan transferencias para liquidar o reinstalar un préstamo, y justamente por eso los delincuentes mandan instrucciones de transferencia falsas o cambiadas.',
    instead:
      'Antes de transferir dinero, llame a su servicer o a su abogado a un número que usted mismo busque (en su estado de cuenta o en su sitio web oficial) y confirme las instrucciones de viva voz.',
  },
  'sensitive-info': {
    title: 'Le piden su número de Seguro Social o de cuenta',
    why:
      'La solicitud escrita de ayuda hipotecaria de su servicer puede pedir legítimamente sus datos de identificación, pero un mensaje de texto, una llamada o un remitente desconocido que le pide su número de Seguro Social o de su cuenta bancaria es una táctica clásica de robo de identidad.',
    instead:
      'Dé sus datos personales solo por medios que usted mismo inició, usando el teléfono o el portal que aparece en su estado de cuenta de la hipoteca.',
  },
};

export const CHECKLIST_ES: Record<string, string> = {
  'q-deed': 'Me pidieron que les firmara la escritura de mi casa',
  'q-stop': 'Me dijeron que dejara de pagar mi hipoteca',
  'q-fee': 'Quieren que les pague antes de hacer cualquier cosa',
  'q-nocontact': 'Me dijeron que no hablara con mi prestamista o con mi abogado',
  'q-guarantee': 'Me aseguraron que pueden salvar mi casa, sin falta',
  'q-rent': 'Quieren que les pague renta / que les rente la casa de vuelta',
  'q-login': 'Me pidieron mi usuario y contraseña del banco',
  'q-govfee': 'Dicen ser de un programa del gobierno y me piden un pago',
  'q-pressure': 'Me presionan para que firme hoy',
};

export const LEGIT_ES: Record<string, string> = {
  'hud-counselor': 'Menciona a un consejero de vivienda aprobado por HUD',
  'court-mediation': 'Menciona a los tribunales de NJ o su programa de mediación de ejecuciones hipotecarias',
  lsnj: 'Lo refiere a Legal Services of New Jersey (Servicios Legales de Nueva Jersey)',
  'servicer-letter': 'Parece una carta del servicer (número de préstamo, lenguaje de ayuda hipotecaria) sin pedir ningún cobro',
  'states-free': 'Dice que la ayuda es gratuita',
};

export const RATING_LABEL_ES: Record<Rating, string> = {
  high: 'Riesgo alto',
  warning: 'Algunas señales de alerta',
  none: 'No se encontraron señales conocidas',
};

export const SEVERITY_LABEL_ES: Record<Severity, string> = { high: 'Alta', medium: 'Media', low: 'Baja' };

/** Sample texts for the "pruebe un ejemplo" buttons (fictional; no real companies). */
export const EXAMPLES_ES: { id: string; label: string; text: string }[] = [
  {
    id: 'volante-rescate',
    label: 'Un volante de “rescate”',
    text:
      'ÚLTIMA OPORTUNIDAD: Programa Federal de Ayuda para Propietarios. ¡Usted ha sido preaprobado! Garantizamos que podemos parar su subasta. Pague una cuota de inscripción de $1,495 por adelantado para abrir su caso. Deje de pagarle al banco y envíenos sus pagos a nosotros mientras negociamos. No hable con su banco; nuestra red de abogados se encarga de toda la comunicación. La oferta vence en 48 horas.',
  },
  {
    id: 'mensaje-escritura',
    label: 'Un mensaje de “fírmela”',
    text:
      'Hola, soy Miguel. Vi que su casa va a subasta. Yo se la puedo salvar. Solo firme la escritura a nombre de mi compañía temporalmente, nosotros le pagamos al banco y usted nos la renta de vuelta por $1,800 al mes hasta que arregle su crédito; después la puede volver a comprar. Necesito que firme hoy. Mándeme también su usuario y contraseña del banco para verificar sus ingresos.',
  },
  {
    id: 'carta-servicer',
    label: 'Una carta del servicer',
    text:
      'Número de préstamo: XXXXXX4821\nAsunto: Aviso de intención de ejecución hipotecaria\n\nSu préstamo hipotecario está en incumplimiento. Para corregirlo, debe pagar la cantidad atrasada de $7,214.36 a más tardar el 30 de noviembre de 2026. Es posible que usted califique para opciones de mitigación de pérdidas, como un plan de pagos o una modificación del préstamo. Solicitar no tiene ningún costo. Para pedir una solicitud, llame al número que aparece en su estado de cuenta mensual. También puede comunicarse con una agencia de consejería de vivienda aprobada por HUD al 800-569-4287.',
  },
];

// ---------------------------------------------------------------------------
// Spanish patterns (case-insensitive; compiled with "gi" by analyzeMessage)
// ---------------------------------------------------------------------------

/** Spanish negations just before a match: "nunca le pediremos...", "cuidado con quien le pida...". */
const NEGATION_ES =
  /(?:^|[^a-záéíóúüñ])(?:nunca|jam[aá]s|sin|ni|nadie|ning[uú]n[oa]?|cuidado con|desconf[ií]e|evite|ilegal|prohibid[oa]s?|rechace|quien(?:es)?|cualquiera que)(?![a-záéíóúüñ])[^.!?\n]*$/i;

const PATTERNS_ES: Record<string, RegExp[]> = {
  'upfront-fee': [
    /\b(?:pagos?|cargos?|cuotas?|tarifas?|honorarios|dep[oó]sitos?|cobros?)(?: [uú]nic[oa]s?)? (?:por )?adelantad[oa]s?/,
    /\b(?:pagar|pague|p[aá]guenos|env[ií]e|enviar|mande|mandar|deposite)(?: usted)?(?: una?)?(?: peque[nñ]a)?(?: cuota| cantidad| tarifa| cargo)?(?: de)?(?: \$[\d,]+(?:\.\d\d)?)? (?:por adelantado|para (?:empezar|comenzar)|antes de (?:empezar|comenzar|que (?:empecemos|comencemos|trabajemos)))/,
    /\b(?:cuota|cargo|tarifa|pago|cobro)s? (?:[uú]nic[oa] |inicial )?(?:de |por )(?:inscripci[oó]n|apertura|tr[aá]mite|procesamiento|activaci[oó]n|evaluaci[oó]n|auditor[ií]a|consulta|membres[ií]a|preparaci[oó]n de documentos)/,
    /(?:\$[\d,]+|\bpago|\bcuota|\bcargo|\bpague|\bpagar)[^.!?\n]{0,40}?para (?:abrir|iniciar|empezar|comenzar|activar) su (?:caso|expediente|archivo|tr[aá]mite)/,
    /\bpara (?:reservar|asegurar|guardar|apartar) su (?:lugar|espacio|aprobaci[oó]n|cupo)/,
  ],
  'deed-transfer': [
    /\b(?:firm|pas|traspas|transfer|ced)[a-záéíóú]* (?:la |su )?(?:escritura|t[ií]tulo)(?: de (?:la |su )?(?:casa|propiedad))? a (?:nombre de |favor de )?(?:nosotros|nuestr[oa]|m[ií]|mi |un inversionista|una? (?:fideicomiso|compa[nñ][ií]a|empresa|llc))/,
    /\bponer (?:la casa|la propiedad|su casa|la escritura|el t[ií]tulo) a nombre de (?:nosotros|nuestr[oa]|un inversionista|una? (?:fideicomiso|compa[nñ][ií]a|empresa|llc))/,
    /\b(?:escritura|t[ií]tulo) a (?:nuestro nombre|nombre nuestro)/,
    /\btemporalmente\b[^.!?\n]{0,40}?\b(?:escritura|t[ií]tulo)\b|\b(?:escritura|t[ií]tulo)\b[^.!?\n]{0,50}?\btemporalmente\b/,
  ],
  leaseback: [
    /\b(?:renta|rentar|rente|alquila|alquilar|alquile|arrienda|arrendar)[a-záéíóú]* de (?:vuelta|regreso)\b/,
    /\b(?:renta|alquiler|arrendamiento) con opci[oó]n a compra/,
    /\bvolver a comprar(?:la|sela)\b|\brecomprarla\b|\bcomprarla de (?:vuelta|nuevo)\b/,
    /\bla (?:puede|podr[aá]|va a poder) volver a comprar\b|\b(?:recomprar|volver a comprar) (?:la|su) (?:casa|propiedad)\b/,
    /\b(?:pagarnos|nos paga|nos pague|pagarle al inversionista|pagarle a la compa[nñ][ií]a) (?:la |una )?renta\b/,
    /\bquedarse (?:en (?:su|la) casa )?como inquilin[oa]\b/,
  ],
  'stop-paying': [
    /\b(?:deje|dejar|dejen) de (?:pagar|hacer (?:los |sus )?pagos|enviar (?:los |sus )?pagos)/,
    /\b(?:no|nunca) (?:le )?(?:pague|siga pagando|siga pag[aá]ndole|env[ií]e (?:m[aá]s )?(?:dinero|pagos)) (?:a )?(?:su |el |la )?(?:banco|prestamista|hipoteca|compa[nñ][ií]a hipotecaria|servicer)/,
    /\b(?:p[aá]guenos(?: a nosotros)?|env[ií]enos (?:sus |los |el )?(?:pagos?|dinero de la hipoteca)|(?:env[ií]e|mande|haga) (?:sus |los )?pagos (?:de la hipoteca |mensuales )?(?:directamente )?a (?:nosotros|nuestra (?:compa[nñ][ií]a|oficina|cuenta)))/,
    /\ben (?:vez|lugar) de (?:pagarle )?(?:a )?(?:su |el )?(?:banco|prestamista|servicer)/,
  ],
  'no-contact': [
    /\b(?:no|nunca|deje de) (?:hable|hablar|llame|llamar|conteste|contestar|responda|responder|se comunique|comunicarse|contacte|contactar)(?: con| a| al)? (?:su |el |la |los |sus )?(?:banco|prestamista|servicer|compa[nñ][ií]a hipotecaria|abogado|consejero)s?/,
    /\b(?:nosotros nos encargamos|nos encargaremos|nos encargamos) de (?:toda la comunicaci[oó]n|todas las llamadas|hablar con (?:su |el )?(?:banco|prestamista|servicer))/,
    /\bno (?:necesita|hace falta) (?:un )?(?:abogado|consejero)/,
  ],
  guarantee: [
    /\bgarantiz[a-záéíóú]*[^.!?\n]{0,60}?[^a-záéíóúñ](?:deten|par(?:ar|amos|aremos)\b|frena|salv|aprob|modific|conserv|quedar|resultad|[eé]xito|baj|reduc|subasta|ejecuci)/,
    /\b(?:deten|parar|frenar|salv|aprob)[a-záéíóú]*[^.!?\n]{0,40}?\bgarantizad[oa]s?\b/,
    /\b100\s?% (?:garantizado|de [eé]xito|aprobad[oa]|de aprobaci[oó]n)/,
    /\b(?:podemos|vamos a|nosotros vamos a) (?:detener|parar|cancelar|frenar) (?:la |su )?(?:ejecuci[oó]n|subasta|venta del sheriff|foreclosure)/,
    /\b(?:no|nunca) perder[aá] su (?:casa|hogar)/,
    /\bgarant[ií]a de devoluci[oó]n/,
  ],
  'account-login': [
    /\busuario y contrase[nñ]a/,
    /\bcontrase[nñ]a (?:de (?:su )?)?(?:banco|banca en l[ií]nea|cuenta)/,
    /\bc[oó]digo (?:de (?:verificaci[oó]n|seguridad|acceso|confirmaci[oó]n)|que le (?:enviamos|mandamos|lleg[oó]))/,
    /\bacceso remoto\b/,
    /\b(?:env[ií]e|m[aá]nde|d[eé]nos|comparta|d[ií]ganos|confirme)[a-z]*\b[^.!?\n]{0,30}?\b(?:contrase[nñ]a|clave|pin)\b/,
  ],
  'untraceable-payment': [/\btarjetas? de regalo\b/, /\b(?:criptomonedas?|cripto)\b/, /\btarjetas? (?:prepagadas?|recargables?)\b/],
  'gov-affiliation': [
    /\bprograma (?:federal|del gobierno|gubernamental|nacional|estatal) (?:de |para )(?:ayuda|alivio|rescate|asistencia|prevenci[oó]n|modificaci[oó]n|propietarios|due[nñ]os)/,
    /\bprograma (?:de )?(?:ayuda|alivio|rescate|asistencia) (?:hipotecari[oa] |para propietarios )?(?:federal|del gobierno|gubernamental|nacional)\b/,
    /\b(?:aprobado|respaldado|patrocinado|financiado) por el gobierno\b/,
    /\baviso oficial de (?:elegibilidad|aprobaci[oó]n)/,
    /\bdepartamento (?:de|del) (?:alivio|ayuda|rescate|asistencia) (?:hipotecari[oa]|para propietarios|al propietario)/,
  ],
  'forensic-audit': [/\bauditor[ií]as? (?:forenses?|de (?:su )?(?:pr[eé]stamo|hipoteca))/, /\ban[aá]lisis forense\b/],
  'mass-joinder': [
    /(?:[uú]nase|\bunirse|\bparticipe) (?:a |en )?(?:una |nuestra |la )?demanda (?:colectiva|masiva|contra)/,
    /\bdemandas? (?:colectivas?|masivas?) contra (?:los |su )?(?:bancos?|prestamistas?)/,
  ],
  'too-good': [
    /\b(?:reducir|bajar|recortar|rebajar|reducimos|bajamos)(?:le)? (?:su |el )?(?:saldo|principal|capital|pago mensual|pagos?|hipoteca|deuda) (?:hasta )?(?:en )?(?:un )?(?:hasta )?\d{1,3}\s?%/,
    /\b(?:borrar|eliminar|cancelar|perdonar|desaparecer)(?:le)? (?:toda )?(?:su |la )?(?:hipoteca|deuda|pr[eé]stamo)/,
    /\b(?:pre[- ]?aprobad[oa]|precalificad[oa]|(?:ha sido|fue) seleccionad[oa])/,
  ],
  'attorney-front': [/\b(?:red|equipo|grupo) de abogados\b/, /\b(?:respaldad|supervisad|asociad)[oa]s? (?:por|con) abogados\b/, /\banticipo de honorarios\b/],
  'power-of-attorney': [/\bpoder (?:notarial|legal|general)\b/],
  pressure: [
    /\bact[uú]e (?:ya|ahora|hoy|r[aá]pido)\b/,
    /\bfirme (?:hoy|ahora|ya|esta noche|de inmediato|inmediatamente)\b/,
    /\bs[oó]lo (?:por )?hoy\b/,
    /\b(?:la oferta|esta oferta|su lugar|su aprobaci[oó]n) (?:vence|expira|termina|se vence)/,
    /\ben (?:las pr[oó]ximas )?(?:24|48|72) horas\b/,
    /[uú]ltima oportunidad|\badvertencia final\b/,
    /\bantes de que sea (?:demasiado )?tarde\b|\bse (?:le )?(?:acaba|agota) el tiempo\b/,
    /\btiempo limitado\b|\bcupos? limitados?\b/,
  ],
  'sign-without-reading': [
    /\bno (?:necesita|tiene que|hace falta) leer/,
    /\b(?:formularios?|documentos?|p[aá]ginas?|contratos?) en blanco\b/,
    /\bs[oó]lo firme (?:aqu[ií]|abajo)/,
  ],
  'wire-transfer': [/\btransferencia (?:bancaria|electr[oó]nica)\b/, /\binstrucciones (?:de|para) (?:la )?transferencia\b/],
  'sensitive-info': [
    /\b(?:env[ií]e|d[eé]nos|proporcione|confirme|verifique|comparta|actualice|mande)[a-z]*\b[^.!?\n]{0,60}?(?:seguro social|n[uú]mero de (?:su )?(?:cuenta|tarjeta)|n[uú]mero de ruta|tarjeta de d[eé]bito)/,
  ],
};

const LEGIT_PATTERNS_ES: Record<string, RegExp[]> = {
  'hud-counselor': [/consejer[oa]s? de vivienda aprobad[oa]s? por (?:el )?HUD/i, /agencia de (?:asesor[ií]a|consejer[ií]a) de vivienda/i],
  'court-mediation': [/mediaci[oó]n (?:de|para) (?:ejecuciones? hipotecarias?|foreclosure)/i, /programa de mediaci[oó]n/i, /Tribunal Superior de (?:Nueva Jersey|New Jersey)/i],
  lsnj: [/Servicios Legales de Nueva Jersey/i],
  'servicer-letter': [
    /\bn[uú]mero de (?:pr[eé]stamo|cuenta)\s*:?\s*[x*•#\d-]{4,}/i,
    /mitigaci[oó]n de p[eé]rdidas/i,
    /aviso de intenci[oó]n de ejecuci[oó]n/i,
    /cotizaci[oó]n de reinstalaci[oó]n/i,
  ],
  'states-free': [/\b(?:gratis|gratuit[oa]s?|sin (?:costo|cargo|cobro)|no tiene (?:ning[uú]n )?(?:costo|cargo))/i],
};

/** Pass as the third argument to analyzeMessage() on the Spanish page. */
export const SPANISH_OPTIONS: AnalyzeOptions = {
  extraPatterns: PATTERNS_ES,
  extraLegitPatterns: LEGIT_PATTERNS_ES,
  extraNegation: NEGATION_ES,
};
