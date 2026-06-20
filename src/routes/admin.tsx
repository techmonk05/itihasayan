import { createFileRoute } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import type { Session } from "@supabase/supabase-js";
import { supabase, type DbEpic, type DbWisdomSaying } from "../lib/supabase";

export const Route = createFileRoute("/admin")({
  head: () => ({ meta: [{ title: "Admin — Itihasayan" }] }),
  component: AdminPage,
});

// ─── Login ────────────────────────────────────────────────────────────────────

function LoginForm({ onLogin }: { onLogin: (s: Session) => void }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    setLoading(true);
    const { data, error } = await supabase.auth.signInWithPassword({ email, password });
    setLoading(false);
    if (error) { setError(error.message); return; }
    if (data.session) onLogin(data.session);
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="w-full max-w-sm rounded-xl border border-gold/20 bg-card p-8 shadow-card">
        <h1 className="font-display text-2xl italic text-ivory">Itihasayan Admin</h1>
        <p className="mt-1 text-sm text-ivory/50">Sign in to manage content</p>
        <form className="mt-6 flex flex-col gap-4" onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="rounded-lg border border-gold/30 bg-background px-4 py-2.5 text-sm text-ivory placeholder:text-ivory/30 focus:border-gold focus:outline-none"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="rounded-lg border border-gold/30 bg-background px-4 py-2.5 text-sm text-ivory placeholder:text-ivory/30 focus:border-gold focus:outline-none"
          />
          {error && <p className="text-xs text-red-400">{error}</p>}
          <button
            type="submit"
            disabled={loading}
            className="mt-1 rounded-lg bg-gradient-gold py-2.5 text-sm font-semibold text-primary-foreground transition hover:opacity-90 disabled:opacity-50"
          >
            {loading ? "Signing in…" : "Sign in"}
          </button>
        </form>
      </div>
    </div>
  );
}

// ─── Dashboard ────────────────────────────────────────────────────────────────

type Tab = "epics" | "wisdom";

function Dashboard({ onLogout }: { onLogout: () => void }) {
  const [tab, setTab] = useState<Tab>("epics");

  return (
    <div className="min-h-screen bg-background text-ivory">
      <header className="flex items-center justify-between border-b border-gold/10 px-6 py-4">
        <span className="font-display text-lg italic text-gold">Itihasayan Admin</span>
        <button
          onClick={onLogout}
          className="rounded-lg border border-gold/30 px-4 py-1.5 text-xs text-ivory/70 transition hover:border-gold hover:text-ivory"
        >
          Sign out
        </button>
      </header>

      <div className="mx-auto max-w-4xl px-6 py-8">
        <div className="flex gap-2 border-b border-gold/10 pb-0">
          {(["epics", "wisdom"] as Tab[]).map((t) => (
            <button
              key={t}
              onClick={() => setTab(t)}
              className={`px-4 py-2 text-sm font-medium capitalize transition ${
                tab === t
                  ? "border-b-2 border-gold text-gold"
                  : "text-ivory/50 hover:text-ivory"
              }`}
            >
              {t === "wisdom" ? "Wisdom Sayings" : "Epics"}
            </button>
          ))}
        </div>

        <div className="mt-8">
          {tab === "epics" ? <EpicsTab /> : <WisdomTab />}
        </div>
      </div>
    </div>
  );
}

// ─── Epics Tab ────────────────────────────────────────────────────────────────

const PATTERN_OPTIONS = ["lotus", "chakra", "flame"] as const;
const BLANK_EPIC = { slug: "", icon: "", name: "", tag: "", body: "", full_story: "", pattern: "lotus" as const };

