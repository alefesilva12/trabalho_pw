"use client";

import { useEffect, useState } from "react";

export default function ProdutosPage() {
  const [produtos, setProdutos] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/product")
      .then((res) => res.json())
      .then((data) => setProdutos(data));
  }, []);

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6 text-gray-800">Produtos</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {produtos.map((p: any) => (
          <div
            key={p.id}
            className="border rounded-lg bg-white shadow-sm p-5 hover:shadow-md transition"
          >
            <h2 className="text-xl font-semibold">{p.name}</h2>
            <p className="text-gray-600 mt-2">{p.description}</p>

            <p className="mt-4 text-lg font-bold text-blue-600">
              R$ {p.price.toFixed(2)}
            </p>

            <button className="mt-4 w-full px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition">
              Comprar
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}