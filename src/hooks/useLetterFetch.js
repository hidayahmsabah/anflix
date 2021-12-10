import { useState, useEffect } from "react";
import fetchingData from "../API";

export function useLetterFetch(letter, type, page) {
  const [anime, setAnime] = useState();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [lastPage, setLastPage] = useState(0);

  useEffect(() => {
    const fetchAnimeLetter = async () => {
      try {
        setLoading(true);
        const addAnimeInfo = await fetchingData.GetSearchLetter(
          letter,
          type,
          page
        );

        setAnime(addAnimeInfo.results);
        setLastPage(addAnimeInfo.last_page);
        setError(false);
        setLoading(false);
      } catch {
        setLoading(false);
        setError(true);
      }
    };

    fetchAnimeLetter();
  }, [letter, type, page]);

  return { anime, lastPage, loading, error };
}
