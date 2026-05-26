import type { Metadata } from "next";
import { HomeContent } from "@/components/home-content";

const BASE_URL = "https://cedre-bleu.pages.dev";

export const metadata: Metadata = {
  title: "Le Cèdre Bleu | Authentic Lebanese Restaurant & Street Food – Lyon 5",
  description:
    "Authentic Lebanese restaurant in Lyon 5. Mezze platters, grills, set menus and street food — 100% homemade. Online booking. 10 Quai Romain Rolland, Lyon.",
  keywords: "Lebanese restaurant Lyon, mezze, shawarma, street food Lyon 5, Le Cèdre Bleu",
  alternates: {
    canonical: `${BASE_URL}/en`,
    languages: {
      fr: `${BASE_URL}/`,
      en: `${BASE_URL}/en`,
      ar: `${BASE_URL}/ar`,
    },
  },
  openGraph: {
    title: "Le Cèdre Bleu | Authentic Lebanese Restaurant – Lyon 5",
    description: "Authentic Lebanese cuisine and street food. Open Tuesday to Saturday.",
    locale: "en_GB",
    type: "website",
  },
};

export default function HomeEn() {
  return <HomeContent />;
}
