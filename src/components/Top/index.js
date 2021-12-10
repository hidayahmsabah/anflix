import React from "react";
import { Content, Wrapper } from "./Top.styles";
import { FaAngleUp } from "react-icons/fa";

const Top = ({ visible, toTop }) => {
  return (
    <Wrapper onClick={toTop} visible={visible}>
      <Content>
        <FaAngleUp />
      </Content>
    </Wrapper>
  );
};

export default Top;
