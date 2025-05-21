# AnFlix

[AnFlix](https://anflix.netlify.app/) is an anime database website which connects information from both MyAnimeList and AniList page. It utilizes MyAnimeList (MAL) unofficial API: [Jikan](https://jikan.moe/) and [AniList official API](https://anilist.gitbook.io/anilist-apiv2-docs/). 

## Background

Anime fans rely heavily on anime database sites such as MAL and AniList to look up more information about their favorite series/movies.

MAL has always been the more popular of the two as it has been around for longer and has forums in which fans can use to discuss and interact with each other about their favorite anime. Unfortunately, the site's design is quite dated, difficult to navigate and not mobile friendly. 

AniList takes care of all of the above concerns but their database is not as comprehensive as MAL. Their search engine does not cover both English and Japanese titles which makes searching for a specific anime a hassle.

AnFlix is build to bridge the gap between the two anime database sites with the help of the design, which is heavily influenced by the globally popular online streaming service platform, Netflix and usage of both sites' APIs. Thus, the name AnFlix.  

## Features

- Header with randomized anime
- Homepage that automatically chooses 5 anime genres to showcase to the users and display its top 20 animes 
- Search engine that works to find animes written both in English and Romanized Japanese
- Find popular animes of all times, will be aired or currently airing based on MAL rating  
- Find animes by series/movies via alphabets

## Screenshots

![Randomized Header](images/header-desktop.PNG?raw=true)
![Genres](images/genres-desktop.PNG?raw=true)
![Anime Page](images/anime-desktop.PNG?raw=true)
![New and Popular](images/new-popular-desktop.PNG?raw=true)

## Tech

AnFlix uses a number of open source projects to work properly:

- [ReactJS](https://reactjs.org/) - JS library 
- [Slick Carousel](https://react-slick.neostack.com/) - For carousel feature
- [Styled Components](https://styled-components.com/) - For styles
- [React Router](https://reactrouter.com/) -  For client-side routing
- [React Select](https://react-select.com/home) - More Flexible Select Input Control
- [React Icons](https://react-icons.github.io/react-icons/) - Icons
