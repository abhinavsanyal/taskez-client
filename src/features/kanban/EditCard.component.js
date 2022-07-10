import React, { useEffect, useState, useRef } from "react";
import { StyledEditCard } from "./Kanban.styles.js";
import { Stack, FormField, Col, Text, User, TextArea } from "../ui";
import { withKanbanContext } from "./contexts/kanban.context.js";
import { useOutsideAlerter } from "./hooks";

export const EditCard = withKanbanContext(
  ({ activeEditCard, handleClose, updateCardDescription, updateCardTitle }) => {

    const componentRef = useRef();
    useOutsideAlerter(componentRef, handleClose);
    return (
      <StyledEditCard ref={componentRef}>
        <Stack direction="row" margin="10px">
          <FormField
            name="title"
            type="text"
            placeholder="Give your task a title."
            value={activeEditCard.title}
            required
            color={"#212121"}
            weight={"500"}
            size={"17px"}
            margin="0"
            onChange={(e) => {
              updateCardTitle(activeEditCard._id, e.target.value);
              }}
          />
        </Stack>
        <Stack direction="row" margin= "15px 0">
          <Col size={0.2}>
            <Text type="description"> Created by </Text>
          </Col>
          <Col size={0.3} justify="flex-start">
            <User
              name={activeEditCard.members[0].name}
              avatarUrl={activeEditCard.members[0].avatar}
              reverse
              iconSize={26}
              textType="description"
            />
          </Col>
        </Stack>
        <Stack direction="row" align={"flex-start"} margin= "15px 0">
          <Col size={0.2} >
            <Text type="description"> Description </Text>
          </Col>
          <Col size={0.8} justify="flex-start" margin="0 15px 0 0">
            <TextArea
              name={"description"}
              type="textarea"
              rows={0}
              placeholder="Describe your task."
              value={activeEditCard.description}
              height={"5rem"}
              onChange={(e) => {
                updateCardDescription(activeEditCard._id, e.target.value);
              }}
            />
          </Col>
        </Stack>
      </StyledEditCard>
    );
  }
);
