import styled from "styled-components";

export const Wrapper = styled.div`
  width: 3em;
  height: 3em;
  background-color: ${({ bg }) => bg};
  border-radius: 100%;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  margin: 0.5em;
  /* border: 0.2em solid var(--black); */
`;

export const Container = styled.div`
  width: 3em;
  height: 3em;
  border-radius: 100%;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  border: 0.2em solid var(--black);

  background: ${({ $perc, $bg }) =>
    $perc <= 180
      ? `linear-gradient(${90 + $perc}deg, transparent 50%, var(--black) 50%),
        linear-gradient(90deg, var(--black) 50%, transparent 50%);`
      : `linear-gradient(90deg, transparent 50%, ${$bg} 50%),
        linear-gradient(${$perc - 90}deg, var(--black) 50%, transparent 50%);`};
`;

export const Content = styled.div`
  width: 2em;
  height: 2em;
  background-color: var(--black);
  text-align: center;
  border-radius: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1em;

  sub {
    font-size: 0.6em;
  }
`;
