"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, ShoppingBag } from "lucide-react";

type MobileStickyCtaProps = {
  visible: boolean;
  total: number;
  onShopClick: () => void;
};

export default function MobileStickyCta({ visible, total, onShopClick }: MobileStickyCtaProps) {
  const reduceMotion = useReducedMotion();

  if (!visible) return null;

  return (
    <motion.div
      className="fixed inset-x-0 bottom-0 z-40 border-t border-white/15 bg-awakn-black/95 p-3 backdrop-blur md:hidden"
      initial={reduceMotion ? false : { y: 70, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={reduceMotion ? { opacity: 0 } : { y: 70, opacity: 0 }}
      transition={{ duration: 0.25 }}
    >
      <button
        type="button"
        className="btn-primary flex w-full items-center justify-between"
        onClick={onShopClick}
      >
        <span className="inline-flex items-center gap-2">
          <ShoppingBag className="h-4 w-4" />
          Shop Now
        </span>
        <span className="inline-flex items-center gap-2">
          ${total.toFixed(2)}
          <ArrowRight className="h-4 w-4" />
        </span>
      </button>
    </motion.div>
  );
}
