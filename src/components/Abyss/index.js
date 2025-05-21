import { Content, Wrapper } from "./Abyss.styles";
import Back from "../Back";
import confused from "../../icons/confused.png";

const Abyss = () => {

  return (
    <Wrapper>
      <Content>
        <Back/>

        <h4>Oops it appears you have landed in the land of the abyss. Fret not.</h4>
        <p>
          Try going back
        </p>
        <div id="img-div">
          <img src={confused} alt="Icon of a confused man" />
          <div>
            Icons made by{" "}
            <a href="https://www.freepik.com" title="Freepik">
              Freepik
            </a>{" "}
            from{" "}
            <a href="https://www.flaticon.com/" title="Flaticon">
              www.flaticon.com
            </a>
          </div>
        </div>
      </Content>
    </Wrapper>
  );
};

export default Abyss;
