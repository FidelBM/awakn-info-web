"use client";

import { motion, useReducedMotion } from "framer-motion";
import {
  Battery,
  Beaker,
  Brain,
  Dumbbell,
  Droplets,
  Leaf,
  Zap
} from "lucide-react";
import Reveal from "./ui/Reveal";

const ingredients = [
  {
    name: "Natural Caffeine",
    dosage: "150mg",
    desc: "Steady pre-session alertness and focused training readiness.",
    icon: Zap
  },
  {
    name: "L-Citrulline",
    dosage: "2000mg",
    desc: "Supports blood flow and pump response during high-output sessions.",
    icon: Beaker
  },
  {
    name: "Beta-Alanine",
    dosage: "1600mg",
    desc: "Helps sustain intense efforts and repeated intervals.",
    icon: Dumbbell
  },
  {
    name: "B Vitamins",
    dosage: "Complex",
    desc: "Supports cellular energy pathways tied to daily performance.",
    icon: Battery
  },
  {
    name: "Electrolytes",
    dosage: "300mg",
    desc: "Hydration support to maintain output throughout your workout.",
    icon: Droplets
  },
  {
    name: "L-Theanine",
    dosage: "100mg",
    desc: "Balanced focus support for smoother energy delivery.",
    icon: Brain
  }
];

export default function IngredientsSection() {
  const reduceMotion = useReducedMotion();

  return (
    <section id="ingredients" className="section-shell border-y border-white/10">
      <Reveal>
        <h2 className="section-title text-center">
          Clean <span className="text-accent">Ingredients</span>
        </h2>
        <p className="section-subtext text-center">
          Fully transparent actives with practical dosages, designed for repeatable performance.
        </p>
      </Reveal>
      <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {ingredients.map((item) => (
          <motion.article
            key={item.name}
            className="glass-card group rounded-2xl p-6"
            whileHover={
              reduceMotion ? undefined : { y: -6, boxShadow: "0 18px 38px rgba(59,181,74,0.24)" }
            }
            transition={{ duration: 0.2 }}
          >
            <div className="flex items-center justify-between gap-3">
              <span className="icon-shell h-10 w-10 rounded-lg bg-[rgba(59,181,74,0.16)] text-[color:var(--green-accent)]">
                <item.icon className="h-5 w-5" aria-hidden="true" />
              </span>
              <span className="rounded-full bg-[rgba(59,181,74,0.18)] px-3 py-1 text-xs font-semibold text-[color:var(--green-accent)]">
                {item.dosage}
              </span>
            </div>
            <h3 className="mt-4 text-lg font-bold">{item.name}</h3>
            <p className="mt-2 text-sm leading-6 text-[color:var(--text-secondary)]">{item.desc}</p>
          </motion.article>
        ))}
      </div>
      <p className="mt-6 text-center text-xs text-white/50">
        <Leaf className="mr-1 inline h-3.5 w-3.5 text-[color:var(--green-accent)]" />
        100% vegan-friendly formula
      </p>
    </section>
  );
}
