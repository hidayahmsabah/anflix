import styled from "styled-components";

export const Wrapper = styled.div`
  padding: 20vh 1em 1em;
  min-height: 100vh;
  background: var(--black);
`;

export const Content = styled.div`
  color: var(--white);
  text-align: center;
  font-size: 1.5em;
  letter-spacing: 0.05em;

  p,
  #img-div {
    letter-spacing: 0;
  }

  p {
    padding: 1em;
    font-size: 0.7em;

    button {
      margin-left: 1em;
      display: inline-block;
    }
  }

  #img-div {
    margin: 5vh 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 20vh;

    img {
      max-height: 100%;
      margin-bottom: 1em;
    }

    div {
      color: var(--grey);
      font-size: 12px;

      a {
        text-decoration: none;
        color: var(--white);
        transition: color 0.15s ease-in-out;

        :hover {
          color: var(--less-orange);
        }
      }
    }
  }
`;
