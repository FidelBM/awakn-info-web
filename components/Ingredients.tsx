"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Battery, Beaker, Dumbbell, Droplets, Leaf, Zap } from "lucide-react";
import Reveal from "./ui/Reveal";

const ingredients = [
  { name: "Natural Caffeine", dosage: "150 mg", desc: "Provides clean stimulation and improved focus.", icon: Zap, accent: "#F0388E" },
  { name: "L-Citrulline", dosage: "2,000 mg", desc: "Supports nitric oxide production and blood flow.", icon: Beaker, accent: "#3F22EC" },
  { name: "Beta-Alanine", dosage: "1,600 mg", desc: "Helps buffer fatigue during high-intensity efforts.", icon: Dumbbell, accent: "#FFD230" },
  { name: "B Vitamins", dosage: "B-complex", desc: "Supports cellular energy metabolism and performance output.", icon: Battery, accent: "#3BB54A" },
  { name: "Electrolytes", dosage: "300 mg", desc: "Helps maintain hydration and fluid balance while training.", icon: Droplets, accent: "#3F22EC" },
  { name: "Plant-Based Pectin", dosage: "Vegan base", desc: "Replaces gelatin with a vegan-friendly gummy structure.", icon: Leaf, accent: "#3BB54A" }
];

export default function Ingredients() {
  const reduceMotion = useReducedMotion();

  return (
    <section id="ingredients" className="section-wrap border-y border-white/10">
      <div className="section-shell">
        <Reveal>
          <h2 className="section-title text-center">
            Clean Ingredients.
          </h2>
          <p className="section-subtext text-center">
            Transparent ingredient cards with practical dosages and clear function.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {ingredients.map((item) => (
            <motion.article
              key={item.name}
              className="glass-card group rounded-2xl p-6"
              whileHover={
                reduceMotion ? undefined : { y: -6, boxShadow: `0 18px 34px ${item.accent}44` }
              }
            >
              <div className="flex items-center justify-between gap-3">
                <span
                  className="icon-shell h-10 w-10 rounded-lg"
                  style={{
                    backgroundColor: `${item.accent}26`,
                    color: item.accent
                  }}
                >
                  <item.icon className="h-5 w-5" />
                </span>
                <span className="rounded-full bg-[rgba(59,181,74,0.2)] px-3 py-1 text-xs font-semibold text-[color:var(--green-accent)]">
                  {item.dosage}
                </span>
              </div>
              <div className="mt-4 flex items-start justify-between gap-3">
                <h3 className="text-lg font-bold">{item.name}</h3>
              </div>
              <p className="mt-2 text-sm leading-6 text-[color:var(--text-secondary)]">{item.desc}</p>
            </motion.article>
          ))}
        </div>

        <p className="mt-6 text-center text-xs text-white/55">
          <Leaf className="mr-1 inline h-3.5 w-3.5 text-[color:var(--green-accent)]" />
          100% vegan-friendly gummy base
        </p>
      </div>
    </section>
  );
}
