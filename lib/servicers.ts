// MORTGAGE SERVICER LOSS-MITIGATION CONTACTS
// ---------------------------------------------------------------------------
// Every phone number here was verified against the servicer's OWN page
// (recorded in verifiedFrom) on 2026-08-28. Verified-or-null: LoanCare's
// number is null because their pages could not be read for confirmation, not
// because they lack one. Never fill a null from a third-party site or from
// memory; re-verify on the servicer's own domain or leave it null.
//
// phoneType 'loss-mitigation' means the servicer publishes it specifically
// for hardship/assistance; 'general' means it is their main line and callers
// should ask for loss mitigation.
// ---------------------------------------------------------------------------

export interface Servicer {
  name: string;
  assistUrl: string | null;
  phone: string | null;
  phoneType: 'loss-mitigation' | 'general' | null;
  onlineApp: boolean | null;
  verifiedFrom: string | null;
  note?: string;
}

export const SERVICERS: Servicer[] = [
  {
    name: 'Mr. Cooper',
    assistUrl: 'https://www.mrcooper.com/blog/behind-on-mortgage-payments-we-can-help/',
    phone: '866-316-2432',
    phoneType: 'loss-mitigation',
    onlineApp: true,
    verifiedFrom: 'https://www.mrcooper.com/blog/behind-on-mortgage-payments-we-can-help/',
    note: 'Now part of Rocket Companies; both brands publish the same assistance line.',
  },
  {
    name: 'Rocket Mortgage',
    assistUrl: 'https://www.rocketmortgage.com/legal/mortgage-assistance',
    phone: '866-316-2432',
    phoneType: 'loss-mitigation',
    onlineApp: true,
    verifiedFrom: 'https://www.rocketmortgage.com/legal/mortgage-assistance',
  },
  {
    name: 'Wells Fargo Home Mortgage',
    assistUrl: 'https://www.wellsfargo.com/mortgage/manage-account/payment-help/',
    phone: '1-800-678-7986',
    phoneType: 'loss-mitigation',
    onlineApp: true,
    verifiedFrom: 'https://www.wellsfargo.com/mortgage/manage-account/payment-help/',
  },
  {
    name: 'Chase Home Lending',
    assistUrl: 'https://www.chase.com/personal/mortgage/mortgage-assistance',
    phone: '1-800-848-9380',
    phoneType: 'loss-mitigation',
    onlineApp: false,
    verifiedFrom: 'https://www.chase.com/personal/mortgage/mortgage-assistance',
    note: 'Uses a form you download, sign and upload after logging in, rather than a fill-in online application.',
  },
  {
    name: 'Bank of America Home Loans',
    assistUrl: 'https://homeloanhelp.bankofamerica.com/en/index.html',
    phone: '800-669-6650',
    phoneType: 'loss-mitigation',
    onlineApp: null,
    verifiedFrom: 'https://homeloanhelp.bankofamerica.com/en/index.html',
  },
  {
    name: 'Freedom Mortgage',
    assistUrl: 'https://www.freedommortgage.com/help-with-mortgage-payments',
    phone: '855-690-5900',
    phoneType: 'loss-mitigation',
    onlineApp: true,
    verifiedFrom: 'https://www.freedommortgage.com/help-with-mortgage-payments',
  },
  {
    name: 'Pennymac',
    assistUrl: 'https://www.pennymac.com/relief-and-assistance',
    phone: '866-545-9070',
    phoneType: 'loss-mitigation',
    onlineApp: null,
    verifiedFrom: 'https://www.pennymac.com/relief-and-assistance',
  },
  {
    name: 'Newrez (incl. former Shellpoint)',
    assistUrl: 'https://www.newrez.com/loss-mitigation/',
    phone: '866-317-2347',
    phoneType: 'general',
    onlineApp: true,
    verifiedFrom: 'https://www.newrez.com/loss-mitigation/',
  },
  {
    name: 'Select Portfolio Servicing (SPS)',
    assistUrl: 'https://www.spservicing.com/StaticDetails/RequestAssistance',
    phone: '888-818-6032',
    phoneType: 'loss-mitigation',
    onlineApp: true,
    verifiedFrom: 'https://www.spservicing.com/StaticDetails/RequestAssistance',
  },
  {
    name: 'PHH Mortgage (Onity, formerly Ocwen)',
    assistUrl: 'https://www.mortgagequestions.com/Assistance',
    phone: '800-449-8767',
    phoneType: 'general',
    onlineApp: true,
    verifiedFrom: 'https://www.mortgagequestions.com/Assistance',
  },
  {
    name: 'Carrington Mortgage Services',
    assistUrl: 'https://www.carringtonmortgage.com/mortgage-assistance',
    phone: '800-561-4567',
    phoneType: 'general',
    onlineApp: true,
    verifiedFrom: 'https://www.carringtonmortgage.com/mortgage-assistance',
  },
  {
    name: 'M&T Bank',
    assistUrl: 'https://www.mtb.com/personal/mortgages-and-loans/mortgages/manage/paying/assistance',
    phone: '1-800-724-1633',
    phoneType: 'loss-mitigation',
    onlineApp: true,
    verifiedFrom: 'https://www.mtb.com/personal/mortgages-and-loans/mortgages/manage/paying/assistance',
  },
  {
    name: 'United Wholesale Mortgage (UWM)',
    assistUrl: 'https://www.uwm.com/borrower-resources',
    phone: '888-896-9658',
    phoneType: 'general',
    onlineApp: null,
    verifiedFrom: 'https://www.uwm.com/loan-servicing',
  },
  {
    name: 'Cenlar FSB',
    assistUrl: 'https://policies.loanadministration.com/loan_assistance',
    phone: '1-800-223-6527',
    phoneType: 'general',
    onlineApp: null,
    verifiedFrom: 'https://www.cenlar.com/contact',
    note: 'Cenlar services loans on behalf of many banks and credit unions; your statement may show the bank’s name.',
  },
  {
    name: 'LoanCare',
    assistUrl: 'https://newrez.myloancare.com/mortgage-assistance/financial-assistance',
    phone: null,
    phoneType: null,
    onlineApp: null,
    verifiedFrom: null,
    note: 'Their pages could not be read to confirm a number; use the assistance portal or the number on your statement.',
  },
];

export const SERVICER_DATA_VERIFIED = 'August 28, 2026';
