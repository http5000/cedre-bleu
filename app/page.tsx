import Link from "next/link";
import { MapPin, Clock, ChevronRight, Star, Utensils, Sandwich } from "lucide-react";

const RESERVATION_URL =
  "https://booking.ureserve.co/shop/external-booking/le-cedre-bleu?fullpage=true";

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative min-h-[92vh] flex items-center justify-center overflow-hidden bg-[#0d1f3a]">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/food-assiette.jpg"
          alt="Grillades libanaises"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0d1f3a]/70 via-[#0d1f3a]/50 to-[#0d1f3a]/90" />

        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <div className="flex justify-center mb-8">
            <img
              src="/images/logo-bleu.png"
              alt="Le Cèdre Bleu"
              className="h-20 w-auto brightness-0 invert"
            />
          </div>

          <div className="flex items-center justify-center gap-3 mb-5">
            <div className="h-px w-8 bg-[#C9A227]/60" />
            <p className="text-[#C9A227] text-xs font-semibold uppercase tracking-[0.25em]">
              Libanais · Lebanese · <span lang="ar">لبناني</span>
            </p>
            <div className="h-px w-8 bg-[#C9A227]/60" />
          </div>
          <h1
            className="text-white text-5xl md:text-7xl mb-3 leading-tight"
            style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontStyle: "italic" }}
          >
            Le Cèdre Bleu
          </h1>
          <p className="text-[#C9A227]/80 text-sm tracking-widest uppercase mb-6">Lyon 5 · Quai Romain Rolland</p>
          <p className="text-gray-200 text-lg md:text-xl max-w-xl mx-auto mb-8 leading-relaxed">
            Une cuisine libanaise 100% faite maison, avec amour et convivialité.
          </p>

          <div className="flex items-center justify-center gap-2 text-gray-300 text-sm mb-10">
            <Clock className="w-4 h-4 text-[#C9A227]" />
            <span>Mar — Sam · 11h30–14h30 &amp; 19h–22h</span>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={RESERVATION_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-[#C9A227] text-white font-semibold rounded-full hover:bg-[#a88220] transition-all duration-200 shadow-lg hover:shadow-xl hover:-translate-y-0.5 text-base"
            >
              Réserver une table
            </a>
            <Link
              href="/la-carte"
              className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-full hover:bg-white/20 transition-all duration-200 border border-white/30 text-base"
            >
              Découvrir la carte
            </Link>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-white/40 text-xs">
          <span>Défiler</span>
          <div className="w-px h-8 bg-white/20 animate-pulse" />
        </div>
      </section>

      {/* TWO UNIVERSES */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-[#C9A227] text-xs font-semibold uppercase tracking-widest mb-2">
              Deux univers, une passion
            </p>
            <h2
              className="text-[#1C3D6E] text-4xl"
              style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
            >
              Choisissez votre expérience
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Restaurant */}
            <div className="relative overflow-hidden rounded-2xl bg-[#1C3D6E] text-white shadow-xl hover:shadow-2xl transition-shadow duration-300">
              <div className="absolute inset-0 bg-gradient-to-br from-[#1C3D6E] to-[#0d1f3a]" />
              <div className="relative p-10">
                <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center mb-6">
                  <Utensils className="w-7 h-7 text-[#C9A227]" />
                </div>
                <p className="text-[#C9A227] text-xs font-semibold uppercase tracking-widest mb-2">
                  Gastronomique
                </p>
                <h3
                  className="text-3xl mb-4"
                  style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontStyle: "italic" }}
                >
                  Le Restaurant
                </h3>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  Mezzés, grillades libanaises et menus généreux dans un cadre chaleureux. Une
                  expérience culinaire complète autour de 10 mezzés, grillades et desserts maison.
                </p>
                <ul className="space-y-2 text-sm text-gray-300 mb-8">
                  {["Formules mezzés", "Menus dégustation", "Grillades & brochettes", "Desserts maison"].map(
                    (item) => (
                      <li key={item} className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#C9A227]" />
                        {item}
                      </li>
                    )
                  )}
                </ul>
                <div className="flex gap-3">
                  <a
                    href={RESERVATION_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-2.5 bg-[#C9A227] text-white text-sm font-semibold rounded-full hover:bg-[#a88220] transition-colors"
                  >
                    Réserver
                  </a>
                  <Link
                    href="/la-carte"
                    className="px-5 py-2.5 bg-white/10 text-white text-sm font-medium rounded-full hover:bg-white/20 transition-colors flex items-center gap-1"
                  >
                    La carte <ChevronRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </div>

            {/* Street food */}
            <div className="relative overflow-hidden rounded-2xl bg-white border border-gray-100 text-gray-800 shadow-xl hover:shadow-2xl transition-shadow duration-300">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#C9A227] to-[#e8c96a]" />
              <div className="p-10">
                <div className="w-14 h-14 bg-[#C9A227]/10 rounded-2xl flex items-center justify-center mb-6">
                  <Sandwich className="w-7 h-7 text-[#C9A227]" />
                </div>
                <p className="text-[#C9A227] text-xs font-semibold uppercase tracking-widest mb-2">
                  Rapide &amp; savoureux
                </p>
                <h3
                  className="text-3xl text-[#1C3D6E] mb-4"
                  style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontStyle: "italic" }}
                >
                  Street Food
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Chawarma, falafel, manakiches et formules rapides. Le meilleur de la rue
                  libanaise, servi sur place ou à emporter avec les mêmes produits frais.
                </p>
                <ul className="space-y-2 text-sm text-gray-600 mb-8">
                  {["Sandwichs chawarma & falafel", "Manakiches au thym", "Formules casse-croûte", "Plats du jour (midi)"].map(
                    (item) => (
                      <li key={item} className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#C9A227]" />
                        {item}
                      </li>
                    )
                  )}
                </ul>
                <Link
                  href="/street-food"
                  className="inline-flex items-center gap-1 px-5 py-2.5 bg-[#1C3D6E] text-white text-sm font-semibold rounded-full hover:bg-[#152f55] transition-colors"
                >
                  Voir le menu Street Food <ChevronRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-[#C9A227] text-xs font-semibold uppercase tracking-widest mb-3">
                Notre histoire
              </p>
              <h2
                className="text-[#1C3D6E] text-4xl mb-6"
                style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
              >
                Bienvenue au Cèdre Bleu
              </h2>
              <blockquote className="text-gray-600 text-lg leading-relaxed mb-6 border-l-4 border-[#C9A227] pl-6 italic">
                "Dans un décor chaleureux, nous vous accueillons sans prétention autour d&apos;une
                cuisine faite de nos mains avec amour et convivialité."
              </blockquote>
              <p className="text-gray-600 leading-relaxed mb-8">
                André et Mary Eid vous ouvrent les portes de leur restaurant comme l&apos;on
                accueille un ami ou les membres de sa famille. Tout est mis en œuvre pour vous
                faire passer un agréable moment autour des saveurs authentiques du Liban.
              </p>

              {/* André & Mary */}
              <div className="flex gap-4">
                <div className="flex items-center gap-3">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/images/food-mezze.jpg"
                    alt="André Eid"
                    className="w-14 h-14 rounded-full object-cover object-top border-2 border-[#C9A227]"
                  />
                  <div>
                    <div className="font-semibold text-[#1C3D6E] text-sm">André Eid</div>
                    <div className="text-xs text-gray-500">Chef & fondateur</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/images/food-2.jpg"
                    alt="Mary Eid"
                    className="w-14 h-14 rounded-full object-cover object-top border-2 border-[#C9A227]"
                  />
                  <div>
                    <div className="font-semibold text-[#1C3D6E] text-sm">Mary Eid</div>
                    <div className="text-xs text-gray-500">Co-fondatrice</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/images/food-4.jpg" alt="Homous" className="rounded-2xl w-full h-48 object-cover" />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/images/food-7.jpg" alt="Taboulé" className="rounded-2xl w-full h-48 object-cover" />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/images/food-3.jpg" alt="Rikakat" className="rounded-2xl w-full h-48 object-cover" />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/images/food-9.jpg" alt="Moutabal" className="rounded-2xl w-full h-48 object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* GALERIE */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <p className="text-[#C9A227] text-xs font-semibold uppercase tracking-widest mb-2">
              Notre cuisine
            </p>
            <h2
              className="text-[#1C3D6E] text-4xl"
              style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
            >
              Galerie
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {[
              { src: "/images/food-assiette.jpg", alt: "Assiette grillades" },
              { src: "/images/food-5.jpg", alt: "Kebbé boulette" },
              { src: "/images/food-6.jpg", alt: "Kebbé" },
              { src: "/images/hero-viande.jpg", alt: "Kebbé nayé" },
              { src: "/images/food-8.jpg", alt: "Spécialité libanaise" },
              { src: "/images/food-10.jpg", alt: "Mezzé" },
              { src: "/images/food-11.jpg", alt: "Moussaka" },
              { src: "/images/manakiche.jpg", alt: "Manakiche zaatar" },
            ].map((img) => (
              <div key={img.src} className="aspect-square overflow-hidden rounded-xl">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={img.src}
                  alt={img.alt}
                  loading="lazy"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MENUS PREVIEW */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-[#C9A227] text-xs font-semibold uppercase tracking-widest mb-2">
              Nos formules
            </p>
            <h2
              className="text-[#1C3D6E] text-4xl"
              style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
            >
              Menus 100% Libanais
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                name: "Menu Dégustation",
                price: "27€",
                subtitle: "2 personnes minimum",
                items: [
                  "Assortiment de 10 mezzés",
                  "Homous, Moutabal, Moussaka, Taboulé",
                  "Feuille de vigne, Kebbé boulette...",
                  "Dessert : Katayef Achta",
                ],
                highlight: false,
              },
              {
                name: "Menu Le Cèdre Bleu",
                price: "29€",
                subtitle: "Notre signature",
                items: [
                  "6 mezzés froids et chauds",
                  "2 grillades (viande & poulet)",
                  "Riz à la libanaise & légumes",
                  "Dessert : Katayef Achta",
                ],
                highlight: true,
              },
              {
                name: "Menu Aller-Retour",
                price: "35€",
                subtitle: "L'expérience complète",
                items: [
                  "Apéritif au choix",
                  "6 mezzés froids et chauds",
                  "2 grillades (viande & poulet)",
                  "Dessert + Café ou infusion",
                ],
                highlight: false,
              },
            ].map((menu) => (
              <div
                key={menu.name}
                className={`rounded-2xl p-8 hover:-translate-y-1 transition-transform duration-200 ${
                  menu.highlight
                    ? "bg-[#1C3D6E] text-white shadow-xl"
                    : "bg-white border border-gray-100 shadow-sm"
                }`}
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3
                      className={`text-xl mb-1 ${menu.highlight ? "text-white" : "text-[#1C3D6E]"}`}
                      style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
                    >
                      {menu.name}
                    </h3>
                    <p className={`text-xs ${menu.highlight ? "text-gray-300" : "text-gray-400"}`}>
                      {menu.subtitle}
                    </p>
                  </div>
                  <div
                    className="text-2xl font-bold shrink-0"
                    style={{
                      fontFamily: "var(--font-playfair), Georgia, serif",
                      color: "#C9A227",
                    }}
                  >
                    {menu.price}
                  </div>
                </div>
                <ul className="space-y-2">
                  {menu.items.map((item) => (
                    <li
                      key={item}
                      className={`flex items-start gap-2 text-sm ${
                        menu.highlight ? "text-gray-300" : "text-gray-600"
                      }`}
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-[#C9A227] mt-1.5 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              href="/la-carte"
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-[#1C3D6E] text-white font-semibold rounded-full hover:bg-[#152f55] transition-colors"
            >
              Voir la carte complète <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* RESERVATION BANNER */}
      <section className="py-20 bg-[#1C3D6E]">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <div className="flex justify-center mb-6">
            <div className="flex">
              {[1, 2, 3, 4, 5].map((i) => (
                <Star key={i} className="w-5 h-5 text-[#C9A227] fill-[#C9A227]" />
              ))}
            </div>
          </div>
          <h2
            className="text-white text-4xl mb-4"
            style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontStyle: "italic" }}
          >
            Réservez votre table
          </h2>
          <p className="text-gray-300 mb-8 text-lg">
            Pour un déjeuner ou un dîner, réservez en ligne ou appelez-nous directement.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={RESERVATION_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-[#C9A227] text-white font-semibold rounded-full hover:bg-[#a88220] transition-colors text-base shadow-lg"
            >
              Réserver en ligne
            </a>
            <a
              href="tel:0472560608"
              className="px-8 py-4 bg-white/10 text-white font-semibold rounded-full hover:bg-white/20 transition-colors border border-white/30 text-base"
            >
              04 72 56 06 08
            </a>
          </div>
        </div>
      </section>

      {/* ACCES */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-[#C9A227] text-xs font-semibold uppercase tracking-widest mb-3">
                Nous trouver
              </p>
              <h2
                className="text-[#1C3D6E] text-4xl mb-8"
                style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
              >
                Venir au restaurant
              </h2>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-10 h-10 bg-[#1C3D6E]/10 rounded-xl flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-[#1C3D6E]" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-800 mb-1">Adresse</div>
                    <p className="text-gray-600 text-sm">10 quai Romain Rolland, 69005 Lyon</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-10 h-10 bg-[#1C3D6E]/10 rounded-xl flex items-center justify-center shrink-0">
                    <svg className="w-5 h-5 text-[#1C3D6E]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-800 mb-1">Transports</div>
                    <p className="text-gray-600 text-sm">
                      Métro D – Vieux Lyon · Métro A – Cordeliers
                      <br />
                      Bus 31/40 – arrêt Romain Rolland
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-10 h-10 bg-[#1C3D6E]/10 rounded-xl flex items-center justify-center shrink-0">
                    <svg className="w-5 h-5 text-[#1C3D6E]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-800 mb-1">Parking</div>
                    <p className="text-gray-600 text-sm">
                      Marché de la création – à partir de 19h
                      <br />
                      Tarif fixe 3€ (19h–23h45) – prévoir monnaie
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-2xl overflow-hidden shadow-xl h-72 lg:h-96">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2784.076!2d4.8288872!3d45.7637971!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47f4ebaaaec6fb3d%3A0xcad75884a8991c3d!2sLe%20C%C3%A8dre%20Bleu!5e0!3m2!1sfr!2sfr!4v1748262400000!5m2!1sfr!2sfr"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Localisation Le Cèdre Bleu"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
