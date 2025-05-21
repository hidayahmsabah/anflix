import Navbar from "../components/Navbar";
import SearchResults from "./SearchResults";
import Top from "./Top";

const AnimeResult = ({ width, $visible }) => {
  return (
    <>
      <Navbar width={width} />
      <SearchResults />
      <Top $visible={$visible} />
    </>
  );
};

export default AnimeResult;
