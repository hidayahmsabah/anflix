import styled from "styled-components";
import { Link } from "react-router-dom";

export const Wrapper = styled(Link)`
  display: inline-block;
  text-decoration: none;
  padding-bottom: 1em;
  min-height: 350px;
  border-radius: 5%;
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
  transition: all 0.15s ease-in;

  @media (min-width: 768px) {
    &:hover {
      box-shadow: 0px 5px 10px 3px var(--orange);
    }

    &:hover > * {
      font-weight: 400;
      // text-shadow: 0px 3px 2px var(--orange);
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
