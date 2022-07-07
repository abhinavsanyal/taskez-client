import { createContext, useCallback, useState } from "react";
import { useKanban } from "../hooks/useKanban";
const KanbanContext = createContext();
// dummy data
const dummy_data = {
  lanes: [
    {
      id: "lane1",
      title: "To Do",
      label: "2/2",
      cards: [
        {
          id: "Card1",
          title: "Write Blog",
          description: "Can AI make memes",
          label: "30 mins",
          draggable: false,
        },
        {
          id: "Card22",
          title: "Pay Rent",
          description: "Transfer via NEFT",
          label: "5 mins",
          metadata: { sha: "be312a1" },
        },
      ],
    },
    {
      id: "lane2",
      title: "In Progress",
      label: "2/2",
      cards: [
        {
          id: "Card14",
          title: "Write Blog",
          description: "Elvis is a cat",
          label: "30 mins",
          draggable: false,
        },
        {
          id: "Card29",
          title: "Code",
          description: "Build Taskez",
          label: "5 mins",
          metadata: { sha: "be311a1" },
        },
      ],
    },
    {
      id: "lane3",
      title: "Completed",
      label: "0/0",
      cards: [],
    },
  ],
};
// export the KanbanContextProvider
export const KanbanProvider = ({ children }) => {
  return (
    <KanbanContext.Provider value={useKanban(dummy_data)}>
      {children}
    </KanbanContext.Provider>
  );
};

export const withKanbanContext = (Child) => (props) =>
  (
    <KanbanContext.Consumer>
      {(context) => <Child {...props} {...context} />}
    </KanbanContext.Consumer>
  );
