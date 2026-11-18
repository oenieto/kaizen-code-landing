/**
 * Cloudflare Worker for kaizencode.com.mx.
 *
 * Static pages are served by the assets binding (dist/). Only `/api/*` reaches this
 * code (see `run_worker_first` in wrangler.jsonc). POST /api/contact:
 *   1. validates the payload with the same rules as the browser (shared/contact.ts),
 *   2. verifies the Cloudflare Turnstile token (anti-spam),
 *   3. stores the lead in D1 — the source of truth, so no lead is lost if email fails,
 *   4. emails contacto@ through Resend in the background and records the outcome.
 */
import { validateLead, type Lead, type LeadInput } from '../shared/contact';

interface Env {
  ASSETS: Fetcher;
  DB: D1Database;
  /** Secret: Turnstile widget secret key. */
  TURNSTILE_SECRET?: string;
  /** Secret: Resend API key (sending access only). */
  RESEND_API_KEY?: string;
  /** Comma-separated recipients of new-lead alerts. */
  CONTACT_TO: string;
  MAIL_FROM: string;
  /** Comma-separated hostnames allowed to post the form. */
  ALLOWED_HOSTS: string;
}

const MAX_BODY_BYTES = 10_000;

const json = (body: unknown, status = 200) =>
  new Response(JSON.stringify(body), {
    status,
    headers: { 'content-type': 'application/json; charset=utf-8', 'cache-control': 'no-store' },
  });

export default {
  async fetch(request, env, ctx): Promise<Response> {
    const url = new URL(request.url);
    if (url.pathname === '/api/contact') {
      if (request.method !== 'POST') return json({ error: 'method_not_allowed' }, 405);
      try {
        return await handleContact(request, env, ctx);
      } catch (err) {
        console.error('contact: unexpected error', err);
        return json({ error: 'server_error' }, 500);
      }
    }
    if (url.pathname.startsWith('/api/')) return json({ error: 'not_found' }, 404);
    return env.ASSETS.fetch(request);
  },
} satisfies ExportedHandler<Env>;

async function handleContact(request: Request, env: Env, ctx: ExecutionContext): Promise<Response> {
  // Only accept submissions from our own pages.
  const origin = request.headers.get('origin');
  const allowed = env.ALLOWED_HOSTS.split(',').map((h) => h.trim());
  if (!origin || !allowed.includes(new URL(origin).hostname)) return json({ error: 'forbidden' }, 403);

  if (!request.headers.get('content-type')?.includes('application/json')) return json({ error: 'bad_request' }, 415);
  const raw = await request.text();
  if (raw.length > MAX_BODY_BYTES) return json({ error: 'too_large' }, 413);

  let input: Partial<LeadInput>;
  try {
    input = JSON.parse(raw);
  } catch {
    return json({ error: 'bad_request' }, 400);
  }

  // Honeypot filled in: pretend success so bots learn nothing.
  if (input.website) return json({ ok: true });

  const { lead, errors } = validateLead(input);
  if (!lead) return json({ error: 'invalid', fields: errors }, 422);

  if (!env.TURNSTILE_SECRET) {
    console.error('contact: TURNSTILE_SECRET is not configured');
    return json({ error: 'not_configured' }, 503);
  }
  const ip = request.headers.get('cf-connecting-ip') ?? '';
  if (!(await verifyTurnstile(env.TURNSTILE_SECRET, input.turnstileToken, ip))) {
    return json({ error: 'verification_failed' }, 400);
  }

  const id = crypto.randomUUID();
  const createdAt = new Date().toISOString();
  const country = (request as Request & { cf?: { country?: string } }).cf?.country ?? null;
  await env.DB.prepare(
    `INSERT INTO leads (id, created_at, name, contact, contact_kind, interests, message, page, country, user_agent)
     VALUES (?1, ?2, ?3, ?4, ?5, ?6, ?7, ?8, ?9, ?10)`,
  )
    .bind(
      id,
      createdAt,
      lead.name,
      lead.contact,
      lead.contactKind,
      JSON.stringify(lead.interests),
      lead.message,
      lead.page,
      country,
      (request.headers.get('user-agent') ?? '').slice(0, 300),
    )
    .run();

  // Notify in the background: the visitor gets an instant answer, and the result is
  // recorded on the row so failed notifications can be found and retried.
  ctx.waitUntil(
    notify(env, lead, createdAt).then((status) =>
      env.DB.prepare('UPDATE leads SET email_status = ?1 WHERE id = ?2').bind(status, id).run(),
    ),
  );

  return json({ ok: true });
}

async function verifyTurnstile(secret: string, token: string | undefined, ip: string): Promise<boolean> {
  if (!token) return false;
  const body = new FormData();
  body.append('secret', secret);
  body.append('response', token);
  if (ip) body.append('remoteip', ip);
  const res = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', { method: 'POST', body });
  const data = (await res.json()) as { success?: boolean };
  return data.success === true;
}

const escapeHtml = (s: string) =>
  s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

async function notify(env: Env, lead: Lead, createdAt: string): Promise<'sent' | 'failed' | 'skipped'> {
  if (!env.RESEND_API_KEY) {
    console.warn('contact: RESEND_API_KEY not configured, lead stored without email');
    return 'skipped';
  }
  const when = new Date(createdAt).toLocaleString('es-MX', { timeZone: 'America/Mexico_City' });
  const replyHint =
    lead.contactKind === 'email'
      ? 'Responde a este correo para contestarle directamente.'
      : `Escríbele por WhatsApp: https://wa.me/${lead.contact.replace(/\D/g, '')}`;
  const rows: [string, string][] = [
    ['Nombre', lead.name],
    [lead.contactKind === 'email' ? 'Correo' : 'WhatsApp', lead.contact],
    ['Le interesa', lead.interests.join(', ') || '—'],
    ['Mensaje', lead.message || '—'],
    ['Página', lead.page],
    ['Fecha', when],
  ];
  const text = `${rows.map(([k, v]) => `${k}: ${v}`).join('\n')}\n\n${replyHint}`;
  const html = `<div style="font-family:Arial,sans-serif;font-size:15px;color:#121212">
<h2 style="margin:0 0 16px">Nuevo prospecto desde kaizencode.com.mx</h2>
<table cellpadding="8" style="border-collapse:collapse">${rows
    .map(([k, v]) => `<tr><td style="color:#5b5b5b;vertical-align:top">${k}</td><td style="white-space:pre-wrap">${escapeHtml(v)}</td></tr>`)
    .join('')}</table>
<p style="margin-top:20px">${escapeHtml(replyHint)}</p></div>`;

  const res = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: { authorization: `Bearer ${env.RESEND_API_KEY}`, 'content-type': 'application/json' },
    body: JSON.stringify({
      from: env.MAIL_FROM,
      to: env.CONTACT_TO.split(',').map((a) => a.trim()).filter(Boolean),
      subject: `Nuevo prospecto: ${lead.name}${lead.interests[0] ? ` · ${lead.interests[0]}` : ''}`,
      text,
      html,
      ...(lead.contactKind === 'email' ? { reply_to: lead.contact } : {}),
    }),
  });
  if (!res.ok) {
    console.error('contact: Resend error', res.status, await res.text());
    return 'failed';
  }
  return 'sent';
}
