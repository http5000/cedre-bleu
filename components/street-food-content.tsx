"use client";

import { useI18n } from "@/lib/i18n";

const RESERVATION_URL =
  "https://booking.ureserve.co/shop/external-booking/le-cedre-bleu?fullpage=true";

function SFItem({ name, desc, price }: { name: string; desc?: string; price?: string }) {
  return (
    <div className="flex items-start justify-between gap-4 py-3 border-b border-white/10 last:border-0">
      <div>
        <div className="font-semibold text-white">{name}</div>
        {desc && <div className="text-sm text-blue-200/70 mt-0.5">{desc}</div>}
      </div>
      {price && <span className="text-[#C9A227] font-bold text-lg shrink-0">{price}</span>}
    </div>
  );
}

function SFBlock({ id, title, children }: { id: string; title: string; children: React.ReactNode }) {
  return (
    <section id={id} className="bg-white/5 rounded-2xl p-6 md:p-8">
      <h2
        className="text-3xl text-white mb-6"
        style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontStyle: "italic" }}
      >
        {title}
      </h2>
      {children}
    </section>
  );
}

export function StreetFoodContent() {
  const { t } = useI18n();
  const sf = t.streetfood;

  const navIds = [
    { id: "sandwichs", label: sf.nav_sandwichs },
    { id: "formules", label: sf.nav_formules },
    { id: "plats", label: sf.nav_plats },
    { id: "manakiches", label: sf.nav_manakiches },
    { id: "mezze-chauds", label: sf.nav_mezze },
  ];

  const prices_sandwichs = ["8,00 €", "8,00 €", "8,00 €", "8,00 €"];
  const prices_formules = ["12,00 €", "15,00 €"];
  const prices_plats = ["18,00 €", "18,00 €", "16,00 €", "18,00 €", "18,00 €"];
  const prices_mezze = ["2,20 €", "2,00 €", "2,00 €", "2,00 €"];

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
            <span>{sf.hero_tag}</span>
          </div>
          <h1
            className="text-5xl md:text-6xl text-white mb-4"
            style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontStyle: "italic" }}
          >
            {sf.hero_title}
          </h1>
          <p className="text-blue-200 max-w-xl mx-auto">{sf.hero_desc}</p>
        </div>
      </div>

      {/* STICKY NAV */}
      <nav className="sticky top-16 z-40 bg-[#152f55]/90 backdrop-blur border-b border-white/10">
        <div className="max-w-5xl mx-auto px-4 flex overflow-x-auto gap-1 py-2">
          {navIds.map(({ id, label }) => (
            <a
              key={id}
              href={`#${id}`}
              className="shrink-0 px-4 py-1.5 text-sm font-medium text-blue-200 rounded-full hover:bg-[#C9A227] hover:text-white transition-colors"
            >
              {label}
            </a>
          ))}
        </div>
      </nav>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-14 space-y-8">
        {/* SANDWICHS */}
        <SFBlock id="sandwichs" title={sf.sandwichs_title}>
          <div className="grid md:grid-cols-2 gap-x-8">
            <div>
              {sf.sandwichs.slice(0, 3).map((item, i) => (
                <SFItem key={item.name} name={item.name} desc={item.desc} price={prices_sandwichs[i]} />
              ))}
            </div>
            <div>
              {sf.sandwichs.slice(3).map((item, i) => (
                <SFItem key={item.name} name={item.name} desc={item.desc} price={prices_sandwichs[3 + i]} />
              ))}
            </div>
          </div>
        </SFBlock>

        {/* FORMULES */}
        <SFBlock id="formules" title={sf.formules_title}>
          <div className="grid sm:grid-cols-2 gap-4">
            {sf.formules.map((f, i) => (
              <div key={f.name} className="bg-[#C9A227]/10 border border-[#C9A227]/30 rounded-xl p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3
                    className="text-white font-semibold text-lg"
                    style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
                  >
                    {f.name}
                  </h3>
                  <span className="text-[#C9A227] font-bold text-xl">{prices_formules[i]}</span>
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
        <SFBlock id="plats" title={sf.plats_title}>
          <div className="grid md:grid-cols-2 gap-x-8">
            <div>
              {sf.plats.slice(0, 3).map((item, i) => (
                <SFItem key={item.name} name={item.name} desc={item.desc} price={prices_plats[i]} />
              ))}
            </div>
            <div>
              {sf.plats.slice(3).map((item, i) => (
                <SFItem key={item.name} name={item.name} desc={item.desc} price={prices_plats[3 + i]} />
              ))}
            </div>
          </div>
        </SFBlock>

        {/* MANAKICHES */}
        <SFBlock id="manakiches" title={sf.manakiches_title}>
          <SFItem name={sf.manakiche.name} desc={sf.manakiche.desc} price="6,00 €" />
        </SFBlock>

        {/* MEZZÉ CHAUDS */}
        <SFBlock id="mezze-chauds" title={sf.mezze_title}>
          <div className="grid md:grid-cols-2 gap-x-8">
            <div>
              {sf.mezze_chauds.slice(0, 2).map((item, i) => (
                <SFItem key={item.name} name={item.name} desc={"desc" in item ? (item as { name: string; desc: string }).desc : undefined} price={prices_mezze[i]} />
              ))}
            </div>
            <div>
              {sf.mezze_chauds.slice(2).map((item, i) => (
                <SFItem key={item.name} name={item.name} desc={"desc" in item ? (item as { name: string; desc: string }).desc : undefined} price={prices_mezze[2 + i]} />
              ))}
            </div>
          </div>
        </SFBlock>

        {/* CTA */}
        <div className="text-center pt-8">
          <p className="text-blue-200 mb-4">{sf.cta_text}</p>
          <a
            href={RESERVATION_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#C9A227] text-white font-semibold rounded-full hover:bg-[#a88220] transition-colors shadow-lg text-base"
          >
            {sf.cta_btn}
          </a>
        </div>
      </div>
    </div>
  );
}
