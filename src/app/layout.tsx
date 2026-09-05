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
  metadataBase: new URL("https://asseralshams.com"),
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
    url: "https://asseralshams.com/",
    siteName: "عصر الشمس",
    locale: "ar_YE",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "عصر الشمس للاستيراد والتجارة",
      },
    ],
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
        {/* Local Business SEO Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "EnergyBusiness",
              "name": "عصر الشمس",
              "image": "https://asseralshams.com/og-image.jpg",
              "description": "شركة عصر الشمس — رائدة في اليمن في استيراد وتركيب وتشغيل أنظمة الطاقة الشمسية. ألواح AE Solar، انفرترات Sinexcel، بطاريات Sunwoda.",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "صنعاء",
                "addressCountry": "YE"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": "15.3526", 
                "longitude": "44.1537"
              },
              "url": "https://asseralshams.com",
              "telephone": "+967 777705977",
              "openingHoursSpecification": [
                {
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": [
                    "Saturday",
                    "Sunday",
                    "Monday",
                    "Tuesday",
                    "Wednesday",
                    "Thursday"
                  ],
                  "opens": "08:00",
                  "closes": "17:00"
                }
              ]
            })
          }}
        />

        {children}
        <SonnerToaster position="top-center" richColors closeButton />
      </body>
    </html>
  );
}