import type { CartItem } from "../types";

/** Returns the line-item total for a single cart entry (unit price × quantity). */
export function getItemTotal(cartItem: CartItem): number {
  return cartItem.unitPriceEgp * cartItem.quantity;
}

/** Returns the grand total for all items in the cart. */
export function getCartTotal(cartItems: CartItem[]): number {
  return cartItems.reduce((sum, cartItem) => sum + getItemTotal(cartItem), 0);
}
