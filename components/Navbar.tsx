import React, { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, Sun, Moon } from 'lucide-react';

const navLinks = [
  { name: 'Servicios', href: '#services' },
  { name: 'Trabajo', href: '#work' },
  { name: 'Ingeniería', href: '#engineering' },
  { name: 'Proceso', href: '#process' },
  { name: 'Blog', href: '/blog' },
];

function useTheme() {
  const [isDark, setIsDark] = useState(() => document.documentElement.classList.contains('dark'));

  const toggle = () => {
    const next = !isDark;
    document.documentElement.classList.toggle('dark', next);
    try {
      localStorage.setItem('theme', next ? 'dark' : 'light');
    } catch {
      /* storage unavailable (private mode): theme still applies for this visit */
    }
    setIsDark(next);
  };

  return { isDark, toggle };
}

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { isDark, toggle } = useTheme();
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setIsOpen(false);
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [isOpen]);

  useEffect(() => setIsOpen(false), [location.pathname]);

  const handleNav = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (!href.startsWith('#')) return;
    e.preventDefault();
    setIsOpen(false);
    if (location.pathname !== '/') {
      navigate('/' + href);
      return;
    }
    document.querySelector(href)?.scrollIntoView();
    history.replaceState(null, '', href);
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-200 ${
        scrolled || isOpen ? 'border-b border-line bg-canvas/85 backdrop-blur-md' : 'border-b border-transparent'
      }`}
    >
      <nav className="container-page flex h-16 items-center justify-between" aria-label="Principal">
        <Link to="/" className="flex items-center gap-2.5" aria-label="Kaizen Code, inicio">
          <img
            src="/assets/kaizenlogo-removebg-preview.png"
            alt=""
            width={28}
            height={28}
            className="h-7 w-7 object-contain invert dark:invert-0"
          />
          <span className="text-[15px] font-semibold tracking-tight">Kaizen Code</span>
        </Link>

        <div className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) =>
            link.href.startsWith('#') ? (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNav(e, link.href)}
                className="rounded-md px-3 py-2 text-sm text-muted transition-colors hover:text-fg"
              >
                {link.name}
              </a>
            ) : (
              <Link key={link.name} to={link.href} className="rounded-md px-3 py-2 text-sm text-muted transition-colors hover:text-fg">
                {link.name}
              </Link>
            ),
          )}
        </div>

        <div className="flex items-center gap-1">
          <button
            type="button"
            onClick={toggle}
            className="grid h-10 w-10 place-items-center rounded-md text-muted transition-colors hover:bg-subtle hover:text-fg"
            aria-label={isDark ? 'Cambiar a tema claro' : 'Cambiar a tema oscuro'}
          >
            {isDark ? <Sun size={17} /> : <Moon size={17} />}
          </button>
          <a
            href="#contact"
            onClick={(e) => handleNav(e, '#contact')}
            className="ml-2 hidden min-h-9 items-center rounded-md bg-fg px-4 text-sm font-medium text-canvas transition-opacity hover:opacity-90 sm:inline-flex"
          >
            Agendar llamada
          </a>
          <button
            type="button"
            onClick={() => setIsOpen((v) => !v)}
            className="grid h-10 w-10 place-items-center rounded-md text-fg md:hidden"
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
            aria-label={isOpen ? 'Cerrar menú' : 'Abrir menú'}
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {isOpen && (
        <div id="mobile-menu" className="border-t border-line md:hidden">
          <ul className="container-page flex flex-col py-3">
            {navLinks.map((link) => (
              <li key={link.name}>
                {link.href.startsWith('#') ? (
                  <a href={link.href} onClick={(e) => handleNav(e, link.href)} className="block py-3 text-base text-fg">
                    {link.name}
                  </a>
                ) : (
                  <Link to={link.href} className="block py-3 text-base text-fg">
                    {link.name}
                  </Link>
                )}
              </li>
            ))}
            <li className="pt-2 pb-2">
              <a href="#contact" onClick={(e) => handleNav(e, '#contact')} className="btn-primary w-full">
                Agendar llamada
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};
