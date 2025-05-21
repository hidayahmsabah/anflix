import styled from "styled-components";
import { Link } from "react-router-dom";

export const Wrapper = styled.header`
  /* margin-top: -7vh; */
  flex-grow: 1;
  height: 600px;
  position: relative;
  background: linear-gradient(
      to top,
      rgba(20, 20, 20, 0) 40%,
      rgba(20, 20, 20, 1) 100%
    ),
    50% 40% / cover no-repeat
      url(${({ $header }) =>
        !$header
          ? ""
          : $header});
  transition: all 0.5s ease;

  @media screen and (max-width: 480px) {
    height: 500px;
    background: linear-gradient(
        to top,
        rgba(20, 20, 20, 0) 40%,
        rgba(20, 20, 20 0.55) 100%
      ),
      50% 40% / cover no-repeat
        url(${({ $header }) => (!$header ? "" : $header)});
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
  height: 80%;
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
