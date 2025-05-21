import { useState, useEffect, useRef } from "react";
import { loader } from "graphql.macro";
import fetchingData from "../API";
import { updateMALGenre } from "../data/genres";
import { useGenreFetch } from "./useGenreFetchNew";

const TopAnimesQuery = loader("../queries/graphql/TopAnimes.graphql");

export function useHomeFetchNew() {
  const [top, setTop] = useState();
  const [random, setRandom] = useState();
  const [newSeasonAnime, setNewSeasonAnime] = useState()
  const [addInfo, setAddInfo] = useState();
  const [allGenres, setAllGenres] = useState([])
  const { genredAnimes, error } = useGenreFetch()
  const topRef = useRef(null)
  const randomRef = useRef(null)
  const newAnime = useRef(null)

  console.log("useHomeFetchNew genredAnimes", genredAnimes)

  useEffect(() => {

    // get header anime
    const fetchNewAnime = async () => {

      if (newAnime.current) {
        console.log("useHomeFetchNew newAnime.current if", newAnime)

        newSeasonAnime(newAnime.current);
      } else {

        console.log("useHomeFetchNew newAnime.current else", newAnime)

        try{
          let newAnime = await fetchingData.GetNewSeasonAnime();
  
          console.log("useHomeFetchNew this is random Anime", newAnime)
  
          while (!newAnime?.data?.images?.webp?.large_image_url) {
            newAnime = await fetchingData.GetNewSeasonAnime();
          }
    
          sessionStorage.setItem("newAnime", JSON.stringify(newAnime.data))

          newSeasonAnime(newAnime.data);
          newAnime.current = newAnime.data

          console.log("useHomeFetchNew newAnime after newSeasonAnime", newAnime)
  
        } catch(e) {
          
          console.log("useHomeFetchNew error fetching this season Anime", e);
          newSeasonAnime({ error: true })
  
        }
      }
    };

    const fetchRandAnime = async () => {

      if (randomRef.current) {
        console.log("useHomeFetchNew randomRef.current if", randomRef)

        setRandom(randomRef.current);
      } else {

        console.log("useHomeFetchNew randomRef.current else", randomRef)

        try{
          let randAnime = await fetchingData.GetRandomAnime();
  
          console.log("useHomeFetchNew this is random Anime", randAnime)
  
          while (!randAnime?.data?.images?.webp?.large_image_url) {
            randAnime = await fetchingData.GetRandomAnime();
          }
    
          sessionStorage.setItem("randAnime", JSON.stringify(randAnime.data))

          setRandom(randAnime.data);
          randomRef.current = randAnime.data

          console.log("ruseHomeFetchNew randomRef after setRandom", randomRef)
  
        } catch(e) {
          
          console.log("useHomeFetchNew error fetching random Anime", e);
          setRandom({ error: true })
  
        }
      }
    };

    //slider 1 - top anime
    const getTopAnime = async() => {

      let variables = {
          page: 1,
          perPage: 10
      };

      try{

        const topAnime = await fetchingData.callGraphQL(TopAnimesQuery, variables);
        console.log("useHomeFetchNew These are the Top Anime", topAnime)

        sessionStorage.setItem("topAnime", JSON.stringify(topAnime.Page.media))

        setTop(topAnime.Page.media)
        topRef.current = topAnime.Page.media
  
      } catch (e) {

        console.log("useHomeFetchNew error fetching Top Anime", e);
        setTop({error: true})
        
      }
    }

    const getMALGenres = async() => {
      const malGenres = await fetchingData.GetAnimeGenres();
      
      // let rename
      updateMALGenre(malGenres.data)
      sessionStorage.setItem("malGenres", JSON.stringify(malGenres.data))
    }

    if (!sessionStorage.getItem("topAnime")) {
      getTopAnime()
    } else {
      let topAnimeStored = JSON.parse(sessionStorage.getItem("topAnime"))
      setTop(topAnimeStored)
    }

    if (!sessionStorage.getItem("randAnime")) {
      fetchRandAnime()
    } else {
      let randAnimeStored = JSON.parse(sessionStorage.getItem("randAnime"))
      setRandom(randAnimeStored)
    }

    if (!sessionStorage.getItem("malGenres")) {
      getMALGenres()
    } else {
      let getMALGenresStored = JSON.parse(sessionStorage.getItem("malGenres"))
      updateMALGenre(getMALGenresStored)
    }

  }, []);

  useEffect(() => {
    console.log("useHomeFetchNew randomRef inside useEffect", randomRef)
    randomRef.current = random
  }, [random])
  
  useEffect(() => {
    if (genredAnimes?.length > 0) setAllGenres(genredAnimes) 
  }, [genredAnimes])

  return { random, top, allGenres, addInfo };
}
