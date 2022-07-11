import React, { useCallback, useEffect, useState, useRef } from "react";
import { Row, SectionHeader, UserSelectDropdown } from "../ui";
import { KanbanProvider, withKanbanContext } from "./contexts/kanban.context";
import Board from "./Board.component";
import { Helmet } from "react-helmet";
import { MdFilterList, MdClose } from "react-icons/md";
import { useAxios } from "../../hooks";
import { useOutsideAlerter } from "./hooks";
import { StyledTag, StyledTags } from "./Kanban.styles";

const Tags = ({ tags, handleTagRemove }) => {
  return (
    <StyledTags>
      {tags.map((tag, index) => (
        <StyledTag key={index} >
          {tag.name}{" "}
          <span
            onClick={() => {
              handleTagRemove(tag._id);
            }}
          >
            {" "}
            <MdClose />
          </span>
        </StyledTag>
      ))}
    </StyledTags>
  );
};

const KanbanHeader = withKanbanContext(({ data, setFilterUsers }) => {
  const [showFilter, setShowFilter] = useState(false);
  const [filterByAuthors, setFilterByAuthors] = useState([]);
  const [users, getUsers] = useAxios({ url: `/users`, method: "GET" });

  const componentRef = useRef();
  useOutsideAlerter(componentRef, () => setShowFilter(false)); // close filter when clicked outside

  useEffect(() => {
    getUsers();
  }, [getUsers]);

  useEffect(() => {
    if (filterByAuthors) {
      setFilterUsers(filterByAuthors);
    }
  }, [filterByAuthors]);

  const kanban_header_actions = [
    {
      id: "filter",
      text: "Filter",
      icon: <MdFilterList />,
      clickHandler: useCallback(() => {
        setShowFilter(!showFilter);
      }, [showFilter]),
    },
  ];

  const handleTagRemove = (tagId) => {
    // remove the user feom filterByAuthors, based on the user id
    const newFilterByAuthors = filterByAuthors.filter(
      (user) => user._id !== tagId
    );
    setFilterByAuthors(newFilterByAuthors);
  }

  return (
    <div style={{ position: "relative", marginBottom:"15px" }}>
      <SectionHeader
        heading="Projects"
        actions={kanban_header_actions}
        statusComponent={<Tags tags={filterByAuthors}  handleTagRemove={handleTagRemove}/>}
        on
      />
      {showFilter && (
        <UserSelectDropdown
          ref={componentRef}
          users={users.filter((user) =>{
            // filter users by the ones that are not already in the filterByAuthors
            return !filterByAuthors.find((filterUser) => filterUser._id === user._id);

          })}
          onSelectUser={(user) => {
            setFilterByAuthors([...filterByAuthors, user]);
            setShowFilter(false);
          }}
        />
      )}
    </div>
  );
});

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
