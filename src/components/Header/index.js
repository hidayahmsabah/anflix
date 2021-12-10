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

  function plotWords() {
    if (extra && paraRef && extra.synopsis) {
      const len = extra.synopsis.length;
      if (width < 480) {
        paraRef.current.innerHTML = "";
      } else if (width < 768) {
        paraRef.current.innerHTML = addDots(len, extra.synopsis.slice(0, 250));
      } else {
        paraRef.current.innerHTML = addDots(len, extra.synopsis.slice(0, 500));
      }
    } else {
      return "";
    }
  }

  plotWords();

  return (
    <>
      <Wrapper header={header}>
        <HeaderContent to={`/${header ? header.mal_id : ""}`}>
          <h3>
            {extra
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
