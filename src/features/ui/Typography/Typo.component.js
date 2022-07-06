import React from "react";
import { StyledText } from "./Typo.styles";

export const HeadingText = ({children}) => {
  return (
    <StyledText
    fontWeight="500"
    fontSize="24px"
    lineHeight="101.1%"
    color="#212121" >
       {children[0]}
      </StyledText>
    );
  };
  export const SubHeadingText = ({children}) => {
  console.log("found child", children)
  return <StyledText > {children[0]}</StyledText>;
};
export const TitleText = ({children}) => {
  return (
    <StyledText
      fontWeight="500"
      fontSize="14px"
      lineHeight="101.1%"
      color="#212121" > {children[0]} </StyledText>
  );
};
export const DescriptionText = ({children}) => {
  return <StyledText
  fontSize="12px"
  lineHeight="137.1%"
  color="#6B6B6B"
  >  {children[0]}</StyledText>;
};

// Returns a HOC that wraps the child ( string || any ) in a StyledText component of the given type
// types include: Heading, SubHeading, Title & Description
export const Text = ({ children, type="description" }) => {
  switch (type) {
    case "heading":
      return <HeadingText > { children && children.length &&  children[1]}</HeadingText>;
    case "subheading":
      return <SubHeadingText >{ children && children.length &&  children[1]} </SubHeadingText>;
    case "title":
      return <TitleText >{ children && children.length &&  children[1]} </TitleText>;
    case "description":
      return <DescriptionText >{ children && children.length &&  children[1]} </DescriptionText>;
    default:
      return <HeadingText > { children && children.length &&  children[1]}</HeadingText>;
  }
};
