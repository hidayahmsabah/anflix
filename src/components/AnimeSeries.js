import { useLocation } from "react-router-dom";
import Navbar from "./Navbar";
import Series from "./Series";
import Top from "./Top";

const AnimeSeries = ({ width, $visible }) => {

  const state = useLocation().state

  return (
    <>
      <Navbar width={width} index={1} />
      <Series type="tv" />
      <Top $visible={$visible} />
    </>
  );
};

export default AnimeSeries;
