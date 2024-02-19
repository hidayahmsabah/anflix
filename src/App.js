import { useState, useLayoutEffect } from "react";
import useWindowSize from "./hooks/useWindowSize";
import { GlobalStyles } from "./GlobalStyles";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import NotFound from "./components/NotFound";
import AnimeInd from "./components/AnimeInd";
import AnimeSeries from "./components/AnimeSeries";
import AnimeMovies from "./components/AnimeMovies";
import AnimeResult from "./components/AnimeResult";
import AnimeNew from "./components/AnimeNew";
import Footer from "./components/Footer";

function App() {
  const [visible, setVisible] = useState(false);
  const [width] = useWindowSize();

  // const GetTopAnime = async () => {
  //   const temp = await fetch(`https://api.jikan.moe/v3/anime/45576`).then(
  //     (res) => res.json()
  //   );
  //   console.log(temp);
  // };

  // useEffect(() => {
  //   GetTopAnime();
  // }, []);

  useLayoutEffect(() => {
    window.addEventListener("scroll", toggleVisible);
    return () => window.removeEventListener("scroll", toggleVisible);
  }, []);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setVisible(true);
    } else if (scrolled <= 300) {
      setVisible(false);
    }
  };

  return (
    <>
      <Router>
        <Routes>
          <Route
            path="/"
            element={<Home width={width} $visible={visible} />}
          />
          <Route
            path="/anflix"
            element={<Home width={width} $visible={visible} />}
          />
          <Route
            path="/series"
            element={
              <AnimeSeries width={width} $visible={visible} />
            }
          />
          <Route
            path="/movies"
            element={
              <AnimeMovies width={width} $visible={visible} />
            }
          />
          <Route
            path="/new_popular"
            element={
              <AnimeNew width={width} $visible={visible} />
            }
          />
          <Route
            path="/anime/:animeId"
            element={
              <AnimeInd width={width} $visible={visible} />
            }
          />
          <Route
            path="/search/:title"
            element={
              <AnimeResult width={width} $visible={visible} />
            }
          />
          <Route path="/*" element={<NotFound width={width} />} />
        </Routes>
        <GlobalStyles />
      </Router>
      <Footer />
    </>
  );
}

export default App;
