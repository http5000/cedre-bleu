"use client";

import { MapPin, Phone, Clock } from "lucide-react";
import { useI18n } from "@/lib/i18n";

const RESERVATION_URL =
  "https://booking.ureserve.co/shop/external-booking/le-cedre-bleu?fullpage=true";

export function ContactContent() {
  const { t } = useI18n();
  const c = t.contact;

  return (
    <>
      {/* HERO */}
      <div className="relative text-white py-20 px-4 text-center overflow-hidden">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/food-7.jpg"
          alt="Taboulé maison"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-[#1C3D6E]/80" />
        <div className="relative">
          <p className="text-[#C9A227] text-xs font-semibold uppercase tracking-widest mb-3">
            {c.hero_tag}
          </p>
          <h1
            className="text-4xl md:text-5xl mb-4"
            style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontStyle: "italic" }}
          >
            {c.hero_title}
          </h1>
          <p className="text-gray-300 max-w-xl mx-auto text-sm">{c.hero_subtitle}</p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* LEFT */}
          <div className="space-y-8">
            {/* Coordinates */}
            <div>
              <h2
                className="text-[#1C3D6E] text-2xl mb-6"
                style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
              >
                {c.coordonnees_title}
              </h2>
              <div className="space-y-4">
                <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 bg-[#1C3D6E]/10 rounded-xl flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-[#1C3D6E]" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-800 mb-0.5">{c.adresse_label}</div>
                    <a
                      href="https://www.google.com/maps/place/Le+C%C3%A8dre+Bleu/@45.7637971,4.8288872,15z"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 text-sm hover:text-[#1C3D6E] transition-colors"
                    >
                      10 quai Romain Rolland
                      <br />
                      69005 Lyon
                    </a>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 bg-[#1C3D6E]/10 rounded-xl flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5 text-[#1C3D6E]" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-800 mb-0.5">{c.tel_label}</div>
                    <a href="tel:0472560608" className="block text-gray-600 text-sm hover:text-[#1C3D6E] transition-colors">
                      04 72 56 06 08
                    </a>
                    <a href="tel:0635411438" className="block text-gray-600 text-sm hover:text-[#1C3D6E] transition-colors">
                      06 35 41 14 38
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Horaires */}
            <div>
              <h2
                className="text-[#1C3D6E] text-2xl mb-6"
                style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
              >
                {c.horaires_title}
              </h2>
              <div className="bg-white border border-gray-100 rounded-xl shadow-sm overflow-hidden">
                {[
                  { day: c.horaire_lundi, hours: null },
                  { day: c.horaire_marSam, hours: ["11h30 - 14h30", "19h00 - 22h00"] },
                  { day: c.horaire_dimanche, hours: null },
                ].map((row, i) => (
                  <div
                    key={row.day}
                    className={`flex items-center justify-between px-5 py-3.5 ${
                      i % 2 === 0 ? "bg-gray-50" : "bg-white"
                    }`}
                  >
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-[#C9A227]" />
                      <span className="font-medium text-gray-800 text-sm">{row.day}</span>
                    </div>
                    {row.hours ? (
                      <div className="text-right text-sm text-gray-600">
                        {row.hours.map((h) => (
                          <div key={h}>{h}</div>
                        ))}
                      </div>
                    ) : (
                      <span className="text-gray-400 italic text-sm">{c.horaire_ferme}</span>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Accès */}
            <div id="acces">
              <h2
                className="text-[#1C3D6E] text-2xl mb-6"
                style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
              >
                {c.venir_title}
              </h2>
              <div className="space-y-4">
                {[
                  { icon: "🚗", ...c.en_voiture },
                  { icon: "🚇", ...c.en_transports },
                  { icon: "🚶", ...c.a_pied },
                ].map((item) => (
                  <div key={item.title} className="flex gap-4 bg-gray-50 rounded-xl p-4">
                    <div className="text-2xl">{item.icon}</div>
                    <div>
                      <div className="font-semibold text-gray-800 mb-0.5">{item.title}</div>
                      <div className="text-sm text-gray-600">{item.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT */}
          <div className="space-y-8">
            {/* Map */}
            <div className="rounded-2xl overflow-hidden shadow-xl h-72">
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

            {/* Reservation CTA */}
            <div className="bg-[#1C3D6E] rounded-2xl p-8 text-white text-center">
              <h3
                className="text-2xl mb-3"
                style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontStyle: "italic" }}
              >
                {c.reservation_title}
              </h3>
              <p className="text-gray-300 text-sm mb-6">{c.reservation_desc}</p>
              <div className="flex flex-col gap-3">
                <a
                  href={RESERVATION_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 bg-[#C9A227] text-white font-semibold rounded-full hover:bg-[#a88220] transition-colors shadow-md"
                >
                  {c.reserver_ligne}
                </a>
                <a
                  href="tel:0472560608"
                  className="px-6 py-3 bg-white/10 text-white font-medium rounded-full hover:bg-white/20 transition-colors border border-white/20"
                >
                  04 72 56 06 08
                </a>
              </div>
            </div>

            {/* Avis */}
            <div className="bg-gray-50 rounded-2xl p-6">
              <h3
                className="text-[#1C3D6E] text-xl mb-4"
                style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
              >
                {c.avis_title}
              </h3>
              <p className="text-gray-600 text-sm mb-5">{c.avis_desc}</p>
              <div className="flex gap-3">
                <a
                  href="https://www.google.com/maps/place/Le+C%C3%A8dre+Bleu/@45.7637971,4.8288872,15z"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 text-center px-4 py-2.5 bg-white border border-gray-200 rounded-xl text-sm font-medium text-gray-700 hover:border-[#1C3D6E] hover:text-[#1C3D6E] transition-colors shadow-sm"
                >
                  Google
                </a>
                <a
                  href="https://www.tripadvisor.fr/Restaurant_Review-g187265-d3254257-Reviews-Le_Cedre_Bleu-Lyon_Rhone_Auvergne_Rhone_Alpes.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 text-center px-4 py-2.5 bg-white border border-gray-200 rounded-xl text-sm font-medium text-gray-700 hover:border-[#1C3D6E] hover:text-[#1C3D6E] transition-colors shadow-sm"
                >
                  TripAdvisor
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
