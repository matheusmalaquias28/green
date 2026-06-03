"use client";

import { useState } from "react";
import Button from "@/components/Button";

/* ─── Data ─────────────────────────────────────────────────── */

type ModelColor = "leaf" | "coral" | "sun";

interface Model {
  id: string;
  name: string;
  tag: string;
  area: string;
  invest: string;
  ticket: string;
  payback: string;
  color: ModelColor;
  pitch: string;
  features: string[];
}

const MODELS: Model[] = [
  {
    id: "kiosk",
    name: "Quiosque",
    tag: "Estação · Aeroporto · Shopping",
    area: "12 a 25 m²",
    invest: "R$ 89 mil",
    ticket: "R$ 32 médio",
    payback: "14 meses",
    color: "leaf",
    pitch:
      "Operação enxuta, alta rotatividade. O modelo que originou a marca — perfeito para hubs de fluxo intenso.",
    features: [
      "Equipe mínima: 3 pessoas/turno",
      "SOP de 90 segundos por pedido",
      "Cardápio compacto (8 bowls signature)",
      "PDV integrado + fila virtual no QR",
    ],
  },
  {
    id: "food-court",
    name: "Praça",
    tag: "Praça de alimentação · Mall",
    area: "30 a 55 m²",
    invest: "R$ 165 mil",
    ticket: "R$ 41 médio",
    payback: "16 meses",
    color: "coral",
    pitch:
      "Cardápio completo + bowl montado ao vivo no balcão. O hit de quem busca volume com ticket maior.",
    features: [
      "Equipe: 5 a 7 pessoas/turno",
      "Cardápio completo (14 itens)",
      "Bowl montado ao vivo no balcão",
      "Combo bebida + sobremesa exclusivo",
    ],
  },
  {
    id: "street",
    name: "Street",
    tag: "Rua · Bairro · Coworking",
    area: "60 a 110 m²",
    invest: "R$ 280 mil",
    ticket: "R$ 48 médio",
    payback: "18 meses",
    color: "sun",
    pitch:
      "Experiência completa: mesas, vitrine grab-and-go, delivery próprio e a vibe Green Station em alta voltagem.",
    features: [
      "Equipe: 8 a 12 pessoas/turno",
      "Salão para 20-40 lugares",
      "Delivery próprio + 3 aplicativos",
      "Eventos corporativos e fitness",
    ],
  },
];

/* ─── Colour tokens (matches design prototype) ──────────────── */

const COLORS: Record<ModelColor, { header: string; headerText: string }> = {
  leaf:  { header: "#00C05A", headerText: "#0E1F1A" },
  coral: { header: "#E07555", headerText: "#FBFBF7" },
  sun:   { header: "#D4E155", headerText: "#0E1F1A" },
};

const INK   = "#0E1F1A";
const CREAM = "#FBFBF7";

/* ─── ModelCard ─────────────────────────────────────────────── */

function ModelCard({
  model,
  expanded,
  onToggle,
}: {
  model: Model;
  expanded: boolean;
  onToggle: () => void;
}) {
  const c = COLORS[model.color];

  return (
    <article
      className="flex flex-col rounded-2xl overflow-hidden transition-all duration-300"
      style={{
        border: `1.5px solid ${INK}`,
        background: CREAM,
        boxShadow: expanded ? `6px 6px 0 ${INK}` : undefined,
        transform: expanded ? "translateY(-4px)" : undefined,
      }}
    >
      {/* Header / toggle */}
      <button
        onClick={onToggle}
        aria-expanded={expanded}
        className="w-full text-left flex items-center justify-between gap-4 px-7 py-6 cursor-pointer font-body"
        style={{
          background: c.header,
          color: c.headerText,
          borderBottom: `1.5px solid ${INK}`,
        }}
      >
        <div>
          <span className="block text-[11px] font-bold tracking-[0.1em] uppercase opacity-65">
            {model.tag}
          </span>
          <h3 className="font-display text-[32px] font-medium mt-1.5 leading-none tracking-tight">
            {model.name}
          </h3>
          <span className="block text-sm mt-1">
            a partir de <strong className="text-base font-bold">{model.invest}</strong>
          </span>
        </div>

        <span
          className="w-10 h-10 rounded-full flex-shrink-0 inline-flex items-center justify-center text-2xl font-light transition-transform duration-200"
          style={{
            background: CREAM,
            border: `1.5px solid ${INK}`,
            color: INK,
            transform: expanded ? "rotate(45deg)" : undefined,
          }}
          aria-hidden="true"
        >
          +
        </span>
      </button>

      {/* Media placeholder */}
      <div
        className="relative flex items-center justify-center"
        style={{
          aspectRatio: "4 / 3",
          background:
            "repeating-linear-gradient(45deg, rgba(0,192,90,0.10), rgba(0,192,90,0.10) 12px, rgba(0,192,90,0.18) 12px, rgba(0,192,90,0.18) 24px)",
          borderBottom: `1.5px solid ${INK}`,
        }}
      >
        <span
          className="font-mono text-[10px] tracking-[0.1em] uppercase px-3 py-1 rounded"
          style={{ background: INK, color: CREAM }}
        >
          Foto · {model.name}
        </span>
      </div>

      {/* Body */}
      <div className="flex flex-col gap-4 px-7 py-6 flex-1">
        <p className="text-sm leading-relaxed text-gray-500">{model.pitch}</p>

        {/* Specs */}
        <dl className="grid grid-cols-3 gap-3 rounded-xl p-4 bg-gray-50 m-0">
          {(
            [
              ["Área", model.area],
              ["Ticket médio", model.ticket],
              ["Payback", model.payback],
            ] as [string, string][]
          ).map(([label, value]) => (
            <div key={label} className="flex flex-col gap-1">
              <dt className="text-[9px] uppercase tracking-[0.08em] text-gray-400">{label}</dt>
              <dd className="m-0 font-display text-[14px] font-medium tracking-tight">{value}</dd>
            </div>
          ))}
        </dl>

        {/* Expandable features */}
        {expanded && (
          <div
            className="flex flex-col gap-4 pt-4"
            style={{ borderTop: "1px dashed #D6D6D2" }}
          >
            <h4 className="text-[11px] font-bold uppercase tracking-[0.1em] text-gray-400 m-0">
              O que está incluído
            </h4>
            <ul className="flex flex-col gap-2 m-0 p-0 list-none text-sm">
              {model.features.map((f) => (
                <li key={f} className="flex items-start gap-2.5">
                  <span
                    className="flex-shrink-0 w-5 h-5 rounded-full inline-flex items-center justify-center text-[11px] font-bold mt-px"
                    style={{ background: "#00C05A", color: INK }}
                    aria-hidden="true"
                  >
                    ✓
                  </span>
                  {f}
                </li>
              ))}
            </ul>
            <Button
              href="/seja-um-franqueado"
              variant="primary"
              size="md"
              className="self-start"
            >
              Pedir detalhes deste modelo <span aria-hidden="true">→</span>
            </Button>
          </div>
        )}
      </div>
    </article>
  );
}

