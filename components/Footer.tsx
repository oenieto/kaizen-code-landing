import React from 'react';
import { Link } from 'react-router-dom';
import { Code2, Github, Linkedin } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-surface-light dark:bg-surface-dark border-t border-accent-light dark:border-accent-dark pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <Code2 className="text-text-dark dark:text-white w-6 h-6" />
              <span className="font-display font-bold text-lg tracking-tight text-text-dark dark:text-white uppercase">
                Kaizen Code
              </span>
            </div>
            <p className="text-sm text-text-dark-muted dark:text-gray-400">
              Código artesanal para la era digital moderna.
            </p>
          </div>

          <div>
            <h4 className="font-bold text-text-dark dark:text-white mb-4 text-sm uppercase tracking-wider">Empresa</h4>
            <ul className="space-y-2 text-sm text-text-dark-muted dark:text-gray-400">
              <li><Link to="/about" className="hover:text-primary transition-colors">Sobre Nosotros</Link></li>
              <li><Link to="/careers" className="hover:text-primary transition-colors">Carreras</Link></li>
              <li><Link to="/blog" className="hover:text-primary transition-colors">Blog</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-text-dark dark:text-white mb-4 text-sm uppercase tracking-wider">Legal</h4>
            <ul className="space-y-2 text-sm text-text-dark-muted dark:text-gray-400">
              <li><Link to="/privacy" className="hover:text-primary transition-colors">Privacidad</Link></li>
              <li><Link to="/terms" className="hover:text-primary transition-colors">Términos</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-text-dark dark:text-white mb-4 text-sm uppercase tracking-wider">Social</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-text-dark-muted dark:text-gray-500 hover:text-primary transition-colors">
                <span className="sr-only">GitHub</span>
                <Github size={24} />
              </a>
              <a href="#" className="text-text-dark-muted dark:text-gray-500 hover:text-primary transition-colors">
                <span className="sr-only">LinkedIn</span>
                <Linkedin size={24} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-accent-light dark:border-accent-dark pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-text-dark-muted dark:text-gray-500">
          <p>© 2023 Kaizen Code. Todos los derechos reservados.</p>
          <div className="flex items-center gap-2 mt-2 md:mt-0">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            <span>All Systems Operational</span>
          </div>
        </div>
      </div>
    </footer>
  );
};