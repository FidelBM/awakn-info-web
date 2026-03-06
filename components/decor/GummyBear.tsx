"use client";

import { useId } from "react";

type GummyBearProps = {
  color: "red" | "blue";
  size?: number;
  opacity?: number;
  blur?: number;
  className?: string;
};

export default function GummyBear({
  color,
  size = 72,
  opacity = 0.72,
  blur = 0,
  className
}: GummyBearProps) {
  const id = useId();
  const base = color === "red" ? "#D61F2C" : "#3F22EC";
  const highlight = color === "red" ? "#F0388E" : "#6D53FF";
  const inner = color === "red" ? "rgba(255,157,199,0.4)" : "rgba(178,170,255,0.38)";

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 122"
      className={className}
      style={{ opacity, filter: blur ? `blur(${blur}px)` : undefined }}
      aria-hidden="true"
    >
      <defs>
        <linearGradient id={`${id}-body`} x1="12" y1="10" x2="84" y2="108" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor={highlight} />
          <stop offset="0.5" stopColor={base} />
          <stop offset="1" stopColor={base} />
        </linearGradient>
        <radialGradient id={`${id}-gloss`} cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(36 30) rotate(52) scale(36 26)">
          <stop stopColor="rgba(255,255,255,0.45)" />
          <stop offset="1" stopColor="rgba(255,255,255,0)" />
        </radialGradient>
        <filter id={`${id}-shadow`} x="-30%" y="-30%" width="160%" height="160%">
          <feDropShadow dx="0" dy="8" stdDeviation="5" floodColor="rgba(0,0,0,0.35)" />
        </filter>
      </defs>

      <g filter={`url(#${id}-shadow)`}>
        <circle cx="30" cy="24" r="13" fill={`url(#${id}-body)`} />
        <circle cx="70" cy="24" r="13" fill={`url(#${id}-body)`} />
        <circle cx="50" cy="41" r="28" fill={`url(#${id}-body)`} />
        <rect x="20" y="52" width="60" height="50" rx="28" fill={`url(#${id}-body)`} />
        <rect x="23" y="90" width="21" height="26" rx="11" fill={`url(#${id}-body)`} />
        <rect x="56" y="90" width="21" height="26" rx="11" fill={`url(#${id}-body)`} />
        <circle cx="50" cy="72" r="14" fill={inner} />
        <path d="M24 31c9-8 41-8 52 0" stroke="rgba(255,255,255,0.28)" strokeWidth="3" strokeLinecap="round" />
      </g>

      <ellipse cx="50" cy="49" rx="27" ry="24" fill={`url(#${id}-gloss)`} />
    </svg>
  );
}
