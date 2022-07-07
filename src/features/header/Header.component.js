import React from "react";
import { SearchInput, Row, Col, Form , Text} from "../ui";
import { Avatar, AvatarList, User } from "../avatar";
import avatar1 from "../assets/avatar1.svg";
import avatar2 from "../assets/avatar2.svg";
import avatar3 from "../assets/avatar3.svg";
import avatar4 from "../assets/avatar4.svg";

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
  }
];

// export const Avatar = ({ size, src }) => {
//   return <StyledAvatar src={src} width={size} height={size} />;
// };

// export const User = ({ name = "Abhinav", avatarUrl = avatar3 }) => {
//   // render the user name and the Avatar
//   return (
//     <Row>
//       <Col size={3} justify={"flex-end"}>
//         <Text type="subheading">{`Hi ${name}`}</Text>
//       </Col>
//       <Col size={1} justify={"flex-start"}>
//         <Avatar src={avatarUrl} size={45} />
//       </Col>
//     </Row>
//   );
// };

// export const AvatarList = ({ users = _users, align, justify }) => {
//     const filterUsers = (users) => (user,index) => {
//         return index> 4 ? false : true;
//     }
//   return (
//     <Row align={align} justify={justify}>
//       <StyledAvatars>
//         {users.filter(filterUsers(users)).map((user, index) => {
//             if(index > 3 ){
//                 return  <StytledAvatarItem key={user.id} lineHeight={ "1.8rem"}>
//                     {users.length - index }
//               </StytledAvatarItem> ;
//             }
//             return (
//                 <StytledAvatarItem key={user.id}>
//                   <Avatar key={user.id} src={user.avatar} size={26} />
//                 </StytledAvatarItem>
//               )
            
//         })}
//       </StyledAvatars>
//     </Row>
//   );
// };

export const Header = () => {
  // handleSearchChange fuction is used to handle the search input change
  const handleSearchChange = (e) => {
    console.log(e.target.value);
  };
  return (
    <Row >
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
        <AvatarList users={_users} align={"center"} justify={"end"} />
      </Col>

      <Col size={2}>
        <User avatarUrl={avatar4}/>
      </Col>
    </Row>
  );
};
