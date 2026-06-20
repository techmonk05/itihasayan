import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "../components/Nav";
import { Footer } from "../components/Footer";
import { SectionHeading, EpicCard } from "../components/shared";
import { epics } from "../lib/content";

export const Route = createFileRoute("/epics")({
  head: () => ({
    meta: [
      { title: "Epics — Itihasayan" },
      {
        name: "description",
        content: "Ramayana, Mahabharata and the legends of Bharat — explored one epic at a time.",
      },
    ],
  }),
  component: EpicsPage,
});

function EpicsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Nav />
      <main className="pb-28 pt-36 sm:pt-44">
        <div className="mx-auto max-w-6xl px-6">
          <SectionHeading
            eyebrow="The epics"
            title={
              <>
                Three worlds. <span className="text-gradient-gold not-italic">Infinite</span> stories.
              </>
            }
          />
          <div className="mt-16 grid gap-6 md:grid-cols-3">
            {epics.map((epic, i) => (
              <EpicCard key={epic.slug} epic={epic} delayMs={i * 100} />
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}