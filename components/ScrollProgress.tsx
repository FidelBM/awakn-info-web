"use client";

import { motion, useReducedMotion, useScroll, useSpring } from "framer-motion";

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const reduceMotion = useReducedMotion();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: reduceMotion ? 1000 : 170,
    damping: reduceMotion ? 100 : 28,
    restDelta: 0.001
  });

  return (
    <motion.div
      aria-hidden="true"
      className="fixed left-0 right-0 top-0 z-[70] h-1 origin-left bg-[linear-gradient(90deg,var(--accent-strong),var(--accent),#ff6a7d)] shadow-[0_0_16px_rgba(240,56,142,0.45)]"
      style={{ scaleX }}
    />
  );
}
