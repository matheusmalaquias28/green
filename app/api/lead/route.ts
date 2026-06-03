import { NextRequest, NextResponse } from "next/server";

export const runtime = "edge";

const UF_LIST = [
  "AC","AL","AP","AM","BA","CE","DF","ES","GO","MA","MT","MS","MG",
  "PA","PB","PR","PE","PI","RJ","RN","RS","RO","RR","SC","SP","SE","TO",
];

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function isValidPhone(phone: string) {
  const digits = phone.replace(/\D/g, "");
  return digits.length >= 10 && digits.length <= 11;
}

export async function POST(req: NextRequest) {
  const webhookUrl = process.env.LEAD_WEBHOOK_URL;
  if (!webhookUrl) {
    return NextResponse.json(
      { error: "Serviço temporariamente indisponível." },
      { status: 503 }
    );
  }

  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Requisição inválida." }, { status: 400 });
  }

  const { nome, email, celular, estado, cidade, _hp } = body as Record<string, string>;

  // Honeypot anti-spam: se o campo oculto vier preenchido, ignorar silenciosamente
  if (_hp) {
    return NextResponse.json({ ok: true });
  }

  // Validações
  const errors: Record<string, string> = {};
  if (!nome || String(nome).trim().length < 2) errors.nome = "Nome obrigatório.";
  if (!email || !isValidEmail(String(email))) errors.email = "E-mail inválido.";
  if (!celular || !isValidPhone(String(celular))) errors.celular = "Celular inválido.";
  if (!estado || !UF_LIST.includes(String(estado))) errors.estado = "Estado obrigatório.";
  if (!cidade || String(cidade).trim().length < 2) errors.cidade = "Cidade obrigatória.";

  if (Object.keys(errors).length > 0) {
    return NextResponse.json({ errors }, { status: 422 });
  }

  const payload = {
    nome: String(nome).trim(),
    email: String(email).trim().toLowerCase(),
    celular: String(celular).replace(/\D/g, ""),
    estado: String(estado),
    cidade: String(cidade).trim(),
    origem: "site-green-station",
    timestamp: new Date().toISOString(),
  };

  try {
    const res = await fetch(webhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    if (!res.ok) {
      throw new Error(`Webhook responded with ${res.status}`);
    }

    return NextResponse.json({ ok: true }, { status: 200 });
  } catch (err) {
    console.error("[lead/route] webhook error:", err);
    return NextResponse.json(
      { error: "Erro ao enviar. Tente novamente em instantes." },
      { status: 502 }
    );
  }
}
