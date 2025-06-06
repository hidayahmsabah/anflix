import SliderContent from "../SliderContent";
import { Main, SliderStyled } from "./Sliders.styles";
import Loading from "../Loading";

const Sliders = ({ title, list, className }) => {
  // console.log(className);
  if (!list) return <Loading />;

  const slidesLen = list && (list.length > 4 ? 5 : list.length);

  const settings = {
    dots: true,
    swipeToSlide: true,
    // lazyLoad: true,
    slidesToShow: slidesLen,
    slidesToScroll: slidesLen,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          dots: true,
          swipeToSlide: true,
          lazyLoad: true,
          slidesToShow: slidesLen > 3 ? 4 : slidesLen,
          slidesToScroll: slidesLen > 3 ? 4 : slidesLen,
        },
      },
      {
        breakpoint: 768,
        settings: {
          dots: true,
          swipeToSlide: true,
          lazyLoad: true,
          slidesToShow: slidesLen > 2 ? 3 : slidesLen,
          slidesToScroll: slidesLen > 2 ? 3 : slidesLen,
        },
      },
      {
        breakpoint: 450,
        settings: {
          swipeToSlide: true,
          lazyLoad: true,
          slidesToShow: slidesLen > 1 ? 2 : slidesLen,
          slidesToScroll: slidesLen > 1 ? 2 : slidesLen,
        },
      },
    ],
  };

  return (
    <Main className={className}>
      <h2>{title}</h2>
      <SliderStyled {...settings}>
        {list &&
          list.map((anime) => {
            return (
              <SliderContent
                key={anime.idMal ?? anime.mal_id}
                text={anime.title?.english ?? anime.title?.romaji ?? anime.title_english ?? anime.title}
                cover={anime.coverImage?.large ?? anime.images?.webp?.large_image_url}
                id={anime.idMal ?? anime.mal_id}
              />
            );
          })}
      </SliderStyled>
    </Main>
  );
};

export default Sliders;
