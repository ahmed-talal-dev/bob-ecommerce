import { Eye, TreePalm } from "lucide-react";

export default function MissionVision() {
  return (
    <section className="grid grid-cols-1 gap-8 md:grid-cols-2">
      {/* ── الرؤية (Vision Block) ── */}
      <article className="flex flex-col items-center rounded-2xl bg-brand-bg-light/60 p-8 text-center border border-neutral-100/80 shadow-sm transition-all duration-300 hover:shadow-md">
        <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-brand-accent-gold/10">
          <Eye className="h-8 w-8 text-brand-accent-gold-dark" aria-hidden="true" />
        </div>
        <h3 className="mb-4 font-sans text-xl font-bold text-brand-accent-gold-dark">
          الرؤية
        </h3>
        <p className="font-sans text-sm font-normal leading-relaxed text-neutral-600 md:text-base">
          أن نساهم في تنشئة جيل قانوني واعٍ فكرياً متميز علمياً ومهنياً، قادراً على مواجهة التحديات وحل المشكلات، جيل يطمح إلى الريادة والمنافسة العالمية، جيل يعلم معنى الانتماء، والمواطنة الصالحة.
        </p>
      </article>

      {/* ── الرسالة (Mission Block) ── */}
      <article className="flex flex-col items-center rounded-2xl bg-brand-bg-light/60 p-8 text-center border border-neutral-100/80 shadow-sm transition-all duration-300 hover:shadow-md">
        <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-brand-accent-gold/10">
          <TreePalm className="h-8 w-8 text-brand-accent-gold-dark" aria-hidden="true" />
        </div>
        <h3 className="mb-4 font-sans text-xl font-bold text-brand-accent-gold-dark">
          الرسالة
        </h3>
        <p className="font-sans text-sm font-normal leading-relaxed text-neutral-600 md:text-base">
          نسعى إلى التميز في عالم التدريب القانوني، وتنمية مهارات وتطوير عمل وفكر المتدربين من خلال الشراكات مع القطاعين العام والخاص في من برامج قانونية أكاديمية وعملية مميزة واستقطاب محاضرين ذوي خبرة وكفاءة مما ينتج التواصل الإيجابي مع المجتمع المحلي.
        </p>
      </article>
    </section>
  );
}
