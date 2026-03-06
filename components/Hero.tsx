"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import Image from "next/image";
import GummyBear from "./decor/GummyBear";
import GummyField from "./decor/GummyField";

export default function Hero() {
  const reduceMotion = useReducedMotion();

  return (
    <section id="top" className="section-wrap border-b border-white/10">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="headline-burst left-1/2 top-0 -translate-x-1/2" />
        <motion.div
          className="absolute -top-24 left-1/2 h-[520px] w-[920px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(240,56,142,0.38)_0%,rgba(214,31,44,0.24)_32%,rgba(63,34,236,0.12)_58%,transparent_72%)] blur-3xl mix-blend-screen"
          animate={
            reduceMotion ? undefined : { x: [0, 16, -10, 0], y: [0, 10, -8, 0] }
          }
          transition={
            reduceMotion
              ? undefined
              : { duration: 11, repeat: Infinity, ease: "easeInOut" }
          }
        />
        <motion.div
          className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.18),rgba(0,0,0,0.86))]"
          animate={reduceMotion ? undefined : { opacity: [0.86, 0.78, 0.86] }}
          transition={
            reduceMotion
              ? undefined
              : { duration: 8, repeat: Infinity, ease: "easeInOut" }
          }
        />
        <GummyField subtle />
      </div>
      <div className="grain-overlay" />
      <div className="section-shell relative z-10 py-20 sm:py-24">
        <span className="confetti-triangle absolute left-[12%] top-[24%] hidden bg-[var(--accent-yellow)] sm:block" />
        <span className="confetti-triangle absolute right-[15%] top-[35%] hidden rotate-12 bg-[var(--neon-green)] sm:block" />
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <motion.div
            className="text-center lg:text-left"
            initial={reduceMotion ? false : { opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <p className="mb-6 inline-flex rounded-full border border-white/20 bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-white/90">
              Clean Energy, Reinvented
            </p>
            <h1 className="hero-title max-w-5xl">
              Reinventing{" "}
              <span className="bg-[linear-gradient(120deg,#f0388e_18%,#d61f2c_55%,#3f22ec_95%)] bg-clip-text text-transparent">
                Pre-Workout Energy.
              </span>
            </h1>
            <p className="mt-5 max-w-2xl text-balance text-base text-[color:var(--text-secondary)] sm:text-lg">
              Clean. Vegan. Solid. No mixing. No mess.
            </p>
            <p className="mt-5 max-w-xl text-sm leading-7 text-white/75 sm:text-base">
              AWAKN transforms functional pre-workout into a portable gummy format designed for
              active lifestyles.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-5 lg:justify-start">
              <a href="#product" className="btn-primary">
                Learn More
              </a>
              <a
                href="#ingredients"
                className="text-sm font-semibold text-white/80 underline decoration-white/40 underline-offset-4 transition hover:text-white hover:decoration-[var(--vibrant-pink)]"
              >
                Explore Ingredients
              </a>
            </div>
          </motion.div>

          <motion.div
            className="relative mx-auto w-full max-w-[560px]"
            initial={reduceMotion ? false : { opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
          >
            <motion.div
              className="pointer-events-none absolute left-1/2 top-1/2 h-[72%] w-[72%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(240,56,142,0.32)_0%,rgba(214,31,44,0.2)_35%,rgba(63,34,236,0.24)_68%,transparent_78%)] blur-3xl"
              animate={reduceMotion ? undefined : { opacity: [0.72, 1, 0.72], scale: [0.98, 1.03, 0.98] }}
              transition={reduceMotion ? undefined : { duration: 6, repeat: Infinity, ease: "easeInOut" }}
            />

            <div className="pointer-events-none absolute left-1/2 top-1/2 h-[84%] w-[84%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/10 bg-[conic-gradient(from_20deg,rgba(255,210,48,0.08),rgba(240,56,142,0.08),rgba(63,34,236,0.08),rgba(59,181,74,0.05),rgba(255,210,48,0.08))] blur-[2px]" />

            <motion.div
              className="relative rounded-[2rem] border border-white/15 bg-[linear-gradient(155deg,rgba(8,8,12,0.92),rgba(18,18,26,0.84))] p-6 sm:p-8"
              animate={reduceMotion ? undefined : { y: [0, -8, 0] }}
              transition={reduceMotion ? undefined : { duration: 6, repeat: Infinity, ease: "easeInOut" }}
            >
              <div className="pointer-events-none absolute -left-6 top-10 hidden md:block">
                <GummyBear color="red" size={56} opacity={0.42} blur={0.6} />
              </div>
              <div className="pointer-events-none absolute -right-5 bottom-16 hidden md:block">
                <GummyBear color="blue" size={52} opacity={0.42} blur={0.6} />
              </div>

              <div className="relative mx-auto aspect-[4/5] w-full max-w-[420px] overflow-hidden">
                <Image
                  src="/images/awakn-pack.png"
                  alt="AWAKN product packaging"
                  fill
                  priority
                  sizes="(max-width: 768px) 78vw, (max-width: 1280px) 42vw, 420px"
                  className="object-contain"
                />
              </div>
              <div className="pointer-events-none absolute inset-x-20 bottom-5 h-8 rounded-full bg-black/55 blur-xl" />
            </motion.div>
          </motion.div>
        </div>

        <a
          href="#problem"
          aria-label="Scroll to next section"
          className="mx-auto mt-12 inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-white/5 text-white/80 transition hover:border-white/40 hover:text-white"
        >
          <motion.span
            animate={reduceMotion ? undefined : { y: [0, 5, 0] }}
            transition={
              reduceMotion
                ? undefined
                : { duration: 1.4, repeat: Infinity, ease: "easeInOut" }
            }
          >
            <ArrowDown className="h-4 w-4" />
          </motion.span>
        </a>
      </div>
    </section>
  );
}
