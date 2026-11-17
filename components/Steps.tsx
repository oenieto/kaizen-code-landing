import React from 'react';
import { Link } from 'react-router-dom';
import { homeSteps } from '../data/site';
import { Section } from './Section';
import { Reveal } from './Reveal';

/** Three-step, plain-language process for the home page; details live on /como-trabajamos. */
export const Steps: React.FC = () => (
  <Section id="steps" title="Así trabajamos" intro="Sin tecnicismos: tú nos cuentas qué necesitas y nosotros nos encargamos del resto.">
    <ol className="grid gap-x-8 gap-y-12 md:grid-cols-3">
      {homeSteps.map((step, i) => (
        <li key={step.title}>
          <Reveal delay={i * 0.05} className="ruled">
            <span className="text-[clamp(2.5rem,4vw,3.5rem)] leading-none font-medium tracking-[-0.03em] text-accent">
              {i + 1}
            </span>
            <h3 className="mt-6 text-xl font-semibold tracking-[-0.01em]">{step.title}</h3>
            <p className="mt-3 text-[16px] leading-[1.75] text-muted">{step.body}</p>
          </Reveal>
        </li>
      ))}
    </ol>
    <Reveal className="mt-12">
      <Link to="/como-trabajamos" className="link text-[15px]">
        Ver el proceso completo
      </Link>
    </Reveal>
  </Section>
);
