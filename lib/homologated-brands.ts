export type HomologatedBrand = {
  name: string;
  logo: string;
  url?: string;
  width?: number;
  height?: number;
};

/** Logos em `/public/brands/homologadas/`. */
export const homologatedBrands: HomologatedBrand[] = [
  {
    name: "Bold",
    logo: "/brands/homologadas/bold.png",
    url: "https://www.soubold.com.br/",
    width: 180,
    height: 72,
  },
  {
    name: "SuperCoffee",
    logo: "/brands/homologadas/supercoffee.png",
    url: "https://www.supercoffee.com.br/",
    width: 220,
    height: 72,
  },
];
