Project Path: project_site_aser

Source Tree:

```txt
project_site_aser
├── Caddyfile
├── README.md
├── bun.lock
├── components.json
├── db
│   └── custom.db
├── download
│   ├── README.md
│   ├── REDESIGN-PLAN.md
│   ├── asr-after-submit.png
│   ├── asr-al-shams.zip
│   ├── asr-full-page.png
│   ├── asr-mobile-menu.png
│   ├── asr-mobile.png
│   ├── cable-products-detail.png
│   ├── cable-products-mobile.png
│   ├── cat-batteries-with-image.png
│   ├── cat-cables-empty.png
│   ├── cat-home.png
│   ├── cat-inverters-with-image.png
│   ├── cat-panels-with-image.png
│   ├── cat-panels.png
│   ├── cleanup-home.png
│   ├── debug-home-projects.png
│   ├── final-about.png
│   ├── final-cables.png
│   ├── final-contact.png
│   ├── final-footer.png
│   ├── final-home-projects.png
│   ├── final-home.png
│   ├── final-products.png
│   ├── final-project-detail.png
│   ├── final-projects-page.png
│   ├── final-services.png
│   ├── fixed-home-projects.png
│   ├── fixed-project-detail.png
│   ├── fixed-projects-page.png
│   ├── home-products-cards.png
│   ├── inverters-5-products.png
│   ├── light-admin-dashboard.png
│   ├── light-admin-login.png
│   ├── light-admin-products.png
│   ├── light-cables-filtered.png
│   ├── light-products.png
│   ├── light-theme-home.png
│   ├── products-cables-page.png
│   ├── products-categories-only.png
│   ├── products-with-cables.png
│   ├── projects-page-with-images.png
│   ├── projects-with-images.png
│   ├── restore-about.png
│   ├── restore-brands-fixed.png
│   ├── restore-brands.png
│   ├── restore-contact.png
│   ├── restore-home.png
│   ├── restore-products.png
│   ├── restore-projects.png
│   ├── retheme-1-hero.png
│   ├── retheme-2-brands-about.png
│   ├── retheme-3-products.png
│   ├── retheme-4-services.png
│   ├── retheme-5-projects.png
│   ├── retheme-6-whyus-contact.png
│   ├── retheme-7-footer.png
│   ├── retheme-mobile.png
│   ├── section-1-hero.png
│   ├── section-2-brands-about.png
│   ├── section-3-products.png
│   ├── section-4-services.png
│   ├── section-5-projects.png
│   ├── section-6-whyus-contact.png
│   └── section-7-footer.png
├── eslint.config.mjs
├── examples
│   └── websocket
│       ├── frontend.tsx
│       └── server.ts
├── mini-services
├── next.config.ts
├── package-lock.json
├── package.json
├── postcss.config.mjs
├── prisma
│   └── schema.prisma
├── public
│   ├── agencies
│   │   ├── agency-1.png
│   │   ├── agency-2.png
│   │   ├── agency-3.png
│   │   └── agency-4.png
│   ├── brand
│   │   └── logo.png
│   ├── hero
│   │   ├── hero-bg-1.jpg
│   │   └── hero-bg-2.jpg
│   ├── products
│   │   ├── battery.svg
│   │   ├── cables
│   │   │   ├── topsolar-pv-al-1500v.jpg
│   │   │   ├── topsolar-pv-zz-f.jpg
│   │   │   └── toxfree-zh-rz1-k.jpg
│   │   ├── inverter.jpg
│   │   ├── panel.png
│   │   ├── sinexcel-3ph-hv.jpg
│   │   ├── sinexcel-offgrid-1ph-lv.jpg
│   │   ├── sinexcel-onoff-3ph-hv.jpg
│   │   └── sinexcel-osol-sou-g2.jpg
│   ├── projects
│   │   ├── commercial.jpg
│   │   ├── mall.jpg
│   │   └── water.jpg
│   └── robots.txt
├── scripts
│   ├── aseralshams_home.json
│   ├── asr_content.txt
│   ├── asr_images.txt
│   ├── asr_links.txt
│   ├── parse_asr.py
│   ├── vlm-cables.json
│   ├── vlm-cat-img.json
│   ├── vlm-cat.json
│   ├── vlm-critique.json
│   ├── vlm-final-projects.json
│   ├── vlm-final.json
│   ├── vlm-inverters.json
│   ├── vlm-light2.json
│   ├── vlm-mobile.json
│   ├── vlm-projects.json
│   ├── vlm-restore.json
│   ├── vlm-retheme.json
│   └── vlm-sections.json
├── src
│   ├── app
│   │   ├── about
│   │   │   └── page.tsx
│   │   ├── admin
│   │   │   └── page.tsx
│   │   ├── api
│   │   │   └── route.ts
│   │   ├── contact
│   │   │   └── page.tsx
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   ├── products
│   │   │   ├── category
│   │   │   │   └── [id]
│   │   │   │       └── page.tsx
│   │   │   └── page.tsx
│   │   └── projects
│   │       ├── [id]
│   │       │   └── page.tsx
│   │       └── page.tsx
│   ├── components
│   │   ├── admin
│   │   │   └── AdminPanel.tsx
│   │   ├── site
│   │   │   ├── About.tsx
│   │   │   ├── BrandsCarousel.tsx
│   │   │   ├── Contact.tsx
│   │   │   ├── CountUp.tsx
│   │   │   ├── Footer.tsx
│   │   │   ├── HeroCarousel.tsx
│   │   │   ├── Navbar.tsx
│   │   │   ├── PageHero.tsx
│   │   │   ├── PageLayout.tsx
│   │   │   ├── Products.tsx
│   │   │   ├── Projects.tsx
│   │   │   ├── Reveal.tsx
│   │   │   ├── Services.tsx
│   │   │   ├── WhyUs.tsx
│   │   │   └── data.ts
│   │   └── ui
│   │       ├── accordion.tsx
│   │       ├── alert-dialog.tsx
│   │       ├── alert.tsx
│   │       ├── aspect-ratio.tsx
│   │       ├── avatar.tsx
│   │       ├── badge.tsx
│   │       ├── breadcrumb.tsx
│   │       ├── button.tsx
│   │       ├── calendar.tsx
│   │       ├── card.tsx
│   │       ├── carousel.tsx
│   │       ├── chart.tsx
│   │       ├── checkbox.tsx
│   │       ├── collapsible.tsx
│   │       ├── command.tsx
│   │       ├── context-menu.tsx
│   │       ├── dialog.tsx
│   │       ├── drawer.tsx
│   │       ├── dropdown-menu.tsx
│   │       ├── form.tsx
│   │       ├── hover-card.tsx
│   │       ├── input-otp.tsx
│   │       ├── input.tsx
│   │       ├── label.tsx
│   │       ├── menubar.tsx
│   │       ├── navigation-menu.tsx
│   │       ├── pagination.tsx
│   │       ├── popover.tsx
│   │       ├── progress.tsx
│   │       ├── radio-group.tsx
│   │       ├── resizable.tsx
│   │       ├── scroll-area.tsx
│   │       ├── select.tsx
│   │       ├── separator.tsx
│   │       ├── sheet.tsx
│   │       ├── sidebar.tsx
│   │       ├── skeleton.tsx
│   │       ├── slider.tsx
│   │       ├── sonner.tsx
│   │       ├── switch.tsx
│   │       ├── table.tsx
│   │       ├── tabs.tsx
│   │       ├── textarea.tsx
│   │       ├── toast.tsx
│   │       ├── toaster.tsx
│   │       ├── toggle-group.tsx
│   │       ├── toggle.tsx
│   │       └── tooltip.tsx
│   ├── hooks
│   │   ├── use-mobile.ts
│   │   └── use-toast.ts
│   └── lib
│       ├── db.ts
│       ├── seed-data.ts
│       ├── store.ts
│       ├── types.ts
│       └── utils.ts
├── tailwind.config.ts
├── tests
│   ├── database-runtime-build.sh
│   ├── python-runtime-build.sh
│   └── python-runtime-container.sh
├── tsconfig.json
└── upload
    └── 1750930621590705(7).pdf

```

`README.md`:

```md
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

```
`components.json`:

```json
{
  "$schema": "https://ui.shadcn.com/schema.json",
  "style": "new-york",
  "rsc": true,
  "tsx": true,
  "tailwind": {
    "config": "",
    "css": "src/app/globals.css",
    "baseColor": "neutral",
    "cssVariables": true,
    "prefix": ""
  },
  "aliases": {
    "components": "@/components",
    "utils": "@/lib/utils",
    "ui": "@/components/ui",
    "lib": "@/lib",
    "hooks": "@/hooks"
  },
  "iconLibrary": "lucide"
}
```
`download\README.md`:

```md
# ☀️ Asr Al-Shams — Solar Energy Website

A modern, bilingual (Arabic RTL) website for Asr Al-Shams solar energy company in Yemen. Built with Next.js 16, TypeScript, Tailwind CSS 4, Framer Motion, and Zustand.

## 📦 What's Inside

- **Home page** with hero carousel, 4 partner agencies, products, services, projects, why-us, contact
- **Products page** showing 4 category cards → click any to see its products
- **Category pages** (`/products/category/inverters`, etc.) with product images + specs
- **Projects page** with alternating layout + project detail pages
- **About page** with company story, timeline, values, agencies
- **Contact page** with form, OpenStreetMap embed, social links
- **Admin panel** at `/admin` (password: `admin123`) — full CRUD for categories, products, projects
- **Light theme** with brand green (#398B30) + blue (#2B5EA8)
- **localStorage persistence** — all admin edits are saved in the browser

---

## 🚀 Deploy to Vercel (5 minutes)

### Step 1: Unzip the project

```bash
# On your computer, unzip the file
unzip asr-al-shams.zip -d asr-al-shams
cd asr-al-shams
```

### Step 2: Push to GitHub

```bash
git init
git add .
git commit -m "Asr Al-Shams solar energy website"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/asr-al-shams.git
git push -u origin main
```

### Step 3: Deploy on Vercel

1. Go to **[vercel.com](https://vercel.com)** and sign in with GitHub
2. Click **"New Project"**
3. Import your `asr-al-shams` repository
4. Vercel auto-detects Next.js — **no configuration needed**
5. (Optional) Under **Settings → Environment Variables**, add:
   - Name: `NEXT_PUBLIC_ADMIN_PASSWORD`
   - Value: your custom admin password
6. Click **"Deploy"** — done in ~2 minutes!

Your site will be live at `https://asr-al-shams.vercel.app`

---

## 💻 Run Locally on Your PC

### Prerequisites

- **Node.js 18+** — download from [nodejs.org](https://nodejs.org)
- **npm** (comes with Node.js) or **bun** — download bun from [bun.sh](https://bun.sh)

### Step 1: Unzip

```bash
unzip asr-al-shams.zip -d asr-al-shams
cd asr-al-shams
```

### Step 2: Install dependencies

```bash
# Using npm (comes with Node.js)
npm install

# OR using bun (faster)
bun install
```

### Step 3: Run the dev server

```bash
# Using npm
npm run dev

# OR using bun
bun run dev
```

### Step 4: Open in browser

Go to **http://localhost:3000**

That's it! The site is running. 🎉

---

## 🛠️ Build for Production

```bash
# Build the project
npm run build

# Start the production server
npm start
```

Go to **http://localhost:3000**

---

## 🔐 Admin Panel

1. Navigate to **http://localhost:3000/admin**
2. Enter password: **`admin123`**
3. You can now:
   - **Add / Edit / Delete** categories (panels, inverters, batteries, cables)
   - **Add / Edit / Delete** products with images, features, descriptions
   - **Add / Edit / Delete** projects with photos
   - **Reset** all data to defaults

All changes are saved in the browser's localStorage — they persist across page refreshes.

To set a custom admin password, set the environment variable:
```
NEXT_PUBLIC_ADMIN_PASSWORD=your_secure_password
```

---

## 📁 Project Structure

```
asr-al-shams/
├── src/
│   ├── app/                          # Next.js pages
│   │   ├── layout.tsx                # Root layout (RTL, Arabic fonts)
│   │   ├── page.tsx                  # Home page
│   │   ├── globals.css               # Design system (light theme)
│   │   ├── admin/page.tsx            # Admin panel (/admin)
│   │   ├── products/page.tsx         # Products — 4 category cards
│   │   ├── products/category/[id]/   # Category page — products in a category
│   │   ├── projects/page.tsx        # Projects listing
│   │   ├── projects/[id]/page.tsx   # Project detail page
│   │   ├── about/page.tsx           # About page
│   │   └── contact/page.tsx         # Contact page (form + map)
│   │
│   ├── components/
│   │   ├── site/                     # Public website components
│   │   │   ├── data.ts               # Static content (company, brands, services)
│   │   │   ├── Navbar.tsx            # Route-aware navigation bar
│   │   │   ├── HeroCarousel.tsx      # Full-screen hero carousel
│   │   │   ├── BrandsCarousel.tsx    # 4 partner agencies carousel
│   │   │   ├── Products.tsx          # Home: 4 category cards
│   │   │   ├── Projects.tsx         # Home: 3 project cards
│   │   │   ├── About.tsx             # Home: about section
│   │   │   ├── Services.tsx          # Home: 6 services
│   │   │   ├── WhyUs.tsx            # Home: 4 reasons
│   │   │   ├── Contact.tsx          # Home: contact form
│   │   │   ├── Footer.tsx            # Footer with links
│   │   │   ├── PageLayout.tsx       # Wrapper for inner pages
│   │   │   ├── PageHero.tsx          # Hero banner for inner pages
│   │   │   ├── Reveal.tsx            # Scroll animation wrapper
│   │   │   └── CountUp.tsx           # Animated counter
│   │   └── admin/
│   │       └── AdminPanel.tsx        # Full admin CRUD panel
│   │
│   └── lib/
│       ├── types.ts                  # TypeScript interfaces
│       ├── store.ts                  # Zustand store (auth, CRUD, localStorage)
│       ├── seed-data.ts              # Default categories, products, projects
│       └── utils.ts                  # cn() utility
│
├── public/                           # Static assets
│   ├── agencies/                     # 4 partner logos
│   ├── brand/                        # Company logo
│   ├── hero/                         # 2 hero background images
│   ├── products/                     # Product images (panels, inverters, batteries)
│   ├── projects/                     # 3 project photos
│   └── robots.txt
│
├── package.json
├── next.config.ts
├── tsconfig.json
├── tailwind.config.ts
└── README.md                         # This file
```

---

## 🎨 Design System

- **Theme:** Light (white background, dark text)
- **Primary color:** Brand green `#398B30`
- **Secondary color:** Brand blue `#2B5EA8`
- **Fonts:** Cairo (headings) + Tajawal (body) — Arabic-optimized
- **Direction:** RTL (right-to-left) for Arabic
- **Effects:** Glassmorphism, bento grids, Ken Burns zoom, scroll reveal animations

---

## 🧑‍💻 For Developers

### Tech Stack

| Technology | Purpose |
|---|---|
| Next.js 16 | Framework (App Router, Turbopack) |
| TypeScript 5 | Type safety |
| Tailwind CSS 4 | Styling + custom utilities |
| shadcn/ui | UI component library |
| Framer Motion 12 | Animations |
| Zustand | State management (with localStorage persistence) |
| Lucide React | Icons |
| Sonner | Toast notifications |
| Cairo + Tajawal | Arabic Google Fonts |

### Key Files to Edit

| Want to change... | Edit this file |
|---|---|
| Company info (name, phone, email, address) | `src/components/site/data.ts` → `COMPANY` |
| Brand partners (logos, descriptions) | `src/components/site/data.ts` → `BRANDS` |
| Services list | `src/components/site/data.ts` → `SERVICES` |
| "Why Us" reasons | `src/components/site/data.ts` → `WHY_US` |
| Default products/categories/projects | `src/lib/seed-data.ts` |
| Colors / theme | `src/app/globals.css` |
| Admin password | `src/lib/store.ts` or env var `NEXT_PUBLIC_ADMIN_PASSWORD` |

### Data Flow

```
seed-data.ts → store.ts (Zustand) → components → pages
```

- `seed-data.ts` defines the default data
- `store.ts` loads it into Zustand, persists to localStorage
- Components read from the store via `useStore()` hook
- Admin panel writes to the store via CRUD methods
- All changes persist in the browser automatically

### Add a New Product (via code)

Edit `src/lib/seed-data.ts` and add to the `DEFAULT_PRODUCTS` array:

```typescript
{
  id: "my-new-product",
  categoryId: "panels",           // which category
  name: "My New Product",
  brand: "Brand Name",
  description: "Product description in Arabic...",
  features: ["Feature 1", "Feature 2", "Feature 3"],
  image: "/products/my-image.jpg", // put image in public/products/
  accent: "from-brand-blue to-indigo-600",
  order: 7,
}
```

Then bump the version in `src/lib/store.ts` (line ~104: `version: 7`) to force reload.

### Add a New Product (via admin panel)

1. Go to `/admin` → login
2. Click "المنتجات" tab → "إضافة جديد"
3. Fill in the form (name, brand, description, features, image URL)
4. Click "حفظ" — done!

---

## ❓ Troubleshooting

### "Module not found" error after unzip
Run `npm install` or `bun install` to install dependencies first.

### Port 3000 is already in use
```bash
npm run dev -- -p 3001
```
Then open http://localhost:3001

### Admin panel shows old data
The store uses localStorage. To reset:
1. Open browser DevTools (F12)
2. Application → Local Storage → clear `asr-al-shams-store`
3. Refresh the page

Or go to `/admin` → Dashboard → "Reset Data" button.

### Images not showing
Make sure images are in the `public/` folder and paths in seed-data.ts match:
- `/products/panel.png` → file at `public/products/panel.png`
- `/projects/water.jpg` → file at `public/projects/water.jpg`

### Build fails with TypeScript errors
The project is set to strict mode. Fix any type errors, or temporarily set in `next.config.ts`:
```typescript
typescript: { ignoreBuildErrors: true },
```

---

## 📄 License

This is a proprietary project for Asr Al-Shams company. All rights reserved.

---

## 📞 Contact

- **Website:** [aseralshams.com](https://aseralshams.com)
- **Email:** info@aseralshams.com
- **Phone:** +967 776 284 444
- **Address:** Khawlan St., Sana'a, Yemen

```
`next.config.ts`:

```ts
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  typescript: {
    ignoreBuildErrors: false,
  },
  reactStrictMode: true,
};

export default nextConfig;

```
`package.json`:

```json
{
  "name": "asr-al-shams",
  "version": "1.0.0",
  "private": true,
  "scripts": {
    "dev": "next dev -p 3000",
    "build": "next build",
    "start": "next start -p 3000",
    "lint": "eslint ."
  },
  "dependencies": {
    "@dnd-kit/core": "^6.3.1",
    "@dnd-kit/sortable": "^10.0.0",
    "@dnd-kit/utilities": "^3.2.2",
    "@hookform/resolvers": "^5.1.1",
    "@mdxeditor/editor": "^3.39.1",
    "@prisma/client": "^6.11.1",
    "@radix-ui/react-accordion": "^1.2.11",
    "@radix-ui/react-alert-dialog": "^1.1.14",
    "@radix-ui/react-aspect-ratio": "^1.1.7",
    "@radix-ui/react-avatar": "^1.1.10",
    "@radix-ui/react-checkbox": "^1.3.2",
    "@radix-ui/react-collapsible": "^1.1.11",
    "@radix-ui/react-context-menu": "^2.2.15",
    "@radix-ui/react-dialog": "^1.1.14",
    "@radix-ui/react-dropdown-menu": "^2.1.15",
    "@radix-ui/react-hover-card": "^1.1.14",
    "@radix-ui/react-label": "^2.1.7",
    "@radix-ui/react-menubar": "^1.1.15",
    "@radix-ui/react-navigation-menu": "^1.2.13",
    "@radix-ui/react-popover": "^1.1.14",
    "@radix-ui/react-progress": "^1.1.7",
    "@radix-ui/react-radio-group": "^1.3.7",
    "@radix-ui/react-scroll-area": "^1.2.9",
    "@radix-ui/react-select": "^2.2.5",
    "@radix-ui/react-separator": "^1.1.7",
    "@radix-ui/react-slider": "^1.3.5",
    "@radix-ui/react-slot": "^1.2.3",
    "@radix-ui/react-switch": "^1.2.5",
    "@radix-ui/react-tabs": "^1.1.12",
    "@radix-ui/react-toast": "^1.2.14",
    "@radix-ui/react-toggle": "^1.1.9",
    "@radix-ui/react-toggle-group": "^1.1.10",
    "@radix-ui/react-tooltip": "^1.2.7",
    "@reactuses/core": "^6.0.5",
    "@tanstack/react-query": "^5.82.0",
    "@tanstack/react-table": "^8.21.3",
    "class-variance-authority": "^0.7.1",
    "clsx": "^2.1.1",
    "cmdk": "^1.1.1",
    "date-fns": "^4.1.0",
    "embla-carousel-react": "^8.6.0",
    "framer-motion": "^12.23.2",
    "input-otp": "^1.4.2",
    "lucide-react": "^0.525.0",
    "next": "^16.1.1",
    "next-auth": "^4.24.11",
    "next-intl": "^4.3.4",
    "next-themes": "^0.4.6",
    "prisma": "^6.11.1",
    "react": "^19.0.0",
    "react-day-picker": "^9.8.0",
    "react-dom": "^19.0.0",
    "react-hook-form": "^7.60.0",
    "react-markdown": "^10.1.0",
    "react-resizable-panels": "^3.0.3",
    "react-syntax-highlighter": "^15.6.1",
    "recharts": "^2.15.4",
    "sharp": "^0.34.3",
    "sonner": "^2.0.6",
    "tailwind-merge": "^3.3.1",
    "tailwindcss-animate": "^1.0.7",
    "uuid": "^11.1.0",
    "vaul": "^1.1.2",
    "z-ai-web-dev-sdk": "^0.0.18",
    "zod": "^4.0.2",
    "zustand": "^5.0.6"
  },
  "devDependencies": {
    "@tailwindcss/postcss": "^4",
    "@types/react": "^19",
    "@types/react-dom": "^19",
    "bun-types": "^1.3.4",
    "eslint": "^9",
    "eslint-config-next": "^16.1.1",
    "tailwindcss": "^4",
    "tw-animate-css": "^1.3.5",
    "typescript": "^5"
  }
}

```
`prisma\schema.prisma`:

```prisma
// This is your Prisma schema file,
// learn more about it in the docs: https://pris.ly/d/prisma-schema

// Looking for ways to speed up your queries, or scale easily with your serverless or edge functions?
// Try Prisma Accelerate: https://pris.ly/cli/accelerate-init

generator client {
  provider = "prisma-client-js"
}

datasource db {
  provider = "sqlite"
  url      = env("DATABASE_URL")
}

model User {
  id        String   @id @default(cuid())
  email     String   @unique
  name      String?
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt
}

model Post {
  id        String   @id @default(cuid())
  title     String
  content   String?
  published Boolean  @default(false)
  authorId  String
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt
}
```
`src\app\about\page.tsx`:

```tsx
"use client";

import Link from "next/link";
import { ArrowLeft, CheckCircle2, Building2, Globe2, ShieldCheck, Target, Eye, Heart, Award, Users, Handshake, Headphones } from "lucide-react";
import { PageLayout } from "@/components/site/PageLayout";
import { PageHero } from "@/components/site/PageHero";
import { Reveal, StaggerContainer, StaggerItem } from "@/components/site/Reveal";
import { CountUp } from "@/components/site/CountUp";
import { COMPANY, STATS, WHY_US, BRANDS } from "@/components/site/data";

const VALUES = [
  { icon: Target, title: "رسالتنا", desc: "توفير حلول طاقة شمسية موثوقة ومستدامة تساهم في بناء مستقبل طاقي أفضل لليمن والمنطقة." },
  { icon: Eye, title: "رؤيتنا", desc: "أن نكون الشركة الرائدة في مجال الطاقة المتجددة في اليمن، والشريك الأول لكل من يبحث عن طاقة نظيفة." },
  { icon: Heart, title: "قيمنا", desc: "الجودة، الشفافية، الالتزام، الابتكار، والمسؤولية البيئية — نلتزم بها في كل مشروع." },
];

const MILESTONES = [
  { year: "2020", ar: "تأسيس الشركة" },
  { year: "2021", ar: "الشراكة مع AE Solar" },
  { year: "2022", ar: "أول مشروع كبير 100+ kW" },
  { year: "2023", ar: "توسع الوكالات إلى 4 علامات" },
  { year: "2024", ar: "أكبر مشروع 409 kW" },
];

const WHY_ICONS: Record<string, any> = { Award, Users, Handshake, Headphones };

export default function AboutPage() {
  return (
    <PageLayout>
      <PageHero
        image="/hero/hero-bg-1.jpg"
        eyebrow="من نحن"
        title="من نحن"
        subtitle="نفخر بكوننا شريكاً موثوقاً في استيراد وتوريد وتركيب وتشغيل وصيانة أنظمة الطاقة الشمسية بجميع مكوناتها."
        breadcrumb="من نحن"
      />

      {/* Company story */}
      <section className="py-16 sm:py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-dots opacity-30 pointer-events-none" />
        <div className="container mx-auto px-4 relative">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">
            <Reveal>
              <span className="inline-block text-xs sm:text-sm text-brand-green-dark tracking-widest font-mono uppercase mb-3">قصتنا</span>
              <h2 className="font-heading font-extrabold text-3xl sm:text-4xl mb-6">{COMPANY.fullName}</h2>
              <div className="space-y-4 text-slate-700 leading-loose text-sm sm:text-base">
                <p>{COMPANY.about.short}</p>
                <p className="text-slate-600">{COMPANY.about.long}</p>
              </div>
              <div className="flex flex-wrap gap-2 mt-7">
                {["N-Type / HJT / ABC", "On-Grid / Off-Grid / Hybrid", "Lithium-Ion", "TOP CABLE"].map((tag) => (
                  <span key={tag} className="inline-flex items-center gap-1.5 rounded-full bg-brand-green/10 border border-brand-green/30 px-3 py-1 text-xs text-brand-green-dark font-mono">
                    <CheckCircle2 className="w-3 h-3" />{tag}
                  </span>
                ))}
              </div>
            </Reveal>
            <Reveal delay={0.15}>
              <div className="grid grid-cols-2 gap-4">
                {STATS.map((s, i) => (
                  <div key={i} className="bento-card p-6 text-center group">
                    <div className="font-heading font-extrabold text-4xl sm:text-5xl text-gradient-solar mb-2">
                      <CountUp end={s.value} suffix={s.suffix} duration={2.2} />
                    </div>
                    <div className="text-xs sm:text-sm text-slate-500">{s.label}</div>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Mission / Vision / Values */}
      <section className="py-16 sm:py-24 relative overflow-hidden bg-slate-50/50">
        <div className="container mx-auto px-4 relative">
          <Reveal className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl">رسالتنا ورؤيتنا وقيمنا</h2>
          </Reveal>
          <StaggerContainer className="grid md:grid-cols-3 gap-5 sm:gap-6" stagger={0.1}>
            {VALUES.map((v, i) => {
              const Icon = v.icon;
              return (
                <StaggerItem key={i}>
                  <div className="bento-card p-7 h-full">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-brand-green to-brand-blue flex items-center justify-center shadow-lg mb-5">
                      <Icon className="w-7 h-7 text-white" strokeWidth={2} />
                    </div>
                    <h3 className="font-heading font-bold text-xl mb-3 text-brand-green-dark">{v.title}</h3>
                    <p className="text-slate-600 text-sm leading-relaxed">{v.desc}</p>
                  </div>
                </StaggerItem>
              );
            })}
          </StaggerContainer>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 sm:py-24 relative overflow-hidden">
        <div className="container mx-auto px-4 relative">
          <Reveal className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl">منذ البداية حتى اليوم</h2>
          </Reveal>
          <div className="max-w-3xl mx-auto">
            {MILESTONES.map((m, i) => (
              <Reveal key={i} delay={i * 0.05}>
                <div className="flex gap-5 group">
                  <div className="flex flex-col items-center flex-shrink-0">
                    <div className="w-14 h-14 rounded-full bg-gradient-to-br from-brand-green to-brand-blue flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                      <span className="text-xs font-bold text-white ltr-nums">{m.year}</span>
                    </div>
                    {i < MILESTONES.length - 1 && <div className="w-0.5 flex-1 bg-gradient-to-b from-brand-green/40 to-transparent my-2 min-h-[2rem]" />}
                  </div>
                  <div className="pb-8 pt-3">
                    <p className="font-heading font-semibold text-base sm:text-lg text-slate-800">{m.ar}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Why us */}
      <section className="py-16 sm:py-24 relative overflow-hidden bg-slate-50/50">
        <div className="container mx-auto px-4 relative">
          <Reveal className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl">لماذا تختار عصر الشمس؟</h2>
          </Reveal>
          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6" stagger={0.1}>
            {WHY_US.map((item, i) => {
              const Icon = WHY_ICONS[item.icon] ?? Award;
              return (
                <StaggerItem key={i}>
                  <div className="group bento-card p-7 h-full text-center">
                    <div className="relative inline-flex mb-5">
                      <div className="absolute inset-0 rounded-2xl bg-brand-green/30 blur-xl group-hover:bg-brand-green/50 transition-colors" />
                      <div className="relative w-16 h-16 rounded-2xl bg-gradient-to-br from-brand-green to-brand-blue flex items-center justify-center group-hover:rotate-6 transition-transform duration-500">
                        <Icon className="w-8 h-8 text-white" strokeWidth={2.2} />
                      </div>
                    </div>
                    <h3 className="font-heading font-bold text-lg sm:text-xl mb-3 group-hover:text-brand-green-dark transition-colors">{item.title}</h3>
                    <p className="text-slate-600 text-sm leading-relaxed">{item.description}</p>
                  </div>
                </StaggerItem>
              );
            })}
          </StaggerContainer>
        </div>
      </section>

      {/* Agencies */}
      <section className="py-16 sm:py-24 relative overflow-hidden">
        <div className="container mx-auto px-4 relative">
          <Reveal className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl">شركاؤنا العالميون</h2>
          </Reveal>
          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6" stagger={0.1}>
            {BRANDS.map((brand, i) => (
              <StaggerItem key={i}>
                <div className="bento-card p-7 h-full">
                  <div className="flex items-center justify-center h-20 mb-5">
                    <img src={brand.logo} alt={brand.name} className="max-h-full max-w-full object-contain" />
                  </div>
                  <h3 className="font-heading font-bold text-lg text-center mb-2">{brand.name}</h3>
                  <p className="text-xs text-brand-green-dark text-center font-mono mb-3">{brand.role}</p>
                  <p className="text-slate-600 text-sm leading-relaxed text-center">{brand.description}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 sm:py-24 relative overflow-hidden">
        <div className="container mx-auto px-4 relative">
          <Reveal>
            <div className="relative glass-strong rounded-3xl p-8 sm:p-12 overflow-hidden text-center">
              <div className="absolute -top-20 -right-20 w-72 h-72 rounded-full bg-brand-green/20 blur-3xl animate-pulse-glow" />
              <div className="absolute -bottom-20 -left-20 w-72 h-72 rounded-full bg-brand-blue/20 blur-3xl animate-pulse-glow" />
              <div className="relative">
                <h2 className="font-heading font-extrabold text-2xl sm:text-3xl mb-3">تعاون معنا</h2>
                <p className="text-slate-600 max-w-xl mx-auto mb-6">اكتشف كيف يمكننا مساعدتك في تحقيق أهدافك الطاقية.</p>
                <Link href="/contact" className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-brand-green to-brand-blue px-7 py-3.5 text-sm font-bold text-white shadow-lg hover:scale-105 transition-all">
                  اطلب عرض سعر الآن
                  <ArrowLeft className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </PageLayout>
  );
}

```
`src\app\admin\page.tsx`:

```tsx
"use client";

import dynamic from "next/dynamic";

const AdminPage = dynamic(
  () => import("@/components/admin/AdminPanel").then((m) => m.AdminPage),
  { ssr: false, loading: () => (
    <div className="min-h-screen flex items-center justify-center bg-slate-50">
      <div className="text-center">
        <div className="w-12 h-12 mx-auto mb-4 rounded-full border-4 border-brand-green/20 border-t-brand-green animate-spin" />
        <p className="text-sm text-slate-500 font-mono">Loading admin...</p>
      </div>
    </div>
  )}
);

export default function AdminRoute() {
  return <AdminPage />;
}

```
`src\app\api\route.ts`:

```ts
import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({ message: "Hello, world!" });
}
```
`src\app\contact\page.tsx`:

```tsx
"use client";

import { useState } from "react";
import { MapPin, Phone, Mail, Send, Clock, Facebook, Linkedin, MessageCircle, Sparkles, CheckCircle2 } from "lucide-react";
import { PageLayout } from "@/components/site/PageLayout";
import { PageHero } from "@/components/site/PageHero";
import { Reveal, StaggerContainer, StaggerItem } from "@/components/site/Reveal";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { COMPANY } from "@/components/site/data";

export default function ContactPage() {
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitting(true);
    await new Promise((r) => setTimeout(r, 900));
    setSubmitting(false);
    setSubmitted(true);
    toast.success("تم إرسال طلبك بنجاح!", { description: "سيتواصل معك فريقنا خلال 24 ساعة عمل." });
    (e.target as HTMLFormElement).reset();
    setTimeout(() => setSubmitted(false), 4000);
  }

  const infoCards = [
    { icon: MapPin, label: "العنوان", value: COMPANY.address },
    { icon: Phone, label: "أرقام الهاتف", value: COMPANY.phones.join(" · "), isLink: true, href: `tel:${COMPANY.phones[0]}` },
    { icon: Mail, label: "البريد الإلكتروني", value: COMPANY.emails.join(" · "), isLink: true, href: `mailto:${COMPANY.emails[0]}` },
    { icon: Clock, label: "ساعات العمل", value: "السبت – الخميس: 8:00 ص – 5:00 م" },
  ];

  return (
    <PageLayout>
      <PageHero
        image="/hero/hero-bg-2.jpg"
        eyebrow="تواصل معنا"
        title="تواصل معنا"
        subtitle="تواصل معنا عبر القنوات التالية، أو املأ النموذج وسيتواصل معك فريقنا في أقرب وقت ممكن."
        breadcrumb="تواصل معنا"
      />

      <section className="py-16 sm:py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-aurora opacity-60" />
        <div className="absolute top-1/3 -right-32 w-[28rem] h-[28rem] rounded-full bg-brand-green/8 blur-[120px] pointer-events-none" />

        <div className="container mx-auto px-4 relative">
          {/* Info cards */}
          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12" stagger={0.08}>
            {infoCards.map((card, i) => {
              const Icon = card.icon;
              return (
                <StaggerItem key={i}>
                  <div className="bento-card p-6 h-full">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-brand-green to-brand-blue flex items-center justify-center mb-4 shadow-md">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="text-[11px] text-slate-500 mb-1 tracking-wide uppercase font-mono">{card.label}</div>
                    {card.isLink ? (
                      <a href={card.href} className="text-sm text-slate-700 hover:text-brand-green-dark transition-colors leading-relaxed ltr-nums" dir="ltr">{card.value}</a>
                    ) : (
                      <div className="text-sm text-slate-700 leading-relaxed">{card.value}</div>
                    )}
                  </div>
                </StaggerItem>
              );
            })}
          </StaggerContainer>

          <div className="grid lg:grid-cols-2 gap-6 lg:gap-10">
            {/* Form */}
            <Reveal>
              <form onSubmit={onSubmit} className="glass-strong rounded-3xl p-6 sm:p-8 space-y-5 relative overflow-hidden">
                {submitted && (
                  <div className="absolute inset-0 bg-white/95 backdrop-blur-sm flex items-center justify-center z-10 rounded-3xl">
                    <div className="text-center">
                      <div className="w-16 h-16 rounded-full bg-gradient-to-br from-brand-green to-brand-blue flex items-center justify-center mx-auto mb-4 animate-pulse-glow">
                        <CheckCircle2 className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="font-heading font-bold text-xl text-slate-900 mb-2">تم إرسال طلبك بنجاح!</h3>
                      <p className="text-slate-600 text-sm">سيتواصل معك فريقنا خلال 24 ساعة عمل.</p>
                    </div>
                  </div>
                )}
                <div>
                  <h3 className="font-heading font-bold text-xl text-slate-900 mb-1">تفاصيل المشروع</h3>
                  <p className="text-sm text-slate-500">بالضغط على إرسال، أنت توافق على أن يتواصل معك فريق عصر الشمس بشأن طلبك.</p>
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-700 block">الاسم الكامل</label>
                    <Input id="name" name="name" required placeholder="مثال: أحمد محمد" className="bg-white/70 border-brand-green/20 focus:border-brand-green/50 focus-visible:ring-brand-green/30" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-700 block">رقم الهاتف</label>
                    <Input id="phone" name="phone" required type="tel" placeholder="7XX XXX XXX" className="bg-white/70 border-brand-green/20 focus:border-brand-green/50 focus-visible:ring-brand-green/30 ltr-nums" dir="ltr" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-700 block">البريد الإلكتروني</label>
                  <Input id="email" name="email" type="email" placeholder="you@example.com" className="bg-white/70 border-brand-green/20 focus:border-brand-green/50 focus-visible:ring-brand-green/30 ltr-nums" dir="ltr" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-700 block">نوع المشروع</label>
                  <select id="projectType" name="projectType" className="w-full h-10 rounded-md bg-white/70 border border-brand-green/20 px-3 text-sm focus:border-brand-green/50 focus:outline-none focus:ring-2 focus:ring-brand-green/30">
                    <option value="residential">سكني</option>
                    <option value="commercial">تجاري</option>
                    <option value="industrial">صناعي</option>
                    <option value="agricultural">زراعي / ضخ مياه</option>
                    <option value="other">أخرى</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-700 block">تفاصيل المشروع</label>
                  <Textarea id="message" name="message" required rows={5} placeholder="اكتب تفاصيل مشروعك: السعة المطلوبة، الموقع، نوع الاستخدام..." className="bg-white/70 border-brand-green/20 focus:border-brand-green/50 focus-visible:ring-brand-green/30 resize-none" />
                </div>
                <Button type="submit" disabled={submitting} className="w-full h-12 rounded-xl bg-gradient-to-r from-brand-green to-brand-blue hover:opacity-90 text-white font-bold text-base shadow-lg shadow-brand-green/25 hover:shadow-brand-green/40 transition-all disabled:opacity-70">
                  {submitting ? (
                    <span className="flex items-center gap-2">
                      <span className="w-4 h-4 border-2 border-white/40 border-t-white rounded-full animate-spin" />
                      جارٍ الإرسال...
                    </span>
                  ) : (
                    <span className="flex items-center gap-2">
                      <Send className="w-4 h-4" />
                      إرسال الطلب
                    </span>
                  )}
                </Button>
              </form>
            </Reveal>

            {/* Map + Socials */}
            <Reveal delay={0.15}>
              <div className="space-y-5">
                <div className="glass-strong rounded-3xl p-2 overflow-hidden">
                  <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-slate-100">
                    <iframe
                      src="https://www.openstreetmap.org/export/embed.html?bbox=44.206%2C15.369%2C44.231%2C15.379&layer=mapnik&marker=15.374%2C44.218"
                      className="w-full h-full border-0"
                      loading="lazy"
                      title="موقع عصر الشمس"
                    />
                  </div>
                  <div className="p-4 flex items-center gap-3">
                    <MapPin className="w-5 h-5 text-brand-green-dark flex-shrink-0" />
                    <div>
                      <div className="text-xs text-slate-500 font-mono uppercase tracking-wide">العنوان</div>
                      <div className="text-sm text-slate-700">{COMPANY.address}</div>
                    </div>
                  </div>
                </div>

                <div className="glass-strong rounded-3xl p-6">
                  <div className="text-xs text-slate-500 font-mono uppercase tracking-wide mb-4">تابعنا على</div>
                  <div className="grid grid-cols-3 gap-3">
                    <a href={COMPANY.socials.whatsapp} target="_blank" rel="noopener noreferrer" className="flex flex-col items-center gap-2 p-4 rounded-xl glass text-slate-600 hover:bg-green-500 hover:text-white transition-all">
                      <MessageCircle className="w-6 h-6" />
                      <span className="text-xs font-medium">واتساب</span>
                    </a>
                    <a href={COMPANY.socials.facebook} target="_blank" rel="noopener noreferrer" className="flex flex-col items-center gap-2 p-4 rounded-xl glass text-slate-600 hover:bg-blue-600 hover:text-white transition-all">
                      <Facebook className="w-6 h-6" />
                      <span className="text-xs font-medium">فيسبوك</span>
                    </a>
                    <a href={COMPANY.socials.linkedin} target="_blank" rel="noopener noreferrer" className="flex flex-col items-center gap-2 p-4 rounded-xl glass text-slate-600 hover:bg-sky-700 hover:text-white transition-all">
                      <Linkedin className="w-6 h-6" />
                      <span className="text-xs font-medium">لينكد إن</span>
                    </a>
                  </div>
                </div>

                <div className="glass-strong rounded-3xl p-6 text-center">
                  <Sparkles className="w-8 h-8 text-brand-green-dark mx-auto mb-3" />
                  <h4 className="font-heading font-bold text-lg mb-2">تفضّل المكالمة المباشرة؟</h4>
                  <p className="text-sm text-slate-600 mb-4">فريقنا متاح من السبت إلى الخميس</p>
                  <a href={`tel:${COMPANY.phones[0]}`} className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-brand-green to-brand-blue px-5 py-2.5 text-sm font-semibold text-white shadow-md hover:scale-105 transition-transform">
                    <Phone className="w-4 h-4" />
                    <span className="ltr-nums">{COMPANY.phones[0]}</span>
                  </a>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}

```
`src\app\globals.css`:

```css
@import "tailwindcss";
@import "tw-animate-css";

@custom-variant dark (&:is(.dark *));

@theme inline {
  /* Brand palette — green (#398B30) + blue (#2B5EA8) */
  --color-brand-green: #398B30;
  --color-brand-green-light: #4FA843;
  --color-brand-green-lighter: #6FB96B;
  --color-brand-green-dark: #2D7028;
  --color-brand-blue: #2B5EA8;
  --color-brand-blue-light: #3D75BD;
  --color-brand-blue-lighter: #5A8FCC;
  --color-brand-blue-dark: #1F4A87;

  --color-background: var(--background);
  --color-foreground: var(--foreground);
  --font-sans: var(--font-tajawal);
  --font-body: var(--font-tajawal);
  --font-heading: var(--font-cairo);
  --font-display: var(--font-cairo);
  --font-mono: var(--font-geist);
  --color-sidebar-ring: var(--sidebar-ring);
  --color-sidebar-border: var(--sidebar-border);
  --color-sidebar-accent-foreground: var(--sidebar-accent-foreground);
  --color-sidebar-accent: var(--sidebar-accent);
  --color-sidebar-primary-foreground: var(--sidebar-primary-foreground);
  --color-sidebar-primary: var(--sidebar-primary);
  --color-sidebar-foreground: var(--sidebar-foreground);
  --color-sidebar: var(--sidebar);
  --color-chart-5: var(--chart-5);
  --color-chart-4: var(--chart-4);
  --color-chart-3: var(--chart-3);
  --color-chart-2: var(--chart-2);
  --color-chart-1: var(--chart-1);
  --color-ring: var(--ring);
  --color-input: var(--input);
  --color-border: var(--border);
  --color-destructive: var(--destructive);
  --color-accent-foreground: var(--accent-foreground);
  --color-accent: var(--accent);
  --color-muted-foreground: var(--muted-foreground);
  --color-muted: var(--muted);
  --color-secondary-foreground: var(--secondary-foreground);
  --color-secondary: var(--secondary);
  --color-primary-foreground: var(--primary-foreground);
  --color-primary: var(--primary);
  --color-popover-foreground: var(--popover-foreground);
  --color-popover: var(--popover);
  --color-card-foreground: var(--card-foreground);
  --color-card: var(--card);
  --radius-sm: calc(var(--radius) - 4px);
  --radius-md: calc(var(--radius) - 2px);
  --radius-lg: var(--radius);
  --radius-xl: calc(var(--radius) + 4px);
}

:root {
  /* Eco-tech LIGHT palette — brand green (#398B30) + blue (#2B5EA8) on white */
  --radius: 1rem;

  /* Light canvas — soft warm white with green undertone */
  --background: oklch(0.985 0.008 130);
  --foreground: oklch(0.21 0.03 200);

  /* Cards — pure white with subtle green-tinted border */
  --card: oklch(1 0 0 / 80%);
  --card-foreground: oklch(0.21 0.03 200);

  --popover: oklch(1 0 0 / 95%);
  --popover-foreground: oklch(0.21 0.03 200);

  /* Primary — brand green #398B30 */
  --primary: oklch(0.556 0.150 142);
  --primary-foreground: oklch(0.99 0.01 120);

  /* Secondary — brand blue #2B5EA8 */
  --secondary: oklch(0.476 0.140 252);
  --secondary-foreground: oklch(0.99 0.01 120);

  --muted: oklch(0.96 0.01 130);
  --muted-foreground: oklch(0.45 0.02 200);

  /* Accent — lighter brand green */
  --accent: oklch(0.652 0.130 142);
  --accent-foreground: oklch(0.21 0.03 200);

  --destructive: oklch(0.58 0.22 27);
  --border: oklch(0.88 0.015 180);
  --input: oklch(0.92 0.01 180);
  --ring: oklch(0.556 0.150 142);

  /* Chart palette — alternating green/blue tints */
  --chart-1: oklch(0.556 0.150 142);
  --chart-2: oklch(0.476 0.140 252);
  --chart-3: oklch(0.652 0.130 142);
  --chart-4: oklch(0.557 0.130 252);
  --chart-5: oklch(0.719 0.110 142);

  --sidebar: oklch(0.98 0.008 130);
  --sidebar-foreground: oklch(0.21 0.03 200);
  --sidebar-primary: oklch(0.556 0.150 142);
  --sidebar-primary-foreground: oklch(0.99 0.01 120);
  --sidebar-accent: oklch(0.95 0.012 130);
  --sidebar-accent-foreground: oklch(0.21 0.03 200);
  --sidebar-border: oklch(0.88 0.015 180);
  --sidebar-ring: oklch(0.556 0.150 142);
}

.dark {
  /* Theme is dark by default; no overrides needed */
}

@layer base {
  * {
    @apply border-border outline-ring/50;
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    @apply bg-background text-foreground;
    font-family: var(--font-body), system-ui, sans-serif;
    -webkit-font-smoothing: antialiased;
    text-rendering: optimizeLegibility;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: var(--font-heading), system-ui, sans-serif;
    font-weight: 700;
    letter-spacing: -0.02em;
  }

  /* Custom scrollbar */
  ::-webkit-scrollbar {
    width: 10px;
    height: 10px;
  }
  ::-webkit-scrollbar-track {
    background: oklch(0.96 0.01 130);
  }
  ::-webkit-scrollbar-thumb {
    background: linear-gradient(oklch(0.476 0.140 252), oklch(0.556 0.150 142));
    border-radius: 999px;
  }
  ::-webkit-scrollbar-thumb:hover {
    background: linear-gradient(oklch(0.556 0.150 142), oklch(0.652 0.130 142));
  }

  ::selection {
    background: oklch(0.556 0.150 142 / 25%);
    color: oklch(0.21 0.03 200);
  }
}

/* Glassmorphism surface — light translucent white with green border */
@utility glass {
  background: linear-gradient(
    135deg,
    oklch(1 0 0 / 80%),
    oklch(0.97 0.012 130 / 60%)
  );
  backdrop-filter: blur(16px) saturate(140%);
  -webkit-backdrop-filter: blur(16px) saturate(140%);
  border: 1px solid oklch(0.556 0.150 142 / 22%);
  box-shadow: 0 4px 24px oklch(0.556 0.150 142 / 8%);
}

@utility glass-strong {
  background: linear-gradient(
    135deg,
    oklch(1 0 0 / 92%),
    oklch(0.97 0.012 130 / 80%)
  );
  backdrop-filter: blur(24px) saturate(160%);
  -webkit-backdrop-filter: blur(24px) saturate(160%);
  border: 1px solid oklch(0.556 0.150 142 / 28%);
  box-shadow: 0 8px 32px oklch(0.556 0.150 142 / 10%);
}

/* Gradient text — eco green → blue (readable on light bg) */
@utility text-gradient-solar {
  background: linear-gradient(
    120deg,
    oklch(0.45 0.155 142) 0%,
    oklch(0.556 0.150 142) 35%,
    oklch(0.40 0.155 252) 75%,
    oklch(0.556 0.150 142) 100%
  );
  background-size: 200% auto;
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  color: transparent;
}

@utility text-gradient-glow {
  background: linear-gradient(
    120deg,
    oklch(0.40 0.155 142),
    oklch(0.556 0.150 142) 35%,
    oklch(0.40 0.155 252) 65%,
    oklch(0.40 0.155 142)
  );
  background-size: 200% auto;
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  color: transparent;
  animation: shimmer 4s linear infinite;
}

/* Glow ring — green halo */
@utility glow-amber {
  box-shadow:
    0 0 0 1px oklch(0.556 0.150 142 / 25%),
    0 0 30px oklch(0.556 0.150 142 / 28%),
    0 0 60px oklch(0.476 0.140 252 / 18%);
}

@utility glow-amber-hover {
  transition: box-shadow 0.4s ease;
  &:hover {
    box-shadow:
      0 0 0 1px oklch(0.652 0.130 142 / 40%),
      0 0 40px oklch(0.556 0.150 142 / 38%),
      0 0 80px oklch(0.476 0.140 252 / 28%);
  }
}

/* Animated gradient background — green + blue aurora */
@utility bg-aurora {
  background:
    radial-gradient(at 20% 20%, oklch(0.556 0.150 142 / 18%) 0px, transparent 50%),
    radial-gradient(at 80% 0%, oklch(0.476 0.140 252 / 15%) 0px, transparent 50%),
    radial-gradient(at 50% 100%, oklch(0.652 0.130 142 / 10%) 0px, transparent 50%),
    radial-gradient(at 0% 50%, oklch(0.557 0.130 252 / 10%) 0px, transparent 50%);
}

/* Grid pattern background — green-tinted lines */
@utility bg-grid {
  background-image:
    linear-gradient(oklch(0.556 0.150 142 / 7%) 1px, transparent 1px),
    linear-gradient(to right, oklch(0.556 0.150 142 / 7%) 1px, transparent 1px);
  background-size: 48px 48px;
}

@utility bg-dots {
  background-image: radial-gradient(oklch(0.556 0.150 142 / 18%) 1px, transparent 1px);
  background-size: 24px 24px;
}

/* Conic eco orb rays — alternating green & blue */
@utility sun-rays {
  background:
    conic-gradient(
      from 0deg,
      transparent 0deg,
      oklch(0.556 0.150 142 / 25%) 10deg,
      transparent 20deg,
      transparent 30deg,
      oklch(0.476 0.140 252 / 22%) 40deg,
      transparent 50deg,
      transparent 60deg,
      oklch(0.652 0.130 142 / 25%) 70deg,
      transparent 80deg,
      transparent 90deg,
      oklch(0.556 0.150 142 / 22%) 100deg,
      transparent 110deg,
      transparent 120deg,
      oklch(0.557 0.130 252 / 20%) 130deg,
      transparent 140deg,
      transparent 150deg,
      oklch(0.719 0.110 142 / 25%) 160deg,
      transparent 170deg,
      transparent 180deg,
      oklch(0.556 0.150 142 / 22%) 190deg,
      transparent 200deg,
      transparent 210deg,
      oklch(0.476 0.140 252 / 22%) 220deg,
      transparent 230deg,
      transparent 240deg,
      oklch(0.652 0.130 142 / 25%) 250deg,
      transparent 260deg,
      transparent 270deg,
      oklch(0.556 0.150 142 / 22%) 280deg,
      transparent 290deg,
      transparent 300deg,
      oklch(0.557 0.130 252 / 20%) 310deg,
      transparent 320deg,
      transparent 330deg,
      oklch(0.719 0.110 142 / 25%) 340deg,
      transparent 350deg
    );
}

/* No-scrollbar */
@utility no-scrollbar {
  -ms-overflow-style: none;
  scrollbar-width: none;
  &::-webkit-scrollbar { display: none; }
}

/* Arabic numerals stay LTR inside RTL */
@utility ltr-nums {
  direction: ltr;
  unicode-bidi: embed;
}

/* Bento card — light glass with green border + hover lift */
.bento-card {
  background: linear-gradient(
    135deg,
    oklch(1 0 0 / 90%),
    oklch(0.97 0.012 130 / 70%)
  );
  backdrop-filter: blur(16px) saturate(140%);
  -webkit-backdrop-filter: blur(16px) saturate(140%);
  border: 1px solid oklch(0.556 0.150 142 / 22%);
  border-radius: var(--radius-2xl, 1.5rem);
  padding: 1.5rem;
  position: relative;
  overflow: hidden;
  transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.4s ease, border-color 0.4s ease;
  box-shadow: 0 4px 20px oklch(0.556 0.150 142 / 6%);
}
.bento-card:hover {
  transform: translateY(-4px);
  border-color: oklch(0.556 0.150 142 / 45%);
  box-shadow:
    0 0 0 1px oklch(0.556 0.150 142 / 30%),
    0 12px 40px oklch(0.556 0.150 142 / 18%),
    0 0 60px oklch(0.476 0.140 252 / 12%);
}

/* Keyframe animations */
@keyframes shimmer {
  0% { background-position: 0% 50%; }
  100% { background-position: 200% 50%; }
}

@keyframes spin-slow {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}
.animate-spin-slow { animation: spin-slow 40s linear infinite; }

@keyframes spin-slower {
  from { transform: rotate(360deg); }
  to { transform: rotate(0deg); }
}
.animate-spin-slower { animation: spin-slower 60s linear infinite; }

@keyframes pulse-glow {
  0%, 100% {
    opacity: 0.6;
    transform: scale(1);
  }
  50% {
    opacity: 1;
    transform: scale(1.05);
  }
}
.animate-pulse-glow { animation: pulse-glow 5s ease-in-out infinite; }

@keyframes float {
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-12px); }
}
.animate-float { animation: float 6s ease-in-out infinite; }

@keyframes marquee {
  from { transform: translateX(0); }
  to { transform: translateX(-50%); }
}
.animate-marquee {
  animation: marquee 30s linear infinite;
}
[dir="rtl"] .animate-marquee {
  animation: marquee 30s linear infinite reverse;
}

@keyframes gradient-shift {
  0%, 100% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
}
.animate-gradient {
  background-size: 200% 200%;
  animation: gradient-shift 8s ease infinite;
}

/* Respect reduced motion */
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}

```
`src\app\layout.tsx`:

```tsx
import type { Metadata } from "next";
import { Cairo, Tajawal, Geist } from "next/font/google";
import "./globals.css";
import { Toaster as SonnerToaster } from "@/components/ui/sonner";

const cairo = Cairo({
  subsets: ["arabic", "latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-cairo",
  display: "swap",
});

const tajawal = Tajawal({
  subsets: ["arabic", "latin"],
  weight: ["300", "400", "500", "700", "800"],
  variable: "--font-tajawal",
  display: "swap",
});

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist",
  display: "swap",
});

export const metadata: Metadata = {
  title: "عصر الشمس للاستيراد والتجارة | حلول الطاقة الشمسية في اليمن",
  description:
    "شركة عصر الشمس — رائدة في اليمن في استيراد وتركيب وتشغيل أنظمة الطاقة الشمسية. ألواح AE Solar، انفرترات Sinexcel، بطاريات Sunwoda، كابلات TOP CABLE الإسبانية.",
  keywords: [
    "الطاقة الشمسية",
    "اليمن",
    "صنعاء",
    "ألواح شمسية",
    "انفرترات",
    "بطاريات ليثيوم",
    "Asr Al-Shams",
    "solar energy Yemen",
    "AE Solar",
    "Sinexcel",
    "Sunwoda",
    "TOP CABLE",
  ],
  authors: [{ name: "عصر الشمس" }],
  openGraph: {
    title: "عصر الشمس للاستيراد والتجارة",
    description: "حلول متكاملة وموثوقة لاستيراد، تركيب، وتشغيل أنظمة الطاقة الشمسية عالية الجودة.",
    url: "https://aseralshams.com/",
    siteName: "عصر الشمس",
    locale: "ar_YE",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "عصر الشمس للاستيراد والتجارة",
    description: "حلول متكاملة لأنظمة الطاقة الشمسية عالية الجودة في اليمن.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl" suppressHydrationWarning>
      <body
        className={`${cairo.variable} ${tajawal.variable} ${geist.variable} antialiased bg-background text-foreground font-body`}
      >
        {children}
        <SonnerToaster position="top-center" richColors closeButton />
      </body>
    </html>
  );
}

```
`src\app\page.tsx`:

```tsx
import { Navbar } from "@/components/site/Navbar";
import { HeroCarousel } from "@/components/site/HeroCarousel";
import { BrandsCarousel } from "@/components/site/BrandsCarousel";
import { About } from "@/components/site/About";
import { Products } from "@/components/site/Products";
import { Services } from "@/components/site/Services";
import { Projects } from "@/components/site/Projects";
import { WhyUs } from "@/components/site/WhyUs";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";

export default function Home() {
  return (
    <div className="relative min-h-screen flex flex-col bg-background overflow-x-hidden">
      {/* Skip link for a11y */}
      <a
        href="#home"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:right-4 focus:z-[100] focus:px-4 focus:py-2 focus:rounded-lg focus:bg-brand-green focus:text-white focus:font-semibold"
      >
        تخطى إلى المحتوى
      </a>

      <Navbar />

      <main className="flex-1">
        <HeroCarousel />
        <BrandsCarousel />
        <About />
        <Products />
        <Services />
        <Projects />
        <WhyUs />
        <Contact />
      </main>

      <Footer />

      {/* Floating WhatsApp button */}
      <a
        href="https://wa.me/+967780177177"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="تواصل عبر واتساب"
        className="fixed bottom-5 left-5 z-50 w-14 h-14 rounded-full bg-gradient-to-br from-brand-green to-brand-green-dark shadow-2xl shadow-brand-green/40 flex items-center justify-center text-white hover:scale-110 transition-transform group"
      >
        <span className="absolute inset-0 rounded-full bg-brand-green animate-ping opacity-20" />
        <svg
          className="relative w-7 h-7"
          fill="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
        </svg>
      </a>
    </div>
  );
}

```
`src\app\products\category\[id]\page.tsx`:

```tsx
"use client";

import { useParams, useRouter } from "next/navigation";
import Link from "next/link";
import {
  Sun, Zap, BatteryCharging, Cable, Lightbulb, Wrench, Factory, Home,
  CheckCircle2, ArrowLeft, ArrowUpRight, Package, ChevronLeft,
  type LucideIcon,
} from "lucide-react";
import { motion } from "framer-motion";
import { PageLayout } from "@/components/site/PageLayout";
import { Reveal, StaggerContainer, StaggerItem } from "@/components/site/Reveal";
import { useStore } from "@/lib/store";

const ICONS: Record<string, LucideIcon> = {
  Sun, Zap, BatteryCharging, Cable, Lightbulb, Wrench, Factory, Home,
};

const CATEGORY_BG: Record<string, string> = {
  panels: "/hero/hero-bg-1.jpg",
  inverters: "/hero/hero-bg-2.jpg",
  batteries: "/hero/hero-bg-1.jpg",
  cables: "/hero/hero-bg-2.jpg",
};

export default function CategoryPage() {
  const params = useParams();
  const router = useRouter();
  const categoryId = params.id as string;

  const categories = useStore((s) => s.categories);
  const products = useStore((s) => s.products);
  const category = categories.find((c) => c.id === categoryId);
  const categoryProducts = products.filter((p) => p.categoryId === categoryId);

  if (!category) {
    return (
      <PageLayout>
        <div className="min-h-[60vh] flex items-center justify-center">
          <div className="text-center">
            <Package className="w-16 h-16 mx-auto mb-4 text-slate-300" />
            <h1 className="font-heading font-bold text-2xl text-slate-700 mb-2">القسم غير موجود</h1>
            <button onClick={() => router.push("/products")} className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-brand-green to-brand-blue px-5 py-2.5 text-sm font-semibold text-white">
              <ArrowLeft className="w-4 h-4" />العودة للمنتجات
            </button>
          </div>
        </div>
      </PageLayout>
    );
  }

  const Icon = ICONS[category.icon] ?? Sun;
  const bgImage = CATEGORY_BG[categoryId] || "/hero/hero-bg-1.jpg";

  return (
    <PageLayout>
      {/* Category hero */}
      <section className="relative h-[45vh] min-h-[360px] max-h-[520px] w-full overflow-hidden flex items-end">
        <motion.div
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 8, ease: "easeOut" }}
          className="absolute inset-0"
        >
          <img src={bgImage} alt="" className="w-full h-full object-cover" />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/50 to-slate-950/20" />
        <div className="absolute bottom-0 inset-x-0 h-32 bg-gradient-to-t from-background to-transparent" />

        <div className="relative container mx-auto px-4 pb-12 sm:pb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            className="max-w-3xl"
          >
            <nav className="flex items-center gap-2 text-xs text-white/70 mb-4">
              <Link href="/" className="hover:text-white transition-colors">الرئيسية</Link>
              <ChevronLeft className="w-3.5 h-3.5" />
              <Link href="/products" className="hover:text-white transition-colors">منتجاتنا</Link>
              <ChevronLeft className="w-3.5 h-3.5" />
              <span className="text-brand-green-lighter font-medium">{category.name}</span>
            </nav>

            <div className="flex items-center gap-4 mb-4">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-brand-green to-brand-blue flex items-center justify-center shadow-lg">
                <Icon className="w-8 h-8 text-white" strokeWidth={2.2} />
              </div>
              <div>
                <h1 className="font-heading font-extrabold text-3xl sm:text-5xl text-white leading-tight drop-shadow-2xl">
                  {category.name}
                </h1>
                <p className="text-sm text-white/70 mt-1 ltr-nums">{categoryProducts.length} منتج</p>
              </div>
            </div>

            <p className="text-base sm:text-lg text-slate-100/90 leading-relaxed max-w-2xl drop-shadow-lg">
              {category.description}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Products grid */}
      <section className="py-16 sm:py-24 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[30rem] h-[30rem] rounded-full bg-brand-green/5 blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[30rem] h-[30rem] rounded-full bg-brand-blue/5 blur-[120px] pointer-events-none" />

        <div className="container mx-auto px-4 relative">
          {/* Other categories — quick switch */}
          <Reveal className="mb-10">
            <div className="flex items-center gap-2 mb-3">
              <Package className="w-4 h-4 text-brand-green-dark" />
              <span className="text-sm font-medium text-slate-600">أقسام أخرى</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {categories.filter((c) => c.id !== categoryId).map((cat) => {
                const CatIcon = ICONS[cat.icon] ?? Package;
                const count = products.filter((p) => p.categoryId === cat.id).length;
                return (
                  <Link
                    key={cat.id}
                    href={`/products/category/${cat.id}`}
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full glass text-slate-600 hover:bg-brand-green/10 transition-all text-sm font-medium"
                  >
                    <CatIcon className="w-3.5 h-3.5" />
                    {cat.name}
                    <span className="text-xs text-slate-400 font-mono">({count})</span>
                  </Link>
                );
              })}
            </div>
          </Reveal>

          {categoryProducts.length === 0 ? (
            <div className="text-center py-20">
              <div className="inline-flex w-20 h-20 rounded-3xl bg-gradient-to-br from-slate-100 to-slate-200 items-center justify-center mb-5">
                <Package className="w-10 h-10 text-slate-400" />
              </div>
              <h3 className="font-heading font-bold text-xl text-slate-700 mb-2">لا توجد منتجات في هذا القسم بعد</h3>
              <p className="text-slate-500 text-sm mb-6 max-w-md mx-auto">
                يمكنك إضافة منتجات لهذا القسم من لوحة التحكم، أو استعرض منتجات الأقسام الأخرى.
              </p>
              <Link
                href="/products"
                className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-brand-green to-brand-blue px-6 py-3 text-sm font-semibold text-white shadow-lg hover:scale-105 transition-all"
              >
                <ArrowLeft className="w-4 h-4" />
                استعرض جميع المنتجات
              </Link>
            </div>
          ) : (
            <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5" stagger={0.08}>
              {categoryProducts.map((p) => (
                <StaggerItem key={p.id}>
                  <motion.article
                    whileHover={{ y: -6 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    className="group relative bento-card p-0 h-full overflow-hidden"
                  >
                    {/* Image at top — large, prominent */}
                    <div className="relative h-52 overflow-hidden bg-gradient-to-br from-slate-50 to-slate-100">
                      <div className={`absolute -top-16 -left-16 w-48 h-48 rounded-full bg-gradient-to-br ${p.accent} opacity-20 group-hover:opacity-40 blur-3xl transition-opacity duration-700`} />
                      {p.image ? (
                        <div className="absolute inset-0 flex items-center justify-center p-8">
                          <img
                            src={p.image}
                            alt={p.name}
                            className="max-w-full max-h-full object-contain group-hover:scale-110 transition-transform duration-500"
                          />
                        </div>
                      ) : (
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className={`w-24 h-24 rounded-2xl bg-gradient-to-br ${p.accent} flex items-center justify-center shadow-lg group-hover:rotate-6 transition-transform duration-500`}>
                            <Icon className="w-12 h-12 text-white" strokeWidth={2.2} />
                          </div>
                        </div>
                      )}
                      {/* Category badge on top of image */}
                      <div className="absolute top-3 right-3 glass-strong rounded-full px-3 py-1 flex items-center gap-1.5">
                        <Icon className="w-3 h-3 text-brand-green-dark" />
                        <span className="text-[10px] font-mono text-slate-700">{category.name}</span>
                      </div>
                    </div>

                    {/* Content below image */}
                    <div className="p-5">
                      <div className="text-[11px] text-brand-green-dark font-mono tracking-wider mb-1">{p.brand}</div>
                      <h3 className="font-heading font-bold text-lg mb-2 group-hover:text-brand-green-dark transition-colors">{p.name}</h3>
                      <p className="text-slate-600 text-sm leading-relaxed mb-4">{p.description}</p>
                      <ul className="space-y-1.5 mb-4">
                        {p.features.slice(0, 3).map((f) => (
                          <li key={f} className="flex items-start gap-2 text-xs text-slate-600">
                            <CheckCircle2 className="w-3.5 h-3.5 text-brand-green flex-shrink-0 mt-0.5" />
                            <span>{f}</span>
                          </li>
                        ))}
                      </ul>
                      <Link
                        href="/contact"
                        className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-green-dark hover:text-brand-green group/link"
                      >
                        عرض التفاصيل
                        <ArrowUpRight className="w-3.5 h-3.5 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                      </Link>
                    </div>
                  </motion.article>
                </StaggerItem>
              ))}
            </StaggerContainer>
          )}

          {/* CTA */}
          <Reveal className="mt-16">
            <div className="relative glass-strong rounded-3xl p-8 sm:p-12 overflow-hidden text-center">
              <div className="absolute -top-20 -right-20 w-72 h-72 rounded-full bg-brand-green/20 blur-3xl animate-pulse-glow" />
              <div className="absolute -bottom-20 -left-20 w-72 h-72 rounded-full bg-brand-blue/20 blur-3xl animate-pulse-glow" />
              <div className="relative">
                <h2 className="font-heading font-extrabold text-2xl sm:text-3xl mb-3">هل تحتاج استشارة حول {category.name}؟</h2>
                <p className="text-slate-600 max-w-xl mx-auto mb-6">فريقنا جاهز لمساعدتك في اختيار المنتج الأمثل لمشروعك.</p>
                <Link href="/contact" className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-brand-green to-brand-blue px-7 py-3.5 text-sm font-bold text-white shadow-lg hover:scale-105 transition-all">
                  اطلب عرض سعر الآن
                  <ArrowLeft className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </PageLayout>
  );
}

```
`src\app\products\page.tsx`:

```tsx
"use client";

import Link from "next/link";
import {
  Sun, Zap, BatteryCharging, Cable, Lightbulb, Wrench, Factory, Home,
  ArrowLeft, ArrowUpRight, Package,
  type LucideIcon,
} from "lucide-react";
import { motion } from "framer-motion";
import { PageLayout } from "@/components/site/PageLayout";
import { PageHero } from "@/components/site/PageHero";
import { Reveal, StaggerContainer, StaggerItem } from "@/components/site/Reveal";
import { useStore } from "@/lib/store";

const ICONS: Record<string, LucideIcon> = {
  Sun, Zap, BatteryCharging, Cable, Lightbulb, Wrench, Factory, Home,
};

const CATEGORY_ACCENTS: Record<string, string> = {
  panels: "from-emerald-500 to-brand-blue",
  inverters: "from-brand-blue to-indigo-600",
  batteries: "from-emerald-400 to-teal-600",
  cables: "from-cyan-500 to-brand-blue",
};

export default function ProductsPage() {
  const products = useStore((s) => s.products);
  const categories = useStore((s) => s.categories);

  return (
    <PageLayout>
      <PageHero
        image="/hero/hero-bg-1.jpg"
        eyebrow="منتجات الطاقة الشمسية"
        title="منتجاتنا"
        subtitle="نوفر مجموعة متكاملة من منتجات الطاقة الشمسية عالية الجودة، مختارة بعناية من أفضل العلامات التجارية العالمية. اختر القسم لاستعرض منتجاته."
        breadcrumb="منتجاتنا"
      />

      <section className="py-16 sm:py-24 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[30rem] h-[30rem] rounded-full bg-brand-green/5 blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[30rem] h-[30rem] rounded-full bg-brand-blue/5 blur-[120px] pointer-events-none" />

        <div className="container mx-auto px-4 relative">
          <Reveal className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="font-heading font-extrabold text-2xl sm:text-3xl mb-3">اختر القسم</h2>
            <p className="text-slate-600 text-sm sm:text-base">
              لدينا {categories.length} أقسام رئيسية للمنتجات. اضغط على أي قسم لاستعرض جميع منتجاته التفصيلية.
            </p>
          </Reveal>

          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6" stagger={0.1}>
            {categories.map((cat) => {
              const Icon = ICONS[cat.icon] ?? Sun;
              const count = products.filter((p) => p.categoryId === cat.id).length;
              const accent = CATEGORY_ACCENTS[cat.id] || "from-brand-green to-brand-blue";
              return (
                <StaggerItem key={cat.id}>
                  <Link
                    href={`/products/category/${cat.id}`}
                    className="group relative block bento-card p-8 h-full overflow-hidden"
                  >
                    {/* Accent halo */}
                    <div className={`absolute -top-20 -left-20 w-64 h-64 rounded-full bg-gradient-to-br ${accent} opacity-15 group-hover:opacity-30 blur-3xl transition-opacity duration-700`} />

                    <div className="relative flex items-start gap-5">
                      {/* Icon */}
                      <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${accent} flex items-center justify-center shadow-lg flex-shrink-0 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500`}>
                        <Icon className="w-10 h-10 text-white" strokeWidth={2.2} />
                      </div>

                      {/* Content */}
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between gap-2 mb-2">
                          <h3 className="font-heading font-bold text-xl sm:text-2xl group-hover:text-brand-green-dark transition-colors">
                            {cat.name}
                          </h3>
                          <ArrowUpRight className="w-5 h-5 text-slate-400 group-hover:text-brand-green-dark group-hover:translate-x-1 group-hover:-translate-y-1 transition-all flex-shrink-0" />
                        </div>

                        <p className="text-slate-600 text-sm leading-relaxed mb-4 line-clamp-2">
                          {cat.description}
                        </p>

                        <div className="flex items-center gap-3">
                          <span className="inline-flex items-center gap-1.5 rounded-full bg-brand-green/10 border border-brand-green/30 px-3 py-1 text-xs text-brand-green-dark font-mono">
                            <Package className="w-3 h-3" />
                            <span className="ltr-nums font-bold">{count}</span>
                            {count === 1 ? "منتج" : "منتجات"}
                          </span>
                          <span className="text-xs text-slate-400 group-hover:text-brand-green-dark transition-colors">
                            اضغط للاستعراض ←
                          </span>
                        </div>
                      </div>
                    </div>
                  </Link>
                </StaggerItem>
              );
            })}
          </StaggerContainer>

          {/* CTA */}
          <Reveal className="mt-16">
            <div className="relative glass-strong rounded-3xl p-8 sm:p-12 overflow-hidden text-center">
              <div className="absolute -top-20 -right-20 w-72 h-72 rounded-full bg-brand-green/20 blur-3xl animate-pulse-glow" />
              <div className="absolute -bottom-20 -left-20 w-72 h-72 rounded-full bg-brand-blue/20 blur-3xl animate-pulse-glow" />
              <div className="relative">
                <h2 className="font-heading font-extrabold text-2xl sm:text-3xl mb-3">هل تحتاج استشارة؟</h2>
                <p className="text-slate-600 max-w-xl mx-auto mb-6">فريقنا جاهز لمساعدتك في اختيار المنتج الأمثل لمشروعك.</p>
                <Link href="/contact" className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-brand-green to-brand-blue px-7 py-3.5 text-sm font-bold text-white shadow-lg hover:scale-105 transition-all">
                  اطلب عرض سعر الآن
                  <ArrowLeft className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </PageLayout>
  );
}

```
`src\app\projects\[id]\page.tsx`:

```tsx
"use client";

import { useParams, useRouter } from "next/navigation";
import Link from "next/link";
import { MapPin, Zap, ArrowLeft, ChevronLeft, Calendar, Briefcase, CheckCircle2, Sparkles, MessageSquare, TrendingUp } from "lucide-react";
import { PageLayout } from "@/components/site/PageLayout";
import { Reveal, StaggerContainer, StaggerItem } from "@/components/site/Reveal";
import { CountUp } from "@/components/site/CountUp";
import { useStore } from "@/lib/store";

export default function ProjectDetailPage() {
  const params = useParams();
  const router = useRouter();
  const id = params.id as string;

  const projects = useStore((s) => s.projects);
  const project = projects.find((p) => p.id === id);
  const related = projects.filter((p) => p.id !== id).slice(0, 3);

  if (!project) {
    return (
      <PageLayout>
        <div className="min-h-[60vh] flex items-center justify-center">
          <div className="text-center">
            <Briefcase className="w-16 h-16 mx-auto mb-4 text-slate-300" />
            <h1 className="font-heading font-bold text-2xl text-slate-700 mb-2">المشروع غير موجود</h1>
            <button onClick={() => router.push("/projects")} className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-brand-green to-brand-blue px-5 py-2.5 text-sm font-semibold text-white">
              <ArrowLeft className="w-4 h-4" />العودة للمشاريع
            </button>
          </div>
        </div>
      </PageLayout>
    );
  }

  return (
    <PageLayout>
      {/* Breadcrumb bar */}
      <div className="pt-24 sm:pt-28 pb-4 bg-slate-50/50 border-b border-slate-200">
        <div className="container mx-auto px-4">
          <nav className="flex items-center gap-2 text-xs text-slate-500">
            <Link href="/" className="hover:text-brand-green-dark transition-colors">الرئيسية</Link>
            <ChevronLeft className="w-3.5 h-3.5" />
            <Link href="/projects" className="hover:text-brand-green-dark transition-colors">مشاريعنا</Link>
            <ChevronLeft className="w-3.5 h-3.5" />
            <span className="text-brand-green-dark font-medium truncate">{project.title}</span>
          </nav>
        </div>
      </div>

      {/* Project hero with image */}
      <section className="relative h-[50vh] min-h-[400px] max-h-[600px] w-full overflow-hidden">
        <div className="absolute inset-0">
          {project.image ? (
            <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
          ) : (
            <div className={`absolute inset-0 bg-gradient-to-br ${project.accent}`} />
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/50 to-slate-950/20" />
        </div>

        <div className="relative h-full container mx-auto px-4 flex items-end pb-12 sm:pb-16">
          <Reveal>
            <div className="max-w-3xl">
              <div className="flex flex-wrap items-center gap-2 mb-4">
                <span className="inline-flex items-center gap-1 rounded-full bg-white/15 backdrop-blur-md border border-white/30 px-3 py-1 text-xs text-white font-mono">{project.type}</span>
                <span className="inline-flex items-center gap-1 text-xs text-white/80"><MapPin className="w-3.5 h-3.5" />{project.location}</span>
                {project.date && <span className="inline-flex items-center gap-1 text-xs text-white/80 ltr-nums"><Calendar className="w-3.5 h-3.5" />{project.date}</span>}
              </div>
              <h1 className="font-heading font-extrabold text-3xl sm:text-5xl text-white leading-tight mb-4 drop-shadow-2xl">{project.title}</h1>
              <div className="flex items-end gap-3">
                <div className="font-heading font-extrabold text-5xl sm:text-6xl text-white ltr-nums leading-none drop-shadow-lg">{project.capacity}</div>
                <div className="pb-1 text-white/90 text-sm sm:text-base">{project.unit}</div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Project details */}
      <section className="py-12 sm:py-16 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[30rem] h-[30rem] rounded-full bg-brand-green/5 blur-[120px] pointer-events-none" />

        <div className="container mx-auto px-4 relative">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main content */}
            <div className="lg:col-span-2">
              <Reveal>
                <h2 className="font-heading font-extrabold text-2xl sm:text-3xl mb-4">نظرة عامة على المشروع</h2>
                <p className="text-slate-600 text-base sm:text-lg leading-relaxed">{project.description}</p>
              </Reveal>

              {/* Project highlights */}
              <Reveal delay={0.1}>
                <div className="mt-8 pt-8 border-t border-slate-200">
                  <h3 className="font-heading font-bold text-lg mb-4">أبرز ما يميز المشروع</h3>
                  <ul className="space-y-3">
                    {[
                      "تصميم ودراسة هندسية متكاملة",
                      "تركيب احترافي بفريق متخصص",
                      "مكونات أصلية بضمان معتمد",
                      "متابعة وصيانة بعد التركيب",
                    ].map((point, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-brand-green to-brand-blue flex items-center justify-center flex-shrink-0 shadow-sm">
                          <CheckCircle2 className="w-4 h-4 text-white" />
                        </div>
                        <span className="text-slate-700 text-sm sm:text-base pt-0.5">{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            </div>

            {/* Sidebar — specs */}
            <div className="lg:col-span-1">
              <Reveal delay={0.15}>
                <div className="glass-strong rounded-2xl p-6 sticky top-24">
                  <h3 className="font-heading font-bold text-lg mb-4 pb-3 border-b border-slate-200">مواصفات المشروع</h3>
                  <dl className="space-y-4">
                    <SpecRow icon={Zap} label="السعة المركّبة" value={`${project.capacity} ${project.unit}`} />
                    <SpecRow icon={Briefcase} label="نوع النظام" value={project.type} />
                    <SpecRow icon={MapPin} label="الموقع" value={project.location} />
                    {project.date && <SpecRow icon={Calendar} label="سنة التنفيذ" value={project.date} />}
                  </dl>

                  <Link href="/contact" className="mt-6 inline-flex items-center justify-center gap-2 w-full rounded-full bg-gradient-to-r from-brand-green to-brand-blue px-5 py-3 text-sm font-semibold text-white shadow-md hover:scale-105 transition-transform">
                    <MessageSquare className="w-4 h-4" />
                    اطلب مشروعاً مماثلاً
                  </Link>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Stats banner */}
      <section className="py-12 sm:py-16 relative overflow-hidden bg-slate-50/50">
        <div className="container mx-auto px-4 relative">
          <Reveal>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              <StatCard icon={Zap} value={parseFloat(project.capacity) || 0} suffix=" kW" label="السعة" color="from-brand-blue to-indigo-500" />
              <StatCard icon={TrendingUp} value={98} suffix="%" label="الكفاءة" color="from-brand-green to-emerald-500" />
              <StatCard icon={CheckCircle2} value={30} suffix="+" label="سنوات ضمان" color="from-emerald-500 to-teal-600" />
              <StatCard icon={Calendar} value={project.date ? parseInt(project.date) : 2024} label="سنة التنفيذ" color="from-brand-green to-brand-blue" />
            </div>
          </Reveal>
        </div>
      </section>

      {/* Related projects */}
      {related.length > 0 && (
        <section className="py-12 sm:py-16 relative overflow-hidden">
          <div className="container mx-auto px-4 relative">
            <Reveal className="mb-8">
              <div className="flex items-center gap-3">
                <Sparkles className="w-5 h-5 text-brand-green-dark" />
                <h2 className="font-heading font-extrabold text-2xl sm:text-3xl">مشاريع أخرى</h2>
              </div>
            </Reveal>

            <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5" stagger={0.08}>
              {related.map((p) => (
                <StaggerItem key={p.id}>
                  <Link href={`/projects/${p.id}`} className="group relative block overflow-hidden rounded-2xl h-48 shadow-md">
                    {p.image ? (
                      <img src={p.image} alt={p.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                    ) : (
                      <div className={`absolute inset-0 bg-gradient-to-br ${p.accent}`} />
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 to-transparent" />
                    <div className="absolute top-3 right-3 glass-strong rounded-full px-3 py-1 flex items-center gap-1.5">
                      <Zap className="w-3 h-3 text-brand-green-dark" />
                      <span className="text-[10px] font-mono text-slate-700 ltr-nums">{p.capacity} {p.unit}</span>
                    </div>
                    <div className="absolute bottom-3 left-3 right-3">
                      <h3 className="font-heading font-bold text-sm text-white line-clamp-1 group-hover:text-brand-green-lighter transition-colors">{p.title}</h3>
                      <p className="text-[10px] text-white/70 flex items-center gap-1 mt-0.5"><MapPin className="w-2.5 h-2.5" />{p.location}</p>
                    </div>
                  </Link>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="py-16 relative overflow-hidden">
        <div className="container mx-auto px-4 relative">
          <Reveal>
            <div className="relative glass-strong rounded-3xl p-8 sm:p-12 overflow-hidden text-center">
              <div className="absolute -top-20 -right-20 w-72 h-72 rounded-full bg-brand-green/20 blur-3xl animate-pulse-glow" />
              <div className="absolute -bottom-20 -left-20 w-72 h-72 rounded-full bg-brand-blue/20 blur-3xl animate-pulse-glow" />
              <div className="relative">
                <div className="inline-flex w-14 h-14 rounded-2xl bg-gradient-to-br from-brand-green to-brand-blue items-center justify-center mb-4 shadow-lg">
                  <MessageSquare className="w-7 h-7 text-white" />
                </div>
                <h2 className="font-heading font-extrabold text-2xl sm:text-3xl mb-3">جاهز لبدء مشروعك؟</h2>
                <p className="text-slate-600 max-w-xl mx-auto mb-6">دعنا نساعدك في تصميم وتركيب نظام طاقة شمسية يلبي احتياجاتك.</p>
                <Link href="/contact" className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-brand-green to-brand-blue px-7 py-3.5 text-sm font-bold text-white shadow-lg hover:scale-105 transition-all">
                  اطلب عرض سعر الآن
                  <ArrowLeft className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </PageLayout>
  );
}

function SpecRow({ icon: Icon, label, value }: { icon: typeof Zap; label: string; value: string }) {
  return (
    <div className="flex items-center justify-between gap-3">
      <div className="flex items-center gap-2 text-slate-500">
        <Icon className="w-4 h-4" />
        <span className="text-xs">{label}</span>
      </div>
      <span className="text-sm font-semibold text-slate-800 text-right">{value}</span>
    </div>
  );
}

function StatCard({ icon: Icon, value, suffix, label, color }: { icon: typeof Zap; value: number; suffix?: string; label: string; color: string }) {
  return (
    <div className="bento-card p-5 text-center group">
      <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${color} flex items-center justify-center mb-3 mx-auto group-hover:scale-110 transition-transform`}>
        <Icon className="w-6 h-6 text-white" />
      </div>
      <div className="text-2xl sm:text-3xl font-heading font-extrabold text-gradient-solar">
        <CountUp end={value} suffix={suffix} duration={2} />
      </div>
      <div className="text-xs sm:text-sm text-slate-500 mt-1">{label}</div>
    </div>
  );
}

```
`src\app\projects\page.tsx`:

```tsx
"use client";

import Link from "next/link";
import { MapPin, Zap, ArrowLeft, Calendar, Briefcase, TrendingUp } from "lucide-react";
import { PageLayout } from "@/components/site/PageLayout";
import { PageHero } from "@/components/site/PageHero";
import { Reveal, StaggerContainer, StaggerItem } from "@/components/site/Reveal";
import { CountUp } from "@/components/site/CountUp";
import { useStore } from "@/lib/store";
import type { Project } from "@/lib/types";

export default function ProjectsPage() {
  const projects = useStore((s) => s.projects);
  const totalCapacity = projects.reduce((sum, p) => sum + (parseFloat(p.capacity) || 0), 0);
  const maxCapacity = Math.max(...projects.map((p) => parseFloat(p.capacity) || 0), 0);

  return (
    <PageLayout>
      <PageHero
        image="/hero/hero-bg-2.jpg"
        eyebrow="مشاريعنا"
        title="مشاريعنا"
        subtitle="من محطات تجارية كبرى إلى مراكز تسوق وأنظمة ضخ مياه مجتمعية — مشاريع متنوعة تجسد خبرتنا في تصميم وتركيب أنظمة الطاقة الشمسية المتكاملة."
        breadcrumb="مشاريعنا"
      />

      <section className="py-16 sm:py-24 relative overflow-hidden">
        <div className="absolute top-1/4 -right-32 w-[28rem] h-[28rem] rounded-full bg-brand-blue/8 blur-[120px] pointer-events-none" />
        <div className="absolute bottom-1/4 -left-32 w-[28rem] h-[28rem] rounded-full bg-brand-green/8 blur-[120px] pointer-events-none" />

        <div className="container mx-auto px-4 relative">
          <Reveal className="mb-12">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              <StatCard icon={Briefcase} value={projects.length} label="إجمالي المشاريع" color="from-brand-green to-emerald-500" />
              <StatCard icon={Zap} value={totalCapacity} suffix=" kW" label="إجمالي السعة" color="from-brand-blue to-indigo-500" />
              <StatCard icon={TrendingUp} value={maxCapacity} suffix=" kW" label="أكبر مشروع" color="from-emerald-500 to-teal-600" />
              <StatCard icon={Calendar} value={4} suffix="+" label="سنوات الخبرة" color="from-brand-green to-brand-blue" />
            </div>
          </Reveal>

          {projects.length === 0 ? (
            <div className="text-center py-20 text-slate-400"><Briefcase className="w-16 h-16 mx-auto mb-4 opacity-30" /><p>لا توجد مشاريع</p></div>
          ) : (
            <StaggerContainer className="space-y-8 sm:space-y-12" stagger={0.15}>
              {projects.map((project, i) => <ProjectRow key={project.id} project={project} index={i} />)}
            </StaggerContainer>
          )}

          <Reveal className="mt-16">
            <div className="relative glass-strong rounded-3xl p-8 sm:p-12 overflow-hidden text-center">
              <div className="absolute -top-20 -right-20 w-72 h-72 rounded-full bg-brand-green/20 blur-3xl animate-pulse-glow" />
              <div className="absolute -bottom-20 -left-20 w-72 h-72 rounded-full bg-brand-blue/20 blur-3xl animate-pulse-glow" />
              <div className="relative">
                <h2 className="font-heading font-extrabold text-2xl sm:text-3xl mb-3">ابدأ مشروعك القادم معنا</h2>
                <p className="text-slate-600 max-w-xl mx-auto mb-6">انضم إلى عملائنا الناجحين وابدأ رحلتك نحو الطاقة المستدامة.</p>
                <Link href="/contact" className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-brand-green to-brand-blue px-7 py-3.5 text-sm font-bold text-white shadow-lg hover:scale-105 transition-all">اطلب عرض سعر الآن<ArrowLeft className="w-4 h-4" /></Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </PageLayout>
  );
}

function StatCard({ icon: Icon, value, suffix, label, color }: { icon: typeof Briefcase; value: number; suffix?: string; label: string; color: string }) {
  return (
    <div className="bento-card p-5 text-center group">
      <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${color} flex items-center justify-center mb-3 mx-auto group-hover:scale-110 transition-transform`}><Icon className="w-6 h-6 text-white" /></div>
      <div className="text-2xl sm:text-3xl font-heading font-extrabold text-gradient-solar"><CountUp end={value} suffix={suffix} duration={2} /></div>
      <div className="text-xs sm:text-sm text-slate-500 mt-1">{label}</div>
    </div>
  );
}

function ProjectRow({ project, index }: { project: Project; index: number }) {
  const isReversed = index % 2 === 1;
  return (
    <article className={`grid lg:grid-cols-2 gap-6 lg:gap-10 items-center ${isReversed ? "lg:[direction:rtl]" : ""}`}>
      <div className={`relative aspect-[4/3] rounded-3xl overflow-hidden shadow-xl group ${isReversed ? "lg:[direction:ltr]" : ""}`}>
        {project.image ? (
          <img src={project.image} alt={project.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
        ) : (
          <>
            <div className={`absolute inset-0 bg-gradient-to-br ${project.accent}`} />
            <div className="absolute inset-0 bg-grid opacity-30" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="grid grid-cols-4 gap-2 opacity-40">
                {Array.from({ length: 16 }).map((_, i) => <div key={i} className="w-12 h-16 rounded-sm bg-slate-900/60 border border-white/20" />)}
              </div>
            </div>
          </>
        )}
        <div className="absolute top-4 right-4 glass-strong rounded-full px-4 py-2 flex items-center gap-2">
          <Zap className="w-4 h-4 text-brand-green-dark" />
          <span className="text-sm font-bold text-brand-green-dark ltr-nums">{project.capacity}</span>
          <span className="text-xs text-slate-700">{project.unit}</span>
        </div>
        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-slate-950/80 to-transparent" />
      </div>
      <div className={isReversed ? "lg:[direction:rtl]" : ""}>
        <div className="flex flex-wrap items-center gap-2 mb-3">
          <span className="inline-flex items-center gap-1 rounded-full bg-brand-green/10 border border-brand-green/30 px-3 py-1 text-xs text-brand-green-dark font-mono">{project.type}</span>
          <span className="inline-flex items-center gap-1 text-xs text-slate-500"><MapPin className="w-3.5 h-3.5" />{project.location}</span>
          {project.date && <span className="inline-flex items-center gap-1 text-xs text-slate-500 ltr-nums"><Calendar className="w-3.5 h-3.5" />{project.date}</span>}
        </div>
        <h3 className="font-heading font-extrabold text-2xl sm:text-3xl mb-4">{project.title}</h3>
        <p className="text-slate-600 leading-relaxed mb-6 text-sm sm:text-base">{project.description}</p>
        <div className="flex items-end gap-4 mb-6">
          <div>
            <div className="text-xs text-slate-400 uppercase font-mono tracking-wider mb-1">السعة المركّبة</div>
            <div className="font-heading font-extrabold text-4xl text-gradient-solar ltr-nums leading-none">{project.capacity}</div>
            <div className="text-sm text-brand-green-dark mt-1">{project.unit}</div>
          </div>
        </div>
        <div className="flex flex-wrap items-center gap-3">
          <Link href="/contact" className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-brand-green to-brand-blue px-5 py-2.5 text-sm font-semibold text-white shadow-md hover:scale-105 transition-all">عرض التفاصيل<ArrowLeft className="w-4 h-4" /></Link>
          <Link href="/contact" className="inline-flex items-center gap-2 rounded-full glass-strong px-5 py-2.5 text-sm font-semibold text-foreground hover:bg-brand-green/10 transition-all">اطلب مشروعاً مماثلاً</Link>
        </div>
      </div>
    </article>
  );
}

```
`src\components\admin\AdminPanel.tsx`:

```tsx
"use client";

import { useState } from "react";
import {
  X, Lock, LayoutDashboard, FolderTree, Package, Briefcase,
  Plus, Edit2, Trash2, Save, RotateCcw, LogOut, Home,
} from "lucide-react";
import Link from "next/link";
import { useStore } from "@/lib/store";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import type { Category, Product, Project } from "@/lib/types";

const ICONS = ["Sun", "Zap", "BatteryCharging", "Cable", "Lightbulb", "Wrench", "Factory", "Home", "Award", "Users", "Handshake", "Headphones"];
const ACCENTS = [
  { label: "Green → Blue", value: "from-emerald-500 to-brand-blue" },
  { label: "Blue → Indigo", value: "from-brand-blue to-indigo-600" },
  { label: "Emerald → Teal", value: "from-emerald-400 to-teal-600" },
  { label: "Cyan → Blue", value: "from-cyan-500 to-brand-blue" },
  { label: "Orange → Red", value: "from-orange-500 to-red-600" },
  { label: "Slate", value: "from-slate-500 to-slate-700" },
];

export function AdminPage() {
  const isAdmin = useStore((s) => s.isAdmin);
  const logout = useStore((s) => s.logout);

  return (
    <div className="min-h-screen bg-slate-50">
      <header className="sticky top-0 z-30 bg-gradient-to-r from-brand-green to-brand-blue text-white shadow-lg">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-white shadow-lg ring-1 ring-white/30 overflow-hidden flex items-center justify-center">
              <img src="/brand/logo.png" alt="Asr Al-Shams" className="w-full h-full object-cover" width={40} height={40} />
            </div>
            <div>
              <h1 className="font-heading font-bold text-base sm:text-lg leading-tight">لوحة التحكم</h1>
              <p className="text-[10px] text-white/70 font-mono tracking-wider uppercase">Asr Al-Shams Admin</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            {isAdmin && (
              <button onClick={() => { logout(); toast.success("تم تسجيل الخروج"); }} className="inline-flex items-center gap-1.5 rounded-lg bg-white/15 hover:bg-white/25 px-3 py-2 text-xs sm:text-sm font-medium transition-colors">
                <LogOut className="w-3.5 h-3.5" /><span className="hidden sm:inline">خروج</span>
              </button>
            )}
            <Link href="/" className="inline-flex items-center gap-1.5 rounded-lg bg-white/15 hover:bg-white/25 px-3 py-2 text-xs sm:text-sm font-medium transition-colors">
              <Home className="w-3.5 h-3.5" /><span className="hidden sm:inline">الموقع</span>
            </Link>
          </div>
        </div>
      </header>
      <main className="max-w-6xl mx-auto px-4 sm:px-6 py-6 sm:py-10">
        {!isAdmin ? <LoginScreen /> : <Dashboard />}
      </main>
    </div>
  );
}

function LoginScreen() {
  const login = useStore((s) => s.login);
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (login(password)) toast.success("مرحباً بك!");
    else setError(true);
  };
  return (
    <div className="flex items-center justify-center min-h-[60vh]">
      <form onSubmit={submit} className="w-full max-w-sm space-y-4">
        <div className="text-center mb-6">
          <div className="inline-flex w-16 h-16 rounded-2xl bg-gradient-to-br from-brand-green to-brand-blue items-center justify-center mb-4 shadow-lg shadow-brand-green/30">
            <Lock className="w-8 h-8 text-white" />
          </div>
          <h3 className="font-heading font-bold text-xl text-slate-900">تسجيل الدخول</h3>
          <p className="text-sm text-slate-500 mt-1">أدخل كلمة المرور للوصول إلى لوحة التحكم</p>
        </div>
        <div>
          <label className="text-sm font-medium text-slate-700 block mb-1.5">كلمة المرور</label>
          <Input type="password" value={password} onChange={(e) => { setPassword(e.target.value); setError(false); }} autoFocus className={`bg-white ${error ? "border-red-500" : "border-slate-300"}`} placeholder="••••••••" />
          {error && <p className="text-xs text-red-500 mt-1">كلمة المرور غير صحيحة</p>}
          <p className="text-xs text-slate-400 mt-1.5">كلمة المرور الافتراضية: admin123</p>
        </div>
        <Button type="submit" className="w-full h-11 bg-gradient-to-r from-brand-green to-brand-blue hover:opacity-90 text-white font-semibold">دخول</Button>
      </form>
    </div>
  );
}

function Dashboard() {
  const [tab, setTab] = useState<"dashboard" | "categories" | "products" | "projects">("dashboard");
  const categories = useStore((s) => s.categories);
  const products = useStore((s) => s.products);
  const projects = useStore((s) => s.projects);
  const tabs = [
    { id: "dashboard" as const, label: "الرئيسية", icon: LayoutDashboard },
    { id: "categories" as const, label: "الأقسام", icon: FolderTree },
    { id: "products" as const, label: "المنتجات", icon: Package },
    { id: "projects" as const, label: "المشاريع", icon: Briefcase },
  ];
  return (
    <div className="flex flex-col lg:flex-row gap-6">
      <aside className="lg:w-60 flex-shrink-0">
        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-2 flex lg:flex-col gap-1 overflow-x-auto lg:overflow-visible">
          {tabs.map((t) => {
            const Icon = t.icon;
            return (
              <button key={t.id} onClick={() => setTab(t.id)} className={`flex items-center gap-2.5 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors whitespace-nowrap flex-shrink-0 lg:w-full ${tab === t.id ? "bg-gradient-to-r from-brand-green to-brand-blue text-white shadow-md" : "text-slate-600 hover:bg-slate-100"}`}>
                <Icon className="w-4 h-4 flex-shrink-0" />{t.label}
              </button>
            );
          })}
        </div>
      </aside>
      <div className="flex-1 min-w-0">
        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-4 sm:p-6">
          {tab === "dashboard" && <DashboardHome />}
          {tab === "categories" && <CategoriesManager />}
          {tab === "products" && <ProductsManager />}
          {tab === "projects" && <ProjectsManager />}
        </div>
      </div>
    </div>
  );
}

function DashboardHome() {
  const categories = useStore((s) => s.categories);
  const products = useStore((s) => s.products);
  const projects = useStore((s) => s.projects);
  const resetToDefaults = useStore((s) => s.resetToDefaults);
  const stats = [
    { label: "الأقسام", count: categories.length, icon: FolderTree, color: "from-emerald-500 to-brand-green" },
    { label: "المنتجات", count: products.length, icon: Package, color: "from-brand-blue to-indigo-500" },
    { label: "المشاريع", count: projects.length, icon: Briefcase, color: "from-brand-green to-emerald-600" },
  ];
  return (
    <div className="space-y-6">
      <div>
        <h3 className="font-heading font-bold text-2xl text-slate-900 mb-1">مرحباً بك في لوحة التحكم</h3>
        <p className="text-slate-500 text-sm">من هنا يمكنك إدارة الأقسام والمنتجات والمشاريع بشكل كامل.</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {stats.map((s, i) => {
          const Icon = s.icon;
          return (
            <div key={i} className="rounded-2xl p-5 bg-gradient-to-br from-slate-50 to-white border border-slate-200">
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${s.color} flex items-center justify-center mb-3 shadow-md`}>
                <Icon className="w-6 h-6 text-white" />
              </div>
              <div className="text-3xl font-heading font-extrabold text-slate-900">{s.count}</div>
              <div className="text-sm text-slate-500 mt-0.5">{s.label}</div>
            </div>
          );
        })}
      </div>
      <div className="pt-4 border-t border-slate-200">
        <button onClick={() => { if (confirm("هل أنت متأكد؟ سيتم استعادة البيانات الافتراضية.")) { resetToDefaults(); toast.success("تم إعادة التعيين"); } }} className="inline-flex items-center gap-2 rounded-lg bg-red-50 hover:bg-red-100 text-red-600 px-4 py-2 text-sm font-medium transition-colors">
          <RotateCcw className="w-4 h-4" />إعادة تعيين البيانات
        </button>
      </div>
    </div>
  );
}

// ─── Categories ─────────────────────────────────────────
function CategoriesManager() {
  const categories = useStore((s) => s.categories);
  const [editing, setEditing] = useState<Category | null>(null);
  const [showForm, setShowForm] = useState(false);
  if (showForm || editing) return <CategoryForm category={editing} onClose={() => { setEditing(null); setShowForm(false); }} />;
  return (
    <div>
      <ManagerHeader title="الأقسام" count={categories.length} onAdd={() => setShowForm(true)} />
      {categories.length === 0 ? <EmptyState message="لا توجد أقسام" /> : (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {[...categories].sort((a, b) => a.order - b.order).map((cat) => <CategoryCard key={cat.id} category={cat} onEdit={() => setEditing(cat)} />)}
        </div>
      )}
    </div>
  );
}

function CategoryCard({ category, onEdit }: { category: Category; onEdit: () => void }) {
  const deleteCategory = useStore((s) => s.deleteCategory);
  return (
    <div className="rounded-xl p-4 flex items-start gap-3 bg-slate-50 border border-slate-200 hover:shadow-md transition-shadow">
      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-brand-green to-brand-blue flex items-center justify-center flex-shrink-0">
        <FolderTree className="w-6 h-6 text-white" />
      </div>
      <div className="flex-1 min-w-0">
        <h4 className="font-heading font-bold text-slate-900 truncate">{category.name}</h4>
        <p className="text-xs text-slate-500 line-clamp-2 mt-0.5">{category.description}</p>
      </div>
      <div className="flex gap-1 flex-shrink-0">
        <button onClick={onEdit} className="w-8 h-8 rounded-lg bg-white hover:bg-brand-green hover:text-white text-slate-600 border border-slate-200 flex items-center justify-center transition-colors"><Edit2 className="w-3.5 h-3.5" /></button>
        <button onClick={() => { if (confirm("هل أنت متأكد من الحذف؟")) { deleteCategory(category.id); toast.success("تم الحذف"); } }} className="w-8 h-8 rounded-lg bg-white hover:bg-red-500 hover:text-white text-slate-600 border border-slate-200 flex items-center justify-center transition-colors"><Trash2 className="w-3.5 h-3.5" /></button>
      </div>
    </div>
  );
}

function CategoryForm({ category, onClose }: { category: Category | null; onClose: () => void }) {
  const addCategory = useStore((s) => s.addCategory);
  const updateCategory = useStore((s) => s.updateCategory);
  const [name, setName] = useState(category?.name || "");
  const [description, setDescription] = useState(category?.description || "");
  const [icon, setIcon] = useState(category?.icon || "Sun");
  const [image, setImage] = useState(category?.image || "");
  const save = (e: React.FormEvent) => {
    e.preventDefault();
    const data = { name, description, icon, image };
    if (category) { updateCategory(category.id, data); toast.success("تم التحديث"); }
    else { addCategory(data); toast.success("تمت الإضافة"); }
    onClose();
  };
  return (
    <form onSubmit={save} className="max-w-2xl space-y-4">
      <FormHeader title={category ? "تعديل" : "إضافة جديد"} onClose={onClose} />
      <FormField label="الاسم"><Input value={name} onChange={(e) => setName(e.target.value)} required dir="rtl" className="bg-white border-slate-300" /></FormField>
      <FormField label="الوصف"><Textarea value={description} onChange={(e) => setDescription(e.target.value)} required rows={2} dir="rtl" className="bg-white border-slate-300 resize-none" /></FormField>
      <FormField label="الأيقونة"><select value={icon} onChange={(e) => setIcon(e.target.value)} className="w-full h-10 rounded-md bg-white border border-slate-300 px-3 text-sm">{ICONS.map((ic) => <option key={ic} value={ic}>{ic}</option>)}</select></FormField>
      <ImageURLField value={image} onChange={setImage} />
      <FormActions onCancel={onClose} />
    </form>
  );
}

// ─── Products ───────────────────────────────────────────
function ProductsManager() {
  const products = useStore((s) => s.products);
  const categories = useStore((s) => s.categories);
  const [editing, setEditing] = useState<Product | null>(null);
  const [showForm, setShowForm] = useState(false);
  if (showForm || editing) return <ProductForm product={editing} onClose={() => { setEditing(null); setShowForm(false); }} />;
  return (
    <div>
      <ManagerHeader title="المنتجات" count={products.length} onAdd={() => setShowForm(true)} />
      {products.length === 0 ? <EmptyState message="لا توجد منتجات" /> : (
        <div className="space-y-2">
          {[...products].sort((a, b) => a.order - b.order).map((prod) => <ProductRow key={prod.id} product={prod} categoryName={categories.find((c) => c.id === prod.categoryId)?.name || "—"} onEdit={() => setEditing(prod)} />)}
        </div>
      )}
    </div>
  );
}

function ProductRow({ product, categoryName, onEdit }: { product: Product; categoryName: string; onEdit: () => void }) {
  const deleteProduct = useStore((s) => s.deleteProduct);
  return (
    <div className="rounded-xl p-3 flex items-center gap-3 bg-slate-50 border border-slate-200 hover:shadow-md transition-shadow">
      {product.image ? (
        <img src={product.image} alt="" className="w-12 h-12 rounded-lg object-contain bg-white p-1 flex-shrink-0" />
      ) : (
        <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${product.accent} flex items-center justify-center flex-shrink-0`}><Package className="w-6 h-6 text-white" /></div>
      )}
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2 flex-wrap">
          <h4 className="font-heading font-bold text-slate-900 truncate">{product.name}</h4>
          <span className="text-[10px] text-brand-green-dark bg-brand-green/10 px-1.5 py-0.5 rounded font-mono">{categoryName}</span>
        </div>
        <p className="text-xs text-slate-500 truncate">{product.brand} · {product.features.length} مميزات</p>
      </div>
      <div className="flex gap-1 flex-shrink-0">
        <button onClick={onEdit} className="w-8 h-8 rounded-lg bg-white hover:bg-brand-green hover:text-white text-slate-600 border border-slate-200 flex items-center justify-center transition-colors"><Edit2 className="w-3.5 h-3.5" /></button>
        <button onClick={() => { if (confirm("هل أنت متأكد من الحذف؟")) { deleteProduct(product.id); toast.success("تم الحذف"); } }} className="w-8 h-8 rounded-lg bg-white hover:bg-red-500 hover:text-white text-slate-600 border border-slate-200 flex items-center justify-center transition-colors"><Trash2 className="w-3.5 h-3.5" /></button>
      </div>
    </div>
  );
}

function ProductForm({ product, onClose }: { product: Product | null; onClose: () => void }) {
  const addProduct = useStore((s) => s.addProduct);
  const updateProduct = useStore((s) => s.updateProduct);
  const categories = useStore((s) => s.categories);
  const [name, setName] = useState(product?.name || "");
  const [brand, setBrand] = useState(product?.brand || "");
  const [description, setDescription] = useState(product?.description || "");
  const [categoryId, setCategoryId] = useState(product?.categoryId || categories[0]?.id || "");
  const [image, setImage] = useState(product?.image || "");
  const [accent, setAccent] = useState(product?.accent || ACCENTS[0].value);
  const [features, setFeatures] = useState<string[]>(product?.features || [""]);
  const save = (e: React.FormEvent) => {
    e.preventDefault();
    const data = { name, brand, description, categoryId, image, accent, features: features.filter((f) => f.trim()) };
    if (product) { updateProduct(product.id, data); toast.success("تم التحديث"); }
    else { addProduct(data); toast.success("تمت الإضافة"); }
    onClose();
  };
  return (
    <form onSubmit={save} className="max-w-2xl space-y-4">
      <FormHeader title={product ? "تعديل" : "إضافة جديد"} onClose={onClose} />
      <div className="grid sm:grid-cols-2 gap-4">
        <FormField label="الاسم"><Input value={name} onChange={(e) => setName(e.target.value)} required dir="rtl" className="bg-white border-slate-300" /></FormField>
        <FormField label="العلامة التجارية"><Input value={brand} onChange={(e) => setBrand(e.target.value)} required className="bg-white border-slate-300" /></FormField>
      </div>
      <FormField label="القسم"><select value={categoryId} onChange={(e) => setCategoryId(e.target.value)} className="w-full h-10 rounded-md bg-white border border-slate-300 px-3 text-sm">{categories.map((c) => <option key={c.id} value={c.id}>{c.name}</option>)}</select></FormField>
      <FormField label="الوصف"><Textarea value={description} onChange={(e) => setDescription(e.target.value)} required rows={2} dir="rtl" className="bg-white border-slate-300 resize-none" /></FormField>
      <FormField label="المميزات">
        <div className="space-y-2">
          {features.map((f, i) => (
            <div key={i} className="flex gap-2">
              <Input value={f} onChange={(e) => setFeatures((prev) => prev.map((p, j) => j === i ? e.target.value : p))} placeholder="ميزة" dir="rtl" className="bg-white border-slate-300 text-sm" />
              <button type="button" onClick={() => setFeatures((prev) => prev.filter((_, j) => j !== i))} className="w-9 h-9 rounded-lg bg-white hover:bg-red-500 hover:text-white text-slate-500 border border-slate-200 flex items-center justify-center transition-colors flex-shrink-0"><Trash2 className="w-3.5 h-3.5" /></button>
            </div>
          ))}
          <button type="button" onClick={() => setFeatures((prev) => [...prev, ""])} className="inline-flex items-center gap-1.5 text-sm text-brand-green-dark hover:text-brand-green font-medium"><Plus className="w-4 h-4" />إضافة ميزة</button>
        </div>
      </FormField>
      <FormField label="لون التدرج">
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
          {ACCENTS.map((a) => (
            <button key={a.value} type="button" onClick={() => setAccent(a.value)} className={`flex items-center gap-2 p-2 rounded-lg border-2 transition-all ${accent === a.value ? "border-brand-green shadow-md" : "border-slate-200 hover:border-slate-300"}`}>
              <div className={`w-8 h-8 rounded bg-gradient-to-br ${a.value} flex-shrink-0`} /><span className="text-xs text-slate-600 truncate">{a.label}</span>
            </button>
          ))}
        </div>
      </FormField>
      <ImageURLField value={image} onChange={setImage} />
      <FormActions onCancel={onClose} />
    </form>
  );
}

// ─── Projects ───────────────────────────────────────────
function ProjectsManager() {
  const projects = useStore((s) => s.projects);
  const [editing, setEditing] = useState<Project | null>(null);
  const [showForm, setShowForm] = useState(false);
  if (showForm || editing) return <ProjectForm project={editing} onClose={() => { setEditing(null); setShowForm(false); }} />;
  return (
    <div>
      <ManagerHeader title="المشاريع" count={projects.length} onAdd={() => setShowForm(true)} />
      {projects.length === 0 ? <EmptyState message="لا توجد مشاريع" /> : (
        <div className="space-y-2">
          {[...projects].sort((a, b) => a.order - b.order).map((proj) => <ProjectRow key={proj.id} project={proj} onEdit={() => setEditing(proj)} />)}
        </div>
      )}
    </div>
  );
}

function ProjectRow({ project, onEdit }: { project: Project; onEdit: () => void }) {
  const deleteProject = useStore((s) => s.deleteProject);
  return (
    <div className="rounded-xl p-3 flex items-center gap-3 bg-slate-50 border border-slate-200 hover:shadow-md transition-shadow">
      {project.image ? (
        <img src={project.image} alt="" className="w-12 h-12 rounded-lg object-cover flex-shrink-0" />
      ) : (
        <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${project.accent} flex items-center justify-center flex-shrink-0`}><Briefcase className="w-6 h-6 text-white" /></div>
      )}
      <div className="flex-1 min-w-0">
        <h4 className="font-heading font-bold text-slate-900 truncate">{project.title}</h4>
        <p className="text-xs text-slate-500 truncate"><span className="ltr-nums inline-block">{project.capacity}</span> {project.unit} · {project.location}</p>
      </div>
      <div className="flex gap-1 flex-shrink-0">
        <button onClick={onEdit} className="w-8 h-8 rounded-lg bg-white hover:bg-brand-green hover:text-white text-slate-600 border border-slate-200 flex items-center justify-center transition-colors"><Edit2 className="w-3.5 h-3.5" /></button>
        <button onClick={() => { if (confirm("هل أنت متأكد من الحذف؟")) { deleteProject(project.id); toast.success("تم الحذف"); } }} className="w-8 h-8 rounded-lg bg-white hover:bg-red-500 hover:text-white text-slate-600 border border-slate-200 flex items-center justify-center transition-colors"><Trash2 className="w-3.5 h-3.5" /></button>
      </div>
    </div>
  );
}

function ProjectForm({ project, onClose }: { project: Project | null; onClose: () => void }) {
  const addProject = useStore((s) => s.addProject);
  const updateProject = useStore((s) => s.updateProject);
  const [title, setTitle] = useState(project?.title || "");
  const [type, setType] = useState(project?.type || "");
  const [capacity, setCapacity] = useState(project?.capacity || "");
  const [unit, setUnit] = useState(project?.unit || "كيلوواط");
  const [location, setLocation] = useState(project?.location || "");
  const [description, setDescription] = useState(project?.description || "");
  const [date, setDate] = useState(project?.date || "");
  const [image, setImage] = useState(project?.image || "");
  const [accent, setAccent] = useState(project?.accent || ACCENTS[0].value);
  const save = (e: React.FormEvent) => {
    e.preventDefault();
    const data = { title, type, capacity, unit, location, description, date, image, accent };
    if (project) { updateProject(project.id, data); toast.success("تم التحديث"); }
    else { addProject(data); toast.success("تمت الإضافة"); }
    onClose();
  };
  return (
    <form onSubmit={save} className="max-w-2xl space-y-4">
      <FormHeader title={project ? "تعديل" : "إضافة جديد"} onClose={onClose} />
      <div className="grid sm:grid-cols-2 gap-4">
        <FormField label="العنوان"><Input value={title} onChange={(e) => setTitle(e.target.value)} required dir="rtl" className="bg-white border-slate-300" /></FormField>
        <FormField label="النوع"><Input value={type} onChange={(e) => setType(e.target.value)} required dir="rtl" className="bg-white border-slate-300" /></FormField>
      </div>
      <FormField label="الوصف"><Textarea value={description} onChange={(e) => setDescription(e.target.value)} required rows={2} dir="rtl" className="bg-white border-slate-300 resize-none" /></FormField>
      <div className="grid sm:grid-cols-3 gap-4">
        <FormField label="السعة"><Input value={capacity} onChange={(e) => setCapacity(e.target.value)} required className="bg-white border-slate-300 ltr-nums" dir="ltr" /></FormField>
        <FormField label="الوحدة"><Input value={unit} onChange={(e) => setUnit(e.target.value)} required dir="rtl" className="bg-white border-slate-300" /></FormField>
        <FormField label="الموقع"><Input value={location} onChange={(e) => setLocation(e.target.value)} required dir="rtl" className="bg-white border-slate-300" /></FormField>
      </div>
      <div className="grid sm:grid-cols-2 gap-4">
        <FormField label="التاريخ"><Input value={date} onChange={(e) => setDate(e.target.value)} placeholder="2024" className="bg-white border-slate-300 ltr-nums" dir="ltr" /></FormField>
      </div>
      <FormField label="لون التدرج">
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
          {ACCENTS.map((a) => (
            <button key={a.value} type="button" onClick={() => setAccent(a.value)} className={`flex items-center gap-2 p-2 rounded-lg border-2 transition-all ${accent === a.value ? "border-brand-green shadow-md" : "border-slate-200 hover:border-slate-300"}`}>
              <div className={`w-8 h-8 rounded bg-gradient-to-br ${a.value} flex-shrink-0`} /><span className="text-xs text-slate-600 truncate">{a.label}</span>
            </button>
          ))}
        </div>
      </FormField>
      <ImageURLField value={image} onChange={setImage} />
      <FormActions onCancel={onClose} />
    </form>
  );
}

// ─── Shared ─────────────────────────────────────────────
function ManagerHeader({ title, count, onAdd }: { title: string; count: number; onAdd: () => void }) {
  return (
    <div className="flex items-center justify-between mb-4">
      <div className="flex items-center gap-2"><h3 className="font-heading font-bold text-xl text-slate-900">{title}</h3><span className="text-sm text-slate-400 font-mono">({count})</span></div>
      <button onClick={onAdd} className="inline-flex items-center gap-1.5 rounded-lg bg-gradient-to-r from-brand-green to-brand-blue px-3 py-2 text-sm font-semibold text-white shadow-md hover:shadow-lg hover:scale-105 transition-all"><Plus className="w-4 h-4" />إضافة جديد</button>
    </div>
  );
}

function EmptyState({ message }: { message: string }) {
  return <div className="text-center py-12 text-slate-400"><Package className="w-12 h-12 mx-auto mb-3 opacity-30" /><p className="text-sm">{message}</p></div>;
}

function FormHeader({ title, onClose }: { title: string; onClose: () => void }) {
  return <div className="flex items-center justify-between mb-2"><h3 className="font-heading font-bold text-xl text-slate-900">{title}</h3><button onClick={onClose} className="w-8 h-8 rounded-lg bg-slate-100 hover:bg-slate-200 flex items-center justify-center transition-colors"><X className="w-4 h-4 text-slate-600" /></button></div>;
}

function FormField({ label, children }: { label: string; children: React.ReactNode }) {
  return <div className="space-y-1.5"><label className="text-sm font-medium text-slate-700 block">{label}</label>{children}</div>;
}

function ImageURLField({ value, onChange }: { value: string; onChange: (v: string) => void }) {
  return (
    <FormField label="رابط الصورة">
      <Input value={value} onChange={(e) => onChange(e.target.value)} placeholder="https://example.com/image.jpg" dir="ltr" className="bg-white border-slate-300" />
      {value && (
        <div className="mt-2">
          <p className="text-xs text-slate-400 mb-1">معاينة الصورة</p>
          <div className="relative w-full h-32 rounded-lg overflow-hidden bg-slate-100 border border-slate-200">
            <img src={value} alt="preview" className="w-full h-full object-cover" onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; }} />
          </div>
        </div>
      )}
    </FormField>
  );
}

function FormActions({ onCancel }: { onCancel: () => void }) {
  return (
    <div className="flex gap-2 pt-2">
      <Button type="submit" className="flex-1 h-11 bg-gradient-to-r from-brand-green to-brand-blue hover:opacity-90 text-white font-semibold"><Save className="w-4 h-4 mr-2" />حفظ</Button>
      <Button type="button" onClick={onCancel} variant="outline" className="h-11 px-6">إلغاء</Button>
    </div>
  );
}

```
`src\components\site\About.tsx`:

```tsx
"use client";

import { motion } from "framer-motion";
import { CheckCircle2, ArrowLeft, Building2, Globe2, ShieldCheck } from "lucide-react";
import { COMPANY, STATS } from "./data";
import { Reveal, StaggerContainer, StaggerItem } from "./Reveal";
import { CountUp } from "./CountUp";

export function About() {
  return (
    <section id="about" className="relative py-24 sm:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-dots opacity-30 pointer-events-none" />
      <div className="container mx-auto px-4 relative">
        {/* Section header */}
        <Reveal className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-xs sm:text-sm text-brand-green-dark tracking-widest font-mono uppercase mb-3">
            من نحن
          </span>
          <h2 className="font-heading font-extrabold text-3xl sm:text-5xl mb-5">
            <span className="text-foreground">شركة رائدة في </span>
            <span className="text-gradient-solar">الطاقة المتجددة باليمن</span>
          </h2>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            نفخر بكوننا شريكاً موثوقاً في استيراد وتوريد وتركيب وتشغيل وصيانة أنظمة الطاقة الشمسية بجميع مكوناتها.
          </p>
        </Reveal>

        {/* Bento grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 mb-16">
          {/* Big text card */}
          <Reveal className="md:col-span-2 md:row-span-2">
            <div className="bento-card h-full p-8 sm:p-10">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-brand-green to-brand-blue flex items-center justify-center">
                  <Building2 className="w-5 h-5 text-white" />
                </div>
                <h3 className="font-heading font-bold text-xl sm:text-2xl">
                  {COMPANY.fullName}
                </h3>
              </div>
              <p className="text-slate-700 leading-loose mb-5 text-sm sm:text-base">
                {COMPANY.about.short}
              </p>
              <p className="text-slate-600 leading-loose text-sm sm:text-base">
                {COMPANY.about.long}
              </p>

              {/* Mini badges */}
              <div className="flex flex-wrap gap-2 mt-7">
                {['N-Type / HJT / ABC', 'On-Grid / Off-Grid / Hybrid', 'Lithium-Ion', 'TOP CABLE'].map(
                  (tag) => (
                    <span
                      key={tag}
                      className="inline-flex items-center gap-1.5 rounded-full bg-brand-green/10 border border-brand-green/30 px-3 py-1 text-xs text-brand-green-dark font-mono"
                    >
                      <CheckCircle2 className="w-3 h-3" />
                      {tag}
                    </span>
                  )
                )}
              </div>
            </div>
          </Reveal>

          {/* Two small cards */}
          <Reveal delay={0.1}>
            <div className="bento-card h-full p-6 flex flex-col justify-between">
              <div>
                <Globe2 className="w-7 h-7 text-brand-green-dark mb-3" />
                <h4 className="font-heading font-bold text-lg mb-2">تقنيات عالمية</h4>
                <p className="text-slate-600 text-sm leading-relaxed">
                  أحدث خلايا الطاقة الشمسية ومحولات أوروبية وصينية متقدمة، وبطاريات ليثيوم، وكابلات متخصصة.
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="bento-card h-full p-6 flex flex-col justify-between">
              <div>
                <ShieldCheck className="w-7 h-7 text-brand-green-dark mb-3" />
                <h4 className="font-heading font-bold text-lg mb-2">خدمة متكاملة</h4>
                <p className="text-slate-600 text-sm leading-relaxed">
                  ما بعد البيع ومتابعة تنفيذ المشاريع لضمان تحقيق أقصى استفادة لعملائنا في كل مرحلة.
                </p>
              </div>
            </div>
          </Reveal>
        </div>

        {/* Stats row */}
        <StaggerContainer className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {STATS.map((s, i) => (
            <StaggerItem key={i}>
              <div className="bento-card p-6 text-center group">
                <div className="font-heading font-extrabold text-4xl sm:text-5xl text-gradient-solar mb-2">
                  <CountUp end={s.value} suffix={s.suffix} duration={2.2} />
                </div>
                <div className="text-xs sm:text-sm text-slate-500">{s.label}</div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* Link to contact */}
        <Reveal delay={0.1} className="text-center mt-12">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 text-brand-green-dark hover:text-brand-green font-semibold group"
          >
            <span>المزيد عن الشركة</span>
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          </a>
        </Reveal>
      </div>
    </section>
  );
}

```
`src\components\site\BrandsCarousel.tsx`:

```tsx
"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowLeft,
  ChevronLeft,
  ChevronRight,
  Sparkles,
} from "lucide-react";
import { BRANDS } from "./data";
import { Reveal } from "./Reveal";

const AUTOPLAY_MS = 5500;

const pad = (n: number) => String(n + 1).padStart(2, "0");

export function BrandsCarousel() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const [direction, setDirection] = useState(1);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const paginate = useCallback((dir: number) => {
    setDirection(dir);
    setActive((prev) => (prev + dir + BRANDS.length) % BRANDS.length);
  }, []);

  const goTo = useCallback(
    (index: number) => {
      setDirection(index >= active ? 1 : -1);
      setActive(index);
    },
    [active],
  );

  useEffect(() => {
    if (paused) return;
    timerRef.current = setTimeout(() => paginate(1), AUTOPLAY_MS);
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [active, paused, paginate]);

  const brand = BRANDS[active];

  // RTL-aware slide variants:
  // direction = 1 (next) → new slide enters from the left, old exits to the right
  // direction = -1 (prev) → new slide enters from the right, old exits to the left
  const slideVariants = {
    enter: (dir: number) => ({
      opacity: 0,
      x: dir > 0 ? -56 : 56,
    }),
    center: {
      opacity: 1,
      x: 0,
    },
    exit: (dir: number) => ({
      opacity: 0,
      x: dir > 0 ? 56 : -56,
    }),
  };

  return (
    <section
      id="agencies"
      className="relative py-20 sm:py-28 overflow-hidden"
      aria-label="وكالاتنا المعتمدة"
    >
      {/* Ambient backgrounds */}
      <div className="absolute inset-0 bg-aurora opacity-60 pointer-events-none" />
      <div className="absolute inset-0 bg-grid opacity-25 pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <Reveal className="text-center mb-12 sm:mb-16">
          <span className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs text-brand-green-dark mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>وكالاتنا المعتمدة</span>
          </span>
          <h2 className="font-heading font-extrabold text-3xl sm:text-5xl mb-3 leading-tight">
            <span className="text-foreground">شركاء النجاح </span>
            <span className="text-gradient-solar">في الطاقة الشمسية</span>
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto leading-relaxed text-sm sm:text-base">
            نتعاون مع نخبة من العلامات العالمية لنوفّر لكم أحدث التقنيات وأعلى
            معايير الجودة في مجال الطاقة المتجددة.
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <div
            className="relative"
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
            onFocus={() => setPaused(true)}
            onBlur={() => setPaused(false)}
          >
            {/* Main slide card */}
            <div className="relative bento-card p-0 overflow-hidden min-h-[640px] sm:min-h-[480px] md:min-h-[440px]">
              {/* Accent glow that follows the active brand */}
              <div
                aria-hidden
                className={`absolute -top-24 -right-24 w-72 h-72 rounded-full bg-gradient-to-br ${brand.accent} opacity-20 blur-3xl pointer-events-none transition-all duration-700`}
              />
              <div
                aria-hidden
                className={`absolute -bottom-24 -left-24 w-72 h-72 rounded-full bg-gradient-to-br ${brand.accent} opacity-10 blur-3xl pointer-events-none transition-all duration-700`}
              />

              <AnimatePresence mode="wait" custom={direction} initial={false}>
                <motion.div
                  key={active}
                  custom={direction}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
                  className="grid md:grid-cols-2 gap-6 sm:gap-8 p-6 sm:p-10"
                >
                  {/* Info panel — appears on the right in RTL */}
                  <div className="flex flex-col justify-center order-1">
                    <div className="flex flex-wrap items-center gap-2 mb-4">
                      <span
                        className={`inline-flex items-center gap-2 rounded-full bg-gradient-to-r ${brand.accent} px-3 py-1 text-xs font-bold text-white shadow-lg`}
                      >
                        {brand.category}
                      </span>
                      <span className="text-[11px] text-slate-500 font-mono tracking-wide">
                        {brand.established}
                      </span>
                    </div>

                    <div className="text-xs text-brand-green-dark mb-2 tracking-wide font-semibold">
                      {brand.role}
                    </div>
                    <h3 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl mb-2 text-foreground leading-tight">
                      {brand.name}
                    </h3>
                    <div className="text-slate-700 text-sm sm:text-base mb-5">
                      {brand.arabic}
                    </div>
                    <p className="text-slate-600 leading-relaxed mb-7 max-w-md text-sm sm:text-base">
                      {brand.description}
                    </p>

                    <a
                      href="#products"
                      className="group inline-flex w-fit items-center gap-2 rounded-full bg-gradient-to-r from-brand-green via-brand-green-light to-brand-blue px-6 py-3 text-sm font-bold text-white shadow-xl shadow-brand-green/30 hover:shadow-brand-green/50 hover:scale-105 transition-all"
                    >
                      <span>استعرض المنتجات</span>
                      <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                    </a>
                  </div>

                  {/* Logo card — appears on the left in RTL */}
                  <div className="order-2 flex items-center justify-center">
                    <div className="relative aspect-[4/3] w-full max-w-md rounded-3xl bg-white shadow-2xl overflow-hidden ring-1 ring-black/5">
                      <div
                        aria-hidden
                        className={`absolute inset-0 bg-gradient-to-br ${brand.accent} opacity-5`}
                      />
                      {/* Decorative corner shine */}
                      <div
                        aria-hidden
                        className="absolute -top-12 -left-12 w-32 h-32 rounded-full bg-gradient-to-br from-white/80 to-transparent blur-2xl"
                      />
                      <div className="absolute inset-8 sm:inset-10">
                        <Image
                          src={brand.logo}
                          alt={`شعار ${brand.name}`}
                          fill
                          className="object-contain"
                          sizes="(max-width: 768px) 90vw, 420px"
                          priority={active === 0}
                        />
                      </div>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Arrow controls — RTL: right = prev, left = next */}
            <button
              type="button"
              onClick={() => paginate(-1)}
              aria-label="الشريحة السابقة"
              className="absolute top-1/2 -translate-y-1/2 right-2 sm:-right-5 z-20 w-10 h-10 sm:w-12 sm:h-12 rounded-full glass-strong flex items-center justify-center text-foreground hover:bg-brand-green hover:text-white hover:scale-110 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-green"
            >
              <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>
            <button
              type="button"
              onClick={() => paginate(1)}
              aria-label="الشريحة التالية"
              className="absolute top-1/2 -translate-y-1/2 left-2 sm:-left-5 z-20 w-10 h-10 sm:w-12 sm:h-12 rounded-full glass-strong flex items-center justify-center text-foreground hover:bg-brand-green hover:text-white hover:scale-110 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-green"
            >
              <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>

            {/* Counter + dot indicators */}
            <div className="mt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <span className="font-mono text-sm font-bold ltr-nums">
                  <span className="text-brand-green-dark">{pad(active)}</span>
                  <span className="mx-1 text-slate-500">/</span>
                  <span className="text-slate-500">{pad(BRANDS.length - 1)}</span>
                </span>
                <div className="flex items-center gap-2">
                  {BRANDS.map((b, i) => (
                    <button
                      key={b.name}
                      type="button"
                      onClick={() => goTo(i)}
                      aria-label={`الانتقال إلى ${b.name}`}
                      aria-current={i === active ? "true" : undefined}
                      className="group relative h-2 rounded-full transition-all duration-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-green focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                      style={{ width: i === active ? 36 : 10 }}
                    >
                      <span
                        className={`block h-full w-full rounded-full transition-colors duration-300 ${
                          i === active
                            ? "bg-gradient-to-r from-brand-green to-brand-blue shadow-[0_0_12px_oklch(0.556_0.150_142/0.6)]"
                            : "bg-white/15 group-hover:bg-white/30"
                        }`}
                      />
                    </button>
                  ))}
                </div>
              </div>

              <div className="text-xs text-slate-500 font-mono">
                {active + 1} من {BRANDS.length} وكالات
              </div>
            </div>

            {/* Thumbnail strip */}
            <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
              {BRANDS.map((b, i) => (
                <button
                  key={b.name}
                  type="button"
                  onClick={() => goTo(i)}
                  aria-label={`عرض ${b.name}`}
                  aria-current={i === active ? "true" : undefined}
                  className={`group relative rounded-2xl overflow-hidden p-4 transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-green ${
                    i === active
                      ? "glass-strong ring-1 ring-brand-green/40 scale-[1.02]"
                      : "glass opacity-70 hover:opacity-100 hover:scale-[1.01]"
                  }`}
                >
                  <div className="relative h-10 sm:h-12 w-full">
                    <Image
                      src={b.logo}
                      alt={`شعار ${b.name}`}
                      fill
                      className="object-contain"
                      sizes="(max-width: 640px) 45vw, 22vw"
                    />
                  </div>
                  <div className="mt-2 text-center">
                    <div className="text-xs font-bold text-foreground truncate">
                      {b.name}
                    </div>
                    <div className="text-[10px] text-slate-500 truncate">
                      {b.role}
                    </div>
                  </div>
                  {i === active && (
                    <motion.span
                      layoutId="brand-thumb-active"
                      className="absolute bottom-0 inset-x-0 h-0.5 bg-gradient-to-r from-brand-green to-brand-blue"
                      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                    />
                  )}
                </button>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

```
`src\components\site\Contact.tsx`:

```tsx
"use client";

import { useState } from "react";
import {
  MapPin,
  Phone,
  Mail,
  Send,
  Clock,
  Facebook,
  Linkedin,
  MessageCircle,
  Sparkles,
} from "lucide-react";
import { toast } from "sonner";
import { COMPANY } from "./data";
import { Reveal } from "./Reveal";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export function Contact() {
  const [submitting, setSubmitting] = useState(false);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitting(true);
    await new Promise((r) => setTimeout(r, 900));
    setSubmitting(false);
    toast.success("تم إرسال طلبك بنجاح!", {
      description: "سيتواصل معك فريقنا خلال 24 ساعة عمل.",
    });
    (e.target as HTMLFormElement).reset();
  }

  return (
    <section id="contact" className="relative py-24 sm:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-aurora opacity-60" />
      <div className="absolute top-1/3 right-0 w-[30rem] h-[30rem] rounded-full bg-brand-green/10 blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-4 relative">
        {/* CTA banner */}
        <Reveal className="mb-16">
          <div className="relative glass-strong rounded-3xl p-8 sm:p-12 overflow-hidden text-center">
            <div className="absolute -top-20 -right-20 w-72 h-72 rounded-full bg-brand-green/20 blur-3xl animate-pulse-glow" />
            <div className="absolute -bottom-20 -left-20 w-72 h-72 rounded-full bg-brand-blue/20 blur-3xl animate-pulse-glow" />
            <div className="relative">
              <span className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs text-brand-green-dark mb-5">
                <Sparkles className="w-3.5 h-3.5" />
                ابدأ مشروعك الشمسي اليوم
              </span>
              <h2 className="font-heading font-extrabold text-3xl sm:text-4xl mb-4">
                <span className="text-foreground">هل أنت مستعد لبدء مشروعك </span>
                <span className="text-gradient-solar">للطاقة الشمسية؟</span>
              </h2>
              <p className="text-slate-600 max-w-2xl mx-auto leading-relaxed mb-6">
                فريقنا من الخبراء جاهز لمساعدتك في تصميم النظام الأمثل. تواصل معنا اليوم للحصول على استشارة وعرض سعر مخصص لمشروعك.
              </p>
              <a
                href="#contact-form"
                className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-brand-green via-brand-green-light to-brand-blue px-7 py-3.5 text-sm sm:text-base font-bold text-white shadow-2xl shadow-brand-green/30 hover:scale-105 transition-all"
              >
                اطلب عرض سعر الآن
                <Send className="w-4 h-4" />
              </a>
            </div>
          </div>
        </Reveal>

        <div id="contact-form" className="grid lg:grid-cols-2 gap-6 lg:gap-10">
          {/* Contact info */}
          <Reveal>
            <div className="space-y-4">
              <div>
                <span className="inline-block text-xs sm:text-sm text-brand-green-dark tracking-widest font-mono uppercase mb-3">
                  تواصل معنا
                </span>
                <h3 className="font-heading font-extrabold text-2xl sm:text-3xl mb-3">
                  <span className="text-foreground">نحن هنا </span>
                  <span className="text-gradient-solar">لخدمتك</span>
                </h3>
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                  تواصل معنا عبر القنوات التالية، أو املأ النموذج وسيتواصل معك فريقنا في أقرب وقت ممكن.
                </p>
              </div>

              {/* Info cards */}
              <div className="space-y-3">
                <InfoCard
                  icon={<MapPin className="w-5 h-5" />}
                  label="العنوان"
                  value={COMPANY.address}
                />
                <InfoCard
                  icon={<Phone className="w-5 h-5" />}
                  label="أرقام الهاتف"
                  value={
                    <div className="flex flex-wrap gap-x-4 gap-y-1">
                      {COMPANY.phones.map((p) => (
                        <a
                          key={p}
                          href={`tel:${p}`}
                          className="ltr-nums hover:text-brand-green-dark transition-colors"
                          dir="ltr"
                        >
                          {p}
                        </a>
                      ))}
                    </div>
                  }
                />
                <InfoCard
                  icon={<Mail className="w-5 h-5" />}
                  label="البريد الإلكتروني"
                  value={
                    <div className="flex flex-col gap-1">
                      {COMPANY.emails.map((em) => (
                        <a
                          key={em}
                          href={`mailto:${em}`}
                          className="ltr-nums hover:text-brand-green-dark transition-colors break-all"
                          dir="ltr"
                        >
                          {em}
                        </a>
                      ))}
                    </div>
                  }
                />
                <InfoCard
                  icon={<Clock className="w-5 h-5" />}
                  label="ساعات العمل"
                  value="السبت – الخميس: 8:00 ص – 5:00 م"
                />
              </div>

              {/* Social */}
              <div className="flex gap-2 pt-3">
                <SocialLink href={COMPANY.socials.whatsapp} label="واتساب" icon={<MessageCircle className="w-5 h-5" />} />
                <SocialLink href={COMPANY.socials.facebook} label="فيسبوك" icon={<Facebook className="w-5 h-5" />} />
                <SocialLink href={COMPANY.socials.linkedin} label="لينكد إن" icon={<Linkedin className="w-5 h-5" />} />
              </div>
            </div>
          </Reveal>

          {/* Form */}
          <Reveal delay={0.15}>
            <form onSubmit={onSubmit} className="glass-strong rounded-3xl p-6 sm:p-8 space-y-5">
              <div className="grid sm:grid-cols-2 gap-4">
                <Field label="الاسم الكامل" htmlFor="name">
                  <Input id="name" name="name" required placeholder="مثال: أحمد محمد" className="bg-white/70 border-brand-green/20 focus:border-brand-green/50 focus-visible:ring-brand-green/30" />
                </Field>
                <Field label="رقم الهاتف" htmlFor="phone">
                  <Input id="phone" name="phone" required type="tel" placeholder="7XX XXX XXX" className="bg-white/70 border-brand-green/20 focus:border-brand-green/50 focus-visible:ring-brand-green/30 ltr-nums" dir="ltr" />
                </Field>
              </div>
              <Field label="البريد الإلكتروني" htmlFor="email">
                <Input id="email" name="email" type="email" placeholder="you@example.com" className="bg-white/70 border-brand-green/20 focus:border-brand-green/50 focus-visible:ring-brand-green/30 ltr-nums" dir="ltr" />
              </Field>
              <Field label="نوع المشروع" htmlFor="projectType">
                <select id="projectType" name="projectType" className="w-full h-10 rounded-md bg-white/70 border border-brand-green/20 px-3 text-sm focus:border-brand-green/50 focus:outline-none focus:ring-2 focus:ring-brand-green/30">
                  <option value="residential">سكني</option>
                  <option value="commercial">تجاري</option>
                  <option value="industrial">صناعي</option>
                  <option value="agricultural">زراعي / ضخ مياه</option>
                  <option value="other">أخرى</option>
                </select>
              </Field>
              <Field label="تفاصيل المشروع" htmlFor="message">
                <Textarea id="message" name="message" required rows={4} placeholder="اكتب تفاصيل مشروعك: السعة المطلوبة، الموقع، نوع الاستخدام..." className="bg-white/70 border-brand-green/20 focus:border-brand-green/50 focus-visible:ring-brand-green/30 resize-none" />
              </Field>

              <Button type="submit" disabled={submitting} className="w-full h-12 rounded-xl bg-gradient-to-r from-brand-green via-brand-green-light to-brand-blue hover:from-brand-green-light hover:to-brand-blue-lighter text-white font-bold text-base shadow-lg shadow-brand-green/25 hover:shadow-brand-green/40 transition-all disabled:opacity-70">
                {submitting ? (
                  <span className="flex items-center gap-2">
                    <span className="w-4 h-4 border-2 border-white/40 border-t-white rounded-full animate-spin" />
                    جارٍ الإرسال...
                  </span>
                ) : (
                  <span className="flex items-center gap-2">
                    <Send className="w-4 h-4" />
                    إرسال الطلب
                  </span>
                )}
              </Button>

              <p className="text-xs text-slate-500 text-center">
                بالضغط على إرسال، أنت توافق على أن يتواصل معك فريق عصر الشمس بشأن طلبك.
              </p>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Field({ label, htmlFor, children }: { label: string; htmlFor: string; children: React.ReactNode }) {
  return (
    <div className="space-y-2">
      <label htmlFor={htmlFor} className="text-sm font-medium text-slate-700 block">{label}</label>
      {children}
    </div>
  );
}

function InfoCard({ icon, label, value }: { icon: React.ReactNode; label: string; value: React.ReactNode }) {
  return (
    <div className="glass rounded-2xl p-4 sm:p-5 flex items-start gap-4 group hover:bg-brand-green/5 transition-colors">
      <div className="w-10 h-10 rounded-xl bg-brand-green/15 flex items-center justify-center text-brand-green-dark flex-shrink-0 group-hover:scale-110 transition-transform">{icon}</div>
      <div className="flex-1 min-w-0">
        <div className="text-[11px] text-slate-500 mb-1 tracking-wide uppercase font-mono">{label}</div>
        <div className="text-sm text-slate-700 leading-relaxed">{value}</div>
      </div>
    </div>
  );
}

function SocialLink({ href, label, icon }: { href: string; label: string; icon: React.ReactNode }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" aria-label={label} className="w-11 h-11 rounded-xl glass flex items-center justify-center text-slate-600 hover:bg-brand-green hover:text-white transition-all hover:scale-110">{icon}</a>
  );
}

```
`src\components\site\CountUp.tsx`:

```tsx
"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

/** Animated count-up that triggers when scrolled into view. */
export function CountUp({
  end,
  duration = 2,
  suffix = "",
  prefix = "",
  decimals = 0,
}: {
  end: number;
  duration?: number;
  suffix?: string;
  prefix?: string;
  decimals?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let raf = 0;
    const start = performance.now();
    const tick = (now: number) => {
      const elapsed = (now - start) / 1000;
      const progress = Math.min(elapsed / duration, 1);
      // ease-out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(end * eased);
      if (progress < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, end, duration]);

  const formatted = value.toLocaleString("en-US", {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  });

  return (
    <span ref={ref} className="ltr-nums inline-block tabular-nums">
      {prefix}
      {formatted}
      {suffix}
    </span>
  );
}

```
`src\components\site\Footer.tsx`:

```tsx
"use client";

import {
  Phone,
  Mail,
  MapPin,
  Facebook,
  Linkedin,
  MessageCircle,
} from "lucide-react";
import Link from "next/link";
import { COMPANY, NAV_LINKS } from "./data";
import { useStore } from "@/lib/store";

export function Footer() {
  const year = new Date().getFullYear();
  const products = useStore((s) => s.products);

  return (
    <footer className="relative mt-auto border-t border-brand-green/15 bg-white/80 backdrop-blur-sm">
      <div className="h-px bg-gradient-to-l from-transparent via-brand-green/40 to-transparent" />

      <div className="container mx-auto px-4 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="relative">
                <div className="absolute inset-0 rounded-full bg-brand-green/30 blur-md" />
                <div className="relative w-12 h-12 rounded-full bg-white shadow-lg ring-1 ring-brand-green/20 overflow-hidden flex items-center justify-center">
                  <img
                    src="/brand/logo.png"
                    alt="شعار عصر الشمس"
                    className="w-full h-full object-cover"
                    width={48}
                    height={48}
                  />
                </div>
              </div>
              <div>
                <div className="font-heading font-bold text-lg">{COMPANY.name}</div>
                <div className="text-[10px] text-brand-green-dark/70 tracking-widest font-mono uppercase">
                  {COMPANY.latinName}
                </div>
              </div>
            </div>
            <p className="text-slate-600 text-sm leading-relaxed mb-5">{COMPANY.tagline}</p>
            <div className="flex gap-2">
              <a href={COMPANY.socials.whatsapp} target="_blank" rel="noopener noreferrer" aria-label="واتساب" className="w-10 h-10 rounded-lg glass flex items-center justify-center text-slate-600 hover:bg-brand-green hover:text-white transition-all">
                <MessageCircle className="w-4 h-4" />
              </a>
              <a href={COMPANY.socials.facebook} target="_blank" rel="noopener noreferrer" aria-label="فيسبوك" className="w-10 h-10 rounded-lg glass flex items-center justify-center text-slate-600 hover:bg-brand-green hover:text-white transition-all">
                <Facebook className="w-4 h-4" />
              </a>
              <a href={COMPANY.socials.linkedin} target="_blank" rel="noopener noreferrer" aria-label="لينكد إن" className="w-10 h-10 rounded-lg glass flex items-center justify-center text-slate-600 hover:bg-brand-green hover:text-white transition-all">
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="font-heading font-bold text-base mb-4 text-brand-green-dark">روابط سريعة</h4>
            <ul className="space-y-2.5">
              {NAV_LINKS.map((l) => (
                <li key={l.route}>
                  <Link href={l.route} className="text-sm text-slate-600 hover:text-brand-green-dark transition-colors inline-flex items-center gap-2 group">
                    <span className="w-1 h-1 rounded-full bg-brand-green/50 group-hover:bg-brand-green group-hover:scale-150 transition-all" />
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="font-heading font-bold text-base mb-4 text-brand-green-dark">منتجاتنا</h4>
            <ul className="space-y-2.5">
              {products.slice(0, 4).map((p) => (
                <li key={p.id}>
                  <Link href="/products" className="text-sm text-slate-600 hover:text-brand-green-dark transition-colors inline-flex items-center gap-2 group">
                    <span className="w-1 h-1 rounded-full bg-brand-green/50 group-hover:bg-brand-green group-hover:scale-150 transition-all" />
                    {p.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading font-bold text-base mb-4 text-brand-green-dark">معلومات التواصل</h4>
            <ul className="space-y-3 text-sm text-slate-600">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-brand-green/80 flex-shrink-0 mt-0.5" />
                <span className="leading-relaxed">{COMPANY.address}</span>
              </li>
              {COMPANY.phones.map((p) => (
                <li key={p} className="flex items-center gap-2.5">
                  <Phone className="w-4 h-4 text-brand-green/80 flex-shrink-0" />
                  <a href={`tel:${p}`} className="ltr-nums hover:text-brand-green-dark transition-colors" dir="ltr">{p}</a>
                </li>
              ))}
              {COMPANY.emails.map((em) => (
                <li key={em} className="flex items-start gap-2.5">
                  <Mail className="w-4 h-4 text-brand-green/80 flex-shrink-0 mt-0.5" />
                  <a href={`mailto:${em}`} className="ltr-nums hover:text-brand-green-dark transition-colors break-all" dir="ltr">{em}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-6 border-t border-slate-200/80 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500">
          <p>جميع الحقوق محفوظة © {year} {COMPANY.fullName}</p>
          <p className="font-mono tracking-wide">Powered by renewable energy ☀</p>
        </div>
      </div>
    </footer>
  );
}

```
`src\components\site\HeroCarousel.tsx`:

```tsx
"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowLeft,
  ChevronLeft,
  ChevronRight,
  Phone,
  Sparkles,
} from "lucide-react";
import { COMPANY } from "./data";

const AUTOPLAY_MS = 7000;
const FADE_DURATION = 1.1;

type Slide = {
  image: string;
  eyebrow: string;
  title: [string, string];
  description: string;
  cta: string;
  ctaHref: string;
  ctaIcon: "quote" | "phone";
  stats: { value: string; label: string }[];
};

const SLIDES: Slide[] = [
  {
    image: "/hero/hero-bg-1.jpg",
    eyebrow: "الوكيل المعتمد في اليمن",
    title: ["طاقة نظيفة", "لليمن المستدام"],
    description:
      "نوفّر أحدث الألواح الشمسية والانفرترات والبطاريات من علامات عالمية موثوقة، بحلول متكاملة تناسب المنازل والشركات والمصانع في جميع المحافظات.",
    cta: "اطلب عرض سعر الآن",
    ctaHref: "#contact",
    ctaIcon: "quote",
    stats: [
      { value: "30+", label: "عاماً ضمان الألواح" },
      { value: "98%", label: "كفاءة التحويل" },
      { value: "4", label: "وكالات عالمية" },
    ],
  },
  {
    image: "/hero/hero-bg-2.jpg",
    eyebrow: "فريق متخصص · تركيب احترافي",
    title: ["من التوريد", "إلى التشغيل والصيانة"],
    description:
      "من دراسة الجدوى والتصميم إلى التركيب والتشغيل والصيانة، يرافقك فريقنا المتخصص في كل خطوة لضمان أعلى كفاءة وأطول عمر لنظامك الشمسي.",
    cta: "تحدّث مع خبير",
    ctaHref: `tel:${COMPANY.phones[0]}`,
    ctaIcon: "phone",
    stats: [
      { value: "750+", label: "كيلوواط في مشروع" },
      { value: "10+", label: "سنوات عمر البطاريات" },
      { value: "24/7", label: "دعم فني متواصل" },
    ],
  },
];

const pad = (n: number) => String(n + 1).padStart(2, "0");

export function HeroCarousel() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const goNext = useCallback(() => {
    setActive((p) => (p + 1) % SLIDES.length);
  }, []);

  const goPrev = useCallback(() => {
    setActive((p) => (p - 1 + SLIDES.length) % SLIDES.length);
  }, []);

  const goTo = useCallback((index: number) => {
    setActive(index);
  }, []);

  useEffect(() => {
    if (paused) return;
    timerRef.current = setTimeout(goNext, AUTOPLAY_MS);
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [active, paused, goNext]);

  const slide = SLIDES[active];

  return (
    <section
      id="home"
      className="relative h-screen min-h-[640px] w-full overflow-hidden bg-slate-950"
      aria-label="عصر الشمس — الطاقة الشمسية في اليمن"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={() => setPaused(false)}
    >
      {/* Background slides with crossfade + Ken Burns */}
      <AnimatePresence initial={false}>
        <motion.div
          key={active}
          className="absolute inset-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: FADE_DURATION, ease: "easeInOut" }}
        >
          <motion.div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${slide.image})` }}
            initial={{ scale: 1.08 }}
            animate={{ scale: 1 }}
            transition={{
              duration: AUTOPLAY_MS / 1000,
              ease: "easeOut",
            }}
          />
          {/* Dark gradient scrim — heavier on the right for RTL text readability */}
          <div className="absolute inset-0 bg-gradient-to-l from-black/85 via-black/55 to-black/30" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-black/40" />
        </motion.div>
      </AnimatePresence>

      {/* Content */}
      <div className="relative z-10 h-full container mx-auto px-4 sm:px-6 lg:px-8 flex items-center">
        <div className="max-w-2xl py-24">
          <motion.div
            key={`content-${active}`}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.7,
              ease: [0.16, 1, 0.3, 1],
              delay: 0.25,
            }}
          >
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 px-4 py-1.5 text-xs sm:text-sm text-white mb-5">
              <Sparkles className="w-3.5 h-3.5 text-brand-green-lighter" />
              <span>{slide.eyebrow}</span>
            </div>

            {/* Title — two lines */}
            <h1 className="font-heading font-extrabold text-4xl sm:text-6xl lg:text-7xl leading-[1.1] mb-6 text-white [text-shadow:_0_2px_24px_rgb(0_0_0_/_55%)]">
              {slide.title[0]}
              <br />
              <span className="bg-gradient-to-l from-brand-green-light via-brand-green to-brand-blue-light bg-clip-text text-transparent [text-shadow:_0_2px_30px_rgb(0_0_0_/_40%)]">
                {slide.title[1]}
              </span>
            </h1>

            {/* Description */}
            <p className="text-base sm:text-lg text-slate-200 leading-relaxed max-w-xl mb-8 [text-shadow:_0_1px_10px_rgb(0_0_0_/_70%)]">
              {slide.description}
            </p>

            {/* CTA */}
            <a
              href={slide.ctaHref}
              className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-brand-green via-brand-green-light to-brand-blue px-7 py-3.5 text-sm sm:text-base font-bold text-white shadow-2xl shadow-brand-green/40 hover:shadow-brand-green/60 hover:scale-105 transition-all"
            >
              {slide.ctaIcon === "phone" ? (
                <Phone className="w-4 h-4" />
              ) : (
                <Sparkles className="w-4 h-4" />
              )}
              <span>{slide.cta}</span>
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            </a>

            {/* Stats */}
            <div className="mt-12 grid grid-cols-3 gap-3 sm:gap-6 max-w-xl">
              {slide.stats.map((s, i) => (
                <div key={i} className="text-white">
                  <div className="font-heading font-extrabold text-2xl sm:text-4xl ltr-nums [text-shadow:_0_2px_14px_rgb(0_0_0_/_65%)] bg-gradient-to-b from-white to-slate-300 bg-clip-text text-transparent">
                    {s.value}
                  </div>
                  <div className="text-[11px] sm:text-xs text-slate-300 mt-1 [text-shadow:_0_1px_6px_rgb(0_0_0_/_75%)]">
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Arrow controls — RTL: right = prev, left = next */}
      <button
        type="button"
        onClick={goPrev}
        aria-label="الشريحة السابقة"
        className="absolute top-1/2 -translate-y-1/2 right-4 sm:right-6 z-20 w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-white/25 hover:scale-110 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-green-lighter"
      >
        <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
      </button>
      <button
        type="button"
        onClick={goNext}
        aria-label="الشريحة التالية"
        className="absolute top-1/2 -translate-y-1/2 left-4 sm:left-6 z-20 w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-white/25 hover:scale-110 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-green-lighter"
      >
        <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
      </button>

      {/* Bottom: slide counter + live progress bars */}
      <div className="absolute bottom-6 sm:bottom-8 inset-x-0 z-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="flex items-center justify-between gap-4">
            {/* Slide counter */}
            <div className="font-mono text-sm sm:text-base font-bold ltr-nums [text-shadow:_0_1px_8px_rgb(0_0_0_/_75%)]">
              <span className="text-brand-green-lighter">{pad(active)}</span>
              <span className="mx-1 text-white/50">/</span>
              <span className="text-white/70">{pad(SLIDES.length - 1)}</span>
            </div>

            {/* Progress bars */}
            <div className="flex-1 max-w-md flex items-center gap-2">
              {SLIDES.map((s, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => goTo(i)}
                  aria-label={`الانتقال إلى الشريحة ${i + 1}`}
                  className="relative flex-1 h-1.5 rounded-full overflow-hidden bg-white/20 hover:bg-white/30 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-green-lighter"
                >
                  {i < active ? (
                    <span className="absolute inset-0 bg-gradient-to-l from-brand-green to-brand-blue" />
                  ) : null}
                  {i === active ? (
                    <span
                      key={`fill-${active}`}
                      className="hero-progress-fill absolute top-0 bottom-0 right-0 bg-gradient-to-l from-brand-green via-brand-green-light to-brand-blue"
                      style={{
                        animationPlayState: paused ? "paused" : "running",
                      }}
                    />
                  ) : null}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom fade into next section */}
      <div
        aria-hidden
        className="absolute bottom-0 inset-x-0 h-32 bg-gradient-to-t from-background to-transparent pointer-events-none z-10"
      />

      <style jsx>{`
        .hero-progress-fill {
          animation: hero-progress-anim ${AUTOPLAY_MS}ms linear forwards;
        }
        @keyframes hero-progress-anim {
          from {
            width: 0%;
          }
          to {
            width: 100%;
          }
        }
      `}</style>
    </section>
  );
}

```
`src\components\site\Navbar.tsx`:

```tsx
"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone, MessageSquare } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { COMPANY, NAV_LINKS } from "./data";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [hash, setHash] = useState("#home");
  const pathname = usePathname();
  const isHome = pathname === "/";

  useEffect(() => {
    if (!isHome) return;
    const updateHash = () => setHash(window.location.hash || "#home");
    updateHash();
    window.addEventListener("hashchange", updateHash);
    return () => window.removeEventListener("hashchange", updateHash);
  }, [isHome]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!isHome) return;
    const sections = NAV_LINKS.filter((l) => l.href.startsWith("#")).map((l) =>
      document.querySelector(l.href)
    );
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            window.history.replaceState(null, "", `#${e.target.id}`);
            setHash(`#${e.target.id}`);
          }
        });
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );
    sections.forEach((s) => s && obs.observe(s));
    return () => obs.disconnect();
  }, [isHome]);

  const solidNav = scrolled || !isHome;
  const active = isHome ? hash : pathname;

  const scrollToContact = () => {
    if (isHome) {
      const form = document.getElementById("contact-form");
      if (form) {
        form.scrollIntoView({ behavior: "smooth", block: "center" });
        setTimeout(() => {
          const nameInput = form.querySelector("input[name='name']") as HTMLInputElement | null;
          nameInput?.focus({ preventScroll: true });
        }, 700);
      }
    }
    setOpen(false);
  };

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className={cn(
        "fixed top-0 inset-x-0 z-50 transition-all duration-500",
        solidNav ? "py-2" : "py-3 sm:py-4"
      )}
    >
      <div className="container mx-auto px-4">
        <nav
          className={cn(
            "flex items-center justify-between rounded-2xl px-3 sm:px-5 py-2.5 sm:py-3 transition-all duration-500",
            solidNav ? "glass-strong shadow-xl shadow-brand-green/5" : "bg-transparent"
          )}
        >
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 sm:gap-3 group flex-shrink-0">
            <div className="relative">
              <div className="absolute inset-0 rounded-full bg-brand-green/30 blur-md group-hover:bg-brand-green/50 transition-all" />
              <div className="relative w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-white shadow-lg ring-1 ring-brand-green/20 overflow-hidden flex items-center justify-center group-hover:ring-brand-green/40 group-hover:scale-105 transition-all">
                <img
                  src="/brand/logo.png"
                  alt="شعار عصر الشمس"
                  className="w-full h-full object-cover"
                  width={44}
                  height={44}
                />
              </div>
            </div>
            <div className="flex flex-col leading-tight">
              <span
                className={cn(
                  "font-heading font-bold text-base sm:text-lg transition-colors",
                  solidNav ? "text-foreground" : "text-white"
                )}
              >
                {COMPANY.name}
              </span>
              <span
                className={cn(
                  "text-[10px] tracking-wider font-mono uppercase transition-colors",
                  solidNav ? "text-brand-green-dark/80" : "text-brand-green-lighter"
                )}
              >
                {COMPANY.latinName}
              </span>
            </div>
          </Link>

          {/* Desktop links */}
          <ul className="hidden lg:flex items-center gap-0.5">
            {NAV_LINKS.map((link) => {
              const linkHref = isHome ? link.href : link.route;
              const isActive = isHome ? active === link.href : pathname === link.route;
              return (
                <li key={link.route}>
                  <Link
                    href={linkHref}
                    className={cn(
                      "relative px-3.5 py-2 text-sm font-medium rounded-lg transition-colors",
                      isActive
                        ? solidNav
                          ? "text-brand-green-dark"
                          : "text-brand-green-lighter"
                        : solidNav
                          ? "text-slate-600 hover:text-brand-green-dark"
                          : "text-white/85 hover:text-white"
                    )}
                  >
                    {link.label}
                    {isActive && (
                      <motion.span
                        layoutId="nav-active"
                        className={cn(
                          "absolute inset-0 rounded-lg border transition-colors",
                          solidNav
                            ? "bg-brand-green/10 border-brand-green/30"
                            : "bg-white/10 border-white/30"
                        )}
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}
                  </Link>
                </li>
              );
            })}
          </ul>

          {/* CTA + mobile toggle */}
          <div className="flex items-center gap-1.5 sm:gap-2 flex-shrink-0">
            <Link
              href={isHome ? "#contact" : "/contact"}
              onClick={isHome ? scrollToContact : undefined}
              className="hidden sm:inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-brand-green to-brand-blue px-4 sm:px-5 py-2 text-sm font-semibold text-white shadow-lg shadow-brand-green/25 hover:shadow-brand-green/40 hover:scale-105 transition-all"
            >
              <MessageSquare className="w-4 h-4" />
              <span className="hidden md:inline">تحدّث مع خبير</span>
              <span className="md:hidden ltr-nums">{COMPANY.phones[0]}</span>
            </Link>

            <button
              type="button"
              aria-label="القائمة"
              onClick={() => setOpen((v) => !v)}
              className={cn(
                "lg:hidden inline-flex items-center justify-center w-10 h-10 rounded-xl transition-colors",
                solidNav
                  ? "glass text-foreground hover:bg-brand-green/10"
                  : "bg-white/10 backdrop-blur-md border border-white/30 text-white hover:bg-white/20"
              )}
            >
              {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </nav>

        {/* Mobile drawer */}
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, y: -10, height: 0 }}
              animate={{ opacity: 1, y: 0, height: "auto" }}
              exit={{ opacity: 0, y: -10, height: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="lg:hidden mt-2 overflow-hidden"
            >
              <ul className="glass-strong rounded-2xl p-3 flex flex-col gap-1">
                {NAV_LINKS.map((link) => {
                  const linkHref = isHome ? link.href : link.route;
                  const isActive = isHome ? active === link.href : pathname === link.route;
                  return (
                    <li key={link.route}>
                      <Link
                        href={linkHref}
                        onClick={() => setOpen(false)}
                        className={cn(
                          "block px-4 py-3 rounded-xl text-sm font-medium transition-colors",
                          isActive
                            ? "bg-brand-green/10 text-brand-green-dark border border-brand-green/30"
                            : "text-slate-600 hover:bg-brand-green/5"
                        )}
                      >
                        {link.label}
                      </Link>
                    </li>
                  );
                })}
                <li>
                  <Link
                    href={isHome ? "#contact" : "/contact"}
                    onClick={() => { if (isHome) scrollToContact(); else setOpen(false); }}
                    className="mt-1 w-full flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-brand-green to-brand-blue px-4 py-3 text-sm font-semibold text-white"
                  >
                    <MessageSquare className="w-4 h-4" />
                    تحدّث مع خبير
                  </Link>
                </li>
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
}

```
`src\components\site\PageHero.tsx`:

```tsx
"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { ChevronLeft, Home } from "lucide-react";

interface PageHeroProps {
  image: string;
  eyebrow: string;
  title: string;
  subtitle?: string;
  breadcrumb: string;
}

export function PageHero({ image, eyebrow, title, subtitle, breadcrumb }: PageHeroProps) {
  return (
    <section className="relative h-[50vh] min-h-[400px] max-h-[600px] w-full overflow-hidden flex items-end">
      <motion.div
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 8, ease: "easeOut" }}
        className="absolute inset-0"
      >
        <img src={image} alt="" className="w-full h-full object-cover" />
      </motion.div>
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/50 to-slate-950/20" />
      <div className="absolute bottom-0 inset-x-0 h-32 bg-gradient-to-t from-background to-transparent" />
      <div className="relative container mx-auto px-4 pb-12 sm:pb-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          className="max-w-3xl"
        >
          <nav className="flex items-center gap-2 text-xs text-white/70 mb-4">
            <Link href="/" className="inline-flex items-center gap-1 hover:text-white transition-colors">
              <Home className="w-3.5 h-3.5" />
              <span>الرئيسية</span>
            </Link>
            <ChevronLeft className="w-3.5 h-3.5" />
            <span className="text-brand-green-lighter font-medium">{breadcrumb}</span>
          </nav>
          <div className="inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 px-4 py-1.5 text-xs text-white mb-5">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-green-lighter animate-pulse" />
            {eyebrow}
          </div>
          <h1 className="font-heading font-extrabold text-4xl sm:text-5xl lg:text-6xl text-white leading-[1.1] mb-4 drop-shadow-2xl">
            {title}
          </h1>
          {subtitle && (
            <p className="text-base sm:text-lg text-slate-100/90 leading-relaxed max-w-2xl drop-shadow-lg">
              {subtitle}
            </p>
          )}
        </motion.div>
      </div>
    </section>
  );
}

```
`src\components\site\PageLayout.tsx`:

```tsx
"use client";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";

export function PageLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative min-h-screen flex flex-col bg-background overflow-x-hidden">
      <Navbar />
      <main className="flex-1">{children}</main>
      <Footer />
      <a
        href="https://wa.me/+967780177177"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="تواصل عبر واتساب"
        className="fixed bottom-5 left-5 z-50 w-14 h-14 rounded-full bg-gradient-to-br from-brand-green to-brand-green-dark shadow-2xl shadow-brand-green/40 flex items-center justify-center text-white hover:scale-110 transition-transform group"
      >
        <span className="absolute inset-0 rounded-full bg-brand-green animate-ping opacity-20" />
        <svg className="relative w-7 h-7" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
        </svg>
      </a>
    </div>
  );
}

```
`src\components\site\Products.tsx`:

```tsx
"use client";

import {
  Sun, Zap, BatteryCharging, Cable, Lightbulb, Wrench, Factory, Home,
  ArrowLeft, ArrowUpRight, Package,
  type LucideIcon,
} from "lucide-react";
import Link from "next/link";
import { useStore } from "@/lib/store";
import { Reveal, StaggerContainer, StaggerItem } from "./Reveal";

const ICONS: Record<string, LucideIcon> = {
  Sun, Zap, BatteryCharging, Cable, Lightbulb, Wrench, Factory, Home,
};

const CATEGORY_ACCENTS: Record<string, string> = {
  panels: "from-emerald-500 to-brand-blue",
  inverters: "from-brand-blue to-indigo-600",
  batteries: "from-emerald-400 to-teal-600",
  cables: "from-cyan-500 to-brand-blue",
};

export function Products() {
  const products = useStore((s) => s.products);
  const categories = useStore((s) => s.categories);

  return (
    <section id="products" className="relative py-24 sm:py-32 overflow-hidden">
      <div className="absolute top-1/2 right-0 w-[40rem] h-[40rem] -translate-y-1/2 rounded-full bg-brand-blue/8 blur-[120px] pointer-events-none" />
      <div className="absolute inset-0 bg-grid opacity-20 pointer-events-none" />

      <div className="container mx-auto px-4 relative">
        <Reveal className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-xs sm:text-sm text-brand-green-dark tracking-widest font-mono uppercase mb-3">
            منتجات الطاقة الشمسية
          </span>
          <h2 className="font-heading font-extrabold text-3xl sm:text-5xl mb-5">
            <span className="text-foreground">منتجات </span>
            <span className="text-gradient-solar">عالية الجودة</span>
            <span className="text-foreground"> من أفضل العلامات العالمية</span>
          </h2>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            نوفر مجموعة متكاملة من منتجات الطاقة الشمسية عالية الجودة، مختارة بعناية من أفضل العلامات التجارية العالمية لتلبية كافة احتياجاتك. اختر القسم لاستعرض منتجاته.
          </p>
        </Reveal>

        {/* Category cards — clickable, link to /products/category/[id] */}
        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5" stagger={0.08}>
          {categories.map((cat) => {
            const Icon = ICONS[cat.icon] ?? Sun;
            const count = products.filter((p) => p.categoryId === cat.id).length;
            const accent = CATEGORY_ACCENTS[cat.id] || "from-brand-green to-brand-blue";
            return (
              <StaggerItem key={cat.id}>
                <Link
                  href={`/products/category/${cat.id}`}
                  className="group relative block bento-card p-6 h-full overflow-hidden"
                >
                  <div className={`absolute -top-12 -left-12 w-32 h-32 rounded-full bg-gradient-to-br ${accent} opacity-15 group-hover:opacity-30 blur-2xl transition-opacity duration-700`} />

                  <div className="relative">
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${accent} flex items-center justify-center shadow-lg mb-5 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500`}>
                      <Icon className="w-8 h-8 text-white" strokeWidth={2.2} />
                    </div>

                    <h3 className="font-heading font-bold text-lg sm:text-xl mb-2 group-hover:text-brand-green-dark transition-colors">
                      {cat.name}
                    </h3>

                    <p className="text-slate-600 text-xs leading-relaxed line-clamp-3 mb-4">
                      {cat.description}
                    </p>

                    <div className="flex items-center justify-between pt-3 border-t border-slate-100">
                      <span className="text-xs text-slate-500">
                        <span className="ltr-nums font-bold text-slate-700">{count}</span> منتج
                      </span>
                      <span className="inline-flex items-center gap-1 text-xs font-semibold text-brand-green-dark group-hover:text-brand-green">
                        استعرض
                        <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                      </span>
                    </div>
                  </div>
                </Link>
              </StaggerItem>
            );
          })}
        </StaggerContainer>

        <Reveal delay={0.1} className="text-center mt-14">
          <Link
            href="/products"
            className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-brand-green to-brand-blue px-7 py-3.5 text-sm sm:text-base font-semibold text-white shadow-lg shadow-brand-green/25 hover:shadow-brand-green/40 hover:scale-105 transition-all"
          >
            <span>استعرض جميع المنتجات</span>
            <ArrowLeft className="w-4 h-4" />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}

```
`src\components\site\Projects.tsx`:

```tsx
"use client";

import { MapPin, Zap, ArrowLeft } from "lucide-react";
import Link from "next/link";
import { useStore } from "@/lib/store";
import { Reveal } from "./Reveal";
import type { Project } from "@/lib/types";

export function Projects() {
  const projects = useStore((s) => s.projects);

  return (
    <section id="projects" className="relative py-24 sm:py-32 overflow-hidden">
      <div className="absolute top-1/4 left-0 w-[40rem] h-[40rem] rounded-full bg-brand-blue/8 blur-[140px] pointer-events-none" />

      <div className="container mx-auto px-4 relative">
        <Reveal className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-xs sm:text-sm text-brand-green-dark tracking-widest font-mono uppercase mb-3">
            مشاريعنا
          </span>
          <h2 className="font-heading font-extrabold text-3xl sm:text-5xl mb-5">
            <span className="text-foreground">مشاريع </span>
            <span className="text-gradient-solar">نفخر بتنفيذها</span>
            <span className="text-foreground"> في اليمن</span>
          </h2>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            من محطات تجارية كبرى إلى مراكز تسوق وأنظمة ضخ مياه مجتمعية — مشاريع متنوعة تجسد خبرتنا في تصميم وتركيب أنظمة الطاقة الشمسية المتكاملة.
          </p>
        </Reveal>

        {/* Bento layout: large first card + 2 stacked */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 sm:gap-6">
          {projects[0] && (
            <Reveal className="lg:col-span-2 lg:row-span-2">
              <ProjectCard project={projects[0]} large />
            </Reveal>
          )}
          {projects.slice(1, 3).map((p, i) => (
            <Reveal key={p.id} delay={0.1 + i * 0.1}>
              <ProjectCard project={p} />
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.1} className="text-center mt-14">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 rounded-full glass-strong px-7 py-3.5 text-sm sm:text-base font-semibold text-foreground hover:bg-brand-green/10 transition-all group"
          >
            <span>استعرض جميع المشاريع</span>
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}

function ProjectCard({ project, large = false }: { project: Project; large?: boolean }) {
  return (
    <article
      className={`group relative overflow-hidden h-full rounded-3xl shadow-lg ${large ? "min-h-[28rem] sm:min-h-[34rem]" : "min-h-[18rem]"}`}
    >
      {/* Background image or gradient fallback */}
      {project.image ? (
        <img
          src={project.image}
          alt={project.title}
          className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
        />
      ) : (
        <div className={`absolute inset-0 bg-gradient-to-br ${project.accent}`} />
      )}

      {/* Lighter dark scrim — image stays visible, text readable at bottom */}
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/30 to-transparent" />

      {/* Capacity badge */}
      <div className="absolute top-5 right-5 glass-strong rounded-full px-4 py-2 flex items-center gap-2 z-10">
        <Zap className="w-4 h-4 text-brand-green-dark" />
        <span className="text-sm font-bold text-brand-green-dark ltr-nums">{project.capacity}</span>
        <span className="text-xs text-slate-700">{project.unit}</span>
      </div>

      {/* Content at bottom */}
      <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8 z-10">
        <div className="flex flex-wrap items-center gap-2 mb-3">
          <span className="inline-flex items-center gap-1 rounded-full bg-white/25 backdrop-blur-sm border border-white/40 px-2.5 py-0.5 text-[11px] text-white font-mono">
            {project.type}
          </span>
          <span className="inline-flex items-center gap-1 text-[11px] text-white/90">
            <MapPin className="w-3 h-3" />
            {project.location}
          </span>
        </div>
        <h3 className={`font-heading font-bold ${large ? "text-2xl sm:text-3xl" : "text-xl sm:text-2xl"} mb-3 text-white drop-shadow-lg`}>
          {project.title}
        </h3>
        <p className={`text-white/90 leading-relaxed ${large ? "text-sm sm:text-base" : "text-xs sm:text-sm line-clamp-3"} drop-shadow`}>
          {project.description}
        </p>
        {large && (
          <div className="mt-6 flex items-end gap-3">
            <div className="font-heading font-extrabold text-5xl sm:text-6xl text-gradient-glow ltr-nums leading-none">
              {project.capacity}
            </div>
            <div className="pb-1 text-white text-sm">{project.unit}</div>
          </div>
        )}
      </div>
    </article>
  );
}

```
`src\components\site\Reveal.tsx`:

```tsx
"use client";

import { motion, useInView, type Variants } from "framer-motion";
import { useRef, type ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
  once?: boolean;
};

const baseVariants: Variants = {
  hidden: (y: number) => ({ opacity: 0, y }),
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
  },
};

export function Reveal({
  children,
  delay = 0,
  y = 28,
  className,
  once = true,
}: RevealProps) {
  const ref = useRef(null);
  const inView = useInView(ref, { once, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      className={className}
      custom={y}
      variants={baseVariants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      transition={{ delay }}
    >
      {children}
    </motion.div>
  );
}

/**
 * Stagger container — children must use RevealStaggerItem.
 */
export function StaggerContainer({
  children,
  className,
  delay = 0,
  stagger = 0.08,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  stagger?: number;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      className={className}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: stagger, delayChildren: delay } },
      }}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({
  children,
  className,
  y = 24,
}: {
  children: ReactNode;
  className?: string;
  y?: number;
}) {
  return (
    <motion.div
      className={className}
      variants={{
        hidden: { opacity: 0, y },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
        },
      }}
    >
      {children}
    </motion.div>
  );
}

```
`src\components\site\Services.tsx`:

```tsx
"use client";

import {
  Sun,
  Wrench,
  Lightbulb,
  Zap,
  Factory,
  Home,
  ArrowLeft,
  type LucideIcon,
} from "lucide-react";
import { SERVICES } from "./data";
import { Reveal, StaggerContainer, StaggerItem } from "./Reveal";

const ICONS: Record<string, LucideIcon> = {
  Sun,
  Wrench,
  Lightbulb,
  Zap,
  Factory,
  Home,
};

export function Services() {
  return (
    <section id="services" className="relative py-24 sm:py-32 overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-grid opacity-20 pointer-events-none" />
      <div className="absolute top-0 left-1/4 w-[30rem] h-[30rem] rounded-full bg-brand-green/5 blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-4 relative">
        <Reveal className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-xs sm:text-sm text-brand-green-dark tracking-widest font-mono uppercase mb-3">
            خدماتنا
          </span>
          <h2 className="font-heading font-extrabold text-3xl sm:text-5xl mb-5">
            <span className="text-foreground">حلول طاقة </span>
            <span className="text-gradient-solar">متكاملة واحترافية</span>
          </h2>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            من التركيب إلى الصيانة، ومن الاستشارات إلى حلول المصانع والمنازل — نقدم خدمات شاملة تغطي كافة احتياجاتك في عالم الطاقة الشمسية.
          </p>
        </Reveal>

        <StaggerContainer
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6"
          stagger={0.08}
        >
          {SERVICES.map((s, i) => {
            const Icon = ICONS[s.icon] ?? Sun;
            return (
              <StaggerItem key={i}>
                <ServiceCard
                  Icon={Icon}
                  title={s.title}
                  description={s.description}
                  index={i + 1}
                />
              </StaggerItem>
            );
          })}
        </StaggerContainer>

        <Reveal delay={0.1} className="text-center mt-14">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full glass-strong px-7 py-3.5 text-sm sm:text-base font-semibold text-foreground hover:bg-brand-green/10 transition-all group"
          >
            <span>استعرض جميع الخدمات</span>
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          </a>
        </Reveal>
      </div>
    </section>
  );
}

function ServiceCard({
  Icon,
  title,
  description,
  index,
}: {
  Icon: LucideIcon;
  title: string;
  description: string;
  index: number;
}) {
  return (
    <article className="group relative bento-card p-7 h-full overflow-hidden">
      {/* Number watermark */}
      <span className="absolute -top-4 -left-2 font-heading font-extrabold text-8xl text-brand-green/5 select-none pointer-events-none">
        {String(index).padStart(2, "0")}
      </span>

      {/* Hover glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-brand-green/0 to-brand-blue/0 group-hover:from-brand-green/5 group-hover:to-brand-blue/10 transition-all duration-500 pointer-events-none" />

      <div className="relative">
        <div className="w-14 h-14 rounded-2xl glass-strong flex items-center justify-center mb-5 group-hover:bg-gradient-to-br group-hover:from-brand-green group-hover:to-brand-blue transition-all duration-500">
          <Icon
            className="w-7 h-7 text-brand-green-dark group-hover:text-white transition-colors duration-500"
            strokeWidth={2.2}
          />
        </div>

        <h3 className="font-heading font-bold text-xl mb-3 group-hover:text-brand-green-dark transition-colors">
          {title}
        </h3>
        <p className="text-slate-600 text-sm leading-relaxed">{description}</p>
      </div>

      {/* Bottom border accent */}
      <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-l from-transparent via-brand-green/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    </article>
  );
}

```
`src\components\site\WhyUs.tsx`:

```tsx
"use client";

import {
  Award,
  Users,
  Handshake,
  Headphones,
  type LucideIcon,
} from "lucide-react";
import { WHY_US } from "./data";
import { Reveal, StaggerContainer, StaggerItem } from "./Reveal";

const ICONS: Record<string, LucideIcon> = {
  Award,
  Users,
  Handshake,
  Headphones,
};

export function WhyUs() {
  return (
    <section className="relative py-24 sm:py-32 overflow-hidden">
      {/* Top divider with sun glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-brand-green/40 to-transparent" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-72 h-72 rounded-full bg-brand-green/10 blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-4 relative">
        <Reveal className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-xs sm:text-sm text-brand-green-dark tracking-widest font-mono uppercase mb-3">
            لماذا نحن
          </span>
          <h2 className="font-heading font-extrabold text-3xl sm:text-5xl mb-5">
            <span className="text-foreground">لماذا تختار </span>
            <span className="text-gradient-solar">عصر الشمس؟</span>
          </h2>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            نمتلك الخبرة والشراكات والفريق المتخصص لضمان حصولك على أفضل حل طاقة شمسية، مع متابعة كاملة بعد التركيب وخدمة دعم متواصلة.
          </p>
        </Reveal>

        <StaggerContainer
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6"
          stagger={0.1}
        >
          {WHY_US.map((item, i) => {
            const Icon = ICONS[item.icon] ?? Award;
            return (
              <StaggerItem key={i}>
                <div className="group bento-card p-7 h-full text-center">
                  <div className="relative inline-flex mb-5">
                    <div className="absolute inset-0 rounded-2xl bg-brand-green/30 blur-xl group-hover:bg-brand-green/50 transition-colors" />
                    <div className="relative w-16 h-16 rounded-2xl bg-gradient-to-br from-brand-green to-brand-blue flex items-center justify-center group-hover:rotate-6 transition-transform duration-500">
                      <Icon className="w-8 h-8 text-white" strokeWidth={2.2} />
                    </div>
                  </div>
                  <h3 className="font-heading font-bold text-lg sm:text-xl mb-3 group-hover:text-brand-green-dark transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </div>
    </section>
  );
}

```
`src\components\site\data.ts`:

```ts
/**
 * Centralized content data for Asr Al-Shams.
 * Extracted from https://aseralshams.com/ and structured for the redesigned site.
 * All Arabic content preserved verbatim from the source.
 */

export const COMPANY = {
  name: "عصر الشمس",
  fullName: "عصر الشمس للاستيراد والتجارة",
  latinName: "Asr Al-Shams",
  tagline: "حلول متكاملة وموثوقة لاستيراد، تركيب، وتشغيل أنظمة الطاقة الشمسية عالية الجودة.",
  about: {
    short:
      "شركة عصر الشمس للاستيراد والتجارة هي إحدى الشركات الرائدة في اليمن، متخصصة في مجال الطاقة المتجددة. نفخر بكوننا شريكاً موثوقاً في استيراد وتوريد وتركيب وتشغيل وصيانة أنظمة الطاقة الشمسية بجميع مكوناتها.",
    long: "نحن ملتزمون بتوفير أحدث التقنيات العالمية، بما في ذلك ألواح الطاقة الشمسية بأحدث خلايا (N-Type / HJT / ABC)، والمحولات الأوروبية والصينية المتقدمة (On-Grid / Off-Grid / Hybrid)، بالإضافة إلى كافة أنواع بطاريات الليثيوم والكابلات المتخصصة. نقدم خدمات متكاملة تشمل ما بعد البيع ومتابعة تنفيذ المشاريع لضمان تحقيق أقصى استفادة لعملائنا.",
  },
  address: "شارع خولان – بعد جولة الجوازات، صنعاء، اليمن",
  phones: ["776284444", "780177177"],
  whatsapp: "+967780177177",
  emails: ["info@aseralshams.com", "maged@aseralshams.com"],
  socials: {
    facebook: "https://www.facebook.com/aseralshamscom",
    linkedin: "https://www.linkedin.com/company/asr-alshams/",
    whatsapp: "https://wa.me/+967780177177",
  },
};

export const STATS = [
  { value: 30, suffix: "+", label: "عاماً ضمان أداء الألواح" },
  { value: 98, suffix: "%", label: "كفاءة تحويل الانفرترات" },
  { value: 10, suffix: "+", label: "سنوات عمر البطاريات" },
  { value: 750, suffix: "+", label: "كيلوواط في مشروع واحد" },
];

export const BRANDS = [
  {
    name: "AE Solar",
    arabic: "ألــواح أي سـولار العـالمـية",
    role: "الــوكيل المعتمد فــي اليمــن",
    category: "الألواح الشمسية",
    description: "ألواح شمسية عالية الكفاءة بتقنيات HJT و TOPCON، مع كفاءة تصل إلى 23.21% وضمان أداء يصل إلى 30 عاماً.",
    logo: "/agencies/agency-3.png",
    accent: "from-red-500 to-rose-600",
    established: "ألمانيا · منذ 2003",
  },
  {
    name: "Sinexcel",
    arabic: "انفــرترات سنــكسـل iSUNA",
    role: "موزع معتمد",
    category: "الانفرترات وتخزين الطاقة",
    description: "انفرترات هجينة On-Grid / Off-Grid بكفاءة تحويل تصل إلى 98%، بمراقبة عن بعد وتحكم ذكي ونطاق سعات من 3 إلى 50 كيلوواط.",
    logo: "/agencies/agency-2.png",
    accent: "from-brand-blue to-emerald-500",
    established: "الصين · عالمياً",
  },
  {
    name: "TOP CABLE",
    arabic: "كابلات توب كيبل الإسبانية",
    role: "موزع معتمد",
    category: "الكابلات الكهربائية والشمسية",
    description: "كابلات AC وكابلات طاقة شمسية متينة مصممة للظروف البيئية القاسية، مقاومة للأشعة فوق البنفسجية مع عزل مزدوج وأمان عالي.",
    logo: "/agencies/agency-1.png",
    accent: "from-brand-blue to-blue-700",
    established: "إسبانيا · منذ 1980",
  },
  {
    name: "Sunwoda",
    arabic: "بطاريات ليثيوم صنودا",
    role: "موزع معتمد",
    category: "بطاريات الليثيوم وتخزين الطاقة",
    description: "بطاريات ليثيوم أيون عالية السعة بأنظمة إدارة ذكية (BMS)، تصميم قابل للتوسعة وعمر افتراضي يصل إلى 10 سنوات.",
    logo: "/agencies/agency-4.png",
    accent: "from-red-500 to-rose-600",
    established: "الصين · منذ 1997",
  },
];

export const SERVICES = [
  {
    icon: "Sun",
    title: "تركيب الأنظمة الشمسية",
    description:
      "نقوم بتركيب أنظمة الطاقة الشمسية للمنازل والشركات والمصانع بكفاءة واحترافية عالية، مع التزام كامل بأعلى معايير الجودة والسلامة.",
  },
  {
    icon: "Wrench",
    title: "الصيانة والدعم الفني",
    description:
      "نوفر خدمات صيانة دورية ودعم فني مستمر لضمان استمرارية عمل أنظمتكم الشمسية بأقصى كفاءة على مدار العام.",
  },
  {
    icon: "Lightbulb",
    title: "استشارات الطاقة",
    description:
      "نقدم استشارات متخصصة لمساعدتك في اختيار النظام الأمثل وفقاً لاحتياجاتك وميزانيتك، مع دراسة جدوى كاملة.",
  },
  {
    icon: "Zap",
    title: "أنظمة الطاقة الهجينة",
    description:
      "تصميم وتركيب أنظمة الطاقة الهجينة (PV-Diesel) التي تجمع بين الطاقة الشمسية والمصادر التقليدية لأقصى استقرار.",
  },
  {
    icon: "Factory",
    title: "حلول الطاقة للمصانع",
    description:
      "حلول طاقة شمسية متكاملة للمصانع والمنشآت الصناعية لتخفيض تكاليف الطاقة وتحقيق الاستدامة التشغيلية.",
  },
  {
    icon: "Home",
    title: "أنظمة المنازل",
    description:
      "دمج أنظمة الطاقة الشمسية مع حلول المنازل الذكية لكفاءة استهلاك الطاقة وتوفير فوري في فواتير الكهرباء.",
  },
];

export const WHY_US = [
  {
    icon: "Award",
    title: "جودة عالمية",
    description:
      "نعمل مع أفضل العلامات التجارية العالمية من حيث الجودة والكفاءة، ونوفّر منتجات معتمدة بشهادات ضمان موثقة.",
  },
  {
    icon: "Users",
    title: "فريق متخصص",
    description:
      "فريق عمل متكامل من إداريين ومهندسين وفنيين متخصصين في الطاقة المتجددة بخبرات تراكمية تمتد لسنوات.",
  },
  {
    icon: "Handshake",
    title: "شراكات موثوقة",
    description:
      "شراكات استراتيجية مع أكبر الشركات العالمية في مجال الطاقة الشمسية كـ AE Solar و Sinexcel و Sunwoda و TOP CABLE.",
  },
  {
    icon: "Headphones",
    title: "دعم فني متكامل",
    description:
      "خدمة ما بعد البيع ودعم فني متواصل لضمان رضاكم التام، مع صيانة دورية ومراقبة عن بعد لكل الأنظمة المركّبة.",
  },
];

export const NAV_LINKS = [
  { href: "#home", route: "/", label: "الرئيسية" },
  { href: "#about", route: "/about", label: "من نحن" },
  { href: "#products", route: "/products", label: "منتجاتنا" },
  { href: "#services", route: "/#services", label: "خدماتنا" },
  { href: "#projects", route: "/projects", label: "مشاريعنا" },
  { href: "#contact", route: "/contact", label: "تواصل معنا" },
];

```
`src\components\ui\accordion.tsx`:

```tsx
"use client"

import * as React from "react"
import * as AccordionPrimitive from "@radix-ui/react-accordion"
import { ChevronDownIcon } from "lucide-react"

import { cn } from "@/lib/utils"

function Accordion({
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Root>) {
  return <AccordionPrimitive.Root data-slot="accordion" {...props} />
}

function AccordionItem({
  className,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Item>) {
  return (
    <AccordionPrimitive.Item
      data-slot="accordion-item"
      className={cn("border-b last:border-b-0", className)}
      {...props}
    />
  )
}

function AccordionTrigger({
  className,
  children,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Trigger>) {
  return (
    <AccordionPrimitive.Header className="flex">
      <AccordionPrimitive.Trigger
        data-slot="accordion-trigger"
        className={cn(
          "focus-visible:border-ring focus-visible:ring-ring/50 flex flex-1 items-start justify-between gap-4 rounded-md py-4 text-left text-sm font-medium transition-all outline-none hover:underline focus-visible:ring-[3px] disabled:pointer-events-none disabled:opacity-50 [&[data-state=open]>svg]:rotate-180",
          className
        )}
        {...props}
      >
        {children}
        <ChevronDownIcon className="text-muted-foreground pointer-events-none size-4 shrink-0 translate-y-0.5 transition-transform duration-200" />
      </AccordionPrimitive.Trigger>
    </AccordionPrimitive.Header>
  )
}

function AccordionContent({
  className,
  children,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Content>) {
  return (
    <AccordionPrimitive.Content
      data-slot="accordion-content"
      className="data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down overflow-hidden text-sm"
      {...props}
    >
      <div className={cn("pt-0 pb-4", className)}>{children}</div>
    </AccordionPrimitive.Content>
  )
}

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent }

```
`src\components\ui\alert-dialog.tsx`:

```tsx
"use client"

import * as React from "react"
import * as AlertDialogPrimitive from "@radix-ui/react-alert-dialog"

import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"

function AlertDialog({
  ...props
}: React.ComponentProps<typeof AlertDialogPrimitive.Root>) {
  return <AlertDialogPrimitive.Root data-slot="alert-dialog" {...props} />
}

function AlertDialogTrigger({
  ...props
}: React.ComponentProps<typeof AlertDialogPrimitive.Trigger>) {
  return (
    <AlertDialogPrimitive.Trigger data-slot="alert-dialog-trigger" {...props} />
  )
}

function AlertDialogPortal({
  ...props
}: React.ComponentProps<typeof AlertDialogPrimitive.Portal>) {
  return (
    <AlertDialogPrimitive.Portal data-slot="alert-dialog-portal" {...props} />
  )
}

function AlertDialogOverlay({
  className,
  ...props
}: React.ComponentProps<typeof AlertDialogPrimitive.Overlay>) {
  return (
    <AlertDialogPrimitive.Overlay
      data-slot="alert-dialog-overlay"
      className={cn(
        "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/50",
        className
      )}
      {...props}
    />
  )
}

function AlertDialogContent({
  className,
  ...props
}: React.ComponentProps<typeof AlertDialogPrimitive.Content>) {
  return (
    <AlertDialogPortal>
      <AlertDialogOverlay />
      <AlertDialogPrimitive.Content
        data-slot="alert-dialog-content"
        className={cn(
          "bg-background data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 fixed top-[50%] left-[50%] z-50 grid w-full max-w-[calc(100%-2rem)] translate-x-[-50%] translate-y-[-50%] gap-4 rounded-lg border p-6 shadow-lg duration-200 sm:max-w-lg",
          className
        )}
        {...props}
      />
    </AlertDialogPortal>
  )
}

function AlertDialogHeader({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="alert-dialog-header"
      className={cn("flex flex-col gap-2 text-center sm:text-left", className)}
      {...props}
    />
  )
}

function AlertDialogFooter({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="alert-dialog-footer"
      className={cn(
        "flex flex-col-reverse gap-2 sm:flex-row sm:justify-end",
        className
      )}
      {...props}
    />
  )
}

function AlertDialogTitle({
  className,
  ...props
}: React.ComponentProps<typeof AlertDialogPrimitive.Title>) {
  return (
    <AlertDialogPrimitive.Title
      data-slot="alert-dialog-title"
      className={cn("text-lg font-semibold", className)}
      {...props}
    />
  )
}

function AlertDialogDescription({
  className,
  ...props
}: React.ComponentProps<typeof AlertDialogPrimitive.Description>) {
  return (
    <AlertDialogPrimitive.Description
      data-slot="alert-dialog-description"
      className={cn("text-muted-foreground text-sm", className)}
      {...props}
    />
  )
}

function AlertDialogAction({
  className,
  ...props
}: React.ComponentProps<typeof AlertDialogPrimitive.Action>) {
  return (
    <AlertDialogPrimitive.Action
      className={cn(buttonVariants(), className)}
      {...props}
    />
  )
}

function AlertDialogCancel({
  className,
  ...props
}: React.ComponentProps<typeof AlertDialogPrimitive.Cancel>) {
  return (
    <AlertDialogPrimitive.Cancel
      className={cn(buttonVariants({ variant: "outline" }), className)}
      {...props}
    />
  )
}

export {
  AlertDialog,
  AlertDialogPortal,
  AlertDialogOverlay,
  AlertDialogTrigger,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogFooter,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogAction,
  AlertDialogCancel,
}

```
`src\components\ui\alert.tsx`:

```tsx
import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const alertVariants = cva(
  "relative w-full rounded-lg border px-4 py-3 text-sm grid has-[>svg]:grid-cols-[calc(var(--spacing)*4)_1fr] grid-cols-[0_1fr] has-[>svg]:gap-x-3 gap-y-0.5 items-start [&>svg]:size-4 [&>svg]:translate-y-0.5 [&>svg]:text-current",
  {
    variants: {
      variant: {
        default: "bg-card text-card-foreground",
        destructive:
          "text-destructive bg-card [&>svg]:text-current *:data-[slot=alert-description]:text-destructive/90",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

function Alert({
  className,
  variant,
  ...props
}: React.ComponentProps<"div"> & VariantProps<typeof alertVariants>) {
  return (
    <div
      data-slot="alert"
      role="alert"
      className={cn(alertVariants({ variant }), className)}
      {...props}
    />
  )
}

function AlertTitle({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="alert-title"
      className={cn(
        "col-start-2 line-clamp-1 min-h-4 font-medium tracking-tight",
        className
      )}
      {...props}
    />
  )
}

function AlertDescription({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="alert-description"
      className={cn(
        "text-muted-foreground col-start-2 grid justify-items-start gap-1 text-sm [&_p]:leading-relaxed",
        className
      )}
      {...props}
    />
  )
}

export { Alert, AlertTitle, AlertDescription }

```
`src\components\ui\aspect-ratio.tsx`:

```tsx
"use client"

import * as AspectRatioPrimitive from "@radix-ui/react-aspect-ratio"

function AspectRatio({
  ...props
}: React.ComponentProps<typeof AspectRatioPrimitive.Root>) {
  return <AspectRatioPrimitive.Root data-slot="aspect-ratio" {...props} />
}

export { AspectRatio }

```
`src\components\ui\avatar.tsx`:

```tsx
"use client"

import * as React from "react"
import * as AvatarPrimitive from "@radix-ui/react-avatar"

import { cn } from "@/lib/utils"

function Avatar({
  className,
  ...props
}: React.ComponentProps<typeof AvatarPrimitive.Root>) {
  return (
    <AvatarPrimitive.Root
      data-slot="avatar"
      className={cn(
        "relative flex size-8 shrink-0 overflow-hidden rounded-full",
        className
      )}
      {...props}
    />
  )
}

function AvatarImage({
  className,
  ...props
}: React.ComponentProps<typeof AvatarPrimitive.Image>) {
  return (
    <AvatarPrimitive.Image
      data-slot="avatar-image"
      className={cn("aspect-square size-full", className)}
      {...props}
    />
  )
}

function AvatarFallback({
  className,
  ...props
}: React.ComponentProps<typeof AvatarPrimitive.Fallback>) {
  return (
    <AvatarPrimitive.Fallback
      data-slot="avatar-fallback"
      className={cn(
        "bg-muted flex size-full items-center justify-center rounded-full",
        className
      )}
      {...props}
    />
  )
}

export { Avatar, AvatarImage, AvatarFallback }

```
`src\components\ui\badge.tsx`:

```tsx
import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const badgeVariants = cva(
  "inline-flex items-center justify-center rounded-md border px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap shrink-0 [&>svg]:size-3 gap-1 [&>svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden",
  {
    variants: {
      variant: {
        default:
          "border-transparent bg-primary text-primary-foreground [a&]:hover:bg-primary/90",
        secondary:
          "border-transparent bg-secondary text-secondary-foreground [a&]:hover:bg-secondary/90",
        destructive:
          "border-transparent bg-destructive text-white [a&]:hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
        outline:
          "text-foreground [a&]:hover:bg-accent [a&]:hover:text-accent-foreground",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

function Badge({
  className,
  variant,
  asChild = false,
  ...props
}: React.ComponentProps<"span"> &
  VariantProps<typeof badgeVariants> & { asChild?: boolean }) {
  const Comp = asChild ? Slot : "span"

  return (
    <Comp
      data-slot="badge"
      className={cn(badgeVariants({ variant }), className)}
      {...props}
    />
  )
}

export { Badge, badgeVariants }

```
`src\components\ui\breadcrumb.tsx`:

```tsx
import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { ChevronRight, MoreHorizontal } from "lucide-react"

import { cn } from "@/lib/utils"

function Breadcrumb({ ...props }: React.ComponentProps<"nav">) {
  return <nav aria-label="breadcrumb" data-slot="breadcrumb" {...props} />
}

function BreadcrumbList({ className, ...props }: React.ComponentProps<"ol">) {
  return (
    <ol
      data-slot="breadcrumb-list"
      className={cn(
        "text-muted-foreground flex flex-wrap items-center gap-1.5 text-sm break-words sm:gap-2.5",
        className
      )}
      {...props}
    />
  )
}

function BreadcrumbItem({ className, ...props }: React.ComponentProps<"li">) {
  return (
    <li
      data-slot="breadcrumb-item"
      className={cn("inline-flex items-center gap-1.5", className)}
      {...props}
    />
  )
}

function BreadcrumbLink({
  asChild,
  className,
  ...props
}: React.ComponentProps<"a"> & {
  asChild?: boolean
}) {
  const Comp = asChild ? Slot : "a"

  return (
    <Comp
      data-slot="breadcrumb-link"
      className={cn("hover:text-foreground transition-colors", className)}
      {...props}
    />
  )
}

function BreadcrumbPage({ className, ...props }: React.ComponentProps<"span">) {
  return (
    <span
      data-slot="breadcrumb-page"
      role="link"
      aria-disabled="true"
      aria-current="page"
      className={cn("text-foreground font-normal", className)}
      {...props}
    />
  )
}

function BreadcrumbSeparator({
  children,
  className,
  ...props
}: React.ComponentProps<"li">) {
  return (
    <li
      data-slot="breadcrumb-separator"
      role="presentation"
      aria-hidden="true"
      className={cn("[&>svg]:size-3.5", className)}
      {...props}
    >
      {children ?? <ChevronRight />}
    </li>
  )
}

function BreadcrumbEllipsis({
  className,
  ...props
}: React.ComponentProps<"span">) {
  return (
    <span
      data-slot="breadcrumb-ellipsis"
      role="presentation"
      aria-hidden="true"
      className={cn("flex size-9 items-center justify-center", className)}
      {...props}
    >
      <MoreHorizontal className="size-4" />
      <span className="sr-only">More</span>
    </span>
  )
}

export {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,
  BreadcrumbEllipsis,
}

```
`src\components\ui\button.tsx`:

```tsx
import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-primary-foreground shadow-xs hover:bg-primary/90",
        destructive:
          "bg-destructive text-white shadow-xs hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
        outline:
          "border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50",
        secondary:
          "bg-secondary text-secondary-foreground shadow-xs hover:bg-secondary/80",
        ghost:
          "hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-9 px-4 py-2 has-[>svg]:px-3",
        sm: "h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",
        lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
        icon: "size-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean
  }) {
  const Comp = asChild ? Slot : "button"

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Button, buttonVariants }

```
`src\components\ui\calendar.tsx`:

```tsx
"use client"

import * as React from "react"
import {
  ChevronDownIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
} from "lucide-react"
import { DayButton, DayPicker, getDefaultClassNames } from "react-day-picker"

import { cn } from "@/lib/utils"
import { Button, buttonVariants } from "@/components/ui/button"

function Calendar({
  className,
  classNames,
  showOutsideDays = true,
  captionLayout = "label",
  buttonVariant = "ghost",
  formatters,
  components,
  ...props
}: React.ComponentProps<typeof DayPicker> & {
  buttonVariant?: React.ComponentProps<typeof Button>["variant"]
}) {
  const defaultClassNames = getDefaultClassNames()

  return (
    <DayPicker
      showOutsideDays={showOutsideDays}
      className={cn(
        "bg-background group/calendar p-3 [--cell-size:--spacing(8)] [[data-slot=card-content]_&]:bg-transparent [[data-slot=popover-content]_&]:bg-transparent",
        String.raw`rtl:**:[.rdp-button\_next>svg]:rotate-180`,
        String.raw`rtl:**:[.rdp-button\_previous>svg]:rotate-180`,
        className
      )}
      captionLayout={captionLayout}
      formatters={{
        formatMonthDropdown: (date) =>
          date.toLocaleString("default", { month: "short" }),
        ...formatters,
      }}
      classNames={{
        root: cn("w-fit", defaultClassNames.root),
        months: cn(
          "flex gap-4 flex-col md:flex-row relative",
          defaultClassNames.months
        ),
        month: cn("flex flex-col w-full gap-4", defaultClassNames.month),
        nav: cn(
          "flex items-center gap-1 w-full absolute top-0 inset-x-0 justify-between",
          defaultClassNames.nav
        ),
        button_previous: cn(
          buttonVariants({ variant: buttonVariant }),
          "size-(--cell-size) aria-disabled:opacity-50 p-0 select-none",
          defaultClassNames.button_previous
        ),
        button_next: cn(
          buttonVariants({ variant: buttonVariant }),
          "size-(--cell-size) aria-disabled:opacity-50 p-0 select-none",
          defaultClassNames.button_next
        ),
        month_caption: cn(
          "flex items-center justify-center h-(--cell-size) w-full px-(--cell-size)",
          defaultClassNames.month_caption
        ),
        dropdowns: cn(
          "w-full flex items-center text-sm font-medium justify-center h-(--cell-size) gap-1.5",
          defaultClassNames.dropdowns
        ),
        dropdown_root: cn(
          "relative has-focus:border-ring border border-input shadow-xs has-focus:ring-ring/50 has-focus:ring-[3px] rounded-md",
          defaultClassNames.dropdown_root
        ),
        dropdown: cn(
          "absolute bg-popover inset-0 opacity-0",
          defaultClassNames.dropdown
        ),
        caption_label: cn(
          "select-none font-medium",
          captionLayout === "label"
            ? "text-sm"
            : "rounded-md pl-2 pr-1 flex items-center gap-1 text-sm h-8 [&>svg]:text-muted-foreground [&>svg]:size-3.5",
          defaultClassNames.caption_label
        ),
        table: "w-full border-collapse",
        weekdays: cn("flex", defaultClassNames.weekdays),
        weekday: cn(
          "text-muted-foreground rounded-md flex-1 font-normal text-[0.8rem] select-none",
          defaultClassNames.weekday
        ),
        week: cn("flex w-full mt-2", defaultClassNames.week),
        week_number_header: cn(
          "select-none w-(--cell-size)",
          defaultClassNames.week_number_header
        ),
        week_number: cn(
          "text-[0.8rem] select-none text-muted-foreground",
          defaultClassNames.week_number
        ),
        day: cn(
          "relative w-full h-full p-0 text-center [&:first-child[data-selected=true]_button]:rounded-l-md [&:last-child[data-selected=true]_button]:rounded-r-md group/day aspect-square select-none",
          defaultClassNames.day
        ),
        range_start: cn(
          "rounded-l-md bg-accent",
          defaultClassNames.range_start
        ),
        range_middle: cn("rounded-none", defaultClassNames.range_middle),
        range_end: cn("rounded-r-md bg-accent", defaultClassNames.range_end),
        today: cn(
          "bg-accent text-accent-foreground rounded-md data-[selected=true]:rounded-none",
          defaultClassNames.today
        ),
        outside: cn(
          "text-muted-foreground aria-selected:text-muted-foreground",
          defaultClassNames.outside
        ),
        disabled: cn(
          "text-muted-foreground opacity-50",
          defaultClassNames.disabled
        ),
        hidden: cn("invisible", defaultClassNames.hidden),
        ...classNames,
      }}
      components={{
        Root: ({ className, rootRef, ...props }) => {
          return (
            <div
              data-slot="calendar"
              ref={rootRef}
              className={cn(className)}
              {...props}
            />
          )
        },
        Chevron: ({ className, orientation, ...props }) => {
          if (orientation === "left") {
            return (
              <ChevronLeftIcon className={cn("size-4", className)} {...props} />
            )
          }

          if (orientation === "right") {
            return (
              <ChevronRightIcon
                className={cn("size-4", className)}
                {...props}
              />
            )
          }

          return (
            <ChevronDownIcon className={cn("size-4", className)} {...props} />
          )
        },
        DayButton: CalendarDayButton,
        WeekNumber: ({ children, ...props }) => {
          return (
            <td {...props}>
              <div className="flex size-(--cell-size) items-center justify-center text-center">
                {children}
              </div>
            </td>
          )
        },
        ...components,
      }}
      {...props}
    />
  )
}

function CalendarDayButton({
  className,
  day,
  modifiers,
  ...props
}: React.ComponentProps<typeof DayButton>) {
  const defaultClassNames = getDefaultClassNames()

  const ref = React.useRef<HTMLButtonElement>(null)
  React.useEffect(() => {
    if (modifiers.focused) ref.current?.focus()
  }, [modifiers.focused])

  return (
    <Button
      ref={ref}
      variant="ghost"
      size="icon"
      data-day={day.date.toLocaleDateString()}
      data-selected-single={
        modifiers.selected &&
        !modifiers.range_start &&
        !modifiers.range_end &&
        !modifiers.range_middle
      }
      data-range-start={modifiers.range_start}
      data-range-end={modifiers.range_end}
      data-range-middle={modifiers.range_middle}
      className={cn(
        "data-[selected-single=true]:bg-primary data-[selected-single=true]:text-primary-foreground data-[range-middle=true]:bg-accent data-[range-middle=true]:text-accent-foreground data-[range-start=true]:bg-primary data-[range-start=true]:text-primary-foreground data-[range-end=true]:bg-primary data-[range-end=true]:text-primary-foreground group-data-[focused=true]/day:border-ring group-data-[focused=true]/day:ring-ring/50 dark:hover:text-accent-foreground flex aspect-square size-auto w-full min-w-(--cell-size) flex-col gap-1 leading-none font-normal group-data-[focused=true]/day:relative group-data-[focused=true]/day:z-10 group-data-[focused=true]/day:ring-[3px] data-[range-end=true]:rounded-md data-[range-end=true]:rounded-r-md data-[range-middle=true]:rounded-none data-[range-start=true]:rounded-md data-[range-start=true]:rounded-l-md [&>span]:text-xs [&>span]:opacity-70",
        defaultClassNames.day,
        className
      )}
      {...props}
    />
  )
}

export { Calendar, CalendarDayButton }

```
`src\components\ui\card.tsx`:

```tsx
import * as React from "react"

import { cn } from "@/lib/utils"

function Card({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card"
      className={cn(
        "bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm",
        className
      )}
      {...props}
    />
  )
}

function CardHeader({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-header"
      className={cn(
        "@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6",
        className
      )}
      {...props}
    />
  )
}

function CardTitle({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-title"
      className={cn("leading-none font-semibold", className)}
      {...props}
    />
  )
}

function CardDescription({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-description"
      className={cn("text-muted-foreground text-sm", className)}
      {...props}
    />
  )
}

function CardAction({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-action"
      className={cn(
        "col-start-2 row-span-2 row-start-1 self-start justify-self-end",
        className
      )}
      {...props}
    />
  )
}

function CardContent({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-content"
      className={cn("px-6", className)}
      {...props}
    />
  )
}

function CardFooter({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-footer"
      className={cn("flex items-center px-6 [.border-t]:pt-6", className)}
      {...props}
    />
  )
}

export {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardAction,
  CardDescription,
  CardContent,
}

```
`src\components\ui\carousel.tsx`:

```tsx
"use client"

import * as React from "react"
import useEmblaCarousel, {
  type UseEmblaCarouselType,
} from "embla-carousel-react"
import { ArrowLeft, ArrowRight } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

type CarouselApi = UseEmblaCarouselType[1]
type UseCarouselParameters = Parameters<typeof useEmblaCarousel>
type CarouselOptions = UseCarouselParameters[0]
type CarouselPlugin = UseCarouselParameters[1]

type CarouselProps = {
  opts?: CarouselOptions
  plugins?: CarouselPlugin
  orientation?: "horizontal" | "vertical"
  setApi?: (api: CarouselApi) => void
}

type CarouselContextProps = {
  carouselRef: ReturnType<typeof useEmblaCarousel>[0]
  api: ReturnType<typeof useEmblaCarousel>[1]
  scrollPrev: () => void
  scrollNext: () => void
  canScrollPrev: boolean
  canScrollNext: boolean
} & CarouselProps

const CarouselContext = React.createContext<CarouselContextProps | null>(null)

function useCarousel() {
  const context = React.useContext(CarouselContext)

  if (!context) {
    throw new Error("useCarousel must be used within a <Carousel />")
  }

  return context
}

function Carousel({
  orientation = "horizontal",
  opts,
  setApi,
  plugins,
  className,
  children,
  ...props
}: React.ComponentProps<"div"> & CarouselProps) {
  const [carouselRef, api] = useEmblaCarousel(
    {
      ...opts,
      axis: orientation === "horizontal" ? "x" : "y",
    },
    plugins
  )
  const [canScrollPrev, setCanScrollPrev] = React.useState(false)
  const [canScrollNext, setCanScrollNext] = React.useState(false)

  const onSelect = React.useCallback((api: CarouselApi) => {
    if (!api) return
    setCanScrollPrev(api.canScrollPrev())
    setCanScrollNext(api.canScrollNext())
  }, [])

  const scrollPrev = React.useCallback(() => {
    api?.scrollPrev()
  }, [api])

  const scrollNext = React.useCallback(() => {
    api?.scrollNext()
  }, [api])

  const handleKeyDown = React.useCallback(
    (event: React.KeyboardEvent<HTMLDivElement>) => {
      if (event.key === "ArrowLeft") {
        event.preventDefault()
        scrollPrev()
      } else if (event.key === "ArrowRight") {
        event.preventDefault()
        scrollNext()
      }
    },
    [scrollPrev, scrollNext]
  )

  React.useEffect(() => {
    if (!api || !setApi) return
    setApi(api)
  }, [api, setApi])

  React.useEffect(() => {
    if (!api) return
    onSelect(api)
    api.on("reInit", onSelect)
    api.on("select", onSelect)

    return () => {
      api?.off("select", onSelect)
    }
  }, [api, onSelect])

  return (
    <CarouselContext.Provider
      value={{
        carouselRef,
        api: api,
        opts,
        orientation:
          orientation || (opts?.axis === "y" ? "vertical" : "horizontal"),
        scrollPrev,
        scrollNext,
        canScrollPrev,
        canScrollNext,
      }}
    >
      <div
        onKeyDownCapture={handleKeyDown}
        className={cn("relative", className)}
        role="region"
        aria-roledescription="carousel"
        data-slot="carousel"
        {...props}
      >
        {children}
      </div>
    </CarouselContext.Provider>
  )
}

function CarouselContent({ className, ...props }: React.ComponentProps<"div">) {
  const { carouselRef, orientation } = useCarousel()

  return (
    <div
      ref={carouselRef}
      className="overflow-hidden"
      data-slot="carousel-content"
    >
      <div
        className={cn(
          "flex",
          orientation === "horizontal" ? "-ml-4" : "-mt-4 flex-col",
          className
        )}
        {...props}
      />
    </div>
  )
}

function CarouselItem({ className, ...props }: React.ComponentProps<"div">) {
  const { orientation } = useCarousel()

  return (
    <div
      role="group"
      aria-roledescription="slide"
      data-slot="carousel-item"
      className={cn(
        "min-w-0 shrink-0 grow-0 basis-full",
        orientation === "horizontal" ? "pl-4" : "pt-4",
        className
      )}
      {...props}
    />
  )
}

function CarouselPrevious({
  className,
  variant = "outline",
  size = "icon",
  ...props
}: React.ComponentProps<typeof Button>) {
  const { orientation, scrollPrev, canScrollPrev } = useCarousel()

  return (
    <Button
      data-slot="carousel-previous"
      variant={variant}
      size={size}
      className={cn(
        "absolute size-8 rounded-full",
        orientation === "horizontal"
          ? "top-1/2 -left-12 -translate-y-1/2"
          : "-top-12 left-1/2 -translate-x-1/2 rotate-90",
        className
      )}
      disabled={!canScrollPrev}
      onClick={scrollPrev}
      {...props}
    >
      <ArrowLeft />
      <span className="sr-only">Previous slide</span>
    </Button>
  )
}

function CarouselNext({
  className,
  variant = "outline",
  size = "icon",
  ...props
}: React.ComponentProps<typeof Button>) {
  const { orientation, scrollNext, canScrollNext } = useCarousel()

  return (
    <Button
      data-slot="carousel-next"
      variant={variant}
      size={size}
      className={cn(
        "absolute size-8 rounded-full",
        orientation === "horizontal"
          ? "top-1/2 -right-12 -translate-y-1/2"
          : "-bottom-12 left-1/2 -translate-x-1/2 rotate-90",
        className
      )}
      disabled={!canScrollNext}
      onClick={scrollNext}
      {...props}
    >
      <ArrowRight />
      <span className="sr-only">Next slide</span>
    </Button>
  )
}

export {
  type CarouselApi,
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
}

```
`src\components\ui\chart.tsx`:

```tsx
"use client"

import * as React from "react"
import * as RechartsPrimitive from "recharts"

import { cn } from "@/lib/utils"

// Format: { THEME_NAME: CSS_SELECTOR }
const THEMES = { light: "", dark: ".dark" } as const

export type ChartConfig = {
  [k in string]: {
    label?: React.ReactNode
    icon?: React.ComponentType
  } & (
    | { color?: string; theme?: never }
    | { color?: never; theme: Record<keyof typeof THEMES, string> }
  )
}

type ChartContextProps = {
  config: ChartConfig
}

const ChartContext = React.createContext<ChartContextProps | null>(null)

function useChart() {
  const context = React.useContext(ChartContext)

  if (!context) {
    throw new Error("useChart must be used within a <ChartContainer />")
  }

  return context
}

function ChartContainer({
  id,
  className,
  children,
  config,
  ...props
}: React.ComponentProps<"div"> & {
  config: ChartConfig
  children: React.ComponentProps<
    typeof RechartsPrimitive.ResponsiveContainer
  >["children"]
}) {
  const uniqueId = React.useId()
  const chartId = `chart-${id || uniqueId.replace(/:/g, "")}`

  return (
    <ChartContext.Provider value={{ config }}>
      <div
        data-slot="chart"
        data-chart={chartId}
        className={cn(
          "[&_.recharts-cartesian-axis-tick_text]:fill-muted-foreground [&_.recharts-cartesian-grid_line[stroke='#ccc']]:stroke-border/50 [&_.recharts-curve.recharts-tooltip-cursor]:stroke-border [&_.recharts-polar-grid_[stroke='#ccc']]:stroke-border [&_.recharts-radial-bar-background-sector]:fill-muted [&_.recharts-rectangle.recharts-tooltip-cursor]:fill-muted [&_.recharts-reference-line_[stroke='#ccc']]:stroke-border flex aspect-video justify-center text-xs [&_.recharts-dot[stroke='#fff']]:stroke-transparent [&_.recharts-layer]:outline-hidden [&_.recharts-sector]:outline-hidden [&_.recharts-sector[stroke='#fff']]:stroke-transparent [&_.recharts-surface]:outline-hidden",
          className
        )}
        {...props}
      >
        <ChartStyle id={chartId} config={config} />
        <RechartsPrimitive.ResponsiveContainer>
          {children}
        </RechartsPrimitive.ResponsiveContainer>
      </div>
    </ChartContext.Provider>
  )
}

const ChartStyle = ({ id, config }: { id: string; config: ChartConfig }) => {
  const colorConfig = Object.entries(config).filter(
    ([, config]) => config.theme || config.color
  )

  if (!colorConfig.length) {
    return null
  }

  return (
    <style
      dangerouslySetInnerHTML={{
        __html: Object.entries(THEMES)
          .map(
            ([theme, prefix]) => `
${prefix} [data-chart=${id}] {
${colorConfig
  .map(([key, itemConfig]) => {
    const color =
      itemConfig.theme?.[theme as keyof typeof itemConfig.theme] ||
      itemConfig.color
    return color ? `  --color-${key}: ${color};` : null
  })
  .join("\n")}
}
`
          )
          .join("\n"),
      }}
    />
  )
}

const ChartTooltip = RechartsPrimitive.Tooltip

function ChartTooltipContent({
  active,
  payload,
  className,
  indicator = "dot",
  hideLabel = false,
  hideIndicator = false,
  label,
  labelFormatter,
  labelClassName,
  formatter,
  color,
  nameKey,
  labelKey,
}: React.ComponentProps<typeof RechartsPrimitive.Tooltip> &
  React.ComponentProps<"div"> & {
    hideLabel?: boolean
    hideIndicator?: boolean
    indicator?: "line" | "dot" | "dashed"
    nameKey?: string
    labelKey?: string
  }) {
  const { config } = useChart()

  const tooltipLabel = React.useMemo(() => {
    if (hideLabel || !payload?.length) {
      return null
    }

    const [item] = payload
    const key = `${labelKey || item?.dataKey || item?.name || "value"}`
    const itemConfig = getPayloadConfigFromPayload(config, item, key)
    const value =
      !labelKey && typeof label === "string"
        ? config[label as keyof typeof config]?.label || label
        : itemConfig?.label

    if (labelFormatter) {
      return (
        <div className={cn("font-medium", labelClassName)}>
          {labelFormatter(value, payload)}
        </div>
      )
    }

    if (!value) {
      return null
    }

    return <div className={cn("font-medium", labelClassName)}>{value}</div>
  }, [
    label,
    labelFormatter,
    payload,
    hideLabel,
    labelClassName,
    config,
    labelKey,
  ])

  if (!active || !payload?.length) {
    return null
  }

  const nestLabel = payload.length === 1 && indicator !== "dot"

  return (
    <div
      className={cn(
        "border-border/50 bg-background grid min-w-[8rem] items-start gap-1.5 rounded-lg border px-2.5 py-1.5 text-xs shadow-xl",
        className
      )}
    >
      {!nestLabel ? tooltipLabel : null}
      <div className="grid gap-1.5">
        {payload.map((item, index) => {
          const key = `${nameKey || item.name || item.dataKey || "value"}`
          const itemConfig = getPayloadConfigFromPayload(config, item, key)
          const indicatorColor = color || item.payload.fill || item.color

          return (
            <div
              key={item.dataKey}
              className={cn(
                "[&>svg]:text-muted-foreground flex w-full flex-wrap items-stretch gap-2 [&>svg]:h-2.5 [&>svg]:w-2.5",
                indicator === "dot" && "items-center"
              )}
            >
              {formatter && item?.value !== undefined && item.name ? (
                formatter(item.value, item.name, item, index, item.payload)
              ) : (
                <>
                  {itemConfig?.icon ? (
                    <itemConfig.icon />
                  ) : (
                    !hideIndicator && (
                      <div
                        className={cn(
                          "shrink-0 rounded-[2px] border-(--color-border) bg-(--color-bg)",
                          {
                            "h-2.5 w-2.5": indicator === "dot",
                            "w-1": indicator === "line",
                            "w-0 border-[1.5px] border-dashed bg-transparent":
                              indicator === "dashed",
                            "my-0.5": nestLabel && indicator === "dashed",
                          }
                        )}
                        style={
                          {
                            "--color-bg": indicatorColor,
                            "--color-border": indicatorColor,
                          } as React.CSSProperties
                        }
                      />
                    )
                  )}
                  <div
                    className={cn(
                      "flex flex-1 justify-between leading-none",
                      nestLabel ? "items-end" : "items-center"
                    )}
                  >
                    <div className="grid gap-1.5">
                      {nestLabel ? tooltipLabel : null}
                      <span className="text-muted-foreground">
                        {itemConfig?.label || item.name}
                      </span>
                    </div>
                    {item.value && (
                      <span className="text-foreground font-mono font-medium tabular-nums">
                        {item.value.toLocaleString()}
                      </span>
                    )}
                  </div>
                </>
              )}
            </div>
          )
        })}
      </div>
    </div>
  )
}

const ChartLegend = RechartsPrimitive.Legend

function ChartLegendContent({
  className,
  hideIcon = false,
  payload,
  verticalAlign = "bottom",
  nameKey,
}: React.ComponentProps<"div"> &
  Pick<RechartsPrimitive.LegendProps, "payload" | "verticalAlign"> & {
    hideIcon?: boolean
    nameKey?: string
  }) {
  const { config } = useChart()

  if (!payload?.length) {
    return null
  }

  return (
    <div
      className={cn(
        "flex items-center justify-center gap-4",
        verticalAlign === "top" ? "pb-3" : "pt-3",
        className
      )}
    >
      {payload.map((item) => {
        const key = `${nameKey || item.dataKey || "value"}`
        const itemConfig = getPayloadConfigFromPayload(config, item, key)

        return (
          <div
            key={item.value}
            className={cn(
              "[&>svg]:text-muted-foreground flex items-center gap-1.5 [&>svg]:h-3 [&>svg]:w-3"
            )}
          >
            {itemConfig?.icon && !hideIcon ? (
              <itemConfig.icon />
            ) : (
              <div
                className="h-2 w-2 shrink-0 rounded-[2px]"
                style={{
                  backgroundColor: item.color,
                }}
              />
            )}
            {itemConfig?.label}
          </div>
        )
      })}
    </div>
  )
}

// Helper to extract item config from a payload.
function getPayloadConfigFromPayload(
  config: ChartConfig,
  payload: unknown,
  key: string
) {
  if (typeof payload !== "object" || payload === null) {
    return undefined
  }

  const payloadPayload =
    "payload" in payload &&
    typeof payload.payload === "object" &&
    payload.payload !== null
      ? payload.payload
      : undefined

  let configLabelKey: string = key

  if (
    key in payload &&
    typeof payload[key as keyof typeof payload] === "string"
  ) {
    configLabelKey = payload[key as keyof typeof payload] as string
  } else if (
    payloadPayload &&
    key in payloadPayload &&
    typeof payloadPayload[key as keyof typeof payloadPayload] === "string"
  ) {
    configLabelKey = payloadPayload[
      key as keyof typeof payloadPayload
    ] as string
  }

  return configLabelKey in config
    ? config[configLabelKey]
    : config[key as keyof typeof config]
}

export {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  ChartLegend,
  ChartLegendContent,
  ChartStyle,
}

```
`src\components\ui\checkbox.tsx`:

```tsx
"use client"

import * as React from "react"
import * as CheckboxPrimitive from "@radix-ui/react-checkbox"
import { CheckIcon } from "lucide-react"

import { cn } from "@/lib/utils"

function Checkbox({
  className,
  ...props
}: React.ComponentProps<typeof CheckboxPrimitive.Root>) {
  return (
    <CheckboxPrimitive.Root
      data-slot="checkbox"
      className={cn(
        "peer border-input dark:bg-input/30 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground dark:data-[state=checked]:bg-primary data-[state=checked]:border-primary focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive size-4 shrink-0 rounded-[4px] border shadow-xs transition-shadow outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50",
        className
      )}
      {...props}
    >
      <CheckboxPrimitive.Indicator
        data-slot="checkbox-indicator"
        className="flex items-center justify-center text-current transition-none"
      >
        <CheckIcon className="size-3.5" />
      </CheckboxPrimitive.Indicator>
    </CheckboxPrimitive.Root>
  )
}

export { Checkbox }

```
`src\components\ui\collapsible.tsx`:

```tsx
"use client"

import * as CollapsiblePrimitive from "@radix-ui/react-collapsible"

function Collapsible({
  ...props
}: React.ComponentProps<typeof CollapsiblePrimitive.Root>) {
  return <CollapsiblePrimitive.Root data-slot="collapsible" {...props} />
}

function CollapsibleTrigger({
  ...props
}: React.ComponentProps<typeof CollapsiblePrimitive.CollapsibleTrigger>) {
  return (
    <CollapsiblePrimitive.CollapsibleTrigger
      data-slot="collapsible-trigger"
      {...props}
    />
  )
}

function CollapsibleContent({
  ...props
}: React.ComponentProps<typeof CollapsiblePrimitive.CollapsibleContent>) {
  return (
    <CollapsiblePrimitive.CollapsibleContent
      data-slot="collapsible-content"
      {...props}
    />
  )
}

export { Collapsible, CollapsibleTrigger, CollapsibleContent }

```
`src\components\ui\command.tsx`:

```tsx
"use client"

import * as React from "react"
import { Command as CommandPrimitive } from "cmdk"
import { SearchIcon } from "lucide-react"

import { cn } from "@/lib/utils"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"

function Command({
  className,
  ...props
}: React.ComponentProps<typeof CommandPrimitive>) {
  return (
    <CommandPrimitive
      data-slot="command"
      className={cn(
        "bg-popover text-popover-foreground flex h-full w-full flex-col overflow-hidden rounded-md",
        className
      )}
      {...props}
    />
  )
}

function CommandDialog({
  title = "Command Palette",
  description = "Search for a command to run...",
  children,
  className,
  showCloseButton = true,
  ...props
}: React.ComponentProps<typeof Dialog> & {
  title?: string
  description?: string
  className?: string
  showCloseButton?: boolean
}) {
  return (
    <Dialog {...props}>
      <DialogHeader className="sr-only">
        <DialogTitle>{title}</DialogTitle>
        <DialogDescription>{description}</DialogDescription>
      </DialogHeader>
      <DialogContent
        className={cn("overflow-hidden p-0", className)}
        showCloseButton={showCloseButton}
      >
        <Command className="[&_[cmdk-group-heading]]:text-muted-foreground **:data-[slot=command-input-wrapper]:h-12 [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group]]:px-2 [&_[cmdk-group]:not([hidden])_~[cmdk-group]]:pt-0 [&_[cmdk-input-wrapper]_svg]:h-5 [&_[cmdk-input-wrapper]_svg]:w-5 [&_[cmdk-input]]:h-12 [&_[cmdk-item]]:px-2 [&_[cmdk-item]]:py-3 [&_[cmdk-item]_svg]:h-5 [&_[cmdk-item]_svg]:w-5">
          {children}
        </Command>
      </DialogContent>
    </Dialog>
  )
}

function CommandInput({
  className,
  ...props
}: React.ComponentProps<typeof CommandPrimitive.Input>) {
  return (
    <div
      data-slot="command-input-wrapper"
      className="flex h-9 items-center gap-2 border-b px-3"
    >
      <SearchIcon className="size-4 shrink-0 opacity-50" />
      <CommandPrimitive.Input
        data-slot="command-input"
        className={cn(
          "placeholder:text-muted-foreground flex h-10 w-full rounded-md bg-transparent py-3 text-sm outline-hidden disabled:cursor-not-allowed disabled:opacity-50",
          className
        )}
        {...props}
      />
    </div>
  )
}

function CommandList({
  className,
  ...props
}: React.ComponentProps<typeof CommandPrimitive.List>) {
  return (
    <CommandPrimitive.List
      data-slot="command-list"
      className={cn(
        "max-h-[300px] scroll-py-1 overflow-x-hidden overflow-y-auto",
        className
      )}
      {...props}
    />
  )
}

function CommandEmpty({
  ...props
}: React.ComponentProps<typeof CommandPrimitive.Empty>) {
  return (
    <CommandPrimitive.Empty
      data-slot="command-empty"
      className="py-6 text-center text-sm"
      {...props}
    />
  )
}

function CommandGroup({
  className,
  ...props
}: React.ComponentProps<typeof CommandPrimitive.Group>) {
  return (
    <CommandPrimitive.Group
      data-slot="command-group"
      className={cn(
        "text-foreground [&_[cmdk-group-heading]]:text-muted-foreground overflow-hidden p-1 [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:font-medium",
        className
      )}
      {...props}
    />
  )
}

function CommandSeparator({
  className,
  ...props
}: React.ComponentProps<typeof CommandPrimitive.Separator>) {
  return (
    <CommandPrimitive.Separator
      data-slot="command-separator"
      className={cn("bg-border -mx-1 h-px", className)}
      {...props}
    />
  )
}

function CommandItem({
  className,
  ...props
}: React.ComponentProps<typeof CommandPrimitive.Item>) {
  return (
    <CommandPrimitive.Item
      data-slot="command-item"
      className={cn(
        "data-[selected=true]:bg-accent data-[selected=true]:text-accent-foreground [&_svg:not([class*='text-'])]:text-muted-foreground relative flex cursor-default items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-hidden select-none data-[disabled=true]:pointer-events-none data-[disabled=true]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        className
      )}
      {...props}
    />
  )
}

function CommandShortcut({
  className,
  ...props
}: React.ComponentProps<"span">) {
  return (
    <span
      data-slot="command-shortcut"
      className={cn(
        "text-muted-foreground ml-auto text-xs tracking-widest",
        className
      )}
      {...props}
    />
  )
}

export {
  Command,
  CommandDialog,
  CommandInput,
  CommandList,
  CommandEmpty,
  CommandGroup,
  CommandItem,
  CommandShortcut,
  CommandSeparator,
}

```
`src\components\ui\context-menu.tsx`:

```tsx
"use client"

import * as React from "react"
import * as ContextMenuPrimitive from "@radix-ui/react-context-menu"
import { CheckIcon, ChevronRightIcon, CircleIcon } from "lucide-react"

import { cn } from "@/lib/utils"

function ContextMenu({
  ...props
}: React.ComponentProps<typeof ContextMenuPrimitive.Root>) {
  return <ContextMenuPrimitive.Root data-slot="context-menu" {...props} />
}

function ContextMenuTrigger({
  ...props
}: React.ComponentProps<typeof ContextMenuPrimitive.Trigger>) {
  return (
    <ContextMenuPrimitive.Trigger data-slot="context-menu-trigger" {...props} />
  )
}

function ContextMenuGroup({
  ...props
}: React.ComponentProps<typeof ContextMenuPrimitive.Group>) {
  return (
    <ContextMenuPrimitive.Group data-slot="context-menu-group" {...props} />
  )
}

function ContextMenuPortal({
  ...props
}: React.ComponentProps<typeof ContextMenuPrimitive.Portal>) {
  return (
    <ContextMenuPrimitive.Portal data-slot="context-menu-portal" {...props} />
  )
}

function ContextMenuSub({
  ...props
}: React.ComponentProps<typeof ContextMenuPrimitive.Sub>) {
  return <ContextMenuPrimitive.Sub data-slot="context-menu-sub" {...props} />
}

function ContextMenuRadioGroup({
  ...props
}: React.ComponentProps<typeof ContextMenuPrimitive.RadioGroup>) {
  return (
    <ContextMenuPrimitive.RadioGroup
      data-slot="context-menu-radio-group"
      {...props}
    />
  )
}

function ContextMenuSubTrigger({
  className,
  inset,
  children,
  ...props
}: React.ComponentProps<typeof ContextMenuPrimitive.SubTrigger> & {
  inset?: boolean
}) {
  return (
    <ContextMenuPrimitive.SubTrigger
      data-slot="context-menu-sub-trigger"
      data-inset={inset}
      className={cn(
        "focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground flex cursor-default items-center rounded-sm px-2 py-1.5 text-sm outline-hidden select-none data-[inset]:pl-8 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        className
      )}
      {...props}
    >
      {children}
      <ChevronRightIcon className="ml-auto" />
    </ContextMenuPrimitive.SubTrigger>
  )
}

function ContextMenuSubContent({
  className,
  ...props
}: React.ComponentProps<typeof ContextMenuPrimitive.SubContent>) {
  return (
    <ContextMenuPrimitive.SubContent
      data-slot="context-menu-sub-content"
      className={cn(
        "bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 min-w-[8rem] origin-(--radix-context-menu-content-transform-origin) overflow-hidden rounded-md border p-1 shadow-lg",
        className
      )}
      {...props}
    />
  )
}

function ContextMenuContent({
  className,
  ...props
}: React.ComponentProps<typeof ContextMenuPrimitive.Content>) {
  return (
    <ContextMenuPrimitive.Portal>
      <ContextMenuPrimitive.Content
        data-slot="context-menu-content"
        className={cn(
          "bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 max-h-(--radix-context-menu-content-available-height) min-w-[8rem] origin-(--radix-context-menu-content-transform-origin) overflow-x-hidden overflow-y-auto rounded-md border p-1 shadow-md",
          className
        )}
        {...props}
      />
    </ContextMenuPrimitive.Portal>
  )
}

function ContextMenuItem({
  className,
  inset,
  variant = "default",
  ...props
}: React.ComponentProps<typeof ContextMenuPrimitive.Item> & {
  inset?: boolean
  variant?: "default" | "destructive"
}) {
  return (
    <ContextMenuPrimitive.Item
      data-slot="context-menu-item"
      data-inset={inset}
      data-variant={variant}
      className={cn(
        "focus:bg-accent focus:text-accent-foreground data-[variant=destructive]:text-destructive data-[variant=destructive]:focus:bg-destructive/10 dark:data-[variant=destructive]:focus:bg-destructive/20 data-[variant=destructive]:focus:text-destructive data-[variant=destructive]:*:[svg]:!text-destructive [&_svg:not([class*='text-'])]:text-muted-foreground relative flex cursor-default items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 data-[inset]:pl-8 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        className
      )}
      {...props}
    />
  )
}

function ContextMenuCheckboxItem({
  className,
  children,
  checked,
  ...props
}: React.ComponentProps<typeof ContextMenuPrimitive.CheckboxItem>) {
  return (
    <ContextMenuPrimitive.CheckboxItem
      data-slot="context-menu-checkbox-item"
      className={cn(
        "focus:bg-accent focus:text-accent-foreground relative flex cursor-default items-center gap-2 rounded-sm py-1.5 pr-2 pl-8 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        className
      )}
      checked={checked}
      {...props}
    >
      <span className="pointer-events-none absolute left-2 flex size-3.5 items-center justify-center">
        <ContextMenuPrimitive.ItemIndicator>
          <CheckIcon className="size-4" />
        </ContextMenuPrimitive.ItemIndicator>
      </span>
      {children}
    </ContextMenuPrimitive.CheckboxItem>
  )
}

function ContextMenuRadioItem({
  className,
  children,
  ...props
}: React.ComponentProps<typeof ContextMenuPrimitive.RadioItem>) {
  return (
    <ContextMenuPrimitive.RadioItem
      data-slot="context-menu-radio-item"
      className={cn(
        "focus:bg-accent focus:text-accent-foreground relative flex cursor-default items-center gap-2 rounded-sm py-1.5 pr-2 pl-8 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        className
      )}
      {...props}
    >
      <span className="pointer-events-none absolute left-2 flex size-3.5 items-center justify-center">
        <ContextMenuPrimitive.ItemIndicator>
          <CircleIcon className="size-2 fill-current" />
        </ContextMenuPrimitive.ItemIndicator>
      </span>
      {children}
    </ContextMenuPrimitive.RadioItem>
  )
}

function ContextMenuLabel({
  className,
  inset,
  ...props
}: React.ComponentProps<typeof ContextMenuPrimitive.Label> & {
  inset?: boolean
}) {
  return (
    <ContextMenuPrimitive.Label
      data-slot="context-menu-label"
      data-inset={inset}
      className={cn(
        "text-foreground px-2 py-1.5 text-sm font-medium data-[inset]:pl-8",
        className
      )}
      {...props}
    />
  )
}

function ContextMenuSeparator({
  className,
  ...props
}: React.ComponentProps<typeof ContextMenuPrimitive.Separator>) {
  return (
    <ContextMenuPrimitive.Separator
      data-slot="context-menu-separator"
      className={cn("bg-border -mx-1 my-1 h-px", className)}
      {...props}
    />
  )
}

function ContextMenuShortcut({
  className,
  ...props
}: React.ComponentProps<"span">) {
  return (
    <span
      data-slot="context-menu-shortcut"
      className={cn(
        "text-muted-foreground ml-auto text-xs tracking-widest",
        className
      )}
      {...props}
    />
  )
}

export {
  ContextMenu,
  ContextMenuTrigger,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuCheckboxItem,
  ContextMenuRadioItem,
  ContextMenuLabel,
  ContextMenuSeparator,
  ContextMenuShortcut,
  ContextMenuGroup,
  ContextMenuPortal,
  ContextMenuSub,
  ContextMenuSubContent,
  ContextMenuSubTrigger,
  ContextMenuRadioGroup,
}

```
`src\components\ui\dialog.tsx`:

```tsx
"use client"

import * as React from "react"
import * as DialogPrimitive from "@radix-ui/react-dialog"
import { XIcon } from "lucide-react"

import { cn } from "@/lib/utils"

function Dialog({
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Root>) {
  return <DialogPrimitive.Root data-slot="dialog" {...props} />
}

function DialogTrigger({
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Trigger>) {
  return <DialogPrimitive.Trigger data-slot="dialog-trigger" {...props} />
}

function DialogPortal({
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Portal>) {
  return <DialogPrimitive.Portal data-slot="dialog-portal" {...props} />
}

function DialogClose({
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Close>) {
  return <DialogPrimitive.Close data-slot="dialog-close" {...props} />
}

function DialogOverlay({
  className,
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Overlay>) {
  return (
    <DialogPrimitive.Overlay
      data-slot="dialog-overlay"
      className={cn(
        "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/50",
        className
      )}
      {...props}
    />
  )
}

function DialogContent({
  className,
  children,
  showCloseButton = true,
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Content> & {
  showCloseButton?: boolean
}) {
  return (
    <DialogPortal data-slot="dialog-portal">
      <DialogOverlay />
      <DialogPrimitive.Content
        data-slot="dialog-content"
        className={cn(
          "bg-background data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 fixed top-[50%] left-[50%] z-50 grid w-full max-w-[calc(100%-2rem)] translate-x-[-50%] translate-y-[-50%] gap-4 rounded-lg border p-6 shadow-lg duration-200 sm:max-w-lg",
          className
        )}
        {...props}
      >
        {children}
        {showCloseButton && (
          <DialogPrimitive.Close
            data-slot="dialog-close"
            className="ring-offset-background focus:ring-ring data-[state=open]:bg-accent data-[state=open]:text-muted-foreground absolute top-4 right-4 rounded-xs opacity-70 transition-opacity hover:opacity-100 focus:ring-2 focus:ring-offset-2 focus:outline-hidden disabled:pointer-events-none [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4"
          >
            <XIcon />
            <span className="sr-only">Close</span>
          </DialogPrimitive.Close>
        )}
      </DialogPrimitive.Content>
    </DialogPortal>
  )
}

function DialogHeader({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="dialog-header"
      className={cn("flex flex-col gap-2 text-center sm:text-left", className)}
      {...props}
    />
  )
}

function DialogFooter({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="dialog-footer"
      className={cn(
        "flex flex-col-reverse gap-2 sm:flex-row sm:justify-end",
        className
      )}
      {...props}
    />
  )
}

function DialogTitle({
  className,
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Title>) {
  return (
    <DialogPrimitive.Title
      data-slot="dialog-title"
      className={cn("text-lg leading-none font-semibold", className)}
      {...props}
    />
  )
}

function DialogDescription({
  className,
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Description>) {
  return (
    <DialogPrimitive.Description
      data-slot="dialog-description"
      className={cn("text-muted-foreground text-sm", className)}
      {...props}
    />
  )
}

export {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogOverlay,
  DialogPortal,
  DialogTitle,
  DialogTrigger,
}

```
`src\components\ui\drawer.tsx`:

```tsx
"use client"

import * as React from "react"
import { Drawer as DrawerPrimitive } from "vaul"

import { cn } from "@/lib/utils"

function Drawer({
  ...props
}: React.ComponentProps<typeof DrawerPrimitive.Root>) {
  return <DrawerPrimitive.Root data-slot="drawer" {...props} />
}

function DrawerTrigger({
  ...props
}: React.ComponentProps<typeof DrawerPrimitive.Trigger>) {
  return <DrawerPrimitive.Trigger data-slot="drawer-trigger" {...props} />
}

function DrawerPortal({
  ...props
}: React.ComponentProps<typeof DrawerPrimitive.Portal>) {
  return <DrawerPrimitive.Portal data-slot="drawer-portal" {...props} />
}

function DrawerClose({
  ...props
}: React.ComponentProps<typeof DrawerPrimitive.Close>) {
  return <DrawerPrimitive.Close data-slot="drawer-close" {...props} />
}

function DrawerOverlay({
  className,
  ...props
}: React.ComponentProps<typeof DrawerPrimitive.Overlay>) {
  return (
    <DrawerPrimitive.Overlay
      data-slot="drawer-overlay"
      className={cn(
        "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/50",
        className
      )}
      {...props}
    />
  )
}

function DrawerContent({
  className,
  children,
  ...props
}: React.ComponentProps<typeof DrawerPrimitive.Content>) {
  return (
    <DrawerPortal data-slot="drawer-portal">
      <DrawerOverlay />
      <DrawerPrimitive.Content
        data-slot="drawer-content"
        className={cn(
          "group/drawer-content bg-background fixed z-50 flex h-auto flex-col",
          "data-[vaul-drawer-direction=top]:inset-x-0 data-[vaul-drawer-direction=top]:top-0 data-[vaul-drawer-direction=top]:mb-24 data-[vaul-drawer-direction=top]:max-h-[80vh] data-[vaul-drawer-direction=top]:rounded-b-lg data-[vaul-drawer-direction=top]:border-b",
          "data-[vaul-drawer-direction=bottom]:inset-x-0 data-[vaul-drawer-direction=bottom]:bottom-0 data-[vaul-drawer-direction=bottom]:mt-24 data-[vaul-drawer-direction=bottom]:max-h-[80vh] data-[vaul-drawer-direction=bottom]:rounded-t-lg data-[vaul-drawer-direction=bottom]:border-t",
          "data-[vaul-drawer-direction=right]:inset-y-0 data-[vaul-drawer-direction=right]:right-0 data-[vaul-drawer-direction=right]:w-3/4 data-[vaul-drawer-direction=right]:border-l data-[vaul-drawer-direction=right]:sm:max-w-sm",
          "data-[vaul-drawer-direction=left]:inset-y-0 data-[vaul-drawer-direction=left]:left-0 data-[vaul-drawer-direction=left]:w-3/4 data-[vaul-drawer-direction=left]:border-r data-[vaul-drawer-direction=left]:sm:max-w-sm",
          className
        )}
        {...props}
      >
        <div className="bg-muted mx-auto mt-4 hidden h-2 w-[100px] shrink-0 rounded-full group-data-[vaul-drawer-direction=bottom]/drawer-content:block" />
        {children}
      </DrawerPrimitive.Content>
    </DrawerPortal>
  )
}

function DrawerHeader({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="drawer-header"
      className={cn(
        "flex flex-col gap-0.5 p-4 group-data-[vaul-drawer-direction=bottom]/drawer-content:text-center group-data-[vaul-drawer-direction=top]/drawer-content:text-center md:gap-1.5 md:text-left",
        className
      )}
      {...props}
    />
  )
}

function DrawerFooter({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="drawer-footer"
      className={cn("mt-auto flex flex-col gap-2 p-4", className)}
      {...props}
    />
  )
}

function DrawerTitle({
  className,
  ...props
}: React.ComponentProps<typeof DrawerPrimitive.Title>) {
  return (
    <DrawerPrimitive.Title
      data-slot="drawer-title"
      className={cn("text-foreground font-semibold", className)}
      {...props}
    />
  )
}

function DrawerDescription({
  className,
  ...props
}: React.ComponentProps<typeof DrawerPrimitive.Description>) {
  return (
    <DrawerPrimitive.Description
      data-slot="drawer-description"
      className={cn("text-muted-foreground text-sm", className)}
      {...props}
    />
  )
}

export {
  Drawer,
  DrawerPortal,
  DrawerOverlay,
  DrawerTrigger,
  DrawerClose,
  DrawerContent,
  DrawerHeader,
  DrawerFooter,
  DrawerTitle,
  DrawerDescription,
}

```
`src\components\ui\dropdown-menu.tsx`:

```tsx
"use client"

import * as React from "react"
import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu"
import { CheckIcon, ChevronRightIcon, CircleIcon } from "lucide-react"

import { cn } from "@/lib/utils"

function DropdownMenu({
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.Root>) {
  return <DropdownMenuPrimitive.Root data-slot="dropdown-menu" {...props} />
}

function DropdownMenuPortal({
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.Portal>) {
  return (
    <DropdownMenuPrimitive.Portal data-slot="dropdown-menu-portal" {...props} />
  )
}

function DropdownMenuTrigger({
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.Trigger>) {
  return (
    <DropdownMenuPrimitive.Trigger
      data-slot="dropdown-menu-trigger"
      {...props}
    />
  )
}

function DropdownMenuContent({
  className,
  sideOffset = 4,
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.Content>) {
  return (
    <DropdownMenuPrimitive.Portal>
      <DropdownMenuPrimitive.Content
        data-slot="dropdown-menu-content"
        sideOffset={sideOffset}
        className={cn(
          "bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 max-h-(--radix-dropdown-menu-content-available-height) min-w-[8rem] origin-(--radix-dropdown-menu-content-transform-origin) overflow-x-hidden overflow-y-auto rounded-md border p-1 shadow-md",
          className
        )}
        {...props}
      />
    </DropdownMenuPrimitive.Portal>
  )
}

function DropdownMenuGroup({
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.Group>) {
  return (
    <DropdownMenuPrimitive.Group data-slot="dropdown-menu-group" {...props} />
  )
}

function DropdownMenuItem({
  className,
  inset,
  variant = "default",
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.Item> & {
  inset?: boolean
  variant?: "default" | "destructive"
}) {
  return (
    <DropdownMenuPrimitive.Item
      data-slot="dropdown-menu-item"
      data-inset={inset}
      data-variant={variant}
      className={cn(
        "focus:bg-accent focus:text-accent-foreground data-[variant=destructive]:text-destructive data-[variant=destructive]:focus:bg-destructive/10 dark:data-[variant=destructive]:focus:bg-destructive/20 data-[variant=destructive]:focus:text-destructive data-[variant=destructive]:*:[svg]:!text-destructive [&_svg:not([class*='text-'])]:text-muted-foreground relative flex cursor-default items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 data-[inset]:pl-8 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        className
      )}
      {...props}
    />
  )
}

function DropdownMenuCheckboxItem({
  className,
  children,
  checked,
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.CheckboxItem>) {
  return (
    <DropdownMenuPrimitive.CheckboxItem
      data-slot="dropdown-menu-checkbox-item"
      className={cn(
        "focus:bg-accent focus:text-accent-foreground relative flex cursor-default items-center gap-2 rounded-sm py-1.5 pr-2 pl-8 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        className
      )}
      checked={checked}
      {...props}
    >
      <span className="pointer-events-none absolute left-2 flex size-3.5 items-center justify-center">
        <DropdownMenuPrimitive.ItemIndicator>
          <CheckIcon className="size-4" />
        </DropdownMenuPrimitive.ItemIndicator>
      </span>
      {children}
    </DropdownMenuPrimitive.CheckboxItem>
  )
}

function DropdownMenuRadioGroup({
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.RadioGroup>) {
  return (
    <DropdownMenuPrimitive.RadioGroup
      data-slot="dropdown-menu-radio-group"
      {...props}
    />
  )
}

function DropdownMenuRadioItem({
  className,
  children,
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.RadioItem>) {
  return (
    <DropdownMenuPrimitive.RadioItem
      data-slot="dropdown-menu-radio-item"
      className={cn(
        "focus:bg-accent focus:text-accent-foreground relative flex cursor-default items-center gap-2 rounded-sm py-1.5 pr-2 pl-8 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        className
      )}
      {...props}
    >
      <span className="pointer-events-none absolute left-2 flex size-3.5 items-center justify-center">
        <DropdownMenuPrimitive.ItemIndicator>
          <CircleIcon className="size-2 fill-current" />
        </DropdownMenuPrimitive.ItemIndicator>
      </span>
      {children}
    </DropdownMenuPrimitive.RadioItem>
  )
}

function DropdownMenuLabel({
  className,
  inset,
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.Label> & {
  inset?: boolean
}) {
  return (
    <DropdownMenuPrimitive.Label
      data-slot="dropdown-menu-label"
      data-inset={inset}
      className={cn(
        "px-2 py-1.5 text-sm font-medium data-[inset]:pl-8",
        className
      )}
      {...props}
    />
  )
}

function DropdownMenuSeparator({
  className,
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.Separator>) {
  return (
    <DropdownMenuPrimitive.Separator
      data-slot="dropdown-menu-separator"
      className={cn("bg-border -mx-1 my-1 h-px", className)}
      {...props}
    />
  )
}

function DropdownMenuShortcut({
  className,
  ...props
}: React.ComponentProps<"span">) {
  return (
    <span
      data-slot="dropdown-menu-shortcut"
      className={cn(
        "text-muted-foreground ml-auto text-xs tracking-widest",
        className
      )}
      {...props}
    />
  )
}

function DropdownMenuSub({
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.Sub>) {
  return <DropdownMenuPrimitive.Sub data-slot="dropdown-menu-sub" {...props} />
}

function DropdownMenuSubTrigger({
  className,
  inset,
  children,
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.SubTrigger> & {
  inset?: boolean
}) {
  return (
    <DropdownMenuPrimitive.SubTrigger
      data-slot="dropdown-menu-sub-trigger"
      data-inset={inset}
      className={cn(
        "focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground flex cursor-default items-center rounded-sm px-2 py-1.5 text-sm outline-hidden select-none data-[inset]:pl-8",
        className
      )}
      {...props}
    >
      {children}
      <ChevronRightIcon className="ml-auto size-4" />
    </DropdownMenuPrimitive.SubTrigger>
  )
}

function DropdownMenuSubContent({
  className,
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.SubContent>) {
  return (
    <DropdownMenuPrimitive.SubContent
      data-slot="dropdown-menu-sub-content"
      className={cn(
        "bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 min-w-[8rem] origin-(--radix-dropdown-menu-content-transform-origin) overflow-hidden rounded-md border p-1 shadow-lg",
        className
      )}
      {...props}
    />
  )
}

export {
  DropdownMenu,
  DropdownMenuPortal,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuLabel,
  DropdownMenuItem,
  DropdownMenuCheckboxItem,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubTrigger,
  DropdownMenuSubContent,
}

```
`src\components\ui\form.tsx`:

```tsx
"use client"

import * as React from "react"
import * as LabelPrimitive from "@radix-ui/react-label"
import { Slot } from "@radix-ui/react-slot"
import {
  Controller,
  FormProvider,
  useFormContext,
  useFormState,
  type ControllerProps,
  type FieldPath,
  type FieldValues,
} from "react-hook-form"

import { cn } from "@/lib/utils"
import { Label } from "@/components/ui/label"

const Form = FormProvider

type FormFieldContextValue<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
> = {
  name: TName
}

const FormFieldContext = React.createContext<FormFieldContextValue>(
  {} as FormFieldContextValue
)

const FormField = <
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
>({
  ...props
}: ControllerProps<TFieldValues, TName>) => {
  return (
    <FormFieldContext.Provider value={{ name: props.name }}>
      <Controller {...props} />
    </FormFieldContext.Provider>
  )
}

const useFormField = () => {
  const fieldContext = React.useContext(FormFieldContext)
  const itemContext = React.useContext(FormItemContext)
  const { getFieldState } = useFormContext()
  const formState = useFormState({ name: fieldContext.name })
  const fieldState = getFieldState(fieldContext.name, formState)

  if (!fieldContext) {
    throw new Error("useFormField should be used within <FormField>")
  }

  const { id } = itemContext

  return {
    id,
    name: fieldContext.name,
    formItemId: `${id}-form-item`,
    formDescriptionId: `${id}-form-item-description`,
    formMessageId: `${id}-form-item-message`,
    ...fieldState,
  }
}

type FormItemContextValue = {
  id: string
}

const FormItemContext = React.createContext<FormItemContextValue>(
  {} as FormItemContextValue
)

function FormItem({ className, ...props }: React.ComponentProps<"div">) {
  const id = React.useId()

  return (
    <FormItemContext.Provider value={{ id }}>
      <div
        data-slot="form-item"
        className={cn("grid gap-2", className)}
        {...props}
      />
    </FormItemContext.Provider>
  )
}

function FormLabel({
  className,
  ...props
}: React.ComponentProps<typeof LabelPrimitive.Root>) {
  const { error, formItemId } = useFormField()

  return (
    <Label
      data-slot="form-label"
      data-error={!!error}
      className={cn("data-[error=true]:text-destructive", className)}
      htmlFor={formItemId}
      {...props}
    />
  )
}

function FormControl({ ...props }: React.ComponentProps<typeof Slot>) {
  const { error, formItemId, formDescriptionId, formMessageId } = useFormField()

  return (
    <Slot
      data-slot="form-control"
      id={formItemId}
      aria-describedby={
        !error
          ? `${formDescriptionId}`
          : `${formDescriptionId} ${formMessageId}`
      }
      aria-invalid={!!error}
      {...props}
    />
  )
}

function FormDescription({ className, ...props }: React.ComponentProps<"p">) {
  const { formDescriptionId } = useFormField()

  return (
    <p
      data-slot="form-description"
      id={formDescriptionId}
      className={cn("text-muted-foreground text-sm", className)}
      {...props}
    />
  )
}

function FormMessage({ className, ...props }: React.ComponentProps<"p">) {
  const { error, formMessageId } = useFormField()
  const body = error ? String(error?.message ?? "") : props.children

  if (!body) {
    return null
  }

  return (
    <p
      data-slot="form-message"
      id={formMessageId}
      className={cn("text-destructive text-sm", className)}
      {...props}
    >
      {body}
    </p>
  )
}

export {
  useFormField,
  Form,
  FormItem,
  FormLabel,
  FormControl,
  FormDescription,
  FormMessage,
  FormField,
}

```
`src\components\ui\hover-card.tsx`:

```tsx
"use client"

import * as React from "react"
import * as HoverCardPrimitive from "@radix-ui/react-hover-card"

import { cn } from "@/lib/utils"

function HoverCard({
  ...props
}: React.ComponentProps<typeof HoverCardPrimitive.Root>) {
  return <HoverCardPrimitive.Root data-slot="hover-card" {...props} />
}

function HoverCardTrigger({
  ...props
}: React.ComponentProps<typeof HoverCardPrimitive.Trigger>) {
  return (
    <HoverCardPrimitive.Trigger data-slot="hover-card-trigger" {...props} />
  )
}

function HoverCardContent({
  className,
  align = "center",
  sideOffset = 4,
  ...props
}: React.ComponentProps<typeof HoverCardPrimitive.Content>) {
  return (
    <HoverCardPrimitive.Portal data-slot="hover-card-portal">
      <HoverCardPrimitive.Content
        data-slot="hover-card-content"
        align={align}
        sideOffset={sideOffset}
        className={cn(
          "bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 w-64 origin-(--radix-hover-card-content-transform-origin) rounded-md border p-4 shadow-md outline-hidden",
          className
        )}
        {...props}
      />
    </HoverCardPrimitive.Portal>
  )
}

export { HoverCard, HoverCardTrigger, HoverCardContent }

```
`src\components\ui\input-otp.tsx`:

```tsx
"use client"

import * as React from "react"
import { OTPInput, OTPInputContext } from "input-otp"
import { MinusIcon } from "lucide-react"

import { cn } from "@/lib/utils"

function InputOTP({
  className,
  containerClassName,
  ...props
}: React.ComponentProps<typeof OTPInput> & {
  containerClassName?: string
}) {
  return (
    <OTPInput
      data-slot="input-otp"
      containerClassName={cn(
        "flex items-center gap-2 has-disabled:opacity-50",
        containerClassName
      )}
      className={cn("disabled:cursor-not-allowed", className)}
      {...props}
    />
  )
}

function InputOTPGroup({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="input-otp-group"
      className={cn("flex items-center", className)}
      {...props}
    />
  )
}

function InputOTPSlot({
  index,
  className,
  ...props
}: React.ComponentProps<"div"> & {
  index: number
}) {
  const inputOTPContext = React.useContext(OTPInputContext)
  const { char, hasFakeCaret, isActive } = inputOTPContext?.slots[index] ?? {}

  return (
    <div
      data-slot="input-otp-slot"
      data-active={isActive}
      className={cn(
        "data-[active=true]:border-ring data-[active=true]:ring-ring/50 data-[active=true]:aria-invalid:ring-destructive/20 dark:data-[active=true]:aria-invalid:ring-destructive/40 aria-invalid:border-destructive data-[active=true]:aria-invalid:border-destructive dark:bg-input/30 border-input relative flex h-9 w-9 items-center justify-center border-y border-r text-sm shadow-xs transition-all outline-none first:rounded-l-md first:border-l last:rounded-r-md data-[active=true]:z-10 data-[active=true]:ring-[3px]",
        className
      )}
      {...props}
    >
      {char}
      {hasFakeCaret && (
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
          <div className="animate-caret-blink bg-foreground h-4 w-px duration-1000" />
        </div>
      )}
    </div>
  )
}

function InputOTPSeparator({ ...props }: React.ComponentProps<"div">) {
  return (
    <div data-slot="input-otp-separator" role="separator" {...props}>
      <MinusIcon />
    </div>
  )
}

export { InputOTP, InputOTPGroup, InputOTPSlot, InputOTPSeparator }

```
`src\components\ui\input.tsx`:

```tsx
import * as React from "react"

import { cn } from "@/lib/utils"

function Input({ className, type, ...props }: React.ComponentProps<"input">) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
        "file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input flex h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
        "focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]",
        "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
        className
      )}
      {...props}
    />
  )
}

export { Input }

```
`src\components\ui\label.tsx`:

```tsx
"use client"

import * as React from "react"
import * as LabelPrimitive from "@radix-ui/react-label"

import { cn } from "@/lib/utils"

function Label({
  className,
  ...props
}: React.ComponentProps<typeof LabelPrimitive.Root>) {
  return (
    <LabelPrimitive.Root
      data-slot="label"
      className={cn(
        "flex items-center gap-2 text-sm leading-none font-medium select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50",
        className
      )}
      {...props}
    />
  )
}

export { Label }

```
`src\components\ui\menubar.tsx`:

```tsx
"use client"

import * as React from "react"
import * as MenubarPrimitive from "@radix-ui/react-menubar"
import { CheckIcon, ChevronRightIcon, CircleIcon } from "lucide-react"

import { cn } from "@/lib/utils"

function Menubar({
  className,
  ...props
}: React.ComponentProps<typeof MenubarPrimitive.Root>) {
  return (
    <MenubarPrimitive.Root
      data-slot="menubar"
      className={cn(
        "bg-background flex h-9 items-center gap-1 rounded-md border p-1 shadow-xs",
        className
      )}
      {...props}
    />
  )
}

function MenubarMenu({
  ...props
}: React.ComponentProps<typeof MenubarPrimitive.Menu>) {
  return <MenubarPrimitive.Menu data-slot="menubar-menu" {...props} />
}

function MenubarGroup({
  ...props
}: React.ComponentProps<typeof MenubarPrimitive.Group>) {
  return <MenubarPrimitive.Group data-slot="menubar-group" {...props} />
}

function MenubarPortal({
  ...props
}: React.ComponentProps<typeof MenubarPrimitive.Portal>) {
  return <MenubarPrimitive.Portal data-slot="menubar-portal" {...props} />
}

function MenubarRadioGroup({
  ...props
}: React.ComponentProps<typeof MenubarPrimitive.RadioGroup>) {
  return (
    <MenubarPrimitive.RadioGroup data-slot="menubar-radio-group" {...props} />
  )
}

function MenubarTrigger({
  className,
  ...props
}: React.ComponentProps<typeof MenubarPrimitive.Trigger>) {
  return (
    <MenubarPrimitive.Trigger
      data-slot="menubar-trigger"
      className={cn(
        "focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground flex items-center rounded-sm px-2 py-1 text-sm font-medium outline-hidden select-none",
        className
      )}
      {...props}
    />
  )
}

function MenubarContent({
  className,
  align = "start",
  alignOffset = -4,
  sideOffset = 8,
  ...props
}: React.ComponentProps<typeof MenubarPrimitive.Content>) {
  return (
    <MenubarPortal>
      <MenubarPrimitive.Content
        data-slot="menubar-content"
        align={align}
        alignOffset={alignOffset}
        sideOffset={sideOffset}
        className={cn(
          "bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 min-w-[12rem] origin-(--radix-menubar-content-transform-origin) overflow-hidden rounded-md border p-1 shadow-md",
          className
        )}
        {...props}
      />
    </MenubarPortal>
  )
}

function MenubarItem({
  className,
  inset,
  variant = "default",
  ...props
}: React.ComponentProps<typeof MenubarPrimitive.Item> & {
  inset?: boolean
  variant?: "default" | "destructive"
}) {
  return (
    <MenubarPrimitive.Item
      data-slot="menubar-item"
      data-inset={inset}
      data-variant={variant}
      className={cn(
        "focus:bg-accent focus:text-accent-foreground data-[variant=destructive]:text-destructive data-[variant=destructive]:focus:bg-destructive/10 dark:data-[variant=destructive]:focus:bg-destructive/20 data-[variant=destructive]:focus:text-destructive data-[variant=destructive]:*:[svg]:!text-destructive [&_svg:not([class*='text-'])]:text-muted-foreground relative flex cursor-default items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 data-[inset]:pl-8 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        className
      )}
      {...props}
    />
  )
}

function MenubarCheckboxItem({
  className,
  children,
  checked,
  ...props
}: React.ComponentProps<typeof MenubarPrimitive.CheckboxItem>) {
  return (
    <MenubarPrimitive.CheckboxItem
      data-slot="menubar-checkbox-item"
      className={cn(
        "focus:bg-accent focus:text-accent-foreground relative flex cursor-default items-center gap-2 rounded-xs py-1.5 pr-2 pl-8 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        className
      )}
      checked={checked}
      {...props}
    >
      <span className="pointer-events-none absolute left-2 flex size-3.5 items-center justify-center">
        <MenubarPrimitive.ItemIndicator>
          <CheckIcon className="size-4" />
        </MenubarPrimitive.ItemIndicator>
      </span>
      {children}
    </MenubarPrimitive.CheckboxItem>
  )
}

function MenubarRadioItem({
  className,
  children,
  ...props
}: React.ComponentProps<typeof MenubarPrimitive.RadioItem>) {
  return (
    <MenubarPrimitive.RadioItem
      data-slot="menubar-radio-item"
      className={cn(
        "focus:bg-accent focus:text-accent-foreground relative flex cursor-default items-center gap-2 rounded-xs py-1.5 pr-2 pl-8 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        className
      )}
      {...props}
    >
      <span className="pointer-events-none absolute left-2 flex size-3.5 items-center justify-center">
        <MenubarPrimitive.ItemIndicator>
          <CircleIcon className="size-2 fill-current" />
        </MenubarPrimitive.ItemIndicator>
      </span>
      {children}
    </MenubarPrimitive.RadioItem>
  )
}

function MenubarLabel({
  className,
  inset,
  ...props
}: React.ComponentProps<typeof MenubarPrimitive.Label> & {
  inset?: boolean
}) {
  return (
    <MenubarPrimitive.Label
      data-slot="menubar-label"
      data-inset={inset}
      className={cn(
        "px-2 py-1.5 text-sm font-medium data-[inset]:pl-8",
        className
      )}
      {...props}
    />
  )
}

function MenubarSeparator({
  className,
  ...props
}: React.ComponentProps<typeof MenubarPrimitive.Separator>) {
  return (
    <MenubarPrimitive.Separator
      data-slot="menubar-separator"
      className={cn("bg-border -mx-1 my-1 h-px", className)}
      {...props}
    />
  )
}

function MenubarShortcut({
  className,
  ...props
}: React.ComponentProps<"span">) {
  return (
    <span
      data-slot="menubar-shortcut"
      className={cn(
        "text-muted-foreground ml-auto text-xs tracking-widest",
        className
      )}
      {...props}
    />
  )
}

function MenubarSub({
  ...props
}: React.ComponentProps<typeof MenubarPrimitive.Sub>) {
  return <MenubarPrimitive.Sub data-slot="menubar-sub" {...props} />
}

function MenubarSubTrigger({
  className,
  inset,
  children,
  ...props
}: React.ComponentProps<typeof MenubarPrimitive.SubTrigger> & {
  inset?: boolean
}) {
  return (
    <MenubarPrimitive.SubTrigger
      data-slot="menubar-sub-trigger"
      data-inset={inset}
      className={cn(
        "focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground flex cursor-default items-center rounded-sm px-2 py-1.5 text-sm outline-none select-none data-[inset]:pl-8",
        className
      )}
      {...props}
    >
      {children}
      <ChevronRightIcon className="ml-auto h-4 w-4" />
    </MenubarPrimitive.SubTrigger>
  )
}

function MenubarSubContent({
  className,
  ...props
}: React.ComponentProps<typeof MenubarPrimitive.SubContent>) {
  return (
    <MenubarPrimitive.SubContent
      data-slot="menubar-sub-content"
      className={cn(
        "bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 min-w-[8rem] origin-(--radix-menubar-content-transform-origin) overflow-hidden rounded-md border p-1 shadow-lg",
        className
      )}
      {...props}
    />
  )
}

export {
  Menubar,
  MenubarPortal,
  MenubarMenu,
  MenubarTrigger,
  MenubarContent,
  MenubarGroup,
  MenubarSeparator,
  MenubarLabel,
  MenubarItem,
  MenubarShortcut,
  MenubarCheckboxItem,
  MenubarRadioGroup,
  MenubarRadioItem,
  MenubarSub,
  MenubarSubTrigger,
  MenubarSubContent,
}

```
`src\components\ui\navigation-menu.tsx`:

```tsx
import * as React from "react"
import * as NavigationMenuPrimitive from "@radix-ui/react-navigation-menu"
import { cva } from "class-variance-authority"
import { ChevronDownIcon } from "lucide-react"

import { cn } from "@/lib/utils"

function NavigationMenu({
  className,
  children,
  viewport = true,
  ...props
}: React.ComponentProps<typeof NavigationMenuPrimitive.Root> & {
  viewport?: boolean
}) {
  return (
    <NavigationMenuPrimitive.Root
      data-slot="navigation-menu"
      data-viewport={viewport}
      className={cn(
        "group/navigation-menu relative flex max-w-max flex-1 items-center justify-center",
        className
      )}
      {...props}
    >
      {children}
      {viewport && <NavigationMenuViewport />}
    </NavigationMenuPrimitive.Root>
  )
}

function NavigationMenuList({
  className,
  ...props
}: React.ComponentProps<typeof NavigationMenuPrimitive.List>) {
  return (
    <NavigationMenuPrimitive.List
      data-slot="navigation-menu-list"
      className={cn(
        "group flex flex-1 list-none items-center justify-center gap-1",
        className
      )}
      {...props}
    />
  )
}

function NavigationMenuItem({
  className,
  ...props
}: React.ComponentProps<typeof NavigationMenuPrimitive.Item>) {
  return (
    <NavigationMenuPrimitive.Item
      data-slot="navigation-menu-item"
      className={cn("relative", className)}
      {...props}
    />
  )
}

const navigationMenuTriggerStyle = cva(
  "group inline-flex h-9 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground disabled:pointer-events-none disabled:opacity-50 data-[state=open]:hover:bg-accent data-[state=open]:text-accent-foreground data-[state=open]:focus:bg-accent data-[state=open]:bg-accent/50 focus-visible:ring-ring/50 outline-none transition-[color,box-shadow] focus-visible:ring-[3px] focus-visible:outline-1"
)

function NavigationMenuTrigger({
  className,
  children,
  ...props
}: React.ComponentProps<typeof NavigationMenuPrimitive.Trigger>) {
  return (
    <NavigationMenuPrimitive.Trigger
      data-slot="navigation-menu-trigger"
      className={cn(navigationMenuTriggerStyle(), "group", className)}
      {...props}
    >
      {children}{" "}
      <ChevronDownIcon
        className="relative top-[1px] ml-1 size-3 transition duration-300 group-data-[state=open]:rotate-180"
        aria-hidden="true"
      />
    </NavigationMenuPrimitive.Trigger>
  )
}

function NavigationMenuContent({
  className,
  ...props
}: React.ComponentProps<typeof NavigationMenuPrimitive.Content>) {
  return (
    <NavigationMenuPrimitive.Content
      data-slot="navigation-menu-content"
      className={cn(
        "data-[motion^=from-]:animate-in data-[motion^=to-]:animate-out data-[motion^=from-]:fade-in data-[motion^=to-]:fade-out data-[motion=from-end]:slide-in-from-right-52 data-[motion=from-start]:slide-in-from-left-52 data-[motion=to-end]:slide-out-to-right-52 data-[motion=to-start]:slide-out-to-left-52 top-0 left-0 w-full p-2 pr-2.5 md:absolute md:w-auto",
        "group-data-[viewport=false]/navigation-menu:bg-popover group-data-[viewport=false]/navigation-menu:text-popover-foreground group-data-[viewport=false]/navigation-menu:data-[state=open]:animate-in group-data-[viewport=false]/navigation-menu:data-[state=closed]:animate-out group-data-[viewport=false]/navigation-menu:data-[state=closed]:zoom-out-95 group-data-[viewport=false]/navigation-menu:data-[state=open]:zoom-in-95 group-data-[viewport=false]/navigation-menu:data-[state=open]:fade-in-0 group-data-[viewport=false]/navigation-menu:data-[state=closed]:fade-out-0 group-data-[viewport=false]/navigation-menu:top-full group-data-[viewport=false]/navigation-menu:mt-1.5 group-data-[viewport=false]/navigation-menu:overflow-hidden group-data-[viewport=false]/navigation-menu:rounded-md group-data-[viewport=false]/navigation-menu:border group-data-[viewport=false]/navigation-menu:shadow group-data-[viewport=false]/navigation-menu:duration-200 **:data-[slot=navigation-menu-link]:focus:ring-0 **:data-[slot=navigation-menu-link]:focus:outline-none",
        className
      )}
      {...props}
    />
  )
}

function NavigationMenuViewport({
  className,
  ...props
}: React.ComponentProps<typeof NavigationMenuPrimitive.Viewport>) {
  return (
    <div
      className={cn(
        "absolute top-full left-0 isolate z-50 flex justify-center"
      )}
    >
      <NavigationMenuPrimitive.Viewport
        data-slot="navigation-menu-viewport"
        className={cn(
          "origin-top-center bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-90 relative mt-1.5 h-[var(--radix-navigation-menu-viewport-height)] w-full overflow-hidden rounded-md border shadow md:w-[var(--radix-navigation-menu-viewport-width)]",
          className
        )}
        {...props}
      />
    </div>
  )
}

function NavigationMenuLink({
  className,
  ...props
}: React.ComponentProps<typeof NavigationMenuPrimitive.Link>) {
  return (
    <NavigationMenuPrimitive.Link
      data-slot="navigation-menu-link"
      className={cn(
        "data-[active=true]:focus:bg-accent data-[active=true]:hover:bg-accent data-[active=true]:bg-accent/50 data-[active=true]:text-accent-foreground hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus-visible:ring-ring/50 [&_svg:not([class*='text-'])]:text-muted-foreground flex flex-col gap-1 rounded-sm p-2 text-sm transition-all outline-none focus-visible:ring-[3px] focus-visible:outline-1 [&_svg:not([class*='size-'])]:size-4",
        className
      )}
      {...props}
    />
  )
}

function NavigationMenuIndicator({
  className,
  ...props
}: React.ComponentProps<typeof NavigationMenuPrimitive.Indicator>) {
  return (
    <NavigationMenuPrimitive.Indicator
      data-slot="navigation-menu-indicator"
      className={cn(
        "data-[state=visible]:animate-in data-[state=hidden]:animate-out data-[state=hidden]:fade-out data-[state=visible]:fade-in top-full z-[1] flex h-1.5 items-end justify-center overflow-hidden",
        className
      )}
      {...props}
    >
      <div className="bg-border relative top-[60%] h-2 w-2 rotate-45 rounded-tl-sm shadow-md" />
    </NavigationMenuPrimitive.Indicator>
  )
}

export {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuContent,
  NavigationMenuTrigger,
  NavigationMenuLink,
  NavigationMenuIndicator,
  NavigationMenuViewport,
  navigationMenuTriggerStyle,
}

```
`src\components\ui\pagination.tsx`:

```tsx
import * as React from "react"
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  MoreHorizontalIcon,
} from "lucide-react"

import { cn } from "@/lib/utils"
import { Button, buttonVariants } from "@/components/ui/button"

function Pagination({ className, ...props }: React.ComponentProps<"nav">) {
  return (
    <nav
      role="navigation"
      aria-label="pagination"
      data-slot="pagination"
      className={cn("mx-auto flex w-full justify-center", className)}
      {...props}
    />
  )
}

function PaginationContent({
  className,
  ...props
}: React.ComponentProps<"ul">) {
  return (
    <ul
      data-slot="pagination-content"
      className={cn("flex flex-row items-center gap-1", className)}
      {...props}
    />
  )
}

function PaginationItem({ ...props }: React.ComponentProps<"li">) {
  return <li data-slot="pagination-item" {...props} />
}

type PaginationLinkProps = {
  isActive?: boolean
} & Pick<React.ComponentProps<typeof Button>, "size"> &
  React.ComponentProps<"a">

function PaginationLink({
  className,
  isActive,
  size = "icon",
  ...props
}: PaginationLinkProps) {
  return (
    <a
      aria-current={isActive ? "page" : undefined}
      data-slot="pagination-link"
      data-active={isActive}
      className={cn(
        buttonVariants({
          variant: isActive ? "outline" : "ghost",
          size,
        }),
        className
      )}
      {...props}
    />
  )
}

function PaginationPrevious({
  className,
  ...props
}: React.ComponentProps<typeof PaginationLink>) {
  return (
    <PaginationLink
      aria-label="Go to previous page"
      size="default"
      className={cn("gap-1 px-2.5 sm:pl-2.5", className)}
      {...props}
    >
      <ChevronLeftIcon />
      <span className="hidden sm:block">Previous</span>
    </PaginationLink>
  )
}

function PaginationNext({
  className,
  ...props
}: React.ComponentProps<typeof PaginationLink>) {
  return (
    <PaginationLink
      aria-label="Go to next page"
      size="default"
      className={cn("gap-1 px-2.5 sm:pr-2.5", className)}
      {...props}
    >
      <span className="hidden sm:block">Next</span>
      <ChevronRightIcon />
    </PaginationLink>
  )
}

function PaginationEllipsis({
  className,
  ...props
}: React.ComponentProps<"span">) {
  return (
    <span
      aria-hidden
      data-slot="pagination-ellipsis"
      className={cn("flex size-9 items-center justify-center", className)}
      {...props}
    >
      <MoreHorizontalIcon className="size-4" />
      <span className="sr-only">More pages</span>
    </span>
  )
}

export {
  Pagination,
  PaginationContent,
  PaginationLink,
  PaginationItem,
  PaginationPrevious,
  PaginationNext,
  PaginationEllipsis,
}

```
`src\components\ui\popover.tsx`:

```tsx
"use client"

import * as React from "react"
import * as PopoverPrimitive from "@radix-ui/react-popover"

import { cn } from "@/lib/utils"

function Popover({
  ...props
}: React.ComponentProps<typeof PopoverPrimitive.Root>) {
  return <PopoverPrimitive.Root data-slot="popover" {...props} />
}

function PopoverTrigger({
  ...props
}: React.ComponentProps<typeof PopoverPrimitive.Trigger>) {
  return <PopoverPrimitive.Trigger data-slot="popover-trigger" {...props} />
}

function PopoverContent({
  className,
  align = "center",
  sideOffset = 4,
  ...props
}: React.ComponentProps<typeof PopoverPrimitive.Content>) {
  return (
    <PopoverPrimitive.Portal>
      <PopoverPrimitive.Content
        data-slot="popover-content"
        align={align}
        sideOffset={sideOffset}
        className={cn(
          "bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 w-72 origin-(--radix-popover-content-transform-origin) rounded-md border p-4 shadow-md outline-hidden",
          className
        )}
        {...props}
      />
    </PopoverPrimitive.Portal>
  )
}

function PopoverAnchor({
  ...props
}: React.ComponentProps<typeof PopoverPrimitive.Anchor>) {
  return <PopoverPrimitive.Anchor data-slot="popover-anchor" {...props} />
}

export { Popover, PopoverTrigger, PopoverContent, PopoverAnchor }

```
`src\components\ui\progress.tsx`:

```tsx
"use client"

import * as React from "react"
import * as ProgressPrimitive from "@radix-ui/react-progress"

import { cn } from "@/lib/utils"

function Progress({
  className,
  value,
  ...props
}: React.ComponentProps<typeof ProgressPrimitive.Root>) {
  return (
    <ProgressPrimitive.Root
      data-slot="progress"
      className={cn(
        "bg-primary/20 relative h-2 w-full overflow-hidden rounded-full",
        className
      )}
      {...props}
    >
      <ProgressPrimitive.Indicator
        data-slot="progress-indicator"
        className="bg-primary h-full w-full flex-1 transition-all"
        style={{ transform: `translateX(-${100 - (value || 0)}%)` }}
      />
    </ProgressPrimitive.Root>
  )
}

export { Progress }

```
`src\components\ui\radio-group.tsx`:

```tsx
"use client"

import * as React from "react"
import * as RadioGroupPrimitive from "@radix-ui/react-radio-group"
import { CircleIcon } from "lucide-react"

import { cn } from "@/lib/utils"

function RadioGroup({
  className,
  ...props
}: React.ComponentProps<typeof RadioGroupPrimitive.Root>) {
  return (
    <RadioGroupPrimitive.Root
      data-slot="radio-group"
      className={cn("grid gap-3", className)}
      {...props}
    />
  )
}

function RadioGroupItem({
  className,
  ...props
}: React.ComponentProps<typeof RadioGroupPrimitive.Item>) {
  return (
    <RadioGroupPrimitive.Item
      data-slot="radio-group-item"
      className={cn(
        "border-input text-primary focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:bg-input/30 aspect-square size-4 shrink-0 rounded-full border shadow-xs transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50",
        className
      )}
      {...props}
    >
      <RadioGroupPrimitive.Indicator
        data-slot="radio-group-indicator"
        className="relative flex items-center justify-center"
      >
        <CircleIcon className="fill-primary absolute top-1/2 left-1/2 size-2 -translate-x-1/2 -translate-y-1/2" />
      </RadioGroupPrimitive.Indicator>
    </RadioGroupPrimitive.Item>
  )
}

export { RadioGroup, RadioGroupItem }

```
`src\components\ui\resizable.tsx`:

```tsx
"use client"

import * as React from "react"
import { GripVerticalIcon } from "lucide-react"
import * as ResizablePrimitive from "react-resizable-panels"

import { cn } from "@/lib/utils"

function ResizablePanelGroup({
  className,
  ...props
}: React.ComponentProps<typeof ResizablePrimitive.PanelGroup>) {
  return (
    <ResizablePrimitive.PanelGroup
      data-slot="resizable-panel-group"
      className={cn(
        "flex h-full w-full data-[panel-group-direction=vertical]:flex-col",
        className
      )}
      {...props}
    />
  )
}

function ResizablePanel({
  ...props
}: React.ComponentProps<typeof ResizablePrimitive.Panel>) {
  return <ResizablePrimitive.Panel data-slot="resizable-panel" {...props} />
}

function ResizableHandle({
  withHandle,
  className,
  ...props
}: React.ComponentProps<typeof ResizablePrimitive.PanelResizeHandle> & {
  withHandle?: boolean
}) {
  return (
    <ResizablePrimitive.PanelResizeHandle
      data-slot="resizable-handle"
      className={cn(
        "bg-border focus-visible:ring-ring relative flex w-px items-center justify-center after:absolute after:inset-y-0 after:left-1/2 after:w-1 after:-translate-x-1/2 focus-visible:ring-1 focus-visible:ring-offset-1 focus-visible:outline-hidden data-[panel-group-direction=vertical]:h-px data-[panel-group-direction=vertical]:w-full data-[panel-group-direction=vertical]:after:left-0 data-[panel-group-direction=vertical]:after:h-1 data-[panel-group-direction=vertical]:after:w-full data-[panel-group-direction=vertical]:after:translate-x-0 data-[panel-group-direction=vertical]:after:-translate-y-1/2 [&[data-panel-group-direction=vertical]>div]:rotate-90",
        className
      )}
      {...props}
    >
      {withHandle && (
        <div className="bg-border z-10 flex h-4 w-3 items-center justify-center rounded-xs border">
          <GripVerticalIcon className="size-2.5" />
        </div>
      )}
    </ResizablePrimitive.PanelResizeHandle>
  )
}

export { ResizablePanelGroup, ResizablePanel, ResizableHandle }

```
`src\components\ui\scroll-area.tsx`:

```tsx
"use client"

import * as React from "react"
import * as ScrollAreaPrimitive from "@radix-ui/react-scroll-area"

import { cn } from "@/lib/utils"

function ScrollArea({
  className,
  children,
  ...props
}: React.ComponentProps<typeof ScrollAreaPrimitive.Root>) {
  return (
    <ScrollAreaPrimitive.Root
      data-slot="scroll-area"
      className={cn("relative", className)}
      {...props}
    >
      <ScrollAreaPrimitive.Viewport
        data-slot="scroll-area-viewport"
        className="focus-visible:ring-ring/50 size-full rounded-[inherit] transition-[color,box-shadow] outline-none focus-visible:ring-[3px] focus-visible:outline-1"
      >
        {children}
      </ScrollAreaPrimitive.Viewport>
      <ScrollBar />
      <ScrollAreaPrimitive.Corner />
    </ScrollAreaPrimitive.Root>
  )
}

function ScrollBar({
  className,
  orientation = "vertical",
  ...props
}: React.ComponentProps<typeof ScrollAreaPrimitive.ScrollAreaScrollbar>) {
  return (
    <ScrollAreaPrimitive.ScrollAreaScrollbar
      data-slot="scroll-area-scrollbar"
      orientation={orientation}
      className={cn(
        "flex touch-none p-px transition-colors select-none",
        orientation === "vertical" &&
          "h-full w-2.5 border-l border-l-transparent",
        orientation === "horizontal" &&
          "h-2.5 flex-col border-t border-t-transparent",
        className
      )}
      {...props}
    >
      <ScrollAreaPrimitive.ScrollAreaThumb
        data-slot="scroll-area-thumb"
        className="bg-border relative flex-1 rounded-full"
      />
    </ScrollAreaPrimitive.ScrollAreaScrollbar>
  )
}

export { ScrollArea, ScrollBar }

```
`src\components\ui\select.tsx`:

```tsx
"use client"

import * as React from "react"
import * as SelectPrimitive from "@radix-ui/react-select"
import { CheckIcon, ChevronDownIcon, ChevronUpIcon } from "lucide-react"

import { cn } from "@/lib/utils"

function Select({
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Root>) {
  return <SelectPrimitive.Root data-slot="select" {...props} />
}

function SelectGroup({
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Group>) {
  return <SelectPrimitive.Group data-slot="select-group" {...props} />
}

function SelectValue({
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Value>) {
  return <SelectPrimitive.Value data-slot="select-value" {...props} />
}

function SelectTrigger({
  className,
  size = "default",
  children,
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Trigger> & {
  size?: "sm" | "default"
}) {
  return (
    <SelectPrimitive.Trigger
      data-slot="select-trigger"
      data-size={size}
      className={cn(
        "border-input data-[placeholder]:text-muted-foreground [&_svg:not([class*='text-'])]:text-muted-foreground focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:bg-input/30 dark:hover:bg-input/50 flex w-fit items-center justify-between gap-2 rounded-md border bg-transparent px-3 py-2 text-sm whitespace-nowrap shadow-xs transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50 data-[size=default]:h-9 data-[size=sm]:h-8 *:data-[slot=select-value]:line-clamp-1 *:data-[slot=select-value]:flex *:data-[slot=select-value]:items-center *:data-[slot=select-value]:gap-2 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        className
      )}
      {...props}
    >
      {children}
      <SelectPrimitive.Icon asChild>
        <ChevronDownIcon className="size-4 opacity-50" />
      </SelectPrimitive.Icon>
    </SelectPrimitive.Trigger>
  )
}

function SelectContent({
  className,
  children,
  position = "popper",
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Content>) {
  return (
    <SelectPrimitive.Portal>
      <SelectPrimitive.Content
        data-slot="select-content"
        className={cn(
          "bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 relative z-50 max-h-(--radix-select-content-available-height) min-w-[8rem] origin-(--radix-select-content-transform-origin) overflow-x-hidden overflow-y-auto rounded-md border shadow-md",
          position === "popper" &&
            "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",
          className
        )}
        position={position}
        {...props}
      >
        <SelectScrollUpButton />
        <SelectPrimitive.Viewport
          className={cn(
            "p-1",
            position === "popper" &&
              "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)] scroll-my-1"
          )}
        >
          {children}
        </SelectPrimitive.Viewport>
        <SelectScrollDownButton />
      </SelectPrimitive.Content>
    </SelectPrimitive.Portal>
  )
}

function SelectLabel({
  className,
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Label>) {
  return (
    <SelectPrimitive.Label
      data-slot="select-label"
      className={cn("text-muted-foreground px-2 py-1.5 text-xs", className)}
      {...props}
    />
  )
}

function SelectItem({
  className,
  children,
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Item>) {
  return (
    <SelectPrimitive.Item
      data-slot="select-item"
      className={cn(
        "focus:bg-accent focus:text-accent-foreground [&_svg:not([class*='text-'])]:text-muted-foreground relative flex w-full cursor-default items-center gap-2 rounded-sm py-1.5 pr-8 pl-2 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 *:[span]:last:flex *:[span]:last:items-center *:[span]:last:gap-2",
        className
      )}
      {...props}
    >
      <span className="absolute right-2 flex size-3.5 items-center justify-center">
        <SelectPrimitive.ItemIndicator>
          <CheckIcon className="size-4" />
        </SelectPrimitive.ItemIndicator>
      </span>
      <SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>
    </SelectPrimitive.Item>
  )
}

function SelectSeparator({
  className,
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Separator>) {
  return (
    <SelectPrimitive.Separator
      data-slot="select-separator"
      className={cn("bg-border pointer-events-none -mx-1 my-1 h-px", className)}
      {...props}
    />
  )
}

function SelectScrollUpButton({
  className,
  ...props
}: React.ComponentProps<typeof SelectPrimitive.ScrollUpButton>) {
  return (
    <SelectPrimitive.ScrollUpButton
      data-slot="select-scroll-up-button"
      className={cn(
        "flex cursor-default items-center justify-center py-1",
        className
      )}
      {...props}
    >
      <ChevronUpIcon className="size-4" />
    </SelectPrimitive.ScrollUpButton>
  )
}

function SelectScrollDownButton({
  className,
  ...props
}: React.ComponentProps<typeof SelectPrimitive.ScrollDownButton>) {
  return (
    <SelectPrimitive.ScrollDownButton
      data-slot="select-scroll-down-button"
      className={cn(
        "flex cursor-default items-center justify-center py-1",
        className
      )}
      {...props}
    >
      <ChevronDownIcon className="size-4" />
    </SelectPrimitive.ScrollDownButton>
  )
}

export {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectScrollDownButton,
  SelectScrollUpButton,
  SelectSeparator,
  SelectTrigger,
  SelectValue,
}

```
`src\components\ui\separator.tsx`:

```tsx
"use client"

import * as React from "react"
import * as SeparatorPrimitive from "@radix-ui/react-separator"

import { cn } from "@/lib/utils"

function Separator({
  className,
  orientation = "horizontal",
  decorative = true,
  ...props
}: React.ComponentProps<typeof SeparatorPrimitive.Root>) {
  return (
    <SeparatorPrimitive.Root
      data-slot="separator"
      decorative={decorative}
      orientation={orientation}
      className={cn(
        "bg-border shrink-0 data-[orientation=horizontal]:h-px data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-px",
        className
      )}
      {...props}
    />
  )
}

export { Separator }

```
`src\components\ui\sheet.tsx`:

```tsx
"use client"

import * as React from "react"
import * as SheetPrimitive from "@radix-ui/react-dialog"
import { XIcon } from "lucide-react"

import { cn } from "@/lib/utils"

function Sheet({ ...props }: React.ComponentProps<typeof SheetPrimitive.Root>) {
  return <SheetPrimitive.Root data-slot="sheet" {...props} />
}

function SheetTrigger({
  ...props
}: React.ComponentProps<typeof SheetPrimitive.Trigger>) {
  return <SheetPrimitive.Trigger data-slot="sheet-trigger" {...props} />
}

function SheetClose({
  ...props
}: React.ComponentProps<typeof SheetPrimitive.Close>) {
  return <SheetPrimitive.Close data-slot="sheet-close" {...props} />
}

function SheetPortal({
  ...props
}: React.ComponentProps<typeof SheetPrimitive.Portal>) {
  return <SheetPrimitive.Portal data-slot="sheet-portal" {...props} />
}

function SheetOverlay({
  className,
  ...props
}: React.ComponentProps<typeof SheetPrimitive.Overlay>) {
  return (
    <SheetPrimitive.Overlay
      data-slot="sheet-overlay"
      className={cn(
        "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/50",
        className
      )}
      {...props}
    />
  )
}

function SheetContent({
  className,
  children,
  side = "right",
  ...props
}: React.ComponentProps<typeof SheetPrimitive.Content> & {
  side?: "top" | "right" | "bottom" | "left"
}) {
  return (
    <SheetPortal>
      <SheetOverlay />
      <SheetPrimitive.Content
        data-slot="sheet-content"
        className={cn(
          "bg-background data-[state=open]:animate-in data-[state=closed]:animate-out fixed z-50 flex flex-col gap-4 shadow-lg transition ease-in-out data-[state=closed]:duration-300 data-[state=open]:duration-500",
          side === "right" &&
            "data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right inset-y-0 right-0 h-full w-3/4 border-l sm:max-w-sm",
          side === "left" &&
            "data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left inset-y-0 left-0 h-full w-3/4 border-r sm:max-w-sm",
          side === "top" &&
            "data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top inset-x-0 top-0 h-auto border-b",
          side === "bottom" &&
            "data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom inset-x-0 bottom-0 h-auto border-t",
          className
        )}
        {...props}
      >
        {children}
        <SheetPrimitive.Close className="ring-offset-background focus:ring-ring data-[state=open]:bg-secondary absolute top-4 right-4 rounded-xs opacity-70 transition-opacity hover:opacity-100 focus:ring-2 focus:ring-offset-2 focus:outline-hidden disabled:pointer-events-none">
          <XIcon className="size-4" />
          <span className="sr-only">Close</span>
        </SheetPrimitive.Close>
      </SheetPrimitive.Content>
    </SheetPortal>
  )
}

function SheetHeader({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="sheet-header"
      className={cn("flex flex-col gap-1.5 p-4", className)}
      {...props}
    />
  )
}

function SheetFooter({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="sheet-footer"
      className={cn("mt-auto flex flex-col gap-2 p-4", className)}
      {...props}
    />
  )
}

function SheetTitle({
  className,
  ...props
}: React.ComponentProps<typeof SheetPrimitive.Title>) {
  return (
    <SheetPrimitive.Title
      data-slot="sheet-title"
      className={cn("text-foreground font-semibold", className)}
      {...props}
    />
  )
}

function SheetDescription({
  className,
  ...props
}: React.ComponentProps<typeof SheetPrimitive.Description>) {
  return (
    <SheetPrimitive.Description
      data-slot="sheet-description"
      className={cn("text-muted-foreground text-sm", className)}
      {...props}
    />
  )
}

export {
  Sheet,
  SheetTrigger,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetFooter,
  SheetTitle,
  SheetDescription,
}

```
`src\components\ui\sidebar.tsx`:

```tsx
"use client"

import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, VariantProps } from "class-variance-authority"
import { PanelLeftIcon } from "lucide-react"

import { useIsMobile } from "@/hooks/use-mobile"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet"
import { Skeleton } from "@/components/ui/skeleton"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"

const SIDEBAR_COOKIE_NAME = "sidebar_state"
const SIDEBAR_COOKIE_MAX_AGE = 60 * 60 * 24 * 7
const SIDEBAR_WIDTH = "16rem"
const SIDEBAR_WIDTH_MOBILE = "18rem"
const SIDEBAR_WIDTH_ICON = "3rem"
const SIDEBAR_KEYBOARD_SHORTCUT = "b"

type SidebarContextProps = {
  state: "expanded" | "collapsed"
  open: boolean
  setOpen: (open: boolean) => void
  openMobile: boolean
  setOpenMobile: (open: boolean) => void
  isMobile: boolean
  toggleSidebar: () => void
}

const SidebarContext = React.createContext<SidebarContextProps | null>(null)

function useSidebar() {
  const context = React.useContext(SidebarContext)
  if (!context) {
    throw new Error("useSidebar must be used within a SidebarProvider.")
  }

  return context
}

function SidebarProvider({
  defaultOpen = true,
  open: openProp,
  onOpenChange: setOpenProp,
  className,
  style,
  children,
  ...props
}: React.ComponentProps<"div"> & {
  defaultOpen?: boolean
  open?: boolean
  onOpenChange?: (open: boolean) => void
}) {
  const isMobile = useIsMobile()
  const [openMobile, setOpenMobile] = React.useState(false)

  // This is the internal state of the sidebar.
  // We use openProp and setOpenProp for control from outside the component.
  const [_open, _setOpen] = React.useState(defaultOpen)
  const open = openProp ?? _open
  const setOpen = React.useCallback(
    (value: boolean | ((value: boolean) => boolean)) => {
      const openState = typeof value === "function" ? value(open) : value
      if (setOpenProp) {
        setOpenProp(openState)
      } else {
        _setOpen(openState)
      }

      // This sets the cookie to keep the sidebar state.
      document.cookie = `${SIDEBAR_COOKIE_NAME}=${openState}; path=/; max-age=${SIDEBAR_COOKIE_MAX_AGE}`
    },
    [setOpenProp, open]
  )

  // Helper to toggle the sidebar.
  const toggleSidebar = React.useCallback(() => {
    return isMobile ? setOpenMobile((open) => !open) : setOpen((open) => !open)
  }, [isMobile, setOpen, setOpenMobile])

  // Adds a keyboard shortcut to toggle the sidebar.
  React.useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (
        event.key === SIDEBAR_KEYBOARD_SHORTCUT &&
        (event.metaKey || event.ctrlKey)
      ) {
        event.preventDefault()
        toggleSidebar()
      }
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [toggleSidebar])

  // We add a state so that we can do data-state="expanded" or "collapsed".
  // This makes it easier to style the sidebar with Tailwind classes.
  const state = open ? "expanded" : "collapsed"

  const contextValue = React.useMemo<SidebarContextProps>(
    () => ({
      state,
      open,
      setOpen,
      isMobile,
      openMobile,
      setOpenMobile,
      toggleSidebar,
    }),
    [state, open, setOpen, isMobile, openMobile, setOpenMobile, toggleSidebar]
  )

  return (
    <SidebarContext.Provider value={contextValue}>
      <TooltipProvider delayDuration={0}>
        <div
          data-slot="sidebar-wrapper"
          style={
            {
              "--sidebar-width": SIDEBAR_WIDTH,
              "--sidebar-width-icon": SIDEBAR_WIDTH_ICON,
              ...style,
            } as React.CSSProperties
          }
          className={cn(
            "group/sidebar-wrapper has-data-[variant=inset]:bg-sidebar flex min-h-svh w-full",
            className
          )}
          {...props}
        >
          {children}
        </div>
      </TooltipProvider>
    </SidebarContext.Provider>
  )
}

function Sidebar({
  side = "left",
  variant = "sidebar",
  collapsible = "offcanvas",
  className,
  children,
  ...props
}: React.ComponentProps<"div"> & {
  side?: "left" | "right"
  variant?: "sidebar" | "floating" | "inset"
  collapsible?: "offcanvas" | "icon" | "none"
}) {
  const { isMobile, state, openMobile, setOpenMobile } = useSidebar()

  if (collapsible === "none") {
    return (
      <div
        data-slot="sidebar"
        className={cn(
          "bg-sidebar text-sidebar-foreground flex h-full w-(--sidebar-width) flex-col",
          className
        )}
        {...props}
      >
        {children}
      </div>
    )
  }

  if (isMobile) {
    return (
      <Sheet open={openMobile} onOpenChange={setOpenMobile} {...props}>
        <SheetContent
          data-sidebar="sidebar"
          data-slot="sidebar"
          data-mobile="true"
          className="bg-sidebar text-sidebar-foreground w-(--sidebar-width) p-0 [&>button]:hidden"
          style={
            {
              "--sidebar-width": SIDEBAR_WIDTH_MOBILE,
            } as React.CSSProperties
          }
          side={side}
        >
          <SheetHeader className="sr-only">
            <SheetTitle>Sidebar</SheetTitle>
            <SheetDescription>Displays the mobile sidebar.</SheetDescription>
          </SheetHeader>
          <div className="flex h-full w-full flex-col">{children}</div>
        </SheetContent>
      </Sheet>
    )
  }

  return (
    <div
      className="group peer text-sidebar-foreground hidden md:block"
      data-state={state}
      data-collapsible={state === "collapsed" ? collapsible : ""}
      data-variant={variant}
      data-side={side}
      data-slot="sidebar"
    >
      {/* This is what handles the sidebar gap on desktop */}
      <div
        data-slot="sidebar-gap"
        className={cn(
          "relative w-(--sidebar-width) bg-transparent transition-[width] duration-200 ease-linear",
          "group-data-[collapsible=offcanvas]:w-0",
          "group-data-[side=right]:rotate-180",
          variant === "floating" || variant === "inset"
            ? "group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)+(--spacing(4)))]"
            : "group-data-[collapsible=icon]:w-(--sidebar-width-icon)"
        )}
      />
      <div
        data-slot="sidebar-container"
        className={cn(
          "fixed inset-y-0 z-10 hidden h-svh w-(--sidebar-width) transition-[left,right,width] duration-200 ease-linear md:flex",
          side === "left"
            ? "left-0 group-data-[collapsible=offcanvas]:left-[calc(var(--sidebar-width)*-1)]"
            : "right-0 group-data-[collapsible=offcanvas]:right-[calc(var(--sidebar-width)*-1)]",
          // Adjust the padding for floating and inset variants.
          variant === "floating" || variant === "inset"
            ? "p-2 group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)+(--spacing(4))+2px)]"
            : "group-data-[collapsible=icon]:w-(--sidebar-width-icon) group-data-[side=left]:border-r group-data-[side=right]:border-l",
          className
        )}
        {...props}
      >
        <div
          data-sidebar="sidebar"
          data-slot="sidebar-inner"
          className="bg-sidebar group-data-[variant=floating]:border-sidebar-border flex h-full w-full flex-col group-data-[variant=floating]:rounded-lg group-data-[variant=floating]:border group-data-[variant=floating]:shadow-sm"
        >
          {children}
        </div>
      </div>
    </div>
  )
}

function SidebarTrigger({
  className,
  onClick,
  ...props
}: React.ComponentProps<typeof Button>) {
  const { toggleSidebar } = useSidebar()

  return (
    <Button
      data-sidebar="trigger"
      data-slot="sidebar-trigger"
      variant="ghost"
      size="icon"
      className={cn("size-7", className)}
      onClick={(event) => {
        onClick?.(event)
        toggleSidebar()
      }}
      {...props}
    >
      <PanelLeftIcon />
      <span className="sr-only">Toggle Sidebar</span>
    </Button>
  )
}

function SidebarRail({ className, ...props }: React.ComponentProps<"button">) {
  const { toggleSidebar } = useSidebar()

  return (
    <button
      data-sidebar="rail"
      data-slot="sidebar-rail"
      aria-label="Toggle Sidebar"
      tabIndex={-1}
      onClick={toggleSidebar}
      title="Toggle Sidebar"
      className={cn(
        "hover:after:bg-sidebar-border absolute inset-y-0 z-20 hidden w-4 -translate-x-1/2 transition-all ease-linear group-data-[side=left]:-right-4 group-data-[side=right]:left-0 after:absolute after:inset-y-0 after:left-1/2 after:w-[2px] sm:flex",
        "in-data-[side=left]:cursor-w-resize in-data-[side=right]:cursor-e-resize",
        "[[data-side=left][data-state=collapsed]_&]:cursor-e-resize [[data-side=right][data-state=collapsed]_&]:cursor-w-resize",
        "hover:group-data-[collapsible=offcanvas]:bg-sidebar group-data-[collapsible=offcanvas]:translate-x-0 group-data-[collapsible=offcanvas]:after:left-full",
        "[[data-side=left][data-collapsible=offcanvas]_&]:-right-2",
        "[[data-side=right][data-collapsible=offcanvas]_&]:-left-2",
        className
      )}
      {...props}
    />
  )
}

function SidebarInset({ className, ...props }: React.ComponentProps<"main">) {
  return (
    <main
      data-slot="sidebar-inset"
      className={cn(
        "bg-background relative flex w-full flex-1 flex-col",
        "md:peer-data-[variant=inset]:m-2 md:peer-data-[variant=inset]:ml-0 md:peer-data-[variant=inset]:rounded-xl md:peer-data-[variant=inset]:shadow-sm md:peer-data-[variant=inset]:peer-data-[state=collapsed]:ml-2",
        className
      )}
      {...props}
    />
  )
}

function SidebarInput({
  className,
  ...props
}: React.ComponentProps<typeof Input>) {
  return (
    <Input
      data-slot="sidebar-input"
      data-sidebar="input"
      className={cn("bg-background h-8 w-full shadow-none", className)}
      {...props}
    />
  )
}

function SidebarHeader({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="sidebar-header"
      data-sidebar="header"
      className={cn("flex flex-col gap-2 p-2", className)}
      {...props}
    />
  )
}

function SidebarFooter({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="sidebar-footer"
      data-sidebar="footer"
      className={cn("flex flex-col gap-2 p-2", className)}
      {...props}
    />
  )
}

function SidebarSeparator({
  className,
  ...props
}: React.ComponentProps<typeof Separator>) {
  return (
    <Separator
      data-slot="sidebar-separator"
      data-sidebar="separator"
      className={cn("bg-sidebar-border mx-2 w-auto", className)}
      {...props}
    />
  )
}

function SidebarContent({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="sidebar-content"
      data-sidebar="content"
      className={cn(
        "flex min-h-0 flex-1 flex-col gap-2 overflow-auto group-data-[collapsible=icon]:overflow-hidden",
        className
      )}
      {...props}
    />
  )
}

function SidebarGroup({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="sidebar-group"
      data-sidebar="group"
      className={cn("relative flex w-full min-w-0 flex-col p-2", className)}
      {...props}
    />
  )
}

function SidebarGroupLabel({
  className,
  asChild = false,
  ...props
}: React.ComponentProps<"div"> & { asChild?: boolean }) {
  const Comp = asChild ? Slot : "div"

  return (
    <Comp
      data-slot="sidebar-group-label"
      data-sidebar="group-label"
      className={cn(
        "text-sidebar-foreground/70 ring-sidebar-ring flex h-8 shrink-0 items-center rounded-md px-2 text-xs font-medium outline-hidden transition-[margin,opacity] duration-200 ease-linear focus-visible:ring-2 [&>svg]:size-4 [&>svg]:shrink-0",
        "group-data-[collapsible=icon]:-mt-8 group-data-[collapsible=icon]:opacity-0",
        className
      )}
      {...props}
    />
  )
}

function SidebarGroupAction({
  className,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> & { asChild?: boolean }) {
  const Comp = asChild ? Slot : "button"

  return (
    <Comp
      data-slot="sidebar-group-action"
      data-sidebar="group-action"
      className={cn(
        "text-sidebar-foreground ring-sidebar-ring hover:bg-sidebar-accent hover:text-sidebar-accent-foreground absolute top-3.5 right-3 flex aspect-square w-5 items-center justify-center rounded-md p-0 outline-hidden transition-transform focus-visible:ring-2 [&>svg]:size-4 [&>svg]:shrink-0",
        // Increases the hit area of the button on mobile.
        "after:absolute after:-inset-2 md:after:hidden",
        "group-data-[collapsible=icon]:hidden",
        className
      )}
      {...props}
    />
  )
}

function SidebarGroupContent({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="sidebar-group-content"
      data-sidebar="group-content"
      className={cn("w-full text-sm", className)}
      {...props}
    />
  )
}

function SidebarMenu({ className, ...props }: React.ComponentProps<"ul">) {
  return (
    <ul
      data-slot="sidebar-menu"
      data-sidebar="menu"
      className={cn("flex w-full min-w-0 flex-col gap-1", className)}
      {...props}
    />
  )
}

function SidebarMenuItem({ className, ...props }: React.ComponentProps<"li">) {
  return (
    <li
      data-slot="sidebar-menu-item"
      data-sidebar="menu-item"
      className={cn("group/menu-item relative", className)}
      {...props}
    />
  )
}

const sidebarMenuButtonVariants = cva(
  "peer/menu-button flex w-full items-center gap-2 overflow-hidden rounded-md p-2 text-left text-sm outline-hidden ring-sidebar-ring transition-[width,height,padding] hover:bg-sidebar-accent hover:text-sidebar-accent-foreground focus-visible:ring-2 active:bg-sidebar-accent active:text-sidebar-accent-foreground disabled:pointer-events-none disabled:opacity-50 group-has-data-[sidebar=menu-action]/menu-item:pr-8 aria-disabled:pointer-events-none aria-disabled:opacity-50 data-[active=true]:bg-sidebar-accent data-[active=true]:font-medium data-[active=true]:text-sidebar-accent-foreground data-[state=open]:hover:bg-sidebar-accent data-[state=open]:hover:text-sidebar-accent-foreground group-data-[collapsible=icon]:size-8! group-data-[collapsible=icon]:p-2! [&>span:last-child]:truncate [&>svg]:size-4 [&>svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "hover:bg-sidebar-accent hover:text-sidebar-accent-foreground",
        outline:
          "bg-background shadow-[0_0_0_1px_hsl(var(--sidebar-border))] hover:bg-sidebar-accent hover:text-sidebar-accent-foreground hover:shadow-[0_0_0_1px_hsl(var(--sidebar-accent))]",
      },
      size: {
        default: "h-8 text-sm",
        sm: "h-7 text-xs",
        lg: "h-12 text-sm group-data-[collapsible=icon]:p-0!",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

function SidebarMenuButton({
  asChild = false,
  isActive = false,
  variant = "default",
  size = "default",
  tooltip,
  className,
  ...props
}: React.ComponentProps<"button"> & {
  asChild?: boolean
  isActive?: boolean
  tooltip?: string | React.ComponentProps<typeof TooltipContent>
} & VariantProps<typeof sidebarMenuButtonVariants>) {
  const Comp = asChild ? Slot : "button"
  const { isMobile, state } = useSidebar()

  const button = (
    <Comp
      data-slot="sidebar-menu-button"
      data-sidebar="menu-button"
      data-size={size}
      data-active={isActive}
      className={cn(sidebarMenuButtonVariants({ variant, size }), className)}
      {...props}
    />
  )

  if (!tooltip) {
    return button
  }

  if (typeof tooltip === "string") {
    tooltip = {
      children: tooltip,
    }
  }

  return (
    <Tooltip>
      <TooltipTrigger asChild>{button}</TooltipTrigger>
      <TooltipContent
        side="right"
        align="center"
        hidden={state !== "collapsed" || isMobile}
        {...tooltip}
      />
    </Tooltip>
  )
}

function SidebarMenuAction({
  className,
  asChild = false,
  showOnHover = false,
  ...props
}: React.ComponentProps<"button"> & {
  asChild?: boolean
  showOnHover?: boolean
}) {
  const Comp = asChild ? Slot : "button"

  return (
    <Comp
      data-slot="sidebar-menu-action"
      data-sidebar="menu-action"
      className={cn(
        "text-sidebar-foreground ring-sidebar-ring hover:bg-sidebar-accent hover:text-sidebar-accent-foreground peer-hover/menu-button:text-sidebar-accent-foreground absolute top-1.5 right-1 flex aspect-square w-5 items-center justify-center rounded-md p-0 outline-hidden transition-transform focus-visible:ring-2 [&>svg]:size-4 [&>svg]:shrink-0",
        // Increases the hit area of the button on mobile.
        "after:absolute after:-inset-2 md:after:hidden",
        "peer-data-[size=sm]/menu-button:top-1",
        "peer-data-[size=default]/menu-button:top-1.5",
        "peer-data-[size=lg]/menu-button:top-2.5",
        "group-data-[collapsible=icon]:hidden",
        showOnHover &&
          "peer-data-[active=true]/menu-button:text-sidebar-accent-foreground group-focus-within/menu-item:opacity-100 group-hover/menu-item:opacity-100 data-[state=open]:opacity-100 md:opacity-0",
        className
      )}
      {...props}
    />
  )
}

function SidebarMenuBadge({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="sidebar-menu-badge"
      data-sidebar="menu-badge"
      className={cn(
        "text-sidebar-foreground pointer-events-none absolute right-1 flex h-5 min-w-5 items-center justify-center rounded-md px-1 text-xs font-medium tabular-nums select-none",
        "peer-hover/menu-button:text-sidebar-accent-foreground peer-data-[active=true]/menu-button:text-sidebar-accent-foreground",
        "peer-data-[size=sm]/menu-button:top-1",
        "peer-data-[size=default]/menu-button:top-1.5",
        "peer-data-[size=lg]/menu-button:top-2.5",
        "group-data-[collapsible=icon]:hidden",
        className
      )}
      {...props}
    />
  )
}

function SidebarMenuSkeleton({
  className,
  showIcon = false,
  ...props
}: React.ComponentProps<"div"> & {
  showIcon?: boolean
}) {
  // Random width between 50 to 90%.
  const width = React.useMemo(() => {
    return `${Math.floor(Math.random() * 40) + 50}%`
  }, [])

  return (
    <div
      data-slot="sidebar-menu-skeleton"
      data-sidebar="menu-skeleton"
      className={cn("flex h-8 items-center gap-2 rounded-md px-2", className)}
      {...props}
    >
      {showIcon && (
        <Skeleton
          className="size-4 rounded-md"
          data-sidebar="menu-skeleton-icon"
        />
      )}
      <Skeleton
        className="h-4 max-w-(--skeleton-width) flex-1"
        data-sidebar="menu-skeleton-text"
        style={
          {
            "--skeleton-width": width,
          } as React.CSSProperties
        }
      />
    </div>
  )
}

function SidebarMenuSub({ className, ...props }: React.ComponentProps<"ul">) {
  return (
    <ul
      data-slot="sidebar-menu-sub"
      data-sidebar="menu-sub"
      className={cn(
        "border-sidebar-border mx-3.5 flex min-w-0 translate-x-px flex-col gap-1 border-l px-2.5 py-0.5",
        "group-data-[collapsible=icon]:hidden",
        className
      )}
      {...props}
    />
  )
}

function SidebarMenuSubItem({
  className,
  ...props
}: React.ComponentProps<"li">) {
  return (
    <li
      data-slot="sidebar-menu-sub-item"
      data-sidebar="menu-sub-item"
      className={cn("group/menu-sub-item relative", className)}
      {...props}
    />
  )
}

function SidebarMenuSubButton({
  asChild = false,
  size = "md",
  isActive = false,
  className,
  ...props
}: React.ComponentProps<"a"> & {
  asChild?: boolean
  size?: "sm" | "md"
  isActive?: boolean
}) {
  const Comp = asChild ? Slot : "a"

  return (
    <Comp
      data-slot="sidebar-menu-sub-button"
      data-sidebar="menu-sub-button"
      data-size={size}
      data-active={isActive}
      className={cn(
        "text-sidebar-foreground ring-sidebar-ring hover:bg-sidebar-accent hover:text-sidebar-accent-foreground active:bg-sidebar-accent active:text-sidebar-accent-foreground [&>svg]:text-sidebar-accent-foreground flex h-7 min-w-0 -translate-x-px items-center gap-2 overflow-hidden rounded-md px-2 outline-hidden focus-visible:ring-2 disabled:pointer-events-none disabled:opacity-50 aria-disabled:pointer-events-none aria-disabled:opacity-50 [&>span:last-child]:truncate [&>svg]:size-4 [&>svg]:shrink-0",
        "data-[active=true]:bg-sidebar-accent data-[active=true]:text-sidebar-accent-foreground",
        size === "sm" && "text-xs",
        size === "md" && "text-sm",
        "group-data-[collapsible=icon]:hidden",
        className
      )}
      {...props}
    />
  )
}

export {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupAction,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarInput,
  SidebarInset,
  SidebarMenu,
  SidebarMenuAction,
  SidebarMenuBadge,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSkeleton,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  SidebarProvider,
  SidebarRail,
  SidebarSeparator,
  SidebarTrigger,
  useSidebar,
}

```
`src\components\ui\skeleton.tsx`:

```tsx
import { cn } from "@/lib/utils"

function Skeleton({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="skeleton"
      className={cn("bg-accent animate-pulse rounded-md", className)}
      {...props}
    />
  )
}

export { Skeleton }

```
`src\components\ui\slider.tsx`:

```tsx
"use client"

import * as React from "react"
import * as SliderPrimitive from "@radix-ui/react-slider"

import { cn } from "@/lib/utils"

function Slider({
  className,
  defaultValue,
  value,
  min = 0,
  max = 100,
  ...props
}: React.ComponentProps<typeof SliderPrimitive.Root>) {
  const _values = React.useMemo(
    () =>
      Array.isArray(value)
        ? value
        : Array.isArray(defaultValue)
          ? defaultValue
          : [min, max],
    [value, defaultValue, min, max]
  )

  return (
    <SliderPrimitive.Root
      data-slot="slider"
      defaultValue={defaultValue}
      value={value}
      min={min}
      max={max}
      className={cn(
        "relative flex w-full touch-none items-center select-none data-[disabled]:opacity-50 data-[orientation=vertical]:h-full data-[orientation=vertical]:min-h-44 data-[orientation=vertical]:w-auto data-[orientation=vertical]:flex-col",
        className
      )}
      {...props}
    >
      <SliderPrimitive.Track
        data-slot="slider-track"
        className={cn(
          "bg-muted relative grow overflow-hidden rounded-full data-[orientation=horizontal]:h-1.5 data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-1.5"
        )}
      >
        <SliderPrimitive.Range
          data-slot="slider-range"
          className={cn(
            "bg-primary absolute data-[orientation=horizontal]:h-full data-[orientation=vertical]:w-full"
          )}
        />
      </SliderPrimitive.Track>
      {Array.from({ length: _values.length }, (_, index) => (
        <SliderPrimitive.Thumb
          data-slot="slider-thumb"
          key={index}
          className="border-primary bg-background ring-ring/50 block size-4 shrink-0 rounded-full border shadow-sm transition-[color,box-shadow] hover:ring-4 focus-visible:ring-4 focus-visible:outline-hidden disabled:pointer-events-none disabled:opacity-50"
        />
      ))}
    </SliderPrimitive.Root>
  )
}

export { Slider }

```
`src\components\ui\sonner.tsx`:

```tsx
"use client"

import { useTheme } from "next-themes"
import { Toaster as Sonner, ToasterProps } from "sonner"

const Toaster = ({ ...props }: ToasterProps) => {
  const { theme = "system" } = useTheme()

  return (
    <Sonner
      theme={theme as ToasterProps["theme"]}
      className="toaster group"
      style={
        {
          "--normal-bg": "var(--popover)",
          "--normal-text": "var(--popover-foreground)",
          "--normal-border": "var(--border)",
        } as React.CSSProperties
      }
      {...props}
    />
  )
}

export { Toaster }

```
`src\components\ui\switch.tsx`:

```tsx
"use client"

import * as React from "react"
import * as SwitchPrimitive from "@radix-ui/react-switch"

import { cn } from "@/lib/utils"

function Switch({
  className,
  ...props
}: React.ComponentProps<typeof SwitchPrimitive.Root>) {
  return (
    <SwitchPrimitive.Root
      data-slot="switch"
      className={cn(
        "peer data-[state=checked]:bg-primary data-[state=unchecked]:bg-input focus-visible:border-ring focus-visible:ring-ring/50 dark:data-[state=unchecked]:bg-input/80 inline-flex h-[1.15rem] w-8 shrink-0 items-center rounded-full border border-transparent shadow-xs transition-all outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50",
        className
      )}
      {...props}
    >
      <SwitchPrimitive.Thumb
        data-slot="switch-thumb"
        className={cn(
          "bg-background dark:data-[state=unchecked]:bg-foreground dark:data-[state=checked]:bg-primary-foreground pointer-events-none block size-4 rounded-full ring-0 transition-transform data-[state=checked]:translate-x-[calc(100%-2px)] data-[state=unchecked]:translate-x-0"
        )}
      />
    </SwitchPrimitive.Root>
  )
}

export { Switch }

```
`src\components\ui\table.tsx`:

```tsx
"use client"

import * as React from "react"

import { cn } from "@/lib/utils"

function Table({ className, ...props }: React.ComponentProps<"table">) {
  return (
    <div
      data-slot="table-container"
      className="relative w-full overflow-x-auto"
    >
      <table
        data-slot="table"
        className={cn("w-full caption-bottom text-sm", className)}
        {...props}
      />
    </div>
  )
}

function TableHeader({ className, ...props }: React.ComponentProps<"thead">) {
  return (
    <thead
      data-slot="table-header"
      className={cn("[&_tr]:border-b", className)}
      {...props}
    />
  )
}

function TableBody({ className, ...props }: React.ComponentProps<"tbody">) {
  return (
    <tbody
      data-slot="table-body"
      className={cn("[&_tr:last-child]:border-0", className)}
      {...props}
    />
  )
}

function TableFooter({ className, ...props }: React.ComponentProps<"tfoot">) {
  return (
    <tfoot
      data-slot="table-footer"
      className={cn(
        "bg-muted/50 border-t font-medium [&>tr]:last:border-b-0",
        className
      )}
      {...props}
    />
  )
}

function TableRow({ className, ...props }: React.ComponentProps<"tr">) {
  return (
    <tr
      data-slot="table-row"
      className={cn(
        "hover:bg-muted/50 data-[state=selected]:bg-muted border-b transition-colors",
        className
      )}
      {...props}
    />
  )
}

function TableHead({ className, ...props }: React.ComponentProps<"th">) {
  return (
    <th
      data-slot="table-head"
      className={cn(
        "text-foreground h-10 px-2 text-left align-middle font-medium whitespace-nowrap [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]",
        className
      )}
      {...props}
    />
  )
}

function TableCell({ className, ...props }: React.ComponentProps<"td">) {
  return (
    <td
      data-slot="table-cell"
      className={cn(
        "p-2 align-middle whitespace-nowrap [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]",
        className
      )}
      {...props}
    />
  )
}

function TableCaption({
  className,
  ...props
}: React.ComponentProps<"caption">) {
  return (
    <caption
      data-slot="table-caption"
      className={cn("text-muted-foreground mt-4 text-sm", className)}
      {...props}
    />
  )
}

export {
  Table,
  TableHeader,
  TableBody,
  TableFooter,
  TableHead,
  TableRow,
  TableCell,
  TableCaption,
}

```
`src\components\ui\tabs.tsx`:

```tsx
"use client"

import * as React from "react"
import * as TabsPrimitive from "@radix-ui/react-tabs"

import { cn } from "@/lib/utils"

function Tabs({
  className,
  ...props
}: React.ComponentProps<typeof TabsPrimitive.Root>) {
  return (
    <TabsPrimitive.Root
      data-slot="tabs"
      className={cn("flex flex-col gap-2", className)}
      {...props}
    />
  )
}

function TabsList({
  className,
  ...props
}: React.ComponentProps<typeof TabsPrimitive.List>) {
  return (
    <TabsPrimitive.List
      data-slot="tabs-list"
      className={cn(
        "bg-muted text-muted-foreground inline-flex h-9 w-fit items-center justify-center rounded-lg p-[3px]",
        className
      )}
      {...props}
    />
  )
}

function TabsTrigger({
  className,
  ...props
}: React.ComponentProps<typeof TabsPrimitive.Trigger>) {
  return (
    <TabsPrimitive.Trigger
      data-slot="tabs-trigger"
      className={cn(
        "data-[state=active]:bg-background dark:data-[state=active]:text-foreground focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:outline-ring dark:data-[state=active]:border-input dark:data-[state=active]:bg-input/30 text-foreground dark:text-muted-foreground inline-flex h-[calc(100%-1px)] flex-1 items-center justify-center gap-1.5 rounded-md border border-transparent px-2 py-1 text-sm font-medium whitespace-nowrap transition-[color,box-shadow] focus-visible:ring-[3px] focus-visible:outline-1 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:shadow-sm [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        className
      )}
      {...props}
    />
  )
}

function TabsContent({
  className,
  ...props
}: React.ComponentProps<typeof TabsPrimitive.Content>) {
  return (
    <TabsPrimitive.Content
      data-slot="tabs-content"
      className={cn("flex-1 outline-none", className)}
      {...props}
    />
  )
}

export { Tabs, TabsList, TabsTrigger, TabsContent }

```
`src\components\ui\textarea.tsx`:

```tsx
import * as React from "react"

import { cn } from "@/lib/utils"

function Textarea({ className, ...props }: React.ComponentProps<"textarea">) {
  return (
    <textarea
      data-slot="textarea"
      className={cn(
        "border-input placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:bg-input/30 flex field-sizing-content min-h-16 w-full rounded-md border bg-transparent px-3 py-2 text-base shadow-xs transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
        className
      )}
      {...props}
    />
  )
}

export { Textarea }

```
`src\components\ui\toast.tsx`:

```tsx
"use client"

import * as React from "react"
import * as ToastPrimitives from "@radix-ui/react-toast"
import { cva, type VariantProps } from "class-variance-authority"
import { X } from "lucide-react"

import { cn } from "@/lib/utils"

const ToastProvider = ToastPrimitives.Provider

const ToastViewport = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Viewport>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Viewport>
>(({ className, ...props }, ref) => (
  <ToastPrimitives.Viewport
    ref={ref}
    className={cn(
      "fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]",
      className
    )}
    {...props}
  />
))
ToastViewport.displayName = ToastPrimitives.Viewport.displayName

const toastVariants = cva(
  "group pointer-events-auto relative flex w-full items-center justify-between space-x-2 overflow-hidden rounded-md border p-4 pr-6 shadow-lg transition-all data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:transition-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out data-[state=closed]:fade-out-80 data-[state=closed]:slide-out-to-right-full data-[state=open]:slide-in-from-top-full data-[state=open]:sm:slide-in-from-bottom-full",
  {
    variants: {
      variant: {
        default: "border bg-background text-foreground",
        destructive:
          "destructive group border-destructive bg-destructive text-destructive-foreground",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

const Toast = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Root>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Root> &
  VariantProps<typeof toastVariants>
>(({ className, variant, ...props }, ref) => {
  return (
    <ToastPrimitives.Root
      ref={ref}
      className={cn(toastVariants({ variant }), className)}
      {...props}
    />
  )
})
Toast.displayName = ToastPrimitives.Root.displayName

const ToastAction = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Action>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Action>
>(({ className, ...props }, ref) => (
  <ToastPrimitives.Action
    ref={ref}
    className={cn(
      "inline-flex h-8 shrink-0 items-center justify-center rounded-md border bg-transparent px-3 text-sm font-medium transition-colors hover:bg-secondary focus:outline-none focus:ring-1 focus:ring-ring disabled:pointer-events-none disabled:opacity-50 group-[.destructive]:border-muted/40 group-[.destructive]:hover:border-destructive/30 group-[.destructive]:hover:bg-destructive group-[.destructive]:hover:text-destructive-foreground group-[.destructive]:focus:ring-destructive",
      className
    )}
    {...props}
  />
))
ToastAction.displayName = ToastPrimitives.Action.displayName

const ToastClose = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Close>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Close>
>(({ className, ...props }, ref) => (
  <ToastPrimitives.Close
    ref={ref}
    className={cn(
      "absolute right-1 top-1 rounded-md p-1 text-foreground/50 opacity-0 transition-opacity hover:text-foreground focus:opacity-100 focus:outline-none focus:ring-1 group-hover:opacity-100 group-[.destructive]:text-red-300 group-[.destructive]:hover:text-red-50 group-[.destructive]:focus:ring-red-400 group-[.destructive]:focus:ring-offset-red-600",
      className
    )}
    toast-close=""
    {...props}
  >
    <X className="h-4 w-4" />
  </ToastPrimitives.Close>
))
ToastClose.displayName = ToastPrimitives.Close.displayName

const ToastTitle = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Title>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Title>
>(({ className, ...props }, ref) => (
  <ToastPrimitives.Title
    ref={ref}
    className={cn("text-sm font-semibold [&+div]:text-xs", className)}
    {...props}
  />
))
ToastTitle.displayName = ToastPrimitives.Title.displayName

const ToastDescription = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Description>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Description>
>(({ className, ...props }, ref) => (
  <ToastPrimitives.Description
    ref={ref}
    className={cn("text-sm opacity-90", className)}
    {...props}
  />
))
ToastDescription.displayName = ToastPrimitives.Description.displayName

type ToastProps = React.ComponentPropsWithoutRef<typeof Toast>

type ToastActionElement = React.ReactElement<typeof ToastAction>

export {
  type ToastProps,
  type ToastActionElement,
  ToastProvider,
  ToastViewport,
  Toast,
  ToastTitle,
  ToastDescription,
  ToastClose,
  ToastAction,
}
```
`src\components\ui\toaster.tsx`:

```tsx
"use client"

import { useToast } from "@/hooks/use-toast"
import {
  Toast,
  ToastClose,
  ToastDescription,
  ToastProvider,
  ToastTitle,
  ToastViewport,
} from "@/components/ui/toast"

export function Toaster() {
  const { toasts } = useToast()

  return (
    <ToastProvider>
      {toasts.map(function ({ id, title, description, action, ...props }) {
        return (
          <Toast key={id} {...props}>
            <div className="grid gap-1">
              {title && <ToastTitle>{title}</ToastTitle>}
              {description && (
                <ToastDescription>{description}</ToastDescription>
              )}
            </div>
            {action}
            <ToastClose />
          </Toast>
        )
      })}
      <ToastViewport />
    </ToastProvider>
  )
}
```
`src\components\ui\toggle-group.tsx`:

```tsx
"use client"

import * as React from "react"
import * as ToggleGroupPrimitive from "@radix-ui/react-toggle-group"
import { type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"
import { toggleVariants } from "@/components/ui/toggle"

const ToggleGroupContext = React.createContext<
  VariantProps<typeof toggleVariants>
>({
  size: "default",
  variant: "default",
})

function ToggleGroup({
  className,
  variant,
  size,
  children,
  ...props
}: React.ComponentProps<typeof ToggleGroupPrimitive.Root> &
  VariantProps<typeof toggleVariants>) {
  return (
    <ToggleGroupPrimitive.Root
      data-slot="toggle-group"
      data-variant={variant}
      data-size={size}
      className={cn(
        "group/toggle-group flex w-fit items-center rounded-md data-[variant=outline]:shadow-xs",
        className
      )}
      {...props}
    >
      <ToggleGroupContext.Provider value={{ variant, size }}>
        {children}
      </ToggleGroupContext.Provider>
    </ToggleGroupPrimitive.Root>
  )
}

function ToggleGroupItem({
  className,
  children,
  variant,
  size,
  ...props
}: React.ComponentProps<typeof ToggleGroupPrimitive.Item> &
  VariantProps<typeof toggleVariants>) {
  const context = React.useContext(ToggleGroupContext)

  return (
    <ToggleGroupPrimitive.Item
      data-slot="toggle-group-item"
      data-variant={context.variant || variant}
      data-size={context.size || size}
      className={cn(
        toggleVariants({
          variant: context.variant || variant,
          size: context.size || size,
        }),
        "min-w-0 flex-1 shrink-0 rounded-none shadow-none first:rounded-l-md last:rounded-r-md focus:z-10 focus-visible:z-10 data-[variant=outline]:border-l-0 data-[variant=outline]:first:border-l",
        className
      )}
      {...props}
    >
      {children}
    </ToggleGroupPrimitive.Item>
  )
}

export { ToggleGroup, ToggleGroupItem }

```
`src\components\ui\toggle.tsx`:

```tsx
"use client"

import * as React from "react"
import * as TogglePrimitive from "@radix-ui/react-toggle"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const toggleVariants = cva(
  "inline-flex items-center justify-center gap-2 rounded-md text-sm font-medium hover:bg-muted hover:text-muted-foreground disabled:pointer-events-none disabled:opacity-50 data-[state=on]:bg-accent data-[state=on]:text-accent-foreground [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 [&_svg]:shrink-0 focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] outline-none transition-[color,box-shadow] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive whitespace-nowrap",
  {
    variants: {
      variant: {
        default: "bg-transparent",
        outline:
          "border border-input bg-transparent shadow-xs hover:bg-accent hover:text-accent-foreground",
      },
      size: {
        default: "h-9 px-2 min-w-9",
        sm: "h-8 px-1.5 min-w-8",
        lg: "h-10 px-2.5 min-w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

function Toggle({
  className,
  variant,
  size,
  ...props
}: React.ComponentProps<typeof TogglePrimitive.Root> &
  VariantProps<typeof toggleVariants>) {
  return (
    <TogglePrimitive.Root
      data-slot="toggle"
      className={cn(toggleVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Toggle, toggleVariants }

```
`src\components\ui\tooltip.tsx`:

```tsx
"use client"

import * as React from "react"
import * as TooltipPrimitive from "@radix-ui/react-tooltip"

import { cn } from "@/lib/utils"

function TooltipProvider({
  delayDuration = 0,
  ...props
}: React.ComponentProps<typeof TooltipPrimitive.Provider>) {
  return (
    <TooltipPrimitive.Provider
      data-slot="tooltip-provider"
      delayDuration={delayDuration}
      {...props}
    />
  )
}

function Tooltip({
  ...props
}: React.ComponentProps<typeof TooltipPrimitive.Root>) {
  return (
    <TooltipProvider>
      <TooltipPrimitive.Root data-slot="tooltip" {...props} />
    </TooltipProvider>
  )
}

function TooltipTrigger({
  ...props
}: React.ComponentProps<typeof TooltipPrimitive.Trigger>) {
  return <TooltipPrimitive.Trigger data-slot="tooltip-trigger" {...props} />
}

function TooltipContent({
  className,
  sideOffset = 0,
  children,
  ...props
}: React.ComponentProps<typeof TooltipPrimitive.Content>) {
  return (
    <TooltipPrimitive.Portal>
      <TooltipPrimitive.Content
        data-slot="tooltip-content"
        sideOffset={sideOffset}
        className={cn(
          "bg-primary text-primary-foreground animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 w-fit origin-(--radix-tooltip-content-transform-origin) rounded-md px-3 py-1.5 text-xs text-balance",
          className
        )}
        {...props}
      >
        {children}
        <TooltipPrimitive.Arrow className="bg-primary fill-primary z-50 size-2.5 translate-y-[calc(-50%_-_2px)] rotate-45 rounded-[2px]" />
      </TooltipPrimitive.Content>
    </TooltipPrimitive.Portal>
  )
}

export { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider }

```
`src\hooks\use-mobile.ts`:

```ts
import * as React from "react"

const MOBILE_BREAKPOINT = 768

export function useIsMobile() {
  const [isMobile, setIsMobile] = React.useState<boolean | undefined>(undefined)

  React.useEffect(() => {
    const mql = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`)
    const onChange = () => {
      setIsMobile(window.innerWidth < MOBILE_BREAKPOINT)
    }
    mql.addEventListener("change", onChange)
    setIsMobile(window.innerWidth < MOBILE_BREAKPOINT)
    return () => mql.removeEventListener("change", onChange)
  }, [])

  return !!isMobile
}

```
`src\hooks\use-toast.ts`:

```ts
"use client"

// Inspired by react-hot-toast library
import * as React from "react"

import type {
  ToastActionElement,
  ToastProps,
} from "@/components/ui/toast"

const TOAST_LIMIT = 1
const TOAST_REMOVE_DELAY = 1000000

type ToasterToast = ToastProps & {
  id: string
  title?: React.ReactNode
  description?: React.ReactNode
  action?: ToastActionElement
}

const actionTypes = {
  ADD_TOAST: "ADD_TOAST",
  UPDATE_TOAST: "UPDATE_TOAST",
  DISMISS_TOAST: "DISMISS_TOAST",
  REMOVE_TOAST: "REMOVE_TOAST",
} as const

let count = 0

function genId() {
  count = (count + 1) % Number.MAX_SAFE_INTEGER
  return count.toString()
}

type ActionType = typeof actionTypes

type Action =
  | {
    type: ActionType["ADD_TOAST"]
    toast: ToasterToast
  }
  | {
    type: ActionType["UPDATE_TOAST"]
    toast: Partial<ToasterToast>
  }
  | {
    type: ActionType["DISMISS_TOAST"]
    toastId?: ToasterToast["id"]
  }
  | {
    type: ActionType["REMOVE_TOAST"]
    toastId?: ToasterToast["id"]
  }

interface State {
  toasts: ToasterToast[]
}

const toastTimeouts = new Map<string, ReturnType<typeof setTimeout>>()

const addToRemoveQueue = (toastId: string) => {
  if (toastTimeouts.has(toastId)) {
    return
  }

  const timeout = setTimeout(() => {
    toastTimeouts.delete(toastId)
    dispatch({
      type: "REMOVE_TOAST",
      toastId: toastId,
    })
  }, TOAST_REMOVE_DELAY)

  toastTimeouts.set(toastId, timeout)
}

export const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "ADD_TOAST":
      return {
        ...state,
        toasts: [action.toast, ...state.toasts].slice(0, TOAST_LIMIT),
      }

    case "UPDATE_TOAST":
      return {
        ...state,
        toasts: state.toasts.map((t) =>
          t.id === action.toast.id ? { ...t, ...action.toast } : t
        ),
      }

    case "DISMISS_TOAST": {
      const { toastId } = action

      // ! Side effects ! - This could be extracted into a dismissToast() action,
      // but I'll keep it here for simplicity
      if (toastId) {
        addToRemoveQueue(toastId)
      } else {
        state.toasts.forEach((toast) => {
          addToRemoveQueue(toast.id)
        })
      }

      return {
        ...state,
        toasts: state.toasts.map((t) =>
          t.id === toastId || toastId === undefined
            ? {
              ...t,
              open: false,
            }
            : t
        ),
      }
    }
    case "REMOVE_TOAST":
      if (action.toastId === undefined) {
        return {
          ...state,
          toasts: [],
        }
      }
      return {
        ...state,
        toasts: state.toasts.filter((t) => t.id !== action.toastId),
      }
  }
}

const listeners: Array<(state: State) => void> = []

let memoryState: State = { toasts: [] }

function dispatch(action: Action) {
  memoryState = reducer(memoryState, action)
  listeners.forEach((listener) => {
    listener(memoryState)
  })
}

type Toast = Omit<ToasterToast, "id">

function toast({ ...props }: Toast) {
  const id = genId()

  const update = (props: ToasterToast) =>
    dispatch({
      type: "UPDATE_TOAST",
      toast: { ...props, id },
    })
  const dismiss = () => dispatch({ type: "DISMISS_TOAST", toastId: id })

  dispatch({
    type: "ADD_TOAST",
    toast: {
      ...props,
      id,
      open: true,
      onOpenChange: (open) => {
        if (!open) dismiss()
      },
    },
  })

  return {
    id: id,
    dismiss,
    update,
  }
}

function useToast() {
  const [state, setState] = React.useState<State>(memoryState)

  React.useEffect(() => {
    listeners.push(setState)
    return () => {
      const index = listeners.indexOf(setState)
      if (index > -1) {
        listeners.splice(index, 1)
      }
    }
  }, [state])

  return {
    ...state,
    toast,
    dismiss: (toastId?: string) => dispatch({ type: "DISMISS_TOAST", toastId }),
  }
}

export { useToast, toast }
```
`src\lib\db.ts`:

```ts
import { PrismaClient } from '@prisma/client'

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined
}

export const db =
  globalForPrisma.prisma ??
  new PrismaClient({
    log: ['query'],
  })

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = db
```
`src\lib\seed-data.ts`:

```ts
import type { Category, Product, Project } from "./types";

export const DEFAULT_CATEGORIES: Category[] = [
  {
    id: "panels",
    name: "الألواح الشمسية",
    description: "ألواح شمسية عالية الكفاءة بتقنيات HJT و TOPCON، مع كفاءة تصل إلى 23.21% وضمان أداء يصل إلى 30 عاماً.",
    icon: "Sun",
    image: "",
    order: 1,
  },
  {
    id: "inverters",
    name: "الانفرترات",
    description: "انفرترات طاقة عالية الكفاءة بأنظمة هجينة On-Grid / Off-Grid، بكفاءة تحويل تصل إلى 98% ومراقبة عن بعد.",
    icon: "Zap",
    image: "",
    order: 2,
  },
  {
    id: "batteries",
    name: "البطاريات",
    description: "حلول تخزين طاقة متطورة ببطاريات ليثيوم أيون عالية السعة، مع أنظمة إدارة ذكية وعمر افتراضي يصل إلى 10 سنوات.",
    icon: "BatteryCharging",
    image: "",
    order: 3,
  },
  {
    id: "cables",
    name: "الكابلات",
    description: "كابلات AC وكابلات طاقة شمسية متينة مصممة للظروف البيئية القاسية، مقاومة للأشعة فوق البنفسجية مع عزل مزدوج.",
    icon: "Cable",
    image: "",
    order: 4,
  },
];

export const DEFAULT_PRODUCTS: Product[] = [
  {
    id: "ae-solar-panels",
    categoryId: "panels",
    name: "ألواح AE Solar",
    brand: "AE Solar",
    description: "الموزع المعتمد في اليمن لشركة إي سولار العالمية، ألواح شمسية عالية الكفاءة بتقنيات متطورة وضمان يصل إلى 30 عاماً.",
    features: [
      "تقنيات HJT و TOPCON المتطورة",
      "كفاءة تصل إلى 23.21%",
      "ضمان أداء 30 عاماً",
      "تصميم مقاوم للظروف القاسية",
    ],
    image: "/products/panel.png",
    accent: "from-emerald-500 to-brand-blue",
    order: 1,
  },
  {
    id: "sinexcel-inverters",
    categoryId: "inverters",
    name: "انفرترات Sinexcel",
    brand: "Sinexcel",
    description: "انفرترات طاقة عالية الكفاءة من شركة سنكسل العالمية، بمجموعة متنوعة من السعات والمواصفات.",
    features: [
      "أنظمة هجينة ومتوافقة مع البطاريات",
      "كفاءة تحويل تصل إلى 98%",
      "مراقبة عن بعد وتحكم ذكي",
      "نطاق سعات من 3 إلى 50 كيلوواط",
    ],
    image: "/products/inverter.jpg",
    accent: "from-brand-blue to-indigo-600",
    order: 2,
  },
  {
    id: "sinexcel-3ph-hv",
    categoryId: "inverters",
    name: "Sinexcel iSUNA — Hybrid Three Phase HV (10-20kW)",
    brand: "Sinexcel",
    description: "انفرتر هجين ثلاثي الأطوار بجهد عالي، يدعم سعات من 10 إلى 20 كيلوواط، مع تقنية SiC وكفاءة قصوى تصل إلى 98.20%، ومنفذي بطارية مستقلين، وقدرة على توازن 100% للأطوار الثلاثة.",
    features: [
      "يدعم 100% توازن للأطوار الثلاثة",
      "تحميل زائد فوري 130-200% (60 ثانية)",
      "إمكانية توصيل 15 وحدة بالتوازي",
      "منفذي بطارية مستقلين (خليط بطاريات قديمة وجديدة)",
      "نسبة DC/AC تصل إلى 1.5 مرة",
    ],
    image: "/products/sinexcel-3ph-hv.jpg",
    accent: "from-brand-blue to-indigo-600",
    order: 3,
  },
  {
    id: "sinexcel-onoff-3ph-hv",
    categoryId: "inverters",
    name: "Sinexcel iSUNA — On/Off-Grid Three Phase HV (22-50kW)",
    brand: "Sinexcel",
    description: "انفرتر هجين ثلاثي الأطوار بجهد عالي يعمل على/خارج الشبكة، يدعم سعات من 22 إلى 50 كيلوواط، بتقنية SiC وكفاءة قصوى 98.6%، مع 4 MPPTs ومنفذ مولد احترافي بتيار 150 أمبير.",
    features: [
      "تقنية SiC بكفاءة قصوى 98.6%",
      "4 MPPTs بتيار دخول 40A لتوافق أعلى",
      "منفذي بطارية مستقلين لخليط البطاريات",
      "تحميل زائد 150% مع خيار دالة AFCI",
      "6 وحدات بالتوازي (وضع خارج الشبكة)",
      "منفذ مولد احترافي بتيار 150A",
    ],
    image: "/products/sinexcel-onoff-3ph-hv.jpg",
    accent: "from-indigo-600 to-brand-blue",
    order: 4,
  },
  {
    id: "sinexcel-offgrid-1ph-lv",
    categoryId: "inverters",
    name: "Sinexcel iSUNA — Off-Grid Single Phase LV (3-12kW)",
    brand: "Sinexcel",
    description: "انفرتر هجين خارج الشبكة أحادي الطور بجهد منخفض، يدعم سعات من 3 إلى 12 كيلوواط، مع مروحة ذكية فائقة الصمت، وكفاءة قصوى 97.5%، وضمان 5 سنوات.",
    features: [
      "دعم 6 وحدات بالتوازي (3-6kW فقط)",
      "دخل طاقة شمسية 125-250% مع 2-4 MPPTs",
      "دخل شبكة 190-460% (تيار 60A-100A)",
      "تغذية الأحمال وشحن البطارية بالتوازي",
      "مروحة ذكية فائقة الصمت",
      "ضمان قياسي 5 سنوات",
    ],
    image: "/products/sinexcel-offgrid-1ph-lv.jpg",
    accent: "from-brand-blue to-cyan-600",
    order: 5,
  },
  {
    id: "sinexcel-osol-sou-g2",
    categoryId: "inverters",
    name: "Sinexcel iSUNA — O-SOL & SOU-G2 Series (1.5-6kW)",
    brand: "Sinexcel",
    description: "انفرتر هجين خارج الشبكة أحادي الطور بجهد منخفض، سلسلة O-SOL و SOU-G2، يدعم سعات من 1.5 إلى 6 كيلوواط، بحجم مصغر وتبريد ذكي فائق الصمت ودعم OTA وتطبيق للمراقبة.",
    features: [
      "دخل مولد >200% ودخل شبكة >200%",
      "قدرة تحميل زائد 130-260%",
      "دعم حتى 6 وحدات بالتوازي",
      "حجم مصغر وتبريد ذكي فائق الصمت",
      "دعم تحديث OTA ومراقبة عبر التطبيق",
    ],
    image: "/products/sinexcel-osol-sou-g2.jpg",
    accent: "from-cyan-600 to-brand-blue",
    order: 6,
  },
  {
    id: "sunwoda-batteries",
    categoryId: "batteries",
    name: "بطاريات Sunwoda",
    brand: "Sunwoda",
    description: "حلول تخزين طاقة متطورة من شركة سنودا العالمية، بقدرات متنوعة وتصميمات مرنة.",
    features: [
      "بطاريات ليثيوم أيون عالية السعة",
      "تصميم قابل للتوسعة والتركيب",
      "عمر افتراضي طويل يصل إلى 10 سنوات",
      "أنظمة إدارة ذكية للبطارية (BMS)",
    ],
    image: "/products/battery.svg",
    accent: "from-emerald-400 to-teal-600",
    order: 3,
  },
];

export const DEFAULT_PROJECTS: Project[] = [
  {
    id: "hubail-water",
    title: "مشروع مياه حبيل الريدة",
    type: "نظام هجين PV-Diesel",
    capacity: "409.2",
    unit: "كيلوواط",
    location: "اليمن",
    description: "نظام طاقة شمسية PV-Diesel (هجين) بقدرة 409.2 كيلوواط باستخدام ألواح AE Solar، لتشغيل نظام ضخ مياه مستدام يخدم المجتمع المحلي بأكمله.",
    image: "/projects/water.jpg",
    accent: "from-emerald-500 via-brand-green to-brand-blue",
    date: "2024",
    order: 1,
  },
  {
    id: "sanaa-commercial",
    title: "محطة تجارية – صنعاء",
    type: "نظام هجين PV-Diesel",
    capacity: "316.8",
    unit: "كيلوواط",
    location: "صنعاء",
    description: "تركيب نظام طاقة شمسية PV-Diesel (هجين) متكامل بقدرة 316.8 كيلوواط لمحطة تجارية كبرى في العاصمة صنعاء.",
    image: "/projects/commercial.jpg",
    accent: "from-brand-blue to-emerald-500",
    date: "2024",
    order: 2,
  },
  {
    id: "mall-project",
    title: "مركز تجاري (مول)",
    type: "نظام هجين مع تخزين",
    capacity: "28.4",
    unit: "كيلوواط",
    location: "اليمن",
    description: "نظام شمسي هجين بقدرة 28.4 كيلوواط مع بطاريات ليثيوم لتشغيل مركز تجاري كبير، مع تخزين طاقة للاستخدام الليلي.",
    image: "/projects/mall.jpg",
    accent: "from-teal-500 to-brand-blue",
    date: "2023",
    order: 3,
  },
];

```
`src\lib\store.ts`:

```ts
"use client";

import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { Category, Product, Project } from "./types";
import { DEFAULT_CATEGORIES, DEFAULT_PRODUCTS, DEFAULT_PROJECTS } from "./seed-data";

const ADMIN_PASSWORD = process.env.NEXT_PUBLIC_ADMIN_PASSWORD || "admin123";

interface StoreState {
  isAdmin: boolean;
  login: (password: string) => boolean;
  logout: () => void;

  categories: Category[];
  products: Product[];
  projects: Project[];

  addCategory: (cat: Omit<Category, "id" | "order">) => void;
  updateCategory: (id: string, cat: Partial<Category>) => void;
  deleteCategory: (id: string) => void;

  addProduct: (prod: Omit<Product, "id" | "order">) => void;
  updateProduct: (id: string, prod: Partial<Product>) => void;
  deleteProduct: (id: string) => void;

  addProject: (proj: Omit<Project, "id" | "order">) => void;
  updateProject: (id: string, proj: Partial<Project>) => void;
  deleteProject: (id: string) => void;

  resetToDefaults: () => void;
}

function genId(prefix: string): string {
  return `${prefix}-${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 7)}`;
}

export const useStore = create<StoreState>()(
  persist(
    (set, get) => ({
      isAdmin: false,
      login: (password) => {
        if (password === ADMIN_PASSWORD) {
          set({ isAdmin: true });
          return true;
        }
        return false;
      },
      logout: () => set({ isAdmin: false }),

      categories: DEFAULT_CATEGORIES,
      products: DEFAULT_PRODUCTS,
      projects: DEFAULT_PROJECTS,

      addCategory: (cat) =>
        set((s) => ({
          categories: [...s.categories, { ...cat, id: genId("cat"), order: s.categories.length + 1 }],
        })),
      updateCategory: (id, cat) =>
        set((s) => ({
          categories: s.categories.map((c) => (c.id === id ? { ...c, ...cat } : c)),
        })),
      deleteCategory: (id) =>
        set((s) => ({
          categories: s.categories.filter((c) => c.id !== id),
          products: s.products.filter((p) => p.categoryId !== id),
        })),

      addProduct: (prod) =>
        set((s) => ({
          products: [...s.products, { ...prod, id: genId("prod"), order: s.products.length + 1 }],
        })),
      updateProduct: (id, prod) =>
        set((s) => ({
          products: s.products.map((p) => (p.id === id ? { ...p, ...prod } : p)),
        })),
      deleteProduct: (id) =>
        set((s) => ({
          products: s.products.filter((p) => p.id !== id),
        })),

      addProject: (proj) =>
        set((s) => ({
          projects: [...s.projects, { ...proj, id: genId("proj"), order: s.projects.length + 1 }],
        })),
      updateProject: (id, proj) =>
        set((s) => ({
          projects: s.projects.map((p) => (p.id === id ? { ...p, ...proj } : p)),
        })),
      deleteProject: (id) =>
        set((s) => ({
          projects: s.projects.filter((p) => p.id !== id),
        })),

      resetToDefaults: () =>
        set({
          categories: DEFAULT_CATEGORIES,
          products: DEFAULT_PRODUCTS,
          projects: DEFAULT_PROJECTS,
        }),
    }),
    {
      name: "asr-al-shams-store",
      version: 6,
      partialize: (s) => ({
        isAdmin: s.isAdmin,
        categories: s.categories,
        products: s.products,
        projects: s.projects,
      }),
      onRehydrateStorage: () => (state) => {
        if (!state) return;
        if (!state.categories || state.categories.length === 0) state.categories = DEFAULT_CATEGORIES;
        if (!state.products || state.products.length === 0) state.products = DEFAULT_PRODUCTS;
        if (!state.projects || state.projects.length === 0) state.projects = DEFAULT_PROJECTS;
      },
      migrate: (persistedState: any, version: number) => {
        if (version < 6) {
          return {
            ...persistedState,
            categories: DEFAULT_CATEGORIES,
            products: DEFAULT_PRODUCTS,
            projects: DEFAULT_PROJECTS,
          };
        }
        return persistedState;
      },
    }
  )
);

```
`src\lib\types.ts`:

```ts
export interface Category {
  id: string;
  name: string;
  description: string;
  icon: string;
  image: string;
  order: number;
}

export interface Product {
  id: string;
  categoryId: string;
  name: string;
  brand: string;
  description: string;
  features: string[];
  image: string;
  accent: string;
  order: number;
}

export interface Project {
  id: string;
  title: string;
  type: string;
  capacity: string;
  unit: string;
  location: string;
  description: string;
  image: string;
  accent: string;
  date: string;
  order: number;
}

```
`src\lib\utils.ts`:

```ts
import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

```
`tailwind.config.ts`:

```ts
import type { Config } from "tailwindcss";
import tailwindcssAnimate from "tailwindcss-animate";

const config: Config = {
    darkMode: "class",
    content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
  		colors: {
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			}
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		}
  	}
  },
  plugins: [tailwindcssAnimate],
};
export default config;

```
`tsconfig.json`:

```json
{
  "compilerOptions": {
    "target": "ES2017",
    "lib": [
      "dom",
      "dom.iterable",
      "esnext"
    ],
    "allowJs": true,
    "skipLibCheck": true,
    "strict": true,
    "noEmit": true,
    "noImplicitAny": false,
    "esModuleInterop": true,
    "module": "esnext",
    "moduleResolution": "bundler",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "react-jsx",
    "incremental": true,
    "plugins": [
      {
        "name": "next"
      }
    ],
    "paths": {
      "@/*": [
        "./src/*"
      ]
    }
  },
  "include": [
    "next-env.d.ts",
    "**/*.ts",
    "**/*.tsx",
    ".next/types/**/*.ts",
    ".next/dev/types/**/*.ts"
  ],
  "exclude": [
    "node_modules"
  ]
}

```