import { j as jsxRuntimeExports } from "./_libs/react.mjs";
import { L as Link } from "./_libs/tanstack__react-router.mjs";
import { N as Nav, F as Footer } from "./_ssr/Footer-Bsx7Qzp8.mjs";
import { p as patternComponents } from "./_ssr/index-BfyfEAJF.mjs";
import { R as Route } from "./_ssr/router-3U-1ZK6B.mjs";
import "./_libs/tanstack__router-core.mjs";
import "./_libs/tanstack__history.mjs";
import "./_libs/cookie-es.mjs";
import "./_libs/seroval.mjs";
import "./_libs/seroval-plugins.mjs";
import "node:stream/web";
import "node:stream";
import "./_libs/react-dom.mjs";
import "util";
import "crypto";
import "async_hooks";
import "stream";
import "./_libs/isbot.mjs";
import "./_libs/lucide-react.mjs";
import "./_libs/tanstack__query-core.mjs";
import "./_libs/tanstack__react-query.mjs";
function EpicDetailPage() {
  const epic = Route.useLoaderData();
  const Pattern = patternComponents[epic.pattern];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen bg-background", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Nav, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx("main", { className: "pb-28 pt-36 sm:pt-44", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-3xl px-6 text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/epics", className: "text-xs uppercase tracking-[0.3em] text-saffron/80 hover:text-saffron", children: "← All epics" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative mt-8 overflow-hidden rounded-3xl border border-gold/20 bg-card p-10 sm:p-14", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Pattern, {}),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-5xl", children: epic.icon }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-6 text-xs uppercase tracking-[0.3em] text-gold/80", children: epic.tag }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "mt-2 font-display text-5xl italic text-ivory sm:text-6xl", children: epic.name }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-8 text-lg leading-relaxed text-ivory/80", children: epic.body })
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Footer, {})
  ] });
}
export {
  EpicDetailPage as component
};
