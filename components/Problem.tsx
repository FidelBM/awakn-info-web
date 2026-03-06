"use client";

import { motion, useReducedMotion } from "framer-motion";
import { AlertTriangle, Beaker, ClipboardList, FlaskConical, Hourglass } from "lucide-react";
import Reveal from "./ui/Reveal";

const painPoints = [
  {
    title: "Los polvos son incómodos y desordenados",
    description: "Los scoops, el polvo y la limpieza del shaker interrumpen tu rutina previa al entrenamiento.",
    icon: Beaker
  },
  {
    title: "Difíciles de medir con precisión",
    description: "Las variaciones en cada porción pueden generar energía irregular y rendimiento inconsistente.",
    icon: ClipboardList
  },
  {
    title: "Fórmulas artificiales",
    description: "Las mezclas propietarias suelen ocultar la calidad real y reducen la claridad de la etiqueta.",
    icon: FlaskConical
  },
  {
    title: "Poco prácticos para llevar",
    description: "Preparar, mezclar y cargar agua suma pasos innecesarios antes de cada sesión.",
    icon: Hourglass
  },
  {
    title: "Caídas de energía",
    description: "La estimulación intensa puede caer rápidamente y afectar la calidad del entrenamiento.",
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
            Los pre-entrenos tradicionales generan fricción.
          </h2>
          <p className="section-subtext text-center">
            En teoría funcionan, pero en la práctica agregan fricción a tu preparación.
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
