import React from "react";
import { Row, SectionHeader } from "../ui";
import { KanbanProvider } from "./contexts/kanban.context";
import Board from "./Board.component";
import { Helmet } from "react-helmet";
import { MdFilterList } from "react-icons/md";

const KanbanHeader = () => {
  const kanban_header_actions = [
    {
      id: "filter",
      text: "Filter",
      icon: <MdFilterList />,
      clickHandler: () => {
        console.log("filter is clicked");
        
      },
    },
  ];

  return <SectionHeader heading="Projects" actions={kanban_header_actions} />;
};

export const Kanban = () => {
  return (
    <KanbanProvider>
      <Helmet>
        <title>{"Taskez | Kanban"}</title>
      </Helmet>
      <Row direction={"column"}>
        <KanbanHeader />
        <Board />
      </Row>

    </KanbanProvider>
  );
};
