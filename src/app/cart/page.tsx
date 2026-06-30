"use client";

import { useCart } from "@/features/cart/context/CartContext";
import CartItem from "@/features/cart/components/CartItem";
import CartSummary from "@/features/cart/components/CartSummary";
import Link from "next/link";
import { ShoppingBag } from "lucide-react";

function CartPageContent() {
  const { items } = useCart();

  if (items.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-20 text-center font-sans">
        <ShoppingBag className="h-16 w-16 text-neutral-300 mb-4" />
        <h2 className="text-xl font-bold text-neutral-800 mb-2">سلتك فارغة حالياً</h2>
        <p className="text-neutral-500 mb-8">أضف بعض الكتب والمراجع القانونية لبدء القراءة.</p>
        <Link
          href="/"
          className="rounded-xl bg-brand-secondary px-6 py-3 text-sm font-bold text-white shadow hover:bg-brand-secondary-dark transition-all"
        >
          تصفح الكتب والموسوعات
        </Link>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 gap-10 lg:grid-cols-3">
      {/* Right side: Items list (takes 2 cols in RTL) */}
      <div className="lg:col-span-2 space-y-6">
        <div className="flex flex-col">
          {items.map((item) => (
            <CartItem key={item.encyclopediaId} item={item} />
          ))}
        </div>
      </div>

      {/* Left side: Summary sidebar (takes 1 col in RTL) */}
      <div className="lg:col-span-1">
        <CartSummary />
      </div>
    </div>
  );
}

export default function CartPage() {
  return (
    <main className="mx-auto w-full max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      <h1 className="mb-10 font-sans text-3xl font-semibold leading-tight text-brand-heading sm:text-4xl lg:text-5xl">
        سلة المشتريات
      </h1>
      <CartPageContent />
    </main>
  );
}
