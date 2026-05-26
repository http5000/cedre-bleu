import type { Metadata } from "next";
import { ContactContent } from "@/components/contact-content";

export const metadata: Metadata = {
  title: "Contact & Accès | Le Cèdre Bleu – Restaurant Libanais Lyon 5",
  description:
    "Contactez Le Cèdre Bleu. Adresse : 10 quai Romain Rolland, Lyon 5. Tél : 04 72 56 06 08. Accès transports, parking, carte.",
};

export default function Contact() {
  return <ContactContent />;
}
