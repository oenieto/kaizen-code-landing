import React from 'react';
import { services } from '../data/site';
import { Section, RuledItem } from './Section';

export const Services: React.FC = () => (
  <Section
    id="services"
    title="Qué hacemos"
    intro="Cubrimos el ciclo completo — producto, backend, infraestructura e IA — con un equipo que se queda contigo después del lanzamiento."
  >
    <div className="grid gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
      {services.map((s, i) => (
        <RuledItem key={s.code} title={s.title} delay={(i % 3) * 0.05}>
          <p>{s.description}</p>
          <p className="mt-4 text-sm text-fg">{s.deliverables.join(' · ')}</p>
        </RuledItem>
      ))}
    </div>
  </Section>
);
