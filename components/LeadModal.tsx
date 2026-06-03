"use client";

import { useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import LeadForm from "@/components/LeadForm";

type Props = {
  open: boolean;
  onClose: () => void;
};

export default function LeadModal({ open, onClose }: Props) {
  const dialogRef = useRef<HTMLDivElement>(null);

  // Fechar com Escape
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (open) document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, [open, onClose]);

  // Travar scroll do body
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          {/* Backdrop */}
          <motion.div
            className="absolute inset-0 bg-brand-green-dark/80 backdrop-blur-sm"
            onClick={onClose}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />

          {/* Painel */}
          <motion.div
            ref={dialogRef}
            role="dialog"
            aria-modal="true"
            aria-label="Formulário de franquia"
            className="relative w-full max-w-lg bg-white rounded-2xl shadow-2xl overflow-hidden"
            initial={{ opacity: 0, scale: 0.94, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.94, y: 16 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
          >
            {/* Barra de acento */}
            <div className="h-1.5 bg-brand-yellow" />

            <div className="p-8">
              {/* Header do modal */}
              <div className="relative text-center mb-6">
                <h2 className="font-display text-2xl font-bold text-brand-text">
                  Quero ser franqueado
                </h2>
                <p className="text-sm text-gray-500 mt-1">
                  Nossa equipe entra em contato em até 1 dia útil.
                </p>
                <button
                  onClick={onClose}
                  aria-label="Fechar"
                  className="absolute top-0 right-0 w-8 h-8 rounded-full flex items-center justify-center text-gray-400 hover:bg-gray-100 hover:text-gray-700 transition-colors"
                >
                  ✕
                </button>
              </div>

              <LeadForm />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
