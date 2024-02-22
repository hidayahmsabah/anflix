import { useState, useEffect } from "react";
import fetchingData from "../API";

export function useLetterFetch(letter, type, page) {
  const [anime, setAnime] = useState();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [request, setRequest] = useState({ status: 200, message: "OK" });
  const [lastPage, setLastPage] = useState(0);

  useEffect(() => {
    const fetchAnimeLetter = async () => {
      try {
        setLoading(true);
        const addAnimeInfo = await fetchingData.GetSearchLetter2(
          letter,
          type,
          page
        );
        setLastPage(addAnimeInfo.data.last_page);

        addAnimeInfo.status === 200
          ? setAnime(addAnimeInfo.data.results)
          : setRequest({
              status: addAnimeInfo.status,
              message: addAnimeInfo.message,
            });
        setError(false);
        setLoading(false);
      } catch (err) {
        setLoading(false);
        setError(true);
        console.log(`Error: ${err}`);
      }
    };

    fetchAnimeLetter();
  }, [letter, type, page]);

  return { anime, lastPage, loading, error, request };
}
