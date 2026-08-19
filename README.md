# Asr Al-Shams — Solar Energy Website

Modern bilingual (Arabic RTL) website for Asr Al-Shams solar energy company in Yemen, built with Next.js 16, TypeScript, Tailwind CSS 4, and Framer Motion.

## Tech Stack

- **Framework:** Next.js 16 (App Router, Turbopack)
- **Language:** TypeScript 5 (strict)
- **Styling:** Tailwind CSS 4 + custom utilities (glass, bento-card, gradients)
- **UI Library:** shadcn/ui (New York) + Lucide icons
- **Animation:** Framer Motion 12
- **Fonts:** Cairo (headings) + Tajawal (body) via next/font
- **State:** Zustand with localStorage persistence
- **Toasts:** Sonner

## Project Structure

```
src/
├── app/                          # Next.js App Router pages
│   ├── layout.tsx                # Root layout (RTL, fonts, metadata)
│   ├── page.tsx                  # Home page
│   ├── globals.css               # Design system (light theme, green/blue palette)
│   ├── admin/page.tsx            # Admin panel (/admin)
│   ├── products/page.tsx         # Products — shows 4 category cards
│   ├── products/category/[id]/    # Category page — shows products in a category
│   ├── projects/page.tsx         # Projects listing page
│   ├── projects/[id]/page.tsx    # Project detail page
│   ├── about/page.tsx            # About page
│   └── contact/page.tsx          # Contact page with form + map
│
├── components/
│   ├── site/                     # Public website components
│   │   ├── data.ts               # Static content (COMPANY, BRANDS, SERVICES, etc.)
│   │   ├── Navbar.tsx            # Route-aware navigation
│   │   ├── HeroCarousel.tsx      # Full-screen hero with 2 bg images
│   │   ├── BrandsCarousel.tsx    # 4 partner agencies carousel
│   │   ├── About.tsx             # About section (home)
│   │   ├── Products.tsx          # Products section (home — category cards)
│   │   ├── Services.tsx          # Services section
│   │   ├── Projects.tsx          # Projects section (home)
│   │   ├── WhyUs.tsx             # Why choose us section
│   │   ├── Contact.tsx           # Contact section (home)
│   │   ├── Footer.tsx            # Footer with route links
│   │   ├── PageLayout.tsx       # Wrapper for inner pages (Navbar + Footer + WhatsApp)
│   │   ├── PageHero.tsx          # Compact hero for inner pages
│   │   ├── Reveal.tsx            # Scroll-reveal animation wrapper
│   │   └── CountUp.tsx           # Animated number counter
│   └── admin/
│       └── AdminPanel.tsx        # Full admin CRUD panel
│
└── lib/
    ├── types.ts                  # TypeScript interfaces (Category, Product, Project)
    ├── store.ts                  # Zustand store (localStorage, auth, CRUD)
    ├── seed-data.ts              # Default categories, products, projects
    └── utils.ts                  # cn() utility for className merging
```

## Public Assets

```
public/
├── agencies/                     # 4 partner logos (AE Solar, Sinexcel, TOP CABLE, Sunwoda)
├── brand/                        # Company logo (logo.png)
├── hero/                         # 2 hero background images
├── products/                     # Product images (panel, inverter, battery)
├── projects/                     # 3 project photos
└── robots.txt
```

## Key Features

- **Light theme** with brand green (#398B30) + blue (#2B5EA8) palette
- **RTL Arabic** layout with Cairo + Tajawal fonts
- **Route-aware navbar** — hash scroll on home, Link navigation on inner pages
- **Admin panel** at `/admin` (password: `admin123`) with full CRUD for categories, products, projects
- **localStorage persistence** — admin edits persist across sessions
- **4 dedicated pages** + dynamic routes for product categories and project details
- **Bento grid** layouts, glassmorphism, animated gradients
- **Ken Burns** zoom on hero images
- **Scroll reveal** animations throughout

## Local Development

```bash
bun install
bun run dev
```

Open http://localhost:3000

## Deploy to Vercel

1. Push this repository to GitHub
2. Go to [vercel.com](https://vercel.com) → New Project → import the repo
3. Vercel auto-detects Next.js — no configuration needed
4. (Optional) Set environment variable `NEXT_PUBLIC_ADMIN_PASSWORD` for a custom admin password
5. Deploy

The `build` script runs `next build` which Vercel handles natively.

## Admin Access

Navigate to `/admin` and enter the password (default: `admin123`).
Set `NEXT_PUBLIC_ADMIN_PASSWORD` env var to change it in production.

## Data Management

All content (categories, products, projects) is managed via the admin panel and stored in the browser's localStorage. The seed data in `src/lib/seed-data.ts` provides the defaults that load on first visit.

To reset to defaults: Admin → Dashboard → "Reset Data" button.
