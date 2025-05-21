import Navbar from "./Navbar";
import AnimeInfo from "./AnimeInfo";
import { useParams } from "react-router";
import { useAnimeFetch } from "../hooks/useAnimeFetch";
import Top from "./Top";
import Loading from "./Loading";
import Wrong from "./Wrong";

const AnimeInd = ({ width, $visible }) => {
  const { animeId } = useParams();
  const { anime, error } = useAnimeFetch(animeId);

  console.log("AnimeInd anime", anime)
  console.log("AnimeInd error", error)


  return (
    <>
      <Navbar width={width} />
      {
        anime ? 
          <AnimeInfo anime={anime}/> :
        error ? 
          <Wrong text={"Oops, it appears both AniList and MyAnimeList has trouble finding this anime"}/> :
          <Loading />
      }

      <Top $visible={$visible} />
    </>
  );
};

export default AnimeInd;
