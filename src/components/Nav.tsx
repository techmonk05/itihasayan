import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { IG_URL } from "../lib/content";

const navLinks = [
  { to: "/about" as const, label: "About" },
  { to: "/epics" as const, label: "Epics" },
  { to: "/wisdom" as const, label: "Wisdom" },
];

export function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 h-20 border-b border-gold/10 bg-background/80 backdrop-blur-md sm:h-24">
      <div className="flex h-full w-full items-center justify-between gap-4 px-6 sm:px-10">
        <Link to="/" className="flex h-full shrink-0 items-center gap-2.5 py-3" onClick={() => setOpen(false)}>
          <img
            src="/logo1.png"
            alt="Itihasayan bow and arrow mark"
            className="h-42 w-auto object-contain"
          />
        </Link>

        {/* Desktop nav */}
        <div className="ml-auto hidden items-center gap-8 md:flex">
          <nav className="flex items-center gap-8 text-xs uppercase tracking-[0.2em] text-gold/80">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="inline-flex transition hover:text-saffron [&.active]:text-saffron"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <a
            href={IG_URL}
            target="_blank"
            rel="noreferrer noopener"
            className="inline-flex shrink-0 items-center gap-2 text-xs uppercase tracking-[0.2em] text-gold/80 transition hover:text-saffron"
          >
            Follow
          </a>
        </div>

        {/* Mobile hamburger toggle */}
        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="ml-auto flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-gold/30 text-ivory transition hover:border-gold md:hidden"
        >
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
            {open ? (
              <path d="M2 2L16 16M16 2L2 16" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
            ) : (
              <>
                <line x1="1" y1="4.5" x2="17" y2="4.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
                <line x1="1" y1="9" x2="17" y2="9" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
                <line x1="1" y1="13.5" x2="17" y2="13.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
              </>
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu panel */}
      {open && (
        <div className="border-t border-gold/10 bg-background/95 backdrop-blur-md md:hidden">
          <nav className="flex flex-col items-center gap-1 px-6 py-4 text-sm uppercase tracking-[0.2em] text-gold/80">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                onClick={() => setOpen(false)}
                className="w-full rounded-lg px-4 py-3 text-center transition hover:bg-gold/10 hover:text-saffron [&.active]:text-saffron"
              >
                {link.label}
              </Link>
            ))}
            <a
              href={IG_URL}
              target="_blank"
              rel="noreferrer noopener"
              className="w-full rounded-lg px-4 py-3 text-center transition hover:bg-gold/10 hover:text-saffron"
            >
              Follow
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}