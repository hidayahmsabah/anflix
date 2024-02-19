import styled from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const Main = styled.div`
  padding: 1em 0;
  background: var(--black);
  animation: Fade 2s;

  @keyframes Fade {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  h2 {
    font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
      "Lucida Sans", Arial, sans-serif;
    padding: 0 0.5em 1em;
    color: var(--white);
  }
`;

export const SliderStyled = styled(Slider)`
  position: relative;
  padding-right: 1em;
  /* overflow-x: scroll; */

  .slick-list {
    padding: 1em 0;
  }

  .slick-prev {
    left: 0;
  }

  .slick-next {
    right: 0;
  }

  .slick-next,
  .slick-prev {
    background: var(--grey);
    opacity: 0;
    z-index: 100;
    height: 100%;
    width: 5%;
    transition: all 0.3s ease-out;

    &:hover {
      opacity: 0.6;
      background: var(--grey);
    }
  }

  .slick-dots {
    height: 15%;
    position: absolute;
    text-align: right;
    right: 3%;
    top: -15%;

    li button::before {
      color: var(--grey);
      opacity: 1;
    }

    li.slick-active button::before {
      color: var(--orange);
    }
  }

  @media screen and (max-width: 768px) {
    .slick-next,
    .slick-prev {
      width: 10%;
    }
  }

  @media screen and (max-width: 425px) {
    .slick-dots {
      visibility: hidden;
    }

    .slick-next,
    .slick-prev {
      width: 15%;
    }
  }
`;
