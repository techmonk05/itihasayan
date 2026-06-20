import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { I as IG_URL } from "./router-3U-1ZK6B.mjs";
import { M as Menu, X } from "../_libs/lucide-react.mjs";
const NAV_LINKS = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/epics", label: "Epics" },
  { to: "/wisdom", label: "Wisdom" }
];
function Nav() {
  const [mobileOpen, setMobileOpen] = reactExports.useState(false);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("header", { className: "fixed inset-x-0 top-0 z-50 h-20 border-b border-gold/10 bg-background/80 backdrop-blur-md sm:h-24", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex h-full w-full items-center justify-between gap-4 px-6 sm:px-10", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/", className: "flex shrink-0 items-center gap-2.5", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        "img",
        {
          src: "/logo-full.png",
          alt: "Itihasayan bow and arrow mark",
          className: "h-12 w-auto object-contain sm:h-36  mt-10"
        }
      ) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "ml-auto flex items-center gap-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("nav", { className: "hidden items-center gap-8 text-xs uppercase tracking-[0.2em] text-gold/80 md:flex", children: NAV_LINKS.map(({ to, label }) => /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to, className: "inline-flex transition hover:text-saffron [&.active]:text-saffron", children: label }, to)) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "a",
          {
            href: IG_URL,
            target: "_blank",
            rel: "noreferrer noopener",
            className: "inline-flex shrink-0 items-center gap-2 text-xs uppercase tracking-[0.2em] text-gold/80 transition hover:text-saffron sm:text-xs",
            children: "Follow"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            onClick: () => setMobileOpen(true),
            "aria-label": "Open menu",
            className: "flex items-center justify-center text-gold/80 transition hover:text-saffron md:hidden",
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(Menu, { className: "h-6 w-6" })
          }
        )
      ] })
    ] }) }),
    mobileOpen && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "fixed inset-0 z-[60] md:hidden", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          className: "absolute inset-0 bg-background/60 backdrop-blur-sm",
          onClick: () => setMobileOpen(false)
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute right-0 top-0 flex h-full w-72 flex-col bg-background border-l border-gold/10 px-8 pt-8 pb-12", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            onClick: () => setMobileOpen(false),
            "aria-label": "Close menu",
            className: "self-end text-gold/80 transition hover:text-saffron",
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "h-6 w-6" })
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("nav", { className: "mt-10 flex flex-col gap-8 text-xs uppercase tracking-[0.2em] text-gold/80", children: [
          NAV_LINKS.map(({ to, label }) => /* @__PURE__ */ jsxRuntimeExports.jsx(
            Link,
            {
              to,
              onClick: () => setMobileOpen(false),
              className: "inline-flex transition hover:text-saffron [&.active]:text-saffron",
              children: label
            },
            to
          )),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "a",
            {
              href: IG_URL,
              target: "_blank",
              rel: "noreferrer noopener",
              onClick: () => setMobileOpen(false),
              className: "inline-flex transition hover:text-saffron",
              children: "Follow on Instagram"
            }
          )
        ] })
      ] })
    ] })
  ] });
}
function Footer() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("footer", { className: "border-t border-border bg-background", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto flex max-w-6xl flex-col items-center gap-6 px-6 py-12 text-center sm:flex-row sm:justify-between sm:text-left", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "font-display text-lg italic text-ivory", children: [
      "Itihasayan ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gold", children: "✦" }),
      " ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-ivory/60", children: "Stories that shaped Bharat" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("nav", { className: "flex flex-wrap items-center justify-center gap-5 text-sm text-ivory/70", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/", className: "hover:text-saffron transition", children: "Home" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gold/40", children: "·" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/epics", className: "hover:text-saffron transition", children: "Epics" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gold/40", children: "·" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/wisdom", className: "hover:text-saffron transition", children: "Wisdom" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gold/40", children: "·" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: IG_URL, target: "_blank", rel: "noreferrer noopener", className: "hover:text-saffron transition", children: "Instagram" })
    ] })
  ] }) });
}
export {
  Footer as F,
  Nav as N
};
