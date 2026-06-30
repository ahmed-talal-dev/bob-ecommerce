import EncyclopediaGrid from "@/features/encyclopedias/components/EncyclopediaGrid";

export default function EncyclopediasPage() {
  return (
    <main className="mx-auto w-full max-w-7xl px-4 py-8">
      <h1 className="mb-8 text-3xl font-semibold leading-tight text-brand-heading sm:text-4xl lg:text-5xl">الموسوعات</h1>
      <EncyclopediaGrid />
    </main>
  );
}
