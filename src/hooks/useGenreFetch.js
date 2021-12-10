import { useState, useEffect } from 'react';
import { genres } from '../data/genres';
import fetchingData from '../API';

const randomNum = [];

while (randomNum.length < 5) {
    let num = Math.floor(Math.random() * genres.length);
    randomNum.indexOf(num) === -1 && randomNum.push(num);
}

const selectedGenre = randomNum.map(el => genres[el]);

// console.log(selectedGenre);

export function useGenreFetch() {
    const [allGenres, setAllGenres] = useState([]);
    const [error, setError] = useState(false);

    useEffect(() => {

        // get genred animes
        selectedGenre.forEach(genre => {
            const fetchGenAnime = async () => {
                try {
                    setError(false);
                    const genredAnime = await fetchingData.GetGenredAnime(genre);
                    const slicedAnime = genredAnime.length > 20 ? genredAnime.slice(0, 20) : genredAnime;
                    setAllGenres(prev => (
                        [...prev, { genre: genre, results: slicedAnime }]
                    ))
                }
                catch {
                    setError(true);
                }
            }
            fetchGenAnime()
        })

    }, [])


    return { allGenres, error };

}