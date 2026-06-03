import Link from "next/link";
import GreenStationLogo from "@/components/GreenStationLogo";

/* ─── Nav data ──────────────────────────────────────────────── */

const NAV = [
  {
    title: "A Marca",
    links: [
      { href: "/sobre", label: "Nossa história" },
      { href: "/cardapio", label: "Cardápio" },
      { href: "/lojas", label: "Nossas lojas" },
      { href: "/blog", label: "Diário da rede" },
    ],
  },
  {
    title: "Franqueado",
    links: [
      { href: "/modelos-de-negocio", label: "Modelos de negócio" },
      { href: "/seja-um-franqueado#jornada", label: "A jornada" },
      { href: "/seja-um-franqueado#por-que", label: "Por que a Green?" },
      { href: "/seja-um-franqueado", label: "Quero ser franqueado" },
    ],
  },
  {
    title: "Encontrar",
    links: [
      { href: "/lojas", label: "Unidades" },
      { href: "/seja-um-franqueado#faq", label: "Dúvidas frequentes" },
      { href: "/imprensa", label: "Imprensa" },
      { href: "/trabalhe-conosco", label: "Trabalhe conosco" },
    ],
  },
];

const SOCIALS = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/greenstationbr",
    icon: (
      <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
      </svg>
    ),
  },
  {
    label: "TikTok",
    href: "https://www.tiktok.com/@greenstationbr",
    icon: (
      <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true">
        <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/greenstationbr",
    icon: (
      <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    label: "YouTube",
    href: "https://www.youtube.com/@greenstationbr",
    icon: (
      <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true">
        <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
      </svg>
    ),
  },
];

/* ─── Footer column ─────────────────────────────────────────── */

function NavCol({ title, links }: { title: string; links: { href: string; label: string }[] }) {
  return (
    <nav aria-label={title}>
      <h3 className="font-display font-bold text-sm mb-5 text-brand-yellow tracking-wide">
        {title}
      </h3>
      <ul className="space-y-3">
        {links.map((l) => (
          <li key={l.href}>
            <Link
              href={l.href}
              className="text-sm text-white/60 hover:text-white transition-colors"
            >
              {l.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

/* ─── WhatsApp button ───────────────────────────────────────── */

function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/5511999990000"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Fale no WhatsApp"
      className="btn-premium fixed bottom-6 right-6 z-50 inline-flex items-center gap-2.5 rounded-pill border-2 border-brand-text px-4 py-3 font-display text-sm font-bold text-white shadow-[4px_4px_0_#0E1F1A] transition-transform hover:-translate-y-0.5"
      style={{ background: "#25D366" }}
    >
      <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" aria-hidden="true">
        <path d="M20.5 3.5A11 11 0 003.7 18.2L2 22l3.9-1.6A11 11 0 1020.5 3.5zm-8.5 17a9 9 0 01-4.6-1.3l-.3-.2-2.4 1 1-2.3-.2-.4A9 9 0 1112 20.5zm5-6.4c-.3-.2-1.7-.8-2-.9-.3-.1-.4-.1-.6.1l-.9 1c-.2.2-.3.3-.6.1-.3-.2-1.2-.4-2.3-1.4-.8-.7-1.4-1.6-1.6-1.9-.2-.3 0-.4.1-.6l.4-.5c.1-.2.2-.3.3-.5 0-.2 0-.4 0-.5l-.8-2c-.2-.5-.4-.4-.6-.4h-.5c-.2 0-.5.1-.7.3-.3.3-1 .9-1 2.3 0 1.4 1 2.7 1.2 2.9.2.2 2 3.1 4.9 4.3.7.3 1.2.5 1.6.6.7.2 1.3.2 1.8.1.6-.1 1.7-.7 1.9-1.4.2-.7.2-1.2.2-1.4-.1-.1-.3-.2-.5-.3z" />
      </svg>
      <span className="hidden sm:inline">Fale no WhatsApp</span>
    </a>
  );
}

/* ─── Main export ───────────────────────────────────────────── */

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <>
      <footer
        className="relative overflow-hidden"
        style={{ background: "#0E1F1A", color: "#FBFBF7" }}
      >
        {/* Main grid */}
        <div className="mx-auto max-w-container px-5 pt-16 pb-10">
          <div className="grid grid-cols-1 md:grid-cols-[1.6fr_1fr_1fr_1fr] gap-10 lg:gap-16">

            {/* Brand col */}
            <div>
              <Link href="/" className="inline-block mb-5" aria-label="Green Station — início">
                <GreenStationLogo className="h-4 w-auto text-white" />
              </Link>
              <p className="text-sm leading-relaxed max-w-xs" style={{ color: "rgba(251,251,247,0.6)" }}>
                A maior Franquia de Fast Salad do Brasil.
                Comida de verdade, franquia que faz sentido.
              </p>

              {/* Socials */}
              <div className="flex gap-3 mt-6">
                {SOCIALS.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    className="w-9 h-9 rounded-full flex items-center justify-center transition-colors bg-white/[0.08] text-white/60 hover:bg-white/[0.16] hover:text-white"
                  >
                    {s.icon}
                  </a>
                ))}
              </div>

              {/* Contact */}
              <div className="mt-7 space-y-1.5">
                <a
                  href="mailto:franqueado@greenstation.com.br"
                  className="block text-sm transition-colors"
                  style={{ color: "rgba(251,251,247,0.5)" }}
                >
                  franqueado@greenstation.com.br
                </a>
                <a
                  href="tel:+5511999990000"
                  className="block text-sm transition-colors"
                  style={{ color: "rgba(251,251,247,0.5)" }}
                >
                  (11) 99999-0000
                </a>
              </div>
            </div>

            {/* Nav cols */}
            {NAV.map((col) => (
              <NavCol key={col.title} title={col.title} links={col.links} />
            ))}
          </div>

          {/* Bottom bar */}
          <div
            className="mt-14 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs"
            style={{
              borderTop: "1px solid rgba(251,251,247,0.1)",
              color: "rgba(251,251,247,0.35)",
            }}
          >
            <span>© {year} Green Station Franchising Ltda · CNPJ 00.000.000/0001-00</span>
            <span className="flex gap-4">
              <Link href="/privacidade" className="hover:text-white/60 transition-colors">
                Privacidade
              </Link>
              <Link href="/termos" className="hover:text-white/60 transition-colors">
                Termos
              </Link>
              <Link href="/cof" className="hover:text-white/60 transition-colors">
                COF da rede
              </Link>
            </span>
          </div>
        </div>

        {/* Watermark */}
        <div
          aria-hidden="true"
          className="pointer-events-none select-none overflow-hidden"
          style={{ marginTop: "-32px" }}
        >
          <svg
            viewBox="0 0 1200 160"
            preserveAspectRatio="xMidYEnd meet"
            style={{ width: "100%", display: "block", height: "120px" }}
          >
            <text
              x="50%"
              y="145"
              textAnchor="middle"
              fontFamily="var(--font-recoleta), Georgia, serif"
              fontWeight="700"
              fontSize="160"
              letterSpacing="-6"
              fill="#00C05A"
              opacity="0.07"
            >
              green station
            </text>
          </svg>
        </div>
      </footer>

      {/* WhatsApp floating button */}
      <WhatsAppButton />
    </>
  );
}
