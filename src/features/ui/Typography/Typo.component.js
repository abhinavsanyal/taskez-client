import React from "react";
import { StyledText } from "./Typo.styles";

export const HeadingText = ({
  children,
  fontSize,
  fontWeight,
  color,
  margin,
}) => {
  return (
    <StyledText
      fontWeight={fontWeight ? fontWeight : "500"}
      fontSize={fontSize ? fontSize : "24px"}
      lineHeight="101.1%"
      margin={margin}
      color={color ? color : "#212121"}
    >
      {children}
    </StyledText>
  );
};
export const SubHeadingText = ({
  children,
  fontSize,
  fontWeight,
  color,
  margin,
}) => {
  return (
    <StyledText
      fontSize={fontSize}
      fontWeight={fontWeight}
      color={color}
      margin={margin}
    >
      {" "}
      {children}
    </StyledText>
  );
};
export const TitleText = ({
  children,
  fontSize,
  fontWeight,
  color,
  margin,
}) => {
  return (
    <StyledText
      fontWeight={fontWeight ? fontWeight : "500"}
      fontSize={fontSize ? fontSize : "14px"}
      lineHeight="101.1%"
      color={color ? color : "#212121"}
      margin={margin}
    >
      {" "}
      {children}{" "}
    </StyledText>
  );
};
export const DescriptionText = ({ children, margin }) => {
  return (
    <StyledText
      fontSize="12px"
      lineHeight="137.1%"
      color="#6B6B6B"
      margin={margin}
    >
      {" "}
      {children}
    </StyledText>
  );
};

// Returns a HOC that wraps the child ( string || any ) in a StyledText component of the given type
// types include: Heading, SubHeading, Title & Description
export const Text = ({
  children,
  type = "description",
  fontSize,
  fontWeight,
  color,
  margin = "0",
}) => {
  if (typeof children !== "string") {
    return <div>children</div>;
  }
  switch (type) {
    case "heading":
      return (
        <HeadingText
          fontSize={fontSize}
          fontWeight={fontWeight}
          color={color}
          margin={margin}
        >
          {" "}
          {children}
        </HeadingText>
      );
    case "subheading":
      return (
        <SubHeadingText
          fontSize={fontSize}
          fontWeight={fontWeight}
          color={color}
          margin={margin}
        >
          {children}{" "}
        </SubHeadingText>
      );
    case "title":
      return (
        <TitleText
          fontSize={fontSize}
          fontWeight={fontWeight}
          color={color}
          margin={margin}
        >
          {children}{" "}
        </TitleText>
      );
    case "description":
      return <DescriptionText margin={margin}>{children} </DescriptionText>;
    default:
      return (
        <HeadingText
          fontSize={fontSize}
          fontWeight={fontWeight}
          color={color}
          margin={margin}
        >
          {" "}
          {children}
        </HeadingText>
      );
  }
};
