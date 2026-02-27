import type { Metadata } from "next";
import { DM_Sans, Cormorant_Garamond } from "next/font/google";
import "./globals.css";
import { site } from "@/lib/site";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

export const metadata: Metadata = {
  metadataBase: new URL(site.seo.siteUrl),
  title: {
    default: `${site.artist.seoName} — Artista Plástico`,
    template: `%s | ${site.artist.seoName}`,
  },
  description: `${site.artist.tagline} ${site.artist.taglineSub}`,
  keywords: site.artist.seoKeywords,
  openGraph: {
    type: "website",
    locale: "es_ES",
    url: site.seo.siteUrl,
    siteName: site.artist.seoName,
    title: `${site.artist.seoName} — Artista Plástico`,
    description: site.artist.tagline,
    images: [{ url: site.seo.ogImage, width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    creator: site.seo.twitterHandle,
    title: `${site.artist.seoName} — Artista Plástico`,
    description: site.artist.tagline,
    images: [site.seo.ogImage],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="scroll-smooth">
      <body
        className={`${dmSans.variable} ${cormorant.variable} antialiased bg-ink text-cream font-sans`}
      >
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
