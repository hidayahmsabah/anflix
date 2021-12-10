import { useState, useEffect } from "react";
import fetchingData from "../API";

export function useAnimeFetch(animeId) {
  const [anime, setAnime] = useState();
  const [addInfo, setAddInfo] = useState();
  const [seiyuu, setSeiyuu] = useState();
  const [error, setError] = useState(false);

  useEffect(() => {
    // const fetchAnime = async () => {
    //     const indAnime = await fetchingData.GetAnimeAni(animeId);
    //     setAnime(indAnime);
    //     setError(false);
    // };

    const fetchExtra = async () => {
      try {
        const indAnime = await fetchingData.GetAnimeAni(animeId);
        setAnime(indAnime);

        const addAnimeInfo = await fetchingData.GetAnimeMAL(animeId);
        setAddInfo(addAnimeInfo);

        const addActorInfo = await fetchingData.GetAnimeSeiyuu(animeId);
        setSeiyuu(addActorInfo);
        setError(false);
      } catch {
        setError(true);
        // console.log(error)
      }
    };

    // fetchAnime();
    fetchExtra();
  }, [animeId]);

  return { anime, addInfo, seiyuu, error };
}
