import React from "react";
import Footer from "./Footer";
// import Movies from "./Movies";
import Navbar from "./Navbar";
import Series from "./Series";
import Top from "./Top";

const AnimeMovies = ({ width, visible, toTop }) => {
  return (
    <>
      <Navbar width={width} index={2} />
      <Series type="movie" />
      <Top visible={visible} toTop={toTop} />
      <Footer />
    </>
  );
};

export default AnimeMovies;
