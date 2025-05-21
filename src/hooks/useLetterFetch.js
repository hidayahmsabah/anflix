import { useState, useEffect } from "react";
import fetchingData from "../API";

export function useLetterFetch(letter, type, page) {
  const [anime, setAnime] = useState();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [lastPage, setLastPage] = useState(0);

  useEffect(() => {
    const fetchAnimeLetter = async () => {

      setLoading(true);

      try {
        const addAnimeInfo = await fetchingData.GetSearchAnime(
          {
            letter,
            type,
            page,
          }
        );

        setAnime(addAnimeInfo.data);
        setLastPage(addAnimeInfo.pagination.last_visible_page);

      } catch (err) {
        setError(true);
        console.log(`Error: ${err}`);
      }

      setLoading(false);

    };

    fetchAnimeLetter();
  }, [letter, type, page]);

  return { anime, lastPage, loading, error };
}
