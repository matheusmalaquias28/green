export type Store = {
  slug: string;
  nome: string;
  cidade: string;
  estado: string; // UF
  endereco: string;
  lat?: number;
  lng?: number;
};

export const stores: Store[] = [
  // ─── Espírito Santo ──────────────────────────────────────────────────────
  {
    slug: "bento-ferreira-vitoria-es",
    nome: "Bento Ferreira",
    cidade: "Vitória",
    estado: "ES",
    endereco: "Jardim Food Park, Rua Amélia da Cunha Ornelas, Bento Ferreira, Vitória/ES",
  },
  {
    slug: "centro-vitoria-es",
    nome: "Centro de Vitória",
    cidade: "Vitória",
    estado: "ES",
    endereco: "Rua Professor Baltazar, 171, loja 01, Centro, Vitória/ES",
  },
  {
    slug: "drive-thru-vitoria-es",
    nome: "Drive Thru Vitória",
    cidade: "Vitória",
    estado: "ES",
    endereco: "Av. Dante Michelini, 689, Jardim da Penha, Vitória/ES",
  },
  {
    slug: "jardim-camburi-vitoria-es",
    nome: "Jardim Camburi",
    cidade: "Vitória",
    estado: "ES",
    endereco: "Rua Belmiro Teixeira Pimenta, 495, loja 01, Jardim Camburi, Vitória/ES",
  },
  {
    slug: "praia-do-canto-vitoria-es",
    nome: "Praia do Canto",
    cidade: "Vitória",
    estado: "ES",
    endereco: "Av. Rio Branco, 1540, loja 01, Praia do Canto, Vitória/ES",
  },
  {
    slug: "reta-da-penha-vitoria-es",
    nome: "Reta da Penha",
    cidade: "Vitória",
    estado: "ES",
    endereco: "Rua Doutor Eurico de Aguiar, 290, loja 07, Praia do Canto, Vitória/ES",
  },
  {
    slug: "shopping-vitoria-es",
    nome: "Shopping Vitória",
    cidade: "Vitória",
    estado: "ES",
    endereco: "Av. Américo Buaiz, 200, Enseada do Suá, Vitória/ES",
  },
  {
    slug: "shopping-boulevard-vila-velha-es",
    nome: "Shopping Boulevard Vila Velha",
    cidade: "Vila Velha",
    estado: "ES",
    endereco: "027 Motors, Rodovia do Sol, Itaparica, Vila Velha/ES",
  },
  {
    slug: "shopping-vila-velha-es",
    nome: "Shopping Vila Velha",
    cidade: "Vila Velha",
    estado: "ES",
    endereco: "Av. Luciano das Neves, 2418, Centro, Vila Velha/ES",
  },
  {
    slug: "shopping-mestre-alvaro-serra-es",
    nome: "Shopping Mestre Álvaro",
    cidade: "Serra",
    estado: "ES",
    endereco: "Av. João Palácio, 300, Conjunto Carapina I, Serra/ES",
  },

  // ─── Rio Grande do Sul ────────────────────────────────────────────────────
  {
    slug: "caxias-do-sul-rs",
    nome: "Caxias do Sul",
    cidade: "Caxias do Sul",
    estado: "RS",
    endereco: "R. Alfredo Chaves, 1234, loja 01, Centro, Caxias do Sul/RS",
  },
  {
    slug: "farroupilha-rs",
    nome: "Farroupilha",
    cidade: "Farroupilha",
    estado: "RS",
    endereco: "Av. Armando Antonelo, 185, São Luiz, Farroupilha/RS",
  },
  {
    slug: "porto-alegre-sarandi-rs",
    nome: "Porto Alegre Sarandi",
    cidade: "Porto Alegre",
    estado: "RS",
    endereco: "Av. Assis Brasil, 4320, Sarandi, Porto Alegre/RS",
  },
  {
    slug: "porto-alegre-moinhos-rs",
    nome: "Porto Alegre Moinhos de Vento",
    cidade: "Porto Alegre",
    estado: "RS",
    endereco: "Rua Comendador Caminha, 358, Moinhos de Vento, Porto Alegre/RS",
  },

  // ─── São Paulo ────────────────────────────────────────────────────────────
  {
    slug: "piracicaba-sp",
    nome: "Piracicaba",
    cidade: "Piracicaba",
    estado: "SP",
    endereco: "Rua Dona Eugênia, 1321, Jardim Europa, Piracicaba/SP",
  },
  {
    slug: "praia-grande-sp",
    nome: "Praia Grande",
    cidade: "Praia Grande",
    estado: "SP",
    endereco: "Rua Pernambuco, 119, Boqueirão, Praia Grande/SP",
  },
  {
    slug: "sao-jose-dos-campos-sp",
    nome: "São José dos Campos",
    cidade: "São José dos Campos",
    estado: "SP",
    endereco: "Rua Santa Clara, 441, Vila Adyana, São José dos Campos/SP",
  },
  {
    slug: "taubate-sp",
    nome: "Taubaté",
    cidade: "Taubaté",
    estado: "SP",
    endereco: "Rua Humaitá, 397, loja 09, Centro, Taubaté/SP",
  },

  // ─── Rio de Janeiro ───────────────────────────────────────────────────────
  {
    slug: "jacarepagua-rio-de-janeiro-rj",
    nome: "Jacarepaguá",
    cidade: "Rio de Janeiro",
    estado: "RJ",
    endereco: "Estrada de Jacarepaguá, 6069, Anil, Rio de Janeiro/RJ",
  },
  {
    slug: "resende-rj",
    nome: "Resende",
    cidade: "Resende",
    estado: "RJ",
    endereco: "R. Henrique Sivori, 47, loja 19, Campos Elíseos, Resende/RJ",
  },
  {
    slug: "volta-redonda-rj",
    nome: "Volta Redonda",
    cidade: "Volta Redonda",
    estado: "RJ",
    endereco: "R. 33, 98, Jardim Vila Rica / Tiradentes, Volta Redonda/RJ",
  },

  // ─── Goiás ────────────────────────────────────────────────────────────────
  {
    slug: "jatai-go",
    nome: "Jataí",
    cidade: "Jataí",
    estado: "GO",
    endereco: "R. Minas Gerais, 1286, Samuel Graham, Jataí/GO, 75804-095",
  },
  {
    slug: "rio-verde-go",
    nome: "Rio Verde",
    cidade: "Rio Verde",
    estado: "GO",
    endereco: "Avenida 1, Parque dos Buritis, Rio Verde/GO, 75907-453",
  },

  // ─── Pará ─────────────────────────────────────────────────────────────────
  {
    slug: "parauapebas-pa",
    nome: "Parauapebas",
    cidade: "Parauapebas",
    estado: "PA",
    endereco: "R. 14, 214, União, Parauapebas/PA, 68515-000",
  },

  // ─── Piauí ────────────────────────────────────────────────────────────────
  {
    slug: "teresina-pi",
    nome: "Teresina",
    cidade: "Teresina",
    estado: "PI",
    endereco: "Av. Dom Severino, 1733, loja 21, Fátima, Teresina/PI",
  },
];

export function getStoresByState() {
  const grouped: Record<string, Store[]> = {};
  for (const store of stores) {
    if (!grouped[store.estado]) grouped[store.estado] = [];
    grouped[store.estado].push(store);
  }
  return grouped;
}

export function getStoreBySlug(slug: string): Store | undefined {
  return stores.find((s) => s.slug === slug);
}

export const stateNames: Record<string, string> = {
  ES: "Espírito Santo",
  RS: "Rio Grande do Sul",
  SP: "São Paulo",
  RJ: "Rio de Janeiro",
  GO: "Goiás",
  PA: "Pará",
  PI: "Piauí",
  MA: "Maranhão",
};
