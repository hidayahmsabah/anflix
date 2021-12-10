import styled from "styled-components";
import { Link } from "react-router-dom";
import { FaSearch, FaCaretDown } from "react-icons/fa";

export const Wrapper = styled.nav`
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 1000;
  background: transparent;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  height: 7vh;
  transition: all 0.1s ease;
  min-height: 40px;

  &.scroll {
    background-color: var(--black);
  }
`;

export const Logo = styled(Link)`
  color: var(--white);
  font-size: 1.5rem;
  margin: 0 2em;
  font-weight: bold;
  flex: 3;
  transition: all 0.5s ease;
  text-decoration: none;

  :hover {
    color: var(--orange);
    text-shadow: 0px 1px 4px var(--grey);
  }

  @media screen and (max-width: 450px) {
    flex: 2;
    margin: 0 1em;
    font-size: 1.3rem;
  }

  @media screen and (min-width: 767px) {
    font-size: 1.7rem;
  }
`;

export const Content = styled.ul`
  padding: 1em;
  display: flex;
  justify-content: space-around;
  list-style: none;
  min-width: 450px;
  max-width: 500px;
  transition: all 1s ease-out;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const List = styled.li`
  a {
    text-decoration: none;
    color: var(--white);
    font-size: 1.2rem;
    letter-spacing: 0.05em;
    transition: all 0.2s ease-out;

    :hover {
      color: var(--orange);
      transform: translateY(-5%);
      letter-spacing: 0.1em;
      text-shadow: 0px 1px 4px var(--grey);
    }
  }

  &.active > a {
    border-bottom: 0.2em solid var(--less-orange);
  }
`;

export const Browse = styled.span`
  display: block;
  color: var(--white);
  transition: all 0.5s ease-in-out;
  cursor: pointer;

  :hover,
  :hover > * {
    color: var(--orange);
  }

  @media screen and (min-width: 769px) {
    display: none;
  }

  @media screen and (max-width: 450px) {
    font-size: 0.9rem;
  }
`;

export const BrowseArrow = styled(FaCaretDown)`
  color: var(--white);
  height: 1em;
  transform: translate(0.5rem, 0.2rem);
  transition: all 0.5s ease-in-out;
`;

export const SearchBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: transparent;
  height: 100%;
  padding: 0 2em;
  transition: all 0.5s ease;

  &.active {
    justify-content: flex-end;
    padding-left: 1em;
  }

  @media screen and (max-width: 450px) {
    padding: 0 1em;

    &.active {
      margin-left: -3em;
    }
  }
`;

export const SearchIcon = styled(FaSearch)`
  color: var(--white);
  font-size: 1.3em;
  transition: all 0.5s ease;
  margin-right: 2%;

  :hover {
    color: var(--orange);
    transform: translateY(-5%);
    text-shadow: 0px 1px 4px var(--grey);
  }

  @media screen and (max-width: 768px) {
    font-size: 1em;
  }
`;
export const Input = styled.input`
  width: 0;
  border: 0;
  outline: none;
  transition: all 0.5s ease-in-out;
  color: var(--white);

  &.active {
    width: 80%;
    height: 1.8em;
    border-radius: 1.5em;
    background: var(--grey);
    padding-left: 1em;
    margin-right: -1em;
  }

  @media screen and (max-width: 450px) {
    &.active {
      width: 60%;
    }
  }
`;
