import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef } from "react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "itisahayan — Stories that shaped Bharat" },
      {
        name: "description",
        content:
          "Epics, mythology and ancient wisdom of Bharat. Ramayana, Mahabharata and the legends history class never told you.",
      },
      { property: "og:title", content: "itisahayan — Stories that shaped Bharat" },
      {
        property: "og:description",
        content: "5,000 years of stories. One thread at a time.",
      },
    ],
  }),
  component: Home,
});

const IG_URL = "https://www.instagram.com/itisahayan";

function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll<HTMLElement>(".reveal");
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12 },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}

function Mandala({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 600 600"
      className={className}
      aria-hidden="true"
    >
      <g fill="none" stroke="currentColor" strokeWidth="0.6">
        {Array.from({ length: 24 }).map((_, i) => (
          <g key={i} transform={`rotate(${(i * 360) / 24} 300 300)`}>
            <path d="M300 60 C 340 200, 340 400, 300 540" />
          </g>
        ))}
        <circle cx="300" cy="300" r="260" />
        <circle cx="300" cy="300" r="200" />
        <circle cx="300" cy="300" r="140" />
        <circle cx="300" cy="300" r="80" />
        {Array.from({ length: 12 }).map((_, i) => (
          <g key={`p${i}`} transform={`rotate(${(i * 360) / 12} 300 300)`}>
            <path d="M300 140 Q 330 220 300 300 Q 270 220 300 140 Z" />
          </g>
        ))}
      </g>
    </svg>
  );
}

function Particles() {
  const particles = Array.from({ length: 28 });
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {particles.map((_, i) => {
        const size = 2 + Math.random() * 4;
        const left = Math.random() * 100;
        const duration = 14 + Math.random() * 22;
        const delay = Math.random() * -30;
        const opacity = 0.4 + Math.random() * 0.5;
        return (
          <span
            key={i}
            className="absolute rounded-full animate-float-up"
            style={{
              left: `${left}%`,
              bottom: `-10px`,
              width: size,
              height: size,
              background: "var(--gold)",
              boxShadow: "0 0 8px var(--saffron)",
              opacity,
              animationDuration: `${duration}s`,
              animationDelay: `${delay}s`,
            }}
          />
        );
      })}
    </div>
  );
}

function PillTag({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-gold/5 px-4 py-1.5 text-sm text-ivory/90 backdrop-blur-sm transition hover:border-gold hover:bg-gold/10">
      {children}
    </span>
  );
}

function SectionHeading({
  eyebrow,
  title,
  className = "",
}: {
  eyebrow?: string;
  title: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={`reveal text-center ${className}`}>
      {eyebrow && (
        <p className="mb-4 text-xs uppercase tracking-[0.35em] text-gold/80">
          {eyebrow}
        </p>
      )}
      <h2 className="font-display text-4xl italic leading-tight text-ivory sm:text-5xl md:text-6xl">
        {title}
      </h2>
    </div>
  );
}

function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-hero">
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <Mandala className="h-[140vmin] w-[140vmin] text-gold/[0.07] animate-rotate-slow" />
      </div>
      <Particles />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-background" />

      <div className="relative mx-auto flex min-h-screen max-w-6xl flex-col items-center justify-center px-6 py-24 text-center">
        <p className="reveal mb-6 text-xs uppercase tracking-[0.4em] text-gold/90 sm:text-sm">
          📜 Epics · Mythology · Ancient Wisdom · Bharat
        </p>

        <h1 className="reveal font-display text-[clamp(3.5rem,12vw,9rem)] italic leading-[0.95] tracking-tight">
          <span className="text-ivory">itis</span>
          <span className="text-gradient-gold">ahayan</span>
        </h1>

        <p className="reveal mt-8 max-w-2xl text-balance text-lg text-ivory/80 sm:text-xl">
          The Mahabharata has <span className="text-saffron font-medium">1.8 million words</span>.
          Most people know ten lines. <span className="text-gold italic font-display text-2xl">Let's fix that.</span>
        </p>

        <div className="reveal mt-10 flex flex-wrap items-center justify-center gap-3">
          <PillTag>🏹 Ramayana</PillTag>
          <PillTag>⚔️ Mahabharata</PillTag>
          <PillTag>🪔 Legends</PillTag>
        </div>

        <a
          href={IG_URL}
          target="_blank"
          rel="noreferrer noopener"
          className="reveal group mt-12 inline-flex items-center gap-3 rounded-full bg-gradient-gold px-8 py-4 text-base font-semibold text-primary-foreground shadow-glow transition hover:scale-[1.03] hover:shadow-[0_0_60px_-8px_var(--saffron)] animate-glow-pulse"
        >
          Follow on Instagram
          <span className="transition group-hover:translate-x-1">→</span>
        </a>

        <p className="reveal mt-6 text-xs text-ivory/40">
          5,000 years of stories. One thread at a time.
        </p>
      </div>
    </section>
  );
}

