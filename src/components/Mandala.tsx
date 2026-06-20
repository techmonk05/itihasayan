import { useState, useEffect, useRef } from "react";

export function Mandala({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 600 600" className={className} aria-hidden="true">
      <g fill="none" stroke="currentColor" strokeWidth="0.6">
        {Array.from({ length: 24 }).map((_, i) => (
          <g key={i} transform={`rotate(${(i * 360) / 24} 300 300)`}>
            <path d="M300 60 C 340 200, 340 400, 300 540" />
          </g>
        ))}
        <circle cx="300" cy="300" r="260" />
        <circle cx="300" cy="300" r="200" />
        <circle cx="300" cy="300" r="140" />
        <circle cx="300" cy="300" r="80" />
        {Array.from({ length: 12 }).map((_, i) => (
          <g key={`p${i}`} transform={`rotate(${(i * 360) / 12} 300 300)`}>
            <path d="M300 140 Q 330 220 300 300 Q 270 220 300 140 Z" />
          </g>
        ))}
      </g>
    </svg>
  );
}

export function Particles() {
  const [mounted, setMounted] = useState(false);
  const particlesRef = useRef<
    { size: number; left: number; duration: number; delay: number; opacity: number }[]
  >([]);

  useEffect(() => {
    // Generate random particle values only on the client, after mount —
    // never during SSR. This avoids a server/client hydration mismatch,
    // since Math.random() produces different values on each render pass.
    particlesRef.current = Array.from({ length: 28 }).map(() => ({
      size: 2 + Math.random() * 4,
      left: Math.random() * 100,
      duration: 14 + Math.random() * 22,
      delay: Math.random() * -30,
      opacity: 0.4 + Math.random() * 0.5,
    }));
    setMounted(true);
  }, []);

  if (!mounted) return <div className="pointer-events-none absolute inset-0 overflow-hidden" />;

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {particlesRef.current.map((p, i) => {
        const { size, left, duration, delay, opacity } = p;
        return (
          <span
            key={i}
            className="absolute rounded-full animate-float-up"
            style={{
              left: `${left}%`,
              bottom: `-10px`,
              width: size,
              height: size,
              background: "var(--gold)",
              boxShadow: "0 0 8px var(--saffron)",
              opacity,
              animationDuration: `${duration}s`,
              animationDelay: `${delay}s`,
            }}
          />
        );
      })}
    </div>
  );
}