import styled from "styled-components";
import { Link } from "react-router-dom";

export const Wrapper = styled.div`
  transition: all 0.3s ease-in-out;
  display: flex;
  flex-direction: column;

  :hover {
    transform: translateY(-3%);
    letter-spacing: 0.03em;
  }
`;

export const Content = styled(Link)`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  text-decoration: none;
  color: var(--white);

  .image-holder {
    /* background: var(--black); */
    padding-bottom: 0.3em;
  }

  .info-holder {
    display: flex;
    align-items: center;
  }

  img {
    width: 100%;
    border-radius: 0.5em;
  }

  span {
    display: inline-block;
    width: 100%;
    padding-top: 1em;
    text-align: center;
    font-size: 0.9em;
  }

  :hover {
    color: var(--orange);
  }

  @media screen and (max-width: 450px) {
    .info-holder > div:first-child {
      background-color: teal;
      display: none;
    }
  }
`;
