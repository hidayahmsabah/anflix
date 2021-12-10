import React from "react";
import Loading from "../Loading";
import {
  Wrapper,
  Content,
  Head,
  ContentExtra,
  Information,
} from "./AnimeInfo.styles";
import Circle from "../Circle";
import { seasonPeriod } from "../../data/genres";

const AnimeInfo = ({ anime, addInfo, seiyuu }) => {
  if (!anime || !addInfo) return <Loading />;

  // console.log(addInfo);
  // console.log(anime);

  return (
    <Wrapper>
      <Content>
        <Head>
          <h2>
            {addInfo.title_english ? addInfo.title_english : addInfo.title}
          </h2>
          <div className="scores">
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
            <div className="circles">
              <Circle
                perc={addInfo.score}
                rating="/10"
                bg={
                  anime.score < 3 ? "red" : anime.score < 7 ? "orange" : "green"
                }
              />
              <a
                href={`https://myanimelist.net/anime/${anime.mal_id}`}
                target="_blank"
                rel="noreferrer noopener"
                className="sources"
              >
                MAL
              </a>
            </div>
          </div>
        </Head>

        <ContentExtra>
          <img
            src={anime.cover_image}
            alt={`${addInfo.title_english} cover from Anilist`}
          ></img>
          <Information color={addInfo.rating[0] === "R" ? "red" : "green"}>
            <div className="info">
              <div className="rating">
                {addInfo.rating.slice(0, addInfo.rating.indexOf(" "))}
              </div>
              <div className="others">
                <span>
                  {addInfo.type} | {addInfo.status} | {addInfo.episodes}{" "}
                  episodes(s) |{" "}
                  {addInfo.premiered
                    ? addInfo.premiered
                    : `${
                        Object.keys(seasonPeriod)[anime.season_period][0] +
                        Object.keys(seasonPeriod)
                          [anime.season_period].slice(1)
                          .toLowerCase()
                      } ${anime.season_year}`}
                </span>

                <ul>
                  {addInfo.genres.map((el, index) => {
                    return <li key={index}>{el.name}</li>;
                  })}
                </ul>
              </div>
            </div>
            <p>{addInfo.synopsis}</p>
          </Information>
        </ContentExtra>
      </Content>
    </Wrapper>
  );
};

export default AnimeInfo;
