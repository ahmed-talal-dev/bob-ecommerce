import EncyclopediaGrid from "@/features/encyclopedias/components/EncyclopediaGrid";

export default function EncyclopediasPage() {
  return (
    <main className="mx-auto w-full max-w-7xl px-4 py-8">
      <h1 className="mb-8 text-5xl font-semibold leading-tight text-heading">الموسوعات</h1>
      <EncyclopediaGrid />
    </main>
  );
}
