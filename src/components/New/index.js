import { useState, useEffect } from "react";
import { useLocation } from "react-router"
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

  const state = useLocation().state
  
  const [current, setCurrent] = useState(state ? state.mark : 0);
  const { anime, loading, error } = useTopFetch(1, options[current][1]);

  const currentLocation = useLocation().pathname

  const toTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  useEffect(() => {  
    toTop()
  }, [])
  

  function changeTabs(index) {
    toTop()
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
        { 
          error ? 
          <Wrong/> :
          loading ? 
          <Loading /> :
          <Content>
            {!error &&
              anime &&
              anime.map((el, index) => <Grid key={index} anime={el} prev={{ location: currentLocation, mark: current }}/>)}
          </Content>
        }
      </Wrapper>
    </>
  );
};

export default New;
