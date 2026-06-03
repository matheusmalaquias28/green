import type { Metadata } from "next";
import Image from "next/image";
import HeroButtons from "@/components/HeroButtons";
import OpenModalButton from "@/components/OpenModalButton";
import ModelosSection from "@/components/ModelosSection";
import FloatingMascots from "@/components/sections/FloatingMascots";
import QuemEstaNaRede from "@/components/sections/QuemEstaNaRede";
import CasesDeSucesso from "@/components/sections/CasesDeSucesso";
import DiarioDaRede from "@/components/sections/DiarioDaRede";
import MenuShowcase from "@/components/sections/MenuShowcase";
import Historia from "@/components/sections/Historia";
import MarcasHomologadas from "@/components/sections/MarcasHomologadas";
import RazoesInvestir from "@/components/sections/RazoesInvestir";
import Marquee from "@/components/Marquee";
import { homeMarqueeItems } from "@/lib/marquee";
import { homologatedBrands } from "@/lib/homologated-brands";
import PresencaNacional from "@/components/sections/PresencaNacional";

export const metadata: Metadata = {
  title: "Green Station — A maior Franquia de Fast Salad do Brasil",
  description:
    "Primeira saladeria fast food do Brasil, fundada em 2015. Invista a partir de R$ 150 mil em alimentação saudável. 24 unidades em 8 estados.",
};

const stats = [
  { valor: "2015", label: "Fundação" },
  { valor: "24+", label: "Lojas ativas" },
  { valor: "8", label: "Estados" },
  { valor: "R$150k", label: "Invest. inicial" },
];

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="relative min-h-screen flex items-center bg-brand-green overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute -top-32 -right-32 w-[700px] h-[700px] rounded-full bg-brand-yellow" />
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full bg-white" />
        </div>
        <div className="relative mx-auto max-w-container px-5 pt-32 pb-24 flex flex-col items-center text-center">
          <span className="inline-block rounded-pill bg-brand-yellow px-5 py-2 text-xs font-bold text-brand-text mb-8 tracking-wide">
            Fast Salad · Desde 2015
          </span>
          <h1 className="font-display text-6xl sm:text-7xl lg:text-8xl xl:text-[6rem] font-bold text-white leading-[1.02] mb-7 max-w-5xl">
            A maior <span className="text-brand-yellow">Franquia</span><br />
            de Fast Salad do Brasil.
          </h1>
          <p className="text-white/80 text-xl max-w-2xl mb-10 leading-relaxed">
            Primeira saladeria fast food do país. 10+ anos de história, 24 unidades em 8 estados
            e investimento a partir de{" "}
            <strong className="text-white">R$ 150 mil</strong>.
          </p>
          <HeroButtons />
        </div>
      </section>

      <Marquee items={homeMarqueeItems} />

      {/* FLOATING MASCOTS — decorative, anchored to viewport edges */}
      <FloatingMascots />

      {/* HISTÓRIA */}
      <Historia />

      {/* MERCADO */}
      <section className="bg-brand-yellow overflow-hidden grid grid-cols-1 lg:grid-cols-[1fr_1fr_1fr] min-h-[560px] lg:min-h-[640px]">
        {/* Texto */}
        <div className="flex flex-col justify-center bg-brand-yellow px-10 py-16 lg:px-14">
          <span className="text-xs font-bold text-brand-green uppercase tracking-widest mb-4">Oportunidade</span>
          <h2 className="font-display text-5xl sm:text-6xl font-bold text-brand-text mb-6 max-w-[70%]">
            O mercado que não para de crescer
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed">
            O food service faturou{" "}
            <strong className="text-brand-text">R$ 46,9 bilhões em 2023</strong>, ocupando o top 3 do franchising nacional e representando ~17,9% do faturamento do setor. Alimentação saudável é o segmento de maior crescimento — e a Green Station está no centro disso.
          </p>
        </div>

        {/* Imagem 1 */}
        <div className="group relative min-h-[360px] lg:min-h-0 overflow-hidden">
          <Image
            src="/images/green-loja.jpg"
            alt="Interior de uma loja Green Station"
            fill
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-110 motion-reduce:transition-none motion-reduce:group-hover:scale-100"
            sizes="(max-width: 1024px) 100vw, 33vw"
            priority
          />
          <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-24 bg-gradient-to-t from-brand-green-dark/30 to-transparent" />
        </div>

        {/* Imagem 2 */}
        <div className="group relative min-h-[360px] lg:min-h-0 overflow-hidden">
          <Image
            src="/images/green-oportunidade.png"
            alt="Oportunidade Green Station"
            fill
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-110 motion-reduce:transition-none motion-reduce:group-hover:scale-100"
            sizes="(max-width: 1024px) 100vw, 33vw"
          />
          <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-24 bg-gradient-to-t from-brand-green-dark/30 to-transparent" />
        </div>
      </section>

      {/* DIFERENCIAIS */}
      <RazoesInvestir />

      {/* MARCAS HOMOLOGADAS */}
      <MarcasHomologadas brands={homologatedBrands} />

      {/* CARDÁPIO */}
      <MenuShowcase />

      {/* MODELOS */}
      <ModelosSection />

      {/* QUEM ESTÁ NA REDE */}
      <QuemEstaNaRede />

      {/* CASES DE SUCESSO */}
      <CasesDeSucesso />

      {/* DIÁRIO DA REDE */}
      <DiarioDaRede />

      {/* CTA FINAL */}
      <section className="py-24 bg-brand-green">
        <div className="mx-auto max-w-container px-5 text-center">
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-white mb-4">
            Pronto para ser dono<br />do seu negócio?
          </h2>
          <p className="text-white/80 text-lg mb-8 max-w-xl mx-auto">
            Invista em um mercado em expansão com uma marca sólida e time dedicado ao seu sucesso.
          </p>
          <OpenModalButton label="Quero ser franqueado" size="xl" />
          <p className="mt-4 text-white/50 text-sm">Investimento a partir de R$ 150 mil</p>
        </div>
      </section>

      {/* PRESENÇA NACIONAL */}
      <PresencaNacional />
    </>
  );
}