import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { N as Nav, I as IG_URL, F as Footer } from "./Footer-DwvhoN4Q.mjs";
import { M as Mandala } from "./Mandala-BZz6N5Sf.mjs";
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
import "../_libs/lucide-react.mjs";
function AboutPage() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen bg-background", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Nav, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("main", { className: "relative overflow-hidden pb-28 pt-36 sm:pt-44", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pointer-events-none absolute inset-0 flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Mandala, { className: "h-[120vmin] w-[120vmin] text-gold/[0.06] animate-rotate-slow" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative mx-auto max-w-3xl px-6 text-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs uppercase tracking-[0.4em] text-gold/80", children: "Our story" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "mt-5 font-display text-5xl italic leading-tight text-ivory sm:text-6xl", children: [
          "Why ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient-gold", children: "Itihasayan" }),
          " exists."
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-8 text-lg leading-relaxed text-ivory/80", children: "India's epics carry five thousand years of stories — and most of us only know ten lines of them. Itihasayan exists to change that: one story, one verse, one forgotten legend at a time, told the way they deserve to be." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-6 text-lg leading-relaxed text-ivory/80", children: "No lectures. No jargon. Just the Ramayana, the Mahabharata, and the countless lesser-known tales of Bharat — reimagined for a generation that grew up on reels, not recitations." }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-12 flex flex-wrap items-center justify-center gap-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/epics", className: "inline-flex items-center gap-2 rounded-full bg-gradient-gold px-7 py-3 text-sm font-semibold text-primary-foreground shadow-glow transition hover:scale-[1.03]", children: "Explore the epics →" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: IG_URL, target: "_blank", rel: "noreferrer noopener", className: "inline-flex items-center gap-2 rounded-full border border-gold/50 px-7 py-3 text-sm font-semibold text-ivory transition hover:border-gold hover:bg-gold/10", children: "Follow on Instagram" })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Footer, {})
  ] });
}
export {
  AboutPage as component
};
