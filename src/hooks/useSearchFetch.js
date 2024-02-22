import { useState, useEffect } from "react";
import fetchingData from "../API";

export function useSearchFetch(searchTerm, page) {
  const [result, setResult] = useState([]);
  const [lastPage, setLastPage] = useState(0);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [request, setRequest] = useState({ status: 200, message: "OK" });

  useEffect(() => {
    const getResult = async () => {
      try {
        setLoading(true);
        const results = await fetchingData.GetSearchAnime2(searchTerm, page);
        setLastPage(results.data.last_page);
        // console.log(results.status);
        results.status === 200
          ? setResult((prev) =>
              page > 1
                ? [...prev, ...results.data.results]
                : [...results.data.results]
            )
          : setRequest({ status: results.status, message: results.message });
        setLoading(false);
      } catch (err) {
        setLoading(false);
        setError(true);
        // console.log(err);
      }
    };

    searchTerm && getResult();
  }, [searchTerm, page]);

  return { result, lastPage, loading, error, request };
}
