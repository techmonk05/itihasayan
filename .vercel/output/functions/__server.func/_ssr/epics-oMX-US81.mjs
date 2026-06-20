import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { N as Nav, F as Footer } from "./Footer-Bsx7Qzp8.mjs";
import { S as SectionHeading, E as EpicCard } from "./shared-OciZJwI9.mjs";
import { e as epics } from "./router-3U-1ZK6B.mjs";
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
function EpicsPage() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen bg-background", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Nav, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx("main", { className: "pb-28 pt-36 sm:pt-44", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-6xl px-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(SectionHeading, { eyebrow: "The epics", title: /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
        "Three worlds. ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient-gold not-italic", children: "Infinite" }),
        " stories."
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-16 grid gap-6 md:grid-cols-3", children: epics.map((epic, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(EpicCard, { epic, delayMs: i * 100 }, epic.slug)) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Footer, {})
  ] });
}
export {
  EpicsPage as component
};
