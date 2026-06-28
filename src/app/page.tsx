"use client";

import { useState, useEffect } from "react";
import { BookSection } from "@/features/home/components/BookSection";
import TestimonialsSection from "@/features/home/components/TestimonialsSection";
import {
  LATEST_RELEASES,
  AWTAD_BOOKS,
  PUBLIC_LAW_BOOKS,
  PRIVATE_LAW_BOOKS,
  LEGAL_CULTURE_BOOKS,
  ENCYCLOPEDIAS,
} from "@/features/encyclopedias/constants/books";

// ─── Hero slide data ────────────────────────────────────────────────────────
// Declared at module scope so the array reference is stable across renders.
interface Slide {
  id: number;
  title: string;
  subtitle: string;
  backgroundImage: string;
}

const SLIDES: readonly Slide[] = [
  {
    id: 1,
    title: "مـا يـمكننـا فـعـله هـو تشـجيـع\nقـوة الـقـانـون",
    subtitle:
      "مـركـز متخصص في الـتدريب الـقـانوني بكافة العـلوم الـقـانونية معتمد من المؤسسة العامة للتدريب المهني والتقني و المركز الوطني للتعـــليم الـالــكتروني",
    backgroundImage: "/assets/bg-hero.svg",
  },
  {
    id: 2,
    title: "بـرامـج تدريبـية متخـصصـة\nوتطبيـقات عملـية نـوعـية",
    subtitle:
      "نقدم أفضل الدورات القانونية المعتمدة لتأهيل المحامين والمستشارين القانونيين وصقل مهاراتهم المهنية بأحدث المناهج العلمية والعملية.",
    backgroundImage: "/assets/bg-hero.svg",
  },
  {
    id: 3,
    title: "تعلـم مـرن وعـن بـعـد\nبأحـدث التقنـيات الـرقمـية",
    subtitle:
      "نوفر منصة تعليمية متكاملة تتيح لك حضور المحاضرات والتفاعل المباشر والحصول على الشهادات المعتمدة من أي مكان في العالم.",
    backgroundImage: "/assets/bg-hero.svg",
  },
] as const;

// Autoplay delay duration defined once in module scope to prevent interval recreating on every render.
const AUTOPLAY_DELAY_MS = 5_000;

// ─── Book sections configuration ───────────────────────────────────────────
// Data-driven array that drives the 6 catalog sections.
// Adding/removing a section requires only one entry here.
const BOOK_SECTIONS = [
  {
    id: "latest",
    title: "احدث الإصدارات",
    books: LATEST_RELEASES,
    href: "/books/latest",
  },
  {
    id: "awtad",
    title: "كتب أوتاد القانون",
    books: AWTAD_BOOKS,
    href: "/books/awtad",
  },
  {
    id: "public-law",
    title: "القانون العام",
    books: PUBLIC_LAW_BOOKS,
    href: "/books/public-law",
  },
  {
    id: "private-law",
    title: "القانون الخاص",
    books: PRIVATE_LAW_BOOKS,
    href: "/books/private-law",
  },
  {
    id: "legal-culture",
    title: "الثقافة القانونية",
    books: LEGAL_CULTURE_BOOKS,
    href: "/books/legal-culture",
  },
  {
    id: "encyclopedias",
    title: "الموسوعات",
    books: ENCYCLOPEDIAS,
    href: "/books/encyclopedias",
  },
] as const;

// ─── Home page ──────────────────────────────────────────────────────────────
export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    // Interval lives here rather than in a child to avoid resetting on slide content re-renders.
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % SLIDES.length);
    }, AUTOPLAY_DELAY_MS);
    return () => clearInterval(timer);
  }, []);

  const slide = SLIDES[currentSlide] ?? SLIDES[0];

  return (
    <main className="mx-auto w-full max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
      {/* ── Hero slideshow banner ────────────────────────────────────────── */}
      <div
        className="relative mx-auto flex w-full max-w-[1168px] items-center justify-start rounded-hero bg-cover bg-center px-6 py-12 text-white"
        style={{
          minHeight: "var(--min-height-hero-mobile)",
          height:
            "clamp(var(--min-height-hero-mobile), 50vw, var(--height-hero))",
          backgroundImage: `linear-gradient(0deg, var(--hero-overlay), var(--hero-overlay)), url('${slide.backgroundImage}')`,
          backgroundColor: "#D9D9D9",
        }}
      >
        <div className="z-10 flex w-full max-w-[833px] flex-col gap-6 text-right">
          <h1
            className="w-full text-right font-sans font-bold tracking-[-0.03em] text-white whitespace-pre-line"
            style={{
              fontSize: "clamp(1.875rem, 5vw, var(--font-size-hero-title))",
              lineHeight: "var(--line-height-hero-title)",
            }}
          >
            {slide.title}
          </h1>
          <p className="max-w-2xl text-sm leading-relaxed text-white/90 sm:text-base md:text-lg md:leading-loose">
            {slide.subtitle}
          </p>
        </div>
      </div>

      {/* ── Hero carousel pagination indicators ─────────────────────────── */}
      <div className="mt-6 flex justify-center">
        <div
          className="flex h-5 items-center justify-center gap-2 rounded-full bg-brand-secondary/30 px-3"
          style={{ width: "var(--size-dot-track-w)" }}
          role="tablist"
          aria-label="تنقل بين الشرائح"
        >
          {SLIDES.map((s, index) => {
            const isActive = currentSlide === index;
            return (
              <button
                key={`slide-dot-${s.id}`}
                role="tab"
                aria-selected={isActive}
                aria-label={`الذهاب إلى الشريحة ${s.id}`}
                onClick={() => setCurrentSlide(index)}
                style={
                  isActive
                    ? {
                        width: "var(--size-dot-active)",
                        height: "var(--size-dot-active)",
                      }
                    : {
                        width: "var(--size-dot-inactive)",
                        height: "var(--size-dot-inactive)",
                      }
                }
                className="rounded-full bg-brand-secondary transition-all duration-300"
              />
            );
          })}
        </div>
      </div>

      {/* ── Catalog sections (data-driven — add/remove from BOOK_SECTIONS) ── */}
      {BOOK_SECTIONS.map(({ id, title, books, href }) => (
        <BookSection key={id} title={title} books={books} href={href} />
      ))}

      {/* ── Testimonials (stateful — isolated to prevent root re-renders) ── */}
      <TestimonialsSection />
    </main>
  );
}
