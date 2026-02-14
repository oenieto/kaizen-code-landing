import React from 'react';
import { ArrowRight, Terminal, Code2 } from 'lucide-react';
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
                  Consultoría & Desarrollo
                </span>
              </div>
            </Reveal>
            
            <Reveal delay={0.35}>
              <h1 className="font-display text-5xl lg:text-7xl font-bold leading-[1.1] tracking-tight mb-8 text-text-dark dark:text-white">
                Mejora Continua en cada <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-emerald-200">Línea de Código</span>.
              </h1>
            </Reveal>

            <Reveal delay={0.45}>
              <p className="text-lg text-text-dark-muted dark:text-text-muted mb-10 leading-relaxed max-w-lg">
                Fusionamos la estética minimalista con una arquitectura robusta. Creamos software escalable, mantenible y eficiente.
              </p>
            </Reveal>

            <Reveal delay={0.55}>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="#projects"
                  className="inline-flex justify-center items-center px-8 py-4 bg-primary text-white rounded font-medium hover:bg-primary-dark transition-all duration-300 group"
                >
                  Ver Portafolio
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
          </div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="relative hidden lg:block"
          >
            <div className="relative grid grid-cols-2 gap-4">
              <div className="space-y-4 pt-12">
                
                {/* Visual Card 1: Code Structure */}
                <motion.div 
                  whileHover={{ y: -5 }}
                  className="h-64 bg-surface-light dark:bg-surface-dark border border-accent-light dark:border-accent-dark rounded-lg p-6 shadow-2xl backdrop-blur-sm"
                >
                  <div className="flex items-center gap-2 mb-6">
                    <div className="w-3 h-3 rounded-full bg-red-400"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                    <div className="w-3 h-3 rounded-full bg-green-400"></div>
                  </div>
                  <div className="space-y-3">
                    <div className="h-2 w-3/4 bg-accent-light dark:bg-accent-dark rounded animate-pulse"></div>
                    <div className="h-2 w-1/2 bg-accent-light dark:bg-accent-dark rounded"></div>
                    <div className="h-2 w-full bg-accent-light dark:bg-accent-dark rounded opacity-50"></div>
                    <div className="h-2 w-5/6 bg-accent-light dark:bg-accent-dark rounded opacity-50"></div>
                  </div>
                  <div className="mt-8 flex gap-4">
                    <div className="w-10 h-10 rounded bg-primary/20 flex items-center justify-center text-primary">
                      <Code2 size={20} />
                    </div>
                    <div className="flex-1 space-y-2">
                      <div className="h-2 w-full bg-accent-light dark:bg-accent-dark rounded"></div>
                      <div className="h-2 w-2/3 bg-accent-light dark:bg-accent-dark rounded"></div>
                    </div>
                  </div>
                </motion.div>

                {/* Visual Card 2: Abstract Bar Chart */}
                <motion.div 
                  whileHover={{ y: -5 }}
                  className="h-40 bg-surface-light dark:bg-surface-dark border border-accent-light dark:border-accent-dark rounded-lg p-6 shadow-lg flex items-end justify-between px-8"
                >
                  <div className="w-4 bg-accent-light dark:bg-accent-dark h-1/3 rounded-t"></div>
                  <div className="w-4 bg-primary/40 h-2/3 rounded-t"></div>
                  <div className="w-4 bg-primary/60 h-1/2 rounded-t"></div>
                  <div className="w-4 bg-primary h-full rounded-t"></div>
                </motion.div>
              </div>

              <div className="space-y-4">
                {/* Visual Card 3: Cloud Icon */}
                <motion.div 
                   whileHover={{ y: -5 }}
                   className="h-48 bg-surface-light dark:bg-surface-dark border border-accent-light dark:border-accent-dark rounded-lg p-6 shadow-lg flex flex-col justify-center items-center text-center"
                >
                  <div className="w-12 h-12 rounded bg-primary text-white flex items-center justify-center mb-4 shadow-lg shadow-primary/20">
                    <Terminal size={24} />
                  </div>
                  <div className="h-2 w-20 bg-accent-light dark:bg-accent-dark rounded mb-2"></div>
                  <div className="h-2 w-12 bg-accent-light dark:bg-accent-dark rounded opacity-60"></div>
                </motion.div>

                {/* Visual Card 4: Terminal */}
                <motion.div 
                   whileHover={{ y: -5 }}
                   className="h-56 bg-surface-light dark:bg-surface-dark border border-accent-light dark:border-accent-dark rounded-lg p-6 shadow-xl relative overflow-hidden group"
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/5 to-transparent"></div>
                  <div className="relative z-10 font-mono text-xs text-primary/80 opacity-90 leading-relaxed">
                    <span className="text-gray-500">$</span> git commit -m "Optimize"<br/>
                    <span className="text-gray-500">$</span> git push origin main<br/>
                    <span className="text-yellow-500/80">...</span> Deploying...<br/>
                    <span className="text-emerald-500">✔ Success (1.2s)</span>
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