import { useState, useEffect } from "react";
import { loader } from "graphql.macro";
import fetchingData from "../API";

const GenredAnimesQuery = loader("../queries/graphql/GenredAnimes.graphql")

let numArr = [];
let genres = [];
let animeList = [];

export function useGenreFetch() {
  const [genredAnimes, setGenredAnimes] = useState([])
  const [error, setError] = useState(false);

  useEffect(() => {
    async function getGenres() {
      let query = `
          {
            GenreCollection
          }
      `;

      try {
        const genreCollection = await fetchingData.callGraphQL(query, {});
        console.log("useGenreFetch Genres from AniList", genreCollection);

        //removing R genres
        let excludeR = genreCollection.GenreCollection.filter(
          (item) =>
            item.toLowerCase() !== "hentai" && item.toLowerCase() !== "ecchi"
        );
        genres = excludeR;

        getRandomNum()

      } catch (e) {
        console.log("useGenreFetch Error fetching Anime Genres from AniList", e);
        setError(true)
      }
    }

    const getRandomNum = () => {
      if (genres.length > 0) {
        do {
          let num = Math.floor(Math.random() * genres.length);
          if (numArr.indexOf(num) === -1) {
            numArr.push(num);
            fetchGenAnime(num)
          }
        } while (numArr.length < 5)  
      }
    }

    const fetchGenAnime = async (num) => {

      let variables = {
        page: 1,
        perPage: 15,
        genre: genres[num]
      };

      try {
        if (animeList.find(el => el.genre === genres[num])) {
          return
        } else {
          const getAnimes = await fetchingData.callGraphQL(GenredAnimesQuery, variables);
          console.log("useGenreFetch These are the Anime for Genre =>", genres[num], getAnimes)
          
          if (getAnimes.Page.media.length === 0) {
            numArr = numArr.filter(el => el !== num)
            getRandomNum()
          } else {
            animeList.push({ genre: genres[num], results: getAnimes.Page.media })
            console.log("useGenreFetch animeList", animeList)

            if (animeList.length === 5) {
              sessionStorage.setItem("genredAnime", JSON.stringify(animeList))
              setGenredAnimes(animeList)
            }
          }
        }

      } catch (e) {
        console.log("useGenreFetch Error at fetchGenAnime", e)
        setError(true);
      }
    };


    if (!sessionStorage.getItem("genredAnime")) {
      getGenres();
    } else {
      let genredAnimeStored = JSON.parse(sessionStorage.getItem("genredAnime"))
      setGenredAnimes(genredAnimeStored)
    }
    
  }, []);

  return { genredAnimes, error };

}
