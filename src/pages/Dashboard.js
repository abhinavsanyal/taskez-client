import React from "react";
import { Outlet } from "react-router-dom";
import { Sidebar, Row, Col, Header } from "../features";

const Dashboard = () => {
  return (
    <Row fullScreen>
      <Col size={1} justify={"flex-start"}>
        <Sidebar />
      </Col>
      <Col size={3} justify={"flex-start"}>
        <Row direction={"column"}>
          <Row  size={1}>
             <Header />
          </Row>
          <Row background={"orange"} size={4}>
          <Outlet />
          </Row>
        </Row>
      </Col>
    </Row>
  );
};

export default Dashboard;
