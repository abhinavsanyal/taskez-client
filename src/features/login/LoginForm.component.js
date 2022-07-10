
import React, { useEffect } from "react";
import {
    Stack,
    Form,
    FormField,
    Button,
    Seperator,
    Heading,
    SubHeading,
    Row,
    Checkbox,
    useForm,
    validateLogin,
    displayError
  } from "../ui";
  import { useAxios } from "../../hooks";
import { getLoginConfig } from "./api";
import { useNavigate } from "react-router-dom";


export const LoginForm = ({ actionCallback}) => {
    const navigate = useNavigate();
    const [data, makeLoginRequest, loaded, error, {setAuthToken,setRemember  }] = useAxios(getLoginConfig());
    const { values, handleChange, errors, handleSubmit } = useForm(() => {
      makeLoginRequest(values);
    }, validateLogin);
  
    useEffect(() => {
        if(data) {
          const { token, refresh_token } = data;
         setAuthToken(token, refresh_token);
          navigate(`/projects`);
      }
    }, [data]);
  
    return (
      <Stack>
        <Seperator></Seperator>
        <Row>
          <Heading>
            To Continue
            <SubHeading>{"We need your Name & Email"}</SubHeading>
          </Heading>
        </Row>
  
        <Form onSubmit={handleSubmit}>
          <FormField
            name="email"
            type="email"
            placeholder="Email"
            required
            onChange={handleChange}
            margin="1.2rem 3.2rem"
            value={values.email || ''}
          />
          <FormField
            name="password"
            type="password"
            placeholder="Password"
            required
            onChange={handleChange}
            eyeIcon={true}
            margin="1.2rem 3.2rem"
            value={values.password || ''}
          />
         {displayError(errors, error )}
          <Button type="submit" name="Login" margin="1rem 3.5rem 1rem 3.5rem" loading={loaded} />
          <Row>
            <Checkbox name="Remember Me" onChange={(e)=>{
              setRemember(e.target.checked);
            }} value="true" />
          </Row>
        </Form>
      </Stack>
    );
  };