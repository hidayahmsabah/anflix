import { BackButton } from "./Back.styles";
import { useNavigate, useLocation } from "react-router";
import { IoIosArrowBack as BackIcon } from "react-icons/io";

const Back = () => {
  const navigate = useNavigate();
  const state = useLocation().state

  console.log("back state", state)

  const goBack = () => {
    if (state) {
      let { location, mark } = state
      console.log("masuk sini state", mark)
      navigate(location, { state: { mark }})
    } else {
      console.log("masuk NOT state")
      navigate(-1)
    }
  }

  return (
    <BackButton onClick={() => goBack()}>
      <BackIcon/>
      Back
    </BackButton> 
  )
};

export default Back;
