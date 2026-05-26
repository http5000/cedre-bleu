import type { Metadata } from "next";
import { StreetFoodContent } from "@/components/street-food-content";

export const metadata: Metadata = {
  title: "Street Food | Le Cèdre Bleu – Sandwichs & Formules Lyon 5",
  description:
    "Chawarma, falafel, manakiches et formules street food libanaise à Lyon 5. Même qualité maison, format rapide.",
};

export default function StreetFood() {
  return <StreetFoodContent />;
}
