"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, MessageSquare } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { COMPANY, NAV_LINKS } from "./data";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  // Detect scroll to transition the navbar into a floating glass pill
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Automatically close the mobile menu when the route changes
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className={cn(
        "fixed top-0 inset-x-0 z-50 transition-all duration-500",
        scrolled ? "py-3" : "py-4 sm:py-6"
      )}
    >
      <div className="container mx-auto px-4 max-w-7xl">
        <nav
          className={cn(
            "flex items-center justify-between rounded-full px-4 sm:px-6 py-3 transition-all duration-500 border",
            scrolled
              ? "glass-strong shadow-xl shadow-brand-green/10 border-brand-green/10"
              : "bg-transparent border-transparent"
          )}
        >
          {/* Logo Section */}
          <Link href="/" className="flex items-center gap-3 group flex-shrink-0">
            <div className="relative">
              <div className="absolute inset-0 rounded-full bg-brand-green/30 blur-md group-hover:bg-brand-green/50 transition-all" />
              <div className="relative w-11 h-11 rounded-full bg-white shadow-lg ring-1 ring-brand-green/20 overflow-hidden flex items-center justify-center group-hover:ring-brand-green/40 group-hover:scale-105 transition-all">
                <img
                  src="/brand/logo.png"
                  alt="شعار عصر الشمس"
                  className="w-full h-full object-cover"
                  width={44}
                  height={44}
                />
              </div>
            </div>
            <div className="flex flex-col leading-none justify-center">
              <span
                className={cn(
                  "font-heading font-bold text-lg transition-colors",
                  scrolled ? "text-slate-900" : "text-white"
                )}
              >
                {COMPANY.name}
              </span>
              <span
                className={cn(
                  "text-[10px] tracking-widest font-mono uppercase transition-colors mt-1",
                  scrolled ? "text-brand-green-dark" : "text-brand-green-lighter"
                )}
              >
                {COMPANY.latinName}
              </span>
            </div>
          </Link>

          {/* Desktop Links */}
          <ul className="hidden lg:flex items-center gap-1">
            {NAV_LINKS.map((link) => {
              // Strip hashes to correctly identify the active parent page
              const isActive = pathname === (link.route.split("#")[0] || "/");
              return (
                <li key={link.route}>
                  <Link
                    href={link.route}
                    className={cn(
                      "relative px-4 py-2 text-sm font-bold rounded-full transition-all duration-300",
                      isActive
                        ? scrolled
                          ? "text-brand-green-dark bg-brand-green/10"
                          : "text-brand-green-lighter bg-white/10"
                        : scrolled
                        ? "text-slate-600 hover:text-brand-green-dark hover:bg-slate-100"
                        : "text-white/90 hover:text-white hover:bg-white/10"
                    )}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>

          {/* CTA & Mobile Menu Toggle */}
          <div className="flex items-center gap-3 flex-shrink-0">
            <Link
              href="/contact"
              className="hidden sm:inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-brand-green to-brand-blue px-6 py-2.5 text-sm font-bold text-white shadow-lg shadow-brand-green/25 hover:shadow-brand-green/40 hover:scale-105 transition-all"
            >
              <MessageSquare className="w-4 h-4" />
              <span>طلب عرض سعــر</span>
            </Link>

            <button
              type="button"
              aria-label="القائمة"
              onClick={() => setOpen((v) => !v)}
              className={cn(
                "lg:hidden inline-flex items-center justify-center w-11 h-11 rounded-full transition-colors",
                scrolled
                  ? "bg-slate-100 text-slate-700 hover:bg-slate-200"
                  : "bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white/20"
              )}
            >
              {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </nav>

        {/* Mobile Drawer */}
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, y: -10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.95 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="lg:hidden mt-3 origin-top"
            >
              <div className="glass-strong rounded-3xl p-4 shadow-2xl border border-white/40">
                <ul className="flex flex-col gap-2">
                  {NAV_LINKS.map((link) => {
                    const isActive = pathname === (link.route.split("#")[0] || "/");
                    return (
                      <li key={link.route}>
                        <Link
                          href={link.route}
                          className={cn(
                            "block px-5 py-3.5 rounded-2xl text-base font-bold transition-all",
                            isActive
                              ? "bg-gradient-to-r from-brand-green/10 to-brand-blue/10 text-brand-green-dark border border-brand-green/20"
                              : "text-slate-700 hover:bg-slate-50"
                          )}
                        >
                          {link.label}
                        </Link>
                      </li>
                    );
                  })}
                  <li className="mt-2">
                    <Link
                      href="/contact"
                      className="w-full flecx items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-brand-green to-brand-blue px-5 py-4 text-base font-bold text-white shadow-md"
                    >
                      <MessageSquare className="w-5 h-5" />
                      طلب عرض سعــر
                    </Link>
                  </li>
                </ul>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
}