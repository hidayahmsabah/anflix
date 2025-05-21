import styled from "styled-components";

export const Wrapper = styled.div`
  padding: 10vh 25vh;
  flex-grow: 1;
  background: var(--black);

  @media screen and (max-width: 768px) {
    padding-top: 5vh;
  }
`;

export const Content = styled.div`
  color: var(--white);

  text-align: center;
  font-size: 1.2em;
  letter-spacing: 0.05em;

  #img-div {
    // margin: 5vh 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
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

        &:hover {
          color: var(--less-orange);
        }
      }
    }
  }
`;
