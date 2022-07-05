import styled from "styled-components";

// General Purpose Styled Flexbox Component.
export const Stack = styled.div`
  display: flex;
  gap: ${(props) => (props.spacing || 2) * 0.25}rem;
  flex-wrap: ${(props) => (props.wrap ? "wrap" : "nowrap")};
  flex-direction: ${(props) => props.direction || "row"};
`;
