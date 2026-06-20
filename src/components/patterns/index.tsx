export function LotusPattern() {
  return (
    <svg viewBox="0 0 200 200" className="absolute -right-10 -top-10 h-56 w-56 text-saffron/10" aria-hidden="true">
      <g fill="none" stroke="currentColor" strokeWidth="1">
        {Array.from({ length: 8 }).map((_, i) => (
          <ellipse key={i} cx="100" cy="100" rx="30" ry="80" transform={`rotate(${i * 45} 100 100)`} />
        ))}
        <circle cx="100" cy="100" r="14" />
      </g>
    </svg>
  );
}

export function ChakraPattern() {
  return (
    <svg
      viewBox="0 0 200 200"
      className="absolute -right-10 -top-10 h-56 w-56 text-saffron/10 animate-rotate-slow"
      aria-hidden="true"
    >
      <g fill="none" stroke="currentColor" strokeWidth="1">
        <circle cx="100" cy="100" r="80" />
        <circle cx="100" cy="100" r="20" />
        {Array.from({ length: 24 }).map((_, i) => (
          <line key={i} x1="100" y1="20" x2="100" y2="180" transform={`rotate(${i * 15} 100 100)`} />
        ))}
      </g>
    </svg>
  );
}

export function FlamePattern() {
  return (
    <svg viewBox="0 0 200 200" className="absolute -right-10 -top-10 h-56 w-56 text-saffron/10" aria-hidden="true">
      <g fill="none" stroke="currentColor" strokeWidth="1">
        {Array.from({ length: 6 }).map((_, i) => (
          <path
            key={i}
            d="M100 30 Q 130 90 100 170 Q 70 90 100 30 Z"
            transform={`rotate(${i * 60} 100 100) scale(${1 - i * 0.12})`}
            style={{ transformOrigin: "100px 100px" }}
          />
        ))}
      </g>
    </svg>
  );
}

export const patternComponents = {
  lotus: LotusPattern,
  chakra: ChakraPattern,
  flame: FlamePattern,
} as const;
