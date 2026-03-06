"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Activity, Dumbbell, Zap } from "lucide-react";
import Image from "next/image";
import Reveal from "./ui/Reveal";

const steps = [
  {
    number: "01",
    title: "Paso 1",
    copy: "Toma de 2 a 3 gomitas entre 15 y 20 minutos antes de entrenar.",
    icon: Dumbbell,
    image: "/images/awakn_1.png",
  },
  {
    number: "02",
    title: "Paso 2",
    copy: "La cafeína natural y los nutrientes de rendimiento comienzan a activarse.",
    icon: Zap,
    image: "/images/awakn_2.png",
  },
  {
    number: "03",
    title: "Paso 3",
    copy: "Entrena con energía sostenida y mayor concentración.",
    icon: Activity,
    image: "/images/awakn_3.png",
  },
];

export default function HowItWorks() {
  const reduceMotion = useReducedMotion();

  return (
    <section id="how-it-works" className="section-wrap">
      <div className="section-shell">
        <Reveal>
          <h2 className="section-title text-center">Cómo funciona</h2>
        </Reveal>
        <div className="mt-14 space-y-8">
          {steps.map((step, index) => (
            <Reveal key={step.number} delay={index * 0.05}>
              <div
                className={`grid items-center gap-6 lg:grid-cols-2 lg:gap-8 ${index % 2 === 1 ? "lg:[&>*:first-child]:order-2 lg:[&>*:last-child]:order-1" : ""}`}
              >
                <motion.article
                  className="glass-card group relative overflow-hidden rounded-3xl p-6 sm:p-8"
                  whileHover={
                    reduceMotion
                      ? undefined
                      : { y: -5, boxShadow: "0 20px 35px rgba(240,56,142,0.2)" }
                  }
                >
                  <span className="pointer-events-none absolute right-4 top-0 text-7xl font-extrabold leading-none text-white/8 sm:text-8xl">
                    {step.number}
                  </span>
                  <span className="icon-shell bg-[rgba(240,56,142,0.14)] text-[color:var(--accent)]">
                    <step.icon className="h-5 w-5" />
                  </span>
                  <h3 className="mt-4 max-w-xl text-2xl font-bold leading-tight tracking-tight">
                    {step.title}
                  </h3>
                  <p className="mt-3 max-w-xl text-sm leading-7 text-[color:var(--text-secondary)] sm:text-base">
                    {step.copy}
                  </p>
                </motion.article>

                <div className="glass-card relative overflow-hidden rounded-3xl p-5 sm:p-6">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_74%_14%,rgba(240,56,142,0.22),transparent_46%)]" />
                  <div className="relative aspect-[4/3] w-full">
                    <Image
                      src={step.image}
                      alt={`Visual de AWAKN paso ${index + 1}`}
                      fill
                      sizes="(max-width: 1024px) 92vw, 520px"
                      className="object-contain"
                    />
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