/* ─── Main export ───────────────────────────────────────────── */

export default function ModelosSection() {
  const [expanded, setExpanded] = useState<string>("kiosk");

  return (
    <section className="py-24" style={{ background: CREAM }} id="modelos">
      <div className="mx-auto max-w-container px-5">

        {/* Head */}
        <div className="max-w-2xl mb-12">
          <span className="inline-flex items-center gap-2.5 text-xs font-bold tracking-[0.14em] uppercase text-brand-green">
            <span className="inline-block w-6 h-px bg-brand-green" aria-hidden="true" />
            Três Modelos · Uma Marca
          </span>
          <h2 className="font-display text-5xl sm:text-6xl font-medium mt-4 leading-none tracking-tight">
            Encaixe a Green Station
            <br />
            <em className="not-italic text-brand-green" style={{ fontStyle: "italic" }}>
              no seu ponto, no seu plano.
            </em>
          </h2>
          <p className="mt-4 text-base leading-relaxed text-gray-500">
            Cada modelo tem investimento, footprint operacional e perfil de cliente diferentes
            — todos com o mesmo padrão de qualidade e o mesmo suporte da rede.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {MODELS.map((m) => (
            <ModelCard
              key={m.id}
              model={m}
              expanded={expanded === m.id}
              onToggle={() => setExpanded((prev) => (prev === m.id ? "" : m.id))}
            />
          ))}
        </div>

        {/* Comparison table */}
        <div className="mt-12 overflow-x-auto">
          <table className="w-full text-sm" style={{ borderCollapse: "collapse" }}>
            <thead>
              <tr>
                <th
                  className="text-left px-4 py-3.5 font-semibold"
                  style={{ borderBottom: `1px solid #D6D6D2` }}
                >
                  Comparativo rápido
                </th>
                {MODELS.map((m) => {
                  const c = COLORS[m.color];
                  return (
                    <th
                      key={m.id}
                      className="text-left px-4 py-3.5"
                      style={{ borderBottom: `1px solid #D6D6D2` }}
                    >
                      <span
                        className="inline-block px-3 py-1.5 rounded-pill text-sm font-semibold"
                        style={{
                          background: c.header,
                          color: c.headerText,
                          border: `1.5px solid ${INK}`,
                        }}
                      >
                        {m.name}
                      </span>
                    </th>
                  );
                })}
              </tr>
            </thead>
            <tbody>
              {(
                [
                  [
                    "Investimento inicial",
                    (m: Model) => (
                      <strong className="font-display text-lg font-medium">{m.invest}</strong>
                    ),
                  ],
                  ["Área", (m: Model) => m.area],
                  ["Ticket médio", (m: Model) => m.ticket],
                  ["Payback estimado", (m: Model) => m.payback],
                  ["Royalties", () => "5% faturamento"],
                  ["Taxa de marketing", () => "2% faturamento"],
                ] as [string, (m: Model) => React.ReactNode][]
              ).map(([label, render]) => (
                <tr key={label}>
                  <td
                    className="px-4 py-3.5 text-[13px] text-gray-500"
                    style={{ borderBottom: `1px solid #D6D6D2` }}
                  >
                    {label}
                  </td>
                  {MODELS.map((m) => (
                    <td
                      key={m.id}
                      className="px-4 py-3.5"
                      style={{ borderBottom: `1px solid #D6D6D2` }}
                    >
                      {render(m)}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

      </div>
    </section>
  );
}