function EpicsTab() {
  const [epics, setEpics] = useState<DbEpic[]>([]);
  const [editing, setEditing] = useState<Partial<DbEpic> | null>(null);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");

  async function load() {
    const { data } = await supabase.from("epics").select("*").order("created_at");
    setEpics(data ?? []);
  }

  useEffect(() => { load(); }, []);

  async function save() {
    if (!editing) return;
    setSaving(true); setError("");
    const { id, created_at, ...fields } = editing as DbEpic;
    const op = id
      ? supabase.from("epics").update(fields).eq("id", id)
      : supabase.from("epics").insert(fields);
    const { error } = await op;
    setSaving(false);
    if (error) { setError(error.message); return; }
    setEditing(null);
    load();
  }

  async function remove(id: string) {
    if (!confirm("Delete this epic?")) return;
    await supabase.from("epics").delete().eq("id", id);
    load();
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-sm font-medium uppercase tracking-widest text-ivory/50">
          {epics.length} epic{epics.length !== 1 ? "s" : ""}
        </h2>
        <button
          onClick={() => setEditing(BLANK_EPIC)}
          className="rounded-lg bg-gradient-gold px-4 py-1.5 text-xs font-semibold text-primary-foreground"
        >
          + Add epic
        </button>
      </div>

      <div className="space-y-3">
        {epics.map((e) => (
          <div key={e.id} className="flex items-center justify-between rounded-lg border border-gold/10 bg-card px-4 py-3">
            <div className="flex items-center gap-3">
              <span className="text-2xl">{e.icon}</span>
              <div>
                <p className="text-sm font-medium text-ivory">{e.name}</p>
                <p className="text-xs text-ivory/40">{e.slug} · {e.pattern}</p>
              </div>
            </div>
            <div className="flex gap-2">
              <button onClick={() => setEditing(e)} className="rounded px-3 py-1 text-xs text-gold hover:bg-gold/10">Edit</button>
              <button onClick={() => remove(e.id)} className="rounded px-3 py-1 text-xs text-red-400 hover:bg-red-400/10">Delete</button>
            </div>
          </div>
        ))}
      </div>

      {editing !== null && (
        <EpicForm
          value={editing}
          saving={saving}
          error={error}
          onChange={setEditing}
          onSave={save}
          onCancel={() => { setEditing(null); setError(""); }}
        />
      )}
    </div>
  );
}

function EpicForm({
  value, saving, error, onChange, onSave, onCancel,
}: {
  value: Partial<DbEpic>;
  saving: boolean;
  error: string;
  onChange: (v: Partial<DbEpic>) => void;
  onSave: () => void;
  onCancel: () => void;
}) {
  const set = (k: keyof DbEpic) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    onChange({ ...value, [k]: e.target.value });

  return (
    <div className="rounded-xl border border-gold/20 bg-card p-6">
      <h3 className="mb-4 text-sm font-semibold text-ivory">
        {value.id ? "Edit epic" : "New epic"}
      </h3>
      <div className="grid gap-3 sm:grid-cols-2">
        <Field label="Name"><input value={value.name ?? ""} onChange={set("name")} className={inputCls} /></Field>
        <Field label="Slug (URL)"><input value={value.slug ?? ""} onChange={set("slug")} className={inputCls} /></Field>
        <Field label="Icon (emoji)"><input value={value.icon ?? ""} onChange={set("icon")} className={inputCls} /></Field>
        <Field label="Tag line"><input value={value.tag ?? ""} onChange={set("tag")} className={inputCls} /></Field>
        <Field label="Pattern" className="sm:col-span-1">
          <select value={value.pattern ?? "lotus"} onChange={set("pattern")} className={inputCls}>
            {PATTERN_OPTIONS.map((p) => <option key={p} value={p}>{p}</option>)}
          </select>
        </Field>
        <Field label="Teaser (shown on card)" className="sm:col-span-2">
          <textarea rows={3} value={value.body ?? ""} onChange={set("body")} className={inputCls + " resize-none"} />
        </Field>
        <Field label="Full story (shown in popup)" className="sm:col-span-2">
          <textarea rows={8} value={value.full_story ?? ""} onChange={set("full_story")} className={inputCls + " resize-none"} placeholder="Write the full story here. Your client can read this when they click 'Read more'." />
        </Field>
      </div>
      {error && <p className="mt-3 text-xs text-red-400">{error}</p>}
      <div className="mt-4 flex gap-2">
        <button onClick={onSave} disabled={saving} className="rounded-lg bg-gradient-gold px-5 py-2 text-xs font-semibold text-primary-foreground disabled:opacity-50">
          {saving ? "Saving…" : "Save"}
        </button>
        <button onClick={onCancel} className="rounded-lg border border-gold/20 px-5 py-2 text-xs text-ivory/70 hover:text-ivory">
          Cancel
        </button>
      </div>
    </div>
  );
}

// ─── Wisdom Tab ───────────────────────────────────────────────────────────────

const BLANK_WISDOM = { text: "", source: "" };

