import Circle from "../Circle";
import Loading from "../Loading";
import { Wrapper, Content } from "./Grid.styles";

const Grid = ({ key, anime, prev }) => {
  if (!anime) return <Loading />;

  return (
    <Wrapper key={key}>
      <Content to={`/anime/${anime.mal_id}`} $blurBg={anime.images.jpg.image_url} state={{ ...prev }}>
        <div className="image-holder">
          <div className="background-blur">
            <img
              src={anime.images.jpg.image_url}
              alt={`${anime.title_english ?? anime.title} cover`}
              loading="lazy"
            />
          </div>
        </div>
        <div className="info-holder">
          {anime.score && (
            <Circle
              $perc={anime.score}
              rating="/10"
              $bg={
                anime.score < 3 ? "red" : anime.score < 7 ? "orange" : "green"
              }
            />
          )}
          <span>{anime.title_english ?? anime.title}</span>
        </div>
      </Content>
    </Wrapper>
  );
};

export default Grid;
