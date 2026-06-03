import Image from "next/image";
import Button from "@/components/Button";

export default function Historia() {
  return (
    <section
      className="relative overflow-hidden"
      style={{ background: "#F5F5F0" }}
      id="sobre"
    >

      <div className="mx-auto max-w-container px-5">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 items-center">

          {/* ── Imagem esquerda ── */}
          <div
            className="relative"
            style={{
              minHeight: "clamp(480px, 55vw, 780px)",
              marginBottom: "-230px",
            }}
          >
            <Image
              src="/brand/historia-fundadores.png"
              alt="Loyola e Taiguara, fundadores da Green Station, segurando uma foto polaroid"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-contain object-bottom"
              priority
              draggable={false}
            />
          </div>

          {/* ── Conteúdo direita ── */}
          <div className="py-20 lg:py-28 flex flex-col gap-8">

          {/* Eyebrow */}
          <span
            className="inline-flex items-center gap-2.5 text-xs font-bold tracking-[0.14em] uppercase"
            style={{ color: "#01994E" }}
          >
            <span
              className="inline-block w-6 h-px"
              style={{ background: "#01994E" }}
              aria-hidden="true"
            />
            História
          </span>

          {/* Year stamp */}
          <div>
            <p
              className="font-display font-bold leading-none tracking-tight"
              style={{
                fontSize: "clamp(80px, 12vw, 140px)",
                color: "#01994E",
                opacity: 0.15,
                lineHeight: 1,
                marginBottom: "-0.15em",
                userSelect: "none",
              }}
              aria-hidden="true"
            >
              2015
            </p>
            <h2
              className="font-display font-bold leading-tight tracking-tight text-brand-text"
              style={{ fontSize: "clamp(28px, 3.5vw, 48px)" }}
            >
              A primeira Saladeria
              <br />
              Fast Food do Brasil.
            </h2>
          </div>

          {/* Story */}
          <p
            className="text-base leading-relaxed max-w-md"
            style={{ color: "#4E4E49" }}
          >
            A Green Station surgiu em <strong style={{ color: "#0E1F1A" }}>2015</strong> do
            desejo de dois amigos empreenderem.{" "}
            <strong style={{ color: "#0E1F1A" }}>Vinicius e Taiguara</strong> transformaram uma
            amizade de infância em uma parceria de sucesso, criando a primeira Saladeria Fast
            Food do Brasil. São <strong style={{ color: "#0E1F1A" }}>10 anos</strong> levando
            hábitos saudáveis para a rotina dos brasileiros.
          </p>

          {/* Stat */}
          <div
            className="inline-flex flex-col gap-0.5 self-start px-6 py-4 rounded-2xl"
            style={{ background: "#01994E" }}
          >
            <span
              className="font-display font-bold leading-none"
              style={{ fontSize: "clamp(36px, 5vw, 52px)", color: "#FBFBF7" }}
            >
              +de 43
            </span>
            <span
              className="text-sm font-semibold"
              style={{ color: "rgba(251,251,247,0.75)" }}
            >
              lojas espalhadas pelo Brasil
            </span>
          </div>

          {/* CTA */}
          <div>
            <Button href="/seja-um-franqueado" size="md">
              Quero minha Franquia! <span aria-hidden="true">→</span>
            </Button>
          </div>

          </div>

        </div>
      </div>
    </section>
  );
}
