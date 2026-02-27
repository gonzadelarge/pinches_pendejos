import Link from "next/link";
import { site } from "@/lib/site";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border py-10 px-6">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-5 text-center sm:text-left">
        <Link
          href="/"
          className="font-serif text-cream text-sm tracking-[0.25em] uppercase hover:text-gold transition-colors"
        >
          {site.artist.name}
        </Link>

        <p className="text-muted text-xs order-last sm:order-none">
          © {year} {site.artist.name}. Todos los derechos reservados.
        </p>

        <nav className="flex gap-6">
          <a
            href={site.contact.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted hover:text-gold transition-colors text-xs tracking-[0.2em] uppercase"
          >
            Instagram
          </a>
          {site.contact.whatsapp && (
            <a
              href={`https://wa.me/${site.contact.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted hover:text-gold transition-colors text-xs tracking-[0.2em] uppercase"
            >
              WhatsApp
            </a>
          )}
          <Link
            href="/contacto"
            className="text-muted hover:text-gold transition-colors text-xs tracking-[0.2em] uppercase"
          >
            Contacto
          </Link>
        </nav>
      </div>
    </footer>
  );
}
