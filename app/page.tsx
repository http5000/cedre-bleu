import type { Metadata } from "next";
import { HomeContent } from "@/components/home-content";

const BASE_URL = "https://cedre-bleu.pages.dev";

export const metadata: Metadata = {
  title: "Le Cèdre Bleu | Restaurant Libanais & Street Food à Lyon 5",
  description:
    "Restaurant libanais authentique à Lyon 5. Mezzés, grillades, menus et street food 100% fait maison. Réservation en ligne. 10 quai Romain Rolland, Lyon.",
  keywords: "restaurant libanais Lyon, mezzés, chawarma, street food Lyon 5, Le Cèdre Bleu, André Eid",
  alternates: {
    canonical: `${BASE_URL}/`,
    languages: {
      fr: `${BASE_URL}/`,
      en: `${BASE_URL}/en`,
      ar: `${BASE_URL}/ar`,
    },
  },
  openGraph: {
    title: "Le Cèdre Bleu | Restaurant Libanais à Lyon 5",
    description: "Cuisine libanaise authentique et street food. Ouvert du mardi au samedi.",
    locale: "fr_FR",
    type: "website",
  },
};

export default function Home() {
  return <HomeContent />;
}
