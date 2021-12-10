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
      <Header header={random && random} extra={addInfo} width={width} />
      <main>
        <Sliders title="Top Animes" list={top} />
        {!allGenres ? (
          <div>Something went wrong</div>
        ) : (
          allGenres.length === 5 &&
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
      <Footer />
    </>
  );
};

export default Home;
