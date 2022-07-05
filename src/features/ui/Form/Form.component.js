import React, { useState } from "react";
import { Row } from "../Stack";
import { StyledForm, StyledInput, CheckboxLabel } from "./Form.styles";
import {AiOutlineEye, AiOutlineEyeInvisible} from "react-icons/ai";

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

//Create a checkbox component
export const Checkbox = ({ name, value, onChange, required }) => {
  return (
    <CheckboxLabel>
      <input
        type="checkbox"
        name="remember"
        onChange={onChange}
        value={value}
      />
      {name}
    </CheckboxLabel>
  );
};
