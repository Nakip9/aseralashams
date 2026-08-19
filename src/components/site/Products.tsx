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
