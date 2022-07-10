import { action } from "@storybook/addon-actions";
import React from "react";
import { Row, Text, Col } from "../";

export const SectionHeader = ({ heading = "", actions = [] }) => {
  return (
    <Row maxHeight={"60px"} justify={"space-between"} align={"center"}>
      <Col size={1} justify={"flex-start"}>
        <Text type="heading">{`${heading}`}</Text>
      </Col>
      <Col size={3} justify={"flex-end"} margin="0 30px">
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

const SectionHeaderAction = ({ icon, text , clickHandler}) => {
  return (
    <Row align={"center"} onClick={()=>clickHandler()}>
      <Col size={1} justify="flex-end">
        {icon}
        <Text type="subheading" margin={"0 10px"}>
          {text}
        </Text>
      </Col>
      {/* <Col size={3}>
      </Col> */}
    </Row>
  );
};
