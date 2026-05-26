import type { Metadata } from "next";
import { StreetFoodContent } from "@/components/street-food-content";

const BASE_URL = "https://cedre-bleu.pages.dev";

export const metadata: Metadata = {
  title: "Street Food | Le Cèdre Bleu – Wraps & Combos Lyon 5",
  description:
    "Shawarma, falafel, manakish and street food combos from Le Cèdre Bleu in Lyon 5. Same homemade quality, quick format.",
  alternates: {
    canonical: `${BASE_URL}/en/street-food`,
    languages: {
      fr: `${BASE_URL}/street-food`,
      en: `${BASE_URL}/en/street-food`,
      ar: `${BASE_URL}/ar/street-food`,
    },
  },
};

export default function StreetFoodEn() {
  return <StreetFoodContent />;
}
