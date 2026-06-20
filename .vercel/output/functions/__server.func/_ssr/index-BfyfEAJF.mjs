import { j as jsxRuntimeExports } from "../_libs/react.mjs";
function LotusPattern() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("svg", { viewBox: "0 0 200 200", className: "absolute -right-10 -top-10 h-56 w-56 text-saffron/10", "aria-hidden": "true", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("g", { fill: "none", stroke: "currentColor", strokeWidth: "1", children: [
    Array.from({ length: 8 }).map((_, i) => /* @__PURE__ */ jsxRuntimeExports.jsx("ellipse", { cx: "100", cy: "100", rx: "30", ry: "80", transform: `rotate(${i * 45} 100 100)` }, i)),
    /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: "100", cy: "100", r: "14" })
  ] }) });
}
function ChakraPattern() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "svg",
    {
      viewBox: "0 0 200 200",
      className: "absolute -right-10 -top-10 h-56 w-56 text-saffron/10 animate-rotate-slow",
      "aria-hidden": "true",
      children: /* @__PURE__ */ jsxRuntimeExports.jsxs("g", { fill: "none", stroke: "currentColor", strokeWidth: "1", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: "100", cy: "100", r: "80" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: "100", cy: "100", r: "20" }),
        Array.from({ length: 24 }).map((_, i) => /* @__PURE__ */ jsxRuntimeExports.jsx("line", { x1: "100", y1: "20", x2: "100", y2: "180", transform: `rotate(${i * 15} 100 100)` }, i))
      ] })
    }
  );
}
function FlamePattern() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("svg", { viewBox: "0 0 200 200", className: "absolute -right-10 -top-10 h-56 w-56 text-saffron/10", "aria-hidden": "true", children: /* @__PURE__ */ jsxRuntimeExports.jsx("g", { fill: "none", stroke: "currentColor", strokeWidth: "1", children: Array.from({ length: 6 }).map((_, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
    "path",
    {
      d: "M100 30 Q 130 90 100 170 Q 70 90 100 30 Z",
      transform: `rotate(${i * 60} 100 100) scale(${1 - i * 0.12})`,
      style: { transformOrigin: "100px 100px" }
    },
    i
  )) }) });
}
const patternComponents = {
  lotus: LotusPattern,
  chakra: ChakraPattern,
  flame: FlamePattern
};
export {
  patternComponents as p
};
