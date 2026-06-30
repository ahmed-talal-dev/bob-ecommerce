import Link from "next/link";
import { useCart } from "../context/CartContext";
import { formatCurrency } from "@/utils/format-currency";
import { getCartTotal } from "../utils/cart-totals";

export default function CartSummary() {
  const { items } = useCart();

  const subtotal = getCartTotal(items);
  const total = subtotal; // الشحن مجاني

  return (
    <div className="rounded-2xl border border-neutral-100 bg-white p-6 shadow-sm">
      <h2 className="mb-6 font-sans text-xl font-bold text-neutral-800 pb-4 border-b border-neutral-100">
        إجمالي سلة التسوق
      </h2>

      {/* Details list */}
      <div className="space-y-4 font-sans text-sm text-neutral-600">
        {/* Shipping Line */}
        <div className="flex justify-between items-center">
          <span className="font-normal text-neutral-500">الشحن (خلال 48 ساعة)</span>
          <span className="font-semibold text-neutral-800">مجانًا</span>
        </div>

        {/* Subtotal Line */}
        <div className="flex justify-between items-center pb-4 border-b border-neutral-100">
          <span className="font-normal text-neutral-500">المجموع الفرعي</span>
          <span className="font-semibold text-neutral-800">{formatCurrency(subtotal)}</span>
        </div>

        {/* Total Grand Line */}
        <div className="flex justify-between items-baseline pt-2">
          <span className="text-base font-bold text-neutral-800">المجموع</span>
          <span className="text-2xl font-extrabold text-brand-secondary">{formatCurrency(total)}</span>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="mt-8 flex flex-col items-center gap-4">
        {/* Checkout Button */}
        <button
          type="button"
          className="w-full flex h-12 items-center justify-center rounded-xl bg-brand-secondary text-base font-bold text-white shadow-md transition-all duration-300 hover:bg-brand-secondary-dark active:scale-[0.98]"
        >
          الدفـع
        </button>

        {/* Continue shopping link */}
        <Link
          href="/"
          className="font-sans text-sm font-semibold text-neutral-500 hover:text-brand-secondary transition-colors"
        >
          &gt; تابع التسوق
        </Link>
      </div>
    </div>
  );
}
