# Asr Al-Shams — Website Redesign Plan & Build Summary

**Project:** Complete redesign & rebuild of `https://aseralshams.com/`
**Deliverable:** Modern, animated, performant Arabic (RTL) single-page web app
**Date:** August 2026

---

## 1. Tech Stack (chosen & implemented)

| Layer | Technology | Rationale |
|---|---|---|
| Framework | **Next.js 16** (App Router, Turbopack) | File-based routing, RSC, image/font optimization, edge-ready |
| Language | **TypeScript 5** (strict) | Type-safe refactors as the site grows |
| Styling | **Tailwind CSS 4** + `tw-animate-css` | Utility-first; v4 `@utility` API for custom glass / bento classes |
| UI Kit | **shadcn/ui** (New York) + **lucide-react** icons | Accessible primitives, consistent tokens, fast iteration |
| Animation | **framer-motion 12** | Reveal-on-scroll, layout animations (`layoutId`), drag-free interactions |
| Fonts | **Cairo** (headings) + **Tajawal** (body) via `next/font/google` | Native Arabic shaping, self-hosted, zero CLS |
| Layout | Full **RTL** (`dir="rtl"` `lang="ar"`) | Match source language & culture |
| Toasts | **sonner** | Lightweight, accessible form feedback |

> **Note on Astro vs. Next.js:** You mentioned preferring Astro/React. For a marketing site this size with heavy interactivity (animated hero, scroll reveals, glassmorphism, contact form), Next.js App Router + React Server Components gives a simpler mental model and richer interactive primitives than Astro's islands, while still shipping near-zero JS for above-the-fold server-rendered content. If you later need a content-heavy blog, Astro is a great companion for that sub-section.

---

## 2. Design System

### 2.1 Color Palette — "Solar Tech Premium"

| Token | OKLCH | Role |
|---|---|---|
| `--background` | `oklch(0.13 0.025 250)` | Deep night sky (canvas) |
| `--primary` | `oklch(0.78 0.18 75)` | Solar amber (CTAs, accents) |
| `--secondary` | `oklch(0.65 0.21 45)` | Sunset orange (gradients) |
| `--accent` | `oklch(0.85 0.17 85)` | Sun yellow (highlights) |
| `--foreground` | `oklch(0.97 0.01 60)` | Cream white (body text) |
| `--muted-foreground` | `oklch(0.72 0.02 60)` | Slate (secondary text) |
| `--card` | `oklch(0.18 0.03 250 / 70%)` | Translucent slate (glass) |

### 2.2 Typography
- **Headings:** Cairo (700–900) — modern Arabic sans, tight letter-spacing
- **Body:** Tajawal (400–500) — highly legible at small sizes
- **Numbers:** LTR `unicode-bidi: embed` inside RTL flow

### 2.3 Custom Utilities (Tailwind v4 `@utility`)
- `glass` / `glass-strong` — translucent blur + saturate
- `text-gradient-solar` / `text-gradient-glow` — animated amber gradients
- `glow-amber` / `glow-amber-hover` — multi-layer box-shadow halos
- `bg-aurora` — radial gradient mesh background
- `bg-grid` / `bg-dots` — subtle geometric patterns
- `sun-rays` — 18-spike conic-gradient sun
- `ltr-nums` — keep numerals LTR inside RTL
- `.bento-card` — composed glass + hover-lift + glow

---

## 3. Animation Strategy

| Pattern | Implementation | Where |
|---|---|---|
| **Hero entrance** | Staggered fade + y-translate (Framer Motion `initial/animate`) | Hero |
| **Animated sun** | Layered conic-gradient rays (`spin-slow` 40s) + pulsing core glow (`pulse-glow` 5s) + counter-rotating ring (`spin-slower` 60s) | Hero |
| **Scroll reveal** | `Reveal` wrapper using `useInView` with `-80px` margin, cubic-bezier `(0.16, 1, 0.3, 1)` | All sections |
| **Stagger grids** | `StaggerContainer` + `StaggerItem` (0.08–0.12s stagger) | Products, Services, Stats, Why-Us |
| **Count-up stats** | `CountUp` component, RAF-driven, ease-out cubic, triggers on in-view | About stats, Hero mini-stats |
| **Nav active indicator** | Framer Motion `layoutId="nav-active"` for sliding pill | Navbar |
| **Card hover** | `translateY(-4px)` + `glow-amber` shadow + gradient halo opacity shift | Bento cards, product cards |
| **Brand marquee** | `animate-marquee` 30s linear, RTL-reversed, edge-mask fade | BrandsBar |
| **Floating orbs** | Infinite y/x drift with `easeInOut` (8–10s loops) | Hero background |
| **WhatsApp FAB** | `animate-ping` halo behind solid green button | Fixed bottom-left |
| **Reduced motion** | `@media (prefers-reduced-motion: reduce)` zeroes all durations | Global |

---

## 4. Site Structure (single-page scroll, all original content integrated)

