"use client";

import { AlertCircle } from "lucide-react";
import NewsCard from "./NewsCard";
import { useNews } from "../hooks/useNews";

const SKELETON_COUNT = 4;

function NewsSkeleton() {
  return (
    <div className="flex flex-col overflow-hidden rounded-xl border border-neutral-200/60 bg-white animate-pulse md:flex-row">
      {/* Skeleton block for image */}
      <div className="h-56 w-full bg-neutral-100 md:h-[240px] md:w-80 shrink-0" />
      
      {/* Skeleton block for text info */}
      <div className="flex flex-1 flex-col p-6 md:p-8">
        <div className="mb-3 h-6 w-2/3 rounded bg-neutral-200" />
        <div className="mb-2 h-4 w-full rounded bg-neutral-100" />
        <div className="mb-2 h-4 w-5/6 rounded bg-neutral-100" />
        <div className="mb-6 h-4 w-4/5 rounded bg-neutral-100" />
        
        <div className="mt-auto flex items-center justify-between border-t border-neutral-100 pt-4">
          <div className="h-3 w-20 rounded bg-neutral-100" />
          <div className="h-4 w-24 rounded bg-neutral-200" />
        </div>
      </div>
    </div>
  );
}

export default function NewsGrid() {
  const { news, isLoading, errorMessage } = useNews();

  if (isLoading) {
    return (
      <div className="flex flex-col gap-6">
        {Array.from({ length: SKELETON_COUNT }).map((_, index) => (
          <NewsSkeleton key={`skeleton-${index}`} />
        ))}
      </div>
    );
  }

  if (errorMessage) {
    return (
      <div className="flex flex-col items-center gap-3 rounded-xl border border-destructive/20 bg-destructive/5 px-6 py-12 text-center">
        <AlertCircle className="h-8 w-8 text-destructive" aria-hidden="true" />
        <p className="text-sm font-medium text-destructive">{errorMessage}</p>
        <p className="text-xs text-muted-foreground">
          عذراً، حدث خطأ أثناء تحميل الأخبار. يرجى المحاولة لاحقاً.
        </p>
      </div>
    );
  }

  if (news.length === 0) {
    return (
      <div className="flex flex-col items-center gap-2 py-16 text-center">
        <p className="text-base font-medium text-foreground">لا توجد أخبار متاحة حالياً</p>
        <p className="text-sm text-muted-foreground">تفقّد هذه الصفحة لاحقاً للاطّلاع على أحدث المستجدات.</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-6">
      {news.map((item) => (
        <NewsCard key={item.id} news={item} />
      ))}
    </div>
  );
}
