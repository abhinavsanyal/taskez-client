import React from "react";
import { Row, Text, Stack } from "../";
import { useLocation } from "react-router-dom";
import { SectionHeader } from "../";

export const UnderConstruction = () => {
  const location = useLocation();
  const pageName =
    location.pathname.split("/")[2].charAt(0) +
    location.pathname.split("/")[2].slice(1);
  return (
    <Row justify={"center"} align={"center"}>
      <Stack>
        <Text type="heading" margin="14px">{`${pageName} Page is under construction`}</Text>
        <Text type="subheading">{`Feature Coming Soon.`}</Text>
      </Stack>
    </Row>
  );
};
