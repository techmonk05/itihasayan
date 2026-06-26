import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { Nav } from "../components/Nav";
import { Footer } from "../components/Footer";
import { Mandala, Particles } from "../components/Mandala";
import { PillTag, SectionHeading } from "../components/shared";
import { IG_URL } from "../lib/content";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Itihasayan — Stories that shaped Bharat" },
      {
        name: "description",
        content:
          "Epics, mythology and ancient wisdom of Bharat. Ramayana, Mahabharata and the legends history class never told you.",
      },
      { property: "og:title", content: "Itihasayan — Stories that shaped Bharat" },
      { property: "og:description", content: "India's Greatest Story Begins." },
    ],
  }),
  component: Home,
});

function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-hero">
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <Mandala className="h-[140vmin] w-[140vmin] text-gold/[0.07] animate-rotate-slow" />
      </div>
      <Particles />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-background" />

      <div className="relative mx-auto flex min-h-screen max-w-6xl flex-col items-center justify-center px-6 pb-24 pt-24 text-center sm:pt-44">
        <p className="mb-6 text-xs uppercase tracking-[0.4em] text-gold/90 sm:text-sm">
          📜 Epics · Mythology · Ancient Wisdom · Bharat
        </p>

        <h1 className="font-display text-[clamp(3.5rem,12vw,9rem)] italic leading-[0.95] tracking-tight">
          <span className="text-ivory">Itiha</span>
          <span className="text-gradient-gold">sayan</span>
        </h1>

        <p className="mt-7 text-xs uppercase tracking-[0.35em] text-saffron/90 sm:text-sm">
          India's Greatest Story Begins
        </p>

        <p className="mt-8 max-w-2xl text-balance text-lg text-ivory/80 sm:text-xl">
          The Mahabharata has <span className="text-saffron font-medium">1.8 million words</span>. Most people
          know ten lines. <span className="text-gold italic font-display text-2xl">Let's fix that.</span>
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
          <PillTag href="/epics/ramayana">🏹 Ramayana</PillTag>
          <PillTag href="/epics/mahabharata">⚔️ Mahabharata</PillTag>
          <PillTag href="/epics/legends-of-bharat">🪔 Legends</PillTag>
        </div>

        <a
          href={IG_URL}
          target="_blank"
          rel="noreferrer noopener"
          className="group mt-12 inline-flex items-center gap-3 rounded-full bg-gradient-gold px-8 py-4 text-base font-semibold text-primary-foreground shadow-glow transition hover:scale-[1.03] hover:shadow-[0_0_60px_-8px_var(--saffron)] animate-glow-pulse"
        >
          Follow on Instagram
          <span className="transition group-hover:translate-x-1">→</span>
        </a>

        <p className="mt-6 text-xs text-ivory/40">5,000 years of stories. One thread at a time.</p>
      </div>
    </section>
  );
}

const hookCards = [
  {
    icon: "🐘",
    stat: "Not one hero",
    title: "This isn't one hero's story.",
    body: "Kings, mahouts, families, armies, gods and bystanders — the Mahabharata doesn't have a single protagonist. It has a civilisation's worth of them.",
  },
  {
    icon: "♟️",
    stat: "4 pieces",
    title: "Families. Choices. Power. Consequences.",
    body: "Strip away the chariots and the curses, and the Mahabharata is a chessboard — every move by one family rearranges the fate of every other.",
  },
  {
    icon: "📖",
    stat: "100,000+",
    title: "Verses it took to tell.",
    body: "India's story is so vast it took over 100,000 verses to tell — and most of it never made it into a single history textbook.",
  },
];

