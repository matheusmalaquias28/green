// ─── Tipos do Cardápio ────────────────────────────────────────────────────────

export type DietaryTag =
  | "vegano"
  | "vegetariano"
  | "sem-gluten"
  | "sem-lactose"
  | "low-carb";

export type Allergen =
  | "gluten"
  | "lactose"
  | "amendoim"
  | "nozes"
  | "soja"
  | "ovos"
  | "frutos-do-mar";

export type MenuCategory =
  | "saladas"
  | "wraps"
  | "bowls-quentes"
  | "greentinhas"
  | "greentinhas-executivo"
  | "caldos"
  | "sucos"
  | "shakes"
  | "molhos"
  | "cafe-da-manha"
  | "sanduba-green"
  | "sanduiche-natural"
  | "sobremesas-geladas";

export type MenuItem = {
  id: string;
  nome: string;
  descricao?: string;
  categoria: MenuCategory;
  porcao?: string;       // ex: "350g"
  kcal?: number;
  proteinas?: number;    // g
  carboidratos?: number; // g
  gorduras?: number;     // g
  dietaryTags: DietaryTag[];
  alergenos: Allergen[];
  imagem?: string;       // caminho relativo a /public
  preco?: number;        // aguardando fornecimento
};

export const categoryLabels: Record<MenuCategory, string> = {
  "saladas":               "Saladas",
  "wraps":                 "Wraps",
  "bowls-quentes":         "Bowls Quentes",
  "greentinhas":           "Greentinhas",
  "greentinhas-executivo": "Greentinhas Executivo",
  "caldos":                "Caldos",
  "sucos":                 "Sucos",
  "shakes":                "Shakes",
  "molhos":                "Molhos",
  "cafe-da-manha":         "Café da Manhã",
  "sanduba-green":         "Sanduba Green",
  "sanduiche-natural":     "Sanduíche Natural",
  "sobremesas-geladas":    "Sobremesas Geladas",
};

// Dados nutricionais completos (~110 itens) serão fornecidos pelo cliente em JSON.
// Populá-los aqui ou importar de um arquivo externo: import rawMenu from "@/data/menu.json"
// e mapear para o tipo MenuItem.
export const menuItems: MenuItem[] = [
  {
    id: "salada-green-classica",
    nome: "Green Clássica",
    descricao: "Mix de folhas, tomate cereja, pepino, cenoura ralada e croutons integrais.",
    categoria: "saladas",
    porcao: "350g",
    kcal: 280,
    proteinas: 8,
    carboidratos: 32,
    gorduras: 12,
    dietaryTags: ["vegano", "vegetariano"],
    alergenos: ["gluten"],
    imagem: "/menu/salada-green-classica.png",
  },
  {
    id: "wrap-frango-grelhado",
    nome: "Wrap Frango Grelhado",
    descricao: "Frango grelhado, alface americana, tomate, milho e molho especial da casa.",
    categoria: "wraps",
    porcao: "300g",
    kcal: 420,
    proteinas: 35,
    carboidratos: 38,
    gorduras: 10,
    dietaryTags: ["sem-lactose"],
    alergenos: ["gluten"],
    imagem: "/menu/wrap-frango-grelhado.png",
  },
  {
    id: "bowl-frango-quinoa",
    nome: "Bowl Frango & Quinoa",
    descricao: "Frango grelhado, quinoa, brócolis, cenoura e molho tahine.",
    categoria: "bowls-quentes",
    porcao: "400g",
    kcal: 510,
    proteinas: 42,
    carboidratos: 44,
    gorduras: 14,
    dietaryTags: ["sem-lactose", "sem-gluten"],
    alergenos: [],
    imagem: "/menu/bowl-frango-quinoa.png",
  },
  {
    id: "greentinha-executivo",
    nome: "Greentinha Executivo",
    descricao: "Salada completa com proteína, carboidrato, frutas e molho à escolha.",
    categoria: "greentinhas-executivo",
    porcao: "500g",
    kcal: 460,
    proteinas: 38,
    carboidratos: 42,
    gorduras: 12,
    dietaryTags: ["sem-lactose"],
    alergenos: [],
    imagem: "/menu/greentinha-executivo.png",
  },
  {
    id: "acai-green",
    nome: "Açaí Green",
    descricao: "Açaí orgânico com granola, banana, mel e frutas vermelhas.",
    categoria: "sobremesas-geladas",
    porcao: "300ml",
    kcal: 380,
    proteinas: 6,
    carboidratos: 65,
    gorduras: 11,
    dietaryTags: ["vegano", "vegetariano", "sem-gluten"],
    alergenos: [],
    imagem: "/menu/acai-green.png",
  },
  {
    id: "shake-tropical",
    nome: "Shake Tropical",
    descricao: "Shake de manga, maracujá e gengibre com leite vegetal.",
    categoria: "shakes",
    porcao: "400ml",
    kcal: 260,
    proteinas: 9,
    carboidratos: 48,
    gorduras: 4,
    dietaryTags: ["vegano", "vegetariano", "sem-lactose", "sem-gluten"],
    alergenos: [],
    imagem: "/menu/shake-tropical.png",
  },
  {
    id: "salada-berlim",
    nome: "Salada Berlim",
    descricao: "Rúcula, salmão defumado, creme de ricota, alcaparras e azeite de ervas.",
    categoria: "saladas",
    porcao: "380g",
    kcal: 340,
    proteinas: 26,
    carboidratos: 18,
    gorduras: 20,
    dietaryTags: ["sem-gluten", "sem-lactose"],
    alergenos: ["frutos-do-mar"],
    imagem: "/menu/salada-berlim.png",
  },
  {
    id: "sanduba-green",
    nome: "Sanduba Green",
    descricao: "Pão australiano, frango desfiado, cream cheese verde e alface crocante.",
    categoria: "sanduba-green",
    porcao: "280g",
    kcal: 440,
    proteinas: 30,
    carboidratos: 50,
    gorduras: 13,
    dietaryTags: [],
    alergenos: ["gluten", "lactose", "ovos"],
    imagem: "/menu/sanduba-green.png",
  },
];

/** Subset curado para o MenuShowcase na home */
export const menuShowcaseItems: MenuItem[] = menuItems;

// Helpers de filtro
export function filterByCategory(category: MenuCategory): MenuItem[] {
  return menuItems.filter((item) => item.categoria === category);
}

export function filterByDietaryTag(tag: DietaryTag): MenuItem[] {
  return menuItems.filter((item) => item.dietaryTags.includes(tag));
}

export function filterByRestriction(alergenos: Allergen[]): MenuItem[] {
  return menuItems.filter(
    (item) => !item.alergenos.some((a) => alergenos.includes(a))
  );
}
