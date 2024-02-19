import React from "react";
import { Wrapper, Content } from "./SliderContent.styles";

const SliderContent = ({ text, cover, id }) => {
  return (
    <Wrapper to={`/anime/${id}`} $cover={cover} className="content">
      <Content>{text}</Content>
    </Wrapper>
  );
};

export default SliderContent;
