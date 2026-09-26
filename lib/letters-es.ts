/**
 * Spanish labels for the Letter Builder (/es/herramientas/constructor-de-cartas/).
 *
 * The letters themselves stay in ENGLISH on purpose: they go to a mortgage
 * servicer, and every template, legal citation and rule lives in
 * lib/letters.ts (buildLetter, timingNoteCodes). This file only holds what
 * the Spanish-speaking homeowner reads on screen: option labels keyed by the
 * same ids, Spanish summaries of what each English letter says, Spanish
 * renderings of the timing notes, reminders and sending checklist, and a
 * Spanish gloss for every [bracketed blank] the English letter can show.
 *
 * Tested by scripts/test-letters-es.mjs (every id and every blank has a
 * Spanish string). Same rules as the English file: nothing promises an
 * outcome, rules are described as what they "generalmente" require, and
 * legal citations are copied exactly as in the English.
 */

import type { LetterKind, TimingNote } from './letters';

export const LETTERS_ES: Record<LetterKind, { name: string; blurb: string; summary: string[] }> = {
  hardship: {
    name: 'Carta de dificultad económica',
    blurb: 'Explique qué pasó y pida ayuda al departamento de ayuda hipotecaria de su servicer.',
    summary: [
      'Explica que usted tuvo una dificultad económica (hardship), cuál fue la causa y cuándo empezó.',
      'Describe qué cambió en sus ingresos o gastos y cuáles son los ingresos de su hogar ahora. Si lo eligió, dice si espera que la dificultad sea temporal o de largo plazo.',
      'Pide que lo consideren para la opción que usted eligió (por ejemplo, una modificación del préstamo) y también para todas las opciones de ayuda disponibles.',
      'Incluye su frase de compromiso y, si las marcó, las frases opcionales: que le digan por escrito qué falta, que le manden la decisión por escrito y que usted responderá pronto.',
      'No agrega ningún hecho que usted no haya escrito o elegido.',
    ],
  },
  quote: {
    name: 'Cotización de reinstalación y saldo total',
    blurb: 'Pida por escrito la cifra exacta para ponerse al día y el saldo total para liquidar.',
    summary: [
      'Pide por escrito la cotización de reinstalación (lo que cuesta ponerse al día), el estado del saldo total para liquidar el préstamo (payoff statement), o las dos cosas, válidos hasta la fecha que usted indique.',
      'Pide que la cotización de reinstalación venga detallada: capital e intereses atrasados, depósito en garantía (escrow), cargos por pago tardío, honorarios y costos del abogado, inspecciones y otros cargos, y cuáles de esas cantidades son estimadas.',
      'Si pidió el saldo total, pide también el interés diario después de esa fecha.',
      'Pide hasta qué fecha vale cada cifra, las formas de pago aceptadas y exactamente a dónde y cómo enviar el dinero.',
      'Si pidió el saldo total, cita el Reglamento Z (Regulation Z), 12 CFR 1026.36(c)(3): el servicer debe enviarlo dentro de un tiempo razonable y, en la mayoría de los casos, en no más de siete días hábiles después de recibir la solicitud por escrito.',
      'Si escribió la fecha de la subasta, la menciona y pide las cifras lo antes posible.',
    ],
  },
  rfi: {
    name: 'Solicitud de información / aviso de error',
    blurb: 'Pida los registros de su préstamo o dispute un error del servicer bajo la ley RESPA.',
    summary: [
      'Se identifica como una solicitud por escrito calificada (qualified written request) bajo la ley RESPA, 12 U.S.C. 2605(e), y el Reglamento X (Regulation X).',
      'Solicitud de información (12 CFR 1024.36): pide los datos que usted marcó, por ejemplo quién es el dueño de su préstamo, el historial completo de pagos, los cargos o el estado de su solicitud de ayuda.',
      'Aviso de error (12 CFR 1024.35): describe el error y cómo corregirlo. Si el servicer concluye que no hubo error, le pide que lo explique por escrito y le envíe los documentos en que se basó. También pide que no reporte a las agencias de crédito información negativa sobre el pago en disputa durante 60 días (12 CFR 1024.35(i)).',
      'Explica los plazos que generalmente aplican: acuse de recibo por escrito en cinco días hábiles; respuesta en 30 días hábiles (10 días hábiles para saber quién es el dueño del préstamo y siete para un error en el saldo total), y una posible extensión de 15 días hábiles en algunos casos.',
    ],
  },
  postpone: {
    name: 'Pedir que aplacen la subasta del sheriff',
    blurb: 'Pida al servicer que aplace la subasta mientras revisa su solicitud.',
    summary: [
      'Pide que aplacen la subasta del sheriff mientras el servicer revisa su solicitud de ayuda hipotecaria (loss mitigation).',
      'Dice la fecha en que, según sus registros, el servicer recibió su solicitud completa.',
      'Si esa fecha es más de 37 días antes de la subasta, explica la regla del Reglamento X, 12 CFR 1024.41(g), y pide que el servicer le indique a su abogado de la ejecución hipotecaria que aplace la subasta hasta que terminen la revisión y cualquier apelación. Está escrita de forma condicional (“si mi solicitud completa se recibió más de 37 días antes de la subasta”).',
      'Si la fecha es de 37 días o menos antes de la subasta, no cita esa protección: solo pide el aplazamiento para que evalúen su solicitud.',
      'Pide confirmación por escrito antes de la fecha de la subasta y manda copia (cc) al abogado del demandante que aparece en sus papeles del tribunal.',
    ],
  },
  appeal: {
    name: 'Apelar la negación de una modificación',
    blurb: 'Apele la negación de una modificación y pida los números en que se basó.',
    summary: [
      'Apela la decisión de negarle la modificación del préstamo bajo el Reglamento X, 12 CFR 1024.41(h), y cita la fecha del aviso de negación.',
      'Copia la razón que dio el aviso y explica por qué usted cree que está equivocada, con las razones que marcó y su explicación.',
      'Si lo marcó, pide los datos (inputs) del cálculo del valor presente neto (NPV), citando el comentario 41(d)-2 de la interpretación oficial. Si marcó la restricción del inversionista, pide que identifiquen al dueño del préstamo y el requisito específico (comentario 41(d)-1).',
      'Recuerda que la apelación la debe revisar personal distinto (12 CFR 1024.41(h)(3)) y que el servicer debe enviar su decisión por escrito dentro de 30 días (12 CFR 1024.41(h)(4)).',
      'Dice que, si la solicitud completa se recibió más de 37 días antes de una subasta, 12 CFR 1024.41(g) generalmente prohíbe seguir adelante con la subasta mientras la apelación está pendiente, y pide confirmación por escrito.',
    ],
  },
};

