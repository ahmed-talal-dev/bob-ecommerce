import { useState, useEffect } from "react";
import type { NewsItem } from "../types";
import { MOCK_NEWS } from "../mock-data";

interface UseNewsResult {
  news: readonly NewsItem[];
  isLoading: boolean;
  errorMessage: string | null;
}

export function useNews(): UseNewsResult {
  const [news, setNews] = useState<readonly NewsItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  useEffect(() => {
    const controller = new AbortController();

    const load = async () => {
      try {
        setIsLoading(true);
        setErrorMessage(null);

        // Simulated delay matching the design specs of the encyclopedias demo.
        await new Promise<void>((resolve) => setTimeout(resolve, 800));

        if (!controller.signal.aborted) {
          setNews(MOCK_NEWS);
        }
      } catch {
        if (!controller.signal.aborted) {
          setErrorMessage("تعذر تحميل الأخبار. يرجى المحاولة مرة أخرى.");
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

  return { news, isLoading, errorMessage };
}
