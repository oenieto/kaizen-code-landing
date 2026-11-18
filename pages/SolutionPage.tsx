import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { ArrowRight, Check } from 'lucide-react';
import { solutions } from '../data/site';
import { solutionPath } from '../data/seo';
import { PageHeader } from '../components/PageHeader';
import { Section, RuledItem } from '../components/Section';
import { Faq } from '../components/Faq';
import { Reveal } from '../components/Reveal';
import { NotFoundPage } from './NotFoundPage';

/** Contact form on the home page, with this solution preselected. */
const contactLink = (name: string) => `/?interes=${encodeURIComponent(name)}#contact`;

/** One page per productised solution: /soluciones/<path>. */
export const SolutionPage: React.FC = () => {
  const { path } = useParams<{ path: string }>();
  const solution = solutions.find((s) => s.path === path);
  if (!solution) return <NotFoundPage />;
  const others = solutions.filter((s) => s !== solution);

  return (
    <>
      <PageHeader label={`Soluciones · ${solution.audience}`} title={solution.name} intro={solution.pitch} />

      <section aria-labelledby="problem-title" className="py-24 sm:py-32">
        <div className="container-page grid gap-12 lg:grid-cols-12">
          <Reveal className="lg:col-span-5">
            <h2 id="problem-title" className="display-2 text-balance">
              El problema
            </h2>
            <p className="mt-6 max-w-md text-[16px] leading-[1.75] text-muted">{solution.problem}</p>
          </Reveal>
          <Reveal delay={0.05} className="lg:col-span-6 lg:col-start-7">
            <h3 className="text-sm text-faint">Qué incluye</h3>
            <ul className="mt-5 space-y-4 border-t border-rule pt-6 text-[17px]">
              {solution.includes.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <Check size={20} className="mt-0.5 shrink-0 text-accent" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
            <p className="mt-8 text-sm text-muted">
              <span className="text-fg">Tecnología:</span> {solution.stack}
            </p>
            <Link to={contactLink(solution.name)} className="btn-primary group mt-10">
              Cotiza esta solución
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
            </Link>
          </Reveal>
        </div>
      </section>

      <Section id="steps" title="Cómo lo hacemos" intro="Un proyecto corto, con entregables claros en cada paso.">
        <ol className="grid gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-4">
          {solution.steps.map((step, i) => (
            <li key={step.title}>
              <RuledItem title={step.title} meta={String(i + 1).padStart(2, '0')} delay={i * 0.05}>
                <p>{step.text}</p>
              </RuledItem>
            </li>
          ))}
        </ol>
      </Section>

      <Faq items={solution.faqs} />

      <section aria-labelledby="others-title" className="border-t border-line py-24 sm:py-32">
        <div className="container-page">
          <h2 id="others-title" className="display-2">
            Otras soluciones
          </h2>
          <ul className="mt-12 grid gap-px border-y border-line bg-line sm:grid-cols-2 lg:grid-cols-5">
            {others.map((s) => (
              <li key={s.slug} className="bg-canvas">
                <Link to={solutionPath(s.path)} className="group flex h-full flex-col gap-3 px-5 py-6">
                  <span className="text-[17px] font-medium tracking-[-0.01em] group-hover:underline group-hover:underline-offset-4">
                    {s.name}
                  </span>
                  <span className="text-sm text-muted">{s.audience}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-ink py-24 text-white sm:py-32">
        <div className="container-page flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <h2 className="display-2 max-w-[18ch] text-balance">¿Lo platicamos? Te respondemos el mismo día hábil.</h2>
          <Link to={contactLink(solution.name)} className="btn group shrink-0 bg-white text-black hover:bg-accent">
            Escríbenos
            <ArrowRight size={16} className="transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
          </Link>
        </div>
      </section>
    </>
  );
};
