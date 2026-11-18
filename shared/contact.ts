/**
 * Contact form contract, shared by the browser (components/Contact.tsx) and the
 * Worker (worker/index.ts) so both enforce exactly the same rules.
 */

export interface LeadInput {
  name: string;
  /** Email address or phone/WhatsApp number. */
  contact: string;
  message: string;
  interests: string[];
  /** Honeypot: hidden field that humans leave empty. */
  website?: string;
  /** Path the form was sent from, for context in the notification. */
  page?: string;
  turnstileToken?: string;
}

export interface Lead {
  name: string;
  contact: string;
  contactKind: 'email' | 'phone';
  message: string;
  interests: string[];
  page: string;
}

export type LeadErrors = Partial<Record<'name' | 'contact' | 'message', string>>;

export const LIMITS = { name: 100, contact: 120, message: 2000, interests: 8, interest: 60 } as const;

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

/** Returns the normalised contact and its kind, or null if it's neither an email nor a phone. */
export function parseContact(raw: string): { value: string; kind: 'email' | 'phone' } | null {
  const value = raw.trim();
  if (EMAIL_RE.test(value)) return { value: value.toLowerCase(), kind: 'email' };
  const digits = value.replace(/[\s()+.-]/g, '');
  if (/^\d{10,15}$/.test(digits)) return { value, kind: 'phone' };
  return null;
}

export function validateLead(input: Partial<LeadInput>): { lead?: Lead; errors: LeadErrors } {
  const errors: LeadErrors = {};
  const name = String(input.name ?? '').trim();
  const message = String(input.message ?? '').trim();
  const interests = Array.isArray(input.interests)
    ? input.interests.map((i) => String(i).trim()).filter(Boolean).slice(0, LIMITS.interests)
    : [];

  if (name.length < 2) errors.name = 'Escribe tu nombre.';
  else if (name.length > LIMITS.name) errors.name = 'El nombre es demasiado largo.';

  const contact = parseContact(String(input.contact ?? ''));
  if (!contact || contact.value.length > LIMITS.contact) {
    errors.contact = 'Escribe un correo (nombre@empresa.com) o un WhatsApp de 10 dígitos.';
  }

  if (message.length > LIMITS.message) errors.message = 'El mensaje es demasiado largo.';
  else if (!message && interests.length === 0) errors.message = 'Elige una opción o cuéntanos en una línea qué necesitas.';

  if (interests.some((i) => i.length > LIMITS.interest)) errors.message = 'Opción no válida.';

  if (Object.keys(errors).length > 0 || !contact) return { errors };
  return {
    errors,
    lead: {
      name,
      contact: contact.value,
      contactKind: contact.kind,
      message,
      interests,
      page: String(input.page ?? '/').slice(0, 200),
    },
  };
}
