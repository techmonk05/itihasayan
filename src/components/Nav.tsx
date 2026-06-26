import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { IG_URL } from "../lib/content";

const NAV_LINKS = [
  { to: "/" as const, label: "Home" },
  { to: "/about" as const, label: "About" },
  { to: "/epics" as const, label: "Epics" },
  { to: "/wisdom" as const, label: "Wisdom" },
];

export function Nav() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 h-20 border-b border-gold/10 bg-background/80 backdrop-blur-md sm:h-24">
        <div className="flex h-full w-full items-center justify-between gap-4 px-6 sm:px-2">
          <Link to="/" className="flex shrink-0 items-center gap-2.5">
            <img
              src="/logofull1.png"
              alt="Itihasayan bow and arrow mark"
              className="mt-6 h-auto w-48 -ml-5 object-contain sm:mt-4 sm:ml-0 sm:h-64 sm:w-64"
            />
          </Link>

          <div className="ml-auto flex items-center gap-8">
            <nav className="hidden items-center gap-8 text-xs uppercase tracking-[0.2em] text-gold/80 md:flex">
              {NAV_LINKS.map(({ to, label }) => (
                <Link key={to} to={to} className="inline-flex transition hover:text-saffron [&.active]:text-saffron">
                  {label}
                </Link>
              ))}
            </nav>

            <a
              href={IG_URL}
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex shrink-0 items-center gap-2 text-xs uppercase tracking-[0.2em] text-gold/80 transition hover:text-saffron sm:text-xs"
            >
              Follow
            </a>

            <button
              onClick={() => setMobileOpen(true)}
              aria-label="Open menu"
              className="flex items-center justify-center text-gold/80 transition hover:text-saffron md:hidden"
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile slide-out menu */}
      {mobileOpen && (
        <div className="fixed inset-0 z-60 md:hidden">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-background/60 backdrop-blur-sm"
            onClick={() => setMobileOpen(false)}
          />
          {/* Panel */}
          <div className="absolute right-0 top-0 flex h-full w-72 flex-col bg-background border-l border-gold/10 px-8 pt-8 pb-12">
            <button
              onClick={() => setMobileOpen(false)}
              aria-label="Close menu"
              className="self-end text-gold/80 transition hover:text-saffron"
            >
              <X className="h-6 w-6" />
            </button>

            <nav className="mt-10 flex flex-col gap-8 text-xs uppercase tracking-[0.2em] text-gold/80">
              {NAV_LINKS.map(({ to, label }) => (
                <Link
                  key={to}
                  to={to}
                  onClick={() => setMobileOpen(false)}
                  className="inline-flex transition hover:text-saffron [&.active]:text-saffron"
                >
                  {label}
                </Link>
              ))}
              <a
                href={IG_URL}
                target="_blank"
                rel="noreferrer noopener"
                onClick={() => setMobileOpen(false)}
                className="inline-flex transition hover:text-saffron"
              >
                Follow on Instagram
              </a>
            </nav>
          </div>
        </div>
      )}
    </>
  );
}