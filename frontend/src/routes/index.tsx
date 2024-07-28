import Details from "../pages/Details";
import Repos from "../pages/Repos";
import Users from "../pages/Users";

import { RoutesConfig } from "@shared/types";
import { Navigate } from "react-router-dom";

const routes: RoutesConfig[] = [
  {
    path: "/",
    element: <Navigate to="/users-list" replace />,
  },
  {
    path: "/users-list",
    element: <Users />,
  },
  {
    path: "/user-detail",
    element: <Details />,
  },
  {
    path: "/user-repos",
    element: <Repos />,
  },
];

export default routes;
