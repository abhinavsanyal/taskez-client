import React,{ useContext, useEffect} from "react";
import { SearchInput, Row, Col, Form , AvatarList, User} from "../ui";
import avatar1 from "../assets/avatar1.svg";
import avatar2 from "../assets/avatar2.svg";
import avatar3 from "../assets/avatar3.svg";
import avatar4 from "../assets/avatar4.svg";

import { useAxios, AxiosContext } from "../../hooks";

const _users = [
  {
    id: 1,
    name: "John Doe",
    avatar: avatar1,
  },
  {
    id: 2,
    name: "Jane Doe",
    avatar: avatar2,
  },
  {
    id: 3,
    name: "Jack Doe",
    avatar: avatar3,
  },
  {
    id: 4,
    name: "Jill Doe",
    avatar: avatar4,
  },
  {
    id: 5,
    name: "John Dose",
    avatar: avatar1,
  },
  {
    id: 6,
    name: "Peter parker",
    avatar: avatar3,
  },
  {
    id: 7,
    name: "Peter parker",
    avatar: avatar3,
  },
  {
    id: 8,
    name: "Peter parker",
    avatar: avatar3,
  },
  {
    id: 9,
    name: "Peter parker",
    avatar: avatar3,
  },
  {
    id: 10,
    name: "Peter parker",
    avatar: avatar3,
  },
  {
    id: 10,
    name: "Peter parker",
    avatar: avatar3,
  },
];

export const Header = () => {
  const { currentUser } = useContext(AxiosContext);
  const [users, getUsers ] = useAxios({ url :`/users`, method: "GET" });
  useEffect(() => {
    getUsers();
  }, []);


  // handleSearchChange fuction is used to handle the search input change
  const handleSearchChange = (e) => {
    console.log(e.target.value);
  };
  return (
    <Row>
      <Col size={3} align={"center"}>
        <Form>
          <Row relative align={"center"}>
            <SearchInput
              align={"center"}
              placeholder={"Search"}
              placeholder_weight="400"
              placeholder_size="17px"
              placeholder_line_height="101.1%"
        
            />
          </Row>
        </Form>
      </Col>

      <Col size={2}>
        <AvatarList users={users ? users : []  } align={"center"} justify={"end"} />
      </Col>

      <Col size={2}>
        <User   name={currentUser? `Hi ${currentUser.name}` : ""} avatarUrl={currentUser ? currentUser.avatar : ""} />
      </Col>
    </Row>
  );
};
