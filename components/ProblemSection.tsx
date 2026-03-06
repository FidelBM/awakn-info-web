"use client";

import { Beaker, Clock3, FlaskConical } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import Reveal from "./ui/Reveal";

const painPoints = [
  {
    title: "Messy Rituals",
    description: "Scoops, shakers, and spills turn your pre-session routine into friction.",
    icon: Beaker
  },
  {
    title: "Inconsistent Dosing",
    description: "Traditional powders make precision hard when timing and dosage matter.",
    icon: Clock3
  },
  {
    title: "Overloaded Formulas",
    description: "Artificial blends and hard crashes leave you flat mid-session.",
    icon: FlaskConical
  }
];

export default function ProblemSection() {
  const reduceMotion = useReducedMotion();

  return (
    <section id="problem" className="section-shell">
    <Reveal>
        <h2 className="section-title text-center">
          Pre-workout shouldn&apos;t feel like a <span className="text-accent">chemistry experiment.</span>
        </h2>
        <p className="section-subtext text-center">
          Most pre-workouts create extra effort before your first rep. You need energy that fits
          your pace, not another setup process.
        </p>
      </Reveal>
      <div className="mt-12 grid gap-5 md:grid-cols-3">
        {painPoints.map((item) => (
          <motion.article
            key={item.title}
            className="glass-card group rounded-2xl p-7"
            whileHover={
              reduceMotion ? undefined : { y: -6, boxShadow: "0 18px 38px rgba(240,56,142,0.22)" }
            }
            transition={{ duration: 0.2 }}
          >
            <span className="icon-shell mb-4 bg-[rgba(240,56,142,0.14)] text-[color:var(--accent)]">
              <item.icon className="h-5 w-5" aria-hidden="true" />
            </span>
            <h3 className="text-xl font-bold">{item.title}</h3>
            <p className="mt-3 text-sm leading-6 text-[color:var(--text-secondary)]">{item.description}</p>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
