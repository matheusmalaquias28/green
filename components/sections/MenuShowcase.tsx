"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { menuShowcaseItems, categoryLabels } from "@/lib/menu";
import type { MenuItem } from "@/lib/menu";

/* ─── Palette ──────────────────────────────────────────────── */

const REST_BG   = "#FBFBF7";
const INK       = "#0E1F1A";

// Even index → green; odd → yellow
const HOVER_COLORS = [
  { bg: "#01994E", name: "#FFFFFF",  wm: "rgba(255,255,255,0.12)", badge: { bg: "#FAC612", text: "#245A51" } },
  { bg: "#FAC612", name: "#245A51",  wm: "rgba(36,90,81,0.13)",   badge: { bg: "#01994E", text: "#FFFFFF" } },
] as const;

/* ─── Placeholder image ────────────────────────────────────── */

function ImagePlaceholder({ name, hovered, nameColor }: { name: string; hovered: boolean; nameColor: string }) {
  const initial = name.charAt(0).toUpperCase();
  return (
    <div
      className="w-full h-full flex items-end justify-center pb-6"
      aria-hidden="true"
    >
      <div
        className="w-28 h-28 rounded-full flex items-center justify-center font-display text-5xl font-bold transition-all duration-300"
        style={{
          background: hovered ? "rgba(255,255,255,0.15)" : "rgba(1,153,78,0.1)",
          color: hovered ? nameColor : "#01994E",
          border: `2px solid ${hovered ? "rgba(255,255,255,0.25)" : "rgba(1,153,78,0.2)"}`,
        }}
      >
        {initial}
      </div>
    </div>
  );
}

/* ─── Single card ──────────────────────────────────────────── */

