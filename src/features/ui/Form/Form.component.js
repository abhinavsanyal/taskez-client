import React, { useState } from "react";
import { Row } from "../Stack";
import { StyledForm, StyledInput, CheckboxLabel } from "./Form.styles";
import {AiOutlineEye, AiOutlineEyeInvisible, AiOutlineSearch,} from "react-icons/ai";
import {FiSearch} from "react-icons/fi";

// Form component using the StyledForm component
export const Form = ({ children, ...props }) => {
  return <StyledForm {...props}>{children}</StyledForm>;
};
// FormField component using the StyledInput component
export const FormField = ({
  name,
  type,
  placeholder,
  value,
  onChange,
  required,
  eyeIcon = false
}) => {
  const [passwordShown, setPasswordShown] = useState(false);

  const togglePassword = () => {
    setPasswordShown(!passwordShown);
  }

  return (
    <Row relative>
      <StyledInput
        name={name}
        type={
          type === "password" ? (passwordShown ? "text" : "password") : type
        }
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required={required}
      >
      </StyledInput>
      {type === "password" &&  passwordShown &&  eyeIcon && (
        
        <AiOutlineEye style={{position:"absolute", right: "18%", top:"40%"}} onClick={togglePassword}></AiOutlineEye>)
      }
      {type === "password" &&  !passwordShown && eyeIcon && (
        
        <AiOutlineEyeInvisible style={{position:"absolute",right: "18%", top:"40%"}} onClick={togglePassword}></AiOutlineEyeInvisible>)
      }

    </Row>
  );
};

//Checkbox component using the CheckboxLabel component
export const Checkbox = ({ color,name, value, onChange, required= false}) => {
  return (
    <CheckboxLabel color={color}>
      <input
        type="checkbox"
        name={name}
        onChange={onChange}
        value={value}
        required={required}
      />
      {name}
    </CheckboxLabel>
  );
};

export const SearchInput = ({
  name,
  color="#9A9A9A",
  placeholder,
  placeholder_weight="normal",
  placeholder_size="1.5rem",
  placeholder_line_height="1.5rem",
  value,  onChange, required= false,
align }) => { 
  return (
    <Row relative align={align}>
      <StyledInput
        name={name}
        type={"text"}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required={required}
        outline={"none"}
        color={color}
        weight={placeholder_weight}
        size={placeholder_size}
        lineHeight={placeholder_line_height}
      >
      </StyledInput>
      <FiSearch style={{position:"absolute", left: "8%", top:"42%"}} size={placeholder_size} color={color}></FiSearch>
    </Row>
  );
}
