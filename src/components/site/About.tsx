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
