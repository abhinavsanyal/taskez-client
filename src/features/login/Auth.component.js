import React from "react";
import {
  Stack,
  Form,
  FormField,
  Button,
  Card,
  Tabs,
  Seperator,
  Heading,
  SubHeading,
  Row,
  Checkbox
} from "../ui";

export const LoginForm = ({ onSubmitHandler }) => {
  return (
    <Stack>
      <Seperator></Seperator>
      <Row>
        <Heading >
          To Continue
          <SubHeading>{"We need your Name /& email"}</SubHeading>
        </Heading>
      </Row>

      <Form onSubmit={onSubmitHandler} >
        <FormField name="email" type="email" placeholder="Email" required />
        <FormField
          name="password"
          type="password"
          placeholder="Password"
          required
          eyeIcon={true}
        />
        <Button type="submit" name="Login" />
        <Row>

        <Checkbox name="Remember Me" value="true" />
        </Row>
      </Form>
    </Stack>
  );
};
export const SignupForm = ({ onSubmitHandler }) => {
  return (
    <Stack>
      <Seperator></Seperator>
      <Form onSubmit={onSubmitHandler} >
        <FormField name="name" type="text" placeholder="Name" required />
        <FormField name="email" type="email" placeholder="Email" required />
        <FormField
          name="password"
          type="password"
          placeholder="Password"
          required
          eyeIcon={true}
        />
        <Button type="submit" name={"Sign up"} />
        <Row >

        <Checkbox name={"Remember Me"} value="true" />
        </Row>

      </Form>
    </Stack>
  );
};

const _tabs = ["Login", "Sign up"];

const _contents = [
  {
    id: "Login",
    component: <LoginForm />,
  },
  {
    id: "Sign up",
    component: <SignupForm />,
  },
];

export const AuthenticationSection = ({ onLogin, onSignup }) => {
  return (
    <Card margin={"0.5rem 6rem"} height={"big"}>
      <Tabs tabs={_tabs} contents={_contents} height={"30rem"} />
    </Card>
  );
};
