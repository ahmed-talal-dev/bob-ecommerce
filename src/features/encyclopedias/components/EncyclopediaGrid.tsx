"use client";

import { AlertCircle } from "lucide-react";
import EncyclopediaCard from "./EncyclopediaCard";
import { useEncyclopedias } from "../hooks/use-encyclopedias";

const SKELETON_COUNT = 6;

function CardSkeleton() {
  return (
    <div className="flex flex-col overflow-hidden rounded-xl ring-1 ring-foreground/10 animate-pulse">
      <div className="aspect-[3/4] w-full bg-muted" />
      <div className="flex flex-col gap-2 p-3">
        <div className="h-4 w-3/4 rounded bg-muted" />
        <div className="h-3 w-1/2 rounded bg-muted" />
        <div className="mt-2 flex items-center justify-between">
          <div className="h-5 w-16 rounded bg-muted" />
          <div className="size-9 rounded-lg bg-muted" />
        </div>
      </div>
    </div>
  );
}

export default function EncyclopediaGrid() {
  const { encyclopedias, isLoading, errorMessage } = useEncyclopedias();

  if (isLoading) {
    return (
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
        {Array.from({ length: SKELETON_COUNT }).map((_, index) => (
          <CardSkeleton key={`skeleton-${index}`} />
        ))}
      </div>
    );
  }

  if (errorMessage) {
    return (
      <div className="flex flex-col items-center gap-3 rounded-xl border border-destructive/20 bg-destructive/5 px-6 py-12 text-center">
        <AlertCircle className="size-8 text-destructive" aria-hidden />
        <p className="text-sm font-medium text-destructive">{errorMessage}</p>
        <p className="text-xs text-muted-foreground">
          عذراً، حدث خطأ أثناء تحميل الموسوعات. يرجى المحاولة لاحقاً.
        </p>
      </div>
    );
  }

  if (encyclopedias.length === 0) {
    return (
      <div className="flex flex-col items-center gap-2 py-16 text-center">
        <p className="text-base font-medium text-foreground">لا توجد موسوعات متاحة حالياً</p>
        <p className="text-sm text-muted-foreground">تفقّد هذه الصفحة لاحقاً للاطّلاع على أحدث الإصدارات.</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
      {encyclopedias.map((book) => (
        <EncyclopediaCard key={book.id} book={book} />
      ))}
    </div>
  );
}
