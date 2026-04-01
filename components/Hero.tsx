import React from 'react';
import { ArrowRight, Code2, Zap } from 'lucide-react';
import { motion } from 'framer-motion';
import { Reveal } from './Reveal';

export const Hero: React.FC = () => {
  return (
    <header className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden min-h-screen flex items-center">
      {/* Background Ambience */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          <div className="max-w-2xl">
            <Reveal>
              <div className="inline-flex items-center gap-2 px-3 py-1 mb-8 border border-accent-light dark:border-accent-dark rounded-full bg-surface-light/50 dark:bg-surface-dark/50 backdrop-blur-sm">
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
                <span className="text-xs font-medium tracking-wide uppercase text-text-dark-muted dark:text-text-muted">
                  IA-Powered · Hecho en México
                </span>
              </div>
            </Reveal>

            <Reveal delay={0.35}>
              <h1 className="font-display text-5xl lg:text-7xl font-bold leading-[1.1] tracking-tight mb-8 text-text-dark dark:text-white">
                Software que Escala. Entregado <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-emerald-200">3x Más Rápido</span>.
              </h1>
            </Reveal>

            <Reveal delay={0.45}>
              <p className="text-lg text-text-dark-muted dark:text-text-muted mb-10 leading-relaxed max-w-lg">
                Fusionamos la filosofía Kaizen con inteligencia artificial de última generación. Desarrollamos software robusto y escalable reduciendo los tiempos de entrega a la mitad — sin sacrificar calidad.
              </p>
            </Reveal>

            <Reveal delay={0.55}>
              <div className="flex flex-col sm:flex-row gap-4 mb-10">
                <a
                  href="#contact"
                  className="inline-flex justify-center items-center px-8 py-4 bg-primary text-white rounded font-medium hover:bg-primary-dark transition-all duration-300 group"
                >
                  Iniciar Proyecto
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform w-5 h-5" />
                </a>
                <a
                  href="#methodology"
                  className="inline-flex justify-center items-center px-8 py-4 border border-accent-light dark:border-accent-dark text-text-dark dark:text-white rounded font-medium hover:bg-accent-light dark:hover:bg-accent-dark transition-all duration-300"
                >
                  Nuestra Filosofía
                </a>
              </div>
            </Reveal>

            <Reveal delay={0.65}>
              <div className="flex flex-wrap justify-center sm:justify-start gap-x-6 gap-y-3 pt-4 border-t border-accent-light dark:border-accent-dark">
                <div className="flex items-center gap-2 text-sm text-text-dark-muted dark:text-text-muted">
                  <Zap size={14} className="text-primary flex-shrink-0" />
                  <span>IA integrada con <strong className="text-text-dark dark:text-white">metodología ágil</strong></span>
                </div>
                <div className="flex items-center gap-2 text-sm text-text-dark-muted dark:text-text-muted">
                  <Zap size={14} className="text-primary flex-shrink-0" />
                  <span>Soporte <strong className="text-text-dark dark:text-white">post-entrega incluido</strong></span>
                </div>
                <div className="flex items-center gap-2 text-sm text-text-dark-muted dark:text-text-muted">
                  <Zap size={14} className="text-primary flex-shrink-0" />
                  <span>Entregas más rápidas, <strong className="text-text-dark dark:text-white">calidad garantizada</strong></span>
                </div>
              </div>
            </Reveal>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="relative hidden lg:block"
          >
            <div className="relative grid grid-cols-2 gap-4">
              <div className="space-y-4 pt-12">

                {/* Card 1: Sprint Board */}
                <motion.div
                  whileHover={{ y: -5 }}
                  className="h-64 bg-surface-light dark:bg-surface-dark border border-accent-light dark:border-accent-dark rounded-lg p-5 shadow-2xl backdrop-blur-sm"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-1.5">
                      <div className="w-2.5 h-2.5 rounded-full bg-red-400"></div>
                      <div className="w-2.5 h-2.5 rounded-full bg-yellow-400"></div>
                      <div className="w-2.5 h-2.5 rounded-full bg-green-400"></div>
                    </div>
                    <span className="text-[10px] font-mono text-gray-500">Sprint 4 · Semana 2</span>
                  </div>
                  <div className="space-y-2.5">
                    {[
                      { text: 'Arquitectura del sistema', done: true },
                      { text: 'Auth & API Gateway', done: true },
                      { text: 'Módulo IA integrado', done: true },
                      { text: 'Deploy a producción', done: false, active: true },
                    ].map((task, i) => (
                      <div key={i} className="flex items-center gap-2.5">
                        <div className={`w-4 h-4 rounded flex items-center justify-center flex-shrink-0 ${
                          task.done ? 'bg-primary' : task.active ? 'border-2 border-primary animate-pulse' : 'border border-accent-light dark:border-accent-dark'
                        }`}>
                          {task.done && <span className="text-white text-[8px] font-bold">✓</span>}
                        </div>
                        <span className={`text-xs flex-1 ${task.done ? 'line-through text-gray-400' : task.active ? 'text-text-dark dark:text-white font-medium' : 'text-text-dark-muted dark:text-text-muted'}`}>
                          {task.text}
                        </span>
                        {task.active && <span className="text-[9px] font-bold text-primary uppercase tracking-wide bg-primary/10 px-1.5 py-0.5 rounded">Live</span>}
                      </div>
                    ))}
                  </div>
                  <div className="mt-4 pt-3 border-t border-accent-light dark:border-accent-dark flex items-center justify-between">
                    <span className="text-[10px] text-gray-500">Progreso del sprint</span>
                    <div className="flex gap-1">
                      {[...Array(5)].map((_, i) => (
                        <div key={i} className={`w-5 h-1.5 rounded-full ${i < 4 ? 'bg-primary' : 'bg-accent-light dark:bg-accent-dark'}`} />
                      ))}
                    </div>
                  </div>
                </motion.div>

                {/* Card 2: Velocity metric */}
                <motion.div
                  whileHover={{ y: -5 }}
                  className="h-40 bg-surface-light dark:bg-surface-dark border border-accent-light dark:border-accent-dark rounded-lg p-5 shadow-lg flex flex-col justify-between"
                >
                  <span className="text-[10px] font-bold uppercase tracking-widest text-gray-500">Velocidad de Entrega</span>
                  <div className="flex items-end gap-3">
                    <span className="text-5xl font-display font-bold text-text-dark dark:text-white leading-none">3x</span>
                    <span className="text-xs text-primary mb-1 font-medium leading-tight">vs. agencia<br/>tradicional</span>
                  </div>
                  <div className="flex gap-1">
                    <div className="flex-1 h-1.5 bg-accent-light dark:bg-accent-dark rounded-full"></div>
                    <div className="flex-1 h-1.5 bg-primary/30 rounded-full"></div>
                    <div className="flex-1 h-1.5 bg-primary/60 rounded-full"></div>
                    <div className="flex-1 h-1.5 bg-primary rounded-full"></div>
                  </div>
                </motion.div>
              </div>

              <div className="space-y-4">
                {/* Card 3: Active project status */}
                <motion.div
                  whileHover={{ y: -5 }}
                  className="h-48 bg-surface-light dark:bg-surface-dark border border-accent-light dark:border-accent-dark rounded-lg p-5 shadow-lg flex flex-col justify-between"
                >
                  <div className="flex items-start justify-between">
                    <div>
                      <div className="text-[10px] font-bold uppercase tracking-widest text-gray-500 mb-1">Proyecto Activo</div>
                      <div className="font-bold text-sm text-text-dark dark:text-white">FinTech Dashboard</div>
                    </div>
                    <span className="text-[9px] font-bold bg-emerald-500/15 text-emerald-500 px-2 py-1 rounded-full border border-emerald-500/20">On Track</span>
                  </div>
                  <div>
                    <div className="flex justify-between text-[10px] text-gray-500 mb-1.5">
                      <span>Avance</span><span>78%</span>
                    </div>
                    <div className="w-full h-1.5 bg-accent-light dark:bg-accent-dark rounded-full overflow-hidden">
                      <div className="h-full w-[78%] bg-primary rounded-full"></div>
                    </div>
                    <div className="flex items-center gap-1.5 mt-3">
                      <Code2 size={12} className="text-primary flex-shrink-0" />
                      <span className="text-[11px] text-gray-500">Deploy estimado: esta semana</span>
                    </div>
                  </div>
                </motion.div>

                {/* Card 4: AI-powered terminal */}
                <motion.div
                  whileHover={{ y: -5 }}
                  className="h-56 bg-surface-light dark:bg-surface-dark border border-accent-light dark:border-accent-dark rounded-lg p-5 shadow-xl relative overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/5 to-transparent pointer-events-none"></div>
                  <div className="flex items-center gap-1.5 mb-4">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-400"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-yellow-400"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-green-400"></div>
                    <span className="ml-2 text-[10px] font-mono text-gray-500">kaizen-deploy</span>
                  </div>
                  <div className="relative z-10 font-mono text-xs leading-6">
                    <div><span className="text-gray-500">$</span> <span className="text-primary/80">kaizen deploy --env=prod</span></div>
                    <div><span className="text-yellow-400/80">→</span> <span className="text-gray-400">IA Code Review...</span><span className="text-emerald-500"> ✓</span></div>
                    <div><span className="text-yellow-400/80">→</span> <span className="text-gray-400">Tests: 52/52</span><span className="text-emerald-500"> ✓</span></div>
                    <div><span className="text-yellow-400/80">→</span> <span className="text-gray-400">Build optimizado</span><span className="text-emerald-500"> ✓</span></div>
                    <div><span className="text-yellow-400/80">→</span> <span className="text-gray-400">Desplegando...</span></div>
                    <div className="mt-1"><span className="text-emerald-400 font-semibold">✔ En producción (1.8s)</span></div>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
      
      {/* Grid Lines */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent-light dark:via-accent-dark to-transparent"></div>
      <div className="absolute top-0 right-1/4 w-px h-full bg-gradient-to-b from-transparent via-accent-light dark:via-accent-dark to-transparent opacity-30"></div>
    </header>
  );
};