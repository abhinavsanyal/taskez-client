import React from "react";
import { withKanbanContext } from "./contexts/kanban.context";
import {
  Card,
  Row,
  Col,
  Text,
  ButtonWithIcon,
  Form,
  TextInputTitle,
  TextArea,
} from "../ui";
import { Swatch } from "./Kanban.styles";
import { IoMdText } from "react-icons/io";
import { AvatarList } from "../avatar";
import avatar1 from "../assets/avatar1.svg";
import avatar2 from "../assets/avatar2.svg";
import { Droppable, Draggable } from "react-beautiful-dnd";

const _users1 = [
  {
    id: 1,
    name: "John Doe",
    avatar: avatar1,
  },
  {
    id: 2,
    name: "Jane Doe",
    avatar: avatar2,
  },
];
const _users2 = [
  {
    id: 3,
    name: "Janey",
    avatar: avatar1,
  },
  {
    id: 4,
    name: "Scoob",
    avatar: avatar2,
  },
];

//  Board card component that renders a Card component with a form with a title and description
const KanbanCard = ({
  title,
  description,
  index,
  id,
  listId,
  updateCardTitle,
  updateCardDescription,
  removeCard,
  users = [],
}) => {
  return (
    <Draggable draggableId={id} index={index}>
      {(provided, snapshot) => (
        <div
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
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
                    value={title}
                    onChange={(e) => {
                      updateCardTitle(listId, id, e.target.value);
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
                    value={description}
                    onChange={(e) => {
                      updateCardDescription(listId, id, e.target.value);
                    }}
                  />
                </Col>
              </Row>
              <Row>
                <Col size={3} justify={"flex-start"}>
                  <AvatarList
                    users={_users1}
                    align={"center"}
                    justify={"flex-start"}
                  />
                </Col>
                <Col size={1} justify={"flex-end"}>
                  <IoMdText size={14} />
                </Col>
              </Row>
            </Form>
          </Card>
        </div>
      )}
    </Draggable>
  );
};

const Board = ({
  data,
  removeCard,
  updateCard,
  updateCardTitle,
  updateCardDescription,
}) => {
  return (
    <Row size={1} wrap align="flex-start">
      {data.lanes.map((lane) => (
        <Col size={0.3} width={"318px"} key={lane.id}>
          <Card
            key={lane.id}
            margin={"0"}
            background="#F5F9F9"
            border={"none"}
            borderRadius="15px"
            padding="30px 20px"
          >
            <Row>
              <Col size={3} justify={"flex-start"}>
                <Text type="title">{`${lane.title}`}</Text>
              </Col>
              <Col size={1} justify={"flex-end"}>
                <Swatch color="#329C89" background="#ECF3F3" borderRadius="7px">
                  {" "}
                  {lane.cards.length}
                </Swatch>
              </Col>
            </Row>
            <Row>
              <ButtonWithIcon
                icon="plus"
                color="#329C89"
                background="#ECF3F3"
                borderRadius="7px"
                margin={"0"}
                padding={"0"}
              />
            </Row>
            <Droppable droppableId={lane.id}>
              {(provided, snapshot) => (
                <div ref={provided.innerRef} {...provided.droppableProps}>
                  {lane.cards.map((card, index) => (
                    <KanbanCard
                      key={card.id}
                      id={card.id}
                      index={index}
                      title={card.title}
                      description={card.description}
                      label={card.label}
                      metadata={card.metadata}
                      listId={lane.id}
                      updateCardTitle={updateCardTitle}
                      updateCardDescription={updateCardDescription}
                      removeCard={removeCard}
                    />
                  ))}

                  {provided.placeholder}
                </div>
              )}
            </Droppable>
          </Card>
        </Col>
      ))}
    </Row>
  );
};
export default withKanbanContext(Board);
