import { Link } from "@tanstack/react-router";
import { IG_URL } from "../lib/content";

export function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-6 py-12 text-center sm:flex-row sm:justify-between sm:text-left">
        <p className="font-display text-lg italic text-ivory">
          Itihasayan <span className="text-gold">✦</span>{" "}
          <span className="text-ivory/60">Stories that shaped Bharat</span>
        </p>
        <nav className="flex flex-wrap items-center justify-center gap-5 text-sm text-ivory/70">
          <Link to="/" className="hover:text-saffron transition">
            Home
          </Link>
          <span className="text-gold/40">·</span>
          <Link to="/epics" className="hover:text-saffron transition">
            Epics
          </Link>
          <span className="text-gold/40">·</span>
          <Link to="/wisdom" className="hover:text-saffron transition">
            Wisdom
          </Link>
          <span className="text-gold/40">·</span>
          <a
            href={IG_URL}
            target="_blank"
            rel="noreferrer noopener"
            className="inline-flex items-center gap-1.5 hover:text-saffron transition"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
              <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
            </svg>
            Instagram
          </a>
        </nav>
      </div>
    </footer>
  );
}
