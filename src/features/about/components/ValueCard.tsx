import type { ReactNode } from "react";

interface ValueCardProps {
  readonly title: string;
  readonly children: ReactNode;
}

export default function ValueCard({ title, children }: ValueCardProps) {
  return (
    <article className="flex flex-col items-center rounded-2xl border border-white/10 bg-white p-6 text-center shadow-lg transition-all duration-300 hover:scale-102 hover:shadow-xl md:p-8">
      {/* Title in brand accent gold color */}
      <h3 className="mb-4 font-sans text-lg font-bold text-brand-accent-gold-dark sm:text-xl">
        {title}
      </h3>
      {/* Body text centered, muted gray */}
      <p className="font-sans text-sm font-normal leading-relaxed text-neutral-600 md:text-base">
        {children}
      </p>
    </article>
  );
}
