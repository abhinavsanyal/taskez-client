import { Form, FormField, Checkbox, SearchInput } from "./Form.component";
import { Button } from "../Common";
import { Row } from "../FlexLayout";

export default {
  title: "Form",
  component: Form,
};

const FormTemplate = (args) => {
  return (
    <Form
      onSubmit={(e) => {
        console.log("handle submit");
      }}
    >
      <FormField name="email" type="email" placeholder="Email" required />
      <FormField
        name="password"
        type="password"
        placeholder="Password"
        required
        eyeIcon={true}
      />
      <Button type="submit" name="Login" />
    </Form>
  );
};
const CheckBoxTemplate = (args) => {
  return (
    <Form
      onSubmit={(e) => {
        console.log("handle submit");
      }}
    >
      <Checkbox  color="red" {...args} />
      <Checkbox  color="green" {...args} />
      <Checkbox  color="yellow" {...args} />
      <Checkbox  color="blue" {...args} />
      <Checkbox  color="pink" {...args} />
      <Checkbox color="teal"  {...args} />
      <Checkbox color="aqua"  {...args} />
    </Form>
  );
};
const SearchBarTemplate = (args) => {
  return (
    <Form
      onSubmit={(e) => {
        console.log("handle submit");
      }}
    >
      <SearchInput {...args} />
    </Form>
  );
};
export const BasicForm = FormTemplate.bind({});
BasicForm.args = {};
export const CustomCheckbox = CheckBoxTemplate.bind({});
CustomCheckbox.args = {
  color:"violet",
  name:"Remember Me" ,
  value:true
};
export const SearchBar = SearchBarTemplate.bind({});
SearchBar.args = {
  name: "Search",
  color: "#329C89",
  placeholder: "Search",
  placeholder_weight: "400",
  placeholder_size: "17px",
  placeholder_line_height: "101.1%",
};
