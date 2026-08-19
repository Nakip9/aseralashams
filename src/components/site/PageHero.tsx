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
