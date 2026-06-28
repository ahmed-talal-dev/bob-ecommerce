import EncyclopediaCard from "@/features/encyclopedias/components/EncyclopediaCard";
import type { EncyclopediaBook } from "@/features/encyclopedias/types";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ShowMoreButton } from "@/components/ui/ShowMoreButton";

interface BookSectionProps {
  title: string;
  books: readonly EncyclopediaBook[];
  /** المسار الذي يفتح عند الضغط على "عرض المزيد" */
  href: string;
}

/**
 * Reusable catalog section composing:
 *   - ScrollReveal entrance animation wrapper
 *   - SectionHeading with Figma typography
 *   - Responsive 4-column book grid
 *   - ShowMoreButton CTA
 *
 * Extracted from page.tsx to eliminate 6× duplicated JSX blocks.
 */
export function BookSection({ title, books, href }: BookSectionProps) {
  return (
    <ScrollReveal>
      <section className="mt-20">
        <SectionHeading>{title}</SectionHeading>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {books.map((book) => (
            <EncyclopediaCard key={book.id} book={book} />
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <ShowMoreButton href={href} />
        </div>
      </section>
    </ScrollReveal>
  );
}
