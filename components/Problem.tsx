"use client";

import { motion, useReducedMotion } from "framer-motion";
import { AlertTriangle, Beaker, ClipboardList, FlaskConical, Hourglass } from "lucide-react";
import Reveal from "./ui/Reveal";

const painPoints = [
  {
    title: "Messy powders",
    description: "Scoops, dust, and shaker cleanup interrupt the pre-training routine.",
    icon: Beaker
  },
  {
    title: "Inconsistent dosing",
    description: "Serving variation can lead to uneven energy and unpredictable intensity.",
    icon: ClipboardList
  },
  {
    title: "Artificial ingredient blends",
    description: "Proprietary formulas often hide quality and make labels harder to trust.",
    icon: FlaskConical
  },
  {
    title: "Inconvenient preparation",
    description: "Mixing, carrying water, and cleaning create extra steps before every session.",
    icon: Hourglass
  },
  {
    title: "Energy crashes",
    description: "Aggressive stimulation can drop off quickly and reduce workout consistency.",
    icon: AlertTriangle
  }
];

export default function Problem() {
  const reduceMotion = useReducedMotion();

  return (
    <section id="problem" className="section-wrap">
      <div className="section-shell">
        <Reveal>
          <h2 className="section-title mx-auto max-w-4xl text-center">
            Traditional pre-workout supplements create friction.
          </h2>
          <p className="section-subtext text-center">
            Legacy powder formats are effective in theory, but often inconvenient in practice.
          </p>
        </Reveal>
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-5">
          {painPoints.map((item, index) => (
            <motion.article
              key={item.title}
              className="glass-card group relative overflow-hidden rounded-2xl p-6 sm:p-7"
              whileHover={
                reduceMotion ? undefined : { y: -6, boxShadow: "0 18px 38px rgba(214,31,44,0.26)" }
              }
              transition={{ duration: 0.2, delay: index * 0.02 }}
            >
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_8%_5%,rgba(240,56,142,0.22),transparent_45%)]" />
              <span className="icon-shell relative z-10 mb-4 bg-[rgba(214,31,44,0.2)] text-[color:var(--accent)]">
                <item.icon className="h-5 w-5" />
              </span>
              <h3 className="relative z-10 text-xl font-bold leading-tight">{item.title}</h3>
              <p className="relative z-10 mt-3 text-sm leading-6 text-[color:var(--text-secondary)]">
                {item.description}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
