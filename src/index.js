import React from "react";
import ReactDOM from "react-dom/client";
import { createGlobalStyle } from "styled-components";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { NestedRoutes } from "./routes";
import { Dashboard, Authentication } from "./pages";
import { Kanban } from "./features";
import { UnderConstruction } from "./features";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
    font-size: 16px;
    color: #1A3B58;
    background-color: #FEFEFE;

  }
`;

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <GlobalStyle />
    <Router>
      <Routes>
        <Route path="/" element={<Authentication />} />
        <Route  path="dashboard" element={<Dashboard />}>
          <Route path="projects" element={<Kanban />} />
          <Route path="*" element={<UnderConstruction />} />
        </Route>
      </Routes>
    </Router>
  </>
);
