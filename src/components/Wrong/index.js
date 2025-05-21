import { Wrapper, Content } from "./Wrong.styles";
import Back from "../Back";
import sorry from "../../icons/sorry.png";

const Wrong = ({ text, icon = true, back = true }) => {
  return (
    <Wrapper>
      <Content>

        { back && <Back className="back-btn"/> }
        {text ? `${text}` : "Oops, something went wrong"}
        {
          icon && 
          <div id="img-div">
            <img src={sorry} alt="Icon of a sad face holding a sorry sign" />
            <div>
              Icons made by{" "}
              <a href="https://www.flaticon.com/authors/freepik" title="Freepik">
                Freepik
              </a>{" "}
              from{" "}
              <a href="https://www.flaticon.com/" title="Flaticon">
                www.flaticon.com
              </a>
            </div>
          </div>
        }

      </Content>
    </Wrapper>
  );
};

export default Wrong;
