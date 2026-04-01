/**
 * Kaizen Code — Blog Auto-Update Script
 * ──────────────────────────────────────
 * Corre cada lunes vía GitHub Actions.
 * Fetch artículos tech → Claude AI los curada y resume en español → escribe data/blog-posts.json
 *
 * Variables de entorno requeridas (GitHub Secrets):
 *   NEWS_API_KEY  — newsapi.org (plan gratuito: 100 req/día)
 *   ANTHROPIC_API_KEY — console.anthropic.com
 */

import Anthropic from '@anthropic-ai/sdk';
import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const OUTPUT_PATH = path.join(__dirname, '../data/blog-posts.json');

const NEWS_API_KEY = process.env.NEWS_API_KEY;
const ANTHROPIC_API_KEY = process.env.ANTHROPIC_API_KEY;

if (!NEWS_API_KEY || !ANTHROPIC_API_KEY) {
  console.error('❌ Faltan variables de entorno: NEWS_API_KEY y/o ANTHROPIC_API_KEY');
  process.exit(1);
}

// ── 1. Fetch artículos desde NewsAPI ──────────────────────────────────────────
async function fetchArticles() {
  const queries = [
    'artificial intelligence software development',
    'React Next.js TypeScript 2025',
    'AWS cloud startup',
    'software engineering best practices',
  ];

  const query = queries[Math.floor(Math.random() * queries.length)];
  const url = `https://newsapi.org/v2/everything?q=${encodeURIComponent(query)}&language=en&sortBy=publishedAt&pageSize=20&apiKey=${NEWS_API_KEY}`;

  const res = await fetch(url);
  if (!res.ok) throw new Error(`NewsAPI error: ${res.status}`);
  const data = await res.json();
  return data.articles.filter(a => a.title && a.description && a.url);
}

// ── 2. Claude curada y traduce los artículos ──────────────────────────────────
async function curateWithClaude(articles) {
  const client = new Anthropic({ apiKey: ANTHROPIC_API_KEY });

  const articlesText = articles
    .slice(0, 15)
    .map((a, i) => `[${i + 1}] Título: ${a.title}\nDescripción: ${a.description}`)
    .join('\n\n');

  const response = await client.messages.create({
    model: 'claude-opus-4-6',
    max_tokens: 2000,
    messages: [
      {
        role: 'user',
        content: `Eres el editor de blog de Kaizen Code, una startup mexicana de desarrollo de software con IA.

Selecciona los 6 artículos más relevantes para nuestro público (desarrolladores y empresas mexicanas interesadas en tecnología, IA y software) de la siguiente lista y devuelve un JSON array con el siguiente formato para cada uno:

{
  "id": número,
  "title": "título adaptado al español, natural y atractivo",
  "excerpt": "resumen en español de 1-2 oraciones, útil y concreto (sin clickbait)",
  "category": "una de: IA & Tecnología | Desarrollo | Cloud | DevOps | Metodología | Negocios",
  "date": "fecha actual en formato: D MMM YYYY en español",
  "readTime": "N min",
  "featured": true solo para el primero, false para el resto,
  "source": "fuente original en inglés"
}

Devuelve SOLO el JSON array, sin explicaciones ni markdown.

Artículos disponibles:
${articlesText}`,
      },
    ],
  });

  const text = response.content[0].text.trim();
  return JSON.parse(text);
}

// ── 3. Main ───────────────────────────────────────────────────────────────────
async function main() {
  console.log('📰 Fetching artículos de NewsAPI...');
  const articles = await fetchArticles();
  console.log(`✅ ${articles.length} artículos obtenidos`);

  console.log('🤖 Curando con Claude AI...');
  const curated = await curateWithClaude(articles);
  console.log(`✅ ${curated.length} artículos seleccionados`);

  await fs.writeFile(OUTPUT_PATH, JSON.stringify(curated, null, 2), 'utf-8');
  console.log(`✅ blog-posts.json actualizado en ${OUTPUT_PATH}`);
}

main().catch(err => {
  console.error('❌ Error:', err.message);
  process.exit(1);
});
