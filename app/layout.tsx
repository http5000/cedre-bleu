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

const BASE_URL = "https://cedre-bleu.pages.dev";

export const metadata: Metadata = {
  title: "Le Cèdre Bleu | Restaurant Libanais & Street Food à Lyon 5",
  description:
    "Restaurant libanais authentique à Lyon 5. Mezzés, grillades, menus et street food 100% fait maison. Réservation en ligne. 10 quai Romain Rolland, Lyon.",
  keywords: "restaurant libanais Lyon, mezzés, chawarma, street food Lyon 5, Le Cèdre Bleu, André Eid",
  metadataBase: new URL(BASE_URL),
  icons: {
    icon: [
      { url: "/favicon.png", type: "image/png" },
    ],
  },
  openGraph: {
    title: "Le Cèdre Bleu | Restaurant Libanais à Lyon 5",
    description: "Cuisine libanaise authentique et street food. Ouvert du mardi au samedi.",
    locale: "fr_FR",
    type: "website",
  },
};

const restaurantJsonLd = {
  "@context": "https://schema.org",
  "@type": "Restaurant",
  name: "Le Cèdre Bleu",
  image: `${BASE_URL}/images/food-assiette.jpg`,
  url: BASE_URL,
  telephone: "+33472560608",
  priceRange: "€€",
  servesCuisine: "Lebanese",
  address: {
    "@type": "PostalAddress",
    streetAddress: "10 Quai Romain Rolland",
    addressLocality: "Lyon",
    postalCode: "69005",
    addressCountry: "FR",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 45.7637971,
    longitude: 4.8288872,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      opens: "11:30",
      closes: "14:30",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      opens: "19:00",
      closes: "22:00",
    },
  ],
  sameAs: [
    "https://facebook.com/cedrebleulyon/",
    "https://instagram.com/le_cedre_bleu_lyon/",
    "https://www.tripadvisor.fr/Restaurant_Review-g187265-d3254257-Reviews-Le_Cedre_Bleu-Lyon_Rhone_Auvergne_Rhone_Alpes.html",
  ],
  hasMap: "https://www.google.com/maps/place/Le+C%C3%A8dre+Bleu/@45.7637971,4.8288872,15z",
  menu: `${BASE_URL}/la-carte`,
  acceptsReservations: true,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" suppressHydrationWarning className={`${inter.variable} ${playfair.variable} h-full`}>
      <head>
        <link rel="icon" href="/favicon.png" type="image/png" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(restaurantJsonLd) }}
        />
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
