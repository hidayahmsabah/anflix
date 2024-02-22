import styled from "styled-components";

export const Wrapper = styled.div`
  background: var(--black);
  padding: 10vh 1em 0;

  h2 {
    color: var(--white);
    /* padding-left: 1em; */

    i {
      color: var(--orange);
    }
  }

  button {
    background-color: var(--grey);
    color: var(--white);
    padding: 0.75em 2em;
    border-radius: 1em;
    border: none;
    font-size: 1em;
    cursor: pointer;
    transition: color 0.5s ease;
    display: block;
    text-align: center;
    margin: 1em auto 0;

    :hover:not(.search-btn):not(.filterButton) {
      color: var(--orange);
    }
  }

  @media screen and (max-width: 450px) {
    button {
      font-size: 0.7em;
    }
  }
`;

export const Content = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  grid-gap: 3rem;
  padding: 2em 0;
  color: var(--white);

  @media screen and (max-width: 450px) {
    grid-gap: 1rem;
  }
`;
