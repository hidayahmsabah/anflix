import { useState, useLayoutEffect, useEffect } from "react";
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

function App() {
  const [visible, setVisible] = useState(false);
  const [width] = useWindowSize();
  // const navigate = useNavigate();

  // const GetTopAnime = async () => {
  //   const temp = await fetch(`https://api.jikan.moe/v3/anime/45576`).then(
  //     (res) => res.json()
  //   );
  //   console.log(temp);
  // };

  async function logFetch(url) {
    try {
      let first = await fetch(url);
      // let second = first.status;
      let third = {
        status: first.status,
        message: first.statusText,
        data: await first.json(),
      };
      console.log(third);
    } catch (err) {
      console.log("fetch failed", err);
    }
  }

  useEffect(() => {
    //GetTopAnime();
    logFetch("https://api.jikan.moe/v3/search/anime?q=&letter=z&page=1");
  }, []);

  // get viewport width for top nav
  useLayoutEffect(() => {
    window.addEventListener("scroll", toggleVisible);
    return () => window.removeEventListener("scroll", toggleVisible);
  }, []);

  // get scroll to show the button to scroll back to top
  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setVisible(true);
    } else if (scrolled <= 300) {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={<Home width={width} visible={visible} toTop={scrollToTop} />}
        />
        <Route
          path="/anflix"
          element={<Home width={width} visible={visible} toTop={scrollToTop} />}
        />
        <Route
          path="/series"
          element={
            <AnimeSeries width={width} visible={visible} toTop={scrollToTop} />
          }
        />
        <Route
          path="/movies"
          element={
            <AnimeMovies width={width} visible={visible} toTop={scrollToTop} />
          }
        />
        <Route
          path="/new%20popular"
          element={
            <AnimeNew width={width} visible={visible} toTop={scrollToTop} />
          }
        />
        <Route
          path="/:animeId"
          element={
            <AnimeInd width={width} visible={visible} toTop={scrollToTop} />
          }
        />
        <Route
          path="/search/:title"
          element={
            <AnimeResult width={width} visible={visible} toTop={scrollToTop} />
          }
        />
        <Route path="/*" element={<NotFound width={width} />} />
      </Routes>
      <GlobalStyles />
    </Router>
  );
}

export default App;
