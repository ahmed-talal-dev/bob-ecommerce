"use client";

import React, { createContext, useContext, useState } from "react";
import type { CartItem } from "../types";

interface CartContextType {
  items: CartItem[];
  addItem: (item: Omit<CartItem, "quantity">) => void;
  updateQuantity: (id: string, quantity: number) => void;
  removeItem: (id: string) => void;
  clearCart: () => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

// Preloaded mock items priced in Egyptian Pounds (EGP)
const INITIAL_CART_ITEMS: CartItem[] = [
  {
    encyclopediaId: "cart-mock-001",
    title: "كتاب بين السطور",
    coverUrl: "/assets/book-1.svg",
    unitPriceEgp: 200,
    quantity: 1,
  },
  {
    encyclopediaId: "cart-mock-002",
    title: "موسوعة الفقه الإسلامي",
    coverUrl: "/assets/book-1.svg",
    unitPriceEgp: 60,
    quantity: 1,
  },
];

export function CartProvider({ children }: { readonly children: React.ReactNode }) {
  // Initialise directly to avoid a server→client hydration flash on first render.
  const [items, setItems] = useState<CartItem[]>(INITIAL_CART_ITEMS);

  const addItem = (newItem: Omit<CartItem, "quantity">) => {
    setItems((prevItems) => {
      const existing = prevItems.find((i) => i.encyclopediaId === newItem.encyclopediaId);
      if (existing) {
        return prevItems.map((i) =>
          i.encyclopediaId === newItem.encyclopediaId
            ? { ...i, quantity: i.quantity + 1 }
            : i
        );
      }
      return [...prevItems, { ...newItem, quantity: 1 }];
    });
  };

  const updateQuantity = (id: string, quantity: number) => {
    if (quantity <= 0) {
      removeItem(id);
      return;
    }
    setItems((prevItems) =>
      prevItems.map((cartItem) =>
        cartItem.encyclopediaId === id ? { ...cartItem, quantity } : cartItem
      )
    );
  };

  const removeItem = (id: string) => {
    setItems((prevItems) =>
      prevItems.filter((cartItem) => cartItem.encyclopediaId !== id)
    );
  };

  const clearCart = () => {
    setItems([]);
  };

  return (
    <CartContext.Provider value={{ items, addItem, updateQuantity, removeItem, clearCart }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
}
