"use client";

import Link from "next/link";
import { MapPin, Clock, ChevronRight, Star, Utensils, Sandwich } from "lucide-react";
import { useI18n } from "@/lib/i18n";

const RESERVATION_URL =
  "https://booking.ureserve.co/shop/external-booking/le-cedre-bleu?fullpage=true";

export function HomeContent() {
  const { t } = useI18n();
  const h = t.home;

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
              {h.tagline}
            </p>
            <div className="h-px w-8 bg-[#C9A227]/60" />
          </div>
          <h1
            className="text-white text-5xl md:text-7xl mb-3 leading-tight"
            style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontStyle: "italic" }}
          >
            Le Cèdre Bleu
          </h1>
          <p className="text-[#C9A227]/80 text-sm tracking-widest uppercase mb-6">{h.location}</p>
          <p className="text-gray-200 text-lg md:text-xl max-w-xl mx-auto mb-8 leading-relaxed">
            {h.desc}
          </p>

          <div className="flex items-center justify-center gap-2 text-gray-300 text-sm mb-10">
            <Clock className="w-4 h-4 text-[#C9A227]" />
            <span>{h.hours}</span>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <a
              href={RESERVATION_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-[#C9A227] text-white font-semibold rounded-full hover:bg-[#a88220] transition-all duration-200 shadow-lg hover:shadow-xl hover:-translate-y-0.5 text-base"
            >
              {h.cta_reserve}
            </a>
            <Link
              href="/la-carte"
              className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-full hover:bg-white/20 transition-all duration-200 border border-white/30 text-base"
            >
              {h.cta_carte}
            </Link>
          </div>

          {/* Google rating badge */}
          <a
            href="https://www.google.com/maps/place/Le+C%C3%A8dre+Bleu/@45.7637971,4.8288872,3059m/data=!3m2!1e3!5s0x47f4ebaaaf575531:0xa22f01393b7d80bd!4m6!3m5!1s0x47f4ebaaaec6fb3d:0xcad75884a8991c3d!8m2!3d45.7637971!4d4.8288872!16s%2Fg%2F1tgw97vw"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-5 py-2.5 hover:bg-white/15 transition-colors"
          >
            <div className="flex gap-0.5">
              {[1,2,3,4,5].map((i) => (
                <Star key={i} className="w-3.5 h-3.5 text-[#C9A227] fill-[#C9A227]" />
              ))}
            </div>
            <span className="text-white font-bold text-sm">4.7</span>
            <span className="text-white/50 text-xs">·</span>
            <span className="text-white/70 text-xs">{h.google_rating_label}</span>
            <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"/>
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
            </svg>
          </a>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-white/40 text-xs">
          <span>{h.scroll}</span>
          <div className="w-px h-8 bg-white/20 animate-pulse" />
        </div>
      </section>

      {/* TWO UNIVERSES */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-[#C9A227] text-xs font-semibold uppercase tracking-widest mb-2">
              {h.universes_tag}
            </p>
            <h2
              className="text-[#1C3D6E] text-4xl"
              style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
            >
              {h.universes_title}
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
                  {h.resto_tag}
                </p>
                <h3
                  className="text-3xl mb-4"
                  style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontStyle: "italic" }}
                >
                  {h.resto_title}
                </h3>
                <p className="text-gray-300 mb-6 leading-relaxed">{h.resto_desc}</p>
                <ul className="space-y-2 text-sm text-gray-300 mb-8">
                  {h.resto_items.map((item) => (
                    <li key={item} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#C9A227]" />
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="flex gap-3">
                  <a
                    href={RESERVATION_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-2.5 bg-[#C9A227] text-white text-sm font-semibold rounded-full hover:bg-[#a88220] transition-colors"
                  >
                    {h.reserver}
                  </a>
                  <Link
                    href="/la-carte"
                    className="px-5 py-2.5 bg-white/10 text-white text-sm font-medium rounded-full hover:bg-white/20 transition-colors flex items-center gap-1"
                  >
                    {h.la_carte} <ChevronRight className="w-3.5 h-3.5" />
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
                  {h.sf_tag}
                </p>
                <h3
                  className="text-3xl text-[#1C3D6E] mb-4"
                  style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontStyle: "italic" }}
                >
                  {h.sf_title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{h.sf_desc}</p>
                <ul className="space-y-2 text-sm text-gray-600 mb-8">
                  {h.sf_items.map((item) => (
                    <li key={item} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#C9A227]" />
                      {item}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/street-food"
                  className="inline-flex items-center gap-1 px-5 py-2.5 bg-[#1C3D6E] text-white text-sm font-semibold rounded-full hover:bg-[#152f55] transition-colors"
                >
                  {h.voir_sf} <ChevronRight className="w-3.5 h-3.5" />
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
                {h.histoire_tag}
              </p>
              <h2
                className="text-[#1C3D6E] text-4xl mb-6"
                style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
              >
                {h.histoire_title}
              </h2>
              <blockquote className="text-gray-600 text-lg leading-relaxed mb-6 border-l-4 border-[#C9A227] pl-6 italic">
                &ldquo;{h.histoire_quote}&rdquo;
              </blockquote>
              <p className="text-gray-600 leading-relaxed mb-8">{h.histoire_text}</p>

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
                    <div className="text-xs text-gray-500">{h.chef_title}</div>
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
                    <div className="text-xs text-gray-500">{h.cofondatrice}</div>
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

      {/* AVIS CLIENTS */}
      <section className="py-20 bg-[#1C3D6E]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-[#C9A227] text-xs font-semibold uppercase tracking-widest mb-2">
              {h.avis_tag}
            </p>
            <h2
              className="text-white text-4xl mb-3"
              style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontStyle: "italic" }}
            >
              {h.avis_title}
            </h2>
            <div className="flex items-center justify-center gap-2 mt-4">
              <div className="flex gap-0.5">
                {[1,2,3,4,5].map((i) => (
                  <Star key={i} className="w-4 h-4 text-[#C9A227] fill-[#C9A227]" />
                ))}
              </div>
              <span className="text-white font-bold">4.7 / 5</span>
              <span className="text-white/50">·</span>
              <span className="text-white/70 text-sm">1 000+ {h.google_rating_label}</span>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { name: "Nael K.", rating: 5, text: "Clients fidèles depuis plus de 20 ans. Le meilleur restaurant libanais de Lyon, produits frais et service chaleureux.", date: "Fév. 2026" },
              { name: "Paula J.", rating: 5, text: "Une magnifique découverte ! Service parfait, prix raisonnables, on se croirait transporté au Liban.", date: "Mars 2025" },
              { name: "Patrick L.", rating: 5, text: "Sourire de l'accueil, salle agréable et desserts maison comme le Katayef — un régal !", date: "Oct. 2025" },
              { name: "ManoCCC", rating: 5, text: "Menu dégustation 10 mezzes à 27€ par personne, rapport qualité-prix imbattable.", date: "Juil. 2024" },
              { name: "Vincent B.", rating: 4, text: "Vraiment très bon. Je recommande les assortiments de mezze et le taboulé libanais.", date: "Avr. 2026" },
              { name: "BOWIE69", rating: 5, text: "Le meilleur libanais de Lyon. Produits frais préparés sur place, prix très raisonnables.", date: "Août 2023" },
            ].map((review) => (
              <div key={review.name} className="bg-white/5 border border-white/10 rounded-2xl p-6 flex flex-col gap-3">
                <div className="flex gap-0.5">
                  {[1,2,3,4,5].map((i) => (
                    <Star
                      key={i}
                      className={`w-3.5 h-3.5 ${i <= review.rating ? "text-[#C9A227] fill-[#C9A227]" : "text-white/20"}`}
                    />
                  ))}
                </div>
                <p className="text-white/85 text-sm leading-relaxed flex-1">&ldquo;{review.text}&rdquo;</p>
                <div className="flex items-center justify-between pt-2 border-t border-white/10">
                  <span className="text-white font-semibold text-sm">{review.name}</span>
                  <span className="text-white/40 text-xs">{review.date}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <a
              href="https://www.google.com/maps/place/Le+C%C3%A8dre+Bleu/@45.7637971,4.8288872,3059m/data=!3m2!1e3!5s0x47f4ebaaaf575531:0xa22f01393b7d80bd!4m6!3m5!1s0x47f4ebaaaec6fb3d:0xcad75884a8991c3d!8m2!3d45.7637971!4d4.8288872!16s%2Fg%2F1tgw97vw"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 border border-white/20 text-white rounded-full hover:bg-white/20 transition-colors text-sm font-medium"
            >
              Voir tous les avis Google
              <ChevronRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* GALERIE */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <p className="text-[#C9A227] text-xs font-semibold uppercase tracking-widest mb-2">
              {h.galerie_tag}
            </p>
            <h2
              className="text-[#1C3D6E] text-4xl"
              style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
            >
              {h.galerie_title}
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
              {h.menus_tag}
            </p>
            <h2
              className="text-[#1C3D6E] text-4xl"
              style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
            >
              {h.menus_title}
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { data: h.menu_degustation, highlight: false },
              { data: h.menu_cedre, highlight: true },
              { data: h.menu_allerretour, highlight: false },
            ].map(({ data, highlight }) => (
              <div
                key={data.name}
                className={`rounded-2xl p-8 hover:-translate-y-1 transition-transform duration-200 ${
                  highlight
                    ? "bg-[#1C3D6E] text-white shadow-xl"
                    : "bg-white border border-gray-100 shadow-sm"
                }`}
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3
                      className={`text-xl mb-1 ${highlight ? "text-white" : "text-[#1C3D6E]"}`}
                      style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
                    >
                      {data.name}
                    </h3>
                    <p className={`text-xs ${highlight ? "text-gray-300" : "text-gray-400"}`}>
                      {data.subtitle}
                    </p>
                  </div>
                  <div
                    className="text-2xl font-bold shrink-0"
                    style={{ fontFamily: "var(--font-playfair), Georgia, serif", color: "#C9A227" }}
                  >
                    {data.name === h.menu_degustation.name ? "27€" : data.name === h.menu_cedre.name ? "29€" : "35€"}
                  </div>
                </div>
                <ul className="space-y-2">
                  {data.items.map((item) => (
                    <li
                      key={item}
                      className={`flex items-start gap-2 text-sm ${
                        highlight ? "text-gray-300" : "text-gray-600"
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
              {h.voir_carte} <ChevronRight className="w-4 h-4" />
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
            {h.reservation_title}
          </h2>
          <p className="text-gray-300 mb-8 text-lg">{h.reservation_desc}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={RESERVATION_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-[#C9A227] text-white font-semibold rounded-full hover:bg-[#a88220] transition-colors text-base shadow-lg"
            >
              {h.reserver_ligne}
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
                {h.trouver_tag}
              </p>
              <h2
                className="text-[#1C3D6E] text-4xl mb-8"
                style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
              >
                {h.trouver_title}
              </h2>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-10 h-10 bg-[#1C3D6E]/10 rounded-xl flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-[#1C3D6E]" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-800 mb-1">{h.adresse_label}</div>
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
                    <div className="font-semibold text-gray-800 mb-1">{h.transports_label}</div>
                    <p className="text-gray-600 text-sm whitespace-pre-line">{h.transports_text}</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-10 h-10 bg-[#1C3D6E]/10 rounded-xl flex items-center justify-center shrink-0">
                    <svg className="w-5 h-5 text-[#1C3D6E]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-800 mb-1">{h.parking_label}</div>
                    <p className="text-gray-600 text-sm whitespace-pre-line">{h.parking_text}</p>
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
