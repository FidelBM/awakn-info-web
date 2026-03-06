"use client";

import { motion, useReducedMotion } from "framer-motion";
import Reveal from "./ui/Reveal";

const testimonials = [
  {
    role: "Hybrid Athlete",
    name: "Ava Martinez",
    quote:
      "I finally get a clean push before training without the old powder ritual."
  },
  {
    role: "Performance Coach",
    name: "Jordan Lee",
    quote:
      "The format is easy to stick with. My clients actually stay consistent with it."
  },
  {
    role: "Elite Runner",
    name: "Priya N.",
    quote:
      "Smooth focus, no late-session crash. It fits race prep weeks perfectly."
  }
];

function Stars() {
  return (
    <div className="flex gap-1 text-awakn-yellow" aria-label="5 star rating">
      {Array.from({ length: 5 }).map((_, index) => (
        <svg key={index} viewBox="0 0 24 24" className="h-4 w-4 fill-current" aria-hidden="true">
          <path d="M12 2.5l2.94 5.96 6.58.96-4.76 4.64 1.13 6.55L12 17.5 6.11 20.6l1.13-6.55-4.76-4.64 6.58-.96L12 2.5z" />
        </svg>
      ))}
    </div>
  );
}

export default function TestimonialsCarousel() {
  const reduceMotion = useReducedMotion();

  return (
    <section id="reviews" className="section-shell border-y border-white/10">
      <Reveal>
        <h2 className="section-title text-center">
          Loved By <span className="text-accent">Athletes</span>
        </h2>
        <p className="section-subtext text-center">
          Early users across disciplines trust AWAKN to simplify pre-workout without compromise.
        </p>
      </Reveal>

      <div className="mt-12 grid auto-cols-[84%] grid-flow-col gap-5 overflow-x-auto pb-2 [scrollbar-width:none] md:grid-flow-row md:grid-cols-3 md:overflow-visible [&::-webkit-scrollbar]:hidden">
        {testimonials.map((testimonial) => (
          <motion.article
            key={testimonial.name}
            className="glass-card min-w-0 rounded-2xl p-6"
            initial={reduceMotion ? false : { opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={reduceMotion ? undefined : { y: -6, boxShadow: "0 18px 35px rgba(240,56,142,0.22)" }}
            transition={{ duration: 0.3 }}
          >
            <Stars />
            <p className="mt-4 text-sm leading-7 text-[color:var(--text-primary)]">&ldquo;{testimonial.quote}&rdquo;</p>
            <div className="mt-6 flex items-center gap-3">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[rgba(240,56,142,0.22)] text-sm font-bold text-[color:var(--accent)]">
                {testimonial.name
                  .split(" ")
                  .map((name) => name[0])
                  .join("")
                  .slice(0, 2)}
              </span>
              <div>
                <p className="text-sm font-bold text-white">{testimonial.name}</p>
                <p className="text-xs uppercase tracking-wider text-white/55">{testimonial.role}</p>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
