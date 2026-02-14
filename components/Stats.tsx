import React from 'react';
import { Reveal } from './Reveal';
import { Stat } from '../types';

const stats: Stat[] = [
  { id: 1, value: "50+", label: "Proyectos" },
  { id: 2, value: "99%", label: "Uptime" },
  { id: 3, value: "5", label: "Años Exp." },
  { id: 4, value: "24/7", label: "Soporte" },
];

export const Stats: React.FC = () => {
  return (
    <section className="py-20 border-y border-accent-light dark:border-accent-dark bg-bg-light dark:bg-bg-dark">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat, idx) => (
            <Reveal key={stat.id} delay={idx * 0.1}>
              <div className="space-y-2 group cursor-default">
                <div className="text-4xl md:text-5xl font-display font-bold text-text-dark dark:text-white group-hover:text-primary transition-colors duration-300">
                  {stat.value}
                </div>
                <div className="text-sm font-medium text-text-dark-muted dark:text-gray-500 uppercase tracking-widest">
                  {stat.label}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};