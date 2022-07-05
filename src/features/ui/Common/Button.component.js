import React from "react";
import { StyledButton } from "./Common.styles";


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
