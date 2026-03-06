import Reveal from "./ui/Reveal";

export default function PhilosophySection() {
  return (
    <section className="section-shell">
      <Reveal className="card-surface bg-gradient-to-r from-awakn-blue/25 via-awakn-pink/20 to-awakn-red/20 p-10 text-center">
        <h2 className="section-title">Energy shouldn&apos;t be complicated.</h2>
        <p className="mx-auto mt-4 max-w-3xl text-base text-slate-200 sm:text-lg">
          AWAKN simplifies functional nutrition by removing friction and delivering clean
          performance in a format designed for real life.
        </p>
      </Reveal>
    </section>
  );
}
