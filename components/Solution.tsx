"use client";

import { motion, useReducedMotion } from "framer-motion";
import { CheckCircle2, Leaf, ShieldCheck, Sparkles, Zap } from "lucide-react";
import Image from "next/image";
import GummyField from "./decor/GummyField";
import Reveal from "./ui/Reveal";

const points = [
  {
    title: "Formato sólido en gomita",
    text: "Un formato práctico de pre-entrenamiento que elimina por completo la fricción del polvo.",
    icon: CheckCircle2,
  },
  {
    title: "Dosificación precisa",
    text: "Consistencia en cada porción, sin scoops, sin dudas y sin mezclar.",
    icon: ShieldCheck,
  },
  {
    title: "Energía portable",
    text: "Gomitas fáciles de llevar para gimnasio, clases, corridas y días de viaje.",
    icon: Sparkles,
  },
  {
    title: "Sin necesidad de mezclar",
    text: "Tómalas y entrena en segundos, sin preparación, shaker ni limpieza.",
    icon: Zap,
  },
  {
    title: "Fórmula de origen vegetal",
    text: "Base de gomita apta para veganos elaborada con pectina vegetal.",
    icon: Leaf,
  },
];

export default function Solution() {
  const reduceMotion = useReducedMotion();

  return (
    <section id="product" className="section-wrap">
      <GummyField className="opacity-45" subtle />
      <div className="section-shell">
        <div className="grid items-start gap-8 lg:grid-cols-2 lg:gap-10">
          <Reveal>
            <h2 className="section-title">
              Una forma más simple de potenciar tu rendimiento.
            </h2>
            <p className="mt-5 max-w-xl text-base leading-7 text-[color:var(--text-secondary)] sm:text-lg">
              AWAKN ofrece un apoyo pre-entrenamiento práctico y consistente en un formato
              diseñado para rutinas reales de entrenamiento y estilos de vida activos.
            </p>
            <ul className="mt-8 space-y-4">
              {points.map((item) => (
                <motion.li
                  key={item.title}
                  className="glass-card group flex min-w-0 items-start gap-4 rounded-2xl p-4"
                  whileHover={
                    reduceMotion
                      ? undefined
                      : { y: -4, boxShadow: "0 16px 30px rgba(240,56,142,0.2)" }
                  }
                >
                  <span className="icon-shell h-10 w-10 shrink-0 rounded-lg bg-[rgba(240,56,142,0.15)] text-[color:var(--accent)]">
                    <item.icon className="h-5 w-5" />
                  </span>
                  <span className="min-w-0">
                    <span className="block text-base font-bold text-white">
                      {item.title}
                    </span>
                    <span className="mt-1 block text-sm text-[color:var(--text-secondary)]">
                      {item.text}
                    </span>
                  </span>
                </motion.li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={0.1} variant="scale">
            <div className="relative overflow-hidden rounded-3xl">
              <div className="absolute inset-0 rounded-3xl bg-[linear-gradient(130deg,rgba(240,56,142,0.42),rgba(214,31,44,0.24),rgba(240,56,142,0.22))] blur-xl" />
              <motion.div
                className="glass-card relative overflow-hidden rounded-3xl p-6 sm:p-8"
                animate={reduceMotion ? undefined : { y: [0, -7, 0] }}
                transition={
                  reduceMotion
                    ? undefined
                    : { duration: 4.4, repeat: Infinity, ease: "easeInOut" }
                }
              >
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_78%_12%,rgba(240,56,142,0.26),transparent_48%)]" />
                <span className="confetti-triangle absolute left-5 top-5 bg-[var(--accent-yellow)]" />
                <span className="confetti-triangle absolute bottom-9 right-7 rotate-12 bg-[var(--neon-green)]" />
                <div className="relative rounded-3xl border border-white/15 bg-[linear-gradient(155deg,rgba(8,8,12,0.94),rgba(16,16,22,0.84))] p-5">
                  <p className="inline-flex rounded-full bg-[rgba(240,56,142,0.2)] px-3 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-[var(--vibrant-pink)]">
                    Gomitas AWAKN
                  </p>
                  <h3 className="mt-3 text-2xl font-extrabold leading-tight text-white sm:text-3xl">
                    CHERRY
                    <span className="block bg-[linear-gradient(120deg,#f0388e,#d61f2c)] bg-clip-text text-transparent">
                      ENERGY PACK
                    </span>
                  </h3>
                  <div className="mt-4 flex flex-wrap gap-2">
                    <span className="rounded-full border border-white/20 bg-white/5 px-3 py-1 text-[10px] font-bold uppercase tracking-wider">
                      Vegano
                    </span>
                    <span className="rounded-full border border-[rgba(63,34,236,0.45)] bg-[rgba(63,34,236,0.18)] px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-[#cfc7ff]">
                      Sin mezclar
                    </span>
                  </div>
                  <div className="relative mt-5 aspect-[16/10] w-full overflow-hidden rounded-2xl border border-white/10 bg-[linear-gradient(135deg,rgba(214,31,44,0.16),rgba(240,56,142,0.08),rgba(63,34,236,0.14))]">
                    <Image
                      src="/images/awakn-way.png"
                      alt="Imagen del producto AWAKN"
                      fill
                      sizes="(max-width: 1024px) 90vw, 400px"
                      className="h-full w-full"
                    />
                  </div>
                </div>
                <div className="absolute right-4 top-4 rounded-full border border-[rgba(59,181,74,0.45)] bg-[rgba(59,181,74,0.22)] px-3 py-2 text-[11px] font-semibold tracking-wide text-[#ccffd4]">
                  Formulación de rendimiento
                </div>
                <div className="absolute bottom-4 right-4 inline-flex items-center gap-1.5 rounded-full border border-white/20 bg-black/50 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.14em] text-white/85">
                  <Leaf className="h-3.5 w-3.5 text-[var(--neon-green)]" />
                  Origen vegetal
                </div>
              </motion.div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
