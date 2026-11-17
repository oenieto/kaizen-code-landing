import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

/** Closing call to action for pages that don't have the contact form. */
export const CtaBand: React.FC<{ title: string }> = ({ title }) => (
  <section className="border-t border-line py-24 sm:py-32">
    <div className="container-page flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
      <h2 className="display-2 max-w-[16ch] text-balance">{title}</h2>
      <Link to="/#contact" className="btn-primary group shrink-0">
        Escríbenos
        <ArrowRight size={16} className="transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
      </Link>
    </div>
  </section>
);
