import React from "react";
import { Wrapper, Content } from "./Wrong.styles";

const Wrong = ({ text }) => {
  return (
    <Wrapper>
      <Content>{text ? `${text}` : "Oops, something went wrong"}</Content>
    </Wrapper>
  );
};

export default Wrong;
