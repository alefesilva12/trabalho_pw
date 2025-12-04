"use client";

import { createContext, useContext, useState, ReactNode } from "react";

export type CartItem = {
  id: number;
  name: string;
  price: number;
  image: string;
  qty: number;
};

type CartContextType = {
  cart: CartItem[];
  count: number;
  addToCart: (item: CartItem) => void;
  removeFromCart: (id: number) => void;
  increase: (id: number) => void;
  decrease: (id: number) => void;
  total: number;
};

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: ReactNode }) {
  const [cart, setCart] = useState<CartItem[]>([]);

  function addToCart(item: CartItem) {
    setCart((prev) => {
      const exists = prev.find((p) => p.id === item.id);
      if (exists) {
        return prev.map((p) =>
          p.id === item.id ? { ...p, qty: p.qty + 1 } : p
        );
      }
      return [...prev, { ...item, qty: 1 }];
    });
  }

  function removeFromCart(id: number) {
    setCart((prev) => prev.filter((p) => p.id !== id));
  }

  function increase(id: number) {
    setCart((prev) =>
      prev.map((p) => (p.id === id ? { ...p, qty: p.qty + 1 } : p))
    );
  }

  function decrease(id: number) {
    setCart((prev) =>
      prev
        .map((p) =>
          p.id === id ? { ...p, qty: Math.max(1, p.qty - 1) } : p
        )
        .filter((p) => p.qty > 0)
    );
  }

  const count = cart.reduce((acc, p) => acc + p.qty, 0);
  const total = cart.reduce((acc, p) => acc + p.price * p.qty, 0);

  return (
    <CartContext.Provider
      value={{ cart, count, addToCart, removeFromCart, increase, decrease, total }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be usado dentro de CartProvider");
  }
  return context;
}