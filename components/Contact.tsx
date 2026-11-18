import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Check } from 'lucide-react';
import { CONTACT, SELECT_PROJECT_TYPE, TURNSTILE_SITE_KEY, solutions } from '../data/site';
import { validateLead, type LeadErrors } from '../shared/contact';
import { useTurnstile } from './useTurnstile';
import { Reveal } from './Reveal';

const INTERESTS = [...solutions.map((s) => s.name), 'Otra cosa'];

type Status = 'idle' | 'sending' | 'sent' | 'error';

const SEND_FAILED = `No se pudo enviar. Intenta de nuevo o escríbenos por WhatsApp o a ${CONTACT.email}.`;

const ErrorText: React.FC<{ id: string; msg?: string }> = ({ id, msg }) =>
  msg ? (
    <p id={id} className="mt-2 text-sm text-accent">
      {msg}
    </p>
  ) : null;

export const Contact: React.FC = () => {
  const [name, setName] = useState('');
  const [contact, setContact] = useState('');
  const [message, setMessage] = useState('');
  const [interests, setInterests] = useState<string[]>([]);
  const [website, setWebsite] = useState(''); // honeypot
  const [errors, setErrors] = useState<LeadErrors>({});
  const [status, setStatus] = useState<Status>('idle');
  const [alertMsg, setAlert] = useState('');
  const turnstile = useTurnstile(TURNSTILE_SITE_KEY);

  // "Quiero esta solución" buttons preselect the matching option.
  useEffect(() => {
    const onSelect = (e: Event) => {
      const choice = (e as CustomEvent<string>).detail;
      if (INTERESTS.includes(choice)) setInterests((cur) => (cur.includes(choice) ? cur : [...cur, choice]));
    };
    window.addEventListener(SELECT_PROJECT_TYPE, onSelect);
    return () => window.removeEventListener(SELECT_PROJECT_TYPE, onSelect);
  }, []);

  const toggle = (i: string) => {
    setInterests((cur) => (cur.includes(i) ? cur.filter((x) => x !== i) : [...cur, i]));
    if (errors.message) setErrors((e) => ({ ...e, message: undefined }));
  };

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { lead, errors: found } = validateLead({ name, contact, message, interests });
    setErrors(found);
    if (!lead) {
      const first = Object.keys(found)[0];
      const el = document.getElementById(`c-${first}`);
      // Centre the field so the sticky header never covers it (WCAG 2.4.11).
      el?.focus({ preventScroll: true });
      el?.scrollIntoView({ block: 'center' });
      return;
    }
    if (!turnstile.token) {
      setStatus('error');
      setAlert(
        turnstile.failed
          ? `No pudimos cargar la verificación anti-spam. Escríbenos por WhatsApp o a ${CONTACT.email}.`
          : turnstile.needsInteraction
            ? 'Marca la casilla de verificación de arriba y vuelve a enviar.'
            : 'Estamos verificando que no eres un robot; vuelve a intentar en un segundo.',
      );
      return;
    }

    setStatus('sending');
    setAlert('');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({
          name,
          contact,
          message,
          interests,
          website,
          page: window.location.pathname,
          turnstileToken: turnstile.token,
        }),
      });
      if (res.ok) {
        setStatus('sent');
        return;
      }
      const data = (await res.json().catch(() => ({}))) as { fields?: LeadErrors };
      if (data.fields) setErrors(data.fields);
      setStatus('error');
      setAlert(data.fields ? 'Revisa los campos marcados.' : SEND_FAILED);
      turnstile.reset();
    } catch {
      setStatus('error');
      setAlert(SEND_FAILED);
      turnstile.reset();
    }
  };

  const describedBy = (k: keyof LeadErrors) => (errors[k] ? `c-${k}-error` : undefined);
  const firstName = name.trim().split(/\s+/)[0];
  const viaEmail = contact.includes('@');

  return (
    <section id="contact" aria-labelledby="contact-title" className="bg-ink text-white">
      <div className="container-page grid gap-16 py-24 sm:py-32 lg:grid-cols-12">
        <Reveal className="lg:col-span-5">
          <h2 id="contact-title" className="display-1">
            Escríbenos.
          </h2>
          <p className="mt-6 max-w-sm text-[15px] leading-[1.75] text-white/80">
            Déjanos tu nombre y cómo contactarte. Te respondemos el mismo día hábil, sin compromiso.
          </p>
          <address className="mt-10 border-y border-white/30 py-4 text-[15px] leading-[1.9] not-italic">
            <a href={`https://wa.me/${CONTACT.whatsapp}`} target="_blank" rel="noopener noreferrer" className="hover:underline">
              Escríbenos por WhatsApp
            </a>
            <br />
            <a href={`mailto:${CONTACT.email}`} className="hover:underline">
              {CONTACT.email}
            </a>
            <br />
            <span className="text-white/70">México · clientes en LATAM y EE. UU.</span>
          </address>
        </Reveal>

        <Reveal delay={0.06} className="lg:col-span-6 lg:col-start-7">
          {status === 'sent' ? (
            <div role="status" className="border-t border-white/30 pt-8">
              <Check size={40} className="text-accent" aria-hidden="true" />
              <p className="mt-6 text-[clamp(2rem,3.4vw,2.75rem)] leading-[1.1] font-medium tracking-[-0.02em]">
                ¡Listo{firstName ? `, ${firstName}` : ''}! Recibimos tu mensaje.
              </p>
              <p className="mt-4 max-w-md text-[16px] leading-[1.7] text-white/80">
                Te contactamos hoy mismo por {viaEmail ? 'correo' : 'WhatsApp'}. Si es urgente,{' '}
                <a href={`https://wa.me/${CONTACT.whatsapp}`} target="_blank" rel="noopener noreferrer" className="link">
                  escríbenos por WhatsApp
                </a>
                .
              </p>
            </div>
          ) : (
            <form noValidate onSubmit={onSubmit} aria-busy={status === 'sending'}>
              <div className="grid gap-x-8 gap-y-7 sm:grid-cols-2">
                <div>
                  <label htmlFor="c-name" className="block text-sm text-white/70">
                    Tu nombre
                  </label>
                  <input
                    id="c-name"
                    className="field"
                    autoComplete="name"
                    value={name}
                    onChange={(e) => {
                      setName(e.target.value);
                      if (errors.name) setErrors((er) => ({ ...er, name: undefined }));
                    }}
                    aria-invalid={!!errors.name}
                    aria-describedby={describedBy('name')}
                  />
                  <ErrorText id="c-name-error" msg={errors.name} />
                </div>
                <div>
                  <label htmlFor="c-contact" className="block text-sm text-white/70">
                    Correo o WhatsApp
                  </label>
                  <input
                    id="c-contact"
                    className="field"
                    autoComplete="email"
                    placeholder="tu@correo.com o 55 1234 5678"
                    value={contact}
                    onChange={(e) => {
                      setContact(e.target.value);
                      if (errors.contact) setErrors((er) => ({ ...er, contact: undefined }));
                    }}
                    aria-invalid={!!errors.contact}
                    aria-describedby={describedBy('contact')}
                  />
                  <ErrorText id="c-contact-error" msg={errors.contact} />
                </div>
              </div>

              <fieldset className="mt-8">
                <legend className="text-sm text-white/70">¿Qué te interesa? Toca una o varias</legend>
                <div className="mt-3 flex flex-wrap gap-2">
                  {INTERESTS.map((i) => {
                    const on = interests.includes(i);
                    return (
                      <button
                        key={i}
                        type="button"
                        onClick={() => toggle(i)}
                        aria-pressed={on}
                        className={`min-h-10 rounded-full border px-4 text-[14px] transition-colors ${
                          on ? 'border-accent bg-accent text-black' : 'border-white/35 text-white hover:border-white'
                        }`}
                      >
                        {i}
                      </button>
                    );
                  })}
                </div>
              </fieldset>

              <div className="mt-7">
                <label htmlFor="c-message" className="block text-sm text-white/70">
                  Cuéntanos en una línea <span className="text-white/45">(opcional)</span>
                </label>
                <textarea
                  id="c-message"
                  rows={2}
                  className="field resize-y"
                  placeholder="Ej. Quiero que mi WhatsApp agende citas solo."
                  value={message}
                  onChange={(e) => {
                    setMessage(e.target.value);
                    if (errors.message) setErrors((er) => ({ ...er, message: undefined }));
                  }}
                  aria-invalid={!!errors.message}
                  aria-describedby={describedBy('message')}
                />
                <ErrorText id="c-message-error" msg={errors.message} />
              </div>

              {/* Honeypot: hidden from people and assistive tech; bots tend to fill it. */}
              <input
                type="text"
                name="website"
                tabIndex={-1}
                autoComplete="off"
                aria-hidden="true"
                value={website}
                onChange={(e) => setWebsite(e.target.value)}
                className="absolute -left-[9999px] h-0 w-0 opacity-0"
              />

              <div ref={turnstile.containerRef} className="mt-6" />

              <div className="mt-8 flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
                <p className="max-w-xs text-sm leading-relaxed text-white/60">
                  Al enviar aceptas nuestro <Link to="/privacy" className="link">aviso de privacidad</Link>.
                </p>
                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className="btn group shrink-0 bg-white text-black hover:bg-accent disabled:cursor-wait disabled:opacity-70"
                >
                  {status === 'sending' ? 'Enviando…' : 'Enviar'}
                  {status !== 'sending' && (
                    <ArrowRight size={16} className="transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
                  )}
                </button>
              </div>

              <p role="alert" className="mt-5 text-sm text-accent empty:hidden">
                {status === 'error' && alertMsg}
              </p>
            </form>
          )}
        </Reveal>
      </div>
    </section>
  );
};
