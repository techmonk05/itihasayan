import { createFileRoute, Link } from "@tanstack/react-router";
import { Nav } from "../components/Nav";
import { Footer } from "../components/Footer";
import { Mandala } from "../components/Mandala";
import { IG_URL } from "../lib/content";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Itihasayan" },
      {
        name: "description",
        content: "Why Itihasayan exists, and the story behind India's greatest stories.",
      },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <Nav />
      <main className="relative overflow-hidden pb-28 pt-36 sm:pt-44">
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
          <Mandala className="h-[120vmin] w-[120vmin] text-gold/[0.06] animate-rotate-slow" />
        </div>

        <div className="relative mx-auto max-w-3xl px-6 text-center">
          <p className="text-xs uppercase tracking-[0.4em] text-gold/80">Our story</p>
          <h1 className="mt-5 font-display text-5xl italic leading-tight text-ivory sm:text-6xl">
            Why <span className="text-gradient-gold">Itihasayan</span> exists.
          </h1>

          <p className="mt-8 text-lg leading-relaxed text-ivory/80">
            India's epics carry five thousand years of stories — and most of us only know ten lines of
            them. Itihasayan exists to change that: one story, one verse, one forgotten legend at a
            time, told the way they deserve to be.
          </p>
          <p className="mt-6 text-lg leading-relaxed text-ivory/80">
            No lectures. No jargon. Just the Ramayana, the Mahabharata, and the countless lesser-known
            tales of Bharat — reimagined for a generation that grew up on reels, not recitations.
          </p>

          <div className="mt-12 flex flex-wrap items-center justify-center gap-4">
            <Link
              to="/epics"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-gold px-7 py-3 text-sm font-semibold text-primary-foreground shadow-glow transition hover:scale-[1.03]"
            >
              Explore the epics →
            </Link>
            <a
              href={IG_URL}
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex items-center gap-2 rounded-full border border-gold/50 px-7 py-3 text-sm font-semibold text-ivory transition hover:border-gold hover:bg-gold/10"
            >
              Follow on Instagram
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}