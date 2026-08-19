"use client";

import Link from "next/link";
import { 
  ArrowLeft, CheckCircle2, Target, Eye, Heart, 
  Award, Users, Handshake, Headphones, Sparkles, 
  ChevronDown, Building2, Leaf
} from "lucide-react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { PageLayout } from "@/components/site/PageLayout";
import { Reveal, StaggerContainer, StaggerItem } from "@/components/site/Reveal";
import { CountUp } from "@/components/site/CountUp";
import { COMPANY, STATS, WHY_US, BRANDS } from "@/components/site/data";

const VALUES = [
  { icon: Target, title: "رسالتنا", desc: "توفير حلول طاقة شمسية موثوقة ومستدامة تساهم في بناء مستقبل طاقي أفضل لليمن والمنطقة." },
  { icon: Eye, title: "رؤيتنا", desc: "أن نكون الشركة الرائدة في مجال الطاقة المتجددة في اليمن، والشريك الأول لكل من يبحث عن طاقة نظيفة." },
  { icon: Heart, title: "قيمنا", desc: "الجودة، الشفافية، الالتزام، الابتكار، والمسؤولية البيئية — نلتزم بها في كل مشروع." },
];

const MILESTONES = [
  { year: "2020", ar: "تأسيس الشركة وانطلاق الرؤية", desc: "بدأنا رحلتنا بهدف توفير حلول طاقة بديلة ومستدامة للسوق اليمني." },
  { year: "2021", ar: "الشراكة الاستراتيجية مع AE Solar", desc: "أصبحنا الوكيل المعتمد لثالث أكبر مصنع للألواح الشمسية في ألمانيا." },
  { year: "2022", ar: "أول مشروع تجاري ضخم (100+ kW)", desc: "تنفيذ وتدشين أول محطة تجارية كبرى تعتمد بالكامل على الطاقة المتجددة." },
  { year: "2023", ar: "توسع الوكالات لتشمل 4 علامات عالمية", desc: "ضم علامات Sinexcel و Sunwoda و TOP CABLE لقائمة شركائنا المعتمدين." },
  { year: "2024", ar: "إنجاز أكبر مشروع بسعة 409 kW", desc: "تنفيذ أضخم مشاريعنا حتى الآن، مما يعزز مكانتنا كرواد في القطاع." },
];

const WHY_ICONS: Record<string, any> = { Award, Users, Handshake, Headphones };

const ABOUT_SLIDES = [
  {
    bg: "/hero/hero-bg-1.jpg",
    badge: "رواد الطاقة المتجددة في اليمن",
    titleLine1: "نبني مستقبلاً مشرقاً",
    titleLine2: "بطاقة لا تنضب",
    desc: "نفخر بكوننا شريكاً موثوقاً في استيراد وتوريد وتركيب وتشغيل وصيانة أنظمة الطاقة الشمسية بأعلى المعايير العالمية.",
  },
  {
    bg: "/hero/hero-bg-2.jpg",
    badge: "خبرة وتميز",
    titleLine1: "فريق هندسي متخصص",
    titleLine2: "لحلول مستدامة",
    desc: "من التخطيط ودراسة الجدوى إلى التركيب والصيانة، نقدم لك خبرة تراكمية تضمن كفاءة مشروعك لسنوات طويلة.",
  },
  {
    bg: "/projects/commercial.jpg",
    badge: "شراكات استراتيجية",
    titleLine1: "نستقطب أفضل التقنيات",
    titleLine2: "من العالم إليك",
    desc: "نعمل مع كبرى الشركات العالمية لضمان توفير أحدث الألواح والمحولات والبطاريات بضمانات حقيقية.",
  }
];

// Reusable Typewriter Component
const TypewriterText = ({ text, delay = 0, className = "" }: { text: string, delay?: number, className?: string }) => {
  const characters = Array.from(text);
  return (
    <motion.span
      initial="hidden"
      animate="visible"
      variants={{
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: { staggerChildren: 0.03, delayChildren: delay },
        },
      }}
      className={className}
    >
      {characters.map((char, index) => (
        <motion.span key={index} variants={{ hidden: { opacity: 0, y: 5 }, visible: { opacity: 1, y: 0 } }}>
          {char}
        </motion.span>
      ))}
    </motion.span>
  );
};

