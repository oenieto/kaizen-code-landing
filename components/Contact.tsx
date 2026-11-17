import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { CONTACT, SELECT_PROJECT_TYPE, solutions } from '../data/site';
import { Reveal } from './Reveal';

const PROJECT_TYPES = [
  ...solutions.map((s) => s.name),
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
  <label htmlFor={htmlFor} className="block text-sm text-white/70">
    {children}
    {optional && <span className="ml-1.5 text-white/45">(opcional)</span>}
  </label>
);

const ErrorText: React.FC<{ id: string; msg?: string }> = ({ id, msg }) =>
  msg ? (
    <p id={id} className="mt-2 text-sm text-accent">
      {msg}
    </p>
  ) : null;

export const Contact: React.FC = () => {
  const [fields, setFields] = useState<Fields>(EMPTY);
  const [errors, setErrors] = useState<Errors>({});
  const [sent, setSent] = useState(false);

  // Solution CTAs preselect the matching project type.
  useEffect(() => {
    const onSelect = (e: Event) => {
      const type = (e as CustomEvent<string>).detail;
      if (PROJECT_TYPES.includes(type)) setFields((f) => ({ ...f, type }));
    };
    window.addEventListener(SELECT_PROJECT_TYPE, onSelect);
    return () => window.removeEventListener(SELECT_PROJECT_TYPE, onSelect);
  }, []);

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
    <section id="contact" aria-labelledby="contact-title" className="bg-ink text-white">
      <div className="container-page grid gap-16 py-24 sm:py-32 lg:grid-cols-12">
        <Reveal className="lg:col-span-5">
          <h2 id="contact-title" className="display-1">
            Escríbenos.
          </h2>
          <p className="mt-6 max-w-sm text-[15px] leading-[1.75] text-white/80">
            Cuéntanos qué necesitas construir. Respondemos en un día hábil con preguntas concretas o una propuesta para
            una llamada técnica de 30 minutos.
          </p>
          <address className="mt-10 border-y border-white/30 py-4 text-[15px] leading-[1.9] not-italic">
            <a href={`mailto:${CONTACT.email}`} className="hover:underline">
              {CONTACT.email}
            </a>
            <br />
            <a href={`https://wa.me/${CONTACT.whatsapp}`} target="_blank" rel="noopener noreferrer" className="hover:underline">
              WhatsApp
            </a>
            <br />
            <span className="text-white/70">México · clientes en LATAM y EE. UU.</span>
          </address>
        </Reveal>

        <Reveal delay={0.06} className="lg:col-span-6 lg:col-start-7">
          <form noValidate onSubmit={onSubmit}>
            <div className="grid gap-x-8 gap-y-7 sm:grid-cols-2">
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
                <select id="c-type" className="field [&>option]:text-black" value={fields.type} onChange={set('type')}
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
                <select id="c-budget" className="field [&>option]:text-black" value={fields.budget} onChange={set('budget')}>
                  {BUDGETS.map((b) => (
                    <option key={b}>{b}</option>
                  ))}
                </select>
              </div>
              <div className="sm:col-span-2">
                <Label htmlFor="c-message">¿Qué quieres resolver?</Label>
                <textarea id="c-message" rows={4} className="field resize-y" value={fields.message} onChange={set('message')}
                  placeholder="Contexto, usuarios, sistemas actuales y fecha objetivo."
                  aria-invalid={!!errors.message} aria-describedby={describedBy('message')} />
                <ErrorText id="c-message-error" msg={errors.message} />
              </div>
            </div>

            <div className="mt-10 flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
              <p className="max-w-xs text-sm leading-relaxed text-white/60">
                Se abrirá tu cliente de correo con el mensaje listo. Consulta el{' '}
                <Link to="/privacy" className="link">aviso de privacidad</Link>.
              </p>
              <button type="submit" className="btn shrink-0 bg-white text-black hover:bg-accent">
                Enviar mensaje
              </button>
            </div>

            <p role="status" className="mt-5 text-sm text-white empty:hidden">
              {sent && `Listo. Si tu cliente de correo no se abrió, escríbenos directamente a ${CONTACT.email}.`}
            </p>
          </form>
        </Reveal>
      </div>
    </section>
  );
};
