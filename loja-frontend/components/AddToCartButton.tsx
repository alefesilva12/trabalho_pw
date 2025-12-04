"use client";

import { useCart } from "./CartContext";
import { getProductById } from "../lib/products";

export default function AddToCartButton({ id }: { id: number }) {
  const { add } = useCart();

  function handleClick() {
    const product = getProductById(id);
    if (!product) return;
    add(product);
  }

  return (
    <button
      onClick={handleClick}
      className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg text-white w-full transition"
    >
      Adicionar ao carrinho
    </button>
  );
}