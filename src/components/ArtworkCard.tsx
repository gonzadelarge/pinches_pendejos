"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import type { Artwork } from "@/types";

interface ArtworkCardProps {
  artwork: Artwork;
}

export default function ArtworkCard({ artwork }: ArtworkCardProps) {
  return (
    <Link href={`/obra/${artwork.slug}`} className="block">
      <motion.article
        className="group relative overflow-hidden bg-card cursor-pointer"
        whileHover={{ y: -4 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
      >
        {/* Image container */}
        <div className="relative aspect-[3/4] overflow-hidden">
          <Image
            src={artwork.imageThumbnail}
            alt={artwork.title}
            fill
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />

          {/* Hover overlay */}
          <div className="absolute inset-0 bg-ink/0 group-hover:bg-ink/65 transition-all duration-500 flex items-end p-5 pointer-events-none">
            <div className="translate-y-3 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-75">
              <p className="font-serif text-cream text-xl font-light leading-tight">
                {artwork.title}
              </p>
              <p className="text-gold text-xs tracking-[0.25em] uppercase mt-1.5">
                {artwork.technique} · {artwork.year}
              </p>
            </div>
          </div>
        </div>

        {/* Caption — always visible on mobile, hidden on md+ (shown via hover overlay) */}
        <div className="pt-3 pb-2 md:opacity-0 md:group-hover:opacity-0">
          <p className="font-serif text-cream text-base font-light">{artwork.title}</p>
          <p className="text-muted text-xs tracking-[0.2em] mt-0.5">
            {artwork.technique} · {artwork.year}
          </p>
        </div>
      </motion.article>
    </Link>
  );
}
