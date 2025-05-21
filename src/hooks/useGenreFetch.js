import { useState, useEffect } from 'react';
import { genres } from '../data/genres';
import fetchingData from '../API';

const randomNum = [];
let allMALGenres = []
let selectedGenre = []
const tabNums = 3

// const selectedGenre = randomNum.map(el => genres[el]);

// console.log(selectedGenre);

// export function useGenreFetch() {
//     const [allGenres, setAllGenres] = useState([]);
//     const [error, setError] = useState(false);

//     useEffect(() => {

//         // get genred animes
//         selectedGenre.forEach(genre => {
//             const fetchGenAnime = async () => {
//                 try {
//                     setError(false);
//                     const genredAnime = await fetchingData.GetGenredAnime(genre);
//                     const slicedAnime = genredAnime.length > 20 ? genredAnime.slice(0, 20) : genredAnime;
//                     setAllGenres(prev => (
//                         [...prev, { genre: genre, results: slicedAnime }]
//                     ))
//                 }
//                 catch {
//                     setError(true);
//                 }
//             }
//             fetchGenAnime()
//         })

//     }, [])


//     return { allGenres, error };

// }

async function getGenres() {
    const getMALGenres = await fetchingData.GetAnimeGenres();
    allMALGenres = getMALGenres.data

    console.log(allMALGenres)

    while (randomNum.length < tabNums) {
        if (allMALGenres.length > 0) {
            let num = Math.floor(Math.random() * allMALGenres.length);
            randomNum.indexOf(num) === -1 && randomNum.push(num);
        }
        
    }

    console.log(randomNum)

    selectedGenre = randomNum.map(el => allMALGenres[el]);

    console.log(selectedGenre)
}

export async function useGenreFetch() {
    const [allGenres, setAllGenres] = useState([]);
    const [error, setError] = useState(false);

    useEffect(async() => {
        await getGenres()

        // get genred animes
        selectedGenre.length === tabNums && 
        selectedGenre.forEach(genre => {
            const fetchGenAnime = async () => {
                try {
                    setError(false);
                    const genredAnime = await fetchingData.GetSearchAnime({"genreId": genre.mal_id, "limit": 15});
                    console.log("genredAnime", genredAnime)
                    // const slicedAnime = genredAnime.length > 20 ? genredAnime.slice(0, 20) : genredAnime;
                    setAllGenres(prev => (
                        [...prev, { genre: genre, results: genredAnime }]
                    ))
                }
                catch {
                    setError(true);
                }
            }

            setTimeout(() => {
                fetchGenAnime()
            }, 1000)

            return { allGenres, error };
        })

    }, [])

}