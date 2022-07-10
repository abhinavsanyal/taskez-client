import React from "react";
import { Row, Text, Stack } from "../";
import { useLocation } from "react-router-dom";
import { SectionHeader } from "../";

export const UnderConstruction = () => {
  const location = useLocation();
  return (
    <Row justify={"center"} align={"center"}>
      <Stack>
        <Text type="heading" margin="14px">{`${location.pathname} Page is under construction`}</Text>
        <Text type="subheading">{`Feature Coming Soon.`}</Text>
      </Stack>
    </Row>
  );
};
