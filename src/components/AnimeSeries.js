import React from "react";
import Navbar from "./Navbar";
import Series from "./Series";
import Top from "./Top";

const AnimeSeries = ({ width, visible, toTop }) => {
  return (
    <>
      <Navbar width={width} index={1} />
      <Series type="tv" />
      <Top toTop={toTop} $visible={visible} />
    </>
  );
};

export default AnimeSeries;
