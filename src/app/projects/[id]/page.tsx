"use client";

import { useParams, useRouter } from "next/navigation";
import Link from "next/link";
import { MapPin, Zap, ArrowLeft, ChevronLeft, Calendar, Briefcase, CheckCircle2, Sparkles, MessageSquare, TrendingUp } from "lucide-react";
import { PageLayout } from "@/components/site/PageLayout";
import { Reveal, StaggerContainer, StaggerItem } from "@/components/site/Reveal";
import { CountUp } from "@/components/site/CountUp";
import { useStore } from "@/lib/store";

export default function ProjectDetailPage() {
  const params = useParams();
  const router = useRouter();
  const id = params.id as string;

  const projects = useStore((s) => s.projects);
  const project = projects.find((p) => p.id === id);
  const related = projects.filter((p) => p.id !== id).slice(0, 3);

  if (!project) {
    return (
      <PageLayout>
        <div className="min-h-[60vh] flex items-center justify-center">
          <div className="text-center">
            <Briefcase className="w-16 h-16 mx-auto mb-4 text-slate-300" />
            <h1 className="font-heading font-bold text-2xl text-slate-700 mb-2">المشروع غير موجود</h1>
            <button onClick={() => router.push("/projects")} className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-brand-green to-brand-blue px-5 py-2.5 text-sm font-semibold text-white">
              <ArrowLeft className="w-4 h-4" />العودة للمشاريع
            </button>
          </div>
        </div>
      </PageLayout>
    );
  }

  return (
    <PageLayout>
      {/* Breadcrumb bar */}
      <div className="pt-24 sm:pt-28 pb-4 bg-slate-50/50 border-b border-slate-200">
        <div className="container mx-auto px-4">
          <nav className="flex items-center gap-2 text-xs text-slate-500">
            <Link href="/" className="hover:text-brand-green-dark transition-colors">الرئيسية</Link>
            <ChevronLeft className="w-3.5 h-3.5" />
            <Link href="/projects" className="hover:text-brand-green-dark transition-colors">مشاريعنا</Link>
            <ChevronLeft className="w-3.5 h-3.5" />
            <span className="text-brand-green-dark font-medium truncate">{project.title}</span>
          </nav>
        </div>
      </div>

      {/* Project hero with image */}
      <section className="relative h-[50vh] min-h-[400px] max-h-[600px] w-full overflow-hidden">
        <div className="absolute inset-0">
          {project.image ? (
            <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
          ) : (
            <div className={`absolute inset-0 bg-gradient-to-br ${project.accent}`} />
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/50 to-slate-950/20" />
        </div>

        <div className="relative h-full container mx-auto px-4 flex items-end pb-12 sm:pb-16">
          <Reveal>
            <div className="max-w-3xl">
              <div className="flex flex-wrap items-center gap-2 mb-4">
                <span className="inline-flex items-center gap-1 rounded-full bg-white/15 backdrop-blur-md border border-white/30 px-3 py-1 text-xs text-white font-mono">{project.type}</span>
                <span className="inline-flex items-center gap-1 text-xs text-white/80"><MapPin className="w-3.5 h-3.5" />{project.location}</span>
                {project.date && <span className="inline-flex items-center gap-1 text-xs text-white/80 ltr-nums"><Calendar className="w-3.5 h-3.5" />{project.date}</span>}
              </div>
              <h1 className="font-heading font-extrabold text-3xl sm:text-5xl text-white leading-tight mb-4 drop-shadow-2xl">{project.title}</h1>
              <div className="flex items-end gap-3">
                <div className="font-heading font-extrabold text-5xl sm:text-6xl text-white ltr-nums leading-none drop-shadow-lg">{project.capacity}</div>
                <div className="pb-1 text-white/90 text-sm sm:text-base">{project.unit}</div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Project details */}
      <section className="py-12 sm:py-16 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[30rem] h-[30rem] rounded-full bg-brand-green/5 blur-[120px] pointer-events-none" />

        <div className="container mx-auto px-4 relative">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main content */}
            <div className="lg:col-span-2">
              <Reveal>
                <h2 className="font-heading font-extrabold text-2xl sm:text-3xl mb-4">نظرة عامة على المشروع</h2>
                <p className="text-slate-600 text-base sm:text-lg leading-relaxed">{project.description}</p>
              </Reveal>

              {/* Project highlights */}
              <Reveal delay={0.1}>
                <div className="mt-8 pt-8 border-t border-slate-200">
                  <h3 className="font-heading font-bold text-lg mb-4">أبرز ما يميز المشروع</h3>
                  <ul className="space-y-3">
                    {[
                      "تصميم ودراسة هندسية متكاملة",
                      "تركيب احترافي بفريق متخصص",
                      "مكونات أصلية بضمان معتمد",
                      "متابعة وصيانة بعد التركيب",
                    ].map((point, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-brand-green to-brand-blue flex items-center justify-center flex-shrink-0 shadow-sm">
                          <CheckCircle2 className="w-4 h-4 text-white" />
                        </div>
                        <span className="text-slate-700 text-sm sm:text-base pt-0.5">{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            </div>

            {/* Sidebar — specs */}
            <div className="lg:col-span-1">
              <Reveal delay={0.15}>
                <div className="glass-strong rounded-2xl p-6 sticky top-24">
                  <h3 className="font-heading font-bold text-lg mb-4 pb-3 border-b border-slate-200">مواصفات المشروع</h3>
                  <dl className="space-y-4">
                    <SpecRow icon={Zap} label="السعة المركّبة" value={`${project.capacity} ${project.unit}`} />
                    <SpecRow icon={Briefcase} label="نوع النظام" value={project.type} />
                    <SpecRow icon={MapPin} label="الموقع" value={project.location} />
                    {project.date && <SpecRow icon={Calendar} label="سنة التنفيذ" value={project.date} />}
                  </dl>

                  <Link href="/contact" className="mt-6 inline-flex items-center justify-center gap-2 w-full rounded-full bg-gradient-to-r from-brand-green to-brand-blue px-5 py-3 text-sm font-semibold text-white shadow-md hover:scale-105 transition-transform">
                    <MessageSquare className="w-4 h-4" />
                    اطلب مشروعاً مماثلاً
                  </Link>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Stats banner */}
      <section className="py-12 sm:py-16 relative overflow-hidden bg-slate-50/50">
        <div className="container mx-auto px-4 relative">
          <Reveal>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              <StatCard icon={Zap} value={parseFloat(project.capacity) || 0} suffix=" kW" label="السعة" color="from-brand-blue to-indigo-500" />
              <StatCard icon={TrendingUp} value={98} suffix="%" label="الكفاءة" color="from-brand-green to-emerald-500" />
              <StatCard icon={CheckCircle2} value={30} suffix="+" label="سنوات ضمان" color="from-emerald-500 to-teal-600" />
              <StatCard icon={Calendar} value={project.date ? parseInt(project.date) : 2024} label="سنة التنفيذ" color="from-brand-green to-brand-blue" />
            </div>
          </Reveal>
        </div>
      </section>

      {/* Related projects */}
      {related.length > 0 && (
        <section className="py-12 sm:py-16 relative overflow-hidden">
          <div className="container mx-auto px-4 relative">
            <Reveal className="mb-8">
              <div className="flex items-center gap-3">
                <Sparkles className="w-5 h-5 text-brand-green-dark" />
                <h2 className="font-heading font-extrabold text-2xl sm:text-3xl">مشاريع أخرى</h2>
              </div>
            </Reveal>

            <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5" stagger={0.08}>
              {related.map((p) => (
                <StaggerItem key={p.id}>
                  <Link href={`/projects/${p.id}`} className="group relative block overflow-hidden rounded-2xl h-48 shadow-md">
                    {p.image ? (
                      <img src={p.image} alt={p.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                    ) : (
                      <div className={`absolute inset-0 bg-gradient-to-br ${p.accent}`} />
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 to-transparent" />
                    <div className="absolute top-3 right-3 glass-strong rounded-full px-3 py-1 flex items-center gap-1.5">
                      <Zap className="w-3 h-3 text-brand-green-dark" />
                      <span className="text-[10px] font-mono text-slate-700 ltr-nums">{p.capacity} {p.unit}</span>
                    </div>
                    <div className="absolute bottom-3 left-3 right-3">
                      <h3 className="font-heading font-bold text-sm text-white line-clamp-1 group-hover:text-brand-green-lighter transition-colors">{p.title}</h3>
                      <p className="text-[10px] text-white/70 flex items-center gap-1 mt-0.5"><MapPin className="w-2.5 h-2.5" />{p.location}</p>
                    </div>
                  </Link>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="py-16 relative overflow-hidden">
        <div className="container mx-auto px-4 relative">
          <Reveal>
            <div className="relative glass-strong rounded-3xl p-8 sm:p-12 overflow-hidden text-center">
              <div className="absolute -top-20 -right-20 w-72 h-72 rounded-full bg-brand-green/20 blur-3xl animate-pulse-glow" />
              <div className="absolute -bottom-20 -left-20 w-72 h-72 rounded-full bg-brand-blue/20 blur-3xl animate-pulse-glow" />
              <div className="relative">
                <div className="inline-flex w-14 h-14 rounded-2xl bg-gradient-to-br from-brand-green to-brand-blue items-center justify-center mb-4 shadow-lg">
                  <MessageSquare className="w-7 h-7 text-white" />
                </div>
                <h2 className="font-heading font-extrabold text-2xl sm:text-3xl mb-3">جاهز لبدء مشروعك؟</h2>
                <p className="text-slate-600 max-w-xl mx-auto mb-6">دعنا نساعدك في تصميم وتركيب نظام طاقة شمسية يلبي احتياجاتك.</p>
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

function SpecRow({ icon: Icon, label, value }: { icon: typeof Zap; label: string; value: string }) {
  return (
    <div className="flex items-center justify-between gap-3">
      <div className="flex items-center gap-2 text-slate-500">
        <Icon className="w-4 h-4" />
        <span className="text-xs">{label}</span>
      </div>
      <span className="text-sm font-semibold text-slate-800 text-right">{value}</span>
    </div>
  );
}

function StatCard({ icon: Icon, value, suffix, label, color }: { icon: typeof Zap; value: number; suffix?: string; label: string; color: string }) {
  return (
    <div className="bento-card p-5 text-center group">
      <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${color} flex items-center justify-center mb-3 mx-auto group-hover:scale-110 transition-transform`}>
        <Icon className="w-6 h-6 text-white" />
      </div>
      <div className="text-2xl sm:text-3xl font-heading font-extrabold text-gradient-solar">
        <CountUp end={value} suffix={suffix} duration={2} />
      </div>
      <div className="text-xs sm:text-sm text-slate-500 mt-1">{label}</div>
    </div>
  );
}
