"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Phone, Menu, X, ChevronDown } from "lucide-react";

const NAV_LINKS = [
  { label: "Accueil", href: "/" },
  {
    label: "La carte",
    href: "/la-carte",
    children: [
      { label: "Formules & Mezzés", href: "/la-carte#formules" },
      { label: "Menus", href: "/la-carte#menus" },
      { label: "Grillades", href: "/la-carte#grillades" },
      { label: "Desserts", href: "/la-carte#desserts" },
      { label: "Boissons", href: "/la-carte#boissons" },
    ],
  },
  { label: "Street Food", href: "/street-food", highlight: true },
  { label: "Venir au restaurant", href: "/contact#acces" },
  { label: "Contact", href: "/contact" },
];

const RESERVATION_URL =
  "https://booking.ureserve.co/shop/external-booking/le-cedre-bleu?fullpage=true";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [carteOpen, setCarteOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* Top bar */}
      <div className="bg-[#1C3D6E] text-white text-sm py-2 px-4 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <a
            href="https://facebook.com/cedrebleulyon/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#C9A227] transition-colors"
            aria-label="Facebook"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
            </svg>
          </a>
          <a
            href="https://instagram.com/le_cedre_bleu_lyon/?hl=fr"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#C9A227] transition-colors"
            aria-label="Instagram"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
            </svg>
          </a>
          <a
            href="https://www.tripadvisor.fr/Restaurant_Review-g187265-d3254257-Reviews-Le_Cedre_Bleu-Lyon_Rhone_Auvergne_Rhone_Alpes.html"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#C9A227] transition-colors"
            aria-label="TripAdvisor"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12.006 4.295c-2.67 0-5.338.784-7.645 2.353H0l1.757 1.916a5.645 5.645 0 0 0-.754 2.797 5.666 5.666 0 0 0 5.666 5.665 5.63 5.63 0 0 0 3.755-1.43l1.582 1.723 1.582-1.723a5.63 5.63 0 0 0 3.755 1.43 5.666 5.666 0 0 0 5.666-5.665 5.645 5.645 0 0 0-.754-2.797L24 6.648h-4.361c-2.307-1.569-4.974-2.353-7.633-2.353zm0 1.57c1.73 0 3.432.397 4.966 1.134a8.829 8.829 0 0 0-4.966-1.5 8.83 8.83 0 0 0-4.967 1.5c1.535-.737 3.237-1.134 4.967-1.134zm-5.34 1.53a5.643 5.643 0 1 1 0 11.287 5.643 5.643 0 0 1 0-11.286zm10.68 0a5.643 5.643 0 1 1 0 11.287 5.643 5.643 0 0 1 0-11.286zm-10.68 1.57a4.074 4.074 0 1 0 0 8.148 4.074 4.074 0 0 0 0-8.148zm10.68 0a4.074 4.074 0 1 0 0 8.148 4.074 4.074 0 0 0 0-8.148zm-10.68 1.458a2.616 2.616 0 1 1 0 5.232 2.616 2.616 0 0 1 0-5.232zm10.68 0a2.616 2.616 0 1 1 0 5.232 2.616 2.616 0 0 1 0-5.232zm-10.68 1.07a1.546 1.546 0 1 0 0 3.092 1.546 1.546 0 0 0 0-3.091zm10.68 0a1.546 1.546 0 1 0 0 3.092 1.546 1.546 0 0 0 0-3.091z" />
            </svg>
          </a>
          <a
            href="https://www.google.com/maps/place/Le+C%C3%A8dre+Bleu/@45.7637971,4.8288872,15z"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#C9A227] transition-colors"
            aria-label="Google Maps"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
            </svg>
          </a>
        </div>
        <a
          href="tel:0472560608"
          className="flex items-center gap-2 hover:text-[#C9A227] transition-colors font-medium"
        >
          <Phone className="w-4 h-4" />
          <span>04 72 56 06 08 / 06 35 41 14 38</span>
        </a>
      </div>

      {/* Main nav */}
      <nav
        className={`sticky top-0 z-50 bg-white border-b transition-shadow duration-300 ${
          scrolled ? "shadow-md" : "shadow-sm"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link href="/" className="flex items-center shrink-0">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/logo-bleu.png"
                alt="Le Cèdre Bleu"
                height={52}
                className="h-13 w-auto"
              />
            </Link>

            {/* Desktop nav */}
            <div className="hidden lg:flex items-center gap-1">
              {NAV_LINKS.map((link) =>
                link.children ? (
                  <div key={link.href} className="relative group">
                    <button
                      className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-gray-700 hover:text-[#1C3D6E] transition-colors"
                      onMouseEnter={() => setCarteOpen(true)}
                      onMouseLeave={() => setCarteOpen(false)}
                    >
                      {link.label}
                      <ChevronDown className="w-3.5 h-3.5" />
                    </button>
                    <div
                      className="absolute top-full left-0 bg-white shadow-lg border rounded-lg py-2 min-w-[200px] opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto transition-opacity duration-150"
                      onMouseEnter={() => setCarteOpen(true)}
                      onMouseLeave={() => setCarteOpen(false)}
                    >
                      {link.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-navy-50 hover:text-[#1C3D6E] transition-colors"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                ) : link.highlight ? (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="px-3 py-1.5 text-sm font-semibold bg-[#1C3D6E] text-white rounded-full hover:bg-[#152f55] transition-colors"
                  >
                    {link.label}
                  </Link>
                ) : (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-[#1C3D6E] transition-colors"
                  >
                    {link.label}
                  </Link>
                )
              )}

              <a
                href={RESERVATION_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="ml-4 px-5 py-2 bg-[#C9A227] text-white text-sm font-semibold rounded-full hover:bg-[#a88220] transition-colors shadow-sm"
              >
                Réserver une table
              </a>
            </div>

            {/* Mobile toggle */}
            <button
              className="lg:hidden p-2 text-gray-600 hover:text-[#1C3D6E]"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Menu"
            >
              {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="lg:hidden border-t bg-white px-4 pb-4">
            <div className="flex flex-col gap-1 pt-2">
              {NAV_LINKS.map((link) =>
                link.children ? (
                  <div key={link.href}>
                    <div className="px-3 py-2 text-xs font-semibold text-gray-400 uppercase tracking-wider">
                      La carte
                    </div>
                    {link.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        onClick={() => setMobileOpen(false)}
                        className="block px-6 py-2 text-sm text-gray-600 hover:text-[#1C3D6E]"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                ) : (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className={`px-3 py-2 text-sm font-medium rounded-lg transition-colors ${
                      link.highlight
                        ? "bg-[#1C3D6E] text-white"
                        : "text-gray-700 hover:text-[#1C3D6E] hover:bg-gray-50"
                    }`}
                  >
                    {link.label}
                  </Link>
                )
              )}
              <a
                href={RESERVATION_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 px-4 py-2.5 bg-[#C9A227] text-white text-sm font-semibold rounded-full text-center hover:bg-[#a88220] transition-colors"
              >
                Réserver une table
              </a>
            </div>
          </div>
        )}
      </nav>
    </>
  );
}
