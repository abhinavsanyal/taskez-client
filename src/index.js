import React from "react";
import ReactDOM from "react-dom/client";
import { createGlobalStyle } from "styled-components";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Dashboard, Authentication } from "./pages";
import { Kanban } from "./features";
import { UnderConstruction } from "./features";
import { AxiosInstanceProvider } from "./hooks";
import PrivateRoutes from "./hooks/ProtectedRoutes";

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
  <AxiosInstanceProvider config={{ baseURL: process.env.REACT_APP_API_BASE_URL || "http://localhost:3001/api/" }}>
    <GlobalStyle />
    <Router>
      <Routes>
        <Route element={<PrivateRoutes />}>
          <Route path="/" element={<Dashboard />}>
            <Route path="projects" element={<Kanban />} />
            <Route path="*" element={<UnderConstruction />} />
          </Route>
        </Route>
        <Route path="/auth" element={<Authentication />} />
      </Routes>
    </Router>
  </AxiosInstanceProvider>
);
