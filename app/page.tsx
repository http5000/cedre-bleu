import type { Metadata } from "next";
import { HomeContent } from "@/components/home-content";

export const metadata: Metadata = {
  title: "Le Cèdre Bleu | Restaurant Libanais & Street Food à Lyon 5",
  description:
    "Restaurant libanais authentique à Lyon 5. Mezzés, grillades, menus et street food 100% fait maison. Réservation en ligne. 10 quai Romain Rolland, Lyon.",
};

export default function Home() {
  return <HomeContent />;
}
