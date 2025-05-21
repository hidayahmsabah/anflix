import styled from "styled-components";

export const Wrapper = styled.div`
  padding-top: 7vh;
  flex-grow: 1;
  background-color: var(--black);

  .load-more {
    background-color: var(--grey);
    color: var(--white);
    padding: 0.75em 2em;
    border-radius: 1em;
    border: none;
    font-size: 1em;
    margin: 0 auto;
    display: block;
    text-align: center;
    cursor: pointer;
    transition: color 0.5s ease;

    &:hover {
      color: var(--orange);
    }
  }

  @media screen and (max-width: 450px) {
    .load-more {
      font-size: 0.7em;
    }
  }
`;

export const Content = styled.div`
  ul {
    list-style-type: none;
    display: flex;
    flex-flow: row wrap;
    justify-content: space-evenly;
    align-items: center;
    /* position: sticky;
    top: 7vh; */
    background-color: var(--black);
    padding-bottom: 1em;
    z-index: 100;
    overflow-x: hidden;

    li {
      color: var(--white);
      font-size: 1.2em;
      transition: transform 0.5s ease;
      padding: 0.5em;

      &:hover {
        color: var(--orange);
        cursor: pointer;
        transform: translateY(-5%);
      }
    }

    .active {
      color: var(--orange);
      font-size: 1.7em;
      font-weight: 600;
    }
  }

  @media screen and (max-width: 768px) {
    ul {
      li {
        font-size: 1em;
      }

      .active {
        font-size: 1.3em;
      }
    }
  }
`;

export const GridHolder = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  grid-gap: 3rem;
  padding: 1em 1em 3em;
  color: var(--white);

  @media screen and (max-width: 450px) {
    grid-gap: 1rem;
  }
`;
