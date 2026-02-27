"use client";

import { motion } from "framer-motion";
import { site } from "@/lib/site";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-ink">
      {/* Ambient radial glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 40%, rgba(196,122,82,0.05) 0%, transparent 70%)",
        }}
      />

      {/* Grain texture overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E")`,
          backgroundSize: "200px 200px",
        }}
      />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto mt-30">
        <motion.h1
          initial={{ opacity: 0, y: 48 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="font-serif font-light leading-none tracking-tight text-cream mb-10"
          style={{ fontSize: "clamp(3.5rem, 12vw, 11rem)" }}
        >
          {site.artist.name}
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="w-16 h-px bg-gold mx-auto mb-8 origin-center"
        />

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0 }}
          className="text-muted text-base sm:text-lg font-light tracking-wide max-w-lg mx-auto mb-2"
        >
          {site.artist.tagline}
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.15 }}
          className="text-muted/60 text-sm font-light tracking-wide max-w-lg mx-auto"
        >
          {site.artist.taglineSub}
        </motion.p>

        {/* Scroll CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="mt-16"
        >
          <a
            href="#obras"
            className="inline-flex flex-col items-center gap-3 text-muted hover:text-gold transition-colors duration-500 group"
            aria-label="Ver obras"
          >
            <span className="text-xs tracking-[0.35em] uppercase">Explorar</span>
            <motion.span
              className="w-px bg-muted group-hover:bg-gold transition-colors duration-500"
              style={{ height: "48px" }}
              animate={{ scaleY: [0.6, 1, 0.6] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
