"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { ReactNode } from "react";

type GlowButtonProps = {
  children: ReactNode;
  variant?: "primary" | "secondary";
  className?: string;
  type?: "button" | "submit";
};

export default function GlowButton({
  children,
  variant = "primary",
  className,
  type = "button"
}: GlowButtonProps) {
  const reduceMotion = useReducedMotion();

  const base =
    variant === "primary"
      ? "group inline-flex items-center justify-center rounded-xl bg-[linear-gradient(125deg,var(--vibrant-pink),var(--electric-red))] px-6 py-3 text-sm font-bold text-white shadow-[0_10px_28px_rgba(214,31,44,0.35)] ring-1 ring-white/10"
      : "group inline-flex items-center justify-center rounded-xl border border-white/20 bg-white/5 px-6 py-3 text-sm font-semibold text-white";

  return (
    <motion.button
      type={type}
      whileHover={reduceMotion ? undefined : { y: -2, scale: 1.03 }}
      whileTap={reduceMotion ? undefined : { scale: 0.98 }}
      className={`${base} ${className ?? ""}`}
    >
      {children}
      {variant === "primary" ? (
        <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1.5" />
      ) : null}
    </motion.button>
  );
}
