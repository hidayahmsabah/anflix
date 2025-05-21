import styled from "styled-components";
import { Link } from "react-router-dom";
import { FaSearch, FaCaretDown } from "react-icons/fa";
import { MdCancel } from "react-icons/md";

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
  min-height: 44px;

  &.scroll {
    background-color: var(--black);
  }

  @media screen and (max-width: 450px) {
    &.darken *:not(.searchbar):not(.searchbar *) {
      display: none;
    }
  }

  /* @media screen and (max-width: 450px) {
    &.darken .browsebar {
      display: none;
    }
  } */
`;

export const Logo = styled(Link)`
  color: var(--white);
  font-size: 1.5rem;
  //margin: 0 2em;
  margin-left: 2em;
  font-weight: bold;
  flex: 3;
  transition: all 0.5s ease;
  text-decoration: none;

  &:hover {
    color: var(--orange);
    text-shadow: 0px 1px 4px var(--grey);
  }

  @media screen and (max-width: 450px) {
    flex: 2;
    margin: 0 1em;
    font-size: 1.4rem;
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

    &:hover {
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

  &:hover,
  &:hover > * {
    color: var(--orange);
  }

  @media screen and (min-width: 769px) {
    display: none;
  }

  @media screen and (max-width: 450px) {
    margin-right: 5px;
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
      flex-grow: 1;
      /* margin-right: 1em; */
    }
  }
`;

export const SearchIcon = styled(FaSearch)`
  color: var(--white);
  font-size: 1.3em;
  transition: all 0.5s ease;
  margin-right: 2%;

  &:hover {
    color: var(--orange);
    transform: translateY(-5%);
    text-shadow: 0px 1px 4px var(--grey);
  }

`;
export const Input = styled.input`
  width: 0;
  height: 70%;
  max-height: 44px;
  background: var(--grey);
  border: 0;
  outline: none;
  text-align: center;
  font-size: 14px;

  transition: all 0.5s ease-in-out;
  color: var(--white);

  &.active {
    flex: auto;
    min-width: 150px;
    width: 90%;
    border-radius: 1.5em;
    /* padding-left: 1em; */
    margin: 0 -1em 0 0.5em;
  }

  @media screen and (max-width: 450px) {
    &.active {
      height: 70%;
      font-size: 16px;
    }
  }

  @media screen and (max-width: 325px) {
    &.active {
      text-align: left;
      padding-left: 1.5em;
    }
  }

  @media screen and (max-width: 280px) {
    &.active {
      padding-left: 1em;
    }
  }
`;

export const Cancel = styled(MdCancel)`
  display: none;
  font-size: 1.5em;
  /* padding-right: 0.2em; */
  position: relative;
  right: 1em;
  /* padding: 0.2em; */
  cursor: pointer;

  @media screen and (max-width: 450px) {
    &.active {
      display: block;
      color: white;
    }
  }
`;

export const InputError = styled.span`
  display: none;
  font-size: 0.9em;

  &.error {
    display: inline-block;
    color: red
  }

`
