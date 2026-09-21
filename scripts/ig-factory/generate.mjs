// NJ Foreclosure Guide — Instagram card factory.
// Renders one batch of 8 branded 1080x1080 cards + captions.md into ./out.
// Batch rotates automatically by date (6 batches, every-other-Monday cadence
// from the 2026-10-05 epoch); override with:  node generate.mjs --batch N
// Requires Playwright with the preinstalled Chromium at /opt/pw-browsers/chromium.
//
// Compliance is baked into the copy: no rescue promises, no outcome claims,
// no testimonials, free-first framing, and the two statewide numbers.

import { chromium } from 'playwright';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const here = path.dirname(fileURLToPath(import.meta.url));
const outDir = path.join(here, 'out');
fs.mkdirSync(outDir, { recursive: true });
const svgWhite = fs.readFileSync(path.join(here, 'logo.svg'), 'utf8').replace(/#0f172a/g, '#ffffff');

const S = 'njforeclosureguide.org';
const HASH = '#NJForeclosure #NewJersey #ForeclosureHelp #KnowYourRights #HousingHelp';

// Card spec: [id, eyebrow, titleHTML, bodyHTML, pill|null, caption]
// Batches of 8, rotated in order. Keep titles <= 3 lines at 84px.
const CARDS = [
  // ---- BATCH 0: myths I ----
  ['myth-free-help', 'Myth vs. Fact', '<span class="accent">MYTH:</span> “Free help is<br/>worthless — you get<br/>what you pay for.”', '<b>FACT:</b> The free version IS the product: court mediation, HUD counselors, legal aid for those who qualify. The paid “rescue” industry mostly resells this machinery — where it isn’t outright illegal.', null, `Free mediation. Free HUD counselors (800-569-4287). Free lawyers for those who qualify (1-888-576-5529). The paid "rescue" industry mostly resells that free machinery at a markup. Link in bio. ${HASH}`],
  ['num-120', 'The Quiet Window', '<span class="huge2">~120</span><br/>days behind before<br/>most banks even file', 'Federal rules generally bar starting a foreclosure before 120 days of delinquency — four months when every fix is cheapest. The households that engage this window rarely become statistics.', null, `Missing one payment doesn't start a foreclosure. Most lenders can't file until ~120 days behind — four months when every fix is cheapest and no legal fees exist yet. Use the window. Link in bio. ${HASH}`],
  ['tool-casemap', 'Free Tool', 'The Case Map:<br/>tap where you are,<br/>see what’s still open', 'Every NJ foreclosure rides the same line. Tap your station: what’s true right now, which doors are open, which closes next — and your free moves.', 'njforeclosureguide.org/case-map', `Every NJ foreclosure rides the same line — missed payments, notice, complaint, judgment, sale. Tap where you are and see exactly which doors are still open: ${S}/case-map ${HASH}`],
  ['myth-equity', 'Myth vs. Fact', '<span class="accent">MYTH:</span> “If you lose<br/>the house, you lose<br/>everything in it.”', '<b>FACT:</b> Equity has rights. A sale you control converts it at market price; even at auction, bids above the judgment become surplus funds — held by the court, and they belong to YOU.', null, `Your equity doesn't vanish because a case was filed. Defended, it converts at market prices — and even after an auction, the surplus above the debt belongs to the former owner. Link in bio. ${HASH}`],
  ['county-essex', 'County Spotlight', 'Essex County:<br/>the epicenter, and<br/>the free bench', 'Newark, East Orange, Irvington — the state’s heaviest volume, and its densest scam mail. The counters are free and local. Your county’s full playbook is on the map.', 'njforeclosureguide.org/nj-map', `Essex County carries NJ's heaviest foreclosure volume — and some of its best free help. Every county's machinery, one tap: ${S}/nj-map ${HASH}`],
  ['es-derechos', 'En Español · Gratis', 'Usted tiene más<br/>opciones de las<br/>que cree.', 'Cada carta explicada, sus plazos, las 7 salidas y la ayuda gratuita — mediación, consejeros (800-569-4287), abogados si califica. Todo en español claro.', 'njforeclosureguide.org/es', `¿Atrasado en la hipoteca en NJ? Hay una guía completamente gratis en español — y ahora también su Centro de Mando personal: ${S}/es #NJForeclosure #EnEspanol #NuevaJersey`],
  ['bank-npv', 'How Banks Decide', 'Your modification<br/>is decided by math,<br/>not mercy.', 'Software compares two futures: your modified loan vs. foreclosing. Complete, documented income moves the model — which means applications are winnable on paperwork.', null, `Modification decisions come from a present-value calculation, not a judgment of your character. Feed the model complete inputs and it changes its answer. How it really works: link in bio. ${HASH}`],
  ['tool-decoder', 'Free Tool', '“What IS this<br/>letter?” — answered<br/>in ten seconds', 'Tap the sample that looks like the paper in your hand. Get what it means, your clock, and your next move. The panic moment, solved.', 'njforeclosureguide.org/decoder', `The scariest part of foreclosure is the unfamiliar envelope. Tap the layout that matches yours and get the plain-English answer in ten seconds: ${S}/decoder ${HASH}`],

  // ---- BATCH 1: numbers & rights ----
  ['num-35', 'The Number That Decides Cases', '<span class="huge2">35</span><br/>days to answer<br/>the complaint', 'Filing an answer — even a simple one — keeps every option open and unlocks the state’s FREE mediation. Silence is the fast lane to losing.', null, `35 days. Filing an answer — even simple, even without a lawyer — keeps you in the case and unlocks free mediation. Free forms exist; free lawyers exist for those who qualify. Link in bio. ${HASH}`],
  ['myth-bank-house', 'Myth vs. Fact', '<span class="accent">MYTH:</span> “The bank<br/>wants to take<br/>your house.”', '<b>FACT:</b> Foreclosure usually LOSES the bank money — that’s why workout departments exist, and why complete applications get deals. It’s arithmetic, not kindness.', null, `The bank's best case is usually your loan performing again — a NJ foreclosure costs them a year of missed interest, legal fees, and an auction discount. Use their math. Link in bio. ${HASH}`],
  ['num-redemption', 'Even After the Auction', '<span class="huge2">10</span><br/>days of redemption<br/>after a sheriff sale', 'New Jersey lets you undo a completed sale by paying the judgment in full within 10 days. Narrow — and real. And removal after that is a court process with notice, never same-day.', null, `Even AFTER a NJ sheriff sale: a 10-day redemption window, surplus funds if bidding topped the debt, and a court possession process with notice. Sale day is never moving day. Link in bio. ${HASH}`],
  ['tool-command', 'Free Tool', '3 questions.<br/>Your personal<br/>dashboard.', 'Your stage + county + goal = your deadlines, your county’s rules, the free help near you, your 3 best moves. Nothing you type leaves your browser.', 'njforeclosureguide.org/command-center', `Answer 3 questions and the page builds YOUR dashboard — deadlines computed to the day, your county's sheriff rules, your 3 best plays. Private by design: ${S}/command-center ${HASH}`],
  ['county-ocean', 'County Spotlight', 'Ocean County:<br/>fixed incomes vs.<br/>rising escrow', 'Retiree communities, reverse-mortgage rules, seasonal shore incomes — Ocean’s cases have their own shape, and their own free fixes. County playbook on the map.', 'njforeclosureguide.org/nj-map', `Ocean County foreclosures usually start with an escrow jump, not a life collapse — and the fixes fit fixed incomes. Every county's playbook: ${S}/nj-map ${HASH}`],
  ['es-35dias', 'En Español', '<span class="huge2">35</span><br/>días para responder<br/>la demanda', 'Presentar una respuesta — aunque sea sencilla — mantiene todas sus opciones y desbloquea la mediación GRATUITA. Formularios gratis: njcourts.gov. Abogados gratis si califica: 1-888-576-5529.', null, `35 días para responder una demanda de ejecución en NJ — y responder desbloquea la mediación gratuita del estado. Su plan en español: ${S}/es/mi-plan #NJForeclosure #EnEspanol`],
  ['bank-adjourn', 'How Banks Work', 'Banks postpone<br/>their own auctions<br/>constantly.', 'Pending reviews, paperwork fixes, bid strategy — lender adjournments outnumber homeowner ones. A moved date is information: something in your file is still alive.', null, `Watch any county's sale list: the BANK postpones more auctions than homeowners do — reviews, paperwork, strategy. A moved date means something's still live. Link in bio. ${HASH}`],
  ['tool-costwait', 'Free Tool', 'Waiting feels free.<br/>It bills monthly.', 'Drag the slider and watch fees stack, doors close, and equity leak — month by month, with your own numbers. Then make the free calls that stop the meter.', 'njforeclosureguide.org/tools/cost-of-waiting', `Doing nothing has a price tag. Drag the slider and watch it grow — then make the two free calls that stop the meter: ${S}/tools/cost-of-waiting ${HASH}`],

  // ---- BATCH 2: scams & protections ----
  ['scam-upfront', 'Scam Armor', 'Upfront fees for<br/>foreclosure rescue<br/>are <span class="accent">illegal.</span>', 'Generally illegal under federal and NJ law — because that industry was so reliably fraudulent regulators shut down its business model. Nobody legitimate charges before helping.', null, `One sentence that stops most foreclosure scams: charging UPFRONT for mortgage relief is generally ILLEGAL. Nobody legit does it. The free machinery does the same work: link in bio. ${HASH}`],
  ['scam-deed', 'Scam Armor', 'Never sign your<br/>deed “temporarily.”<br/>Ever.', '“Sign it over, I’ll catch up the payments, you rent it back” — that’s how houses get stolen with one signature. Legitimate sales happen at real closings with title companies.', null, `The deed-theft pitch always sounds helpful: "sign it over temporarily, I'll fix everything." That signature is how families lose six figures. Real sales happen at real closings. ${HASH}`],
  ['renters', 'Renters: Know This', 'Your landlord’s<br/>foreclosure ≠<br/>your eviction.', 'NJ law generally protects your lease through the sale. “New owner, everybody out” letters overstate the law. Keep paying rent, keep receipts, know your rights.', 'njforeclosureguide.org/tenants', `RENTERS: in NJ your lease generally survives your landlord's foreclosure. Don't let a scary letter move you out of a home the law says you can keep: ${S}/tenants ${HASH} #TenantRights`],
  ['myth-moveout', 'Myth vs. Fact', '<span class="accent">MYTH:</span> “Served<br/>papers? Start<br/>packing.”', '<b>FACT:</b> You have the legal right to live in your home through the ENTIRE court process — months, often longer. Leaving early helps nobody and costs you options.', null, `Getting served does NOT mean packing boxes. You can lawfully live in your home through the whole case — and leaving early costs you money and options. Link in bio. ${HASH}`],
  ['county-hudson', 'County Spotlight', 'Hudson County:<br/>the highest stakes<br/>in the state', 'Jersey City to Bayonne, a decade of appreciation sits under houses in default — six-figure equity that silence squanders. The county playbook is on the map.', 'njforeclosureguide.org/nj-map', `In Hudson County an unanswered foreclosure can squander six figures of appreciation at one auction. Know your number first: ${S}/nj-map ${HASH}`],
  ['es-estafas', 'En Español · Armadura', 'Nadie legítimo<br/>cobra por<br/>adelantado.', 'Tres reglas detienen casi todas las estafas: sin cobros por adelantado (es generalmente ilegal), sin firmar su escritura “temporalmente”, y nadie legítimo le dice que deje de hablar con su banco.', 'njforeclosureguide.org/es/estafas', `Tres reglas detienen casi todas las estafas de "rescate": nada por adelantado, nunca su escritura, nunca dejar de hablar con su banco. Guía completa: ${S}/es #EnEspanol #NJForeclosure`],
  ['surplus', 'The Abandoned Money', 'Auction brought<br/>more than you owed?<br/><span class="accent">The extra is yours.</span>', 'Surplus funds sit with the court waiting to be claimed — the most abandoned asset in the whole process, even from sales years ago. Check before any “recovery firm” takes a cut.', 'njforeclosureguide.org/guides/surplus-funds', `If a NJ sheriff sale brought more than the debt, the extra belongs to the FORMER owner — it waits at the court to be claimed, even years later: ${S}/guides/surplus-funds ${HASH}`],
  ['tool-myplan', 'Free Tool', 'Your deadlines.<br/>One page.<br/>The fridge.', 'Enter your dates, print a personal battle plan with YOUR day-35 and sale-window math — built in your browser, never sent anywhere.', 'njforeclosureguide.org/my-plan', `Enter your dates → get a one-page battle plan with YOUR exact deadlines, built to live on the refrigerator. Private: nothing leaves your browser. ${S}/my-plan ${HASH}`],

  // ---- BATCH 3: process truths ----
  ['num-30noi', 'Before Any Lawsuit', '<span class="huge2">30</span><br/>days’ warning the<br/>law requires first', 'The Notice of Intention must arrive at least 30 days before a complaint — stating the exact catch-up amount. It’s the cheapest, most fixable moment in the whole process.', null, `Before any NJ foreclosure lawsuit: a legally required 30-day warning that must state exactly what it costs to catch up. The NOI decoded: link in bio. ${HASH}`],
  ['myth-evicted', 'Myth vs. Fact', '<span class="accent">MYTH:</span> “Thrown out<br/>the day after the<br/>sheriff sale.”', '<b>FACT:</b> Removal runs through a court process with notice — never same-day. 10-day redemption first, then a deed, then proceedings. Most buyers would rather pay for an agreed date.', null, `Nobody gets removed the day after a sheriff sale in NJ — redemption window, deed, then a court process with notice. Know the real timeline before fear decides for you. ${HASH}`],
  ['mediation', 'The Free Table', 'The bank must send<br/>someone who can<br/>say <span class="accent">yes.</span>', 'NJ’s free mediation program requires a lender rep with settlement authority at the table — eligible owner-occupants get the one room where decisions actually happen. Requested when you answer.', null, `NJ's mediation program is free for eligible homeowners — and it forces the bank to send someone with actual settlement authority. It's requested when you answer the complaint. Link in bio. ${HASH}`],
  ['tool-checklist', 'Free Download', 'The Survival Kit:<br/>print it, fridge it,<br/>work the list.', 'The Week-One Checklist + the 45-Day Playbook: what to do, in order, from the day a notice arrives. No email required, ever.', 'njforeclosureguide.org/free-checklist', `Free download, no email wall: the Week-One Checklist + 45-Day Playbook. Print it for yourself or hand it to someone who stopped opening their mail: ${S}/free-checklist ${HASH}`],
  ['county-camden', 'County Spotlight', 'Camden County:<br/>two worlds, one<br/>courthouse', 'City blocks where free help is the whole strategy; suburbs where school-district equity deserves defending. Both run through one Hall of Justice — the playbook’s on the map.', 'njforeclosureguide.org/nj-map', `Camden County holds South Jersey's sharpest split — and one set of rules for both sides of it. The county playbook: ${S}/nj-map ${HASH}`],
  ['es-mediacion', 'En Español · Gratis', 'La mesa donde el<br/>banco debe<br/>sentarse', 'La mediación de NJ es gratuita para dueños elegibles — y obliga al banco a enviar a alguien con autoridad real. Se pide al responder la demanda.', 'njforeclosureguide.org/es/blog', `La mediación de NJ es GRATIS para dueños elegibles — y sienta al banco con autoridad real en la mesa. Cómo pedirla, en español: ${S}/es/blog #EnEspanol #NJForeclosure`],
  ['bank-paperwork', 'How Banks Work', 'They didn’t “lose”<br/>your paperwork.<br/>The system did.', 'Volume, expiring documents, transfers between systems. The fix isn’t anger — it’s a timestamped trail: receipts for every upload, completeness confirmed in writing.', null, `"We never received your documents" has structural causes — and a structural fix: submit through channels that give receipts, confirm completeness in writing, keep the log. Link in bio. ${HASH}`],
  ['inherited', 'Scenario Guide', 'Inherited a house<br/>in foreclosure?<br/>Heirs have rights.', 'You can deal with the servicer WITHOUT taking on the debt personally — confirmed successors in interest get information and loss-mitigation access. An inheritance with equity is worth defending.', null, `The loan didn't die with your loved one — but heirs have real federal rights, including working with the servicer without assuming the debt. The heir's guide: link in bio. ${HASH}`],

  // ---- BATCH 4: money truths ----
  ['num-2x30', 'At the Sale Stage', '<span class="huge2">2×30</span><br/>days of adjournments,<br/>generally yours', 'NJ practice typically allows a homeowner two postponements of up to 30 days each — through the county sheriff, with its own procedure and fee. Sixty days fits a closing.', null, `A sheriff sale date isn't a wall — NJ practice generally gives homeowners two 30-day adjournments, and banks postpone their own sales constantly. Sixty days fits a real plan. ${HASH}`],
  ['credit', 'The Honest Credit Story', 'Foreclosure is a<br/>slope, not a<br/>life sentence.', 'The notation ages off in seven years; its weight fades much sooner with clean behavior. Lending programs readmit past-foreclosure borrowers after documented waits. People come back constantly.', null, `The credit damage is real, front-loaded — and temporary. Clean behavior rebuilds workable credit in a few years, and buying again has a schedule, not a ban. Link in bio. ${HASH}`],
  ['equity-defense', 'The Real Stake', 'Your equity is the<br/>biggest number in<br/>the case. Know it.', 'Market value minus the written payoff quote — one free afternoon of math that sorts every option. Strangers price your fear; the calculator prices your house.', 'njforeclosureguide.org/tools/net-proceeds', `Before any decision — before any stranger's offer — know your number: value minus payoff, free, in minutes: ${S}/tools/net-proceeds ${HASH}`],
  ['myth-sell', 'Myth vs. Fact', '<span class="accent">FACT:</span> You can sell<br/>your house during<br/>foreclosure.', 'Until the auction happens, the house is yours to sell — the closing pays the judgment and every dollar above it is yours, at market price instead of auction mechanics.', null, `Yes — you can sell during a NJ foreclosure, right up until the auction. The closing pays the case off and the rest is yours. The math and the timeline: link in bio. ${HASH}`],
  ['county-monmouth', 'County Spotlight', 'Monmouth County:<br/>shore demand is<br/>your leverage', 'Ferry towns to Asbury’s revival — deep buyer pools strengthen both the keep-it math and the exit math. The county playbook is on the map.', 'njforeclosureguide.org/nj-map', `Monmouth County's buyer demand is a distressed owner's quiet ally — it strengthens workouts AND exits. The county playbook: ${S}/nj-map ${HASH}`],
  ['es-plusvalia', 'En Español', 'Su plusvalía<br/>sobrevive — si<br/>usted la defiende.', 'Valor de mercado menos la deuda real: ese número decide todo. Los extraños ponen precio a su miedo; la calculadora pone precio a su casa. Gratis.', 'njforeclosureguide.org/es', `Su plusvalía no desaparece porque presentaron una demanda — sobrevive si se defiende. Su número, gratis y en privado: ${S}/es #EnEspanol #NJForeclosure`],
  ['bank-quote', 'Get It in Writing', 'The reinstatement<br/>quote: your plan’s<br/>foundation.', 'Arrears + fees, itemized, with a good-through date — you’re entitled to it in writing, and errors in it are disputable. Plans built on guesses die at the payment window.', null, `Ask your servicer for a written, ITEMIZED reinstatement quote — then read it like an auditor. It's the number every real plan is built on. How to read yours: link in bio. ${HASH}`],
  ['cosigner', 'Scenario Guide', 'Co-signed a loan<br/>that’s defaulting?<br/>You have powers.', 'You’re a full borrower: entitled to account information, able to apply for review, able to cure directly. Your name is on the judgment either way — act like the party you are.', null, `Co-signers discover defaults from credit alerts — but a co-signer IS a borrower, with information rights, application rights, and the power to cure. The crisis guide: link in bio. ${HASH}`],

  // ---- BATCH 5: stages & seasons ----
  ['stage-noi', 'If This Is Your Week', 'The NOI arrived.<br/>This is the cheapest<br/>moment. Use it.', '30 days minimum before anything can be filed. The exact catch-up amount is printed on the letter. Two free calls this week beat any consultant’s fee, ever.', null, `If the Notice of Intention just arrived: you have at least 30 days, the cure amount is printed on it, and the free machinery works best RIGHT NOW. Week-one moves: link in bio. ${HASH}`],
  ['stage-default', 'If You Went Silent', 'Missed the 35 days?<br/>Serious — not<br/>the end.', 'Defaults can sometimes be vacated for good cause. The cure right runs to final judgment. Applications continue. The next-best day to act is today.', null, `If the answer deadline already passed: default is serious and it is NOT final — vacatur motions exist, the cure right survives, and free lawyers evaluate both. Link in bio. ${HASH}`],
  ['va-loans', 'Veterans', 'VA loans come with<br/>an advocate:<br/><span class="accent">877-827-3702</span>', 'VA loan technicians intervene with servicers directly, free — plus VA-specific workout options and county Veterans Service Officers. Say “VA loan” in every conversation.', null, `Veterans: your VA loan carries its own rescue menu AND its own advocate — 877-827-3702, free. Stack it with NJ's rights and the county VSO. The VA playbook: link in bio. ${HASH}`],
  ['tool-njmap', 'Free Tool', 'All 21 counties.<br/>One tap each.', 'Your county’s sheriff contacts, official sale listings, adjournment starting points, and free local orgs — verified, current, free.', 'njforeclosureguide.org/nj-map', `Foreclosure is statewide law with county machinery. All 21 counties' verified contacts and free help, one tap each: ${S}/nj-map ${HASH}`],
  ['county-middlesex', 'County Spotlight', 'Middlesex County:<br/>the crossroads<br/>docket', 'New Brunswick to Edison to Perth Amboy — liquidity strengthens every play, and PRAB’s free HUD counseling serves the whole county. Playbook’s on the map.', 'njforeclosureguide.org/nj-map', `Middlesex County's transit-corridor demand strengthens both the keep-it and exit playbooks — and free HUD counseling serves the county. One tap: ${S}/nj-map ${HASH}`],
  ['es-centro', 'En Español · Nuevo', 'Su Centro de<br/>Mando, en<br/>español.', 'Tres respuestas — etapa, condado, meta — y la página arma su panel personal: sus plazos, su condado, sus tres jugadas. Nada sale de su navegador.', 'njforeclosureguide.org/es/centro-de-mando', `Nuevo y gratis: responda 3 preguntas y la página arma SU panel — plazos, condado, jugadas. Privado por diseño: ${S}/es/centro-de-mando #EnEspanol #NJForeclosure`],
  ['hardship-story', 'The Pattern', 'The #1 way people<br/>lose winnable<br/>houses: silence.', 'Not the bank, not the market — unopened mail. Every envelope has a deadline; every deadline has a free move attached. Open everything. Calendar everything.', null, `Seven years of this work, one pattern: the houses that get lost are the ones where the mail stopped being opened. Every deadline has a free move attached. Link in bio. ${HASH}`],
  ['share-ask', 'Pass It On', 'Someone in your<br/>feed needs this<br/>page today.', 'Free plain-English help for NJ homeowners in foreclosure — every letter, every deadline, all 7 options, en español también. Sharing costs nothing and can change everything.', 'njforeclosureguide.org', `The biggest thing you can do for a struggling homeowner costs nothing: send them one link. Every letter decoded, every deadline explained, all free: ${S} ${HASH}`],
];

const BATCH_SIZE = 8;
const NUM_BATCHES = Math.ceil(CARDS.length / BATCH_SIZE);
const EPOCH = new Date('2026-10-05T12:00:00Z'); // first factory Monday

const argBatch = process.argv.indexOf('--batch');
let batch;
if (argBatch !== -1) {
  batch = Number(process.argv[argBatch + 1]) % NUM_BATCHES;
} else {
  const days = Math.floor((Date.now() - EPOCH.getTime()) / 86400000);
  batch = ((Math.max(0, Math.round(days / 14)) % NUM_BATCHES) + NUM_BATCHES) % NUM_BATCHES;
}

const slice = CARDS.slice(batch * BATCH_SIZE, batch * BATCH_SIZE + BATCH_SIZE);
console.log(`Batch ${batch} of ${NUM_BATCHES} — ${slice.length} cards`);

const shell = (eyebrow, title, bodyHtml, pill) => `
<style>
  * { margin:0; padding:0; box-sizing:border-box; }
  body { width:1080px; height:1080px; background:linear-gradient(160deg,#020617,#0f172a 55%,#1e293b);
         font-family:Georgia,serif; color:#fff; display:flex; flex-direction:column; padding:72px; position:relative; overflow:hidden; }
  .eyebrow { font-family:Arial; font-size:26px; font-weight:bold; letter-spacing:8px; color:#fbbf24; text-transform:uppercase; }
  .footer { position:absolute; bottom:56px; left:72px; right:72px; display:flex; align-items:center; justify-content:space-between; }
  .site { font-family:Arial; font-size:30px; font-weight:bold; letter-spacing:2px; color:#94a3b8; }
  .big { font-size:84px; font-weight:bold; line-height:1.14; letter-spacing:-1px; margin-top:36px; }
  .med { font-size:42px; line-height:1.38; color:#cbd5e1; margin-top:40px; font-family:Arial; }
  .med b { color:#fff; }
  .accent { color:#fbbf24; }
  .huge2 { font-size:230px; color:#fbbf24; line-height:1; letter-spacing:-6px; }
  .pill { display:inline-block; background:#fbbf24; color:#0f172a; font-family:Arial; font-weight:bold;
          font-size:32px; padding:15px 34px; border-radius:60px; margin-top:44px; align-self:flex-start; }
</style>
<body>
  <div class="eyebrow">${eyebrow}</div>
  <div class="big">${title}</div>
  <div class="med">${bodyHtml}</div>
  ${pill ? `<div class="pill">${pill}</div>` : ''}
  <div class="footer"><div class="site">NJFORECLOSUREGUIDE.ORG</div>
    <div style="width:110px;height:117px">${svgWhite.replace('<svg', '<svg width="110" height="117"')}</div></div>
</body>`;

const b = await chromium.launch({ executablePath: '/opt/pw-browsers/chromium' });
let captions = `# Instagram batch ${batch} — generated ${new Date().toISOString().slice(0, 10)}\n\nPost one card every day or two, pasting its caption below. Reply to comments; personal cases go to help@njforeclosureguide.org.\n`;
for (const [id, eyebrow, title, body, pill, caption] of slice) {
  const p = await b.newPage({ viewport: { width: 1080, height: 1080 } });
  await p.setContent(shell(eyebrow, title, body, pill), { waitUntil: 'load' });
  await p.screenshot({ path: path.join(outDir, `ig-${id}.png`) });
  await p.close();
  captions += `\n## ig-${id}.png\n${caption}\n`;
  console.log('rendered', id);
}
await b.close();
fs.writeFileSync(path.join(outDir, 'captions.md'), captions);
console.log('captions.md written — done');
