"use client";

import { motion, useReducedMotion } from "framer-motion";
import GummyBear from "./GummyBear";

type GummyFieldProps = {
  className?: string;
  subtle?: boolean;
};

const bears = [
  { top: "10%", left: "8%", size: 82, color: "red" as const, opacity: 0.35, blur: 0 },
  { top: "18%", right: "6%", size: 68, color: "blue" as const, opacity: 0.4, blur: 0 },
  { top: "52%", left: "4%", size: 62, color: "blue" as const, opacity: 0.28, blur: 0.5 },
  { bottom: "12%", right: "8%", size: 86, color: "red" as const, opacity: 0.32, blur: 0.5 },
  { bottom: "8%", left: "34%", size: 56, color: "red" as const, opacity: 0.26, blur: 1 },
  { top: "38%", right: "28%", size: 52, color: "blue" as const, opacity: 0.22, blur: 1 }
];

export default function GummyField({ className, subtle = false }: GummyFieldProps) {
  const reduceMotion = useReducedMotion();

  return (
    <div className={`pointer-events-none absolute inset-0 overflow-hidden ${className ?? ""}`}>
      {bears.map((bear, index) => (
        <motion.div
          key={`${bear.color}-${index}`}
          className="absolute"
          style={{
            top: bear.top,
            left: bear.left,
            right: bear.right,
            bottom: bear.bottom
          }}
          animate={
            reduceMotion
              ? undefined
              : {
                  y: [0, -12, 0],
                  x: [0, 8, 0],
                  rotate: [-2, 2, -2]
                }
          }
          transition={
            reduceMotion
              ? undefined
              : {
                  duration: 6 + index,
                  repeat: Infinity,
                  ease: "easeInOut"
                }
          }
        >
          <GummyBear
            color={bear.color}
            size={subtle ? Math.round(bear.size * 0.8) : bear.size}
            opacity={subtle ? bear.opacity * 0.65 : bear.opacity}
            blur={bear.blur}
          />
        </motion.div>
      ))}
    </div>
  );
}
