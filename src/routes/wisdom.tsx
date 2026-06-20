import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "../components/Nav";
import { Footer } from "../components/Footer";
import { SectionHeading } from "../components/shared";
import { wisdomSayings } from "../lib/content";

export const Route = createFileRoute("/wisdom")({
  head: () => ({
    meta: [
      { title: "Wisdom — Itihasayan" },
      {
        name: "description",
        content: "Verses and sayings from the Mahabharata, the Bhagavad Gita, and the wisdom of Bharat.",
      },
    ],
  }),
  component: WisdomPage,
});

function WisdomPage() {
  return (
    <div className="min-h-screen bg-background">
      <Nav />
      <main className="pb-28 pt-36 sm:pt-44">
        <div className="mx-auto max-w-6xl px-6">
          <SectionHeading
            eyebrow="Wisdom verses"
            title={
              <>
                They said it thousands of years ago.{" "}
                <span className="text-saffron not-italic italic">Still hits.</span>
              </>
            }
          />

          <div className="mt-16 grid gap-6 md:grid-cols-3">
            {wisdomSayings.map((q, i) => (
              <figure
                key={q.id}
                className="group relative overflow-hidden rounded-2xl border border-gold/20 bg-card shadow-card transition hover:-translate-y-1 hover:border-gold/50"
                style={{ transitionDelay: `${i * 90}ms` }}
              >
                <blockquote
                  className="relative p-8"
                  style={{
                    background:
                      "linear-gradient(180deg, color-mix(in oklab, var(--parchment) 92%, transparent), color-mix(in oklab, var(--parchment) 78%, transparent))",
                    color: "oklch(0.22 0.04 35)",
                  }}
                >
                  <span className="absolute left-3 top-1 font-display text-7xl italic leading-none text-saffron/40">
                    &ldquo;
                  </span>
                  <p className="relative font-display text-xl italic leading-snug">{q.text}</p>
                </blockquote>
                <figcaption className="flex items-center gap-3 border-t border-gold/30 bg-card px-6 py-4 text-xs uppercase tracking-[0.3em] text-saffron">
                  <span className="h-px w-6 bg-saffron" />
                  {q.source}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}