function MenuCard({
  item,
  index,
  ctaText,
  priority,
}: {
  item: MenuItem;
  index: number;
  ctaText: string;
  priority: boolean;
}) {
  const [hovered, setHovered] = useState(false);
  const reduced = useReducedMotion();

  const palette = HOVER_COLORS[index % 2];
  const bg      = hovered ? palette.bg   : REST_BG;
  const nameCol = hovered ? palette.name : INK;

  /* Watermark lines — the item name repeated 4× */
  const wmLines = Array.from({ length: 4 }, (_, i) => i);

  return (
    <Link
      href={`/cardapio`}
      className="block flex-none snap-start focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-green focus-visible:ring-offset-2 rounded-3xl"
      style={{ width: "clamp(180px, 22vw, 260px)" }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onFocus={() => setHovered(true)}
      onBlur={() => setHovered(false)}
      aria-label={`${item.nome} — ${categoryLabels[item.categoria]}`}
    >
      <article
        className="relative overflow-hidden rounded-3xl"
        style={{
          height: "clamp(280px, 32vw, 380px)",
          border: `2.5px solid ${INK}`,
          background: bg,
          transition: "background-color 0.3s ease-out",
          boxShadow: hovered ? `4px 4px 0 ${INK}` : "none",
        }}
      >
        {/* ── Watermark ── */}
        <div
          aria-hidden="true"
          className="absolute inset-0 flex flex-col justify-center overflow-hidden pointer-events-none"
          style={{
            opacity: hovered ? 1 : 0,
            transition: reduced ? "none" : "opacity 0.3s ease-out",
          }}
        >
          {wmLines.map((i) => (
            <span
              key={i}
              className="block font-display font-bold whitespace-nowrap leading-none select-none"
              style={{
                fontSize: "clamp(36px, 5vw, 52px)",
                color: palette.wm,
                letterSpacing: "-0.02em",
                marginBottom: "4px",
              }}
            >
              {item.nome}
            </span>
          ))}
        </div>

        {/* ── Category pill (top-left) ── */}
        <div className="absolute top-4 left-4 z-20">
          <span
            className="text-[10px] font-bold uppercase tracking-[0.1em] px-2.5 py-1 rounded-full transition-all duration-300"
            style={{
              background: hovered ? "rgba(255,255,255,0.18)" : "rgba(14,31,26,0.07)",
              color: hovered ? palette.name : "#245A51",
            }}
          >
            {categoryLabels[item.categoria]}
          </span>
        </div>

        {/* ── Rotating badge (top-right) ── */}
        <motion.div
          className="absolute top-3 right-3 z-30"
          animate={
            reduced
              ? { opacity: hovered ? 1 : 0 }
              : { opacity: hovered ? 1 : 0, scale: hovered ? 1 : 0.65 }
          }
          transition={{ duration: 0.25, ease: [0.34, 1.56, 0.64, 1] }}
          aria-hidden={!hovered}
        >
          <span
            className="inline-flex items-center justify-center font-display font-bold text-[11px] uppercase tracking-[0.08em] rounded-full px-3 py-2 leading-none"
            style={{
              background: palette.badge.bg,
              color: palette.badge.text,
              border: `2px solid ${INK}`,
              rotate: "12deg",
              display: "inline-block",
              transform: "rotate(12deg)",
              boxShadow: `2px 2px 0 ${INK}`,
              whiteSpace: "nowrap",
            }}
          >
            {ctaText}
          </span>
        </motion.div>

        {/* ── Image ── */}
        <motion.div
          className="absolute inset-x-0 bottom-0 z-10"
          style={{ height: "70%" }}
          animate={reduced ? {} : { scale: hovered ? 1.08 : 1 }}
          transition={{ duration: 0.35, ease: [0.25, 0, 0, 1] }}
        >
          {item.imagem ? (
            <Image
              src={item.imagem}
              alt={item.nome}
              fill
              sizes="(max-width: 640px) 180px, (max-width: 1024px) 22vw, 260px"
              className="object-contain object-bottom"
              priority={priority}
              draggable={false}
            />
          ) : (
            <ImagePlaceholder
              name={item.nome}
              hovered={hovered}
              nameColor={palette.name}
            />
          )}
        </motion.div>

        {/* ── Name ── */}
        <div className="absolute top-12 inset-x-0 z-20 px-4 pt-1">
          <h3
            className="font-display font-bold leading-none tracking-tight transition-colors duration-300"
            style={{
              fontSize: "clamp(18px, 2.2vw, 24px)",
              color: nameCol,
            }}
          >
            {item.nome}
          </h3>
          {item.kcal && (
            <span
              className="block text-[11px] font-semibold mt-1 transition-colors duration-300"
              style={{ color: hovered ? `${palette.name}99` : "#6B6B65" }}
            >
              {item.kcal} kcal · {item.porcao}
            </span>
          )}
        </div>
      </article>
    </Link>
  );
}

/* ─── Main export ──────────────────────────────────────────── */

export default function MenuShowcase({ ctaText = "Peça já" }: { ctaText?: string }) {
  const items = menuShowcaseItems;

  return (
    <section className="py-24 bg-white overflow-hidden" id="cardapio">
      <div className="mx-auto max-w-container px-5">

        {/* Head */}
        <div className="flex items-end justify-between gap-6 flex-wrap mb-10">
          <div>
            <span
              className="inline-flex items-center gap-2.5 text-xs font-bold tracking-[0.14em] uppercase text-brand-green"
            >
              <span className="inline-block w-6 h-px bg-brand-green" aria-hidden="true" />
              Cardápio
            </span>
            <h2
              className="font-display mt-4 leading-none tracking-tight text-brand-text"
              style={{ fontSize: "clamp(32px, 4vw, 56px)" }}
            >
              Saudável do
              <br />
              <em style={{ fontStyle: "italic", color: "#01994E" }}>seu jeito.</em>
            </h2>
          </div>

          <Link
            href="/cardapio"
            className="inline-flex items-center gap-2 font-semibold text-sm pb-1 transition-opacity hover:opacity-70 text-brand-text"
            style={{ borderBottom: "1.5px solid currentColor" }}
          >
            Ver cardápio completo <span aria-hidden="true">→</span>
          </Link>
        </div>

        {/* Scroll hint — mobile only */}
        <p className="text-xs text-gray-400 mb-4 flex items-center gap-1.5 lg:hidden" aria-hidden="true">
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path d="M2 7h10M8 4l3 3-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          Deslize para ver mais
        </p>

        {/* Scrollable track */}
        <div
          role="list"
          className="flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory lg:grid lg:overflow-visible lg:pb-0"
          style={{
            scrollbarWidth: "none",
            // Desktop: fit all cards in a grid row
            gridTemplateColumns: `repeat(${items.length}, 1fr)`,
          } as React.CSSProperties}
        >
          {items.map((item, i) => (
            <div key={item.id} role="listitem" className="lg:w-auto">
              <MenuCard
                item={item}
                index={i}
                ctaText={ctaText}
                priority={i < 4}
              />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
