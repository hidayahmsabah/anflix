import { useState, useEffect } from "react";
import fetchingData from "../API";

export function useHomeFetch() {
  const [top, setTop] = useState();
  const [random, setRandom] = useState();
  const [addInfo, setAddInfo] = useState();

  useEffect(() => {
    // get header anime
    const fetchRandAnime = async () => {
      let randAnime = await fetchingData.GetRandomAnime();
      // console.log(randAnime);
      while (!randAnime.banner_image || !randAnime.mal_id) {
        randAnime = await fetchingData.GetRandomAnime();
      }
      setRandom(randAnime);
    };
    fetchRandAnime();

    //slider 1 - top anime
    const fetchTopAnime = async () => {
      const topAnime = await fetchingData.GetTopAnime();
      setTop(topAnime.slice(0, 10));
      // setTop(await fetchingData.GetTopAnime());
    };
    fetchTopAnime();
  }, []);

  useEffect(() => {
    const fetchPlot = async () => {
      const id = random.mal_id;
      const animePlot = await fetchingData.GetAnimeMAL(id);
      setAddInfo(animePlot);
    };
    random && fetchPlot();
  }, [random]);

  return { random, top, addInfo };
}
