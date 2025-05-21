import { useRef } from "react";
import { Wrapper, HeaderContent } from "./Header.styles";
// import { GetTopAnime } from '../../API';

const Header = ({ header, width }) => {
  const paraRef = useRef();

  function addDots(len, text) {
    if (len > text.length) {
      return `${text}...`;
    } else {
      return text;
    }
  }

  function plotWords(source) {
    if (paraRef && paraRef.current) {
      // console.log(paraRef);
      if (!source) {
        paraRef.current.innerHTML = "";
      } else {
        const len = source.length;
        if (width < 480) {
          paraRef.current.innerHTML = "";
        } else if (width < 768) {
          paraRef.current.innerHTML = addDots(len, source.slice(0, 250));
        } else {
          paraRef.current.innerHTML = addDots(len, source.slice(0, 500));
        }
      }
    }
  }

  plotWords(header?.synopsis);

  return (
    <>
      <Wrapper $header={header?.images?.webp?.large_image_url}>
        <HeaderContent to={`/anime/${header?.mal_id}`}>
          <h3>{header?.title_english ?? header?.title}</h3>
          <p ref={paraRef}></p>
        </HeaderContent>
      </Wrapper>
    </>
  );
};

export default Header;
