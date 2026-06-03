import Button from "@/components/Button";
import { diferenciais } from "@/lib/diferenciais";

const INK = "#0E1F1A";
const CREAM = "#FBFBF7";

const ACCENTS = [
  { bg: "#01994E", text: "#FBFBF7", num: "rgba(251,251,247,0.22)" },
  { bg: "#FAC612", text: "#0E1F1A", num: "rgba(14,31,26,0.14)" },
  { bg: "#245A51", text: "#FBFBF7", num: "rgba(251,251,247,0.2)" },
] as const;

function RazaoCard({
  titulo,
  desc,
  index,
}: {
  titulo: string;
  desc: string;
  index: number;
}) {
  const accent = ACCENTS[index % ACCENTS.length];
  const numero = String(index + 1).padStart(2, "0");

  return (
    <article
      className="group flex flex-col overflow-hidden rounded-2xl transition-all duration-300 hover:-translate-y-1 hover:shadow-[4px_4px_0_#0E1F1A] motion-reduce:transition-none motion-reduce:hover:translate-y-0 motion-reduce:hover:shadow-none"
      style={{
        border: `1.5px solid ${INK}`,
        background: CREAM,
      }}
    >
      <div
        className="flex items-start justify-between gap-4 px-5 py-4 sm:px-6 sm:py-5"
        style={{
          background: accent.bg,
          color: accent.text,
          borderBottom: `1.5px solid ${INK}`,
        }}
      >
        <h3 className="font-display text-lg font-bold leading-snug tracking-tight sm:text-xl">
          {titulo}
        </h3>
        <span
          className="font-display shrink-0 text-3xl font-bold leading-none sm:text-4xl"
          style={{ color: accent.num }}
          aria-hidden="true"
        >
          {numero}
        </span>
      </div>

      <p className="flex-1 px-5 py-5 text-sm leading-relaxed text-gray-600 sm:px-6">
        {desc}
      </p>
    </article>
  );
}

export default function RazoesInvestir() {
  return (
    <section
      className="overflow-hidden py-20 sm:py-24"
      style={{ background: "#F5F5F0" }}
      aria-labelledby="razoes-investir-title"
    >
      <div className="mx-auto max-w-container px-5">
        <div className="mb-12 flex flex-col gap-8 lg:mb-16 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <span
              className="inline-flex items-center gap-2.5 text-xs font-bold uppercase tracking-[0.14em]"
              style={{ color: "#01994E" }}
            >
              <span
                className="inline-block h-px w-6"
                style={{ background: "#01994E" }}
                aria-hidden="true"
              />
              Por que a Green?
            </span>

            <div className="relative mt-4">
              <p
                className="pointer-events-none absolute -left-1 top-0 font-display font-bold leading-none tracking-tight select-none"
                style={{
                  fontSize: "clamp(72px, 14vw, 120px)",
                  color: "#01994E",
                  opacity: 0.12,
                  lineHeight: 1,
                }}
                aria-hidden="true"
              >
                09
              </p>
              <h2
                id="razoes-investir-title"
                className="relative font-display text-4xl font-bold tracking-tight text-brand-text sm:text-5xl"
              >
                9 razões para investir
              </h2>
            </div>

            <p className="mt-4 max-w-xl text-base leading-relaxed text-gray-600">
              Da operação ao marketing, da gestão ao delivery — tudo pensado para
              você abrir com padrão e escalar com segurança.
            </p>
          </div>

          <Button href="/seja-um-franqueado" size="md" className="self-start lg:self-auto">
            Quero minha Franquia! <span aria-hidden="true">→</span>
          </Button>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {diferenciais.map((item, index) => (
            <RazaoCard
              key={item.titulo}
              titulo={item.titulo}
              desc={item.desc}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
