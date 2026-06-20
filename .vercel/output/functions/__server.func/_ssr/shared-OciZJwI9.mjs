import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { p as patternComponents } from "./index-BfyfEAJF.mjs";
function PillTag({
  children,
  href
}) {
  const classes = "inline-flex items-center gap-2 rounded-full border border-gold/40 bg-gold/5 px-4 py-1.5 text-sm text-ivory/90 backdrop-blur-sm transition hover:border-gold hover:bg-gold/10";
  if (href) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: href, className: classes, children });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: classes, children });
}
function SectionHeading({
  eyebrow,
  title,
  className = ""
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `text-center ${className}`, children: [
    eyebrow && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mb-4 text-xs uppercase tracking-[0.35em] text-gold/80", children: eyebrow }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-4xl italic leading-tight text-ivory sm:text-5xl md:text-6xl", children: title })
  ] });
}
function EpicCard({ epic, delayMs = 0 }) {
  const Pattern = patternComponents[epic.pattern];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    Link,
    {
      to: "/epics/$slug",
      params: { slug: epic.slug },
      className: "group relative block overflow-hidden rounded-3xl border border-border bg-card p-8 shadow-card transition duration-500 hover:-translate-y-2 hover:border-gold/60 hover:shadow-glow",
      style: { transitionDelay: `${delayMs}ms` },
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Pattern, {}),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-4xl", children: epic.icon }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-6 text-xs uppercase tracking-[0.3em] text-gold/80", children: epic.tag }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-2 font-display text-4xl italic text-ivory", children: epic.name }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-6 text-base leading-relaxed text-ivory/75", children: epic.body }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-6 text-xs uppercase tracking-[0.25em] text-saffron/90 transition group-hover:text-saffron", children: "→ Read more" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pointer-events-none absolute inset-0 rounded-3xl ring-1 ring-inset ring-transparent transition group-hover:ring-saffron/30" })
      ]
    }
  );
}
export {
  EpicCard as E,
  PillTag as P,
  SectionHeading as S
};
