"use client";

import { LayoutGroup, motion, useReducedMotion } from "framer-motion";
import { CheckCircle2, XCircle } from "lucide-react";
import { useState } from "react";
import GummyBear from "./decor/GummyBear";
import Reveal from "./ui/Reveal";

const powderPoints = [
  "Messy scoops and shaker cleanup",
  "Inconsistent measuring on busy days",
  "Often inconvenient outside home/gym",
  "Can feel heavy before training"
];

const gummyPoints = [
  "No mixing, no shaker, no powder cloud",
  "Precise serving built into each gummy",
  "Pocket-ready for commute or warm-up",
  "Clean, practical pre-session routine"
];

export default function ComparisonToggle() {
  const [mode, setMode] = useState<"powder" | "gummies">("gummies");
  const reduceMotion = useReducedMotion();
  const isGummies = mode === "gummies";
  const points = isGummies ? gummyPoints : powderPoints;

  return (
    <section className="section-wrap border-y border-white/10">
      <div className="section-shell">
        <Reveal>
          <h2 className="section-title text-center">Powder vs. AWAKN Gummies</h2>
          <p className="section-subtext text-center">
            Choose the format that fits real-world training flow.
          </p>
        </Reveal>

        <Reveal className="mt-10">
          <div
            className={`glass-card rounded-3xl p-4 sm:p-6 ${isGummies ? "border-[rgba(63,34,236,0.35)]" : "border-[rgba(214,31,44,0.32)]"}`}
          >
            <LayoutGroup id="compare-tabs">
              <div className="mx-auto flex w-full max-w-md items-center justify-between gap-4 border-b border-white/15 px-1">
                {[
                  { key: "powder", label: "Powder" },
                  { key: "gummies", label: "AWAKN Gummies" }
                ].map((tab) => {
                  const active = mode === tab.key;
                  return (
                    <button
                      key={tab.key}
                      type="button"
                      className={`relative w-full py-3 text-sm font-semibold ${active ? "text-white" : "text-white/60"}`}
                      aria-pressed={active}
                      onClick={() => setMode(tab.key as "powder" | "gummies")}
                    >
                      {tab.label}
                      {active ? (
                        <motion.span
                          layoutId="compare-underline"
                          className="absolute bottom-0 left-0 h-[2px] w-full rounded-full bg-[linear-gradient(90deg,var(--accent),var(--accent-strong))]"
                        />
                      ) : null}
                    </button>
                  );
                })}
              </div>
            </LayoutGroup>
            <div className="mt-4 flex items-center justify-center gap-3 text-xs font-semibold uppercase tracking-[0.16em] text-white/70">
              <motion.div
                key={mode}
                initial={reduceMotion ? false : { opacity: 0, y: 6, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.22 }}
                className="relative"
              >
                <GummyBear color={isGummies ? "blue" : "red"} size={34} opacity={0.85} />
              </motion.div>
              {isGummies ? "Gummy Mode Active" : "Powder Mode Active"}
            </div>

            <motion.div
              key={mode}
              initial={reduceMotion ? false : { opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.25 }}
              className="mt-6 grid gap-4 md:grid-cols-2"
            >
              {points.map((item) => (
                <div
                  key={item}
                  className={`glass-card flex min-w-0 items-center gap-3 rounded-xl px-4 py-3 ${isGummies ? "bg-[linear-gradient(120deg,rgba(63,34,236,0.14),rgba(240,56,142,0.1))]" : "bg-[linear-gradient(120deg,rgba(214,31,44,0.14),rgba(240,56,142,0.08))]"}`}
                >
                  {isGummies ? (
                    <CheckCircle2 className="h-5 w-5 shrink-0 text-[color:var(--green-accent)]" />
                  ) : (
                    <XCircle className="h-5 w-5 shrink-0 text-[color:var(--accent)]" />
                  )}
                  <p className="text-sm text-white/85">{item}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
