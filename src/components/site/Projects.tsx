"use client";

import { MapPin, Zap, ArrowLeft } from "lucide-react";
import Link from "next/link";
import { useStore } from "@/lib/store";
import { Reveal } from "./Reveal";
import type { Project } from "@/lib/types";

export function Projects() {
  const projects = useStore((s) => s.projects);

  return (
    <section id="projects" className="relative py-24 sm:py-32 overflow-hidden">
      <div className="absolute top-1/4 left-0 w-[40rem] h-[40rem] rounded-full bg-brand-blue/8 blur-[140px] pointer-events-none" />

      <div className="container mx-auto px-4 relative">
        <Reveal className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-xs sm:text-sm text-brand-green-dark tracking-widest font-mono uppercase mb-3">
            مشاريعنا
          </span>
          <h2 className="font-heading font-extrabold text-3xl sm:text-5xl mb-5">
            <span className="text-foreground">مشاريع </span>
            <span className="text-gradient-solar">نفخر بتنفيذها</span>
            <span className="text-foreground"> في اليمن</span>
          </h2>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            من محطات تجارية كبرى إلى مراكز تسوق وأنظمة ضخ مياه مجتمعية — مشاريع متنوعة تجسد خبرتنا في تصميم وتركيب أنظمة الطاقة الشمسية المتكاملة.
          </p>
        </Reveal>

        {/* Bento layout: large first card + 2 stacked */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 sm:gap-6">
          {projects[0] && (
            <Reveal className="lg:col-span-2 lg:row-span-2">
              <ProjectCard project={projects[0]} large />
            </Reveal>
          )}
          {projects.slice(1, 3).map((p, i) => (
            <Reveal key={p.id} delay={0.1 + i * 0.1}>
              <ProjectCard project={p} />
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.1} className="text-center mt-14">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 rounded-full glass-strong px-7 py-3.5 text-sm sm:text-base font-semibold text-foreground hover:bg-brand-green/10 transition-all group"
          >
            <span>استعرض جميع المشاريع</span>
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}

function ProjectCard({ project, large = false }: { project: Project; large?: boolean }) {
  return (
    <article
      className={`group relative overflow-hidden h-full rounded-3xl shadow-lg ${large ? "min-h-[28rem] sm:min-h-[34rem]" : "min-h-[18rem]"}`}
    >
      {/* Background image or gradient fallback */}
      {project.image ? (
        <img
          src={project.image}
          alt={project.title}
          className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
        />
      ) : (
        <div className={`absolute inset-0 bg-gradient-to-br ${project.accent}`} />
      )}

      {/* Lighter dark scrim — image stays visible, text readable at bottom */}
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/30 to-transparent" />

      {/* Capacity badge */}
      <div className="absolute top-5 right-5 glass-strong rounded-full px-4 py-2 flex items-center gap-2 z-10">
        <Zap className="w-4 h-4 text-brand-green-dark" />
        <span className="text-sm font-bold text-brand-green-dark ltr-nums">{project.capacity}</span>
        <span className="text-xs text-slate-700">{project.unit}</span>
      </div>

      {/* Content at bottom */}
      <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8 z-10">
        <div className="flex flex-wrap items-center gap-2 mb-3">
          <span className="inline-flex items-center gap-1 rounded-full bg-white/25 backdrop-blur-sm border border-white/40 px-2.5 py-0.5 text-[11px] text-white font-mono">
            {project.type}
          </span>
          <span className="inline-flex items-center gap-1 text-[11px] text-white/90">
            <MapPin className="w-3 h-3" />
            {project.location}
          </span>
        </div>
        <h3 className={`font-heading font-bold ${large ? "text-2xl sm:text-3xl" : "text-xl sm:text-2xl"} mb-3 text-white drop-shadow-lg`}>
          {project.title}
        </h3>
        <p className={`text-white/90 leading-relaxed ${large ? "text-sm sm:text-base" : "text-xs sm:text-sm line-clamp-3"} drop-shadow`}>
          {project.description}
        </p>
        {large && (
          <div className="mt-6 flex items-end gap-3">
            <div className="font-heading font-extrabold text-5xl sm:text-6xl text-gradient-glow ltr-nums leading-none">
              {project.capacity}
            </div>
            <div className="pb-1 text-white text-sm">{project.unit}</div>
          </div>
        )}
      </div>
    </article>
  );
}
