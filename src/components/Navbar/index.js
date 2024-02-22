import React, { useState, useRef, useLayoutEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
// import { useParams } from "react-router";
import {
  Wrapper,
  Logo,
  Content,
  List,
  SearchBar,
  Browse,
  BrowseArrow,
  SearchIcon,
  Input,
  Cancel,
} from "./Navbar.styles";
import BrowseBar from "../BrowseBar";

const Navbar = ({ index, width }) => {
  const [search, setSearch] = useState(false);
  const [browse, setBrowse] = useState(false);
  const [navScroll, setNavScroll] = useState(false);
  const searchBarRef = useRef();
  const browseRef = useRef();
  const inputRef = useRef();
  // const title = useParams();
  const navigate = useNavigate();

  window.addEventListener("click", (e) => {
    if (searchBarRef.current) {
      const refChildren = searchBarRef.current.children;
      const svgChild = searchBarRef.current.children[0].children;
      const searchArrays = [...refChildren, ...svgChild, searchBarRef.current];
      searchArrays.some((el) => el === e.target)
        ? setSearch(true)
        : setSearch(false);
    }
  });

  useLayoutEffect(() => {
    function navBg() {
      window.scrollY >= 60 ? setNavScroll(true) : setNavScroll(false);
    }
    window.addEventListener("scroll", navBg);
    return () => window.removeEventListener("scroll", navBg);
  }, []);

  function searchEnter(e) {
    const value = inputRef.current.value;
    if (e.key === "Enter") {
      if (value.length > 2) {
        navigate(`/search/${value}`);
        inputRef.current.value = "";
      }
    }
  }

  function browseOpen(e) {
    browse ? setBrowse(false) : setBrowse(true);
  }

  function cancelSearch() {
    setSearch(!search);
  }

  return (
    <Wrapper className={`${search && "darken"} ${navScroll && "scroll"}`}>
      <Logo to="/">{width > 400 ? "AnFlix" : "AF"}</Logo>
      <Browse
        ref={browseRef}
        onClick={(e) => browseOpen(e)}
        className="browsebar"
      >
        Browse
        <BrowseArrow />
        <BrowseBar browse={browse} index={index} />
      </Browse>
      <Content>
        <List className={index === 1 && "active"}>
          <Link to="/series">Series</Link>
        </List>
        <List className={index === 2 && "active"}>
          <Link to="/movies">Movies</Link>
        </List>
        <List className={index === 3 && "active"}>
          <Link to="/new%20popular">New & Popular</Link>
        </List>
      </Content>
      <SearchBar
        ref={searchBarRef}
        className={`${search && "active"} searchbar`}
      >
        <SearchIcon className="searchIcon" />
        <Input
          type="text"
          ref={inputRef}
          className={`${search && "active"}`}
          onKeyUp={(e) => searchEnter(e)}
          placeholder="3 Characters Minimum"
        />
        <Cancel className={search && "active"} onClick={cancelSearch} />
      </SearchBar>
    </Wrapper>
  );
};

export default Navbar;
