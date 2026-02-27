"use client";

import { useState } from "react";
import { motion } from "framer-motion";

interface FormState {
  name: string;
  email: string;
  message: string;
}

type Status = "idle" | "loading" | "success" | "error";

export default function ContactForm() {
  const endpoint = process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT ?? "";

  const [form, setForm] = useState<FormState>({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<Status>("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!endpoint || endpoint.includes("REPLACE")) {
      alert("Configura primero NEXT_PUBLIC_FORMSPREE_ENDPOINT en .env.local");
      return;
    }
    setStatus("loading");
    try {
      const res = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setStatus("success");
        setForm({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="py-16"
      >
        <p className="text-gold text-xs tracking-[0.5em] uppercase mb-4">Enviado</p>
        <p className="font-serif text-3xl text-cream font-light mb-4">
          Mensaje recibido.
        </p>
        <p className="text-muted font-light">Me pondré en contacto contigo pronto.</p>
        <button
          onClick={() => setStatus("idle")}
          className="mt-8 text-xs tracking-[0.25em] uppercase text-muted hover:text-gold transition-colors"
        >
          Enviar otro mensaje
        </button>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-6">
      {/* Name + Email */}
      <div className="grid sm:grid-cols-2 gap-6">
        <div className="flex flex-col gap-2">
          <label
            htmlFor="name"
            className="text-xs tracking-[0.25em] uppercase text-muted"
          >
            Nombre
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            value={form.name}
            onChange={handleChange}
            placeholder="Tu nombre"
            className="bg-transparent border-b border-border text-cream focus:border-gold outline-none pb-3 text-sm transition-colors placeholder:text-muted/40"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label
            htmlFor="email"
            className="text-xs tracking-[0.25em] uppercase text-muted"
          >
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            value={form.email}
            onChange={handleChange}
            placeholder="tu@email.com"
            className="bg-transparent border-b border-border text-cream focus:border-gold outline-none pb-3 text-sm transition-colors placeholder:text-muted/40"
          />
        </div>
      </div>

      {/* Message */}
      <div className="flex flex-col gap-2">
        <label
          htmlFor="message"
          className="text-xs tracking-[0.25em] uppercase text-muted"
        >
          Mensaje
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={6}
          value={form.message}
          onChange={handleChange}
          placeholder="¿Sobre qué quieres hablar?"
          className="bg-transparent border-b border-border text-cream focus:border-gold outline-none pb-3 text-sm transition-colors resize-none placeholder:text-muted/40"
        />
      </div>

      {status === "error" && (
        <p className="text-red-400 text-sm">
          Algo salió mal. Prueba de nuevo o escríbenos directamente.
        </p>
      )}

      <button
        type="submit"
        disabled={status === "loading"}
        className="self-start border border-gold text-gold hover:bg-gold hover:text-ink transition-all duration-300 px-10 py-4 text-xs tracking-[0.3em] uppercase disabled:opacity-40 disabled:cursor-not-allowed mt-2"
      >
        {status === "loading" ? "Enviando…" : "Enviar mensaje"}
      </button>
    </form>
  );
}
