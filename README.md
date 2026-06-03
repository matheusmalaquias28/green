# Green Station — Site Institucional

Site institucional multipágina da **Green Station**, maior franquia de fast salad do Brasil.

## Stack

- **Next.js 16** (App Router) + TypeScript
- **Tailwind CSS v4** com design tokens da marca
- **Framer Motion** para animações
- **Sanity** (a integrar) como CMS do blog
- Deploy: **Vercel** | Gerenciador: **pnpm**

## Setup local

```bash
# 1. Instale dependências
pnpm install

# 2. Configure variáveis de ambiente
cp .env.example .env.local
# Edite .env.local com os valores reais

# 3. Rode em desenvolvimento
pnpm dev
```

Acesse [http://localhost:3000](http://localhost:3000).

## Estrutura de páginas

| Rota | Descrição |
|------|-----------|
| `/` | Home — resumo + CTAs de lead |
| `/seja-um-franqueado` | Página de conversão principal + FAQ |
| `/modelos-de-negocio` | Rua · Shopping · Drive-thru · Quiosque |
| `/sobre` | História, fundadores, timeline |
| `/cardapio` | Cardápio filtrável com dados nutricionais |
| `/lojas` | Índice de lojas por estado/cidade |
| `/lojas/[estado]/[slug]` | Página por unidade (LocalBusiness schema) |
| `/blog` | Hub de conteúdo (Sanity) |
| `/blog/[slug]` | Post individual |

## Pendências do cliente (antes do go-live)

- [ ] **Fontes Recoleta** — enviar `.woff2` para `/public/fonts/` (Regular, SemiBold, Bold). Fallback atual: Fraunces.
- [ ] **URL do webhook de leads** — preencher `LEAD_WEBHOOK_URL` no `.env.local` e nas env vars da Vercel.
- [ ] **JSON do cardápio** — ~110 itens com nome, categoria, kcal, macros, restrições e alergênicos.
- [ ] **Geocoding das lojas** — lat/lng para cada unidade.
- [ ] **Logos vetoriais** — `GREEN-STATION.svg` e `circle-green-station.svg` para `/public/brand/`.
- [ ] **Confirmar número de lojas** — marketing diz "+43 lojas", há 24 endereços confirmados.

## Integrações futuras

- [ ] Sanity para o blog
- [ ] Páginas de lojas individuais com LocalBusiness schema
- [ ] Cardápio com filtros e dados nutricionais completos
- [ ] Google Analytics / Tag Manager

## Design System

| Token | Valor |
|-------|-------|
| Verde primário | `#01994E` |
| Amarelo acento | `#FAC612` |
| Verde escuro | `#245A51` |
| Fundo | `#FBFBF7` |
| Texto | `#0E1F1A` |
| Font display | Recoleta (fallback: Fraunces) |
| Font body | Manrope |

## Deploy na Vercel

```bash
pnpm add -g vercel
vercel        # preview
vercel --prod # produção
```

Configure `LEAD_WEBHOOK_URL` em **Project Settings → Environment Variables**.
"# green" 
