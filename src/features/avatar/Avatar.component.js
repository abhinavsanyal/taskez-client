import { SearchInput, Row, Col, Form , Text} from "../ui";
import { StyledAvatar, StyledAvatars, StytledAvatarItem } from "./Avatar.styles";

export const Avatar = ({ size, src }) => {
  return <StyledAvatar src={src} width={size} height={size} />;
};

export const User = ({ name = "Abhinav", avatarUrl = '' }) => {
  // render the user name and the Avatar
  return (
    <Row>
      <Col size={3} justify={"flex-end"}>
        <Text type="subheading">{`Hi ${name}`}</Text>
      </Col>
      <Col size={1} justify={"flex-start"}>
        <Avatar src={avatarUrl} size={45} />
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
              <StytledAvatarItem key={user.id} lineHeight={"1.8rem"}>
                {users.length - index}
              </StytledAvatarItem>
            );
          }
          return (
            <StytledAvatarItem key={user.id}>
              <Avatar key={user.id} src={user.avatar} size={26} />
            </StytledAvatarItem>
          );
        })}
      </StyledAvatars>
    </Row>
  );
};
