import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { s as supabase } from "./router-Dud-CRTG.mjs";
import "../_libs/tanstack__query-core.mjs";
import "../_libs/tanstack__react-query.mjs";
import "../_libs/tanstack__react-router.mjs";
import "../_libs/tanstack__router-core.mjs";
import "../_libs/tanstack__history.mjs";
import "../_libs/cookie-es.mjs";
import "../_libs/seroval.mjs";
import "../_libs/seroval-plugins.mjs";
import "node:stream/web";
import "node:stream";
import "../_libs/react-dom.mjs";
import "util";
import "crypto";
import "async_hooks";
import "stream";
import "../_libs/isbot.mjs";
import "../_libs/supabase__supabase-js.mjs";
import "../_libs/supabase__postgrest-js.mjs";
import "../_libs/supabase__realtime-js.mjs";
import "../_libs/supabase__phoenix.mjs";
import "../_libs/supabase__storage-js.mjs";
import "../_libs/iceberg-js.mjs";
import "../_libs/supabase__auth-js.mjs";
import "tslib";
import "../_libs/supabase__functions-js.mjs";
function LoginForm({
  onLogin
}) {
  const [email, setEmail] = reactExports.useState("");
  const [password, setPassword] = reactExports.useState("");
  const [error, setError] = reactExports.useState("");
  const [loading, setLoading] = reactExports.useState(false);
  async function handleSubmit(e) {
    e.preventDefault();
    setError("");
    setLoading(true);
    const {
      data,
      error: error2
    } = await supabase.auth.signInWithPassword({
      email,
      password
    });
    setLoading(false);
    if (error2) {
      setError(error2.message);
      return;
    }
    if (data.session) onLogin(data.session);
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex min-h-screen items-center justify-center bg-background px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "w-full max-w-sm rounded-xl border border-gold/20 bg-card p-8 shadow-card", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display text-2xl italic text-ivory", children: "Itihasayan Admin" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-sm text-ivory/50", children: "Sign in to manage content" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { className: "mt-6 flex flex-col gap-4", onSubmit: handleSubmit, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "email", placeholder: "Email", value: email, onChange: (e) => setEmail(e.target.value), required: true, className: "rounded-lg border border-gold/30 bg-background px-4 py-2.5 text-sm text-ivory placeholder:text-ivory/30 focus:border-gold focus:outline-none" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "password", placeholder: "Password", value: password, onChange: (e) => setPassword(e.target.value), required: true, className: "rounded-lg border border-gold/30 bg-background px-4 py-2.5 text-sm text-ivory placeholder:text-ivory/30 focus:border-gold focus:outline-none" }),
      error && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-red-400", children: error }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "submit", disabled: loading, className: "mt-1 rounded-lg bg-gradient-gold py-2.5 text-sm font-semibold text-primary-foreground transition hover:opacity-90 disabled:opacity-50", children: loading ? "Signing in…" : "Sign in" })
    ] })
  ] }) });
}
function Dashboard({
  onLogout
}) {
  const [tab, setTab] = reactExports.useState("epics");
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen bg-background text-ivory", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("header", { className: "flex items-center justify-between border-b border-gold/10 px-6 py-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-display text-lg italic text-gold", children: "Itihasayan Admin" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: onLogout, className: "rounded-lg border border-gold/30 px-4 py-1.5 text-xs text-ivory/70 transition hover:border-gold hover:text-ivory", children: "Sign out" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-4xl px-6 py-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-2 border-b border-gold/10 pb-0", children: ["epics", "wisdom"].map((t) => /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setTab(t), className: `px-4 py-2 text-sm font-medium capitalize transition ${tab === t ? "border-b-2 border-gold text-gold" : "text-ivory/50 hover:text-ivory"}`, children: t === "wisdom" ? "Wisdom Sayings" : "Epics" }, t)) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-8", children: tab === "epics" ? /* @__PURE__ */ jsxRuntimeExports.jsx(EpicsTab, {}) : /* @__PURE__ */ jsxRuntimeExports.jsx(WisdomTab, {}) })
    ] })
  ] });
}
const PATTERN_OPTIONS = ["lotus", "chakra", "flame"];
const BLANK_EPIC = {
  slug: "",
  icon: "",
  name: "",
  tag: "",
  body: "",
  full_story: "",
  pattern: "lotus"
};
function EpicsTab() {
  const [epics, setEpics] = reactExports.useState([]);
  const [editing, setEditing] = reactExports.useState(null);
  const [saving, setSaving] = reactExports.useState(false);
  const [error, setError] = reactExports.useState("");
  async function load() {
    const {
      data
    } = await supabase.from("epics").select("*").order("created_at");
    setEpics(data ?? []);
  }
  reactExports.useEffect(() => {
    load();
  }, []);
  async function save() {
    if (!editing) return;
    setSaving(true);
    setError("");
    const {
      id,
      created_at,
      ...fields
    } = editing;
    const op = id ? supabase.from("epics").update(fields).eq("id", id) : supabase.from("epics").insert(fields);
    const {
      error: error2
    } = await op;
    setSaving(false);
    if (error2) {
      setError(error2.message);
      return;
    }
    setEditing(null);
    load();
  }
  async function remove(id) {
    if (!confirm("Delete this epic?")) return;
    await supabase.from("epics").delete().eq("id", id);
    load();
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "text-sm font-medium uppercase tracking-widest text-ivory/50", children: [
        epics.length,
        " epic",
        epics.length !== 1 ? "s" : ""
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setEditing(BLANK_EPIC), className: "rounded-lg bg-gradient-gold px-4 py-1.5 text-xs font-semibold text-primary-foreground", children: "+ Add epic" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-3", children: epics.map((e) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between rounded-lg border border-gold/10 bg-card px-4 py-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-2xl", children: e.icon }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-medium text-ivory", children: e.name }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-ivory/40", children: [
            e.slug,
            " · ",
            e.pattern
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setEditing(e), className: "rounded px-3 py-1 text-xs text-gold hover:bg-gold/10", children: "Edit" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => remove(e.id), className: "rounded px-3 py-1 text-xs text-red-400 hover:bg-red-400/10", children: "Delete" })
      ] })
    ] }, e.id)) }),
    editing !== null && /* @__PURE__ */ jsxRuntimeExports.jsx(EpicForm, { value: editing, saving, error, onChange: setEditing, onSave: save, onCancel: () => {
      setEditing(null);
      setError("");
    } })
  ] });
}
function EpicForm({
  value,
  saving,
  error,
  onChange,
  onSave,
  onCancel
}) {
  const set = (k) => (e) => onChange({
    ...value,
    [k]: e.target.value
  });
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-xl border border-gold/20 bg-card p-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mb-4 text-sm font-semibold text-ivory", children: value.id ? "Edit epic" : "New epic" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-3 sm:grid-cols-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Name", children: /* @__PURE__ */ jsxRuntimeExports.jsx("input", { value: value.name ?? "", onChange: set("name"), className: inputCls }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Slug (URL)", children: /* @__PURE__ */ jsxRuntimeExports.jsx("input", { value: value.slug ?? "", onChange: set("slug"), className: inputCls }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Icon (emoji)", children: /* @__PURE__ */ jsxRuntimeExports.jsx("input", { value: value.icon ?? "", onChange: set("icon"), className: inputCls }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Tag line", children: /* @__PURE__ */ jsxRuntimeExports.jsx("input", { value: value.tag ?? "", onChange: set("tag"), className: inputCls }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Pattern", className: "sm:col-span-1", children: /* @__PURE__ */ jsxRuntimeExports.jsx("select", { value: value.pattern ?? "lotus", onChange: set("pattern"), className: inputCls, children: PATTERN_OPTIONS.map((p) => /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: p, children: p }, p)) }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Teaser (shown on card)", className: "sm:col-span-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx("textarea", { rows: 3, value: value.body ?? "", onChange: set("body"), className: inputCls + " resize-none" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Full story (shown in popup)", className: "sm:col-span-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx("textarea", { rows: 8, value: value.full_story ?? "", onChange: set("full_story"), className: inputCls + " resize-none", placeholder: "Write the full story here. Your client can read this when they click 'Read more'." }) })
    ] }),
    error && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-xs text-red-400", children: error }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4 flex gap-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: onSave, disabled: saving, className: "rounded-lg bg-gradient-gold px-5 py-2 text-xs font-semibold text-primary-foreground disabled:opacity-50", children: saving ? "Saving…" : "Save" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: onCancel, className: "rounded-lg border border-gold/20 px-5 py-2 text-xs text-ivory/70 hover:text-ivory", children: "Cancel" })
    ] })
  ] });
}
const BLANK_WISDOM = {
  text: "",
  source: ""
};
function WisdomTab() {
  const [sayings, setSayings] = reactExports.useState([]);
  const [editing, setEditing] = reactExports.useState(null);
  const [saving, setSaving] = reactExports.useState(false);
  const [error, setError] = reactExports.useState("");
  async function load() {
    const {
      data
    } = await supabase.from("wisdom_sayings").select("*").order("created_at");
    setSayings(data ?? []);
  }
  reactExports.useEffect(() => {
    load();
  }, []);
  async function save() {
    if (!editing) return;
    setSaving(true);
    setError("");
    const {
      id,
      created_at,
      ...fields
    } = editing;
    const op = id ? supabase.from("wisdom_sayings").update(fields).eq("id", id) : supabase.from("wisdom_sayings").insert(fields);
    const {
      error: error2
    } = await op;
    setSaving(false);
    if (error2) {
      setError(error2.message);
      return;
    }
    setEditing(null);
    load();
  }
  async function remove(id) {
    if (!confirm("Delete this saying?")) return;
    await supabase.from("wisdom_sayings").delete().eq("id", id);
    load();
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "text-sm font-medium uppercase tracking-widest text-ivory/50", children: [
        sayings.length,
        " saying",
        sayings.length !== 1 ? "s" : ""
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setEditing(BLANK_WISDOM), className: "rounded-lg bg-gradient-gold px-4 py-1.5 text-xs font-semibold text-primary-foreground", children: "+ Add saying" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-3", children: sayings.map((s) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between rounded-lg border border-gold/10 bg-card px-4 py-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mr-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm italic text-ivory", children: [
          '"',
          s.text,
          '"'
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-xs text-ivory/40", children: s.source })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex shrink-0 gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setEditing(s), className: "rounded px-3 py-1 text-xs text-gold hover:bg-gold/10", children: "Edit" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => remove(s.id), className: "rounded px-3 py-1 text-xs text-red-400 hover:bg-red-400/10", children: "Delete" })
      ] })
    ] }, s.id)) }),
    editing !== null && /* @__PURE__ */ jsxRuntimeExports.jsx(WisdomForm, { value: editing, saving, error, onChange: setEditing, onSave: save, onCancel: () => {
      setEditing(null);
      setError("");
    } })
  ] });
}
function WisdomForm({
  value,
  saving,
  error,
  onChange,
  onSave,
  onCancel
}) {
  const set = (k) => (e) => onChange({
    ...value,
    [k]: e.target.value
  });
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-xl border border-gold/20 bg-card p-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mb-4 text-sm font-semibold text-ivory", children: value.id ? "Edit saying" : "New saying" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Text", children: /* @__PURE__ */ jsxRuntimeExports.jsx("textarea", { rows: 3, value: value.text ?? "", onChange: set("text"), className: inputCls + " resize-none" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Source (e.g. Bhagavad Gita · 2.47)", children: /* @__PURE__ */ jsxRuntimeExports.jsx("input", { value: value.source ?? "", onChange: set("source"), className: inputCls }) })
    ] }),
    error && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-xs text-red-400", children: error }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4 flex gap-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: onSave, disabled: saving, className: "rounded-lg bg-gradient-gold px-5 py-2 text-xs font-semibold text-primary-foreground disabled:opacity-50", children: saving ? "Saving…" : "Save" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: onCancel, className: "rounded-lg border border-gold/20 px-5 py-2 text-xs text-ivory/70 hover:text-ivory", children: "Cancel" })
    ] })
  ] });
}
const inputCls = "w-full rounded-lg border border-gold/20 bg-background px-3 py-2 text-sm text-ivory placeholder:text-ivory/30 focus:border-gold focus:outline-none";
function Field({
  label,
  children,
  className = ""
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: `flex flex-col gap-1 ${className}`, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-ivory/50", children: label }),
    children
  ] });
}
function AdminPage() {
  const [session, setSession] = reactExports.useState(null);
  const [loading, setLoading] = reactExports.useState(true);
  reactExports.useEffect(() => {
    supabase.auth.getSession().then(({
      data
    }) => {
      setSession(data.session);
      setLoading(false);
    });
    const {
      data: {
        subscription
      }
    } = supabase.auth.onAuthStateChange((_e, s) => setSession(s));
    return () => subscription.unsubscribe();
  }, []);
  async function logout() {
    await supabase.auth.signOut();
    setSession(null);
  }
  if (loading) return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex min-h-screen items-center justify-center bg-background", children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-ivory/40 text-sm", children: "Loading…" }) });
  if (!session) return /* @__PURE__ */ jsxRuntimeExports.jsx(LoginForm, { onLogin: setSession });
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Dashboard, { onLogout: logout });
}
export {
  AdminPage as component
};
