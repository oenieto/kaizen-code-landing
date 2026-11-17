import React from 'react';
import { Link } from 'react-router-dom';

export const NotFoundPage: React.FC = () => (
  <section className="container-page flex min-h-[70vh] flex-col items-start justify-center pt-24">
    <p className="eyebrow">Error 404</p>
    <h1 className="mt-3 text-4xl font-semibold tracking-tight">Esta ruta no existe.</h1>
    <p className="mt-3 max-w-md text-muted">Puede que el enlace esté roto o que la página se haya movido.</p>
    <Link to="/" className="btn-primary mt-8">
      Volver al inicio
    </Link>
  </section>
);
