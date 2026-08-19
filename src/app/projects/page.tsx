"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { MapPin, Zap, ArrowLeft, Calendar, Briefcase, TrendingUp, Sparkles } from "lucide-react";
import { PageLayout } from "@/components/site/PageLayout";
import { Reveal } from "@/components/site/Reveal";
import { CountUp } from "@/components/site/CountUp";
import { useStore } from "@/lib/store";
import type { Project } from "@/lib/types";
import { cn } from "@/lib/utils";

export default function ProjectsPage() {
  const projects = useStore((s) => s.projects);
  const totalCapacity = projects.reduce((sum, p) => sum + (parseFloat(p.capacity) || 0), 0);
  const maxCapacity = Math.max(...projects.map((p) => parseFloat(p.capacity) || 0), 0);

  return (
    <PageLayout>
      {/* 1. Cinematic Hero */}
      <section className="relative h-[60vh] min-h-[500px] md:h-[75vh] md:min-h-[600px] flex items-center justify-center bg-slate-950 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.05] mix-blend-overlay z-10" />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900 to-background z-0" />
        
        {/* Dynamic Abstract Meshes */}
        <motion.div 
          animate={{ scale: [1, 1.2, 1], rotate: [0, 90, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-0 right-1/4 w-[30rem] md:w-[50rem] h-[30rem] md:h-[50rem] rounded-full bg-brand-green/10 blur-[120px] pointer-events-none" 
        />
        <motion.div 
          animate={{ scale: [1, 1.5, 1], rotate: [0, -90, 0] }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-0 left-1/4 w-[20rem] md:w-[40rem] h-[20rem] md:h-[40rem] rounded-full bg-brand-blue/10 blur-[120px] pointer-events-none" 
        />
        
        <div className="container mx-auto px-4 relative z-20 text-center mt-10">
          <Reveal>
            <div className="inline-flex items-center gap-2 rounded-full bg-white/5 backdrop-blur-xl border border-white/10 px-5 py-2 text-xs md:text-sm text-brand-green-lighter mb-8 shadow-2xl">
              <Sparkles className="w-4 h-4" />
              <span>سجل الإنجازات</span>
            </div>
            
            <h1 className="font-heading font-extrabold text-5xl sm:text-6xl md:text-8xl text-white mb-6 tracking-tight drop-shadow-2xl">
              مشاريع <span className="text-transparent bg-clip-text bg-gradient-to-l from-brand-green-light to-brand-blue-lighter">تلهم المستقبل</span>
            </h1>
            
            <p className="text-base sm:text-lg md:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed drop-shadow-md">
              اكتشف كيف قمنا بتحويل التحديات إلى نجاحات مستدامة عبر مجموعة من أضخم مشاريع الطاقة المتجددة في اليمن، مصممة بأعلى المعايير الهندسية.
            </p>
          </Reveal>
        </div>
      </section>

      {/* 2. Overlapping Glass Stats Bar */}
      <div className="relative z-40 px-4 -mt-16 md:-mt-20 mb-20 md:mb-32">
        <div className="container mx-auto max-w-6xl">
          <motion.div 
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.7, ease: "easeOut" }}
            className="glass-strong rounded-[2rem] p-6 md:p-10 shadow-2xl border border-white/60"
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 divide-y md:divide-y-0 divide-slate-200/50 md:divide-x md:divide-x-reverse">
              <div className="pt-2 md:pt-0"><StatItem icon={Briefcase} value={projects.length} label="إجمالي المشاريع المنجزة" /></div>
              <div className="pt-2 md:pt-0"><StatItem icon={Zap} value={totalCapacity} suffix=" kW" label="إجمالي السعة المركبة" /></div>
              <div className="pt-6 md:pt-0"><StatItem icon={TrendingUp} value={maxCapacity} suffix=" kW" label="أكبر محطة تم تنفيذها" /></div>
              <div className="pt-6 md:pt-0"><StatItem icon={Calendar} value={4} suffix="+" label="سنوات من الخبرة والتميز" /></div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* 3. The Editorial Grid Gallery (Mobile Stacked -> Desktop Overlapping) */}
      <section className="py-8 md:py-16 relative overflow-hidden bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          {projects.length === 0 ? (
            <div className="text-center py-32 text-slate-400">
              <Briefcase className="w-24 h-24 mx-auto mb-6 opacity-20" />
              <p className="text-2xl font-medium">جاري تحديث معرض المشاريع...</p>
            </div>
          ) : (
            <div className="space-y-32 md:space-y-48">
              {projects.map((project, index) => (
                <EditorialProjectCard key={project.id} project={project} index={index} />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* 4. Deep Dark Footer CTA */}
      <section className="py-24 md:py-40 relative overflow-hidden bg-slate-950 mt-20">
        <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.05] mix-blend-overlay" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40rem] md:w-[80rem] h-[40rem] md:h-[80rem] rounded-full bg-brand-green/10 blur-[150px] pointer-events-none" />
        
        <div className="container mx-auto px-4 relative z-10 text-center">
          <Reveal>
            <div className="w-20 h-20 mx-auto rounded-full bg-gradient-to-br from-brand-green to-brand-blue flex items-center justify-center mb-8 shadow-[0_0_40px_rgba(57,139,48,0.4)]">
              <Zap className="w-10 h-10 text-white" />
            </div>
            <h2 className="font-heading font-extrabold text-4xl sm:text-5xl md:text-7xl text-white mb-8 leading-tight">
              هل أنت مستعد لتكون <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-green-lighter to-brand-blue-light">قصة نجاحنا القادمة؟</span>
            </h2>
            <Link 
              href="/contact" 
              className="inline-flex items-center gap-4 rounded-full bg-white px-10 py-5 text-lg font-bold text-slate-900 shadow-[0_0_30px_rgba(255,255,255,0.15)] hover:scale-105 hover:bg-brand-green hover:text-white hover:shadow-[0_0_60px_rgba(57,139,48,0.4)] transition-all duration-500 group"
            >
              ابدأ مشروعك الآن
              <div className="w-8 h-8 rounded-full bg-slate-100 group-hover:bg-white/20 flex items-center justify-center transition-colors">
                <ArrowLeft className="w-4 h-4" />
              </div>
            </Link>
          </Reveal>
        </div>
      </section>
    </PageLayout>
  );
}

// --- Sub-components ---

function StatItem({ icon: Icon, value, suffix = "", label }: { icon: React.ElementType, value: number, suffix?: string, label: string }) {
  return (
    <div className="flex flex-col items-center justify-center text-center px-4">
      <Icon className="w-7 h-7 text-brand-green-dark mb-4 opacity-80" />
      <div className="font-heading font-extrabold text-4xl md:text-5xl text-slate-900 tracking-tight mb-2">
        <CountUp end={value} suffix={suffix} duration={2.5} />
      </div>
      <div className="text-sm text-slate-500 font-medium">{label}</div>
    </div>
  );
}

function EditorialProjectCard({ project, index }: { project: Project; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "end start"],
  });
  
  // Parallax effects
  const yImage = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);
  
  // Logical flow in RTL: col-start-1 is the RIGHT side.
  // Even index: Image on Right (col 1-8), Text on Left (col 7-12)
  // Odd index: Text on Right (col 1-6), Image on Left (col 5-12)
  const isEven = index % 2 === 0;

  return (
    <motion.div 
      ref={cardRef}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="relative flex flex-col lg:grid lg:grid-cols-12 lg:items-center group"
    >
      
      {/* 1. IMAGE CONTAINER */}
      <div 
        className={cn(
          "relative z-10 w-full rounded-[2rem] lg:rounded-[3rem] overflow-hidden shadow-2xl bg-slate-100",
          "aspect-[4/3] lg:aspect-[16/10]",
          // Desktop Grid Placement
          isEven ? "lg:col-span-8 lg:col-start-1" : "lg:col-span-8 lg:col-start-5"
        )}
      >
        {project.image ? (
          <motion.img 
            style={{ y: yImage }}
            src={project.image} 
            alt={project.title} 
            className="absolute top-[-15%] left-0 w-full h-[130%] object-cover filter lg:grayscale-[20%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-[1.5s] ease-out" 
          />
        ) : (
          <div className={`absolute inset-0 bg-gradient-to-br ${project.accent}`} />
        )}
        
        {/* Dark overlay for mobile text readability, fades out on desktop */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent lg:opacity-0 transition-opacity duration-500" />

        {/* Capacity Badge */}
        <div className="absolute top-6 right-6 glass-strong rounded-full px-5 py-2.5 flex items-center gap-2 z-10 shadow-xl border border-white/20">
          <Zap className="w-5 h-5 text-brand-green-dark" />
          <span className="text-lg font-bold text-slate-900 ltr-nums tracking-tight">{project.capacity}</span>
          <span className="text-sm text-slate-700 font-bold">{project.unit}</span>
        </div>
      </div>

      {/* 2. TEXT CONTENT CARD */}
      <div 
        className={cn(
          "relative z-20 mx-4 md:mx-12 lg:mx-0",
          "-mt-20 md:-mt-32 lg:mt-0", // Mobile/Tablet pull-up overlap
          // Desktop Grid Placement (Intentional Overlap)
          isEven ? "lg:col-span-6 lg:col-start-7" : "lg:col-span-6 lg:col-start-1"
        )}
      >
        <div className="glass-strong rounded-[2rem] p-8 md:p-12 border border-white/60 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] backdrop-blur-2xl bg-white/95 group-hover:bg-white transition-colors duration-700">
          
          <div className="flex flex-wrap items-center gap-3 mb-6">
            <span className="inline-flex items-center rounded-full bg-slate-900 px-4 py-1.5 text-xs text-white font-bold font-mono tracking-wide">
              {project.type}
            </span>
            <span className="inline-flex items-center gap-1.5 text-xs text-slate-500 font-bold">
              <MapPin className="w-4 h-4" />
              {project.location}
            </span>
            {project.date && (
              <span className="inline-flex items-center gap-1.5 text-xs text-slate-500 font-bold ltr-nums">
                <Calendar className="w-4 h-4" />
                {project.date}
              </span>
            )}
          </div>

          <h3 className="font-heading font-extrabold text-2xl md:text-4xl text-slate-900 mb-5 leading-tight">
            {project.title}
          </h3>
          
          <p className="text-slate-600 leading-relaxed mb-8 text-base md:text-lg line-clamp-3 md:line-clamp-none">
            {project.description}
          </p>

          <Link 
            href={`/projects/${project.id}`} 
            className="inline-flex items-center justify-between w-full rounded-2xl bg-slate-50 px-6 py-4 text-sm font-bold text-slate-900 hover:bg-brand-green hover:text-white transition-colors duration-300 group/link"
          >
            <span>عرض تفاصيل المشروع</span>
            <div className="w-8 h-8 rounded-full bg-white shadow-sm flex items-center justify-center text-slate-900 group-hover/link:text-brand-green group-hover/link:-translate-x-1 transition-all">
              <ArrowLeft className="w-4 h-4" />
            </div>
          </Link>
        </div>
      </div>
      
    </motion.div> /* FIXED THE SYNTAX BUG HERE! */
  );
}