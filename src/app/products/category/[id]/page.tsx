"use client";

import { useParams, useRouter } from "next/navigation";
import Link from "next/link";
import {
  Sun, Zap, BatteryCharging, Cable, Lightbulb, Wrench, Factory, Home,
  CheckCircle2, ArrowLeft, ArrowUpRight, Package, ChevronLeft,
  type LucideIcon,
} from "lucide-react";
import { motion } from "framer-motion";
import { PageLayout } from "@/components/site/PageLayout";
import { Reveal, StaggerContainer, StaggerItem } from "@/components/site/Reveal";
import { useStore } from "@/lib/store";

const ICONS: Record<string, LucideIcon> = {
  Sun, Zap, BatteryCharging, Cable, Lightbulb, Wrench, Factory, Home,
};

const CATEGORY_BG: Record<string, string> = {
  panels: "/hero/hero-bg-1.jpg",
  inverters: "/hero/hero-bg-2.jpg",
  batteries: "/hero/hero-bg-1.jpg",
  cables: "/hero/hero-bg-2.jpg",
};

export default function CategoryPage() {
  const params = useParams();
  const router = useRouter();
  const categoryId = params.id as string;

  const categories = useStore((s) => s.categories);
  const products = useStore((s) => s.products);
  const category = categories.find((c) => c.id === categoryId);
  const categoryProducts = products.filter((p) => p.categoryId === categoryId);

  if (!category) {
    return (
      <PageLayout>
        <div className="min-h-[60vh] flex items-center justify-center">
          <div className="text-center">
            <Package className="w-16 h-16 mx-auto mb-4 text-slate-300" />
            <h1 className="font-heading font-bold text-2xl text-slate-700 mb-2">القسم غير موجود</h1>
            <button onClick={() => router.push("/products")} className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-brand-green to-brand-blue px-5 py-2.5 text-sm font-semibold text-white">
              <ArrowLeft className="w-4 h-4" />العودة للمنتجات
            </button>
          </div>
        </div>
      </PageLayout>
    );
  }

  const Icon = ICONS[category.icon] ?? Sun;
  const bgImage = CATEGORY_BG[categoryId] || "/hero/hero-bg-1.jpg";

  return (
    <PageLayout>
      {/* Category hero */}
      <section className="relative h-[45vh] min-h-[360px] max-h-[520px] w-full overflow-hidden flex items-end">
        <motion.div
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 8, ease: "easeOut" }}
          className="absolute inset-0"
        >
          <img src={bgImage} alt="" className="w-full h-full object-cover" />
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
              <Link href="/" className="hover:text-white transition-colors">الرئيسية</Link>
              <ChevronLeft className="w-3.5 h-3.5" />
              <Link href="/products" className="hover:text-white transition-colors">منتجاتنا</Link>
              <ChevronLeft className="w-3.5 h-3.5" />
              <span className="text-brand-green-lighter font-medium">{category.name}</span>
            </nav>

            <div className="flex items-center gap-4 mb-4">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-brand-green to-brand-blue flex items-center justify-center shadow-lg">
                <Icon className="w-8 h-8 text-white" strokeWidth={2.2} />
              </div>
              <div>
                <h1 className="font-heading font-extrabold text-3xl sm:text-5xl text-white leading-tight drop-shadow-2xl">
                  {category.name}
                </h1>
                <p className="text-sm text-white/70 mt-1 ltr-nums">{categoryProducts.length} منتج</p>
              </div>
            </div>

            <p className="text-base sm:text-lg text-slate-100/90 leading-relaxed max-w-2xl drop-shadow-lg">
              {category.description}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Products grid */}
      <section className="py-16 sm:py-24 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[30rem] h-[30rem] rounded-full bg-brand-green/5 blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[30rem] h-[30rem] rounded-full bg-brand-blue/5 blur-[120px] pointer-events-none" />

        <div className="container mx-auto px-4 relative">
          {/* Other categories — quick switch */}
          <Reveal className="mb-10">
            <div className="flex items-center gap-2 mb-3">
              <Package className="w-4 h-4 text-brand-green-dark" />
              <span className="text-sm font-medium text-slate-600">أقسام أخرى</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {categories.filter((c) => c.id !== categoryId).map((cat) => {
                const CatIcon = ICONS[cat.icon] ?? Package;
                const count = products.filter((p) => p.categoryId === cat.id).length;
                return (
                  <Link
                    key={cat.id}
                    href={`/products/category/${cat.id}`}
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full glass text-slate-600 hover:bg-brand-green/10 transition-all text-sm font-medium"
                  >
                    <CatIcon className="w-3.5 h-3.5" />
                    {cat.name}
                    <span className="text-xs text-slate-400 font-mono">({count})</span>
                  </Link>
                );
              })}
            </div>
          </Reveal>

          {categoryProducts.length === 0 ? (
            <div className="text-center py-20">
              <div className="inline-flex w-20 h-20 rounded-3xl bg-gradient-to-br from-slate-100 to-slate-200 items-center justify-center mb-5">
                <Package className="w-10 h-10 text-slate-400" />
              </div>
              <h3 className="font-heading font-bold text-xl text-slate-700 mb-2">لا توجد منتجات في هذا القسم بعد</h3>
              <p className="text-slate-500 text-sm mb-6 max-w-md mx-auto">
                يمكنك إضافة منتجات لهذا القسم من لوحة التحكم، أو استعرض منتجات الأقسام الأخرى.
              </p>
              <Link
                href="/products"
                className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-brand-green to-brand-blue px-6 py-3 text-sm font-semibold text-white shadow-lg hover:scale-105 transition-all"
              >
                <ArrowLeft className="w-4 h-4" />
                استعرض جميع المنتجات
              </Link>
            </div>
          ) : (
            <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5" stagger={0.08}>
              {categoryProducts.map((p) => (
                <StaggerItem key={p.id}>
                  <motion.article
                    whileHover={{ y: -6 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    className="group relative bento-card p-0 h-full overflow-hidden"
                  >
                    {/* Image at top — large, prominent */}
                    <div className="relative h-52 overflow-hidden bg-gradient-to-br from-slate-50 to-slate-100">
                      <div className={`absolute -top-16 -left-16 w-48 h-48 rounded-full bg-gradient-to-br ${p.accent} opacity-20 group-hover:opacity-40 blur-3xl transition-opacity duration-700`} />
                      {p.image ? (
                        <div className="absolute inset-0 flex items-center justify-center p-8">
                          <img
                            src={p.image}
                            alt={p.name}
                            className="max-w-full max-h-full object-contain group-hover:scale-110 transition-transform duration-500"
                          />
                        </div>
                      ) : (
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className={`w-24 h-24 rounded-2xl bg-gradient-to-br ${p.accent} flex items-center justify-center shadow-lg group-hover:rotate-6 transition-transform duration-500`}>
                            <Icon className="w-12 h-12 text-white" strokeWidth={2.2} />
                          </div>
                        </div>
                      )}
                      {/* Category badge on top of image */}
                      <div className="absolute top-3 right-3 glass-strong rounded-full px-3 py-1 flex items-center gap-1.5">
                        <Icon className="w-3 h-3 text-brand-green-dark" />
                        <span className="text-[10px] font-mono text-slate-700">{category.name}</span>
                      </div>
                    </div>

                    {/* Content below image */}
                    <div className="p-5">
                      <div className="text-[11px] text-brand-green-dark font-mono tracking-wider mb-1">{p.brand}</div>
                      <h3 className="font-heading font-bold text-lg mb-2 group-hover:text-brand-green-dark transition-colors">{p.name}</h3>
                      <p className="text-slate-600 text-sm leading-relaxed mb-4">{p.description}</p>
                      <ul className="space-y-1.5 mb-4">
                        {p.features.slice(0, 3).map((f) => (
                          <li key={f} className="flex items-start gap-2 text-xs text-slate-600">
                            <CheckCircle2 className="w-3.5 h-3.5 text-brand-green flex-shrink-0 mt-0.5" />
                            <span>{f}</span>
                          </li>
                        ))}
                      </ul>
                      <Link
                        href="/contact"
                        className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-green-dark hover:text-brand-green group/link"
                      >
                        عرض التفاصيل
                        <ArrowUpRight className="w-3.5 h-3.5 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                      </Link>
                    </div>
                  </motion.article>
                </StaggerItem>
              ))}
            </StaggerContainer>
          )}

          {/* CTA */}
          <Reveal className="mt-16">
            <div className="relative glass-strong rounded-3xl p-8 sm:p-12 overflow-hidden text-center">
              <div className="absolute -top-20 -right-20 w-72 h-72 rounded-full bg-brand-green/20 blur-3xl animate-pulse-glow" />
              <div className="absolute -bottom-20 -left-20 w-72 h-72 rounded-full bg-brand-blue/20 blur-3xl animate-pulse-glow" />
              <div className="relative">
                <h2 className="font-heading font-extrabold text-2xl sm:text-3xl mb-3">هل تحتاج استشارة حول {category.name}؟</h2>
                <p className="text-slate-600 max-w-xl mx-auto mb-6">فريقنا جاهز لمساعدتك في اختيار المنتج الأمثل لمشروعك.</p>
                <Link href="/contact" className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-brand-green to-brand-blue px-7 py-3.5 text-sm font-bold text-white shadow-lg hover:scale-105 transition-all">
                  اطلب عرض سعر الآن
                  <ArrowLeft className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </PageLayout>
  );
}
