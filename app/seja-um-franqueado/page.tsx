import type { Metadata } from "next";
import Link from "next/link";
import LeadForm from "@/components/LeadForm";
import Button from "@/components/Button";

export const metadata: Metadata = {
  title: "Seja um Franqueado Green Station — Invista em Fast Salad",
  description:
    "Torne-se franqueado Green Station. Investimento a partir de R$ 150 mil, 4 modelos de negócio, suporte completo e a marca líder em fast salad no Brasil.",
  openGraph: {
    title: "Seja um Franqueado Green Station",
    description: "Investimento a partir de R$ 150 mil. A maior franquia de fast salad do Brasil.",
  },
};

const faqItems = [
  {
    pergunta: "Qual o investimento necessário para abrir uma Green Station?",
    resposta:
      "O investimento inicial parte de R$ 150 mil, variando conforme o modelo escolhido (rua, shopping, drive-thru ou quiosque). O valor inclui taxa de franquia, equipamentos, estoque inicial e capital de giro.",
  },
  {
    pergunta: "Preciso ter experiência no ramo alimentício?",
    resposta:
      "Não é obrigatório. A Green Station oferece treinamento completo antes da abertura e suporte contínuo durante toda a operação. O sistema é desenvolvido para ser replicável independente de experiência prévia.",
  },
  {
    pergunta: "Como é o suporte da franqueadora?",
    resposta:
      "Você terá suporte em marketing (incluso), gestão com acompanhamento mensal, consultoria operacional, auxílio no delivery e uma equipe próxima em cada etapa do negócio.",
  },
  {
    pergunta: "Quanto tempo leva para abrir a loja após a assinatura do contrato?",
    resposta:
      "O prazo médio de abertura varia de 60 a 120 dias, dependendo do modelo de negócio escolhido e das condições do ponto comercial.",
  },
  {
    pergunta: "A Green Station ajuda a encontrar o ponto comercial?",
    resposta:
      "Sim. A equipe da franqueadora auxilia na análise e aprovação do ponto comercial, garantindo que o local atenda aos critérios de fluxo, metragem e adequação ao modelo escolhido.",
  },
  {
    pergunta: "Como funciona o royalty e a taxa de publicidade?",
    resposta:
      "As condições detalhadas de royalties e taxas são apresentadas durante a conversa com nossa equipe comercial, respeitando as particularidades de cada modelo e região.",
  },
];

const etapas = [
  { numero: "01", titulo: "Cadastro", desc: "Preencha o formulário abaixo. Leva menos de 2 minutos." },
  { numero: "02", titulo: "Contato", desc: "Nossa equipe comercial entra em contato em até 1 dia útil." },
  { numero: "03", titulo: "Apresentação", desc: "Reunião para apresentar o modelo, números e tirar dúvidas." },
  { numero: "04", titulo: "Visita", desc: "Conheça uma unidade em operação e valide sua decisão." },
  { numero: "05", titulo: "Aprovação", desc: "Análise de perfil e validação do ponto comercial." },
  { numero: "06", titulo: "Abertura", desc: "Treinamento completo e abertura da sua Green Station." },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqItems.map((item) => ({
    "@type": "Question",
    name: item.pergunta,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.resposta,
    },
  })),
};

