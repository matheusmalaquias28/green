# Prompt de Bootstrap — Site Institucional Green Station

Você é o desenvolvedor principal deste projeto. Construa um site institucional multipágina de alta performance para a **Green Station**, a maior franquia de *fast salad* do Brasil. O objetivo de negócio nº 1 é **captação de leads de franqueados**; o nº 2 é **autoridade de SEO no segmento de franquias** (via blog); o nº 3 é **SEO local** das unidades. Cada decisão técnica deve servir performance e SEO.

## Stack obrigatória
- **Next.js (App Router)** + **TypeScript**, renderização estática (SSG) com ISR onde fizer sentido.
- **Tailwind CSS** com design tokens da marca. Componentes próprios (pode usar shadcn/ui como base, mas estilize na identidade da marca).
- **Sanity** como CMS headless, **exclusivamente para o blog**.
- **Framer Motion** para animações (a marca é disruptiva e caricata — movimento bem trabalhado, sem exageros que prejudiquem CWV).
- Deploy alvo: **Vercel**. Desenvolvimento local primeiro.
- Gerenciador: **pnpm**.

## Identidade visual (design system)

**Cores:**
- Verde primário: `#01994E` (CTAs, blocos sólidos, marca)
- Amarelo acento: `#FAC612` (destaques, pegada caricata)
- Verde escuro: `#245A51` (profundidade, footer, seções densas)
- Neutros sugeridos: fundo `#FBFBF7`, texto `#0E1F1A`, mais escala de cinzas. Defina a escala completa em tokens.

**Tipografia:**
- **Recoleta** (serifada, display/títulos) — servir via `next/font/local` a partir dos `.woff2` em `/public/fonts` (arquivos serão fornecidos; deixe o caminho pronto e faça fallback temporário para uma serifada do Google como Fraunces enquanto o arquivo não chega).
- **Manrope** (sans, corpo/UI) — via `next/font/google`.

**Logos:** em `/public/brand` ficam o wordmark `GREEN-STATION.svg` e o selo circular `circle-green-station.svg`, ambos na versão branca (para fundos coloridos). Gere variantes recoloridas (verde `#01994E` e escuro) para uso sobre fundo claro no header — é vetor de cor única, basta trocar o `fill`.

Crie um arquivo de tokens (`styles/tokens.css` + extensão no `tailwind.config`) com cores, tipografia, espaçamentos e raios. Defina um sistema visual com personalidade: cantos arredondados generosos, uso ousado do amarelo como acento, micro-interações divertidas.

## Arquitetura de páginas

```
/                      Home — resumo de tudo + CTAs fortes de lead
/seja-um-franqueado    PÁGINA-MÃE de conversão (a mais importante)
/modelos-de-negocio    rua · shopping · container drive-thru · quiosque
/sobre                 história (desde 2015), fundadores Vinicius e Taiguara, 10+ anos
/cardapio              cardápio rico, filtrável, com dados nutricionais estruturados
/lojas                 índice + busca por estado/cidade
/lojas/[estado]/[cidade]   página por unidade, com LocalBusiness schema
/blog                  hub de conteúdo (Sanity)
/blog/[slug]           post individual
```

Gere `sitemap.ts` e `robots.ts` automáticos. Toda página usa `generateMetadata` com title/description únicos por intenção de busca, Open Graph e canonical.

## SEO — requisitos não-negociáveis
- **Structured data (JSON-LD):** `Organization` no layout raiz; `LocalBusiness` em cada loja; `FAQPage` na página de franqueado e onde houver FAQ; `BreadcrumbList` nas páginas internas; `Article` nos posts do blog.
- **Páginas locais reais** (não dependentes de JS) para cada cidade/unidade — esse é o destravamento que o site WordPress atual não tem.
- Metadados estratégicos mirando: "franquia de salada", "franquia fast food saudável", "investir em franquia de alimentação saudável", "franquia Green Station", além de termos locais por cidade.
- Imagens via `next/image`, lazy-loading, `alt` descritivo. Meta de Core Web Vitals no verde.
- Headings semânticos (um `<h1>` por página), HTML semântico.

## Conteúdo já levantado (use como fonte de verdade)

**Posicionamento:** "A maior Franquia de Fast Salad do Brasil." Primeira saladeria fast food do país, fundada em 2015 por Vinicius e Taiguara. 10+ anos. Investimento a partir de R$ 150 mil. Modelo sustentável e de fácil implantação.

**9 diferenciais ("Por que a Green?"):** Marketing profissional incluso; Variedade de produtos saudáveis (do café à janta); Food service de alto padrão; Suporte próximo e personalizado; Gestão com acompanhamento mensal; Domínio no delivery; Modelo replicável e flexível; Marca sólida com presença digital; Setor em constante expansão.

**Modelos de negócio:** Loja de rua · Loja de shopping · Loja container com drive-thru · Quiosque de shopping.

**Argumento de mercado:** Food service faturou R$ 46,9 bi em 2023, top 3 do franchising, ~17,9% do faturamento do setor.

**Depoimentos:** Rachel (Volta Redonda), Eduardo (Caxias, 3 unidades), Diely (Imperatriz/MA), Ingrid (Shopping Vila Velha, 8 anos).

**Cardápio — categorias:** Saladas, Wraps, Bowls Quentes, Greentinhas, Greentinhas Executivo, Caldos, Sucos, Shakes, Molhos, Café da Manhã, Sanduba Green, Sanduíche Natural, Sobremesas Geladas. (Os dados nutricionais completos de ~110 itens serão fornecidos em JSON; estruture `lib/menu.ts` para recebê-los — porção, kcal, macros, restrições, alergênicos, vegano/vegetariano — e construa filtros por categoria e por restrição alimentar.)

