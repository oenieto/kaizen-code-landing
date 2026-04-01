import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Reveal } from './Reveal';

interface ProjectData {
  id: number;
  title: string;
  client: string;
  category: string;
  description: string;
  tags: string[];
  image: string;
}

const projects: ProjectData[] = [
  {
    id: 1,
    title: 'Portal NOC',
    client: 'MultiCarrier',
    category: 'Telecomunicaciones · SaaS',
    description: 'Portal de Network Operations Center para la gestión y monitoreo de infraestructura de telecomunicaciones. Autenticación segura, dashboards en tiempo real y alertas automatizadas.',
    tags: ['React', 'Node.js', 'AWS', 'WebSockets'],
    image: '/assets/multicarrier-preview.png',
  },
  {
    id: 2,
    title: 'Plataforma de Planeación Vacacional',
    client: 'BAST',
    category: 'Travel · Marketplace',
    description: 'Sistema de planeación vacacional con acceso preferencial a destinos, paquetes y convenios. Modelo ordenado, flexible y enfocado en optimizar el costo vacacional con acompañamiento profesional.',
    tags: ['Next.js', 'TypeScript', 'Stripe', 'PostgreSQL'],
    image: '/assets/bast-preview.jpeg',
  },
];

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
          {projects.map((project, idx) => (
            <Reveal key={project.id} delay={idx * 0.15}>
              <div className="group bg-bg-light dark:bg-bg-dark border border-accent-light dark:border-accent-dark rounded-lg overflow-hidden hover:border-primary/40 transition-colors duration-300">

                {/* Project screenshot */}
                <div className="relative w-full aspect-[16/10] overflow-hidden">
                  <img
                    src={project.image}
                    alt={`${project.client} — ${project.title}`}
                    className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  />
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
          ))}
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
