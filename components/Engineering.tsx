import React from 'react';
import { standards } from '../data/site';
import { Section, RuledItem } from './Section';

export const Engineering: React.FC = () => (
  <Section
    id="engineering"
    title="Estándares de ingeniería"
    intro="Lo que recibe cualquier proyecto, sin importar su tamaño. Es la diferencia entre un sistema que se mantiene y uno que hay que reescribir en un año."
  >
    <div className="grid gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-4">
      {standards.map((s, i) => (
        <RuledItem key={s.title} title={s.title} delay={(i % 4) * 0.04}>
          <p>{s.body}</p>
          <p className="mt-4 text-sm text-fg">{s.tools}</p>
        </RuledItem>
      ))}
    </div>
  </Section>
);
