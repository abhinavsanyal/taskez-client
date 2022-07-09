import React, { useEffect } from "react";
import logoSrc from "../assets/logo.svg";
import { useNavigate } from "react-router-dom";
import { Col, Row, Stack, Text } from "../ui";

import { menus , menus_footer} from "./constants";

const NavMenu = ({ menu, handleClick, isActive }) => {
  return (
    <Row onClick={() => handleClick(menu.id)} borderRight={isActive ?" 4px solid #329C89":"none"} margin="15px 0">
      <Col size={0.1} justify="flex-start" color={isActive ?"#212121":"#9A9A9A"}>
        {menu.icon}
      </Col>
      <Col justify="flex-start" size={0.9}>
      <Text type="subheading"  color={isActive ?"#212121":"#9A9A9A"} fontWeight={ isActive ? "500":"400" }>{` ${menu.name}`}</Text>
      </Col>
    </Row>
  );
};

export const Sidebar = () => {
  const [activeMenu, setActiveMenu] = React.useState("projects");
  const navigate = useNavigate();

  const handleNavigation = (id) => {
    navigate(`/dashboard/${id}`);
  };

  useEffect(() => {
   handleNavigation(activeMenu);
  }, [activeMenu]);

  return (
    <Row margin="0 0 0 2rem" borderRight="1.5px solid #F0F0F0">
      <Row direction={"column"}>
        <Row size={1} align="center">
          <div className="sidebar-header-logo">
            <img src={logoSrc} alt="logo" />
          </div>
        </Row>
        <Row size={4} direction={"column"}>
          <Stack>
            {menus.map((menu, index) => {
              return (
                <NavMenu key={menu.id} menu={menu} handleClick={setActiveMenu} isActive={ menu.id === activeMenu} />
              );
            })}
          </Stack>
        </Row>
        <Row size={1} direction={"column"}>
          <Stack>
            {menus_footer.map((menu, index) => {
              return (
                <NavMenu key={menu.id} menu={menu} handleClick={setActiveMenu} isActive={ menu.id === activeMenu} />
              );
            })}
          </Stack>
        </Row>
      </Row>
    </Row>
  );
};
