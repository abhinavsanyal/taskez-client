import styled from "styled-components";
import { Checkbox } from "./Form.component";

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: ${({ width }) => (width ? width : "100%")};
  border-radius: 0.5rem;
  height: ${({ height }) => (height ? height : "100%")};
`;

export const StyledInput = styled.input`
  background: #ffffff;
  border: 1px solid #cbdbea;
  border-radius: 8px;
  padding: 0 0.6rem;
  margin: 1.2rem 3.5rem;
  width: -webkit-fill-available;
  height: 45px;
`;

export const CheckboxLabel = styled.label`
  margin: ${({ margin }) => (margin ? margin : "1rem 0 0 3.5rem")};
  font-family: "Poppins";
  font-style: normal;
  font-weight: 300;
  font-size: 10px;
  line-height: 15px;
  color: rgba(26, 59, 88, 0.61);
  & input[type="checkbox" i] {
    accent-color: #329c89;
    margin-right: 6px;
    vertical-align: middle;
  }
 
`;
