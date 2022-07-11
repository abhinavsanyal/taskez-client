import styled from "styled-components";

export const StyledTags = styled.span`
  padding: 5px;
  backround: blue;
`;

export const StyledTag = styled.span`
background: #ECF3F3;
    margin: 0 5px;
    border-radius: 7px;
    padding: 2px;
    font-size: 12px;
`;

export const StyledEditCard = styled.div`
background: #fff;
position: absolute;
right : -30px;
width: 50%;
height: 100%;
box-shadow: -4px 6px 17px rgba(216, 216, 216, 0.59);
z-index: 10;
`;

export const Swatch = styled.div`
  background: ${(props) => (props.background ? props.background : "#F5F9F9")};
  border-radius: ${(props) =>
    props.borderRadius ? props.borderRadius : "7px"};
  padding: 7px 6px;
  margin: 0;
  border: none;
  width: ${(props) => (props.width ? props.width : "17px")};
  height: ${(props) => (props.height ? props.height : "17px")};
  display: flex;
  color: ${(props) => (props.color ? props.color : "#000")};
  justify-content: center;
  text-align: center;
  line-height: 1.2;

  font-weight: 500;
  font-size: 14px;
  line-height: 101.1%;
`;
