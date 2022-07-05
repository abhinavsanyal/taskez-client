import styled from "styled-components";

// General Purpose Styled Button.
export const StyledButton = styled.div`
    background-color: ${({ background }) =>
      background ? background : "#329C89"};
    color: ${({ color }) => (color ? color : "white")};
    border-radius: 0.5rem;
    padding: 0.8rem 0;
    display:flex
    justify-content: center;
    font-size: 1rem;
    font-weight: 700;
    font-family: 'Poppins', sans-serif;
    text-align: center;
    width: -webkit-fill-available;
    letter-spacing: 0.01em;
    margin: 1rem 3.5rem 1rem 3.5rem;
`;

// General purpose Styled Card .
export const StyledCard = styled.div`
  background: ${({ background }) => (background ? background : "white")};
  border: 2px solid rgba(26, 59, 88, 0.24);
  border-radius: 65px;
  width: 80%;
  max-width: 570px ;
  padding: ${({ padding }) => (padding ? padding : "4rem 4rem")};
  margin: ${({ margin }) => (margin ? margin : "0.8rem 5rem")};
`;

// Seperator that is used to seperate sections
export const Seperator = styled.div`
  height: 2px;
  background-color: #4091df1f;
  width: ${({ width }) => (width ? width : "100%")};
  margin: ${({ margin }) => (margin ? margin : "3rem 0 0.5rem 0")};
  width: 70%;
`;

// create a heading styled component
export const Heading = styled.h1`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 500;
  font-size: 21px;
  line-height: 101.1%;
  color: #1a3b58;
  margin-top: 1.5rem;
  margin-left: 4rem;
  margin-bottom: 0;
`;

//create a subheading styled component
export const SubHeading = styled.h2`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 300;
  font-size: 10px;
  line-height: 15px;
  color: #999999;
`;
