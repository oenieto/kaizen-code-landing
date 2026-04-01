import React from 'react';
import { Reveal } from './Reveal';

const principles = [
  {
    id: '01',
    title: 'Simplicidad Radical',
    desc: 'Eliminamos todo lo que no agrega valor. El código más eficiente es el que no necesita escribirse.',
    insight: 'Menos deuda técnica, más velocidad de iteración.',
  },
  {
    id: '02',
    title: 'IA como Copiloto',
    desc: 'Integramos modelos de IA en cada etapa: diseño de arquitectura, revisión de código, generación de tests y detección de bugs antes de producción.',
    insight: 'Mismo equipo humano, capacidad 3x mayor.',
  },
  {
    id: '03',
    title: 'Iteración Constante',
    desc: 'Trabajamos en sprints cortos con entregas frecuentes. El cliente ve avances reales desde la primera semana, no promesas.',
    insight: 'Feedback continuo elimina el riesgo de entregar lo equivocado.',
  },
  {
    id: '04',
    title: 'Artesanía Digital',
    desc: 'Cada línea de código importa. Aplicamos revisión de pares, pruebas automatizadas y estándares de calidad en cada commit.',
    insight: 'Código limpio que otro equipo puede mantener sin problemas.',
  },
];

export const Methodology: React.FC = () => {
  return (
    <section id="methodology" className="py-24 relative overflow-hidden bg-bg-light dark:bg-bg-dark">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 items-start">

          {/* Code block */}
          <div className="order-2 lg:order-1 relative lg:sticky lg:top-32">
            <Reveal>
              <div className="relative bg-surface-light dark:bg-surface-dark rounded-lg p-1 shadow-2xl border border-accent-light dark:border-accent-dark">
                <div className="bg-[#1a1a1a] rounded p-6 overflow-hidden">
                  <div className="flex items-center gap-1.5 mb-5">
                    <div className="w-3 h-3 rounded-full bg-[#ff5f56]"></div>
                    <div className="w-3 h-3 rounded-full bg-[#ffbd2e]"></div>
                    <div className="w-3 h-3 rounded-full bg-[#27c93f]"></div>
                    <span className="ml-3 text-[11px] font-mono text-gray-500">kaizen-workflow.ts</span>
                  </div>
                  <pre className="font-mono text-xs sm:text-sm text-gray-300 overflow-x-auto leading-6">
                    <code>
                      <span className="text-purple-400">class</span> <span className="text-yellow-300">KaizenAI</span> {'{'}
                      {'\n'}  <span className="text-blue-400">private</span> ai = <span className="text-green-400">'Claude + GPT-4'</span>;
                      {'\n'}  <span className="text-blue-400">private</span> speed = <span className="text-yellow-300">3</span>; <span className="text-gray-500">// 3x faster</span>
                      {'\n'}
                      {'\n'}  <span className="text-purple-400">async</span> <span className="text-blue-300">sprint</span>(brief: Brief) {'{'}
                      {'\n'}    <span className="text-purple-400">const</span> arch = <span className="text-purple-400">await</span> <span className="text-blue-300">this.design</span>(brief);
                      {'\n'}    <span className="text-purple-400">const</span> code = <span className="text-purple-400">await</span> <span className="text-blue-300">this.build</span>(arch);
                      {'\n'}    <span className="text-purple-400">await</span> <span className="text-blue-300">this.ai.review</span>(code);
                      {'\n'}    <span className="text-purple-400">return</span> <span className="text-blue-300">this.deploy</span>(code);
                      {'\n'}  {'}'}
                      {'\n'}
                      {'\n'}  <span className="text-purple-400">private async</span> <span className="text-blue-300">deploy</span>(code: Code) {'{'}
                      {'\n'}    <span className="text-gray-500">// Tests: 100% ✓  Build: ✓</span>
                      {'\n'}    <span className="text-emerald-400">{'// ✔ En producción'}</span>
                      {'\n'}  {'}'}
                      {'\n'}{'}'}
                    </code>
                  </pre>
                </div>
              </div>
              <div className="absolute -bottom-6 -left-6 w-24 h-24 border-b-2 border-l-2 border-primary rounded-bl-xl opacity-60"></div>
            </Reveal>
          </div>

          {/* Principles */}
          <div className="order-1 lg:order-2">
            <Reveal>
              <h2 className="font-display text-3xl md:text-4xl font-bold mb-3 text-text-dark dark:text-white">
                Filosofía Kaizen
              </h2>
              <p className="text-lg text-text-dark-muted dark:text-text-muted mb-10">
                "Kaizen" significa cambio para mejor. Aplicamos esta filosofía japonesa a cada sprint, cada commit y cada deploy — potenciada con IA.
              </p>
            </Reveal>

            <div className="space-y-6">
              {principles.map((item, idx) => (
                <Reveal key={item.id} delay={idx * 0.1}>
                  <div className="group border border-accent-light dark:border-accent-dark rounded-lg p-5 hover:border-primary/40 transition-colors duration-300 bg-surface-light/40 dark:bg-surface-dark/40">
                    <div className="flex gap-4">
                      <div className="flex-shrink-0 w-10 h-10 rounded bg-surface-light dark:bg-surface-dark border border-accent-light dark:border-accent-dark flex items-center justify-center text-primary font-bold font-display group-hover:border-primary transition-colors">
                        {item.id}
                      </div>
                      <div className="flex-1">
                        <h4 className="font-bold text-text-dark dark:text-white mb-1.5">{item.title}</h4>
                        <p className="text-sm text-text-dark-muted dark:text-text-muted leading-relaxed mb-3">
                          {item.desc}
                        </p>
                        <div className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0"></span>
                          <span className="text-xs text-primary font-medium">{item.insight}</span>
                        </div>
                      </div>
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
