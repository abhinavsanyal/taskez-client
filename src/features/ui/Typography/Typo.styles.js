import styled from "styled-components";

export const StyledText = styled.p`
    font-family: ${props => props.fontFamily ? props.fontFamily: "Poppins"};
    font-size: ${props => props.fontSize ? props.fontSize: "17px"};
    font-weight: ${props => props.fontWeight ? props.fontWeight: "400"};                                                                                                 \\
    font-style: normal;
    line-height: 101.1%;
    letter-spacing: 0.05em;
    color: ${props => props.color ? props.color: "#3A3A3A"};
    margin: ${props => props.margin ? props.margin: "0"};
    `