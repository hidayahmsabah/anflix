import styled from "styled-components";
import { FaFilter } from "react-icons/fa";

export const Wrapper = styled.div`
  text-align: right;
  padding: 1em 0;
  color: var(--white);

  .filter-btn {
    /* background-color: teal; */
    display: flex;
    align-items: center;
    justify-content: flex-end;

    .filterButton {
      background: var(--black);
      border: none;
      color: var(--white);
      font-size: 0.9em;
      margin: 0;
      transition: all 0.5s ease;
      cursor: pointer;

      &.active {
        color: var(--orange);
      }
    }
  }
`;

export const FilterLogo = styled(FaFilter)`
  color: var(--white);
  margin-left: 1em;
  transition: color 0.5s ease;

  &.active {
    color: var(--orange);
  }
`;

export const Content = styled.form`
  position: relative;
  /* grid-template-columns: repeat(auto-fill, minmax(250px, 1fr)); */
  grid-gap: 3rem;
  border: var(--orange);
  border-width: thin;
  border-style: solid;
  border-radius: 0.5em;
  padding: 1em;
  /* margin-top: 4em; */
  display: none;
  transition: all 0.5s ease;

  &.active {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
  }

  .input {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    text-align: left;
    /* width: 250px; */
    flex: 1 200px;

    input {
      font-size: 16px;
    }
  }

  /* .input:first-child{
        flex: 4 200px;
    } */

  .search-btn {
    display: block;
    width: 150px;
    height: 38px;
    border-radius: 4px;
    background-color: var(--white);
    color: var(--black);
    font-weight: bold;
    font-size: 0.9em;
    letter-spacing: 0.1em;
    align-self: center;
  }

  label {
    padding-bottom: 0.5em;

    + * {
      margin-bottom: 1em;
    }
  }

  #title {
    border-radius: 4px;
    min-height: 38px;
    background: var(--grey);
    color: var(--white);
    padding-left: 1em;
    border: thin solid var(--white);
  }

  .select {
    color: var(--white);
    background: var(--grey);
    max-width: 100%;

    /* div[role="button"] {
      :hover {
        background-color: rgba(255, 123, 0, 0.7);
      }
    } */

    > div::first-child {
      border: thin solid var(--white);
    }

    * {
      background: var(--grey);
      color: var(--white);
    }
  }
`;
