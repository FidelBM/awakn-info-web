"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Bolt, Dumbbell, Gauge, Leaf, ShieldCheck, TimerReset } from "lucide-react";
import { useState } from "react";
import Reveal from "./ui/Reveal";

const benefits = [
  { title: "Absorción rápida", copy: "Formato de acción rápida para usar antes de entrenar.", detail: "Ideal para atletas que pasan de su rutina diaria al entrenamiento sin pausa.", icon: Bolt },
  { title: "Energía sin caída", copy: "Estímulo equilibrado para un rendimiento más estable.", detail: "Reduce bajones bruscos que interrumpen la calidad de la sesión.", icon: Gauge },
  { title: "Rendimiento portátil", copy: "Sin shaker, sin polvo y sin tiempos de preparación.", detail: "Listo para llevar al gym, al trabajo o de viaje.", icon: Dumbbell },
  { title: "Certificado vegano", copy: "Base de gomita vegetal, sin ingredientes de origen animal.", detail: "Alineado con preferencias de nutrición vegana.", icon: Leaf },
  { title: "Fórmula transparente", copy: "Activos claros y dosificaciones fáciles de entender.", detail: "Sin ambigüedad de mezclas propietarias.", icon: ShieldCheck },
  { title: "Dosificación precisa", copy: "Consistencia en cada porción de gomitas.", detail: "Sin variaciones por scoop ni errores de medida.", icon: TimerReset }
];

export default function Benefits() {
  const reduceMotion = useReducedMotion();
  const [openCard, setOpenCard] = useState<number | null>(null);

  return (
    <section id="benefits" className="section-wrap">
      <div className="section-shell">
        <Reveal>
          <h2 className="section-title text-center">Por qué los atletas eligen AWAKN</h2>
          <p className="section-subtext text-center">
            Diseñado para rendimiento práctico, claridad de ingredientes y consistencia diaria.
          </p>
        </Reveal>
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {benefits.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.article
                key={item.title}
                className="glass-card group rounded-2xl p-7"
                whileHover={
                  reduceMotion
                    ? undefined
                    : { y: -6, rotate: index % 2 === 0 ? -1 : 1, boxShadow: "0 18px 36px rgba(240,56,142,0.24)" }
                }
                transition={{ duration: 0.22, delay: index * 0.015 }}
                onClick={() => setOpenCard((current) => (current === index ? null : index))}
              >
                <span className="icon-shell h-12 w-12 rounded-xl bg-[linear-gradient(130deg,rgba(240,56,142,0.28),rgba(214,31,44,0.52))] text-white">
                  <Icon className="h-6 w-6" />
                </span>
                <h3 className="mt-5 text-xl font-bold leading-tight tracking-tight">{item.title}</h3>
                <p className="mt-3 text-sm leading-6 text-[color:var(--text-secondary)]">{item.copy}</p>
                <motion.div
                  initial={false}
                  animate={{
                    height: openCard === index ? "auto" : 0,
                    opacity: openCard === index ? 1 : 0
                  }}
                  transition={{ duration: 0.25 }}
                  className="overflow-hidden md:hidden"
                >
                  <p className="pt-2 text-xs leading-6 text-white/75">{item.detail}</p>
                </motion.div>
                <p className="mt-2 hidden text-xs leading-6 text-white/70 md:block">{item.detail}</p>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
