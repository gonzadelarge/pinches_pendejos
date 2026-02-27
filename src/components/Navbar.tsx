"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { site } from "@/lib/site";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-ink/95 backdrop-blur-sm border-b border-border py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          className="font-serif text-lg font-light tracking-[0.25em] text-cream uppercase hover:text-gold transition-colors duration-300"
        >
          {site.artist.name}
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {site.nav.map((item) => (
            <Link
              key={item.href}
              href={`/${item.href}`}
              className="text-xs tracking-[0.25em] uppercase text-muted hover:text-gold transition-colors duration-300"
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/contacto"
            className="text-xs tracking-[0.25em] uppercase border border-gold text-gold hover:bg-gold hover:text-ink px-5 py-2.5 transition-all duration-300"
          >
            Contacto
          </Link>
        </nav>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-1"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Abrir menú"
        >
          <span
            className={`block h-px bg-cream transition-all duration-300 ${
              menuOpen ? "w-6 rotate-45 translate-y-2.5" : "w-6"
            }`}
          />
          <span
            className={`block h-px bg-cream transition-all duration-300 ${
              menuOpen ? "opacity-0 w-6" : "w-4"
            }`}
          />
          <span
            className={`block h-px bg-cream transition-all duration-300 ${
              menuOpen ? "w-6 -rotate-45 -translate-y-2.5" : "w-6"
            }`}
          />
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-500 ${
          menuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        } bg-ink border-t border-border`}
      >
        <div className="px-6 py-6 flex flex-col gap-5">
          {site.nav.map((item) => (
            <Link
              key={item.href}
              href={`/${item.href}`}
              className="text-xs tracking-[0.25em] uppercase text-muted hover:text-gold transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/contacto"
            className="text-xs tracking-[0.25em] uppercase border border-gold text-gold px-5 py-3 text-center mt-2"
            onClick={() => setMenuOpen(false)}
          >
            Contacto
          </Link>
        </div>
      </div>
    </header>
  );
}
