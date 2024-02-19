import styled from "styled-components";

export const Wrapper = styled.div`
  position: fixed;
  bottom: 5vh;
  right: 3vw;
  opacity: 0.35;
  transition: opacity 0.5s ease;
  display: ${({ $visible }) => ($visible ? "block" : "none")};

  &:hover {
    opacity: 1;
  }
`;

export const Content = styled.button`
  border: none;
  background-color: var(--grey);
  padding: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 1rem;
  cursor: pointer;

  &:hover > * {
    color: var(--orange);
  }

  > * {
    color: var(--white);
    font-size: 1.5rem;
    transition: color 0.5s ease;
  }
`;
