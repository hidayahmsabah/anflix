import styled from "styled-components";

export const Wrapper = styled.div`
  min-height: 100vh;
  padding-top: 10vh;
  background-color: var(--black);
  display: flex;
  flex-direction: column;
`;

export const Tab = styled.div`
  position: sticky;
  top: max(6.8vh, 44px);
  background-color: var(--black);
  z-index: 100;

  ul {
    list-style-type: none;
    display: flex;
    justify-content: space-around;
    align-items: center;
    border-bottom: thin solid var(--grey);
    /* min-height: 44px; */

    li {
      color: var(--grey);
      padding: 0.5em 1em;
      cursor: pointer;
      transition: all 0.3s ease;

      :hover {
        color: var(--white);
      }

      &.active {
        color: var(--white);
        letter-spacing: 0.1em;
        padding: 0.5em 2em;
        border-radius: 0.5em 0.5em 0 0;
        background-color: var(--grey);
      }
    }
  }

  @media screen and (max-width: 420px) {
    /* top: max(6.8vh, 40px); */
    ul {
      li {
        font-size: 0.8em;
      }
    }
  }
`;

export const Content = styled.div`
  flex: 1;
  background: linear-gradient(rgba(48, 48, 48, 1) 30%, rgba(20, 20, 20, 1) 80%);
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  grid-gap: 3rem;
  padding: 1em 1em 3em;
  color: var(--white);

  @media screen and (max-width: 450px) {
    grid-gap: 1rem;
  }
`;
