import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "../components/Nav";
import { Footer } from "../components/Footer";
import { SectionHeading, EpicCard } from "../components/shared";
import { supabase, type DbEpic } from "../lib/supabase";
import { patternComponents } from "../components/patterns";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "../components/ui/dialog";

export const Route = createFileRoute("/epics")({
  loader: async (): Promise<DbEpic[]> => {
    const { data, error } = await supabase
      .from("epics")
      .select("*")
      .order("created_at");
    if (error) throw error;
    return data ?? [];
  },
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
  const epics = Route.useLoaderData();
  const [selected, setSelected] = useState<DbEpic | null>(null);

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
              <EpicCard
                key={epic.slug}
                epic={epic}
                delayMs={i * 100}
                onClick={() => setSelected(epic)}
              />
            ))}
          </div>
        </div>
      </main>
      <Footer />

      <Dialog open={!!selected} onOpenChange={(open) => !open && setSelected(null)}>
        <DialogContent className="max-w-2xl border-0 bg-transparent p-0 shadow-none max-h-[90vh] overflow-hidden">
          {selected && <EpicStoryContent epic={selected} />}
        </DialogContent>
      </Dialog>
    </div>
  );
}

function EpicStoryContent({ epic }: { epic: DbEpic }) {
  const Pattern = patternComponents[epic.pattern];
  return (
    <div className="relative flex max-h-[90vh] flex-col overflow-hidden rounded-2xl border border-gold/20 bg-[oklch(0.18_0.028_40)] shadow-[0_40px_120px_-20px_oklch(0_0_0/0.9)]">
      {/* Decorative pattern */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden rounded-2xl opacity-40">
        <Pattern />
      </div>

      {/* Gold top line */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-gold" />

      {/* Header */}
      <div className="relative shrink-0 px-8 pb-6 pt-10 sm:px-12">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-xs uppercase tracking-[0.4em] text-gold/70">{epic.tag}</p>
            <DialogTitle className="mt-2 font-display text-4xl italic leading-tight text-ivory sm:text-5xl">
              {epic.name}
            </DialogTitle>
          </div>
          <span className="shrink-0 text-5xl">{epic.icon}</span>
        </div>

        {/* Teaser */}
        <DialogDescription className="mt-5 text-sm leading-relaxed text-ivory/60 border-l-2 border-gold/30 pl-4 italic">
          {epic.body}
        </DialogDescription>
      </div>

      {/* Divider */}
      <div className="relative shrink-0 mx-8 sm:mx-12">
        <div className="h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-[oklch(0.18_0.028_40)] px-3">
          <div className="h-1.5 w-1.5 rounded-full bg-gold/50" />
        </div>
      </div>

      {/* Scrollable story body */}
      <div className="relative min-h-0 flex-1 overflow-y-auto px-8 pb-10 pt-6 sm:px-12
                      [scrollbar-width:thin] [scrollbar-color:oklch(0.74_0.13_80/0.3)_transparent]">
        {epic.full_story ? (
          <div className="space-y-4">
            {epic.full_story.split("\n\n").filter(Boolean).map((para, i) => (
              <p key={i} className="font-display text-lg italic leading-relaxed text-ivory/85">
                {para}
              </p>
            ))}
          </div>
        ) : (
          <p className="font-display text-lg italic text-ivory/25">Full story coming soon…</p>
        )}
      </div>
    </div>
  );
}
