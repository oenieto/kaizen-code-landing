import React from 'react';
import { ArrowRight, Globe, Shield, Plane, MapPin } from 'lucide-react';
import { Reveal } from './Reveal';

/* ──────────────────────────────────────────────────────────────────────
   CSS-based project preview mockups so we don't depend on external images.
   These visually represent each project's UI without screenshots.
   ────────────────────────────────────────────────────────────────────── */

const MultiCarrierMockup: React.FC = () => (
  <div className="absolute inset-0 bg-gradient-to-br from-[#0a0e1a] via-[#0f1629] to-[#0a0e1a] flex items-center justify-center p-8 overflow-hidden">
    {/* Background glow */}
    <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[300px] bg-indigo-500/10 rounded-full blur-[80px]" />

    {/* Login card */}
    <div className="relative w-full max-w-[280px] bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 shadow-2xl">
      {/* Logo */}
      <div className="text-center mb-4">
        <span className="text-white font-bold text-sm italic tracking-wide">MultiCarrier</span>
        <span className="text-indigo-400 text-xs ml-1">NOC</span>
      </div>
      <p className="text-white/90 font-bold text-center text-sm mb-1">Bienvenido</p>
      <p className="text-white/40 text-center text-[10px] mb-4">Ingresa a tu cuenta NOC</p>

      {/* Fields */}
      <div className="space-y-2.5 mb-3">
        <div>
          <span className="text-white/50 text-[9px] mb-1 block">Correo Electrónico</span>
          <div className="h-7 bg-white/5 border border-white/10 rounded-md flex items-center px-2">
            <span className="text-white/30 text-[9px]">tu@correo.com</span>
          </div>
        </div>
        <div>
          <span className="text-white/50 text-[9px] mb-1 block">Contraseña</span>
          <div className="h-7 bg-white/5 border border-white/10 rounded-md flex items-center px-2">
            <span className="text-white/30 text-[9px] tracking-widest">••••••••</span>
          </div>
        </div>
      </div>

      {/* Button */}
      <div className="h-8 bg-indigo-600 rounded-md flex items-center justify-center mb-3">
        <span className="text-white text-[10px] font-semibold">Iniciar Sesión</span>
      </div>

      <p className="text-indigo-400/70 text-center text-[8px]">¿Olvidaste tu contraseña?</p>
    </div>
  </div>
);

const BASTMockup: React.FC = () => (
  <div className="absolute inset-0 bg-gradient-to-br from-[#0d0d0d] via-[#1a1508] to-[#0d0d0d] flex flex-col items-center justify-center p-8 overflow-hidden">
    {/* Background glow */}
    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[200px] bg-amber-500/8 rounded-full blur-[80px]" />

    {/* Navbar hint */}
    <div className="absolute top-4 left-0 right-0 flex items-center justify-center gap-3 px-6">
      <span className="text-amber-400/60 text-[9px] font-medium border border-amber-400/20 px-2 py-0.5 rounded">Iniciar sesión</span>
      <span className="text-amber-400/60 text-[9px] font-medium border border-amber-400/20 px-2 py-0.5 rounded">Revista</span>
      <span className="text-[#0d0d0d] text-[9px] font-semibold bg-amber-500/80 px-2 py-0.5 rounded">Solicitar asesoría</span>
    </div>

    {/* Hero content */}
    <div className="relative text-center max-w-[320px] mt-4">
      <div className="inline-flex items-center gap-2 mb-3">
        <div className="h-6 w-28 rounded bg-white/10 flex items-center justify-center">
          <span className="text-amber-400/70 text-[8px] font-bold">BAST Logo</span>
        </div>
        <div className="px-2 py-0.5 border border-amber-500/30 rounded">
          <span className="text-amber-400 text-[7px] font-bold tracking-widest uppercase">Planeación · Acceso · Acompañamiento</span>
        </div>
      </div>

      <h3 className="text-white/90 font-bold text-sm leading-snug mb-2">
        Sistema de Planeación Vacacional con Acceso Preferencial
      </h3>
      <p className="text-white/40 text-[8px] leading-relaxed mb-3">
        Experiencias vacacionales con anticipación, asesoría y acceso preferencial a destinos y paquetes.
      </p>

      <div className="flex items-center justify-center gap-2">
        <span className="text-[8px] font-semibold text-[#0d0d0d] bg-amber-500/80 px-2.5 py-1 rounded">Planear mi viaje</span>
        <span className="text-[8px] font-semibold text-white/70 border border-white/20 px-2.5 py-1 rounded">Explorar destinos</span>
      </div>
    </div>
  </div>
);

