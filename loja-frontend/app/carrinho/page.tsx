"use client";

import { motion } from "framer-motion";
import { useCart } from "../../components/CartContext";
import Link from "next/link";

export default function CarrinhoPage() {
  const { cart, total, removeFromCart, increase, decrease } = useCart();

  if (cart.length === 0) {
    return (
      <div className="space-y-6 text-center">
        <h1 className="text-3xl font-bold">Carrinho</h1>
        <p>Seu carrinho está vazio.</p>
        <Link
          href="/produtos"
          className="inline-block mt-4 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg"
        >
          Ver produtos
        </Link>
      </div>
    );
  }

  return (
    <div className="space-y-10">
      <h1 className="text-3xl font-bold">Carrinho 🛒</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
        {/* Lista de itens */}
        <div className="lg:col-span-2 space-y-4">
          {cart.map((item) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex items-center gap-4 bg-slate-800 p-4 rounded-xl border border-slate-700"
            >
              <img
                src={item.image}
                className="w-24 h-24 rounded-lg object-cover"
                alt={item.name}
              />

              <div className="flex-1 space-y-1">
                <h3 className="font-semibold text-slate-100">{item.name}</h3>
                <p className="text-slate-300 text-sm">
                  Preço unitário: R$ {item.price.toFixed(2)}
                </p>
                <p className="text-blue-300 font-semibold">
                  Subtotal: R$ {(item.price * item.qty).toFixed(2)}
                </p>

                <div className="flex items-center gap-3 mt-2">
                  <button
                    onClick={() => decrease(item.id)}
                    className="px-3 py-1 bg-slate-700 rounded text-sm"
                  >
                    -
                  </button>
                  <span>{item.qty}</span>
                  <button
                    onClick={() => increase(item.id)}
                    className="px-3 py-1 bg-slate-700 rounded text-sm"
                  >
                    +
                  </button>
                </div>
              </div>

              <button
                onClick={() => removeFromCart(item.id)}
                className="text-red-400 hover:text-red-300 text-sm"
              >
                Remover
              </button>
            </motion.div>
          ))}
        </div>

        {/* Resumo */}
        <motion.div
          initial={{ opacity: 0, x: 10 }}
          animate={{ opacity: 1, x: 0 }}
          className="bg-slate-800 rounded-2xl p-6 border border-slate-700 space-y-4"
        >
          <h2 className="text-xl font-semibold mb-2">Resumo da compra</h2>

          <div className="flex justify-between text-sm text-slate-300">
            <span>Itens</span>
            <span>{cart.length}</span>
          </div>

          <div className="flex justify-between text-base font-semibold text-slate-100">
            <span>Total</span>
            <span>R$ {total.toFixed(2)}</span>
          </div>

          <button className="w-full mt-4 bg-green-600 hover:bg-green-700 text-white py-2.5 rounded-lg font-semibold">
            Finalizar compra
          </button>

          <Link
            href="/produtos"
            className="block text-center text-sm text-blue-300 hover:text-blue-200 mt-2"
          >
            Continuar comprando
          </Link>
        </motion.div>
      </div>
    </div>
  );
}