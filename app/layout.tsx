import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { LanguageProvider } from "@/lib/i18n";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin", "latin-ext"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "Le Cèdre Bleu | Restaurant Libanais & Street Food à Lyon 5",
  description:
    "Restaurant libanais authentique à Lyon 5. Mezzés, grillades, menus et street food 100% fait maison. Réservation en ligne. 10 quai Romain Rolland, Lyon.",
  keywords: "restaurant libanais Lyon, mezzés, chawarma, street food Lyon 5, Le Cèdre Bleu, André Eid",
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
  },
  openGraph: {
    title: "Le Cèdre Bleu | Restaurant Libanais à Lyon 5",
    description: "Cuisine libanaise authentique et street food. Ouvert du mardi au samedi.",
    locale: "fr_FR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" suppressHydrationWarning className={`${inter.variable} ${playfair.variable} h-full`}>
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
      </head>
      <body className="min-h-full flex flex-col antialiased bg-[#FAFAF8]">
        <LanguageProvider>
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
