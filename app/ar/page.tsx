import type { Metadata } from "next";
import { HomeContent } from "@/components/home-content";

const BASE_URL = "https://cedre-bleu.pages.dev";

export const metadata: Metadata = {
  title: "سيدر بلو | مطعم لبناني أصيل وستريت فود – ليون 5",
  description:
    "مطعم لبناني أصيل في ليون 5. مزة، مشاوي، قوائم طعام وستريت فود — كل شيء محضّر بالكامل في المطبخ. حجز عبر الإنترنت. 10 كاي رومان رولان، ليون.",
  keywords: "مطعم لبناني ليون، مزة، شاورما، ستريت فود، سيدر بلو",
  alternates: {
    canonical: `${BASE_URL}/ar`,
    languages: {
      fr: `${BASE_URL}/`,
      en: `${BASE_URL}/en`,
      ar: `${BASE_URL}/ar`,
    },
  },
  openGraph: {
    title: "سيدر بلو | مطعم لبناني أصيل – ليون 5",
    description: "مطبخ لبناني أصيل وستريت فود. مفتوح من الثلاثاء إلى السبت.",
    locale: "ar_LB",
    type: "website",
  },
};

export default function HomeAr() {
  return <HomeContent />;
}
