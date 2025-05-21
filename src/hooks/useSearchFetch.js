import { useState, useEffect } from "react";
import fetchingData from "../API";

export function useSearchFetch(params) {
  console.log("useSearchFetch params", params)
  const [result, setResult] = useState([]);
  const [lastPage, setLastPage] = useState(0);
  const [total, setTotal] = useState(0)
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const getResult = async () => {
      try {
        setLoading(true);
        const results = await fetchingData.GetSearchAnime(params);
        setLastPage(results.pagination.last_visible_page);
        setTotal(results.pagination.items.total);
        setResult((prev) =>
          params.page > 1 ? [...prev, ...results.data] : [...results.data]
        );
        setLoading(false);
      } catch (err) {
        setLoading(false);
        setError(true);
        // console.log(err);
      }
    };

    params && getResult();
  }, [params]);

  return { result, lastPage, total, loading, error };
}
