import { createContext } from "react";
import { useKanban } from "../hooks";
import { dummy_kanban_data } from "../constants";

const KanbanContext = createContext();

// export the KanbanContextProvider
export const KanbanProvider = ({ children }) => {
  return (
    <KanbanContext.Provider value={useKanban(dummy_kanban_data)}>
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