/** Spanish labels for option lists in lib/letters.ts, keyed by the same ids. */
export const HARDSHIP_REASONS_ES: Record<string, string> = {
  income: 'Pérdida de empleo o de ingresos',
  medical: 'Problema de salud o gastos médicos',
  divorce: 'Divorcio o separación',
  death: 'Muerte de un coprestatario o de alguien que aportaba ingresos',
  disability: 'Discapacidad',
  expenses: 'Aumento de gastos',
  disaster: 'Desastre natural',
  other: 'Otra razón',
};

export const LOSS_MIT_REQUESTS_ES: Record<string, string> = {
  modification: 'Modificación del préstamo',
  repayment: 'Plan de pagos',
  forbearance: 'Pausa de pagos (forbearance)',
  'short-sale': 'Venta corta (short sale)',
  'deed-in-lieu': 'Entrega de la escritura en lugar de la ejecución (deed in lieu)',
};

export const HARDSHIP_HELPERS_ES: Record<string, string> = {
  missing: 'Pedir que me digan por escrito qué falta y para qué fecha',
  writing: 'Pedir la decisión por escrito (y que me llamen si tienen preguntas)',
  respond: 'Decir que quiero resolverlo pronto y que responderé rápido',
};

/** Spanish meaning of each English COMMITMENT_STARTERS sentence, same order. */
export const COMMITMENT_STARTERS_ES = [
  'Quiero quedarme con mi casa y me comprometo a hacer un pago que pueda sostener a largo plazo.',
  'Quiero resolver esto de manera responsable y responderé pronto a cualquier pedido de documentos.',
];

export const RFI_ITEMS_ES: Record<string, string> = {
  owner: 'Quién es el dueño de mi préstamo',
  history: 'Historial completo de pagos',
  fees: 'Lista detallada de cargos',
  escrow: 'Historial del depósito en garantía (escrow)',
  lossmit: 'Estado de mi solicitud de ayuda hipotecaria (loss mitigation)',
};

export const ERROR_TYPES_ES: Record<string, string> = {
  payment: 'Un pago que no acreditaron o aplicaron mal',
  fees: 'Un cargo que no debo',
  escrow: 'Impuestos o seguro que no pagaron del escrow',
  payoff: 'Un saldo total (payoff) equivocado',
  foreclosure: 'Siguieron con la ejecución hipotecaria mientras mi solicitud completa estaba pendiente',
  other: 'Otro error del servicer',
};

