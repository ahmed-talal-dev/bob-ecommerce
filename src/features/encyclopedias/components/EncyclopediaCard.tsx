import Image from "next/image";
import { ShoppingCart } from "lucide-react";
import { formatCurrency } from "@/utils/format-currency";
import type { EncyclopediaBook } from "../types";

interface EncyclopediaCardProps {
  book: EncyclopediaBook;
}

export default function EncyclopediaCard({ book }: EncyclopediaCardProps) {
  return (
    <div
      className="group/card relative flex flex-col justify-between mx-auto w-full bg-white border border-brand-muted/50 rounded-xl overflow-hidden"
      style={{
        height: "var(--height-encyclopedia-card)",
        maxWidth: "var(--width-encyclopedia-card)",
        boxShadow: "var(--shadow-encyclopedia-card)",
      }}
    >
      {/* ── Rectangle 72: Cover Image Container (height 270.39px) ────────── */}
      <div
        className="relative flex w-full items-center justify-center p-4 bg-white"
        style={{
          height: "var(--height-encyclopedia-card-cover)",
        }}
      >
        <div className="relative h-full w-full">
          <Image
            src={book.coverUrl}
            alt={`غلاف ${book.title}`}
            fill
            sizes="(max-width: 640px) 100vw, 278px"
            className="object-contain transition-transform duration-300 group-hover/card:scale-105"
            priority={false}
          />
        </div>

        {/* ── Rectangle 73: جديد Badge ─────────────────────────────────── */}
        {book.isNewRelease && (
          <div className="absolute left-3 top-4 z-10 flex h-7 w-[69px] items-center justify-center rounded-lg bg-brand-primary/30">
            <span className="font-sans text-sm font-bold leading-none text-brand-accent-gold">
              جديد
            </span>
          </div>
        )}
      </div>

      {/* ── Text body & actions container (remaining ~100px) ───────────── */}
      <div className="flex flex-col justify-between px-3.5 pb-3.5 pt-1 h-24 w-full">
        {/* Title (Group 42) */}
        <h3 className="line-clamp-1 font-sans text-base font-bold leading-tight text-brand-neutral-dark">
          {book.title}
        </h3>

        {/* Bottom row: Price + Cart Button */}
        <div className="flex w-full items-center justify-between">
          {/* Price stack */}
          <div className="flex flex-col text-right">
            <span className="font-sans text-xs font-normal leading-none text-black/50">
              السعر
            </span>
            <span className="font-sans text-lg font-bold leading-snug text-black">
              {formatCurrency(book.priceEgp)}
            </span>
          </div>

          {/* Rectangle 49: Cart button */}
          <button
            type="button"
            aria-label={`إضافة ${book.title} إلى السلة`}
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded bg-brand-secondary transition-colors hover:bg-brand-secondary-dark"
          >
            <ShoppingCart className="h-6 w-6 text-white" />
          </button>
        </div>
      </div>
    </div>
  );
}
