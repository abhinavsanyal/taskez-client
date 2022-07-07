import React from "react";
import { StyledButton } from "./Common.styles";
import { AiOutlinePlus } from "react-icons/ai";

export const Button = ({
  name = "",
  icon = null,
  color = "white",
  background,
  margin = "0",
  padding = "0.8rem 0",
  borderRadius = "7px",
}) => {
  return (
    <StyledButton
      color={color}
      background={background}
      margin={margin}
      padding={padding}
      borderRadius={borderRadius}
    >
      {" "}
      {icon}
      {name}{" "}
    </StyledButton>
  );
};

export const ButtonWithIcon = ({
  color = "white",
  background = "#329C89",
  margin = "0",
  padding = "0",
  borderRadius = "7px",
}) => {
  console.log("getting called", color);
  return (
    <StyledButton
      color={color}
      background={background}
      margin={margin}
      padding={padding}
      borderRadius={borderRadius}
    >
      <AiOutlinePlus color={color} size={25} />
    </StyledButton>
  );
};
