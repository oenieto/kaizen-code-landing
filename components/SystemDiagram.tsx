import React from 'react';

/**
 * Reference architecture most products start from, drawn as a C4 container view.
 * Flows left→right on large screens and top→bottom on small ones. HTML instead of
 * SVG so labels stay legible at phone widths.
 */

const Node: React.FC<{ title: string; meta: string; core?: boolean }> = ({ title, meta, core }) => (
  <div className={`rounded-md border px-3 py-2.5 ${core ? 'border-accent/60 bg-accent-soft' : 'border-line-strong bg-canvas'}`}>
    <div className="text-[13px] leading-tight font-medium text-fg">{title}</div>
    <div className="mt-1 font-mono text-[10.5px] leading-tight text-faint">{meta}</div>
  </div>
);

const Column: React.FC<{ label: string; children: React.ReactNode }> = ({ label, children }) => (
  <div className="flex flex-col gap-2 lg:justify-center">
    <span className="font-mono text-[10.5px] uppercase tracking-[0.14em] text-faint">{label}</span>
    {children}
  </div>
);

/** Connector: vertical behind the label on mobile; on lg, label above a line ending in an arrowhead. */
const Edge: React.FC<{ label: string }> = ({ label }) => (
  <div
    className="relative flex items-center justify-center py-3 lg:min-w-28 lg:flex-col lg:gap-2 lg:px-2 lg:py-0"
    aria-hidden="true"
  >
    <span className="absolute inset-y-0 left-1/2 w-px -translate-x-1/2 bg-line-strong lg:hidden" />
    <span className="relative bg-surface px-2 font-mono text-[10.5px] whitespace-nowrap text-faint lg:px-0">{label}</span>
    <span className="relative hidden h-px w-full bg-line-strong lg:block">
      <span className="absolute -top-[3px] right-0 border-y-[3.5px] border-l-[6px] border-y-transparent border-l-line-strong" />
    </span>
  </div>
);

export const SystemDiagram: React.FC = () => (
  <figure className="rounded-xl border border-line bg-surface">
    <div className="flex items-center justify-between border-b border-line px-4 py-3 sm:px-6">
      <span className="font-mono text-[11px] text-muted">arquitectura-de-referencia.c4</span>
      <span className="hidden font-mono text-[11px] text-faint sm:inline">nivel 2 · contenedores</span>
    </div>

    <div className="grid p-4 sm:p-6 lg:grid-cols-[1fr_auto_1fr_auto_1.2fr_auto_1fr] lg:items-stretch">
      <Column label="Clientes">
        <Node title="Web" meta="Next.js" />
        <Node title="Móvil" meta="React Native" />
        <Node title="Terceros" meta="webhooks" />
      </Column>
      <Edge label="HTTPS · OIDC" />
      <Column label="Perímetro">
        <Node title="Edge" meta="CDN · WAF · límites" />
      </Column>
      <Edge label="REST · OpenAPI" />
      <Column label="Dominio">
        <Node title="API de dominio" meta="TypeScript · RBAC · auditoría" core />
      </Column>
      <Edge label="SQL · eventos" />
      <Column label="Datos y servicios">
        <Node title="PostgreSQL" meta="RLS · PITR" />
        <Node title="Workers" meta="cola · reintentos" />
        <Node title="LLM gateway" meta="evals · límites" />
      </Column>
    </div>

    <figcaption className="grid border-t border-line sm:grid-cols-[1fr_auto]">
      <p className="px-4 py-3 text-xs leading-relaxed text-muted sm:px-6">
        Todo emite trazas, métricas y logs con <span className="font-mono text-fg">OpenTelemetry</span>. Las alertas se
        disparan por objetivo de servicio, no por intuición.
      </p>
      <dl className="grid grid-cols-3 border-t border-line sm:border-t-0 sm:border-l">
        {[
          ['SLO', '99.9%'],
          ['p95', '< 300 ms'],
          ['RPO', '15 min'],
        ].map(([k, v]) => (
          <div key={k} className="px-4 py-3 text-center not-last:border-r not-last:border-line sm:px-5">
            <dt className="font-mono text-[10px] uppercase tracking-wider text-faint">{k} objetivo</dt>
            <dd className="mt-0.5 font-mono text-sm text-fg">{v}</dd>
          </div>
        ))}
      </dl>
    </figcaption>
  </figure>
);
