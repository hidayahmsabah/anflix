import { print } from "graphql";

const malUrl = "https://api.jikan.moe/v4";
const aniUrl = "https://api.aniapi.com/v1";
const aniGraphQLUrl = "https://graphql.anilist.co";

const API = {
  MAL: {
    GET_ANIME_MAL: `${malUrl}/anime/$animeId`,
    GET_NEW_ANIME: `${malUrl}/top/anime`,
    GET_RANDOM_ANIME: `${malUrl}/random/anime?sfw=true`,
    GET_THIS_SEASON_ANIME: `${malUrl}/seasons/now`,
    GET_RECOMMENDED_ANIME: `${malUrl}/recommendations/anime`,
    GET_ALL_GENRES: `${malUrl}/genres/anime`,
    SEARCH_ANIME: `${malUrl}/anime`,
  },
  ANL: {

  }
}

const callFetch = async(url, options = null) => {
  console.log("inside callFetch options", options)
  console.log("inside callFetch url", url)
  const params = new URLSearchParams(options);
  console.log("inside callFetch params", params)
  try {
    let data = await fetch(`${url}${options ? '?' + params.toString() : ''}`)
    console.log("inside callFetch data", data)
    let json = await data.json()
    console.log("inside callFetch json", json)

    if (data.status === 200){
      return json
    } else {
      throw json
    }
  } catch(e) {
    console.log("inside callFetch Error", e)
    throw e;
  }
}

const fetchingData = {
  //
  //
  // Fetching Jikan API
  //
  //

  // specific anime
  GetAnimeMAL: async (animeId) => {
    let url = API.MAL.GET_ANIME_MAL.replace("$animeId", animeId)
    return await callFetch(url)
  },

  // searching query
  GetSearchAnime: async (params) => {
    let url = API.MAL.SEARCH_ANIME
    return await callFetch(url, params)
  },

  GetNewAnime: async (params) => {
    let url = API.MAL.GET_NEW_ANIME
    let options = params
    options.sfw = true
    return await callFetch(url, options)
  },

  GetTopAnime: async (params) => {
    let url = API.MAL.GET_NEW_ANIME
    return await callFetch(url, params)
  },

  GetRandomAnime: async () => {
    let url = API.MAL.GET_RANDOM_ANIME
    return await callFetch(url)
  },

  GetNewSeasonAnime: async (params) => {
    let url = API.MAL.GET_THIS_SEASON_ANIME
    return await callFetch(url, params)
  },

  GetAnimeGenres: async () => {
    let url = API.MAL.GET_ALL_GENRES
    return await callFetch(url)
  },

  //
  //
  // Fetching Anilist API
  //
  //

  // Top Anime by score/popularity
  GetTopAnimeAni: async () => {
    return await (
      await (
        await fetch(`${aniUrl}/anime?formats=0,2&status=0&nsfw=false`)
      ).json()
    ).data.documents;
  },

  // Random Anime
  GetRandomAnimeAni: async () => {
    return await (
      await (await fetch(`${aniUrl}/random/anime/1`)).json()
    ).data[0];
  },

  // specific anime
  GetAnimeAni: async (animeId) => {
    // console.log(`${aniUrl}/anime?mal_id=${animeId}`);
    return await (
      await (await fetch(`${aniUrl}/anime?mal_id=${animeId}&nsfw=false`)).json()
    ).data.documents[0];
  },

  //Whole Genre database
  GetGenredAnime: async (genre) => {
    return await (
      await (
        await fetch(`${aniUrl}/anime?formats=0,2&genres=${genre}&nsfw=false`)
      ).json()
    ).data.documents;
  },

  callGraphQL: async(query, variables) => {

    console.log("callGraphQL query:", query);
    console.log("callGraphQL query type:", typeof query);

    let options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify({
        query: typeof query === 'string' ? query : print(query),
        variables: variables
      })
    };
  
    try {

      let fetchingAni = await fetch(aniGraphQLUrl, options)
      console.log("inside callGraphQL", fetchingAni)

      let json = await fetchingAni.json()
      console.log("inside callGraphQL data.json", json)

      if (json.errors) {

        console.log("inside callGraphQL json.errors", json.errors[0])
        throw (json.errors[0])

      } else if (json.data) {

        console.log("inside callGraphQL json.data", json.data)
        return json.data

      } 
      
    } catch(e) {

      console.log("inside callGraphQL  Error:", e);
      throw e

    }
  }
};

export default fetchingData;
