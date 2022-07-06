// create a react context named KanbanContext

import { createContext } from "react";

const KanbanContext = createContext();
// dummy data
const _data = {
    lanes: [
      {
        id: 'lane1',
        title: 'To Do',
        label: '2/2',
        cards: [
          {id: 'Card1', title: 'Write Blog', description: 'Can AI make memes', label: '30 mins', draggable: false},
          {id: 'Card2', title: 'Pay Rent', description: 'Transfer via NEFT', label: '5 mins', metadata: {sha: 'be312a1'}}
        ]
      },
      {
        id: 'lane2',
        title: 'In Progress',
        label: '2/2',
        cards: [
          {id: 'Card1', title: 'Write Blog', description: 'Elvis is a cat', label: '30 mins', draggable: false},
          {id: 'Card2', title: 'Code', description: 'Build Taskez', label: '5 mins', metadata: {sha: 'be311a1'}}
        ]
      },
      {
        id: 'lane3',
        title: 'Completed',
        label: '0/0',
        cards: []
      }
    ]
  }

// create a custom hook that provides the state for the KanbanContext
    const useKanbanContext = () => {
        const [data, setData] = useState(_data);
    
        const happyBirthday = () => setAge(age + 1);


        return {
            data, setData, happyBirthday
        }
    }




const KanbanProvider = ({ children }) => {

   
    return (
      <KanbanContext.Provider value={{ name, age, happyBirthday }}>
        {children}
      </KanbanContext.Provider>
    );
  };