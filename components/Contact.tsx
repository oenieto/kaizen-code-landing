import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Mail, MessageCircle } from 'lucide-react';
import { CONTACT } from '../data/site';
import { Reveal } from './Reveal';

const PROJECT_TYPES = [
  'Plataforma web o SaaS',
  'API o integración',
  'IA aplicada',
  'Cloud / DevOps',
  'Auditoría técnica',
  'App móvil',
  'Otro',
];

const BUDGETS = ['Por definir', 'Menos de $150k MXN', '$150k – $500k MXN', '$500k – $1.5M MXN', 'Más de $1.5M MXN'];

type Fields = { name: string; email: string; company: string; type: string; budget: string; message: string };
type Errors = Partial<Record<keyof Fields, string>>;

const EMPTY: Fields = { name: '', email: '', company: '', type: '', budget: BUDGETS[0], message: '' };

function validate(f: Fields): Errors {
  const e: Errors = {};
  if (!f.name.trim()) e.name = 'Escribe tu nombre.';
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(f.email.trim())) e.email = 'Escribe un correo válido, por ejemplo nombre@empresa.com.';
  if (!f.type) e.type = 'Elige el tipo de proyecto.';
  if (f.message.trim().length < 20) e.message = 'Cuéntanos un poco más (mínimo 20 caracteres).';
  return e;
}

const Label: React.FC<{ htmlFor: string; children: React.ReactNode; optional?: boolean }> = ({ htmlFor, children, optional }) => (
  <label htmlFor={htmlFor} className="mb-1.5 block text-sm font-medium">
    {children}
    {optional && <span className="ml-1.5 font-normal text-faint">(opcional)</span>}
  </label>
);

const ErrorText: React.FC<{ id: string; msg?: string }> = ({ id, msg }) =>
  msg ? (
    <p id={id} className="mt-1.5 text-xs text-red-600 dark:text-red-400">
      {msg}
    </p>
  ) : null;

