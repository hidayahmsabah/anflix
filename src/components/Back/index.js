import React from "react";
import { Button } from "./Back.styles";
import { useNavigate } from "react-router";

const Back = () => {
  const navigate = useNavigate();

  return <Button onClick={() => navigate(-1)}>Back</Button>;
};

export default Back;
