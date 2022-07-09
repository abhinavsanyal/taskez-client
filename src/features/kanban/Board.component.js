import React, { memo } from "react";
import { withKanbanContext } from "./contexts/kanban.context";
import { Card, Row, Col, Text, ButtonWithIcon } from "../ui";
import { Swatch } from "./Kanban.styles";
import { KanbanCard } from "./KanbanCard.component";
import { EditCard } from "./EditCard.component";
import { Droppable, DragDropContext } from "react-beautiful-dnd";

const Board = memo(
  ({
    data,
    removeCard,
    addNewCard,
    updateBoard,
    updateCardTitle,
    updateCardDescription,
  }) => {
    const [isEditing, setIsEditing] = React.useState(false);
    const [activeEditCard, setActiveEditCard] = React.useState(null);

    const openCardEditor = (id) => {
      setIsEditing(true);
      setActiveEditCard(id);
    }

    const closeCardEditor = () => {
      setIsEditing(false);
      setActiveEditCard(null);
    }


    return (
      <DragDropContext onDragEnd={updateBoard}>
        <Row size={1} wrap align="flex-start" gap="20px" relative>
          {data.lanes.map((lane) => (
            <Col size={0.33} key={lane.id}>
              <Card
                key={lane.id}
                margin={"0"}
                background="#F5F9F9"
                border={"none"}
                borderRadius="15px"
                padding="14px 20px"
              >
                <Row>
                  <Col size={3} justify={"flex-start"}>
                    <Text type="title">{`${lane.title}`}</Text>
                  </Col>
                  <Col size={1} justify={"flex-end"}>
                    <Swatch
                      color="#329C89"
                      background="#ECF3F3"
                      borderRadius="7px"
                    >
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
                    id={lane.id}
                    onClickhandler={addNewCard}
                  />
                </Row>
                <Droppable droppableId={lane.id}>
                  {(provided, snapshot) => (
                    <div
                      key={lane.id}
                      ref={provided.innerRef}
                      {...provided.droppableProps}
                    >
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
                          members={card.members}
                          comments={card.comments}
                          isDraggable={
                            card.isDraggable !== null ||
                            card.isDraggable !== undefined
                              ? card.isDraggable
                              : true
                          }
                          onClickHandler={openCardEditor}
                        />
                      ))}

                      {provided.placeholder}
                    </div>
                  )}
                </Droppable>
              </Card>
            </Col>
          ))}

          {isEditing && <EditCard  cardId ={ activeEditCard } handleClose={closeCardEditor} />}
        </Row>
      </DragDropContext>
    );
  }
);
export default withKanbanContext(Board);
