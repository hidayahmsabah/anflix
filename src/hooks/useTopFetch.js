import { useState, useEffect } from "react";
import fetchingData from "../API";

export function useTopFetch(subtype) {
  const [anime, setAnime] = useState();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchTop = async () => {
      try {
        setLoading(true);
        let results = await fetchingData.GetNewAnime(subtype);
        setAnime(results.top);
        setLoading(false);
        setError(false);
      } catch {
        setError(true);
        setLoading(false);
      }
    };
    fetchTop();
  }, [subtype]);

  return { anime, loading, error };
}
