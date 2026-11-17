import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Hero } from '../components/Hero';
import { Services } from '../components/Services';
import { Projects } from '../components/Projects';
import { Engineering } from '../components/Engineering';
import { Process } from '../components/Process';
import { Engagements } from '../components/Engagements';
import { Faq } from '../components/Faq';
import { Contact } from '../components/Contact';

export const HomePage: React.FC = () => {
  const { hash } = useLocation();

  // Arriving from another route with a hash (e.g. /#work): scroll once the section exists.
  useEffect(() => {
    if (!hash) {
      window.scrollTo(0, 0);
      return;
    }
    const id = requestAnimationFrame(() => document.querySelector(hash)?.scrollIntoView());
    return () => cancelAnimationFrame(id);
  }, [hash]);

  useEffect(() => {
    document.title = 'Kaizen Code — Ingeniería de software para productos que deben funcionar';
  }, []);

  return (
    <>
      <Hero />
      <Services />
      <Projects />
      <Engineering />
      <Process />
      <Engagements />
      <Faq />
      <Contact />
    </>
  );
};
