import { createContext } from "react";
import { useKanban } from "../hooks";

const KanbanContext = createContext();

// export the KanbanContextProvider
export const KanbanProvider = ({ children }) => {
  return (
    <KanbanContext.Provider value={useKanban()}>
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
