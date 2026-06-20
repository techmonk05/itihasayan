// Central place for content that will later be replaced by Supabase queries.
// Keeping the shape consistent now means swapping the data source later
// (Pass 2) won't require touching any component that consumes it.

export const IG_URL = "https://www.instagram.com/itihasayan";

export type Epic = {
  slug: string;
  icon: string;
  name: string;
  tag: string;
  body: string;
  pattern: "lotus" | "chakra" | "flame";
};

export const epics: Epic[] = [
  {
    slug: "ramayana",
    icon: "🏹",
    name: "Ramayana",
    tag: "The epic of devotion",
    body: "A prince, an exile, a demon king, and the most devoted love story ever written. Seven kandas. Twenty-four thousand verses. One question: what does dharma cost?",
    pattern: "lotus",
  },
  {
    slug: "mahabharata",
    icon: "⚔️",
    name: "Mahabharata",
    tag: "The epic of war",
    body: "Five brothers. A kingdom. A war where everyone loses something. And a god who drove a chariot — and changed how we think about action itself.",
    pattern: "chakra",
  },
  {
    slug: "legends-of-bharat",
    icon: "🪔",
    name: "Legends of Bharat",
    tag: "The forgotten ones",
    body: "Before the epics, there were the stories. Queens who rewrote fate. Sages who bent rivers. Heroes erased from textbooks. We're bringing them back.",
    pattern: "flame",
  },
];

export type WisdomSaying = {
  id: string;
  text: string;
  source: string;
};

export const wisdomSayings: WisdomSaying[] = [
  {
    id: "adi-parva-1",
    text: "Whatever is here, may be found elsewhere. What is not here, does not exist anywhere.",
    source: "Mahabharata · Adi Parva (paraphrased)",
  },
  {
    id: "gita-2-47",
    text: "You have the right to act. Never to the fruits of your action.",
    source: "Bhagavad Gita · 2.47",
  },
  {
    id: "gita-17-3",
    text: "A man is made by his beliefs. As he believes, so he becomes.",
    source: "Bhagavad Gita · 17.3",
  },
];
