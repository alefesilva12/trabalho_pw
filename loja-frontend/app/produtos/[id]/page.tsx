"use client";

import { use } from "react";
import { motion } from "framer-motion";
import { getProductById } from "../../../lib/products";
import { useCart } from "../../../components/CartContext";
import { useToast } from "../../../components/ToastContext";

export default function ProductDetails({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = use(params);
  const idNumber = Number(id);

  const { addToCart } = useCart();
  const { showToast } = useToast();

  if (isNaN(idNumber)) {
    return <p className="text-red-500">ID inválido.</p>;
  }

  const product = getProductById(idNumber);

  if (!product) {
    return <p className="text-red-500">Produto não encontrado.</p>;
  }

  const handleAdd = () => {
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      qty: 1,
    });
    showToast("Produto adicionado ao carrinho 🛒");
  };

  return (
    <div className="space-y-10 fade-in">
      <motion.h1
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-4xl font-bold text-center"
      >
        {product.name}
      </motion.h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
        <motion.img
          src={product.image}
          alt={product.name}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="w-full max-w-lg rounded-2xl shadow-2xl border border-slate-700 mx-auto"
        />

        <motion.div
          initial={{ opacity: 0, x: 10 }}
          animate={{ opacity: 1, x: 0 }}
          className="space-y-6"
        >
          <p className="text-3xl font-bold text-blue-400">
            R$ {product.price.toFixed(2)}
          </p>

          <p className="text-slate-200">{product.description}</p>

          {product.tags && (
            <div className="flex flex-wrap gap-2">
              {product.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 text-xs rounded-full bg-blue-600/20 border border-blue-500/40 text-blue-300"
                >
                  #{tag}
                </span>
              ))}
            </div>
          )}

          <button
            onClick={handleAdd}
            className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg text-white text-lg shadow-md transition"
          >
            Adicionar ao carrinho 🛒
          </button>
        </motion.div>
      </div>
    </div>
  );
}