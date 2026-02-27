import siteData from "@/../content/site.json";
import type { SiteData, Artwork } from "@/types";

export const site = siteData as SiteData;

export function getFeaturedArtworks(): Artwork[] {
  return site.artworks.filter((a) => a.featured);
}

export function getAllArtworks(): Artwork[] {
  return site.artworks;
}

export function getArtworkBySlug(slug: string): Artwork | undefined {
  return site.artworks.find((a) => a.slug === slug);
}

export function getArtworkSlugs(): string[] {
  return site.artworks.map((a) => a.slug);
}
