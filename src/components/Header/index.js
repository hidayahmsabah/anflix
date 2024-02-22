import React, { useRef } from "react";
import { Wrapper, HeaderContent } from "./Header.styles";
// import { GetTopAnime } from '../../API';

const Header = ({ header, width, extra }) => {
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

  plotWords(
    extra ? extra.synopsis : header.descriptions.en && header.descriptions.en
  );

  return (
    <>
      <Wrapper $header={header}>
        <HeaderContent to={`/anime/${header ? header.mal_id : ""}`}>
          <h3>
            {header.titles.en
              ? header.titles.en
              : extra
              ? extra.title_english
                ? extra.title_english
                : extra.title
              : ""}
          </h3>
          <p ref={paraRef}></p>
        </HeaderContent>
      </Wrapper>
    </>
  );
};

export default Header;
