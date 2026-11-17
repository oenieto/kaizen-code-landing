import React, { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const navLinks = [
  { name: 'Soluciones', href: '#solutions' },
  { name: 'Qué hacemos', href: '#services' },
  { name: 'Trabajo', href: '#work' },
  { name: 'Cómo trabajamos', href: '#process' },
  { name: 'Nosotros', href: '/about' },
  { name: 'Blog', href: '/blog' },
  { name: 'Escríbenos', href: '#contact' },
];

/**
 * Text navigation over the top block. `mix-blend-difference` makes it read white
 * over ink headers and black on white pages (e.g. 404). It scrolls away with the
 * page instead of overlapping content.
 * The mobile menu is a separate full-screen layer so the blend does not affect it.
 */
export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => setIsOpen(false), [location.pathname, location.hash]);

  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setIsOpen(false);
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const go = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (!href.startsWith('#')) return;
    e.preventDefault();
    setIsOpen(false);
    // Release the menu's scroll lock now, not on the next render, so the scroll below isn't cancelled.
    document.body.style.overflow = '';
    if (location.pathname !== '/') {
      navigate('/' + href);
      return;
    }
    document.getElementById(href.slice(1))?.scrollIntoView();
    history.replaceState(null, '', href);
  };

  const item = ({ href, name }: (typeof navLinks)[number], className: string) =>
    href.startsWith('#') ? (
      <a href={href} onClick={(e) => go(e, href)} className={className}>
        {name}.
      </a>
    ) : (
      <Link to={href} className={className}>
        {name}.
      </Link>
    );

  return (
    <>
      <header className="pointer-events-none absolute inset-x-0 top-0 z-50 text-white mix-blend-difference">
        <nav className="container-page flex h-20 items-center justify-between lg:h-24" aria-label="Principal">
          <Link to="/" className="pointer-events-auto flex items-center gap-3" aria-label="Kaizen Code, inicio">
            <img src="/assets/kaizen-logo.png" alt="" width={245} height={256} className="h-10 w-auto lg:h-12" />
            <span className="text-lg font-semibold tracking-[-0.01em] lg:text-xl">Kaizen Code</span>
          </Link>

          <ul className="pointer-events-auto hidden items-center gap-5 text-[15px] lg:flex">
            {navLinks.map((l) => (
              <li key={l.name}>
                {item(l, 'hover:underline hover:underline-offset-4')}
              </li>
            ))}
          </ul>

          <button
            type="button"
            onClick={() => setIsOpen(true)}
            className="pointer-events-auto min-h-11 text-[15px] lg:hidden"
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
          >
            Menú
          </button>
        </nav>
      </header>

      {isOpen && (
        <div id="mobile-menu" role="dialog" aria-modal="true" aria-label="Menú" className="fixed inset-0 z-[60] bg-ink text-white lg:hidden">
          <div className="container-page flex h-20 items-center justify-between">
            <span className="flex items-center gap-3 text-lg font-semibold tracking-[-0.01em]">
              <img src="/assets/kaizen-logo.png" alt="" width={245} height={256} className="h-10 w-auto" />
              Kaizen Code
            </span>
            <button type="button" onClick={() => setIsOpen(false)} className="min-h-11 text-[15px]" autoFocus>
              Cerrar
            </button>
          </div>
          <ul className="container-page mt-8 space-y-3">
            {navLinks.map((l) => (
              <li key={l.name}>
                {item(l, 'block py-1 text-4xl font-medium tracking-tight')}
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
};
