import React from "react";
import { Wrapper, Content, Container } from "./Circle.styles";

const Circle = ({ perc, rating, bg }) => {
  return (
    <Wrapper className="container" bg={bg}>
      <Container
        perc={rating === "%" ? (perc / 100) * 360 : (perc / 10) * 360}
        bg={bg}
      >
        <Content className="circle">
          {perc}
          <sub>{rating}</sub>
        </Content>
      </Container>
    </Wrapper>
  );
};

export default Circle;