export default function AboutPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  
  const [activeSlide, setActiveSlide] = useState(0);

  // Auto-advance carousel
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % ABOUT_SLIDES.length);
    }, 7000); // 7 seconds per slide to allow typewriter to finish
    return () => clearInterval(timer);
  }, []);

  return (
    <PageLayout>
      {/* 1. Cinematic Typewriter Carousel Hero */}
      <section ref={containerRef} className="relative h-[85vh] min-h-[600px] flex items-center justify-center overflow-hidden bg-slate-950">
        
        {/* Carousel Backgrounds */}
        <AnimatePresence initial={false}>
          <motion.div
            key={activeSlide}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1, y: y.get() }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
            className="absolute inset-0 w-full h-full"
          >
            <img src={ABOUT_SLIDES[activeSlide].bg} alt="Asr Al-Shams" className="w-full h-full object-cover opacity-50" />
          </motion.div>
        </AnimatePresence>
        
        {/* Advanced Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/80 via-slate-950/40 to-background" />
        <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.03] mix-blend-overlay" />
        
        <div className="container mx-auto px-4 relative z-10 pt-20">
          <div className="max-w-4xl mx-auto text-center h-48 sm:h-56 flex flex-col justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={`content-${activeSlide}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
              >
                <div className="inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 px-5 py-2 text-sm text-white mb-6 shadow-2xl">
                  <Sparkles className="w-4 h-4 text-brand-green-lighter" />
                  <TypewriterText text={ABOUT_SLIDES[activeSlide].badge} delay={0.2} />
                </div>

                <h1 className="font-heading font-extrabold text-4xl sm:text-6xl lg:text-7xl text-white leading-[1.2] mb-6 drop-shadow-2xl">
                  <TypewriterText text={ABOUT_SLIDES[activeSlide].titleLine1} delay={0.5} />
                  <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-l from-brand-green-light via-brand-green to-brand-blue-lighter">
                    <TypewriterText text={ABOUT_SLIDES[activeSlide].titleLine2} delay={1.2} />
                  </span>
                </h1>

                <motion.p 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 2.2, duration: 0.8 }} // Fades in after typing is mostly done
                  className="text-lg sm:text-xl text-slate-300 leading-relaxed max-w-2xl mx-auto drop-shadow-md"
                >
                  {ABOUT_SLIDES[activeSlide].desc}
                </motion.p>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Carousel Indicators */}
        <div className="absolute bottom-24 left-1/2 -translate-x-1/2 flex items-center gap-3 z-20">
          {ABOUT_SLIDES.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setActiveSlide(idx)}
              className={`transition-all duration-500 rounded-full h-1.5 ${
                idx === activeSlide ? "w-8 bg-brand-green shadow-[0_0_10px_#398B30]" : "w-2 bg-white/30 hover:bg-white/50"
              }`}
              aria-label={`الذهاب إلى الشريحة ${idx + 1}`}
            />
          ))}
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 3, duration: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/50"
        >
          <span className="text-xs uppercase tracking-widest font-mono">اكتشف المزيد</span>
          <ChevronDown className="w-5 h-5 animate-bounce text-brand-green-lighter" />
        </motion.div>
      </section>

      {/* 2. The Story (Sticky Scroll Layout) */}
      <section className="py-24 sm:py-32 relative overflow-hidden bg-background">
        <div className="absolute top-0 right-0 w-[40rem] h-[40rem] rounded-full bg-brand-green/5 blur-[150px] pointer-events-none" />
        
        <div className="container mx-auto px-4 relative">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-start">
            
            {/* Sticky Heading */}
            <div className="lg:col-span-5 lg:sticky lg:top-32">
              <Reveal>
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-brand-green to-brand-blue flex items-center justify-center shadow-xl mb-6">
                  <Building2 className="w-8 h-8 text-white" />
                </div>
                <h2 className="font-heading font-extrabold text-4xl sm:text-5xl mb-6 text-slate-900 leading-tight">
                  قصة <span className="text-brand-green-dark">{COMPANY.name}</span>
                </h2>
                <div className="flex flex-wrap gap-2 mt-8">
                  {["N-Type / HJT / ABC", "On-Grid / Off-Grid", "Lithium-Ion", "TOP CABLE"].map((tag) => (
                    <span key={tag} className="inline-flex items-center gap-1.5 rounded-full bg-slate-100 border border-slate-200 px-4 py-2 text-xs text-slate-700 font-mono shadow-sm">
                      <CheckCircle2 className="w-3.5 h-3.5 text-brand-green" />{tag}
                    </span>
                  ))}
                </div>
              </Reveal>
            </div>

            {/* Scrolling Content & Stats */}
            <div className="lg:col-span-7 space-y-12">
              <Reveal delay={0.2}>
                <div className="prose prose-lg prose-slate rtl:prose-reverse max-w-none text-slate-600 leading-loose text-justify">
                  <p className="text-xl font-medium text-slate-800 mb-6">{COMPANY.about.short}</p>
                  <p>{COMPANY.about.long}</p>
                </div>
              </Reveal>

              <StaggerContainer className="grid grid-cols-2 gap-4 sm:gap-6 pt-8 border-t border-slate-100" stagger={0.1}>
                {STATS.map((s, i) => (
                  <StaggerItem key={i}>
                    <div className="glass-strong rounded-3xl p-6 sm:p-8 text-center border border-slate-200 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                      <div className="font-heading font-extrabold text-4xl sm:text-5xl text-gradient-solar mb-3">
                        <CountUp end={s.value} suffix={s.suffix} duration={2.5} />
                      </div>
                      <div className="text-sm sm:text-base font-medium text-slate-600">{s.label}</div>
                    </div>
                  </StaggerItem>
                ))}
              </StaggerContainer>
            </div>

          </div>
        </div>
      </section>

      {/* 3. Mission / Vision / Values (Floating 3D Cards) */}
      <section className="py-24 sm:py-32 relative overflow-hidden bg-slate-950 text-white">
        <div className="absolute inset-0 bg-aurora opacity-20 pointer-events-none" />
        
        <div className="container mx-auto px-4 relative z-10">
          <Reveal className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl">المحركات الأساسية لنجاحنا</h2>
          </Reveal>
          
          <StaggerContainer className="grid md:grid-cols-3 gap-6" stagger={0.15}>
            {VALUES.map((v, i) => {
              const Icon = v.icon;
              return (
                <StaggerItem key={i}>
                  <div className="relative group h-full">
                    <div className="absolute inset-0 bg-gradient-to-br from-brand-green/20 to-brand-blue/20 rounded-3xl blur-xl group-hover:opacity-100 opacity-0 transition-opacity duration-500" />
                    <div className="relative h-full bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-colors duration-300">
                      <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-brand-green to-brand-blue flex items-center justify-center shadow-lg mb-6 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500">
                        <Icon className="w-7 h-7 text-white" strokeWidth={2} />
                      </div>
                      <h3 className="font-heading font-bold text-2xl mb-4 text-white">{v.title}</h3>
                      <p className="text-slate-300 text-sm sm:text-base leading-relaxed">{v.desc}</p>
                    </div>
                  </div>
                </StaggerItem>
              );
            })}
          </StaggerContainer>
        </div>
      </section>

      {/* 4. Animated Vertical Timeline */}
      <section className="py-24 sm:py-32 relative overflow-hidden bg-slate-50">
        <div className="container mx-auto px-4 relative">
          <Reveal className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-slate-900">رحلة التطور والنمو</h2>
            <p className="text-slate-600 mt-4">محطات هامة شكلت مسيرتنا في قطاع الطاقة المتجددة.</p>
          </Reveal>

          <div className="max-w-4xl mx-auto relative">
            {/* Center Line for Desktop, Right Line for Mobile */}
            <div className="absolute right-8 md:right-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-brand-green/10 via-brand-blue/30 to-brand-green/10 md:translate-x-1/2 rounded-full" />

            <div className="space-y-12">
              {MILESTONES.map((m, i) => {
                const isEven = i % 2 === 0;
                return (
                  <Reveal key={i} delay={i * 0.1}>
                    <div className={`relative flex flex-col md:flex-row items-center ${isEven ? 'md:flex-row-reverse' : ''}`}>
                      
                      {/* Timeline Node */}
                      <div className="absolute right-8 md:right-1/2 w-12 h-12 md:translate-x-1/2 translate-x-1/2 bg-white rounded-full border-4 border-brand-green flex items-center justify-center shadow-xl z-10">
                        <Leaf className="w-5 h-5 text-brand-green-dark" />
                      </div>

                      {/* Content Box */}
                      <div className={`w-full md:w-1/2 pr-20 pl-4 md:px-12 ${isEven ? 'md:text-right' : 'md:text-left'}`}>
                        <div className="glass-strong p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                          <span className="inline-block px-4 py-1 rounded-full bg-brand-green/10 text-brand-green-dark font-mono font-bold text-lg mb-4">
                            {m.year}
                          </span>
                          <h3 className="font-heading font-bold text-xl sm:text-2xl text-slate-900 mb-3">{m.ar}</h3>
                          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">{m.desc}</p>
                        </div>
                      </div>

                    </div>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* 5. Why us */}
      <section className="py-24 sm:py-32 relative overflow-hidden bg-white">
        <div className="container mx-auto px-4 relative">
          <Reveal className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl mb-4">لماذا تختار عصر الشمس؟</h2>
          </Reveal>
          
          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6" stagger={0.1}>
            {WHY_US.map((item, i) => {
              const Icon = WHY_ICONS[item.icon] ?? Award;
              return (
                <StaggerItem key={i}>
                  <div className="group bento-card p-8 h-full text-center border border-slate-100 hover:border-brand-green/30">
                    <div className="relative inline-flex mb-6">
                      <div className="absolute inset-0 rounded-2xl bg-brand-green/20 blur-xl group-hover:bg-brand-green/40 transition-colors duration-500" />
                      <div className="relative w-20 h-20 rounded-2xl bg-gradient-to-br from-brand-green to-brand-blue flex items-center justify-center shadow-lg group-hover:rotate-6 transition-transform duration-500">
                        <Icon className="w-10 h-10 text-white" strokeWidth={2} />
                      </div>
                    </div>
                    <h3 className="font-heading font-bold text-xl mb-3 text-slate-900">{item.title}</h3>
                    <p className="text-slate-600 text-sm leading-relaxed">{item.description}</p>
                  </div>
                </StaggerItem>
              );
            })}
          </StaggerContainer>
        </div>
      </section>

      {/* 6. Agencies */}
      <section className="py-24 sm:py-32 relative overflow-hidden bg-slate-50">
        <div className="container mx-auto px-4 relative">
          <Reveal className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl mb-4">شركاؤنا العالميون</h2>
            <p className="text-slate-600">نعمل مع نخبة من العلامات التجارية لضمان أعلى معايير الجودة.</p>
          </Reveal>
          
          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6" stagger={0.1}>
            {BRANDS.map((brand, i) => (
              <StaggerItem key={i}>
                <div className="glass-strong p-8 h-full rounded-3xl border border-slate-200 flex flex-col items-center justify-center text-center hover:shadow-xl transition-all duration-300">
                  <div className="h-20 flex items-center justify-center mb-6">
                    <img src={brand.logo} alt={brand.name} className="max-h-full max-w-full object-contain filter grayscale hover:grayscale-0 transition-all duration-500" />
                  </div>
                  <h3 className="font-heading font-bold text-xl text-slate-900 mb-2">{brand.name}</h3>
                  <p className="text-xs text-brand-green-dark font-mono bg-brand-green/10 px-3 py-1 rounded-full mb-4">{brand.role}</p>
                  <p className="text-slate-600 text-sm leading-relaxed">{brand.description}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* 7. CTA */}
      <section className="py-24 relative overflow-hidden">
        <div className="container mx-auto px-4 relative">
          <Reveal>
            <div className="relative bg-slate-900 rounded-[3rem] p-10 sm:p-16 overflow-hidden text-center shadow-2xl">
              <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-brand-green/30 blur-3xl animate-pulse-glow" />
              <div className="absolute -bottom-32 -left-32 w-96 h-96 rounded-full bg-brand-blue/30 blur-3xl animate-pulse-glow" />
              
              <div className="relative z-10">
                <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-white mb-4">لنبني نجاحك القادم معاً</h2>
                <p className="text-slate-300 max-w-2xl mx-auto mb-10 text-lg">
                  اكتشف كيف يمكن لحلولنا في الطاقة الشمسية أن تساعدك في تخفيض التكاليف وتحقيق الاستدامة التشغيلية.
                </p>
                <Link href="/contact" className="inline-flex items-center gap-3 rounded-full bg-brand-green hover:bg-brand-green-light px-8 py-4 text-base font-bold text-white shadow-xl hover:scale-105 transition-all duration-300">
                  اطلب استشارة مجانية
                  <ArrowLeft className="w-5 h-5" />
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </PageLayout>
  );
}