"use client";

import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

const navItems = [
  { label: "Inicio", href: "#top", id: "top" },
  { label: "Producto", href: "#product", id: "product" },
  { label: "Ingredientes", href: "#ingredients", id: "ingredients" },
  { label: "Ciencia", href: "#science", id: "science" },
  { label: "Beneficios", href: "#benefits", id: "benefits" },
  { label: "Preguntas Frecuentes", href: "#faq", id: "faq" },
];

export default function NavBar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("top");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 14);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = navItems
      .map((item) => document.getElementById(item.id))
      .filter(Boolean) as HTMLElement[];

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]?.target.id) {
          setActive(visible[0].target.id);
        }
      },
      { rootMargin: "-35% 0px -45% 0px", threshold: [0.2, 0.4, 0.6] },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition duration-300 ${scrolled ? "border-b border-white/10 bg-black/45 backdrop-blur-xl" : "border-b border-transparent bg-transparent"}`}
    >
      <nav className="mx-auto flex w-full max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <a
          href="#top"
          className="text-lg font-extrabold tracking-[0.22em] text-[color:var(--accent)] sm:text-xl"
        >
          AWAKN
        </a>

        <button
          type="button"
          className="inline-flex rounded-lg border border-white/15 p-2 text-white md:hidden"
          aria-label={open ? "Cerrar menu de navegación" : "Abrir menu de navegación"}
          onClick={() => setOpen((current) => !current)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>

        <ul className="hidden items-center gap-7 md:flex">
          {navItems.map((item) => (
            <li key={item.id}>
              <a
                href={item.href}
                className={`group relative text-sm font-semibold transition ${active === item.id ? "text-white" : "text-[color:var(--text-secondary)] hover:text-white"}`}
              >
                {item.label}
                {active === item.id ? (
                  <motion.span
                    layoutId="nav-active-line"
                    className="absolute -bottom-1 left-0 h-px w-full bg-[color:var(--accent)]"
                  />
                ) : (
                  <span className="absolute -bottom-1 left-0 h-px w-0 bg-[color:var(--accent)] transition-all duration-300 group-hover:w-full" />
                )}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {open ? (
        <div className="border-t border-white/10 bg-black/70 backdrop-blur-xl md:hidden">
          <div className="mx-auto flex w-full max-w-7xl flex-col gap-2 px-4 py-4 sm:px-6">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={item.href}
                className={`rounded-lg px-3 py-2 text-sm font-semibold ${active === item.id ? "bg-white/10 text-white" : "text-white/70"}`}
                onClick={() => setOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      ) : null}
    </header>
  );
}
