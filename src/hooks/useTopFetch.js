import { useState, useEffect } from "react";
import fetchingData from "../API";

export function useTopFetch(page, filter) {
  const [anime, setAnime] = useState();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchTop = async () => {

      setLoading(true);

      if (!sessionStorage.getItem(filter)) {
        try {
          let results = await fetchingData.GetNewAnime({ page, filter });
          sessionStorage.setItem(filter, JSON.stringify(results.data))

          setAnime(results.data);
        } catch {
          setError(true);
        }
      } else {
        let topAnimeStored = JSON.parse(sessionStorage.getItem(filter))
          setAnime(topAnimeStored);
      }

      setLoading(false);

    };

    fetchTop();

  }, [page, filter]);

  return { anime, loading, error };
}
