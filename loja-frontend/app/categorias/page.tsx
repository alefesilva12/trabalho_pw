"use client";

import { useState } from "react";
import SectionTitle from "../../components/SectionTitle";
import ProductGrid from "../../components/ProductGrid";
import { PRODUCTS } from "../../lib/products";

const CATEGORIES = [
  { id: "eletronicos", label: "Eletrônicos" },
  { id: "moda", label: "Moda" },
  { id: "casa", label: "Casa" },
];

export default function CategoriasPage() {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const filteredProducts =
    activeCategory === null
      ? PRODUCTS
      : PRODUCTS.filter((p) => p.category === activeCategory);

  return (
    <div className="space-y-12">
      <SectionTitle>Categorias</SectionTitle>

      {/* Botões de categorias */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 fade-in">
        {CATEGORIES.map((c) => {
          const isActive = activeCategory === c.id;
          return (
            <button
              key={c.id}
              onClick={() =>
                setActiveCategory((prev) => (prev === c.id ? null : c.id))
              }
              className={`text-left bg-slate-800 p-6 rounded-2xl border shadow transition
              ${
                isActive
                  ? "border-blue-500 shadow-blue-500/30"
                  : "border-slate-700 hover:border-blue-500 hover:shadow-blue-500/20"
              }`}
            >
              <h3 className="text-xl font-semibold text-slate-100 mb-2">
                {c.label}
              </h3>
              <p className="text-slate-400 text-sm">
                Clique para ver produtos de {c.label}.
              </p>
            </button>
          );
        })}
      </div>

      {/* Lista de produtos filtrada */}
      <div className="space-y-4 fade-in">
        <h3 className="text-lg text-slate-200">
          {activeCategory
            ? `Mostrando produtos da categoria ${
                CATEGORIES.find((c) => c.id === activeCategory)?.label
              }`
            : "Mostrando todas as categorias"}
        </h3>

        <ProductGrid products={filteredProducts} />
      </div>
    </div>
  );
}