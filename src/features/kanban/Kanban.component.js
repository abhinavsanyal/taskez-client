import React from "react";
import { Row ,SectionHeader } from "../ui";
import { KanbanProvider } from "./contexts/kanban.context";
import  Board  from "./Board.component";
import { kanban_header_actions } from "./constants/headerActions";

export const Kanban =  () => {

  return (
    <KanbanProvider>
       <Row direction={"column"}>
              <SectionHeader heading="Projects" actions={kanban_header_actions}/>
        <Board />
            </Row>
    </KanbanProvider>
  );
};
