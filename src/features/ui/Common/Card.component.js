import React from "react";
import { StyledCard } from "./Common.styles";

// A Card component using StyledCard component that wraps around the children
// The children can be any React component
export const Card = ({
  children,
  background,
  padding,
  margin,
  shadow,
  borderRadius,
  border,
  isDragging,
  minHeight,
  maxHeight,
}) => {
  return (
    <StyledCard
      background={background}
      padding={padding}
      margin={margin}
      boxShadow={shadow}
      borderRadius={borderRadius}
      border={border}
      isDragging={isDragging}
      minHeight={minHeight}
      maxHeight={maxHeight}
    >
      {children}
    </StyledCard>
  );
};
