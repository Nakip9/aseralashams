import type { Metadata } from "next";
import { PageLayout } from "@/components/site/PageLayout";
import { SolarCalculator } from "@/components/site/SolarCalculator";

export const metadata: Metadata = {
  title: "احسب أحمالك الشمسية | عصر الشمس",
  description: "احسب استهلاك أجهزتك وعدد الألواح وسعة البطاريات وقدرة الانفرتر المناسبة، ثم اطلب عرض سعر من عصر الشمس.",
  alternates: { canonical: "/calculator" },
  openGraph: {
    title: "احسب أحمالك واعرف منظومتك | عصر الشمس",
    description: "ملخص أحمالك والألواح والبطاريات والانفرتر، مع خيارات مرنة وطلب عرض سعر مباشر عبر واتساب.",
    url: "/calculator",
    locale: "ar_YE",
    type: "website",
  },
};

export default function CalculatorPage() {
  return <PageLayout><SolarCalculator /></PageLayout>;
}
