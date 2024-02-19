import React from "react";
import Circle from "../Circle";
import Loading from "../Loading";
import { Wrapper, Content } from "./Grid.styles";

const Grid = ({ anime }) => {
  if (!anime) return <Loading />;

  return (
    <Wrapper>
      <Content to={`/anime/${anime.mal_id}`}>
        <div className="image-holder">
          <img
            src={anime.image_url}
            alt={`${anime.title} cover`}
            loading="lazy"
          />
        </div>
        <div className="info-holder">
          {anime.end_date && (
            <Circle
              perc={anime.score}
              rating="/10"
              bg={
                anime.score < 3 ? "red" : anime.score < 7 ? "orange" : "green"
              }
            ></Circle>
          )}
          <span>{anime.title}</span>
        </div>
      </Content>
    </Wrapper>
  );
};

export default Grid;
