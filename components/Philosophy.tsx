import GummyField from "./decor/GummyField";
import Reveal from "./ui/Reveal";

export default function Philosophy() {
  return (
    <section id="philosophy" className="section-wrap">
      <GummyField subtle className="opacity-35" />
      <div className="section-shell">
        <Reveal>
          <div className="glass-card relative overflow-hidden rounded-3xl border border-white/15 px-6 py-10 sm:px-10 sm:py-12">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_14%_10%,rgba(240,56,142,0.2),transparent_44%)]" />
            <h2 className="section-title relative z-10 text-center">La energía no debería ser complicada.</h2>
            <p className="relative z-10 mx-auto mt-5 max-w-4xl text-center text-sm leading-7 text-[color:var(--text-secondary)] sm:text-base">
              AWAKN simplifica la nutrición funcional eliminando complicaciones y ofreciendo
              rendimiento limpio en un formato diseñado para la vida real.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
