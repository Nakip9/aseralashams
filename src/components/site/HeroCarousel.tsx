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
