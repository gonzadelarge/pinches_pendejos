import { getFeaturedArtworks } from "@/lib/site";
import ArtworkCard from "./ArtworkCard";
import AnimatedSection from "./AnimatedSection";

export default function Gallery() {
  const artworks = getFeaturedArtworks();

  return (
    <section id="obras" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <AnimatedSection className="text-center mb-16">
          <h2 className="font-serif text-3xl sm:text-4xl font-light text-cream tracking-wide">
            Obras
          </h2>
          <div className="w-8 h-px bg-border mx-auto mt-5" />
        </AnimatedSection>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {artworks.map((artwork, i) => (
            <AnimatedSection key={artwork.slug} delay={Math.min(i * 0.07, 0.4)}>
              <ArtworkCard artwork={artwork} />
            </AnimatedSection>
          ))}
        </div>

        {/* All works link */}
        <AnimatedSection className="text-center mt-14" delay={0.2}>
          <a
            href="#obras"
            className="inline-flex items-center gap-4 text-muted hover:text-gold transition-colors text-xs tracking-[0.3em] uppercase group"
          >
            <span className="w-8 h-px bg-muted group-hover:bg-gold transition-colors" />
            Ver todas las obras
            <span className="w-8 h-px bg-muted group-hover:bg-gold transition-colors" />
          </a>
        </AnimatedSection>
      </div>
    </section>
  );
}
