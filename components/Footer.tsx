import React from 'react';
import { Link } from 'react-router-dom';
import { CONTACT } from '../data/site';

const columns = [
  {
    title: 'Servicios',
    links: [
      { label: 'Plataformas web', href: '/#services' },
      { label: 'IA aplicada', href: '/#services' },
      { label: 'Auditoría técnica', href: '/#engagement' },
    ],
  },
  {
    title: 'Empresa',
    links: [
      { label: 'Nosotros', href: '/about' },
      { label: 'Trabajo', href: '/#work' },
      { label: 'Blog', href: '/blog' },
    ],
  },
  {
    title: 'Legal',
    links: [
      { label: 'Privacidad', href: '/privacy' },
      { label: 'Términos', href: '/terms' },
    ],
  },
];

export const Footer: React.FC = () => (
  <footer className="border-t border-line">
    <div className="container-page grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1fr]">
      <div>
        <Link to="/" className="flex items-center gap-2.5">
          <img src="/assets/kaizenlogo-removebg-preview.png" alt="" width={24} height={24} className="h-6 w-6 object-contain invert dark:invert-0" />
          <span className="text-[15px] font-semibold tracking-tight">Kaizen Code</span>
        </Link>
        <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted">
          Ingeniería de software para productos que deben funcionar. Hecho en México.
        </p>
        <a href={`mailto:${CONTACT.email}`} className="mt-4 inline-block font-mono text-xs text-muted hover:text-fg">
          {CONTACT.email}
        </a>
      </div>

      {columns.map((col) => (
        <nav key={col.title} aria-label={col.title}>
          <h2 className="eyebrow">{col.title}</h2>
          <ul className="mt-4 space-y-2.5 text-sm">
            {col.links.map((l) => (
              <li key={l.label}>
                <Link to={l.href} className="text-muted transition-colors hover:text-fg">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      ))}
    </div>

    <div className="container-page flex flex-col gap-2 border-t border-line py-6 text-xs text-faint sm:flex-row sm:justify-between">
      <p>© {new Date().getFullYear()} Kaizen Code. Todos los derechos reservados.</p>
      <p className="font-mono">改善 — mejora continua</p>
    </div>
  </footer>
);
