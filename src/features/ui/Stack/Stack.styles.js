import styled from "styled-components";

// General Purpose Styled Flexbox Component.
export const Stack = styled.div`
  display: flex;
  gap: ${(props) => (props.spacing || 2) * 0.25}rem;
  flex-wrap: ${(props) => (props.wrap ? "wrap" : "nowrap")};
  flex-direction: ${(props) => (props.direction ? props.direction : "column")};
  justify-content: ${(props) => (props.justify ? props.justify : "flex-start")};
  align-items: ${(props) => (props.align ? props.align : "center")};
`;
export const Row = styled.div`
  display: flex;
  flex-direction: row;
  height: ${({fullScreen}) => (fullScreen ?"100vh" : "100%")};
  width: ${({fullScreen}) => (fullScreen ?"100vw" : "100%")};
  position: ${({relative}) => (relative ?"relative" : "")};
  background-color: ${(props) =>
    props.background ? props.background : "white"};
`;

export const Col = styled.div`
  flex: ${(props) => (props.size ? props.size : "1")};
  background-color: ${(props) =>
    props.background ? props.background : "white"};
    display: inherit;
    justify-content: ${(props) => (props.justify ? props.justify : "center")};
    align-items: ${(props) => (props.align ? props.align : "center")};
`;

