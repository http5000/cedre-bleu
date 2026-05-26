import type { Metadata } from "next";
import { LaCarteContent } from "@/components/la-carte-content";

const BASE_URL = "https://cedre-bleu.pages.dev";

export const metadata: Metadata = {
  title: "القائمة | سيدر بلو – مطعم لبناني ليون 5",
  description:
    "قائمة طعام سيدر بلو الكاملة: مزة باردة وساخنة، مشاوي، قوائم طعام وحلويات. كل شيء محضّر في المطبخ، خيارات خالية من الغلوتين والنباتية متاحة.",
  alternates: {
    canonical: `${BASE_URL}/ar/la-carte`,
    languages: {
      fr: `${BASE_URL}/la-carte`,
      en: `${BASE_URL}/en/la-carte`,
      ar: `${BASE_URL}/ar/la-carte`,
    },
  },
};

export default function LaCarteAr() {
  return <LaCarteContent />;
}
