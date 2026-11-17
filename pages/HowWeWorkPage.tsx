import React from 'react';
import { PageHeader } from '../components/PageHeader';
import { WhyUs } from '../components/WhyUs';
import { Process } from '../components/Process';
import { Engagements } from '../components/Engagements';
import { Services } from '../components/Services';
import { Engineering } from '../components/Engineering';
import { CtaBand } from '../components/CtaBand';

/** The detailed view of how we work, for readers who want the full picture. */
export const HowWeWorkPage: React.FC = () => (
  <>
    <PageHeader
      label="Cómo trabajamos"
      title="Del primer café al sistema en producción."
      intro="Nuestro proceso paso a paso, las formas de contratarnos y los estándares técnicos que aplicamos en cada proyecto."
    />
    <WhyUs />
    <Process />
    <Engagements />
    <Services />
    <Engineering />
    <CtaBand title="¿Listo para empezar?" />
  </>
);
