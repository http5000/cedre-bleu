"use client";

import { useI18n } from "@/lib/i18n";

const RESERVATION_URL =
  "https://booking.ureserve.co/shop/external-booking/le-cedre-bleu?fullpage=true";

function MenuTag({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-block bg-[#C9A227]/10 text-[#C9A227] text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wider">
      {children}
    </span>
  );
}

function MezzeItem({ name, desc, price }: { name: string; desc?: string; price?: string }) {
  return (
    <div className="flex items-start justify-between gap-4 py-3 border-b border-gray-100 last:border-0">
      <div>
        <div className="font-medium text-gray-800">{name}</div>
        {desc && <div className="text-sm text-gray-500 mt-0.5">{desc}</div>}
      </div>
      {price && <div className="text-[#C9A227] font-semibold shrink-0">{price}</div>}
    </div>
  );
}

export function LaCarteContent() {
  const { t } = useI18n();
  const c = t.lacarte;

  const navSections = [
    { id: "formules", label: c.nav_formules },
    { id: "menus", label: c.nav_menus },
    { id: "grillades", label: c.nav_grillades },
    { id: "alademande", label: c.nav_alademande },
    { id: "desserts", label: c.nav_desserts },
    { id: "boissons", label: c.nav_boissons },
  ];

  return (
    <>
      {/* HERO */}
      <div className="relative text-white py-20 px-4 text-center overflow-hidden">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/food-4.jpg"
          alt="Homous maison"
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
          <p className="text-gray-300 max-w-xl mx-auto text-sm">{c.hero_desc}</p>
        </div>
      </div>

      {/* STICKY NAV */}
      <nav className="sticky top-16 z-40 bg-white border-b shadow-sm">
        <div className="max-w-5xl mx-auto px-4 flex overflow-x-auto gap-1 py-2">
          {navSections.map((s) => (
            <a
              key={s.id}
              href={`#${s.id}`}
              className="shrink-0 px-4 py-1.5 text-sm font-medium text-gray-600 rounded-full hover:bg-[#1C3D6E] hover:text-white transition-colors"
            >
              {s.label}
            </a>
          ))}
        </div>
      </nav>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-16 space-y-20">
        {/* FORMULES */}
        <section id="formules">
          <h2
            className="text-[#1C3D6E] text-3xl md:text-4xl mb-10 text-center"
            style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontStyle: "italic" }}
          >
            {c.formules_title}
          </h2>
          <div className="grid sm:grid-cols-2 gap-6 mb-10">
            {[
              { name: c.formule_2, price: "15,00 €" },
              { name: c.formule_3, price: "19,00 €" },
            ].map((f) => (
              <div
                key={f.name}
                className="bg-[#1C3D6E] text-white rounded-xl p-6 flex items-center justify-between"
              >
                <span className="font-medium">{f.name}</span>
                <span className="text-[#C9A227] font-bold text-xl">{f.price}</span>
              </div>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white border border-gray-100 rounded-xl p-6 shadow-sm">
              <MenuTag>{c.froids}</MenuTag>
              <div className="mt-4">
                {c.cold_mezze.map((item) => (
                  <MezzeItem key={item.name} name={item.name} desc={item.desc} />
                ))}
              </div>
            </div>
            <div className="bg-white border border-gray-100 rounded-xl p-6 shadow-sm">
              <MenuTag>{c.chauds}</MenuTag>
              <div className="mt-4">
                {c.hot_mezze.map((item) => (
                  <MezzeItem key={item.name} name={item.name} desc={item.desc} />
                ))}
              </div>
            </div>
          </div>

          <div className="mt-4 text-center text-sm text-gray-500 italic">{c.complement}</div>
        </section>

        {/* MENUS */}
        <section id="menus">
          <h2
            className="text-[#1C3D6E] text-3xl md:text-4xl mb-10 text-center"
            style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontStyle: "italic" }}
          >
            {c.menus_title}
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { data: c.menu_degustation, price: "27€", highlight: false },
              { data: c.menu_cedre, price: "29€", highlight: true },
              { data: c.menu_allerretour, price: "35€", highlight: false },
            ].map(({ data, price, highlight }) => (
              <div
                key={data.name}
                className={`rounded-2xl p-8 ${
                  highlight ? "bg-[#1C3D6E] text-white shadow-xl" : "bg-white border border-gray-100 shadow-sm"
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
                    <p className={`text-xs ${highlight ? "text-gray-300" : "text-gray-400"}`}>{data.sub}</p>
                  </div>
                  <span className="text-2xl font-bold text-[#C9A227]">{price}</span>
                </div>
                <ul className="space-y-2">
                  {data.items.map((item) => (
                    <li
                      key={item}
                      className={`flex items-start gap-2 text-sm ${highlight ? "text-gray-300" : "text-gray-600"}`}
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-[#C9A227] mt-1.5 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* GRILLADES */}
        <section id="grillades">
          <h2
            className="text-[#1C3D6E] text-3xl md:text-4xl mb-10 text-center"
            style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontStyle: "italic" }}
          >
            {c.grillades_title}
          </h2>
          <p className="text-center text-gray-500 text-sm mb-8">{c.grillades_note}</p>
          <div className="bg-white border border-gray-100 rounded-xl shadow-sm overflow-hidden">
            {c.grillades.map((item, i) => (
              <div
                key={item.name}
                className={`flex items-center justify-between gap-4 px-6 py-4 ${i % 2 === 0 ? "bg-gray-50" : "bg-white"}`}
              >
                <div>
                  <div className="font-semibold text-gray-800">{item.name}</div>
                  <div className="text-sm text-gray-500 mt-0.5">{item.desc}</div>
                </div>
                <div className="text-[#C9A227] font-bold text-lg shrink-0">
                  {["24,00 €", "21,00 €", "21,00 €", "21,00 €"][i]}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* À LA DEMANDE */}
        <section id="alademande">
          <h2
            className="text-[#1C3D6E] text-3xl md:text-4xl mb-10 text-center"
            style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontStyle: "italic" }}
          >
            {c.alademande_title}
          </h2>
          <p className="text-center text-gray-500 text-sm mb-8">{c.alademande_note}</p>
          <div className="grid sm:grid-cols-2 gap-4">
            {c.alademande.map((item) => (
              <div
                key={item.name}
                className="bg-white border border-gray-100 rounded-xl p-5 shadow-sm flex items-start justify-between gap-4"
              >
                <div>
                  <div className="font-semibold text-gray-800">{item.name}</div>
                  <div className="text-sm text-gray-500 mt-1">{item.desc}</div>
                </div>
                <div className="text-[#C9A227] font-bold shrink-0">12,00 €</div>
              </div>
            ))}
          </div>
        </section>

        {/* DESSERTS */}
        <section id="desserts">
          <h2
            className="text-[#1C3D6E] text-3xl md:text-4xl mb-10 text-center"
            style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontStyle: "italic" }}
          >
            {c.desserts_title}
          </h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            {c.desserts.map((item) => (
              <div
                key={item.name}
                className="bg-[#1C3D6E]/5 border border-[#1C3D6E]/10 rounded-xl p-5 text-center"
              >
                <div
                  className="font-semibold text-[#1C3D6E] mb-1"
                  style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
                >
                  {item.name}
                </div>
                <div className="text-sm text-gray-500 mb-3">{item.desc}</div>
                <div className="text-[#C9A227] font-bold text-lg">6,00 €</div>
              </div>
            ))}
          </div>
        </section>

        {/* BOISSONS */}
        <section id="boissons">
          <h2
            className="text-[#1C3D6E] text-3xl md:text-4xl mb-10 text-center"
            style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontStyle: "italic" }}
          >
            {c.boissons_title}
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white border border-gray-100 rounded-xl p-5 shadow-sm">
              <MenuTag>{c.softs}</MenuTag>
              <div className="mt-4 space-y-1">
                {[
                  ["Perrier 33cl", "3,50 €"],
                  ["Badoit/Evian 50cl", "3,50 €"],
                  ["Badoit/Evian 100cl", "4,50 €"],
                  ["Coca-Cola 33cl", "3,50 €"],
                  ["Schweppes 25cl", "3,50 €"],
                  ["Granini 25cl", "3,50 €"],
                  ["Sirop Jellab 25cl", "3,00 €"],
                  ["Sirop de Rose 25cl", "3,00 €"],
                ].map(([name, price]) => (
                  <div key={name} className="flex justify-between text-sm py-1 border-b border-gray-50 last:border-0">
                    <span className="text-gray-700">{name}</span>
                    <span className="text-[#C9A227] font-medium">{price}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white border border-gray-100 rounded-xl p-5 shadow-sm">
              <MenuTag>{c.chaudes}</MenuTag>
              <div className="mt-4 space-y-1">
                {[
                  ["Café Expresso", "2,00 €"],
                  ["Café libanais", "2,50 €"],
                  ["Café blanc libanais", "2,50 €"],
                  ["Infusion", "2,50 €"],
                  ["Thé à la menthe", "2,50 €"],
                ].map(([name, price]) => (
                  <div key={name} className="flex justify-between text-sm py-1 border-b border-gray-50 last:border-0">
                    <span className="text-gray-700">{name}</span>
                    <span className="text-[#C9A227] font-medium">{price}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white border border-gray-100 rounded-xl p-5 shadow-sm">
              <MenuTag>{c.aperitifs}</MenuTag>
              <div className="mt-4 space-y-1">
                {[
                  ["Arak Libanais 4cl", "6,00 €"],
                  ["Kir maison 12cl", "5,00 €"],
                  ["Vin d'or 5cl", "5,00 €"],
                  ["Martini 5cl", "5,00 €"],
                  ["Vodka 5cl", "5,00 €"],
                  ["Whisky 4cl", "7,00 €"],
                  ["Almaza 33cl", "6,00 €"],
                ].map(([name, price]) => (
                  <div key={name} className="flex justify-between text-sm py-1 border-b border-gray-50 last:border-0">
                    <span className="text-gray-700">{name}</span>
                    <span className="text-[#C9A227] font-medium">{price}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white border border-gray-100 rounded-xl p-5 shadow-sm">
              <MenuTag>{c.bouteilles}</MenuTag>
              <div className="mt-4 space-y-1">
                {[
                  ["Champagne 75cl", "70,00 €"],
                  ["Arak 70cl", "70,00 €"],
                  ["Whisky 70cl", "60,00 €"],
                  ["Nectar de Kefraya 4cl", "6,00 €"],
                  ["Cognac 4cl", "6,00 €"],
                  ["Poire 4cl", "6,00 €"],
                ].map(([name, price]) => (
                  <div key={name} className="flex justify-between text-sm py-1 border-b border-gray-50 last:border-0">
                    <span className="text-gray-700">{name}</span>
                    <span className="text-[#C9A227] font-medium">{price}</span>
                  </div>
                ))}
              </div>
              <p className="text-xs text-gray-400 mt-3 italic">{c.vins_note}</p>
            </div>
          </div>
          <p className="text-center text-xs text-gray-400 mt-6">{c.prix_note}</p>
        </section>

        {/* CTA */}
        <div className="text-center py-8 border-t border-gray-100">
          <p className="text-gray-600 mb-4">{c.cta_soiree}</p>
          <a
            href={RESERVATION_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#C9A227] text-white font-semibold rounded-full hover:bg-[#a88220] transition-colors shadow-md text-base"
          >
            {c.cta_reserve}
          </a>
        </div>
      </div>
    </>
  );
}
