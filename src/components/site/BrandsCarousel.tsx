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
