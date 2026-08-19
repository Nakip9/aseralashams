"use client";

import {
  Phone,
  Mail,
  MapPin,
  Facebook,
  Linkedin,
  MessageCircle,
} from "lucide-react";
import Link from "next/link";
import { COMPANY, NAV_LINKS } from "./data";
import { useStore } from "@/lib/store";

export function Footer() {
  const year = new Date().getFullYear();
  const products = useStore((s) => s.products);

  return (
    <footer className="relative mt-auto border-t border-brand-green/15 bg-white/80 backdrop-blur-sm">
      <div className="h-px bg-gradient-to-l from-transparent via-brand-green/40 to-transparent" />

      <div className="container mx-auto px-4 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="relative">
                <div className="absolute inset-0 rounded-full bg-brand-green/30 blur-md" />
                <div className="relative w-12 h-12 rounded-full bg-white shadow-lg ring-1 ring-brand-green/20 overflow-hidden flex items-center justify-center">
                  <img
                    src="/brand/logo.png"
                    alt="شعار عصر الشمس"
                    className="w-full h-full object-cover"
                    width={48}
                    height={48}
                  />
                </div>
              </div>
              <div>
                <div className="font-heading font-bold text-lg">{COMPANY.name}</div>
                <div className="text-[10px] text-brand-green-dark/70 tracking-widest font-mono uppercase">
                  {COMPANY.latinName}
                </div>
              </div>
            </div>
            <p className="text-slate-600 text-sm leading-relaxed mb-5">{COMPANY.tagline}</p>
            <div className="flex gap-2">
              <a href={COMPANY.socials.whatsapp} target="_blank" rel="noopener noreferrer" aria-label="واتساب" className="w-10 h-10 rounded-lg glass flex items-center justify-center text-slate-600 hover:bg-brand-green hover:text-white transition-all">
                <MessageCircle className="w-4 h-4" />
              </a>
              <a href={COMPANY.socials.facebook} target="_blank" rel="noopener noreferrer" aria-label="فيسبوك" className="w-10 h-10 rounded-lg glass flex items-center justify-center text-slate-600 hover:bg-brand-green hover:text-white transition-all">
                <Facebook className="w-4 h-4" />
              </a>
              <a href={COMPANY.socials.linkedin} target="_blank" rel="noopener noreferrer" aria-label="لينكد إن" className="w-10 h-10 rounded-lg glass flex items-center justify-center text-slate-600 hover:bg-brand-green hover:text-white transition-all">
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="font-heading font-bold text-base mb-4 text-brand-green-dark">روابط سريعة</h4>
            <ul className="space-y-2.5">
              {NAV_LINKS.map((l) => (
                <li key={l.route}>
                  <Link href={l.route} className="text-sm text-slate-600 hover:text-brand-green-dark transition-colors inline-flex items-center gap-2 group">
                    <span className="w-1 h-1 rounded-full bg-brand-green/50 group-hover:bg-brand-green group-hover:scale-150 transition-all" />
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="font-heading font-bold text-base mb-4 text-brand-green-dark">منتجاتنا</h4>
            <ul className="space-y-2.5">
              {products.slice(0, 4).map((p) => (
                <li key={p.id}>
                  <Link href="/products" className="text-sm text-slate-600 hover:text-brand-green-dark transition-colors inline-flex items-center gap-2 group">
                    <span className="w-1 h-1 rounded-full bg-brand-green/50 group-hover:bg-brand-green group-hover:scale-150 transition-all" />
                    {p.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading font-bold text-base mb-4 text-brand-green-dark">معلومات التواصل</h4>
            <ul className="space-y-3 text-sm text-slate-600">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-brand-green/80 flex-shrink-0 mt-0.5" />
                <span className="leading-relaxed">{COMPANY.address}</span>
              </li>
              {COMPANY.phones.map((p) => (
                <li key={p} className="flex items-center gap-2.5">
                  <Phone className="w-4 h-4 text-brand-green/80 flex-shrink-0" />
                  <a href={`tel:${p}`} className="ltr-nums hover:text-brand-green-dark transition-colors" dir="ltr">{p}</a>
                </li>
              ))}
              {COMPANY.emails.map((em) => (
                <li key={em} className="flex items-start gap-2.5">
                  <Mail className="w-4 h-4 text-brand-green/80 flex-shrink-0 mt-0.5" />
                  <a href={`mailto:${em}`} className="ltr-nums hover:text-brand-green-dark transition-colors break-all" dir="ltr">{em}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-6 border-t border-slate-200/80 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500">
          <p>جميع الحقوق محفوظة © {year} {COMPANY.fullName}</p>
          <p className="font-mono tracking-wide">Powered by renewable energy ☀</p>
        </div>
      </div>
    </footer>
  );
}
