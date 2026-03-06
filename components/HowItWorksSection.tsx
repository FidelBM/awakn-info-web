"use client";

import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import { Activity, Dumbbell, Zap } from "lucide-react";
import Reveal from "./ui/Reveal";

const steps = [
  {
    number: "01",
    title: "Take gummies",
    copy: "Open, chew, and go. No shaker and no prep time before your session.",
    icon: Dumbbell
  },
  {
    number: "02",
    title: "Feel clean activation",
    copy: "A smooth onset gives you focus and intent without sudden spikes.",
    icon: Zap
  },
  {
    number: "03",
    title: "Train with sustained focus and endurance",
    copy: "Stay locked in through lifts, intervals, and late-session volume.",
    icon: Activity
  }
];

export default function HowItWorksSection() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="section-shell">
      <Reveal>
        <h2 className="section-title text-center">
          How It <span className="text-accent">Works</span>
        </h2>
      </Reveal>
      <div className="mt-14 space-y-10">
        {steps.map((step, index) => (
          <Reveal key={step.title}>
            <div
              className={`grid items-center gap-8 lg:grid-cols-2 ${index % 2 === 1 ? "lg:[&>*:first-child]:order-2 lg:[&>*:last-child]:order-1" : ""}`}
            >
              <motion.article
                className="glass-card group relative overflow-hidden rounded-3xl p-7 sm:p-8"
                whileHover={
                  reduceMotion ? undefined : { y: -5, boxShadow: "0 20px 38px rgba(240,56,142,0.2)" }
                }
                transition={{ duration: 0.2 }}
              >
                <span className="pointer-events-none absolute right-5 top-0 text-8xl font-extrabold leading-none text-white/6 sm:text-9xl">
                  {step.number}
                </span>
                <span className="icon-shell bg-[rgba(240,56,142,0.14)] text-[color:var(--accent)]">
                  <step.icon className="h-5 w-5" />
                </span>
                <h3 className="mt-4 max-w-xl text-2xl font-bold tracking-tight">{step.title}</h3>
                <p className="mt-3 max-w-xl text-sm leading-7 text-[color:var(--text-secondary)] sm:text-base">
                  {step.copy}
                </p>
              </motion.article>
              <motion.div
                className="glass-card relative rounded-3xl p-6"
                initial={reduceMotion ? false : { opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.12 }}
              >
                <div className="absolute inset-0 rounded-3xl bg-[radial-gradient(circle_at_70%_15%,rgba(240,56,142,0.18),transparent_45%)]" />
                <Image
                  src="/product-placeholder.svg"
                  alt={`AWAKN step ${index + 1} visual`}
                  width={440}
                  height={340}
                  className="relative mx-auto h-auto w-full max-w-sm"
                />
              </motion.div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
