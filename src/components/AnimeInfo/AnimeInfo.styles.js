import styled from "styled-components";

export const Wrapper = styled.div`
  padding: 15vh 1em 0;
  background: var(--black);
  min-height: 100vh;
  transition: all 0.5s ease;

  @media screen and (max-width: 768px) {
    padding-top: 10vh;
  }
`;

export const Content = styled.div`
  max-width: 100%;
  width: 80%;
  overflow: hidden;
  z-index: 10;
  display: flex;
  flex-direction: column;
  margin: 0 auto;

  @media screen and (max-width: 768px) {
    width: 90%;
  }
`;

export const Head = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: var(--white);
  padding-bottom: 2em;
  margin-bottom: 2em;
  border-bottom: thin solid var(--grey);

  h2 {
    letter-spacing: 0.1em;
    font-size: 1.7em;
    transition: font-size 0.5s ease;
  }

  .scores {
    letter-spacing: 0.05em;
    font-size: 1.3rem;
    display: flex;
    transition: font-size 0.5s ease;

    .sources {
      display: block;
      text-align: center;
      font-size: 0.6em;
      align-self: flex-end;
      transition: all 0.5s ease;
      text-decoration: none;
      color: inherit;

      &:hover {
        color: var(--orange);
        transform: translateY(-10%);
      }
    }
  }

  @media screen and (max-width: 768px) {
    padding-bottom: 0;
    border-bottom: none;

    h2 {
      font-size: 1.5em;
    }

    .scores {
      font-size: 1.1rem;
    }
  }

  @media screen and (max-width: 480px) {
    flex-direction: column;
    h2 {
      font-size: 1.3em;
      text-align: center;
    }

    .scores {
      font-size: 0.9rem;
    }
  }
`;

export const ContentExtra = styled.div`
  display: flex;
  align-items: flex-start;

  img {
    margin: 1em 3em 1em 0;
    border-radius: 0.5em;
  }

  @media screen and (max-width: 768px) {
    flex-direction: column;
    align-items: center;

    img {
      margin: 0;
    }
  }
`;

export const Information = styled.div`
  color: var(--white);
  flex: 1;

  .info {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .rating {
    font-size: 2em;
    color: ${({ color }) => color};
    font-weight: 600;
    padding-right: 1em;
  }

  span {
    display: block;
    font-size: 0.9em;
    /* color: var(--less-orange); */
  }

  ul {
    padding-top: 0.5em;
    list-style-type: none;
    display: flex;
    justify-content: flex-end;

    li {
      font-size: 0.9em;
      padding-right: 1em;
      color: var(--less-orange);
    }
  }

  p {
    font-size: 1em;
    line-height: 1.7em;
    padding-top: 1em;
    color: var(--white);
    text-align: justify;
  }

  @media screen and (max-width: 768px) {
    margin-top: 1em;

    .info {
      justify-content: space-around;
    }

    p {
      text-align: left;
    }
  }

  @media screen and (max-width: 480px) {
    .info {
      justify-content: space-between;
    }

    .rating {
      font-size: 1.5em;
    }

    span {
      font-size: 0.7em;
    }

    ul {
      li {
        font-size: 0.7em;
      }
    }
  }
`;
