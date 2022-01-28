import { useRoutes } from "react-router-dom";
import { HomePage, LoginPage } from "../pages";
import React from "react";
import ProtectedRoutes from "./ProtectedRoutes";
export default () =>useRoutes([
  {
    path: "login",
    element: <LoginPage/>
  },
  {
    path: '/',
    element: <ProtectedRoutes/>,
    children: [
      {
        path: "/",
        element: <HomePage/>
      },
    ],
  },
])
