"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { 
  Sun, Zap, BatteryCharging, Cable, 
  ArrowLeft, Package, Sparkles 
} from "lucide-react";
import { PageLayout } from "@/components/site/PageLayout";
import { Reveal, StaggerContainer, StaggerItem } from "@/components/site/Reveal";
import { useStore } from "@/lib/store";
import { cn } from "@/lib/utils";

const ICONS: Record<string, any> = {
  Sun, Zap, BatteryCharging, Cable,
};

const CATEGORY_STYLES: Record<string, { bg: string, ring: string, text: string }> = {
  panels: { bg: "from-emerald-50 to-teal-100/50", ring: "group-hover:ring-emerald-200", text: "text-emerald-700" },
  inverters: { bg: "from-blue-50 to-indigo-100/50", ring: "group-hover:ring-blue-200", text: "text-blue-700" },
  batteries: { bg: "from-teal-50 to-emerald-100/50", ring: "group-hover:ring-teal-200", text: "text-teal-700" },
  cables: { bg: "from-cyan-50 to-blue-100/50", ring: "group-hover:ring-cyan-200", text: "text-cyan-700" },
};

export default function ProductsPage() {
  const products = useStore((s) => s.products);
  const categories = useStore((s) => s.categories);

  return (
    <PageLayout>
      {/* 1. Light & Airy Mobile-First Hero */}
      <section className="relative pt-32 pb-16 sm:pt-40 sm:pb-24 overflow-hidden bg-slate-50">
        {/* Soft Background Accents */}
        <div className="absolute top-0 right-0 w-[30rem] md:w-[50rem] h-[30rem] md:h-[50rem] rounded-full bg-brand-green/5 blur-[100px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[20rem] md:w-[40rem] h-[20rem] md:h-[40rem] rounded-full bg-brand-blue/5 blur-[100px] pointer-events-none" />
        <div className="absolute inset-0 bg-grid opacity-30 pointer-events-none" />

        <div className="container mx-auto px-4 relative z-10 text-center">
          <Reveal>
            <div className="inline-flex items-center gap-2 rounded-full bg-white border border-slate-200 px-5 py-2 text-xs md:text-sm text-brand-green-dark mb-6 shadow-sm">
              <Sparkles className="w-4 h-4" />
              <span className="font-bold tracking-wide">منتجاتنا المبتكرة</span>
            </div>
            
            <h1 className="font-heading font-extrabold text-4xl sm:text-6xl md:text-7xl text-slate-900 mb-6 tracking-tight leading-[1.1]">
              مستقبل <span className="text-transparent bg-clip-text bg-gradient-to-l from-brand-green to-brand-blue">الطاقة النظيفة</span>
            </h1>
            
            <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed px-4">
              نقدم لك أحدث تقنيات الطاقة الشمسية من العلامات التجارية الرائدة عالمياً. صممت لتلبي احتياجات المنازل والشركات بأعلى كفاءة.
            </p>
          </Reveal>
        </div>
      </section>

      {/* 2. Soft Bento Grid - Mobile Optimized */}
      <section className="py-12 sm:py-20 relative bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8" stagger={0.1}>
            {categories.map((cat) => {
              const Icon = ICONS[cat.icon] ?? Package;
              const categoryProducts = products.filter((p) => p.categoryId === cat.id);
              const count = categoryProducts.length;
              const previewProduct = categoryProducts.find(p => p.image);
              
              const style = CATEGORY_STYLES[cat.id] || { 
                bg: "from-slate-50 to-slate-100", 
                ring: "group-hover:ring-slate-200",
                text: "text-slate-700" 
              };

              return (
                <StaggerItem key={cat.id}>
                  <Link
                    href={`/products/category/${cat.id}`}
                    className={cn(
                      "group flex flex-col w-full h-full bg-white rounded-[2rem] border border-slate-200 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 ring-4 ring-transparent focus-visible:outline-none",
                      style.ring
                    )}
                  >
                    {/* Image / Visual Header */}
                    <div className={cn("relative w-full aspect-[4/3] sm:aspect-[16/10] overflow-hidden bg-gradient-to-br", style.bg)}>
                      {/* Decorative internal blob */}
                      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-white/40 blur-3xl rounded-full" />
                      
                      {/* Category Badge */}
                      <div className="absolute top-4 sm:top-6 right-4 sm:right-6 bg-white/80 backdrop-blur-md rounded-full px-4 py-2 flex items-center gap-2 shadow-sm border border-white">
                        <Icon className={cn("w-4 h-4", style.text)} />
                        <span className="text-xs font-bold text-slate-800">{count} منتجات</span>
                      </div>

                      {/* Floating Product Preview */}
                      {previewProduct ? (
                        <div className="absolute inset-0 flex items-center justify-center p-8 sm:p-12">
                          <motion.img 
                            src={previewProduct.image} 
                            alt="" 
                            className="w-full h-full object-contain filter drop-shadow-xl group-hover:scale-110 group-hover:-translate-y-2 transition-all duration-700 ease-out"
                          />
                        </div>
                      ) : (
                        <div className="absolute inset-0 flex items-center justify-center">
                          <Icon className="w-24 h-24 text-slate-300 group-hover:scale-110 group-hover:-translate-y-2 transition-transform duration-700" strokeWidth={1} />
                        </div>
                      )}
                    </div>

                    {/* Content Footer */}
                    <div className="flex flex-col flex-1 p-6 sm:p-8">
                      <h3 className="font-heading font-extrabold text-2xl sm:text-3xl text-slate-900 mb-3 group-hover:text-brand-green-dark transition-colors">
                        {cat.name}
                      </h3>
                      
                      <p className="text-slate-600 text-sm sm:text-base leading-relaxed line-clamp-2 mb-6">
                        {cat.description}
                      </p>
                      
                      <div className="mt-auto inline-flex items-center gap-2 text-sm font-bold text-brand-green-dark group-hover:text-brand-green transition-colors">
                        <span>استعرض الفئة</span>
                        <ArrowLeft className="w-4 h-4 transform group-hover:-translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </Link>
                </StaggerItem>
              );
            })}
          </StaggerContainer>

        </div>
      </section>

      {/* 3. Light CTA Section */}
      <section className="py-20 relative overflow-hidden bg-slate-50 border-t border-slate-200">
        <div className="container mx-auto px-4 relative z-10 text-center">
          <Reveal>
            <div className="w-16 h-16 mx-auto rounded-2xl bg-white border border-slate-200 flex items-center justify-center mb-6 shadow-sm">
              <Package className="w-8 h-8 text-brand-green" />
            </div>
            <h2 className="font-heading font-extrabold text-2xl sm:text-4xl text-slate-900 mb-4">
              لم تجد المواصفات المطلوبة؟
            </h2>
            <p className="text-slate-600 max-w-xl mx-auto mb-8 text-sm sm:text-base">
              نوفر حلولاً مخصصة لتلبية المتطلبات التقنية الدقيقة لمشاريعك. تواصل معنا للحصول على عروض أسعار للطلبيات الخاصة.
            </p>
            <Link 
              href="/contact" 
              className="inline-flex items-center gap-3 rounded-full bg-slate-900 hover:bg-brand-green px-8 py-3.5 text-sm sm:text-base font-bold text-white shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              تواصل مع المبيعات
              <ArrowLeft className="w-4 h-4" />
            </Link>
          </Reveal>
        </div>
      </section>
    </PageLayout>
  );
}