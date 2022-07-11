import { useCallback, useEffect, useState, useMemo } from "react";
import { v4 as uuidv4 } from "uuid";
import { useAxios } from "../../../hooks";

const useKanbanApi = () => {
  // write logic for polling the api fetching the board data every 5 seconds
  // and updating the board state with the new data
  const [polling, setPolling] = useState(false);
  const [pollingInterval, setPollingInterval] = useState(null);

  // API call to get all the kanban data
  const [kanbanData, fetchBoard, isBoardLoaded, isBoardError] = useAxios({
    url: "/lanes",
    method: "GET",
  });
  // API for adding a new card
  const [newCard, createCard] = useAxios({ url: "/cards", method: "POST" });
  // API for updating board after moving a card
  const [cardMoved, changeCardPosition] = useAxios({
    url: "/cards/move",
    method: "POST",
  });
  // API for updating a card title and / or description
  const [cardUpdated, updateCard] = useAxios({
    url: "/cards/update",
    method: "POST",
  });

  // API for seeding the database with 3 lanes ToDo, InProgress and Completed
  // ToDo : Move seed logic to backend, Once we have a addLane API integration.
  const [seedData, seedDatabase] = useAxios({
    url: "/lanes/seed",
    method: "GET",
  });

  const startPolling = useCallback(() => {
    setPolling(true);
    setPollingInterval(
      setInterval(() => {
        fetchBoard();
      }, 5000)
    );
  }, [fetchBoard]);

  useEffect(() => {
    // start polling the board data
    startPolling();
    // stop polling the board data when the component unmounts
    return () => {
      setPolling(false);
      clearInterval(pollingInterval);
    };
  }, [seedData, newCard, cardMoved, cardUpdated]);

  return {
    kanbanData,
    fetchBoard,
    createCard,
    changeCardPosition,
    updateCard,
    seedDatabase,
  };
};

// Custom hook that provides the state for the KanbanContext
export const useKanban = () => {
  const {
    kanbanData,
    createCard,
    changeCardPosition,
    updateCard,
    seedDatabase,
  } = useKanbanApi();
  const [data, setData] = useState(kanbanData);
  const [isEditing, setIsEditing] = useState(false);
  const [activeEditCard, setActiveEditCard] = useState(null);
  const [filterUsers, setFilterUsers] = useState(false);

  const openCardEditor = (card) => {
    setIsEditing(true);
    setActiveEditCard(card);
  };

  const closeCardEditor = () => {
    setIsEditing(false);
    setActiveEditCard(null);
  };

  // A function to get the details of a card by its id
  const getCardDetails = useCallback(
    (cardId) => {
      //  find the card with the given id in the data where data has lanes and a lane has cards.
      const card = data.reduce((acc, lane) => {
        if (acc) return acc;
        return lane.cards.find((card) => card._id === cardId);
      }, null);
      return card;
    },
    [data]
  );

  //  Function that will remove a card from the lane by id
  const removeCard = useCallback(
    (laneId, cardId) => {
      // TODO: remove the card from the lane
    },
    [data]
  );

  //  Function that will add a new card to the lane
  const addNewCard = useCallback(
    async (laneId) => {
      try {
        const newCard = {
          title: "",
          description: "",
        };
        const card = await createCard({ laneId, ...newCard });
        if (card) {
          openCardEditor(card);
        }
      } catch (error) {
        console.log(error);
      }
    },
    [data, createCard]
  );

  //  Function for onDragEnd callback for react-beautiful-dnd
  const updateBoard = useCallback(
    async ({ destination, source, draggableId }) => {
      try {
        if (!destination) {
          return;
        }

        if (
          destination.droppableId === source.droppableId &&
          destination.index === source.index
        ) {
          return;
        }
        updateBoardLocally({ destination, source, draggableId });
        await changeCardPosition({
          destinationId: destination.droppableId,
          sourceId: source.droppableId,
          destinationIdx: destination.index,
          sourceIdx: source.index,
          cardId: draggableId,
        });
      } catch (error) {
        console.log(error);
      }
    },
    [data]
  );

  //  Function that will update the card title and description in local state .
  // This is done to avoid UI latency while updating the card asynchronously with the API
  const updateBoardLocally = ({ destination, source, draggableId }) => {
    // If the card is moved to a different lane
    if (destination.droppableId !== source.droppableId) {
      const sourceLane = data.find((lane) => lane._id === source.droppableId);
      const targetLane = data.find(
        (lane) => lane._id === destination.droppableId
      );
      const card = sourceLane.cards.find((card) => card._id === draggableId);
      sourceLane.cards = sourceLane.cards.filter(
        (card) => card._id !== draggableId
      );
      targetLane.cards.splice(destination.index, 0, card);
      setData([...data]);
    } else {
      // If the card is moved to a different index in the same lane
      const lane = data.find((lane) => lane._id === destination.droppableId);
      const newCards = [...lane.cards];
      newCards.splice(source.index, 1);
      newCards.splice(
        destination.index,
        0,
        lane.cards.find((card) => card._id === draggableId)
      );
      setData(
        data.map((lane) => {
          if (lane._id === destination.droppableId) {
            return {
              ...lane,
              cards: newCards,
            };
          }
          return lane;
        })
      );
    }
  };

  //  Function that will update a card's title
  const updateCardTitle = useCallback(
    async (cardId, title) => {
      try {
        // update activeEditCard title
        setActiveEditCard((prevCard) => {
          if (prevCard._id === cardId) {
            return {
              ...prevCard,
              title,
            };
          }
          return prevCard;
        });
        await updateCard({
          id: cardId,
          title,
          description: getCardDetails(cardId).description,
        });
      } catch (error) {
        console.log(error);
      }
    },
    [data]
  );

  //  Function that will update a card's description
  const updateCardDescription = useCallback(
    async (cardId, description) => {
      try {
        // update activeEditCard description
        setActiveEditCard((prevCard) => {
          if (prevCard._id === cardId) {
            return {
              ...prevCard,
              description,
            };
          }
          return prevCard;
        });

        await updateCard({
          id: cardId,
          title: getCardDetails(cardId).title,
          description,
        });
      } catch (error) {
        console.log(error);
      }
    },
    [data]
  );

  //  Function that will update a card's label
  const updateCardLabel = useCallback(
    (laneId, cardId, label) => {
      // TODO: update the card label
    },
    [data]
  );

  useEffect(() => {
    if (kanbanData) {
      if (kanbanData.length === 0) {
        seedDatabase(); // add three lanes : todo, inprogress, completed
      } else {
        setData(kanbanData);
      }
    }
    // update the data in the state when kanbanData changes
  }, [kanbanData]);

  // useEffect to update the data in the state when the filterUsers changes
  useEffect(() => {
    if (filterUsers && filterUsers.length > 0) {
      //filter all the cards in the lanes whose author id is in the filterUsers array that contains user objects
      setData(
        kanbanData.map((lane) => {
          return {
            ...lane,
            cards: lane.cards.filter((card) => {
              return filterUsers.find((user) => user._id === card.author._id);
            }),
          };
        })
      );
    } else {
      setData(kanbanData);
    }
  }, [filterUsers, kanbanData]);

  const hook_exports = useMemo(() => {
    return {
      data,
      isEditing,
      activeEditCard,
      setFilterUsers,
      openCardEditor,
      closeCardEditor,
      getCardDetails,
      addNewCard,
      removeCard,
      updateBoard,
      updateCardTitle,
      updateCardDescription,
      updateCardLabel,
    };
  }, [data, isEditing, activeEditCard]);

  return hook_exports;
};