export const APPEAL_GROUNDS_ES: Record<string, string> = {
  income: 'Calcularon mal mis ingresos',
  expenses: 'Calcularon mal mis gastos o deudas',
  npv: 'Los datos del valor presente neto (NPV) parecen equivocados',
  docs: 'Me dijeron que faltaban documentos, pero ya los había enviado',
  investor: 'No explicaron la restricción del inversionista',
};

export const SENDING_CHECKLIST_ES = [
  'Fírmela y póngale la fecha. Guarde una copia completa de la carta y de todo lo que adjunte.',
  'Envíela por correo certificado con acuse de recibo (certified mail, return receipt requested), o súbala al portal en línea del servicer y guarde la confirmación.',
  'Anote la fecha en que la envió y el número de rastreo o de confirmación.',
  'Haga seguimiento si no recibe un acuse de recibo o una respuesta por escrito, y guarde cada respuesta.',
  'Pida ayuda gratuita: un consejero de vivienda aprobado por HUD (800-569-4287) o Legal Services of New Jersey (Servicios Legales de Nueva Jersey, 1-888-576-5529). En los dos puede pedir ayuda en español.',
];

export const REMINDERS_ES: Record<LetterKind, string[]> = {
  hardship: [
    'Envíela junto con su solicitud de ayuda hipotecaria (loss mitigation), no en lugar de ella. Una carta sola no es una solicitud completa.',
    'Escriba solo hechos que pueda comprobar. El servicer puede pedirle pruebas de la dificultad y de sus ingresos.',
  ],
  quote: [
    'El plazo del Reglamento Z para el saldo total (payoff) es generalmente de siete días hábiles, pero la regla permite “un tiempo razonable” cuando el préstamo está en ejecución hipotecaria o en bancarrota. Ninguna regla federal fija un plazo específico para la cotización de reinstalación, así que pídala con tiempo.',
    'Si hay una subasta del sheriff programada, normalmente el abogado del demandante prepara las cifras. Pregunte si la cotización incluye sus honorarios y hasta cuándo es válida.',
  ],
  rfi: [
    'Busque en su estado de cuenta mensual, en cartas recientes y en el sitio web del servicer una dirección designada para “notices of error”, “requests for information” o “qualified written requests”. Si el servicer designó una, envíela allí. Una carta enviada a otra dirección puede no activar estas reglas.',
    'Guarde una copia y envíela por un medio que se pueda rastrear. Los servicers no siempre cumplen a tiempo, así que sus registros importan.',
    'No la escriba en el cupón de pago ni la envíe junto con su pago. Envíela por separado.',
  ],
  postpone: [
    'Esta carta le pide al servicer que aplace la subasta. No reemplaza sus propios derechos de aplazamiento: según N.J.S.A. 2A:17-36, el propietario generalmente puede pedir dos aplazamientos de hasta 30 días cada uno en la oficina del sheriff del condado. Llame a la oficina del sheriff para preguntar cómo aceptan la solicitud y cuánto cuesta.',
    'Mande una copia al abogado del demandante que aparece en sus papeles del tribunal, y revise la lista de subastas del condado antes de la fecha para confirmar qué pasó realmente.',
    'La regla federal protege solo una solicitud completa recibida más de 37 días antes de la subasta, y generalmente aplica a una residencia principal y no a los servicers pequeños. Los servicers no siempre cumplen, así que guarde prueba de cada fecha.',
  ],
  appeal: [
    'El derecho federal de apelación generalmente aplica cuando la solicitud completa se recibió 90 días o más antes de una subasta programada (o antes de que hubiera subasta programada), y la apelación se debe hacer dentro de 14 días después de la decisión del servicer. Envíela de inmediato.',
    'Adjunte todo lo que muestre el error: talones de pago, cartas de beneficios, estados de cuenta del banco o prueba de que ya envió un documento.',
  ],
};

/**
 * Spanish gloss for each [bracketed blank] buildLetter() can leave in the
 * English letter, keyed by the exact English prompt. The letter keeps the
 * English prompt; the page lists the Spanish meaning so the homeowner knows
 * which field fills it.
 */
