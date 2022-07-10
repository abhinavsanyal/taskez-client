import React from "react";
import {  Row, Col,  Text} from "..";
import { StyledAvatar, StyledAvatars, StytledAvatarItem } from "./Avatar.styles";
import fallback_avatar from "./fallback_avatar.svg";

export const Avatar = ({ size, src }) => {
  const url = src !== "" && src !== undefined ? src : fallback_avatar;
  return <StyledAvatar src={url} width={size} height={size} />;
};

export const User = ({ name , avatarUrl = '', reverse= false , textType = 'subheading', iconSize = 45 }) => {
  // render the user name and the Avatar based on the reverse flag
  return (
    <Row>
      <Col size={reverse ? 1:3} justify={reverse ? "flex-start":"flex-end"}>
        { reverse ?  <Avatar src={avatarUrl} size={iconSize} /> :  <Text type={textType}>{`${name}`}</Text>}
       
      </Col>
      <Col size={!reverse ? 1:3} justify={reverse ? "flex-start":"flex-end"}>
      { !reverse ?  <Avatar src={avatarUrl} size={iconSize} /> :  <Text type={textType}>{`${name}`}</Text>}
      </Col>
    
    </Row>
  );
};

export const AvatarList = ({ users = [], align, justify }) => {
  const filterUsers = (users) => (user, index) => {
    return index > 4 ? false : true;
  };
  return (
    <Row align={align} justify={justify}>
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
