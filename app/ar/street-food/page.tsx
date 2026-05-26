import type { Metadata } from "next";
import { StreetFoodContent } from "@/components/street-food-content";

const BASE_URL = "https://cedre-bleu.pages.dev";

export const metadata: Metadata = {
  title: "ستريت فود | سيدر بلو – ساندويشات وطواحين ليون 5",
  description:
    "شاورما، فلافل، مناقيش وقوائم ستريت فود من سيدر بلو في ليون 5. نفس الجودة المنزلية بشكل سريع.",
  alternates: {
    canonical: `${BASE_URL}/ar/street-food`,
    languages: {
      fr: `${BASE_URL}/street-food`,
      en: `${BASE_URL}/en/street-food`,
      ar: `${BASE_URL}/ar/street-food`,
    },
  },
};

export default function StreetFoodAr() {
  return <StreetFoodContent />;
}
