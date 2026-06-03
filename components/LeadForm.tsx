"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Button from "@/components/Button";

const UF_LIST = [
  "AC","AL","AP","AM","BA","CE","DF","ES","GO","MA","MT","MS","MG",
  "PA","PB","PR","PE","PI","RJ","RN","RS","RO","RR","SC","SP","SE","TO",
];

type FieldErrors = Partial<Record<"nome" | "email" | "celular" | "estado" | "cidade", string>>;

type Status = "idle" | "loading" | "success" | "error";

export default function LeadForm({ variant = "default" }: { variant?: "default" | "hero" }) {
  const [fields, setFields] = useState({
    nome: "", email: "", celular: "", estado: "", cidade: "",
  });
  const [errors, setErrors] = useState<FieldErrors>({});
  const [status, setStatus] = useState<Status>("idle");
  const [serverError, setServerError] = useState("");

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) {
    const { name, value } = e.target;
    setFields((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: undefined }));
  }

  function formatPhone(value: string) {
    const digits = value.replace(/\D/g, "").slice(0, 11);
    if (digits.length <= 2) return digits;
    if (digits.length <= 6) return `(${digits.slice(0, 2)}) ${digits.slice(2)}`;
    if (digits.length <= 10) return `(${digits.slice(0, 2)}) ${digits.slice(2, 6)}-${digits.slice(6)}`;
    return `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}-${digits.slice(7)}`;
  }

  function handlePhone(e: React.ChangeEvent<HTMLInputElement>) {
    setFields((prev) => ({ ...prev, celular: formatPhone(e.target.value) }));
    setErrors((prev) => ({ ...prev, celular: undefined }));
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    setServerError("");

    const formData = new FormData(e.currentTarget);
    const payload = {
      nome: fields.nome,
      email: fields.email,
      celular: fields.celular,
      estado: fields.estado,
      cidade: fields.cidade,
      _hp: formData.get("_hp") as string, // honeypot
    };

    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await res.json();

      if (res.ok) {
        setStatus("success");
        setFields({ nome: "", email: "", celular: "", estado: "", cidade: "" });
      } else if (res.status === 422 && data.errors) {
        setErrors(data.errors);
        setStatus("idle");
      } else {
        setServerError(data.error || "Erro inesperado. Tente novamente.");
        setStatus("error");
      }
    } catch {
      setServerError("Sem conexão. Verifique sua internet e tente novamente.");
      setStatus("error");
    }
  }

  const isHero = variant === "hero";

  const inputClass = `w-full rounded-md px-4 py-3 text-sm border outline-none transition-all focus:ring-2 focus:ring-brand-green ${
    isHero
      ? "bg-white/10 border-white/30 text-white placeholder:text-white/50 focus:border-white"
      : "bg-white border-gray-200 text-brand-text placeholder:text-gray-400 focus:border-brand-green"
  }`;

  const labelClass = `block text-left text-xs font-semibold mb-1.5 ${
    isHero ? "text-white/85" : "text-brand-text"
  }`;

  const fieldClass = "flex flex-col items-start w-full";

  const errorClass = "mt-1 text-left text-xs text-red-400";

  if (status === "success") {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className={`rounded-xl p-8 text-center ${isHero ? "bg-white/10" : "bg-brand-green/5 border border-brand-green/20"}`}
      >
        <div className="text-4xl mb-4">🥗</div>
        <h3 className={`font-display text-xl font-bold mb-2 ${isHero ? "text-white" : "text-brand-green"}`}>
          Recebemos seu contato!
        </h3>
        <p className={`text-sm ${isHero ? "text-white/80" : "text-gray-600"}`}>
          Nossa equipe entrará em contato em breve para apresentar a oportunidade Green Station.
        </p>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="w-full text-left">
      {/* Honeypot — invisível para humanos */}
      <input name="_hp" type="text" tabIndex={-1} aria-hidden="true" className="hidden" autoComplete="off" />

      <div className="flex flex-col gap-4">
        {/* Nome */}
        <div className={fieldClass}>
          <label htmlFor="nome" className={labelClass}>Nome completo *</label>
          <input
            id="nome" name="nome" type="text" autoComplete="name"
            placeholder="Seu nome" value={fields.nome} onChange={handleChange}
            className={inputClass}
            aria-invalid={!!errors.nome}
          />
          {errors.nome && <p className={errorClass}>{errors.nome}</p>}
        </div>

        {/* Email */}
        <div className={fieldClass}>
          <label htmlFor="email" className={labelClass}>E-mail *</label>
          <input
            id="email" name="email" type="email" autoComplete="email"
            placeholder="seu@email.com" value={fields.email} onChange={handleChange}
            className={inputClass}
            aria-invalid={!!errors.email}
          />
          {errors.email && <p className={errorClass}>{errors.email}</p>}
        </div>

        {/* Celular */}
        <div className={fieldClass}>
          <label htmlFor="celular" className={labelClass}>Celular / WhatsApp *</label>
          <input
            id="celular" name="celular" type="tel" autoComplete="tel"
            placeholder="(00) 00000-0000" value={fields.celular} onChange={handlePhone}
            inputMode="numeric"
            className={inputClass}
            aria-invalid={!!errors.celular}
          />
          {errors.celular && <p className={errorClass}>{errors.celular}</p>}
        </div>

        {/* Estado */}
        <div className={fieldClass}>
          <label htmlFor="estado" className={labelClass}>Estado *</label>
          <select
            id="estado" name="estado" value={fields.estado} onChange={handleChange}
            className={`${inputClass} cursor-pointer`}
            aria-invalid={!!errors.estado}
          >
            <option value="">Selecione o estado</option>
            {UF_LIST.map((uf) => (
              <option key={uf} value={uf}>{uf}</option>
            ))}
          </select>
          {errors.estado && <p className={errorClass}>{errors.estado}</p>}
        </div>

        {/* Cidade */}
        <div className={fieldClass}>
          <label htmlFor="cidade" className={labelClass}>Cidade *</label>
          <input
            id="cidade" name="cidade" type="text" autoComplete="address-level2"
            placeholder="Sua cidade" value={fields.cidade} onChange={handleChange}
            className={inputClass}
            aria-invalid={!!errors.cidade}
          />
          {errors.cidade && <p className={errorClass}>{errors.cidade}</p>}
        </div>
      </div>

      {/* Erro de servidor */}
      <AnimatePresence>
        {serverError && (
          <motion.p
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="mt-3 text-sm text-red-400"
          >
            {serverError}
          </motion.p>
        )}
      </AnimatePresence>

      <Button
        type="submit"
        disabled={status === "loading"}
        fullWidth
        className="mt-6"
      >
        {status === "loading" ? "Enviando..." : "Quero ser franqueado →"}
      </Button>

      <p className={`mt-3 text-xs text-center ${isHero ? "text-white/50" : "text-gray-400"}`}>
        Seus dados estão seguros. Sem spam.
      </p>
    </form>
  );
}
