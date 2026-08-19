"use client";

import { useState } from "react";
import { 
  MapPin, Phone, Mail, Send, CheckCircle2, 
  MessageCircle, Facebook, Linkedin, ExternalLink 
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { PageLayout } from "@/components/site/PageLayout";
import { Reveal, StaggerContainer, StaggerItem } from "@/components/site/Reveal";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { COMPANY } from "@/components/site/data";

export default function ContactPage() {
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitting(true);
    // Simulate network request
    await new Promise((r) => setTimeout(r, 1200));
    setSubmitting(false);
    setSubmitted(true);
    toast.success("تم إرسال طلبك بنجاح!", { description: "سيتواصل معك فريقنا خلال 24 ساعة عمل." });
    (e.target as HTMLFormElement).reset();
    
    // Hide success overlay after 5 seconds
    setTimeout(() => setSubmitted(false), 5000);
  }

  // The exact Google Maps location link for the button
  const mapLink = "https://maps.app.goo.gl/YkEzXyECsZGpxp1W9";
  
  // The highly accurate embed URL using the provided Plus Code and Address
  const mapEmbedUrl = "https://maps.google.com/maps?q=868P%2BMV5%2C%20Khawlan%20St%2C%20Sanaa%2C%20Yemen&t=&z=16&ie=UTF8&iwloc=&output=embed";

  return (
    <PageLayout>
      
      {/* --- CUSTOM CINEMATIC CONTACT HERO --- */}
      <section className="relative h-[65vh] min-h-[500px] flex items-center justify-center overflow-hidden bg-slate-950">
        
        {/* Background Image & Ambient Overlays */}
        <motion.div 
          initial={{ scale: 1.1 }} 
          animate={{ scale: 1 }} 
          transition={{ duration: 1.5, ease: "easeOut" }} 
          className="absolute inset-0 w-full h-full"
        >
          <img src="/hero/hero-bg-2.jpg" alt="تواصل معنا" className="w-full h-full object-cover opacity-40 filter contrast-125" />
        </motion.div>
        
        {/* Gradients to blend into the section below */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/90 via-slate-950/60 to-slate-50" />
        <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.03] mix-blend-overlay" />

        {/* Floating Abstract Icons for Tech/Communication Feel */}
        <motion.div 
          animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }} 
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 right-[5%] lg:right-[15%] w-16 h-16 rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 flex items-center justify-center shadow-2xl hidden md:flex"
        >
          <Phone className="w-7 h-7 text-brand-green-lighter" />
        </motion.div>

        <motion.div 
          animate={{ y: [0, 25, 0], rotate: [0, -10, 0] }} 
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-1/3 left-[5%] lg:left-[15%] w-14 h-14 rounded-full bg-white/5 backdrop-blur-xl border border-white/10 flex items-center justify-center shadow-2xl hidden md:flex"
        >
          <Mail className="w-6 h-6 text-brand-blue-lighter" />
        </motion.div>

        <motion.div 
          animate={{ y: [0, -15, 0], scale: [1, 1.05, 1] }} 
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute top-1/3 left-[15%] lg:left-[25%] w-12 h-12 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 flex items-center justify-center shadow-2xl hidden xl:flex"
        >
          <MapPin className="w-5 h-5 text-emerald-400" />
        </motion.div>

        {/* Main Hero Content */}
        <div className="container mx-auto px-4 relative z-10 text-center mt-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 px-5 py-2 text-sm text-white mb-6 shadow-xl">
              <MessageCircle className="w-4 h-4 text-brand-green-lighter" />
              <span>فريق الدعم والاستشارات</span>
            </div>
            
            <h1 className="font-heading font-extrabold text-4xl sm:text-5xl lg:text-7xl text-white leading-[1.2] mb-6 drop-shadow-2xl">
              كيف يمكننا <span className="text-transparent bg-clip-text bg-gradient-to-l from-brand-green-light to-brand-blue-lighter">مساعدتك اليوم؟</span>
            </h1>
            
            <p className="text-lg sm:text-xl text-slate-300 leading-relaxed max-w-2xl mx-auto drop-shadow-md">
              نحن هنا للإجابة على استفساراتك، تقديم الاستشارات الهندسية، وتوفير أفضل حلول الطاقة الشمسية المخصصة لمشروعك.
            </p>
          </motion.div>
        </div>
      </section>

      {/* --- FORM & MAP SECTION --- */}
      <section className="py-20 sm:py-32 relative overflow-hidden bg-slate-50">
        <div className="absolute top-0 right-0 w-[40rem] h-[40rem] rounded-full bg-brand-green/5 blur-[150px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[40rem] h-[40rem] rounded-full bg-brand-blue/5 blur-[150px] pointer-events-none" />

        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-start">
            
            {/* LEFT COLUMN: Modern Form */}
            <div className="lg:col-span-5 flex flex-col justify-center order-2 lg:order-1">
              <Reveal>
                <div className="mb-10">
                  <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-slate-900 mb-4 leading-tight">
                    دعنا نبني <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-green to-brand-blue">مستقبلاً مستداماً</span> معاً
                  </h2>
                  <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
                    سواء كنت تبحث عن استشارة، عرض سعر لمشروعك، أو لديك استفسار تقني، نحن جاهزون للمساعدة.
                  </p>
                </div>

                <div className="relative">
                  {/* Success Overlay */}
                  <AnimatePresence>
                    {submitted && (
                      <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 1.05 }}
                        className="absolute inset-0 z-20 bg-white/90 backdrop-blur-md rounded-[2rem] flex flex-col items-center justify-center text-center p-8 border border-brand-green/20 shadow-2xl"
                      >
                        <motion.div
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ type: "spring", delay: 0.2 }}
                          className="w-20 h-20 rounded-full bg-gradient-to-br from-brand-green to-brand-blue flex items-center justify-center mb-6 shadow-lg shadow-brand-green/30"
                        >
                          <CheckCircle2 className="w-10 h-10 text-white" />
                        </motion.div>
                        <h3 className="font-heading font-extrabold text-2xl text-slate-900 mb-2">تم الإرسال بنجاح!</h3>
                        <p className="text-slate-600 text-base">لقد استلمنا رسالتك، وسيقوم أحد خبرائنا بالتواصل معك قريباً.</p>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  <form onSubmit={onSubmit} className="space-y-6">
                    <div className="grid sm:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-sm font-bold text-slate-700 ml-1">الاسم الكامل <span className="text-red-500">*</span></label>
                        <Input 
                          id="name" name="name" required placeholder="مثال: أحمد محمد" 
                          className="h-14 rounded-2xl bg-white border-slate-200 focus:border-brand-green focus:ring-4 focus:ring-brand-green/20 transition-all text-base px-5 shadow-sm hover:border-slate-300" 
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-bold text-slate-700 ml-1">رقم الهاتف <span className="text-red-500">*</span></label>
                        <Input 
                          id="phone" name="phone" required type="tel" placeholder="7XX XXX XXX" 
                          className="h-14 rounded-2xl bg-white border-slate-200 focus:border-brand-green focus:ring-4 focus:ring-brand-green/20 transition-all text-base px-5 shadow-sm hover:border-slate-300 ltr-nums text-left" dir="ltr" 
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-bold text-slate-700 ml-1">البريد الإلكتروني</label>
                      <Input 
                        id="email" name="email" type="email" placeholder="you@example.com" 
                        className="h-14 rounded-2xl bg-white border-slate-200 focus:border-brand-green focus:ring-4 focus:ring-brand-green/20 transition-all text-base px-5 shadow-sm hover:border-slate-300 ltr-nums text-left" dir="ltr" 
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-bold text-slate-700 ml-1">نوع المشروع <span className="text-red-500">*</span></label>
                      <select 
                        id="projectType" name="projectType" required defaultValue=""
                        className="w-full h-14 rounded-2xl bg-white border border-slate-200 px-5 text-base text-slate-700 focus:border-brand-green focus:outline-none focus:ring-4 focus:ring-brand-green/20 transition-all shadow-sm cursor-pointer hover:border-slate-300"
                      >
                        <option value="" disabled>اختر نوع المشروع...</option>
                        <option value="residential">نظام سكني</option>
                        <option value="commercial">نظام تجاري / شركات</option>
                        <option value="industrial">نظام صناعي / مصانع</option>
                        <option value="agricultural">زراعي / منظومة ضخ مياه</option>
                        <option value="other">استفسار عام / أخرى</option>
                      </select>
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-bold text-slate-700 ml-1">تفاصيل الطلب <span className="text-red-500">*</span></label>
                      <Textarea 
                        id="message" name="message" required rows={5} placeholder="كيف يمكننا مساعدتك؟ يرجى كتابة تفاصيل مشروعك أو استفسارك هنا..." 
                        className="rounded-2xl bg-white border-slate-200 focus:border-brand-green focus:ring-4 focus:ring-brand-green/20 transition-all text-base p-5 resize-none shadow-sm hover:border-slate-300" 
                      />
                    </div>

                    <Button 
                      type="submit" disabled={submitting} 
                      className="w-full h-14 rounded-full bg-slate-900 hover:bg-brand-green text-white font-bold text-lg shadow-xl hover:shadow-brand-green/30 hover:-translate-y-1 transition-all duration-300 disabled:opacity-70 disabled:hover:translate-y-0"
                    >
                      {submitting ? (
                        <span className="flex items-center gap-3">
                          <span className="w-5 h-5 border-2 border-white/40 border-t-white rounded-full animate-spin" />
                          جاري معالجة الطلب...
                        </span>
                      ) : (
                        <span className="flex items-center gap-2">
                          <Send className="w-5 h-5" />
                          إرسال الطلب الآن
                        </span>
                      )}
                    </Button>
                  </form>
                </div>
              </Reveal>
            </div>

            {/* RIGHT COLUMN: Interactive Map & Floating Contact Info */}
            <div className="lg:col-span-7 h-full order-1 lg:order-2">
              <Reveal className="h-full">
                <div className="relative w-full h-[600px] lg:h-full min-h-[650px] rounded-[2.5rem] overflow-hidden shadow-2xl border border-slate-200 group bg-slate-100">
                  
                  {/* Embedded Google Map */}
                  <iframe
                    src={mapEmbedUrl}
                    className="absolute inset-0 w-full h-full border-0 filter contrast-[1.05] group-hover:contrast-100 transition-all duration-700"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="موقع عصر الشمس على الخريطة"
                  />
                  
                  {/* Dark Gradient Scrim to make text readable */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-900/30 to-transparent pointer-events-none" />

                  {/* Floating Contact Cards Overlaid on Map */}
                  <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-8">
                    <div className="glass-strong rounded-3xl p-6 sm:p-8 border border-white/20 shadow-2xl backdrop-blur-xl">
                      
                      <div className="grid sm:grid-cols-2 gap-6 mb-8">
                        {/* Address */}
                        <div className="flex items-start gap-4">
                          <div className="w-12 h-12 rounded-2xl bg-brand-green/20 flex items-center justify-center flex-shrink-0">
                            <MapPin className="w-6 h-6 text-brand-green-lighter" />
                          </div>
                          <div>
                            <div className="text-xs font-mono text-white/60 mb-1">الموقع الجغرافي</div>
                            <div className="text-sm font-bold text-white leading-relaxed">{COMPANY.address}</div>
                          </div>
                        </div>

                        {/* Phone */}
                        <div className="flex items-start gap-4">
                          <div className="w-12 h-12 rounded-2xl bg-brand-blue/20 flex items-center justify-center flex-shrink-0">
                            <Phone className="w-6 h-6 text-brand-blue-lighter" />
                          </div>
                          <div>
                            <div className="text-xs font-mono text-white/60 mb-1">اتصل بنا</div>
                            <div className="flex flex-col">
                              {COMPANY.phones.map((p) => (
                                <a key={p} href={`tel:${p}`} className="text-sm font-bold text-white hover:text-brand-green-lighter transition-colors ltr-nums text-right" dir="ltr">
                                  {p}
                                </a>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Map Action Button & Socials */}
                      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-white/10">
                        <a 
                          href={mapLink} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full bg-white text-slate-900 px-6 py-3 text-sm font-bold shadow-lg hover:bg-brand-green hover:text-white transition-colors"
                        >
                          <ExternalLink className="w-4 h-4" />
                          افتح في خرائط جوجل
                        </a>

                        <div className="flex gap-2">
                          <a href={COMPANY.socials.whatsapp} target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-green-500 transition-colors">
                            <MessageCircle className="w-5 h-5" />
                          </a>
                          <a href={COMPANY.socials.facebook} target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-blue-600 transition-colors">
                            <Facebook className="w-5 h-5" />
                          </a>
                          <a href={COMPANY.socials.linkedin} target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-sky-600 transition-colors">
                            <Linkedin className="w-5 h-5" />
                          </a>
                        </div>
                      </div>

                    </div>
                  </div>

                </div>
              </Reveal>
            </div>

          </div>
        </div>
      </section>
    </PageLayout>
  );
}