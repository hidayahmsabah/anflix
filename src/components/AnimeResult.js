import React from "react";
import Navbar from "../components/Navbar";
import SearchResults from "./SearchResults";
import Footer from "./Footer";
import Top from "./Top";

const AnimeResult = ({ width, visible, toTop }) => {
  return (
    <>
      <Navbar width={width} />
      <SearchResults />
      <Top visible={visible} toTop={toTop} />
      <Footer />
    </>
  );
};

export default AnimeResult;
