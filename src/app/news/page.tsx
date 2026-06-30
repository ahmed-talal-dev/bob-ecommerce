import NewsGrid from "@/features/news/components/NewsGrid";

export default function NewsPage() {
  return (
    <main className="mx-auto w-full max-w-7xl px-4 py-8">
      <h1 className="mb-8 text-3xl font-semibold leading-tight text-brand-heading sm:text-4xl lg:text-5xl">
        الأخبار
      </h1>
      <NewsGrid />
    </main>
  );
}
