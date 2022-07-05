import React from 'react';
import { StyledCard } from './Common.styles';

// A Card component using StyledCard component that wraps around the children
// The children can be any React component
export const Card = ({ children , props}) => {
  return <StyledCard {...props}>{children}</StyledCard>;
}

