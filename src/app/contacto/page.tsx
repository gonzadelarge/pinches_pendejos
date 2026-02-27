import type { Metadata } from "next";
import Link from "next/link";
import ContactForm from "@/components/ContactForm";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contacto",
  description: `Contacta con ${site.artist.seoName}. Consultas sobre obras, disponibilidad y colaboraciones.`,
};

export default function ContactoPage() {
  const { contact } = site;

  return (
    <div className="min-h-screen pt-24 pb-24 px-6">
      <div className="max-w-5xl mx-auto">
        {/* Back */}
        <Link
          href="/"
          className="inline-flex items-center gap-3 text-muted hover:text-gold transition-colors text-xs tracking-[0.25em] uppercase mb-14 group"
        >
          <span className="w-8 h-px bg-muted group-hover:bg-gold transition-colors" />
          Volver al inicio
        </Link>

        {/* Header */}
        <div className="mb-14">
          <p className="text-gold text-xs tracking-[0.5em] uppercase mb-4">Hablemos</p>
          <h1 className="font-serif text-5xl sm:text-7xl font-light text-cream leading-none mb-6">
            Contacto
          </h1>
          <p className="text-muted text-base font-light max-w-md">
            Para consultas sobre obras, adquisición, exposiciones o cualquier
            tipo de colaboración.
          </p>
        </div>

        {/* Layout: form + sidebar */}
        <div className="grid md:grid-cols-5 gap-14 md:gap-20">
          {/* Form */}
          <div className="md:col-span-3">
            <ContactForm />
          </div>

          {/* Direct contact sidebar */}
          <aside className="md:col-span-2">
            <p className="text-muted text-xs tracking-[0.25em] uppercase mb-8 pb-4 border-b border-border">
              Contacto directo
            </p>
            <div className="flex flex-col gap-7">
              <a href={`mailto:${contact.email}`} className="group flex flex-col gap-1">
                <span className="text-xs text-muted tracking-[0.2em] uppercase">Email</span>
                <span className="text-cream text-sm font-light group-hover:text-gold transition-colors">
                  {contact.email}
                </span>
              </a>
              <a
                href={`tel:${contact.phone.replace(/\s/g, "")}`}
                className="group flex flex-col gap-1"
              >
                <span className="text-xs text-muted tracking-[0.2em] uppercase">Teléfono</span>
                <span className="text-cream text-sm font-light group-hover:text-gold transition-colors">
                  {contact.phone}
                </span>
              </a>
              {contact.whatsapp && (
                <a
                  href={`https://wa.me/${contact.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex flex-col gap-1"
                >
                  <span className="text-xs text-muted tracking-[0.2em] uppercase">
                    WhatsApp
                  </span>
                  <span className="text-cream text-sm font-light group-hover:text-gold transition-colors">
                    Abrir conversación →
                  </span>
                </a>
              )}
              <a
                href={contact.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col gap-1"
              >
                <span className="text-xs text-muted tracking-[0.2em] uppercase">
                  Instagram
                </span>
                <span className="text-cream text-sm font-light group-hover:text-gold transition-colors">
                  {contact.instagram}
                </span>
              </a>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
