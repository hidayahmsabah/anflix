import { useState, useEffect } from "react";
import { useLocation } from "react-router";
import Grid from "../Grid";
import Loading from "../Loading";
import Wrong from "../Wrong";
import update from "immutability-helper";
import { useLetterFetch } from "../../hooks/useLetterFetch";
import { Content, GridHolder, Wrapper } from "./Series.styles";
import { alphabet } from "../../data/genres";

const Series = ({ type }) => {
  const currentLocation = useLocation().pathname
  const state = useLocation().state

  const [current, setCurrent] = useState(state ? state.mark : 0);
  const [datas, setDatas] = useState(() => {
    const arr = [];
    arr[current] = { key: current, anime: [], page: 1 };
    return arr;
  });
  const { anime, lastPage, loading, error } = useLetterFetch(
    alphabet[current],
    type,
    datas[current].page
  );

  useEffect(() => {
    if (datas[current].page > 1) {
      const newAnimeArray = update(datas, {
        [current]: { anime: { $push: anime } },
      });
      setDatas(newAnimeArray);
    } else {
      setDatas(update(datas, { [current]: { anime: { $set: anime } } }));
    }
  }, [anime]);

  function changeLetter(index) {
    if (!datas[index]) {
      toTop()
      const newAlpha = { key: index, anime: [], page: 1 };
      const newData = update(datas, { [index]: { $set: newAlpha } });
      setDatas(newData);
    }
    setCurrent(index);
  }

  function toTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  function changePage() {
    const prevPage = datas[current].page;
    setDatas(update(datas, { [current]: { page: { $set: prevPage + 1 } } }));
  }

  return (
    <>
      <Wrapper>
        <Content>
          {
            error ? <Wrong /> :
            <>
              <ul>
                {alphabet.map((el, index) => {
                  return (
                    <li
                      key={index}
                      className={`${index === current && "active"}`}
                      onClick={() => changeLetter(index)}
                    >
                      {el.toUpperCase()}
                    </li>
                  );
                })}
              </ul>
              {
                loading ? <Loading /> :
                <>
                  <GridHolder>
                    {datas[current].anime &&
                      !error &&
                      datas[current].anime.map((el, index) => {
                        return <Grid key={index} anime={el} prev={{ location: currentLocation, mark: current }}/>;
                      })}
                  </GridHolder>
                  {anime && datas[current].page < lastPage && (
                    <button className="load-more" onClick={changePage}>Load More</button>
                  )}
                </>
              }
            </>
          }
        </Content>

      </Wrapper>
    </>
  );
};

export default Series;
