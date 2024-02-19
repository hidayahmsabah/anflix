import React from "react";
import { Content, Wrapper } from "./Top.styles";
import { FaAngleUp } from "react-icons/fa";

const Top = ({ $visible }) => {

  const toTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <Wrapper onClick={toTop} $visible={$visible}>
      <Content>
        <FaAngleUp />
      </Content>
    </Wrapper>
  );
};

export default Top;
