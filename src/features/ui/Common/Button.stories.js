import { Button , ButtonWithIcon} from "./Button.component";


export default {
  title: "Button",
  component: Button,
};

const ButtonTemplate = (args) => <Button {...args} />;
const ButtonWithIconTemplate = (args) => <ButtonWithIcon {...args} />;

export const Primary = ButtonTemplate.bind({});
Primary.args = {
  name: "Sign up",
};
export const WithIcon = ButtonWithIconTemplate.bind({});
WithIcon.args = {
  color: "#329C89",
  background: "#ECF3F3",
};
