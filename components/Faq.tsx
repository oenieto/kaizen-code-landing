import React from 'react';
import { faqs } from '../data/site';
import { Reveal } from './Reveal';

interface FaqProps {
  items?: { q: string; a: string }[];
}

/** Defaults to the general FAQ; solution pages pass their own questions. */
export const Faq: React.FC<FaqProps> = ({ items = faqs }) => (
  <section id="faq" aria-labelledby="faq-title" className="border-t border-line py-24 sm:py-32">
    <div className="container-page grid gap-12 lg:grid-cols-12">
      <Reveal className="lg:col-span-5">
        <h2 id="faq-title" className="display-2 lg:sticky lg:top-28">
          Preguntas frecuentes
        </h2>
      </Reveal>

      {/* Native <details>: keyboard and screen-reader support without custom ARIA. */}
      <div className="border-b border-rule lg:col-span-7">
        {items.map((f) => (
          <details key={f.q} className="group border-t border-rule">
            <summary className="flex cursor-pointer list-none items-baseline justify-between gap-6 py-6 text-lg font-medium tracking-[-0.01em] [&::-webkit-details-marker]:hidden">
              {f.q}
              <span className="shrink-0 text-2xl leading-none font-normal transition-transform duration-200 group-open:rotate-45" aria-hidden="true">
                +
              </span>
            </summary>
            <p className="max-w-2xl pb-7 text-[15px] leading-[1.8] text-muted">{f.a}</p>
          </details>
        ))}
      </div>
    </div>
  </section>
);
