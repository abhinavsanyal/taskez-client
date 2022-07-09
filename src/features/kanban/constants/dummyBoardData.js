import avatar1 from "../../assets/avatar1.svg";
import avatar2 from "../../assets/avatar2.svg";
import avatar3 from "../../assets/avatar3.svg";
import avatar4 from "../../assets/avatar4.svg";



// dummy data
export const dummy_kanban_data = {
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
          members: [ {
            id: 1,
            name: "John Doe",
            avatar: avatar1,
          },
          {
            id: 2,
            name: "Jane Doe",
            avatar: avatar2,
          }],
          comments: [],
          label: "30 mins",
          draggable: false,
        },
        {
          id: "Card22",
          title: "Pay Rent",
          description: "Transfer via NEFT",
          members: [ {
            id: 3,
            name: "Janey",
            avatar: avatar1,
          },
          {
            id: 4,
            name: "Scoob",
            avatar: avatar2,
          },],
          comments: [],
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
          members: [ {
            id: 5,
            name: "Mary Doe",
            avatar: avatar1,
          },
          {
            id: 6,
            name: "Doob",
            avatar: avatar2,
          },],
          comments: [],
          label: "30 mins",
          draggable: false,
        },
        {
          id: "Card29",
          title: "Code",
          description: "Build Taskez",
          members: [ {
            id: 7,
            name: "Janey",
            avatar: avatar1,
          },
          {
            id: 8,
            name: "Scoob",
            avatar: avatar2,
          },],
          comments: [],
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