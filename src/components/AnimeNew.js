import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
import New from "./New";
import Top from "./Top";

const AnimeNew = ({ width, visible, toTop }) => {
  return (
    <>
      <Navbar width={width} index={3} />
      <New />
      <Top visible={visible} toTop={toTop} />
      <Footer />
    </>
  );
};

export default AnimeNew;
