import React from 'react';
import { Reveal } from './Reveal';

export const Methodology: React.FC = () => {
  return (
    <section id="methodology" className="py-24 relative overflow-hidden bg-bg-light dark:bg-bg-dark">
      {/* Decorator */}
      <div className="absolute right-0 top-0 w-1/3 h-full bg-accent-light/20 dark:bg-accent-dark/20 skew-x-12 transform origin-top-right pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          
          <div className="order-2 lg:order-1 relative">
            <Reveal>
              <div className="relative bg-surface-light dark:bg-surface-dark rounded-lg p-1 shadow-2xl border border-accent-light dark:border-accent-dark transform rotate-1 hover:rotate-0 transition-transform duration-500">
                <div className="bg-[#1e1e1e] rounded p-6 overflow-hidden">
                  <div className="flex gap-1.5 mb-4 opacity-70">
                    <div className="w-3 h-3 rounded-full bg-[#ff5f56]"></div>
                    <div className="w-3 h-3 rounded-full bg-[#ffbd2e]"></div>
                    <div className="w-3 h-3 rounded-full bg-[#27c93f]"></div>
                  </div>
                  <pre className="font-mono text-xs sm:text-sm text-gray-300 overflow-x-auto">
                    <code>
                      <span className="text-purple-400">class</span> <span className="text-yellow-300">KaizenPhilosophy</span> {'{'}
                      {'\n'}  <span className="text-purple-400">constructor</span>() {'{'}
                      {'\n'}    <span className="text-blue-400">this</span>.principles = [
                      {'\n'}      <span className="text-green-400">'Simplicidad'</span>,
                      {'\n'}      <span className="text-green-400">'Mejora Continua'</span>,
                      {'\n'}      <span className="text-green-400">'Código Limpio'</span>
                      {'\n'}    ];
                      {'\n'}  {'}'}
                      {'\n'}  <span className="text-blue-300">execute</span>() {'{'}
                      {'\n'}    <span className="text-purple-400">return</span> <span className="text-blue-400">this</span>.principles.map(p =&gt; {'{'}
                      {'\n'}       <span className="text-purple-400">return</span> <span className="text-blue-300">applyToProject</span>(p);
                      {'\n'}    {'}'});
                      {'\n'}  {'}'}
                      {'\n'}{'}'}
                    </code>
                  </pre>
                </div>
              </div>
              <div className="absolute -bottom-6 -left-6 w-24 h-24 border-b-2 border-l-2 border-primary rounded-bl-xl opacity-60"></div>
            </Reveal>
          </div>

          <div className="order-1 lg:order-2">
            <Reveal>
              <h2 className="font-display text-3xl md:text-4xl font-bold mb-6 text-text-dark dark:text-white">
                Filosofía Kaizen
              </h2>
              <p className="text-lg text-text-dark-muted dark:text-text-muted mb-10">
                "Kaizen" significa cambio para mejor. Aplicamos esta filosofía japonesa a cada sprint, cada commit y cada despliegue.
              </p>
            </Reveal>

            <div className="space-y-8 mt-10">
              {[
                { id: '01', title: 'Simplicidad Radical', desc: 'Eliminamos lo innecesario. El código más eficiente es el que no se tiene que escribir.' },
                { id: '02', title: 'Iteración Constante', desc: 'Pequeños cambios consistentes generan grandes resultados a largo plazo.' },
                { id: '03', title: 'Artesanía Digital', desc: 'Tratamos el desarrollo de software como un oficio que requiere precisión y cuidado.' }
              ].map((item, idx) => (
                <Reveal key={item.id} delay={idx * 0.15}>
                  <div className="flex gap-4 group">
                    <div className="flex-shrink-0 w-12 h-12 rounded bg-surface-light dark:bg-surface-dark border border-accent-light dark:border-accent-dark flex items-center justify-center text-primary font-bold font-display text-xl group-hover:border-primary transition-colors">
                      {item.id}
                    </div>
                    <div>
                      <h4 className="font-bold text-text-dark dark:text-white mb-2">{item.title}</h4>
                      <p className="text-sm text-text-dark-muted dark:text-text-muted">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};