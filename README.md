# AWAKN Landing Page

High-converting, premium landing page for **AWAKN Vegan Pre-Workout Gummies** built with **Next.js (App Router) + Tailwind CSS + TypeScript**.

## Requirements

- Node.js 18.18+ (or newer LTS)
- npm 9+

## Local Setup

1. Install dependencies:

```bash
npm install
```

2. Run the development server:

```bash
npm run dev
```

3. Open:

```text
http://localhost:3000
```

## Production Build

```bash
npm run build
npm run start
```

## Implemented Features

- Next.js App Router project structure
- Tailwind CSS configured via `tailwind.config.ts` and `app/globals.css`
- Sticky navigation with anchor links (Problem, Solution, Ingredients, Reviews, Shop)
- Full section set:
  - Hero
  - Problem
  - Solution (+ stylized CSS packaging mockup)
  - How It Works
  - Ingredients grid
  - Benefits with icons
  - Social proof testimonials
  - Brand philosophy
  - Final CTA
  - Footer + disclaimer
- Mock shop UX:
  - Quantity selector
  - Add-to-cart behavior
  - Inline cart summary
  - Checkout modal with email validation ("Checkout coming soon")
  - Join-the-movement modal with email capture
- Framer Motion interactions:
  - Section reveal animations
  - Card hover lift + glow
  - Animated modal transitions
  - Add-to-cart animated feedback
- Interactive premium modules:
  - Powder vs Gummies comparison toggle
  - Swipe-friendly testimonials carousel with desktop controls
  - Accessible FAQ accordion
  - Mobile sticky CTA with live cart total
  - Scroll progress indicator
- SEO metadata in `app/layout.tsx`
- JSON-LD Product schema in `app/page.tsx`
- Mobile-first responsive layout with accessible focus states
