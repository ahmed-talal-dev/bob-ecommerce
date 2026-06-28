"use client";

import { useState } from "react";
import type { CartItem } from "../types";

interface CartState {
  items: CartItem[];
  totalItems: number;
  totalPriceEgp: number;
}

export function useCart(): CartState {
  const [items] = useState<CartItem[]>([]);

  return {
    items,
    totalItems: items.reduce((sum, item) => sum + item.quantity, 0),
    totalPriceEgp: items.reduce((sum, item) => sum + item.unitPriceEgp * item.quantity, 0),
  };
}
