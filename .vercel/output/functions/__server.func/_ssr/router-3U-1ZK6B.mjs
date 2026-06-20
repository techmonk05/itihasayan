import { Q as QueryClient } from "../_libs/tanstack__query-core.mjs";
import { Q as QueryClientProvider } from "../_libs/tanstack__react-query.mjs";
import { c as createRouter, a as createRootRouteWithContext, u as useRouter, L as Link, O as Outlet, H as HeadContent, S as Scripts, b as createFileRoute, l as lazyRouteComponent } from "../_libs/tanstack__react-router.mjs";
import { Q as notFound } from "../_libs/tanstack__router-core.mjs";
import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import "../_libs/react-dom.mjs";
import "util";
import "crypto";
import "async_hooks";
import "stream";
import "node:stream";
import "../_libs/isbot.mjs";
import "../_libs/tanstack__history.mjs";
import "../_libs/cookie-es.mjs";
import "../_libs/seroval.mjs";
import "../_libs/seroval-plugins.mjs";
import "node:stream/web";
const appCss = "/assets/styles-B59OT8gw.css";
function reportLovableError(error, context = {}) {
  if (typeof window === "undefined") return;
  window.__lovableEvents?.captureException?.(
    error,
    {
      source: "react_error_boundary",
      route: window.location.pathname,
      ...context
    },
    {
      mechanism: "react_error_boundary",
      handled: false,
      severity: "error"
    }
  );
}
function NotFoundComponent() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex min-h-screen items-center justify-center bg-background px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-md text-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-7xl font-bold text-foreground", children: "404" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-4 text-xl font-semibold text-foreground", children: "Page not found" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: "The page you're looking for doesn't exist or has been moved." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      Link,
      {
        to: "/",
        className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
        children: "Go home"
      }
    ) })
  ] }) });
}
function ErrorComponent({ error, reset }) {
  console.error(error);
  const router2 = useRouter();
  reactExports.useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex min-h-screen items-center justify-center bg-background px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-md text-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-xl font-semibold tracking-tight text-foreground", children: "This page didn't load" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: "Something went wrong on our end. You can try refreshing or head back home." }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 flex flex-wrap justify-center gap-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          onClick: () => {
            router2.invalidate();
            reset();
          },
          className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
          children: "Try again"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "a",
        {
          href: "/",
          className: "inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent",
          children: "Go home"
        }
      )
    ] })
  ] }) });
}
const Route$5 = createRootRouteWithContext()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "itisahayan — Stories that shaped Bharat" },
      { name: "description", content: "Epics, mythology, and ancient wisdom of Bharat. Ramayana, Mahabharata, and the legends history class never told you." },
      { name: "author", content: "itisahayan" },
      { property: "og:title", content: "itisahayan — Stories that shaped Bharat" },
      { property: "og:description", content: "5,000 years of stories. One thread at a time." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" }
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500;1,600;1,700&family=DM+Sans:wght@400;500;700&display=swap" }
    ]
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent
});
function RootShell({ children }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("html", { lang: "en", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("head", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(HeadContent, {}) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("body", { children: [
      children,
      /* @__PURE__ */ jsxRuntimeExports.jsx(Scripts, {})
    ] })
  ] });
}
function RootComponent() {
  const { queryClient } = Route$5.useRouteContext();
  return /* @__PURE__ */ jsxRuntimeExports.jsx(QueryClientProvider, { client: queryClient, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Outlet, {}) });
}
const $$splitComponentImporter$4 = () => import("./wisdom-8TJyVhjB.mjs");
const Route$4 = createFileRoute("/wisdom")({
  head: () => ({
    meta: [{
      title: "Wisdom — Itihasayan"
    }, {
      name: "description",
      content: "Verses and sayings from the Mahabharata, the Bhagavad Gita, and the wisdom of Bharat."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$4, "component")
});
const $$splitComponentImporter$3 = () => import("./epics-oMX-US81.mjs");
const Route$3 = createFileRoute("/epics")({
  head: () => ({
    meta: [{
      title: "Epics — Itihasayan"
    }, {
      name: "description",
      content: "Ramayana, Mahabharata and the legends of Bharat — explored one epic at a time."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
const $$splitComponentImporter$2 = () => import("./about-DKjcwk18.mjs");
const Route$2 = createFileRoute("/about")({
  head: () => ({
    meta: [{
      title: "About — Itihasayan"
    }, {
      name: "description",
      content: "Why Itihasayan exists, and the story behind India's greatest stories."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
const $$splitComponentImporter$1 = () => import("./index-YQ_UIJMy.mjs");
const Route$1 = createFileRoute("/")({
  head: () => ({
    meta: [{
      title: "Itihasayan — Stories that shaped Bharat"
    }, {
      name: "description",
      content: "Epics, mythology and ancient wisdom of Bharat. Ramayana, Mahabharata and the legends history class never told you."
    }, {
      property: "og:title",
      content: "Itihasayan — Stories that shaped Bharat"
    }, {
      property: "og:description",
      content: "India's Greatest Story Begins."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
const IG_URL = "https://www.instagram.com/itihasayan";
const epics = [
  {
    slug: "ramayana",
    icon: "🏹",
    name: "Ramayana",
    tag: "The epic of devotion",
    body: "A prince, an exile, a demon king, and the most devoted love story ever written. Seven kandas. Twenty-four thousand verses. One question: what does dharma cost?",
    pattern: "lotus"
  },
  {
    slug: "mahabharata",
    icon: "⚔️",
    name: "Mahabharata",
    tag: "The epic of war",
    body: "Five brothers. A kingdom. A war where everyone loses something. And a god who drove a chariot — and changed how we think about action itself.",
    pattern: "chakra"
  },
  {
    slug: "legends-of-bharat",
    icon: "🪔",
    name: "Legends of Bharat",
    tag: "The forgotten ones",
    body: "Before the epics, there were the stories. Queens who rewrote fate. Sages who bent rivers. Heroes erased from textbooks. We're bringing them back.",
    pattern: "flame"
  }
];
const wisdomSayings = [
  {
    id: "adi-parva-1",
    text: "Whatever is here, may be found elsewhere. What is not here, does not exist anywhere.",
    source: "Mahabharata · Adi Parva (paraphrased)"
  },
  {
    id: "gita-2-47",
    text: "You have the right to act. Never to the fruits of your action.",
    source: "Bhagavad Gita · 2.47"
  },
  {
    id: "gita-17-3",
    text: "A man is made by his beliefs. As he believes, so he becomes.",
    source: "Bhagavad Gita · 17.3"
  }
];
const $$splitNotFoundComponentImporter = () => import("../_slug-DzyedJ_5.mjs");
const $$splitComponentImporter = () => import("../_slug-BWMw3_B7.mjs");
const Route = createFileRoute("/epics/$slug")({
  loader: ({
    params
  }) => {
    const epic = epics.find((e) => e.slug === params.slug);
    if (!epic) throw notFound();
    return epic;
  },
  head: ({
    loaderData
  }) => ({
    meta: loaderData ? [{
      title: `${loaderData.name} — Itihasayan`
    }, {
      name: "description",
      content: loaderData.body
    }] : []
  }),
  component: lazyRouteComponent($$splitComponentImporter, "component"),
  notFoundComponent: lazyRouteComponent($$splitNotFoundComponentImporter, "notFoundComponent")
});
const WisdomRoute = Route$4.update({
  id: "/wisdom",
  path: "/wisdom",
  getParentRoute: () => Route$5
});
const EpicsRoute = Route$3.update({
  id: "/epics",
  path: "/epics",
  getParentRoute: () => Route$5
});
const AboutRoute = Route$2.update({
  id: "/about",
  path: "/about",
  getParentRoute: () => Route$5
});
const IndexRoute = Route$1.update({
  id: "/",
  path: "/",
  getParentRoute: () => Route$5
});
const EpicsSlugRoute = Route.update({
  id: "/$slug",
  path: "/$slug",
  getParentRoute: () => EpicsRoute
});
const EpicsRouteChildren = {
  EpicsSlugRoute
};
const EpicsRouteWithChildren = EpicsRoute._addFileChildren(EpicsRouteChildren);
const rootRouteChildren = {
  IndexRoute,
  AboutRoute,
  EpicsRoute: EpicsRouteWithChildren,
  WisdomRoute
};
const routeTree = Route$5._addFileChildren(rootRouteChildren)._addFileTypes();
const getRouter = () => {
  const queryClient = new QueryClient();
  const router2 = createRouter({
    routeTree,
    context: { queryClient },
    scrollRestoration: true,
    defaultPreloadStaleTime: 0
  });
  return router2;
};
const router = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  getRouter
}, Symbol.toStringTag, { value: "Module" }));
export {
  IG_URL as I,
  Route as R,
  epics as e,
  router as r,
  wisdomSayings as w
};
