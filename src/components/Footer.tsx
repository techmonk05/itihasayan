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
          <a href={IG_URL} target="_blank" rel="noreferrer noopener" className="hover:text-saffron transition">
            Instagram
          </a>
        </nav>
      </div>
    </footer>
  );
}
