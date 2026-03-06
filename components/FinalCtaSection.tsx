import { ArrowRight, Sparkles } from "lucide-react";
import Reveal from "./ui/Reveal";

type FinalCtaSectionProps = {
  onShopClick: () => void;
  onJoinClick: () => void;
};

export default function FinalCtaSection({ onShopClick, onJoinClick }: FinalCtaSectionProps) {
  return (
    <section className="section-shell">
      <Reveal className="card-surface bg-gradient-to-br from-awakn-red/30 via-awakn-pink/20 to-awakn-blue/30 p-10 text-center">
        <h2 className="section-title">Wake Up Different.</h2>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <button type="button" className="btn-primary" onClick={onShopClick}>
            <Sparkles className="mr-2 h-4 w-4" />
            Shop Now
            <ArrowRight className="ml-2 h-4 w-4" />
          </button>
          <button type="button" className="btn-secondary" onClick={onJoinClick}>
            Join the Movement
          </button>
        </div>
      </Reveal>
    </section>
  );
}
