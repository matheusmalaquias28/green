"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import Button from "@/components/Button";
import {
  MAP_VIEW_BOX,
  activeStateCount,
  getActiveStateSummaries,
  getAllStatePaths,
  getStateSummaryById,
  getStoreMarkers,
  type StateSummary,
} from "@/lib/store-map";
import { stores } from "@/lib/stores";

const INK = "#0E1F1A";
const CREAM = "#FBFBF7";
const GREEN = "#01994E";
const YELLOW = "#FAC612";

function StoreListPanel({
  state,
  onClose,
}: {
  state: StateSummary | null;
  onClose: () => void;
}) {
  return (
    <AnimatePresence mode="wait">
      {state ? (
        <motion.div
          key={state.id}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.25 }}
          className="flex h-full flex-col"
        >
          <div className="mb-4 flex items-start justify-between gap-3">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.14em] text-brand-green">
                {state.uf}
              </p>
              <h3 className="font-display text-2xl font-bold tracking-tight text-brand-text">
                {state.name}
              </h3>
              <p className="mt-1 text-sm text-gray-500">
                {state.storeCount}{" "}
                {state.storeCount === 1 ? "unidade" : "unidades"}
              </p>
            </div>
            <button
              type="button"
              onClick={onClose}
              className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full border-2 border-brand-text bg-brand-yellow text-lg font-bold text-brand-text shadow-[3px_3px_0_#0E1F1A] transition-transform hover:-translate-y-0.5"
              aria-label="Fechar detalhes do estado"
            >
              ×
            </button>
          </div>

          <ul className="flex max-h-[320px] flex-col gap-2 overflow-y-auto pr-1">
            {state.stores.map((store) => (
              <li key={store.slug}>
                <Link
                  href={`/lojas/${store.estado.toLowerCase()}/${store.slug}`}
                  className="group block rounded-xl border border-brand-text/10 bg-white px-4 py-3 transition-all hover:-translate-y-0.5 hover:border-brand-green/40 hover:shadow-[3px_3px_0_#0E1F1A]"
                >
                  <p className="font-display text-base font-bold text-brand-text group-hover:text-brand-green">
                    {store.nome}
                  </p>
                  <p className="mt-0.5 text-xs text-gray-500">
                    {store.cidade}/{store.estado}
                  </p>
                </Link>
              </li>
            ))}
          </ul>
        </motion.div>
      ) : (
        <motion.div
          key="empty"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="flex h-full flex-col justify-center"
        >
          <p className="font-display text-2xl font-bold leading-snug text-brand-text">
            Clique em um estado verde no mapa
          </p>
          <p className="mt-3 text-sm leading-relaxed text-gray-500">
            Explore onde a Green Station já está presente e veja todas as
            unidades de cada região.
          </p>

          <div className="mt-8 grid grid-cols-2 gap-3">
            {getActiveStateSummaries().slice(0, 4).map((item) => (
              <div
                key={item.id}
                className="rounded-xl border border-brand-text/10 bg-white px-3 py-3"
              >
                <p className="font-display text-xl font-bold text-brand-green">
                  {item.storeCount}
                </p>
                <p className="text-xs font-semibold text-brand-text">{item.uf}</p>
              </div>
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default function PresencaNacional() {
  const [selectedStateId, setSelectedStateId] = useState<string | null>(null);
  const [hoveredStateId, setHoveredStateId] = useState<string | null>(null);
  const [hoveredStoreSlug, setHoveredStoreSlug] = useState<string | null>(null);

  const statePaths = useMemo(() => getAllStatePaths(), []);
  const markers = useMemo(() => getStoreMarkers(), []);
  const activeStates = useMemo(() => getActiveStateSummaries(), []);
  const selectedState = getStateSummaryById(selectedStateId);
  const highlightedStateId = hoveredStateId ?? selectedStateId;

  return (
    <section
      className="overflow-hidden py-20 sm:py-24"
      style={{ background: "#F5F5F0" }}
      aria-labelledby="presenca-nacional-title"
    >
      <div className="mx-auto max-w-container px-5">
        <div className="mb-10 flex flex-col gap-6 lg:mb-12 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <span
              className="inline-flex items-center gap-2.5 text-xs font-bold uppercase tracking-[0.14em]"
              style={{ color: GREEN }}
            >
              <span
                className="inline-block h-px w-6"
                style={{ background: GREEN }}
                aria-hidden="true"
              />
              Presença nacional
            </span>
            <h2
              id="presenca-nacional-title"
              className="mt-3 font-display text-4xl font-bold tracking-tight text-brand-text sm:text-5xl"
            >
              {stores.length} lojas em {activeStateCount} estados
            </h2>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-gray-600">
              Navegue pelo mapa interativo e descubra todas as unidades da rede
              Green Station espalhadas pelo Brasil.
            </p>
          </div>

          <Button href="/lojas" variant="outlineGreen" size="md">
            Ver todas as lojas
          </Button>
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:gap-10">
          <div
            className="relative overflow-hidden rounded-[1.75rem] bg-brand-bg p-4 sm:p-6"
            style={{
              border: `1.5px solid ${INK}`,
              boxShadow: `6px 6px 0 ${INK}`,
            }}
          >
            <div className="mb-4 flex flex-wrap items-center gap-3 text-xs font-bold uppercase tracking-[0.1em] text-gray-500">
              <span className="inline-flex items-center gap-2 rounded-full border border-brand-text/15 bg-white px-3 py-1.5">
                <span
                  className="h-2.5 w-2.5 rounded-full"
                  style={{ background: GREEN }}
                  aria-hidden="true"
                />
                Com unidades
              </span>
              <span className="inline-flex items-center gap-2 rounded-full border border-brand-text/15 bg-white px-3 py-1.5">
                <span
                  className="h-2.5 w-2.5 rounded-full bg-[#ECECE7]"
                  style={{ border: `1px solid ${INK}` }}
                  aria-hidden="true"
                />
                Sem unidades
              </span>
              <span className="inline-flex items-center gap-2 rounded-full border border-brand-text/15 bg-white px-3 py-1.5">
                <span
                  className="h-2.5 w-2.5 rounded-full"
                  style={{ background: YELLOW, border: `1px solid ${INK}` }}
                  aria-hidden="true"
                />
                Pin de loja
              </span>
            </div>

            <svg
              viewBox={MAP_VIEW_BOX}
              className="mx-auto h-auto w-full max-w-full touch-manipulation"
              role="img"
              aria-label="Mapa interativo do Brasil com unidades Green Station"
            >
              {statePaths.map((state) => {
                const isActive = state.hasStores;
                const isHighlighted = highlightedStateId === state.id;
                const isSelected = selectedStateId === state.id;

                let fill = "#ECECE7";
                if (isActive) {
                  fill = isSelected ? GREEN : isHighlighted ? YELLOW : CREAM;
                }

                return (
                  <path
                    key={state.id}
                    d={state.path}
                    fill={fill}
                    stroke={INK}
                    strokeWidth={isHighlighted || isSelected ? 2 : 1.2}
                    className={
                      isActive
                        ? "cursor-pointer transition-[fill,stroke-width] duration-200"
                        : "transition-colors duration-200"
                    }
                    onMouseEnter={() => isActive && setHoveredStateId(state.id)}
                    onMouseLeave={() =>
                      setHoveredStateId((current) =>
                        current === state.id ? null : current
                      )
                    }
                    onFocus={() => isActive && setHoveredStateId(state.id)}
                    onBlur={() =>
                      setHoveredStateId((current) =>
                        current === state.id ? null : current
                      )
                    }
                    onClick={() =>
                      isActive &&
                      setSelectedStateId((current) =>
                        current === state.id ? null : state.id
                      )
                    }
                    onKeyDown={(event) => {
                      if (!isActive) return;
                      if (event.key === "Enter" || event.key === " ") {
                        event.preventDefault();
                        setSelectedStateId((current) =>
                          current === state.id ? null : state.id
                        );
                      }
                    }}
                    tabIndex={isActive ? 0 : -1}
                    aria-label={
                      isActive
                        ? `${state.name}, ${activeStates.find((s) => s.id === state.id)?.storeCount ?? 0} unidades`
                        : `${state.name}, sem unidades`
                    }
                  />
                );
              })}

              {markers.map((marker) => {
                const isHighlighted =
                  hoveredStoreSlug === marker.slug ||
                  selectedStateId === marker.estado.toLowerCase();

                return (
                  <g key={marker.slug}>
                    <Link
                      href={`/lojas/${marker.estado.toLowerCase()}/${marker.slug}`}
                      aria-label={`${marker.nome}, ${marker.cidade}/${marker.estado}`}
                      onMouseEnter={() => {
                        setHoveredStoreSlug(marker.slug);
                        setHoveredStateId(marker.estado.toLowerCase());
                      }}
                      onMouseLeave={() => {
                        setHoveredStoreSlug(null);
                        setHoveredStateId((current) =>
                          current === marker.estado.toLowerCase() &&
                          !selectedStateId
                            ? null
                            : current
                        );
                      }}
                      onFocus={() => {
                        setHoveredStoreSlug(marker.slug);
                        setHoveredStateId(marker.estado.toLowerCase());
                      }}
                      onBlur={() => setHoveredStoreSlug(null)}
                    >
                      <circle
                        cx={marker.x}
                        cy={marker.y}
                        r={isHighlighted ? 6.5 : 5}
                        fill={YELLOW}
                        stroke={INK}
                        strokeWidth={1.5}
                        className="transition-all duration-200"
                      />
                      <circle
                        cx={marker.x}
                        cy={marker.y}
                        r={isHighlighted ? 2.2 : 1.6}
                        fill={GREEN}
                        className="pointer-events-none"
                      />
                    </Link>
                  </g>
                );
              })}
            </svg>

            <div className="mt-5 flex flex-wrap gap-2">
              {activeStates.map((state) => {
                const isSelected = selectedStateId === state.id;
                return (
                  <button
                    key={state.id}
                    type="button"
                    onClick={() =>
                      setSelectedStateId((current) =>
                        current === state.id ? null : state.id
                      )
                    }
                    className="rounded-pill border-2 px-3 py-1.5 text-xs font-bold transition-all hover:-translate-y-0.5"
                    style={{
                      borderColor: INK,
                      background: isSelected ? GREEN : CREAM,
                      color: isSelected ? CREAM : INK,
                      boxShadow: isSelected ? `3px 3px 0 ${INK}` : undefined,
                    }}
                  >
                    {state.uf} · {state.storeCount}
                  </button>
                );
              })}
            </div>
          </div>

          <aside
            className="min-h-[360px] rounded-[1.75rem] bg-white p-6 sm:p-8"
            style={{
              border: `1.5px solid ${INK}`,
              boxShadow: `6px 6px 0 ${INK}`,
            }}
          >
            <StoreListPanel
              state={selectedState}
              onClose={() => setSelectedStateId(null)}
            />
          </aside>
        </div>
      </div>
    </section>
  );
}
