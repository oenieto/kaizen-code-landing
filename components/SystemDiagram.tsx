import React from 'react';

/**
 * Reference architecture we start most products from, drawn as a C4-style
 * container view. Built with HTML rather than SVG so labels stay legible at
 * phone widths instead of scaling down with a viewBox.
 */

const Node: React.FC<{ title: string; meta: string; tone?: 'default' | 'core' }> = ({ title, meta, tone = 'default' }) => (
  <div
    className={`rounded-md border px-3 py-2.5 ${
      tone === 'core' ? 'border-accent/60 bg-accent-soft' : 'border-line-strong bg-canvas'
    }`}
  >
    <div className="text-[13px] font-medium leading-tight text-fg">{title}</div>
    <div className="mt-1 font-mono text-[10.5px] leading-tight text-faint">{meta}</div>
  </div>
);

const Edge: React.FC<{ label: string }> = ({ label }) => (
  <div className="relative flex h-9 items-center justify-center" aria-hidden="true">
    <span className="absolute inset-y-0 left-1/2 w-px -translate-x-1/2 bg-line-strong" />
    <span className="diagram-pulse absolute left-1/2 top-0 h-2 w-px -translate-x-1/2 bg-accent" />
    <span className="relative bg-surface px-2 font-mono text-[10.5px] text-faint">{label}</span>
  </div>
);

export const SystemDiagram: React.FC = () => (
  <figure className="rounded-xl border border-line bg-surface shadow-[0_1px_0_0_var(--line),0_24px_48px_-24px_rgb(0_0_0/0.25)]">
    <div className="flex items-center justify-between border-b border-line px-4 py-3">
      <span className="font-mono text-[11px] text-muted">arquitectura-de-referencia.c4</span>
      <span className="font-mono text-[11px] text-faint">nivel 2 · contenedores</span>
    </div>

    <div className="p-4 sm:p-5">
      <div className="grid grid-cols-3 gap-2">
        <Node title="Web" meta="Next.js" />
        <Node title="Móvil" meta="React Native" />
        <Node title="Terceros" meta="webhooks" />
      </div>
      <Edge label="HTTPS · OIDC" />
      <Node title="Edge" meta="CDN · WAF · rate limiting" />
      <Edge label="REST · OpenAPI" />
      <Node title="API de dominio" meta="TypeScript · validación de esquemas · RBAC" tone="core" />
      <Edge label="SQL · eventos" />
      <div className="grid grid-cols-3 gap-2">
        <Node title="PostgreSQL" meta="RLS · PITR" />
        <Node title="Workers" meta="cola · reintentos" />
        <Node title="LLM gateway" meta="evals · límites" />
      </div>
    </div>

    <figcaption className="grid grid-cols-3 border-t border-line text-center">
      {[
        ['SLO', '99.9%'],
        ['p95', '< 300 ms'],
        ['RPO', '15 min'],
      ].map(([k, v]) => (
        <div key={k} className="border-line px-2 py-3 not-last:border-r">
          <div className="font-mono text-[10.5px] uppercase tracking-wider text-faint">{k} objetivo</div>
          <div className="mt-0.5 font-mono text-sm text-fg">{v}</div>
        </div>
      ))}
    </figcaption>
  </figure>
);