export const Contact: React.FC = () => {
  const [fields, setFields] = useState<Fields>(EMPTY);
  const [errors, setErrors] = useState<Errors>({});
  const [sent, setSent] = useState(false);

  const set = (k: keyof Fields) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFields((f) => ({ ...f, [k]: e.target.value }));
    if (errors[k]) setErrors((er) => ({ ...er, [k]: undefined }));
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const found = validate(fields);
    setErrors(found);
    const first = Object.keys(found)[0];
    if (first) {
      // Centre the field so the sticky header never covers it (WCAG 2.4.11).
      const el = document.getElementById(`c-${first}`);
      el?.focus({ preventScroll: true });
      el?.scrollIntoView({ block: 'center' });
      return;
    }

    const subject = `[${fields.type}] ${fields.company || fields.name}`;
    const meta = [
      `Nombre: ${fields.name}`,
      `Correo: ${fields.email}`,
      ...(fields.company ? [`Empresa: ${fields.company}`] : []),
      `Tipo de proyecto: ${fields.type}`,
      `Presupuesto: ${fields.budget}`,
    ];
    const body = `${meta.join('\n')}\n\n${fields.message.trim()}`;

    window.location.href = `mailto:${CONTACT.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setSent(true);
  };

  const describedBy = (k: keyof Fields) => (errors[k] ? `c-${k}-error` : undefined);

  return (
    <section id="contact" aria-labelledby="contact-title" className="border-t border-line py-20 sm:py-28">
      <div className="container-page grid gap-12 lg:grid-cols-[1fr_1.2fr] lg:gap-16">
        <Reveal>
          <p className="eyebrow">
            <span className="text-accent">07</span> / Contacto
          </p>
          <h2 id="contact-title" className="mt-4 text-3xl leading-tight font-semibold tracking-[-0.025em] text-balance sm:text-4xl">
            Cuéntanos qué necesitas construir.
          </h2>
          <p className="mt-5 max-w-md leading-relaxed text-muted">
            Respondemos en un día hábil con preguntas concretas o una propuesta para una llamada técnica de 30 minutos.
          </p>

          <dl className="mt-10 space-y-5 border-t border-line pt-8 text-sm">
            <div>
              <dt className="eyebrow">Correo</dt>
              <dd className="mt-1.5">
                <a href={`mailto:${CONTACT.email}`} className="inline-flex items-center gap-2 hover:text-accent">
                  <Mail size={15} aria-hidden="true" />
                  {CONTACT.email}
                </a>
              </dd>
            </div>
            <div>
              <dt className="eyebrow">WhatsApp</dt>
              <dd className="mt-1.5">
                <a
                  href={`https://wa.me/${CONTACT.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 hover:text-accent"
                >
                  <MessageCircle size={15} aria-hidden="true" />
                  Escribir por WhatsApp
                </a>
              </dd>
            </div>
            <div>
              <dt className="eyebrow">Ubicación</dt>
              <dd className="mt-1.5 text-muted">México · trabajo remoto con clientes en LATAM y EE. UU.</dd>
            </div>
          </dl>
        </Reveal>

        <Reveal delay={0.06}>
          <form noValidate onSubmit={onSubmit} className="rounded-xl border border-line bg-surface p-6 sm:p-8">
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <Label htmlFor="c-name">Nombre</Label>
                <input id="c-name" className="field" autoComplete="name" value={fields.name} onChange={set('name')}
                  aria-invalid={!!errors.name} aria-describedby={describedBy('name')} />
                <ErrorText id="c-name-error" msg={errors.name} />
              </div>
              <div>
                <Label htmlFor="c-email">Correo de trabajo</Label>
                <input id="c-email" type="email" inputMode="email" className="field" autoComplete="email" value={fields.email}
                  onChange={set('email')} aria-invalid={!!errors.email} aria-describedby={describedBy('email')} />
                <ErrorText id="c-email-error" msg={errors.email} />
              </div>
              <div>
                <Label htmlFor="c-company" optional>Empresa</Label>
                <input id="c-company" className="field" autoComplete="organization" value={fields.company} onChange={set('company')} />
              </div>
              <div>
                <Label htmlFor="c-type">Tipo de proyecto</Label>
                <select id="c-type" className="field" value={fields.type} onChange={set('type')}
                  aria-invalid={!!errors.type} aria-describedby={describedBy('type')}>
                  <option value="">Selecciona una opción</option>
                  {PROJECT_TYPES.map((t) => (
                    <option key={t}>{t}</option>
                  ))}
                </select>
                <ErrorText id="c-type-error" msg={errors.type} />
              </div>
              <div className="sm:col-span-2">
                <Label htmlFor="c-budget">Presupuesto estimado</Label>
                <select id="c-budget" className="field" value={fields.budget} onChange={set('budget')}>
                  {BUDGETS.map((b) => (
                    <option key={b}>{b}</option>
                  ))}
                </select>
              </div>
              <div className="sm:col-span-2">
                <Label htmlFor="c-message">¿Qué quieres resolver?</Label>
                <textarea id="c-message" rows={5} className="field resize-y" value={fields.message} onChange={set('message')}
                  placeholder="Contexto, usuarios, sistemas actuales y fecha objetivo."
                  aria-invalid={!!errors.message} aria-describedby={describedBy('message')} />
                <ErrorText id="c-message-error" msg={errors.message} />
              </div>
            </div>

            <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-xs leading-relaxed text-faint">
                Se abrirá tu cliente de correo con el mensaje listo. Consulta el{' '}
                <Link to="/privacy" className="underline underline-offset-2 hover:text-fg">aviso de privacidad</Link>.
              </p>
              <button type="submit" className="btn-primary group shrink-0">
                Enviar
                <ArrowRight size={16} className="transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
              </button>
            </div>

            <p role="status" className="mt-4 text-sm text-accent empty:hidden">
              {sent && `Listo. Si tu cliente de correo no se abrió, escríbenos directamente a ${CONTACT.email}.`}
            </p>
          </form>
        </Reveal>
      </div>
    </section>
  );
};
