import { useEffect } from "react";
import { useNavigate } from "react-router";
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

const AnimeInfo = ({ anime, seiyuu }) => {

  const navigate = useNavigate()

  let properCase = (string, type) => {
    let  newString = string.slice(0, 1).toUpperCase() + string.slice(1).toLowerCase()

    return newString
  }

  if (!anime) return <Loading />;
  return (
    <Wrapper>
      <Content>
        <Back/>
        <Head>
          <h2>
            {anime?.mal?.title_english ?? anime?.mal?.title ?? anime?.anl?.title?.english ?? anime?.anl?.title?.romaji}
          </h2>
          <div className="scores">
            {anime?.anl?.meanScore && (
              <div className="circles">
                <Circle
                  $perc={anime?.anl.meanScore}
                  rating="%"
                  $bg={
                    anime?.anl.meanScore < 33
                      ? "red"
                      : anime?.anl.meanScore < 67
                      ? "orange"
                      : "green"
                  }
                />
                <a
                  href={`https://anilist.co/anime/${anime?.anl?.id}`}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="sources"
                >
                  AniList
                </a>
              </div>
            )}
            {anime?.mal?.score && (
              <div className="circles">
                <Circle
                  $perc={anime?.mal.score}
                  rating="/10"
                  $bg={
                    anime?.mal.score < 3.3
                      ? "red"
                      : anime?.mal.score < 6.7
                      ? "orange"
                      : "green"
                  }
                />
                <a
                  href={`https://myanimelist.net/anime/${anime?.mal.mal_id}`}
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
            src={anime?.mal?.images?.jpg?.large_image_url ?? anime?.anl?.coverImage?.extraLarge}
            fetchpriority={"high"}
            loading={"eager"}
            height={400}
            width={300}
            alt={`${
              anime?.mal?.title_english ?? anime?.anl?.title?.english
            } cover`}
          ></img>
          <Information
            $color={
              anime?.mal?.rating && anime?.mal.rating[0] === "R"
                ? "red"
                : "green"
            }
          >
            <div className="info">
              <div className="rating">
                {anime?.mal?.rating &&
                  anime?.mal.rating.slice(0, anime?.mal.rating.indexOf(" "))}
              </div>
              <div className="others">
                <div>
                  {
                    anime?.mal ? [
                      anime?.mal.type && <span> {`${anime?.mal.type}`} </span>,
                      anime?.mal.type && (anime?.mal.status || anime?.mal.episodes) && <span className="break">|</span>,
                      anime?.mal.status && <span> {`${anime?.mal.status}`} </span>,
                      anime?.mal.status && (anime?.mal.episodes || (anime?.mal.season && anime?.mal.year)) && <span className="break">|</span>,
                      anime?.mal.episodes && <span> {`${anime?.mal.episodes} episode(s)`} </span>,
                      anime?.mal.episodes && anime?.mal.season && <span className="break">|</span>,
                      anime?.mal.season && anime?.mal.year && <span> {`${properCase(anime?.mal.season)} ${anime?.mal.year}`} </span>
                    ] :
                    anime?.anl && [
                      anime?.anl.format && <span> {`${anime?.anl.format}`} </span>,
                      anime?.anl.format && (anime?.anl.status || anime?.anl.episodes) && <span className="break">|</span>,
                      anime?.anl.status && <span> {`${anime?.anl.status}`} </span>,
                      anime?.anl.status && (anime?.anl.episodes || (anime?.anl.season && anime?.anl.seasonYear)) && <span className="break">|</span>,
                      anime?.anl.episodes && <span> {`${anime?.anl.episodes} episode(s)`} </span>,
                      anime?.anl.episodes && anime?.anl.season && <span className="break">|</span>,
                      anime?.anl.season && anime?.anl.seasonYear && <span> {`${properCase(anime?.anl.season)} ${anime?.anl.seasonYear}`} </span>
                    ]
                  }
                </div>

                <ul>
                  {(anime?.mal?.genres ?? []).map((el, index) => {
                        return (
                          <li
                            key={index}
                            className="mal_genres"
                            onClick={() => navigate(`/search/${el.name}`, { state: { params: { genres: [el.mal_id] }}})}
                          >
                            {el.name}
                          </li>
                        );
                      })
                    ?? (anime?.anl?.genres ?? []).map((el, index) => {
                        return (
                          <li
                            key={index}
                            // onClick={() => navigate(`/search/`, { state: { params: { genres: [el] }}})}
                          >
                            {el}
                          </li>
                        );
                      })}
                </ul>
              </div>
            </div>
            <p>{anime?.mal?.synopsis ?? anime?.anl?.description}</p>
          </Information>
        </ContentExtra>
      </Content>
    </Wrapper>
  );
};

export default AnimeInfo;
