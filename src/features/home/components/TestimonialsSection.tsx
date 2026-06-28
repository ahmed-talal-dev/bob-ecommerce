"use client";

import { useState } from "react";
import Image from "next/image";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import ScrollReveal from "@/components/ui/ScrollReveal";

interface Testimonial {
  id: number;
  rating: string;
  text: string;
  name: string;
  role: string;
  avatarUrl: string;
}

// Seeded from Figma frame "Group 15" — update when client provides real reviews
const TESTIMONIALS: readonly Testimonial[] = [
  {
    id: 1,
    rating: "٤,٩",
    text: "الدورات متميزة، والمدربون خبراء في المجال. ساعدني التدريب على فهم القوانين السعودية بشكل أعمق والاستعداد لسوق العمل بثقة",
    name: "عامر طلال الاحمدي",
    role: "محامي",
    avatarUrl: "/assets/testmo-1.svg",
  },
  {
    id: 2,
    rating: "٤,٩",
    text: "تجربة رائعة! قدم مركز أوتاد القانون تدريبًا قانونيًا متقدمًا بأسلوب احترافي ومحتوى ثري، مما ساهم في تطوير مهاراتي العملية",
    name: "معاذ مبارك العمير",
    role: "طالب كلية الحقوق – جامعة الأمير محمد بن فهد",
    avatarUrl: "/assets/testmo-2.svg",
  },
  {
    id: 3,
    rating: "٤,٩",
    text: "منهجية التدريب في المركز عملية ومواكبة لأحدث الأنظمة والتشريعات، مما جعلني أكثر قدرة على تقديم استشارات قانونية دقيقة",
    name: "د. محمد الهاشم",
    role: "مستشار قانوني",
    avatarUrl: "/assets/testmo-1.svg",
  },
];

const SWIPE_THRESHOLD_PX = 50;

export default function TestimonialsSection() {
  const [currentReview, setCurrentReview] = useState(0);
  const [touchStart, setTouchStart] = useState<number | null>(null);

  const handleNextReview = () => {
    setCurrentReview((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  const handlePrevReview = () => {
    setCurrentReview((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (touchStart === null) return;
    const currentTouch = e.targetTouches[0].clientX;
    const diff = touchStart - currentTouch;

    // Slide swipe transition logic for RTL layout mapping
    if (diff > SWIPE_THRESHOLD_PX) {
      handleNextReview();
      setTouchStart(null);
    } else if (diff < -SWIPE_THRESHOLD_PX) {
      handlePrevReview();
      setTouchStart(null);
    }
  };

  return (
    <ScrollReveal>
      <section className="relative mt-20 flex min-h-[672px] w-full flex-col justify-center overflow-hidden rounded-hero py-16 text-white [--testimonial-width:90%] sm:[--testimonial-width:768px]">
        {/* Background photo layer */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/assets/testmolins-bg.svg')",
          }}
        />
        {/* Dark purple brand overlay using design token variables */}
        <div className="absolute inset-0 bg-brand-secondary/40 opacity-70" />

        {/* Title & Navigation row */}
        <div className="z-10 mb-10 flex w-full items-center justify-between px-6 sm:px-12 lg:px-20">
          {/* Testimonial title on the right visually (first child in RTL) */}
          <h2 className="font-sans text-4xl font-semibold leading-[51px] text-right text-white">
            اراء العملاء
          </h2>

          {/* Navigation indicators / arrows on the left visually (second child in RTL) */}
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={handleNextReview}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/40 text-white hover:bg-white/10 transition-colors"
              aria-label="التقييم التالي"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              type="button"
              onClick={handlePrevReview}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/40 text-white hover:bg-white/10 transition-colors"
              aria-label="التقييم السابق"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Testimonials horizontal sliding track */}
        <div
          className="z-10 w-full overflow-hidden px-6 sm:px-12 lg:px-20 pb-8"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
        >
          <div
            className="flex gap-6 transition-transform duration-500 ease-in-out w-full"
            style={{
              transform: `translateX(calc(${currentReview} * -1 * (var(--testimonial-width) + 24px)))`,
            }}
          >
            {TESTIMONIALS.map((testimonial, idx) => (
              <div
                key={testimonial.id}
                className={`flex flex-col justify-between shrink-0 p-8 min-h-[272px] bg-white text-black rounded-xl transition-all duration-500 ease-out ${
                  currentReview === idx ? "scale-100 opacity-100" : "scale-[0.96] opacity-60"
                }`}
                style={{
                  width: "var(--testimonial-width)",
                  boxShadow: "var(--shadow-testimonial-card)",
                }}
              >
                <div className="flex flex-col gap-3">
                  {/* Rating + Star indicators */}
                  <div className="flex items-center gap-1.5 justify-start text-right">
                    <span className="font-sans text-xl font-normal leading-relaxed text-black/40">
                      {testimonial.rating}
                    </span>
                    <div className="flex items-center gap-[9px]">
                      {Array.from({ length: 5 }, (_, i) => (
                        <Star
                          key={`star-${i}`}
                          className="h-5 w-5 fill-brand-accent-gold text-brand-accent-gold"
                        />
                      ))}
                    </div>
                  </div>
                  {/* Review Text */}
                  <p className="text-right font-sans text-xl font-light leading-relaxed text-black line-clamp-3">
                    {testimonial.text}
                  </p>
                </div>

                {/* Profile details */}
                <div className="flex items-center justify-end gap-3 mt-4 border-t border-brand-muted/20 pt-4">
                  <div className="flex flex-col text-right">
                    <span className="font-sans text-base font-bold leading-[21px] text-black">
                      {testimonial.name}
                    </span>
                    <span className="font-sans text-xs font-normal leading-[15px] text-black/60 mt-0.5">
                      {testimonial.role}
                    </span>
                  </div>
                  <Image
                    src={testimonial.avatarUrl}
                    alt={testimonial.name}
                    width={55}
                    height={55}
                    className="shrink-0 h-14 w-14 rounded-full object-cover"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </ScrollReveal>
  );
}
