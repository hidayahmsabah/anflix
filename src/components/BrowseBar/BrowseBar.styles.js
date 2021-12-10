import styled from "styled-components";

export const Wrapper = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  left: 0;
  height: 0;
  transition: all 0.5s ease-in-out;
  /* display: none; */
  z-index: -1;
  transition: all 0.3s ease-in;
  overflow: hidden;

  &.active {
    /* display: block; */
    height: 100vh;
  }
`;

export const Content = styled.ul`
  padding-top: 10em;
  background: var(--grey);
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

export const List = styled.li`
  flex-basis: 3em;
  list-style: none;
  text-align: center;
  transition: all 0.2s ease;
  font-size: 1.1em;
  display: flex;
  flex-direction: column;

  a {
    flex: 1;
    padding: 1em;
    display: block;
    width: 100%;
    height: 100%;
    text-decoration: none;
    color: var(--white);
    transition: all 0.5s ease;

    :hover {
      color: var(--orange);
      letter-spacing: 0.1em;
      text-shadow: 0px 1px 4px var(--grey);
    }
  }

  &.active a {
    color: var(--less-orange);
    font-weight: 600;
  }
`;
