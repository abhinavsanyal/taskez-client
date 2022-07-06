import { Authentication, Dashboard } from "./pages";
import { Kanban } from "./features";
import { Route, Routes, useNavigate } from "react-router-dom";

// All App routes definitions are here. To add a new route, add it to the array below.
const app_routes = [
  {
    name: "login",
    path: "/",
    child: [],
    component: Authentication,
  },
  {
    name: "dashboard",
    path: "blog",
    child: [
      {
        name: "kanban",
        path: "kanban",
        child: [],
        component: Kanban,
      },
    ],
    component: Dashboard,
  },
];

// Recursively create nested Roue components from the app_routes array.

const _createRoutes = (routes) => {
  return routes.map((route, index) => {
    if (route.child.length > 0) {
      route.child.map((_child)  => {
       
      return _createRoutes(route.child) /* recursive call */;
    });
    }
    return <Route key={index} path={route.path} element={route.component} />;
  });
};

export const NestedRoutes = () => <Routes>{_createRoutes(app_routes)}</Routes>;
