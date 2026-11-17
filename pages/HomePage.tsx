import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Hero } from '../components/Hero';
import { Services } from '../components/Services';
import { Projects } from '../components/Projects';
import { WhyUs } from '../components/WhyUs';
import { Engineering } from '../components/Engineering';
import { Process } from '../components/Process';
import { Engagements } from '../components/Engagements';
import { Faq } from '../components/Faq';
import { Contact } from '../components/Contact';

export const HomePage: React.FC = () => {
  const { hash } = useLocation();

  // Arriving with a hash (e.g. /#work from another route). Sections are rendered
  // eagerly, so the target already exists when this effect runs.
  useEffect(() => {
    if (hash) document.getElementById(hash.slice(1))?.scrollIntoView();
  }, [hash]);

  useEffect(() => {
    document.title = 'Kaizen Code — Ingeniería de software para productos que deben funcionar';
  }, []);

  return (
    <>
      <Hero />
      <Projects />
      <WhyUs />
      <Services />
      <Engineering />
      <Process />
      <Engagements />
      <Faq />
      <Contact />
    </>
  );
};
