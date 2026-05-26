import type { Metadata } from "next";
import { LaCarteContent } from "@/components/la-carte-content";

export const metadata: Metadata = {
  title: "La Carte | Le Cèdre Bleu – Restaurant Libanais Lyon 5",
  description:
    "Découvrez notre carte : mezzés, menus libanais, grillades, desserts et boissons. Tout fait maison.",
};

export default function LaCarte() {
  return <LaCarteContent />;
}
