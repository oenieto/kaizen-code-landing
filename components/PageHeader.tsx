import React from 'react';

interface Props {
  label: string;
  title: React.ReactNode;
  intro?: React.ReactNode;
}

/** Ink header block shared by secondary pages, matching the home hero. */
export const PageHeader: React.FC<Props> = ({ label, title, intro }) => (
  <header className="bg-ink text-white">
    <div className="container-page pt-36 pb-16 sm:pt-44 sm:pb-24">
      <p className="text-sm text-white/60">{label}</p>
      <h1 className="display-1 mt-5 max-w-[18ch] text-balance">{title}</h1>
      {intro && <p className="mt-8 max-w-xl text-[15px] leading-[1.75] text-white/80 sm:text-base">{intro}</p>}
    </div>
  </header>
);
