import React from "react";
// import Movies from "./Movies";
import Navbar from "./Navbar";
import Series from "./Series";
import Top from "./Top";

const AnimeMovies = ({ width, $visible }) => {
  return (
    <>
      <Navbar width={width} index={2} />
      <Series type="movie" />
      <Top $visible={$visible} />
    </>
  );
};

export default AnimeMovies;