```
┌─────────────────────────────────────────────────────┐
│  Navbar (sticky, glass-on-scroll, mobile drawer)    │
├─────────────────────────────────────────────────────┤
│  1. HERO                                             │
│     • Animated sun (3 layers)                        │
│     • H1 + tagline + dual CTA                        │
│     • Mini stats strip (4 KPIs)                      │
├─────────────────────────────────────────────────────┤
│  2. BRANDS BAR                                       │
│     • Marquee: AE Solar, Sinexcel, Sunwoda, TOP CABLE│
├─────────────────────────────────────────────────────┤
│  3. ABOUT (bento grid)                               │
│     • Big company card (full about text)             │
│     • 2 small cards (tech + service highlights)      │
│     • 4 animated stat counters                       │
├─────────────────────────────────────────────────────┤
│  4. PRODUCTS (2×2 bento)                             │
│     • Panels (AE Solar) — 4 features                 │
│     • Inverters (Sinexcel) — 4 features              │
│     • Batteries (Sunwoda) — 4 features               │
│     • Cables (TOP CABLE) — 4 features                │
├─────────────────────────────────────────────────────┤
│  5. SERVICES (3-col grid, 6 cards)                   │
│     • Install, Maintenance, Consulting,              │
│       Hybrid, Factory, Home systems                  │
├─────────────────────────────────────────────────────┤
│  6. PROJECTS (bento: 1 large + 2 stacked)            │
│     • Hubail Al-Raida Water (409.2 kW, hero card)    │
│     • Sana'a Commercial Station (316.8 kW)           │
│     • Mall (28.4 kW + lithium storage)               │
├─────────────────────────────────────────────────────┤
│  7. WHY US (4-col grid)                              │
│     • Quality, Team, Partnerships, Support           │
├─────────────────────────────────────────────────────┤
│  8. CONTACT                                          │
│     • CTA banner ("Request a quote")                 │
│     • Info cards (address, phones, emails, hours)    │
│     • Social buttons (WhatsApp, FB, LinkedIn)        │
│     • Lead form (name, phone, email, type, message)  │
├─────────────────────────────────────────────────────┤
│  FOOTER (4-col)                                      │
│     • Brand + socials                                │
│     • Quick links                                    │
│     • Product links                                  │
│     • Contact info                                   │
├─────────────────────────────────────────────────────┤
│  Floating WhatsApp button (bottom-left)              │
└─────────────────────────────────────────────────────┘
```

---

## 5. Original Content Preservation

Every piece of Arabic copy from `aseralshams.com` was scraped, parsed, and stored verbatim in `src/components/site/data.ts`:

- ✅ Full company name + tagline
- ✅ Both `about.short` and `about.long` paragraphs
- ✅ All 4 brand agencies (AE Solar, Sinexcel, Sunwoda, TOP CABLE) with roles
- ✅ All 4 products with descriptions + 4 features each
- ✅ All 6 services with descriptions
- ✅ All 3 projects (Hubail Al-Raida 409.2 kW, Sana'a 316.8 kW, Mall 28.4 kW)
- ✅ All 4 "Why Us" reasons
- ✅ Address, both phones, both emails, all 3 social links

---

## 6. Performance & Accessibility

- **Fonts:** Self-hosted via `next/font/google` (Cairo, Tajawal, Geist) — no external requests, zero layout shift
- **CSS:** Tailwind v4 JIT — only generated utilities ship
- **Animations:** GPU-friendly (`transform`, `opacity`); reduced-motion media query disables all motion
- **A11y:**
  - Semantic `<header>`, `<main>`, `<section>`, `<article>`, `<footer>`
  - Skip-to-content link
  - All interactive elements ≥44px touch target
  - ARIA labels on icon-only buttons (menu, WhatsApp, socials)
  - `dir="rtl"` + `lang="ar"` on `<html>`
  - High-contrast text on dark canvas
- **Mobile:** Verified no horizontal overflow at 390px, mobile menu drawer works

---

## 7. File Structure

```
src/
├── app/
│   ├── layout.tsx           # RTL, lang=ar, fonts, metadata
│   ├── globals.css          # Solar-tech design system
│   └── page.tsx             # Composes all sections + WhatsApp FAB
└── components/
    └── site/
        ├── data.ts          # All Arabic content (single source of truth)
        ├── Reveal.tsx       # Scroll-reveal + stagger primitives
        ├── CountUp.tsx      # Animated number counter
        ├── Navbar.tsx       # Glass-on-scroll, mobile drawer, active link
        ├── Hero.tsx         # Animated sun + CTAs + mini stats
        ├── BrandsBar.tsx    # Marquee of 4 agencies
        ├── About.tsx        # Bento grid + 4 stat counters
        ├── Products.tsx     # 2×2 product cards with features
        ├── Services.tsx     # 3-col service grid with hover glow
        ├── Projects.tsx     # Bento: 1 large + 2 stacked project cards
        ├── WhyUs.tsx        # 4-col reasons grid
        ├── Contact.tsx      # CTA banner + info cards + form (sonner)
        └── Footer.tsx       # 4-col footer with links + contact
```

---

## 8. Verification Results

✅ ESLint: clean, no warnings
✅ Dev server: compiles in <600ms, GET / 200 in ~50ms
✅ Browser test (Agent Browser, 1440×900): all 7 sections render, no console errors
✅ Browser test (390×844 mobile): no horizontal overflow, mobile menu opens, all elements present
✅ Contact form: fills + submits + toast appears, no runtime errors
✅ Nav links: smooth-scroll to correct sections, active indicator slides
✅ VLM visual audit: Hero "9/10 — expensive, professional, cutting-edge"; all 7 sections render correctly

---

## 9. Recommended Next Iterations

1. **Replace project mock gradients with real photos** — fetch from `aseralshams.com/wp-content/uploads/2025/10/project-{1,2,3}.png` (already in scope)
2. **Wire contact form to email** — currently simulated; connect to Resend / Nodemailer / WhatsApp Business API
3. **Add `/products/[id]` detail pages** — full spec sheets per product with downloadable PDFs
4. **Add `/projects` archive page** — filterable grid of all past projects with capacity sliders
5. **Blog/Resources section** — solar-energy education articles for SEO (good fit for Astro sub-router)
6. **Multilingual toggle** — add English locale for international visitors
7. **Real-time solar calculator** — interactive "size your system" widget
8. **Analytics** — Vercel Analytics or Plausible for privacy-friendly metrics
