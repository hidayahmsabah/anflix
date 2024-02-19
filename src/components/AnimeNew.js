import React from "react";
import Navbar from "./Navbar";
import New from "./New";
import Top from "./Top";

const AnimeNew = ({ width, $visible, toTop }) => {
  return (
    <>
      <Navbar width={width} index={3} />
      <New />
      <Top $visible={$visible} toTop={toTop} />
    </>
  );
};

export default AnimeNew;
