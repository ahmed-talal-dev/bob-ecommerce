import { useState, useEffect } from "react";
import type { EncyclopediaBook } from "../types";
import { MOCK_ENCYCLOPEDIAS } from "../mock-data";

interface UseEncyclopediasResult {
  encyclopedias: EncyclopediaBook[];
  isLoading: boolean;
  errorMessage: string | null;
}

// Simulates an async data fetch — swap the body for a real API call later.
export function useEncyclopedias(): UseEncyclopediasResult {
  const [encyclopedias, setEncyclopedias] = useState<EncyclopediaBook[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  useEffect(() => {
    const controller = new AbortController();

    const load = async () => {
      try {
        setIsLoading(true);
        setErrorMessage(null);

        // Artificial network delay for realistic skeleton demo.
        await new Promise<void>((resolve) => setTimeout(resolve, 800));

        if (!controller.signal.aborted) {
          setEncyclopedias(MOCK_ENCYCLOPEDIAS);
        }
      } catch {
        if (!controller.signal.aborted) {
          setErrorMessage("تعذّر تحميل الموسوعات. يرجى المحاولة مرة أخرى.");
        }
      } finally {
        if (!controller.signal.aborted) {
          setIsLoading(false);
        }
      }
    };

    load();

    return () => controller.abort();
  }, []);

  return { encyclopedias, isLoading, errorMessage };
}
