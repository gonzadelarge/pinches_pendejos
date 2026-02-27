import Link from "next/link";
import { site } from "@/lib/site";
import AnimatedSection from "./AnimatedSection";

export default function Contact() {
  const { contact } = site;

  return (
    <section id="contacto" className="py-24 px-6 relative overflow-hidden">
      {/* Subtle background accent */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 50% 100%, rgba(196,122,82,0.04) 0%, transparent 70%)",
        }}
      />

      <div className="relative max-w-3xl mx-auto text-center">
        <AnimatedSection>
          <h2 className="font-serif text-3xl sm:text-4xl font-light text-cream mb-6 tracking-wide">
            Contacto
          </h2>
          <p className="text-muted text-base font-light mb-14 max-w-md mx-auto">
            Para consultas, adquisición de obras o colaboraciones.
          </p>
        </AnimatedSection>

        {/* Direct contact buttons */}
        <AnimatedSection
          delay={0.15}
          className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-10"
        >
          <a
            href={`mailto:${contact.email}`}
            className="w-full sm:w-auto border border-border text-cream hover:border-gold hover:text-gold transition-all duration-300 px-7 py-4 text-xs tracking-[0.2em] uppercase"
          >
            {contact.email}
          </a>
          <a
            href={`tel:${contact.phone.replace(/\s/g, "")}`}
            className="w-full sm:w-auto border border-border text-cream hover:border-gold hover:text-gold transition-all duration-300 px-7 py-4 text-xs tracking-[0.2em] uppercase"
          >
            {contact.phone}
          </a>
        </AnimatedSection>

        {/* Social links */}
        <AnimatedSection
          delay={0.25}
          className="flex items-center justify-center gap-8 mb-14"
        >
          <a
            href={contact.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted hover:text-gold transition-colors text-xs tracking-[0.25em] uppercase"
          >
            Instagram
          </a>
          {contact.whatsapp && (
            <a
              href={`https://wa.me/${contact.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted hover:text-gold transition-colors text-xs tracking-[0.25em] uppercase"
            >
              WhatsApp
            </a>
          )}
        </AnimatedSection>

        {/* Full form CTA */}
        <AnimatedSection delay={0.35}>
          <Link
            href="/contacto"
            className="inline-block border border-gold text-gold hover:bg-gold hover:text-ink transition-all duration-300 px-10 py-4 text-xs tracking-[0.3em] uppercase"
          >
            Enviar mensaje
          </Link>
        </AnimatedSection>
      </div>
    </section>
  );
}
