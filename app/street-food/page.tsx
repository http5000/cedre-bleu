import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Street Food | Le Cèdre Bleu – Sandwichs & Formules Lyon 5",
  description:
    "Chawarma, falafel, manakiches et formules street food libanaise à Lyon 5. Même qualité maison, format rapide.",
};

function PriceTag({ children }: { children: React.ReactNode }) {
  return (
    <span className="text-[#C9A227] font-bold text-lg shrink-0">{children}</span>
  );
}

function SFItem({
  name,
  desc,
  price,
}: {
  name: string;
  desc?: string;
  price: string;
}) {
  return (
    <div className="flex items-start justify-between gap-4 py-3 border-b border-white/10 last:border-0">
      <div>
        <div className="font-semibold text-white">{name}</div>
        {desc && <div className="text-sm text-blue-200/70 mt-0.5">{desc}</div>}
      </div>
      <PriceTag>{price}</PriceTag>
    </div>
  );
}

function SFBlock({
  id,
  title,
  children,
}: {
  id: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="bg-white/5 rounded-2xl p-6 md:p-8">
      <h2
        className="text-3xl text-white mb-6"
        style={{
          fontFamily: "var(--font-playfair), Georgia, serif",
          fontStyle: "italic",
        }}
      >
        {title}
      </h2>
      {children}
    </section>
  );
}

