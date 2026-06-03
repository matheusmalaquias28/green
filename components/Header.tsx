"use client";

import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import GreenStationLogo from "@/components/GreenStationLogo";
import ScribbleNavLink from "@/components/ScribbleNavLink";
import Button from "@/components/Button";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/seja-um-franqueado", label: "Seja Franqueado" },
  { href: "/modelos-de-negocio", label: "Modelos" },
  { href: "/sobre", label: "Sobre" },
  { href: "/cardapio", label: "Cardápio" },
  { href: "/lojas", label: "Lojas" },
  { href: "/blog", label: "Blog" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-brand-bg shadow-[0_1px_0_rgba(14,31,26,0.06)]">
      <div className="mx-auto max-w-container px-5">
        <div className="flex items-center justify-between gap-6 py-4 lg:grid lg:grid-cols-[auto_1fr_auto] lg:items-center lg:py-5">
          <Link
            href="/"
            aria-label="Green Station — página inicial"
            className="shrink-0 justify-self-start text-brand-text"
          >
            <GreenStationLogo className="h-[18px] w-[205px] max-w-[min(205px,42vw)]" />
          </Link>

          {/* Nav desktop — centralizado */}
          <nav
            className="hidden lg:flex items-center justify-center gap-0.5 xl:gap-1"
            aria-label="Menu principal"
          >
            {navLinks.map((link) => (
              <ScribbleNavLink key={link.href} href={link.href} label={link.label} />
            ))}
          </nav>

          {/* CTA desktop */}
          <div className="hidden lg:flex justify-end shrink-0">
            <Button href="/seja-um-franqueado" variant="primary" size="sm">
              Quero ser franqueado
            </Button>
          </div>

          {/* Hamburger mobile */}
          <button
            type="button"
            className="lg:hidden ml-auto p-2 -mr-2"
            onClick={() => setOpen(!open)}
            aria-label={open ? "Fechar menu" : "Abrir menu"}
            aria-expanded={open}
          >
            <span
              className={`block w-6 h-0.5 mb-1.5 bg-brand-green-dark transition-all duration-300 ${
                open ? "rotate-45 translate-y-2" : ""
              }`}
            />
            <span
              className={`block w-6 h-0.5 mb-1.5 bg-brand-green-dark transition-all duration-300 ${
                open ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block w-6 h-0.5 bg-brand-green-dark transition-all duration-300 ${
                open ? "-rotate-45 -translate-y-2" : ""
              }`}
            />
          </button>
        </div>
      </div>

      {/* Barra de acento inferior — estilo Banh Mi World */}
      <div className="h-1.5 bg-brand-yellow" aria-hidden="true" />

      {/* Menu mobile */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="lg:hidden bg-brand-bg border-t border-brand-green/10 overflow-hidden"
          >
            <nav className="flex flex-col items-center px-5 py-6 gap-1">
              {navLinks.map((link) => (
                <ScribbleNavLink
                  key={link.href}
                  href={link.href}
                  label={link.label}
                  onClick={() => setOpen(false)}
                  className="w-full justify-center py-3"
                />
              ))}
              <Button
                href="/seja-um-franqueado"
                variant="primary"
                size="sm"
                fullWidth
                className="mt-4"
                onClick={() => setOpen(false)}
              >
                Quero ser franqueado
              </Button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
