
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

export const LoginForm = () => {
    const { data, loading, error, makeRequest } = useAxios(getLoginConfig());
    const { values, handleChange, errors, handleSubmit } = useForm(() => {
      makeRequest(values);
    }, validateLogin);
  
    useEffect(() => {
      console.log("login success", data);
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
          />
          <FormField
            name="password"
            type="password"
            placeholder="Password"
            required
            onChange={handleChange}
            eyeIcon={true}
            margin="1.2rem 3.2rem"
          />
         {displayError(errors, error )}
          <Button type="submit" name="Login" margin="1rem 3.5rem 1rem 3.5rem" loading={loading} />
          <Row>
            <Checkbox name="Remember Me" onChange={handleChange} value="true" />
          </Row>
        </Form>
      </Stack>
    );
  };