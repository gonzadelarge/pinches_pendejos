import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getArtworkBySlug, getArtworkSlugs, site } from "@/lib/site";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getArtworkSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const artwork = getArtworkBySlug(slug);
  if (!artwork) return {};
  return {
    title: artwork.title,
    description: `${artwork.title} — ${artwork.technique}, ${artwork.year}. ${artwork.description}`,
    openGraph: {
      images: [{ url: artwork.image, width: 800, height: 1000 }],
    },
  };
}

export default async function ObraPage({ params }: Props) {
  const { slug } = await params;
  const artwork = getArtworkBySlug(slug);
  if (!artwork) notFound();

  return (
    <div className="min-h-screen pt-24 pb-24 px-6">
      <div className="max-w-5xl mx-auto">
        {/* Back */}
        <Link
          href="/#obras"
          className="inline-flex items-center gap-3 text-muted hover:text-gold transition-colors text-xs tracking-[0.25em] uppercase mb-14 group"
        >
          <span className="w-8 h-px bg-muted group-hover:bg-gold transition-colors" />
          Volver a la galería
        </Link>

        <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-start">
          {/* Image */}
          <div className="relative overflow-hidden border border-border">
            <Image
              src={artwork.image}
              alt={artwork.title}
              width={800}
              height={1000}
              className="w-full h-auto object-cover"
              priority
            />
          </div>

          {/* Info */}
          <div className="flex flex-col gap-8 md:pt-4">
            <div>
              <p className="text-gold text-xs tracking-[0.4em] uppercase mb-3">
                {artwork.technique}
              </p>
              <h1 className="font-serif text-4xl sm:text-5xl font-light text-cream leading-tight">
                {artwork.title}
              </h1>
            </div>

            {/* Metadata table */}
            <dl className="flex flex-col gap-4 border-t border-border pt-6">
              <div className="flex justify-between items-baseline">
                <dt className="text-muted text-xs tracking-[0.25em] uppercase">Año</dt>
                <dd className="text-cream text-sm font-light">{artwork.year}</dd>
              </div>
              <div className="flex justify-between items-baseline">
                <dt className="text-muted text-xs tracking-[0.25em] uppercase">Técnica</dt>
                <dd className="text-cream text-sm font-light">{artwork.technique}</dd>
              </div>
              <div className="flex justify-between items-baseline">
                <dt className="text-muted text-xs tracking-[0.25em] uppercase">
                  Dimensiones
                </dt>
                <dd className="text-cream text-sm font-light">{artwork.dimensions}</dd>
              </div>
            </dl>

            {/* Description */}
            {artwork.description && (
              <p className="text-muted text-base leading-relaxed font-light border-l-2 border-gold pl-5 italic">
                &ldquo;{artwork.description}&rdquo;
              </p>
            )}

            {/* CTA */}
            <Link
              href="/contacto"
              className="self-start border border-gold text-gold hover:bg-gold hover:text-ink transition-all duration-300 px-8 py-4 text-xs tracking-[0.3em] uppercase mt-2"
            >
              Consultar disponibilidad
            </Link>

            {/* Artist credit */}
            <div className="flex items-center gap-4 pt-4 border-t border-border">
              <span className="w-6 h-px bg-muted" />
              <span className="text-muted text-xs tracking-widest uppercase">
                {site.artist.name}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
