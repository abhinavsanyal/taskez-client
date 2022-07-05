import { Button } from "../features";
import { AiOutlinePlus } from "react-icons/ai";

export default {
  title: "Button",
  component: Button,
};

const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  name: "Sign up",
};
export const WithIcon = Template.bind({});
WithIcon.args = {
  name: "",
  icon: <AiOutlinePlus />,
  color: "#329C89",
};
