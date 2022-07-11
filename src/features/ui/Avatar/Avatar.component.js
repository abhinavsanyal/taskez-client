import React, { useState } from "react";
import { Row, Col, Text, FormField, Stack } from "..";
import {
  StyledAvatar,
  StyledAvatars,
  StytledAvatarItem,
} from "./Avatar.styles";
import fallback_avatar from "./fallback_avatar.svg";
import { StyledSearchDropownWrapper } from "./Avatar.styles";

export const Avatar = ({ size, src }) => {
  const url = src !== "" && src !== undefined ? src : fallback_avatar;
  return <StyledAvatar src={url} width={size} height={size} />;
};

export const User = ({
  name,
  avatarUrl = "",
  reverse = false,
  textType = "subheading",
  iconSize = 45,
}) => {
  // render the user name and the Avatar based on the reverse flag
  return (
    <Row>
      <Col size={reverse ? 1 : 3} justify={reverse ? "flex-start" : "flex-end"}>
        {reverse ? (
          <Avatar src={avatarUrl} size={iconSize} />
        ) : (
          <Text type={textType}>{`${name}`}</Text>
        )}
      </Col>
      <Col
        size={!reverse ? 1 : 3}
        justify={reverse ? "flex-start" : "flex-end"}
      >
        {!reverse ? (
          <Avatar src={avatarUrl} size={iconSize} />
        ) : (
          <Text  style={{whiteSpace:"nowrap"}} type={textType}>{`${name}`}</Text>
        )}
      </Col>
    </Row>
  );
};

export const AvatarList = ({ users = [], align, justify }) => {
  const filterUsers = (users) => (user, index) => {
    return index > 4 ? false : true;
  };
  return (
    <Row align={align} justify={justify} style={{ cursor: "pointer" }}>
      <StyledAvatars>
        {users.filter(filterUsers(users)).map((user, index) => {
          if (index > 3) {
            return (
              <StytledAvatarItem key={user._id} lineHeight={"1.8rem"}>
                {users.length - index}
              </StytledAvatarItem>
            );
          }
          return (
            <StytledAvatarItem key={user._id}>
              <Avatar key={user.id} src={user.avatar} size={26} />
            </StytledAvatarItem>
          );
        })}
      </StyledAvatars>
    </Row>
  );
};

// assumes that the user will have a name ,and an email field
export const UserSelectDropdown = ({ onSelectUser, users }) => {
  const [searchQuery, setSearchQuery] = useState(null);

  return (
    <StyledSearchDropownWrapper>
      <Row direction="column">
        <Stack>
          <FormField
            type="text"
            name="filter"
            placeholder={"Search user"}
            value={searchQuery}
            onChange={(e) => {
              setSearchQuery(e.target.value);
            }}
          />
        </Stack>
        {users &&
          users
            .filter((user) => {
              // return true if user name or email matches the search query
              if (user && user.name && searchQuery) {
                return (
                  user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                  user.email.toLowerCase().includes(searchQuery.toLowerCase())
                );
              }
              return true;
            })
            .map((user) => {
              return (
                <Stack
                  key={user._id}
                  direction="row"
                  margin="0 15px"
                  onClick={() => {
                    onSelectUser(user);
                    setSearchQuery(null);
                  }}
                >
                  <User
                    name={user.name}
                    avatarUrl={user.avatar}
                    reverse
                    iconSize={26}
                    textType="description"
                  />
                </Stack>
              );
            })}
      </Row>
    </StyledSearchDropownWrapper>
  );
};
