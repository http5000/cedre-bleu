import Link from "next/link";
import { Phone, MapPin } from "lucide-react";

const RESERVATION_URL =
  "https://booking.ureserve.co/shop/external-booking/le-cedre-bleu?fullpage=true";

const GOOGLE_MAPS_URL =
  "https://www.google.com/maps/place/Le+C%C3%A8dre+Bleu/@45.7637971,4.8288872,15z";

const SOCIALS = [
  {
    label: "Facebook",
    href: "https://facebook.com/cedrebleulyon/",
    icon: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    ),
  },
  {
    label: "Instagram",
    href: "https://instagram.com/le_cedre_bleu_lyon/?hl=fr",
    icon: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
      </svg>
    ),
  },
  {
    label: "TripAdvisor",
    href: "https://www.tripadvisor.fr/Restaurant_Review-g187265-d3254257-Reviews-Le_Cedre_Bleu-Lyon_Rhone_Auvergne_Rhone_Alpes.html",
    icon: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12.006 4.295c-2.67 0-5.338.784-7.645 2.353H0l1.757 1.916a5.645 5.645 0 0 0-.754 2.797 5.666 5.666 0 0 0 5.666 5.665 5.63 5.63 0 0 0 3.755-1.43l1.582 1.723 1.582-1.723a5.63 5.63 0 0 0 3.755 1.43 5.666 5.666 0 0 0 5.666-5.665 5.645 5.645 0 0 0-.754-2.797L24 6.648h-4.361c-2.307-1.569-4.974-2.353-7.633-2.353zm-5.34 3.1a5.643 5.643 0 1 1 0 11.287 5.643 5.643 0 0 1 0-11.286zm10.68 0a5.643 5.643 0 1 1 0 11.287 5.643 5.643 0 0 1 0-11.286zm-10.68 1.57a4.074 4.074 0 1 0 0 8.148 4.074 4.074 0 0 0 0-8.148zm10.68 0a4.074 4.074 0 1 0 0 8.148 4.074 4.074 0 0 0 0-8.148zm-10.68 1.458a2.616 2.616 0 1 1 0 5.232 2.616 2.616 0 0 1 0-5.232zm10.68 0a2.616 2.616 0 1 1 0 5.232 2.616 2.616 0 0 1 0-5.232zm-10.68 1.07a1.546 1.546 0 1 0 0 3.092 1.546 1.546 0 0 0 0-3.091zm10.68 0a1.546 1.546 0 1 0 0 3.092 1.546 1.546 0 0 0 0-3.091z" />
      </svg>
    ),
  },
  {
    label: "Google Maps",
    href: GOOGLE_MAPS_URL,
    icon: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
      </svg>
    ),
  },
];

export function Footer() {
  return (
    <footer className="bg-[#0d1f3a] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1fr_auto_1fr_auto] gap-10 lg:gap-12">

          {/* Brand */}
          <div>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/logo-bleu.png"
              alt="Le Cèdre Bleu"
              className="h-12 w-auto mb-4 brightness-0 invert"
            />
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
              Restaurant libanais authentique à Lyon 5. Une cuisine faite maison avec amour et convivialité, par André &amp; Mary Eid.
            </p>
            <div className="flex gap-2.5 mt-5">
              {SOCIALS.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="w-9 h-9 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#C9A227] transition-colors duration-200"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <p className="text-[#C9A227] text-[10px] font-semibold uppercase tracking-[0.2em] mb-5">
              Navigation
            </p>
            <ul className="space-y-2.5">
              {[
                { label: "Accueil", href: "/" },
                { label: "La carte", href: "/la-carte" },
                { label: "Street Food", href: "/street-food" },
                { label: "Venir au restaurant", href: "/contact#acces" },
                { label: "Contact", href: "/contact" },
              ].map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-gray-400 hover:text-white text-sm transition-colors duration-150"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Horaires — deux univers côte à côte */}
          <div>
            <p className="text-[#C9A227] text-[10px] font-semibold uppercase tracking-[0.2em] mb-5">
              Horaires
            </p>
            <div className="grid grid-cols-2 gap-6">
              {/* Restaurant */}
              <div>
                <p className="text-white text-xs font-semibold mb-3 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C9A227] inline-block" />
                  Restaurant
                </p>
                <div className="space-y-2 text-xs text-gray-400">
                  <div className="flex justify-between gap-3">
                    <span>Lundi</span>
                    <span className="text-gray-600 italic">Fermé</span>
                  </div>
                  <div>
                    <div className="flex justify-between gap-3">
                      <span className="shrink-0">Mar — Sam</span>
                      <span className="text-right text-gray-300">
                        11h30 – 14h30
                        <br />
                        19h00 – 22h00
                      </span>
                    </div>
                  </div>
                  <div className="flex justify-between gap-3">
                    <span>Dimanche</span>
                    <span className="text-gray-600 italic">Fermé</span>
                  </div>
                </div>
              </div>

              {/* Street Food */}
              <div>
                <p className="text-white text-xs font-semibold mb-3 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-white/40 inline-block" />
                  Street Food
                </p>
                <div className="space-y-2 text-xs text-gray-400">
                  <div className="flex justify-between gap-3">
                    <span>Lundi</span>
                    <span className="text-gray-600 italic">Fermé</span>
                  </div>
                  <div className="flex justify-between gap-3">
                    <span className="shrink-0">Mar — Sam</span>
                    <span className="text-gray-300">19h00 – 22h00</span>
                  </div>
                  <div className="flex justify-between gap-3">
                    <span>Dimanche</span>
                    <span className="text-gray-600 italic">Fermé</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact */}
          <div>
            <p className="text-[#C9A227] text-[10px] font-semibold uppercase tracking-[0.2em] mb-5">
              Nous trouver
            </p>
            <div className="space-y-3.5 text-sm text-gray-400 mb-6">
              <div className="flex gap-2.5 items-start">
                <MapPin className="w-4 h-4 text-[#C9A227] shrink-0 mt-0.5" />
                <a
                  href={GOOGLE_MAPS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors leading-snug"
                >
                  10 quai Romain Rolland
                  <br />
                  69005 Lyon
                </a>
              </div>
              <div className="flex gap-2.5 items-start">
                <Phone className="w-4 h-4 text-[#C9A227] shrink-0 mt-0.5" />
                <div>
                  <a href="tel:0472560608" className="block hover:text-white transition-colors">
                    04 72 56 06 08
                  </a>
                  <a href="tel:0635411438" className="block hover:text-white transition-colors">
                    06 35 41 14 38
                  </a>
                </div>
              </div>
            </div>
            <a
              href={RESERVATION_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-5 py-2.5 bg-[#C9A227] text-white text-sm font-semibold rounded-full hover:bg-[#a88220] transition-colors duration-200"
            >
              Réserver une table
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-white/[0.07]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-gray-600">
          <span>© {new Date().getFullYear()} Le Cèdre Bleu — Tous droits réservés</span>
          <span>
            Réalisation{" "}
            <a href="https://yumea.fr" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400 transition-colors">
              Yumea.fr
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
}
