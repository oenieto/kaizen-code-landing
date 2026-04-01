import React from 'react';
import { Layers, Server, BrainCircuit, ArrowRight, Sparkles, Headphones } from 'lucide-react';
import { Service } from '../types';
import { Reveal } from './Reveal';

const services: Service[] = [
  {
    id: 1,
    icon: 'layers',
    title: 'Desarrollo Web & Móvil',
    description: 'Aplicaciones web y móviles con arquitecturas modernas (React, Next.js, React Native) listas para escalar desde el día uno.',
    tags: ['SPAs & PWAs', 'Apps Móviles', 'Sistemas de Gestión']
  },
  {
    id: 2,
    icon: 'server',
    title: 'Cloud & DevOps',
    description: 'Infraestructura en la nube (AWS, Azure) con pipelines CI/CD automatizados. Deployments seguros, rápidos y repetibles.',
    tags: ['CI/CD Automatizado', 'Serverless', 'Contenedores Docker']
  },
  {
    id: 3,
    icon: 'sparkles',
    title: 'Integración con IA',
    description: 'Potenciamos tu producto con IA: chatbots, automatizaciones inteligentes, procesamiento de documentos y pipelines de datos con LLMs.',
    tags: ['Chatbots & Agentes', 'Automatización', 'Análisis con LLMs'],
    badge: 'Diferenciador'
  },
  {
    id: 4,
    icon: 'headphones',
    title: 'Consultoría & Soporte',
    description: 'Auditoría de código, refactorización y soporte post-entrega continuo. No desaparecemos cuando termina el proyecto.',
    tags: ['Auditoría de Código', 'Soporte Post-Entrega', 'Mentoría de Equipos']
  }
];

const IconMap = ({ name }: { name: string }) => {
  switch (name) {
    case 'layers': return <Layers className="w-10 h-10" />;
    case 'server': return <Server className="w-10 h-10" />;
    case 'brain': return <BrainCircuit className="w-10 h-10" />;
    case 'sparkles': return <Sparkles className="w-10 h-10" />;
    case 'headphones': return <Headphones className="w-10 h-10" />;
    default: return <Layers className="w-10 h-10" />;
  }
};

export const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-surface-light dark:bg-surface-dark border-t border-accent-light dark:border-accent-dark">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <Reveal>
          <div className="mb-16 md:flex md:justify-between md:items-end">
            <div className="max-w-xl">
              <h2 className="font-display text-3xl md:text-4xl font-bold mb-4 text-text-dark dark:text-white">
                Lo que Construimos
              </h2>
              <p className="text-text-dark-muted dark:text-text-muted">
                Soluciones end-to-end con IA integrada desde el diseño. Más rápido, más eficiente, sin comprometer calidad.
              </p>
            </div>
            <div className="mt-6 md:mt-0 md:flex-shrink-0 md:ml-8 md:text-right">
              <a href="#contact" className="text-primary hover:text-primary-dark dark:hover:text-white transition-colors font-medium inline-flex items-center text-sm group">
                Hablar con un experto
                <ArrowRight className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </Reveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-accent-light dark:bg-accent-dark border border-accent-light dark:border-accent-dark">
          {services.map((service, index) => (
            <div
              key={service.id}
              className={`relative bg-bg-light dark:bg-bg-dark p-10 hover:bg-surface-light dark:hover:bg-surface-dark transition-colors duration-300 group ${service.badge ? 'ring-1 ring-inset ring-primary/30' : ''}`}
            >
              {service.badge && (
                <span className="absolute top-4 right-4 text-[10px] font-bold uppercase tracking-widest text-primary border border-primary/40 rounded px-2 py-0.5">
                  {service.badge}
                </span>
              )}
              <Reveal delay={index * 0.1}>
                <div className="text-primary mb-6 group-hover:scale-105 transition-transform duration-300 origin-left w-10 h-10">
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