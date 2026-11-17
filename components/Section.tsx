import React from 'react';
import { Reveal } from './Reveal';

interface SectionProps {
  id: string;
  title: React.ReactNode;
  intro?: React.ReactNode;
  children: React.ReactNode;
  className?: string;
}

/** Shared section frame: large heading, optional intro on the right, content. */
export const Section: React.FC<SectionProps> = ({ id, title, intro, children, className = '' }) => (
  <section id={id} aria-labelledby={`${id}-title`} className={`border-t border-line py-24 sm:py-32 ${className}`}>
    <div className="container-page">
      <Reveal className="grid gap-6 lg:grid-cols-12 lg:items-end">
        <h2 id={`${id}-title`} className="display-2 text-balance lg:col-span-7">
          {title}
        </h2>
        {intro && (
          <p className="max-w-md text-[15px] leading-relaxed text-pretty text-muted lg:col-span-4 lg:col-start-9">{intro}</p>
        )}
      </Reveal>
      <div className="mt-14 sm:mt-20">{children}</div>
    </div>
  </section>
);

/** A ruled item: black hairline, bold title, body. The building block of every list. */
export const RuledItem: React.FC<{ title: string; children: React.ReactNode; meta?: React.ReactNode; delay?: number }> = ({
  title,
  children,
  meta,
  delay = 0,
}) => (
  <Reveal delay={delay} className="ruled">
    {meta && <p className="mb-3 text-sm text-faint">{meta}</p>}
    <h3 className="text-[17px] font-semibold tracking-[-0.01em]">{title}</h3>
    <div className="mt-4 text-[15px] leading-[1.75] text-muted">{children}</div>
  </Reveal>
);
