export type MarqueeItem = {
  text: string;
  image: {
    src: string;
    alt: string;
    width?: number;
    height?: number;
  };
};

const mascotes = {
  milhito: {
    src: "/marquee/milhito.png",
    alt: "Milhito — mascote milho Green Station",
    width: 96,
    height: 96,
  },
  brocolino: {
    src: "/marquee/brocolino.png",
    alt: "Brocolino — mascote brócolis Green Station",
    width: 96,
    height: 96,
  },
  tomatito: {
    src: "/marquee/tomatito.png",
    alt: "Tomatito — mascote tomate Green Station",
    width: 96,
    height: 96,
  },
} as const;

export const homeMarqueeItems: MarqueeItem[] = [
  { text: "Coma saudável", image: mascotes.milhito },
  { text: "Seja Green", image: mascotes.brocolino },
  { text: "Fast Salad", image: mascotes.tomatito },
  { text: "Deu Greeeeen!", image: mascotes.milhito },
  { text: "Alimentação saudável", image: mascotes.brocolino },
  { text: "Invista no futuro", image: mascotes.tomatito },
];
