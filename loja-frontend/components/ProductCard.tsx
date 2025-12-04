"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useCart } from "./CartContext";
import { useToast } from "./ToastContext";
import type { Product } from "../lib/products";

type Props = Product;

export default function ProductCard({ id, name, price, image }: Props) {
  const { addToCart } = useCart();
  const { showToast } = useToast();

  const handleAdd = () => {
    addToCart({ id, name, price, image, qty: 1 });
    showToast("Produto adicionado ao carrinho 🛒");
  };

  return (
    <motion.div
      whileHover={{ y: -4, scale: 1.01 }}
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white dark:bg-slate-800 rounded-2xl shadow-md hover:shadow-xl border border-slate-200 dark:border-slate-700 p-4 flex flex-col justify-between"
    >
      <Link href={`/produtos/${id}`}>
        <img
          src={image}
          alt={name}
          className="w-full h-48 object-cover rounded-xl mb-4"
        />
        <h3 className="font-semibold text-lg mb-1 text-slate-900 dark:text-slate-100">
          {name}
        </h3>
        <p className="text-blue-600 dark:text-blue-400 font-bold">
          R$ {price.toFixed(2)}
        </p>
      </Link>

      <button
        onClick={handleAdd}
        className="mt-4 w-full bg-blue-600 hover:bg-blue-700 text-white py-2.5 rounded-lg text-sm font-medium transition"
      >
        Adicionar ao carrinho 🛒
      </button>
    </motion.div>
  );
}