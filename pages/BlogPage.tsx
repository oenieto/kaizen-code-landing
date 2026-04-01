import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Clock, Rss } from 'lucide-react';
import { Reveal } from '../components/Reveal';
import postsData from '../data/blog-posts.json';

interface Post {
  id: number;
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  featured: boolean;
  source?: string;
}

const posts: Post[] = postsData as Post[];
const categories = ['Todos', ...Array.from(new Set(posts.map(p => p.category)))];

const categoryColors: Record<string, string> = {
  'IA & Tecnología': 'text-violet-400 bg-violet-400/10 border-violet-400/20',
  'Desarrollo': 'text-blue-400 bg-blue-400/10 border-blue-400/20',
  'Cloud': 'text-sky-400 bg-sky-400/10 border-sky-400/20',
  'DevOps': 'text-orange-400 bg-orange-400/10 border-orange-400/20',
  'Metodología': 'text-primary bg-primary/10 border-primary/20',
  'Negocios': 'text-emerald-400 bg-emerald-400/10 border-emerald-400/20',
};

const CategoryBadge: React.FC<{ category: string }> = ({ category }) => (
  <span className={`inline-flex items-center px-2.5 py-0.5 rounded text-xs font-bold uppercase tracking-wide border ${categoryColors[category] ?? 'text-primary bg-primary/10 border-primary/20'}`}>
    {category}
  </span>
);

export const BlogPage: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('Todos');

  const featured = posts.find(p => p.featured);
  const filtered = posts
    .filter(p => !p.featured)
    .filter(p => activeCategory === 'Todos' || p.category === activeCategory);

  return (
    <div className="pt-24">

      {/* Header */}
      <section className="py-16 bg-bg-light dark:bg-bg-dark border-b border-accent-light dark:border-accent-dark">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <Reveal>
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <Rss size={16} className="text-primary" />
                  <span className="text-xs font-bold uppercase tracking-widest text-primary">
                    Actualizado semanalmente con IA
                  </span>
                </div>
                <h1 className="font-display text-4xl md:text-5xl font-bold mb-3 text-text-dark dark:text-white">
                  Blog
                </h1>
                <p className="text-text-dark-muted dark:text-text-muted max-w-xl">
                  Insights sobre desarrollo de software, inteligencia artificial y las tecnologías que usamos en cada proyecto.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Featured post */}
      {featured && (
        <section className="py-12 bg-surface-light dark:bg-surface-dark border-b border-accent-light dark:border-accent-dark">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <Reveal>
              <Link to={`/blog/${featured.slug}`} className="block">
                <article className="group cursor-pointer bg-bg-light dark:bg-bg-dark border border-accent-light dark:border-accent-dark rounded-lg p-8 md:p-10 hover:border-primary/40 transition-colors duration-300">
                  <div className="flex flex-wrap items-center gap-3 mb-5">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-primary border border-primary/30 bg-primary/5 px-2 py-0.5 rounded">
                      Destacado
                    </span>
                    <CategoryBadge category={featured.category} />
                    <span className="flex items-center gap-1 text-xs text-text-dark-muted dark:text-text-muted">
                      <Clock size={12} /> {featured.readTime}
                    </span>
                    <span className="text-xs text-text-dark-muted dark:text-text-muted">{featured.date}</span>
                  </div>
                  <h2 className="font-display text-2xl md:text-3xl font-bold text-text-dark dark:text-white mb-4 group-hover:text-primary transition-colors max-w-3xl">
                    {featured.title}
                  </h2>
                  <p className="text-text-dark-muted dark:text-text-muted leading-relaxed max-w-2xl mb-6">
                    {featured.excerpt}
                  </p>
                  <span className="inline-flex items-center gap-1.5 text-primary text-sm font-medium group-hover:gap-3 transition-all duration-200">
                    Leer artículo <ArrowRight size={16} />
                  </span>
                </article>
              </Link>
            </Reveal>
          </div>
        </section>
      )}

      {/* Filtros */}
      <section className="py-6 bg-bg-light dark:bg-bg-dark border-b border-accent-light dark:border-accent-dark sticky top-[72px] z-30 backdrop-blur-md bg-bg-light/90 dark:bg-bg-dark/90">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-wrap gap-2">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-1.5 rounded text-sm font-medium transition-colors duration-200 ${
                  activeCategory === cat
                    ? 'bg-primary text-white'
                    : 'border border-accent-light dark:border-accent-dark text-text-dark-muted dark:text-text-muted hover:border-primary/40 hover:text-primary'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Grid de artículos */}
      <section className="py-16 bg-bg-light dark:bg-bg-dark">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          {filtered.length === 0 ? (
            <div className="text-center py-20 text-text-dark-muted dark:text-text-muted">
              No hay artículos en esta categoría aún.
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filtered.map((post, idx) => (
                <Reveal key={post.id} delay={idx * 0.08}>
                  <Link to={`/blog/${post.slug}`} className="block h-full">
                    <article className="group bg-surface-light dark:bg-surface-dark border border-accent-light dark:border-accent-dark rounded-lg p-6 hover:border-primary/40 transition-colors duration-300 cursor-pointer h-full flex flex-col">
                      <div className="flex items-center gap-2 mb-4 flex-wrap">
                        <CategoryBadge category={post.category} />
                        <span className="flex items-center gap-1 text-xs text-text-dark-muted dark:text-text-muted ml-auto">
                          <Clock size={11} /> {post.readTime}
                        </span>
                      </div>
                      <h3 className="font-bold text-base text-text-dark dark:text-white group-hover:text-primary transition-colors mb-3 flex-1 leading-snug">
                        {post.title}
                      </h3>
                      <p className="text-text-dark-muted dark:text-text-muted text-sm leading-relaxed mb-5 line-clamp-3">
                        {post.excerpt}
                      </p>
                      <div className="flex items-center justify-between mt-auto">
                        <span className="text-xs text-text-dark-muted dark:text-gray-500">{post.date}</span>
                        <span className="text-primary text-xs font-medium flex items-center gap-1 group-hover:gap-2 transition-all duration-200">
                          Leer <ArrowRight size={12} />
                        </span>
                      </div>
                    </article>
                  </Link>
                </Reveal>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Banner de automatización */}
      <section className="py-14 bg-surface-light dark:bg-surface-dark border-t border-accent-light dark:border-accent-dark">
        <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center">
          <Reveal>
            <div className="flex items-center justify-center gap-2 mb-4">
              <Rss size={16} className="text-primary" />
              <span className="text-xs font-bold uppercase tracking-widest text-primary">Automatización con IA</span>
            </div>
            <h2 className="font-display text-2xl font-bold mb-3 text-text-dark dark:text-white">
              Este blog se actualiza solo, cada semana.
            </h2>
            <p className="text-text-dark-muted dark:text-text-muted text-sm max-w-lg mx-auto">
              Usamos GitHub Actions y Claude AI para curar y traducir los artículos tech más relevantes de la semana. Una demostración práctica de lo que construimos para nuestros clientes.
            </p>
          </Reveal>
        </div>
      </section>
    </div>
  );
};
