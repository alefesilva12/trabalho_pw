// lib/products.ts
export type Product = {
  id: number;
  name: string;
  price: number;
  category: string;
  image: string;
  description: string;
  tags?: string[];
};

export const PRODUCTS: Product[] = [
  {
    id: 1,
    name: "Fone de Ouvido Bluetooth",
    price: 199.9,
    category: "eletronicos",
    image: "/images/produto1.jpg",
    description: "Fone sem fio com cancelamento de ruído e bateria de longa duração.",
    tags: ["novo", "frete grátis", "destaque"],
  },
  {
    id: 2,
    name: "Jaqueta Feminina",
    price: 129.9,
    category: "moda",
    image: "/images/produto2.jpg",
    description: "Jaqueta confortável, estilosa e ideal para o dia a dia.",
    tags: ["moda", "lançamento"],
  },
  {
    id: 3,
    name: "Jogo de Panelas Antiaderente",
    price: 249.9,
    category: "casa",
    image: "/images/produto3.jpg",
    description: "Conjunto com revestimento antiaderente e cabos resistentes ao calor.",
    tags: ["cozinha", "promoção"],
  },
];

export function getProductById(id: number): Product | null {
  return PRODUCTS.find((p) => p.id === id) ?? null;
}
