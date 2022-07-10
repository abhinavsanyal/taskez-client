import React from "react";
import {
  Card,
  Tabs,
} from "../ui";

import { LoginForm } from "./LoginForm.component";
import { SignupForm } from "./SignupForm.component";

const tab_contents = [
  {
    id: "Log In",
    component: (props) => <LoginForm {...props} />,
  },
  {
    id: "Sign up",
    component: (props) => <SignupForm {...props}/>,
  },
];

export const AuthenticationSection = () => {
  return (
    <Card
      margin={"0.5rem 6rem"}
      height={"big"}
      borderRadius={"65px"}
      border={"2px solid rgba(26, 59, 88, 0.24)"}
    >
      <Tabs contents={tab_contents} height={"30rem"} />
    </Card>
  );
};
