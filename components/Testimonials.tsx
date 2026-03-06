"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { useState } from "react";
import Reveal from "./ui/Reveal";

const testimonials = [
  {
    role: "Hybrid Athlete",
    name: "Ava Martinez",
    quote: "I finally get a clean push before training without the old powder ritual."
  },
  {
    role: "Performance Coach",
    name: "Jordan Lee",
    quote: "The format is easy to stick with. My clients actually stay consistent with it."
  },
  {
    role: "Elite Runner",
    name: "Priya N.",
    quote: "Smooth focus, no late-session crash. It fits race prep weeks perfectly."
  }
];

function Stars() {
  return (
    <div className="flex gap-1 text-[#ffd230]" aria-label="5 star rating">
      {Array.from({ length: 5 }).map((_, index) => (
        <svg key={index} viewBox="0 0 24 24" className="h-4 w-4 fill-current" aria-hidden="true">
          <path d="M12 2.5l2.94 5.96 6.58.96-4.76 4.64 1.13 6.55L12 17.5 6.11 20.6l1.13-6.55-4.76-4.64 6.58-.96L12 2.5z" />
        </svg>
      ))}
    </div>
  );
}

export default function Testimonials() {
  const reduceMotion = useReducedMotion();
  const [index, setIndex] = useState(0);

  const next = () => setIndex((current) => (current + 1) % testimonials.length);
  const prev = () => setIndex((current) => (current - 1 + testimonials.length) % testimonials.length);

  return (
    <section id="reviews" className="section-wrap border-y border-white/10">
      <div className="section-shell">
        <Reveal>
          <h2 className="section-title text-center">
            Loved By <span className="text-accent">Athletes</span>
          </h2>
          <p className="section-subtext text-center">
            Premium performance users trust AWAKN for clean consistency and focused output.
          </p>
        </Reveal>

        <div className="mt-10 md:hidden">
          <div className="flex snap-x snap-mandatory gap-4 overflow-x-auto pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {testimonials.map((testimonial) => (
              <motion.article
                key={testimonial.name}
                className="glass-card min-w-[88%] snap-center rounded-2xl p-6"
                whileHover={
                  reduceMotion ? undefined : { y: -4, boxShadow: "0 18px 34px rgba(240,56,142,0.2)" }
                }
              >
                <motion.div
                  animate={reduceMotion ? undefined : { y: [0, -2, 0], rotate: [0, -4, 0] }}
                  transition={reduceMotion ? undefined : { duration: 2.6, repeat: Infinity, ease: "easeInOut" }}
                >
                  <Quote className="h-5 w-5 text-[color:var(--accent)]" />
                </motion.div>
                <Stars />
                <p className="mt-4 text-sm leading-7 text-[color:var(--text-primary)]">&ldquo;{testimonial.quote}&rdquo;</p>
                <p className="mt-5 text-sm font-bold">{testimonial.name}</p>
                <p className="text-xs uppercase tracking-wider text-white/55">{testimonial.role}</p>
              </motion.article>
            ))}
          </div>
        </div>

        <div className="mt-10 hidden md:block">
          <div className="flex items-center justify-end gap-2">
            <button type="button" className="btn-secondary p-2" onClick={prev} aria-label="Previous testimonial">
              <ChevronLeft className="h-4 w-4" />
            </button>
            <button type="button" className="btn-secondary p-2" onClick={next} aria-label="Next testimonial">
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>

          <div className="relative mt-4 overflow-hidden">
            <motion.div
              className="flex"
              animate={reduceMotion ? undefined : { x: `-${index * 100}%` }}
              transition={{ duration: 0.45, ease: "easeOut" }}
              style={reduceMotion ? { transform: `translateX(-${index * 100}%)` } : undefined}
            >
              {testimonials.map((testimonial) => (
                <article key={testimonial.name} className="w-full shrink-0 px-1">
                  <div className="glass-card rounded-2xl p-7">
                    <motion.div
                      animate={reduceMotion ? undefined : { y: [0, -2, 0], rotate: [0, -3, 0] }}
                      transition={reduceMotion ? undefined : { duration: 2.8, repeat: Infinity, ease: "easeInOut" }}
                    >
                      <Quote className="h-5 w-5 text-[color:var(--accent)]" />
                    </motion.div>
                    <Stars />
                    <p className="mt-4 max-w-3xl text-base leading-8 text-[color:var(--text-primary)]">
                      &ldquo;{testimonial.quote}&rdquo;
                    </p>
                    <p className="mt-5 text-sm font-bold">{testimonial.name}</p>
                    <p className="text-xs uppercase tracking-wider text-white/55">{testimonial.role}</p>
                  </div>
                </article>
              ))}
            </motion.div>
          </div>

          <div className="mt-5 flex justify-center gap-2">
            {testimonials.map((_, dotIndex) => (
              <button
                key={dotIndex}
                type="button"
                aria-label={`Go to testimonial ${dotIndex + 1}`}
                onClick={() => setIndex(dotIndex)}
                className={`h-2 rounded-full transition-all ${dotIndex === index ? "w-7 bg-[color:var(--accent)]" : "w-2 bg-white/35"}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
