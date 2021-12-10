import React, { useState } from "react";
import { useTopFetch } from "../../hooks/useTopFetch";
import Grid from "../Grid";
import Loading from "../Loading";
import Wrong from "../Wrong";
import { Wrapper, Tab, Content } from "./New.styles";

const New = () => {
  const options = [
    ["Airing", "airing"],
    ["Upcoming", "upcoming"],
    ["All Time", "favorite"],
  ];
  const [current, setCurrent] = useState(0);
  const { anime, loading, error } = useTopFetch(options[current][1]);

  // console.log(anime);

  function changeTabs(index) {
    index !== current && setCurrent(index);
  }

  return (
    <>
      <Wrapper>
        <Tab>
          <ul>
            {options.map((el, index) => (
              <li
                key={index}
                className={`${current === index && "active"}`}
                onClick={() => changeTabs(index)}
              >
                {el[0]}
              </li>
            ))}
          </ul>
        </Tab>
        <Content>
          {loading && !anime && <Loading />}
          {error && <Wrong />}
          {!error &&
            !loading &&
            anime &&
            anime.map((el, index) => <Grid key={index} anime={el} />)}
        </Content>
      </Wrapper>
    </>
  );
};

export default New;
