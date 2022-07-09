import React, { useEffect, useState, useRef } from "react";
import { StyledEditCard } from "./Kanban.styles.js";
import { Stack, FormField, Col, Text, User, TextArea } from "../ui";
import { withKanbanContext } from "./contexts/kanban.context.js";
import { useOutsideAlerter } from "./hooks";

export const EditCard = withKanbanContext(
  ({ cardId, getCardDetails, handleClose, updateCardDescription, updateCardTitle }) => {
    const [card, setCard] = useState({});
    const [author, setAuthor] = useState({});

    const componentRef = useRef();
    useOutsideAlerter(componentRef, handleClose);

    useEffect(() => {
      let current = getCardDetails(cardId);
      if (current) {
        setCard(current);
        setAuthor(current.members[0]);
      }
    }, [cardId]);

    return (
      <StyledEditCard ref={componentRef}>
        <Stack direction="row">
          <FormField
            name="title"
            type="text"
            placeholder="Give your task a title."
            value={card.title}
            required
            color={"#212121"}
            weight={"500"}
            size={"17px"}
            margin="0"
            onChange={(e) => {
              updateCardTitle(cardId, e.target.value);
              }}
          />
        </Stack>
        <Stack direction="row" margin= "15px 0">
          <Col size={0.2}>
            <Text type="description"> Created by </Text>
          </Col>
          <Col size={0.3} justify="flex-start">
            <User
              name={author.name}
              avatarUrl={author.avatar}
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
              value={card.description}
              height={"5rem"}
              onChange={(e) => {
                updateCardDescription(cardId, e.target.value);
              }}
            />
          </Col>
        </Stack>
      </StyledEditCard>
    );
  }
);