function WisdomTab() {
  const [sayings, setSayings] = useState<DbWisdomSaying[]>([]);
  const [editing, setEditing] = useState<Partial<DbWisdomSaying> | null>(null);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");

  async function load() {
    const { data } = await supabase.from("wisdom_sayings").select("*").order("created_at");
    setSayings(data ?? []);
  }

  useEffect(() => { load(); }, []);

  async function save() {
    if (!editing) return;
    setSaving(true); setError("");
    const { id, created_at, ...fields } = editing as DbWisdomSaying;
    const op = id
      ? supabase.from("wisdom_sayings").update(fields).eq("id", id)
      : supabase.from("wisdom_sayings").insert(fields);
    const { error } = await op;
    setSaving(false);
    if (error) { setError(error.message); return; }
    setEditing(null);
    load();
  }

  async function remove(id: string) {
    if (!confirm("Delete this saying?")) return;
    await supabase.from("wisdom_sayings").delete().eq("id", id);
    load();
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-sm font-medium uppercase tracking-widest text-ivory/50">
          {sayings.length} saying{sayings.length !== 1 ? "s" : ""}
        </h2>
        <button
          onClick={() => setEditing(BLANK_WISDOM)}
          className="rounded-lg bg-gradient-gold px-4 py-1.5 text-xs font-semibold text-primary-foreground"
        >
          + Add saying
        </button>
      </div>

      <div className="space-y-3">
        {sayings.map((s) => (
          <div key={s.id} className="flex items-start justify-between rounded-lg border border-gold/10 bg-card px-4 py-3">
            <div className="mr-4">
              <p className="text-sm italic text-ivory">"{s.text}"</p>
              <p className="mt-1 text-xs text-ivory/40">{s.source}</p>
            </div>
            <div className="flex shrink-0 gap-2">
              <button onClick={() => setEditing(s)} className="rounded px-3 py-1 text-xs text-gold hover:bg-gold/10">Edit</button>
              <button onClick={() => remove(s.id)} className="rounded px-3 py-1 text-xs text-red-400 hover:bg-red-400/10">Delete</button>
            </div>
          </div>
        ))}
      </div>

      {editing !== null && (
        <WisdomForm
          value={editing}
          saving={saving}
          error={error}
          onChange={setEditing}
          onSave={save}
          onCancel={() => { setEditing(null); setError(""); }}
        />
      )}
    </div>
  );
}

function WisdomForm({
  value, saving, error, onChange, onSave, onCancel,
}: {
  value: Partial<DbWisdomSaying>;
  saving: boolean;
  error: string;
  onChange: (v: Partial<DbWisdomSaying>) => void;
  onSave: () => void;
  onCancel: () => void;
}) {
  const set = (k: keyof DbWisdomSaying) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    onChange({ ...value, [k]: e.target.value });

  return (
    <div className="rounded-xl border border-gold/20 bg-card p-6">
      <h3 className="mb-4 text-sm font-semibold text-ivory">
        {value.id ? "Edit saying" : "New saying"}
      </h3>
      <div className="grid gap-3">
        <Field label="Text">
          <textarea rows={3} value={value.text ?? ""} onChange={set("text")} className={inputCls + " resize-none"} />
        </Field>
        <Field label="Source (e.g. Bhagavad Gita · 2.47)">
          <input value={value.source ?? ""} onChange={set("source")} className={inputCls} />
        </Field>
      </div>
      {error && <p className="mt-3 text-xs text-red-400">{error}</p>}
      <div className="mt-4 flex gap-2">
        <button onClick={onSave} disabled={saving} className="rounded-lg bg-gradient-gold px-5 py-2 text-xs font-semibold text-primary-foreground disabled:opacity-50">
          {saving ? "Saving…" : "Save"}
        </button>
        <button onClick={onCancel} className="rounded-lg border border-gold/20 px-5 py-2 text-xs text-ivory/70 hover:text-ivory">
          Cancel
        </button>
      </div>
    </div>
  );
}

// ─── Shared ───────────────────────────────────────────────────────────────────

const inputCls =
  "w-full rounded-lg border border-gold/20 bg-background px-3 py-2 text-sm text-ivory placeholder:text-ivory/30 focus:border-gold focus:outline-none";

function Field({ label, children, className = "" }: { label: string; children: React.ReactNode; className?: string }) {
  return (
    <label className={`flex flex-col gap-1 ${className}`}>
      <span className="text-xs text-ivory/50">{label}</span>
      {children}
    </label>
  );
}

// ─── Root ─────────────────────────────────────────────────────────────────────

function AdminPage() {
  const [session, setSession] = useState<Session | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    supabase.auth.getSession().then(({ data }) => {
      setSession(data.session);
      setLoading(false);
    });
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_e, s) => setSession(s));
    return () => subscription.unsubscribe();
  }, []);

  async function logout() {
    await supabase.auth.signOut();
    setSession(null);
  }

  if (loading) return (
    <div className="flex min-h-screen items-center justify-center bg-background">
      <p className="text-ivory/40 text-sm">Loading…</p>
    </div>
  );

  if (!session) return <LoginForm onLogin={setSession} />;
  return <Dashboard onLogout={logout} />;
}