const hookCards = [
  {
    icon: "🔥",
    stat: "10×",
    title: "Longer than Homer.",
    body: "The Mahabharata is ten times the length of the Iliad and the Odyssey combined. And here's the twist — it isn't really about the war.",
  },
  {
    icon: "🌊",
    stat: "Ram Setu",
    title: "The bridge may be real.",
    body: "NASA satellite imagery has captured a 48-km chain of shoals between India and Sri Lanka — exactly where the Ramayana said Ram built his bridge.",
  },
  {
    icon: "🧠",
    stat: "18 chapters",
    title: "A war paused for philosophy.",
    body: "The Bhagavad Gita was spoken on a battlefield, in 18 chapters, in under an hour. It went on to shape Gandhi, Oppenheimer and Thoreau.",
  },
];

function Hook() {
  return (
    <section className="relative py-28 sm:py-36">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="Did you know?"
          title={<>History class <span className="text-saffron not-italic">never</span> told you this.</>}
        />

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {hookCards.map((c, i) => (
            <article
              key={c.title}
              className="reveal group relative overflow-hidden rounded-2xl border border-border bg-card p-8 shadow-card transition duration-500 hover:-translate-y-2 hover:border-saffron/60 hover:shadow-glow"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-gold opacity-70" />
              <div className="text-3xl">{c.icon}</div>
              <div className="mt-6 font-display text-5xl italic text-gradient-gold">
                {c.stat}
              </div>
              <h3 className="mt-3 font-display text-2xl italic text-ivory">
                {c.title}
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-ivory/70">{c.body}</p>
              <p className="mt-6 text-xs uppercase tracking-[0.25em] text-saffron/90 transition group-hover:text-saffron">
                → Discover more
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function LotusPattern() {
  return (
    <svg viewBox="0 0 200 200" className="absolute -right-10 -top-10 h-56 w-56 text-saffron/10" aria-hidden="true">
      <g fill="none" stroke="currentColor" strokeWidth="1">
        {Array.from({ length: 8 }).map((_, i) => (
          <ellipse key={i} cx="100" cy="100" rx="30" ry="80" transform={`rotate(${i * 45} 100 100)`} />
        ))}
        <circle cx="100" cy="100" r="14" />
      </g>
    </svg>
  );
}

function ChakraPattern() {
  return (
    <svg viewBox="0 0 200 200" className="absolute -right-10 -top-10 h-56 w-56 text-saffron/10 animate-rotate-slow" aria-hidden="true">
      <g fill="none" stroke="currentColor" strokeWidth="1">
        <circle cx="100" cy="100" r="80" />
        <circle cx="100" cy="100" r="20" />
        {Array.from({ length: 24 }).map((_, i) => (
          <line key={i} x1="100" y1="20" x2="100" y2="180" transform={`rotate(${i * 15} 100 100)`} />
        ))}
      </g>
    </svg>
  );
}

function FlamePattern() {
  return (
    <svg viewBox="0 0 200 200" className="absolute -right-10 -top-10 h-56 w-56 text-saffron/10" aria-hidden="true">
      <g fill="none" stroke="currentColor" strokeWidth="1">
        {Array.from({ length: 6 }).map((_, i) => (
          <path
            key={i}
            d="M100 30 Q 130 90 100 170 Q 70 90 100 30 Z"
            transform={`rotate(${i * 60} 100 100) scale(${1 - i * 0.12})`}
            style={{ transformOrigin: "100px 100px" }}
          />
        ))}
      </g>
    </svg>
  );
}

const pillars = [
  {
    icon: "🏹",
    name: "Ramayana",
    tag: "The epic of devotion",
    body: "A prince, an exile, a demon king, and the most devoted love story ever written. Seven kandas. Twenty-four thousand verses. One question: what does dharma cost?",
    Pattern: LotusPattern,
  },
  {
    icon: "⚔️",
    name: "Mahabharata",
    tag: "The epic of war",
    body: "Five brothers. A kingdom. A war where everyone loses something. And a god who drove a chariot — and changed how we think about action itself.",
    Pattern: ChakraPattern,
  },
  {
    icon: "🪔",
    name: "Legends of Bharat",
    tag: "The forgotten ones",
    body: "Before the epics, there were the stories. Queens who rewrote fate. Sages who bent rivers. Heroes erased from textbooks. We're bringing them back.",
    Pattern: FlamePattern,
  },
];

function Pillars() {
  return (
    <section className="relative py-28 sm:py-36">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="What we explore"
          title={<>Three worlds. <span className="text-gradient-gold not-italic">Infinite</span> stories.</>}
        />

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {pillars.map((p, i) => (
            <article
              key={p.name}
              className="reveal group relative overflow-hidden rounded-3xl border border-border bg-card p-8 shadow-card transition duration-500 hover:-translate-y-2 hover:border-gold/60 hover:shadow-glow"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <p.Pattern />
              <div className="relative">
                <div className="text-4xl">{p.icon}</div>
                <p className="mt-6 text-xs uppercase tracking-[0.3em] text-gold/80">{p.tag}</p>
                <h3 className="mt-2 font-display text-4xl italic text-ivory">{p.name}</h3>
                <p className="mt-6 text-base leading-relaxed text-ivory/75">{p.body}</p>
              </div>
              <div className="pointer-events-none absolute inset-0 rounded-3xl ring-1 ring-inset ring-transparent transition group-hover:ring-saffron/30" />
            </article>
          ))}
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
    <section className="relative py-28 sm:py-36">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading eyebrow="For everyone" title={<>Who is this <span className="text-saffron not-italic">for?</span></>} />

        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {audience.map((a, i) => (
            <div
              key={a.title}
              className="reveal group rounded-2xl border border-border bg-card/60 p-7 transition hover:-translate-y-1 hover:border-saffron/50 hover:bg-card"
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

const quotes = [
  {
    text: "You have the right to act. Never to the fruits of your action.",
    source: "Bhagavad Gita · 2.47",
  },
  {
    text: "A man is made by his beliefs. As he believes, so he becomes.",
    source: "Bhagavad Gita · 17.3",
  },
  {
    text: "The greatest gift you can give someone is your own personal development.",
    source: "Chanakya",
  },
];

function Wisdom() {
  return (
    <section className="relative py-28 sm:py-36">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="Wisdom verses"
          title={<>They said it thousands of years ago. <span className="text-saffron not-italic italic">Still hits.</span></>}
        />

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {quotes.map((q, i) => (
            <figure
              key={q.source}
              className="reveal group relative overflow-hidden rounded-2xl border border-gold/20 bg-card shadow-card transition hover:-translate-y-1 hover:border-gold/50"
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
                <p className="relative font-display text-xl italic leading-snug">
                  {q.text}
                </p>
              </blockquote>
              <figcaption className="flex items-center gap-3 border-t border-gold/30 bg-card px-6 py-4 text-xs uppercase tracking-[0.3em] text-saffron">
                <span className="h-px w-6 bg-saffron" />
                {q.source}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

function InstaCTA() {
  return (
    <section className="relative overflow-hidden py-32 sm:py-40">
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
        <p className="reveal text-xs uppercase tracking-[0.4em] text-gold/80">Join the journey</p>
        <h2 className="reveal mt-5 font-display text-4xl italic leading-tight text-ivory sm:text-6xl">
          Every day, <span className="text-gradient-gold">one story</span> from 5,000 years of Bharat.
        </h2>
        <p className="reveal mx-auto mt-7 max-w-xl text-lg text-ivory/75">
          No lectures. No jargon. Just the stories that shaped a civilisation —
          told the way they deserve to be.
        </p>

        <div className="reveal mt-10 flex flex-wrap items-center justify-center gap-4">
          <a
            href={IG_URL}
            target="_blank"
            rel="noreferrer noopener"
            className="inline-flex items-center gap-2 rounded-full bg-gradient-gold px-8 py-4 text-base font-semibold text-primary-foreground shadow-glow transition hover:scale-[1.03]"
          >
            Follow @itisahayan
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

function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-6 py-12 text-center sm:flex-row sm:justify-between sm:text-left">
        <p className="font-display text-lg italic text-ivory">
          itisahayan <span className="text-gold">✦</span>{" "}
          <span className="text-ivory/60">Stories that shaped Bharat</span>
        </p>
        <nav className="flex flex-wrap items-center justify-center gap-5 text-sm text-ivory/70">
          <a href="#hook" className="hover:text-saffron transition">About</a>
          <span className="text-gold/40">·</span>
          <a href="#pillars" className="hover:text-saffron transition">Epics</a>
          <span className="text-gold/40">·</span>
          <a href="#wisdom" className="hover:text-saffron transition">Wisdom</a>
          <span className="text-gold/40">·</span>
          <a href={IG_URL} target="_blank" rel="noreferrer noopener" className="hover:text-saffron transition">
            Instagram
          </a>
        </nav>
      </div>
    </footer>
  );
}

function Home() {
  useReveal();
  const ref = useRef<HTMLDivElement>(null);
  return (
    <div ref={ref} className="min-h-screen bg-background">
      <main>
        <Hero />
        <div id="hook"><Hook /></div>
        <div id="pillars"><Pillars /></div>
        <Audience />
        <div id="wisdom"><Wisdom /></div>
        <InstaCTA />
      </main>
      <Footer />
    </div>
  );
}
