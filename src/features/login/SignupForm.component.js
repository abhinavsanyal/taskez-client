import React, { useEffect } from "react";
import {
  Stack,
  Form,
  FormField,
  Button,
  Seperator,
  Row,
  Checkbox,
  useForm,
  validateSignup,
  displayError,
} from "../ui";
import { useAxios } from "../../hooks";
import { getSignupConfig } from "./api";

export const SignupForm = () => {
  const { values, handleChange, errors, handleSubmit } = useForm(() => {
    makeRequest({ ...values, password2: values.password });
  }, validateSignup);
  const { data, loading, error, makeRequest } = useAxios(getSignupConfig());

  useEffect(() => {
    console.log("signup success", data);
  }, [data]);

  return (
    <Stack>
      <Seperator></Seperator>
      <Form onSubmit={handleSubmit}>
        <FormField
          name="name"
          type="text"
          placeholder="Name"
          required
          onChange={handleChange}
          margin="1.2rem 3.2rem"
        />
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
        {displayError(errors, error)}

        <Button
          type="submit"
          name={"Sign up"}
          margin="1rem 3.5rem 1rem 3.5rem"
          loading={loading}
        />
        <Row>
          <Checkbox name={"Remember Me"} onChange={handleChange} value="true" />
        </Row>
      </Form>
    </Stack>
  );
};
