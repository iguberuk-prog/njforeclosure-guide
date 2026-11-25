/**
 * Lead contact requirement (Igor, 2026-11-05): every lead form must collect a
 * name, a phone number and an email before it submits. Leads that arrived with
 * only a first name and phone (or, for texted visitors, nothing at all) could
 * not be followed up from the daily lead digest.
 */

export interface LeadContact {
  name: string;
  phone: string;
  email: string;
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

export function phoneDigits(phone: string): string {
  const d = phone.replace(/\D/g, '');
  return d.length === 11 && d.startsWith('1') ? d.slice(1) : d;
}

/** Returns an error message, or '' when name, phone and email are all valid. */
export function contactError(c: LeadContact, lang: 'en' | 'es' = 'en'): string {
  const missing: string[] = [];
  if (!c.name.trim()) missing.push(lang === 'es' ? 'su nombre' : 'your name');
  if (phoneDigits(c.phone).length !== 10) missing.push(lang === 'es' ? 'un teléfono de 10 dígitos' : 'a 10-digit phone number');
  if (!EMAIL_RE.test(c.email.trim())) missing.push(lang === 'es' ? 'un correo electrónico válido' : 'a valid email');
  if (!missing.length) return '';
  const list = missing.length === 1 ? missing[0] : `${missing.slice(0, -1).join(', ')} ${lang === 'es' ? 'y' : 'and'} ${missing[missing.length - 1]}`;
  return lang === 'es' ? `Por favor agregue ${list}.` : `Please add ${list}.`;
}
