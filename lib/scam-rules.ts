/**
 * Foreclosure Scam Checker rules. Pure data + functions, no DOM, no network:
 * the page runs analyzeMessage() in the browser, and
 * scripts/test-scam-rules.mjs runs it in Node.
 *
 * WHAT THIS IS: a pattern matcher for the well-documented tactics of
 * foreclosure-rescue and mortgage-relief scams. It flags PATTERNS in text a
 * homeowner pastes. It never names, rates or accuses any company, and it
 * cannot know who actually sent a message.
 *
 * Sources verified 2026-09-24:
 *  - 12 CFR part 1015 (Regulation O, Mortgage Assistance Relief Services),
 *    https://www.law.cornell.edu/cfr/text/12/part-1015 and eCFR.
 *      § 1015.5(a): a provider may not "request or receive payment of any fee
 *        or other consideration until the consumer has executed a written
 *        agreement between the consumer and the consumer's dwelling loan
 *        holder or servicer" incorporating the offer.
 *      § 1015.3(a): may not represent that a consumer "cannot or should not
 *        contact or communicate with his or her lender or servicer."
 *      § 1015.3(b): may not misrepresent the likelihood of results (1),
 *        affiliation with the government / government programs / nonprofit
 *        counselors / the lender (3), the consumer's obligation to keep
 *        making loan payments (4), or that the consumer will receive legal
 *        representation (8).
 *      § 1015.7: attorney exemption. An attorney is exempt (except from
 *        § 1015.5) only if providing the service as part of the practice of
 *        law, licensed in the consumer's state (or where the dwelling is),
 *        and complying with state law; exempt from the advance-fee ban too
 *        only if funds received before legal services are performed are
 *        deposited in a client trust account per state trust-account rules.
 *  - 16 CFR part 322 is now only a cross-reference (§ 322.1): "The rules
 *    formerly at 16 CFR part 322 have been republished by the Consumer
 *    Financial Protection Bureau at 12 CFR part 1015" (eCFR).
 *  - NJ Foreclosure Rescue Fraud Prevention Act, P.L. 2011, c.146,
 *    N.J.S.A. 46:10B-53 to -68 (NOT 2A:50-63; 2A:50-53 et seq. is the Fair
 *    Foreclosure Act). https://pub.njleg.gov/bills/2010/PL11/146_.HTM
 *      46:10B-54: "foreclosure consultant" excludes, among others, HUD-
 *        approved counseling agencies, NJ-licensed attorneys acting under
 *        their license, and Judiciary Foreclosure Mediation Program mediators.
 *      46:10B-55: consultants must be licensed by the Commissioner of
 *        Banking and Insurance.
 *      46:10B-56: plain-language written contract with a boldface notice
 *        that the consultant cannot take money until finished, cannot ask
 *        the owner to sign a lien, mortgage or deed unless the Act is
 *        complied with, and cannot guarantee a refinance.
 *      46:10B-57: owner may cancel a consultant contract any time until the
 *        consultant has fully performed.
 *      46:10B-58: consultant may not collect any compensation until every
 *        service is performed and relief secured; fee capped; may not take
 *        a lien or wage assignment, acquire any interest in the property,
 *        or accept a power of attorney (except to inspect documents).
 *      46:10B-61: owner may cancel a distressed-property conveyance
 *        (sale / sale-leaseback) contract until midnight of the 10th
 *        business day after signing (or the sheriff's sale, if sooner).
 *      46:10B-63: strict terms for sale-leaseback / buy-back conveyances.
 *      46:10B-67: civil penalties; violations are third-degree crimes;
 *        transfers in violation are voidable; treble damages.
 *  - CFPB, "How to spot and avoid foreclosure relief scams":
 *    https://www.consumerfinance.gov/consumer-tools/mortgages/how-to-spot-and-avoid-foreclosure-relief-scams/
 *    (stop paying; up-front fees; pay someone other than your lender; sign
 *    over title / "rent to buy"; pressure; "forensic audit"; look-alike
 *    government names and logos; "Real government officials never ask for
 *    payment to help you"; complaints at consumerfinance.gov/complaint).
 *  - FTC, "Mortgage Relief Scams": https://consumer.ftc.gov/articles/mortgage-relief-scams
 *    (up-front fees, guarantees, "can't tell you to stop talking to your
 *    lender", payments redirected, deed transfer, forensic audits, mass
 *    joinder, pressure to sign, wire / cashier's check / payment apps;
 *    report at ReportFraud.ftc.gov). FTC 2013 release on "mass joinder" and
 *    "forensic loan audit" schemes: https://www.ftc.gov/news-events/news/press-releases/2013/03/marketers-alleged-mass-joinder-forensic-loan-audit-mortgage-relief-services-scams-settle-ftc-charges
 *  - FTC MARS business compliance guide (forensic-audit services covered):
 *    https://www.ftc.gov/business-guidance/resources/mortgage-assistance-relief-services-rule-compliance-guide-business
 *  - HUD: counselor locator 800-569-4287; "Foreclosure, eviction, and
 *    homeless counseling are always free."
 *    https://www.hud.gov/hud-partners/single-family-about-housing-counseling
 *  - Legal Services of New Jersey hotline 1-888-LSNJ-LAW (1-888-576-5529):
 *    https://www.lsnjlaw.org/get-legal-help/call-the-hotline
 *  - NJ Division of Consumer Affairs online complaint portal
 *    https://njconsumeraffairs.nj.gov/ ("General Consumer Complaint"),
 *    phone 800-242-5846 (Division consumer briefs and AG alerts).
 */

export type Severity = 'high' | 'medium' | 'low';

