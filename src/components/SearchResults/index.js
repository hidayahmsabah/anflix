import React, { useState, useEffect } from "react";
import Filter from "../Filter";
import Loading from "../Loading";
import Grid from "../Grid";
import Wrong from "../Wrong";
import { Wrapper, Content } from "./SearchResults.styles";
import { useParams } from "react-router";
import { useSearchFetch } from "../../hooks/useSearchFetch";

const SearchResults = () => {
  const [page, setPage] = useState(1);
  const { title } = useParams();

  const { result, lastPage, loading, error, request } = useSearchFetch(
    title,
    page
  );

  function changePage() {
    setPage(page + 1);
  }

  useEffect(() => {
    setPage(1);
  }, [title]);

  useEffect(() => {
    console.log(page);
  }, [page]);

  console.log(request);

  return (
    <Wrapper>
      <Filter initial={title} />
      {!loading && request.status === 200 && (
        <h2>
          {`${result.length} results found for search`}{" "}
          <i>
            {title[0] === "&"
              ? ""
              : title.indexOf("&") > -1
              ? title.slice(0, title.indexOf("&"))
              : title}
          </i>
        </h2>
      )}
      <Content>
        {result &&
          request.status === 200 &&
          result.map((el, index) => (
            <Grid key={index} anime={el}>
              {el.title}
            </Grid>
          ))}
      </Content>
      {result &&
        page < lastPage &&
        !loading &&
        !error &&
        request.status === 200 && (
          <button onClick={changePage}>Load More</button>
        )}
      {request.status !== 200 && (
        <Wrong
          padding={"0"}
          text={`Error ${request.status}. ${request.message}. Much apologies for the inconvenience, feel free to try again in a few minutes.`}
        />
      )}
      {loading && <Loading />}
      {error && <Wrong />}
    </Wrapper>
  );
};

export default SearchResults;
