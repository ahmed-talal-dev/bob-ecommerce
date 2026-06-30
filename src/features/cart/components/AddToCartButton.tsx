"use client";

import type { CartItem } from "../types";
import { useCart } from "../context/CartContext";

interface AddToCartButtonProps {
  readonly item: Omit<CartItem, "quantity">;
}

export default function AddToCartButton({ item }: AddToCartButtonProps) {
  const { addItem } = useCart();

  const handleAddToCart = () => {
    addItem(item);
  };

  return (
    <button
      type="button"
      onClick={handleAddToCart}
      className="flex h-11 w-full items-center justify-center rounded-xl bg-brand-secondary px-6 text-sm font-bold text-white shadow-sm transition-all duration-200 hover:bg-brand-secondary-dark active:scale-[0.98]"
    >
      أضف إلى السلة
    </button>
  );
}
