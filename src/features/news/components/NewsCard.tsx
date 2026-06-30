import Image from "next/image";
import Link from "next/link";
import { ChevronLeft } from "lucide-react";
import type { NewsItem } from "../types";

interface NewsCardProps {
  readonly news: NewsItem;
}

export default function NewsCard({ news }: NewsCardProps) {
  return (
    <article className="group relative flex flex-col overflow-hidden rounded-xl border border-neutral-200/60 bg-white shadow-sm transition-all duration-300 hover:border-neutral-200 hover:shadow-md md:flex-row">
      {/* ── Desktop Right Column / Mobile Top Block: News Image ── */}
      <div className="relative h-56 w-full shrink-0 bg-neutral-100 md:h-auto md:w-80">
        <Image
          src={news.imageUrl}
          alt={news.title}
          fill
          sizes="(max-width: 768px) 100vw, 320px"
          className="object-cover transition-transform duration-300 group-hover:scale-102"
          priority={false}
        />
      </div>

      {/* ── Desktop Left Column / Mobile Bottom Block: News Text content ── */}
      <div className="flex flex-1 flex-col p-6 md:p-8">
        <h2 className="mb-3 font-sans text-xl font-bold leading-snug text-black transition-colors group-hover:text-brand-secondary">
          {news.title}
        </h2>
        
        <p className="mb-6 line-clamp-3 font-sans text-sm font-normal leading-relaxed text-neutral-500">
          {news.description}
        </p>

        {/* Bottom row: Date and Action */}
        <div className="mt-auto flex items-center justify-between border-t border-neutral-100 pt-4">
          <span className="font-sans text-xs font-normal text-neutral-400">
            {news.date}
          </span>
          
          <Link
            href={`/news/${news.id}`}
            className="flex items-center gap-1 font-sans text-sm font-bold text-brand-heading transition-colors hover:text-brand-secondary"
          >
            <span>اقرأ المزيد</span>
            <ChevronLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </article>
  );
}
