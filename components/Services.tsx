import React from 'react';
import { Layers, Server, BrainCircuit, ArrowRight } from 'lucide-react';
import { Service } from '../types';
import { Reveal } from './Reveal';

const services: Service[] = [
  {
    id: 1,
    icon: 'layers',
    title: 'Desarrollo Web Full Stack',
    description: 'Aplicaciones web complejas con arquitecturas modernas (React, Node, Next.js) diseñadas para escalar.',
    tags: ['SPAs & PWAs', 'Sistemas de Gestión']
  },
  {
    id: 2,
    icon: 'server',
    title: 'Infraestructura Cloud',
    description: 'Diseño e implementación de infraestructura en la nube (AWS, Azure) optimizada para seguridad y costos.',
    tags: ['DevOps & CI/CD', 'Serverless']
  },
  {
    id: 3,
    icon: 'brain',
    title: 'Consultoría Técnica',
    description: 'Asesoramiento estratégico para equipos de desarrollo, refactorización y auditoría de código.',
    tags: ['Auditoría de Código', 'Mentoria de Equipos']
  }
];

const IconMap = ({ name }: { name: string }) => {
  switch (name) {
    case 'layers': return <Layers className="w-10 h-10" />;
    case 'server': return <Server className="w-10 h-10" />;
    case 'brain': return <BrainCircuit className="w-10 h-10" />;
    default: return <Layers className="w-10 h-10" />;
  }
};

export const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-surface-light dark:bg-surface-dark border-t border-accent-light dark:border-accent-dark">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <Reveal>
          <div className="mb-16 md:flex justify-between items-end">
            <div className="max-w-xl">
              <h2 className="font-display text-3xl md:text-4xl font-bold mb-4 text-text-dark dark:text-white">
                Arquitectura Digital
              </h2>
              <p className="text-text-dark-muted dark:text-text-muted">
                Construimos soluciones robustas utilizando las tecnologías más avanzadas, priorizando el rendimiento y la experiencia de usuario.
              </p>
            </div>
            <div className="mt-6 md:mt-0">
              <a href="#contact" className="text-primary hover:text-primary-dark dark:hover:text-white transition-colors font-medium inline-flex items-center text-sm group">
                Ver todos los servicios 
                <ArrowRight className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </Reveal>

        <div className="grid md:grid-cols-3 gap-px bg-accent-light dark:bg-accent-dark border border-accent-light dark:border-accent-dark">
          {services.map((service, index) => (
            <div 
              key={service.id} 
              className="bg-bg-light dark:bg-bg-dark p-10 hover:bg-surface-light dark:hover:bg-surface-dark transition-colors duration-300 group"
            >
              <Reveal delay={index * 0.1}>
                <div className="text-primary mb-6 group-hover:scale-110 group-hover:-translate-y-1 transition-transform duration-300 origin-left">
                  <IconMap name={service.icon} />
                </div>
                <h3 className="font-display text-xl font-bold mb-3 text-text-dark dark:text-white">
                  {service.title}
                </h3>
                <p className="text-text-dark-muted dark:text-text-muted text-sm leading-relaxed mb-6">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.tags.map((tag) => (
                    <li key={tag} className="flex items-center text-xs text-gray-500 font-medium uppercase tracking-wide">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></span> {tag}
                    </li>
                  ))}
                </ul>
              </Reveal>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};