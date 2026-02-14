import React from 'react';
import { Hero } from '../components/Hero';
import { Services } from '../components/Services';
import { Methodology } from '../components/Methodology';
import { Projects } from '../components/Projects';
import { Stats } from '../components/Stats';
import { Contact } from '../components/Contact';

export const HomePage: React.FC = () => {
  return (
    <>
      <Hero />
      <Services />
      <Methodology />
      <Projects />
      <Stats />
      <Contact />
    </>
  );
};
