import React from 'react';
import { standards } from '../data/site';
import { Section } from './Section';
import { Reveal } from './Reveal';

/** Trimmed version of the pipeline every project starts with. */
const PIPELINE = `# .github/workflows/ci.yml
name: ci
on: [pull_request]

jobs:
  verify:
    runs-on: ubuntu-latest
    services:
      postgres:
        image: postgres:17
    steps:
      - uses: actions/checkout@v4
      - run: pnpm install --frozen-lockfile
      - run: pnpm lint && pnpm typecheck
      - run: pnpm test --coverage
      - run: pnpm db:migrate --dry-run
      - run: pnpm audit --audit-level=high

  preview:
    needs: verify
    steps:
      - run: pnpm deploy --env=preview-\${{ github.event.number }}
      - run: pnpm e2e --base-url=$PREVIEW_URL
      - run: pnpm lhci autorun   # presupuesto de Web Vitals`;

const YamlLine: React.FC<{ line: string }> = ({ line }) => {
  if (line.trimStart().startsWith('#')) return <span className="text-faint">{line}</span>;
  const [, indent, dash, key, rest] = line.match(/^(\s*)(- )?([\w.-]+:)?(.*)$/) ?? [];
  const [value, comment] = (rest ?? '').split(/(?=\s+#\s)/);
  return (
    <>
      {indent}
      {dash && <span className="text-faint">{dash}</span>}
      {key && <span className="text-accent">{key}</span>}
      <span className="text-fg">{value}</span>
      {comment && <span className="text-faint">{comment}</span>}
    </>
  );
};

export const Engineering: React.FC = () => (
  <Section
    id="engineering"
    index="03"
    label="Ingeniería"
    title="Los estándares no son opcionales."
    intro="Esto es lo que recibe cualquier proyecto, sin importar su tamaño. Es la diferencia entre un sistema que se puede mantener y uno que hay que reescribir en un año."
  >
    <div className="grid gap-10 lg:grid-cols-[1.25fr_1fr] lg:gap-14">
      <ol className="grid min-w-0 gap-px overflow-hidden rounded-xl border border-line bg-line sm:grid-cols-2">
        {standards.map((s, i) => (
          <li key={s.title} className="bg-surface p-5 sm:p-6">
            <Reveal delay={i * 0.03}>
              <span className="font-mono text-[11px] text-faint">{String(i + 1).padStart(2, '0')}</span>
              <h3 className="mt-2 text-[15px] font-semibold tracking-tight">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{s.body}</p>
              <p className="mt-3 font-mono text-[11px] text-faint">{s.tools}</p>
            </Reveal>
          </li>
        ))}
      </ol>

      {/* min-w-0 lets the <pre> scroll inside the column instead of widening the page. */}
      <Reveal className="min-w-0 lg:sticky lg:top-24 lg:self-start">
        <figure className="overflow-hidden rounded-xl border border-line bg-surface">
          <div className="flex items-center justify-between border-b border-line px-4 py-3">
            <span className="font-mono text-[11px] text-muted">ci.yml</span>
            <span className="hidden font-mono text-[11px] text-faint sm:inline">se ejecuta en cada pull request</span>
          </div>
          <pre className="overflow-x-auto p-4 font-mono text-[12px] leading-[1.7] sm:p-5" tabIndex={0} aria-label="Ejemplo de pipeline de integración continua">
            <code>
              {PIPELINE.split('\n').map((line, i) => (
                <React.Fragment key={i}>
                  <YamlLine line={line} />
                  {'\n'}
                </React.Fragment>
              ))}
            </code>
          </pre>
          <figcaption className="border-t border-line px-4 py-3 text-xs leading-relaxed text-muted">
            Nada llega a <span className="font-mono text-fg">main</span> sin pasar tipos, pruebas, migraciones, auditoría
            de dependencias y pruebas E2E sobre un entorno real.
          </figcaption>
        </figure>
      </Reveal>
    </div>
  </Section>
);
