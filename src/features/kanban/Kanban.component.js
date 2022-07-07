import React from "react";
import { Card } from "../ui";
import { KanbanProvider } from "./contexts/kanban.context";
import { DragDropContext } from 'react-beautiful-dnd';
import  Board  from "./Board.component";

export const Kanban =  () => {

  const onDragEnd = (result) => {
    // Todo: Implement sorting of cards in a lane
    
  }

  return (
    <KanbanProvider>
      <DragDropContext onDragEnd={() => {}}  >
      {/* {(provided) => (
        <Container ref={provided.innerRef} {...provided.droppableProps}>
        {ordered.map((key, index) => (
          <Column key={key} index={index} title={key} quotes={columns[key]} isScrollable={withScrollableColumns} isCombineEnabled={isCombineEnabled} useClone={useClone} />
          ))}
          {provided.placeholder}
          </Container>
        )} */}
        <Board />
        </DragDropContext>

    </KanbanProvider>
  );
};
