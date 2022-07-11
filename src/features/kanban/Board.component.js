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
    isEditing,
    closeCardEditor,
    openCardEditor,
    removeCard,
    addNewCard,
    updateBoard,
    updateCardTitle,
    updateCardDescription,
  }) => {
    console.log("Board rendered", data);
    return (
      <DragDropContext onDragEnd={updateBoard}>
        <Row size={1} wrap align="flex-start" gap="20px" relative>
          {data &&
            data.map((lane) => (
              <Col size={0.33} key={lane._id}>
                <Card
                  key={lane._id}
                  margin={"0"}
                  background="#F5F9F9"
                  border={"none"}
                  borderRadius="15px"
                  padding="14px 20px"
                  minHeight="40rem"
                  maxHeight="35rem"
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
                      id={lane._id}
                      onClickhandler={addNewCard}
                    />
                  </Row>
                  <div style={{overflow:"scroll", maxHeight:"inherit"}}>

                  <Droppable droppableId={lane._id}>
                    {(provided, snapshot) => (
                      <div
                        style={{minHeight:"30rem"}}
                        key={lane._id}
                        ref={provided.innerRef}
                        {...provided.droppableProps}
                      >
                        {lane.cards.map((card, index) => (
                          <KanbanCard
                            key={card._id}
                            card={card}
                            index={index}
                            updateCardTitle={updateCardTitle}
                            updateCardDescription={updateCardDescription}
                            removeCard={removeCard}
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
                  </div>
                </Card>
              </Col>
            ))}

          {isEditing && (
            <EditCard handleClose={closeCardEditor} />
          )}
        </Row>
      </DragDropContext>
    );
  }
);
export default withKanbanContext(Board);
