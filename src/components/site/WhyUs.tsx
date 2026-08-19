"use client";

import { motion } from "framer-motion";
import {
  Award,
  Users,
  Handshake,
  Headphones,
  Sparkles,
  CheckCircle2
} from "lucide-react";
import { WHY_US, BRANDS } from "./data";
import { Reveal } from "./Reveal";

export function WhyUs() {
  return (
    <section className="relative py-24 sm:py-32 overflow-hidden bg-slate-50">
      {/* Subtle Background Elements */}
      <div className="absolute inset-0 bg-grid opacity-30 pointer-events-none" />
      <div className="absolute top-0 right-1/4 w-[30rem] h-[30rem] rounded-full bg-brand-green/5 blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Editorial Header */}
        <Reveal className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 sm:mb-20">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 rounded-full bg-white border border-slate-200 px-5 py-2 text-xs sm:text-sm text-brand-green-dark tracking-widest font-mono font-bold uppercase mb-6 shadow-sm">
              <Sparkles className="w-4 h-4" />
              لماذا نحن؟
            </div>
            <h2 className="font-heading font-extrabold text-4xl sm:text-5xl lg:text-6xl text-slate-900 leading-[1.1] tracking-tight">
              لماذا تختار <span className="text-transparent bg-clip-text bg-gradient-to-l from-brand-green to-brand-blue">عصر الشمس؟</span>
            </h2>
          </div>
          <div className="max-w-md md:text-right">
            <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
              نحن لا نبيع منتجات فقط، بل نقدم حلولاً هندسية متكاملة. نمتلك الخبرة والشراكات لضمان أقصى كفاءة لمشروعك مع دعم فني لا ينقطع.
            </p>
          </div>
        </Reveal>

        {/* 
          Bespoke Asymmetrical Bento Grid (7-5 / 5-7 Layout) 
          Instead of generic cards, each card is custom-designed for its content.
        */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8">
          
          {/* CARD 1: Quality (Dark Mode, 7 Columns) */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7 }}
            className="group lg:col-span-7 relative overflow-hidden rounded-[2.5rem] bg-slate-950 p-8 sm:p-12 flex flex-col justify-end min-h-[360px] shadow-2xl hover:-translate-y-1 transition-transform duration-500"
          >
            {/* Rotating Seal Graphic */}
            <div className="absolute top-[-20%] left-[-10%] w-64 h-64 border-[1px] border-dashed border-white/20 rounded-full flex items-center justify-center animate-[spin-slow_20s_linear_infinite] group-hover:border-brand-green/40 transition-colors duration-700">
              <div className="w-48 h-48 border-[1px] border-white/10 rounded-full" />
              <div className="absolute inset-0 bg-gradient-to-br from-brand-green/20 to-transparent blur-3xl rounded-full" />
            </div>
            
            <div className="relative z-10">
              <div className="w-16 h-16 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center mb-8 shadow-xl">
                <Award className="w-8 h-8 text-brand-green-lighter" />
              </div>
              <h3 className="font-heading font-extrabold text-3xl sm:text-4xl text-white mb-4">
                {WHY_US[0].title}
              </h3>
              <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-lg">
                {WHY_US[0].description}
              </p>
            </div>
          </motion.div>

          {/* CARD 2: Team (Light Mode, 5 Columns) */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="group lg:col-span-5 relative overflow-hidden rounded-[2.5rem] bg-white p-8 sm:p-12 flex flex-col justify-end min-h-[360px] shadow-xl border border-slate-200 hover:-translate-y-1 hover:border-brand-blue/30 transition-all duration-500"
          >
            {/* Abstract Network Nodes Graphic */}
            <div className="absolute top-8 left-8 right-8 h-32 opacity-20 pointer-events-none">
              <div className="absolute top-0 right-4 w-3 h-3 rounded-full bg-brand-blue" />
              <div className="absolute top-12 left-10 w-4 h-4 rounded-full bg-brand-green" />
              <div className="absolute bottom-4 right-20 w-2.5 h-2.5 rounded-full bg-slate-900" />
              {/* Connecting lines */}
              <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
                <line x1="10%" y1="60%" x2="80%" y2="20%" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4" className="text-slate-400" />
                <line x1="80%" y1="20%" x2="50%" y2="90%" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4" className="text-slate-400" />
              </svg>
            </div>

            <div className="relative z-10">
              <div className="w-14 h-14 rounded-2xl bg-slate-100 flex items-center justify-center mb-6 border border-slate-200 group-hover:bg-brand-blue group-hover:text-white transition-colors duration-500">
                <Users className="w-7 h-7 text-slate-700 group-hover:text-white transition-colors" />
              </div>
              <h3 className="font-heading font-extrabold text-2xl sm:text-3xl text-slate-900 mb-3">
                {WHY_US[1].title}
              </h3>
              <p className="text-slate-600 text-base leading-relaxed">
                {WHY_US[1].description}
              </p>
            </div>
          </motion.div>

          {/* CARD 3: Partnerships (Light Mode, 5 Columns) */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="group lg:col-span-5 relative overflow-hidden rounded-[2.5rem] bg-white p-8 sm:p-12 flex flex-col justify-end min-h-[360px] shadow-xl border border-slate-200 hover:-translate-y-1 hover:border-brand-green/30 transition-all duration-500"
          >
            {/* Auto-scrolling mini marquee of actual partner brands */}
            <div className="absolute top-10 inset-x-0 overflow-hidden flex opacity-10 group-hover:opacity-30 transition-opacity duration-700 pointer-events-none">
              <div className="flex animate-marquee gap-8 items-center whitespace-nowrap px-4">
                {BRANDS.map((b, idx) => (
                  <img key={idx} src={b.logo} alt="" className="h-10 object-contain grayscale" />
                ))}
                {BRANDS.map((b, idx) => (
                  <img key={`dup-${idx}`} src={b.logo} alt="" className="h-10 object-contain grayscale" />
                ))}
              </div>
            </div>

            <div className="relative z-10 mt-auto">
              <div className="w-14 h-14 rounded-2xl bg-slate-100 flex items-center justify-center mb-6 border border-slate-200 group-hover:bg-brand-green group-hover:text-white transition-colors duration-500">
                <Handshake className="w-7 h-7 text-slate-700 group-hover:text-white transition-colors" />
              </div>
              <h3 className="font-heading font-extrabold text-2xl sm:text-3xl text-slate-900 mb-3">
                {WHY_US[2].title}
              </h3>
              <p className="text-slate-600 text-base leading-relaxed">
                {WHY_US[2].description}
              </p>
            </div>
          </motion.div>

          {/* CARD 4: Technical Support (Dark Mode, 7 Columns) */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="group lg:col-span-7 relative overflow-hidden rounded-[2.5rem] bg-slate-950 p-8 sm:p-12 flex flex-col justify-end min-h-[360px] shadow-2xl hover:-translate-y-1 transition-transform duration-500"
          >
            {/* Radar / Ping Effect representing active monitoring */}
            <div className="absolute top-12 left-12">
              <div className="relative flex items-center justify-center w-16 h-16">
                <div className="absolute inset-0 rounded-full border border-brand-green/40 animate-ping opacity-70 [animation-duration:3s]" />
                <div className="absolute inset-2 rounded-full border border-brand-green/30 animate-ping opacity-50 [animation-duration:2s]" />
                <div className="w-3 h-3 bg-brand-green rounded-full shadow-[0_0_15px_#398B30]" />
              </div>
            </div>
            
            <div className="relative z-10">
              <div className="w-16 h-16 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center mb-8 shadow-xl">
                <Headphones className="w-8 h-8 text-white" />
              </div>
              
              <div className="flex items-center gap-3 mb-4">
                <h3 className="font-heading font-extrabold text-3xl sm:text-4xl text-white">
                  {WHY_US[3].title}
                </h3>
                <span className="inline-flex items-center gap-1 bg-brand-green/20 text-brand-green-lighter px-3 py-1 text-xs font-mono font-bold rounded-full border border-brand-green/30">
                  <CheckCircle2 className="w-3 h-3" />
                  24/7 Live
                </span>
              </div>
              
              <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-lg">
                {WHY_US[3].description}
              </p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}