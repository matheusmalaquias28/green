export type SuccessCase = {
  id: string;
  location: string;
  caption: string;
  image: string;
  imageAlt: string;
  objectPosition?: string;
  rotation: number;
  circleScale?: number;
  verticalOffset?: number;
};

export const successCases: SuccessCase[] = [
  {
    id: "imperatriz",
    location: "Imperatriz, MA",
    caption: "Faturou + de R$ 100 mil no 1º mês.",
    image: "/images/green-loja.jpg",
    imageAlt: "Unidade Green Station em Imperatriz, Maranhão",
    objectPosition: "center center",
    rotation: -7,
    circleScale: 1,
    verticalOffset: 13,
  },
  {
    id: "shopping-vv",
    location: "Shopping VV, ES",
    caption: "Fatura + de 2 milhões.",
    image: "/images/green-oportunidade.png",
    imageAlt: "Unidade Green Station no Shopping Vila Velha, Espírito Santo",
    objectPosition: "center center",
    rotation: 5,
    circleScale: 1.05,
    verticalOffset: 0,
  },
  {
    id: "porto-alegre",
    location: "Porto Alegre, RS",
    caption: "Fatura + de R$ 170 mil no delivery.",
    image: "/images/green-loja.jpg",
    imageAlt: "Unidade Green Station em Porto Alegre, Rio Grande do Sul",
    objectPosition: "70% center",
    rotation: -4,
    circleScale: 0.95,
    verticalOffset: 21,
  },
];
