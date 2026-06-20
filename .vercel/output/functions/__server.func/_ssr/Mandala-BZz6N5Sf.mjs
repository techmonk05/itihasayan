import { j as jsxRuntimeExports } from "../_libs/react.mjs";
function Mandala({ className = "" }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("svg", { viewBox: "0 0 600 600", className, "aria-hidden": "true", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("g", { fill: "none", stroke: "currentColor", strokeWidth: "0.6", children: [
    Array.from({ length: 24 }).map((_, i) => /* @__PURE__ */ jsxRuntimeExports.jsx("g", { transform: `rotate(${i * 360 / 24} 300 300)`, children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M300 60 C 340 200, 340 400, 300 540" }) }, i)),
    /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: "300", cy: "300", r: "260" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: "300", cy: "300", r: "200" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: "300", cy: "300", r: "140" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: "300", cy: "300", r: "80" }),
    Array.from({ length: 12 }).map((_, i) => /* @__PURE__ */ jsxRuntimeExports.jsx("g", { transform: `rotate(${i * 360 / 12} 300 300)`, children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M300 140 Q 330 220 300 300 Q 270 220 300 140 Z" }) }, `p${i}`))
  ] }) });
}
function Particles() {
  const particles = Array.from({ length: 28 });
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pointer-events-none absolute inset-0 overflow-hidden", children: particles.map((_, i) => {
    const size = 2 + Math.random() * 4;
    const left = Math.random() * 100;
    const duration = 14 + Math.random() * 22;
    const delay = Math.random() * -30;
    const opacity = 0.4 + Math.random() * 0.5;
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      "span",
      {
        className: "absolute rounded-full animate-float-up",
        style: {
          left: `${left}%`,
          bottom: `-10px`,
          width: size,
          height: size,
          background: "var(--gold)",
          boxShadow: "0 0 8px var(--saffron)",
          opacity,
          animationDuration: `${duration}s`,
          animationDelay: `${delay}s`
        }
      },
      i
    );
  }) });
}
export {
  Mandala as M,
  Particles as P
};
