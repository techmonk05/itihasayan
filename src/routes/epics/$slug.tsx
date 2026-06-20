import { createFileRoute, notFound, Link } from "@tanstack/react-router";
import { Nav } from "../../components/Nav";
import { Footer } from "../../components/Footer";
import { epics } from "../../lib/content";
import { patternComponents } from "../../components/patterns";

export const Route = createFileRoute("/epics/$slug")({
  loader: ({ params }) => {
    const epic = epics.find((e) => e.slug === params.slug);
    if (!epic) throw notFound();
    return epic;
  },
  head: ({ loaderData }) => ({
    meta: loaderData
      ? [
          { title: `${loaderData.name} — Itihasayan` },
          { name: "description", content: loaderData.body },
        ]
      : [],
  }),
  component: EpicDetailPage,
  notFoundComponent: () => (
    <div className="flex min-h-screen flex-col items-center justify-center gap-4 bg-background text-center text-ivory">
      <p className="font-display text-3xl italic">This story hasn't been told yet.</p>
      <Link to="/epics" className="text-saffron underline-offset-4 hover:underline">
        Back to Epics
      </Link>
    </div>
  ),
});

function EpicDetailPage() {
  const epic = Route.useLoaderData();
  const Pattern = patternComponents[epic.pattern];

  return (
    <div className="min-h-screen bg-background">
      <Nav />
      <main className="pb-28 pt-36 sm:pt-44">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <Link to="/epics" className="text-xs uppercase tracking-[0.3em] text-saffron/80 hover:text-saffron">
            ← All epics
          </Link>

          <div className="relative mt-8 overflow-hidden rounded-3xl border border-gold/20 bg-card p-10 sm:p-14">
            <Pattern />
            <div className="relative">
              <div className="text-5xl">{epic.icon}</div>
              <p className="mt-6 text-xs uppercase tracking-[0.3em] text-gold/80">{epic.tag}</p>
              <h1 className="mt-2 font-display text-5xl italic text-ivory sm:text-6xl">{epic.name}</h1>
              <p className="mt-8 text-lg leading-relaxed text-ivory/80">{epic.body}</p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}