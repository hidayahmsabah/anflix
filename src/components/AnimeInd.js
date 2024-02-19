import React from "react";
import Navbar from "./Navbar";
import AnimeInfo from "./AnimeInfo";
import { useParams } from "react-router";
import { useAnimeFetch } from "../hooks/useAnimeFetch";
import Top from "./Top";
// import Loading from "./Loading";
// import Wrong from "./Wrong";

const AnimeInd = ({ width, $visible, toTop }) => {
  const { animeId } = useParams();
  const { anime, addInfo, seiyuu } = useAnimeFetch(animeId);

  return (
    <>
      <Navbar width={width} />
      {/* {error && (
        <Wrong
          text={
            "Oops, it appears either Anilist or MyAnimeList has trouble finding this anime"
          }
        />
      )} */}
      {/* {!anime && !addInfo && <Loading />} */}
      {(anime || addInfo) && (
        <AnimeInfo anime={anime} addInfo={addInfo} seiyuu={seiyuu} />
      )}
      <Top $visible={$visible} toTop={toTop} />

    </>
  );
};

export default AnimeInd;
