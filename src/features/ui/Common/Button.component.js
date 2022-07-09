import React from "react";
import { StyledButton, StyledSubmitButton, Spinner } from "./Common.styles";
import { AiOutlinePlus } from "react-icons/ai";

export const Button = ({
  name = "",
  icon = null,
  color = "white",
  background,
  margin = "0",
  padding = "0.8rem 0",
  borderRadius = "7px",
  type,
  loading = false
}) => {

  const renderButton = () => {
    if(type === "submit"){
      return (<StyledSubmitButton
        color={color}
        background={background}
        margin={margin}
        padding={padding}
        borderRadius={borderRadius}
        type="submit"
      >
        {" "}
        <span style={{marginRight:"15px"}}>  {icon}
        {name}{" "}</span>
      
        {loading &&  <Spinner />}
      </StyledSubmitButton>)
    } else {
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
    }
  }

  return renderButton();
};

export const ButtonWithIcon = ({
  id="",
  color = "white",
  background = "#329C89",
  margin = "0",
  padding = "0",
  borderRadius = "7px",
  onClickhandler = () => {},
}) => {
  return (
    <StyledButton
      color={color}
      background={background}
      margin={margin}
      padding={padding}
      borderRadius={borderRadius}
      onClick={()=> onClickhandler(id)}
    >
      <AiOutlinePlus color={color} size={25} />
    </StyledButton>
  );
};