export interface ScamRule {
  id: string;
  severity: Severity;
  /** Short name of the pattern, shown as the flag heading. */
  title: string;
  /** Case-insensitive patterns. Compiled with the "gi" flags at match time. */
  patterns: RegExp[];
  /** Skip a match when a negation ("no", "never", "beware of"...) sits just before it. */
  negatable?: boolean;
  /** Only fire when every one of these also appears somewhere in the text. */
  requiresAll?: RegExp[];
  /** Skip a match when the sentence around it matches this (e.g. "deed in lieu"). */
  unless?: RegExp;
  why: string;
  instead: string;
  link?: { href: string; label: string };
}

export interface LegitSignal {
  id: string;
  label: string;
  patterns: RegExp[];
  /** Only counts when no fee / payment-method flag was found. */
  requiresNoFee?: boolean;
}

export interface ChecklistItem {
  id: string;
  label: string;
  ruleId: string;
}

export type Rating = 'high' | 'warning' | 'none';

export interface Span {
  start: number;
  end: number;
  ruleId: string;
}

export interface Flag {
  rule: ScamRule;
  /** Distinct phrases found in the text (as written), in order of appearance. */
  phrases: string[];
  /** Checklist answers that triggered this flag. */
  answers: string[];
}

export interface Analysis {
  rating: Rating;
  flags: Flag[];
  legit: LegitSignal[];
  spans: Span[];
  score: number;
}

const HIGH = 'high' as const;
const MED = 'medium' as const;
const LOW = 'low' as const;

