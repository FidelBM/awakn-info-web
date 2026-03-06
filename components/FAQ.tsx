"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useState } from "react";
import Reveal from "./ui/Reveal";

const faqs = [
  {
    q: "How many gummies should I take?",
    a: "Take 2 to 3 gummies about 15 to 20 minutes before training, and follow label guidance."
  },
  {
    q: "Are AWAKN gummies vegan?",
    a: "Yes. AWAKN uses a plant-based pectin gummy base and contains no gelatin."
  },
  {
    q: "How is this different from powder pre-workouts?",
    a: "AWAKN delivers pre-workout support in a solid gummy format with no mixing, no shaker bottle, and precise dosing."
  },
  {
    q: "Will I experience an energy crash?",
    a: "The formula is designed for smoother energy delivery, though caffeine response can vary by individual."
  },
  {
    q: "Can I take it before any workout?",
    a: "It can be used before strength, cardio, or mixed training sessions if stimulants are appropriate for you."
  },
  {
    q: "Any safety disclaimer?",
    a: "These statements have not been evaluated by the FDA. This product is not intended to diagnose, treat, cure, or prevent any disease."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const reduceMotion = useReducedMotion();

  return (
    <section id="faq" className="section-wrap">
      <div className="section-shell">
        <Reveal>
          <h2 className="section-title text-center">
            Frequently Asked <span className="text-accent">Questions</span>
          </h2>
        </Reveal>

        <div className="mx-auto mt-10 max-w-4xl space-y-3">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <Reveal key={faq.q} delay={index * 0.03}>
                <article className="glass-card overflow-hidden rounded-2xl">
                  <h3>
                    <button
                      type="button"
                      className="flex w-full min-w-0 items-center justify-between gap-4 px-5 py-4 text-left"
                      aria-expanded={isOpen}
                      aria-controls={`faq-panel-${index}`}
                      id={`faq-header-${index}`}
                      onClick={() => setOpenIndex(isOpen ? null : index)}
                    >
                      <span className="text-sm font-bold text-white sm:text-base md:text-lg">{faq.q}</span>
                      <motion.span
                        animate={{ rotate: isOpen ? 180 : 0 }}
                        transition={{ duration: 0.2 }}
                        className="shrink-0 text-white/65"
                      >
                        <ChevronDown className="h-4 w-4" />
                      </motion.span>
                    </button>
                  </h3>

                  <AnimatePresence initial={false}>
                    {isOpen ? (
                      <motion.div
                        id={`faq-panel-${index}`}
                        role="region"
                        aria-labelledby={`faq-header-${index}`}
                        initial={reduceMotion ? false : { height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={reduceMotion ? { opacity: 0 } : { height: 0, opacity: 0 }}
                        transition={{ duration: 0.28, ease: "easeOut" }}
                        className="overflow-hidden"
                      >
                        <p className="px-5 pb-5 text-sm leading-7 text-[color:var(--text-secondary)]">{faq.a}</p>
                      </motion.div>
                    ) : null}
                  </AnimatePresence>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
