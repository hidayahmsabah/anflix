import styled from "styled-components";
import { FaFilter } from "react-icons/fa";
import { MdError } from "react-icons/md";
import { IoIosClose } from "react-icons/io";

export const Wrapper = styled.div`
  text-align: right;
  padding: 1em 0;
  color: var(--white);

  .filter-btn {
    /* background-color: teal; */
    display: flex;
    align-items: center;
    justify-content: flex-end;
    padding-bottom: 5px;

    .filterButton {
      display: flex;
      justify-content: center;
      align-items: center;
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

  .emptyFilter {
    color: red;
    font-weight: bold;
    text-align: center;
    padding: 0 0 5px 0;
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

export const ErrorLogo = styled(MdError)`
  font-size: 25px;
  padding-right: 5px;
  vertical-align: bottom;
`

export const CloseLogo = styled(IoIosClose)`
  font-size: 25px;
  stroke-width: 15;
  position: absolute;
  top: 44%;
  right: 6px;

  :hover {
    cursor: pointer;
  }
`

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
    position: relative;
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
    display: flex;
    justify-content: center;
    align-items: center;
    width: 150px;
    height: 38px;
    border-radius: 4px;
    background-color: var(--white);
    color: var(--black);
    font-weight: bold;
    font-size: 0.9em;
    letter-spacing: 0.1em;
    align-self: center;
    margin-top: 15px;
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

  .custom-select-class {
    color: var(--white);
    background: var(--grey);
    max-width: 100%;

    /* div[role="button"] {
      &:hover {
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
    
    // &.genres div[style*="width: 0px"]{
    //   width: 100% !important;
    // }

    & :hover {
      cursor: pointer;
    }
  }

  @media screen and (max-width: 450px) {
    grid-gap: 0;

    .search-btn {
      margin-top: 0;
    }
  }
`;