export default function SejaFranqueadoPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      {/* HERO */}
      <section className="relative bg-brand-green-dark pt-32 pb-24 overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute -top-20 -right-20 w-[500px] h-[500px] rounded-full bg-brand-yellow" />
        </div>
        <div className="relative mx-auto max-w-container px-5 grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Copy */}
          <div>
            <nav className="text-xs text-white/50 mb-6 flex gap-2 items-center">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <span>/</span>
              <span className="text-white/80">Seja Franqueado</span>
            </nav>
            <span className="inline-block rounded-pill bg-brand-yellow px-4 py-1.5 text-xs font-bold text-brand-text mb-5">
              Oportunidade de Negócio
            </span>
            <h1 className="font-display text-4xl sm:text-5xl xl:text-6xl font-bold text-white leading-[1.08] mb-6">
              Invista na maior<br />
              <span className="text-brand-yellow">franquia de salada</span><br />
              do Brasil
            </h1>
            <p className="text-white/75 text-lg leading-relaxed mb-8 max-w-lg">
              Junte-se a uma rede com 10+ anos de história, modelo replicável e suporte completo — do marketing à gestão. Investimento a partir de{" "}
              <strong className="text-white">R$ 150 mil</strong>.
            </p>

            {/* Destaques */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { valor: "10+", label: "Anos de mercado" },
                { valor: "24", label: "Lojas ativas" },
                { valor: "8", label: "Estados" },
                { valor: "4", label: "Modelos de negócio" },
              ].map((item) => (
                <div key={item.label} className="rounded-lg bg-white/10 border border-white/15 p-4">
                  <p className="font-display text-3xl font-bold text-brand-yellow">{item.valor}</p>
                  <p className="text-xs text-white/60 mt-1">{item.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Formulário */}
          <div className="bg-white rounded-2xl p-8 shadow-2xl">
            <h2 className="font-display text-2xl font-bold text-brand-text mb-1">
              Quero ser franqueado
            </h2>
            <p className="text-gray-500 text-sm mb-6">
              Preencha e nossa equipe entra em contato em até 1 dia útil.
            </p>
            <LeadForm />
          </div>
        </div>
      </section>

      {/* ETAPAS */}
      <section className="py-24 bg-brand-bg">
        <div className="mx-auto max-w-container px-5">
          <div className="text-center mb-14">
            <span className="text-xs font-bold text-brand-green uppercase tracking-widest">Processo</span>
            <h2 className="font-display text-4xl sm:text-5xl font-bold text-brand-text mt-3">
              Como funciona
            </h2>
            <p className="text-gray-500 mt-4 max-w-xl mx-auto">
              Do cadastro à inauguração, você tem uma equipe dedicada em cada etapa.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {etapas.map((e) => (
              <div key={e.numero} className="flex gap-4 p-6 rounded-xl bg-white border border-gray-100">
                <span className="font-display text-3xl font-bold text-brand-green/20 shrink-0">{e.numero}</span>
                <div>
                  <h3 className="font-display font-bold text-lg text-brand-text mb-1">{e.titulo}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{e.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MODELOS */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-container px-5">
          <div className="text-center mb-14">
            <span className="text-xs font-bold text-brand-green uppercase tracking-widest">Formatos</span>
            <h2 className="font-display text-4xl sm:text-5xl font-bold text-brand-text mt-3">
              4 modelos de negócio
            </h2>
            <p className="text-gray-500 mt-4 max-w-xl mx-auto">
              Escolha o formato que melhor se adequa ao seu perfil de investidor e mercado.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {[
              {
                titulo: "Loja de Rua",
                icon: "🏪",
                desc: "Ideal para regiões comerciais de alto fluxo. Aproveita o movimento do almoço e jantar com estrutura completa de atendimento.",
                destaque: "Alto volume de vendas",
              },
              {
                titulo: "Loja de Shopping",
                icon: "🏬",
                desc: "Acesso à base de clientes já qualificados de um shopping center, com ambiente climatizado e segurança.",
                destaque: "Base de clientes garantida",
              },
              {
                titulo: "Container Drive-Thru",
                icon: "🚗",
                desc: "Formato inovador e disruptivo. Estrutura modular em container com atendimento por drive-thru — rapidez e praticidade.",
                destaque: "Formato diferenciado",
              },
              {
                titulo: "Quiosque de Shopping",
                icon: "🏷️",
                desc: "Menor investimento inicial com presença garantida em shopping de grande fluxo. Ótimo para começar ou expandir.",
                destaque: "Menor investimento inicial",
              },
            ].map((m) => (
              <div key={m.titulo} className="rounded-xl p-7 border border-gray-100 hover:border-brand-green/30 hover:shadow-lg transition-all">
                <div className="flex items-start gap-4">
                  <span className="text-4xl shrink-0">{m.icon}</span>
                  <div>
                    <span className="inline-block rounded-pill bg-brand-green/10 px-3 py-1 text-xs font-semibold text-brand-green mb-2">
                      {m.destaque}
                    </span>
                    <h3 className="font-display font-bold text-xl text-brand-text mb-2">{m.titulo}</h3>
                    <p className="text-sm text-gray-500 leading-relaxed">{m.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Button href="/modelos-de-negocio" variant="outlineGreen" size="md">
              Saiba mais sobre os modelos
            </Button>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-brand-bg">
        <div className="mx-auto max-w-container px-5">
          <div className="text-center mb-14">
            <span className="text-xs font-bold text-brand-green uppercase tracking-widest">Dúvidas frequentes</span>
            <h2 className="font-display text-4xl sm:text-5xl font-bold text-brand-text mt-3">
              Perguntas frequentes
            </h2>
          </div>

          <div className="max-w-3xl mx-auto divide-y divide-gray-200">
            {faqItems.map((item) => (
              <details key={item.pergunta} className="group py-5">
                <summary className="flex items-center justify-between cursor-pointer list-none gap-4">
                  <h3 className="font-display font-bold text-brand-text text-base group-open:text-brand-green transition-colors">
                    {item.pergunta}
                  </h3>
                  <span className="shrink-0 w-6 h-6 rounded-full border-2 border-brand-green flex items-center justify-center text-brand-green text-sm font-bold group-open:rotate-45 transition-transform">
                    +
                  </span>
                </summary>
                <p className="mt-4 text-sm text-gray-600 leading-relaxed">{item.resposta}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="py-20 bg-brand-green">
        <div className="mx-auto max-w-container px-5 text-center">
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-white mb-4">
            Dê o primeiro passo hoje
          </h2>
          <p className="text-white/80 text-lg mb-8 max-w-lg mx-auto">
            Nossa equipe está pronta para apresentar a oportunidade e esclarecer todas as suas dúvidas.
          </p>
          <Button href="#cadastro" size="lg">
            Quero ser franqueado
          </Button>
        </div>
      </section>
    </>
  );
}