function Hook() {
  return (
    <section className="relative py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="Did you know?"
          title={
            <>
              History class <span className="text-saffron not-italic">never</span> told you this.
            </>
          }
        />

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {hookCards.map((c, i) => (
            <article
              key={c.title}
              className="group relative overflow-hidden rounded-2xl border border-border bg-card p-8 shadow-card transition duration-500 hover:-translate-y-2 hover:border-saffron/60 hover:shadow-glow"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-gold opacity-70" />
              <div className="text-3xl">{c.icon}</div>
              <div className="mt-6 font-display text-5xl italic text-gradient-gold">{c.stat}</div>
              <h3 className="mt-3 font-display text-2xl italic text-ivory">{c.title}</h3>
              <p className="mt-4 text-sm leading-relaxed text-ivory/70">{c.body}</p>
              <p className="mt-6 text-xs uppercase tracking-[0.25em] text-saffron/90 transition group-hover:text-saffron">
                → Discover more
              </p>
            </article>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            to="/epics"
            className="inline-flex items-center gap-2 rounded-full border border-gold/40 px-6 py-3 text-sm font-medium text-ivory transition hover:border-gold hover:bg-gold/10"
          >
            Explore all epics →
          </Link>
        </div>
      </div>
    </section>
  );
}

const audience = [
  { icon: "🧒", title: "Kids", body: "Stories more exciting than any cartoon. Promise." },
  { icon: "🎧", title: "Teenagers", body: "Reels can wait. These plots are wilder." },
  { icon: "📖", title: "Devotees", body: "Go deeper into the stories you already love." },
  { icon: "🌍", title: "The Curious", body: "You don't have to be Hindu to be fascinated." },
];

function Audience() {
  return (
    <section className="relative py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="For everyone"
          title={
            <>
              Who is this <span className="text-saffron not-italic">for?</span>
            </>
          }
        />

        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {audience.map((a, i) => (
            <div
              key={a.title}
              className="group rounded-2xl border border-border bg-card/60 p-7 transition hover:-translate-y-1 hover:border-saffron/50 hover:bg-card"
              style={{ transitionDelay: `${i * 70}ms` }}
            >
              <div className="text-4xl">{a.icon}</div>
              <h3 className="mt-5 font-display text-2xl italic text-ivory">{a.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ivory/70">{a.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function WisdomTeaser() {
  return (
    <section className="relative py-16 sm:py-24">
      <div className="mx-auto max-w-3xl px-6 text-center">
        <SectionHeading
          eyebrow="Wisdom verses"
          title={
            <>
              They said it thousands of years ago.{" "}
              <span className="text-saffron not-italic italic">Still hits.</span>
            </>
          }
        />
        <p className="mt-6 text-ivory/70">
          From the Mahabharata's deepest verses to the Bhagavad Gita's sharpest lines — explore the sayings
          that have outlived empires.
        </p>
        <Link
          to="/wisdom"
          className="mt-8 inline-flex items-center gap-2 rounded-full bg-gradient-gold px-7 py-3 text-sm font-semibold text-primary-foreground shadow-glow transition hover:scale-[1.03]"
        >
          Discover more sayings →
        </Link>
      </div>
    </section>
  );
}

const ONE_WORD_PLACEHOLDER = "e.g. Karma, Dharma, War...";

function OneWordPrompt() {
  const [word, setWord] = useState("");
  const [submitted, setSubmitted] = useState(false);

  return (
    <section className="relative py-16 sm:py-24">
      <div className="mx-auto max-w-2xl px-6 text-center">
        <p className="text-xs uppercase tracking-[0.35em] text-gold/80">A quick question</p>
        <h2 className="mt-5 font-display text-3xl italic leading-tight text-ivory sm:text-4xl">
          What do you already know about our epics?
        </h2>
        <p className="mt-4 text-sm uppercase tracking-[0.3em] text-saffron/90">One word</p>

        {!submitted ? (
          <form
            className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center"
            onSubmit={(e) => {
              e.preventDefault();
              if (word.trim()) setSubmitted(true);
            }}
          >
            <input
              value={word}
              onChange={(e) => setWord(e.target.value)}
              placeholder={ONE_WORD_PLACEHOLDER}
              className="w-full max-w-xs rounded-full border border-gold/40 bg-card px-6 py-3 text-center text-ivory placeholder:text-ivory/30 focus:border-gold focus:outline-none sm:max-w-sm"
              maxLength={30}
            />
            <button
              type="submit"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-gold px-7 py-3 text-sm font-semibold text-primary-foreground shadow-glow transition hover:scale-[1.03]"
            >
              Share it
            </button>
          </form>
        ) : (
          <div className="mt-8 rounded-2xl border border-gold/30 bg-card px-8 py-6">
            <p className="font-display text-2xl italic text-gradient-gold">"{word}"</p>
            <p className="mt-3 text-sm text-ivory/70">
              Thank you — tell us more in the comments on{" "}
              <a
                href={IG_URL}
                target="_blank"
                rel="noreferrer noopener"
                className="text-saffron underline-offset-2 hover:underline"
              >
                Instagram
              </a>
              .
            </p>
          </div>
        )}
      </div>
    </section>
  );
}

function InstaCTA() {
  return (
    <section className="relative overflow-hidden py-16 sm:py-24">
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <Mandala className="h-[120vmin] w-[120vmin] text-saffron/[0.06] animate-rotate-slow" />
      </div>
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at center, color-mix(in oklab, var(--saffron) 18%, transparent), transparent 60%)",
        }}
      />
      <div className="relative mx-auto max-w-3xl px-6 text-center">
        <p className="text-xs uppercase tracking-[0.4em] text-gold/80">Join the journey</p>
        <h2 className="mt-5 font-display text-4xl italic leading-tight text-ivory sm:text-6xl">
          Every day, <span className="text-gradient-gold">one story</span> from 5,000 years of Bharat.
        </h2>
        <p className="mx-auto mt-7 max-w-xl text-lg text-ivory/75">
          No lectures. No jargon. Just the stories that shaped a civilisation — told the way they deserve to
          be.
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <a
            href={IG_URL}
            target="_blank"
            rel="noreferrer noopener"
            className="inline-flex items-center gap-2 rounded-full bg-gradient-gold px-8 py-4 text-base font-semibold text-primary-foreground shadow-glow transition hover:scale-[1.03]"
          >
            Follow @itihasayan
          </a>
          <a
            href={IG_URL}
            target="_blank"
            rel="noreferrer noopener"
            className="inline-flex items-center gap-2 rounded-full border border-gold/50 px-8 py-4 text-base font-semibold text-ivory transition hover:border-gold hover:bg-gold/10"
          >
            See recent posts →
          </a>
        </div>
      </div>
    </section>
  );
}

function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Nav />
      <main>
        <Hero />
        <Hook />
        <Audience />
        <WisdomTeaser />
        <OneWordPrompt />
        <InstaCTA />
      </main>
      <Footer />
    </div>
  );
}