export default function StreetFood() {
  return (
    <div className="bg-[#0d1f3a] min-h-screen">
      {/* HERO */}
      <div className="relative text-white py-24 px-4 text-center overflow-hidden">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/sf-1.png"
          alt="Street food libanais"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0d1f3a]/75 to-[#0d1f3a]/90" />
        <div className="relative">
          <div className="inline-flex items-center gap-2 bg-[#C9A227]/20 text-[#C9A227] text-xs font-semibold uppercase tracking-widest px-4 py-2 rounded-full mb-6">
            <span>🥙</span>
            <span>Rapide · Savoureux · Libanais</span>
          </div>
          <h1
            className="text-5xl md:text-6xl text-white mb-4"
            style={{
              fontFamily: "var(--font-playfair), Georgia, serif",
              fontStyle: "italic",
            }}
          >
            Street Food
          </h1>
          <p className="text-blue-200 max-w-xl mx-auto">
            Le meilleur de la cuisine libanaise dans un format rapide. Mêmes produits frais,
            même amour du fait maison.
          </p>
        </div>
      </div>

      {/* STICKY NAV */}
      <nav className="sticky top-16 z-40 bg-[#152f55]/90 backdrop-blur border-b border-white/10">
        <div className="max-w-5xl mx-auto px-4 flex overflow-x-auto gap-1 py-2">
          {["sandwichs", "formules", "plats", "manakiches", "mezze-chauds"].map((id) => (
            <a
              key={id}
              href={`#${id}`}
              className="shrink-0 px-4 py-1.5 text-sm font-medium text-blue-200 rounded-full hover:bg-[#C9A227] hover:text-white transition-colors capitalize"
            >
              {id.replace("-", " ")}
            </a>
          ))}
        </div>
      </nav>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-14 space-y-8">
        {/* SANDWICHS */}
        <SFBlock id="sandwichs" title="Sandwichs">
          <div className="grid md:grid-cols-2 gap-x-8">
            <div>
              <SFItem
                name="Chawarma viande"
                desc="Émincé de bœuf mariné rôti à la broche, persil, menthe, oignons, tomates, sauce tarator (sésame) ou homous"
                price="8,00 €"
              />
              <SFItem
                name="Chawarma Poulet"
                desc="Émincé de poulet mariné rôti à la broche, crème à l'ail, cornichons"
                price="8,00 €"
              />
              <SFItem
                name="Falafel"
                desc="Beignets de légumes secs, d'un mélange de fèves, pois chiches, épices et crème de sésame, persil, menthe, cornichons et sauce tarator (sésame)"
                price="8,00 €"
              />
            </div>
            <div>
              <SFItem
                name="Sojok"
                desc="Viande de bœuf épicé, tomates, cornichons"
                price="8,00 €"
              />
            </div>
          </div>
        </SFBlock>

        {/* FORMULES */}
        <SFBlock id="formules" title="Formules">
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              {
                name: "Menu Casse-croûte",
                price: "12,00 €",
                items: ["1 Sandwich au choix", "+ 1 frite", "+ 1 Soda 33cl ou Eau 50cl"],
              },
              {
                name: "Menu Casse-Croûte",
                price: "15,00 €",
                items: ["2 Sandwichs au choix", "+ 1 Soda 33cl ou Eau 50cl"],
              },
            ].map((f) => (
              <div
                key={f.name + f.price}
                className="bg-[#C9A227]/10 border border-[#C9A227]/30 rounded-xl p-6"
              >
                <div className="flex items-center justify-between mb-4">
                  <h3
                    className="text-white font-semibold text-lg"
                    style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
                  >
                    {f.name}
                  </h3>
                  <span className="text-[#C9A227] font-bold text-xl">{f.price}</span>
                </div>
                <ul className="space-y-1">
                  {f.items.map((item) => (
                    <li key={item} className="text-blue-200 text-sm flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#C9A227]" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </SFBlock>

        {/* PLATS DU JOUR */}
        <SFBlock id="plats" title="Plats du jour (midi uniquement)">
          <div className="grid md:grid-cols-2 gap-x-8">
            <div>
              <SFItem
                name="Chiche taouk"
                desc="2 Brochettes de poulet mariné, sauce à l'ail, homous, taboulé ou fatouche"
                price="18,00 €"
              />
              <SFItem
                name="Assiette kafta"
                desc="2 Brochettes de bœuf haché épicé, tomates, homous, taboulé ou fatouche"
                price="18,00 €"
              />
              <SFItem
                name="Assiette chawarma bœuf"
                desc="Émincé de bœuf mariné rôti à la broche, persil, menthe, oignons, tomates, persil, sauce tarator, homous, taboulé ou fatouche"
                price="16,00 €"
              />
            </div>
            <div>
              <SFItem
                name="Assiette chawarma poulet"
                desc="Émincé de poulet mariné rôti à la broche, crème à l'ail, cornichons, homous, taboulé ou fatouche"
                price="18,00 €"
              />
              <SFItem
                name="Assiette chawarma mixte"
                desc="Émincé de bœuf et poulet, homous, taboulé ou fatouche"
                price="18,00 €"
              />
            </div>
          </div>
        </SFBlock>

        {/* MANAKICHES */}
        <SFBlock id="manakiches" title="Manakiches">
          <SFItem
            name="Manakiche au thym"
            desc="Pizza au thym sauvage, graines de sésame et huile d'olive (à la demande offert : carrée de tomate et menthe)"
            price="6,00 €"
          />
        </SFBlock>

        {/* MEZZÉ CHAUDS */}
        <SFBlock id="mezze-chauds" title="Mezzé chauds">
          <div className="grid md:grid-cols-2 gap-x-8">
            <div>
              <SFItem
                name="Kebbé boulette"
                desc="Croquette de blé concassé, farcie à la viande de bœuf hachée et frite"
                price="2,20 €"
              />
              <SFItem name="Falafel" price="2,00 €" />
            </div>
            <div>
              <SFItem
                name="Samboussik fromage"
                desc="Chausson garni de fromage de vache"
                price="2,00 €"
              />
              <SFItem
                name="Samboussik viande"
                desc="Chausson garni d'agneau"
                price="2,00 €"
              />
            </div>
          </div>
        </SFBlock>

        {/* CTA */}
        <div className="text-center pt-8">
          <p className="text-blue-200 mb-4">Vous préférez le restaurant gastronomique ?</p>
          <a
            href="https://booking.ureserve.co/shop/external-booking/le-cedre-bleu?fullpage=true"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#C9A227] text-white font-semibold rounded-full hover:bg-[#a88220] transition-colors shadow-lg text-base"
          >
            Réserver une table au restaurant
          </a>
        </div>
      </div>
    </div>
  );
}
