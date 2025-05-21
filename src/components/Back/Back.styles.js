import styled from "styled-components";

export const Button = styled.button`
  background-color: var(--grey);
  color: var(--white);
  font-size: 1em;
  padding: 0.5em 1em;
  /* margin-left: 15vh; */
  display: block;
  border-radius: 0.5em;
  border: none;
  transition: all 0.5s ease;
  align-self: flex-start;
  cursor: pointer;

  &:hover {
    color: var(--less-orange);
  }

  @media screen and (max-width: 768px) {
    align-self: flex-end;
    margin-bottom: 1em;
    font-size: 0.9em;
  }
`;

export const BackButton = styled.button`
  padding: 1em 1em 1em 0.5em;
  width: 90px;
  border-radius: 5px;
  border-style: none;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  transition: all 0.2s ease;
  margin-bottom: 4em;

  &:hover{
    cursor: pointer;
    background-color: var(--orange);
    color: var(--white);
  }

  @media screen and (max-width: 450px) {
    font-size: 0.55em;
    margin-bottom: 20px;
    width:70px;
  }
`;
