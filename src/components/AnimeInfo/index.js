import React from "react";
import {
  Wrapper,
  Content,
  Head,
  ContentExtra,
  Information,
} from "./AnimeInfo.styles";
import Loading from "../Loading";
import Circle from "../Circle";
import Back from "../Back";
import { seasonPeriod } from "../../data/genres";
// import { useNavigate } from "react-router";

const AnimeInfo = ({ anime, addInfo, seiyuu }) => {
  // const navigate = useNavigate();
  if (!anime && !addInfo) return <Loading />;

  // function searchGenre(id) {
  //   navigate(`/search/genre=${id}`);
  // }

  return (
    <Wrapper>
      <Content>
        <Back />
        <Head>
          <h2>
            {addInfo
              ? addInfo.title_english
                ? addInfo.title_english
                : addInfo.title
              : anime && anime.titles.en}
          </h2>
          <div className="scores">
            {anime && (
              <div className="circles">
                <Circle
                  perc={anime.score}
                  rating="%"
                  bg={
                    anime.score < 33
                      ? "red"
                      : anime.score < 67
                      ? "orange"
                      : "green"
                  }
                />
                <a
                  href={`https://anilist.co/anime/${anime.anilist_id}`}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="sources"
                >
                  AniList
                </a>
              </div>
            )}
            {addInfo && (
              <div className="circles">
                <Circle
                  perc={addInfo.score}
                  rating="/10"
                  bg={
                    addInfo.score < 3.3
                      ? "red"
                      : addInfo.score < 6.7
                      ? "orange"
                      : "green"
                  }
                />
                <a
                  href={`https://myanimelist.net/anime/${addInfo.mal_id}`}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="sources"
                >
                  MAL
                </a>
              </div>
            )}
          </div>
        </Head>

        <ContentExtra>
          <img
            src={anime ? anime.cover_image : addInfo && addInfo.image_url}
            alt={`${
              addInfo ? addInfo.title_english : anime && anime.titles.en
            } cover`}
          ></img>
          <Information
            color={
              addInfo && addInfo.rating && addInfo.rating[0] === "R"
                ? "red"
                : "green"
            }
          >
            <div className="info">
              <div className="rating">
                {addInfo &&
                  addInfo.rating.slice(0, addInfo.rating.indexOf(" "))}
              </div>
              <div className="others">
                {addInfo && (
                  <span>
                    {addInfo.type && `${addInfo.type}`}
                    {addInfo.status && `  |  ${addInfo.status}`}
                    {addInfo.episodes && `  |  ${addInfo.episodes} episode(s)`}
                    {addInfo.premiered
                      ? `  |  ${addInfo.premiered}`
                      : anime &&
                        `  |  ${
                          Object.keys(seasonPeriod)[anime.season_period][0] +
                          Object.keys(seasonPeriod)
                            [anime.season_period].slice(1)
                            .toLowerCase()
                        } ${anime.season_year}`}
                  </span>
                )}

                <ul>
                  {addInfo
                    ? addInfo.genres.map((el, index) => {
                        return (
                          <li
                            key={index}
                            // onClick={() => searchGenre(el.mal_id)}
                          >
                            {el.name}
                          </li>
                        );
                      })
                    : anime.genres.map((el, index) => {
                        return (
                          <li
                            key={index}
                            // onClick={() => searchGenre(el.mal_id)}
                          >
                            {el.name}
                          </li>
                        );
                      })}
                </ul>
              </div>
            </div>
            <p>{addInfo ? addInfo.synopsis : anime && anime.descriptions.en}</p>
          </Information>
        </ContentExtra>
      </Content>
    </Wrapper>
  );
};

export default AnimeInfo;
