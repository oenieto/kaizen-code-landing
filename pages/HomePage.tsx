import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Hero } from '../components/Hero';
import { Solutions } from '../components/Solutions';
import { Steps } from '../components/Steps';
import { ProjectsTeaser } from '../components/Projects';
import { TechMarquee } from '../components/WhyUs';
import { Faq } from '../components/Faq';
import { Contact } from '../components/Contact';

/**
 * Deliberately short: what we sell, how it works, proof, questions, contact.
 * Detail for technical readers lives on /trabajo and /como-trabajamos.
 */
export const HomePage: React.FC = () => {
  const { hash } = useLocation();

  // Arriving with a hash (e.g. /#contact from another route). Sections are rendered
  // eagerly, so the target already exists when this effect runs.
  useEffect(() => {
    if (hash) document.getElementById(hash.slice(1))?.scrollIntoView();
  }, [hash]);

  return (
    <>
      <Hero />
      <Solutions />
      <Steps />
      <ProjectsTeaser />
      <TechMarquee />
      <Faq />
      <Contact />
    </>
  );
};
