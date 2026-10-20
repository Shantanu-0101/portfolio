import type { ReactNode } from "react";

export function Section({ id, title, children }: { id: string; title: string; children: ReactNode }) {
  return (
    <section id={id} className="mb-16 scroll-mt-24 sm:mb-20">
      <h2 className="mb-4 text-xl font-bold sm:mb-6 sm:text-2xl">{title}</h2>
      {children}
    </section>
  );
}
