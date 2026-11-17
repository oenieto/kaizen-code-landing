import React from 'react';
import { engagements } from '../data/site';
import { Section, RuledItem } from './Section';

export const Engagements: React.FC = () => (
  <Section
    id="engagement"
    title="Modelos de trabajo"
    intro="Cotizamos después de una llamada técnica de 30 minutos. Sin formularios eternos ni propuestas genéricas."
  >
    <div className="grid gap-x-8 gap-y-14 lg:grid-cols-3">
      {engagements.map((e, i) => (
        <RuledItem key={e.name} title={e.name} meta={e.featured ? 'El más solicitado' : undefined} delay={i * 0.05}>
          <p>{e.fit}</p>
          <ul className="mt-5 space-y-1.5 text-fg">
            {e.points.map((p) => (
              <li key={p}>{p}.</li>
            ))}
          </ul>
          <a href="#contact" className="link mt-6 inline-block text-fg">
            Hablemos de este modelo
          </a>
        </RuledItem>
      ))}
    </div>
  </Section>
);
