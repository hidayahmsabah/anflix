import React from "react";
import Header from "./Header";
import Navbar from "./Navbar";
import Sliders from "./Sliders";
import { useHomeFetch } from "../hooks/useHomeFetch";
import { useGenreFetch } from "../hooks/useGenreFetch";
import Footer from "./Footer";
import Top from "./Top";

const Home = ({ width, visible, toTop }) => {
  const { random, top, addInfo } = useHomeFetch();
  const { allGenres } = useGenreFetch();

  return (
    <>
      <Navbar width={width} />
      {random && <Header header={random} extra={addInfo} width={width} />}
      <main>
        <Sliders
          title="Top Animes"
          list={top}
          className={!random && "no-header"}
        />
        {/* {allGenres && (
          allGenres.length === 5 &&
          allGenres.map((el, index) => (
            <Sliders
              key={index}
              title={`${el.genre} Anime`}
              list={el.results}
            />
          ))
        )} */}
        {!allGenres ? (
          <div>Something went wrong</div>
        ) : (
          allGenres.map((el, index) => (
            <Sliders
              key={index}
              title={`${el.genre} Anime`}
              list={el.results}
            />
          ))
        )}
      </main>
      <Top visible={visible} toTop={toTop} />
      {random && <Footer />}
    </>
  );
};

export default Home;
