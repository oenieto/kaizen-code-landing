import React from 'react';
import { Reveal } from '../components/Reveal';

export const BlogPage: React.FC = () => {
  // Placeholder blog posts
  const posts = [
    {
      id: 1,
      title: '[Título del artículo 1]',
      excerpt: '[Breve descripción o extracto del artículo...]',
      category: 'Tecnología',
      date: '15 Ene 2024',
      readTime: '5 min',
    },
    {
      id: 2,
      title: '[Título del artículo 2]',
      excerpt: '[Breve descripción o extracto del artículo...]',
      category: 'Diseño',
      date: '10 Ene 2024',
      readTime: '7 min',
    },
    {
      id: 3,
      title: '[Título del artículo 3]',
      excerpt: '[Breve descripción o extracto del artículo...]',
      category: 'Desarrollo',
      date: '5 Ene 2024',
      readTime: '4 min',
    },
    {
      id: 4,
      title: '[Título del artículo 4]',
      excerpt: '[Breve descripción o extracto del artículo...]',
      category: 'Negocios',
      date: '1 Ene 2024',
      readTime: '6 min',
    },
    {
      id: 5,
      title: '[Título del artículo 5]',
      excerpt: '[Breve descripción o extracto del artículo...]',
      category: 'Tecnología',
      date: '28 Dic 2023',
      readTime: '8 min',
    },
    {
      id: 6,
      title: '[Título del artículo 6]',
      excerpt: '[Breve descripción o extracto del artículo...]',
      category: 'Diseño',
      date: '20 Dic 2023',
      readTime: '5 min',
    },
  ];

  const categories = ['Todos', 'Tecnología', 'Diseño', 'Desarrollo', 'Negocios'];

  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="py-20 bg-bg-light dark:bg-bg-dark">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <Reveal>
            <h1 className="font-display text-5xl md:text-6xl font-bold mb-6 text-text-dark dark:text-white text-center">
              Blog
            </h1>
            <p className="text-xl text-text-dark-muted dark:text-text-muted max-w-3xl mx-auto text-center">
              [Descripción del blog: insights, tutoriales, noticias, etc.]
            </p>
          </Reveal>
        </div>
      </section>

      {/* Categorías */}
      <section className="py-8 bg-surface-light dark:bg-surface-dark border-y border-accent-light dark:border-accent-dark">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <Reveal>
            <div className="flex flex-wrap gap-3 justify-center">
              {categories.map((category, idx) => (
                <button
                  key={idx}
                  className="px-4 py-2 rounded-full bg-bg-light dark:bg-bg-dark border border-accent-light dark:border-accent-dark hover:border-primary text-text-dark dark:text-white transition-colors"
                >
                  {category}
                </button>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Grid de Artículos */}
      <section className="py-20 bg-bg-light dark:bg-bg-dark">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post, idx) => (
              <Reveal key={post.id} delay={idx * 0.1}>
                <article className="bg-surface-light dark:bg-surface-dark rounded-lg border border-accent-light dark:border-accent-dark overflow-hidden hover:border-primary transition-colors group cursor-pointer">
                  {/* Imagen placeholder */}
                  <div className="w-full h-48 bg-accent-light dark:bg-accent-dark flex items-center justify-center">
                    <span className="text-text-dark-muted dark:text-text-muted text-sm">
                      [Imagen del artículo]
                    </span>
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-3 text-sm">
                      <span className="text-primary font-medium">{post.category}</span>
                      <span className="text-text-dark-muted dark:text-text-muted">•</span>
                      <span className="text-text-dark-muted dark:text-text-muted">{post.date}</span>
                      <span className="text-text-dark-muted dark:text-text-muted">•</span>
                      <span className="text-text-dark-muted dark:text-text-muted">{post.readTime}</span>
                    </div>
                    
                    <h3 className="font-bold text-xl mb-3 text-text-dark dark:text-white group-hover:text-primary transition-colors">
                      {post.title}
                    </h3>
                    
                    <p className="text-text-dark-muted dark:text-text-muted text-sm line-clamp-3">
                      {post.excerpt}
                    </p>
                    
                    <div className="mt-4">
                      <span className="text-primary text-sm font-medium group-hover:underline">
                        Leer más →
                      </span>
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>

          {/* Paginación */}
          <Reveal delay={0.3}>
            <div className="flex justify-center gap-2 mt-12">
              <button className="px-4 py-2 rounded bg-primary text-white">1</button>
              <button className="px-4 py-2 rounded bg-surface-light dark:bg-surface-dark border border-accent-light dark:border-accent-dark text-text-dark dark:text-white hover:border-primary transition-colors">
                2
              </button>
              <button className="px-4 py-2 rounded bg-surface-light dark:bg-surface-dark border border-accent-light dark:border-accent-dark text-text-dark dark:text-white hover:border-primary transition-colors">
                3
              </button>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
};
