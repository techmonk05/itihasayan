import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { N as Nav, F as Footer } from "./Footer-Bsx7Qzp8.mjs";
import { S as SectionHeading } from "./shared-OciZJwI9.mjs";
import { w as wisdomSayings } from "./router-3U-1ZK6B.mjs";
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
import "../_libs/lucide-react.mjs";
import "./index-BfyfEAJF.mjs";
import "../_libs/tanstack__query-core.mjs";
import "../_libs/tanstack__react-query.mjs";
function WisdomPage() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen bg-background", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Nav, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx("main", { className: "pb-28 pt-36 sm:pt-44", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-6xl px-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(SectionHeading, { eyebrow: "Wisdom verses", title: /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
        "They said it thousands of years ago.",
        " ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-saffron not-italic italic", children: "Still hits." })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-16 grid gap-6 md:grid-cols-3", children: wisdomSayings.map((q, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("figure", { className: "group relative overflow-hidden rounded-2xl border border-gold/20 bg-card shadow-card transition hover:-translate-y-1 hover:border-gold/50", style: {
        transitionDelay: `${i * 90}ms`
      }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("blockquote", { className: "relative p-8", style: {
          background: "linear-gradient(180deg, color-mix(in oklab, var(--parchment) 92%, transparent), color-mix(in oklab, var(--parchment) 78%, transparent))",
          color: "oklch(0.22 0.04 35)"
        }, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute left-3 top-1 font-display text-7xl italic leading-none text-saffron/40", children: "“" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "relative font-display text-xl italic leading-snug", children: q.text })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("figcaption", { className: "flex items-center gap-3 border-t border-gold/30 bg-card px-6 py-4 text-xs uppercase tracking-[0.3em] text-saffron", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-px w-6 bg-saffron" }),
          q.source
        ] })
      ] }, q.id)) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Footer, {})
  ] });
}
export {
  WisdomPage as component
};
