import { useState, useEffect } from "react";
import { loader } from 'graphql.macro';
import fetchingData from "../API";

const AnimeInfoQuery = loader('../queries/graphql/AnimeInfo.graphql')

export function useAnimeFetch(animeId) {
  const [anime, setAnime] = useState(null);
  // const [addInfo, setAddInfo] = useState();
  // const [seiyuu, setSeiyuu] = useState();
  const [error, setError] = useState();

  useEffect(() => {

    let variables = {
        idMal: animeId,
    };

    const fetchData = async () => {
      try {
        const anlInfo = async() => await fetchingData.callGraphQL(AnimeInfoQuery, variables);
        const malInfo = async() => await fetchingData.GetAnimeMAL(animeId);

        // Promise all will run both paralelly, and respond error when 1 hit error
        const [malInfoRes, anlInfoRes] = await Promise.all([malInfo(), anlInfo()]);

        console.log("useAnimeFetch malInfoRes", malInfoRes)
        console.log("useAnimeFetch anlInfoRes", anlInfoRes)

        setAnime({
          mal: malInfoRes.data,
          anl: anlInfoRes.Media
        });
        // setAddInfo(malInfoRes.data);


      } catch (e) {
        console.log("useAnimeFetch Error", e);
        setError(true)
      }
    };

    fetchData();
  }, [animeId]);

  return { anime, error };
}