export const RULES: ScamRule[] = [
  {
    id: 'upfront-fee',
    severity: HIGH,
    title: 'A fee before any help is delivered',
    negatable: true,
    unless: /\b(?:(?:by|over the) (?:tele)?phone|convenience fee|returned (?:check|payment)|late (?:fee|charge)s?)\b/i,
    patterns: [
      /\b(?:up[- ]?front|advance) (?:fee|payment|deposit|retainer)s?\b/,
      /\b(?:initial|one[- ]time|processing|enrollment|enrolment|set[- ]?up|onboarding|administrative|admin|audit|consultation|membership|program|document preparation|file|case) (?:fee|deposit)s?\b/,
      /\b(?:fee|payment|deposit)s? (?:is |are )?(?:due |required |payable )?(?:up[- ]?front|in advance|before (?:we|they|work|our|the process)|to (?:get )?start(?:ed)?|to begin|to open your (?:file|case)|to hold your (?:spot|place))/,
      /\b(?:pay|send|wire)(?: us)?(?: a)?(?: small)?(?: \$[\d,]+(?:\.\d\d)?)? (?:fee )?(?:first|up[- ]?front|in advance|to (?:get )?start(?:ed)?|to begin|to open your (?:file|case)|to process your (?:file|application|case)|to hold your (?:spot|place)|before (?:we|they|our (?:team|office|attorneys?|negotiators?)) (?:start|begin|can|will|do|contact|call))/,
      /\bpaid in advance\b/,
      /\bto (?:hold|reserve|secure|lock in) your (?:spot|place|approval|file|relief)\b/,
      /\b(?:pay|send|wire)(?: us)? \$[\d,]+(?:\.\d\d)?\b[^.!?\n]{0,40}?\bto (?:qualify|enroll|get approved|be approved|start|begin)\b/,
    ],
    why:
      'Federal Regulation O (12 CFR 1015.5) generally bars mortgage-relief companies from taking any fee until you have signed a written agreement with your lender or servicer that incorporates the relief. New Jersey’s Foreclosure Rescue Fraud Prevention Act (N.J.S.A. 46:10B-58) likewise bars foreclosure consultants from collecting anything until they have fully performed and secured the relief. A licensed New Jersey attorney may take a retainer into a client trust account, but a company asking for money first is the single most common scam signal.',
    instead:
      'Do not pay. Free help exists for exactly this: a HUD-approved housing counselor (800-569-4287; foreclosure counseling is always free) can prepare and submit a loss-mitigation application to your servicer, which costs nothing to file.',
  },
  {
    id: 'gov-fee',
    severity: HIGH,
    title: 'A “government program” that wants a fee',
    patterns: [],
    why:
      'The CFPB puts it plainly: real government officials never ask for payment to help you. Regulation O (12 CFR 1015.3) also prohibits misrepresenting any affiliation with the government, a government program, or your lender.',
    instead:
      'Hang up or ignore it. Look up the real agency yourself on a .gov site and call the number listed there, not the number in the message.',
  },
  {
    id: 'deed-transfer',
    severity: HIGH,
    title: 'Signing over your deed or title',
    negatable: true,
    unless: /deed[- ]in[- ]lieu|short sale|in exchange for (?:a |the )?release|to (?:the |your )?(?:lender|servicer|mortgage holder)\b|servicing (?:of your (?:mortgage |loan )?)?(?:is being |has been |will be )?transfer|transfer of (?:the )?servicing|new servicer/i,
    patterns: [
      /\bsign(?:ing)?(?: the| your)? (?:deed|title|house|home|property)s? over\b/,
      /\bsign(?:ing)? over (?:the |your )?(?:deed|title|house|home|property|ownership)\b/,
      /\bdeed (?:it |the (?:house|home|property) )?over\b/,
      /\b(?:transfer|convey|assign)(?:ring|ing|ed)? (?:the |your )?(?:deed|title|ownership)(?: of (?:the|your) (?:house|home|property))?(?: (?:to|into) (?:us|our|me|my|an? (?:investor|trust|llc|company)))?/,
      /\bquit[- ]?claim\b/,
      /\bput (?:the |your )?(?:house|home|property|title|deed) in (?:our|my|his|her|their|an? (?:investor'?s?|trust|llc|company)'?s?) (?:name|trust|llc|company)\b/,
      /\btemporar(?:y|ily) (?:transfer|sign|deed|convey|put|hold)/,
      /\b(?:hold|holds|holding) (?:the |your )?(?:deed|title) (?:for you|until|while)/,
    ],
    why:
      'Handing over your deed "temporarily" or "to protect the house" is how families lose their home and their equity. Once the deed is recorded in someone else’s name, they own the property, can borrow against it or sell it, and you may become their tenant. New Jersey’s Foreclosure Rescue Fraud Prevention Act bars foreclosure consultants from acquiring any interest in your home (N.J.S.A. 46:10B-58) and tightly regulates any sale-leaseback deal.',
    instead:
      'Sign nothing that transfers your deed or title except at a real closing you chose, with your own New Jersey attorney reviewing it first. Legal Services of New Jersey (1-888-576-5529) helps income-eligible homeowners for free. If you already signed, call an attorney right away: some transfers can be cancelled within short deadlines.',
  },
  {
    id: 'leaseback',
    severity: HIGH,
    title: 'Sell it to them and rent it back',
    negatable: true,
    patterns: [
      /\blease[- ]?back\b/,
      /\brent (?:it |the (?:house|home|property) |your (?:house|home) )?back\b/,
      /\brent[- ]to[- ](?:own|buy)\b/,
      /\bbuy (?:it|the (?:house|home|property)|your (?:house|home|property)) back\b/,
      /\bpay (?:us|them|me|the (?:investor|company)) rent\b/,
      /\bstay (?:in (?:your|the) (?:house|home) )?as (?:a|our) (?:renter|tenant)\b/,
    ],
    why:
      'Sale-leaseback "rescues" were the signature scam of the last foreclosure wave: you sign the house over, pay rent, and are promised you can buy it back later. Buy-back terms are often impossible to meet, and the equity goes to the buyer. New Jersey regulates these deals closely (N.J.S.A. 46:10B-61 and -63), including a right to cancel until midnight of the 10th business day after signing, or the sheriff’s sale if that comes first.',
    instead:
      'Do not sign. If selling is the right answer, sell on the open market and keep your equity. Have a New Jersey attorney or HUD-approved counselor (800-569-4287) look at any offer before signing.',
  },
  {
    id: 'stop-paying',
    severity: HIGH,
    title: 'Stop paying your lender, or pay them instead',
    negatable: true,
    unless: /servicing (?:of your (?:mortgage |loan )?)?(?:is being |has been |will be )?transfer|transfer of (?:the )?servicing|new servicer/i,
    patterns: [
      /\bstop (?:making |sending |paying )(?:your |any )?(?:mortgage |monthly )?(?:payments?|the (?:bank|lender|mortgage))?/,
      /\bstop paying (?:your |the )?(?:mortgage|lender|bank|servicer)\b/,
      /\b(?:don'?t|do not|never) (?:pay|send (?:any )?(?:more )?(?:money|payments?) to) (?:your |the )?(?:mortgage|lender|bank|servicer|mortgage company)\b/,
      /\bpay (?:us|our (?:company|firm|office|trust)|me) instead\b/,
      /\b(?:send|make|redirect) (?:your )?(?:mortgage |monthly )?payments? (?:directly )?to (?:us|our (?:company|firm|office|trust|escrow))(?: account)? instead\b/,
      /\binstead of (?:paying )?(?:your |the )?(?:lender|bank|servicer|mortgage company)\b/,
      /\brather than (?:paying )?(?:your |the )?(?:lender|bank|servicer|mortgage company)\b/,
    ],
    why:
      'Being told to stop paying your lender, or to pay the "helper" instead, is one of the red flags the CFPB lists first. Missed payments add fees and push the foreclosure forward, and money sent to a third party usually never reaches your loan. Regulation O (12 CFR 1015.3(b)(4)) bars relief companies from misrepresenting your obligation to keep paying.',
    instead:
      'Keep dealing with your servicer directly and pay only to the servicer named on your mortgage statement. If you cannot afford the payment, tell the servicer and ask for a loss-mitigation application.',
  },
  {
    id: 'no-contact',
    severity: HIGH,
    title: 'Cutting you off from your lender or lawyer',
    negatable: true,
    patterns: [
      /\b(?:don'?t|do not|never|stop) (?:talk(?:ing)?|speak(?:ing)?|contact(?:ing)?|call(?:ing)?|communicat(?:e|ing)|respond(?:ing)?|reply(?:ing)?|answer(?:ing)?)(?: to| with)? (?:your |the )?(?:lender|bank|servicer|mortgage company|lawyer|attorney|counselor|counsellor)s?\b/,
      /\b(?:avoid|ignore) (?:all )?(?:contact(?:ing)?|calls|letters|mail|talking)(?: with| to| from)? (?:your |the )?(?:lender|bank|servicer|mortgage company|lawyer|attorney)s?\b/,
      /\b(?:let us|we will|we'll) (?:do all the talking|handle all (?:the )?(?:communication|contact|calls))\b/,
      /\bno need (?:to|for) (?:a |an )?(?:lawyer|attorney|counselor)\b/,
    ],
    why:
      'Regulation O (12 CFR 1015.3(a)) makes it illegal for a mortgage-relief company to tell you that you cannot or should not contact your lender or servicer. Someone who wants you isolated from your servicer, a counselor, or a lawyer usually needs you not to check what they are telling you.',
    instead:
      'Keep talking to your servicer yourself and keep copies of everything. Run any offer past a HUD-approved counselor (800-569-4287) or Legal Services of New Jersey (1-888-576-5529) before you sign.',
  },
  {
    id: 'guarantee',
    severity: HIGH,
    title: 'A guaranteed result',
    negatable: true,
    patterns: [
      /\bguarantee(?:d|s)?\b[^.!?\n]{0,60}?\b(?:stop|save|approv|modif|keep|foreclos|results?|success|lower|reduc|sale|auction|relief)\w*/,
      /\b(?:stop|save|approv|modif|keep|foreclos|lower|reduc)\w*[^.!?\n]{0,40}?\bguarantee(?:d)?\b/,
      /\b100\s?% (?:guaranteed|success|approval|approved|results?)\b/,
      /\b(?:we|they) (?:will|can) (?:definitely|absolutely|always|100% )?(?:stop|halt|cancel|end) (?:the |your )?(?:foreclosure|sheriff'?s? sale|auction)\b/,
      /\bnever lose your (?:home|house)\b/,
      /\bmoney[- ]back guarantee\b/,
    ],
    why:
      'No one can guarantee that a lender will modify a loan or that a foreclosure will stop. Regulation O (12 CFR 1015.3(b)(1)) prohibits misrepresenting the likelihood of results, and New Jersey requires foreclosure-consultant contracts to warn that the consultant cannot guarantee a refinance (N.J.S.A. 46:10B-56). The FTC notes a reputable lawyer does not guarantee results either.',
    instead:
      'Treat any guarantee as a reason to walk away. Ask your servicer directly which options you are being reviewed for, and use the free court mediation program if your case has been filed.',
  },
  {
    id: 'account-login',
    severity: HIGH,
    title: 'Asking for your banking login or a security code',
    negatable: true,
    patterns: [
      /\b(?:online |mobile )?banking (?:log ?in|sign[- ]?in|password|user ?name|user ?id|credentials)\b/,
      /\b(?:user ?name|log ?in|user ?id) (?:and|&|\/) password\b/,
      /\b(?:send|text|give|read|tell|share|forward|reply with|provide)(?: it)?(?: to)?(?: us| me)? (?:the |your |that )?(?:\d[- ]digit )?(?:one[- ]time|verification|security|login|confirmation) (?:pass)?code\b/,
      /\bcode (?:we|I|they) (?:just )?(?:sent|texted|emailed)\b/,
      /\b(?:send|text|give|provide|confirm|verify|reply with|share)(?: us)?(?: me)? (?:your )?(?:bank(?:ing)? )?(?:password|pin)\b/,
      /\bremote (?:access|desktop|control)\b|\b(?:anydesk|teamviewer)\b/,
    ],
    why:
      'No servicer, counselor, court or government program needs your online-banking password or the one-time code your bank texts you. With them, someone can empty your accounts. This is account-takeover fraud dressed up as mortgage help.',
    instead:
      'Never share a password or code. If you already did, call your bank using the number on your card or statement, change your password, and ask them to watch the account.',
  },
  {
    id: 'untraceable-payment',
    severity: HIGH,
    title: 'Payment by gift card, crypto, or payment app',
    negatable: true,
    patterns: [
      /\bgift ?cards?\b/,
      /\b(?:bitcoin|btc|crypto(?:currency)?|usdt|tether|ethereum)\b/,
      /\b(?:zelle|venmo|cash ?app|western union|moneygram)\b/,
      /\b(?:reload(?:able)?|prepaid) (?:card|debit card)\b/,
    ],
    why:
      'The FTC warns that scammers prefer payment methods that are hard to trace or reverse. Your servicer, the court, the sheriff and real government programs do not take gift cards, crypto, or person-to-person app payments for mortgage help.',
    instead:
      'Do not send money this way. Pay your mortgage only through the servicer’s own channels listed on your statement.',
  },
  {
    id: 'sovereign-scheme',
    severity: HIGH,
    title: '"Your mortgage is already paid" document schemes',
    patterns: [
      /\bsovereign citizen\b/,
      /\baccept(?:ed)? for value\b|\bA4V\b/i,
      /\bUCC[- ]?1\b|\bUCC financing statement\b/i,
      /\bstraw ?man\b/,
      /\bredemption (?:process|theory|account)\b/,
      /\ballodial title\b/,
      /\b(?:bond(?:ed)?|tender(?:ed)?) (?:promissory )?(?:note|payment|instrument)\b/,
      /\bmortgage (?:was|is|has been) (?:already )?paid (?:off )?by (?:the )?(?:treasury|government|federal reserve)\b/,
      /\bnotice of (?:conditional acceptance|dishonou?r|fault)\b|\baffidavit of (?:truth|status)\b/,
      /\bdischarge (?:your |the )?(?:mortgage|debt|loan) (?:with|using) (?:a |an |our )?(?:bond|ucc|affidavit|note)\b/,
    ],
    why:
      'Paperwork that claims a mortgage was "already paid" by the Treasury, can be discharged with a bond or "accepted for value" stamp, or cancelled with UCC filings has no legal effect. Courts reject these theories, filing them can delay nothing while fees and deadlines keep running, and false filings can expose the homeowner to penalties.',
    instead:
      'Do not file these documents or pay for them. If you have a defense to the foreclosure, a New Jersey attorney or Legal Services of New Jersey (1-888-576-5529) can tell you whether it is real.',
  },
  {
    id: 'gov-affiliation',
    severity: MED,
    title: 'Claims to be a government program',
    negatable: true,
    patterns: [
      /\bfederal (?:foreclosure|mortgage|homeowner|housing|relief|hardship|stimulus|loan)\w* (?:relief |assistance |prevention |modification |forgiveness )?(?:program|relief|assistance|department|division|agency|grant)\b/,
      /\bgovernment[- ](?:program|approved|backed|sponsored|grant|relief|mortgage|funded)\b/,
      /\b(?:obama|biden|trump|president'?s?)[- ](?:loan|mortgage|foreclosure|relief|homeowner)\w*\b/,
      /\bnational (?:mortgage|foreclosure|homeowner|housing) (?:relief|assistance|prevention|modification|protection) (?:program|center|department|division|agency|office)\b/,
      /\bdepartment of (?:homeowner|mortgage|foreclosure) (?:relief|assistance|prevention|services)\b/,
      /\b(?:HAMP|HARP)\b/,
      /\bofficial (?:notice of )?(?:eligibility|approval)\b/,
      /\bstate[- ](?:approved|backed|sponsored) (?:program|relief|modification)\b/,
    ],
    why:
      'The CFPB warns that scammers use names, seals, and logos that look or sound like government agencies. Regulation O (12 CFR 1015.3(b)(3)) prohibits misrepresenting any affiliation with the government or a government program. Real programs (and HUD-approved counselors) do not charge you to apply. Expired programs such as HAMP and HARP are a giveaway.',
    instead:
      'Find the program yourself on an official .gov website and call the number listed there. Never use the phone number, link, or QR code in the message itself.',
  },
  {
    id: 'forensic-audit',
    severity: MED,
    title: 'A paid "forensic loan audit"',
    negatable: true,
    patterns: [
      /\bforensic (?:loan |mortgage )?(?:audit|review|analysis|examination)s?\b/,
      /\b(?:loan|mortgage|securitization|TILA|RESPA) (?:audit|securitization audit)s?\b/i,
      /\bsecuritization (?:report|analysis)\b/,
      /\brobo[- ]?sign\w*[^.!?\n]{0,40}(?:audit|report|void)\b/,
    ],
    why:
      'The CFPB lists "forensic audits" as a scam sign, and the FTC warns no one can promise an audit will get you a modification. The FTC treats selling one as a mortgage-relief service, so the advance-fee ban applies. Your servicer does not need an audit to review you for help.',
    instead:
      'If you think your loan was handled wrongly, send your servicer a written request for information or notice of error for free, or ask a HUD-approved counselor or Legal Services of New Jersey to review it.',
  },
  {
    id: 'mass-joinder',
    severity: MED,
    title: 'Join a lawsuit against the banks',
    negatable: true,
    patterns: [
      /\bmass[- ]joinder\b/,
      /\bjoin (?:a|our|the|this) (?:lawsuit|class[- ]action|litigation|suit)\b/,
      /\b(?:class[- ]action|lawsuit|litigation)s? against (?:the |your |major |big )?(?:banks?|lenders?|servicers?)\b/,
      /\bsue (?:your |the )?(?:lender|bank|servicer)\b[^.!?\n]{0,60}\b(?:stop|save|keep|free|own)/,
    ],
    why:
      'The FTC has shut down operations that sold spots in "mass joinder" lawsuits against lenders, promising they would stop foreclosures or win free-and-clear homes. They are not class actions; each homeowner still has to prove their own case, and the fees are usually collected up front.',
    instead:
      'For your own case, answer the foreclosure complaint on time and ask about the free court mediation program. Legal Services of New Jersey (1-888-576-5529) can tell you if you have a real defense.',
  },
  {
    id: 'surplus-recovery',
    severity: MED,
    title: 'A cut of your surplus money',
    requiresAll: [
      /\b(?:surplus|excess (?:funds?|money|monies|proceeds)|overages?|unclaimed (?:funds?|money|monies|proceeds))\b/i,
      /\b(?:charge|charges|keep|keeps|take|takes|fee of|cut of|only|just)\s(?:a\s)?\d{1,2}(?:\.\d+)?\s?%|\b\d{1,2}(?:\.\d+)?\s?%\s(?:fee|of (?:the|your|what|any)|cut|commission)\b|\bfinder'?s?\b|\brecovery (?:fee|service|agreement|contract|company|firm)\b|\bassignment (?:agreement|of (?:claim|funds|rights|surplus))\b|\bassign (?:your|the|us) (?:claim|rights|surplus)\b|\bsign (?:the|our|this) assignment\b|\bcontingency\b/i,
    ],
    patterns: [
      /\b(?:surplus|excess|overage|unclaimed) (?:funds?|money|monies|proceeds)\b|\bsurplus\b/,
      /\b(?:charge|charges|keep|keeps|take|takes|fee of|cut of)\s(?:a\s)?\d{1,2}(?:\.\d+)?\s?%|\b\d{1,2}(?:\.\d+)?\s?%\s(?:fee|of (?:the|your|what|any)|cut|commission)\b/,
      /\b(?:finder'?s? (?:fee|agreement)|recovery (?:fee|agreement|contract)|assignment (?:agreement|of (?:claim|funds|rights|surplus))|sign (?:the|our|this) assignment|contingency fee)\b/,
    ],
    why:
      'If a sheriff sale brought more than was owed, the surplus is generally yours after valid liens and is claimed from the Superior Court Trust Fund by a court motion. Finders often ask for a quarter to a third of it, sometimes before you know whether any money exists or how much.',
    instead:
      'Confirm with the Superior Court Trust Fund Unit whether money was deposited in your case before signing anything, and estimate it yourself first.',
    link: { href: '/tools/surplus-funds', label: 'Surplus funds calculator' },
  },
  {
    id: 'too-good',
    severity: MED,
    title: 'Too-good-to-be-true promises',
    negatable: true,
    patterns: [
      /\b(?:cut|reduce|lower|slash)(?:s|d)? (?:your )?(?:principal|balance|mortgage|loan|monthly payments?|payments?) (?:balance )?by (?:up to |as much as )?\d{1,3}\s?%/,
      /\bwipe (?:out )?(?:your )?(?:mortgage|debt|loan)\b|\b(?:eliminate|erase|cancel|forgive) (?:your )?(?:entire )?(?:mortgage|debt|loan)\b/,
      /\b(?:own|keep) (?:your |the )?(?:home|house) free and clear\b/,
      /\byou(?:'ve| have)? (?:been|are) (?:pre[- ]?approved|selected|chosen|pre[- ]?qualified)\b/,
      /\bpre[- ]?approved\b/,
    ],
    why:
      'Promises of big principal cuts, a debt "wiped out", or that you have been "pre-approved" or "selected" for relief before anyone has seen your finances are sales hooks. Regulation O prohibits misrepresenting how much a homeowner will save or the likelihood of results (12 CFR 1015.3(b)).',
    instead:
      'Only your servicer can offer a modification. Ask the servicer directly, in writing, which options you are being reviewed for.',
  },
  {
    id: 'attorney-front',
    severity: MED,
    title: '"Attorney-backed" or a retainer for mortgage help',
    negatable: true,
    patterns: [
      /\b(?:attorney|lawyer|legal)[- ](?:backed|assisted|supervised|affiliated|network)\b/,
      /\b(?:network|team|panel) of (?:attorneys|lawyers)\b/,
      /\bretainer\b/,
    ],
    why:
      'Regulation O exempts an attorney only when the help is part of the practice of law, the attorney is licensed where you live or where the home is, and follows state rules; an advance fee is allowed only if placed in a client trust account (12 CFR 1015.7). Companies that say they are "attorney-backed" or have "a network of attorneys" are often not law firms at all, and New Jersey’s rescue-fraud law exempts only NJ-licensed attorneys acting under their license.',
    instead:
      'Get the lawyer’s full name, confirm their license with the New Jersey Courts’ Attorney Search on njcourts.gov, meet or speak with them directly, and ask for a written fee agreement. Legal Services of New Jersey (1-888-576-5529) is free if you qualify.',
  },
  {
    id: 'power-of-attorney',
    severity: MED,
    title: 'Asking for power of attorney',
    negatable: true,
    patterns: [/\bpower[- ]of[- ]attorney\b/, /\bPOA\b/],
    why:
      'A power of attorney can let someone sign documents, including a deed, in your name. New Jersey’s rescue-fraud law bars foreclosure consultants from accepting a power of attorney except to inspect documents (N.J.S.A. 46:10B-58).',
    instead:
      'Do not give a power of attorney to anyone offering foreclosure help. Your servicer will talk to a counselor or attorney you authorize with a simple third-party authorization form instead.',
  },
  {
    id: 'pressure',
    severity: MED,
    title: 'Pressure to act right now',
    negatable: true,
    patterns: [
      /\bact (?:now|today|immediately|fast|quickly)\b/,
      /\bsign (?:it |this |these |the (?:papers|contract|documents) )?(?:today|tonight|right now|immediately|now)\b/,
      /\btoday only\b|\bonly today\b/,
      /\b(?:offer|this|deal|spot|approval) (?:expires|ends|is only good) (?:today|tonight|in \d+ (?:hours?|days?)|at midnight|this (?:week|weekend|friday))\b/,
      /\bwithin (?:24|48|72) hours\b/,
      /\blast chance\b|\bfinal (?:chance|opportunity|warning)\b/,
      /\bbefore it'?s too late\b|\btime is running out\b/,
      /\blimited[- ]time\b|\bonly \d+ (?:spots|openings|slots)\b/,
    ],
    why:
      'The CFPB and FTC both list pressure to act or sign immediately as a scam sign. Legitimate options survive a day or two of thought, and New Jersey gives homeowners real time: an answer period after a complaint is served, free court mediation, and generally two adjournments of a scheduled sheriff sale.',
    instead:
      'Take the papers home and have a HUD-approved counselor or attorney read them before signing. Real deadlines are on court papers and your county sheriff’s listing; check those directly.',
  },
  {
    id: 'sign-without-reading',
    severity: MED,
    title: 'Sign without reading, or sign blank forms',
    negatable: true,
    patterns: [
      /\b(?:no need to|don'?t need to|you don'?t have to) read\b/,
      /\bblank (?:forms?|documents?|contract|pages?)\b/,
      /\bwe'?ll fill (?:in|out) the rest\b|\bjust sign (?:here|this|at the bottom)\b/,
    ],
    why:
      'The CFPB lists pushing you to sign papers you do not understand as a red flag. Blank or unread documents are how deed transfers and liens get slipped into a "rescue" package.',
    instead:
      'Never sign anything blank or unread. You are entitled to copies of everything and to have your own counselor or attorney review it.',
  },
  {
    id: 'wire-transfer',
    severity: MED,
    title: 'Wire the money',
    negatable: true,
    unless: /call(?:ing)? (?:us |the number )?(?:at )?(?:the number )?(?:on|from) your (?:monthly |mortgage )?statement/i,
    patterns: [/\bwire (?:transfer|the (?:money|funds|payment)|us|it|funds|payment|\$)/, /\bwiring instructions\b/],
    why:
      'Wires are almost impossible to reverse. Servicers and closing attorneys do accept wires for payoffs and reinstatements, which is exactly why criminals send fake or changed wiring instructions.',
    instead:
      'Before wiring anything, call your servicer or attorney using a number you look up yourself (from your statement or their official website) and confirm the instructions by voice.',
  },
  {
    id: 'sensitive-info',
    severity: LOW,
    title: 'Asking for your Social Security or account numbers',
    negatable: true,
    patterns: [
      /\b(?:send|text|give|provide|confirm|verify|reply with|share|update)\b[^.!?\n]{0,60}?\b(?:ssn|social security(?: number)?|bank account(?: number| info(?:rmation)?)|routing number|debit card(?: number)?|card number)\b/,
    ],
    why:
      'A servicer’s written loss-mitigation application can legitimately ask for identifying information, but a text, call, or unknown sender asking for your Social Security or bank-account numbers is a classic identity-theft move.',
    instead:
      'Give personal information only through channels you started yourself, using the phone number or portal from your mortgage statement.',
  },
];

/** Things said on the phone or in person. Each maps to a rule. */
export const CHECKLIST: ChecklistItem[] = [
  { id: 'q-deed', label: 'They asked me to sign over my deed', ruleId: 'deed-transfer' },
  { id: 'q-stop', label: 'They told me to stop paying my mortgage', ruleId: 'stop-paying' },
  { id: 'q-fee', label: 'They want payment before doing anything', ruleId: 'upfront-fee' },
  { id: 'q-nocontact', label: 'They told me not to talk to my lender or lawyer', ruleId: 'no-contact' },
  { id: 'q-guarantee', label: 'They guaranteed they can stop or save my home', ruleId: 'guarantee' },
  { id: 'q-rent', label: 'They want me to pay them rent / lease back', ruleId: 'leaseback' },
  { id: 'q-login', label: 'They asked for my online banking login', ruleId: 'account-login' },
  { id: 'q-govfee', label: 'They say they’re from a government program and ask for a fee', ruleId: 'gov-fee' },
  { id: 'q-pressure', label: 'They pressure me to sign today', ruleId: 'pressure' },
];

/**
 * Context that often appears in legitimate letters. It lowers the score for
 * medium and low flags only: scammers borrow these names too, so it never
 * cancels a high-severity flag, and the tool cannot verify the sender.
 */
export const LEGIT_SIGNALS: LegitSignal[] = [
  {
    id: 'hud-counselor',
    label: 'Mentions a HUD-approved housing counselor',
    patterns: [/\bHUD[- ](?:approved|certified)\b/i, /\bhousing counsel(?:ing|or|ling) agenc/i, /\b(?:1[- .])?800[- .)]?\s?569[- .]?4287\b/],
    requiresNoFee: true,
  },
  {
    id: 'court-mediation',
    label: 'Refers to the NJ courts or the court’s foreclosure mediation program',
    patterns: [/\bforeclosure mediation\b/i, /\bnjcourts\.gov\b/i, /\bOffice of Foreclosure\b/i, /\bSuperior Court of New Jersey\b/i, /\bChancery Division\b/i],
    requiresNoFee: true,
  },
  {
    id: 'lsnj',
    label: 'Refers you to Legal Services of New Jersey',
    patterns: [/\bLegal Services of New Jersey\b/i, /\bLSNJ(?:LAW)?\b/i, /\b(?:1[- .])?888[- .)]?\s?576[- .]?5529\b/],
  },
  {
    id: 'servicer-letter',
    label: 'Looks like a servicer letter (loan number, loss-mitigation language) with no fee request',
    patterns: [
      /\b(?:loan|account) (?:number|no\.?|#)\s*:?\s*[x*•#\d-]{4,}/i,
      /\bloss mitigation\b/i,
      /\bnotice of intention to foreclose\b/i,
      /\breinstatement (?:amount|quote|figures)\b/i,
    ],
    requiresNoFee: true,
  },
  {
    id: 'states-free',
    label: 'Says the help is free',
    patterns: [/\b(?:free of charge|at no (?:cost|charge)|no (?:fee|charge|cost) to (?:you|apply)|(?:is|are) (?:always )?free)\b/i],
    requiresNoFee: true,
  },
];

const FEE_RULES = new Set(['upfront-fee', 'gov-fee', 'untraceable-payment', 'surplus-recovery', 'attorney-front']);

const NEGATION = /\b(?:no|not|never|without|don'?t|do not|won'?t|will not|cannot|can'?t|can not|isn'?t|aren'?t|beware(?: of)?|avoid|illegal|refuse|free of|no one|nobody|anyone (?:who|that))\b[^.!?\n]*$/i;

/** Text immediately before a match, back to the nearest clause break, capped. */
function leadIn(text: string, start: number, max = 32): string {
  const from = Math.max(0, start - max);
  const chunk = text.slice(from, start);
  const cut = Math.max(chunk.lastIndexOf('.'), chunk.lastIndexOf('!'), chunk.lastIndexOf('?'), chunk.lastIndexOf('\n'), chunk.lastIndexOf(','), chunk.lastIndexOf(';'), chunk.lastIndexOf(':'));
  return cut >= 0 ? chunk.slice(cut + 1) : chunk;
}

/** The sentence containing a match, for rule-level `unless` checks. */
function sentenceAround(text: string, start: number, end: number): string {
  const stops = /[.!?\n]/;
  let a = start;
  while (a > 0 && !stops.test(text[a - 1]) && start - a < 200) a--;
  let b = end;
  while (b < text.length && !stops.test(text[b]) && b - end < 200) b++;
  return text.slice(a, b);
}

/** Normalize curly quotes so "don’t" matches "don't". Same length, so indexes line up. */
export function normalize(text: string): string {
  return text.replace(/[‘’ʼ]/g, "'").replace(/[“”]/g, '"');
}

function findSpans(text: string, rule: ScamRule): Span[] {
  const out: Span[] = [];
  if (rule.requiresAll && !rule.requiresAll.every((r) => new RegExp(r.source, 'i').test(text))) return out;
  for (const p of rule.patterns) {
    const flags = p.flags.includes('g') ? p.flags : p.flags + 'g';
    const re = new RegExp(p.source, flags.includes('i') ? flags : flags + 'i');
    let m: RegExpExecArray | null;
    while ((m = re.exec(text)) !== null) {
      if (m[0].length === 0) {
        re.lastIndex++;
        continue;
      }
      const start = m.index;
      const end = start + m[0].trimEnd().length;
      if (rule.negatable && NEGATION.test(leadIn(text, start))) continue;
      if (rule.unless && rule.unless.test(sentenceAround(text, start, end))) continue;
      out.push({ start, end, ruleId: rule.id });
    }
  }
  return out;
}

/** Merge overlapping spans (keeping the higher-severity rule id for coloring). */
function mergeSpans(spans: Span[]): Span[] {
  const rank = (id: string) => {
    const s = RULES.find((r) => r.id === id)?.severity;
    return s === 'high' ? 3 : s === 'medium' ? 2 : 1;
  };
  const sorted = [...spans].sort((a, b) => a.start - b.start || b.end - a.end);
  const out: Span[] = [];
  for (const s of sorted) {
    const last = out[out.length - 1];
    if (last && s.start < last.end) {
      if (s.end > last.end) last.end = s.end;
      if (rank(s.ruleId) > rank(last.ruleId)) last.ruleId = s.ruleId;
    } else out.push({ ...s });
  }
  return out;
}

const WEIGHT: Record<Severity, number> = { high: 5, medium: 2, low: 1 };

/**
 * Analyze pasted text plus checklist answers. Pure and deterministic.
 * Rating:
 *  - any high-severity flag -> 'high' (legit-sounding context never cancels it)
 *  - otherwise medium/low points minus 2 per legit signal; >= 6 -> 'high'
 *  - any medium flag, or points left over -> 'warning'
 *  - else 'none' ("no KNOWN red flags", which is not the same as safe)
 */
export function analyzeMessage(rawText: string, checkedIds: string[] = []): Analysis {
  const text = normalize(rawText || '');
  const byRule = new Map<string, Flag>();
  const allSpans: Span[] = [];
  const get = (rule: ScamRule) => {
    let f = byRule.get(rule.id);
    if (!f) {
      f = { rule, phrases: [], answers: [] };
      byRule.set(rule.id, f);
    }
    return f;
  };

  for (const rule of RULES) {
    const spans = findSpans(text, rule);
    if (!spans.length) continue;
    const f = get(rule);
    for (const s of mergeSpans(spans)) {
      const phrase = rawText.slice(s.start, s.end).replace(/\s+/g, ' ').trim();
      if (!f.phrases.some((p) => p.toLowerCase() === phrase.toLowerCase())) f.phrases.push(phrase);
    }
    allSpans.push(...spans);
  }

  for (const id of checkedIds) {
    const item = CHECKLIST.find((c) => c.id === id);
    const rule = item && RULES.find((r) => r.id === item.ruleId);
    if (item && rule) get(rule).answers.push(item.label);
  }

  // A "government program" plus any fee or odd payment method is its own, worse flag.
  if (byRule.has('gov-affiliation') && (byRule.has('upfront-fee') || byRule.has('untraceable-payment') || byRule.has('wire-transfer'))) {
    const f = get(RULES.find((r) => r.id === 'gov-fee')!);
    for (const p of byRule.get('gov-affiliation')!.phrases) if (!f.phrases.includes(p)) f.phrases.push(p);
  }

  const flags = RULES.map((r) => byRule.get(r.id)).filter((f): f is Flag => !!f);
  const hasFee = flags.some((f) => FEE_RULES.has(f.rule.id));
  const legit = LEGIT_SIGNALS.filter((sig) => (!sig.requiresNoFee || !hasFee) && sig.patterns.some((p) => new RegExp(p.source, p.flags.replace('g', '')).test(text)));

  const highCount = flags.filter((f) => f.rule.severity === 'high').length;
  const medCount = flags.filter((f) => f.rule.severity === 'medium').length;
  const points = flags.filter((f) => f.rule.severity !== 'high').reduce((sum, f) => sum + WEIGHT[f.rule.severity], 0);
  const adjusted = Math.max(0, points - 2 * legit.length);
  const score = highCount * WEIGHT.high + adjusted;

  let rating: Rating;
  if (highCount > 0 || adjusted >= 6) rating = 'high';
  else if (medCount > 0 || adjusted > 0) rating = 'warning';
  else rating = 'none';

  return { rating, flags, legit, spans: mergeSpans(allSpans), score };
}

/** Split text into plain and highlighted runs for display. */
export function segments(rawText: string, spans: Span[]): { text: string; ruleId?: string }[] {
  const out: { text: string; ruleId?: string }[] = [];
  let i = 0;
  for (const s of spans) {
    if (s.start > i) out.push({ text: rawText.slice(i, s.start) });
    out.push({ text: rawText.slice(s.start, s.end), ruleId: s.ruleId });
    i = s.end;
  }
  if (i < rawText.length) out.push({ text: rawText.slice(i) });
  return out;
}

export const RATING_LABEL: Record<Rating, string> = {
  high: 'High risk',
  warning: 'Some warning signs',
  none: 'No known red flags found',
};

/** Sample texts for the "try an example" buttons (fictional; no real companies). */
export const EXAMPLES: { id: string; label: string; text: string }[] = [
  {
    id: 'rescue-flyer',
    label: 'A “rescue” flyer',
    text:
      'FINAL NOTICE: National Homeowner Relief Program. You have been pre-approved for foreclosure relief! We guarantee we can stop your sheriff sale. A one-time $1,495 processing fee is due to open your file. Stop making payments to your lender and send your payments to us instead while we negotiate. Do not talk to your bank; our attorney-backed team will handle all communication. Offer expires in 48 hours. Call now.',
  },
  {
    id: 'deed-text',
    label: 'A “sign it over” text',
    text:
      'Hi, this is Mike. I saw your house is going to auction. I can save it. Just sign the deed over to my company temporarily, we pay off the bank, and you rent it back for $1,800 a month until your credit is fixed, then buy it back. Need you to sign today, the investor leaves town tomorrow. Also text me your online banking login so we can verify your income.',
  },
  {
    id: 'servicer-letter',
    label: 'A servicer letter',
    text:
      'Loan Number: XXXXXX4821\nRe: Notice of Intention to Foreclose\n\nYour mortgage loan is in default. To cure the default, you must pay the past-due amount of $7,214.36 on or before November 30, 2026. You may be eligible for loss mitigation options such as a repayment plan or loan modification. There is no fee to apply. To request an application, call the number on your monthly statement. You may also contact a HUD-approved housing counseling agency at 800-569-4287.',
  },
];
