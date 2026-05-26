import type { Metadata } from "next";
import { ContactContent } from "@/components/contact-content";

const BASE_URL = "https://cedre-bleu.pages.dev";

export const metadata: Metadata = {
  title: "اتصل بنا والوصول | سيدر بلو – مطعم لبناني ليون 5",
  description:
    "تواصل مع سيدر بلو. العنوان: 10 كاي رومان رولان، ليون 5. هاتف: 04 72 56 06 08. وسائل النقل، مواقف السيارات والخريطة.",
  alternates: {
    canonical: `${BASE_URL}/ar/contact`,
    languages: {
      fr: `${BASE_URL}/contact`,
      en: `${BASE_URL}/en/contact`,
      ar: `${BASE_URL}/ar/contact`,
    },
  },
};

export default function ContactAr() {
  return <ContactContent />;
}
