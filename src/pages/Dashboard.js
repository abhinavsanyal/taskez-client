import React from "react";
import { Outlet } from "react-router-dom";
import { Sidebar, Row, Col, Stack, Header, SectionHeader } from "../features";

const Dashboard = () => {
  return (
    <Row fullScreen>
      <Col size={0.2} justify={"flex-start"}>
        
        <Sidebar />
      </Col>
      <Col size={0.8} justify={"flex-start"} margin="0 30px">
        <Row direction={"column"}>
          <Row  size={1}>
             <Header />
          </Row>
          <Row size={5}>
            <Outlet />
          </Row>
        </Row>
      </Col>
    </Row>
  );
};

export default Dashboard;
