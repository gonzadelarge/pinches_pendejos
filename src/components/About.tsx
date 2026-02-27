import Image from "next/image";
import { site } from "@/lib/site";
import AnimatedSection from "./AnimatedSection";

export default function About() {
  return (
    <section id="sobre-mi" className="py-24 bg-card">
      <div className="max-w-5xl mx-auto px-6">
        {/* Header */}
        <AnimatedSection className="text-center mb-16">
          <h2 className="font-serif text-3xl sm:text-4xl font-light text-cream tracking-wide">Sobre nosotros</h2>
          <div className="w-8 h-px bg-border mx-auto mt-5" />
        </AnimatedSection>

        <div className="flex flex-col md:flex-row items-center md:items-start gap-12 md:gap-20">
          {/* Avatar */}
          <AnimatedSection delay={0.1} className="shrink-0">
            <div className="relative w-52 h-52 md:w-72 md:h-72 overflow-hidden border border-border">
              <Image
                src="https://picsum.photos/seed/artist-avatar/500/500"
                alt={site.artist.name}
                fill
                className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
                sizes="(max-width: 768px) 208px, 288px"
              />
              {/* Gold corner accent */}
              <span className="absolute top-0 left-0 w-6 h-6 border-t border-l border-gold" />
              <span className="absolute bottom-0 right-0 w-6 h-6 border-b border-r border-gold" />
            </div>
          </AnimatedSection>

          {/* Bio */}
          <AnimatedSection delay={0.2} className="flex-1">
            <div className="flex flex-col gap-6">
              {site.artist.bio.map((paragraph, i) => (
                <p
                  key={i}
                  className="text-muted text-base md:text-lg leading-relaxed font-light"
                >
                  {paragraph}
                </p>
              ))}
              {/* Signature line */}
              <div className="flex items-center gap-4 mt-2">
                <span className="w-10 h-px bg-gold" />
                <span className="font-serif text-cream text-lg font-light tracking-wide">
                  {site.artist.name}
                </span>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
