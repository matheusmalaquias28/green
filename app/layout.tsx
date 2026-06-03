import type { Metadata } from "next";
import localFont from "next/font/local";
import { Manrope } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const recoleta = localFont({
  src: [
    {
      path: "../public/fonts/Recoleta-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../public/fonts/Recoleta-Bold.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-recoleta",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Green Station",
  url: "https://greenstation.com.br",
  logo: "https://greenstation.com.br/brand/GREEN-STATION.svg",
  description:
    "A maior Franquia de Fast Salad do Brasil. Primeira saladeria fast food do país, fundada em 2015.",
  foundingDate: "2015",
  sameAs: [
    "https://www.instagram.com/greenstationbr",
    "https://www.facebook.com/greenstationbrasil",
  ],
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "customer service",
    availableLanguage: "Portuguese",
  },
};

export const metadata: Metadata = {
  title: {
    default: "Green Station — A maior Franquia de Fast Salad do Brasil",
    template: "%s | Green Station",
  },
  description:
    "Seja um franqueado Green Station. Invista a partir de R$ 150 mil na maior rede de fast salad do Brasil. 24 unidades, 8 estados, 10+ anos de história.",
  keywords: [
    "franquia de salada",
    "franquia fast food saudável",
    "investir em franquia de alimentação saudável",
    "franquia Green Station",
    "fast salad",
    "saladeria franquia",
  ],
  authors: [{ name: "Green Station" }],
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://greenstation.com.br",
    siteName: "Green Station",
    title: "Green Station — A maior Franquia de Fast Salad do Brasil",
    description:
      "Invista em alimentação saudável. 10+ anos de história, modelo replicável e suporte completo.",
    images: [
      {
        url: "https://greenstation.com.br/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Green Station Fast Salad",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Green Station — Franquia de Fast Salad",
    description: "A maior rede de fast salad do Brasil. Seja franqueado.",
  },
  metadataBase: new URL("https://greenstation.com.br"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${recoleta.variable} ${manrope.variable} h-full`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-brand-bg text-brand-text font-body">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
