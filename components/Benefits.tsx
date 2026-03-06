"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Bolt, Dumbbell, Gauge, Leaf, ShieldCheck, TimerReset } from "lucide-react";
import { useState } from "react";
import Reveal from "./ui/Reveal";

const benefits = [
  { title: "Fast absorption", copy: "Rapid format designed for quick pre-session use.", detail: "Built for athletes who move from day mode to training fast.", icon: Bolt },
  { title: "No crash energy", copy: "Balanced stimulation for smoother workout output.", detail: "Reduces abrupt drop-offs that interrupt quality sessions.", icon: Gauge },
  { title: "Portable performance", copy: "No shaker bottle, no powder mess, no setup delay.", detail: "Carry-ready format for gym, commute, or travel.", icon: Dumbbell },
  { title: "Vegan certified", copy: "Plant-based gummy base with no gelatin ingredients.", detail: "Aligned with vegan-friendly nutrition preferences.", icon: Leaf },
  { title: "Transparent formulation", copy: "Clear actives and practical dosages you can read.", detail: "No proprietary blend ambiguity.", icon: ShieldCheck },
  { title: "Precise dosing", copy: "Consistent serving with every gummy intake.", detail: "No scoop variance or measurement guesswork.", icon: TimerReset }
];

export default function Benefits() {
  const reduceMotion = useReducedMotion();
  const [openCard, setOpenCard] = useState<number | null>(null);

  return (
    <section id="benefits" className="section-wrap">
      <div className="section-shell">
        <Reveal>
          <h2 className="section-title text-center">Why athletes choose AWAKN.</h2>
          <p className="section-subtext text-center">
            Built for practical performance, ingredient clarity, and everyday consistency.
          </p>
        </Reveal>
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {benefits.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.article
                key={item.title}
                className="glass-card group rounded-2xl p-7"
                whileHover={
                  reduceMotion
                    ? undefined
                    : { y: -6, rotate: index % 2 === 0 ? -1 : 1, boxShadow: "0 18px 36px rgba(240,56,142,0.24)" }
                }
                transition={{ duration: 0.22, delay: index * 0.015 }}
                onClick={() => setOpenCard((current) => (current === index ? null : index))}
              >
                <span className="icon-shell h-12 w-12 rounded-xl bg-[linear-gradient(130deg,rgba(240,56,142,0.28),rgba(214,31,44,0.52))] text-white">
                  <Icon className="h-6 w-6" />
                </span>
                <h3 className="mt-5 text-xl font-bold leading-tight tracking-tight">{item.title}</h3>
                <p className="mt-3 text-sm leading-6 text-[color:var(--text-secondary)]">{item.copy}</p>
                <motion.div
                  initial={false}
                  animate={{
                    height: openCard === index ? "auto" : 0,
                    opacity: openCard === index ? 1 : 0
                  }}
                  transition={{ duration: 0.25 }}
                  className="overflow-hidden md:hidden"
                >
                  <p className="pt-2 text-xs leading-6 text-white/75">{item.detail}</p>
                </motion.div>
                <p className="mt-2 hidden text-xs leading-6 text-white/70 md:block">{item.detail}</p>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
