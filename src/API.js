const malUrl = "https://api.jikan.moe/v3";
const aniUrl = "https://api.aniapi.com/v1";

const fetchingData = {
  // Fetching Jikan API

  // specific anime
  GetAnimeMAL: async (animeId) => {
    // console.log(`${malUrl}/anime/${animeId}`);
    return await await (await fetch(`${malUrl}/anime/${animeId}`)).json();
  },

  // anime's seiyuus
  GetAnimeSeiyuu: async (animeId) => {
    console.log(`${malUrl}/anime/${animeId}/characters_staff`);
    return await (
      await (await fetch(`${malUrl}/anime/${animeId}/characters_staff`)).json()
    ).characters;
  },

  // searching query
  GetSearchAnime: async (searchTerm, page) => {
    console.log(`${malUrl}/search/anime?q=${searchTerm}&page=${page}`);
    return await (
      await fetch(`${malUrl}/search/anime?q=${searchTerm}&page=${page}`)
    ).json();
  },

  GetSearchLetter: async (letter, type, page) => {
    // console.log(`${malUrl}/search/anime?q=${searchTerm}&page=${page}`);
    return await (
      await fetch(
        `${malUrl}/search/anime?q=&letter=${letter}&type=${type}&page=${page}`
      )
    ).json();
  },

  GetNewAnime: async (subtype) => {
    // console.log(`${malUrl}/top/anime/1/${subtype}`);
    return await (await fetch(`${malUrl}/top/anime/1/${subtype}`)).json();
  },
  // Fetching Anilist API

  // Top Anime by score/popularity
  GetTopAnime: async () => {
    return await (
      await (
        await fetch(`${aniUrl}/anime?formats=0,2&status=0&nsfw=false`)
      ).json()
    ).data.documents;
  },

  // Random Anime
  GetRandomAnime: async () => {
    return await (
      await (await fetch(`${aniUrl}/random/anime/1`)).json()
    ).data[0];
  },

  // specific anime
  GetAnimeAni: async (animeId) => {
    // console.log(`${aniUrl}/anime?mal_id=${animeId}`);
    return await (
      await (await fetch(`${aniUrl}/anime?mal_id=${animeId}`)).json()
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
};

export default fetchingData;
