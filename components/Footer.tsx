import React from 'react';
import { Link } from 'react-router-dom';
import { CONTACT, solutions } from '../data/site';
import { solutionPath } from '../data/seo';

const site = [
  { label: 'Soluciones', to: '/#solutions' },
  { label: 'Trabajo', to: '/trabajo' },
  { label: 'Cómo trabajamos', to: '/como-trabajamos' },
  { label: 'Nosotros', to: '/about' },
  { label: 'Blog', to: '/blog' },
  { label: 'Escríbenos', to: '/#contact' },
];

const legal = [
  { label: 'Privacidad', to: '/privacy' },
  { label: 'Términos', to: '/terms' },
];

export const Footer: React.FC = () => (
  <footer className="border-t border-line">
    <div className="container-page grid gap-12 py-16 sm:py-20 lg:grid-cols-12">
      <Link to="/" className="flex items-center gap-3 self-start lg:col-span-6" aria-label="Kaizen Code, inicio">
        <img src="/img/kaizen-logo.webp" alt="" width={138} height={144} className="h-12 w-auto invert" />
        <span className="text-2xl font-semibold tracking-[-0.02em] uppercase">Kaizen Code</span>
      </Link>

      <nav aria-label="Soluciones" className="text-[15px] leading-[1.9] lg:col-span-3">
        <p className="text-sm text-faint">Soluciones</p>
        <ul className="mt-2">
          {solutions.map((s) => (
            <li key={s.slug}>
              <Link to={solutionPath(s.path)} className="hover:underline hover:underline-offset-4">
                {s.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      <address className="border-y border-rule py-4 text-[15px] leading-[1.9] not-italic lg:col-span-3">
        Estudio de ingeniería de software.
        <br />
        Hecho en México.
        <br />
        <a href={`mailto:${CONTACT.email}`} className="hover:underline">
          {CONTACT.email}
        </a>
        <br />
        <a href={`https://wa.me/${CONTACT.whatsapp}`} target="_blank" rel="noopener noreferrer" className="hover:underline">
          WhatsApp
        </a>
      </address>
    </div>

    <div className="container-page flex flex-col gap-4 pb-28 text-[15px] sm:flex-row sm:items-center sm:justify-between sm:pb-10 sm:pr-28 lg:pr-32">
      <nav aria-label="Sitio">
        <ul className="flex flex-wrap gap-x-4 gap-y-1">
          {site.map((l) => (
            <li key={l.label}>
              <Link to={l.to} className="hover:underline hover:underline-offset-4">
                {l.label}.
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <nav aria-label="Legal" className="flex items-center gap-4 text-muted">
        {legal.map((l) => (
          <Link key={l.label} to={l.to} className="link">
            {l.label}
          </Link>
        ))}
        <span>© {new Date().getFullYear()}</span>
      </nav>
    </div>
  </footer>
);
