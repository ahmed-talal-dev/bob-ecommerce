"use client";

import { Search } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { useDebounce } from "@/hooks/use-debounce";
import { cn } from "@/lib/utils";

interface SearchBarProps {
  onSearch?: (query: string) => void;
  className?: string;
}

const DEBOUNCE_DELAY_MS = 300;

export default function SearchBar({ onSearch, className }: SearchBarProps) {
  const [rawQuery, setRawQuery] = useState("");
  const debouncedQuery = useDebounce(rawQuery, DEBOUNCE_DELAY_MS);

  const onSearchRef = useRef(onSearch);
  useEffect(() => {
    onSearchRef.current = onSearch;
  });

  useEffect(() => {
    onSearchRef.current?.(debouncedQuery);
  }, [debouncedQuery]);

  const handleQueryChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setRawQuery(e.target.value);

  return (
    <div
      style={{ maxWidth: "var(--width-searchbar)" }}
      className={cn("relative mx-auto w-full", className)}
    >
      <input
        type="search"
        value={rawQuery}
        onChange={handleQueryChange}
        placeholder="البحث…"
        aria-label="بحث في المتجر"
        style={{
          height: "var(--height-searchbar)",
          borderRadius: "var(--radius-searchbar)",
        }}
        className="w-full border border-brand-muted bg-white px-6 text-base text-brand-neutral-dark outline-none transition-colors placeholder:text-brand-heading focus:border-brand-secondary"
      />
      {/* left side — trailing edge in RTL, user reads right-to-left so icon is at the end */}
      <Search
        aria-hidden="true"
        className="pointer-events-none absolute left-5 top-1/2 h-5 w-5 -translate-y-1/2 text-brand-neutral-dark"
      />
    </div>
  );
}
