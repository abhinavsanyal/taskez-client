import React from "react";
import { StyledButton } from "./Common.styles";
import { AiOutlinePlus } from "react-icons/ai";


export const Button = ({
  name = "",
  icon = null,
  color = "white",
  background,
}) => {
  return (
    <StyledButton color={color} background={background}>
      {" "}
      {icon}
      {name}{" "}
    </StyledButton>
  );
};

export const ButtonWithIcon = ({
  color = "white",
  background = "#329C89",
}) => {
  console.log("getting called", color);
  return (
    <StyledButton color={color} background={background}>
     <AiOutlinePlus color={color} size={
      25}/>
    </StyledButton>
  );
};