/* ── Project data ─────────────────────────────────────────────────────── */

interface ProjectData {
  id: number;
  title: string;
  client: string;
  category: string;
  description: string;
  tags: string[];
  mockup: React.FC;
}

const projects: ProjectData[] = [
  {
    id: 1,
    title: 'Portal NOC',
    client: 'MultiCarrier',
    category: 'Telecomunicaciones · SaaS',
    description: 'Portal de Network Operations Center para la gestión y monitoreo de infraestructura de telecomunicaciones. Autenticación segura, dashboards en tiempo real y alertas automatizadas.',
    tags: ['React', 'Node.js', 'AWS', 'WebSockets'],
    mockup: MultiCarrierMockup,
  },
  {
    id: 2,
    title: 'Plataforma de Planeación Vacacional',
    client: 'BAST',
    category: 'Travel · Marketplace',
    description: 'Sistema de planeación vacacional con acceso preferencial a destinos, paquetes y convenios. Modelo ordenado, flexible y enfocado en optimizar el costo vacacional con acompañamiento profesional.',
    tags: ['Next.js', 'TypeScript', 'Stripe', 'PostgreSQL'],
    mockup: BASTMockup,
  },
];

/* ── Component ────────────────────────────────────────────────────────── */

export const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-24 bg-surface-light dark:bg-surface-dark">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        <Reveal>
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4 text-text-dark dark:text-white">
              Proyectos en Desarrollo
            </h2>
            <p className="text-text-dark-muted dark:text-text-muted max-w-xl mx-auto">
              Proyectos activos en los que estamos aplicando nuestra metodología Kaizen + IA para entregar resultados de clase mundial.
            </p>
          </div>
        </Reveal>

        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, idx) => {
            const Mockup = project.mockup;
            return (
              <Reveal key={project.id} delay={idx * 0.15}>
                <div className="group bg-bg-light dark:bg-bg-dark border border-accent-light dark:border-accent-dark rounded-lg overflow-hidden hover:border-primary/40 transition-colors duration-300">

                  {/* Mockup preview */}
                  <div className="relative w-full aspect-[16/10] overflow-hidden">
                    <Mockup />
                    <div className="absolute inset-0 bg-gradient-to-t from-bg-light dark:from-bg-dark via-transparent to-transparent opacity-60" />
                  </div>

                  {/* Info */}
                  <div className="p-8">
                    <div className="flex flex-wrap items-center gap-3 mb-4">
                      <span className="text-xs font-bold uppercase tracking-widest text-primary">
                        {project.client}
                      </span>
                      <span className="text-[10px] text-text-dark-muted dark:text-text-muted border border-accent-light dark:border-accent-dark rounded px-2 py-0.5">
                        {project.category}
                      </span>
                    </div>

                    <h3 className="font-display text-xl font-bold text-text-dark dark:text-white mb-3">
                      {project.title}
                    </h3>

                    <p className="text-sm text-text-dark-muted dark:text-text-muted leading-relaxed mb-5">
                      {project.description}
                    </p>

                    {/* Tech stack tags */}
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map(tag => (
                        <span
                          key={tag}
                          className="text-[10px] font-medium px-2.5 py-1 rounded border border-accent-light dark:border-accent-dark text-text-dark-muted dark:text-text-muted"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>

        {/* CTA */}
        <Reveal delay={0.3}>
          <div className="text-center mt-14">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 text-primary hover:text-primary-dark dark:hover:text-white transition-colors font-medium text-sm group"
            >
              ¿Tienes un proyecto similar? Platiquemos
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
};
