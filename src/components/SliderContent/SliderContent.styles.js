import styled from "styled-components";
import { Link } from "react-router-dom";

export const Wrapper = styled(Link)`
  display: inline-block;
  text-decoration: none;
  padding-bottom: 1em;
  min-height: 200px;
  background: linear-gradient(
      to bottom,
      rgba(20, 20, 20, 0) 10%,
      rgba(20, 20, 20, 0.7) 100%
    ),
    center / cover no-repeat url(${({ $cover }) => $cover});
  display: flex;
  align-items: flex-end;
  justify-content: center;
  margin: 0 0 0 1em;
  transition: all 0.3s ease-in;

  @media (hover: hover) and (pointer: fine) {
    &:hover {
      box-shadow: 0px 5px 10px 3px var(--orange);
      background: linear-gradient(
          to bottom,
          rgba(20, 20, 20, 0) 0%,
          rgba(20, 20, 20, 0.7) 0%
        ),
        center / cover no-repeat url(${({ cover }) => cover});
    }

    &:hover > div {
      font-weight: 400;
      text-shadow: 0px 3px 2px var(--orange);
    }
  }

  @media screen and (max-width: 768px) {
    :hover {
      box-shadow: none;
      background: linear-gradient(
          to bottom,
          rgba(20, 20, 20, 0) 10%,
          rgba(20, 20, 20, 0.7) 100%
        ),
        center / cover no-repeat url(${({ cover }) => cover});
    }

    :hover > div {
      text-shadow: none;
    }
  }
`;

export const Content = styled.div`
  height: 100%;
  text-align: center;
  color: var(--white);
  /* letter-spacing: 0.1em; */
  text-shadow: 0px 3px 2px var(--black);
`;
