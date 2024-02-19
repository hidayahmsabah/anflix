import styled from "styled-components";
import { Link } from "react-router-dom";

export const Wrapper = styled.header`
  /* margin-top: -7vh; */
  height: 500px;
  position: relative;
  background: linear-gradient(
      to top,
      rgba(20, 20, 20, 0) 40%,
      rgba(20, 20, 20, 0.55) 100%
    ),
    center / cover no-repeat
      url(${({ $header }) =>
        !$header
          ? ""
          : $header.banner_image
          ? $header.banner_image
          : $header.cover_image});
  transition: all 0.5s ease;
  animation: animateHeroImage 2s;

  @keyframes animateHeroImage {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  @media screen and (max-width: 480px) {
    height: 400px;
    background: linear-gradient(
        to top,
        rgba(20, 20, 20, 0) 40%,
        rgba(20, 20, 20 0.55) 100%
      ),
      bottom 30% center / cover no-repeat
        url(${({ $header }) => (!$header ? "" : $header.cover_image)});
  }
`;

export const HeaderContent = styled(Link)`
  display: inline-block;
  text-decoration: none;
  background: linear-gradient(
    to bottom,
    rgba(20, 20, 20, 0) 5%,
    rgba(20, 20, 20, 1) 100%
  );
  height: 50%;
  width: 100%;
  position: absolute;
  bottom: 0;
  left: 0;
  color: var(--white);
  text-align: left;
  z-index: 100;
  padding: 0 1em 1em;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;

  h3 {
    font-weight: bold;
    margin-bottom: 0.5em;
    transition: all 0.5s ease;
    font-size: 2em;
    letter-spacing: 0.05em;
  }

    p {
      line-height: 1.3em;
      letter-spacing: 0.03em;
      font-size: 1.1em;
    }

    @media screen and (max-width: 480px) {
      h3{
        text-align: center;
        font-size: 1em;
        margin-bottom: 0;
        opacity: 0.7;
      }
    }
  }
`;
