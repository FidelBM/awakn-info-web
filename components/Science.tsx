"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Brain, Droplets, Gauge, Timer } from "lucide-react";
import Reveal from "./ui/Reveal";

const sciencePoints = [
  {
    title: "Cafeína y enfoque",
    text: "La cafeína ayuda a mejorar el estado de alerta y la velocidad de reacción, favoreciendo un mejor enfoque pre-entrenamiento.",
    icon: Brain
  },
  {
    title: "L-citrulina y flujo sanguíneo",
    text: "La L-citrulina respalda vías de óxido nítrico asociadas con una mejor circulación durante el ejercicio.",
    icon: Gauge
  },
  {
    title: "Beta-alanina y resistencia",
    text: "La beta-alanina favorece la resistencia en esfuerzos intensos al ayudar a amortiguar la fatiga muscular.",
    icon: Timer
  },
  {
    title: "Electrolitos e hidratación",
    text: "Los electrolitos ayudan a mantener el equilibrio de fluidos y respaldan la hidratación durante el entrenamiento.",
    icon: Droplets
  }
];

export default function Science() {
  const reduceMotion = useReducedMotion();

  return (
    <section id="science" className="section-wrap border-y border-white/10">
      <div className="section-shell">
        <Reveal>
          <h2 className="section-title text-center">Formulación orientada al rendimiento.</h2>
          <p className="section-subtext text-center">
            AWAKN combina ingredientes funcionales con beneficios respaldados por evidencia.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {sciencePoints.map((item, index) => (
            <Reveal key={item.title} delay={index * 0.04}>
              <motion.article
                className="glass-card group rounded-2xl p-6 sm:p-7"
                whileHover={
                  reduceMotion ? undefined : { y: -5, boxShadow: "0 18px 36px rgba(63,34,236,0.22)" }
                }
              >
                <span className="icon-shell h-11 w-11 rounded-xl bg-[rgba(63,34,236,0.2)] text-[#9f91ff]">
                  <item.icon className="h-5 w-5" />
                </span>
                <h3 className="mt-4 text-xl font-bold">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-[color:var(--text-secondary)] sm:text-base">
                  {item.text}
                </p>
              </motion.article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
