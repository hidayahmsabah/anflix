import styled from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const Main = styled.div`
  padding: 1em 0;
  background: var(--black);
  animation: Fade 1s;

  &.no-header {
    padding-top: 10vh;
  }

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
    overflow: visible;
  }

  .slick-prev {
    left: 0;
  }

  .slick-next {
    right: 0;
  }

  .slick-next,
  .slick-prev {
    // background: var(--grey);
    // opacity: 0;
    z-index: 100;
    height: 100%;
    width: 5%;
    transition: all 0.2s ease-out;

    &::before, &::after {
      transition: all 0.2s ease-out;
    }

    &:hover {
      width: 8%;
      opacity: 0.6;
      background: var(--grey);

      &::before, &::after {
        font-size: 27px;
        color: var(--less-orange)
      }
    }
  }

  .slick-dots {
    height: 15%;
    position: absolute;
    text-align: right;
    right: 3%;
    top: -10%;

    li {
      margin: 0 5px 0 0;
    }

    li button {
      padding: 0;
    }

    li button::before {
      content: "";
      background-color: var(--grey);
      opacity: 1;
      display: inline-block;
      width: 100%;
      height: 3px;
    }

    li.slick-active button::before {
      background-color: var(--less-orange);
    }
  }

  @media (pointer: coarse) {
    .slick-next,
    .slick-prev {
      width: 0%;

      &::before {
        font-size: 0;
      }
    }
  }
`;
