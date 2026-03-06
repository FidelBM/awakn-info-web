export default function Footer() {
  return (
    <footer className="border-t border-white/10">
      <div className="section-shell py-10">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-lg font-black tracking-[0.15em] text-[color:var(--accent)]">AWAKN</p>
          <div className="flex items-center gap-4 text-sm text-white/65">
            <a href="#" className="transition hover:text-white">
              Privacy
            </a>
            <a href="#" className="transition hover:text-white">
              Terms
            </a>
            <a href="#" className="transition hover:text-white">
              Instagram
            </a>
            <a href="#" className="transition hover:text-white">
              TikTok
            </a>
          </div>
        </div>
        <p className="mt-6 text-xs text-white/45">
          These statements have not been evaluated by the FDA. This product is not intended to
          diagnose, treat, cure, or prevent any disease.
        </p>
      </div>
    </footer>
  );
}
