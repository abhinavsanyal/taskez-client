import { useCallback, useState } from "react";

// Custom hook that provides the state for the KanbanContext
export const useKanban = (_data) => {
  const [data, setData] = useState(_data);

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

  // Function that will add a card to the lane by id
  const addCard = useCallback(
    (listId, card) => {
      const lane = data.lanes.find((list) => list.id === listId);
      lane.cards.push(card);
      setData({ ...data });
    },
    [data, setData]
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

  //  Function that will move a card to a different lane
  const moveCard = useCallback(
    (sourceLaneId, targetLaneId, cardId) => {
      const sourceLane = data.lanes.find((list) => list.id === sourceLaneId);
      const targetLane = data.lanes.find((list) => list.id === targetLaneId);
      const card = sourceLane.cards.find((card) => card.id === cardId);
      targetLane.cards.push(card);
      sourceLane.cards = sourceLane.cards.filter((card) => card.id !== cardId);
      setData({ ...data });
    },
    [data, setData]
  );

  //  Function that will update a card's metadata
  const updateCard = useCallback(
    (listId, cardId, metadata) => {
      const lane = data.lanes.find((list) => list.id === listId);
      const card = lane.cards.find((card) => card.id === cardId);
      card.metadata = metadata;
      setData({ ...data });
    },
    [data, setData]
  );

  //  Function that will update a card's title
  const updateCardTitle = useCallback(
    (listId, cardId, title) => {
      const lane = data.lanes.find((list) => list.id === listId);
      const card = lane.cards.find((card) => card.id === cardId);
      card.title = title;
      setData({ ...data });
    },
    [data, setData]
  );

  //  Function that will update a card's description
  const updateCardDescription = useCallback(
    (listId, cardId, description) => {
      const lane = data.lanes.find((list) => list.id === listId);
      const card = lane.cards.find((card) => card.id === cardId);
      card.description = description;
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
    addCard,
    removeCard,
    moveCard,
    updateCard,
    updateCardTitle,
    updateCardDescription,
    updateCardLabel,
    updateCardOrder,
    updateLaneOrder,
  };
};
