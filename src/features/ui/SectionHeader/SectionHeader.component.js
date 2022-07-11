import { action } from "@storybook/addon-actions";
import React from "react";
import { Row, Text, Col } from "../";

export const SectionHeader = ({ heading = "", actions = [] , statusComponent = <></>}) => {
  return (
    <Row maxHeight={"60px"} justify={"space-between"} align={"center"}>
      <Col size={1} justify={"flex-start"}>
        <Text type="heading">{`${heading}`}</Text>
      </Col>
      <Col size={3} justify={"flex-end"} margin="0 30px">
        {statusComponent}
        {actions.map((action, index) => (
          <SectionHeaderAction
            key={index}
            icon={action.icon}
            text={action.text}
            clickHandler={action.clickHandler}
          />
        ))}
      </Col>
    </Row>
  );
};

const SectionHeaderAction = ({ icon, text, clickHandler }) => {
  return (
    <Row align={"center"} size={0.2}>
      <Col size={1} justify="flex-end">
        <span onClick={() => clickHandler()}>{icon}</span>
        <Text
          type="subheading"
          margin={"0 10px"}
          onClick={() => clickHandler()}
        >
        {text}
        </Text>
      </Col>
      {/* <Col size={3}>
      </Col> */}
    </Row>
  );
};