export const BLANKS_ES: Record<string, string> = {
  Date: 'Fecha de la carta',
  'Your full name': 'Su nombre completo',
  'Property address': 'Dirección de la propiedad',
  'Your phone number': 'Su número de teléfono',
  'Servicer name': 'Nombre del servicer',
  'Servicer mailing address': 'Dirección postal del servicer',
  'Servicer’s designated address for notices of error and information requests': 'Dirección designada del servicer para avisos de error y solicitudes de información',
  'Loan number': 'Número de préstamo',
  'Docket number from your court papers, e.g. F-012345-25': 'Número de expediente (docket number) de sus papeles del tribunal, por ejemplo F-012345-25',
  'Sheriff sale date': 'Fecha de la subasta del sheriff',
  'Choose the reason for your hardship': 'Elija la causa de su dificultad',
  'Describe your hardship': 'Describa su dificultad',
  'Month and year it began, e.g. March 2026': 'Mes y año en que empezó, por ejemplo March 2026',
  'What changed, in your own words: for example, the income or expense that changed and by how much': 'Qué cambió, en sus palabras: por ejemplo, qué ingreso o gasto cambió y en cuánto',
  'Your current income: who in the household earns what, and from what source': 'Sus ingresos actuales: quién en el hogar gana cuánto y de qué fuente',
  'What you are asking for': 'Qué está pidiendo',
  'A sentence on your commitment, in your own words': 'Una frase sobre su compromiso, en sus palabras',
  'The date the figures should be good through': 'La fecha hasta la que deben valer las cifras',
  'List the information you are requesting': 'Marque la información que está pidiendo',
  'Describe the error: what happened, the dates, and the amounts': 'Describa el error: qué pasó, las fechas y las cantidades',
  'What you want the servicer to do to fix it': 'Qué quiere que haga el servicer para corregirlo',
  'Date the servicer received your complete application': 'Fecha en que el servicer recibió su solicitud completa',
  'Plaintiff’s foreclosure attorney or law firm, from your court papers': 'Abogado o bufete del demandante en la ejecución hipotecaria, según sus papeles del tribunal',
  'Attorney’s address': 'Dirección del abogado',
  'Date on the denial notice': 'Fecha del aviso de negación',
  'The reason the denial notice gave, in its own words': 'La razón que dio el aviso de negación, con sus mismas palabras',
  'Explain the mistake: the correct figures or facts, and the documents that show them': 'Explique el error: las cifras o hechos correctos y los documentos que lo demuestran',
};

/** Spanish wording of a timing note from timingNoteCodes() in lib/letters.ts. */
export function timingNoteTextEs(n: TimingNote): string {
  const dias = (d: number) => `${d} día${d === 1 ? '' : 's'}`;
  switch (n.code) {
    case 'postpone-protected':
      return `La fecha de su solicitud completa es ${dias(n.gap)} antes de la subasta. Si el servicer recibió la solicitud completa en esa fecha, 12 CFR 1024.41(g) generalmente le prohíbe realizar la subasta mientras la revisión y cualquier apelación están pendientes, a menos que aplique una excepción.`;
    case 'postpone-unprotected':
      return `La fecha de su solicitud completa es ${n.gap < 0 ? 'posterior a' : `${dias(n.gap)} antes de`} la subasta. La protección federal de 12 CFR 1024.41(g) generalmente aplica solo a una solicitud completa recibida más de 37 días antes de la subasta, así que la carta pide el aplazamiento sin basarse en ella. Use sus derechos de aplazamiento en la oficina del sheriff y llame hoy a la ayuda legal gratuita.`;
    case 'appeal-window-passed':
      return `La fecha de su carta es ${dias(n.since)} después de la fecha del aviso de negación. El plazo federal para apelar es de 14 días después de que el servicer entrega su decisión, así que es posible que el derecho de apelación ya haya pasado. Todavía puede enviar esta carta como un pedido de reconsideración, y preguntarle a un consejero aprobado por HUD sobre volver a solicitar.`;
    case 'appeal-window-open':
      return `La fecha de su carta es ${dias(n.since)} después de la fecha del aviso de negación. El plazo federal es de 14 días después de que el servicer entrega su decisión, así que envíela de inmediato por un medio que se pueda rastrear.`;
    case 'appeal-under-90':
      return `La fecha de su solicitud completa es ${n.gap < 0 ? 'posterior a' : `${dias(n.gap)} antes de`} la subasta. El derecho federal de apelación generalmente requiere una solicitud completa recibida 90 días o más antes de una subasta programada, así que el servicer podría decir que no hay apelación disponible. La carta de todos modos pide una revisión.`;
  }
}
