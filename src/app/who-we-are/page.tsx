import ValueCard from "@/features/about/components/ValueCard";
import MissionVision from "@/features/about/components/MissionVision";

export default function WhoWeArePage() {
  return (
    <main className="w-full">
      {/* ── 1. Hero Section: Introduction and Goals ── */}
      <section className="mx-auto max-w-7xl px-4 py-16 text-center sm:px-6 lg:px-8 lg:py-24">
        <h1 className="mb-6 font-sans text-3xl font-extrabold leading-tight text-brand-secondary sm:text-4xl md:text-5xl">
          من نحن و ما هي <span className="text-accent-gold-dark">أهدافنا؟</span>
        </h1>
        <p className="mx-auto max-w-5xl font-sans text-base font-normal leading-relaxed text-brand-secondary md:text-lg">
          نشر ثقافة التدريب والتطوير القانوني ضمن القطاعين العام والخاص، وتقديم برامج ذات منهجية وجودة مميزة، واستقطاب الخبرات والمتخصصين ذوي الكفاءة العالية في علم القانون، والإسهام في نشر ورفع مستوى الثقافة القانونية لدى أفراد المجتمع، وإحداث نقلة نوعية في عالم التدريب وطرق إعطاء الدورات، وغرس قيم العمل وممارسته والإنتاج والإتقان الذي يجمع بين الأصالة والمعاصرة، إضافة إلى إعداد القانوني القادر على صنع المستقبل من خلال العلم والإبداع المهني وسرعة التفكير بحل الأزمات.
        </p>
      </section>

      {/* ── 2. Values Section: The Core Principles (Dark Background with overlay) ── */}
      <section 
        className="relative bg-cover bg-center py-16 text-white sm:py-20 lg:py-24"
        style={{
          backgroundImage: "linear-gradient(var(--about-values-overlay), var(--about-values-overlay)), url('/assets/bg-hero.svg')"
        }}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-12 text-center font-sans text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            القيم
          </h2>
          
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <ValueCard title="الجودة والتميز">
              من خلال تطبيق مقاييس رفيعة المستوى تساند الطموحات الكبيرة والسعي لتقديم أفضل البرامج القانونية التي تخدم المتدربين وتطور أدائهم المهني.
            </ValueCard>
            <ValueCard title="المواطنة">
              حيث نؤمن بأن نحترم واجبنا الوطني وإحداث تأثير إيجابي على المجتمعات، بمساهمتنا في أن نكون عاملاً محفزاً للنمو والتطوير ونقدم القدوة الحسنة في بناء علاقات قوية مع عملائنا وشركائنا.
            </ValueCard>
            <ValueCard title="الاعتمادية والكفاءة">
              نعمل على تطوير برامجنا القانونية بشكل مستمر لضمان كفاءة مواردنا البشرية على تقديم أفضل البرامج الملائمة لاحتياجات العملاء والمجتمع.
            </ValueCard>
            <ValueCard title="أخلاقيات العمل">
              نلتزم بأعلى مستويات السلوك وأخلاقيات العمل في كافة تعاملاتنا وتشمل الصدق، والأمانة، والإخلاص والشفافية التامة لضمان تحقيق الأهداف والنجاح وفق مبدأ الشراكة الفاعلة مع الأطراف التي نتعامل معها.
            </ValueCard>
          </div>
        </div>
      </section>

      {/* ── 3. Mission & Vision Section: Strategic Outlook ── */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <MissionVision />
      </section>
    </main>
  );
}
