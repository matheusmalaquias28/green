"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Button from "@/components/Button";

/* ─── Data ─────────────────────────────────────────────────── */

type QuoteColor = "leaf" | "coral" | "sun";

interface Quote {
  name: string;
  role: string;
  badge?: string;
  quote: string;
  initials: string;
  color: QuoteColor;
}

const QUOTES: Quote[] = [
  {
    name: "Rachel",
    role: "Franqueada · Volta Redonda/RJ",
    quote:
      "A Green Station mudou minha vida. O suporte da franqueadora é incrível e o modelo de negócio realmente funciona.",
    initials: "R",
    color: "leaf",
  },
  {
    name: "Eduardo",
    role: "Multifranqueado · Caxias do Sul/RS",
    badge: "3 unidades",
    quote:
      "Comecei com uma unidade e hoje tenho 3. A marca abre as portas e o sistema facilita a gestão — sem complicar.",
    initials: "E",
    color: "coral",
  },
  {
    name: "Diely",
    role: "Franqueada · Imperatriz/MA",
    quote:
      "Trouxe a Green Station para o Maranhão e já sinto o impacto positivo na comunidade e no meu faturamento.",
    initials: "D",
    color: "sun",
  },
  {
    name: "Ingrid",
    role: "Franqueada · Shopping Vila Velha/ES",
    badge: "8 anos",
    quote:
      "São 8 anos de Green Station. Uma parceria sólida que só cresce — e eu não trocaria por nada.",
    initials: "I",
    color: "leaf",
  },
];

/* ─── Colour map ────────────────────────────────────────────── */

const INK   = "#0E1F1A";
const CREAM = "#FBFBF7";

const CARD_COLORS: Record<QuoteColor, { bg: string; text: string; muted: string }> = {
  leaf:  { bg: "#00C05A", text: INK,   muted: "rgba(14,31,26,0.6)" },
  coral: { bg: "#E07555", text: CREAM, muted: "rgba(251,251,247,0.7)" },
  sun:   { bg: "#D4E155", text: INK,   muted: "rgba(14,31,26,0.6)" },
};

/* ─── QuoteCard ─────────────────────────────────────────────── */

function QuoteCard({ q }: { q: Quote }) {
  const c = CARD_COLORS[q.color];

  return (
    <motion.article
      key={q.name}
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -8 }}
      transition={{ duration: 0.35, ease: [0.25, 0, 0, 1] }}
      style={{
        background: c.bg,
        color: c.text,
        border: `1.5px solid ${INK}`,
        borderRadius: "1.5rem",
        padding: "40px",
        position: "relative",
        boxShadow: `6px 6px 0 ${INK}`,
      }}
    >
      {/* Big quote mark */}
      <span
        aria-hidden="true"
        style={{
          fontFamily: "var(--font-recoleta), Georgia, serif",
          fontSize: "96px",
          lineHeight: "0.7",
          fontStyle: "italic",
          display: "block",
          opacity: 0.35,
          marginBottom: "8px",
          userSelect: "none",
        }}
      >
        "
      </span>

      {/* Quote text */}
      <p
        style={{
          fontFamily: "var(--font-recoleta), Georgia, serif",
          fontSize: "clamp(20px, 2.2vw, 30px)",
          fontWeight: 500,
          lineHeight: 1.2,
          letterSpacing: "-0.02em",
          marginBottom: "32px",
          marginTop: "-12px",
        }}
      >
        {q.quote}
      </p>

      {/* Footer */}
      <footer className="flex items-center gap-4">
        {/* Avatar */}
        <div
          style={{
            width: "56px",
            height: "56px",
            borderRadius: "50%",
            flexShrink: 0,
            border: `1.5px solid ${INK}`,
            background: "rgba(14,31,26,0.12)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontFamily: "var(--font-recoleta), Georgia, serif",
            fontSize: "22px",
            fontWeight: 700,
            color: c.text,
          }}
          aria-hidden="true"
        >
          {q.initials}
        </div>

        <div className="flex flex-col gap-0.5">
          <div className="flex items-center gap-2 flex-wrap">
            <strong style={{ fontWeight: 600, fontSize: "15px" }}>{q.name}</strong>
            {q.badge && (
              <span
                style={{
                  background: "rgba(14,31,26,0.15)",
                  border: `1px solid ${INK}`,
                  borderRadius: "999px",
                  padding: "2px 10px",
                  fontSize: "11px",
                  fontWeight: 700,
                  letterSpacing: "0.05em",
                }}
              >
                {q.badge}
              </span>
            )}
          </div>
          <em style={{ fontStyle: "normal", fontSize: "13px", color: c.muted }}>
            {q.role}
          </em>
        </div>
      </footer>
    </motion.article>
  );
}

/* ─── Main export ───────────────────────────────────────────── */

export default function QuemEstaNaRede() {
  const [idx, setIdx] = useState(0);

  /* Auto-rotate every 7 s */
  useEffect(() => {
    const t = setInterval(() => setIdx((i) => (i + 1) % QUOTES.length), 7000);
    return () => clearInterval(t);
  }, []);

  return (
    <section className="py-24" style={{ background: CREAM }} id="depoimentos">
      <div className="mx-auto max-w-container px-5">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.4fr] gap-12 lg:gap-20 items-center">

          {/* ── Left copy ── */}
          <div>
            <span
              className="inline-flex items-center gap-2.5 text-xs font-bold tracking-[0.14em] uppercase"
              style={{ color: "#00994A" }}
            >
              <span className="inline-block w-6 h-px bg-brand-green" aria-hidden="true" />
              Quem está na rede
            </span>

            <h2
              className="font-display mt-4 leading-none tracking-tight"
              style={{ fontSize: "clamp(36px, 5vw, 64px)" }}
            >
              Quem entra
              <br />
              <em className="not-italic" style={{ fontStyle: "italic", color: "#00994A" }}>
                não quer sair.
              </em>
            </h2>

            <p className="mt-4 text-base leading-relaxed text-gray-500 max-w-sm">
              98% de retenção de franqueados nos últimos três anos. Nossa rede
              cresce, antes de tudo, dentro de casa.
            </p>

            {/* Dot navigation */}
            <div className="flex gap-2 mt-8">
              {QUOTES.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setIdx(i)}
                  aria-label={`Ver depoimento ${i + 1}`}
                  className="h-1.5 rounded-full transition-all duration-300"
                  style={{
                    width: i === idx ? "32px" : "20px",
                    background: i === idx ? "#00C05A" : "#D6D6D2",
                    border: "none",
                    cursor: "pointer",
                    padding: 0,
                  }}
                />
              ))}
            </div>

            <Button href="/seja-um-franqueado" size="md" className="mt-10">
              Quero ser franqueado <span aria-hidden="true">→</span>
            </Button>
          </div>

          {/* ── Right card ── */}
          <div style={{ position: "relative" }}>
            <AnimatePresence mode="wait">
              <QuoteCard key={idx} q={QUOTES[idx]} />
            </AnimatePresence>
          </div>

        </div>
      </div>
    </section>
  );
}
