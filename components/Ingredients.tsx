"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Battery, Beaker, Dumbbell, Droplets, Leaf, Zap } from "lucide-react";
import Reveal from "./ui/Reveal";

const ingredients = [
  { name: "Cafeína natural", dosage: "150 mg", desc: "Aporta estimulación limpia y mejora la concentración.", icon: Zap, accent: "#F0388E" },
  { name: "L-Citrulina", dosage: "2,000 mg", desc: "Favorece la producción de óxido nítrico y el flujo sanguíneo.", icon: Beaker, accent: "#3F22EC" },
  { name: "Beta-Alanina", dosage: "1,600 mg", desc: "Ayuda a reducir la fatiga en esfuerzos de alta intensidad.", icon: Dumbbell, accent: "#FFD230" },
  { name: "Vitaminas del complejo B", dosage: "Complejo B", desc: "Contribuyen al metabolismo energético y al rendimiento.", icon: Battery, accent: "#3BB54A" },
  { name: "Electrolitos", dosage: "300 mg", desc: "Ayudan a mantener la hidratación y el balance de fluidos al entrenar.", icon: Droplets, accent: "#3F22EC" },
  { name: "Pectina de origen vegetal", dosage: "Base vegana", desc: "Sustituye la gelatina con una estructura de gomita apta para veganos.", icon: Leaf, accent: "#3BB54A" }
];

export default function Ingredients() {
  const reduceMotion = useReducedMotion();

  return (
    <section id="ingredients" className="section-wrap border-y border-white/10">
      <div className="section-shell">
        <Reveal>
          <h2 className="section-title text-center">
            Ingredientes limpios
          </h2>
          <p className="section-subtext text-center">
            Ingredientes transparentes, dosis prácticas y función clara en cada fórmula.
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
          Base de gomita 100% apta para veganos
        </p>
      </div>
    </section>
  );
}
