"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useState } from "react";
import Reveal from "./ui/Reveal";

const faqs = [
  {
    q: "¿Cuántas gomitas debo tomar?",
    a: "Toma de 2 a 3 gomitas entre 15 y 20 minutos antes de entrenar, siguiendo siempre la etiqueta."
  },
  {
    q: "¿Las gomitas AWAKN son veganas?",
    a: "Sí. AWAKN utiliza una base de pectina de origen vegetal y no contiene gelatina."
  },
  {
    q: "¿En qué se diferencia de los pre-entrenos en polvo?",
    a: "AWAKN ofrece soporte pre-entrenamiento en formato de gomita sólida: sin mezclar, sin shaker y con dosificación precisa."
  },
  {
    q: "¿Experimentaré una caída de energía?",
    a: "La fórmula está pensada para una energía más estable, aunque la respuesta a la cafeína puede variar según la persona."
  },
  {
    q: "¿Puedo tomarlo antes de cualquier entrenamiento?",
    a: "Puede usarse antes de sesiones de fuerza, cardio o entrenamiento mixto, siempre que los estimulantes sean adecuados para ti."
  },
  {
    q: "¿Hay algún aviso de seguridad?",
    a: "Estas declaraciones no han sido evaluadas por la FDA. Este producto no está destinado a diagnosticar, tratar, curar ni prevenir ninguna enfermedad."
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
            Preguntas <span className="text-accent">frecuentes</span>
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
