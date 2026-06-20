import type { ReactNode } from "react";
import { Link } from "@tanstack/react-router";
import type { DbEpic } from "../lib/supabase";
import { patternComponents } from "./patterns";

export function PillTag({
  children,
  href,
}: {
  children: ReactNode;
  href?: string;
}) {
  const classes =
    "inline-flex items-center gap-2 rounded-full border border-gold/40 bg-gold/5 px-4 py-1.5 text-sm text-ivory/90 backdrop-blur-sm transition hover:border-gold hover:bg-gold/10";

  if (href) {
    return (
      <Link to={href} className={classes}>
        {children}
      </Link>
    );
  }
  return <span className={classes}>{children}</span>;
}

export function SectionHeading({
  eyebrow,
  title,
  className = "",
}: {
  eyebrow?: string;
  title: ReactNode;
  className?: string;
}) {
  return (
    <div className={`text-center ${className}`}>
      {eyebrow && <p className="mb-4 text-xs uppercase tracking-[0.35em] text-gold/80">{eyebrow}</p>}
      <h2 className="font-display text-4xl italic leading-tight text-ivory sm:text-5xl md:text-6xl">{title}</h2>
    </div>
  );
}

export function EpicCard({
  epic,
  delayMs = 0,
  onClick,
}: {
  epic: DbEpic;
  delayMs?: number;
  onClick?: () => void;
}) {
  const Pattern = patternComponents[epic.pattern];
  return (
    <button
      onClick={onClick}
      className="group relative block w-full overflow-hidden rounded-3xl border border-border bg-card p-8 shadow-card transition duration-500 hover:-translate-y-2 hover:border-gold/60 hover:shadow-glow text-left"
      style={{ transitionDelay: `${delayMs}ms` }}
    >
      <Pattern />
      <div className="relative">
        <div className="text-4xl">{epic.icon}</div>
        <p className="mt-6 text-xs uppercase tracking-[0.3em] text-gold/80">{epic.tag}</p>
        <h3 className="mt-2 font-display text-4xl italic text-ivory">{epic.name}</h3>
        <p className="mt-6 text-base leading-relaxed text-ivory/75">{epic.body}</p>
        <p className="mt-6 text-xs uppercase tracking-[0.25em] text-saffron/90 transition group-hover:text-saffron">
          → Read more
        </p>
      </div>
      <div className="pointer-events-none absolute inset-0 rounded-3xl ring-1 ring-inset ring-transparent transition group-hover:ring-saffron/30" />
    </button>
  );
}
