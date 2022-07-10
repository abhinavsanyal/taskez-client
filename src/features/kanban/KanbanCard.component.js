import React, { memo } from "react";
import {
  Card,
  Row,
  Col,
  Text,
  Form,
  TextInputTitle,
  TextArea,
  AvatarList,
} from "../ui";
import { MdOutlineChatBubbleOutline } from "react-icons/md";
import NaturalDragAnimation from "natural-drag-animation-rbdnd";

import { Draggable } from "react-beautiful-dnd";

//  Board card component that renders a Card component with a form with a title and description
export const KanbanCard = memo(
  ({
    isDraggable = true,
    index,
    updateCardTitle,
    updateCardDescription,
    removeCard,
    onClickHandler,
    card
  }) => {
    return (
      <Draggable
        draggableId={card._id}
        index={index}
        isDragDisabled={!isDraggable}
        disableInteractiveElementBlocking
      >
        {(provided, snapshot) => (
          <NaturalDragAnimation
            style={provided.draggableProps.style}
            snapshot={snapshot}
          >
            {(style) => (
              <div
                {...provided.draggableProps}
                {...provided.dragHandleProps}
                ref={provided.innerRef}
                style={style}
                onClick={(e) => {
                  onClickHandler(card);
                }}
              >
                <Card
                  padding={"1rem"}
                  margin={"1rem 0 0.5rem 0"}
                  border={"none"}
                  background={"#FFFFFF"}
                >
                  <Form>
                    <Row>
                      <Col background="blue">
                        <TextInputTitle
                          name={"title"}
                          type="text"
                          placeholder="Give your task a title."
                          value={card.title}
                          onChange={(e) => {
                            updateCardTitle(card._id, e.target.value);
                          }}
                        />
                      </Col>
                    </Row>
                    <Row>
                      <Col>
                        <TextArea
                          name={"description"}
                          type="textarea"
                          rows={0}
                          placeholder="Describe your task."
                          value={card.description}
                          onChange={(e) => {
                            updateCardDescription( card._id, e.target.value);
                          }}
                          border="none"
                        />
                      </Col>
                    </Row>
                    <Row>
                      <Col size={3} justify={"flex-start"}>
                        <AvatarList
                          users={card.members}
                          align={"center"}
                          justify={"flex-start"}
                        />
                      </Col>
                      <Col size={1} justify={"flex-end"}>
                        <Text type="description" margin="5px">{`${
                          card.comments && card.comments.length > 0 ? card.comments.length : ""
                        }`}</Text>
                        <MdOutlineChatBubbleOutline size={14} />
                      </Col>
                    </Row>
                  </Form>
                </Card>
              </div>
            )}
          </NaturalDragAnimation>
        )}
      </Draggable>
    );
  }
);
