"use client";

import {
  Bolt,
  Dumbbell,
  Gauge,
  HeartPulse,
  ShieldCheck,
  TimerReset
} from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import Reveal from "./ui/Reveal";

const benefits = [
  {
    title: "Fast Activation",
    copy: "Quick-start energy support without messy prep.",
    icon: Bolt
  },
  {
    title: "Smoother Focus",
    copy: "Calm, controlled intensity through hard sets.",
    icon: Gauge
  },
  {
    title: "Portable Format",
    copy: "Designed for athletes moving from work to workout.",
    icon: Dumbbell
  },
  {
    title: "Clean Build",
    copy: "Transparent actives and vegan-friendly composition.",
    icon: ShieldCheck
  },
  {
    title: "Endurance Support",
    copy: "Sustains output through long training blocks.",
    icon: HeartPulse
  },
  {
    title: "No Crash Drop",
    copy: "Steadier pacing from warm-up to your final effort.",
    icon: TimerReset
  }
];

export default function BenefitsSection() {
  const reduceMotion = useReducedMotion();

  return (
    <section id="benefits" className="section-shell">
      <Reveal>
        <h2 className="section-title text-center">Benefits That Match Your Pace</h2>
        <p className="section-subtext text-center">
          Built for athletes who need performance support that feels clean, modern, and repeatable.
        </p>
      </Reveal>
      <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {benefits.map((item) => {
          const Icon = item.icon;
          return (
            <motion.article
              key={item.title}
              className="glass-card group rounded-2xl p-7"
              whileHover={
                reduceMotion ? undefined : { y: -6, boxShadow: "0 18px 38px rgba(240,56,142,0.24)" }
              }
              transition={{ duration: 0.2 }}
            >
              <span className="icon-shell h-12 w-12 rounded-xl bg-[linear-gradient(130deg,rgba(240,56,142,0.25),rgba(214,31,44,0.45))] text-white">
                <Icon className="h-6 w-6" aria-hidden="true" />
              </span>
              <h3 className="mt-5 text-xl font-bold tracking-tight">{item.title}</h3>
              <p className="mt-3 text-sm leading-6 text-[color:var(--text-secondary)]">{item.copy}</p>
            </motion.article>
          );
        })}
      </div>
    </section>
  );
}