**Redes:** Instagram @greenstationbr · Facebook /greenstationbrasil.

## Lojas (24 unidades, 8 estados) — popular `lib/stores.ts`

Estruture cada loja como objeto tipado (`nome`, `cidade`, `estado` (UF), `endereço`, `slug`). Lista:

- **ES:** Bento Ferreira (Vitória) · Centro de Vitória · Drive Thru Vitória (Jardim da Penha) · Jardim Camburi (Vitória) · Praia do Canto (Vitória) · Reta da Penha (Vitória) · Shopping Vitória (Enseada do Suá) · Shopping Boulevard (Vila Velha) · Shopping Vila Velha (Centro) · Shopping Mestre Álvaro (Serra)
- **RS:** Caxias do Sul · Farroupilha · Porto Alegre Sarandi · Porto Alegre Moinhos de Vento
- **SP:** Piracicaba · Praia Grande · São José dos Campos · Taubaté
- **RJ:** Jacarepaguá (Rio de Janeiro) · Resende · Volta Redonda
- **GO:** Jataí · Rio Verde
- **PA:** Parauapebas
- **PI:** Teresina

Endereços completos (cole em `lib/stores.ts`):
- Bento Ferreira — Jardim Food Park, Rua Amélia da Cunha Ornelas, Bento Ferreira, Vitória/ES
- Caxias do Sul — R. Alfredo Chaves, 1234, loja 01, Centro, Caxias do Sul/RS
- Centro de Vitória — Rua Professor Baltazar, 171, loja 01, Centro, Vitória/ES
- Drive Thru Vitória — Av. Dante Michelini, 689, Jardim da Penha, Vitória/ES
- Farroupilha — Av. Armando Antonelo, 185, São Luiz, Farroupilha/RS
- Jacarepaguá — Estrada de Jacarepaguá, 6069, Anil, Rio de Janeiro/RJ
- Jardim Camburi — Rua Belmiro Teixeira Pimenta, 495, loja 01, Jardim Camburi, Vitória/ES
- Jataí — R. Minas Gerais, 1286, Samuel Graham, Jataí/GO, 75804-095
- Parauapebas — R. 14, 214, União, Parauapebas/PA, 68515-000
- Piracicaba — Rua Dona Eugênia, 1321, Jardim Europa, Piracicaba/SP
- Porto Alegre Sarandi — Av. Assis Brasil, 4320, Sarandi, Porto Alegre/RS
- Porto Alegre Moinhos — Rua Comendador Caminha, 358, Moinhos de Vento, Porto Alegre/RS
- Praia do Canto — Av. Rio Branco, 1540, loja 01, Praia do Canto, Vitória/ES
- Praia Grande — Rua Pernambuco, 119, Boqueirão, Praia Grande/SP
- Resende — R. Henrique Sivori, 47, loja 19, Campos Elíseos, Resende/RJ
- Reta da Penha — Rua Doutor Eurico de Aguiar, 290, loja 07, Praia do Canto, Vitória/ES
- Rio Verde — Avenida 1, Parque dos Buritis, Rio Verde/GO, 75907-453
- Shopping Boulevard Vila Velha — 027 Motors, Rodovia do Sol, Itaparica, Vila Velha/ES
- Shopping Mestre Álvaro — Av. João Palácio, 300, Conjunto Carapina I, Serra/ES
- Shopping Vila Velha — Av. Luciano das Neves, 2418, Centro, Vila Velha/ES
- Shopping Vitória — Av. Américo Buaiz, 200, Enseada do Suá, Vitória/ES
- São José dos Campos — Rua Santa Clara, 441, Vila Adyana, São José dos Campos/SP
- Taubaté — Rua Humaitá, 397, loja 09, Centro, Taubaté/SP
- Teresina — Av. Dom Severino, 1733, loja 21, Fátima, Teresina/PI
- Volta Redonda — R. 33, 98, Jardim Vila Rica / Tiradentes, Volta Redonda/RJ

(Geocoding/lat-lng fica para depois. Nota: o site de marketing diz "+43 lojas" mas há 24 endereços confirmados — confirmar com o cliente qual número usar no copy.)

## Formulário de lead (peça crítica)

Campos: **nome, e-mail, celular, estado (select com UFs), cidade**. Validação client + server. No submit, dispare um **POST para um webhook configurável via variável de ambiente** (`LEAD_WEBHOOK_URL`) — sem acoplar a nenhum serviço específico. Implemente como **Route Handler** (`app/api/lead/route.ts`) que valida e repassa ao webhook, com tratamento de erro e estado de loading/sucesso na UI. Inclua honeypot anti-spam. Documente a env var no `.env.example`.

## Tarefas desta primeira rodada
1. Inicializar o projeto (Next + TS + Tailwind + pnpm), estrutura de pastas conforme acima.
2. Montar o design system (tokens, tipografia, componentes base de UI no estilo da marca).
3. Configurar `next/font` (Manrope + Recoleta local com fallback).
4. Construir layout raiz (header com nav multipágina, footer com redes/lojas), com JSON-LD `Organization`.
5. Construir a **Home** e a **/seja-um-franqueado** completas (são a prioridade), incluindo o formulário de lead com webhook.
6. Stubs tipados e funcionais para `lib/stores.ts` (já com os endereços acima) e `lib/menu.ts`.
7. `sitemap.ts`, `robots.ts`, `.env.example`, e um `README.md` com instruções de setup e o que ainda falta (fonte Recoleta, JSON do cardápio, geocoding das lojas, URL do webhook).

Comece confirmando o plano e o que você vai gerar, depois execute. Use commits semânticos. Não invente dados de loja, telefones ou preços além dos fornecidos aqui.