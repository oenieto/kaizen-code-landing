import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Project } from '../types';
import { Reveal } from './Reveal';

const projects: Project[] = [
  {
    id: 1,
    title: 'Plataforma Analytics Core',
    category: 'FinTech',
    description: 'Dashboard financiero en tiempo real procesando millones de transacciones.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCfzjvhNzwFsyXE097yz1ilNDcW880Q09vNYfhnUCBtqcx6nGrGSVxtAKMkSz8edCDyiX0gGPfc-suZvhWXtDdzxfz7XgZRRCiDQmfzwiQf5BPiRjZhoiewHqn3recg6y0HLLMiG_9oBDaSnIXilITHDa5vspPWSrzPPy_7lBZi-TzHCrHuex4WymxCdQHPEzRzOxfFUHp1hCnTmqZdFe3PU2tZyi_lfwjfa7yakZgW56RVcft4T2WSo7RMeDcmQJkZxF4MLqgVBiU',
    size: 'large'
  },
  {
    id: 2,
    title: 'Nexus API',
    category: 'E-Commerce',
    description: 'Integración headless para retail global.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAj5W6FCwlmF7IS0ajjLElLZnVmMLZJ18wWDzyBiGspSJ-F0BkebKo-m0w2KK1b5f7Sq6pALla8X22_1R_ftFdAO1PSFDEYzQeiaz4xmpOfrxh3Xdd5iJ0hkjjfP-9j3mY6vOojHJuRzrsTSgGUhaGjObyffRJXQUK3B5U3UhPNisqS0cGOXo7cckGcHWiTosVvTHeeg9DKZer4Tb1ddn3-ZjlTsBkU10bw1BC_CiGD2mmhrA8WVF1X9xgJwFAjtvm6QRK3VOu28ro',
    size: 'medium'
  },
  {
    id: 3,
    title: 'Flow Manager',
    category: 'SaaS',
    description: 'Automatización de flujos de trabajo.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDxoFAzP2-mAA2nP0Ke299fKW15VWXKMwWEnEGuOzaerBVekWhHXT3Hq9xD0k1N-zaKW1iz5U0oss-KVjy5ymcYTxQnYX5bIjD9ytdZfHID00ZhboWQ30OnoqHiAvodEajfQf-qBRRIhTZpDokwWLNCQ9Oh0ybSuhOU5kzLYUfPufn58IOl9D4_w32HXzhbokHWAh1iEC6sNsUuKSAy3xhU3SbBaZrfFEpCgtIuxY9Hn_E1lnCj_8nsJTSMNWBK3U-Mz8KQ3Sai3eg',
    size: 'small'
  },
  {
    id: 4,
    title: 'Zen Productivity',
    category: 'Mobile App',
    description: 'Suite de productividad minimalista.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCJpUM4zcTjIiNv0ZSM8G6DNRpuI1q64MdWdv5WAu2M3r9uo6nTqvXtab_930j8QC5Z0rLA04ubrLFA2hZd821A-__2RSxj0QhJxuWHNl96QjZOfapvuinX-VYTo8tML85rTrr8y1dpybUtIEUKz4Xa4CNclvvjcFIoa-Pea8r-_Pqo8_JJXfwPsr8jN8wlX4N-xFvPeMbktSV6jY_pudipNk3GHaWraYn1zSNSQ3pdZjnbSCwEyL84pA3czuuWWRN8ap2Q8Wkka1c',
    size: 'small'
  }
];

export const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-24 bg-surface-light dark:bg-surface-dark">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        <Reveal>
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
            <div>
              <h2 className="font-display text-3xl md:text-4xl font-bold mb-4 text-text-dark dark:text-white">
                Proyectos Destacados
              </h2>
              <p className="text-text-dark-muted dark:text-text-muted max-w-xl">
                Una selección de soluciones técnicas donde la funcionalidad se encuentra con el diseño.
              </p>
            </div>
            <div className="flex gap-2">
              <button className="w-10 h-10 border border-accent-light dark:border-accent-dark rounded flex items-center justify-center hover:bg-bg-light dark:hover:bg-bg-dark text-text-dark dark:text-white transition-colors">
                <ChevronLeft size={20} />
              </button>
              <button className="w-10 h-10 border border-accent-light dark:border-accent-dark rounded flex items-center justify-center hover:bg-bg-light dark:hover:bg-bg-dark text-text-dark dark:text-white transition-colors">
                <ChevronRight size={20} />
              </button>
            </div>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 auto-rows-[300px]">
          {projects.map((project, index) => {
            let colSpan = "md:col-span-6";
            let rowSpan = "row-span-1";
            
            if (project.size === 'large') {
                colSpan = "md:col-span-8";
                rowSpan = "row-span-2";
            } else if (project.size === 'medium') {
                colSpan = "md:col-span-4";
                rowSpan = "row-span-2";
            }

            return (
              <div 
                key={project.id} 
                className={`${colSpan} ${rowSpan} group relative overflow-hidden rounded bg-bg-light dark:bg-bg-dark border border-accent-light dark:border-accent-dark`}
              >
                <div 
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105" 
                  style={{ backgroundImage: `url('${project.image}')` }}
                >
                   <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-500"></div>
                </div>
                
                <div className="absolute bottom-0 left-0 w-full p-8 bg-gradient-to-t from-black/90 via-black/50 to-transparent">
                  <Reveal delay={0.2}>
                    <span className="text-primary text-xs font-bold tracking-widest uppercase mb-2 block">
                      {project.category}
                    </span>
                    <h3 className="text-2xl font-bold text-white mb-2">
                      {project.title}
                    </h3>
                    {project.size !== 'small' && (
                        <p className="text-gray-300 text-sm max-w-md hidden md:block">
                            {project.description}
                        </p>
                    )}
                  </Reveal>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};