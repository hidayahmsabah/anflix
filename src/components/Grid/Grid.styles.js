import styled from "styled-components";
import { Link } from "react-router-dom";

export const Wrapper = styled.div`
  transition: all 0.3s ease-in-out;
  display: flex;
  flex-direction: column;

  &:hover {
    transform: translateY(-1.5%);
    // transform: scale(1.05);
  }
`;

export const Content = styled(Link)`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  text-decoration: none;
  color: var(--white);

  .image-holder {
    /* background: var(--black); */
    // margin-bottom: 0.3em;
    border-radius: 0.5em;
    flex: 1;
    background:
    top / cover no-repeat
      url(${({ $blurBg }) =>
        !$blurBg
          ? ""
          : $blurBg});
  }

  .background-blur{
    backdrop-filter: blur(1.5em);
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 0.5em;
  }

  .info-holder {
    display: flex;
    align-items: center;
  }

  img {
    max-width: 90%;
    max-height: 90%;
    // border-radius: 0.5em;
  }

  span {
    display: inline-block;
    width: 100%;
    padding-top: 1em;
    text-align: center;
    // font-size: 0.9em;
  }

  // &:hover span {
  //   color: var(--orange);
  // }

  @media screen and (max-width: 450px) {
    .info-holder > div:first-child {
      background-color: teal;
      display: none;
    }
  }
`;
