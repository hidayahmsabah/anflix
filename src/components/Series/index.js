import React, { useState, useEffect } from "react";
import Grid from "../Grid";
import Loading from "../Loading";
import Wrong from "../Wrong";
import update from "immutability-helper";
import { useLetterFetch } from "../../hooks/useLetterFetch";
import { Content, GridHolder, Wrapper } from "./Series.styles";
import { alphabet } from "../../data/genres";

const Series = ({ type }) => {
  const [current, setCurrent] = useState(0);
  const [datas, setDatas] = useState([{ key: 1, anime: [], page: 1 }]);
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
      const newAlpha = { key: index, anime: [], page: 1 };
      const newData = update(datas, { [index]: { $set: newAlpha } });
      setDatas(newData);
    }
    setCurrent(index);
  }

  function changePage() {
    const prevPage = datas[current].page;
    setDatas(update(datas, { [current]: { page: { $set: prevPage + 1 } } }));
  }

  // useEffect(() => {
  //   console.log(datas);
  // }, [datas]);

  return (
    <>
      <Wrapper>
        <Content>
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
          {loading && <Loading />}
          {error && <Wrong />}
          <GridHolder>
            {datas[current].anime &&
              !error &&
              datas[current].anime.map((el, index) => {
                return <Grid key={index} anime={el} />;
              })}
          </GridHolder>
        </Content>
        {anime && datas[current].page < lastPage && !loading && (
          <button onClick={changePage}>Load More</button>
        )}
      </Wrapper>
    </>
  );
};

export default Series;
