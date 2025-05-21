import Header from "./Header";
import Navbar from "./Navbar";
import Sliders from "./Sliders";
import { useHomeFetchNew } from "../hooks/useHomeFetchNew";
import Top from "./Top";
import Wrong from "./Wrong";

const Home = ({ width, $visible }) => {

  const { random, top, allGenres } = useHomeFetchNew();

  console.log("Home random", random)
  console.log("Home top", top)

  return (
    <>
      <Navbar width={width} />
      {
        random?.error && top?.error && 
        <Wrong 
          text="Oops, it appears both AniList and MyAnimeList is unavailable right now. Please try again later." 
          back={false}
        />
      }
      {random && !random.error && <Header header={random} width={width} />}
      <main>
        {
          !top?.error ?
          <Sliders
            title="Top Animes"
            list={top}
            className={random?.error && "no-header"}
          /> : 
          !random?.error ?
          <Wrong 
            text="Something went wrong while getting Top Animes. Please try again later." 
            back={false}
          /> : null
        }
        {allGenres && (
          allGenres.map((el, index) => (
            <Sliders
              key={index}
              title={`${el.genre} Anime`}
              list={el.results}
            />
          ))
        )}
      </main>
      <Top $visible={$visible} />
    </>
  );
};

export default Home;
