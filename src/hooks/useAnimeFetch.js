import { useState, useEffect } from "react";
import fetchingData from "../API";

export function useAnimeFetch(animeId) {
  const [anime, setAnime] = useState();
  const [addInfo, setAddInfo] = useState();
  const [seiyuu, setSeiyuu] = useState();
  // const [error, setError] = useState(false);

  useEffect(() => {
    const fetchExtra = async () => {
      // try {
      try {
        const indAnime = await fetchingData.GetAnimeAni(animeId);
        setAnime(indAnime);
      } catch {
        console.log("Error at Ani");
        // setAnime(false);
      }
    };

    const fetchData = async () => {
      try {
        const addAnimeInfo = await fetchingData.GetAnimeMAL(animeId);
        setAddInfo(addAnimeInfo);
      } catch {
        console.log("Error at MAL");
        // setAddInfo(false);
      }

      try {
        const addActorInfo = await fetchingData.GetAnimeSeiyuu(animeId);
        setSeiyuu(addActorInfo);
      } catch {
        console.log("Error getting MAL seiyuus");
        // setSeiyuu(false);
      }
    };

    fetchData();
    fetchExtra();
  }, [animeId]);

  return { anime, addInfo, seiyuu };
}
