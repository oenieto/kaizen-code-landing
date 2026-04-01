import React from 'react';
import { Reveal } from './Reveal';

const row1 = [
  'React', 'Next.js', 'TypeScript', 'Node.js', 'Python',
  'FastAPI', 'React Native', 'Tailwind CSS', 'GraphQL', 'Vite',
];
const row2 = [
  'AWS', 'Azure', 'Google Cloud', 'Docker', 'GitHub Actions',
  'Vercel', 'Claude AI', 'OpenAI', 'LangChain', 'PostgreSQL', 'MongoDB',
];

const Tag: React.FC<{ label: string; highlight?: boolean }> = ({ label, highlight }) => (
  <span
    className={`inline-flex items-center px-4 py-2 rounded text-sm font-medium whitespace-nowrap border transition-colors duration-200 cursor-default select-none ${
      highlight
        ? 'border-primary/50 text-primary bg-primary/5'
        : 'border-accent-light dark:border-accent-dark text-text-dark-muted dark:text-text-muted bg-surface-light dark:bg-surface-dark hover:border-primary/40 hover:text-primary'
    }`}
  >
    {label}
  </span>
);

const MarqueeRow: React.FC<{ items: string[]; duration?: number; reverse?: boolean; highlights?: string[] }> = ({
  items,
  duration = 35,
  reverse = false,
  highlights = [],
}) => {
  const doubled = [...items, ...items];
  return (
    <div className="flex items-center overflow-hidden">
      <div
        className="flex items-center gap-3 flex-shrink-0"
        style={{
          width: 'max-content',
          animation: `marquee ${duration}s linear infinite${reverse ? ' reverse' : ''}`,
        }}
      >
        {doubled.map((item, i) => (
          <Tag key={i} label={item} highlight={highlights.includes(item)} />
        ))}
      </div>
    </div>
  );
};

export const TechStack: React.FC = () => {
  return (
    <section className="py-24 bg-bg-light dark:bg-bg-dark border-t border-accent-light dark:border-accent-dark overflow-hidden">
      <style>{`
        @keyframes marquee {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 mb-14">
        <Reveal>
          <div className="text-center">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4 text-text-dark dark:text-white">
              Stack Tecnológico
            </h2>
            <p className="text-text-dark-muted dark:text-text-muted max-w-xl mx-auto">
              Dominamos las herramientas más demandadas de la industria. Los resaltados son nuestras apuestas principales para proyectos con IA.
            </p>
          </div>
        </Reveal>
      </div>

      <div className="space-y-3 relative">
        {/* Fade overlays — use inline style for reliable custom theme colors */}
        <div
          className="pointer-events-none absolute left-0 top-0 bottom-0 w-32 z-10"
          style={{ background: 'linear-gradient(to right, var(--color-bg-light), transparent)' }}
        />
        <div
          className="pointer-events-none absolute right-0 top-0 bottom-0 w-32 z-10"
          style={{ background: 'linear-gradient(to left, var(--color-bg-light), transparent)' }}
        />
        <div
          className="pointer-events-none absolute left-0 top-0 bottom-0 w-32 z-10 hidden dark:block"
          style={{ background: 'linear-gradient(to right, var(--color-bg-dark), transparent)' }}
        />
        <div
          className="pointer-events-none absolute right-0 top-0 bottom-0 w-32 z-10 hidden dark:block"
          style={{ background: 'linear-gradient(to left, var(--color-bg-dark), transparent)' }}
        />

        <MarqueeRow items={row1} duration={30} highlights={['React', 'Next.js', 'TypeScript', 'Node.js']} />
        <MarqueeRow items={row2} duration={35} reverse highlights={['Claude AI', 'OpenAI', 'AWS', 'Docker']} />
      </div>
    </section>
  );
};
