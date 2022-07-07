import React from "react";
import { StyledText } from "./Typo.styles";

export const HeadingText = ({children}) => {
  return (
    <StyledText
    fontWeight="500"
    fontSize="24px"
    lineHeight="101.1%"
    color="#212121" >
       {children}
      </StyledText>
    );
  };
  export const SubHeadingText = ({children}) => {
    return <StyledText > {children}</StyledText>;
  };
  export const TitleText = ({children}) => {
    return (
      <StyledText
      fontWeight="500"
      fontSize="14px"
      lineHeight="101.1%"
      color="#212121" > {children} </StyledText>
  );
};
export const DescriptionText = ({children}) => {
  return <StyledText
  fontSize="12px"
  lineHeight="137.1%"
  color="#6B6B6B"
  >  {children}</StyledText>;
};

// Returns a HOC that wraps the child ( string || any ) in a StyledText component of the given type
// types include: Heading, SubHeading, Title & Description
export const Text = ({ children, type="description" }) => {
  console.log("found child", children)
  if( typeof children !== "string"){
    return <div>children</div>
  }
  switch (type) {
    case "heading":
      return <HeadingText > { children }</HeadingText>;
    case "subheading":
      return <SubHeadingText >{ children } </SubHeadingText>;
    case "title":
      return <TitleText >{ children } </TitleText>;
    case "description":
      return <DescriptionText >{ children } </DescriptionText>;
    default:
      return <HeadingText > { children }</HeadingText>;
  }
};
