"use client";

import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";
import type { HomologatedBrand } from "@/lib/homologated-brands";

type MarcasHomologadasProps = {
  brands: HomologatedBrand[];
};

function BrandLogo({ brand }: { brand: HomologatedBrand }) {
  const content = (
    <div className="flex h-28 w-44 shrink-0 snap-center items-center justify-center rounded-2xl border border-brand-text/15 bg-white px-6 py-4 shadow-[0_8px_24px_rgba(14,31,26,0.12)] transition-transform duration-300 hover:-translate-y-1 sm:h-32 sm:w-56">
      <Image
        src={brand.logo}
        alt={brand.name}
        width={brand.width ?? 160}
        height={brand.height ?? 64}
        className="h-auto max-h-14 w-full object-contain"
        draggable={false}
      />
    </div>
  );

  if (brand.url) {
    return (
      <Link
        href={brand.url}
        target="_blank"
        rel="noopener noreferrer"
        className="shrink-0 snap-center"
        aria-label={brand.name}
      >
        {content}
      </Link>
    );
  }

  return content;
}

export default function MarcasHomologadas({ brands }: MarcasHomologadasProps) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const updateControls = useCallback(() => {
    const track = trackRef.current;
    if (!track) return;

    const maxScroll = track.scrollWidth - track.clientWidth;
    setCanScrollLeft(track.scrollLeft > 8);
    setCanScrollRight(track.scrollLeft < maxScroll - 8);
  }, []);

  const scrollByPage = useCallback((direction: "prev" | "next") => {
    const track = trackRef.current;
    if (!track) return;

    const amount = Math.max(track.clientWidth * 0.75, 280);
    track.scrollBy({
      left: direction === "next" ? amount : -amount,
      behavior: "smooth",
    });
  }, []);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    updateControls();
    track.addEventListener("scroll", updateControls, { passive: true });
    window.addEventListener("resize", updateControls);

    return () => {
      track.removeEventListener("scroll", updateControls);
      window.removeEventListener("resize", updateControls);
    };
  }, [updateControls]);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return;

    const interval = window.setInterval(() => {
      const maxScroll = track.scrollWidth - track.clientWidth;
      if (maxScroll <= 0) return;

      if (track.scrollLeft >= maxScroll - 8) {
        track.scrollTo({ left: 0, behavior: "smooth" });
        return;
      }

      scrollByPage("next");
    }, 4500);

    return () => window.clearInterval(interval);
  }, [scrollByPage]);

  if (brands.length === 0) return null;

  return (
    <section className="overflow-hidden bg-white py-20 sm:py-24" aria-labelledby="marcas-homologadas-title">
      <div className="mx-auto max-w-container px-5">
        <div className="mb-10 flex flex-col gap-4 sm:mb-12 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-[0.14em] text-brand-green">
              Parceiros certificados
            </span>
            <h2
              id="marcas-homologadas-title"
              className="mt-3 font-display text-4xl font-bold tracking-tight text-brand-text sm:text-5xl"
            >
              Marcas homologadas
            </h2>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-gray-600">
              Trabalhamos apenas com fornecedores aprovados pela franqueadora, garantindo padrão,
              qualidade e previsibilidade em todas as unidades.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => scrollByPage("prev")}
              disabled={!canScrollLeft}
              aria-label="Marcas anteriores"
              className="inline-flex h-11 w-11 items-center justify-center rounded-[15px] border-2 border-brand-text bg-brand-yellow text-lg font-bold text-brand-text shadow-[4px_4px_0_#0E1F1A] transition-transform hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-40 disabled:shadow-none disabled:hover:translate-y-0"
            >
              ←
            </button>
            <button
              type="button"
              onClick={() => scrollByPage("next")}
              disabled={!canScrollRight}
              aria-label="Próximas marcas"
              className="inline-flex h-11 w-11 items-center justify-center rounded-[15px] border-2 border-brand-text bg-brand-yellow text-lg font-bold text-brand-text shadow-[4px_4px_0_#0E1F1A] transition-transform hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-40 disabled:shadow-none disabled:hover:translate-y-0"
            >
              →
            </button>
          </div>
        </div>

        <div className="relative">
          <div
            ref={trackRef}
            className="flex gap-5 overflow-x-auto scroll-smooth pb-2 pt-1 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden snap-x snap-mandatory"
          >
            {brands.map((brand) => (
              <BrandLogo key={brand.name} brand={brand} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
