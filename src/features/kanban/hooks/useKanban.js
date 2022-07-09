import { useCallback, useState } from "react";
import { v4 as uuidv4 } from "uuid";
// Custom hook that provides the state for the KanbanContext
export const useKanban = (_data) => {
  const [data, setData] = useState(_data);

  // A function to get the details of a card by its id
  const getCardDetails = useCallback(
    (cardId) => {
      // find the card with the given id in the data where data has lanes and a lane has cards.
      const card = data.lanes.reduce((acc, lane) => {
        if (acc) return acc;
        return lane.cards.find((card) => card.id === cardId);
      }
      , null);
      return card;
    },
    [data]
  );

  // Function to update the order of the cards in the lanes
  const updateCardOrder = useCallback(
    (laneId, cardId, newIndex) => {
      const lane = data.lanes.find((lane) => lane.id === laneId);
      const card = lane.cards.find((card) => card.id === cardId);
      const oldIndex = lane.cards.indexOf(card);
      const newCards = [...lane.cards];
      newCards.splice(oldIndex, 1);
      newCards.splice(newIndex, 0, card);
      setData({
        ...data,
        lanes: data.lanes.map((lane) => {
          if (lane.id === laneId) {
            return {
              ...lane,
              cards: newCards,
            };
          }
          return lane;
        }),
      });
    },
    [data]
  );

  // Function to update the order of the the lanes
  const updateLaneOrder = useCallback(
    (laneId, newIndex) => {
      const lane = data.lanes.find((lane) => lane.id === laneId);
      const oldIndex = data.lanes.indexOf(lane);
      const newLanes = [...data.lanes];
      newLanes.splice(oldIndex, 1);
      newLanes.splice(newIndex, 0, lane);
      setData({
        ...data,
        lanes: newLanes,
      });
    },
    [data]
  );

  //  Function that will remove a card from the lane by id
  const removeCard = useCallback(
    (listId, cardId) => {
      const lane = data.lanes.find((list) => list.id === listId);
      lane.cards = lane.cards.filter((card) => card.id !== cardId);
      setData({ ...data });
    },
    [data, setData]
  );

  //  Function that will add a new card to the lane
  const addNewCard = useCallback(
    (listId) => {
      const lane = data.lanes.find((list) => list.id === listId);
      const newCard = {
        id: uuidv4(),
        title: "",
        isDraggable: false,
        description: "",
        label: "",
        metadata: {},
        members: [
          {
            id: uuidv4(),
            name: "Something",
            email: "email@g.com",
          },
        ],
        comments: [],
      };
      lane.cards.unshift(newCard);
      setData({ ...data });
    },
    [data, setData]
  );

  //  Function for onDragEnd callback for react-beautiful-dnd
  const updateBoard = ({ destination, source, draggableId }) => {
    if (!destination) {
      return;
    }

    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }

    // If the card is moved to a different lane
    if (destination.droppableId !== source.droppableId) {
      const sourceLane = data.lanes.find(
        (lane) => lane.id === source.droppableId
      );
      const targetLane = data.lanes.find(
        (lane) => lane.id === destination.droppableId
      );
      const card = sourceLane.cards.find((card) => card.id === draggableId);
      sourceLane.cards = sourceLane.cards.filter(
        (card) => card.id !== draggableId
      );
      targetLane.cards.splice(destination.index, 0, card);
      setData({ ...data });
      return;
    }
    // If the card is moved to a different index in the same lane
    const lane = data.lanes.find((lane) => lane.id === destination.droppableId);
    const newCards = [...lane.cards];
    newCards.splice(source.index, 1);
    newCards.splice(
      destination.index,
      0,
      lane.cards.find((card) => card.id === draggableId)
    );
    setData({
      ...data,
      lanes: data.lanes.map((lane) => {
        if (lane.id === destination.droppableId) {
          return {
            ...lane,
            cards: newCards,
          };
        }
        return lane;
      }),
    });
  };

  //  Function that will update a card's title
  const updateCardTitle = useCallback(
    (cardId, title) => {
      const card = getCardDetails(cardId);
      card.title = title;
      setData({ ...data });
    },
    [data, setData]
  );

  //  Function that will update a card's description
  const updateCardDescription = useCallback(
    (cardId, description) => {
      let card = getCardDetails(cardId);
      card.description = description;
      card.isDraggable = true;
      setData({ ...data });
    },
    [data, setData]
  );

  //  Function that will update a card's label
  const updateCardLabel = useCallback(
    (listId, cardId, label) => {
      const lane = data.lanes.find((list) => list.id === listId);
      const card = lane.cards.find((card) => card.id === cardId);
      card.label = label;
      setData({ ...data });
    },
    [data, setData]
  );

  return {
    data,
    addNewCard,
    removeCard,
    updateBoard,
    updateCardTitle,
    updateCardDescription,
    updateCardLabel,
    updateCardOrder,
    updateLaneOrder,
    getCardDetails
  };
};
