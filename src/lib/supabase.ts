import { createClient } from "@supabase/supabase-js";

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL as string;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY as string;

export const supabase = createClient(
  supabaseUrl ?? "https://placeholder.supabase.co",
  supabaseAnonKey ?? "placeholder"
);

export type DbEpic = {
  id: string;
  slug: string;
  icon: string;
  name: string;
  tag: string;
  body: string;
  full_story: string | null;
  pattern: "lotus" | "chakra" | "flame";
  created_at: string;
};

export type DbWisdomSaying = {
  id: string;
  text: string;
  source: string;
  created_at: string;
};
