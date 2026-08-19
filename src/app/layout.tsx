import type { Metadata } from "next";
import { Cairo, Tajawal, Geist } from "next/font/google";
import "./globals.css";
import { Toaster as SonnerToaster } from "@/components/ui/sonner";

const cairo = Cairo({
  subsets: ["arabic", "latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-cairo",
  display: "swap",
});

const tajawal = Tajawal({
  subsets: ["arabic", "latin"],
  weight: ["300", "400", "500", "700", "800"],
  variable: "--font-tajawal",
  display: "swap",
});

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist",
  display: "swap",
});

export const metadata: Metadata = {
  title: "عصر الشمس للاستيراد والتجارة | حلول الطاقة الشمسية في اليمن",
  description:
    "شركة عصر الشمس — رائدة في اليمن في استيراد وتركيب وتشغيل أنظمة الطاقة الشمسية. ألواح AE Solar، انفرترات Sinexcel، بطاريات Sunwoda، كابلات TOP CABLE الإسبانية.",
  keywords: [
    "الطاقة الشمسية",
    "اليمن",
    "صنعاء",
    "ألواح شمسية",
    "انفرترات",
    "بطاريات ليثيوم",
    "Asr Al-Shams",
    "solar energy Yemen",
    "AE Solar",
    "Sinexcel",
    "Sunwoda",
    "TOP CABLE",
  ],
  authors: [{ name: "عصر الشمس" }],
  openGraph: {
    title: "عصر الشمس للاستيراد والتجارة",
    description: "حلول متكاملة وموثوقة لاستيراد، تركيب، وتشغيل أنظمة الطاقة الشمسية عالية الجودة.",
    url: "https://aseralshams.com/",
    siteName: "عصر الشمس",
    locale: "ar_YE",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "عصر الشمس للاستيراد والتجارة",
    description: "حلول متكاملة لأنظمة الطاقة الشمسية عالية الجودة في اليمن.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl" suppressHydrationWarning>
      <body
        className={`${cairo.variable} ${tajawal.variable} ${geist.variable} antialiased bg-background text-foreground font-body`}
      >
        {children}
        <SonnerToaster position="top-center" richColors closeButton />
      </body>
    </html>
  );
}
