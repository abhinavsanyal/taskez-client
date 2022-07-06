import {Card} from "./Card.component";


export default {
  title: "Card",
  component: Card,
};

const Template = (args) => {

return (<Card {...args} >
    This is a card component
    </Card> );
}
export const PrimaryColorCard = Template.bind({});
PrimaryColorCard.args = {
  background: "#329C89",
    padding: "20px",
    margin: "20px",
    shadow: "0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)",
    borderRadius: "5px",
    border: "none"
};
export const SecondaryColorCard = Template.bind({});
SecondaryColorCard.args = {
    background: "#fff",
    padding: "20px",
    margin: "20px",
    shadow: "0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)",
    borderRadius: "5px",
    border: "none"
};

