import { useState, useEffect } from "react";
import fetchingData from "../API";

export function useSearchFetch(searchTerm, page) {
  const [result, setResult] = useState([]);
  const [lastPage, setLastPage] = useState(0);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const getResult = async () => {
      try {
        setLoading(true);
        const results = await fetchingData.GetSearchAnime(searchTerm, page);
        setLastPage(results.last_page);
        setResult((prev) =>
          page > 1 ? [...prev, ...results.results] : [...results.results]
        );
        setLoading(false);
      } catch {
        setLoading(false);
        setError(true);
      }
    };

    searchTerm && getResult();
  }, [searchTerm, page]);

  return { result, lastPage, loading, error };
}
