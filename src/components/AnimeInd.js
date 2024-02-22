import React from "react";
import Navbar from "./Navbar";
import AnimeInfo from "./AnimeInfo";
import { useParams } from "react-router";
import { useAnimeFetch } from "../hooks/useAnimeFetch";
import Top from "./Top";
import Footer from "./Footer";
// import Back from "./Back";

const AnimeInd = ({ width, visible, toTop }) => {
  const { animeId } = useParams();
  const { anime, addInfo, seiyuu } = useAnimeFetch(animeId);

  return (
    <>
      <Navbar width={width} />
      {/* <Back /> */}
      {/* {!anime && !addInfo && <Loading />} */}
      {(anime || addInfo) && (
        <AnimeInfo
          anime={anime}
          addInfo={addInfo}
          seiyuu={seiyuu}
          // backFn={backFn}
        />
      )}
      <Top visible={visible} toTop={toTop} />

      {(anime || addInfo) && <Footer />}
    </>
  );
};

export default AnimeInd;
