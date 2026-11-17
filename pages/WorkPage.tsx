import React from 'react';
import { PageHeader } from '../components/PageHeader';
import { Projects } from '../components/Projects';
import { CtaBand } from '../components/CtaBand';

export const WorkPage: React.FC = () => (
  <>
    <PageHeader
      label="Trabajo"
      title="Proyectos con clientes y productos propios."
      intro="Lo que hemos construido para otros y lo que construimos para nosotros. Los productos propios son donde probamos tecnología antes de recomendarla."
    />
    <Projects />
    <CtaBand title="¿Tienes un proyecto parecido?" />
  </>
);
