import Image from "next/image";
import { X, Plus, Minus } from "lucide-react";
import type { CartItem as CartItemType } from "../types";
import { useCart } from "../context/CartContext";
import { formatCurrency } from "@/utils/format-currency";
import { getItemTotal } from "../utils/cart-totals";

interface CartItemProps {
  readonly item: CartItemType;
}

export default function CartItem({ item }: CartItemProps) {
  const { updateQuantity, removeItem } = useCart();

  const handleIncrease = () => {
    updateQuantity(item.encyclopediaId, item.quantity + 1);
  };

  const handleDecrease = () => {
    updateQuantity(item.encyclopediaId, item.quantity - 1);
  };

  const handleRemove = () => {
    removeItem(item.encyclopediaId);
  };

  return (
    <div className="flex flex-col gap-4 border-b border-neutral-100 py-6 sm:flex-row sm:items-center sm:justify-between">
      {/* Right Column: Close Button + Book Image + Title */}
      <div className="flex items-center gap-4 flex-1">
        {/* Remove Button (X) */}
        <button
          type="button"
          onClick={handleRemove}
          aria-label={`حذف ${item.title} من السلة`}
          className="text-neutral-400 hover:text-neutral-600 transition-colors"
        >
          <X className="h-5 w-5" />
        </button>

        {/* Book Cover Image */}
        <div className="relative h-20 w-16 bg-neutral-50 border border-neutral-100 rounded overflow-hidden shrink-0">
          <Image
            src={item.coverUrl}
            alt={`غلاف ${item.title}`}
            fill
            sizes="64px"
            className="object-contain p-1"
          />
        </div>

        {/* Title */}
        <h3 className="font-sans text-base font-bold text-neutral-800 line-clamp-2">
          {item.title}
        </h3>
      </div>

      {/* Left Column: Quantity Selector + Price Info */}
      <div className="flex items-center justify-between gap-6 sm:justify-end">
        {/* Quantity Selector: [+] on Left, [-] on Right as per design screenshot */}
        <div className="flex items-center gap-3 bg-neutral-100 px-3 py-1.5 rounded-full select-none">
          <button
            type="button"
            onClick={handleIncrease}
            aria-label="زيادة الكمية"
            className="flex h-6 w-6 items-center justify-center rounded-full bg-neutral-200 text-neutral-600 hover:bg-neutral-300 transition-colors active:scale-[0.98]"
          >
            <Plus className="h-3.5 w-3.5" />
          </button>
          
          <span className="font-sans text-sm font-semibold text-neutral-800 min-w-4 text-center">
            {item.quantity}
          </span>

          <button
            type="button"
            onClick={handleDecrease}
            aria-label="تقليل الكمية"
            className="flex h-6 w-6 items-center justify-center rounded-full bg-neutral-200 text-neutral-600 hover:bg-neutral-300 transition-colors active:scale-[0.98]"
          >
            <Minus className="h-3.5 w-3.5" />
          </button>
        </div>

        {/* Price stack */}
        <div className="flex flex-col text-left font-sans min-w-24">
          <span className="text-base font-bold text-neutral-800">
            {formatCurrency(getItemTotal(item))}
          </span>
          {item.quantity > 1 && (
            <span className="text-xs text-neutral-400">
              {formatCurrency(item.unitPriceEgp)}
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
