import React from 'react';
import { Plus } from 'lucide-react';
import { faqs } from '../data/site';
import { Section } from './Section';

export const Faq: React.FC = () => (
  <Section id="faq" index="06" label="Preguntas" title="Lo que suelen preguntarnos.">
    {/* Native <details>: keyboard and screen-reader support without custom ARIA. */}
    <div className="divide-y divide-line border-y border-line">
      {faqs.map((f) => (
        <details key={f.q} className="group">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-5 text-left text-base font-medium [&::-webkit-details-marker]:hidden">
            {f.q}
            <Plus
              size={18}
              className="shrink-0 text-faint transition-transform duration-200 group-open:rotate-45"
              aria-hidden="true"
            />
          </summary>
          <p className="max-w-3xl pb-6 text-[15px] leading-relaxed text-muted">{f.a}</p>
        </details>
      ))}
    </div>
  </Section>
);
