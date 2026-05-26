import type { Metadata } from "next";
import { ContactContent } from "@/components/contact-content";

const BASE_URL = "https://cedre-bleu.pages.dev";

export const metadata: Metadata = {
  title: "Contact & Getting Here | Le Cèdre Bleu – Lebanese Restaurant Lyon 5",
  description:
    "Contact Le Cèdre Bleu. Address: 10 Quai Romain Rolland, Lyon 5. Tel: 04 72 56 06 08. Transport links, parking and map.",
  alternates: {
    canonical: `${BASE_URL}/en/contact`,
    languages: {
      fr: `${BASE_URL}/contact`,
      en: `${BASE_URL}/en/contact`,
      ar: `${BASE_URL}/ar/contact`,
    },
  },
};

export default function ContactEn() {
  return <ContactContent />;
}
