import Navbar from "./Navbar";
import New from "./New";
import Top from "./Top";

const AnimeNew = ({ width, $visible }) => {
  return (
    <>
      <Navbar width={width} index={3} />
      <New />
      <Top $visible={$visible} />
    </>
  );
};

export default AnimeNew;
