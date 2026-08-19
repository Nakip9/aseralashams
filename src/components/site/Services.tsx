"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Sun,
  Wrench,
  Lightbulb,
  Zap,
  Factory,
  Home,
  ArrowLeft,
  MousePointerClick,
  RotateCcw,
  type LucideIcon,
} from "lucide-react";
import Link from "next/link";
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
    <section id="services" className="relative py-24 sm:py-32 overflow-hidden bg-slate-50">
      {/* Premium Background Elements */}
      <div className="absolute inset-0 bg-grid opacity-10 pointer-events-none" />
      <div className="absolute top-1/4 right-0 w-[40rem] h-[40rem] rounded-full bg-brand-green/5 blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-[30rem] h-[30rem] rounded-full bg-brand-blue/5 blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <Reveal className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <span className="inline-flex items-center gap-2 rounded-full glass border border-slate-200 px-5 py-2 text-xs sm:text-sm text-brand-green-dark tracking-widest font-mono font-bold uppercase mb-5 shadow-sm">
            <Wrench className="w-4 h-4" />
            خدماتنا
          </span>
          <h2 className="font-heading font-extrabold text-3xl sm:text-5xl mb-6 text-slate-900 leading-tight">
            حلول طاقة <span className="text-transparent bg-clip-text bg-gradient-to-l from-brand-green to-brand-blue">متكاملة واحترافية</span>
          </h2>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            اضغط على أي من الخدمات أدناه لاستكشاف التفاصيل. نقدم خدمات شاملة تغطي كافة احتياجاتك في عالم الطاقة الشمسية من التركيب وحتى الصيانة.
          </p>
        </Reveal>

        <StaggerContainer
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
          stagger={0.1}
        >
          {SERVICES.map((s, i) => {
            const Icon = ICONS[s.icon] ?? Sun;
            return (
              <StaggerItem key={i} className="[perspective:1200px]">
                <FlipServiceCard Icon={Icon} title={s.title} description={s.description} />
              </StaggerItem>
            );
          })}
        </StaggerContainer>

        <Reveal delay={0.2} className="text-center mt-16 sm:mt-20">
          <Link
            href="/contact"
            className="inline-flex items-center gap-3 rounded-full bg-slate-900 hover:bg-brand-green px-8 py-4 text-sm sm:text-base font-bold text-white shadow-xl hover:shadow-brand-green/30 hover:-translate-y-1 transition-all duration-300"
          >
            <span>احصل على استشارة لمشروعك</span>
            <ArrowLeft className="w-5 h-5" />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}

function FlipServiceCard({
  Icon,
  title,
  description,
}: {
  Icon: LucideIcon;
  title: string;
  description: string;
}) {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div
      className="relative w-full h-[320px] sm:h-[340px] cursor-pointer group"
      onClick={() => setIsFlipped(!isFlipped)}
    >
      <motion.div
        className="w-full h-full relative [transform-style:preserve-3d]"
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.7, type: "spring", stiffness: 260, damping: 25 }}
      >
        {/* FRONT FACE */}
        <div className="absolute inset-0 w-full h-full [backface-visibility:hidden] bg-white rounded-[2rem] p-8 flex flex-col items-center justify-center text-center border border-slate-200 shadow-lg hover:shadow-2xl hover:border-brand-green/40 transition-all duration-300">
          <div className="relative mb-8">
            <div className="absolute inset-0 bg-brand-green/20 blur-2xl rounded-full scale-150 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative w-24 h-24 rounded-3xl bg-gradient-to-br from-slate-50 to-slate-100 border border-slate-200 flex items-center justify-center shadow-inner group-hover:scale-110 transition-transform duration-500">
              <Icon className="w-12 h-12 text-brand-green-dark" strokeWidth={1.5} />
            </div>
          </div>
          
          <h3 className="font-heading font-extrabold text-2xl mb-4 text-slate-900">
            {title}
          </h3>
          
          <div className="mt-auto inline-flex items-center gap-2 text-xs font-bold text-slate-500 bg-slate-100 px-4 py-2 rounded-full group-hover:bg-brand-green/10 group-hover:text-brand-green-dark transition-colors">
            <MousePointerClick className="w-4 h-4 animate-bounce" />
            <span>اضغط للتفاصيل</span>
          </div>
        </div>

        {/* BACK FACE */}
        <div className="absolute inset-0 w-full h-full [backface-visibility:hidden] [transform:rotateY(180deg)] rounded-[2rem] p-8 flex flex-col items-center justify-center text-center bg-gradient-to-br from-brand-green to-brand-blue shadow-2xl overflow-hidden border border-white/20">
          {/* Subtle noise overlay for texture */}
          <div className="absolute inset-0 bg-[url('/noise.png')] opacity-10 mix-blend-overlay pointer-events-none" />
          
          <div className="relative z-10 flex flex-col h-full items-center">
            <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center mb-4">
              <Icon className="w-6 h-6 text-white" strokeWidth={2} />
            </div>
            
            <h3 className="font-heading font-bold text-xl mb-4 text-white drop-shadow-md">
              {title}
            </h3>
            
            <p className="text-white/90 text-sm sm:text-base leading-relaxed mb-auto drop-shadow">
              {description}
            </p>
            
            <div className="mt-6 inline-flex items-center gap-2 text-xs font-bold text-white/80 hover:text-white px-4 py-2 rounded-full border border-white/30 hover:bg-white/10 transition-colors">
              <RotateCcw className="w-4 h-4" />
              <span>إغلاق</span>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}