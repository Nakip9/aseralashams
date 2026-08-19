"use client";

import { useState } from "react";
import {
  MapPin,
  Phone,
  Mail,
  Send,
  Clock,
  Facebook,
  Linkedin,
  MessageCircle,
  Sparkles,
} from "lucide-react";
import { toast } from "sonner";
import { COMPANY } from "./data";
import { Reveal } from "./Reveal";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export function Contact() {
  const [submitting, setSubmitting] = useState(false);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitting(true);
    await new Promise((r) => setTimeout(r, 900));
    setSubmitting(false);
    toast.success("تم إرسال طلبك بنجاح!", {
      description: "سيتواصل معك فريقنا خلال 24 ساعة عمل.",
    });
    (e.target as HTMLFormElement).reset();
  }

  return (
    <section id="contact" className="relative py-24 sm:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-aurora opacity-60" />
      <div className="absolute top-1/3 right-0 w-[30rem] h-[30rem] rounded-full bg-brand-green/10 blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-4 relative">
        {/* CTA banner */}
        <Reveal className="mb-16">
          <div className="relative glass-strong rounded-3xl p-8 sm:p-12 overflow-hidden text-center">
            <div className="absolute -top-20 -right-20 w-72 h-72 rounded-full bg-brand-green/20 blur-3xl animate-pulse-glow" />
            <div className="absolute -bottom-20 -left-20 w-72 h-72 rounded-full bg-brand-blue/20 blur-3xl animate-pulse-glow" />
            <div className="relative">
              <span className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs text-brand-green-dark mb-5">
                <Sparkles className="w-3.5 h-3.5" />
                ابدأ مشروعك الشمسي اليوم
              </span>
              <h2 className="font-heading font-extrabold text-3xl sm:text-4xl mb-4">
                <span className="text-foreground">هل أنت مستعد لبدء مشروعك </span>
                <span className="text-gradient-solar">للطاقة الشمسية؟</span>
              </h2>
              <p className="text-slate-600 max-w-2xl mx-auto leading-relaxed mb-6">
                فريقنا من الخبراء جاهز لمساعدتك في تصميم النظام الأمثل. تواصل معنا اليوم للحصول على استشارة وعرض سعر مخصص لمشروعك.
              </p>
              <a
                href="#contact-form"
                className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-brand-green via-brand-green-light to-brand-blue px-7 py-3.5 text-sm sm:text-base font-bold text-white shadow-2xl shadow-brand-green/30 hover:scale-105 transition-all"
              >
                اطلب عرض سعر الآن
                <Send className="w-4 h-4" />
              </a>
            </div>
          </div>
        </Reveal>

        <div id="contact-form" className="grid lg:grid-cols-2 gap-6 lg:gap-10">
          {/* Contact info */}
          <Reveal>
            <div className="space-y-4">
              <div>
                <span className="inline-block text-xs sm:text-sm text-brand-green-dark tracking-widest font-mono uppercase mb-3">
                  تواصل معنا
                </span>
                <h3 className="font-heading font-extrabold text-2xl sm:text-3xl mb-3">
                  <span className="text-foreground">نحن هنا </span>
                  <span className="text-gradient-solar">لخدمتك</span>
                </h3>
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                  تواصل معنا عبر القنوات التالية، أو املأ النموذج وسيتواصل معك فريقنا في أقرب وقت ممكن.
                </p>
              </div>

              {/* Info cards */}
              <div className="space-y-3">
                <InfoCard
                  icon={<MapPin className="w-5 h-5" />}
                  label="العنوان"
                  value={COMPANY.address}
                />
                <InfoCard
                  icon={<Phone className="w-5 h-5" />}
                  label="أرقام الهاتف"
                  value={
                    <div className="flex flex-wrap gap-x-4 gap-y-1">
                      {COMPANY.phones.map((p) => (
                        <a
                          key={p}
                          href={`tel:${p}`}
                          className="ltr-nums hover:text-brand-green-dark transition-colors"
                          dir="ltr"
                        >
                          {p}
                        </a>
                      ))}
                    </div>
                  }
                />
                <InfoCard
                  icon={<Mail className="w-5 h-5" />}
                  label="البريد الإلكتروني"
                  value={
                    <div className="flex flex-col gap-1">
                      {COMPANY.emails.map((em) => (
                        <a
                          key={em}
                          href={`mailto:${em}`}
                          className="ltr-nums hover:text-brand-green-dark transition-colors break-all"
                          dir="ltr"
                        >
                          {em}
                        </a>
                      ))}
                    </div>
                  }
                />
                <InfoCard
                  icon={<Clock className="w-5 h-5" />}
                  label="ساعات العمل"
                  value="السبت – الخميس: 8:00 ص – 5:00 م"
                />
              </div>

              {/* Social */}
              <div className="flex gap-2 pt-3">
                <SocialLink href={COMPANY.socials.whatsapp} label="واتساب" icon={<MessageCircle className="w-5 h-5" />} />
                <SocialLink href={COMPANY.socials.facebook} label="فيسبوك" icon={<Facebook className="w-5 h-5" />} />
                <SocialLink href={COMPANY.socials.linkedin} label="لينكد إن" icon={<Linkedin className="w-5 h-5" />} />
              </div>
            </div>
          </Reveal>

          {/* Form */}
          <Reveal delay={0.15}>
            <form onSubmit={onSubmit} className="glass-strong rounded-3xl p-6 sm:p-8 space-y-5">
              <div className="grid sm:grid-cols-2 gap-4">
                <Field label="الاسم الكامل" htmlFor="name">
                  <Input id="name" name="name" required placeholder="مثال: أحمد محمد" className="bg-white/70 border-brand-green/20 focus:border-brand-green/50 focus-visible:ring-brand-green/30" />
                </Field>
                <Field label="رقم الهاتف" htmlFor="phone">
                  <Input id="phone" name="phone" required type="tel" placeholder="7XX XXX XXX" className="bg-white/70 border-brand-green/20 focus:border-brand-green/50 focus-visible:ring-brand-green/30 ltr-nums" dir="ltr" />
                </Field>
              </div>
              <Field label="البريد الإلكتروني" htmlFor="email">
                <Input id="email" name="email" type="email" placeholder="you@example.com" className="bg-white/70 border-brand-green/20 focus:border-brand-green/50 focus-visible:ring-brand-green/30 ltr-nums" dir="ltr" />
              </Field>
              <Field label="نوع المشروع" htmlFor="projectType">
                <select id="projectType" name="projectType" className="w-full h-10 rounded-md bg-white/70 border border-brand-green/20 px-3 text-sm focus:border-brand-green/50 focus:outline-none focus:ring-2 focus:ring-brand-green/30">
                  <option value="residential">سكني</option>
                  <option value="commercial">تجاري</option>
                  <option value="industrial">صناعي</option>
                  <option value="agricultural">زراعي / ضخ مياه</option>
                  <option value="other">أخرى</option>
                </select>
              </Field>
              <Field label="تفاصيل المشروع" htmlFor="message">
                <Textarea id="message" name="message" required rows={4} placeholder="اكتب تفاصيل مشروعك: السعة المطلوبة، الموقع، نوع الاستخدام..." className="bg-white/70 border-brand-green/20 focus:border-brand-green/50 focus-visible:ring-brand-green/30 resize-none" />
              </Field>

              <Button type="submit" disabled={submitting} className="w-full h-12 rounded-xl bg-gradient-to-r from-brand-green via-brand-green-light to-brand-blue hover:from-brand-green-light hover:to-brand-blue-lighter text-white font-bold text-base shadow-lg shadow-brand-green/25 hover:shadow-brand-green/40 transition-all disabled:opacity-70">
                {submitting ? (
                  <span className="flex items-center gap-2">
                    <span className="w-4 h-4 border-2 border-white/40 border-t-white rounded-full animate-spin" />
                    جارٍ الإرسال...
                  </span>
                ) : (
                  <span className="flex items-center gap-2">
                    <Send className="w-4 h-4" />
                    إرسال الطلب
                  </span>
                )}
              </Button>

              <p className="text-xs text-slate-500 text-center">
                بالضغط على إرسال، أنت توافق على أن يتواصل معك فريق عصر الشمس بشأن طلبك.
              </p>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Field({ label, htmlFor, children }: { label: string; htmlFor: string; children: React.ReactNode }) {
  return (
    <div className="space-y-2">
      <label htmlFor={htmlFor} className="text-sm font-medium text-slate-700 block">{label}</label>
      {children}
    </div>
  );
}

function InfoCard({ icon, label, value }: { icon: React.ReactNode; label: string; value: React.ReactNode }) {
  return (
    <div className="glass rounded-2xl p-4 sm:p-5 flex items-start gap-4 group hover:bg-brand-green/5 transition-colors">
      <div className="w-10 h-10 rounded-xl bg-brand-green/15 flex items-center justify-center text-brand-green-dark flex-shrink-0 group-hover:scale-110 transition-transform">{icon}</div>
      <div className="flex-1 min-w-0">
        <div className="text-[11px] text-slate-500 mb-1 tracking-wide uppercase font-mono">{label}</div>
        <div className="text-sm text-slate-700 leading-relaxed">{value}</div>
      </div>
    </div>
  );
}

function SocialLink({ href, label, icon }: { href: string; label: string; icon: React.ReactNode }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" aria-label={label} className="w-11 h-11 rounded-xl glass flex items-center justify-center text-slate-600 hover:bg-brand-green hover:text-white transition-all hover:scale-110">{icon}</a>
  );
}
