"use client";

import type { CartItem } from "../types";

interface AddToCartButtonProps {
  item: Omit<CartItem, "quantity">;
}

export default function AddToCartButton({ item }: AddToCartButtonProps) {
  return <button type="button" data-item-id={item.encyclopediaId} />;
}
