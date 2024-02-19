import styled from "styled-components";
import {
  SiMyanimelist as MAL,
  SiAnilist as Ani,
  SiNetflix as NF,
} from "react-icons/si";

export const Wrapper = styled.footer`
  background: var(--black);
  padding-bottom: 2em;
  text-align: center;
  animation: fadein 0.5s;

  @keyframes fadein {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  div {
    color: var(--grey);

    a {
      color: var(--grey);
      text-decoration: none;
    }
  }

  /* div:last-child{
        padding-top: 0.5em;
    } */
`;

export const LogoML = styled(MAL)`
  font-size: 3em;
  transform: translateY(35%);
  transition: all 0.5s ease-out;
  margin: 0 0.1em;

  &:hover {
    color: var(--orange);
  }
`;

export const LogoAL = styled(Ani)`
  font-size: 1.7em;
  transform: translateY(15%);
  transition: all 0.5s ease-out;
  margin: 0 0.1em;

  &:hover {
    color: var(--orange);
  }
`;

export const LogoNF = styled(NF)`
  font-size: 1.5em;
  transform: translateY(5%);
  transition: all 0.5s ease-out;
  margin: 0 0.1em;

  &:hover {
    color: var(--orange);
  }
`;
