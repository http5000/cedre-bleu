import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "La Carte | Le Cèdre Bleu – Restaurant Libanais Lyon 5",
  description:
    "Découvrez notre carte : mezzés, menus libanais, grillades, desserts et boissons. Tout fait maison.",
};

const RESERVATION_URL =
  "https://booking.ureserve.co/shop/external-booking/le-cedre-bleu?fullpage=true";

const NAV_SECTIONS = [
  { id: "formules", label: "Formules" },
  { id: "menus", label: "Menus" },
  { id: "grillades", label: "Grillades" },
  { id: "alademande", label: "À la demande" },
  { id: "desserts", label: "Desserts" },
  { id: "boissons", label: "Boissons" },
];

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <h2
      className="text-[#1C3D6E] text-3xl md:text-4xl mb-10 text-center"
      style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontStyle: "italic" }}
    >
      {children}
    </h2>
  );
}

function MenuTag({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-block bg-[#C9A227]/10 text-[#C9A227] text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wider">
      {children}
    </span>
  );
}

function MezzeItem({
  name,
  desc,
  price,
}: {
  name: string;
  desc?: string;
  price?: string;
}) {
  return (
    <div className="flex items-start justify-between gap-4 py-3 border-b border-gray-100 last:border-0">
      <div>
        <div className="font-medium text-gray-800">{name}</div>
        {desc && <div className="text-sm text-gray-500 mt-0.5">{desc}</div>}
      </div>
      {price && (
        <div className="text-[#C9A227] font-semibold shrink-0">{price}</div>
      )}
    </div>
  );
}

export default function LaCarte() {
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
            Restaurant Libanais · Lyon 5
          </p>
          <h1
            className="text-4xl md:text-5xl mb-4"
            style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontStyle: "italic" }}
          >
            Notre Carte
          </h1>
          <p className="text-gray-300 max-w-xl mx-auto text-sm">
            Toutes nos préparations sont 100% faites maison, disponibles en version végétarienne,
            végétalienne, sans gluten et sans lactose à la demande.
          </p>
        </div>
      </div>

      {/* STICKY NAV */}
      <nav className="sticky top-16 z-40 bg-white border-b shadow-sm">
        <div className="max-w-5xl mx-auto px-4 flex overflow-x-auto gap-1 py-2">
          {NAV_SECTIONS.map((s) => (
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
          <SectionTitle>Formules Mezzés</SectionTitle>
          <div className="grid sm:grid-cols-2 gap-6 mb-10">
            {[
              { name: "2 Mezzés au choix", price: "15,00 €" },
              { name: "3 Mezzés au choix", price: "19,00 €" },
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
              <MenuTag>Froids</MenuTag>
              <div className="mt-4">
                {[
                  { name: "Homous", desc: "Purée de pois chiches, crème de sésame, citron" },
                  { name: "Moutabal", desc: "Caviar d'aubergine, crème de sésame, citron" },
                  { name: "Taboulé", desc: "Tomates, blé concassé, persil, citron, oignons, huile d'olive" },
                  { name: "Labné", desc: "Crème de fromage frais de vache" },
                  { name: "Moussaka", desc: "Aubergines à la sauce tomate, pois chiches, poivrons, oignons" },
                  { name: "Feuilles de vigne", desc: "Farcies au riz, tomates, oignons, persil, citron, huile d'olive" },
                ].map((item) => (
                  <MezzeItem key={item.name} name={item.name} desc={item.desc} />
                ))}
              </div>
            </div>

            <div className="bg-white border border-gray-100 rounded-xl p-6 shadow-sm">
              <MenuTag>Chauds</MenuTag>
              <div className="mt-4">
                {[
                  { name: "Kebbé boulette", desc: "Croquette de blé concassé, farcie à la viande de boeuf hachée et frite" },
                  { name: "Falafel ♥", desc: "Beignet de légumes secs, pois chiches, fèves, coriandre verte" },
                  { name: "Safiha", desc: "Chausson à la viande, tomate, oignons et pignons" },
                  { name: "Manakish zaatar", desc: "Mini pizza libanaise au zaatar (mélange au thym)" },
                  { name: "Fatayers", desc: "Petits chaussons aux épinards" },
                  { name: "Samboussik viande ou fromage", desc: "Chausson garni d'agneau ou de fromage" },
                  { name: "Rikakat", desc: "Feuilletés au fromage" },
                ].map((item) => (
                  <MezzeItem key={item.name} name={item.name} desc={item.desc} />
                ))}
              </div>
            </div>
          </div>

          <div className="mt-4 text-center text-sm text-gray-500 italic">
            En complément : 1 mezzé chaud (+2,50 €/pièce) ou 1 brochette (+9,00 €/pièce)
          </div>
        </section>

        {/* MENUS */}
        <section id="menus">
          <SectionTitle>Nos Menus</SectionTitle>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                name: "Menu Dégustation",
                price: "27€",
                sub: "2 personnes minimum",
                items: [
                  "Assortiment de 10 mezzés",
                  "Homous, Moutabal, Moussaka, Taboulé",
                  "Feuille de vigne, Kebbé boulette, Fatayer, Safiha, Manakish, Falafel",
                  "Dessert : Katayef Achta",
                ],
                highlight: false,
              },
              {
                name: "Menu Le Cèdre Bleu",
                price: "29€",
                sub: "Notre signature",
                items: [
                  "6 mezzés froids et chauds",
                  "Houmous, Moutabal, Taboulé + 3 chaussons du moment",
                  "2 grillades (porc ou bœuf & poulet)",
                  "Riz à la libanaise, légumes de saison",
                  "Dessert : Katayef Achta",
                ],
                highlight: true,
              },
              {
                name: "Menu Aller-Retour",
                price: "35€",
                sub: "L'expérience complète",
                items: [
                  "Apéritif au choix",
                  "6 mezzés froids et chauds",
                  "2 grillades (porc ou bœuf & poulet)",
                  "Riz à la libanaise, légumes de saison",
                  "Dessert : Katayef Achta",
                  "Café ou infusion",
                ],
                highlight: false,
              },
            ].map((menu) => (
              <div
                key={menu.name}
                className={`rounded-2xl p-8 ${
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
                      {menu.sub}
                    </p>
                  </div>
                  <span className="text-2xl font-bold text-[#C9A227]">{menu.price}</span>
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
        </section>

        {/* GRILLADES */}
        <section id="grillades">
          <SectionTitle>Grillades</SectionTitle>
          <p className="text-center text-gray-500 text-sm mb-8">
            Servies avec du riz à la libanaise ou taboulé et houmous
          </p>
          <div className="bg-white border border-gray-100 rounded-xl shadow-sm overflow-hidden">
            {[
              {
                name: "Grillades mixtes",
                desc: "Assortiment de 3 brochettes : Agneau, taouk et kafta",
                price: "24,00 €",
              },
              {
                name: "Chiche Taouk",
                desc: "Deux brochettes de suprême de volaille marinée, huile d'olive, ail",
                price: "21,00 €",
              },
              {
                name: "Agneau",
                desc: "Deux brochettes d'agneau grillé, marinées à l'huile d'olive",
                price: "21,00 €",
              },
              {
                name: "Kafta",
                desc: "Deux brochettes de boulettes de viande hachée d'agneau, tomates, oignons",
                price: "21,00 €",
              },
            ].map((item, i) => (
              <div
                key={item.name}
                className={`flex items-center justify-between gap-4 px-6 py-4 ${
                  i % 2 === 0 ? "bg-gray-50" : "bg-white"
                }`}
              >
                <div>
                  <div className="font-semibold text-gray-800">{item.name}</div>
                  <div className="text-sm text-gray-500 mt-0.5">{item.desc}</div>
                </div>
                <div className="text-[#C9A227] font-bold text-lg shrink-0">{item.price}</div>
              </div>
            ))}
          </div>
        </section>

        {/* À LA DEMANDE */}
        <section id="alademande">
          <SectionTitle>À la demande</SectionTitle>
          <p className="text-center text-gray-500 text-sm mb-8">
            Uniquement à la demande, 24 ou 48h à l&apos;avance — en complément d&apos;un menu, grillade ou formule
          </p>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              { name: "Makanek (250g)", desc: "Petites saucisses libanaises flambées au citron", price: "12,00 €" },
              { name: "Sojok (250g)", desc: "Tranches de saucisses épicées, flambées au citron", price: "12,00 €" },
              { name: "Kafta Nayé (250g)", desc: "Viande d'agneau crue façon tartare, pilée et agrémentée de persil et d'oignon", price: "12,00 €" },
              { name: "Bastorma (200g)", desc: "Tranche de bœuf fumé & séché aux épices d'Orient faites maison", price: "12,00 €" },
              { name: "Kebbé Nayé (250g)", desc: "Tartare d'agneau au blé concassé, épices", price: "12,00 €" },
              { name: "Foie de volaille (300g)", desc: "Foies de volaille flambés, ail, citron et coriandre", price: "12,00 €" },
            ].map((item) => (
              <div
                key={item.name}
                className="bg-white border border-gray-100 rounded-xl p-5 shadow-sm flex items-start justify-between gap-4"
              >
                <div>
                  <div className="font-semibold text-gray-800">{item.name}</div>
                  <div className="text-sm text-gray-500 mt-1">{item.desc}</div>
                </div>
                <div className="text-[#C9A227] font-bold shrink-0">{item.price}</div>
              </div>
            ))}
          </div>
        </section>

        {/* DESSERTS */}
        <section id="desserts">
          <SectionTitle>Desserts</SectionTitle>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            {[
              { name: "Baklawa ×4", desc: "Pâte feuilletée, farcie aux pistaches, noix, noix de cajou et miel", price: "6,00 €" },
              { name: "Mouhalabieh", desc: "Flan libanais, lait, sucre", price: "6,00 €" },
              { name: "Glace maison", desc: "Deux boules bouza achta, parfumée à la gomme d'arabique et à la rose", price: "6,00 €" },
              { name: "Katayef Achta ×2 ♥", desc: "Mini crêpes libanaises moelleuses, garnies de crème de lait, servies avec sirop de sucre", price: "6,00 €" },
              { name: "Ma'moul", desc: "Pâte sablée farcie aux pistaches, noix et dates", price: "6,00 €" },
            ].map((item) => (
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
                <div className="text-[#C9A227] font-bold text-lg">{item.price}</div>
              </div>
            ))}
          </div>
        </section>

        {/* BOISSONS */}
        <section id="boissons">
          <SectionTitle>Boissons</SectionTitle>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white border border-gray-100 rounded-xl p-5 shadow-sm">
              <MenuTag>Softs</MenuTag>
              <div className="mt-4 space-y-1">
                {[
                  ["Perrier 33cl", "3,50 €"],
                  ["Badoit/Evian 50cl", "3,50 €"],
                  ["Badoit/Evian 100cl", "4,50 €"],
                  ["Coca-Cola 33cl", "3,50 €"],
                  ["Schweppes 25cl", "3,50 €"],
                  ["Granini 25cl (orange/ananas)", "3,50 €"],
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
              <MenuTag>Chaudes</MenuTag>
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
              <MenuTag>Apéritifs</MenuTag>
              <div className="mt-4 space-y-1">
                {[
                  ["Arak Libanais 4cl", "6,00 €"],
                  ["Kir maison 12cl", "5,00 €"],
                  ["Vin d'or 5cl", "5,00 €"],
                  ["Martini 5cl", "5,00 €"],
                  ["Vodka 5cl", "5,00 €"],
                  ["Whisky 4cl (J&B/Ballantines)", "7,00 €"],
                  ["Almaza (bière libanaise) 33cl", "6,00 €"],
                ].map(([name, price]) => (
                  <div key={name} className="flex justify-between text-sm py-1 border-b border-gray-50 last:border-0">
                    <span className="text-gray-700">{name}</span>
                    <span className="text-[#C9A227] font-medium">{price}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white border border-gray-100 rounded-xl p-5 shadow-sm">
              <MenuTag>Bouteilles & Digestifs</MenuTag>
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
              <p className="text-xs text-gray-400 mt-3 italic">
                Notre sélection de vins libanais est à retrouver sur place.
              </p>
            </div>
          </div>
          <p className="text-center text-xs text-gray-400 mt-6">
            Prix TTC. Les prix affichés sur place font foi.
          </p>
        </section>

        {/* CTA */}
        <div className="text-center py-8 border-t border-gray-100">
          <p className="text-gray-600 mb-4">Prêt à passer une belle soirée ?</p>
          <a
            href={RESERVATION_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#C9A227] text-white font-semibold rounded-full hover:bg-[#a88220] transition-colors shadow-md text-base"
          >
            Réserver une table
          </a>
        </div>
      </div>
    </>
  );
}
