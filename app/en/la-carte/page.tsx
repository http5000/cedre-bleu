import type { Metadata } from "next";
import { LaCarteContent } from "@/components/la-carte-content";

const BASE_URL = "https://cedre-bleu.pages.dev";

export const metadata: Metadata = {
  title: "Menu | Le Cèdre Bleu – Lebanese Restaurant Lyon 5",
  description:
    "Full menu of Le Cèdre Bleu: cold & hot mezze, grills, set menus and desserts. 100% homemade, gluten-free and vegan options available on request.",
  alternates: {
    canonical: `${BASE_URL}/en/la-carte`,
    languages: {
      fr: `${BASE_URL}/la-carte`,
      en: `${BASE_URL}/en/la-carte`,
      ar: `${BASE_URL}/ar/la-carte`,
    },
  },
};

export default function LaCarteEn() {
  return <LaCarteContent />;
}
