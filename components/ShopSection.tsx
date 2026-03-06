"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, ShoppingCart, Sparkles } from "lucide-react";
import Reveal from "./ui/Reveal";

type ShopSectionProps = {
  quantity: number;
  cartCount: number;
  unitPrice: number;
  justAdded: boolean;
  onDecreaseQty: () => void;
  onIncreaseQty: () => void;
  onAddToCart: () => void;
  onCheckout: () => void;
};

export default function ShopSection({
  quantity,
  cartCount,
  unitPrice,
  justAdded,
  onDecreaseQty,
  onIncreaseQty,
  onAddToCart,
  onCheckout
}: ShopSectionProps) {
  const reduceMotion = useReducedMotion();
  const subtotal = (unitPrice * cartCount).toFixed(2);

  return (
    <section id="shop" className="section-shell border-y border-white/10">
      <Reveal>
        <h2 className="section-title">Shop AWAKN</h2>
        <p className="section-copy">Grab your clean pre-workout energy. No mess. No friction.</p>
      </Reveal>
      <div className="mt-10 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <motion.article
          className="card-surface p-6"
          whileHover={
            reduceMotion ? undefined : { y: -6, boxShadow: "0 18px 36px rgba(214,31,44,0.22)" }
          }
          transition={{ duration: 0.2 }}
        >
          <p className="text-xs font-black uppercase tracking-[0.2em] text-awakn-green">
            AWAKN PRE-WORKOUT GUMMIES
          </p>
          <h3 className="mt-2 text-2xl font-black">Cherry</h3>
          <p className="mt-1 text-sm text-slate-300">30 servings • vegan • precise dose</p>
          <p className="mt-6 text-3xl font-black">${unitPrice.toFixed(2)}</p>
          <div className="mt-6 flex flex-wrap items-center gap-4">
            <div className="flex items-center rounded-full border border-white/20 bg-white/5">
              <button
                type="button"
                aria-label="Decrease quantity"
                className="px-4 py-2 text-lg font-bold text-white transition hover:text-awakn-yellow"
                onClick={onDecreaseQty}
              >
                -
              </button>
              <span className="w-10 text-center text-sm font-bold">{quantity}</span>
              <button
                type="button"
                aria-label="Increase quantity"
                className="px-4 py-2 text-lg font-bold text-white transition hover:text-awakn-yellow"
                onClick={onIncreaseQty}
              >
                +
              </button>
            </div>
            <button type="button" className="btn-primary" onClick={onAddToCart}>
              <motion.span
                animate={
                  reduceMotion || !justAdded
                    ? {}
                    : { scale: [1, 1.22, 1], rotate: [0, -12, 12, 0] }
                }
                transition={{ duration: 0.45 }}
                className="mr-2 inline-flex"
              >
                <ShoppingCart className="h-4 w-4" />
              </motion.span>
              Add to Cart
            </button>
            <motion.span
              className="text-xs font-bold uppercase tracking-wider text-awakn-yellow"
              animate={reduceMotion || !justAdded ? { opacity: 0.7 } : { opacity: [0.7, 1, 0.7] }}
              transition={{ duration: 0.6 }}
            >
              <Sparkles className="mr-1 inline h-3 w-3" />
              Ready in seconds
            </motion.span>
          </div>
        </motion.article>

        <motion.aside
          className="card-surface p-6"
          aria-live="polite"
          initial={reduceMotion ? false : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.35 }}
        >
          <h3 className="text-xl font-black">Cart Summary</h3>
          <div className="mt-5 space-y-2 text-sm">
            <p className="flex items-center justify-between text-slate-300">
              <span>Items</span>
              <span className="font-semibold text-white">{cartCount}</span>
            </p>
            <p className="flex items-center justify-between text-slate-300">
              <span>Subtotal</span>
              <span className="font-semibold text-white">${subtotal}</span>
            </p>
          </div>
          <button
            type="button"
            className="btn-secondary mt-6 w-full"
            onClick={onCheckout}
            disabled={cartCount === 0}
          >
            Checkout
            <ArrowRight className="ml-2 h-4 w-4" />
          </button>
          {cartCount === 0 ? (
            <p className="mt-3 text-xs text-slate-400">Add at least one product to continue.</p>
          ) : null}
        </motion.aside>
      </div>
    </section>
  );
}
