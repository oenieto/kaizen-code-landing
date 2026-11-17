import React from 'react';
import { Reveal } from './Reveal';

interface SectionProps {
  id: string;
  index: string;
  label: string;
  title: React.ReactNode;
  intro?: React.ReactNode;
  children: React.ReactNode;
  className?: string;
}

/** Shared section frame: numbered label, heading, optional intro, content. */
export const Section: React.FC<SectionProps> = ({ id, index, label, title, intro, children, className = '' }) => (
  <section id={id} aria-labelledby={`${id}-title`} className={`border-t border-line py-20 sm:py-28 ${className}`}>
    <div className="container-page">
      <Reveal>
        <div className="grid gap-6 lg:grid-cols-[1fr_1.4fr] lg:items-end">
          <div>
            <p className="eyebrow">
              <span className="text-accent">{index}</span> / {label}
            </p>
            <h2 id={`${id}-title`} className="mt-4 text-3xl leading-tight font-semibold tracking-[-0.025em] text-balance sm:text-4xl">
              {title}
            </h2>
          </div>
          {intro && <p className="max-w-xl text-base leading-relaxed text-pretty text-muted lg:justify-self-end">{intro}</p>}
        </div>
      </Reveal>
      <div className="mt-12 sm:mt-16">{children}</div>
    </div>
  </section>
);
