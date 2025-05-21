import styled from "styled-components";

export const Wrapper = styled.div`
  background: var(--black);
  padding: 10vh 1em 0;
  flex-grow: 1;

  h2 {
    color: var(--white);
    padding: 0.5em 0 0.5em 1em;

  }

  .load-more {
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

    &:hover:not(.search-btn):not(.filterButton) {
      color: var(--orange);
    }
  }

  .criteria {
    font-size: 0.9em;
    display: inline-block;
    padding: 3px 15px;
    margin: 0 10px 0 0;
    background-color: var(--white);
    border-radius: 30px;
    color: var(--orange);
  }

  @media screen and (max-width: 450px) {
    .load-more {
      font-size: 0.7em;
    }

    .criteria {
      font-size: 0.8em;
      padding: 3px 10px;
    }
  }
`;

export const Content = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  grid-gap: 3rem;
  padding: 1em 1em 3em;
  color: var(--white);

  @media screen and (max-width: 450px) {
    grid-gap: 1rem;
  }
`;
