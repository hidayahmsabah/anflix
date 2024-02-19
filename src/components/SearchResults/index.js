import React, { useState, useEffect } from "react";
import Loading from "../Loading";
import Grid from "../Grid";
// import Filter from "../Filter";
import { Wrapper, Content } from "./SearchResults.styles";
import { useParams, useLocation } from "react-router";
// useNavigate
import { useSearchFetch } from "../../hooks/useSearchFetch";
import Wrong from "../Wrong";

const SearchResults = () => {
  const [page, setPage] = useState(1);
  const { title } = useParams();
  // const navigate = useNavigate();
  console.log(title);
  const location = useLocation();
  // console.log(location);
  const pathName = location.pathname.replace("/search/", "");
  //   const URLParams = new URLSearchParams(pathName);

  //   const [genre] = useState(
  //     `${URLParams.get("genre") ? URLParams.get("genre") : ""}`
  //   );
  //   const [type] = useState(
  //     `${URLParams.get("type") ? URLParams.get("type") : ""}`
  //   );
  //   const [status] = useState(
  //     `${URLParams.get("status") ? URLParams.get("status") : ""}`
  //   );
  //   const [rating] = useState(
  //     `${URLParams.get("rating") ? URLParams.get("rating") : ""}`
  //   );
  const ind =
    pathName.indexOf("&") < 0
      ? pathName.length
      : parseInt(pathName.indexOf("&"));

  const defaultTitle = pathName.slice(0, ind);
  const { result, lastPage, loading, error } = useSearchFetch(
    defaultTitle,
    page
  );

  // console.log(result);

  //   const defaultParams = [defaultTitle, genre, type, status, rating];

  // function testClick(e) {
  //   e.preventDefault();
  //   navigate("/search/haikyuu&type=ova");
  // }

  function changePage() {
    setPage(page + 1);
  }

  useEffect(() => {
    setPage(1)
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    
  }, [title])

  return (
    <Wrapper>
      {/* <Filter initial={pathName} test={testClick} text="test 1" /> */}
      <h2>
        {`${result.length} results found for search`} <i>{title}</i>{" "}
      </h2>
      <Content>
        {loading && !result ? (
          <Loading />
        ) : (
          result.map((el, index) => (
            <Grid key={index} anime={el}>
              {el.title}
            </Grid>
          ))
        )}
        {error && <Wrong />}
      </Content>
      {result && page < lastPage && !loading && (
        <button onClick={changePage}>Load More</button>
      )}
    </Wrapper>
  );
};

export default SearchResults;
