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
