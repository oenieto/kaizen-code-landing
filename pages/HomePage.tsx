import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Hero } from '../components/Hero';
import { Services } from '../components/Services';
import { Methodology } from '../components/Methodology';
import { TechStack } from '../components/TechStack';
import { Projects } from '../components/Projects';
import { Stats } from '../components/Stats';
import { Contact } from '../components/Contact';

export const HomePage: React.FC = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      setTimeout(() => {
        const element = document.querySelector(location.hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      window.scrollTo(0, 0);
    }
  }, [location]);

  return (
    <>
      <Hero />
      <Stats />
      <Services />
      <Methodology />
      <TechStack />
      <Projects />
      <Contact />
    </>
  );
};
