import { useState, useEffect } from "react";
import Filter from "../Filter";
import Loading from "../Loading";
import Grid from "../Grid";
import Wrong from "../Wrong";
import { Wrapper, Content } from "./SearchResults.styles";
import { useParams, useLocation } from "react-router";
import { useSearchFetch } from "../../hooks/useSearchFetch";

const SearchResults = () => {
  // const [page, setPage] = useState(1);
  const [criteria, setCriteria] = useState([])
  const [searchParams, setSearchParams] = useState(null)
  const { title } = useParams();

  const state = useLocation().state
  const currentLocation = useLocation().pathname

  useEffect(() => {

    let passedState = state ? state.params ?? state.mark : null

    
    let userSearch = state ? { ...passedState } : {}

    setSearchParams({ sfw: true, page: 1, ...userSearch})
  }, [state])

  useEffect(() => {
    const arr = title.split(',');

    setCriteria(arr)
  }, [title])
  
  const { result, lastPage, total, loading, error } = useSearchFetch(searchParams);

  function changePage() {
    setSearchParams({...searchParams, page: searchParams.page + 1});
  }


  return (
    <Wrapper>
      <Filter searchParams={searchParams} />
      {
        (!loading || (searchParams && searchParams.page > 1)) &&
        <h2>
          {`${total}`} results found for search {criteria.map((el, id) => <span className="criteria" key={id}>{el}</span>)}
        </h2>
      }
      {
        error ? <Wrong/> :
        loading && searchParams && searchParams.page === 1 ? <Loading/> :
        <Content> 
          {
            result.map((el, index) => (
              <Grid key={index} anime={el} prev={{ location: currentLocation, mark: searchParams }}/>
            ))
          }
        </Content>
      }

      {
        loading && !error && searchParams && searchParams.page > 1 && <Loading/>
      }
      {result && searchParams && searchParams.page < lastPage && !loading && !error && (
        <button className="load-more" onClick={changePage}>Load More</button>
      )}
    </Wrapper>
  );
};

export default SearchResults;
