import styled from "styled-components";

// General Purpose Styled Flexbox Component, used to store a verical stack of items.
export const Stack = styled.div`
  display: flex;
  gap: ${(props) => (props.spacing || 2) * 0}rem;
  margin: ${(props) => (props.margin ? props.margin : "")};
  padding: ${(props) => (props.padding ? props.padding : "")};
  flex-wrap: ${(props) => (props.wrap ? "wrap" : "nowrap")};
  flex-direction: ${(props) => (props.direction ? props.direction : "column")};
  justify-content: ${(props) => (props.justify ? props.justify : "flex-start")};
  align-items: ${(props) => (props.align ? props.align : "center")};
  background-color: ${(props) => (props.background ? props.background : "")};
  z-index: inherit;
`;
// General Purpose Styled Flexbox Component, used as a fluid container.
export const Row = styled.div`
  display: flex;
  flex-direction: ${(props) => (props.direction ? props.direction : "row")};
  flex-wrap: ${(props) => (props.wrap ? "wrap" : "nowrap")};
  flex: ${(props) => (props.size ? props.size : "1")};
  color: ${(props) => (props.color ? props.color : "inherit")};
  align-items: ${(props) => (props.align ? props.align : "")};
  justify-content: ${(props) => (props.justify ? props.justify : "")};
  height: ${({ fullScreen }) => (fullScreen ? "100vh" : "100%")};
  width: ${({ fullScreen }) => (fullScreen ? "100vw" : "100%")};
  position: ${({ relative }) => (relative ? "relative" : "")};
  background-color: ${(props) => (props.background ? props.background : "")};
  margin: ${(props) => (props.margin ? props.margin : "")};
  padding: ${(props) => (props.padding ? props.padding : "")};
  border-left: ${(props) => (props.borderLeft ? props.borderLeft : "")};
  border-right: ${(props) => (props.borderRight ? props.borderRight : "")};
  border-top: ${(props) => (props.borderTop ? props.borderTop : "")};
  border-bottom: ${(props) => (props.borderBottom ? props.borderBottom : "")};
  max-height: ${(props) => (props.maxHeight ? props.maxHeight : "none")};
  gap: ${(props) => (props.gap ? props.gap : "")};
  z-index: inherit;
`;

// General Purpose Styled Flexbox Component, used as Column inside a Row.

export const Col = styled.div`
  margin: 5px;
  flex: ${(props) => (props.size ? props.size : "1")};
  width: ${({ width }) => (width ? width : "")};
  color: ${(props) => (props.color ? props.color : "inherit")};
  background-color: ${(props) => (props.background ? props.background : "")};
  display: inherit;
  justify-content: ${(props) => (props.justify ? props.justify : "center")};
  align-items: ${(props) => (props.align ? props.align : "center")};
  margin: ${(props) => (props.margin ? props.margin : "")};
  padding: ${(props) => (props.padding ? props.padding : "")};
  border-left: ${(props) => (props.borderLeft ? props.borderLeft : "")};
  border-right: ${(props) => (props.borderRight ? props.borderRight : "")};
  border-top: ${(props) => (props.borderTop ? props.borderTop : "")};
  border-bottom: ${(props) => (props.borderBottom ? props.borderBottom : "")};
  z-index: inherit;
`;
